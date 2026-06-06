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

//operadores aritmeticos
/*
adição: +
subtração: -
multiplicação: *
divisão: /
módulo: %
exponenciação: **

exemplo de operadores aritmeticos:

//adiçao
let numero1 = 10;
let numero2 = 5;
let resultado = numero1 + numero2;
console.log(resultado);

//subtração
let numero3 = 20;
let numero4 = 8;
let resultado2 = numero3 - numero4;
console.log(resultado2);

//multiplicação
let numero5 = 4;
let numero6 = 6;
let resultado3 = numero5 * numero6;
console.log(resultado3);

//divisão
let numero7 = 15;
let numero8 = 3;
let resultado4 = numero7 / numero8;
console.log(resultado4);

//módulo
let numero9 = 10;
let numero10 = 3;
let resultado5 = numero9 % numero10;
console.log(resultado5);

//exponenciação
let numero11 = 2;
let numero12 = 3;
let resultado6 = numero11 ** numero12;
console.log(resultado6);
*/

//operadores de comparação
/*
igualdade: ==
estritamente igual: ===
diferença: !=
estritamente diferente: !==
maior que: >
menor que: < 
maior ou igual a: >=
menor ou igual a: <=

exemplo de operadores de comparação:
let numero1 = 10;
let numero2 = "10";
console.log(numero1 == numero2); // true
console.log(numero1 === numero2); // false
console.log(numero1 != numero2); // false
console.log(numero1 !== numero2); // true
console.log(numero1 > 5); // true
console.log(numero1 < 15); // true
console.log(numero1 >= 10); // true
console.log(numero1 <= 9); // false
*/

//operadores lógicos
/*
AND: &&
OR: ||
NOT: !
exemplo de operadores lógicos:
let idade = 25;
let temCarteira = true;

console.log(idade >= 18 && temCarteira); // true
console.log(idade >= 18 || temCarteira); // true
console.log(!temCarteira); // false
*/

//operadores de atribuição
/*
atribuição simples: = ou seja, x = y atribui o valor de y para x
atribuição de adição: += ou seja, x += y é equivalente a x = x + y
atribuição de subtração: -= ou seja, x -= y é equivalente a x = x - y
atribuição de multiplicação: *= ou seja, x *= y é equivalente a x = x * y
atribuição de divisão: /= ou seja, x /= y é equivalente a x = x / y
atribuição de módulo: %= ou seja, x %= y é equivalente a x = x % y
atribuição de exponenciação: **= ou seja, x **= y é equivalente a x = x ** y

exemplo de operadores de atribuição:
let x = 10;
x += 5;
console.log(x); // 15

let y = 20;
y -= 3;
console.log(y); // 17   

let z = 4;
z *= 2;
console.log(z); // 8

let a = 16;
a /= 4;
console.log(a); // 4

let b = 10;
b %= 3;
console.log(b); // 1

let c = 2;
c **= 3;
console.log(c); // 8

*/

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

//prototypes
/*
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
Pessoa.prototype.apresentar = function() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
};

const pessoa1 = new Pessoa("Lourival", 22);
console.log(pessoa1.apresentar()); // Saída: Olá, meu nome é Lourival e tenho 22 anos.
//prototypes são uma forma de criar objetos e definir suas propriedades e comportamentos,eles são muito utilizados para organizar o codigo e criar estruturas mais complexas,eles permitem a criação de objetos com características semelhantes,facilitando a reutilização de codigo e a manutenção do codigo,eles são uma parte fundamental da programação orientada a objetos em JavaScript.
*/

//funçoes de string
/*
const texto = "Olá, mundo!";
console.log(texto.length); // Saída: 13
console.log(texto.toUpperCase()); // Saída: OLÁ, MUNDO!
console.log(texto.toLowerCase()); // Saída: olá, mundo!
console.log(texto.includes("mundo")); // Saída: true
console.log(texto.replace("mundo", "JavaScript")); // Saída: Olá, JavaScript!

const frase = "JavaScript é uma linguagem de programação.";
console.log(frase.split(" ")); // Saída: ["JavaScript", "é", "uma", "linguagem", "de", "programação."]
console.log(frase.indexOf("linguagem")); // Saída: 17
console.log(frase.substring(0, 10)); // Saída: JavaScript

mais exemplos de funções de string:
const nome = "Lourival";
console.log(nome.charAt(0)); // Saída: L
console.log(nome.endsWith("val")); // Saída: true
console.log(nome.startsWith("Lou")); // Saída: true
console.log(nome.trim()); // Saída: "Lourival" (remove espaços em branco)

//funções de string são métodos que podem ser utilizados para manipular e transformar strings,elas são muito úteis para realizar operações comuns em strings,como verificar o comprimento,converter para maiúsculas ou minúsculas,verificar se uma substring está presente,substituir partes da string,entre outras operações.
*/

