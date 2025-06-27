---
title: Intervenciones
sidebar_position: 13
---

En esta pestaña se configuran todos los parámetros relacionados con el cliente que se utilizarán en las intervenciones del área de Gestión de Proyectos.

Hay 2 pestañas adicionales:

### Gastos de Viaje 

Aquí se pueden ingresar todos los gastos que se propondrán en las intervenciones como Gastos a Facturar.

**Tipo de gastos de viaje**

**Tipo de cargo**: tipo de gasto a proponer. Solo se mostrarán en la lista los gastos con el indicador "Viaje" activo en su configuración.

**Paquete tipo**: si el tipo de gasto ingresado está configurado con "Tipo gasto viaje" = forfait, el campo se activará para elegir el tipo de forfait a utilizar.

**Importe**: importe del gasto. Activado para todos los tipos de gasto que no sean distancia o horas de viaje.

**Horas de viaje**: horas de viaje para llegar a la sede del cliente/sede de la intervención. Activado solo si el tipo de gasto está configurado correctamente como "Horas de viaje".

**Km de viaje de ida y vuelta**: KM de viaje para llegar a la sede del cliente/sede de la intervención. Activado solo si el tipo de gasto está configurado correctamente como "Distancia".

**Costo por hora**: gasto por hora, se multiplicará por las horas de viaje. Activado solo si el tipo de gasto está configurado correctamente como "Horas de viaje".

**Costo por kilómetro**: gasto por km, se multiplicará por los km indicados. Activado solo si el tipo de gasto está configurado correctamente como "Distancia".

**Tipo de contrato de la recurso y descripción**: utilizado como filtro para seleccionar el gasto correspondiente al contrato configurado en el registro de recursos.

**Sitio de trabajo**: utilizado como filtro para seleccionar el gasto correspondiente a la sede de trabajo configurada en el registro de recursos.

**Tipo de intervención**: utilizado como filtro para seleccionar el gasto correspondiente al tipo de intervención utilizada.

**Carga en vivo**: si está habilitado, en la fase de cálculo de gastos considerará también los datos declarados por el recurso. 

:::note[Ejemplo]
en el registro del cliente configuramos el gasto Costo km 0.50 sin indicar los KM ida/vuelta y habilitamos el indicador. 
El recurso inserta la intervención declarando en los gastos incurridos el mismo gasto indicando 150 km. 
Al cambiar el estado de la intervención de Insertado a Por Aprobar, los gastos se recalcularán, y con este indicador activo, considerará los km declarados por el recurso y los insertará en los gastos a facturar junto con el valor Costo Km indicado en el registro del cliente. 
La misma lógica se aplica a los otros tipos de gasto. 
:::

**Tipo de gastos de viaje - detalle del forfait**

El forfait, compuesto por múltiples gastos que en la factura se insertarán como 1 línea acumulativa, permite en este cuadro la visualización del detalle del forfait y la indicación del importe de los conceptos individuales. La línea forfait en la intervención y en la factura se insertará como la suma de todos los valores configurados en esta vista.

**Tipo de cargo**: tipo de gasto considerado en el forfait.

**Importe**: importe para el gasto.

**Una vez.**: independientemente del número de recursos y/o días de servicio dentro de la misma intervención, el gasto se considerará solo 1 vez.

**Durante el día**: en función de los días de servicio dentro de la misma intervención, el gasto se multiplicará por cada día de servicio.

**Por recurso**: según los recursos indicados en los servicios dentro de la misma intervención, el gasto se multiplicará por cada recurso. 

:::note[Ejemplo]
el forfait está compuesto por: 
Autopista: 100
Almuerzo: 50

En la intervención de duración de un día hay 3 recursos, por lo que se declararán 3 líneas de servicio. 
El gasto forfait a facturar resultará en un total de 250 (100 autopista fijos, 50 almuerzo por cada recurso). El cálculo se realizará al cambiar el estado de la intervención de "Insertado" a "Por Aprobar".
:::

### Configuración del plan de facturación 
Las reglas a aplicar al plan de facturación de la intervención se pueden establecer en los parámetros generales de la Gestión de Proyectos, y ser válidas para todos los clientes, o específicas por cliente. 
El procedimiento de cálculo del plan de facturación verificará primero la presencia de configuraciones específicas para el cliente, y si no están presentes, considerará las que estén en los parámetros generales. 

