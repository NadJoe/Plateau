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
        this._caseNoire = [];
        this._armes = [];
        this._joueurs = []
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
                tr.id = 'ligne' + i;
                td.id = 'UneCase-' + i + '-' + j;
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
            let XCaseNoire = Math.floor(Math.random() * this._nombreLignes);
            let YCaseNoire = Math.floor(Math.random() * this._nombreColonnes);
            // Test pour s'assurer de la bonne génération aléatoire des indices des cases obstacles
            console.log('Case ' + count + ' : X = ' + XCaseNoire + ' Y = ' + YCaseNoire);
            if($('td#UneCase-' + XCaseNoire + '-' + YCaseNoire).hasClass('libre')){
                $('td#UneCase-' + XCaseNoire + '-' + YCaseNoire).removeClass('libre').addClass('noire').addClass('occuper');
                count++
            }else{
                console.log("occupied");
            }
        }

    }

    creationCase(type, quantite, liste = null) {
        let count = 0;
        while(count < quantite) {
            let XCase = Math.floor(Math.random() * this._nombreLignes);
            let YCase = Math.floor(Math.random() * this._nombreColonnes);
            // Test pour s'assurer de la bonne génération aléatoire des indices des cases obstacles
            console.log('Case ' + count + ' : X = ' + XCase + ' Y = ' + YCase);
            if($('td#UneCase-' + XCase + '-' + YCase).hasClass('libre')){
                switch(type){
                    case 'noire':
                        $('td#UneCase-' + XCase + '-' + YCase).removeClass('libre').addClass('noire').addClass('occuper');
                        this._caseNoire.push(new CaseNoire(XCase, YCase));
                        break;
                    case 'arme':
                        console.log(this._armes);
                        $('td#UneCase-' + XCase + '-' + YCase).removeClass('libre').addClass('occuper').addClass('UneArme').addClass(liste[this._armes.length]._nom);
                        let arme = liste[this._armes.length]; 
                            arme.position.x = XCase;
                            arme.position.y = YCase;
                            this._armes.push(liste[this._armes.length]);
                            break;
                    case 'joueur':
                        console.log(this._joueurs);
                            $('td#UneCase-' + XCase + '-' + YCase).removeClass('libre').addClass('occuper').addClass('UnJoueur').addClass(liste[this._joueurs.length].nom);
                            let joueur = liste[this._joueurs.length]; 
                            joueur.position.x = XCase;
                            joueur.position.y = YCase;
                            this._joueurs.push(joueur);
                            break;   
                }
                count++
            }else{
                console.log("occupied");
            }
        }

    }


    displayCase(){
        document.getElementById('tableau').innerHTML = "" ;
        this.creationColonne();
        this._caseNoire.forEach(element => {
                $('td#UneCase-' + element.position.x + '-' + element.position.y).removeClass('libre').addClass('noire').addClass('occuper');
        });
        this._joueurs.forEach(element =>{
                $('td#UneCase-' + element.position.x + '-' + element.position.y).removeClass('libre').addClass('occuper').addClass('UnJoueur').addClass(element.nom);

                
        });
        this._armes.forEach(element =>{
                $('td#UneCase-' + element.position.x + '-' + element.position.y).addClass('UneArme').addClass(element._nom);     
        });

        
    }

    positionJoueur(){
            //console.log(this._joueurs[1].position);

            //if(this._joueurs[0].position.x == this._joueurs[1].position.x){
              //  console.log("Un combat s'impose");}
        
    }
}
