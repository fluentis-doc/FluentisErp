---
title: Previsión de consumo (Previsioni di consumo)
sidebar_position: 7
---
Esta tabla contiene las previsiones de consumo de los artículos de buffer.

Para cada artículo de buffer y para cada unidad logística, es posible indicar qué valor de consumo se prevé con detalle diario.

Los datos contenidos en esta tabla son utilizados por el procedimiento [**actualización de consumo medio diario (ADU)**](/docs/ddmrp/procedures/ADU-update) en caso de que la técnica de cálculo considere los datos de previsión del consumo futuro, y pueden ser ingresados manualmente o pueden provenir del procedimiento de cálculo que desarrolla las previsiones de venta de los productos terminados.

En el caso de inserción manual, no es necesario ingresar un valor para cada día, basta con ingresar uno por cada período de tiempo con una duración igual al parámetro **giorni nel futuro** de los parámetros DDMRP del artículo.

Si, por ejemplo, **giorni nel futuro** es igual a 10 días, será suficiente ingresar un valor cada 10 días equivalente al total del consumo en ese período, ya que el procedimiento de actualización del consumo medio diario, en caso de utilizar un modo que se refiere al futuro, realizará la suma de las previsiones en ese período de tiempo dividida por **giorni nel futuro**.