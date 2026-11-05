# relatorio de uso de ia nas atividades

## identificacao

**nome:** Caio de Castro Yarouhas  
**matricula:** 863 - GES

---

## uso da ia no desenvolvimento das atividades

Durante as atividades de programacao orientada a objetos em Java, utilizei apenas o ChatGPT para interpretar os requisitos dos exercicios, obter exemplos de codigo e esclarecer duvidas sobre os conceitos apresentados nas aulas.

O apoio incluiu o fornecimento de codigos completos para os quatro exercicios do pdf e a separacao das classes em arquivos individuais no primeiro exercicio. Tambem utilizei uma conversa de estudo para discutir conceitos e analisar pequenos exemplos com erros.

Solicitei implementacoes simples, sem comentarios e com mensagens dos prints em minusculas e sem acentos. Os nomes das classes e dos metodos foram mantidos conforme os enunciados, respeitando a sintaxe e as convencoes do Java.

---

## como a ia auxiliou

O ChatGPT auxiliou principalmente:

- Apresentando exemplos de classes, objetos, atributos e metodos;
- Demonstrando construtores e a inicializacao de atributos com this;
- Explicando o encapsulamento com private e o acesso por getters;
- Demonstrando heranca com extends e chamadas ao construtor da classe pai com super;
- Apresentando classes abstratas e metodos abstratos;
- Demonstrando sobrescrita de metodos com @Override;
- Explicando polimorfismo;
- Apresentando interfaces e sua implementacao com implements;
- Demonstrando o uso de ArrayList e HashMap;
- Apresentando exemplos de composicao e agregacao;
- Orientando sobre a organizacao das classes em arquivos separados e sobre imports;
- Fornecendo as quatro solucoes completas.

---

## duvidas abordadas

Na conversa de estudo, foram discutidas as seguintes duvidas:

- Por que nome = nome nao inicializa corretamente o atributo de um objeto;
- Como this diferencia o atributo do parametro do construtor;
- Por que uma classe abstrata nao pode ser instanciada diretamente;
- Para que servem as classes abstratas;
- Qual a diferenca entre sobrescrita e sobrecarga de metodos;
- Por que adicionar um parametro ao metodo pode impedir a sobrescrita;
- Por que um metodo que implementa uma interface precisa ser public;
- Quando utilizar uma interface e quando utilizar uma classe abstrata.

O ChatGPT tambem sugeriu outras perguntas e exemplos para estudo. Essas sugestoes nao representam necessariamente duvidas ja discutidas ou resolvidas.

---

## conceitos estudados

Os exemplos e as explicacoes abordaram:

- Criacao de classes e objetos;
- Definicao de atributos e metodos;
- Construtores, this e super;
- Encapsulamento com private e getters;
- Heranca com extends;
- Classes e metodos abstratos;
- Sobrescrita, sobrecarga e @Override;
- Polimorfismo;
- Interfaces e implements;
- Composicao e agregacao;
- Armazenamento de objetos em ArrayList;
- Percurso de colecoes com for-each;
- Armazenamento de pares de chave e valor em HashMap;
- Verificacao de null ao buscar um elemento.

Esses conceitos aparecem nos exercicios de O Castelo Animado, Persona 5, Dandadan e Dungeon Meshi.

---

## apoio nos quatro exercicios

### exercicio 1 - moradores do castelo

O ChatGPT forneceu uma classe abstrata Morador e as classes filhas Mago e DemonioDoFogo. Cada classe filha implementa apresentar() de uma maneira diferente.

Na Main, os dois objetos foram armazenados em variaveis do tipo Morador, demonstrando polimorfismo. Depois, solicitei que as tres classes e a Main fossem apresentadas separadamente, cada uma em seu proprio arquivo.

Tambem recebi orientacao sobre um erro de referencia a DemonioFogo no editor, incluindo o import e a necessidade de manter o nome do arquivo, da classe e do construtor iguais.

### exercicio 2 - cafe leblanc

O ChatGPT forneceu ItemDoCardapio, ComboLeblanc e CafeLeblanc. O combo sobrescreve precoFinal() para aplicar um desconto de 10%.

O cardapio utiliza ArrayList para armazenar itens comuns e combos. Ao percorrer a lista, cada objeto utiliza sua propria implementacao de precoFinal().

### exercicio 3 - mapa de avistamentos

O ChatGPT forneceu a interface Sobrenatural e as classes Alienigena e EspiritoYoukai, que implementam manifestar().

A classe MapaDeAvistamentos utiliza HashMap para associar locais aos seres. Ao investigar um local, o programa verifica se a busca retornou null ou se existe um objeto que pode se manifestar.

### exercicio 4 - cozinheiro e monstros

O ChatGPT forneceu a classe abstrata Monstro, as classes Slime e Mandragora e as classes Panela e Cozinheiro.

A panela e criada dentro do construtor de Cozinheiro, representando composicao. Os monstros sao criados antes e adicionados posteriormente a lista de ingredientes, representando agregacao.

Cada monstro implementa receita() de uma maneira diferente. O cozinheiro percorre os ingredientes e apresenta o nome e a receita de cada um.

---

## adaptacoes solicitadas

Solicitei codigos simples, sem comentarios, com prints em minusculas e sem acentos. Tambem solicitei a separacao das classes e a organizacao de cada exercicio de forma independente.

No primeiro exercicio, a tentativa de criar um objeto Morador diretamente foi apresentada como uma orientacao de teste, fora do codigo final.

No quarto exercicio, a explicacao sobre composicao e agregacao foi apresentada fora do codigo, seguindo minha preferencia por exemplos sem comentarios.

Essas escolhas diferem dos pontos do enunciado que pedem comentarios no codigo.

---

## analise de exemplos com erros

Os trechos com erros foram utilizados como exemplos de estudo.

Em um exemplo, o construtor utilizava nome = nome. A explicacao mostrou que essa atribuicao utiliza apenas o parametro, sem inicializar o atributo do objeto. A forma adequada seria this.nome = nome.

Em outro exemplo, havia uma tentativa de criar um objeto diretamente de uma classe abstrata Animal. A explicacao mostrou que seria necessario utilizar uma classe concreta que implementasse o metodo abstrato.

Tambem foi analisado um metodo emitirSom(String som) marcado com @Override, enquanto o metodo da classe pai era emitirSom(). Como os parametros eram diferentes, o metodo representava uma sobrecarga, e nao uma sobrescrita.

Por fim, um exemplo de interface apresentava o metodo mover() sem public na classe que o implementava. A explicacao mostrou que a implementacao nao pode reduzir a visibilidade do metodo definido pela interface.

---

## historico da conversa

O uso do ChatGPT envolveu a leitura dos enunciados, o fornecimento das quatro solucoes completas, a separacao das classes do primeiro exercicio, a orientacao sobre imports e uma conversa de estudo com explicacoes conceituais e analise de exemplos com erros.

Este relatorio registra tanto o apoio conceitual quanto o fornecimento de codigo. Nao afirma que todos os codigos foram compilados ou executados, pois essa verificacao nao foi demonstrada na conversa.

Os historicos das conversas podem ser anexados conforme as orientacoes de entrega da atividade.

