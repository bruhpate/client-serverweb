var baseURL="http://localhost/web/";

function leggi(){
    var param1=document.getElementById('pk').value;
    if (param1 == ""){
        alert("Chiave primaria diversa da \"\"");
    } else {
        fetch(baseURL+param1)
        .then(response => response.json())
        .then(json => {
           //Ricavo Json dalla risposta
           jjson= JSON.stringify(json);
           //conversione in oggetto javascript
           obj=JSON.parse(jjson);
           //estrazione informazione
           contenuto.innerHTML =obj.nome + " " + obj.cognome;
           }
           )
    }
}
function leggiTutto(){
     fetch(baseURL)
     .then(response => response.json())
     .then(json => {
        //Ricavo Json dalla risposta
        jjson= JSON.stringify(json);
        //conversione in oggetto javascript
        obj=JSON.parse(jjson);
        //estrazione informazione dall'array di oggetti
         html="<table border = '1' width = 100 >";
         html+="<tr><td>ID</td><td>Nome</td><td>Cognome</td></tr>"; 
         for(var i=0;i<obj.length;i++){
               html+="<tr><td>"+obj[i].id+"</td><td>"+obj[i].nome+"</td><td>"+obj[i].cognome+"</td></tr>";
         }
         html+="</table>";
         contenuto.innerHTML=html;
          }
        )
 }
function aggiungi(){
    var nomee=document.getElementById('nome').value;
    var cognomee=document.getElementById('cognome').value;

    if(nomee=="" || cognomee ==""){
        alert("Inserisci un valore a Nome e Cognome");
    } else {


      fetch(baseURL+"/posts", {
          method: "POST",
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              cognome: cognomee,
              nome: nomee,
          })
      })
      .then(response => {response.json()
          contenuto.innerHTML =response.status;
      });
    }}

    function aggiungi(){
    var nomee=document.getElementById('nome').value;
    var cognomee=document.getElementById('cognome').value;

    if(nomee=="" || cognomee ==""){
        alert("Inserisci un valore a Nome e Cognome");
    } else {


      fetch(baseURL+"/posts", {
          method: "POST",
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              cognome: cognomee,
              nome: nomee,
          })
      })
      .then(response => {response.json()
          contenuto.innerHTML =response.status;
      });
    }}


function cancella(){
    var nomee=document.getElementById('nome').value;
    if (nomee == ""){
        alert("Nome diverso da \"\"");
    } else {
        fetch(baseURL+nomee, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(response => {response.json()
            contenuto.innerHTML =response.status;
        });
    }
}

function modifica(){    
    var pk=document.getElementById('pk').value;
    var nomee=document.getElementById('nome').value;
    var cognomee=document.getElementById('cognome').value;
    if (pk == "" || (nomee =="" && cognomee=="")){
        alert("Chiave primaria o entrambi i campi vuoti");
    } else {
        if(nomee != "")
            fetch(baseURL+nomee, {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: pk,
                    nome: nomee,
                })
            })
            .then(response => {response.json()
                contenuto.innerHTML =response.status;
        });
        if(cognomee != "")
        fetch(baseURL+nomee, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: pk,
                cognome: cognomee,
            })
        })
        .then(response => {response.json()
            contenuto.innerHTML =response.status;
    });

    }
}