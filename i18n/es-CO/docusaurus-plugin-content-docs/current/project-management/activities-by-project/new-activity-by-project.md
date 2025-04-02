---
title: Nueva Declaración de Actividad para Proyecto (Nuova Dichiarazione Attività per Progetto)
sidebar_position: 1
---

Los datos son:

**tipo attività**: contiene el [Tipo de actividad](/docs/configurations/tables/project-management/activity-type/);

**Fecha de actividad/Número de actividad (Data attività/Numero attività)**: contiene la fecha y el número de la actividad; se propondrá automáticamente la fecha más antigua que falte según los meses a verificar establecidos en los parámetros del proyecto. Si la fecha corresponde a un día configurado en el Calendario de días no laborables, esta no será propuesta.

**risorsa**: contiene el recurso que realiza la actividad;

**Fecha/Hora Manual (Data/Tempo manuale)**: contiene la fecha de ingreso y el indicador; si está activo, habilita el campo **totale tempo** de modo que no se calcule automáticamente, sino que pueda ser modificado manualmente por el usuario;

**cliente**: contiene al cliente para el cual se realiza la actividad;

**conto statistico**: se puede ingresar una cuenta a utilizar para las estadísticas;

**progetto**: contiene el [Proyecto](/docs/project-management/projects/search-projects-intro/) relacionado;

Al abrir el expansor del Proyecto, es posible establecer un **articolo**: este código de artículo se utilizará en caso de que la actividad sea facturable y, por lo tanto, convertida en intervención. Si no se indica un código de artículo específico, el servicio en la intervención tendrá el código de artículo, UM y precio del proyecto relacionado.  
Si se indica un artículo específico:  
- si la UM del artículo y la UM del proyecto relacionado coinciden, y la UM en el proyecto es de tipo "Tiempo", en la intervención tendremos el código de artículo indicado en la actividad, con precio y UM tomados del proyecto.  
- si la UM del artículo y la UM del proyecto relacionado NO coinciden o la UM del proyecto no es de tipo "Tiempo", en la intervención tendremos el código de artículo indicado en la actividad, con precio y UM asignados de acuerdo a las lógicas estándar de los documentos (como en el caso de la inserción de una nueva línea en un documento, se consideran precios, descuentos, precio por defecto en el registro del artículo, etc.)

**Hora de inicio/Hora de fin (Ora di inizio/Ora fine)**: contiene la hora de inicio y fin de la actividad; se propone según el turno del recurso, y si ya hay otras declaraciones presentes, se propondrá solo la franja horaria faltante para el día.  
<u>No se permiten fechas desalineadas</u> entre los diferentes campos Ingreso-Fin, Ingreso-Fin pausa y Fecha de actividad, por lo que al modificar cualquier fecha de estas, los otros campos se alinearán automáticamente.  
Al modificar la Hora de fin, si es anterior a la pausa, esta se eliminará automáticamente.

**Hora de inicio de pausa/Hora de fin de pausa (Ora inizio pausa/Ora fine pausa)**: contiene los horarios de la pausa;

**attività sovrapposta**: indicador que se activa automáticamente si detecta la presencia de otras actividades para el recurso en el mismo día o franja horaria.

**minuti sovrapposti**: es posible indicar manualmente por parte del usuario el tiempo real durante el cual las actividades se superponen.

**attività in smart working**: indicador que se activa automáticamente según las configuraciones relativas al Teletrabajo en el registro del recurso. Luego será utilizado en el procesamiento de nóminas para identificar los días en los que se ha realizado teletrabajo. En los cuadros de mando específicos, será posible verificar la presencia de días con declaraciones de actividades híbridas para el mismo día.

**centro di costo di origine**: centro de costos propuesto por el registro del empleado asociado al recurso.

**centro di costo**: centro de costos propuesto por la categoría de actividad.

**tickets**: ticket asociado a la actividad; si en la declaración de actividad no se completa el cliente y el proyecto, estos se completarán automáticamente a partir del ticket asociado.

**stima tecnica**: si en el ticket hay una estimación técnica que corresponde al cliente y al recurso, esta se propondrá automáticamente. Si en la declaración de actividad no se completa el cliente y el proyecto, estos se completarán automáticamente a partir del ticket/estimación técnica asociados.

**impianto**: registro de instalación del área EAM, asociada a la actividad.

**società / divisione intercompany**: indica la sociedad y división de pertenencia si es diferente de la sociedad de ingreso.

