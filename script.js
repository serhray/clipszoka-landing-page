// Funcionalidade de expandir/colapsar cards
const expandableCards = document.querySelectorAll('.card.expandable');

expandableCards.forEach(card => {
    card.addEventListener('click', function() {
        const content = this.querySelector('.card-content');
        
        // Toggle entre expanded e collapsed
        if (content.classList.contains('collapsed')) {
            content.classList.remove('collapsed');
            content.classList.add('expanded');
            this.classList.add('expanded');
        } else {
            content.classList.remove('expanded');
            content.classList.add('collapsed');
            this.classList.remove('expanded');
        }
    });
});

// Adicionar efeito de ripple nos cards clicáveis
const clickableCards = document.querySelectorAll('.card.clickable');
clickableCards.forEach(card => {
    card.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Adicionar estilos para o efeito ripple
const style = document.createElement('style');
style.textContent = `
    .card {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(145, 70, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
