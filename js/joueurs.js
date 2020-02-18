// partie de la creation de l'objet JOUEUR

// *************GESTION DE LA PARTIE DES JOUEURS POUR LA CRÉATION, LA GENERATION ET L'AFFICHAGE*************** //


class Joueur{
    // CHAQUE joueur à une image qui lui est propre donc il faut la mettre à la création de chaque objet de type joueur
    constructor (numero, nom, vie, weapon){
        this.numero = numero
        this.nom = nom;
        this._vie = vie;
        this.weapon = weapon;
        this.position = {x: undefined, y: undefined};
        this.caseVie = document.getElementById('vie'+this.numero);
        this.caseVie.textContent = this._vie;
       
    }


    deplacementDisponible(){

        for(let n = 1; n <= 3; n++){
            if($('td#UneCase-' + (this.position.x) + '-' + (this.position.y+n)).hasClass('libre')){
                $('td#UneCase-' + (this.position.x) + '-' + (this.position.y+n)).addClass('surbrillance');
            }else{
                break;
            }
        }

        for(let n = 1; n <= 3; n++){
            if($('td#UneCase-' + (this.position.x+n) + '-' + (this.position.y)).hasClass('libre')){
                $('td#UneCase-' + (this.position.x+n) + '-' + (this.position.y)).addClass('surbrillance');
            }else{
                break;
            }
        }

        for(let n = 1; n <= 3; n++){
            if($('td#UneCase-' + (this.position.x) + '-' + (this.position.y-n)).hasClass('libre')){
                $('td#UneCase-' + (this.position.x) + '-' + (this.position.y-n)).addClass('surbrillance');
            }else{
                break;
            }
        }

        for(let n = 1; n <= 3; n++){
            if($('td#UneCase-' + (this.position.x-n) + '-' + (this.position.y)).hasClass('libre')){
                $('td#UneCase-' + (this.position.x-n) + '-' + (this.position.y)).addClass('surbrillance');
            }else{
                break;
            }
        }

    }

    move(positionX, positionY){
        this.position = {x: positionX, y:positionY};
        console.log(this.position);
    }

    turn(){
       let availableMoveCases = Array.from(document.getElementsByClassName('surbrillance'));
       //console.log(availableMoveCases);
       availableMoveCases.forEach(element => {
            element.addEventListener('click', () =>{
                console.log('cliqué', element);
                let tableau = element.id.split("-");
                console.log("tableau", tableau);
                this.move(parseInt(tableau[1]), parseInt(tableau[2]));

                let event = new Event("endTurn", {bubbles:true});
                document.dispatchEvent(event);
            });
       });
    }

}



