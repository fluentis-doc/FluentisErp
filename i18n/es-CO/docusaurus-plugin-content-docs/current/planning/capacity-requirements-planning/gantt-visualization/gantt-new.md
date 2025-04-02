---
title: simulazione gantt
sidebar_position: 2
---

El formulario que permite crear y modificar una simulación Gantt se compone de las siguientes pestañas:

- Encabezado (Testata)
- Filtro
- Gantt
- Registro de la simulación (Log della simulazione)

## Encabezado (Testata)

Permite ingresar los datos del encabezado de la simulación Gantt.

*Campos específicos*:

> **nome della simulazione**: indica el nombre asociado a la simulación Gantt (por defecto se propone el nombre del usuario y la fecha y hora de creación);  
> **tipo**: indica el código del [Tipo de simulazione gantt (Tipo Simulazione Gantt)](/docs/configurations/tables/production/crp-gantt-simulation-type) (solo se ven los que no son de tipo Snapshot);  
> **descrizione tipo**: indica la descripción del [Tipo de simulazione gantt (Tipo Simulazione Gantt)](/docs/configurations/tables/production/crp-gantt-simulation-type);  
> **Bloquear documentos (Blocca documenti)**: indica que todos los documentos incluidos en la creación de la simulación Gantt se bloquean. Por lo tanto, no pueden modificarse hasta que la simulación no sea válida liberando las modificaciones realizadas en los documentos;  
> **numero**: indica el número de la simulación Gantt y depende de la numeración asociada al [Tipo de simulazione gantt (Tipo Simulazione Gantt)](/docs/configurations/tables/production/crp-gantt-simulation-type);  
> **simulazione valida**: indica que la simulación ha sido confirmada y, por lo tanto, los cambios realizados en el Gantt se han registrado en los documentos vinculados;  
> **data inserimento**: indica la fecha de ingreso de la simulación Gantt;  
> **utente**: indica el usuario de la simulación Gantt.

## Filtro

Permite buscar los documentos que se utilizarán para la creación del **Gantt**.  
El formulario se presenta compuesto por un área superior, en la cual se inserta los filtros para la búsqueda de los varios documentos, con debajo, a la izquierda, una lista que muestra todos los documentos correspondientes a los filtros ingresados y a la derecha la lista de documentos que se insertarán en el **Gantt**.  
Entre los filtros, es posible utilizar el relativo al *Tipo de documento* que permite seleccionar solo: *ordini pianificati*, *richieste di acquisto*, *ordine di produzione* o *ordine di conto lavoro*; además, es posible visualizarlos por *commessa* o por *documento* según las necesidades.  
Los documentos cumplidos se consideran solo si se activa el respectivo indicador **considera documenti evasi**.  

Las cuadrículas debajo presentan los documentos con una estructura en árbol, permitiendo al usuario seleccionar solo lo que le interese simplemente marcando la casilla correspondiente. Posteriormente, a través del botón **Transferir seleccionados (Traferisci selezionati)** o mediante *Arrastrar y soltar (Drag & Drop)*, el usuario puede agregarlos a la lista de aquellos a considerar para la creación del **Gantt**.  

*Botones específicos*:

> **ricerca**: permite buscar los documentos en función de los filtros ingresados;  
> **crea**: permite crear el **Gantt** en base a los documentos ingresados en la cuadrícula de la derecha;  
> **seleziona**: permite marcar el documento seleccionado;  
> **seleziona tutti**: permite marcar todos los documentos presentes en la cuadrícula;  
> **deseleziona tutti**: permite quitar la marca de todos los documentos presentes en la cuadrícula;  
> **esplodi commesse**: permite expandir el árbol del proyecto seleccionado hasta llegar al detalle de la fase;  
> **implodi commesse**: permite cerrar el árbol del proyecto seleccionado;  
> **Transferir seleccionados (Traferisci selezionati)**: permite transferir los documentos seleccionados de la cuadrícula de búsqueda a la de creación del **Gantt**;  
> **salva**: permite guardar las modificaciones realizadas.

## Gantt

En esta pestaña se visualiza el Gantt en base a los criterios de búsqueda establecidos en la pestaña anterior. La pestaña se compone de 2 secciones, a su vez divididas en 2 paneles cada una.

- **Sección superior**: en la sección superior, el usuario puede visualizar a la izquierda de la sección la lista de los documentos que han sido seleccionados con la casilla de verificación en la pestaña anterior, uno debajo del otro en una estructura en árbol, con una indentación basada en los vínculos que los documentos presentan entre sí.  
Si el proyecto de producción presenta más de un artículo, debajo del proyecto de producción se muestra el código del artículo (Artículo y luego clase, código y descripción del mismo).  
En cada una de estas filas también es visible la fecha de inicio del documento y la fecha de fin.  
Si la fila está resaltada en rojo, significa que ha sido cumplida o que en la realidad esa fila ya no existe.  
A cada una de estas filas corresponde una barra horizontal ubicada en la parte gráfica de la sección superior, que representa gráficamente los documentos detallados en la zona izquierda de esta sección.  
Las barras horizontales cubren un arco temporal que puede ampliarse o reducirse, utilizando los botones apropiados de la barra de ribbon llamados **Zoom Out** y **Zoom In**, llegando a detallar un solo día y visualizando por lo tanto los empleos incluso a nivel de hora/minuto. Además, con un doble clic en la barra horizontal que representa un documento, se abre automáticamente el mismo documento, siempre de acuerdo con los derechos del usuario que está realizando esta operación.  
Las barras horizontales pueden moverse en el gráfico con un simple arrastre y colocación (drag and drop); la operación permite mover las fechas de los documentos de manera dinámica.  
El usuario puede luego optar, al salir de la pestaña, por confirmar la modificación realizada o no, a través del botón **applica**.