//funçoes de array
/*
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.length); // Saída: 5
console.log(numeros.includes(3)); // Saída: true
console.log(numeros.indexOf(4)); // Saída: 3
console.log(numeros.slice(1, 4)); // Saída: [2, 3, 4]

const frutas = ["maçã", "banana", "laranja"];
console.log(frutas.join(", ")); // Saída: "maçã, banana, laranja"
console.log(frutas.reverse()); // Saída: ["laranja", "banana", "maçã"]
console.log(frutas.sort()); // Saída: ["banana", "laranja", "maçã"]

const numeros2 = [1, 2, 3, 4, 5];
console.log(numeros2.map(numero => numero * 2)); // Saída: [2, 4, 6, 8, 10]
console.log(numeros2.filter(numero => numero % 2 === 0)); // Saída: [2, 4]
console.log(numeros2.reduce((total, numero) => total + numero, 0)); // Saída: 15

//funções de array são métodos que podem ser utilizados para manipular e transformar arrays,elas são muito úteis para realizar operações comuns em arrays,como verificar o comprimento,verificar se um elemento está presente,obter o índice de um elemento,obter uma parte do array,unir os elementos em uma string,inverter a ordem dos elementos,ordenar os elementos,entre outras operações.
*/

//funçoes de objeto
/*
const pessoa = {    
    nome: "Lourival",
    idade: 22,
    cidade: "Hortolândia"
};
console.log(pessoa.nome); // Saída: Lourival
console.log(pessoa.idade); // Saída: 22
console.log(pessoa.cidade); // Saída: Hortolândia
console.log(Object.keys(pessoa)); // Saída: ["nome", "idade", "cidade"]
console.log(Object.values(pessoa)); // Saída: ["Lourival", 22, "Hortolândia"]
console.log(Object.entries(pessoa)); // Saída: [["nome", "Lourival"], ["idade", 22], ["cidade", "Hortolândia"]] 

mais exemplos de funções de objeto:
const pessoa2 = {    
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};
console.log(pessoa2.hasOwnProperty("nome")); // Saída: true
console.log(pessoa2.hasOwnProperty("sobrenome")); // Saída: false
console.log(Object.assign({}, pessoa2, { profissao: "Desenvolvedor" })); // Saída: { nome: "João", idade: 30, cidade: "São Paulo", profissao: "Desenvolvedor" }

//funções de objeto são métodos que podem ser utilizados para manipular e transformar objetos,elas são muito úteis para realizar operações comuns em objetos,como acessar as propriedades,obter as chaves,obter os valores,obter as entradas,entre outras operações.
*/

//funçoes de data
/*
const data = new Date();
console.log(data); // Saída: Data e hora atual
console.log(data.getFullYear()); // Saída: Ano atual
console.log(data.getMonth()); // Saída: Mês atual (0-11)
console.log(data.getDate()); // Saída: Dia do mês atual
console.log(data.getHours()); // Saída: Hora atual
console.log(data.getMinutes()); // Saída: Minuto atual
console.log(data.getSeconds()); // Saída: Segundo atual
const data2 = new Date("2022-01-01");
console.log(data2); // Saída: 2022-01-01T00:00:00.000Z
console.log(data2.getFullYear()); // Saída: 2022
console.log(data2.getMonth()); // Saída: 0 (Janeiro)
console.log(data2.getDate()); // Saída: 1
console.log(data2.getHours()); // Saída: 0
console.log(data2.getMinutes()); // Saída: 0
console.log(data2.getSeconds()); // Saída: 0
//funções de data são métodos que podem ser utilizados para manipular e transformar objetos de data,elas são muito úteis para realizar operações comuns em datas,como obter o ano,obter o mês,obter o dia do mês,obter a hora,obter o minuto,obter o segundo,entre outras operações.
*/

//funçoes de math
/*
console.log(Math.PI); // Saída: 3.141592653589793
console.log(Math.E); // Saída: 2.718281828459045
console.log(Math.abs(-5)); // Saída: 5
console.log(Math.ceil(4.2)); // Saída: 5
console.log(Math.floor(4.8)); // Saída: 4
console.log(Math.round(4.5)); // Saída: 5
console.log(Math.max(1, 2, 3, 4, 5)); // Saída: 5
console.log(Math.min(1, 2, 3, 4, 5)); // Saída: 1
console.log(Math.random()); // Saída: Número aleatório entre 0 e 1
//funções de math são métodos que podem ser utilizados para manipular e transformar números,elas são muito úteis para realizar operações comuns em números,como obter o valor absoluto,arredondar para cima ou baixo,obter o máximo ou mínimo entre vários números,gerar números aleatórios,entre outras operações.
*/

//funçoes de console
/*
console.log("Este é um log de informação.");
console.error("Este é um log de erro.");
console.warn("Este é um log de aviso.");
console.table([{ nome: "Lourival", idade: 22 }, { nome: "João", idade: 30 }]);
// Código a ser medido
console.time("Tempo de execução");
console.timeEnd("Tempo de execução");

console.group("Grupo de logs");
//funções de console são métodos que podem ser utilizados para exibir informações no console,elas são muito úteis para depuração e teste de código.
*/

//
