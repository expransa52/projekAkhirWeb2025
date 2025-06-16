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

const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
sidebarToggle.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
});

window.addEventListener('resize', function () {
    if (window.innerWidth <= 600) sidebar.classList.add('hide');
    else sidebar.classList.remove('hide');
})


document.querySelectorAll('#sidebar .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('#sidebar .nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        const page = this.getAttribute('data-page');
        showPage(page);

        if (window.innerWidth <= 600) sidebar.classList.add('hide');
    });
});

function showPage(page) {
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('d-none'));
    if (page === 'beranda') {
        document.title = "Media Interaktif Sistem Pernapasan pada Manusia - Beranda";
        document.getElementById('beranda-page').classList.remove('d-none');
    } else if (page === 'materi') {
        document.title = "Media Interaktif Sistem Pernapasan pada Manusia - Materi";
        document.getElementById('materi-page').classList.remove('d-none');
    } else if (page === 'kuis') {
        document.title = "Media Interaktif Sistem Pernapasan pada Manusia - Kuis";
        window.location.href = "kuis_pbl.html";
        document.getElementById('kuis-page').classList.remove('d-none');
    } else if (page === 'video') {
        document.title = "Media Interaktif Sistem Pernapasan pada Manusia - Video";
        document.getElementById('video-page').classList.remove('d-none');
    } else if (page === 'tentang') {
        document.title = "Media Interaktif Sistem Pernapasan pada Manusia - Tentang";
        document.getElementById('tentang-page').classList.remove('d-none');
    }
}

function logout() {
    Swal.fire({
        title: 'Log out',
        text: "Anda Yakin Ingin Keluar?",
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'Tidak',
        confirmButtonColor: '#ff5252',
        cancelButtonColor: '#ffe066',
        confirmButtonText: 'Iya, keluar!',
        customClass: {
            popup: 'pixel-swal',
            title: 'pixel-swal-title',
            content: 'pixel-swal-content',
            confirmButton: 'pixel-swal-confirm',
            cancelButton: 'pixel-swal-cancel'
        },
        buttonsStyling: false,
        backdrop: `  rgba(0,0,0,0.5)`
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Berhasil Keluar!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'pixel-swal',
                    title: 'pixel-swal-title',
                    icon: 'pixel-swal-icon'
                }
            }).then(() => {
                window.location.href = 'login_pbl.html';
            });
        }
    });
}

function keluar() {
    Swal.fire({
        title: 'Keluar Dari Kuis ?',
        icon: 'question',
        showCancelButton: true,
        cancelButtonText: 'Tidak',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Keluar!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Berhasil Keluar Dari Kuis!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                window.location.href = "media_pbl.html";
            });
        }
    });
}

const audioPlayer = document.getElementById('audioPlayer');
const volumeBtn = document.getElementById('volumeBtn');
const volumeIcon = document.getElementById('volume-icon');
const musicBtn = document.getElementById('musicBtn');
const musicIcon = document.getElementById('music-icon');

volumeBtn.addEventListener('click', () => {
  audioPlayer.muted = !audioPlayer.muted;
  if(audioPlayer.muted) {
    volumeIcon.classList.remove('fa-volume-up');
    volumeIcon.classList.add('fa-volume-mute');
  } else {
    volumeIcon.classList.remove('fa-volume-mute');
    volumeIcon.classList.add('fa-volume-up');
  }
});

musicBtn.addEventListener('click', () => {
  if(audioPlayer.paused) {
    audioPlayer.play();
    musicIcon.classList.remove('fa-music');
    musicIcon.classList.add('fa-pause');
  } else {
    audioPlayer.pause();
    musicIcon.classList.remove('fa-pause');
    musicIcon.classList.add('fa-music');
  }
});





