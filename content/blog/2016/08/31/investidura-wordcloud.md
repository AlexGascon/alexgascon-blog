---
title: Investidura wordcloud
description: >-
  Hoy es otro de esos días en los que decido aprovechar el tiempo más de lo
  habitual. Y, aprovechando la coyuntura electoral en la que…
date: '2016-08-31T16:02:42.422Z'
categories: []
keywords: []
slug: /@alexgascon/investidura-wordcloud-8531ca5239dd
---

Hoy es otro de esos días en los que decido aprovechar el tiempo más de lo habitual. Y, aprovechando la coyuntura electoral en la que estamos metidos, me he puesto a analizar un poco los discursos de los políticos en la sesión de investidura de hoy.

Así, tras unas cuantas horas de picar código, ha salido otro mini-proyecto: Investidura Wordcloud. Un pequeño script en Python que, a partir de un documento en PDF que contenga los discursos de los políticos, genera una nube de tags representando las palabras más mencionadas en los mismos. Y así, salen cosas como estas:

![Wordcloud de Rajoy](https://cdn-images-1.medium.com/max/800/1*iBd3R8-7TE2Z9b1L24ed9A.jpeg)
Wordcloud de Rajoy![Wordcloud de Sánchez](https://cdn-images-1.medium.com/max/800/1*vOHrlAkJuBppIXUpZ_NZkg.jpeg)
Wordcloud de Sánchez

(Sólo he encontrado los discursos en PDF de Rajoy y Sánchez, pero en cuanto encuentre los demás los voy añadiendo también)

Aún queda mucho que pulir, como excluir las palabras de las cabeceras de los PDF o poder analizar texto Unicode, pero sin duda el resultado ya permite lo que al fin y al cabo es la finalidad del script: ver qué nos cuenta cada uno.

Puede encontrarse el código completo en mi Github ([https://github.com/AlexGascon/Investidura-wordcloud](https://github.com/AlexGascon/Investidura-wordcloud)), por si alguien le quiere echar un vistazo (¡o incluso contribuir!). ¡Cualquier sugerencia es más que bienvenida!