---
title: nuovo intervento
sidebar_position: 2
---

Los datos a ingresar son:

**tipo intervento**: contiene la [tipología de Intervención](/docs/configurations/tables/project-management/intervention-type/);

**Cliente**: contiene el cliente destinatario de la intervención;

**anno/numero/data**: contiene los datos de la intervención; en caso de modificar la fecha, se preguntará si se deben actualizar también todas las demás fechas del documento (gastos, servicios);

**risorsa**: indica la recurso responsable de la intervención, propuesto por defecto en las nuevas líneas.

**dipendente**: indica el empleado relacionado con el registro de la recurso.

Hay pestañas específicas disponibles.

## Cabecera (Testata)

En esta pestaña se contienen información general sobre la intervención, como la **Divisa**, el **Tipo de cambio**, eventuales **Anotaciones**, y el **Audit Trail**. Hay un posible **Listado** asociado, el indicador que señala si la intervención está **Facturada** y el **Estado de la intervención**.

Los estados previstos para la intervención son los siguientes: 
- <u>Insertado (Inserito)</u>: estado inicial de la intervención, que indica que se ha ingresado un documento recién. 
- <u>Por aprobar (Da approvare)</u>: estado que se utiliza para dar visibilidad por parte de la recurso de que ha ingresado todos los datos requeridos, realiza el recálculo de los gastos según las condiciones ingresadas en la intervención, añadiendo eventuales indemnizaciones de viaje, etc. Se genera el Plan de facturación para dar un adelanto de lo que se facturará. 
- <u>Aprobado (Approvato)</u>: estado utilizado por la persona responsable de verificar las intervenciones declaradas por las recursos, para el cual se genera la correspondiente declaración de actividades para la recurso. 
- <u>Controlado (Controllato)</u>: estado que considera que la intervención es facturable.
- <u>Facturado (Fatturato)</u>: intervención facturada. Este estado no puede ser asignado manualmente. 
- <u>Parcialmente Facturado (Parzialmente Fatturato)</u>: estado que identifica una intervención con algunas líneas de plan de factura facturadas, y otras no. 
- <u>Cerrado forzosamente (Chiuso forzatamente)</u>: estado que identifica una intervención cerrada forzosamente que, por lo tanto, no ha sido ni será facturada. Es posible asignar también una causa de suspensión personalizada.
- <u>Suspendido (Sospeso)</u>: estado que identifica una intervención temporalmente suspendida, excluida de la facturación, pero que podrá ser restaurada más adelante. 

**Pestaña Pagos (Tab Pagamenti)**, **Pestaña descuentos (Tab sconti)** permiten la configuración de datos útiles para las facturas que se emitirán.

**extra data**: eventuales datos extra ingresados para la intervención.

**documenti allegati**: eventuales documentos adjuntos a la intervención.


## Gastos (Spese)
Esto se divide en tres subgrupos adicionales:

**spese intervento sostenute**: indica los gastos sufridos por la recurso, que normalmente se proponen desde el registro de la recurso si están presentes. Se incluirán en la declaración de actividades-pestaña Cargos de viaje generada por la intervención y podrán ser marcados también como para facturar. Cada línea podrá tener su propio anexo, por ejemplo, un justificante de gasto. 

**spese intervento da fatturare**: indica los gastos a facturar al cliente, que normalmente se proponen desde el registro del cliente si están presentes. También pueden derivar de gastos sufridos marcados para facturar. Se incluirán en el Plan de facturación. 
Solo se seleccionarán los gastos configurados específicamente como gastos de tipo Viaje. 

**altre spese**: otros gastos genéricos a incluir en el Plan de facturación. 

Contiene eventuales Cargos de viaje, identificados por:

