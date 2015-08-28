# Introdução
Nós usamos Sass com sintaxe SCSS como um pré-processador do nosso código CSS.

## Cores
Escrever valores de cor hexadecimais sempre em letras minúsculas. Use a forma abreviada quando possível.

```scss
// BAD
$disabled-color: #cccccc;
$alert-color: red;
$wood-color: #EAEAE2;

// GOOD
$disabled-color: #ccc;
$wood-color: #eaeae2;
```

## Valores nulos
Evitar especificar unidades para valores nulos.

```scss
// BAD
.square {
    border: 0px;
}

// GOOD
.square {
    border: 0;
}
```

## Valores float
Para valores float não é necessário incluir o zero.

```scss
// BAD
.heading {
  margin-left: -0.75px;
}

// GOOD
.heading {
  margin-left: -.75px;
}
```

## line-height
Não adicionar unidades para os valores line-height.

```scss
// BAD
p {
  line-height: 1.55px;
}

// GOOD
p {
  // Equivalete a 150% do font size
  line-height: 1.5;
}
```

## Pseudo elements
Usar apenas dois pontos

```scss
// BAD
.button::before {
    border: 1px solid #000;
}

// GOOD
.button:before {
    border: 1px solid #000;
}
```

## Comentários
Estrutura de comentários

```scss
// ----------------------------------------------------------------------------
// Component name
// ----------------------------------------------------------------------------
.component {
    // ...
}

// -- Sub component name
.sub-component {
    // ...
}
```

## Aspas
Sempre usar aspas duplas ";

```scss
// BAD
.selector:after {
  content: 'Lorem Ipsum';
}

// GOOD
.selector:before {
  content: "Lorem Ipsum";
}
```

## Valor de atributos
Aspas para valores de atributos em seletores

```scss
// BAD
input[type=radio] {
  display: none;
}

// GOOD
input[type="radio"] {
  display: none;
}
```

## Background URL
Aspas para background URL

```scss
// BAD
.selector {
  background: url(path/to/image.png) no-repeat;
}

// GOOD
.selector {
  background: url("path/to/image.png") no-repeat;
}
```

## Organization
Ordem de declaração, as propriedades devem estar em ordem alfabética
1. `@extend`
2. `@import`
3. Outros

```scss
// BAD
.button {
  border: 3px solid seagreen;
  @include border-radius(5px);
  background: fuchsia;
  @extend %button-base;
}

// GOOD
.button {
  @extend %button-base;
  @include border-radius(5px);
  background: fuchsia;
  border: 3px solid seagreen;
}
```

## Aninhamento de seletores
* Evite escrever seletores excessivamente específicas e um grande número de regras aninhadas. Separá-los quando a leitura começa a ser afetada.
* Máximo de 3 níveis de aninhamento.

```scss
// BAD
.menu {
  background: orange;
  .menu-item {
    font-family: sans-serif;
    .link {
      &:hover {
       color: red;
      }
      > .link-label {
        font-weight: bold;
      }
    }
  }
}

// GOOD
.menu {
  background: orange;
}

.menu-item {
  font-family: sans-serif;
}

.link:hover {
  color: red;
}

.link-label {
  font-weight: bold;
}
```
