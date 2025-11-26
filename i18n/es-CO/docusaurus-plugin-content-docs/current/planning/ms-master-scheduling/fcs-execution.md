---
title: Ejecuciones F.C.S.
sidebar_position: 6
ai_generated: true
---

## Ejecuciones F.C.S. (cuadrícula principal)<!-- Esecuzioni F.C.S. (griglia principale) -->

El formulario se compone de una cuadrícula principal donde, al presionar el botón **Buscar<!-- Ricerca -->**, se obtiene la lista de las simulaciones guardadas. Seleccionando una de ellas, se cargan los datos correspondientes en las diferentes pestañas del formulario.     
Es posible eliminar una simulación seleccionándola y presionando el botón **Eliminar<!-- Cancella -->**.

Todos los datos relativos a la simulación seleccionada, están presentes en las siguientes pestañas:

### Parámetros<!-- Parametri -->

Esta pestaña muestra los parámetros que se usaron para la simulación seleccionada.

### Errores de importación<!-- Errori d'importazione -->

Esta pestaña enumera las advertencias generadas en el momento de la importación de la simulación. No se listan errores, ya que en tal caso la simulación no habría sido posible.

### Errores de ejecución<!-- Errori d'esecuzione -->

Esta pestaña muestra posibles errores detectados durante la simulación.

### Pedidos a proveedores<!-- Ordini fornitori -->

Esta pestaña enumera las líneas de pedidos a proveedores planificadas, confirmadas y no atendidas, con la respectiva fecha final programada. Esta se considera como la fecha de entrega simulada por el planificador. En caso de pedidos confirmados, la fecha final programada coincide con la planificada, posiblemente postergada según el valor del parámetro de programación **Días de retraso de disponibilidad para compras<!-- Giorni ritardo disponibilità per acquisti -->**.         
Si dicha fecha fuera anterior a la fecha de inicio de la simulación, se igualará a esta. Si el pedido está planificado y la fecha de inicio resulta anterior a la fecha de inicio de la simulación, esta se igualará a la fecha de inicio de la simulación y, en consecuencia, la fecha final se moverá hacia adelante y la fecha final programada se calculará como la suma de la fecha final y el parámetro **Días de retraso de disponibilidad para compras<!-- Giorni ritardo disponibilità per acquisti -->**.

### Pedidos de cuenta trabajo<!-- Ordini conto lavoro -->

Esta pestaña enumera las líneas de pedidos a subcontratistas planificadas, confirmadas y no atendidas. La fecha de inicio programada es aquella en la que se simuló la retirada de los bienes a entregar al subcontratista. Dichos bienes deben estar todos disponibles en el almacén<!-- magazzino --> para poder ser enviados y comenzar el pedido. No se simulan retiradas parciales de bienes si estos no están completamente disponibles, a diferencia de lo que se simula para los pedidos de producción.  
La fecha final programada se obtiene sumando la fecha de inicio, el lead time del pedido y el parámetro de programación "Días de retraso de disponibilidad para cuenta trabajo<!-- Giorni ritardo disponibilità per conto lavoro -->".  
Tampoco para el retorno de la mercancía trabajada se simulan entregas parciales, como sí ocurre con los pedidos de producción. En resumen, para los pedidos de cuenta trabajo los valores de lotes de retirada y de entrega de los artículos en los parámetros MRP se consideran nulos, es decir, los pedidos de cuenta trabajo se gestionan en lotes y no en flujo.<!-- conto lavoro -->

### Pedidos de producción<!-- Ordini di produzione -->

Esta pestaña contiene los pedidos de producción tanto planificados como confirmados y no atendidos. Las fechas de inicio y fin programadas son determinadas por el resultado de la programación.

### Operaciones<!-- Operazioni -->

Esta pestaña contiene las fases relativas a los pedidos de producción visualizados en la pestaña correspondiente. Las fechas de inicio y fin programadas son determinadas por el resultado de la programación.     
En el lado derecho hay otras pestañas que muestran las máquinas alternativas, los recursos necesarios y los atributos de preparación.

### Demanda dependiente<!-- Domanda dipendente -->

Esta pestaña muestra las necesidades de materiales de todos los pedidos de producción y de cuenta trabajo<!-- conto lavoro -->.

### Pedidos de clientes<!-- Ordini cliente -->

Esta pestaña muestra las líneas de pedidos de clientes no atendidas. La fecha final programada es aquella en la que el planificador ha simulado la entrega. Esta nunca es anterior a la fecha de entrega del pedido, y puede ser posterior si no puede realizarse en la fecha prevista por falta de disponibilidad de la mercancía en el almacén<!-- magazzino -->.

### Pedidos internos DDMRP<!-- Ordini interni DDMRP -->

En un entorno tipo Ddmrp, esta pestaña muestra las líneas de pedidos internos para mercancía a entregar a los nodos de la cadena de suministro gestionada por el Ddmrp. Cada uno de estos pedidos funciona como un pedido de cliente, donde el cliente es un nodo de la cadena de suministro.

### Tareas<!-- Tasks -->

Esta pestaña contiene el núcleo del resultado de la programación. Las tareas son las actividades individuales (indivisibles e inagrupables) ejecutadas en la fábrica.       
La mayor parte de ellas tiene una correspondencia biunívoca con las líneas de la pestaña de operaciones. Algunas son el resultado de la agrupación de varias operaciones (máquinas que tienen una regla de agrupamiento), según una relación uno a muchos entre las tareas y las operaciones.  
En algunos casos ocurre lo contrario, es decir, a una operación pueden corresponderle varias tareas (solo para las máquinas que tienen una regla de agrupamiento), ya que la cantidad a producir de la operación excede los límites de carga de la máquina, por lo que el procesamiento de la operación requiere varias sesiones de trabajo de la máquina. Si una tarea no puede ser programada, en la columna "advertencias" estará disponible un mensaje que señala una (a menudo la única) causa de la falta de programación, para ayudar a entender cómo proceder para eliminar la causa del problema.

### Registro de almacén<!-- Registrazioni di magazzino -->

Esta pestaña informa todas las simulaciones de ingresos (cantidad positiva) y retiradas de mercancía (cantidad negativa) de los almacenes<!-- magazzini -->, con la indicación del pedido al que hacen referencia. Por lo tanto, están relacionadas con todos los tipos de pedidos importados por el planificador.  
Solo algunos registros no hacen referencia a ningún pedido; de hecho, para cada artículo y cada almacén<!-- magazzino --> hay un registro que corresponde al valor del stock en el momento de la importación de los datos de la simulación. Este registro no informa el valor del stock en la fecha de inicio de la simulación, ya que solo tendría sentido si fuera posible importar también pedidos confirmados y planificados en cualquier día del pasado, lo que requeriría el almacenamiento de enormes cantidades de datos que en general serían poco útiles.

### Actividad de los trabajadores<!-- Attività lavoratori -->

Esta pestaña lista las actividades ejecutadas por los trabajadores durante la simulación, en relación con las tareas presentes en la pestaña correspondiente. Para cada actividad se indica si se refiere a preparación de máquina o a procesamiento.

### Actividad de recursos<!-- Attività risorse -->

Esta pestaña enumera el uso de los recursos genéricos de producción gestionados a capacidad finita, en relación con las tareas presentes en la pestaña correspondiente.

Para todo lo que no se detalle en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes<!-- Funzionalità, pulsanti e campi comuni -->](/docs/guide/common).