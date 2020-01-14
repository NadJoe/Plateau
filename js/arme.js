//*************    GESTION DE LA PARTIE DES ARMES POUR LA CRÉATION, LA GENERATION ET L'AFFICHAGE    ***************//

class arme{
    // CHAQUE joueur à une image qui lui est propre donc il faut la mettre à la création de chaque objet de type joueur
    constructor (nom, PointsInflige){
        this._nom = nom;
        this._PointsInflige = PointsInflige;
    }


    positionArmes(){
      $('td#UneCase' + this._indiceXarme + this._indiceYarme).removeClass('libre').removeClass('joueur').removeClass('noire').addClass('occuper').addClass('armerr');
        console.log('Arme ' + this._nom + ' : ' + ' X = ' + this._indiceXarme + ' Y : ' + this._indiceYarme );
        $('td#UneCase' + this._indiceXarme + this._indiceYarme).css('background', this._image);
        console.log(this._nom);

        if( $('td#UneCase' + this._indiceXarme + this._indiceYarme).hasClass('noire') ||
            $('td#UneCase' + this._indiceXarme + this._indiceYarme).hasClass('joueur')){
                console.log('une meme position à été retrouvée');
        }
    }

    genererArme(){
        // création d'un tableau qui va stocker mes images d'armes
        let tableauArmes=["knife","trident","eyeball","poison"];

        let count = 0;
        while(count < 4) {
            var XcaseArme = Math.floor(Math.random() * 10);
            var YcaseArme = Math.floor(Math.random() * 10);
            // Test pour s'assurer de la bonne génération aléatoire des indices des cases obstacles
            console.log('Case Arme' + count + ' : X = ' + XcaseArme + ' Y = ' + YcaseArme);
            if($('td#UneCase' + XcaseArme + YcaseArme).hasClass('libre')){
                $('td#UneCase' + XcaseArme + YcaseArme).removeClass('libre').addClass('UneArme').addClass('occuper').addClass(tableauArmes[count]);
                
                count++
            }else{
                console.log("occupied");
            }

        }
    }
}