- **risorsa**: recurso que ha sufrido el gasto, por defecto se propone la recurso de la cabecera;
- **tipo spese**: contiene la tipología de cargo, con la correspondiente **descrizione**;   
- **data spesa**: fecha en la cual imputar el gasto;     
- **importo spesa**: es posible indicar directamente el importe del gasto, por ejemplo, en caso de que se trate del reembolso de una comida;     
- **KM**: contiene los kilómetros recorridos con el correspondiente **costo km**;    
- **costo orario**: costo por hora en caso de gastos de tipo "Horas de viaje";    
- **data/ora di partenza**: contiene la fecha y la hora de salida;    
- **data/ora di arrivo**: contiene la fecha y la hora de llegada;    
- **ore viaggio**: indica las horas de viaje calculadas en base a la fecha y hora;    
- **valore forfait**: en lugar del Importe del gasto es posible tener un valor forfait. Generalmente se compila en registro de la recurso y se propuesta automáticamente; no será modificable por el usuario. Utilizado en aquellos casos en los cuales los reembolsos que corresponden a la recurso están preacordados y no modificables por el usuario;
- **IVA**: indica el IVA a aplicar;      
- **costo totale**: campo calculado en base a los datos previamente ingresados que contiene el costo total del gasto (ej. km por costo km, horas de viaje por costo horario, etc);     
- **da rimborsare**: este indicador indica si el cargo es a reembolsar; 
- **allegati**: indica si la línea contiene adjuntos asociados;
- **nota**: eventuales notas ingresadas por el usuario;

En caso de Tipo de Intervención con indicador Externo habilitado, los gastos previstos para la recurso no se propondrán en la pestaña Gastos Sostenidos. En cambio, los gastos ingresados en la pestaña Gastos-Intervención en el registro del cliente se propondrán en la pestaña Gastos a facturar según las configuraciones. 

Botón **Gastos a Facturar (Spese da Fatturare)**: presente en la pestaña "Gastos de intervención sufridos", seleccionando un gasto y haciendo clic en el botón, este se llevará automáticamente a la pestaña "Gastos de Intervención a Facturar". Si el tipo de gasto ya está presente en los gastos a facturar o el cliente ha configurado un forfait, se pedirá al usuario la confirmación para proceder con el recálculo. 

Botón **ricalcola spese**: debe usarse solo en caso de necesidad, el mismo procedimiento ya se ejecuta al cambiar el estado de la intervención de "insertado" a "por aprobar". 
El procedimiento realiza:

1. Cálculo de **gastos directos (spese vive)** a facturar al cliente: si en el registro del cliente se han configurado gastos con el indicador "gasto vivo" habilitado y el mismo gasto ha sido declarado por la recurso en los gastos sufridos, este se llevará automáticamente como a facturar;
> En caso de gastos de un tipo diferente a distancia/horas de viaje, se tomará el importe del gasto declarado por la recurso y se llevará a los gastos a facturar;

> En caso de gastos de tipo distancia/horas de viaje, es posible indicar en el registro del cliente el costo por km/costo por hora, y con el recálculo se hará una fusión de los km/horas declarados por la recurso y los costos configurados en el registro del cliente, obteniendo un gasto completo con todos los datos y el total;
2. Cálculo de **gastos forfait**: si en el registro del cliente se han configurado gastos de tipo forfait con condiciones para recurso/día, estos se recalcularán automáticamente. 
:::note[Ejemplo]
En la intervención de duración de un día hay 3 recursos, por lo que se declaran 3 líneas de servicio. 
El gasto forfait está configurado de la siguiente manera: 

Autopista: 100 - uno a uno
Comida: 50 - por persona por día

El gasto forfait a facturar será en total 250 (100 autopista fijos, 50 comida por cada recurso). El cálculo se realizará al cambiar el estado de intervención de "Insertado" a "Por aprobar" o utilizando el botón Recalcular Gastos. 
:::

3. Cálculo de **Gastos de intervención para facturar**: si son modificados por el usuario, pedirá confirmación antes de proceder, y en caso afirmativo restaurará los gastos a facturar previstos para el cliente.
4. Cálculo de la **indemnización** de viaje para la recurso;

:::note[Ejemplo] 
 En el registro de la recurso se establece como límite "2" horas de viaje
 se activará el cálculo de la indemnización de viaje solo si la suma de los servicios + horas de viaje supera 2 horas más allá de las horas ordinarias:

 8 horas ordinarias

 3 horas de viaje

 --> se añadirá 1 línea en los gastos con el importe establecido para el viaje
 
 6 horas ordinarias

 3 horas de viaje

--> no habrá indemnización de viaje, ya que el mínimo adicional a las 8 horas son 2 de viaje (en este caso tendríamos 9 horas, por lo que sería solo 1 hora más allá de las 8 ordinarias)

::: 

## Pestaña Servicios (Tab Servizi)

Contiene la lista de servicios previstos en la intervención. Cada línea puede ser relativa a un servicio codificado o no, y los detalles correspondientes: 

