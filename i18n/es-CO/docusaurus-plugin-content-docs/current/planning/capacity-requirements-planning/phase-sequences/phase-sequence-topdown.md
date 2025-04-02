---
title: sequenza fasi - topdown grid
sidebar_position: 2
---

:::important ¿Para qué sirve? (A cosa serve)
El procedimiento de **sequenza fasi** en Fluentis, a través de la funcionalidad "sequenza fasi - topdown grid", permite optimizar la gestión de las fases de producción ensamblando secuencias manuales o basadas en reglas personalizadas.   
Después de una cuidadosa selección de filtros, que incluyen centro de trabajo, período de pedido y orden, las fases no ordenadas se enumeran en una cuadrícula superior. Desde aquí, las fases se mueven a la cuadrícula inferior para asignarles una secuencia.    
El formulario incluye herramientas para modificar los datos asociados a las fases, calcular tiempos y actualizar fechas, garantizando un control preciso sobre la planificación de la producción. Botones específicos facilitan el cálculo de las secuencias, la gestión de existencias y la actualización del estado de los pedidos, asegurando un flujo productivo eficiente.
:::

Permite secuenciar las fases manualmente o de acuerdo con reglas decididas por el operador.

El formulario consta de un área de filtro donde es posible seleccionar:
> **centro di lavoro**        
> **macchina**        
> **da data inizio ordine**        
> **a data fine ordine**       
> **commessa di produzione**     

Al expandir esta área, es posible filtrar, por ejemplo, también por *articolo*, *sequenza*, *tipo commessa produzione*, *gruppi manodopera*; además, también hay la posibilidad de elegir los tipos de pedidos a visualizar entre pedidos planificados, pedidos de producción en estado lanzado y/o ejecutivo.

La parte central del formulario está constituida por dos cuadrículas.    
La primera presenta todas las fases de trabajo a las que aún no se les ha dado una secuencia. Por lo tanto, al seleccionar una o más fases de la primera cuadrícula y presionar el botón *spostare fasi*, estas se trasladan a la segunda cuadrícula (inferior), donde luego será posible asignar una secuencia manual o automáticamente.         

:::note Nota
No es posible modificar la información de una fase ya declarada en producción.
:::

En la parte inferior del formulario se encuentran los siguientes campos:
> **quantità impegno**: indica el total de las cantidades de compromiso de las líneas seleccionadas por el usuario;         
> **unità di misura tempi**: indica la unidad de medida del tiempo con la que se quiere visualizar el valor presente en **totale tempo**;     
> **totale tempo**: indica el total del tiempo (Tiempo de máquina + Tiempo de mano de obra + Tiempo de preparación) de las líneas seleccionadas por el usuario.

Además, al expandir esta parte, se visualizan en solo lectura los datos de detalle relacionados con:
> **quantità**  
> **tempo manodopera**  
> **tempo macchina**  
> **tempo attrezzaggio**  

*Botones específicos*:  

> **ricerca**: permite visualizar las fases en función de los filtros ingresados;           
> **Buscar y considerar existencias (Ricerca e considera giacenze)**: realiza la misma función que el botón **ricerca**, pero, al mismo tiempo, permite visualizar en rojo todas las fases donde no hay existencias disponibles hasta hoy;                   
> **spostare fasi**: permite mover la o las fases seleccionadas de la primera cuadrícula a la segunda cuadrícula donde luego será posible asignar una secuencia;         
> **cambia fasi**: una vez seleccionada una fase, este comando permite *aggiornare* la fase misma variando: fase, máquina, centro de trabajo, total del tiempo de máquina, del tiempo de operario y del tiempo de preparación. Además, al seleccionar la opción *inserisci* es posible añadir una nueva fase o, a través de la opción *cancella*, eliminarla de forma definitiva;            
> **cambia ciclo/versione**: permite variar ciclo y/o versión en ese pedido de producción;            
> **cambio date**: permite variar la fecha de inicio de la fase seleccionada; permite cambiar la *Fecha de inicio* para todos los pedidos planificados o de producción seleccionados con la fecha indicada en el pop-up; posteriormente, en función de las fases y del *Calendario de capacidades productivas*, también se recalculará la *Fecha de finalización* del pedido y las fechas de inicio y final de cada fase. En base a las nuevas fechas, también se recalcularán las fechas de uso de los materiales. Además de actualizar las fechas en el pedido, se actualizan las de la orden conectada;        
> **calcola tempo fase in base alla priorità**: permite realizar el recalculo de los tiempos después de haber asignado la nueva secuencia o después de haber modificado algún dato mediante la función **cambia fasi**;          
> **calcolo ed inserimento sequenza di produzione**: después de haber reorganizado las líneas de la segunda cuadrícula según la necesidad, este botón permite dar una secuencia a las fases que hemos seleccionado según el orden dado;       
> **ricalcola fattibilità**: el procedimiento calculará la viabilidad sobre los materiales y sobre la fase anterior para las líneas seleccionadas, aplicando el color en las respectivas casillas *Viabilidad de materiales (Fattibilità materiali)* y *Viabilidad de fase (Fattibilità fase)* presentes en la cuadrícula inferior según lo definido en los [Parámetros de necesidad de materiales (Parametri fabbisogno materiali)](/docs/configurations/parameters/production/resource-requirements-parameters). Este botón se activa solo si se ha activado el indicador **sequenza fasi** en la sección *Parámetros de cálculo de viabilidad (Parametri calcolo fattibilità)* de los [Parámetros de necesidad de materiales (Parametri fabbisogno materiali)](/docs/configurations/parameters/production/resource-requirements-parameters);          
> **dettaglio fattibilità materiali**: permite abrir un pop-up que destaca qué materiales están disponibles y cuáles no para esa fase. Este botón se activa solo si se ha activado el indicador **considera materiali** en la sección *Parámetros de cálculo de viabilidad (Parametri calcolo fattibilità)* de los [Parámetros de necesidad de materiales (Parametri fabbisogno materiali)](/docs/configurations/parameters/production/resource-requirements-parameters);      
> **dettaglio fattibilità fasi**: permite abrir un pop-up que destaca el estado de avance de la fase anterior, visualizando también las declaraciones que se hayan realizado hasta ese momento. Este botón se activa solo si se ha activado el indicador **considera fasi precedenti** en la sección *Parámetros de cálculo de viabilidad (Parametri calcolo fattibilità)* de los [Parámetros de necesidad de materiales (Parametri fabbisogno materiali)](/docs/configurations/parameters/production/resource-requirements-parameters); se abre un pop-up que destaca qué materiales tenemos disponibles y cuáles no para esa fase; mientras que, a través del botón de detalle de viabilidad de fases, es posible entender el estado de avance de la fase anterior, visualizando también las declaraciones que se hayan realizado hasta ese momento.
> **aggiornamento data merce pronta**: permite actualizar la *Fecha de mercancía lista* de los pedidos de cliente conectados con la *data fine ordine*; 
> **rilascio ordini pianificati**: permite liberar los pedidos planificados de producción en pedidos de producción para las fases seleccionadas;                     
> **rilascio ordini**: permite cambiar el estado de los pedidos de producción de lanzado a ejecutivo de la o las fases seleccionadas.         
> **espandi la dimensione della griglia**: permite ocultar el área de filtro del formulario para trabajar más fácilmente en las cuadrículas;         
> **doppia griglia**: permite ocultar la primera cuadrícula para trabajar más fácilmente en la segunda.          

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).