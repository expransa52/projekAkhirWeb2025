document.addEventListener('DOMContentLoaded', () => {
    const halamanLogin = document.getElementById('halaman_login');
    const sidebar = document.getElementById('sidebar');  
    const mainContent = document.getElementById('mainContent');  
    const showSidebarButton = document.getElementById('showSidebar'); 
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const eyeIcon = document.getElementById('eyeIcon');

    const commonPassword = 'siper01';
    console.log(`Password untuk login (DEMO): ${commonPassword}`);

    if (togglePassword && passwordInput && eyeIcon) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            eyeIcon.classList.toggle('bi-eye');
            eyeIcon.classList.toggle('bi-eye-slash');
        });
    }
  
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const password = passwordInput.value.trim();

            if (password === commonPassword) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Berhasil',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    window.location.href = 'media_pbl.html';
                });
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: 'USERNAME atau PASSWORD salah',
                    showConfirmButton: true,
                    confirmButtonText: 'Coba Lagi',
                    confirmButtonColor: '#dc3545',
                    allowOutsideClick: false,
                    allowEscapeKey: true
                });
            }
        });
    }
});
