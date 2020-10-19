console.log('Client-side code running');

const downloadButton = document.getElementById("teste123");

downloadButton.addEventListener('click', test => {
    downloadButton.textContent = "em breve";
})