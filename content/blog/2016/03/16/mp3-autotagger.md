---
title: ¡Seguimos con los proyectos! MP3-Autotagger
description: ¡Hoy es uno de esos días en los que he aprovechado bien el tiempo libre!
date: '2016-03-16T20:31:43.850Z'
categories: []
keywords: []
slug: /@alexgascon/seguimos-con-los-proyectos-mp3-autotagger-40c6ccffe9d
---

¡Hoy es uno de esos días en los que he aprovechado bien el tiempo libre!

Después de unas cuantas (bastantes) horas de picar código, he conseguido terminar de rematar un programa al que llevaba tiempo dándole vueltas. ¡MP3-Autotagger!

Se trata de un programa tremendamente simple, pero que puede llegar a ser de bastante utilidad: sirve para añadir automáticamente las etiquetas de los archivos MP3 que haya en una determinada carpeta. Lo único necesario es que la estructura interna de las carpetas sea la siguiente:

**_Carpeta principal > Carpetas de cada artista > Carpetas de cada disco > Archivos MP3_**

Si no queda muy claro, puede verse más gráficamente en el siguiente diagrama:

![Ejemplo de la estructura de las carpetas](https://cdn-images-1.medium.com/max/800/1*9Pgd4dvwU05xg9vrxkOB4w.png)
Ejemplo de la estructura de las carpetas

Lo que hace MP3-Autotagger es asignar a las etiquetas de “Álbum” y “Artista” los nombres de las carpetas correspondientes. Es decir, el nombre de la carpeta en la que se encuentra el archivo será el que se asigne a la etiqueta “Álbum” y el de la carpeta inmediatamente superior será el que se asigne a “Artista”. Por lo que respecta a la etiqueta “Título”, el valor asignado será el nombre del archivo (eliminando la extensión .mp3). En el diagrama de la imagen, por ejemplo, las etiquetas del archivo “Bohemian Rhapsody.mp3” quedarían como:

*   **_Title:_** Bohemian Rhapsody
*   **_Artist:_** Queen
*   **_Album:_** A Night at the Opera

No sé vosotros, pero yo soy una de esas personas quisquillosas a las que le gusta que sus archivos de música tengan siempre el título, el artista y el álbum correctamente, porque si no es bastante caótico intentar buscarlas en el móvil o cualquier otro reproductor.

El código completo está colgado en mi Github ([https://github.com/AlexGascon/MP3-Autotagger](https://github.com/AlexGascon/MP3-Autotagger)), por si a alguno le interesa echarle un vistazo. Por supuesto, el programa es aún muy muy básico, ¡así que aceptaré encantado cualquier sugerencia!