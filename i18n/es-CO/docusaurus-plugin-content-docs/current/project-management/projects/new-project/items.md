---
title: Artículos
sidebar_position: 3
ai_generated: true
---

En esta pestaña es posible ingresar los artículos<!-- articoli --> del proyecto. El botón en la barra de ribbon ![](/img/neutral/common/new.png) permite insertar una nueva línea de artículo, mientras que el botón ![](/img/neutral/common/delete.png) permite eliminarla. Para construir el esqueleto del proyecto<!-- pogetto -->, están disponibles los siguientes botones específicos:
![](/img/neutral/common/new-child.png)  Nuevo hijo: permite insertar una línea de proyecto hija de la línea seleccionada;    
![](/img/neutral/common/new-brother.png) Nuevo hermano: permite insertar una línea de proyecto en el mismo nivel de la línea seleccionada;
![](/img/neutral/common/wbs.png)  Sustituir el número WBS: permite incorporar al Número WBS de las líneas también el Número del proyecto;
para visualizar el esqueleto del proyecto, están disponibles los siguientes botones:
![](/img/neutral/common/implode.png)  Implosionar: permite ocultar las líneas del esqueleto;
![](/img/neutral/common/implode.png)  Expandir: permite visualizar las líneas.

Las características del artículo<!-- articolo --> deben ingresarse en la **pestaña Actividades** situada en la parte inferior:

**Número de línea/Número WBS**: contiene los números de la línea y del WBS y se configura automáticamente, aunque puede ser modificado libremente;       
**Tipo de Nodo**: indica si la línea es un **Root Node** (nodo principal), un **Activity Node** (relativo a las actividades) o un **Work Package Node** (nodo final de proyecto, el único que puede contener códigos de artículo<!-- articolo --> específicos);       
**Tipo de línea**: indica el tipo de artículo<!-- articolo --> entre Codificado, No codificado, Gastos o Notas (este último por defecto);      
**Artículo**: muestra Clase, Código y Descripción del artículo<!-- articolo --> seleccionado, si corresponde;        
**Descripción**: contiene la descripción del artículo<!-- articolo --> por defecto si fue seleccionado, pero puede ser modificada libremente;           
**Tipo de Trabajo**: identifica dentro del ámbito organizativo un nivel de proyecto no cotizado aún (visible en las ofertas, para separarlo de las actividades que forman parte del contrato), por lo tanto indica un nuevo trabajo que aún no ha sido gestionado por el project manager pero que proviene de las distintas operaciones del proyecto;
**Artículo preventivo**:           
**Cantidad/UM/Precio**: contiene los datos correspondientes del artículo<!-- articolo --> seleccionado, si los hay;        
**Costo material/Costo total**: es posible indicar los costos correspondientes, si los hay;          
**Costo recursos**: es posible indicar un costo para los recursos, si corresponde;              
**IVA**: indica el IVA a aplicar;             
**Tipo facturación ventas**: indica la facturación de ventas del artículo<!-- articolo -->;            
**Nivel no visible**: con este flag el nivel se considera concluido, por lo que a continuación la rama del proyecto no podrá ser utilizada para asociar otras actividades;                       
**Categoría de actividad**: indica la eventual categoría de actividad, configurada en **Tablas > Gestión de Proyectos > Categoría de Actividad**.

Los datos ingresados serán insertados en las líneas del proyecto y se actualizarán conforme se vayan completando también otras pestañas.
La información se agrega a nivel superior, entonces el Root Node contendrá el resumen de sus ramas hijas.

En la pestaña Artículo<!-- Articolo --> también encontramos la **pestaña Planificación de servicio**, cuyos datos a reportar para la línea de artículo<!-- articolo --> seleccionada son:

**Fecha inicio/Fecha fin**: indican las fechas planificadas para la actividad;
>Las fechas serán actualizadas automáticamente con la condición de:
>- flag activo "Recalcular fecha inicio-fin" en la tabla de tipos de proyecto
>- si la unidad de medida utilizada corresponde a la unidad de medida días en los parámetros de proyecto, y se modifica la cantidad de la línea, la fecha fin será recalculada
>- insertando nuevos recursos con fecha anterior a la de inicio o posterior a la de fin, las fechas de inicio-fin serán actualizadas automáticamente en base a la fecha mínima y máxima presente en la pestaña recursos.   

**Desde fecha Milestone/Hasta fecha Milestone**:               
**Trabajo completado (%) / Estimación**: es posible indicar un porcentaje de avance del trabajo o una estimación correspondiente;              
**Tipo de solicitud de intervención**: es posible indicar un tipo de solicitud de intervención vinculada que será utilizada en la generación de nuevas solicitudes de intervención relacionadas con la línea del proyecto<!-- progetto -->;              
**Tipo de intervención planificada**: es posible indicar un tipo de intervención planificada vinculada, que se usará en la generación de nuevas intervenciones planificadas ligadas a la línea de proyecto;    
**Maestro de instalaciones**: es posible vincular una instalación, la cual contendrá, por ejemplo, una serie de informaciones ligadas al proyecto de mantenimiento de la propia instalación;            
**Manager**: es posible indicar un recurso del proyecto;          
**Cierre forzado**: es posible indicar una fecha de cierre forzado del proyecto, si corresponde;               
**Completado forzado**:                         
**Criterios de facturación**: es posible escoger el criterio de facturación del proyecto eligiendo no facturar algunas actividades, realizando así un control posterior; la elección es entre Todas las actividades o Actividades contractuales; eligiendo esta última opción, solo se considerarán facturables la Cantidad de actividades previstas en la pestaña Actividades, mientras que las actividades necesarias excedentes no serán facturadas;               
**Actividad facturable**: si está presente el flag, indica que la actividad es facturable; la activación de este flag automáticamente depende del Template ingresado, o del maestro de la Categoría de actividad ingresada en la pestaña Actividades.                           

