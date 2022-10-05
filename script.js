function calculateTip() {
    let billAmt = document.getElementById('billAmt').value;
    let selectQual = document.getElementById('selectQual').value;
    let peopleAmt = document.getElementById('peopleAmt').value;

    if (billAmt < 1 || selectQual == 0 || peopleAmt < 1) {
        alert('Fırıldağın axrı yoxdur yetim!')
        return
    }


    if (peopleAmt > 1) {
        document.getElementById('each').style.display = "inline";
    } else {
        document.getElementById('each').style.display = "none";
    }

    let total = (billAmt * selectQual) / peopleAmt;
    total = Math.round(total * 100) / 100;
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totaltip').style.display = "block";

}

document.getElementById('totaltip').style.display = "none";



document.getElementById('calculate').onclick = function () {
    calculateTip()
};

