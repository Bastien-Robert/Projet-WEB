function addline(){


    var CPU= document.getElementById('CPU').value;
    var GPU= document.getElementById('GPU').value;
    var ram= document.getElementById('ram').value;
    var refroidissement= document.getElementById('refroidissement').value;
    var tableau= document.getElementById('table');
    var newRow= tableau.insertRow(-1);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);

    cel1.innerText= CPU;
    cel2.innerText= GPU;
    cel3.innerText= ram;
    cel4.innerText= refroidissement;

}

function scroll_wp(){

}