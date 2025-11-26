---
title: Nueva Declaración de Actividad por Proyecto
sidebar_position: 1
ai_generated: true
---

Los datos son:

**Tipo de actividad**: contiene el [Tipo de actividad](/docs/configurations/tables/project-management/activity-type/);

**Fecha de actividad/Número de actividad**: contiene la fecha y el número de la actividad<!-- attività -->; se propondrá automáticamente la fecha más antigua faltante según los meses a verificar configurados en los parámetros de proyectos<!-- progetti -->. Si la fecha corresponde a un día configurado en el Calendario de días no laborables, no se propondrá esa fecha.

**Recurso**: contiene el recurso que realiza la actividad<!-- attività -->;

**Fecha/Tiempo manual**: contiene la fecha de inserción y el flag que, si está activo, habilita el campo **Tiempo total** para que no se calcule automáticamente y pueda ser modificado manualmente por el usuario;

**Cliente**: contiene el cliente para el cual se realiza la actividad<!-- attività -->;

**Cuenta estadística**: es posible ingresar una cuenta<!-- conto --> a utilizar para estadísticas;

**Proyecto**: contiene el [Proyecto](/docs/project-management/projects/search-projects-intro/) relacionado;

Al abrir el expander del Proyecto<!-- Progetto -->, es posible configurar un **Artículo**: este código de artículo será utilizado en caso de que la actividad<!-- attività --> sea facturable y, por lo tanto, convertida en intervención. Si no se indica un código de artículo específico, el servicio en la intervención tendrá código de artículo, UM y precio tomados del proyecto<!-- progetto --> relacionado.
Si por el contrario se indica un artículo específico: 
- si la UM del artículo y la UM del proyecto relacionado coinciden, y la UM del proyecto es del tipo "Tiempo", en la intervención se tendrá el código de artículo indicado en la actividad, con precio y UM tomados del proyecto. 
- si la UM del artículo y la UM del proyecto relacionado NO coinciden o la UM del proyecto no es de tipo "Tiempo", en la intervención se tendrá el código de artículo indicado en la actividad, con precio y UM atribuidos según las lógicas estándar de los documentos (como en el caso de insertar una nueva línea en un documento, se consideran tarifarios, descuentos, precio por defecto en el maestro de artículos, etc.)

**Hora de inicio/Hora de fin**: contiene el horario de inicio y fin de la actividad<!-- attività -->; se propone en base al turno del recurso, y si ya existen otras declaraciones, sólo se propondrá el rango horario faltante para el día.
<u>No se permiten fechas desalineadas</u> entre los diferentes campos de Inicio-Fin, Inicio-Fin de la pausa y Fecha de actividad<!-- attività -->, por lo que al modificar cualquiera de estas fechas, los otros campos se alinearán automáticamente.
Al modificar la Hora de fin, si es anterior a la pausa, esta será eliminada automáticamente.

**Hora inicio pausa/Hora fin pausa**: contiene los horarios de la pausa;

**Actividad superpuesta**: flag que se habilita automáticamente si detecta la presencia de otras actividades<!-- attività --> para el recurso en la misma jornada o franja horaria.

**Minutos superpuestos**: es posible indicar manualmente por parte del usuario el tiempo efectivo por el cual las actividades<!-- attività --> se superponen.

**Actividad en Smart Working**: flag que se habilita automáticamente en base a las configuraciones relativas al Smartworking en la ficha del recurso. Posteriormente será utilizado en la elaboración de nóminas, para identificar los días en los que se realizó teletrabajo. En los dashboards correspondientes será posible verificar la presencia de días con declaraciones de actividad<!-- attività --> híbrida para la misma jornada.

**Centro de costo de origen**: centro de costo propuesto desde la ficha del empleado asociado al recurso.

**Centro de costo**: centro de costo propuesto desde la categoría de actividad<!-- attività -->.

**Tickets**: ticket asociado a la actividad<!-- attività -->; si en la declaración de actividad<!-- attività --> no se ha completado el cliente y el proyecto, estos serán llenados automáticamente por el ticket asociado.

**Estimación técnica**: si en el ticket existe una estimación técnica que corresponde al cliente y al recurso, esta será propuesta automáticamente. Si en la declaración de actividad<!-- attività --> no se ha completado el cliente y el proyecto, estos serán llenados automáticamente por el ticket/estimación técnica asociados.

**Planta**: ficha de la planta del área EAM, asociada a la actividad<!-- attività -->.

**Sociedad / División Intercompany**: indica la sociedad y división de pertenencia si es diferente a la sociedad de inserción.

