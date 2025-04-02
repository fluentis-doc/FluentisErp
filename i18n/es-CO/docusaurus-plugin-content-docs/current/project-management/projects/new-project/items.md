---
title: articoli
sidebar_position: 3
---

En esta pestaña es posible insertar los artículos del proyecto. El botón en la barra de herramientas ![](/img/neutral/common/new.png) permite agregar una nueva línea de artículo, mientras que el botón ![](/img/neutral/common/delete.png) permite eliminarla. Para construir la estructura del proyecto, hay botones específicos disponibles:  
![](/img/neutral/common/new-child.png)  Nuevo hijo: permite insertar una línea de proyecto hija de la línea seleccionada;  
![](/img/neutral/common/new-brother.png) Nuevo hermano: permite insertar una línea de proyecto al mismo nivel que la línea seleccionada;  
![](/img/neutral/common/wbs.png)  Reemplazar el número WBS: permite incorporar al Número WBS de las líneas también el Número del proyecto;  
Para visualizar la estructura del proyecto, hay botones disponibles:  
![](/img/neutral/common/implode.png)  Implosionar: permite ocultar las líneas de la estructura;  
![](/img/neutral/common/implode.png)  Explosión: permite visualizar las líneas.

Las características del artículo deben insertarse en la **pestaña Actividades (tab Attività)** en la parte inferior:

**Número de línea/Número WBS (Numero riga/Numero WBS)**: contiene los números de la línea y de la WBS y se establece automáticamente, aunque se puede modificar libremente;  
**tipo nodo**: indica si la línea es un **root node**, un **activity node** o un **work package node** (nodo final de proyecto, el único que puede contener códigos de artículo específicos);  
**tipo riga**: indica la tipología de artículo entre Codificado, No codificado, Gastos o Notas (este último por defecto);  
**articolo**: muestra Clase, Código y Descripción del artículo si está seleccionado;  
**descrizione**: contiene la descripción del artículo por defecto si está seleccionado, pero puede ser modificada libremente;  
**tipo lavoro**: identifica dentro del ámbito organizativo un nivel de proyecto no cotizado aún (visible en las ofertas para separarlo de las actividades del contrato), indicando así un nuevo trabajo que aún no ha sido gestionado por el gerente de proyecto, pero que proviene de las diversas operaciones del proyecto;  
**articolo preventivo**:  
**Cantidad/UM/Precio (Quantità/UM/Prezzo)**: contiene los datos del artículo seleccionado;  
**Costo material/Costo total (Costo materiale/Costo totale)**: se pueden indicar costos;  
**costo risorse**: se puede indicar un costo para los recursos;  
**IVA**: indica el IVA a aplicar;  
**tipo fatturato vendite**: indica el facturado de ventas del artículo;  
**livello non visibile**: con este indicador, el nivel se considera concluido, por lo que el ramo del proyecto no podrá ser utilizado para asociar más actividades;  
**categoria di attività**: indica la categoría de actividad, configurada en **Tablas > Gestión de Proyectos > Categoría de Actividad**.

Los datos ingresados se incluirán en las líneas del proyecto y se actualizarán a medida que se completen las otras pestañas.  
La información se agrega a un nivel superior, por lo que el Nodo Raíz contendrá la síntesis de sus ramas hijas.

En la pestaña Artículo encontramos la **pestaña Planificación de Servicio (tab Pianificazione servizio)**, cuyos datos que se deben proporcionar para la línea de artículo seleccionada son:

**Fecha inicio/Fecha fin (Data inizio/Data fine)**: indican las fechas planificadas para la actividad;  
>Las fechas se actualizarán automáticamente bajo las condiciones de:  
- indicador activo "Recalcular fecha inicio-fin" en la tabla de tipos de proyecto;  
- si la unidad de medida utilizada corresponde a la unidad de medida de días en los parámetros del proyecto, y se modifica la cantidad de la línea, la fecha final se recalculará;  
- al ingresar nuevos recursos con fecha anterior a la de inicio o posterior a la de fin, las fechas de inicio y fin se actualizarán automáticamente según la fecha mínima y máxima presente en la pestaña de recursos.  

**Fecha de hito inicial/Fecha de hito final (Da data Milestone/A Data Milestone)**:  
**Trabajo completado (perc.)/Estimación (Lavoro completato(perc.)/Stima)**: se puede indicar un porcentaje de avance de trabajos o una estimación correspondiente;  
**tipo richiesta intervento**: se puede indicar una tipología de solicitud de intervención relacionada que se usará en la generación de nuevas solicitudes de intervención vinculadas a la línea del proyecto;  
**tipo intervento pianificato**: se puede indicar una tipología de intervención planificada relacionada, que se utilizará en la generación de nuevas intervenciones planificadas relacionadas con la línea del proyecto;  
**anagrafica impianti**: se puede vincular una instalación, la cual contendrá por ejemplo una serie de informaciones relacionadas con el proyecto de mantenimiento de la misma;  
**manager**: se puede indicar un recurso del proyecto;  
**chiuso forzatamente**: se puede indicar una fecha de cierre forzada del proyecto;  
**evase forzatamente**:  
**criteri di fatturazione**: se puede elegir el criterio de facturación del proyecto, optando por no facturar algunas actividades, realizando así un control por valor; la elección es entre Todas las actividades o Actividades contractuales; eligiendo esta última opción, solo se considerará facturable la Cantidad de actividades prevista en la pestaña Actividades, mientras que las actividades necesarias excedentes no se facturarán;  
**attività fatturabile**: si el indicador está presente, indica que la actividad es facturable; la activación de este indicador depende automáticamente de la plantilla ingresada o del registro de la Categoría de actividad ingresada en la pestaña Actividades.  

