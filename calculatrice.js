let input=document.getElementById('text');
let output=document.getElementById('affichage');
//fonction pour vider tous le contenu de l'ecran
function empty(){
    input.value='';
    output.textContent=0;

};
//fonction pour afficher le contenue
function contenu(n){
    input.value+=n.textContent;
};
//fonction pour effectuer le calcul
function calcul(valeur){
    output.textContent=eval(valeur);
}
//x-carrer function
function carrer(){
    let val=input.value;
    val=parseFloat(val);
    val=val*val;
    output.textContent=val;
}
//recuperation de tous les chiffres et operateurs
let chiffres=[...document.querySelectorAll('.btn-number ')];
//evenements
for(let i=0; i<chiffres.length; i++){
    chiffres[i].addEventListener('click', function(arg0){
        contenu(chiffres[i])
    });
}
//ecoute des boutons specifique egalle, supprimer, effacer totalement..
let egalle=[...document.querySelectorAll('#egalle')];
let clean=document.getElementById('clean');
let supprimer=document.getElementById('sup');

for(let i=0; i<egalle.length; i++){
    egalle[i].addEventListener('click', function(arg0){
        calcul(input.value);
    });
}

clean.addEventListener('click', function(){
    empty();
})
//ecoutes des fonctions
let carre=document.getElementById('x-carre');
carre.addEventListener('click', function(){
    carrer();
})