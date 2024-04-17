 cost numeroSenha= document.querySelector('.parametro-senha-texto');
let tamanhoSenha= 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha-botao')

botoes[0].onclick = diminuiTamanho;


function diminuiTamanho(){
    if(tamanhoSenha > 1){
     //tamanhoSenha= tamanhoSenha-1;
     tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho(){
    if(tamanhoSenha < 20){
        //tamanhoSenha=tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent= tamanhoSenha;
}

const campoSenha = document.querySelector('campo-senha');
