function validar(formulario){

    if (formulario.nombre.value.length < 5){
        alert("Escriba por lo menos 5 caracteres dentro del campo de nombre")
        formulario.nombre.focus();
        return false;
    }

    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklñzxcvbnm";

    var checkStr = formulario.nombre.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(j = 0; j<checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }
    if(!allvalid){
        alert("Escribe solo letras en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }

    var checkOK = "1234567890";

    var checkStr = formulario.edad.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(j = 0; j<checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break;
        }
    }
    if(!allvalid){
        alert("Escribe solo numeros en el campo de edad");
        formulario.edad.focus();
        return false;
    }


    var txt = formulario.email.value;

    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email "+(b.test(txt)?"":" no ") +" valido");

    return b.test(txt);
}