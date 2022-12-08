 function carregar(){
 var msg = window.document.getElementById('msg')
 var img = window.document.getElementById('imagem')
 var data = new Date()
 var hora = data.getHours()

 msg.innerHTML = `Agora são ${hora} horas.`
 if (hora >= 0 && hora < 12) {
    img.src = 'cursojs/pexels-arthouse-studio-4326473.png'
    document.body.style.background = '#e2cd9f'
    }
    
else if (hora >=12 && hora < 18) {
    img.src = 'cursojs/pexels-asad-photo-maldives-1024981.png'
    document.body.style.background = '#b9846f'
}
else {
    img.src = 'cursojs/pexels-eberhard-grossgasteiger-1624496.png'
    document.body.style.background =  '#515154'
    
}

 
 }