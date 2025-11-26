---
title: Nuevo Intervención
sidebar_position: 2
ai_generated: true
---

Los datos a ingresar son:

**Tipo de intervención**: contiene la [tipología de Intervención](/docs/configurations/tables/project-management/intervention-type/);

**Cliente**: contiene el cliente destinatario de la intervención;

**Año/Número/Fecha**: contiene los datos de la intervención; en caso de modificar la fecha, se preguntará si desea actualizar también todas las demás fechas del documento (gastos, servicios);

**Recurso**: indica el recurso responsable de la intervención, propuesto por defecto en las nuevas filas.

**Empleado**: indica el empleado vinculado a la ficha del recurso.

Hay pestañas específicas disponibles.

## Encabezado<!-- Testata -->

En esta pestaña se contiene información general sobre la intervención, como la **Divisa**, el **Cambio**, eventuales **Anotaciones**, el **Audit Trail**. Hay una posible **Lista de precios** asociada, el indicador que señala si la intervención está **Facturada** y el **Estado de la intervención**.

Los estados previstos para la intervención son los siguientes:
- <u>Insertado</u>: estado inicial de la intervención, que indica un documento recién insertado.
- <u>Por aprobar</u>: estado utilizado como confirmación por parte del recurso de que se han ingresado todos los datos requeridos, ejecuta el recálculo de los gastos según las condiciones ingresadas en la intervención, añadiendo eventuales indemnizaciones de viaje, etc. Se genera el Plan de facturación para dar un anticipo de lo que se facturará.
- <u>Aprobado</u>: estado utilizado por la persona responsable de revisar las intervenciones declaradas por los recursos, para lo cual se genera la correspondiente declaración de actividad para el recurso.
- <u>Controlado</u>: estado por el cual se considera que la intervención es facturable.
- <u>Facturado</u>: intervención facturada. Este estado no puede ser asignado manualmente.
- <u>Parcialmente Facturado</u>: estado que identifica una intervención con algunas filas del invoice plan facturadas y otras no.
- <u>Cerrado Forzosamente</u>: estado que identifica una intervención cerrada forzosamente que por lo tanto no ha sido ni será nunca facturada. Se puede asignar también un motivo de suspensión personalizado.
- <u>Suspendido</u>: estado que identifica una intervención suspendida temporalmente, excluida de la facturación, pero que podrá ser restablecida más adelante.

Las pestañas **Pagos**, **Descuentos** permiten la configuración de datos útiles para las facturas que se emitirán.

**Datos extra**: eventuales datos extra ingresados para la intervención

**Documentos adjuntos**: eventuales documentos adjuntos a la intervención

## Gastos<!-- Spese -->

Esta sección se divide en tres subgrupos adicionales:

**Gastos de intervención sostenidos**: indica los gastos asumidos por el recurso, que normalmente se proponen desde la ficha del recurso si existen. Se incluirán en la declaración de actividad, pestaña Cargos de viaje generada por la intervención y eventualmente pueden marcarse también como a facturar. Cada fila puede tener su propio adjunto, por ejemplo, un justificante de gasto.

**Gastos de intervención a facturar**: indica los gastos que se van a facturar al cliente, que normalmente se proponen desde la ficha del cliente si existen. También pueden derivarse de gastos asumidos marcados como a facturar. Se incluirán en el Plan de facturación.
Solo se podrán seleccionar los gastos configurados específicamente como de tipo Viaje.

**Otros gastos**: otros gastos genéricos para incluir en el Plan de facturación.

Incluye eventuales cargos de viaje<!-- Oneri di viaggio -->, identificados por:

