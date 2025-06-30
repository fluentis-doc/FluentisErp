---
title: Distribución de períodos
sidebar_position: 1
---

El formulario se encuentra en la ruta: **Tablas > Control > Contabilidad gerencial > Distribución de períodos** 

:::tip Nota
Esta tabla es de uso exclusivo de las empresas que han configurado el *Control*.
:::

En la distribución de períodos podemos indicar, área por área y de año en año, cómo dividir nuestros meses. Los campos disponibles son los siguientes:

- el **código**
- la **descripción**
- el indicador **predeterminado**

:::danger ATENCIÓN
Es obligatorio haber ingresado en esta tabla un registro con este indicador; de lo contrario, el procesamiento de períodos del controlling lo requerirá.
:::

Debajo tendremos la lista de los registros de cada código ingresado, donde tendremos:
- el [**Área**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) de referencia
- el **Año** 
- el **Rango de fechas**
- el **Valor**, es decir, el peso del período individual dentro del año

:::tip Ejemplos  
Podríamos dividir el año en doceavo, o en onceavo, pesando apropiadamente agosto/diciembre y enero, en lugar de asignar de año en año los días efectivos de producción previstos en el mes individual.
:::

La *Distribución de períodos* se asocia en dos puntos:  
- En el [*Catálogo de Cuentas*](/docs/erp-home/registers/accounting/analytic-chart-of-accounts): puedo especificar que la cuenta detallada X, para la cual se valora un rango de fechas de competencia, se reparta mediante una determinada distribución de períodos en lugar de en los días exactos del rango de fechas configurado, que es la lógica predeterminada cuando la distribución de períodos no está configurada.
- En la *Asiento de movimientos físicos*, obligatoriamente para las *Unidad de medida* que están definidas como *Flujo* y no de *Estado*.

:::tip Nota
En el formulario hay un botón para duplicar la distribución seleccionada, opción conveniente al inicio del año para preparar la nueva lista válida para cada nuevo ejercicio.
:::