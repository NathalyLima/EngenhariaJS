document.addEventListener('DOMContentLoaded', function () {
    function criarElemento(tag, texto = '', classe = '', estilos = {}) {
        const elemento = document.createElement(tag);
        if (texto) elemento.textContent = texto;
        if (classe) elemento.className = classe;
        for (const [propriedade, valor] of Object.entries(estilos)) {
            elemento.style[propriedade] = valor;
        }
        return elemento;
    }

    const divContador = criarElemento('div', '', 'contador', {
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        border: '2px solid #ccc',
        padding: '20px',
        width: '350px',
        margin: '0 auto',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9'
    });
    document.body.appendChild(divContador);

    let homens = 0;
    let mulheres = 0;

    function atualizarTotal() {
        totalInput.value = homens + mulheres;
        homensInput.value = homens;
        mulheresInput.value = mulheres;
    }

    const totalContainer = criarElemento('div', '', '', {
        textAlign: 'center',
        marginBottom: '10px',
        position: 'relative'
    });
    const totalTitulo = criarElemento('h2', 'Total', '', {
        margin: '0',
        fontSize: '24px',
        display: 'inline-block'
    });
    const botaoReset = criarElemento('button', '↻', 'reset', {
        fontSize: '35px',
        padding: '5px 15px',
        border: 'none',
        borderRadius: '0',
        cursor: 'pointer',
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'transparent',
        color: 'inherit'
    });
    
    botaoReset.onclick = function () {
        homens = 0;
        mulheres = 0;
        atualizarTotal();
    };

    totalContainer.appendChild(totalTitulo);
    totalContainer.appendChild(botaoReset);
    divContador.appendChild(totalContainer);

    const totalInput = criarElemento('input', '', '', {
        textAlign: 'center',
        width: '60px',
        fontSize: '18px',
        marginTop: '10px',
        display: 'block',
        margin: '0 auto'
    });
    totalInput.type = 'text';
    totalInput.value = 0;
    totalInput.readOnly = true;
    divContador.appendChild(totalInput);

    function criarBloco(tipo) {
        const bloco = criarElemento('div', '', 'bloco', {
            display: 'inline-block',
            width: '150px',
            margin: '10px',
            textAlign: 'center'
        });

        const img = criarElemento('img', '', '', {
            width: '100px',
            height: 'auto'
        });
        img.src = tipo === 'Homens' ? 'homem.png' : 'mulher.png'; 
        bloco.appendChild(img);

        const containerInterno = criarElemento('div', '', 'container-interno', {
            marginTop: '10px'
        });

        const botoes = criarElemento('div', '', 'botoes', {
            marginBottom: '10px'
        });

        const botaoMais = criarElemento('button', '+', 'botao-mais', {
            width: '50px',
            height: '50px',
            margin: '0 5px',
            fontSize: '24px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white'
        });
        
        const botaoMenos = criarElemento('button', '-', 'botao-menos', {
            width: '40px',
            height: '40px',
            margin: '0 5px',
            fontSize: '20px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: '#f44336',
            color: 'white'
        });

        const rotulo = criarElemento('div', tipo, '', {
            marginBottom: '10px',
            fontSize: '18px',
            fontWeight: 'bold'
        });

        const inputNumero = criarElemento('input', '', '', {
            textAlign: 'center',
            width: '60px',
            fontSize: '18px',
            display: 'block',
            margin: '0 auto'
        });
        inputNumero.type = 'text';
        inputNumero.value = 0;
        inputNumero.readOnly = true;

        botoes.appendChild(botaoMais);
        botoes.appendChild(botaoMenos);

        containerInterno.appendChild(botoes);
        containerInterno.appendChild(rotulo); 
        containerInterno.appendChild(inputNumero);

        bloco.appendChild(containerInterno); 

    
        if (tipo === 'Homens') {
            homensInput = inputNumero;
            botaoMais.onclick = function () {
                homens++;
                atualizarTotal();
            };
            botaoMenos.onclick = function () {
                if (homens > 0) {
                    homens--;
                    atualizarTotal();
                }
            };
        } else {
            mulheresInput = inputNumero;
            botaoMais.onclick = function () {
                mulheres++;
                atualizarTotal();
            };
            botaoMenos.onclick = function () {
                if (mulheres > 0) {
                    mulheres--;
                    atualizarTotal();
                }
            };
        }

        return bloco;
    }

    const blocoHomens = criarBloco('Homens');
    const blocoMulheres = criarBloco('Mulheres');

    divContador.appendChild(blocoHomens);
    divContador.appendChild(blocoMulheres);
});
