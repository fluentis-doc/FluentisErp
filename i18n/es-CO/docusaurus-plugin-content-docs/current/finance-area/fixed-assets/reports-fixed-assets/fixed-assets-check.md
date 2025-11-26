---
title: Control de activos fijos
sidebar_position: 4
ai_generated: true
---

Con este informe es posible realizar una conciliación, cuenta por cuenta, entre los registros contables relativos al activo fijo seleccionado<!-- cespite selezionato --> y los resultados del libro de activos fijos<!-- libro cespiti -->.

Se comparan los totales presentes en el módulo de activos fijos<!-- modulo cespiti --> respecto a los totales presentes en la contabilidad general. El resultado del informe será una lista de cuentas contables (identificadas por las categorías de activos fijos<!-- categorie cespiti --> seleccionadas en el formulario y valorizadas en el módulo de activos fijos<!-- modulo cespiti -->) con los respectivos valores totales detectados en los dos módulos de Fluentis, con el objetivo de facilitar la verificación de la conciliación.

El formulario de parametrización de la impresión es similar al de los otros reportes disponibles en el módulo de activos fijos<!-- modulo cespiti -->; por lo tanto, destacamos 3 campos en particular:

**Fecha de referencia<!-- Data riferimento -->:** se configura por defecto con la fecha actual y es la fecha final que Fluentis utilizará para la búsqueda de los datos dentro del módulo de activos fijos<!-- modulo cespiti -->. En resumen, tomaremos todos los valores patrimoniales que sean menores o iguales a esta fecha (es decir, todo el activo y todos los fondos hasta esta fecha), mientras que sólo se leerán las amortizaciones dentro del año, hasta esta fecha.

**Desde fecha - hasta fecha<!-- Da data - a data -->**: obligatorio para poder ejecutar el informe. Será el período de búsqueda de los datos dentro de la contabilidad general: para cada subcuenta<!-- sottoconto --> (activo, fondo, amortización) utilizada en los activos fijos<!-- cespiti --> de las categorías seleccionadas, se calculará el saldo contable dentro de este rango de fechas.
Con un enfoque de control de conciliación de fin de año, entonces, configuraremos la fecha de referencia como 31/12/aaaa y el rango como 01/01/aaaa – 31/12/aaaa.

**Bandera Detalles de operaciones<!-- Flag Dettagli operazioni -->**: activando esta opción se crea un detalle para cada fecha con movimiento, con el fin de verificar si para cada fecha de registro existe el correspondiente movimiento en la ficha del activo fijo<!-- scheda cespite -->.

El informe visualiza la lista de las cuentas utilizadas en los activos fijos<!-- cespiti --> de las categorías seleccionadas, la columna con el valor obtenido del módulo de activos fijos<!-- modulo cespiti -->, el de la contabilidad y luego la posible diferencia entre ambos.