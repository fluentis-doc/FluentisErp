---
title: Capacidad de centros de trabajo
sidebar_position: 2
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La función **Capacidad de centros de trabajo<!-- Capacità centri di lavoro -->** en Fluentis ofrece una visión clara e inmediata de las cargas de trabajo en los centros productivos<!-- centri produttivi -->, destacando picos de sobrecarga o ineficiencias. A través de un formulario organizado en cuatro secciones, los operadores pueden filtrar y visualizar las órdenes por departamento, fecha o estado (planificado<!-- pianificato -->, lanzado<!-- lanciato -->, ejecutivo<!-- esecutivo -->) e intervenir fácilmente mediante *drag & drop* para mover, postergar o modificar las tareas.     
La visualización gráfica ilustra la capacidad máxima y el compromiso diario de los centros, permitiendo una gestión visual e interactiva de las fases productivas. Botones específicos permiten modificar las fases, cambiar fechas y navegar por el detalle temporal de la carga de trabajo, optimizando así la eficiencia operativa de todo el proceso productivo.
:::

El operador puede obtener una visualización inmediata de las cargas de cada centro de trabajo<!-- centro di lavoro --> activo dentro de los distintos departamentos<!-- reparti --> para un período de tiempo determinado, permitiéndole identificar de inmediato picos de sobrecarga o ineficiencia productiva. 
Con un simple *drag & drop* el operador puede adelantar, postergar o cambiar de centro de trabajo<!-- centro di lavoro --> una tarea, y con doble clic sobre la barra de capacidad, es posible ver en detalle la información relativa a qué órdenes de trabajo ocupan el centro en la fecha seleccionada.
En caso de que se traslade una fase a un día en que el centro de trabajo<!-- centro di lavoro --> ya esté totalmente ocupado, se muestra un mensaje de error. De lo contrario, se satura el día del centro de trabajo<!-- centro di lavoro --> sin sobreasignarlo y el residuo del tiempo (de la fase trasladada) se reparte en los días laborables siguientes según la capacidad máxima de ese centro de trabajo<!-- centro di lavoro -->, independientemente de la carga de trabajo ya existente. 

Este formulario consta de 4 secciones: 

- la primera permite filtrar por *Departamento<!-- Reparto -->* y/o por *Centro de trabajo<!-- Centro di lavoro -->* y visualizar los resultados en la cuadrícula inferior;  

- en la segunda es posible filtrar las órdenes por *Fecha de inicio<!-- Data inizio -->* y *Fecha de finalización<!-- Data fine -->* y además, decidir si visualizar las órdenes: 

> *Planificadas<!-- Pianificati -->*: muestra las órdenes de producción planificadas;              
> *Lanzadas<!-- Lanciati -->*: muestra las órdenes de producción en estado lanzado;                
> *Ejecutivas<!-- Esecutivi -->*: muestra las órdenes de producción en estado ejecutivo.          

Además, se pueden visualizar todos los datos relativos a los centros de trabajo<!-- centri di lavoro --> seleccionados en la primera sección.

- en la tercera sección es posible visualizar una fila por cada fase de las órdenes planificadas y/o de producción filtrada correspondiente a los centros de trabajo<!-- centri di lavoro --> seleccionados en la primera sección, con todos los detalles relacionados.

- en la cuarta sección denominada **Datos de detalle de la fase seleccionada<!-- Dati di dettaglio Fase selezionata -->** es posible ver gráficamente las cargas de trabajo relacionadas con los centros de trabajo<!-- centri di lavoro --> seleccionados en la primera sección. 

**Datos de detalle de la fase seleccionada<!-- Dati di dettaglio Fase selezionata -->**

Dentro de la parte gráfica, la línea naranja representa la capacidad productiva máxima diaria del centro de trabajo<!-- centro di lavoro -->, mientras que en azul se representa la ocupación del centro de trabajo<!-- centro di lavoro --> en un determinado día. En rojo, en cambio, se resalta la sobreasignación del propio centro.
Al seleccionar una fase en la tercera sección, esta se visualiza en amarillo dentro de la sección gráfica.

Además, mediante *drag & drop* es posible seleccionar una fase en la cuadrícula y arrastrarla dentro de la sección gráfica y soltarla para cambiar su fecha de inicio y, en consecuencia, la de fin. Seleccionando más centros de trabajo<!-- centri di lavoro --> alternativos existe la posibilidad de mover las fases de un centro a otro para optimizar la producción.

Al hacer doble clic en la fila de la cuadrícula de las fases, el usuario accede directamente al documento (orden planificada<!-- ordine pianificato --> u orden de producción<!-- ordine di produzione -->) que contiene la fase representada en la fila desde la que partió, con la posibilidad, subordinada a la existencia de los derechos de usuario pertinentes, de modificar el documento y ver, tras actualizar la visualización, la situación actualizada también desde el punto de vista gráfico.
Por otro lado, con un doble clic sobre un elemento del gráfico se abre un pop-up que contiene el listado de las fases de trabajo<!-- fasi di lavoro --> que contribuyen a determinar su ocupación.

*Botones específicos*:  

> **Cambiar fases<!-- Cambia fasi -->**: una vez seleccionada una fase, este comando permite *Actualizar* la propia fase variando: fase, máquina, centro de trabajo<!-- centro di lavoro -->, tiempo total de máquina, tiempo del operario, y tiempo de preparación. Además, al seleccionar la opción *Insertar<!-- Inserisci -->* es posible añadir una nueva fase u optar por la opción *Eliminar<!-- Cancella -->* para quitarla definitivamente;            
> **Cambiar fechas<!-- Cambio date -->**: permite modificar la fecha de inicio de la fase seleccionada;        
> **Activar obligatorio<!-- Attiva tassativo -->**: permite activar el flag **Obligatorio<!-- Tassativo -->** dentro de todas las órdenes seleccionadas;       
> **Desactivar obligatorio<!-- Disattiva tassativo -->**: permite desactivar el flag **Obligatorio<!-- Tassativo -->** dentro de todas las órdenes seleccionadas;         
> **Acercar<!-- Zoom in -->**: permite disminuir el detalle temporal en el gráfico;          
> **Zoom a la ventana<!-- Zoom alla finestra -->**: permite visualizar el detalle temporal en el gráfico según las *Fechas de inicio/fin<!-- Date Inizio/Fine -->* indicadas en los filtros;                    
> **Alejar<!-- Zoom out -->**: permite aumentar el detalle temporal en el gráfico;              
> **Zoom semana<!-- Zoom settimana -->**: permite visualizar un período de una semana en el gráfico a partir de la *Fecha de inicio<!-- Data Inizio -->*;              
> **Zoom 2 semanas<!-- Zoom 2 settimane -->**: permite visualizar un período de dos semanas en el gráfico a partir de la *Fecha de inicio<!-- Data Inizio -->*;     
> **Zoom mes<!-- Zoom mese -->**: permite visualizar un período de un mes en el gráfico a partir de la *Fecha de inicio<!-- Data Inizio -->*;     
> **Zoom fecha<!-- Zoom data -->**: permite visualizar un rango de tiempo indicando *Fecha de inicio<!-- Date Inizio -->* y *Fecha de finalización<!-- Data fine -->* de ese mismo período.

Para más detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes<!-- Funzionalità, pulsanti e campi comuni -->](/docs/guide/common).