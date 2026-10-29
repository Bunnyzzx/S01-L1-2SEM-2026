# relatorio de uso de ia nas atividades

## identificacao

**nome:** Caio de Castro Yarouhas  
**matricula:** 863 - GES

---

## uso da ia no desenvolvimento das atividades

Durante as atividades de programacao orientada a objetos em JavaScript, utilizei o ChatGPT para interpretar os requisitos dos exercicios, obter exemplos e esclarecer duvidas sobre os conceitos apresentados nas aulas.

O apoio incluiu codigos completos para os quatro exercicios e explicacoes sobre partes das solucoes. Tambem utilizei uma conversa de estudo para fazer perguntas conceituais e analisar pequenos exemplos com erros.

Solicitei implementacoes simples, sem comentarios e com mensagens sem acentos e em minusculas. Os nomes das classes e dos metodos foram mantidos conforme os enunciados.

---

## como a ia auxiliou

A IA auxiliou principalmente:

- Apresentando exemplos de classes e objetos em JavaScript;
- Demonstrando a inicializacao de objetos com `constructor`;
- Explicando o uso de `this` para acessar atributos do objeto;
- Demonstrando atributos privados com `#`;
- Apresentando a leitura de atributos privados com `get`;
- Demonstrando heranca com `extends` e utilizacao de `super`;
- Apresentando classes filhas sem `constructor` proprio;
- Demonstrando sobrescrita de metodos e polimorfismo;
- Apresentando exemplos de composicao e agregacao;
- Demonstrando arrays de objetos e os metodos `forEach`, `filter` e `find`;
- Demonstrando a verificacao de instancias com `instanceof`;
- Apresentando um contrato de comportamento com `throw new Error`;
- Explicando erros em exemplos curtos;
- Fornecendo as quatro solucoes completas.

---

## duvidas abordadas e perguntas propostas

Na conversa de estudo, foram abordadas as seguintes duvidas:

- O que `this` representa dentro de uma classe;
- Se uma classe filha precisa ter um `constructor` proprio;
- Por que `nome = nome` nao cria o atributo esperado no objeto;
- Por que `super(nome)` precisa aparecer antes de utilizar `this` no construtor de uma classe filha;
- O que acontece quando uma classe filha sobrescreve um metodo;
- Qual a diferenca entre composicao e agregacao;
- Qual a diferenca entre `undefined` e `null`;
- Quando utilizar `return` e quando utilizar `console.log`;
- Qual o papel de uma interface como contrato;
- Como representar um contrato em JavaScript, que nao possui interfaces nativas.

A IA tambem sugeriu perguntas para aprofundar o estudo:

- Qual a diferenca entre `let`, `const` e `var`;
- Se os atributos de um objeto declarado com `const` podem ser alterados;
- Qual a diferenca entre `==` e `===`;
- Para que serve o operador `new`;
- Qual a diferenca entre `map` e `forEach`;
- O que `find` retorna quando nao encontra um elemento;
- Como o polimorfismo pode reduzir verificacoes com `if`.

Essas perguntas foram propostas como possibilidades de estudo, sem representar necessariamente duvidas ja respondidas.

---

## conceitos estudados

Os exemplos e as explicacoes abordaram:

- Criacao de classes e objetos;
- Definicao de atributos e metodos;
- Inicializacao com `constructor`;
- Utilizacao de `this`;
- Encapsulamento com atributos privados;
- Leitura de atributos com getters;
- Heranca e reutilizacao de codigo;
- Sobrescrita de metodos;
- Polimorfismo;
- Composicao e agregacao;
- Armazenamento de objetos em arrays;
- Adicao de elementos com `push`;
- Percurso de arrays com `forEach`;
- Filtragem com `filter`;
- Busca com `find`;
- Verificacao de instancias com `instanceof`;
- Sinalizacao de metodos que precisam ser implementados com `throw new Error`.

Esses conceitos aparecem nos exercicios de Pokemon, Valorant, Gravity Falls e Hunter x Hunter.

---

## adaptacoes realizadas

Solicitei que os quatro exercicios fossem apresentados separadamente, com implementacoes simples, sem comentarios e com mensagens sem acentos e em minusculas.

No exercicio de Pokemon, a vida foi armazenada no atributo privado `#vida`, com acesso de leitura por um getter. O metodo `sofrerDano` utiliza `Math.max` para impedir que a vida fique abaixo de zero. As classes `Squirtle` e `Bulbasaur` sobrescrevem o metodo `atacar`, causando danos diferentes.

No exercicio de Valorant, cada agente cria sua propria pistola dentro do construtor, representando composicao. O esquadrao recebe agentes criados anteriormente, representando agregacao. As classes filhas implementam habilidades diferentes, e a selecao dos controladores utiliza `filter` com `instanceof`.

No exercicio de Gravity Falls, o diario cria suas fichas dentro do metodo `anotar`, representando composicao. Os funcionarios sao criados antes da cabana e contratados posteriormente, representando agregacao.

No exercicio de Hunter x Hunter, a trupe recebe aranhas criadas anteriormente. O metodo `buscarAranha` utiliza `find`, e um array com usuarios de tipos diferentes de Nen e percorrido com `forEach`, demonstrando polimorfismo nos ataques.

As linhas que provocam erros nos exercicios 1 e 2 foram fornecidas separadamente para teste. A explicacao sobre composicao e agregacao solicitada no exercicio 3 foi apresentada fora do codigo, seguindo minha solicitacao de nao incluir comentarios.

---

## analise de exemplos com erros

Na conversa de estudo, apresentei um exemplo em que o construtor utilizava `nome = nome`. A explicacao mostrou que essa atribuicao nao cria o atributo no objeto e que seria necessario utilizar `this.nome = nome`.

Tambem apresentei uma classe filha que utilizava `this.matricula` antes de chamar `super(nome)`. A explicacao mostrou que, nesse construtor, a chamada a `super` deve ocorrer antes do acesso a `this`.

Esses exemplos ajudaram a compreender a inicializacao dos objetos e a diferenca entre parametros e atributos.

---

## historico da conversa

O uso da IA envolveu a leitura dos enunciados, o fornecimento das quatro solucoes completas, a sugestao de perguntas e uma conversa de estudo com explicacoes conceituais e analise de exemplos com erros.

Este relatorio registra tanto o apoio conceitual quanto o fornecimento de codigo. Os historicos das conversas podem ser anexados para documentar esse uso, conforme as orientacoes de entrega da atividade.