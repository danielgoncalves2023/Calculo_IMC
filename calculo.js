const calcular = document.querySelector("#botaoCalculo");

function imc(){
    event.preventDefault();

    const nome = document.querySelector('#nome').value;
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;
    const resultado = document.querySelector('#resultado');

    if(nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2)

        if(valorIMC < 18.5){
            resultado.innerHTML = (`Olá ${nome}, seu IMC é ${valorIMC}. Você está abaixo do peso.`)
        }else if(valorIMC < 24.9){
            resultado.innerHTML = (`Olá ${nome}, seu IMC é ${valorIMC}. Você está dentro do seu peso normal.`)
        }else if(valorIMC < 29.9){
            resultado.innerHTML = (`Olá ${nome}, seu IMC é ${valorIMC}. Você está com sobrepeso.`)
        }else if(valorIMC < 34.9){
            resultado.innerHTML = (`Olá ${nome}, seu IMC é ${valorIMC}. Você está com obesidade grau I.`)
        }else if(valorIMC < 39.9){
            resultado.innerHTML = (`Olá ${nome}, seu IMC é ${valorIMC}. Você está com obesidade grau II(considerada severa).`)
        }else{resultado.innerHTML = (`Olá ${nome}, seu IMC é ${valorIMC}. Você está com obesidade grau III(considerada mórbida).`)
        }
    }else{
        resultado.innerHTML = (`Favor verificar se todos os dados foram preenchidos corretamente.`)
    }
}

calcular.addEventListener('click', imc)