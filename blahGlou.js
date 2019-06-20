//Création d'un nouvel objet pour la catégorie 'Blahblah'
var blahblah = new Object;

//Création de la liste pour le début de phrase de 'Blahlah'
blahblah.begin = ["Je bois du couscous et",
  "Je démonte une poule et",
  "Je photocopie du sable et",
  "Je saute sur une poule et",
  "Je conduis avec des gants et",
  "Je crache sur le lama et",
  "Je mange mon slip et",
  "Je barbouille un anglais et",
  "J'invente le lampadaire à voile et",
  "Être créatif signifie 'aimer la vie' et",
  "Je mets un survêtement et"];

  //Création de la liste pour le milieu de phrase de 'Blahlah'
blahblah.middle = ["je nettoie un paysan",
  "j'achète un hôtel",
  "rappelez-vous qu'une personne qui sait être seule, n'est jamais seule",
  "j'apprends le kung fu à Lionel Jospin",
  "j'ai un paillasson bleu",
  "je jette Mamie dans les orties",
  "je pue du pull",
  "je mets du munster dans son casque",
  " Je mange une soutane",
  "vous aimez suffisamment la vie",
  "j'envoie un fax"];

//Création de la liste pour la fin de phrase de 'Blahlah'
blahblah.end = ["pourtant, Casimir joue aux fléchettes avec un opinel.",
  "mais non, non, je suis mélomane.",
  "alors, je prends la profiterole.",
  "d'ailleurs, cette robe vous vas à ravir.",
  "à par ça, j'ai tout oublié.",
  "tout ça, alors qu'en fait c'est pas top.",
  "pourtant, j'aime pas les philosophes.",
  "par contre, vous n'êtes pas satisfait.",
  "mais commencez déjà par vous changer.",
  "il y avait toujours plus de visiteurs'.",
  "cependant, vous êtes utile."];


//Déclaration de la liste 'Glouglou' de citations avec l'aide de la création d'un nouvel objet 
var glouglou = new Object;

//Création de la liste pour le début de la phrase de 'Glouglou'
glouglou.begin = ["Je me réveille et", 
"La science n'a pas de patrie et", 
"Enfin voila et", 
"Je pense que c'est vrai et", 
"Les koalas sont très gentils et",
"Mon chien est câché et", 
"Les humains sont naïfs et", 
"On ne peut pas faire de faute et", 
"Un un calamar aujourd’hui et", 
"Un poulet ne doit pas et", 
"J'aime beaucoup les brocolis et"];

//Création de la liste pour le milieu de la phrase de 'Glouglou'
glouglou.middle = ["je me mets à la recherhe du monde", 
"le fini ne se distingue de l'infini que par l'imperfection", 
"il est tombé dans la pomme de terre", 
"elle ne s'en va pas", 
"ce sont des robots humanoïdes", 
"gardez", 
"de merveilleuses créatures", 
"avec des fientes", 
"vaut mieux qu’un poulet", 
"s'immiscer dans une querelle qui oppose deux visions relatives", 
"ils me font penser à des animaux légendaires"];

//Création de la liste pour la fin de la phrase de 'Glouglou'
glouglou.end = ["d'ailleurs, Le virtuose ne sert pas la musique; il s'en sert.", 
"Pourtant, la musique savante manque à notre désir", 
"mais souvent, je trouve que trop de morceaux de musique finissent trop longtemps après la fin.", 
"En général dès qu'une chose devient utile, elle cesse d'être belle.", 
"en fait je pense que, la précipitation est l'oeuvre du diable. Dieu travaille lentement.", 
"en tout cas, il est très malaisé de parler beaucoup sans dire quelque chose de trop.", 
"car, je pense, donc je suis.", 
"d'ailleurs, la seule réalité n'est-elle pas celle des sentiments?", 
"mais en fait, c'est de la paresse", 
"de toute maniéres, on ne mordra jamais assez dans son propre cerveau.", 
"cependant, il n'y a pas de lumière sans ombre."];

//Déclaration des variables
var generateButton = document.querySelector('#generate'); //bouton 'générer'
var numInput = document.querySelector('#numInput'); //liste pour définir le nombre de citations
var choice1 = document.querySelector('#blahblah'); //Selecteur de la liste 'Blahblah'
var choice2 = document.querySelector('#glouglou'); //Selecteur de la liste 'Blahblah'
var list = document.querySelector('ul');
let continuer;

