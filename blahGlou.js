//Liste dans un objet pour le début de phrase de 'Blahblah'
const blahB = [
    "Je bois du couscous et",
    "Je démonte une poule et",
    "Je photocopie du sable et",
    "Je saute sur une poule et",
    "Je conduis avec des gants et",
    "Je crache sur le lama et",
    "Je mange mon slip et",
    "Je barbouille un anglais et",
    "J'invente le lampadaire à voile et",
    "Être créatif signifie 'aimer la vie' et",
    "Je mets un survêtement et"
];

//Liste dans un objet pour le milieu de phrase de 'Blahblah'
const blahM = [
    " je nettoie un paysan, ",
    " j'achète un hôtel, ",
    " rappelez-vous qu'une personne qui sait être seule, n'est jamais seule, ",
    " j'apprends le kung fu à Lionel Jospin, ",
    " j'ai un paillasson bleu, ",
    " je jette Mamie dans les orties, ",
    " je pue du pull, ",
    " je mets du munster dans son casque, ",
    " Je mange une soutane, ",
    " vous aimez suffisamment la vie, ",
    " j'envoie un fax, "
];

//Liste dans un objet pour la fin de phrase de 'Blahblah'
const blahE = [
    "pourtant, Casimir joue aux fléchettes avec un opinel.",
    "mais non, non, je suis mélomane.",
    "alors, je prends la profiterole.",
    "d'ailleurs, cette robe vous vas à ravir.",
    "à par ça, j'ai tout oublié.",
    "tout ça, alors qu'en fait c'est pas top.",
    "pourtant, j'aime pas les philosophes.",
    "par contre, vous n'êtes pas satisfait.",
    "mais commencez déjà par vous changer.",
    "il y avait toujours plus de visiteurs'.",
    "cependant, vous êtes utile."
];

//Création de la liste pour le début de la phrase de 'Glouglou'
const glouB = [
    "Je me réveille et ",
    "La science n'a pas de patrie et ",
    "Enfin voila et ",
    "Je pense que c'est vrai et ",
    "Les koalas sont très gentils et ",
    "Mon chien est câché et ",
    "Les humains sont naïfs et ",
    "On ne peut pas faire de faute et ",
    "Un un calamar aujourd’hui et ",
    "Un poulet ne doit pas et ",
    "J'aime beaucoup les brocolis et "
];

//Création de la liste pour le milieu de la phrase de 'Glouglou'
const glouM = [
    "je me mets à la recherhe du monde",
    "le fini ne se distingue de l'infini que par l'imperfection",
    "il est tombé dans la pomme de terre",
    "elle ne s'en va pas",
    "ce sont des robots humanoïdes",
    "gardez",
    "de merveilleuses créatures",
    "avec des fientes",
    "vaut mieux qu’un poulet",
    "s'immiscer dans une querelle qui oppose deux visions relatives",
    "ils me font penser à des animaux légendaires"
];

//Création de la liste pour la fin de la phrase de 'Glouglou'
const glouE = [
    "d'ailleurs, Le virtuose ne sert pas la musique; il s'en sert.",
    "Pourtant, la musique savante manque à notre désir",
    "mais souvent, je trouve que trop de morceaux de musique finissent trop longtemps après la fin.",
    "En général dès qu'une chose devient utile, elle cesse d'être belle.",
    "en fait je pense que, la précipitation est l'oeuvre du diable. Dieu travaille lentement.",
    "en tout cas, il est très malaisé de parler beaucoup sans dire quelque chose de trop.",
    "car, je pense, donc je suis.",
    "d'ailleurs, la seule réalité n'est-elle pas celle des sentiments?",
    "mais en fait, c'est de la paresse",
    "de toute maniéres, on ne mordra jamais assez dans son propre cerveau.",
    "cependant, il n'y a pas de lumière sans ombre."
];

var blahblah;
var glouglou;
var nbCita = prompt("Veuillez choisir le nombre de citation à générer (de 1 à 5)");
var liste = prompt("veullez choisir la liste blahblah ou glouglou");

//function geneCita (){

if (nbCita > 5 || nbCita === '') { // si nbCita est plus grand que 5 ou que le champ n'est pas renseigné ("")
    nbCita = prompt("Veuillez choisir le nombre de citation à générer (de 1 à 5)"); //prompt pour demande le nombre de citation à générer
} else if (nbCita <= 5 && liste == "blahblah") { //autrement génére les citations grâce à la boucle for
    for (let i = 0; i < nbCita; i++) {
        console.log(blahB[Math.floor(Math.random() * blahB.length)] +
            blahM[Math.floor(Math.random() * blahM.length)] +
            blahE[Math.floor(Math.random() * blahE.length)]);
        /* let encore = if (confirm("Voulez-vous continuer?"))
            if (encore == "y"){
                geneCita();
            } else { console.log("bye bye !"); */
    }
} else if (nbCita <= 5 && liste == "glouglou") { //autrement génére les citations grâce à la boucle for
    for (let i = 0; i < nbCita; i++) {
        console.log(glouB[Math.floor(Math.random() * glouB.length)] +
            glouM[Math.floor(Math.random() * glouM.length)] +
            glouE[Math.floor(Math.random() * glouE.length)]);
        /*   let encore = confirm("Voulez-vous continuer? ( y ou n)");
           if (encore == "y"){
               geneCita();
           } else { console.log("bye bye !"); */
    }
}
;
//}