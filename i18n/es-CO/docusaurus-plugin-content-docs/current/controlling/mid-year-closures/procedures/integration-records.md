---
title: scritture di integrazione
sidebar_position: 5
---

Estamos dentro del módulo de Cierres Intermedios y seleccionamos el procedimiento 'scritture di integrazione (Scritture di integrazione)'. La máscara permite gestionar por separado las operaciones de integración que se pueden realizar simultáneamente con la creación de un nuevo cierre intermedio.

Para gestionar el procedimiento, basta con establecer el cierre de referencia, la fecha de inicio de competencia de referencia, el tipo de calendario a utilizar (se recomienda dejar el calendario solar) y la causal a utilizar (que debe tener el indicador cdc/cdp para gestionar la integración de los centros de costo/profit).

Con este procedimiento, el sistema verificará, a partir de la 'Fecha de inicio de competencia para las escrituras de integración', las líneas de costo/ingreso presentes en contabilidad y no insertadas en el cierre (es decir, registros fuera de los rangos de fecha de registro/competencia establecidos al momento de la recuperación de la contabilidad), para crear los devengos de los días dentro del rango de fechas de competencia económica. Los subcuentas de devengo a utilizar serán aquellos insertados en el plan de cuentas en correspondencia con el subcuenta específico de costo/ingreso o el subcuenta genérico incluido en los parámetros de contabilidad del año del cierre intermedio. Hay un botón para restaurar/eliminar los movimientos ya registrados por este procedimiento.

Vale la pena prestar atención especial a la fecha de inicio que se debe establecer, ya que normalmente esta fecha debe ser igual a la fecha de la última apertura de cuentas registrada en contabilidad. Ejemplifiquemos: si estamos creando el cierre del primer trimestre del ejercicio, el rango de fechas para la sección económica será típicamente del 01/01/año al 31/03/año, y si hay una reapertura de cuentas del ejercicio anterior, entonces dentro de este rango habrá directamente el ajuste por costo/ingreso de los devengos registrados en el balance 'año-1', por lo que la fecha de inicio para las integraciones se establecerá como 01/01/año para que el sistema verifique si después del 31/03 hay líneas con competencia en el trimestre anterior. Si la reapertura no está presente, en cambio, será necesario establecer la fecha de inicio como 01/01/año-1 para que **FluentisERP** verifique si también en todo el ejercicio anterior hay costos/ingresos que caen en el trimestre inicial de este ejercicio.

:::tip Nota
Atención a la gestión manual en contabilidad de los devengos/reclasificaciones en los registros de cierre y luego reapertura de cuentas, ya que la asignación de las fechas de competencia de línea es fundamental para la corrección de la recuperación en el control de las scritture di integrazione o en el procesamiento de períodos del control.
La gestión automatizada que se realiza a través de las **Escrituras de Ajuste** permite evitar errores en este delicado tema, errores que podrían provocar registros dobles o erróneos en el área de Control.
:::