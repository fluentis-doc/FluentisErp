---
title: ripresa ammortamento cespiti
sidebar_position: 3
---

Dentro del módulo de cierres intermedios, después de haber creado un cierre intermedio, es posible valorar automáticamente las amortizaciones correspondientes al período económico establecido en él.

## Amortización (Ammortamento)

Al abrir la pantalla, en la parte inferior deben configurarse obligatoriamente:

- el **Cierre de referencia (Chiusura di riferimento)** (del cual se lee el rango de fechas de competencia económica);

- la **data di registrazione** del movimiento en los registros extracontables;

- la **causale** a utilizar (también aquí es necesario que la causa prevea la gestión de los cdc/job-orders para valorarlos en el registro).

El indicador **singola registrazione** permite crear un único registro extracontable que incluya las diversas subcuentas de amortización/fondo.

Es interesante señalar que dentro de los filtros de búsqueda superiores hay un indicador de búsqueda de los activos que pertenecen a las categorías 'incrementales' o no.

Al ejecutar la búsqueda de datos, el programa valorará la cuadrícula de la pantalla con los datos de las amortizaciones a calcular, proporcionados en función del número de días de competencia del cierre. En particular, se verificará para cada activo si la amortización del año (del año establecido como parámetro del cierre) ya está presente en su ficha y este valor será reproporcionado en base al número de días: si esto no está presente, se simulará un cálculo (basado en los parámetros de la categoría a la que pertenece y los residuos disponibles) y luego este valor se proporcionará en base al número de días de competencia.

Se recuerda seleccionar todas las filas presentes en la cuadrícula para valorarlas en el cierre.

## Anteriores (Precedenti)

En este módulo es posible anular la operación realizada en la pestaña anterior, *ammortamento*.