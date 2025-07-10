---
title: Actualización del consumo medio diario (ADU) (Aggiornamento consumo medio giornaliero (ADU))
sidebar_position: 1
---

Este procedimiento actualiza el campo **Consumo medio diario (Consumo medio giornaliero)** de los parámetros DDMRP para cada artículo gestionado por buffer.

La actualización se lleva a cabo según el método indicado en los parámetros DDMRP del artículo de las siguientes maneras:

  - 0) ninguna actualización (nessun aggiornamento)
  - 1) media aritmética sobre el pasado (media aritmetica sul passato) (se analizan los consumos efectivos del pasado y todos los consumos tienen el mismo peso)
  - 2) media ponderada sobre el pasado (media pesata sul passato) (los consumos recientes pesan más que los pasados)
  - 3) media aritmética sobre el futuro (media aritmetica sul futuro) (se analiza la tabla de previsiones de consumo diario)
  - 4) media aritmética del pasado y del futuro (media aritmetica del passato e del futuro) (combinación de los métodos 1 y 3)
  - 5) pasado ponderado y futuro aritmético (passato pesato e futuro aritmetico) (combinación de los métodos 2 y 3)

El período de análisis considerado se indica para cada artículo en los parámetros DDMRP a través de los campos **giorni nel passato** y **giorni nel futuro**.

En cuanto al análisis del pasado, se recomienda utilizar un período de tiempo suficientemente largo para que sea significativo, es decir, un valor varias veces mayor que el lead time desacoplado (DLT) del artículo; de lo contrario, el recalculo podría ser demasiado sensible a las últimas variaciones.

Si se elige la media aritmética, el cálculo será poco sensible a las variaciones aleatorias pero detectará con cierto retraso las nuevas tendencias de consumo.

Si se elige la media ponderada, el cálculo detectará más rápidamente las nuevas tendencias de consumo, pero será más sensible a las variaciones aleatorias.

En cuanto a las previsiones de consumo futuras, estas deben ser ingresadas con suficiente antelación, es decir, con un anticipo al menos igual al lead time acumulado del artículo (el tiempo necesario para producirlo en caso de ausencia total de existencias de los componentes de su lista de materiales).

Por esta razón, el valor del parámetro **giorni nel futuro** debe ser al menos igual al lead time acumulado del artículo.

En lo que respecta a las medias que verifican los consumos en el pasado, recuerde que en la tabla de causas de almacén se debe establecer el **Indicador DDMRP ADU (Flag DDMRP ADU)**, para indicar al procedimiento cuáles causas deben ser consideradas entre las de descarga del almacén en el que se almacena el artículo.

Si en la tabla de causas de almacén no aparece el indicador DDMRP, significa que en los parámetros generales no está configurada la opción DDMRP.