- **Recurso**: recurso que asumió el gasto, por defecto se propone el recurso de la cabecera;
- **Tipo de gasto**: contiene la tipología de cargo, con la correspondiente **Descripción**;
- **Fecha del gasto**: fecha en la que se imputó el gasto;
- **Importe del gasto**: es posible indicar directamente el importe del gasto, por ejemplo en el caso de un reembolso de comida;
- **KM**: contiene los kilómetros recorridos con el correspondiente **Costo por km**;
- **Costo horario**: costo por hora en el caso de gastos de tipo "Horas de viaje";
- **Fecha/Hora de salida**: contiene la fecha y la hora de salida;
- **Fecha/Hora de llegada**: contiene la fecha y la hora de llegada;
- **Horas de viaje**: indica las horas de viaje calculadas en base a la fecha y hora;
- **Valor fijo**: como alternativa al importe del gasto es posible tener un valor forfait. Generalmente se completa en la ficha del recurso y se propone automáticamente; no será modificable por el usuario. Se usa cuando los reembolsos al recurso son preacordados y no modificables por el usuario;
- **IVA**: indica el IVA a aplicar;
- **Costo total**: campo calculado según los datos ingresados que contiene el costo total del gasto (ej. km por costo km, horas de viaje por costo horario, etc);
- **A reembolsar**: este campo indica si el cargo debe ser reembolsado;
- **Adjuntos**: indica si la fila tiene adjuntos asociados;
- **Nota**: eventuales notas ingresadas por el usuario;

En el caso de Tipo de Intervención con el indicador Externo habilitado, los gastos previstos para el recurso no se propondrán en la pestaña Gastos Sostenidos. En cambio, los gastos ingresados en la pestaña Gastos‑Intervención en la ficha del cliente se propondrán en la pestaña Gastos a facturar según las configuraciones.

Botón **Gastos a Facturar**: presente en la pestaña "Gastos de intervención sostenidos", al seleccionar un gasto y hacer clic en el botón, este se trasladará automáticamente a la pestaña "Gastos de intervención a Facturar". Si el tipo de gasto ya está presente en los gastos a facturar o el cliente tiene configurado un forfait, se pedirá al usuario confirmación para proceder con el recálculo.

Botón **Recalcular gastos**: solo debe usarse cuando sea necesario, el mismo procedimiento ya se ejecuta al cambiar el estado de la intervención de "insertado" a "por aprobar".
El procedimiento realiza:

1. Cálculo de **gastos directos** a facturar al cliente: si en la ficha del cliente se han configurado gastos con el indicador "gasto directo" habilitado y el mismo gasto ha sido declarado por el recurso en los gastos sostenidos, este se trasladará automáticamente como a facturar;
> En el caso de gastos con tipo diferente a distancia/horas de viaje, se tomará el importe de gasto declarado por el recurso y se trasladará a los gastos a facturar;

> En el caso de gastos del tipo distancia / horas de viaje, es posible indicar en la ficha del cliente el costo por km/costo horario, y con el recálculo se hará un merge de los km/horas declarados por el recurso y los costos configurados en la ficha del cliente, obteniendo un gasto completo con todos los datos y el total;
2. Cálculo de **gastos forfait**: si en la ficha del cliente se han configurado gastos de tipo forfait con condiciones por recurso/por día, estos se recalcularán automáticamente
:::note[Ejemplo<!-- Esempio -->]
En la intervención de un día de duración hay 3 recursos, por lo tanto se declaran 3 filas de servicio.
El gasto forfait está configurado así:

Autopista: 100 - una vez
Almuerzo: 50 - por persona por día

El gasto forfait a facturar será en total 250 (100 autopista fijo, 50 almuerzo por cada recurso). El cálculo se realizará al cambiar el estado de la intervención de "Insertado" a "Por aprobar" o utilizando el botón Recalcular Gastos.
:::

3. Cálculo de **Gastos de intervención a facturar**: si son modificados por el usuario, pedirá confirmación antes de proceder, y en caso afirmativo restaurará los gastos a facturar previstos para el cliente.
4. Cálculo de la **indemnización** de viaje para el recurso;

:::note[Ejemplo]
En la ficha del recurso se establece como límite "2" horas de viaje.
Se calculará la indemnización por viaje solo si la suma de los servicios + horas de viaje supera más de 2 horas las horas ordinarias:

8 horas ordinarias

3 horas de viaje

--> se agregará una fila en los gastos con el importe establecido para el viaje

6 horas ordinarias

3 horas de viaje

--> no habrá indemnización por viaje, ya que el mínimo, además de las 8 horas, son 2 de viaje (en este caso serían 9 horas, o sea, solo una hora extra a las 8 ordinarias)
:::

## Pestaña Servicios<!-- Tab Servizi -->

Contiene la lista de los servicios previstos en la intervención. Cada fila puede ser relativa a un servicio codificado o no, y los detalles correspondientes:

