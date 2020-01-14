// partie de la creation de l'objet JOUEUR

// *************GESTION DE LA PARTIE DES JOUEURS POUR LA CRÉATION, LA GENERATION ET L'AFFICHAGE*************** //


class joueur{
    // CHAQUE joueur à une image qui lui est propre donc il faut la mettre à la création de chaque objet de type joueur
    constructor ( vie){
        this._vie = vie;
    }


    genererJoueur(){
        // création d'un tableau qui va stocker mes images d'armes
        let tableauJoueurs=["bibaxx","mizop"];

        let countJoueur = 0;
        while(countJoueur < 2) {
            var XcaseJoueur = Math.floor(Math.random() * 10);
            var YcaseJoueur = Math.floor(Math.random() * 10);
            // Test pour s'assurer de la bonne génération aléatoire des indices des cases obstacles
            console.log('Case Joueur' + countJoueur + ' : X = ' + XcaseJoueur + ' Y = ' + YcaseJoueur);
            if($('td#UneCase' + XcaseJoueur + YcaseJoueur).hasClass('libre')){
                $('td#UneCase' + XcaseJoueur + YcaseJoueur).removeClass('libre').addClass('UnJoueur').addClass('occuper').addClass(tableauJoueurs[countJoueur]);
                countJoueur++
            }else{
                console.log("occupied");
            }

        }

        if($('libre')){
            for (let n = 1; n <= 3; n++) {
                $('td#UneCase' + (XcaseJoueur) + (YcaseJoueur+n)).addClass('surbrillance');
                $('td#UneCase' + (XcaseJoueur+n) + (YcaseJoueur)).addClass('surbrillance');
                $('td#UneCase' + (XcaseJoueur) + (YcaseJoueur-n)).addClass('surbrillance');
                $('td#UneCase' + (XcaseJoueur-n) + (YcaseJoueur)).addClass('surbrillance');
            }
        }

    }



    deplacement(){
       

    }

}




const headerTag = document.getElementById('number');

headerTag.addEventListener('numberChanged', function(e){
    headerTag.textContent = e.detail.number;
    headerTag.style.color = e.detail.textColor;
});

function changeNumber(n, c) {
    const event = new CustomEvent('numberChanged', {
        detail: {
            number: n,
            textColor: c
        }
    });

    headerTag.dispatchEvent(event);
}

//document.getElementById('bouton').addEventListener('click',changeNumber(26, 'grey'));

const cliq = document.getElementById('bouton');
cliq.addEventListener('click', function(){
    //alert('je viens de cliquer sur le bouton');
    changeNumber(30, 'red');
})