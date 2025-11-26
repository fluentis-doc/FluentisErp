---
title: Secuencia de Fases - TopDown grid
sidebar_position: 2
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
El procedimiento de **Secuencia de fases<!-- Sequenza fasi -->** en Fluentis, mediante la funcionalidad "Secuencia de Fases - TopDown grid<!-- Sequenza Fasi - TopDown grid -->", permite optimizar la gestión de las fases de producción ensamblando secuencias manuales o basadas en reglas personalizadas.      
Después de una cuidadosa selección de los filtros, entre los que se incluyen centro de trabajo<!-- centro di lavoro -->, período de orden<!-- periodo d'ordine --> y orden de trabajo<!-- commessa -->, las fases aún no ordenadas se listan en una cuadrícula superior. Desde aquí, las fases se trasladan a la cuadrícula inferior para asignar una secuencia.      
El formulario incluye herramientas para modificar datos asociados a las fases, calcular tiempos y actualizar fechas, garantizando un control preciso sobre la planificación de la producción. Botones específicos facilitan el cálculo de las secuencias, la gestión de existencias<!-- giacenze --> y la actualización del estado de los pedidos, asegurando un flujo productivo eficiente.
:::

Da la posibilidad de secuenciar las fases manualmente o según reglas definidas por el operador.

El formulario se compone de una primera área de filtro donde es posible seleccionar:
> **Centro de trabajo<!-- Centro di lavoro -->**       
> **Máquina<!-- Macchina -->**        
> **Desde fecha inicio orden<!-- Da data inizio ordine -->**         
> **Hasta fecha fin orden<!-- A data fine ordine -->**      
> **Orden de producción<!-- Commessa di produzione -->**     

Al expandir esta área, es posible filtrar, por ejemplo, también por *Artículo*, *Secuencia*, *Tipo orden de producción<!-- commessa produzione -->*, *Grupos de mano de obra<!-- Gruppi manodopera -->*, además existe la posibilidad de elegir los tipos de pedidos a visualizar entre pedidos planificados, órdenes de producción en estado lanzado y/o ejecutado.

La parte central del formulario está constituida por dos cuadrículas.           
La primera presenta todas las fases de producción a las que aún no se les ha asignado una secuencia. Así, seleccionando una o más fases de la primera cuadrícula y pulsando el botón *Mover fases*, se trasladan a la segunda cuadrícula (debajo), donde será posible asignar una secuencia manualmente o automáticamente.          

:::note Nota
No es posible modificar la información de una fase ya declarada en producción.
:::

En la parte inferior del formulario se encuentran los siguientes campos:
> **Cantidad de compromiso<!-- Quantità impegno -->**: muestra el total de las cantidades de compromiso de las filas seleccionadas por el usuario;         
> **Unidad de medida Tiempos<!-- Unità di misura Tempi -->**: indica la unidad de medida de tiempo con la que se desea visualizar el valor presente en **Tiempo total<!-- Totale tempo -->**;     
> **Tiempo total<!-- Totale tempo -->**: muestra el total del tiempo (Tiempo máquina + Tiempo mano de obra + Tiempo de preparación) de las filas seleccionadas por el usuario.

Además, al expandir esta parte, se visualizan solo en modo de solo lectura los datos de detalle relativos a:
> **Cantidad<!-- Quantità -->**
> **Tiempo mano de obra<!-- Tempo manodopera -->**
> **Tiempo máquina<!-- Tempo macchina -->**
> **Tiempo de preparación<!-- Tempo attrezzaggio -->**

*Botones específicos*:  