- Fecha efectiva del servicio: indica la fecha en que se realizó el servicio. Puede ser diferente a la fecha del encabezado, ya que en una intervención puede haber varios servicios realizados en diferentes días. Esta fecha se usará para la generación de la declaración de actividad del recurso;
- **Hora inicio**, **Hora inicio pausa**, **Hora fin pausa**, **Hora Fin**: horarios en los que se realizó el servicio;
- **Smartworking**: campo que se habilita automáticamente en base a las configuraciones relacionadas con el Smartworking en la ficha del recurso. Se usará luego en la nómina, para identificar los días en que se realizó trabajo remoto. Se establecerá así en la declaración de actividad generada por la intervención;
- **Servicio solapado**: campo que se habilita automáticamente si detecta la presencia de otros servicios o declaraciones de actividad para el recurso en el mismo día o franja horaria;
- **Minutos solapados**: es posible indicar manualmente el tiempo efectivo que las actividades se solapan;
- **Tiempo efectivo**: total de horas obtenidas por el cálculo de las horas declaradas en el servicio;
- **Descripción del servicio**: descripción del artículo ingresado en caso de fila de tipo Codificado;
- **Descripción de la actividad realizada**: descripción ingresada por el recurso sobre el servicio realizado, y en caso de selección de proyecto, descripción de la fila del Proyecto. Luego se utilizará para la descripción de la Declaración de actividad generada automáticamente por la intervención. Con doble clic en el campo es posible agrandar el área para escribir.
- **Unidad de medida**: UM del artículo o modificada manualmente por el recurso, solo de tipo temporal
- **Cantidad**: si los parámetros del Proyecto y la conversión entre diferentes UM están correctamente configurados, el tiempo efectivo se convertirá en la UM correspondiente.

:::note Ejemplo 
Servicio con tiempo efectivo de 8 horas, unidad de medida del servicio "GG-días".

En los parámetros generales del proyecto, la unidad de medida para los días es "GG-días" y la unidad de medida para las horas es "HH-horas". Las Horas diarias configuradas para ese día son 7.

La cantidad se marcará automáticamente como 1,14 GG. (Obtenida de la conversión de 1 GG = 7 horas)
:::

**Precio Unitario**, **Precio total**, **Importe total**, **IVA**, **Descuentos**: datos relativos al precio y al IVA obtenidos de las configuraciones apropiadas de lista de precios del cliente y artículo;
**Recurso**: recurso que realizó el servicio, por defecto el de la cabecera, pero editable;
**Porcentaje de avance estimado del trabajo**: porcentaje de trabajo realizado, actualiza el valor correspondiente en el proyecto;
**Facturación de ventas**: facturación de ventas asignada según la prioridad de la ficha del artículo o del cliente;
**Proyecto**: heredado de la cabecera de la intervención si está presente, o asociado manualmente por el operador. Actualiza el precio si el servicio no estaba valorizado, y determina la categoría de la actividad;
**Ticket**: ticket de referencia del servicio;
**Ficha de instalaciones**: ficha de instalaciones EAM asociadas al servicio;
**Empleado**: empleado asociado al recurso;
**Factura Anticipada**: Factura anticipada presente en un proyecto (puede ser diferente del asignado al servicio) y vinculada al servicio, que implicará la reducción del saldo de la factura anticipada, además del descuento correcto en la facturación;
**Nota**: eventuales notas del cliente.
**Facturable**: si está habilitado identifica el servicio que se incluirá en el plan de facturación. El valor del campo es definido por los documentos previos de los que fue generado, o por el proyecto, o por la categoría de actividad;
**Precio Manual**: campo que identifica si el precio propuesto por lista de precios o procedimientos ha sido modificado manualmente por el usuario;
**Actividad de valor añadido**: campo que identifica los servicios de valor añadido, con fines estadísticos. Valorizado en función del proyecto, o si no está presente, según la configuración de la categoría de actividad. Puede modificarse manualmente por el usuario.

Hay dos pestañas adicionales: **Documentos relacionados** y **Datos extra**, editables libremente.

## Pestaña Materiales<!-- Tab Materiali -->

