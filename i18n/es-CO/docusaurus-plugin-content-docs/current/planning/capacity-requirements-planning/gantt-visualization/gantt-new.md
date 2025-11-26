---
title: Simulación Gantt
sidebar_position: 2
ai_generated: true
---

El formulario que permite crear y modificar una simulación Gantt, se compone de las siguientes pestañas:

- Encabezado<!-- Testata -->
- Filtro
- Gantt
- Log de la simulación<!-- Log della simulazione -->

## Encabezado<!-- Testata -->

Permite ingresar los datos de encabezado de la simulación Gantt.

*Campos específicos*:

> **Nombre de la simulación**: indica el nombre asociado a la simulación Gantt (por defecto se propone el nombre del usuario y la fecha y hora de creación);     
> **Tipo**: indica el código del [Tipo Simulación Gantt](/docs/configurations/tables/production/crp-gantt-simulation-type) (sólo se muestran los que no son de tipo Snapshot);           
> **Descripción** tipo: indica la descripción del [Tipo Simulación Gantt](/docs/configurations/tables/production/crp-gantt-simulation-type);        
> **Bloquea documentos**: indica que todos los documentos que se incluyen en la creación de la simulación Gantt quedan bloqueados. Por lo tanto, no pueden ser modificados hasta que la simulación no se valide liberando las modificaciones realizadas en los documentos;  
> **Número**: indica el número de la simulación Gantt y depende de la numeración asociada al [Tipo Simulación Gantt](/docs/configurations/tables/production/crp-gantt-simulation-type);         
> **Simulación Válida**: indica que la simulación ha sido confirmada y, por tanto, las modificaciones realizadas en el Gantt se han reportado en los documentos relacionados;      
> **Fecha de inserción**: indica la fecha de creación de la simulación Gantt;     
> **Usuario**: indica el usuario de la simulación Gantt.     

## Filtro

Permite buscar los documentos que serán utilizados para la creación del **Gantt**.     
El formulario consta de un área superior, en la que se encuentran los filtros para la búsqueda de los diferentes documentos, bajo la cual, a la izquierda, hay una lista que muestra todos los documentos que coinciden con los filtros ingresados y a la derecha la lista de los documentos que serán incluidos en el **Gantt**.      
Entre los filtros es posible utilizar el relativo al *Tipo de documento* que permite seleccionar sólo: *Órdenes planificadas*, *Solicitudes de compra*, *Orden de producción* u *Orden de subcontrato<!-- conto lavoro -->*; además, es posible visualizarlos por *proyecto<!-- commessa -->* o por *documento* según las necesidades.      
Los documentos completados sólo se consideran si se activa la bandera correspondiente **Considerar documentos completados<!-- evasi -->**.      

Las cuadrículas de abajo presentan los documentos en una estructura de árbol, permitiendo al usuario seleccionar solamente los que le interesan simplemente marcando la casilla correspondiente. Posteriormente, mediante el botón **Transferir seleccionados** o mediante *Drag & Drop*, el usuario puede agregarlos a la lista de los que se considerarán para la creación del **Gantt**.      

*Botones específicos*:

> **Buscar<!-- Ricerca -->**: permite buscar los documentos en base a los filtros ingresados;          
> **Crear<!-- Crea -->**: permite crear el **Gantt** en base a los documentos ingresados en la cuadrícula de la derecha;     
> **Seleccionar<!-- Seleziona -->**: permite marcar el documento seleccionado;        
> **Seleccionar todos<!-- Seleziona tutti -->**: permite marcar todos los documentos presentes en la cuadrícula;       
> **Deseleccionar todos<!-- Deseleziona tutti -->**: permite desmarcar todos los documentos presentes en la cuadrícula;    
> **Expandir proyectos<!-- Esplodi commesse -->**: permite expandir el árbol del proyecto<!-- commessa --> seleccionado hasta el detalle de la fase;      
> **Contraer proyectos<!-- Implodi commesse -->**: permite cerrar el árbol del proyecto<!-- commessa --> seleccionado;     
> **Transferir seleccionados<!-- Traferisci selezionati -->**: permite transferir los documentos seleccionados de la cuadrícula de búsqueda a la de creación del **Gantt**;      
> **Guardar<!-- Salva -->**: permite guardar las modificaciones realizadas.

## Gantt

En esta pestaña se visualiza el Gantt en base a los criterios de búsqueda definidos en la pestaña anterior. La pestaña se compone de 2 secciones, a su vez divididas en 2 paneles cada una.

- **Sección superior**: en la sección superior el usuario puede visualizar en la parte izquierda la lista de los documentos que han sido seleccionados mediante la casilla en la pestaña anterior, uno debajo del otro en una estructura de árbol, con una sangría basada en las relaciones recíprocas de los documentos.
Si el proyecto<!-- commessa --> de producción contiene más de un artículo, debajo del proyecto de producción se presenta el código del artículo (Artículo y luego clase, código y descripción del mismo).         
En cada una de estas filas es visible también la fecha de inicio del documento y la fecha de finalización.      
Si la fila está resaltada en rojo significa que ha sido completada o que en la realidad esa fila ya no existe.        
A cada una de estas filas corresponde una barra horizontal ubicada en la parte gráfica de la sección superior, que representa gráficamente los documentos detallados en la parte izquierda de esta sección.       
Las barras horizontales cubren un lapso de tiempo que puede ampliarse o reducirse, utilizando los botones de la barra de herramientas llamados **Zoom Out** y **Zoom In**, llegando al detalle de un solo día e incluso visualizando los empleos a nivel de hora/minuto. Además, haciendo doble clic en la barra horizontal que representa un documento se abre automáticamente el propio documento, siempre de acuerdo con los derechos del usuario que está realizando esta operación.
Las barras horizontales pueden desplazarse en el gráfico con un simple drag and drop; la operación permite mover las fechas de los documentos de manera totalmente dinámica.
El usuario puede luego decidir, al salir de la pestaña, si desea o no confirmar el cambio realizado, mediante el botón **Aplicar<!-- Applica -->**.

