var s = "a brown fox jump over the lazy dog";

function voileCheck(sen) {
    var voileA = sen.split("a");
    var voileE = sen.split("e");
    var voileI = sen.split("i");
    var voileO = sen.split("o");
    var voileU = sen.split("u");

    var voile = voileA.length-1+voileE.length-1+voileI.length-1+voileO.length-1+voileU.length-1;

    console.log(voile);
}

voileCheck(s);



