/*variaveis

const variavel1 = "constante";
let variavel2 = 3;

function teste1() {
  var variavel3 = 5;
}

//as variaveis guarda valores necessarios para executar diversas
//funçoes em um programa

//cada uma tem sua diferença ,const nao pode ter seu valor mudado
//portanto assim que declarada tem que ter seu valor atribuido
//let pode ter seu valor redeclarado a qualquer momento nao
//possui a mesma limitaçao que o const,ja o var pode ter seu valor
//redeclarado porem ,ela so funciona dentro do escopo em que foi declarada.
*/

/*arrays
let array1 = [1, 5, 7, 9,"ola","mundo",99];

console.log(array1[5]);

array1[2] ="pode_ser_mudado";
console.log(array1[2]);

//arrays cria um conjunto de valores que pode ser 
// chamados por uma unica variavel ,os valores  
//podem ser de varios tipos e podem ser reatribuidos
//posteriormente,mas isso se for uma let ou var
//pois const nao pode ser mudada.
*/

/*objetos
const formulario = {
    nome:" ",
    idade:0,
    cidade:" ",
    dados :{
       cpf:"000.000.000-0"
    }
}

formulario.nome="lourival";
formulario.idade=22;
formulario.cidade="hortolandia";
console.log(formulario.nome);
console.log(formulario.idade);
console.log(formulario.cidade);

//objetos cria um conjunto de variaveis com seus respectivos valores e tambem e possivel criar outros objetos dentro do mesmo e algo interessante a se notar
//e que se o objeto declarado estiver declarado com const se torna uma das raras vezes em que um const pode ser mudado.*/

//

//estruturas de repetição
/*
for (let numero = 0 ;numero <= 20;numero++) {

  console.log(`numero: ${numero}`);

}
//for é um loop que tem uma estrutura de repetição bem definida,ele tem uma variavel de controle,uma condição de parada e um incremento ou decremento,ele é muito utilizado quando se sabe o numero exato de vezes que se quer repetir um bloco de codigo.


let numero2 = 0;

while(numero2 <= 15){
   console.log("numero2:"+numero2);
   numero2++;
}
//while é um loop que tem uma estrutura de repetição mais flexivel,ele tem apenas uma condição de parada,ele é muito utilizado quando não se sabe o numero exato de vezes que se quer repetir um bloco de codigo,mas se sabe a condição para parar a repetição.

let numero3=0;

do{

console.log("numero3:"+numero3);
numero3++;

}while(numero3 <= 0);

//do while é um loop que tem uma estrutura de repetição semelhante ao while,mas a diferença é que ele executa o bloco de codigo pelo menos uma vez,pois a condição de parada é verificada somente depois da execução do bloco de codigo,ele é muito utilizado quando se quer garantir que o bloco de codigo seja executado pelo menos uma vez.*/

//estruturas condicionais
/*
let idade = 18;
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você não é maior de idade.");
}

//if else são estruturas condicionais que permitem executar um bloco de codigo dependendo de uma condição,if é utilizado para verificar se a condição é verdadeira,caso seja verdadeira o bloco de codigo dentro do if é executado,caso seja falsa o bloco de codigo dentro do else é executado,else é opcional e pode ser omitido caso não seja necessário executar um bloco de codigo quando a condição for falsa.

let dia = "segunda-feira";

switch(dia) {
    case "segunda-feira":
        console.log("Hoje é segunda-feira.");
        break;
    case "terça-feira":
        console.log("Hoje é terça-feira.");
        break;
    // ... outros casos
    default:
        console.log("Dia não reconhecido.");
}

//switch é uma estrutura condicional que permite executar um bloco de codigo dependendo do valor de uma variavel,ele é utilizado para verificar se a variavel tem um valor específico,caso tenha o bloco de codigo dentro do case correspondente é executado,caso contrário o bloco de codigo dentro do default é executado,default é opcional e pode ser omitido caso não seja necessário executar um bloco de codigo quando a variavel não tiver nenhum dos valores especificados nos cases.


nome = "lourival";

nome === "lourival" ? console.log("O nome é lourival.") : console.log("O nome não é lourival.");

//operador ternário é uma estrutura condicional que permite executar um bloco de codigo dependendo de uma condição,ele é utilizado para verificar se a condição é verdadeira,caso seja verdadeira o bloco de codigo antes dos dois pontos é executado,caso seja falsa o bloco de codigo depois dos dois pontos é executado,ele é uma forma mais concisa de escrever um if else simples.
*/

