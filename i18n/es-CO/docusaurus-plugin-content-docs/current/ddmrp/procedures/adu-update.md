---
title: Actualización del consumo medio diario (ADU)
sidebar_position: 1
ai_generated: true
---

Este procedimiento actualiza el campo **Consumo medio diario<!-- Consumo medio giornaliero -->** de los parámetros DDMRP para cada artículo gestionado en buffer<!-- buffer -->.

La actualización se realiza según el método indicado en los parámetros DDMRP del artículo, con las siguientes modalidades:


  - 0) ninguna actualización
  - 1) media aritmética sobre el pasado (se analizan los consumos efectivos del pasado y todos los consumos tienen el mismo peso)
  - 2) media ponderada sobre el pasado (los consumos recientes pesan más que los del pasado)
  - 3) media aritmética sobre el futuro (se analiza la tabla de previsiones de consumo diario)
  - 4) media aritmética del pasado y del futuro (combinación de los métodos 1 y 3)
  - 5) pasado ponderado y futuro aritmético (combinación de los métodos 2 y 3)

El periodo de análisis considerado se indica para cada artículo en los parámetros DDMRP mediante los campos **Días en el pasado<!-- Giorni nel passato -->** y **Días en el futuro<!-- Giorni nel futuro -->**.

En lo que respecta al análisis del pasado, se recomienda utilizar un periodo de tiempo suficientemente largo como para que sea significativo, es decir, un valor varias veces mayor que el lead time desacoplado (DLT) del artículo, de lo contrario el recálculo podría ser demasiado sensible a las últimas variaciones.

Si se elige la media aritmética, el cálculo será poco sensible a las variaciones aleatorias, pero detectará con cierto retraso las nuevas tendencias de consumo.

Si se elige la media ponderada, el cálculo detectará más rápidamente las nuevas tendencias de consumo, pero será más sensible a las variaciones aleatorias.

En cuanto a las previsiones de consumo futuras, estas deben ingresarse con suficiente anticipación, es decir, con una antelación al menos igual al lead time cumulativo del artículo (el tiempo necesario para producirlo en caso de ausencia total de existencias de los componentes de su lista de materiales<!-- distinta base -->).

Por esta razón, el valor del parámetro **Días en el futuro<!-- Giorni nel futuro -->** debe ser al menos igual al lead time cumulativo del artículo.

Con respecto a los promedios que verifican los consumos en el pasado, recuerde que en la tabla de causales de almacén<!-- causali di magazzino --> es necesario configurar el Flag DDMRP ADU para indicar al procedimiento qué causales deben ser consideradas entre las de salida del almacén<!-- magazzino --> donde se encuentra almacenado el artículo.

Si en la tabla de causales de almacén<!-- causali di magazzino --> no aparece la casilla DDMRP, significa que en los parámetros generales no está configurada la opción DDMRP.