function verificar () {
 var date = new Date ()
 var ano = date.getFullYear()
 var fano = document.getElementById('txtano')
 var res = document.querySelector('div#res')
 if (fano.value.length == 0 || Number (fano.value) > ano) {
    window.alert ('[ERRO] Verifica os dados e tente novamente!')
 } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex [0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade < 10){
            img.setAttribute('src','menino.png')

        } else if (idade < 21){
            img.setAttribute('src','adolecentem.jpg')

        }else if (idade < 50 ){
            img.setAttribute('src','homem.png')  
       
        } else {
            img.setAttribute('src','idoso.jpg')
        }
     
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade < 10){
            img.setAttribute('src','menina.png')

        } else if (idade < 21){
            img.setAttribute('src','adolecentf.png')

        }else if (idade < 50 ){
            img.setAttribute('src','mulher.png') 
       
        } else {
            img.setAttribute('src','idosa.jpg')
        }
     
        
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
 }
}