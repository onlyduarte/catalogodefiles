const apiKey = 'bfa80938';
const frmPesquisa = document.querySelector("form");

frmPesquisa.onsubmit = (ev) =>{
    ev.preventDefault()
    const pesquisa = ev.target.pesquisa.value;

    if (pesquisa == ""){
        alert('Preencha o campo!')
        return;
    }
    fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${apiKey}`)
    .then(result => result.json())
    .then(jsgit remote add origin https://github.com/onlyduarte/catalogodefiles.giton => carregaLista(json));
}
const carregaLista = (json) =>{
    const lista = document.querySelector("div.lista");
    lista.innerHTML = "";

    if (!json.Response == "False") {
        alert('Nenhum filme encontrado')
        return;
    }

    json.Search.forEach(element => {
        console.log(element);

       let item = document.createElement("div");
       item.classList.add("item");

       item.innerHTML = `<img src="${element.Poster}"/> <h3>${element.Title}</h3> <h4>Ano: ${element.Year} </h4> <h4>${element.Type}</h4>`

       lista.appendChild(item);
    });
}