const formTache = document.querySelector("#form-tache");
const inputTache = document.querySelector("#input-tache");
const templateTache = document.querySelector("#template-tache");
const listeTaches = document.querySelector("#liste-taches");

formTache.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(inputTache.value.trim());
    
    let texteTache = inputTache.value.trim();
    if (texteTache === "") {
        return;
    }

    const nouvelleTache = templateTache.content.cloneNode(true);
    const texteElement = nouvelleTache.querySelector(".tache-texte");
    texteElement.textContent = texteTache;
    listeTaches.appendChild(nouvelleTache);

});

