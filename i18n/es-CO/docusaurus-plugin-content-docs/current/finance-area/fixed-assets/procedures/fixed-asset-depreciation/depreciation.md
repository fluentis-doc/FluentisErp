---
title: ammortamento
sidebar_position: 2
---

Primero que todo, es de fundamental importancia gestionar el indicador **operazioni incrementali**: dado que el procedimiento de amortización se gestiona con lógicas diferentes, si la empresa utiliza la opción incremental para sus categorías, será necesario importar este indicador para poder identificar los datos.

Por lo tanto, si hay tanto categorías de activos fijos con la opción incremental como categorías sin la opción, la amortización de los activos fijos deberá realizarse en dos tiempos siguiendo la búsqueda con y sin el indicador comentado.

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image01.png)

En la parte inferior de la pantalla, en cambio, se debe establecer el año de referencia del cálculo: normalmente será necesario modificarlo para ingresar el año anterior al actual. No se permite el cálculo de las amortizaciones del año X cuando no se han contabilizado las amortizaciones del año X-1.

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image02.png)

Una vez realizada la búsqueda de datos, vemos que es posible, fila por fila, forzar el número de días de aplicación así como el porcentaje de amortización: de hecho, se recomienda calcular estos casos particulares directamente dentro de la ficha de cada activo o modificar directamente la tabla de categorías de activos fijos para realizar un cálculo rápido con una selección total de las filas.

Una opción alternativa a utilizar, si se desean aplicar porcentajes diferentes entre los varios activos, puede ser la definición del **[parámetro del módulo de activos fijos (parametro del modulo cespiti)](/docs/configurations/parameters/finance/fixed-assets-parameters)** denominado **percentuale su singolo cespite**, que permite definir en la cabecera de cada activo un porcentaje de amortización a utilizar.

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image03.png)



| Función (Funzione) | Significado (Significato) |
| --- | --- |
| Búsqueda (Ricerca) | Busca la lista de las amortizaciones a calcular. |
| ammortamento (Ammortamento) | Realiza el cálculo para las filas seleccionadas. |