**intervento**: contiene la eventual [Intervención](/docs/project-management/service-activities/search-intervention/) relacionada manualmente o generada automáticamente al guardar la actividad o generada por el procedimiento guiado; en el tipo de actividad es posible establecer el tipo de intervención a utilizar.  
![](/img/it-it/project-management/projects/declaration.png)

**stato attività**: contiene el estado entre Ingresado, Verificado, Suspendido, Cerrado.

**totale tempo**: contiene el conteo en horas de la declaración de actividad, calculado en función de las horas declaradas. Si está habilitado el indicador "Tiempo Manual", el campo será modificable por el usuario.

**percentuale stima del lavoro**: es posible indicar un valor de 0 a 100 para que se inserte en el eventual servicio de la intervención generada por la actividad.

**criteri di fatturazione**

**categoria di attività**: propuesta automáticamente por el proyecto si está presente, o ingresada por el usuario. De la categoría de actividad dependen el centro de costo y el indicador "Actividad Facturable".

**attività intercompany**: indicador que identifica la actividad gestionada como intercompany.

**attività fatturata**: indicador que indica si la actividad está relacionada con la intervención, y, por lo tanto, facturada.

**attività fatturabile**: indicador que indica si la actividad puede ser convertida en intervención, y, por lo tanto, facturada. Este indicador se establece según la categoría de actividad o por el usuario.

**forza l'attività fatturata**: indicador que indica si la actividad puede considerarse facturada incluso sin serlo realmente, de modo que no se genere la intervención relacionada.

**attività a valore aggiunto**: indicador que identifica las actividades de valor añadido, con fines estadísticos. Valorada según el proyecto, si no está presente según la configuración de la categoría de actividad. Puede ser modificada manualmente por el usuario.

A continuación, hay varias pestañas.

**Pestaña Descripción (Tab Descrizione)**  
En esta pestaña es posible describir la actividad en el campo **descrizione attività**, que será utilizada como Descripción de la actividad realizada en las intervenciones (si se generan). También hay una **descrizione interna** que no será propagada en ningún otro documento.  
Si la actividad está relacionada con una intervención y se realizan modificaciones en horarios y/o descripciones, la intervención también se actualizará automáticamente.

**Pestaña Cargos de viaje (Tab Oneri di viaggio)**  
Esta pestaña contiene los cargos de viaje que pueda haber asumido el recurso.  
En la fase de ingreso manual de la declaración de actividad, los gastos se propondrán automáticamente al seleccionar el recurso, si están configurados en el registro.  
Si, en cambio, la declaración de actividad se ha generado automáticamente a partir de la intervención, la pestaña Cargos de viaje solo contendrá lo que haya declarado el recurso como Gastos asumidos en la intervención. Si la pestaña Gastos asumidos en la intervención está completamente vacía, en la actividad se propondrán los gastos configurados en el registro del recurso.

Al guardar, si los gastos propuestos no se han completado con valores e importes, se eliminarán automáticamente.

Es posible indicar el **tipo spese**, y en función de su configuración se habilitarán para modificación otros campos como **ore viaggio**, **costo orario**, **KM**, **costo km**, **importo forfait**, **imposta**, **iva inclusa**, **importo spesa**, **data**, **tipo pagamento**, etc.

**costo totale** se calcula automáticamente en caso de "costo por hora" o "costo por KM", multiplicados por las respectivas "horas de viaje" y "KM".

**da rimborsare** si está habilitado, en el procesamiento de la nómina, el importe será considerado como a reembolsar, de lo contrario será excluido de la nómina.

**in fattura** indica si el gasto debe ser incluido como gasto "A facturar" en la intervención si se genera.

**note**: notas eventuales ingresadas por el usuario.

**Pestaña Actividad de contacto (Tab Attività contatto)**  
En esta pestaña es posible vincular la declaración de actividad a un contacto del área CRM, a una Oportunidad del área CRM y a una Campaña de Marketing.

**Pestaña Documentos adjuntos (Tab Documenti allegati)**  
En esta pestaña es posible visualizar y agregar adjuntos, que se guardarán en el módulo Documental de Fluentis. Para agregar un archivo, basta con utilizar el drag and drop, es decir, seleccionando el archivo desde la ubicación en la que se encuentra actualmente y soltándolo dentro de la tabla.

**Pestaña Extra Data (Tab Extra Data)**  
En esta pestaña es posible ingresar eventualmente Extra Data relacionados; para más información, consulte la sección [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).