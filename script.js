document.addEventListener('DOMContentLoaded', () => {
    // 1. LOGIC GANTI TEKS (CARD 4)
    const textElement = document.getElementById('changing-text');
    const quotes = [
        "\"Stop random entry. Join grup trading Liquidity code!\"",
        "\"Analisa real, eksekusi bareng-bareng sekarang.\"",
        "\"Ubah kebiasaan gambling jadi trading yang presisi.\"",
        "\"Profit konsisten dimulai dari edukasi yang benar.\""
    ];
    
    let currentIndex = 0;

    function changeQuote() {
        // Tambahkan class fade out
        textElement.classList.add('text-fade-out');

        setTimeout(() => {
            // Ganti teks setelah fade out selesai
            currentIndex = (currentIndex + 1) % quotes.length;
            textElement.textContent = quotes[currentIndex];
            
            // Hapus fade out dan biarkan CSS menangani fade in
            textElement.classList.remove('text-fade-out');
        }, 500); // 500ms sesuai dengan durasi CSS transition
    }

    // Jalankan setiap 4 detik
    setInterval(changeQuote, 4000);

    // 2. LOGIC LOCAL TIME (CARD 2)
    function updateLocalTime() {
        const timeElement = document.getElementById('local-time');
        const now = new Date();
        // Format waktu Indonesia (WIB)
        const options = { 
            timeZone: 'Asia/Jakarta', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: false 
        };
        const formatter = new Intl.DateTimeFormat('en-GB', options);
        timeElement.textContent = formatter.format(now);
    }

    setInterval(updateLocalTime, 1000);
    updateLocalTime();

    // 3. SPOTLIGHT EFFECT (Opsional, jika belum ada)
    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const overlay = card.querySelector('.spotlight-overlay');
            if(overlay) {
                overlay.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 40%)`;
            }
        });
    });
});