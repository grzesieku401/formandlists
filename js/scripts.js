var button = document.querySelector(".form-button"),
    notetitle = document.querySelector(".note-title"),
    selectlist = document.querySelector(".select-list"),
    textarea = document.querySelector(".form-textarea"),
    firstlistdiv = document.querySelector(".todo-list"),
    secondlistdiv = document.querySelector(".done-list");


//dodaj notatke do formularza
function addNote(event) {

    var error =null;

    //sprawdz czy formularz poprawnie uzupelniony
    if (notetitle.value.length<4) {
        notetitle.classList.add("wrong-input") ;
        error = 1;
    }
    else{
        notetitle.classList.remove("wrong-input") ;
    }

    if (selectlist.value.length =="") {
        selectlist.classList.add("wrong-input") ;
        error = 1;
    }
    else{
        selectlist.classList.remove("wrong-input") ;
    }    

    if (textarea.value.length < 4) {
        textarea.classList.add("wrong-input") ;
        error = 1;
    }
    else{
        textarea.classList.remove("wrong-input") ;
    }   

    if (error !==null) {
        return;
    }

    //stworz nowy div z danymi
    var newh3 = document.createElement("h3"),
        newp =document.createElement("p"),
        newdiv = document.createElement("div");
    newh3.appendChild(document.createTextNode(notetitle.value));
    newh3.classList.add("div-in-list_h1")
    newp.appendChild(document.createTextNode(textarea.value));
    newdiv.classList.add("div-in-list")
    newdiv.appendChild(newh3);
    newdiv.appendChild(newp);

    //przypisz usuwanie po dwukliku do nowego diva
    newdiv.addEventListener("dblclick", removeNote,false);

    //dodaj nowy div do odpowiedniego kontenera
    if (selectlist.value ==="firstlist") {
        firstlistdiv.appendChild(newdiv);
    }else{
        secondlistdiv.appendChild(newdiv);
    }

    //wyczysc inputy w formularzu
    notetitle.value = "";
    textarea.value = "";
    selectlist.value = "";

}

//usun rodzica danego event targetu
function removeNote(event){
    event.target.parentNode.remove();
    console.log(event.NoteName);
}

//dodaj event do odpowiedniego elementu
button.addEventListener("click", addNote, false);

