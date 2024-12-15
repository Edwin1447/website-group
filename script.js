function showDetails(subject) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalList = document.getElementById('modal-list');

    let details = [];
    if (subject === 'fisika') {
        details = ['Hukum gravitasi', 'Energi kinetik', 'Gelombang'];
    } else if (subject === 'biologi') {
        details = ['Struktur sel', 'Fotosintesis', 'Ekosistem'];
    } else if (subject === 'fenomena') {
        details = ['Gempa bumi', 'Tornado', 'Hujan'];
    } else if (subject === 'kimia') {
        details = ['Reaksi kimia', 'Ikatan kovalen', 'Larutan asam dan basa'];
    } else if (subject === 'matematika') {
        details = ['Aljabar', 'Geometri', 'Statistika'];
    } else if (subject === 'teknologi') {
        details = ['Perkembangan AI', 'Teknologi 5G', 'Internet of Things'];
    } else if (subject === 'astronomi') {
        details = ['Galaksi Bima Sakti', 'Lubang hitam', 'Tata Surya'];
    } else if (subject === 'geografi') {
        details = ['Peta topografi', 'Gunung berapi', 'Iklim global'];
    } else {
        details = ['Informasi belum tersedia'];
    }

    modalTitle.innerText = subject.charAt(0).toUpperCase() + subject.slice(1);
    modalList.innerHTML = '';
    details.forEach(detail => {
        const li = document.createElement('li');
        li.innerText = detail;
        modalList.appendChild(li);
    });

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}