//funções
/*
function saudacao(nome) {
    return `Olá, ${nome}!`;
}

console.log(saudacao("Lourival"));

//funções são blocos de codigo que podem ser reutilizados,elas podem receber parametros e retornar valores,elas são muito utilizadas para organizar o codigo e evitar repetição,elas podem ser declaradas de varias formas,como funções nomeadas,funções anônimas,funções arrow,entre outras,inclusive esta e uma nomeada.

()=> console.log("Função arrow!");

//função arrow é uma forma mais concisa de escrever uma função,ela é declarada utilizando a sintaxe ()=>{},ela é muito utilizada para funções simples e para evitar o uso do this,ela não tem seu proprio this,ela herda o this do contexto onde foi declarada.

exemplo de função arrow:

const soma = (a, b) => a + b;       
console.log(soma(3, 5)); // Saída: 8

outro exemplo de função arrow:

const saudacao = nome => `Olá, ${nome}!`;
console.log(saudacao("Lourival")); // Saída: Olá, Lourival!

funcoes anonimas são funções que não possuem um nome,elas são declaradas utilizando a sintaxe function(){},elas são muito utilizadas para funções que são passadas como parametro para outras funções,como callbacks,elas podem ser atribuídas a variaveis ou constantes para serem reutilizadas posteriormente.

exemplo de função anônima:

const saudacao = function(nome) {
    return `Olá, ${nome}!`;
};
console.log(saudacao("Lourival")); // Saída: Olá, Lourival!

funçoes callback são funções que são passadas como parametro para outras funções,elas são muito utilizadas para lidar com operações assíncronas,como requisições de rede,leitura de arquivos,entre outras,elas são chamadas de volta quando a operação assíncrona é concluída,permitindo que o codigo continue executando enquanto espera pela conclusão da operação assíncrona.

exemplo de função callback:

function fazerRequisicao(url, callback) {
    // Simulação de uma requisição assíncrona
    setTimeout(() => {
        const resposta = `Resposta da ${url}`;
        callback(resposta);
    }, 2000);
}

outro exemplo de função callback:

function lerArquivo(caminho, callback) {
    // Simulação de leitura de arquivo assíncrona
    setTimeout(() => {
        const conteudo = `Conteúdo do arquivo ${caminho}`;
        callback(conteudo);
    }, 2000);
}

funçoes recursivas são funções que se chamam a si mesmas,elas são muito utilizadas para resolver problemas que podem ser divididos em subproblemas menores,como algoritmos de ordenação,algoritmos de busca,entre outros,elas devem ter uma condição de parada para evitar chamadas infinitas,caso contrário o programa pode entrar em um loop infinito e travar.

funçoes recursivas exemplo:     

function fatorial(n) {          
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}

outro exemplo de funçao recursiva:

function fibonacci(n) {     
    if (n === 0) {
        return 0;
    }       
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

funçoes de primeira classe são funções que podem ser tratadas como qualquer outra variavel,ou seja,elas podem ser atribuídas a variaveis,passadas como parametro para outras funções e retornadas por outras funções,elas são muito utilizadas para criar codigo mais flexivel e reutilizavel,permitindo que as funçoes sejam manipuladas de forma mais dinamica.

exemplo de função de primeira classe:

function saudacao(nome) {
    return `Olá, ${nome}!`;
}

funçoes de ordem superior são funções que recebem outras funções como parametro ou retornam outras funções,elas são muito utilizadas para criar funções mais flexiveis e reutilizaveis,como map,filter,reduce,entre outras,elas permitem que o codigo seja mais declarativo e expressivo,facilitando a leitura e manutenção do codigo.

exemplo de função de ordem superior:

function map(array, funcao) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(funcao(array[i]));
    }
    return resultado;
}

outro exemplo de função de ordem superior:

function filter(array, funcao) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (funcao(array[i])) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}

funçoes puras são funções que não possuem efeitos colaterais,ou seja,elas não modificam nenhum estado externo e sempre retornam o mesmo resultado para os mesmos parametros,elas são muito utilizadas para criar codigo mais previsivel e testavel,elas facilitam a depuração e a manutenção do codigo,pois não dependem de nenhum estado externo para funcionar corretamente.

exemplo de função pura:

function soma(a, b) {
    return a + b;
}   
 

//funçoes impuras são funções que possuem efeitos colaterais,ou seja,elas modificam algum estado externo ou dependem de algum estado externo para funcionar corretamente,elas podem ser mais flexiveis e poderosas do que as funçoes puras,mas também podem ser mais difíceis de depurar e manter,pois seu comportamento pode ser influenciado por fatores externos.

exemplo de função impura:
let contador = 0;

function incrementar() {
    contador++;
    return contador;
}
*/

