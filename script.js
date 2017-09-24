// button => afficher et masquer  Nav 
document.getElementById("hamburger").onclick = function () {
    var state =document.getElementsByTagName("nav")[0].style.display;
    if(state == "block"){
        document.getElementsByTagName("nav")[0].style.display = "none";
    }else{ document.getElementsByTagName("nav")[0].style.display = "block";}
};

// changer le couleur de nav aprés "Scroll" 
var myNav = document.getElementById("navmove");
window.onscroll = function () { 

    if (document.body.scrollTop >= 50 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};
// click Effacer

document.getElementById("effacer").onclick = function () {
    document.getElementById('form1').reset();
    document.getElementById("erreur").style.display="none";
    document.getElementById("erreur").innerHTML= "";
    document.getElementById("info").style.display="none";
    document.getElementById("info").innerHTML="";


};
// click  radio button  "inscription"
var etat = 0;
document.getElementById("inscription").onclick = function () {
    document.getElementById("niveau-diplome").style.display="block";
    document.getElementById("erreur").style.display="none";
    document.getElementById("info").style.display="none";
    etat=1;
};
// clicker radio button pre inscription
document.getElementById("Pre").onclick = function () {
    document.getElementById("niveau-diplome").style.display="none";
    document.getElementById("info").style.display="none";
    document.getElementById("erreur").style.display="none";
    etat=0;
};

// clicker button enregistrer 
document.getElementById("enregistrer").onclick = function() {
   
    // initialiser  div des erreurs , 
    document.getElementById("erreur").style.display="none";
    document.getElementById("erreur").innerHTML= "";
    document.getElementById("info").style.display="none";
       
    // affecter les valeurs des input => a des variables locales
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value
    var datenaissance = document.getElementById("datenaissance").value;
    var email = document.getElementById("email").value
    var tel = document.getElementById("tel").value;
    var adresse = document.getElementById("adresse").value
    var diplome = document.getElementById("diplome").value;
    var typediplome = document.getElementById("typediplome").value
    var erreur="";
    
    // tester 
    if(nom == "" || !(/^[a-zA-Z]+$/.test(nom))){ erreur+="<p>    un Nom valide</p>"; }
    if(prenom=="" || !(/^[a-zA-Z]+$/.test(prenom))){ erreur+="<p>  un Prenom valide</p>";}
    if(datenaissance=="" || !(/^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/.test(datenaissance))){ erreur+="<p>  une Date de Naissance valide</p>";}
    if(email==""  || !(/^[a-zA-Z0-9._-]+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/.test(email)) ){ erreur+="<p>  une adresse email valide</p>";}
    if(tel=="" || !(/^[( ]*[+]*[0-9 ]*[) ]*[ 0-9]{10,16}$/.test(tel))){ erreur+="<p>  un Numero De Télephone valide</p>";}
    if(adresse==""){ erreur+="<p>  votre Adresse</p>";}
    if(diplome==""){ erreur+="<p>  votre Diplome</p>";}
    if(typediplome==""){ erreur+="<p>  votre Type de Diplome</p>";}

    
    var erreur2="";
    // si etat==1  si en choisie "inscription" etat==0 pour "pre-inscription"
    if(etat==1){

        var typedip =document.getElementById("typediplome2").value;
        var niveau =document.getElementById("niveau").value;
        var filiere =document.getElementById("filiere").value;


        if(typedip==""){ erreur2+="<p>un Type de Diplome</p>";}
        if(niveau==""){ erreur2+="<p>un  niveau</p>";}
        if(filiere==""){ erreur2+="<p>une filiere</p>";}

    }
    
    if(erreur != ""){
        erreur="<p><span>veuillez saisir :</span></p> "+erreur;
    }
    if(erreur2 != "") {
        erreur+="<p><span>veuillez selectionner :</span></p>" +erreur2
    }
// si il'a des erreur , on va afficher le div d'erruers sinon on va afficher les données
    
    if(erreur != ""){
        document.getElementById("erreur").style.display="block";
        document.getElementById("erreur").innerHTML= erreur;

    }else {

        var info = "";

        var info = "<p id=infohead>Félicitations, vous êtes inscrit avec succès !!</p><p>Nom: &nbsp;<span>"+nom+"</span></p><p>Prenom: &nbsp;<span>"+prenom+"</span></p><p>Date De Naissance: &nbsp;<span>"+datenaissance+"</span></p><p>E-Mail: &nbsp;<span>"+email+"<span></p><p>Telephone: &nbsp;<span>"+tel+"</span></p><p>Adresse: &nbsp;<span>"+adresse+"</span></p><p>Diplome: &nbsp;<span>"+diplome+"</span></p><p>Type Diplome: &nbsp;<span>"+typediplome+"</span></p>"
        if(etat==1){
            info +="<p>Type Diplome2 :<span>"+typedip+"</span></p><p>Type Niveau :<span>"+niveau+"</span></p><p>Filière :<span>"+filiere+"</span></p>";
        }
        document.getElementById("info").style.display="block";
        document.getElementById("info").innerHTML=info;


    }

};





















