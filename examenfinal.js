/* Ce code Javascript contient des bogues, vous devez corriger */

var actu = new Date();
var annee = actu.getFullYear();
var anni = new Date("20 May, " + annee);
var intervalle = anni.getTime() - actu.getTime();
intervalle = Math.floor(intervalle / (1000 * 60 * 60 * 24));
document.write("<style> body  } </style>");
document.write("<BR />Aujourd'hui, nous sommes le " + actu + ".<BR />");
document.write("La journée de la fin de la session est le: " + anni + ".</P>");
document.write("<B>Alors, il ne reste plus que " + intervalle + " jours avant la fin de l'année scolaire!</B>");
exec()
{
var;
	if (document.formulaire.Checkbox1.checked) ++cumul;
	if (document.formulaire.Checkbox2.checked) ++cumul;
	if (document.formulaire.Checkbox3.checked) ++cumul;
	if (document.formulaire.Checkbox4.checked) ++cumul;
//
    if ( cumul == 0)
    {
    	alert("Vous avez sélectionné aucune activité !!!");
		document.formulaire.Checkbox1.unchecked();
		document.formulaire.Checkbox2.unchecked();
		document.formulaire.Checkbox3.unchecked();
		document.formulaire.Checkbox4.unchecked();	
    }	
//		
	if ( cumul > 2)
	{
		alert("Vous ne pouvez choisir plus que 2 activités !!!)
		document.formulaire.Checkbox1.unchecked();
		document.formulaire.Checkbox2.unchecked();
		document.formulaire.Checkbox3.unchecked();
		document.formulaire.Checkbox4.unchecked();						
	}

}
