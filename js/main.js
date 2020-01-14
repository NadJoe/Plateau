
// Au début chaque joueur est crédité de 100 points de vie
var pointsDeVie = 100;
document.getElementById("vie1").innerHTML = pointsDeVie;
document.getElementById("vie2").innerHTML = pointsDeVie;


// ************* PARTIE OÙ LA CARTE EST GÉNÉRÉE AVEC LES CASE VIDE ET LES CASES GRISES EN TERME D'OBSTACLES
const area = new AireJeu(12, 12, 20);
area.creationColonne();
area.creationCaseGrise();


// gestion des armes
const mesArmes = new arme("Knife", 10);
mesArmes.genererArme();

// gestion des joueurs
const mesJoueurs = new joueur(10);
mesJoueurs.genererJoueur();