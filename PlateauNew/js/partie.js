class Partie{
    constructor(plateau, armes, joueur1, joueur2){
        this._plateau = plateau;
        this._armes = this.genererArmes(armes);
        this.joueurs = [joueur1, joueur2];
        this.currentPlayer = 1;
    }

    genererArmes(armes){
        let mesArmes = [];
        armes.forEach(element => {
            let arme = new Arme(element.nom, element.degats);
            mesArmes.push(arme);
        });
        return mesArmes;
    }

    miseEnplace(){
        this._plateau.creationColonne();
        this._plateau.creationCaseGrise();
        this._plateau.creationCase('arme', 4, this._armes);
        this._plateau.creationCase('joueur', 2, this.joueurs) 
        this.joueurs = this._plateau._joueurs;
    }

    jouer(){
        let player = this.currentPlayer === 1 ? this.joueurs[0] : this.joueurs[1];
        player.deplacementDisponible();

    }
    
}