document.getElementById('checkKhodam').addEventListener('click', function() {
    const images = [
        'https://panrita.news/wp-content/uploads/2021/09/8AB5C288-AD21-4854-9929-D5A4BD37158D.jpeg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzRBXtrGZupE7UQQ1CtcMvcaO0tj33soSQA&shttps://cdn.idntimes.com/content-images/post/20230409/20230409-131058-efec07791b6c7215e4670e51dc514388.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54NhQ0Bsai75IqOGqZyHqHvjJFJRvEtUZE9IZgrsSw8pNvIcP6fSrEdvyC_xpg7h2cac&usqp=CAU',
        'https://i.pinimg.com/200x150/f0/3b/69/f03b69918e67b771b68f6cf932761a84.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmbTYKaOe6gumlMyBQFfJ_ZE6-xJGvTXcThA&s',
        'https://www.blibli.com/friends-backend/wp-content/uploads/2024/02/B110049-Cover-Ras-Kucing-Munchkin-scaled.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRG_pTVzIzXLIopA77Dq80Uh--1gZQeOgl_w&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCBBa01DDD2QQcW5Li4pDsY85RYkhG3VDrgg&s',
        'https://i.pinimg.com/236x/d8/54/36/d8543639a430df547eb4879328c9240f.jpg',
    ];

    const messages = [
        "Khodam Anda adalah Monyet.",
        "Khodam Anda adalah Harimau.",
        "Khodam Anda adalah Gorila Angop.",
        "Khodam Anda adalah badak.",
        "Khodam Anda adalah Undur - Undur.",
        "Khodam Anda adalah Kucing Munchkin.",
        "Khodam Anda adalah Wedus ora tau adus.",
        "Khodam Anda adalah Icikiwir.",
        "Khodam Anda adalah Singo."
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    const selectedMessage = messages[randomIndex];

    const nama = document.getElementById('nama').value;
    const message = nama ? `${nama}, ${selectedMessage}` : selectedMessage;

    document.getElementById('khodamImage').src = selectedImage;
    document.getElementById('khodamMessage').textContent = message;

    document.getElementById('inputContainer').classList.add('hidden');
    document.getElementById('khodamResult').classList.remove('hidden');
});