//classes
/*
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const pessoa1 = new Pessoa("Lourival", 22);
console.log(pessoa1.apresentar());  

//classes são uma forma de criar objetos e definir suas propriedades e comportamentos,elas são muito utilizadas para organizar o codigo e criar estruturas mais complexas,elas permitem a criação de objetos com características semelhantes,facilitando a reutilização de codigo e a manutenção do codigo,elas são uma parte fundamental da programação orientada a objetos.

classes também suportam herança,permitindo que uma classe filha herde as propriedades e métodos de uma classe pai,isso facilita a criação de hierarquias de classes e a reutilização de codigo.

exemplo de herança:
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
}

class Cachorro extends Animal {
    latir() {
        return `${this.nome} está latindo!`;
    }
}

const cachorro1 = new Cachorro("Rex");
console.log(cachorro1.latir()); // Saída: Rex está latindo!

classes também suportam encapsulamento,permitindo que as propriedades e métodos de uma classe sejam protegidos e acessados apenas por meio de métodos públicos,isso ajuda a garantir a integridade dos dados e a segurança do codigo.

exemplo de encapsulamento:
class ContaBancaria {
    constructor(saldo) {
        this._saldo = saldo;
    }
}

const conta1 = new ContaBancaria(1000);
console.log(conta1._saldo); // Acessando diretamente a propriedade (não recomendado)

exemplo de encapsulamento com métodos públicos:
class ContaBancaria {
    constructor(saldo) {
        this._saldo = saldo;
    }

    get saldo() {
        return this._saldo;
    }
}

const conta1 = new ContaBancaria(1000);
console.log(conta1.saldo); // Acessando o saldo por meio do método público (recomendado)

classes também suportam polimorfismo,permitindo que objetos de diferentes classes sejam tratados de forma uniforme,isso facilita a criação de codigo mais flexivel e reutilizavel,permitindo que o mesmo codigo possa trabalhar com objetos de diferentes tipos.

exemplo de polimorfismo:
class Forma {
    area() {
        return 0;
    }
}

class Retangulo extends Forma {
    constructor(largura, altura) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    area() {
        return this.largura * this.altura;
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    area() {
        return Math.PI * this.raio ** 2;
    }
}   

const formas = [new Retangulo(5, 10), new Circulo(3)];
formas.forEach(forma => {
    console.log(`Área: ${forma.area()}`);
});

classes também suportam métodos estáticos,permitindo que métodos sejam chamados diretamente na classe sem a necessidade de criar uma instância da classe,isso é útil para criar métodos utilitários ou funções que não dependem do estado de uma instância específica.

exemplo de método estático: 
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}
console.log(Matematica.soma(3, 5)); // Saída: 8

classes também suportam getters e setters,permitindo que propriedades sejam acessadas e modificadas por meio de métodos,isso ajuda a controlar o acesso às propriedades e a garantir a integridade dos dados.

exemplo de getters e setters:
class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }   

    get nome() {
        return this._nome;
    }
    set nome(novoNome) {
        this._nome = novoNome;
    }
    get idade() {
        return this._idade;
    }
    set idade(novaIdade) {
        this._idade = novaIdade;
    }
}

const pessoa1 = new Pessoa("Lourival", 22);
console.log(pessoa1.nome); // Saída: Lourival
pessoa1.nome = "João";
console.log(pessoa1.nome); // Saída: João

*/

//desestruturacao
/*
const pessoa = {    
    nome: "Lourival",
    idade: 22,
    cidade: "Hortolândia"
};  

const { nome, idade, cidade } = pessoa;
console.log(nome); // Saída: Lourival
console.log(idade); // Saída: 22
console.log(cidade); // Saída: Hortolândia  

const numeros = [1, 2, 3, 4, 5];
const [primeiro, segundo, ...resto] = numeros;
console.log(primeiro); // Saída: 1
console.log(segundo); // Saída: 2
console.log(resto); // Saída: [3, 4, 5]
*/

//rest e spread
/*
function soma(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}
console.log(soma(1, 2, 3)); // Saída: 6     

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array3); // Saída: [1, 2, 3, 4, 5, 6]
*/

//desestruturaçao e rest e spread
/*
exemplo de desestruturação com rest e spread:
const pessoa = {
    nome: "Lourival",
    idade: 22,
    cidade: "Hortolândia"
};
const { nome, ...resto } = pessoa;
console.log(nome); // Saída: Lourival
console.log(resto); // Saída: { idade: 22, cidade: "Hortolândia" }
const array1 = [1, 2, 3];
const [primeiro, ...resto] = array1;
console.log(primeiro); // Saída: 1
console.log(resto); // Saída: [2, 3]
*/
