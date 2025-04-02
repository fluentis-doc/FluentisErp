---
title: parametri progetti
sidebar_position: 1
---

## General (Generale)

Estos parámetros se utilizan por defecto si no se han realizado configuraciones predeterminadas para el cliente o el tipo de documento.

**Unidad de medida predeterminada para el servicio (Unità di misura predefinita per il servizio)**: UM predeterminada a considerar para los servicios en las intervenciones.

**unità di misura ore**: UM que identifica las Horas en el área de proyectos. En caso de conversión entre UM será evidente si la cantidad se refiere a las horas de trabajo.

**unità di misura giorni**: UM que identifica los días en el área de proyectos. En caso de conversión entre UM será evidente si la cantidad se refiere a los días de trabajo.

**ore giornaliere**: indica la duración estándar de la jornada laboral de la empresa. Configurable en la tabla [Horarios de trabajo](/docs/configurations/tables/employee/working-hours).

**articolo**: artículo a utilizar por defecto en los documentos en ausencia de otras configuraciones.

**turno di lavoro**: indicar el turno de trabajo principal para la empresa. Los valores son configurables en la tabla [Turno de trabajo](/docs/configurations/tables/employee/working-hours) para cada día de la semana. El total de horas de la jornada se considerará para realizar la conversión entre Horas - Días. Por ejemplo, si la empresa prevé 7 horas diarias, 1 Día = 7 horas, y sobre esta base se harán las conversiones, por ejemplo, en los servicios de una intervención.

**tipo attività**: tipo de actividad predeterminada utilizada, por ejemplo, en la creación automática de actividades a partir de intervenciones.

**tipo attività per richiesta ferie/permessi**: tipo de actividad utilizada en el proceso de confirmación del período de vacaciones, para generar las respectivas declaraciones de actividad del recurso.

**tipo sprint predefinito**: tipo de sprint a utilizar por defecto si no se especifica para el tipo de documento.

**costo predefinito materiali progetto**: se puede elegir un valor entre Ninguno, Costo último, Costo medio, Costo estándar. Lo configurado se utilizará como regla básica para obtener el costo del artículo ingresado en la tabla Materiales de Proyectos.

**tipo intervento pianificato predefinito**: tipo de intervención planificada a utilizar por defecto, por ejemplo, en la creación de nuevos planificados directamente desde Wbs Asignación de recursos.

**Tipo de Solicitud de intervención predeterminado (Tipo Richiesta intervento predefinita)**: tipo de solicitud de intervención a utilizar por defecto, por ejemplo, en la creación de nuevas solicitudes de intervención desde Wbs Asignación de recursos.

**turno di lavoro**: indica el turno de trabajo específico, codificado en la tabla **Turno de Trabajo**.

## Intervenciones (Interventi)

**tipo intervento interno**: tipo de intervención identificada como intervención interna.

**tipo intervento esterno**: tipo de intervención identificada como intervención externa.

**tipo intervento predefinito**: tipo de intervención a utilizar por defecto, por ejemplo, en la generación automática de intervenciones a partir de actividades marcadas como facturables.

**dipendente predefinito**: empleado a utilizar por defecto si no hay otro valor presente.

**articolo righe fuori orario nel piano di fatturazione**: artículo a emplear por defecto para insertar las líneas que resultaron fuera de horario en los cálculos del plan de facturación de una intervención.

**articolo di storno fattura di anticipo**: artículo a utilizar por defecto para insertar las líneas de anulación de las facturas de anticipos en una factura generada por la valorización de intervenciones.

**descrizione riga di storno fattura di anticipo**: descripción a utilizar por defecto para insertar las líneas de anulación de las facturas de anticipos en una factura generada por la valorización de intervenciones.

**proponi fattura di anticipo nei servizi**: si está habilitado, en cada guardado de intervención se verifica si existe una factura de anticipo asociada al proyecto indicado en el documento. Si el valor residual de la factura de anticipo es suficiente para cubrir el servicio, se conectará automáticamente a la línea de servicio de la intervención en el campo correspondiente.

**proponi fattura di anticipo nei materiali**: si está habilitado, en cada guardado de intervención se verifica si existe una factura de anticipo asociada al proyecto indicado en el documento. Si el valor residual de la factura de anticipo es suficiente para cubrir el valor del material, se conectará automáticamente a la línea de material de la intervención en el campo correspondiente.

**proponi fattura di anticipo nelle spese di viaggio**: si está habilitado, en cada guardado de intervención se verifica si existe una factura de anticipo asociada al proyecto indicado en el documento. Si el valor residual de la factura de anticipo es suficiente para cubrir el gasto de viaje, se conectará automáticamente a la línea de gasto de viaje de la intervención en el campo correspondiente.

### Ajustes valorización de intervenciones (Impostazioni valorizzazione interventi)

**Utilizar referencias de intervención (Utilizza riferimenti intervento)**: si está habilitado, en la factura generada por la valorización de intervenciones se insertará una línea descriptiva antes de la línea de la intervención, que contendrá la descripción configurada por el usuario.

**aggiungi data intervento nella riga del servizio**: si está habilitado, inserta la fecha del servicio en el campo de descripción de la línea correspondiente al servicio.

**proponi descrizioni codice articolo**: si está habilitado, inserta la descripción del código de artículo en el campo de descripción del servicio.

**raggruppa per progetto**: si está habilitado, realiza el agrupamiento por cabecera de proyecto en la factura generada por la valorización de intervenciones.

**raggruppa per wbs**: si está habilitado, realiza el agrupamiento por wbs de proyecto en la factura generada por la valorización de intervenciones.

**raggruppa servizi e spese**: si está habilitado, realiza el agrupamiento de servicios y gastos en la factura generada por la valorización de intervenciones.

