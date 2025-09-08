const traduzir = document.querySelector("#traduzir")
const traduzir2 = document.querySelector("#traduzir2")

const titulo = document.querySelector("#titulo")
const texto = document.querySelector("#texto")

const titulo2 = document.querySelector("#titulo2")
const texto2 = document.querySelector("#texto2")

traduzir.classList.remove("hide")

traduzir.addEventListener("click", () =>{
    titulo.innerHTML = "FEAT VINDO AI? ✍🏼🔥"
    texto.innerHTML = `<br>O rapper Grizzy postou nessa manhã (08/09/25) uma foto no estudio junto com o rapper BigXthaPlug. <br> 

<br>Parece que o rapper irá aparecer no projeto dos rappers de Atlanta (Grizzy e Young Thug), BigXthaPlug é um rapper em ascensão que tem uma sonoridade pesada, que combina bastante com o estilo de Grizzy. <br>

<br> Grizzy com a pegada das ruas de Atlanta que também traz uma vibe melódica, sombria e versatil pro som, BigXthaPlug com uma pegada mais pesada e crua e Young Thug com sua versatilidade e facilidade de " deslizar " em beats trap faz com que a expectativa pra esse som fique nas alturas.`
traduzir.classList.add("hide")
})

traduzir2.classList.remove("hide")

traduzir2.addEventListener("click", () =>{
    titulo2.innerHTML = "LIRO E JUSTIN BIEBER 📰 🔥"
    texto2.innerHTML = `<br>O fenômeno Liro Creator voltou a movimentar as redes sociais ao divulgar trechos exclusivos de um clipe gravado ao lado de Justin Bieber, confirmando a participação especial do astro internacional no Deluxe de “Diamond e Destiny”. <br> <br>Nos vídeos compartilhados, os dois artistas aparecem em clima de bastidores, cercados por produção de alto nível, luzes de estúdio e uma atmosfera de superprodução, o que deixou os fãs ainda mais ansiosos. <br> <br>A colaboração promete ser um dos pontos altos do relançamento, consolidando o álbum não apenas como um marco nacional, mas também como um projeto de alcance global. Desde o anúncio, os comentários explodiram nas redes, com fãs especulando que essa parceria pode se tornar um dos maiores hits do ano. <br> <br> O clipe, que fará parte do pacote deluxe, deve ser revelado nas próximas semanas, aumentando as expectativas em torno do novo capítulo da era "Diamonds".`
traduzir2.classList.add("hide")
})


