// Javascript commun à toutes les pages

AOS.init();


// fonction loader au chargement
document.addEventListener("DOMContentLoaded", (e)=>{
    let loader = document.getElementById("loader")
    setTimeout(()=>{
        loader.classList.add("loader-hidden")
        setTimeout(()=>{
            loader.classList.add("d-none")
        }, 500)
    }, 1200)
})

// récupération de l'input du burger par son selecteur css
let burger = document.querySelector(".burger")
// surveillance du click sur le burger et lance la fonction affiche menu
burger.addEventListener("click", (e) => {
	afficheMenu()
})

// récupération du menu par son selecteur css
let menu = document.querySelector(".menu")
let liens = menu.querySelectorAll(".nav-page")
liens.forEach(lien=>{
    lien.addEventListener("click",(e)=>{
        afficheMenu()
    })
})


// Ajout d'un écouteur d'événements pour fermer le menu en dehors de celui-ci
document.addEventListener("click", (e) => {
    // Vérifier si le clic n'a pas été fait dans le menu ou le burger
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
        // Fermer le menu
        removeMenu();
    }
});


function afficheMenu(){
// role : affiche le menu et modifie le logo burger
// parametre : rien
// retour : rien
	// enleve ou ajoute la class menu-ouvert
	menu.classList.toggle("menu-ouvert")
	// récupération du hero, main et footer
	let blurs = document.querySelectorAll(".menu-blur")
	// enleve ou ajoute la class blur2
	blurs.forEach(blur=>{
		blur.classList.toggle("blur2")
	})
	// recupération des 3 trait du burger
	let burgerTop = document.querySelector("span.top")
	let burgerMiddle = document.querySelector("span.middle")
	let burgerBottom = document.querySelector("span.bottom")
	// incline les trait haut et bas avec les class associé et fais s'échapper le trait du milieu
	burgerTop.classList.toggle("top-check")
	burgerMiddle.classList.toggle("middle-check")
	burgerBottom.classList.toggle("bottom-check")
}

function removeMenu(){
    // role : affiche le menu et modifie le logo burger
    // parametre : rien
    // retour : rien
        // enleve ou ajoute la class menu-ouvert
        menu.classList.remove("menu-ouvert")
        // récupération du hero, main et footer
        let blurs = document.querySelectorAll(".menu-blur")
        // enleve ou ajoute la class blur2
        blurs.forEach(blur=>{
            blur.classList.remove("blur2")
        })
        // recupération des 3 trait du burger
        let burgerTop = document.querySelector("span.top")
        let burgerMiddle = document.querySelector("span.middle")
        let burgerBottom = document.querySelector("span.bottom")
        // incline les trait haut et bas avec les class associé et fais s'échapper le trait du milieu
        burgerTop.classList.remove("top-check")
        burgerMiddle.classList.remove("middle-check")
        burgerBottom.classList.remove("bottom-check")
    }



// récupération du body
let body = document.querySelector("body")

// switch access
// récupération du bouton access
let switchAccess = document.getElementById("switch-access")
// récupération de l'image à changer
let btnAccess = document.getElementById("button-access")
// on surveille le changement sur le switch
switchAccess.addEventListener("change",(e)=>{
    // on change le datastyle et l'image affiché en fonction
    if(switchAccess.checked){
        body.setAttribute("data-style","access")
        btnAccess.classList.add("p-access-checked")
    }else{
        body.setAttribute("data-style","normal")
        btnAccess.classList.remove("p-access-checked")
    }
})