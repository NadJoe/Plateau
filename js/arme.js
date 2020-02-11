//*************    GESTION DE LA PARTIE DES ARMES POUR LA CRÉATION, LA GENERATION ET L'AFFICHAGE    ***************//

class Arme{
    // CHAQUE joueur à une image qui lui est propre donc il faut la mettre à la création de chaque objet de type joueur
    constructor (nom, PointsInflige){
        this._nom = nom;
        this._PointsInflige = PointsInflige;
        this.position = {x: undefined, y: undefined};
    }
}