:::note Nota
Se recuerda que es posible anticipar o postergar solamente los documentos planificados o las fases que aún no han iniciado, el resto está bloqueado.
:::

- **Sección inferior**: en la sección inferior se presenta, dividida en 2 paneles, un histograma relativo a la disponibilidad y al compromiso de los recursos productivos.     
En el panel de la izquierda se visualizan los nombres de los *Centros de Trabajo* ocupados en los trabajos que se han decidido mostrar en el gráfico, mientras que en el panel de la derecha, ligado indisolublemente al panel izquierdo de la sección superior, encontramos algunas barras verticales que, para cada día laborable, muestran la cantidad de trabajo que cada *Centro de Trabajo* debe realizar según los tiempos previstos de las fases de las órdenes de producción presentes en esos días.
Cabe destacar que el histograma muestra el total de compromisos de cada centro de trabajo, sin limitarse a representar sólo el compromiso derivado de la orden de producción visualizada en el **Gantt**.
De hecho, el usuario tiene la posibilidad, haciendo doble clic en la barra del histograma de cualquier centro de trabajo, de expandir una ventana en la que se presenta la lista de las órdenes de producción presentes en el **Gantt**, y la lista de las órdenes de producción que no están presentes en la simulación que se está representando gráficamente, con la posibilidad, incluso desde esta ventana, de abrir directamente los documentos de los que se muestra un detalle limitado. La ventana que se abre con doble clic en el histograma se llama **Visualizar fases de trabajo**.
A través del formulario **Visualizar fases de trabajo** es posible seleccionar las fases de interés y mediante los botones **Cambiar centro de trabajo** y **Cambiar fechas**, el usuario puede cambiar respectivamente el centro de trabajo de la fase y mover por 'x' tiempo (días/horas/minutos) o a una fecha específica las diferentes fases.

*Botones específicos*:

> **Guardar<!-- Salva -->**: permite guardar las modificaciones realizadas;       
> **Guardar snapshot<!-- Salva snapshot -->**: permite guardar las modificaciones creando un snapshot (un hijo) a partir de la simulación principal;      
> **Restaurar simulación<!-- Rollback simulazione -->**: permite restablecer la simulación al estado original anulando todos los cambios;         
> **Elegir estado de avance<!-- Scegli stato avanzamento -->**: permite elegir el modo en el que debe visualizarse el estado de avance de los documentos dentro del **Gantt**; estos pueden ser: *según el tiempo transcurrido*, *según el tiempo transcurrido y la cantidad*, *según la cantidad producida* o ninguno;      
> **Aplicar<!-- Applica -->**: permite hacer efectivas las modificaciones aplicadas en la simulación **Gantt** (el botón se habilita después de guardar);      
> **Expandir árbol<!-- Esplodi l'albero -->**: permite expandir el árbol de la simulación hasta llegar al detalle de la fase;      
> **Contraer árbol<!-- Implodi l'albero -->**: permite cerrar el árbol de la simulación;     
> **Acercar<!-- Zoom in -->**: permite aumentar el zoom en el gráfico;     
> **Zoom a la ventana<!-- Zoom alla finestra -->**: permite ajustar el zoom en el gráfico según la ventana temporal considerada;     
> **Alejar<!-- Zoom out -->**: permite disminuir el zoom en el gráfico;      
> **Zoom semana<!-- Zoom settimana -->**: permite ajustar el zoom del gráfico a una semana;      
> **Zoom 2 semanas<!-- Zoom 2 settimane -->**: permite ajustar el zoom del gráfico a dos semanas;    
> **Zoom mes<!-- Zoom mese -->**: permite ajustar el zoom del gráfico a un mes;    
> **Zoom fecha<!-- Zoom data -->**: permite ajustar el zoom en el gráfico a un cierto rango de fechas indicado por el usuario;            
> **Mapeo del código<!-- Mappatura del codice -->**: permite visualizar los estilos actualmente en uso en el **Gantt**, los cuales pueden ser modificados mediante los botones *Modificar el estilo del Gantt<!-- Modifica lo stile del Gantt -->* y *Modificar el estilo del histograma<!-- Modifica lo stile dell'istogramma -->*;          
> **Modificar el estilo del Gantt<!-- Modifica lo stile del Gantt -->**: permite acceder a la configuración del estilo actual del Gantt;     
> **Modificar el estilo del histograma<!-- Modifica lo stile dell'istogramma -->**: permite acceder a la configuración del estilo actual del histograma;          
> **Actualizar estilo<!-- Aggiorna stile -->**: permite actualizar las modificaciones realizadas a los estilos.      

## Log de la simulación<!-- Log della simulazione -->

En esta pestaña se visualizan los logs de las simulaciones guardadas previamente, con la posibilidad de controlar, para cada documento que pudiera haber sufrido cambios de fecha, la fecha anterior de inicio, la fecha anterior de finalización, la nueva fecha de inicio y la nueva fecha de finalización.