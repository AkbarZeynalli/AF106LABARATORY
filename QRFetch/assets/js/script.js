document.getElementById('qrForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const inputText = document.getElementById('qrInput').value; 
    const qrCodeContainer = document.getElementById('qrCode'); 
    qrCodeContainer.innerHTML = '';
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputText)}`;
    const img = document.createElement('img');
    img.src = qrCodeUrl;
    img.alt = 'QR Code';
    qrCodeContainer.appendChild(img);
});