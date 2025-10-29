<script>
    // 1. Dapatkan elemen-elemen dari DOM
    const menuIcon = document.querySelector('.menu-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    // 2. Event Listener: Toggle Kelas 'active'
    menuIcon.addEventListener('click', function() {
        // classList.toggle('active') akan:
        // - Menambah kelas 'active' jika belum ada (blok akan muncul).
        // - Menghapus kelas 'active' jika sudah ada (blok akan hilang).
        dropdownMenu.classList.toggle('active');
    });

    // 3. Opsional: Tutup menu jika mengklik di luar area (Best Practice)
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = dropdownMenu.contains(event.target);
        const isClickOnIcon = menuIcon.contains(event.target);

        // Jika klik terjadi di luar menu DAN di luar ikon, hilangkan kelas 'active'
        if (!isClickInsideMenu && !isClickOnIcon) {
            dropdownMenu.classList.remove('active');
        }
    });
</script>
