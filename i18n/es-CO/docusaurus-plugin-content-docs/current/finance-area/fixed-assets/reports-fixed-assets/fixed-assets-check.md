---
title: controllo cespiti
sidebar_position: 4
---

Con este informe es posible realizar una conciliación, cuenta por cuenta, entre los registros contables relacionados con el activo seleccionado y los resultados del libro de activos.

Se comparan los totales presentes en el módulo de activos con los totales presentes en la contabilidad general. El resultado del informe será una lista de cuentas contables (identificadas por las categorías de activos seleccionadas en el formulario y valoradas en el módulo de activos) con los valores totales correspondientes registrados en los dos módulos de Fluentis, con el fin de facilitar la verificación de la conciliación.

El formulario de parametrización de la impresión es similar al de otros informes disponibles en el módulo de activos, por lo que destacamos 3 campos en particular:

**data riferimento**: se establece por defecto con la fecha actual y es la fecha final que Fluentis utilizará para la búsqueda de datos dentro del módulo de activos: en esencia, tomaremos todos los valores patrimoniales que son menores o iguales a esta fecha (por lo tanto, todo el activo y todos los fondos hasta esta fecha), mientras que solo leeremos las amortizaciones del año hasta esta fecha.

**Desde la fecha - Hasta la fecha (Da data - a data)**: obligatorio para poder ejecutar el informe, será el período de búsqueda de datos dentro de la contabilidad general: para cada subcuenta (activo, fondo, amortización) utilizada en los activos de las categorías seleccionadas, se calculará el saldo contable dentro de este rango de fechas. En la perspectiva de control de conciliación de fin de año, por lo tanto, estableceremos la fecha de referencia en 31/12/yyyy y el rango como 01/01/yyyy – 31/12/yyyy.

**Flag Detalles de operaciones (Flag Dettagli operazioni)**: activando este indicador, se crea un detalle para cada fecha movida con el fin de entender si para cada fecha de registro existe el movimiento correspondiente en la hoja de activos.

El informe muestra la lista de cuentas utilizadas en los activos de las categorías seleccionadas, la columna con el valor obtenido del módulo de activos, el de la contabilidad y luego la posible diferencia entre ambos.