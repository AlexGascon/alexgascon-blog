---
title: Bendito sea el código abierto
description: >-
  ¡Hoy es uno de esos días en los que siento que he dado un paso de gigante en
  mi formación, y me siento muy orgulloso de ello!
date: '2015-09-09T18:34:44.380Z'
categories: []
keywords: []
slug: /@alexgascon/bendito-sea-el-c%C3%B3digo-abierto-50fcb159020a
---

¡Hoy es uno de esos días en los que siento que he dado un paso de gigante en mi formación, y me siento muy orgulloso de ello!

Os explico: llevo un par de meses dedicándome en cuerpo y alma a terminar mi Trabajo de Fin de Grado (del que os hablaré en otra entrada, si no me desvío demasiado). Y hace unos días, quedándome poco más de una semana para entregarlo, me decidí a pulir una de las partes que había implementado con una librería externa, que si bien realizaba su papel podía hacerlo de forma mucho (pero mucho) más segura, algo que es **vital** en mi TFG. Cuál fue mi sorpresa al ver que no iba a poder: la función que tenía que mejorar devolvía un valor boolean con el resultado de la comprobación, en lugar del valor que se acababa de introducir.

Le di vueltas y vueltas a la documentación, pero no había manera. Devolvía el boolean y no había manera de cambiar eso.

O eso pensaba. Pero, después de días dándole vueltas, de ver cómo podía ignorarlo, de plantearme incluso cambiar la librería a pesar de ir a contrarreloj… Caí en la cuenta de una solución mucho más fácil. Se trata de una librería de código abierto, así que si no hace lo que yo quiero que haga, ¿por qué no lo implemento yo mismo?

La verdad es que nunca había trasteado hasta este punto con proyectos opensource. Siempre me había limitado a coger lo que ya estaba hecho (también porque he tenido la suerte de que se adaptaba a mis necesidades) y nada más, pero dado que siempre me ha gustado explorar e ir más allá, ¿por qué no intentarlo?

Y eso he hecho. Ni corto ni perezoso, y tras otro par de días de mucho análisis y trabajo, ¡he conseguido que la librería funcione tal y como necesito! Sin trucos, sin trampas, sin chapuzas. Simplemente, añadiendo código nuevo.

La verdad es que no ha sido ningún cambio trascendental, pero sí ha sido el cambio que me ha hecho _abrir la lata_, perder el miedo. Y la verdad, ¡no me podría sentir mejor!

Aquí una pequeña muestra del resultado. Y es que al cambiar la librería no he podido resistirme a _dejar huella_ en el Log:

![](https://cdn-images-1.medium.com/max/800/1*p1tEopZaCcd7-XN32Tr4ag.png)