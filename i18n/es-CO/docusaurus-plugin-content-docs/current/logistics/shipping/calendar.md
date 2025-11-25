---
title: Calendario
sidebar_position: 4
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La **planificación<!-- planning -->** de los envíos es una herramienta fundamental para optimizar la gestión logística dentro de una empresa. Permite planificar, monitorizar y coordinar todas las actividades relacionadas con el envío de mercancías, garantizando una distribución eficiente de los recursos y una optimización de los tiempos.      
Gracias a la visualización de datos cruciales como horarios, transportistas<!-- vettori -->, vehículos<!-- automezzi --> y clientes, la **planificación<!-- planning -->** facilita la programación de las actividades diarias, reduciendo los retrasos y mejorando la puntualidad en las entregas. Además, al integrar funcionalidades como la gestión de los periodos de inactividad y la actualización del estado de los envíos, ofrece una visión completa y actualizada de las operaciones logísticas, favoreciendo una mejor capacidad de toma de decisiones y una mayor eficiencia operativa.
:::

El calendario de envíos<!-- calendario delle spedizioni --> se encuentra en: Logística<!-- Logistica --> > Envíos<!-- Spedizioni --> > Calendario

El **calendario de envíos<!-- calendario delle spedizioni -->** muestra todos los envíos ingresados en el sistema, agrupados en vista de línea de tiempo según conductor<!-- autista -->/transportista<!-- vettore -->/vehículo<!-- automezzo -->/cliente/sin agrupamiento.              
Al abrirse, el intervalo mostrado será la fecha actual + 7 días si existen envíos en ese periodo, de lo contrario se mostrará el primer intervalo siguiente donde existan envíos.

Además de los envíos, en el calendario se muestran los periodos de inactividad de los vehículos<!-- automezzi --> y los transportistas<!-- vettori -->.

En la columna de la izquierda están presentes los datos relativos a **conductor<!-- autista -->/transportista<!-- vettore -->/vehículo<!-- automezzo -->/cliente según el agrupamiento seleccionado**, y en la cuadrícula del calendario se ubican los diferentes envíos.            
Aunque la duración del envío sea solo de una hora, en el calendario este se mostrará como diario, para facilitar su visualización. En caso de querer una vista más detallada, desde la barra de opciones (ribbon bar) haga clic en **Vista de línea de tiempo horaria<!-- Vista timeline oraria -->**.                    
Así, el envío se mostrará con la duración que le corresponde realmente. Esta opción puede ser útil si se utiliza el zoom in/zoom out (ctrl + scroll del mouse) para ver el máximo detalle horario del día.               
Para volver a la visualización de los envíos en modo diario, haga clic en el botón **Vista de línea de tiempo diaria<!-- Vista timeline giornaliera -->** en la barra de opciones.

En la barra de opciones también están disponibles los siguientes botones: 

- Buscar<!-- Ricerca -->: realiza una actualización de la visualización

- Ver por transportista<!-- Visualizza per vettore -->: en la columna izquierda se mostrarán primero todos los transportistas<!-- vettori --> y los envíos correspondientes; si en las filas de groupage no está presente el transportista<!-- vettore -->, se considerará el transportista<!-- vettore --> presente en la cabecera del envío. 
>> Si el transportista<!-- vettore --> no se indica en ningún lado, al final de la lista de transportistas<!-- vettori --> mostrados, se listarán los conductores<!-- autisti --> correspondientes; si no están presentes los conductores<!-- autisti --> en las filas de groupage, se considerará el conductor<!-- autista --> presente en la cabecera del envío. 
>> Si el conductor<!-- autista --> no se indica en ningún lado, al final de la lista de transportistas<!-- vettori --> mostrados, se listarán los clientes.

- Ver por conductor<!-- Visualizza per autista -->: en la columna izquierda se mostrarán primero todos los conductores<!-- autisti --> y los envíos correspondientes; si en las filas de groupage no está presente el conductor<!-- autista -->, se considerará el conductor<!-- autista --> presente en la cabecera del envío. 
>> Si el conductor<!-- autista --> no se indica en ningún lado, al final de la lista de conductores<!-- autisti --> mostrados, se listarán los transportistas<!-- vettori --> correspondientes; si no están presentes los transportistas<!-- vettori --> en las filas de groupage, se considerará el transportista<!-- vettore --> presente en la cabecera del envío. 
>> Si el transportista<!-- vettore --> no se indica en ningún lado, al final de la lista de conductores<!-- autisti --> mostrados, se listarán los clientes.

- Ver por cliente<!-- Visualizza per cliente -->: en la columna de la izquierda se mostrarán todos los clientes; si no hay, habrá una opción de tipo "otro" que agrupará todos los envíos sin cliente asignado.

- Ver por vehículo<!-- Visualizza per automezzo -->: en la columna de la izquierda se mostrarán todos los vehículos<!-- automezzi -->; si en las filas de groupage no está presente el vehículo<!-- automezzo -->, se considerará el vehículo<!-- automezzo --> presente en la cabecera del envío. 
>> si no está presente, habrá una opción de tipo "otro" que agrupará todos los envíos sin vehículo<!-- automezzo --> asignado.

- Sin agrupamiento<!-- Nessun raggruppamento -->: se mostrará un calendario por tipo de envío.

Con el botón derecho es posible ingresar un nuevo envío, o un periodo de inactividad para conductor<!-- autista --> o vehículo<!-- automezzo -->.

A la izquierda están disponibles los filtros para: 
- tipo de transporte: remitente, destinatario, transportista<!-- vettore -->
- vehículo<!-- automezzo -->
- placa<!-- targa -->
- número de tracking
- cliente
- transportista<!-- vettore -->
- conductor<!-- autista -->
- Referencia de pedidos de cliente
- Planta de producción<!-- Sito produttivo -->

Los colores de los envíos representan el [Estado del envío<!-- Stato della spedizione -->](/docs/configurations/tables/logistics/shipping-states).       
Con el botón derecho sobre el envío, es posible avanzar el estado.

Los colores asignados a la lista de conductores<!-- autisti -->/vehículos<!-- automezzi -->/transportistas<!-- vettori -->/clientes son aleatorios y se asignan al abrir el calendario, hasta el siguiente cambio de vista.