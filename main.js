document.getElementById('encryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encryptText(inputText);
    displayOutput(encryptedText);
});

document.getElementById('decryptBtn').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decryptText(inputText);
    displayOutput(decryptedText);
});

function encryptText(text) {
    let encrypted = text.split('').map(char => {
        return String.fromCharCode(char.charCodeAt(0) + 3);
    }).join('');
    return encrypted;
}

function decryptText(text) {
    let decrypted = text.split('').map(char => {
        return String.fromCharCode(char.charCodeAt(0) - 3);
    }).join('');
    return decrypted;
}

function displayOutput(text) {
    const outputContent = document.getElementById('outputContent');
    outputContent.innerHTML = `
        <p>${text}</p>
        <button id="copyBtn">Copiar</button>
    `;

    document.getElementById('copyBtn').addEventListener('click', () => {
        copyToClipboard(text);
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}
