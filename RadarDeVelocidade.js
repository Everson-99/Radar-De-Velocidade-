
/*
let velocidadeCarro = 10

function(velocidadeCarro)
if velocidadeCarro => 110  {alert("fast")}

else velocidadeCarro <= 109 {alert("esta na velocidade certa")
}
(velocidadeCarro)
*/




function iniciarTeste(){
    let velocidadeCarro = window.prompt("Digite a valocidade que você está com seu automovel em Km/H!         ATENÇÃO!!! LIMETE DA VIA É 100KM/H       ")

function Radar() {


    if (velocidadeCarro >= 60 && velocidadeCarro <= 100) {
        alert(" Parabéns você Está dentro da Velocidade permetida pela via ")

    }

    if (velocidadeCarro > 100 && velocidadeCarro <= 110) {
        alert("Você foi multado !! está 10% acima do permetido da via ")
    }


    else if (velocidadeCarro < 60) {
        alert("Atenção sua Velocidade está abaixo do permetido da via, Valocidade minima 60 KM/H !!! ")
    }

    else if (velocidadeCarro >= 111 && velocidadeCarro <= 120) {

        alert("Você foi multado !! está 20% acima do permetido da via")


    }


    else if (velocidadeCarro >= 130 && velocidadeCarro <= 140) {

        alert("Você foi multado !! está 30% acima do permetido da via")


    }

    else if (velocidadeCarro >= 140 && velocidadeCarro <= 150) {

        alert("Você foi multado !! está 50% acima do permetido da via")


    }

    else if (velocidadeCarro >= 150 && velocidadeCarro <= 160) {

        alert("Você foi multado !! está 60% acima do permetido da via")


    }
    else if (velocidadeCarro >= 170 && velocidadeCarro <= 180) {

        alert("Você foi multado !! está 70% acima do permetido da via")


    }

    else if (velocidadeCarro >= 180 && velocidadeCarro <= 190) {

        alert("Você foi multado !! está 80% acima do permetido da via")


    }

    else if (velocidadeCarro >= 190 && velocidadeCarro <= 200) {

        alert("Você foi multado !! está 90% acima do permetido da via")


    }

    else if (velocidadeCarro >= 200 && velocidadeCarro <= 210) {

        alert("Você foi multado !! está 100% acima do permetido da via")

    }

    else if (velocidadeCarro > 211) {
        alert("Sua velociade está acima de 100% do permetido!!  Sua CNH será Suspensa !!")

    }

}
Radar()


alert("Muito obrigado !!    Att Everson Neves")
}
