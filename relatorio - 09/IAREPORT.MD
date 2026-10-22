# Relatorio de Uso de IA nas Atividades

## Identificacao

**Nome:** Caio de Castro Yarouhas
**Matricula:** 863 - GES

---

## Uso da IA no desenvolvimento das atividades

Durante as atividades de Programacao Orientada a Objetos em Ruby, utilizei o ChatGPT para interpretar os requisitos dos exercicios e obter exemplos dos conceitos apresentados nas aulas.

O apoio incluiu codigos completos para os quatro exercicios e explicacoes sobre partes das solucoes.

Solicitei exemplos simples, sem comentarios e com mensagens sem acentos e em minusculas, para facilitar a leitura dos programas. Os nomes das classes e dos modulos mantiveram as letras maiusculas exigidas pela sintaxe de Ruby.

---

## Como a IA auxiliou

A IA auxiliou principalmente:

- Apresentando exemplos de classes e objetos em Ruby;
- Demonstrando a inicializacao de atributos com `initialize`;
- Demonstrando variaveis de instancia com `@`;
- Demonstrando a utilizacao de `attr_reader`;
- Apresentando getters e setters manuais;
- Demonstrando a validacao de valores antes de alterar atributos;
- Demonstrando heranca e reutilizacao de codigo com `super`;
- Apresentando classes filhas sem `initialize` proprio;
- Demonstrando sobrescrita de metodos e polimorfismo;
- Apresentando arrays com objetos de classes diferentes;
- Demonstrando os metodos `each`, `map` e `select`;
- Apresentando exemplos de composicao e agregacao;
- Demonstrando modulos e sua inclusao com `include`;
- Demonstrando a verificacao de comportamentos com `respond_to?`;
- Explicando o erro gerado por `raise NotImplementedError`;
- Fornecendo codigos completos para os exercicios.

---

## Duvidas abordadas e perguntas propostas

As explicacoes fornecidas abordaram:

- Por que os nomes das classes e dos modulos precisam comecar com letra maiuscula;
- Por que `attr_reader` permite consultar um atributo, mas nao cria um setter;
- Por que atribuir um novo nome ao drink gera um erro;
- Por que uma instancia de `Instrumentista` pode ser criada, mas gera um erro ao executar `interpretar`;
- Como a criacao do PhoneWave dentro do laboratorio representa composicao;
- Como a associacao de membros criados fora do laboratorio representa agregacao.

A IA tambem sugeriu perguntas para aprofundar o estudo:

- Qual a diferenca entre `attr_reader` e `attr_accessor`;
- Qual a diferenca entre atribuir um valor diretamente no `initialize` e utilizar um setter com validacao;
- Como `super` funciona no inicializador e em um metodo sobrescrito;
- Por que uma classe filha pode funcionar sem definir um `initialize` proprio;
- Qual a diferenca entre `each`, `map` e `select`;
- Qual a diferenca entre incluir um modulo e herdar de uma classe;
- Como `respond_to?(:ser_detido)` identifica os objetos que podem ser detidos;
- Onde aparece o polimorfismo nos exercicios.

---

## Conceitos estudados

Os exemplos fornecidos abordaram:

- Criacao de classes e objetos em Ruby;
- Definicao de atributos e metodos;
- Inicializacao de objetos com `initialize`;
- Variaveis de instancia com `@`;
- Leitura de atributos com `attr_reader`;
- Encapsulamento utilizando getters e setters;
- Validacao de valores;
- Heranca entre classes;
- Reutilizacao de inicializadores e metodos com `super`;
- Sobrescrita de metodos;
- Polimorfismo;
- Criacao e utilizacao de arrays;
- Adicao de objetos com `<<`;
- Percurso de arrays com `each`;
- Transformacao de arrays com `map`;
- Filtragem de arrays com `select`;
- Composicao e agregacao;
- Criacao de modulos e utilizacao de `include`;
- Verificacao de metodos com `respond_to?`;
- Sinalizacao de metodos pendentes de implementacao com `NotImplementedError`.

Esses conceitos aparecem nos exercicios dos coqueteis do Afterlife, da orquestra, do Laboratorio de Gadgets e da investigacao de Sherlock Holmes.

---

## Adaptacoes realizadas

Solicitei que os quatro exercicios fossem apresentados separadamente, com implementacoes simples e mensagens sem acentos e em minusculas.

No exercicio do Afterlife, o setter valida precos entre 5 e 200. O programa tenta atribuir 500 e depois 80, demonstrando a rejeicao do valor invalido e a atualizacao com um valor permitido.

No exercicio da orquestra, as classes `Solista` e `Acompanhador` utilizam o inicializador herdado de `Instrumentista` e implementam comportamentos diferentes para o metodo `interpretar`.

No exercicio do laboratorio, o PhoneWave e criado dentro do laboratorio, enquanto os membros sao criados antes e associados posteriormente.

No exercicio da investigacao, os modulos representam comportamentos compartilhados. A selecao de quem pode ser detido utiliza `respond_to?(:ser_detido)`.

As linhas que provocam erros nos exercicios 1 e 2 foram apresentadas separadamente para teste. O comentario explicativo solicitado no exercicio 3 tambem foi fornecido separadamente.

---

## Historico da conversa

A conversa utilizada envolveu a leitura dos enunciados, o fornecimento das quatro solucoes, explicacoes sobre o funcionamento dos codigos e a sugestao de perguntas para estudo.

Para documentar o uso de IA, os historicos dessas conversas devem ser exportados e incluidos na pasta `IA_REPORT`, conforme as orientacoes de entrega da atividade.

Este relatorio registra tanto o apoio conceitual quanto o fornecimento de codigo durante o desenvolvimento.