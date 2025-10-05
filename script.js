// ===================================
// Navegação e Menu Responsivo
// ===================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu mobile
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Scroll suave para seções
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Header com Efeito de Scroll
// ===================================

const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Adicionar sombra ao header ao rolar
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Animação de Contadores nas Estatísticas
// ===================================

const statCards = document.querySelectorAll('.stat-card[data-animate="counter"]');
let hasAnimated = false;

const animateCounter = (element, target) => {
    const duration = 2000; // 2 segundos
    const increment = target / (duration / 16); // 60 FPS
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            statCards.forEach(card => {
                const target = parseInt(card.getAttribute('data-target'));
                const numberElement = card.querySelector('.stat-number');
                animateCounter(numberElement, target);
            });
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

if (statCards.length > 0) {
    observer.observe(document.querySelector('.estatisticas'));
}

// ===================================
// Sistema de Tabs (Dicas de Segurança)
// ===================================

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remover classe active de todos os botões e conteúdos
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Adicionar classe active ao botão clicado e ao conteúdo correspondente
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// ===================================
// Quiz Interativo
// ===================================

const quizQuestions = document.querySelectorAll('.quiz-question');
const quizOptions = document.querySelectorAll('.quiz-option');
const nextButton = document.getElementById('nextQuestion');
const prevButton = document.getElementById('prevQuestion');
const restartButton = document.getElementById('restartQuiz');
const quizResult = document.querySelector('.quiz-result');
const scoreElement = document.getElementById('score');
const resultMessage = document.getElementById('resultMessage');

let currentQuestion = 0;
let score = 0;
let answers = [];

// Função para mostrar questão
const showQuestion = (index) => {
    quizQuestions.forEach((question, i) => {
        question.classList.remove('active');
        if (i === index) {
            question.classList.add('active');
        }
    });
    
    // Atualizar botões de navegação
    prevButton.disabled = index === 0;
    
    // Verificar se já respondeu esta questão
    if (answers[index] !== undefined) {
        nextButton.disabled = false;
    } else {
        nextButton.disabled = true;
    }
    
    // Esconder resultado
    quizResult.classList.remove('show');
};

// Adicionar event listeners às opções
quizOptions.forEach(option => {
    option.addEventListener('click', function() {
        const questionElement = this.closest('.quiz-question');
        const questionIndex = parseInt(questionElement.getAttribute('data-question')) - 1;
        const options = questionElement.querySelectorAll('.quiz-option');
        const feedback = questionElement.querySelector('.quiz-feedback');
        const isCorrect = this.getAttribute('data-correct') === 'true';
        
        // Desabilitar todas as opções após a escolha
        options.forEach(opt => {
            opt.disabled = true;
            opt.classList.remove('selected');
        });
        
        // Marcar opção selecionada
        this.classList.add('selected');
        
        // Mostrar feedback
        if (isCorrect) {
            this.classList.add('correct');
            feedback.textContent = '✓ Correto! Muito bem!';
            feedback.classList.add('correct');
            feedback.classList.remove('incorrect');
            answers[questionIndex] = true;
            score++;
        } else {
            this.classList.add('incorrect');
            feedback.textContent = '✗ Incorreto. Tente novamente!';
            feedback.classList.add('incorrect');
            feedback.classList.remove('correct');
            answers[questionIndex] = false;
            
            // Mostrar resposta correta
            options.forEach(opt => {
                if (opt.getAttribute('data-correct') === 'true') {
                    opt.classList.add('correct');
                }
            });
        }
        
        feedback.classList.add('show');
        
        // Habilitar botão próxima
        nextButton.disabled = false;
    });
});

// Botão próxima questão
nextButton.addEventListener('click', () => {
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        // Mostrar resultado final
        showResult();
    }
});

// Botão questão anterior
prevButton.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
});

// Mostrar resultado final
const showResult = () => {
    quizQuestions.forEach(q => q.classList.remove('active'));
    quizResult.classList.add('show');
    scoreElement.textContent = score;
    
    // Mensagem personalizada baseada na pontuação
    let message = '';
    const percentage = (score / quizQuestions.length) * 100;
    
    if (percentage === 100) {
        message = '🎉 Excelente! Você é um expert em segurança no trânsito!';
    } else if (percentage >= 80) {
        message = '👏 Muito bom! Você tem ótimos conhecimentos sobre trânsito!';
    } else if (percentage >= 60) {
        message = '👍 Bom trabalho! Continue aprendendo sobre segurança viária!';
    } else if (percentage >= 40) {
        message = '📚 Você pode melhorar! Revise as dicas de segurança!';
    } else {
        message = '⚠️ É importante estudar mais sobre segurança no trânsito!';
    }
    
    resultMessage.textContent = message;
    
    // Esconder botões de navegação
    nextButton.style.display = 'none';
    prevButton.style.display = 'none';
};

// Reiniciar quiz
restartButton.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    answers = [];
    
    // Resetar todas as questões
    quizQuestions.forEach(question => {
        const options = question.querySelectorAll('.quiz-option');
        const feedback = question.querySelector('.quiz-feedback');
        
        options.forEach(opt => {
            opt.disabled = false;
            opt.classList.remove('selected', 'correct', 'incorrect');
        });
        
        feedback.classList.remove('show');
    });
    
    // Mostrar botões de navegação
    nextButton.style.display = 'inline-block';
    prevButton.style.display = 'inline-block';
    nextButton.disabled = true;
    
    // Mostrar primeira questão
    showQuestion(0);
});

// Inicializar quiz
showQuestion(0);

// ===================================
// Animações ao Scroll (Intersection Observer)
// ===================================

const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
};

const scrollObserver = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

// Aplicar animação a elementos específicos
const elementsToAnimate = document.querySelectorAll('.stat-card, .dica-card, .info-card, .gallery-item');

elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    scrollObserver.observe(element);
});

// ===================================
// Efeito Parallax no Hero
// ===================================

const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// ===================================
// Smooth Reveal para Seções
// ===================================

const revealSections = () => {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

// Aplicar estilo inicial às seções
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// ===================================
// Animação de Entrada da Página
// ===================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// Efeito de Hover nos Cards
// ===================================

const cards = document.querySelectorAll('.stat-card, .dica-card, .info-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// Scroll to Top Button (Opcional)
// ===================================

const createScrollTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-top-btn';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: var(--secondary-color);
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    document.body.appendChild(button);
};

createScrollTopButton();

// ===================================
// Prevenção de Comportamento Padrão em Links Vazios
// ===================================

document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// ===================================
// Lazy Loading de Imagens (Fallback para navegadores antigos)
// ===================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Console Message
// ===================================

console.log('%c🚦 Trânsito Seguro Nova Friburgo', 'font-size: 20px; font-weight: bold; color: #FFC107;');
console.log('%cDesenvolvido pela Turma de Jogos Cooperativos - CEFET/RJ', 'font-size: 14px; color: #757575;');
console.log('%cJuntos por um trânsito mais consciente! 💛', 'font-size: 14px; color: #4CAF50;');

// ===================================
// Performance Monitoring (Opcional)
// ===================================

if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Página carregada em ${pageLoadTime}ms`);
        }, 0);
    });
}