Esta pestaña contiene los materiales utilizados en la intervención, que pueden aparecer al estar vinculados con los Servicios previamente ingresados o pueden ser ingresados libremente. Los Materiales muestran sus propios datos como el Código de artículo y la Descripción correspondiente, la Cantidad, el Precio, etc.
Al seleccionar una fila de material, es posible completar las pestañas inferiores **Total Materiales** (que contiene datos como el almacén<!-- magazzino --> de referencia, la Lista de precios o eventuales Descuentos) y **Datos extra**.

Los botones específicos de la barra de herramientas son:

![](/img/neutral/common/delete.png) Borrar materiales: elimina los materiales seleccionados;

![](/img/neutral/common/new.png) Nuevo material: inserta una nueva fila de material;

![](/img/neutral/common/view-material.png) Ver materiales sin servicios: solo muestra en la cuadrícula los materiales sin servicios vinculados;

![](/img/neutral/common/view-material.png) Ver los materiales vinculados a los servicios: solo muestra los materiales vinculados a los servicios;

![](/img/neutral/common/view-material.png) Ver todos los materiales: muestra todos los materiales.

![](/img/neutral/common/delete-discount.png) Borrar descuentos de materiales: elimina los descuentos asociados al material seleccionado.

## Pestaña Resúmenes<!-- Tab Riepiloghi -->

Esta pestaña contiene los Resúmenes de la intervención, que se pueden consultar.
También es posible ingresar eventuales gastos finales, indicando el Tipo, el Importe, su presencia en factura o no con el correspondiente campo, el IVA. Estos datos modificarán los resúmenes a la derecha.

Finalmente, es posible ingresar Notas finales.


## Pestaña Plan de facturación<!-- Tab Piano di fatturazione -->
El Plan de facturación (o Invoice Plan) contiene un anticipo de la factura que se generará a partir de la intervención. Esta pestaña se calcula automáticamente al avanzar el estado de la intervención de Insertado a Por Aprobar. Sin embargo, se puede recalcular en cualquier momento usando el botón "Generar Plan de facturación".

Las filas presentes se insertan partiendo de los datos presentes en: servicios, materiales, gastos a facturar y otros gastos.
Las filas de servicios y materiales pueden tener Tipo de fila "1 o 2 - codificado o no codificado", mientras que los gastos tendrán Tipo de fila "3-gastos".
Las filas tendrán correspondencia 1-1 entre servicios/materiales/gastos e invoice plan.
Solo en el caso de los servicios se podrán dividir las filas:

Ejemplo: un servicio tiene una duración mayor a 8 horas. En el invoice plan, si está previsto el cálculo de extra horario, la fila del servicio se dividirá en 2:

1. fila de servicio por 8 horas, con todas las referencias y precio ingresados en la pestaña servicios
2. fila de extra horario por las horas excedentes a las 8, con tarifa asignada de la lista de precios, y código de artículo diferente según las configuraciones (parámetros de proyecto o franja horaria donde se prevé un cambio de artículo)

Cada fila también tiene su propio estado:
1. A facturar: la fila será considerada por el procedimiento de valoración de intervenciones;
2. Suspendido: la fila NO será considerada por el procedimiento de valoración de intervenciones hasta que su estado no se restablezca en A facturar;
3. Excluido: la fila NO será considerada por el procedimiento de valoración de intervenciones en ningún caso;
4. Facturado: la fila ya ha sido valorada y, por lo tanto, ya está incluida en una factura de venta.

Los demás datos presentes en la fila son:
- código de artículo / variante / descripción de variante / descripción de artículo que son datos relativos al código de artículo utilizado
- Descripción por actividad planificada / sprint, fecha efectiva de servicio y tiempo efectivo: datos obtenidos de la pestaña servicios, muestran la descripción suministrada por el usuario relativa al servicio realizado y la fecha y tiempo efectivos del servicio.
- valor de redondeo: si está previsto por las reglas de facturación, el total de horas calculado en los servicios podrá ser redondeado. El valor a añadir para obtener el total deseado se indica en este campo.
- unidad de medida: unidad de medida de referencia para la fila;
- Cantidad: cantidad según la unidad de medida;
- Precio: precio establecido en los servicios/materiales/gastos o recalculado para el extra horario
- Impuesto: tipo de IVA aplicado;
- Es extra horario: campo que indica si la fila fue calculada automáticamente y deriva de un exceso de las horas indicadas en las franjas horarias.

