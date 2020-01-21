/*
// Au début chaque joueur est crédité de 100 points de vie
var pointsDeVie = 100;
document.getElementById("vie1").innerHTML = pointsDeVie;
document.getElementById("vie2").innerHTML = pointsDeVie;


// ************* PARTIE OÙ LA CARTE EST GÉNÉRÉE AVEC LES CASE VIDE ET LES CASES GRISES EN TERME D'OBSTACLES

area.creationColonne();
area.creationCaseGrise();


// gestion des armes
const mesArmes = new arme("Knife", 10);
mesArmes.genererArme();

// gestion des joueurs
const mesJoueurs = new joueur(10);
mesJoueurs.genererJoueur();

// Deplacement du joueur actif
const movePlayer = new joueur(10);
movePlayer.deplacement();
*/

/* New start */
const area = new AireJeu(12, 12, 20);

// liste des armes 
let tableauArmes = [
    {
        nom: "knife",
        degats: 5
    },{
        nom: "trident",
        degats: 20
    },{
        nom: "eyeball",
        degats: 10
    },{
        nom: "poison",
        degats: 10
    }];

let joueur1 = new Joueur(1, 'mizop', 100);
let joueur2 = new Joueur(2, 'bibaxx', 100)

let partie = new Partie(area, tableauArmes, joueur1, joueur2);  
partie.miseEnplace();
partie.jouer(); 