**Intervención**: contiene la posible [Intervención](/docs/project-management/service-activities/search-intervention/) asociada manualmente o generada automáticamente al guardar la actividad<!-- attività --> o generada por el asistente; En el tipo de actividad<!-- attività --> es posible establecer el tipo de intervención a utilizar.
![](/img/it-it/project-management/projects/declaration.png)

**Estado de la actividad**: contiene el estado entre Insertado, Verificado, Suspendido, Cerrado.

**Tiempo total**: contiene el conteo en horas de la declaración de actividad<!-- dichiarazione attività -->, calculado con base en los horarios declarados. Si está activado el flag "Tiempo Manual", el campo será editable por el usuario.

**Porcentaje de estimación del trabajo**: es posible indicar un valor de 0 a 100 para que sea ingresado en el eventual servicio de la intervención generada por la actividad<!-- attività -->.

**Criterios de facturación<!-- Criteri di fatturazione -->**

**Categoría de actividad**: propuesta automáticamente desde el proyecto si está presente, o ingresada por el usuario. De la categoría de actividad<!-- attività --> dependen el centro de costo y el flag "Actividad Facturable"

**Actividad intercompany**: flag que identifica la actividad<!-- attività --> gestionada como intercompany.

**Actividad Facturada**: flag que indica si la actividad<!-- attività --> está asociada a la intervención, y por ende facturada.

**Actividad facturable**: flag que indica si la actividad<!-- attività --> puede ser convertida en intervención, y por ende facturada. Este flag se configura según la categoría de actividad<!-- attività --> o por el usuario.

**Forzar actividad facturada**: flag que indica si la actividad<!-- attività --> puede considerarse facturada aun sin serlo realmente, para que no se genere la intervención asociada.

**Actividad de valor añadido**: flag que identifica las actividades<!-- attività --> de valor agregado, con fines estadísticos. Se valora en base al proyecto<!-- progetto -->, si no está presente según la configuración de la categoría de actividad<!-- attività -->. Puede ser modificado manualmente por el usuario.

Posteriormente se presentan diferentes pestañas.

**Pestaña Descripción**
En esta pestaña es posible describir la actividad<!-- attività --> en el campo **Descripción de la actividad**, que será utilizada como Descripción de actividad realizada en las intervenciones (si se generan). También hay una **Descripción interna** que en cambio no será propagada a ningún otro documento.
Si la actividad<!-- attività --> está asociada a una intervención y se realizan cambios en los horarios y/o descripción, la intervención también se actualizará automáticamente.

**Pestaña Gastos de viaje**
Esta pestaña contiene los posibles gastos de viaje asumidos por el recurso. 
Durante la inserción manual de la declaración de actividad<!-- dichiarazione attività -->, los gastos serán propuestos automáticamente al seleccionar el recurso, si están configurados en la ficha.
Si, en cambio, la declaración de actividad<!-- dichiarazione attività --> ha sido generada automáticamente por la intervención, la pestaña Gastos de viaje contendrá únicamente lo declarado por el recurso como Gastos realizados en la intervención. Si la pestaña Gastos realizados en la intervención está completamente vacía, en la actividad se propondrán igualmente los gastos configurados en el maestro de recurso.

Al guardar, si los gastos propuestos no han sido completados con valores e importes, serán eliminados automáticamente.

Es posible indicar el **Tipo de gastos**, y de acuerdo a su configuración, se habilitarán para edición otros campos como **Horas de viaje**, **Costo horario**, **KM**, **costo por KM**, **Importe forfait**, **Impuesto**, **IVA incluida**, **Importe del gasto**, **Fecha**, **Tipo de pago**, etc.

**Costo total** se calcula automáticamente en el caso de "costo horario" o "costo por KM", multiplicados por "horas de viaje" y "KM" respectivamente.

**A reembolsar** si está habilitado, en la elaboración de la nómina, el importe será considerado como a reembolsar, de lo contrario se excluirá del recibo de nómina.

**En factura** indica si el gasto debe insertarse como gasto "A facturar" en la intervención si se genera.

**Notas**: eventuales notas ingresadas por el usuario.

**Pestaña Actividad de contacto**
En esta pestaña es posible asociar la declaración de actividad<!-- dichiarazione attività --> a un contacto del área CRM, a una Oportunidad del área CRM y a una Campaña de Marketing.

**Pestaña Documentos adjuntos**
En esta pestaña es posible visualizar y agregar adjuntos, que serán guardados en el módulo Documental de Fluentis. Para agregar un archivo, basta con usar el drag and drop, es decir, seleccionando el archivo de la ubicación en que se encuentra y soltándolo dentro de la tabla.

**Pestaña Extra Data**
En esta pestaña es posible ingresar los eventuales Extra Data relacionados; para más información consultar la sección [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).