:::note Nota
Se recuerda que solo es posible adelantar y retrasar los documentos planificados o las fases que aún no han comenzado; todo lo demás está bloqueado.
:::

- **Sección inferior**: en la sección inferior se presenta, dividido en 2 paneles, un histograma relativo a la disponibilidad y al compromiso de los recursos productivos.  
En el panel de la izquierda se visualizan los nombres de los *Centros de Trabajo* involucrados en las labores que se han decidido visualizar en el gráfico, mientras que en el panel de la derecha, indisolublemente vinculado al panel de la izquierda de la sección superior, se encuentran algunas barras verticales que por cada jornada laboral presentan la cantidad de trabajo que cada *Centro de Trabajo* debe realizar en función de los tiempos previstos de las fases de los pedidos de producción presentes en esos días.  
Cabe destacar que el histograma resalta el total de los compromisos de los centros de trabajo individuales, sin limitarse a representar gráficamente solo el compromiso derivado del pedido de producción visualizado en el **Gantt**.  
De hecho, el usuario tiene la posibilidad, con un doble clic en la barra del histograma de cualquier centro de trabajo, de abrir una ventana en la que se presenta la lista de los pedidos de producción presentes en el **Gantt**, y la lista de los pedidos de producción que no están presentes en la simulación que se está realizando gráficamente, con la posibilidad, también desde esta ventana, de abrir directamente los documentos de los cuales se proporciona un detalle limitado. La ventana que se abre con el doble clic en el histograma se llama **visualizza fasi di lavoro**.  
A través del formulario **visualizza fasi di lavoro**, es posible seleccionar las fases de interés y mediante los botones **cambia centro di lavoro** y **Cambiar fechas (Cambia date)**, el usuario puede cambiar respectivamente el centro de trabajo de la fase y mover de 'x' tiempo (días/horas/minutos) o a una fecha determinada las fases individuales.

*Botones específicos*:

> **salva**: permite guardar las modificaciones realizadas;  
> **salva snapshot**: permite guardar las modificaciones realizadas creando una instantánea (un hijo) a partir de la simulación principal;  
> **rollback simulazione**: permite devolver la simulación al estado original anulando todas las modificaciones;  
> **scegli stato avanzamento**: permite elegir la modalidad con la cual debe visualizarse el estado de avance de los documentos individuales dentro del **Gantt**; estas pueden ser: *en función del tiempo transcurrido*, *en función del tiempo transcurrido y la cantidad*, *en función de la cantidad producida* o ninguno;  
> **applica**: permite hacer efectivas las modificaciones aplicadas en la simulación **Gantt** (el botón se habilita después de guardar);  
> **esplodi l'albero**: permite expandir el árbol de la simulación hasta llegar al detalle de la fase;  
> **implodi l'albero**: permite cerrar el árbol de la simulación;  
> **Zoom in**: permite aumentar el zoom en el gráfico;  
> **zoom alla finestra**: permite ajustar el zoom en el gráfico en función de la ventana temporal que se está considerando;  
> **Zoom out**: permite reducir el zoom en el gráfico;  
> **zoom settimana**: permite ajustar el zoom en el gráfico a una semana;  
> **zoom 2 settimane**: permite ajustar el zoom en el gráfico a dos semanas;  
> **zoom mese**: permite ajustar el zoom en el gráfico a un mes;  
> **zoom data**: permite ajustar el zoom en el gráfico para un cierto rango de fechas indicadas por el usuario;  
> **Mapeo de códigos (Mappatura del codice)**: permite visualizar los estilos actualmente en uso en el **Gantt**, los cuales pueden ser modificados mediante los botones *Modificar el estilo del Gantt (Modifica lo stile del Gantt)* y *modifica lo stile dell'istogramma*;  
> **Modificar el estilo del Gantt (Modifica lo stile del Gantt)**: permite acceder a las configuraciones del estilo del Gantt actual;  
> **modifica lo stile dell'istogramma**: permite acceder a las configuraciones del estilo del histograma actual;  
> **Actualizar estilo (Aggiorna stile)**: permite actualizar las modificaciones hechas a los estilos.  

## Registro de la simulación (Log della simulazione)

En esta pestaña se visualizan los registros de las simulaciones guardadas anteriormente, con la posibilidad de verificar, para cada documento que habría sufrido modificaciones temporales, la antigua fecha de inicio, la antigua fecha de fin, la nueva fecha de inicio y la nueva fecha de fin.