Cada fila tiene también otros detalles:
cada uno de estos datos se heredan de las pestañas originales (servicios/materiales/gastos) pero luego pueden ser modificados.
- facturación de ventas: facturación de ventas indicada en el proyecto, y si no existe, facturación de artículo;
- artículo factura: artículo que se incluirá en factura. Este campo se utiliza cuando, por ejemplo, se habilita la opción de gestionar las horas de viaje como horas de servicio. En este caso, la fila en el invoice plan tendrá el artículo de gastos de viaje, mientras que en el campo Artículo factura encontraremos el artículo de servicio al que se han sumado las horas de viaje.
- categoría de actividad: categoría de actividad derivada del proyecto o de forma manual;
- ticket: número de ticket asociado a la fila;
- ficha de instalaciones: ficha de instalaciones asociada a la fila;
- empleado: ficha de empleado asociada a la fila, derivada del recurso asignado.
- Proyecto: fila de proyecto de referencia;
- Factura anticipada: factura anticipada presente en el proyecto, y vinculada a la fila del plan de facturación. Indica que la fila contribuirá a la reducción del importe y cantidad de la factura anticipada.
- motivo de suspensión: en caso de estado de fila "Suspendido", se puede indicar el motivo de suspensión;
- Anotación: anotación libre;
- Descuentos y Tipo de escalón: descuentos y el escalón relativo que aplicar al valor de la fila, sigue las mismas modalidades que en otros documentos
- Lista de precios: lista de precios de referencia para la fila
- Precio manual: campo que se habilita automáticamente si el precio de la fila ha sido modificado manualmente respecto al calculado automáticamente.


El plan de facturación se genera con reglas específicas que pueden configurarse a nivel de cliente o parámetros de proyecto.
La prioridad con la que se toman las informaciones es la siguiente:

- verifica las configuraciones presentes en la ficha del cliente: si existen, también verifica la correspondencia para tipo de intervención y sede de trabajo (dato presente en el recurso titular de la intervención).
En el caso de configuraciones con tipo de intervención nulo, o tipo de lugar de trabajo nulo, se consideran válidas para todos los tipos de intervención/sede de trabajo.

- si en el cliente no se encuentra la correspondencia, la búsqueda se extiende a los [parámetros del proyecto](/docs/configurations/parameters/projects/project-parameters/) > intervenciones > Configuración de valoración de intervenciones

Las reglas establecidas a nivel de parámetros generales, son válidas para todos los clientes o para determinadas categorías comerciales de clientes.
Si el campo de categoría comercial está vacío, se considera válido para todas las categorías.
Después se buscan las configuraciones por tipo de intervención (coincidencia exacta o tipo de intervención nulo) y por Sede de trabajo (coincidencia exacta o sede de trabajo nula).

En base a estas coincidencias se utilizarán las configuraciones más adecuadas. Si no se encuentra ninguna coincidencia, el plan de facturación permanecerá vacío.


## Ejemplos de cálculo del plan de facturación<!-- Esempi di calcolo piano di fatturazione -->
Supongamos que la configuración actual para los siguientes ejemplos es:

>Franja horaria: lun-vie 08.00-20.00 máximo diario 8 horas
>Redondeo: hasta 8 horas se redondea de 2 en 2, a partir de 8 horas se redondea a la media hora.
>Es decir: servicio 3.15 h --> serán 4 horas facturables; servicio de 7.30h --> serán 8 horas facturables; 8.15 de servicio --> serán 8.30 horas facturables.
>Horas de viaje incluidas en los servicios: habilitado

Estos horarios no indican que la actividad se realizará de 08.00 a 20.00, sino que dentro de ese rango se pueden realizar un máximo de 8 horas, después de lo cual se calculará el extra horario. Así como sobrepasar dicha franja horaria hará que se calcule el extra horario, incluso si es menos de 8 horas.


:::note[Ejemplo 1<!-- Esempio 1 -->]

:::

:::note[Ejemplo 2]
>Horas de viaje: fecha 05/09 - 2 h
>Servicio: fecha 06/09 - 08.30-12.30/14.00-18.00 - 8 h

>Plan de facturación: servicio 06/09 8 h.
En este caso las horas de viaje no se consideran porque al estar activa la opción de considerar las horas de viaje como servicio, en el día 05/09 al no haber ningún servicio al que sumar las horas de viaje, estas no se consideran en el plan de facturación.

:::