**Sitio de trabajo** y **Tipo de intervención**: utilizados como filtro; si están vacíos, se consideran válidos para todas las sedes de trabajo y para todos los tipos de intervenciones. Si están configurados, solo se tendrán en cuenta en correspondencia con la sede de trabajo configurada en el registro del recurso que realiza la intervención, y del tipo de intervención utilizada.

**Tipo de horario**: indica la franja horaria de trabajo acordada con el cliente y el monto de horas diarias. 

:::note[Observación] 
Se podrá establecer que para un cliente el monto de horas diarias sean 7 horas, mientras que para otro 8. Las horas indicadas en la franja horaria se utilizarán en la conversión entre diferentes unidades de medida temporales: 
- por ejemplo, si hemos trabajado 7 horas para el cliente y su franja corresponde a 7 horas, en la conversión a Días tendremos como cantidad 1. 
- Si, en cambio, hemos trabajado 7 horas para el cliente y su franja corresponde a 8 horas, en la conversión a Días tendremos como cantidad 0.875. 

La franja también se considerará para el cálculo del tiempo extra que se tarificará a un precio diferente, tanto por el excedente del monto total de horas como de los horarios establecidos. 
:::

**Tipo de Tabla Nocturna**: el funcionamiento es análogo al del campo "Tipo Franja horaria" pero se utilizará en caso de realizar servicios tanto diurnos como nocturnos, para permitir una tarificación diferente.

**Tipo de redondeo**: indica la regla matemática con la que redondear las horas de trabajo. El redondeo se aplicará luego sobre las horas totales de la intervención. Por ejemplo, total de horas 7.45 h, si se prevé redondeo a la media hora, las horas facturadas serán 8.

**Categoría comercial**: filtro adicional para la selección de la regla para el plan de facturación. Si está vacío, se considerará válido para todas las categorías comerciales de clientes; en caso de indicación específica, se seleccionará la correspondiente introducida en el registro del cliente - pestaña Administración.

**Incluir horas de viaje en los servicios**: permite considerar las horas de viaje presentes en la intervención en la pestaña "Gastos a facturar", como si fueran horas de servicio. Por lo tanto, todas las reglas de facturación (franja horaria, redondeos, etc.) se aplicarán también a las horas de viaje, como si fueran un servicio realizado.

**Excluir el redondeo**: si está habilitado, no se aplicarán redondeos en el plan de facturación.

**Excluir horas extras**: si está habilitado, no se calcularán las horas extra en el plan de facturación. Para la conversión entre diferentes unidades de medida temporales (por ejemplo, de horas a días) se utilizará el monto de horas indicado en el campo "Turno de trabajo" en los parámetros generales de la Gestión de Proyectos. 

**Considere todos los horarios para horas extras**: si se habilita, en el cálculo de horas extra se tomarán en cuenta tanto la franja horaria diurna como la franja horaria nocturna. Se considerará fuera de horario solo lo que esté fuera de ambas franjas o exceda el monto de horas diarias. Si se deshabilita, solo se considerará una franja horaria (nocturna o diurna, dependiendo de la hora de inicio del servicio) y todo lo que esté fuera de esta franja horaria considerada se tarificará como horas extra. 

:::note[Ejemplo]
Franja diurna 7:00 - 18:00
Franja horaria nocturna 20:00 - 5:00

horario de servicio: 3:00 - 8:00
con el indicador habilitado, el plan de facturación será: 
- línea de servicio 3:00 - 5:00 con tarifa nocturna
- línea de servicio 5:00 - 7:00 con tarifa fuera de horario
- línea de servicio 7:00 - 8:00 con tarifa diurna
(se consideran para el cálculo ambas franjas horarias; resulta como horas extra solo aquello que no entra en ninguna de las dos)

con el indicador deshabilitado, el plan de facturación será:
- línea con servicio 3:00 - 5:00 con tarifa nocturna
- línea con servicio 5:00 - 8:00 con tarifa fuera de horario 
(solo se considera para el cálculo la franja horaria nocturna, que es de referencia para el servicio iniciado en esa franja)

:::