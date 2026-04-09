const clipCards = document.querySelectorAll('.clip-card');
const modal = document.getElementById('clipModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const clipVideo = document.getElementById('clipVideo');
const closeClip = document.getElementById('closeClip');
const previewVideos = document.querySelectorAll('.clip-preview');
const staggerGroups = document.querySelectorAll('.stagger-group');
const livepixWidget = document.querySelector('.livepix-widget');
const livepixToggle = document.getElementById('livepixToggle');
const livepixPanel = document.getElementById('livepixPanel');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const supportsHoverPreview = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

let activeClip = '';
let modalCloseTimeout = null;
let livepixOpen = false;

function setLivepixOpen(nextOpen) {
    if (!livepixWidget || !livepixToggle || !livepixPanel) {
        return;
    }

    livepixOpen = nextOpen;
    livepixWidget.classList.toggle('is-open', nextOpen);
    livepixToggle.setAttribute('aria-expanded', String(nextOpen));
    livepixPanel.setAttribute('aria-hidden', String(!nextOpen));
}

function closeModal() {
    if (!modal || !clipVideo) {
        return;
    }

    if (modalCloseTimeout) {
        clearTimeout(modalCloseTimeout);
        modalCloseTimeout = null;
    }

    clipVideo.pause();
    clipVideo.removeAttribute('src');
    clipVideo.load();
    modal.classList.remove('is-open');

    if (!prefersReducedMotion) {
        modalCloseTimeout = window.setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            modalCloseTimeout = null;
        }, 220);
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    document.body.classList.remove('overflow-hidden', 'modal-open');
    activeClip = '';
}

function openModal(videoSrc, title) {
    if (!modal || !clipVideo || !videoSrc) {
        return;
    }

    if (modalCloseTimeout) {
        clearTimeout(modalCloseTimeout);
        modalCloseTimeout = null;
    }

    // Lazy loading: o arquivo do clipe so e definido quando o usuario clica.
    clipVideo.src = videoSrc;
    clipVideo.load();
    modalTitle.textContent = title || 'Clip';
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (!prefersReducedMotion) {
        requestAnimationFrame(() => {
            modal.classList.add('is-open');
        });
    } else {
        modal.classList.add('is-open');
    }
    document.body.classList.add('overflow-hidden', 'modal-open');
    activeClip = videoSrc;
}

clipCards.forEach((card) => {
    card.addEventListener('click', () => {
        const videoSrc = card.getAttribute('data-video');
        const title = card.getAttribute('data-title');

        if (!videoSrc) {
            return;
        }

        openModal(videoSrc, title);
    });
});

if (closeClip) {
    closeClip.addEventListener('click', closeModal);
}

if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeModal);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
        closeModal();
    }

    if (event.key === 'Escape' && livepixOpen) {
        setLivepixOpen(false);
    }
});

if (livepixToggle) {
    livepixToggle.addEventListener('click', () => {
        setLivepixOpen(!livepixOpen);
    });
}

document.addEventListener('click', (event) => {
    if (!livepixWidget || !livepixOpen) {
        return;
    }

    const target = event.target;
    if (target instanceof Node && !livepixWidget.contains(target)) {
        setLivepixOpen(false);
    }
});

staggerGroups.forEach((group) => {
    const children = group.children;
    Array.from(children).forEach((child, index) => {
        child.classList.add('reveal');
        child.style.setProperty('--reveal-delay', `${index * 70}ms`);
    });
});

const revealSections = document.querySelectorAll('.reveal');

if (prefersReducedMotion) {
    revealSections.forEach((section) => {
        section.classList.add('is-visible');
    });
} else {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.18,
            rootMargin: '0px 0px -60px 0px'
        }
    );

    revealSections.forEach((section) => {
        revealObserver.observe(section);
    });
}

const previewTimers = new WeakMap();

function clearPreviewTimer(preview) {
    const timerId = previewTimers.get(preview);
    if (timerId) {
        clearTimeout(timerId);
        previewTimers.delete(preview);
    }
}

function ensurePreviewSource(preview) {
    const source = preview.querySelector('source');
    const sourcePath = source?.getAttribute('data-src');

    if (source && sourcePath && !source.getAttribute('src')) {
        source.setAttribute('src', sourcePath);
        preview.load();
    }
}

function stopPreview(preview) {
    clearPreviewTimer(preview);
    preview.pause();
    const ownerCard = preview.closest('.clip-card');
    ownerCard?.classList.remove('is-previewing');
}

function stopOtherPreviews(currentPreview) {
    previewVideos.forEach((preview) => {
        if (preview !== currentPreview) {
            stopPreview(preview);
        }
    });
}

function playPreviewSegment(preview) {
    const card = preview.closest('.clip-card');
    const start = Number(card?.getAttribute('data-preview-start') || 0);
    const duration = Number(card?.getAttribute('data-preview-duration') || 2.8);

    const playSlice = () => {
        const safeStart = Number.isFinite(start) && start >= 0 ? start : 0;
        const safeDuration = Number.isFinite(duration) && duration > 0 ? duration : 2.8;
        const boundedStart = Number.isFinite(preview.duration) && safeStart >= preview.duration ? 0 : safeStart;

        preview.currentTime = boundedStart;
        preview.play().catch(() => {
            // Em navegadores mais restritivos, o preview pode ficar em frame estatico.
        });
        card?.classList.add('is-previewing');

        clearPreviewTimer(preview);
        const timerId = setTimeout(() => {
            preview.pause();
            try {
                preview.currentTime = boundedStart;
            } catch {
                // Se o navegador bloquear o seek imediato, mantemos o frame atual.
            }
        }, safeDuration * 1000);
        previewTimers.set(preview, timerId);
    };

    if (preview.readyState >= 1) {
        playSlice();
        return;
    }

    const onMetadata = () => {
        preview.removeEventListener('loadedmetadata', onMetadata);
        playSlice();
    };

    preview.addEventListener('loadedmetadata', onMetadata);
}

clipCards.forEach((card) => {
    const preview = card.querySelector('.clip-preview');

    if (!preview) {
        return;
    }

    if (supportsHoverPreview && !prefersReducedMotion) {
        card.addEventListener('mouseenter', () => {
            ensurePreviewSource(preview);
            stopOtherPreviews(preview);
            playPreviewSegment(preview);
        });

        card.addEventListener('mouseleave', () => {
            stopPreview(preview);
        });

        card.addEventListener('focus', () => {
            ensurePreviewSource(preview);
            stopOtherPreviews(preview);
            playPreviewSegment(preview);
        });

        card.addEventListener('blur', () => {
            stopPreview(preview);
        });
    } else {
        ensurePreviewSource(preview);
    }
});
