document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();

    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        const linkPage = link.getAttribute('href');

        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    const loginForm = document.querySelector('#loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', event => {
            event.preventDefault();
            window.location.href = 'dashboard.html';
        });
    }

    const appointmentForm = document.querySelector('#appointmentForm');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', event => {
            event.preventDefault();
            alert('Agendamento salvo com sucesso!');
            appointmentForm.reset();
        });
    }

    const clientForm = document.querySelector('#clientForm');

    if (clientForm) {
        clientForm.addEventListener('submit', event => {
            event.preventDefault();
            alert('Cliente cadastrado com sucesso!');
            clientForm.reset();
        });
    }

    const serviceForm = document.querySelector('#serviceForm');

    if (serviceForm) {
        serviceForm.addEventListener('submit', event => {
            event.preventDefault();
            alert('Serviço cadastrado com sucesso!');
            serviceForm.reset();
        });
    }

    const settingsForm = document.querySelector('#settingsForm');

    if (settingsForm) {
        settingsForm.addEventListener('submit', event => {
            event.preventDefault();
            alert('Configurações salvas com sucesso!');
        });
    }
});