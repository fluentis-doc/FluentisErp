---
title: calendario
sidebar_position: 4
---

:::important ¿Para qué sirve? (A cosa serve)
La **planificación** de los envíos es una herramienta fundamental para optimizar la gestión logística dentro de una empresa. Permite planificar, monitorear y coordinar todas las actividades relacionadas con el envío de mercancías, garantizando una distribución eficiente de los recursos y una optimización de los tiempos.  
Gracias a la visualización de datos cruciales como horarios, transportistas, vehículos y clientes, la **planificación** facilita la programación de las actividades diarias, reduciendo retrasos y mejorando la puntualidad de las entregas. Además, al integrar funcionalidades como la gestión de periodos de inactividad y la actualización del estado de los envíos, ofrece un panorama completo y actualizado de las operaciones logísticas, favoreciendo una mejor capacidad de decisión y una mayor eficiencia operativa.
:::

El calendario de envíos se encuentra en: Logística > Envíos > calendario

El **calendario de envíos** muestra todos los envíos ingresados en el sistema, agrupados en vista de línea de tiempo en función de motorista/transportista/vehículo/cliente/sin agrupamiento.  
Al abrir, el intervalo visualizado será la fecha actual + 7 días si hay envíos en ese periodo; de lo contrario, se mostrará el primer intervalo posterior en el que hay envíos.  

Además de los envíos, en el calendario se muestran los periodos de inactividad de los vehículos y transportistas.  

En la columna de la izquierda se encuentran los datos relativos a **motorista/transportista/vehículo/cliente según el agrupamiento elegido**, y en la cuadrícula del calendario están posicionados los diversos envíos.  
Incluso si la duración del envío es de solo una hora, en el calendario se mostrará como diario, para facilitar su visualización. Si se desea tener una vista más puntual, desde la barra de herramientas hacer clic en **Vista de línea de tiempo horaria (Vista timeline oraria)**.  
De esta manera, el envío se mostrará con el tamaño que realmente corresponde a su duración. Esta opción puede ser útil si se utiliza el zoom in/zoom out (ctrl + desplazamiento del mouse) para ir al detalle horario máximo del día.  
Para volver a la visualización de los envíos en modo diario, haga clic en el botón **Vista de línea de tiempo diaria (Vista timeline giornaliera)** en la barra de herramientas.

En la barra de herramientas también están presentes los siguientes botones:  

- **ricerca**: refresca la visualización.

- **Ver por transportista (Visualizza per vettore)**: en la columna de la izquierda se mostrarán primero todos los transportistas y los envíos correspondientes; si en las filas de agrupamiento no figura el transportista, se considerará el transportista presente en la cabecera del envío.  
>> Si el transportista no está indicado en ninguna parte, al final de la lista de transportistas mostrados, se enumerarán los respectivos motoristas; y si los motoristas no están presentes en las filas de agrupamiento, se considerará el motorista presente en la cabecera del envío.  
>> Si el motorista no está indicado en ninguna parte, al final de la lista de transportistas mostrados, se enumerarán los clientes.

- **Ver por motorista (Visualizza per autista)**: en la columna de la izquierda se mostrarán primero todos los motoristas y los envíos correspondientes; si en las filas de agrupamiento no figura el motorista, se considerará el motorista presente en la cabecera del envío.  
>> Si el motorista no está indicado en ninguna parte, al final de la lista de motoristas mostrados, se enumerarán los respectivos transportistas; y si los transportistas no están presentes en las filas de agrupamiento, se considerará el transportista presente en la cabecera del envío.  
>> Si el transportista no está indicado en ninguna parte, al final de la lista de motoristas mostrados, se enumerarán los clientes.

- **Ver por cliente (Visualizza per cliente)**: en la columna de la izquierda se mostrarán todos los clientes; si no hay, habrá una entrada de tipo "otro" que agrupará todos los envíos sin cliente asignado.

- **Ver por vehículo (Visualizza per automezzo)**: en la columna de la izquierda se mostrarán todos los vehículos; si en las filas de agrupamiento no figura el vehículo, se considerará el vehículo presente en la cabecera del envío.  
>> Si no está presente, habrá una entrada de tipo "otro" que agrupará todos los envíos sin vehículo asignado.

- **nessun raggruppamento**: se mostrará un calendario por tipo de envío.

Con el botón derecho es posible ingresar un nuevo envío, o bien un periodo de inactividad para el motorista o vehículo.  

A la izquierda, están presentes los filtros para:  
- tipo de transporte: remitente, destinatario, transportista  
- vehículo  
- matrícula  
- número de seguimiento  
- cliente  
- transportista  
- motorista  
- Referencia de pedidos de cliente  
- Sitio productivo  

Los colores de los envíos representan el [Estado del envío](/docs/configurations/tables/logistics/shipping-states).  
Con el botón derecho sobre el envío, es posible avanzar el estado.  

Los colores asignados a la lista de motoristas/vehículos/transportistas/clientes son aleatorios y se asignan al abrir el calendario, hasta el próximo cambio de vista.