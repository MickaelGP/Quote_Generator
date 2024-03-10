let btn = document.getElementById('btn');
let quote = document.getElementById('quote');
let author = document.getElementById('author');
let apiUrl = "http://api.quotable.io/random";


btn.addEventListener('click', ()=>{
    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      quote.innerText = data.content;
      author.innerText = data.author;
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données:', error);
    });
})