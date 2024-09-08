// Tableau contenant les informations des diapositives pour le carousel
const slides = [
    {
        "image":"./assets/images/slideshow/slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"./assets/images/slideshow/slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"./assets/images/slideshow/slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"./assets/images/slideshow/slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
];


const leftArrow = document.querySelector ('.arrow_left'); //Sélection des éléments du DOM pour la flèche gauche
const rightArrow = document.querySelector ('.arrow_right');  //Sélection des éléments du DOM pour la flèche droite
const dotsContainer = document.querySelector('.dots'); //Sélection des éléments du DOM pour les bullets points
const imageElement = document.querySelector('.banner-img'); // Sélection des éléments du DOM pour l'image de la bannière
const tagLineElement = document.querySelector('#banner p'); // Sélection des éléments du DOM pour le texte de la tagline
let currentSlideIndex = 0; // Index de la diapositive actuelle
let autoSlideInterval; // variable pour stocker l'intervalle 


// Création et ajout des points des bullets points dans le carousel
slides.forEach((slide, index) => {
	const dot = document.createElement ('div'); // Crée un élément div pour le point
	dot.classList.add('dot'); // Ajoute la classe 'dot' au point
	if (index === 0) {
		dot.classList.add ('dot_selected'); // Ajoute la classe 'dot_selected' pour le premier point sélectionné
	}
	dotsContainer.appendChild(dot); // Ajoute le point au conteneur des points
})


// Fonction pour afficher une diapositive spécifique
function showSlide(index) {
	imageElement.src = slides[index].image;   // Changer l'image affichée dans le carrousel
	tagLineElement.innerHTML = slides[index].tagLine; // Changer le texte associé à l'image

	// Mise à jour de l'état des bullets points
	document.querySelectorAll('.dot').forEach((dot, i) => {
		dot.classList.toggle('dot_selected', i === index); // Active le point correspondant à la diapositive actuelle
	})
}


// Fonction pour faire défiler automatiquement le carrousel toutes les 4 secondes
function startAutoSlide() {
	autoSlideInterval = setInterval(() => {
		currentSlideIndex = (currentSlideIndex === slides.length - 1) ? 0 : currentSlideIndex + 1; // On passe au slide suivant
		showSlide(currentSlideIndex); // Affiche le slide mis à jour
	}, 4000); // Le carrousel défile toutes les 4000 ms (4 secondes)
}


// Fonction pour arreter le défilement automatique
function stopAutoSlide() {
	clearInterval(autoSlideInterval); // Arrete l'intervalle
}


// Événement pour la flèche gauche (précédente)
leftArrow.addEventListener ('click', function() {
	console.log("Flèche gauche cliquée"); 
	stopAutoSlide(); // On arrete le défilement automatique
	// Passe à la diapositive précédente, ou à la dernière si on est sur la première
	currentSlideIndex = (currentSlideIndex === 0) ? slides.length - 1 : currentSlideIndex - 1; 
	showSlide(currentSlideIndex);// Affiche la diapositive correspondante
	startAutoSlide(); // On relance le défilement automatique après le clic
});


// Événement pour la flèche droite (suivante)
rightArrow.addEventListener ('click', function() {
	console.log("Flèche droite cliquée");
	stopAutoSlide(); // On arrete le défilement automatique
	// Passe à la diapositive suivante, ou à la première si on est sur la dernière
	currentSlideIndex = (currentSlideIndex === slides.length - 1) ? 0 : currentSlideIndex + 1; 
	showSlide(currentSlideIndex); // Affiche la diapositive correspondante
	startAutoSlide(); // On relance le défilement automatique après le clic
});


// Lancer le défilement automatique 
startAutoSlide();