let muunnin = document.forms['lisays'];
muunnin.addEventListener('submit', kaannos);
otsikko = document.getElementById("tulos");
var valinta = document.getElementById("astevalinta")



function kaannos(event){
    event.preventDefault();
    if(document.querySelector('input[type = radio]:checked') == null){
      alert('valitse desimaalit');
        return;
    }
    var desimaalit = document.querySelector('input[type = radio]:checked').value
    var value = valinta.value;
    let luku = document.querySelector('input[type="text"]').value;
    if(luku.length < 1){
        alert('syötä luku');
        return;
    }
    if(isNaN(luku)){
        alert('Syötä vain numeroita');
        return;
    }
    if(value == "Celcius"){
      if(luku < -273.15){
        alert('lämpötila on pienempi kuin absoluuttinen nollapiste')
      }
      luku = luku *1.8;
        luku = luku +32;
    } else if(value == 'Farenheit'){
      if(luku < -463.27){
        alert('lämpötila on pienempi kuin absoluuttinen nollapiste')
      }
      luku = luku -32;
      luku = luku /1.8
    }
    luku = String(luku)
    if(luku.includes(".")){
      loppu = luku.split(".")
      loppu[1] = loppu[1].slice(0,desimaalit)
      otsikko.innerHTML = "Tulos:" + " " + loppu[0] + "." + loppu[1];
    } else{
      otsikko.innerHTML = "Tulos:" + " " + luku;
    }


    
    




}