En la **pestaña Recursos (tab Risorse)** se pueden asignar recursos para la línea de artículo seleccionada:

**data inserimento**: se llena con la fecha de inserción del recurso en el proyecto;  
**risorsa**: contiene el recurso, previamente codificado;  
**centro aziendale**: se asigna el centro de empresa vinculado al recurso, pero se puede modificar;  
**unità di misura**: contiene la unidad de medida para la cuantificación del tiempo diario del recurso;  
**quantità**: indica las horas diarias;  
**costo unitario**: indica el costo del recurso por unidad de medida;  
:::note[Nota]
Al asignar el recurso en la línea del proyecto, se propone el costo horario del recurso en el campo correspondiente.  
El costo dependerá también de la unidad de medida:  
- si la UM es hora, el valor permanece invariable.  
- Si la UM corresponde a días (configuración en los Parámetros Proyectos), se realizará la conversión en base al Horario de trabajo establecido en el registro de recursos.  
- Si la UM es diferente a los dos casos anteriores, se buscará el factor de conversión, que si no está presente dará un mensaje de error al usuario “Imposible realizar conversión del costo horario unitario recurso con la unidad de medida de la recurso en el proyecto. Costo de la recurso en el proyecto no calculado”.  
:::

:::note[Criterios para obtener costos específicos en la línea del proyecto]
Si el recurso tiene un costo diferenciado para días de horas extra/festivos, la búsqueda del costo correspondiente se realizará con la siguiente lógica:  
1. ¿La fecha de inicio ingresada en la línea del proyecto cae en uno de los días marcados en el Calendario de días no laborables?  
>Si es así, se asignará el valor establecido en “Tipo costo: Festividad”. - Se solicitará una notificación de confirmación al usuario.  
2. Si la fecha de inicio no cae dentro del Calendario de días no laborables, se continúa el control en la cuadrícula de Días laborables previstos para el recurso.  
>Si la fecha de inicio no cae ni en festivos ni en días laborables para el recurso, se pedirá que se actualice con el costo marcado como “Default día no laborable” si está presente. Si no hay un costo así marcado, se tomará alternativamente el costo “Horas Extra”.  
3. Si la fecha de inicio cae en uno de los días laborables ordinarios, se verifica si:  
> cae en el turno principal.  
>>Si el turno principal está marcado como “nocturno”, se pedirá que se actualice con el costo nocturno; si no es nocturno, se considera el costo de la cabeza del recurso;  
4. Si no cae en el turno principal, se verifica si cae en el turno alternativo.  
> si el turno alternativo tiene un costo dedicado, se considera este valor.  
>>si el turno alternativo está marcado como “nocturno”, se pedirá que se actualice con el costo nocturno; si no es nocturno, se considera el costo de la cabeza del recurso;  
:::

**data inizio**: contiene la fecha en la que se asignará el recurso, con la hora de inicio laboral;  
**ora inizio pausa**: contiene la fecha y hora de inicio de la pausa;  
**ora fine pausa**: contiene la fecha y hora de fin de la pausa;  
**data fine**: contiene la fecha en la que se asignará el recurso, con la hora de fin laboral;  
**Tiempo efectivo (Tempo effettiva)**: es un campo calculado en base a los horarios de las columnas anteriores, que modifica también el campo Cantidad con el mismo valor;  
**note**: es posible insertar notas adicionales;  
**tipo richiesta intervento**: es posible ingresar una solicitud de [intervención] relacionada, con sus características, como la Descripción y el Número.  

Cada línea de esta cuadrícula contendrá un día laborable del recurso: el número de días laborables fue indicado en la pestaña Actividades de los artículos.  

El botón específico de la barra de herramientas ![](/img/it-it/project-management/projects/resources-navigator.png)  
Navegador de recursos permite verificar la disponibilidad de los diversos recursos y reservar los días. Se abrirá una ventana; las fechas que se reservan se registran en la pestaña Recursos y afectan los costos del proyecto.  

Con el botón ![](/img/neutral/common/new-visit-report.png) Creación de Solicitud de intervención es posible, al seleccionar un Recurso, crear directamente la Solicitud de intervención vinculada al proyecto o realizar su reversión con el botón  Reversar Solicitud de intervención.

En la **pestaña Materiales (tab Materiali)** se indican los materiales necesarios para el avance del proyecto, con las características correspondientes de los artículos codificados. El costo de estos materiales impactará en la línea de artículo Costo materiales. El costo se propone en base a la configuración establecida en el campo "Tipo costo", cuyo valor predeterminado es ajustable en los parámetros del proyecto. En el caso de "costo último" o "costo medio", la fecha de referencia es la fecha del proyecto.  
Desde esta pantalla es posible crear directamente una Solicitud de compra para los Materiales, a través del botón en la barra de herramientas **creazione rda**.