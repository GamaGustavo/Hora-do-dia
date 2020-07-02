function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML=`Agora são ${hora} horas`
    if(hora>5&&hora<12){
        img.src = "imagens/Manha.png"
        document.body.style.background="#ffed7e";
    }else if(hora>=12&&hora<18){
        img.src = "imagens/Tarde.png"
        document.body.style.background="#de9258"
    }else{
        img.src = "imagens/Noite.png"
        document.body.style.background="#012558"
    }
}