/*Action du bouton "generate"  avec une fonction si pour appliquer les paramétres
'choice1' est coché alors liste 'blahblah' si 'choice2' alors 'glouglou' autrement alert "veuillez choisir une catégorie"*/
generateButton.addEventListener('click', function () {

  var type;
  list.innerHTML = '';
  if (choice1.checked) {//catgéorie 'blahblah' choisie
    type = 'blahblah';
  } else if (choice2.checked) {//catgéorie 'glouglou' choisie
    type = 'glouglou';
  } else {
    alert('Veuillez choisir une catégorie');//si aucune catégorie n'est choisie; alert
    return false;
  } if (numInput.value > 5 || numInput.value === '') { // si numInput est plus grand que 5 ou que numInput n'est pas rempli
    alert('Veuillez choisir entre 1 et 5 citations') //alert
    return false;
  }
  for (var i = 0; i < numInput.value; i++) {//boucle qui s'intialise à 0, et tant que sa valeur ne dépasse pas numInput, elle incrémente de +1 
    getCitation(type); //démarre le générateur de citation avec en return le 'type'; getCitation(type) crée ci-dessous
  };
});

//Déclaration de la fonction qui génére les citations 'getCitation'
function getCitation(geneCita) {
  // Fonction ternaire si 'geneCita' est égal à 'glouglou' alors élement choisi dans la liste 'glouglou, sinon ce sera dans la liste 'blahblah'
  var base = geneCita === 'glouglou' ? glouglou : blahblah;
  /* Déclaration de la variable random pour appliquer une concaténation des résultats de la méthode math.random réduis à son entier inférieur 
   assignée à la propriété, l'action est ensuite reproduite pour les milieux, puis les fins des citations, les résultat sont concaténé à l'aide des ' , ' et de + */
  var random = ' " ' + base.begin[Math.floor(Math.random() * base.begin.length)] + ', '
    + base.middle[Math.floor(Math.random() * base.middle.length)] + ', ' + base.end[Math.floor(Math.random() * base.end.length)] + ' " ';
  list.innerHTML += '<li>' + random + '</li>';

}
/*var supportMsg = document.getElementById('msg');

if ('speechSynthesis' in window) {
	supportMsg.innerHTML = 'Your browser <strong>supports</strong> speech synthesis.';
} else {
	supportMsg.innerHTML = 'Sorry your browser <strong>does not support</strong> speech synthesis.<br>Try this in <a href="https://www.google.co.uk/intl/en/chrome/browser/canary.html">Chrome Canary</a>.';
	supportMsg.classList.add('not-supported');
}


// Get the 'speak' button
var button = document.getElementById('speak');

// Get the text input element.
var speechMsgInput = document.getElementById('speech-msg');

// Get the voice select element.
var voiceSelect = document.getElementById('voice');

// Get the attribute controls.
var volumeInput = document.getElementById('volume');
var rateInput = document.getElementById('rate');
var pitchInput = document.getElementById('pitch');


// Fetch the list of voices and populate the voice options.
function loadVoices() {
  // Fetch the available voices.
	var voices = speechSynthesis.getVoices();
  
  // Loop through each of the voices.
	voices.forEach(function(voice, i) {
    // Create a new option element.
		var option = document.createElement('option');
    
    // Set the options value and text.
		option.value = voice.name;
		option.innerHTML = voice.name;
		  
    // Add the option to the voice selector.
		voiceSelect.appendChild(option);
	});
}

// Execute loadVoices.
loadVoices();

// Chrome loads voices asynchronously.
window.speechSynthesis.onvoiceschanged = function(e) {
  loadVoices();
};


// Create a new utterance for the specified text and add it to
// the queue.
function speak(text) {
  // Create a new instance of SpeechSynthesisUtterance.
	var msg = new SpeechSynthesisUtterance();
  
  // Set the text.
	msg.text = text;
  
  // Set the attributes.
	msg.volume = parseFloat(volumeInput.value);
	msg.rate = parseFloat(rateInput.value);
	msg.pitch = parseFloat(pitchInput.value);
  
  // If a voice has been selected, find the voice and set the
  // utterance instance's voice attribute.
	if (voiceSelect.value) {
		msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voiceSelect.value; })[0];
	}
  
  // Queue this utterance.
	window.speechSynthesis.speak(msg);
}


// Set up an event listener for when the 'speak' button is clicked.
button.addEventListener('click', function(e) {
	if (speechMsgInput.value.length > 0) {
		speak(speechMsgInput.value);
	}
});


console.log(glouglou); //Imprime
console.log(blahblah); */
