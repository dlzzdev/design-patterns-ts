
# Design Patterns em Typescript

Neste projeto eu comento sobre 5 tipos de Design Patters que são utilizados no Typescript


## Facade

É um padrão de projeto estrutural, os padrões estruturais explicam como montar objetos e classes em estruturas maiores, enquanto ainda mantém as estruturas flexíveis e eficientes.

Ele geralmente é uma classe que se torna uma interface simplificada para outras clases que tem um trabalho complexo entre si.

<a href="./design-patterns/facade.ts">Clique aqui</a> para visualizar o exemplo de utilização do Facade


## Strategy

É um padrão de projeto comportamental, que cuidam da comunicação eficiente e da assinalação de responsabilidades entre objetos.

Ele geralmente é "quebrado" em diversos pedaços que são chamados de estrategias, um algoritimo que antes era muito grande e complexo.

<a href="./design-patterns/strategy.ts">Clique aqui</a> para visualizar o exemplo de utilização do Strategy

## Singleton

É um padrão de projeto criacional que permite a você garantir que uma classe tenha apenas uma instância, enquanto provê um ponto de acesso global para essa instância.

Geralmente uma propriedade estática da própria classe que retorna a instância.

<a href="./design-patterns/singleton.ts">Clique aqui</a> para visualizar o exemplo de utilização do Singleton

## Observer

É um padrão de projeto comportamental que permite que um objeto notifique outros objetos sobre alterações em seu estado.

Podemos dizer que ele é um mecanismo de assinatura na qual notifica outros objetos.

<a href="./design-patterns/observer.ts">Clique aqui</a> para visualizar o exemplo de utilização do Observer

## Template Method

É um padrão de projeto comportamental que define o esqueleto de um algoritmo na superclasse mas deixa as subclasses sobrescreverem etapas específicas do algoritmo sem modificar sua estrutura.

<a href="./design-patterns/templateMethod.ts">Clique aqui</a> para visualizar o exemplo de utilização do Template Method
