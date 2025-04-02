---
title: riepiloghi per cedolini
sidebar_position: 2
---

La pantalla de Resumen para recibos de pago se compone de varias secciones: 
- movimientos: se resumen todas las horas relativas al empleado, que sean laborales, vacaciones, festivos, extraordinarias, traslados, licencias, etc.  
- expander Movimientos: resumen de horas totales de movimientos por código.  
- Valores: todos los gastos por los cuales corresponde el reembolso al empleado.  
- expander Valores: resumen total de valores por código.  
- Actividades de recursos: posibilidad de consultar todas las declaraciones de actividad ingresadas para el empleado, sin necesidad de abrir otras pantallas, para una comparación inmediata con los resultados del procesamiento de nómina.  
- Totales Vacaciones - Permisos - ROL: cálculo total de horas de vacaciones, permisos y ROL para el empleado.  

En rojo se destacarán las horas que requieren la atención del usuario: horas faltantes, horas extraordinarias, festivos, etc.  

Las horas y los gastos (solo aquellos con el indicador de reembolso activo) considerados en el procesamiento de los recibos de pago se tomarán de las declaraciones de actividad, independientemente de si fueron ingresadas directamente en el área PM > declaración de actividad o si fueron generadas automáticamente por las intervenciones. Por lo tanto, será fundamental que cada declaración de actividad tenga la categoría de actividad ingresada.  

En el caso de que el recurso realice actividades en días festivos como sábado o domingo que no están previstos en el turno configurado para el recurso, las horas se marcarán automáticamente con el código de pago "Extraordinario festivo".  
Si la declaración de actividad tiene el indicador de "trabajo flexible (smartworking)" activo y existe un código de pago específico, el código existente para la actividad se reemplazará por el previsto para el trabajo flexible.  
Todas las horas que superen el máximo permitido para el turno del recurso se ingresarán por separado con un código específico para las Horas Extraordinarias si está configurado.  
Si se ha completado el calendario de días festivos, automáticamente en el recibo para los días especificados se asignará el código de pago para las festividades.  

Prioridad con la que se consideran los códigos de pago:  
1. Si se trata de horas extraordinarias, vacaciones, festivos, traslados, trabajo flexible, etc., se buscarán códigos específicos con el correspondiente indicador habilitado.  
2. Si no hay códigos específicos, se tomará el código de pago configurado para la categoría de actividad ingresada en la declaración de actividad.  
3. Si no se encuentra el código en la categoría de actividad, se tomará el primer código con el indicador "Ordinario" habilitado.  
4. Si no hay un código con el indicador ordinario habilitado, se tomará el primer código en la tabla de Códigos de pago.  
5. Si no hay ningún código, se dará un mensaje bloqueante de aviso.  

Las traslados tienen una gestión específica:  

**INTERVENCIONES**

- Desde las intervenciones: en los gastos incurridos se han declarado horas de viaje. Si está configurado en la tabla [Tipos de Gastos](/docs/configurations/tables/general-settings/expenses-types), en el estado aprobado de la intervención se generarán las declaraciones de actividad por las horas de viaje y los servicios.  
- En el registro del recurso debe configurarse la traslados indicando después de cuántas horas de viaje, además de las ordinarias, se activa la traslados.  

Si el [código de pago](/docs/configurations/tables/employee/Payroll_codes) asociado a la categoría de actividad de las horas de viaje tiene habilitado el indicador "Reembolso de viaje", en el recibo el movimiento relacionado con el viaje tendrá siempre una cantidad de 1, independientemente de las horas de viaje realizadas (el sentido es indicar que hubo una trasladar sin marcar la duración real).  
Si en cambio el código de pago asociado a la categoría de actividad de las horas de viaje NO tiene habilitado el indicador "Reembolso de viaje", en el recibo el movimiento relacionado con el viaje tendrá una cantidad igual a las horas de viaje efectivas.  

Si por ejemplo, en el registro del recurso se establece como umbral "2" horas de viaje para el cálculo de la trasladar, el cálculo de la trasladar se activará solo si la suma de servicios + horas de viaje supera 2 horas además de las horas ordinarias:  

> Ejemplo 1:  

8 horas ordinarias  

3 horas de viaje  

--> en el recibo de pago en los movimientos habrá 2 líneas: 
 - una línea con 8 horas de servicio  
 - una línea para la trasladar (con cantidad=1 si el indicador "Reembolso de viaje" en el código de pago está activo, con cantidad=3 si el indicador "Reembolso de viaje" en el código de pago NO está activo)  
 
> Ejemplo 2:  

6 horas ordinarias  

3 horas de viaje  

--> en el recibo de pago en los movimientos habrá una única línea para 8 horas ordinarias, ya que el umbral para ser considerado trasladar son 2 horas de viaje además de las 8 horas ordinarias (en este caso, en total son 9 horas, por lo que solo hay 1 hora adicional a las 8 ordinarias).  

Lo mismo ocurrirá si la declaración de actividad se ha ingresado manualmente por separado para las horas ordinarias y las horas de viaje con la respectiva causa de actividad.  

**DECLARACIÓN DE ACTIVIDAD**

Si las horas de viaje se declaran en los gastos incurridos con un importe horario, si el código de pago asociado al gasto incurrido tiene habilitado el indicador "Reembolso de viaje", al superar las 8 horas (por lo que, independientemente del mínimo establecido en el registro del recurso), se insertará una línea separada para la trasladar, siempre con cantidad 1 independientemente de las horas declaradas.  
Si el código de pago asociado al gasto incurrido ha deshabilitado el indicador "Reembolso de viaje", se insertarán 2 líneas separadas de horas ordinarias y horas de viaje efectivamente declaradas.