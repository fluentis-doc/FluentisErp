---
title: Previsiones de consumo
sidebar_position: 7
ai_generated: true
---

Esta tabla contiene las previsiones de consumo<!-- previsioni di consumo --> de los artículos buffer<!-- articoli buffer -->.

Para cada artículo buffer<!-- articolo a buffer --> y para cada unidad logística<!-- unità logistica --> es posible indicar qué valor de consumo<!-- valore di consumo --> se prevé con detalle diario.

Los datos contenidos en esta tabla son utilizados por el procedimiento [**actualización del consumo medio diario (ADU)**](/docs/ddmrp/procedures/adu-update) en el caso de técnicas de cálculo que consideran los datos de previsión de consumo futuro, y pueden ser ingresados manualmente o pueden provenir del procedimiento de cálculo que desarrolla las previsiones de venta de los productos terminados.

En el caso de ingreso manual no es necesario ingresar un valor para cada día, basta con ingresar uno por cada periodo de tiempo cuya duración sea igual al parámetro **Días en el futuro<!-- Giorni nel futuro -->** de los parámetros DDMRP del artículo<!-- articolo -->.

Por ejemplo, si **Días en el futuro<!-- Giorni nel futuro -->** es igual a 10 días, bastará con ingresar un valor cada 10 días igual al total de consumo<!-- consumo --> en ese período, ya que el procedimiento de actualización del consumo medio diario, en caso de utilizar un modo que abarque el futuro, hará la suma de las previsiones en ese período de tiempo dividida entre **Días en el futuro<!-- Giorni nel futuro -->**.