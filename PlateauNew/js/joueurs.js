// partie de la creation de l'objet JOUEUR

// *************GESTION DE LA PARTIE DES JOUEURS POUR LA CRÉATION, LA GENERATION ET L'AFFICHAGE*************** //


class Joueur{
    // CHAQUE joueur à une image qui lui est propre donc il faut la mettre à la création de chaque objet de type joueur
    constructor (numero, nom, vie){
        this.numero = numero
        this.nom = nom;
        this._vie = vie;
        this.position = {x: undefined, y: undefined};
        this.caseVie = document.getElementById('vie'+this.numero);
        this.caseVie.textContent = this._vie;
    }


    deplacementDisponible(){
        if($('libre')){
            for (let n = 1; n <= 3; n++){
                $('td#UneCase-' + (this.position.x) + '-' + (this.position.y+n)).addClass('surbrillance');
                $('td#UneCase-' + (this.position.x+n) + '-' + (this.position.y)).addClass('surbrillance');
                $('td#UneCase-' + (this.position.x) + '-' + (this.position.y-n)).addClass('surbrillance');
                $('td#UneCase-' + (this.position.x-n) + '-' + (this.position.y)).addClass('surbrillance');

                // Testes sur les eventListener des cases de surbrillance
                $('td#UneCase-' + (this.position.x) + '-' + (this.position.y+n)).on('click', () =>{ 
                    alert(n + ' Case vers la Droite');
                });
                $('td#UneCase-' + (this.position.x+n) + '-' + (this.position.y)).on('click', () =>{ alert(n + ' Case vers le Bas')});
                $('td#UneCase-' + (this.position.x) + '-' + (this.position.y-n)).on('click', () =>{ alert(n + ' Case vers la Gauche')});
                $('td#UneCase-' + (this.position.x-n) + '-' + (this.position.y)).on('click', () =>{ alert(n + ' Case vers le Haut')});
            }
        }

    }

    deplacement(x,y){
        

    }



}



