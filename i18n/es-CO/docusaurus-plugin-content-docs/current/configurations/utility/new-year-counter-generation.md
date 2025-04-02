---
title: generazione contatori nuovo anno
sidebar_position: 3
---

El formulario permite gestionar los numeradores presentes en Fluentis, en particular en el momento del cambio de año.

Al abrir el formulario, Fluentis mostrará el **ultimo anno gestionale esistente** (tomado de los parámetros de contabilidad) y el filtro para los *contadores no válidos para el próximo año*.

La cuadrícula presenta la lista de numeradores no definidos (o no definidos correctamente) para el próximo año, permitiendo al usuario, con un doble clic, identificar la razón: generalmente el problema radica en la configuración del numerador con una fecha de fin de validez sin una razón válida, obligando (antes de la creación del presente automatismo) a crear una nueva línea cada año, en lugar de establecer el numerador con la opción Anual que reinicia automáticamente cada año. Sin embargo, podría ser que el numerador haya sido bloqueado por una razón específica (cambio de política de numeración, etc.).

#### Botones específicos

> **creazione**: el botón muestra un mensaje de confirmación de la corrección automática de los numeradores para las líneas seleccionadas en la cuadrícula.  
> **rollback**: realiza la restauración del procedimiento.

*Ejemplo*  
Si al mensaje se responde de la siguiente manera:  
- afirmativamente, se eliminarán las fechas de fin de validez de los numeradores que se han (supuestamente) cerrado erróneamente en el año 2017 del ejemplo (por lo que no se desbloquearán numeradores cerrados en años anteriores), configurándolos además como ‘anuales’ para que sean válidos para siempre.  
- negativamente, los numeradores de Fluentis permanecerán como están.

Hagamos algunos ejemplos:

A) supongamos que el último año es 2017, numerador de facturas de Fluentis con código ‘1’ configurado con fecha de fin de validez 2020 y, por lo tanto, válido para 2018; el procedimiento también creará el numerador ex-Ideale2010 con código 1 para 2018.

B) supongamos que el último año es 2017, numerador de facturas de Fluentis con código ‘2’ configurado con fecha de fin de validez 2017 y, por lo tanto, NO válido para 2018; si el usuario confirma la corrección del numerador de Fluentis, se eliminará la fecha de fin de validez y se configurará el tipo como anual, y luego se recreará el numerador correspondiente ex-Ideale2010 con código ‘2’; en caso de que el numerador de Fluentis no se corrija, este numerador no será válido para 2018 y, por lo tanto, el numerador ex-Ideale2010 con código ‘2’ permanecerá bloqueado.

C) supongamos que el último año es 2017, numerador de facturas de Fluentis con código ‘3’ sin fecha de fin de validez y, por lo tanto, válido para 2018; el procedimiento también creará el numerador ex-Ideale2010 con código 3 para 2018 (independientemente de cómo el usuario responda al mensaje de confirmación de la corrección de Fluentis).

:::tip NOTA
Esta utilidad permite crear también los parámetros de contabilidad para el nuevo año. Se mostrará un mensaje específico que pide confirmación. Se recomienda aceptar la creación; de lo contrario, los parámetros de contabilidad, **necesarios** para realizar cualquier registro contable, deberán ser creados para el nuevo año desde la [**formulario correspondiente**](/docs/configurations/parameters/finance/accounting-parameters).
:::