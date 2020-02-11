class Partie{
    constructor(plateau, armes, joueur1, joueur2){
        this._plateau = plateau;
        this._armes = this.genererArmes(armes);
        this.joueurs = [joueur1, joueur2];
        this.currentPlayer = 1;
        document.addEventListener('endTurn', this.endTurn.bind(this));
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
        this._plateau.creationCase('noire', 20);
        //console.log("Mise en place : ",this._armes);
        this._plateau.creationCase('arme', this._armes.length, this._armes);
        this._plateau.creationCase('joueur', this.joueurs.length, this.joueurs) 
        this.joueurs = this._plateau._joueurs;
        this._plateau.positionJoueur();
    }

    jouer(){
        // console.log("currentPlayer", this.currentPlayer);
        this.currentPlayer = this.currentPlayer === 1 ? 0 : 1;
        let player = this.joueurs[this.currentPlayer];
        this._plateau.displayCase();
        player.deplacementDisponible();
        player.turn();

    }

    endTurn(){
        //console.log("endTurn");
        console.log(this.joueurs[this.currentPlayer].position.x);
        if(($('td#UneCase-' + this.joueurs[this.currentPlayer].position.x + '-' + this.joueurs[this.currentPlayer].position.y)).hasClass('UneArme')){
            alert('Arme detectée');
            // chercher à savoir sur quelle arme on est placer
            let classes = ($('td#UneCase-' + this.joueurs[this.currentPlayer].position.x + '-' + this.joueurs[this.currentPlayer].position.y)).attr("class").split(/\s+/);
            console.log(classes[2]);
            let nomArme = classes[2];
            // recuperer l'arme dans le tableau des armes 
            console.log(this._armes);
            
            /*let arme;
            for (let index = 0; index < this._armes.length; index++) {
                if(this._armes[index]._nom == nomArme) {
                    arme = this._armes[index];
                }
            }*/
            let armeTrouvee = this._armes.find(element => element._nom === nomArme);
            //console.log(arme);
            console.log(armeTrouvee._nom);

            //let tabArmeJoueur = ['mizopArme','bibaxArme'];
            // garder en memoire l'arme du joueur
            let armeJoueur;

            // donner au joueur le nouvel arme
            if(this.currentPlayer==1){
                document.getElementById('image1').innerHTML = "" ;
                $('#image1').addClass(armeTrouvee._nom);
            }else if(this.currentPlayer==0){
                document.getElementById('image2').innerHTML = "" ;
                $('#image2').addClass(armeTrouvee._nom);
            }
            // mettre l'ancienne arme sur le plateau (arme du joueur)
        }

        // Si les deux joueurs se retrouvent cote à cote il faut annoncer le combat
        if(
            (((this.joueurs[0].position.x - this.joueurs[1].position.x) == 1) && ((this.joueurs[0].position.y == this.joueurs[1].position.y))) ||
            (((this.joueurs[0].position.y - this.joueurs[1].position.y) == 1) && ((this.joueurs[0].position.x == this.joueurs[1].position.x))) ||
            (((this.joueurs[1].position.x - this.joueurs[0].position.x) == 1) && ((this.joueurs[1].position.y == this.joueurs[0].position.y))) ||
            (((this.joueurs[1].position.y - this.joueurs[0].position.y) == 1) && ((this.joueurs[1].position.x == this.joueurs[0].position.x)))
            
            ){
            alert("Un combat s'impose");
        }

        this.jouer();
    }
    
}