- Fecha efectiva de servicio: indica la fecha en la que se realizó el servicio. Puede ser diferente de la fecha en la cabecera, ya que en una intervención puede haber más servicios realizados en diferentes días. Esta fecha se utilizará para la generación de la declaración de actividades de la recurso;
- **ora inizio**, **ora inizio pausa**, **ora fine pausa**, **ora fine**: horarios en los que se realizó el servicio;
- **Smartworking (Smartworking)**: indicador que se activa automáticamente según las configuraciones relacionadas con el Smartworking en el registro de la recurso. Luego se utilizará en la elaboración de las nóminas, para identificar los días en que se realizó el teletrabajo. Consecuentemente, se configurará en la declaración de actividades generada por la intervención;
- **servizio sovrapposto**: indicador que se activa automáticamente si detecta la presencia de otros servicios o declaraciones de actividades para la recurso en el mismo día o franja horaria;
- **minuti sovrapposti**: es posible indicar manualmente, a discreción del usuario, el tiempo efectivo durante el cual las actividades se superponen;
- **tempo effettivo**: total de horas obtenido del cálculo de las horas declaradas en el servicio;
- **Descripción del servicio (Descrizione servizio)**: descripción del artículo ingresado en caso de línea de tipo Codificado;
- **descrizione attività svolta**: descripción ingresada por la recurso acerca del servicio realizado, y en caso de selección de proyecto, descripción de la línea de Proyecto. Luego se utilizará para la descripción de la Declaración de actividades generada automáticamente por la intervención. Con doble clic en el campo es posible agrandar el área para escribir. 
- **unità di misura**: UM del artículo o modificada manualmente por la recurso, de solo tipo temporal;
- **quantità**: si se han configurado correctamente los parámetros del Proyecto y la conversión entre diferentes UM, el tiempo efectivo se convertirá en la correspondiente UM. 

:::note Ejemplo 
Servicio con tiempo efectivo de 8 horas, unidad de medida de servicio "GG-días".

En los parámetros generales del proyecto, la unidad de medida para los días es "GG-días" y la unidad de medida para las horas es "HH-horas". Las Horas diarias configuradas en los parámetros son 7 para el día en cuestión.

La cantidad se marcará automáticamente como 1.14 GG. (Obtenida de la conversión de 1 GG = 7 horas)
:::

**prezzo unitario**, **prezzo totale**, **importo totale**, **iva**, **sconti**: datos relacionados con el precio y el IVA obtenidos de las configuraciones de lista del cliente y del artículo;
**risorsa**: recurso que realizó el servicio, por defecto se propone el presente en cabecera, pero es modificable;
**Porcentaje de progreso estimado del trabajo (Progress percentuale stima del lavoro)**: porcentaje del trabajo realizado, actualiza el valor correspondiente en el proyecto;
**fatturato vendite**: facturado por ventas asignadas según la prioridad del registro del artículo o del registro del cliente;
**progetto**: heredado de la cabecera de intervención si está presente, o asociado manualmente por el operador. Actualiza el posible precio si el servicio no está valorado, determina la categoría de actividad;
**ticket**: ticket de referencia del servicio;
**anagrafica impianti**: registro de instalaciones EAM asociado al servicio; 
**dipendente**: empleado asociado a la recurso;
**fattura di anticipo**: Factura de anticipo presente en un proyecto (también diferente del asignado al servicio) y asociada al servicio, que llevará a la erosión del remanente de la factura de anticipo total, además del correcto ajuste en facturación;
**nota**: eventuales notas del cliente. 
**fatturabile**: si está habilitado, identifica el servicio que será considerado en el plan de facturación. El valor del indicador está definido por los documentos anteriores de los que se generó, por el proyecto, o por la categoría de actividad;
**prezzo manuale**: indicador que identifica si el precio propuesto por la lista o procedimientos ha sido modificado manualmente por el usuario;
**attività a valore aggiunto**: indicador que identifica servicios de valor agregado, a fines estadísticos. Se valoriza según el proyecto, si no está presente según la configuración de la categoría de actividad. Puede ser modificado manualmente por el usuario. 

Hay dos pestañas adicionales: **documenti collegati** y **extra data**, libremente rellenables.

## Pestaña Materiales (Tab Materiali)

