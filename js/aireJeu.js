class AireJeu {
    /**
     *
     * @param {number} nombreColonnes
     * @param {number} nombreLignes
     * @param {number} nombreCaseNoire
     */
    constructor(nombreColonnes, nombreLignes, nombreCaseNoire) {
        this._nombreColonnes = nombreColonnes;
        this._nombreLignes = nombreLignes;
        this._nombreCaseNoire = nombreCaseNoire;
    }

// Methode qui permet de créer le tableau avec le nombre de colonnes et de lignes que l'on souhaite
    creationColonne() {
        for (let i = 0; i < this._nombreLignes; i++) {
            const tr = document.createElement('tr');
            for (let j = 0; j < this._nombreColonnes; j++) {
                const td = document.createElement('td')
                let texte = document.createTextNode("");
                td.appendChild(texte)
                tr.appendChild(td)
                //tr.id = 'ligne' + i;
                td.id = 'UneCase' + i + j;
                // Quand les cases sont crées, elle ont toutes la classe .libre
                $(td).addClass('libre');
            }
            let tableauGeneral = document.getElementById('tableau');
            tableauGeneral.appendChild(tr);
        }

    }

// Méthode pour la création des cases d'obstacles 
    creationCaseGrise() {
        let count = 0;
        while(count < this._nombreCaseNoire) {
            var XCaseNoire = Math.floor(Math.random() * this._nombreLignes);
            var YCaseNoire = Math.floor(Math.random() * this._nombreColonnes);
            // Test pour s'assurer de la bonne génération aléatoire des indices des cases obstacles
            console.log('Case ' + count + ' : X = ' + XCaseNoire + ' Y = ' + YCaseNoire);
            if($('td#UneCase' + XCaseNoire + YCaseNoire).hasClass('libre')){
                $('td#UneCase' + XCaseNoire + YCaseNoire).removeClass('libre').addClass('noire').addClass('occuper');
                count++
            }else{
                console.log("occupied");
            }

        }

    }

    creationCase(type, quantite) {
        let count = 0;
        while(count < quantite) {
            var XCase = Math.floor(Math.random() * this._nombreLignes);
            var YCase = Math.floor(Math.random() * this._nombreColonnes);
            // Test pour s'assurer de la bonne génération aléatoire des indices des cases obstacles
            console.log('Case ' + count + ' : X = ' + XCase + ' Y = ' + YCase);
            if($('td#UneCase' + XCase + YCase).hasClass('libre')){
                switch(type){
                    case 'noire':
                        $('td#UneCase' + XCase + YCase).removeClass('libre').addClass('noire').addClass('occuper');
                        break;
                    case 'arme':
                        $('td#UneCase' + XCase + YCase).removeClass('libre').addClass('occuper').addClass('armerr');
                }

                count++
            }else{
                console.log("occupied");
            }
        }

    }

   /* creationObstacle(type, quantite, image) {
        let countObstacle = 0;
        while(count < quantite) {
            var XObstacle = Math.floor(Math.random() * this._nombreLignes);
            var YObstacle = Math.floor(Math.random() * this._nombreColonnes);
            // Test pour s'assurer de la bonne génération aléatoire des indices des cases obstacles
            console.log('Case Obstacle' + countObstacle + ' : X = ' + XObstacle + ' Y = ' + YObstacle);
            if($('td#UneCase' + XObstacle + YObstacle).hasClass('libre')){
                switch(type){
                    case 'noire':
                        $('td#UneCase' + XObstacle + YObstacle).removeClass('libre').addClass('noire').addClass('occuper');
                        break;
                    case 'arme':
                        $('td#UneCase' + XObstacle + YObstacle).removeClass('libre').addClass('occuper').addClass('armerr');
                        $('td#UneCase' + XObstacle + YObstacle).css('background', image);
                }

                countObstacle++
            }else{
                console.log("occupied");
            }

        }

    }*/

}
