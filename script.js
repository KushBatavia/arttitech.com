function menutoggle(){

    document.getElementById("bar1").classList.toggle('bar1t');
    document.getElementById("bar2").classList.toggle('bar2t');
    document.getElementById("bar3").classList.toggle('bar3t');
    document.getElementById("sidemenus").classList.toggle('smt');

}

if ('document.getElementById("jumbo-abt").style.height > "100%"'){

    document.getElementById('jumbo-abt').style.paddingBottom = '5rem';

}

function menuclose(){

    document.getElementById("bar1").classList.remove('bar1t');
    document.getElementById("bar2").classList.remove('bar2t');
    document.getElementById("bar3").classList.remove('bar3t');
    document.getElementById("sidemenus").classList.remove('smt');

}