En la **pestaña Recursos** es posible asignar los recursos para la línea de artículo<!-- articolo --> seleccionada:

**Fecha de inserción**: se llena con la fecha de inserción del recurso en el proyecto;           
**Recurso**: contiene el recurso, previamente codificado;              
**Centro empresarial**: se asigna el centro empresarial asociado al recurso, pero es posible modificarlo;               
**Unidad de medida**: contiene la unidad de medida para la cuantificación del tiempo diario del recurso;                
**Cantidad**: indica las horas diarias;             
**Costo unitario**: indica el costo del recurso por cada unidad de medida;    
:::note[Nota]
Al asignar el recurso en la línea de proyecto, se propone el costo horario del recurso en el campo correspondiente.
El costo también dependerá de la unidad de medida:
-	si la UM es hora, el valor permanece sin cambios.
-	Si la UM corresponde a días (ajuste en los Parámetros de Proyectos), se hará la conversión con base en el Horario de trabajo registrado en el maestro de recursos.
-	Si la UM es diferente de los dos casos anteriores, se buscará el factor de conversión, que si no está presente dará un mensaje de error al usuario: “No es posible realizar la conversión del costo horario unitario del recurso con la unidad de medida del recurso en el proyecto. Costo del recurso en el proyecto no calculado”
:::

:::note[Criterios para obtener costos específicos en línea de proyecto]
Si el recurso prevé un costo diferenciado para días extraordinarios/festivos etc., la búsqueda del costo correspondiente se realizará bajo la siguiente lógica: 
1. ¿La fecha de inicio insertada en la línea de proyecto cae dentro de uno de los días marcados en el Calendario de días no laborables?
>Si es así, se asignará el valor establecido en “Tipo de costo: Festivo” - De todas formas, se solicitará una notificación de confirmación al usuario
2.	Si la fecha de inicio no cae dentro del Calendario de días no laborables, se continúa el control en la cuadrícula de Días laborables previstos para el recurso
>Si la fecha de inicio no está ni en los festivos ni en los días laborables para el recurso, se solicitará actualizar con el costo marcado como “Por defecto día no laborable” si está presente. En caso de que no exista tal costo, se tomará como alternativa el costo “Extraordinario”.
3. Si la fecha de inicio cae en un día laborable ordinario, se verifica si:
>está dentro del turno principal.
>>Si el turno principal está marcado como “nocturno”, se solicitará actualizar con el costo nocturno; si no es nocturno, se considerará el costo principal del recurso;
4. Si no entra en el turno principal, se verifica si el turno alternativo aplica.
>si el turno alternativo tiene un costo dedicado, se considerará ese valor
>>si el turno alternativo está marcado como “nocturno”, se solicitará actualizar con el costo nocturno; si no es nocturno, se considerará el costo principal del recurso;
:::

**Fecha de inicio**: contiene la fecha en la que el recurso será asignado, con la hora de inicio laboral;                 
**Hora de inicio de pausa**: contiene la fecha y hora de inicio de la pausa, si aplica;             
**Hora de fin de pausa**: contiene la fecha y hora de finalización de la pausa, si aplica;                 
**Fecha de fin**: contiene la fecha en la que el recurso será asignado, con la hora de finalización laboral;                               
**Tiempo efectivo**: es un campo calculado en base a los horarios de las columnas anteriores, que también modifica el campo Cantidad con el mismo valor;       
**Notas**: es posible ingresar notas;             
**Tipo Solicitud de intervención**: se puede ingresar una posible [solicitud de intervención] vinculada, con sus características como Descripción y Número.         

Cada línea de esta cuadrícula contendrá un día laboral del recurso: el número de días trabajados ha sido indicado en la pestaña Actividades de los artículos<!-- articoli -->.

El botón específico de la barra de ribbon ![](/img/it-it/project-management/projects/resources-navigator.png)
 Navegador de recursos permite verificar la disponibilidad de los diferentes recursos y reservar los días. Se abrirá una ventana; las fechas posibles que se reserven se reportan en la pestaña Recursos y afectan los costos del proyecto.

Con el botón ![](/img/neutral/common/new-visit-report.png) Creación de Solicitud de intervención es posible, seleccionando un Recurso, crear directamente la Solicitud de intervención vinculada al proyecto o realizar el rollback con el botón   Rollback Solicitud de intervención.

En la **pestaña Materiales** se indican los materiales necesarios para el avance del proyecto, con las características correspondientes de los artículos<!-- articoli --> codificados. El costo de estos materiales impactará en la línea de artículo<!-- articolo --> Costo materiales. El costo se propone en función de la configuración prevista en el campo "Tipo de costo", cuyo valor predeterminado se puede establecer en los parámetros por proyecto. En caso de "último costo" o "costo promedio", la fecha de referencia será la fecha del proyecto. 
Desde esta pantalla es posible crear directamente para los materiales una Solicitud de compra, mediante el botón en la barra de ribbon **Creación RDA**.