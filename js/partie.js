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
        if(($('td#UneCase-' + this.joueurs[this.currentPlayer].position.x + '-' + this.joueurs[this.currentPlayer].position.y)).hasClass('UneArme')){
            // chercher à savoir sur quelle arme on est placer
            let classes = ($('td#UneCase-' + this.joueurs[this.currentPlayer].position.x + '-' + this.joueurs[this.currentPlayer].position.y)).attr("class").split(/\s+/);
            let nomArme = classes[2];
            // recuperer l'arme dans le tableau des armes 
            //console.log(this._armes);
            
            let armeTrouvee = this._armes.find(element => element._nom === nomArme);
            console.log(armeTrouvee._nom);
            // garder en memoire l'arme du joueur
            let armeJoueur = this.joueurs[this.currentPlayer].weapon;
            this.joueurs[this.currentPlayer].weapon = armeTrouvee;


            // donner au joueur le nouvel arme
            if(this.currentPlayer==1){
                $('#image1').attr("src",'icon/'+armeTrouvee._nom+'.png');
                $('td#UneCase-' + this.joueurs[this.currentPlayer].position.x + '-' + this.joueurs[this.currentPlayer].position.y).addClass('gris');
                console.log('position Joueur 1 : X : ' + this.joueurs[this.currentPlayer].position.x + ' Y : ' +this.joueurs[this.currentPlayer].position.y);
                /*let positionArme = {
                    x: this.joueurs[this.currentPlayer].position.x ,
                    y: this.joueurs[this.currentPlayer].position.y
                }
                console.log(positionArme);
                $('th#UneCase-'+ positionArme.x + '-' + positionArme.y).addClass('blabla');*/
            }else if(this.currentPlayer==0){
                $('#image2') .attr("src",'icon/'+armeTrouvee._nom+'.png');
                console.log('position Joueur 0 : X : ' + this.joueurs[this.currentPlayer].position.x + ' Y : ' +this.joueurs[this.currentPlayer].position.y);
                $('td#UneCase-' + this.joueurs[this.currentPlayer].position.x + '-' + this.joueurs[this.currentPlayer].position.y).addClass('gris');
                /*let positionArme = {
                    x: this.joueurs[this.currentPlayer].position.x ,
                    y: this.joueurs[this.currentPlayer].position.y
                }
                console.log(positionArme);
                $('th#UneCase-'+ positionArme.x + '-' + positionArme.y).addClass('blabla');*/
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