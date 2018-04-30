console.log('trabalho multimidia-25-04-18.js');
const body = document.querySelector('body');
const nomemusica = document.querySelector('input#nomemusica');
const imagem = document.querySelector('input#imagem');
const audio = document.querySelector('input#audio');
const video = document.querySelector('input#video'); 
const tbody = document.querySelector('tbody');

body.addEventListener('submit',function(e){
e.preventDefault();
const nomemusica2 = nomemusica.value;
const imagem2 = imagem.value;
const audio2 = audio.value;
const video2 = video.value;
const buttom1 = `<button>Excluir</button>`;
const tds = `<td>${nomemusica2}</td><td>${imagem2}</td> <td>${audio2}</td> <td>${video2}</td> <td>${buttom1}</td> `;
const mudar = `<tr>${tds}</tr>`;
tbody.innerHTML += mudar;
}
);

tbody.addEventListener('click', function(e) { //ERROR???????
    console.log(e.target.tagName);
    if (e.target.tagName === 'BUTTON') {
        console.log('Excluir');
        if (confirm('Confirma?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
});