Esta pestaña contiene los materiales utilizados en la intervención, que pueden aparecer porque están relacionados con los Servicios previamente ingresados o pueden ser completados libremente. Los Materiales presentan los datos correspondientes como el Código del artículo y la Descripción correspondiente, la Cantidad, el Precio, etc. 
Seleccionando una línea de material, es posible completar las pestañas inferiores **totale materiali** (que contiene datos como el Almacén de referencia, la Lista o eventuales Descuentos) y **extra data**. 

Los botones específicos de la barra de ribbon son:

![](/img/neutral/common/delete.png) Eliminar materiales: elimina los materiales seleccionados;

![](/img/neutral/common/new.png) Nuevo material: inserta una nueva línea de material;

![](/img/neutral/common/view-material.png) Visualizar materiales sin servicios: hace que aparezcan en la cuadrícula solo los materiales sin servicios relacionados;

![](/img/neutral/common/view-material.png) Visualizar materiales relacionados con los servicios: hace que aparezcan solo los materiales relacionados con los servicios;

![](/img/neutral/common/view-material.png) Visualizar todos los materiales: hace que aparezcan todos los materiales.

![](/img/neutral/common/delete-discount.png) Eliminar descuentos de materiales: elimina los descuentos asociados al material seleccionado.	


## Pestaña Resúmenes (Tab Riepiloghi)

Esta pestaña contiene los Resúmenes de la intervención, que pueden ser consultados.
También es posible ingresar eventuales gastos finales indicando el Tipo, el Importe, la presencia en la factura o no con el indicador correspondiente, el IVA. Estos datos modificarán los resúmenes a la derecha.

Finalmente, se pueden ingresar Notas finales.

## Pestaña Plan de facturación (Tab Piano di fatturazione)
El Plan de facturación (o Invoice Plan) contiene una vista previa de la factura que se generará de la intervención. Esta pestaña se calcula automáticamente al avanzar el estado de la intervención, de Insertado a Por Aprobar. Sin embargo, puede recalcularse en cualquier momento utilizando el botón "Generar Plan de facturación".

Las líneas presentes se insertan a partir de los datos en: servicios, materiales, gastos a facturar y otros gastos. 
Las líneas de servicios y materiales podrán tener Tipo de Línea "1 o 2 - codificado o no codificado", mientras que los gastos tendrán tipo de línea "3-gastos".
Las líneas tendrán correspondencia 1-1 entre servicios/materiales/gastos e invoice plan. 
Solo en el caso de los servicios, las líneas podrán dividirse:

por ejemplo, un servicio tiene una duración de más de 8 horas. En el plan de factura si se prevé el cálculo del fuera de horario, la línea del servicio se dividirá en 2: 

1. línea de servicio por 8 horas, con todos los referentes y precios ingresados en la pestaña de servicios;
2. línea de fuera de horario por las horas que exceden las 8, con la tarifa asignada desde la lista, y un código de artículo diferente dependiendo de las configuraciones (parámetros del proyecto o franja horaria donde se prevé un cambio de artículo).

Cada línea también tiene su estado: 
1. A facturar: la línea será considerada por el procedimiento de valorización de intervenciones;
2. Suspendido: la línea NO será considerada por el procedimiento de valorización de intervenciones hasta que su estado no sea restaurado a A facturar;
3. Excluido: la línea NO será considerada por el procedimiento de valorización de intervenciones en ningún caso;
4. Facturado: la línea ya ha sido valorizada y, por lo tanto, ya está incluida en una factura de venta. 

Los otros datos presentes en la línea son: 
- código de artículo / variante / descripción de variante / descripción de artículo que son datos relacionados con el código de artículo utilizado;
- Descripción para actividad planificada / sprint, fecha efectiva del servicio y tiempo efectivo: datos obtenidos de la pestaña de servicios, reportan la descripción ingresada por el usuario relacionada al servicio realizado y a la fecha y tiempo efectivo del servicio.
- valor de redondeo: si se prevé por las reglas de facturación, el total de horas calculado en los servicios podrá ser redondeado. El valor a añadir para obtener el total deseado se indica en este campo. 
- unidad de medida: unidad de medida de referencia para la línea;
- Cantidad: cantidad en base a la unidad de medida;
- Precio: precio establecido en los servicios/materiales/gastos o recalculado para fuera horario;
- Impuesto: tasa de IVA aplicada;
- Está fuera de horario: indicador que indica si la línea en cuestión ha sido calculada automáticamente y deriva de un exceso de las horas indicadas en las franjas horarias.


