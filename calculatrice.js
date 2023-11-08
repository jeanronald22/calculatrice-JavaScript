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
//function xpuissance b
function puissance(){
    let val=input.value;
    let b=parseInt(prompt('entre la puissance'));
    val=Math.pow(val, b);
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

let bCarre=document.getElementById('x-b');
bCarre.addEventListener('click', function(){
   puissance();
})

let abs=document.getElementById('abs');
abs.addEventListener('click', function(){
    let resul=Math.abs(input.value);
    output.textContent=resul;
})

let racine=document.getElementById('racine-carre');
racine.addEventListener('click', function(){
    let resul=Math.sqrt(input.value);
    output.textContent=resul;
})

let xRacine=document.getElementById('racine-x');
xRacine.addEventListener('click', function(){
    let x=parseInt(prompt('entre x'));
    output.textContent=Math.pow(input.value, 1/x);

});

let expo=document.getElementById('expo');
expo.addEventListener('click', function(){
    output.textContent=Math.exp(input.value);
});
let sin=document.getElementById('sin');
sin.addEventListener('click', function(){
    output.textContent=Math.sin(input.value);
});
document.getElementById('cos').addEventListener('click', function(){
    output.textContent=Math.cos(input.value);
});
document.getElementById('tan').addEventListener('click', function(){
    output.textContent=Math.tan(input.value);
});
document.getElementById('arc-sin').addEventListener('click', function(){
    output.textContent=Math.asin(input.value);
});
document.getElementById('arc-cos').addEventListener('click', function(){
    output.textContent=Math.acos(input.value);
});
document.getElementById('arc-tan').addEventListener('click', function(){
    output.textContent=Math.atan(input.value);
});
let ln=document.getElementById('ln').addEventListener('click', function(){
    output.textContent=Math.ln(input.value);
});
let log=document.getElementById('log').addEventListener('click', function(){
    output.textContent=Math.log(input.value);
});
let fac=document.getElementById('factorielle').addEventListener('click', function(){
        if(input.value<0){
            output.textContent='impossible';
        }else if(input.value==0){
            output.textContent=1;
        }else{
            let fac=1;
            for(let i=1;i<=input.value;i++){
                fac=fac*i;
            }
            output.textContent=fac;
        }
});
document.getElementById('nbr-e').addEventListener('click', function(){
    input.value+=Math.E;
})
document.getElementById('nbr-pi').addEventListener('click', function(){
    input.value+=Math.PI;
})