> **Buscar<!-- Ricerca -->**: permite visualizar las fases según los filtros ingresados;           
> **Buscar y considerar existencias<!-- Ricerca e considera giacenze -->**: realiza la misma función que el botón **Buscar<!-- Ricerca -->**, pero, al mismo tiempo, permite visualizar en rojo todas las fases donde no hay existencias<!-- giacenza --> disponibles a la fecha;                   
> **Mover fases<!-- Spostare fasi -->**: permite trasladar las fases seleccionadas de la primera cuadrícula a la segunda cuadrícula, donde será posible asignar una secuencia;         
> **Cambiar fases<!-- Cambia fasi -->**: una vez seleccionada una fase, este comando permite *Actualizar* la misma fase modificando: fase, máquina, centro de trabajo<!-- centro di lavoro -->, total de tiempo máquina, tiempo de operario y tiempo de preparación. Además, al seleccionar la opción *Insertar*, se puede agregar una nueva fase o, mediante la opción *Eliminar*, eliminarla definitivamente;            
> **Cambiar ciclo/Versión<!-- Cambia ciclo/Versione -->**: permite variar el ciclo y/o versión en esa orden de producción;            
> **Cambiar fechas<!-- Cambio date -->**: permite cambiar la fecha de inicio de la fase seleccionada;         
permite variar la *Fecha de inicio<!-- Data inizio -->* para todos los pedidos planificados u órdenes de producción seleccionados con la fecha indicada en el pop-up; posteriormente, según las fases y el *Calendario de capacidad productiva<!-- Calendario capacità produttive -->*, se recalcula también la *Fecha fin<!-- Data fine -->* de la orden y las fechas de inicio y fin de cada fase. Según las nuevas fechas también se recalculan las fechas de uso de los materiales.
Además de actualizar las fechas en el pedido, se actualizan también en la orden de trabajo relacionada<!-- commessa collegata -->;        
> **Calcular tiempo de fase según prioridad<!-- Calcola tempo fase in base alla priorità -->**: permite recalcular los tiempos después de haber asignado la nueva secuencia o después de haber cambiado algún dato mediante la función **Cambiar fases<!-- Cambia fasi -->**;          
> **Cálculo e inserción de la secuencia de producción<!-- Calcolo ed inserimento sequenza di produzione -->**: después de reordenar las filas de la segunda cuadrícula según la necesidad, este botón permite asignar una secuencia a las fases seleccionadas en base al orden dado;       
> **Recalcular factibilidad<!-- Ricalcola fattibilità -->**: el procedimiento calculará la factibilidad sobre los materiales y sobre la fase anterior para las filas seleccionadas, aplicando el color en las respectivas casillas *Factibilidad materiales<!-- Fattibilità materiali -->* y *Factibilidad fase<!-- Fattibilità fase -->* presentes en la cuadrícula inferior, según lo definido en los [Parámetros de requerimiento de materiales<!-- Parametri fabbisogno materiali -->](/docs/configurations/parameters/production/resource-requirements-parameters). Este botón solo se habilita si se ha activado la casilla **Secuencia de fases<!-- Sequenza fasi -->** en la sección *Parámetros de cálculo de factibilidad<!-- Parametri calcolo fattibilità -->* de los [Parámetros de requerimiento de materiales<!-- Parametri fabbisogno materiali -->](/docs/configurations/parameters/production/resource-requirements-parameters);          
> **Detalle de factibilidad de materiales<!-- Dettaglio fattibilità materiali -->**: permite abrir un pop-up que resalta qué materiales están disponibles y cuáles no para esa fase. Este botón solo se habilita si se ha activado la casilla **Considerar materiales<!-- Considera materiali -->** en la sección *Parámetros de cálculo de factibilidad<!-- Parametri calcolo fattibilità -->* de los [Parámetros de requerimiento de materiales<!-- Parametri fabbisogno materiali -->](/docs/configurations/parameters/production/resource-requirements-parameters);      
> **Detalle de factibilidad de fases<!-- Dettaglio fattibilità fasi -->**: permite abrir un pop-up que evidencia el estado de avance de la fase anterior, visualizando también las eventuales declaraciones realizadas hasta el momento. Este botón solo se habilita si se ha activado la casilla **Considerar fases anteriores<!-- Considera fasi precedenti -->** en la sección *Parámetros de cálculo de factibilidad<!-- Parametri calcolo fattibilità -->* de los [Parámetros de requerimiento de materiales<!-- Parametri fabbisogno materiali -->](/docs/configurations/parameters/production/resource-requirements-parameters);   
se abre un pop-up que resalta los materiales disponibles y los no disponibles para esa fase; mientras que, mediante el botón de detalle de factibilidad de fases, es posible conocer el estado de avance de la fase anterior, visualizando también las posibles declaraciones realizadas hasta el momento.
> **Actualización de fecha de mercancía lista<!-- Aggiornamento data merce pronta -->**: permite actualizar la *Fecha de mercancía lista<!-- Data merce pronta -->* de los pedidos de cliente relacionados con la *Fecha fin orden<!-- Data fine ordine -->*; 
> **Liberación de pedidos planificados<!-- Rilascio ordini pianificati -->**: permite liberar pedidos planificados de producción en órdenes de producción para las fases seleccionadas;                     
> **Liberación de pedidos<!-- Rilascio ordini -->**: permite cambiar el estado de las órdenes de producción de lanzadas a ejecutivas para una o varias fases seleccionadas.         
> **Expandir el tamaño de la cuadrícula<!-- Espandi la dimensione della griglia -->**: permite ocultar el área de filtro del formulario para trabajar más cómodamente en las cuadrículas;         
> **Doble cuadrícula<!-- Doppia griglia -->**: permite ocultar la primera cuadrícula para poder trabajar más cómodamente en la segunda.          

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes<!-- Funzionalità, pulsanti e campi comuni -->](/docs/guide/common).