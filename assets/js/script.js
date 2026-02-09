const input = document.querySelector('input') ;
const ul = document.querySelector('ul');

const botaoLimpar = document.createElement('button');
botaoLimpar.textContent = 'Limpar tudo';
document.body.appendChild(botaoLimpar);

botaoLimpar.addEventListener('click',function(){
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
});

input.addEventListener('keyup', function(event) {
    if(event.key === 'Enter'){
        if(input.value.trim() !== ''){
            let novoLi = document.createElement('li'); 
            novoLi.style.cursor = 'pointer';
            novoLi.textContent = input.value;
            novoLi.addEventListener('click', function(){
                if(this.style.textDecoration === 'line-through'){
                    this.remove();
                } else {
                    this.style.textDecoration = 'line-through';
                    this.style.color = 'gray';
                }
            });
            ul.appendChild(novoLi);
            input.value = '';
            
        }
        
    }
        
    
});