Cada línea también tiene más detalles: 
cada uno de estos son heredados de las pestañas originales (servicios/materiales/gastos) pero pueden ser modificados. 
- facturamos ventas: facturamos ventas indicadas en el proyecto, y si no está presente se trata del facturado del artículo;
- artículo de factura: artículo que se insertará en la factura. Este campo se utiliza cuando, por ejemplo, se habilita la opción para gestionar las horas de viaje como horas de servicio. En este caso, la línea en el plan de factura tendrá el artículo de los gastos de viaje, mientras que en el campo Artículo de factura encontraremos el artículo de servicio al que se han agrupado las horas de viaje. 
- categoría de actividad: categoría de actividad derivada del proyecto o manualmente; 
- ticket: número de ticket asociado a la línea;
- registro de instalaciones: registro de instalaciones asociado a la línea; 
- empleado: registro de empleado asociado a la línea, derivado de la recurso asignada. 
- Proyecto: línea de proyecto de referencia; 
- Factura de anticipo: factura de anticipo presente en el proyecto, y vinculada a la línea del plan de facturación. Indica que la línea contribuirá a la erosión del importe y cantidad de la factura de anticipo. 
- causa de suspensión: en caso de estado de línea "Suspendido", es posible indicar el motivo de la suspensión; 
- Anotación: anotación libre; 
- Descuentos y tipo de escalón: descuentos y su respectivo escalón a aplicar sobre el valor de la línea, presenta las mismas modalidades utilizadas en otros documentos;
- Lista: lista de referencia para la línea.
- Precio manual: indicador que se habilita automáticamente en caso de modificación manual del precio en la línea, respecto al calculado automáticamente.


El plan de facturación se genera con reglas específicas que pueden ser configuradas a nivel de cliente o en parámetros del proyecto. 
La prioridad con la que se toman las informaciones es la siguiente: 

- verifica las configuraciones presentes en el registro del cliente: si están presentes, también verifica la correspondencia por tipo de intervención y sede de trabajo (dato presente en la recurso titular de la intervención). 
En caso de configuraciones con tipo de intervención nulo, o tipo de sede de trabajo nulo, se entiende que son válidas para todos los tipos de intervención/sede de trabajo. 

- si en el cliente no se encuentra la correspondencia, la búsqueda se extiende a los [parámetros del proyecto](/docs/configurations/parameters/projects/project-parameters/) > intervenciones > Configuraciones de valorización de intervenciones.

Las reglas establecidas a nivel de parámetros generales son válidas para todos los clientes o para determinadas categorías comerciales de clientes. 
Si el campo de categoría comercial resulta vacío, se entiende válido para todas las categorías. 
A continuación, se buscan las configuraciones por tipo de intervención (correspondencia precisa o tipo de intervención nulo) y por sede de trabajo (correspondencia precisa o sede de trabajo nula).


En función de estas correspondencias se utilizarán las configuraciones más adecuadas. Si no se encuentra ninguna correspondencia, el plan de facturación permanecerá vacío. 

## Ejemplos de cálculo del plan de facturación
Supongamos que la configuración actual para los ejemplos a continuación sea:

>Franja horaria: lun-vie 08.00-20.00 máximo diario 8 horas.
>Redondeo: hasta 8 horas se redondea de 2 en 2, a partir de 8 horas se redondea a la media hora. 
>Es decir: servicio de 3.15 h --> se convertirán en 4 horas facturables; servicio de 7.30h --> se convertirán en 8 horas facturables; 8.15 de servicio --> se convertirán en 8.30 facturables. 
>Horas de viaje incluidas en los servicios: habilitadas.

Los horarios así configurados no indican que la actividad se realizará de 08.00 a 20.00, sino que en el transcurso de este horario se pueden realizar como máximo 8 horas, después de las cuales se activará el cálculo del fuera de horario. Asimismo, el exceso de esta franja horaria activará el cálculo del fuera de horario, incluso si son menos de 8 horas. 


:::note[Ejemplo 1] 

:::

:::note[Ejemplo 2]
>Horas de viaje: fecha 05/09 - 2 h.
>Servicio: fecha 06/09 - 08.30-12.30/14.00-18.00 - 8 h.

>Plan de facturación: servicio 06/09 8 h. 
En este caso, las horas de viaje no se consideran porque al estar activa la opción de considerar las horas de viaje como un servicio, en el día 05/09 al no haber ningún servicio al que agrupar las horas de viaje, estas no son tenidas en cuenta en el plan de facturación. 

:::