---
title: 'Pesatbot 2: más “pesat” que nunca'
description: >-
  Es posible que recordéis que, unos meses atrás, os hablé de Pesatbot, mi
  primer bot de Telegram (y si todo va bien, no será el último). Sin…
date: '2017-02-02T23:19:39.533Z'
categories: []
keywords: []
slug: /@alexgascon/pesatbot-2-m%C3%A1s-pesat-que-nunca-e7b1356f2ac4
---

![](https://cdn-images-1.medium.com/max/800/1*BCg9w6Jmz1JmUVqOT8yFSQ.jpeg)

Es posible que recordéis que, unos meses atrás, [os hablé de Pesatbot, mi primer bot de Telegram](https://medium.com/@alexgascon/proyectos-personales-presentando-a-pesatbot-d2f2a00de728#.i9gwx73lk) (y si todo va bien, no será el último). Sin duda alguna era un bot tremendamente mejorable, pero a mí se me quedó una espinita por encima de todas: se caía. Demasiado. Por supuesto, esto es malo en cualquier proyecto, pero más aún en uno cuya intención es ser cansino: ¿de qué sirve un bot que se queje cuando eres pesado, si no es capaz de soportar la carga de mensajes que le llega cuando esto ocurre?

Es verdad que tampoco podía esperar milagros: no tengo server propio, así que tocaba tirar de infraestructura externa, y como tampoco tenía mucha idea de cómo empezar, la solución fue googlear y adaptar uno de los tutoriales existentes, que enseñaba como alojarlo utilizando Google App Engine. Y, aunque en su momento me sentí orgulloso de que funcionase, mirándolo con perspectiva me doy cuenta de que probablemente la persona que hizo el tutorial no tenía mucha más idea que yo de cómo se hacen estas cosas. Claro, el resultado fue el que fue: funcionó (si es que podemos decir que algo que cae una vez cada pocas horas funciona) dos o tres días, hasta que cayó una vez más y no hubo forma de levantarlo. Y como ya os he dicho, a mí se me quedó la espinita, pero las espinitas están para quitarse.

Llevaba tiempo dándole vueltas, pero no fue hasta la semana pasada cuando decidí quitármela de una vez por todas. Así que nada más terminar exámenes me puse manos a la obra y me fui directamente a ver los tutoriales de Heroku, un PaaS del que no había oído más que maravillas. Y, tengo que decir, que no se exageraban: en sólo dos o tres clicks te llevan a un tutorial tremendamente didáctico y sencillo, en el que aprendes sin nada de esfuerzo a configurar todo lo necesario para hacerlo funcionar sin problemas.

![Heroku](https://cdn-images-1.medium.com/max/800/1*oy70koAHJL8lko2R-GH5PA.png)
Heroku

Total, que me puse manos a la obra: revisé un par de proyectos similares en Github y leí un par de preguntas de StackOverflow y, al día siguiente, ¡conseguido! ¡Pesatbot alojado en Heroku y ejecutándose sin problemas! Y, teniendo en cuenta que lleva ya un par de días sin una sola caída, parece que esta vez va a dar mucho mejor resultado que la anterior. Sin duda, aún quedan modificaciones que llevar a cabo y mejoras que incorporar, pero puedo decir oficialmente que Pesatbot ha vuelto, y más fuerte que nunca. ¿Que no me creéis? Pues podéis comprobarlo vosotros mismos[: @Pesatbot](https://web.telegram.org/#/im?p=@Pesatbot)