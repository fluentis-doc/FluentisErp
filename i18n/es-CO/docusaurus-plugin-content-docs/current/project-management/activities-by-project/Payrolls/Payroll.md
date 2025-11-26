---
title: Resúmenes para nóminas
sidebar_position: 2
ai_generated: true
---

La pantalla de Resumen para nóminas<!-- Riepilogo per cedolini --> está compuesta por varias secciones: 
- movimientos<!-- movimenti -->: se resumen todas las horas relativas al empleado, ya sean laborables, vacaciones, festivos, horas extra, desplazamientos<!-- trasferte -->, permisos, etc.
- expander Movimientos<!-- expander Movimenti -->: resumen total de horas de movimientos por código
- Valores: todos los gastos por los que corresponde el reembolso al empleado
- expander Valores: resumen total de valores por código
- Actividades de recursos<!-- Attività risorse -->: posibilidad de consultar todas las declaraciones de actividades ingresadas para el empleado, sin necesidad de abrir otras pantallas, para una comparación inmediata con los resultados del procesamiento de nómina.
- Totales Vacaciones - Permisos - ROL: cálculo total de horas de vacaciones, permisos y ROL para el empleado

En rojo se resaltarán las horas que requieren la atención del usuario: horas faltantes, horas extra, festivos, etc.

Las horas y los gastos (solo aquellos con bandera para reembolsar) tenidos en cuenta en el procesamiento de las nóminas<!-- cedolini --> se tomarán de las declaraciones de actividad<!-- dichiarazioni attività -->, independientemente de si han sido ingresadas directamente en el área PM > declaración de actividades<!-- dichiarazione attività --> o generadas automáticamente por las intervenciones<!-- interventi -->. Por ello, será fundamental que cada declaración de actividades<!-- dichiarazione attività --> tenga la categoría de actividad ingresada.

En caso de que el recurso realice actividades en días festivos como sábado o domingo no previstos en el turno configurado para el recurso, las horas se marcarán automáticamente con el código de nómina<!-- codice paga --> "Horas extras festivas<!-- Straordinario festivo -->".
En caso de que la declaración de actividades<!-- dichiarazione attività --> tenga activa la bandera "teletrabajo<!-- smartworking -->" y exista un código de nómina específico, el código existente para la actividad será sustituido por el previsto para teletrabajo<!-- smartworking -->.
Todas las horas que superen el máximo de horas previstas en el turno del recurso, se ingresarán por separado con un código específico para las horas extra<!-- Straordinari --> si está configurado.
Si se ha completado el calendario de días festivos, automáticamente en la nómina<!-- cedolino --> para los días especificados se ingresará el código de nómina para los festivos.

Prioridad con la que se consideran los códigos de nómina<!-- codici paghe -->:
1. Si se trata de horas extra<!-- straordinari -->, vacaciones, festivos, desplazamientos<!-- trasferte -->, teletrabajo<!-- smartworking -->, etc. se buscarán códigos específicos con la bandera correspondiente habilitada.
2. Si no existen códigos específicos, se tomará el código de nómina configurado para la categoría de actividad ingresada en la declaración de actividades<!-- dichiarazione attività -->
3. Si no existe el código en la categoría de actividad, se tomará el primer código con la bandera "Ordinario" habilitada
5. Si no existe el código con la bandera ordinaria habilitada, se tomará el primer código en la tabla de Códigos de nómina<!-- Codici paga -->
6. Si no existe ningún código, se dará un mensaje bloqueante de aviso.

Las desplazamientos<!-- trasferte --> tienen una gestión específica:

**INTERVENCIONES<!-- INTERVENTI -->**

- desde las intervenciones<!-- interventi -->: en los gastos incurridos se han declarado horas de viaje. Si está configurado en la tabla de [Tipos de gastos<!-- Tipi Spese -->](/docs/configurations/tables/general-settings/expenses-types), al estado aprobado de la intervención se generarán declaraciones de actividades por las horas de viaje y los servicios.
- En la ficha del recurso<!-- anagrafica risorsa --> se debe configurar el desplazamiento<!-- trasferta --> indicando después de cuántas horas de viaje, además de las ordinarias, se activa el desplazamiento<!-- trasferta -->

Si el [código de nómina<!-- codice paga -->](/docs/configurations/tables/employee/Payroll_codes) asociado a la categoría de actividad de las horas de viaje tiene habilitada la bandera "Reembolso de viaje<!-- Rimborso viaggio -->", en la nómina<!-- cedolino --> el movimiento relacionado con el viaje tendrá siempre cantidad 1 independientemente de las horas de viaje realizadas (la intención es indicar que hubo un desplazamiento<!-- trasferta --> sin marcar la duración real).
Si por el contrario el código de nómina<!-- codice paga --> asociado a la categoría de actividad de las horas de viaje NO tiene habilitada la bandera "Reembolso de viaje<!-- Rimborso viaggio -->", en la nómina<!-- cedolino --> el movimiento relacionado con el viaje tendrá cantidad = horas reales de viaje.

Si, por ejemplo, en la ficha del recurso<!-- anagrafica risorsa --> se establece como umbral "2" horas de viaje para el cálculo del desplazamiento<!-- trasferta -->, se calculará el desplazamiento solo si la suma de servicios + horas de viaje supera 2 horas por encima de las horas ordinarias:

> Ejemplo 1:

 8 horas ordinarias

 3 horas de viaje

 --> en la nómina<!-- cedolino paga --> en los movimientos habrá 2 filas:
 - una fila con 8 horas de servicio
 - una fila para el desplazamiento<!-- trasferta --> (con cantidad=1 si la bandera "Reembolso de viaje<!-- Rimborso viaggio -->" en el código de nómina está activa, con cantidad=3 si la bandera "Reembolso de viaje<!-- Rimborso viaggio -->" no está activa )

 > Ejemplo 2:

 6 horas ordinarias

 3 horas de viaje

--> en la nómina<!-- cedolino paga --> en los movimientos habrá una sola fila por 8 horas ordinarias, ya que el umbral para que cuente como desplazamiento<!-- trasferta -->, son 2 horas de viaje adicionales a las 8 horas ordinarias (en este caso son 9 horas en total, así que solo 1 hora adicional a las 8 ordinarias)

Lo mismo ocurrirá si la declaración de actividades<!-- dichiarazione attività --> se ha ingresado manualmente por separado para las horas ordinarias y las horas de viaje con la causa apropiada de actividad<!-- causale attività -->.

**DECLARACIÓN DE ACTIVIDADES<!-- DICHIARAZIONE ATTIVITA' -->**

Si las horas de viaje se declaran en los gastos incurridos con un importe horario, si el código de nómina<!-- codice paga --> asociado al gasto incurrido tiene habilitada la bandera "Reembolso de viaje<!-- Rimborso viaggio -->", al superar las 8 horas (por tanto, independientemente del mínimo establecido en la ficha del recurso<!-- anagrafica risorsa -->), se ingresará una fila separada para el desplazamiento<!-- trasferta -->, siempre con cantidad 1 independientemente de las horas declaradas.
Si el código de nómina<!-- codice paga --> asociado al gasto incurrido tiene deshabilitada la bandera "Reembolso de viaje<!-- Rimborso viaggio -->", se ingresarán 2 filas separadas de horas ordinarias y horas de viaje efectivamente declaradas.