**considera i giorni festivi come tempo extra**: si está habilitado, en el plan de facturación se verificará si el día del servicio corresponde a alguna de las fechas configuradas como festivas. Las fechas no laborables se pueden configurar en *Configuración > Tablas > Gestión de Proyectos* > [Calendario días festivos](/docs/configurations/tables/project-management/not-working-days-calendar).

**priorità di inserimento delle informazioni**: indicar el orden en que se deben ingresar los datos en las facturas generadas por la valorización de intervenciones.

### PLAN DE FACTURACIÓN (PIANO DI FATTURAZIONE)

Las reglas a aplicar al plan de facturación de la intervención pueden establecerse en los parámetros generales de la Gestión de Proyectos y ser válidas para todos los clientes, o específicas para un cliente. La procedura de cálculo del plan de facturación comprobará primero la existencia de configuraciones específicas para el cliente, y si no están presentes, considerará las que se encuentren en los parámetros generales.

**sede di lavoro** y **tipo intervento**: utilizados como filtro; si están vacíos se consideran válidos para todas las sedes de trabajo y para todos los tipos de intervenciones. Si en cambio están configurados, solo se tendrán en cuenta en correspondencia con la sede de trabajo configurada en el registro del recurso que realiza la intervención y el tipo de intervención utilizado.

**tipo fascia oraria**: indica la franja horaria de trabajo acordada con el cliente, y el total de horas diarias.
:::note[Observación]
Se puede establecer que para un cliente el total de horas diarias sean 7 horas, mientras que para otro 8. Las horas indicadas en la franja horaria se utilizarán en la conversión entre diferentes unidades de medida temporales:
- por ejemplo, si hemos trabajado 7 horas para el cliente y su franja corresponde a 7 horas, en la conversión a Días obtendremos como cantidad 1.
- si en cambio hemos trabajado 7 horas para el cliente y su franja corresponde a 8 horas, en la conversión a Días obtendremos como cantidad 0.875.

La franja también se considerará para el cálculo del fuera de horario que se deberá facturar a un precio diferente, tanto por el excedente del total de horas como por los horarios establecidos.
:::

**tipo fascia oraria notturna**: el funcionamiento es similar al del campo "Tipo Franja horaria", pero se utilizará en el caso de realizar servicios tanto diurnos como nocturnos, para permitir una tarifación diferente.

**tipo arrotondamento**: indica la regla matemática con la que redondear las horas de trabajo. El redondeo se aplicará luego a las horas totales de la intervención. Ej. total horas 7,45 h, si se prevé redondeo a la media hora, las horas facturadas serán 8.

**categoria commerciale**: filtro adicional para la selección de la regla para el plan de facturación. Si está vacío se considerará válido para todas las categorías comerciales de clientes; en caso de una indicación específica, se seleccionará la correspondiente ingresada en el registro del cliente - pestaña Administración.

**Incluir horas de viaje en los servicios (Includi ore viaggio nei servizi)**: permite considerar las horas de viaje presentes en la intervención en la pestaña "Gastos a facturar", como si fueran horas de servicio. En consecuencia, todas las reglas de facturación (franja horaria, redondeos, etc.) se aplicarán también a las horas de viaje, como si fueran un servicio realizado.

**escludi arrotondamenti**: si está habilitado, no se aplicarán redondeos en el plan de facturación.

**escludi calcolo fuori orario**: si está habilitado, no se calculará el fuera de horario en el plan de facturación. Para la conversión entre diferentes unidades de medida temporales (por ejemplo, de horas a días) se utilizará el total de horas indicado en el campo "Turno de trabajo" en los parámetros generales de la Gestión de Proyectos.

**considera tutte le fasce orarie calcolo fuori orario**: si está habilitado, en el cálculo del fuera de horario se tomarán en cuenta tanto la franja horaria diurna como la nocturna. Solo se considerará fuera de horario lo que esté fuera de ambas franjas o que supere el total de horas diarias. Si está deshabilitado, solo se considerará una franja horaria (nocturna o diurna, según la hora de inicio del servicio) y todo lo que esté fuera de esta franja horaria considerada será tarifado como fuera de horario.

:::note[Ejemplo]
Franja diurna 7.00 - 18.00
Franja horaria nocturna 20.00 - 5.00

horario de servicio: 3.00 - 8.00
con la opción habilitada, el plan de facturación será: 
- línea de servicio 3.00 - 5.00 con tarifa nocturna
- línea de servicio 05.00 - 07.00 con tarifa fuera de horario
- línea de servicio 07.00 - 08.00 con tarifa diurna
(ambas franjas horarias se consideran para el cálculo; solo se considera fuera de horario lo que no entra en ninguna de las dos)

con la opción deshabilitada, el plan de facturación será:
- línea con servicio 3.00 - 5.00 con tarifa nocturna
- línea con servicio 05.00 - 08.00 con tarifa fuera de horario 
(se considera para el cálculo solo la franja horaria nocturna, que es la referencia para el servicio iniciado en esa franja)

:::

## Actividades (Attività)

**controlla attività mancanti negli ultimi: numero mesi**: indicar el número de meses, durante los cuales en la fase de declaración de actividades, se verificará si hay declaraciones de actividades faltantes (horas/días) y se propondrán automáticamente en la fase de declaración.

Valor por defecto = 0, en la declaración de actividades siempre se propondrá la fecha actual sin ningún control para las declaraciones faltantes en los meses anteriores.

Valor "1": se verificará el período comprendido desde la fecha actual hasta el mes anterior. Por ejemplo, 05/06 - 05/07. Si la declaración del 20/06 está faltante, al ingresar la nueva declaración de actividades, la fecha propuesta será 20/06.

Al aumentar el número de meses, se amplía el rango de meses pasados a verificar.