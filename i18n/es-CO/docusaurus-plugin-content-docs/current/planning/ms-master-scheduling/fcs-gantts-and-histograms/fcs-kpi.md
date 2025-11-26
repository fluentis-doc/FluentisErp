---
title: K.P.I. F.C.S.
sidebar_position: 3
ai_generated: true
---

Este formulario muestra los valores de los principales key performance indicators<!-- key performance indicators -->.        
A través de las dos cuadrículas principales es posible comparar los valores relativos a dos diferentes simulaciones, lo cual es útil por ejemplo si se realizan simulaciones con diferentes valores de parámetros de programación y los mismos datos importados.       

Una vez seleccionadas las simulaciones, en las pestañas inferiores se muestran los datos respectivos.

## Pedidos de cliente<!-- Ordini cliente -->

**Retraso máximo**: es el retraso máximo encontrado entre las filas de pedido de cliente programadas. El indicador tiene un límite de 100 días; si este valor supera los 100 días, el valor detallado se muestra al final del gráfico.

**Retraso medio**: es el valor promedio de las filas de pedido de cliente programadas en retraso.

**Artículos de pedidos de cliente programados**: es el número de filas de pedido de cliente que han sido programadas.

**Artículos de pedidos de cliente retrasados**: es el número de filas de pedido de cliente en retraso.

**Porcentaje de retrasos**: es la relación porcentual entre las filas de pedido de cliente en retraso y las filas de pedido de cliente programadas.

## Costes del flujo de materiales<!-- Costi flusso materiali -->

Permite comparar los siguientes costes de las simulaciones:

- **Coste del flujo de almacén<!-- Costo flusso di magazzino -->**: mantener almacenado un artículo en almacén tiene un coste. En la literatura existen varios ejemplos de cálculo de este coste, normalmente dado por el coste de la inmovilización del capital circulante (intereses a pagar por el uso del capital), y los costes de almacenaje de mercancía en almacén (coste de alquiler o amortización de los espacios de almacén, costes de climatización e iluminación, costes de estructuras de almacenaje, de sistemas de movimiento de mercancía en almacén, coste de personal, etc.).         
En el cálculo se tienen en cuenta estos costes mediante un valor porcentual que se aplica al coste estándar del artículo (ver parámetros de programación). Si por ejemplo este porcentaje es 10, y el coste unitario del artículo es 80, tendremos un coste de 8 para todo un año por una sola unidad del artículo. Este valor se divide por 365 obteniendo el coste diario por unidad, y este valor se multiplica por el stock final en almacén<!-- giacenza finale a magazzino --> de cada día de la simulación, y los valores de cada día de la simulación se suman.               
El valor de este KPI es el coste de mantenimiento en almacén de todos los artículos de la simulación durante su periodo. Cuanto más rápido se utilicen las mercancías y menos tiempo permanezcan en almacén esperando ser usadas, menor será el valor de este KPI. Al aumentar el flujo de las mercancías, el valor de este KPI disminuye. Adelantar las operaciones obviamente incrementa el valor de este KPI.

- **Coste del flujo del W.I.P.**: este KPI se calcula de forma similar al de almacén, usando el mismo porcentaje como base de cálculo. Una vez calculado el coste diario unitario de almacenamiento de un artículo de producción, este se multiplica por la duración programada del pedido (fecha de finalización programada menos fecha de inicio programada).     
Supongamos por ejemplo que hay un pedido de producción de 60 piezas de un artículo con un coste unitario de 80, una duración programada de 9 días y un porcentaje atribuido al coste de almacenamiento del 10, tendremos un coste diario unitario de (80 * 10 / 100 ) / 365, que es igual a 0,0219178. Esto se multiplica por 60, obteniendo un coste diario de 1,315 que se multiplica por la duración programada en días del pedido, 9, obteniendo un coste total de W.I.P. del pedido igual a 11,84.       
Este cálculo se realiza para todos los pedidos de producción programados y la suma total es el valor de este KPI. Menor duración de los pedidos de producción se traduce en un menor valor de este KPI. Si el flujo de materiales en producción mejora, es decir, se producen en menos tiempo, este KPI disminuye.

- **Coste total del flujo<!-- Costo flusso totale -->**: es la suma de los dos valores anteriores. Un plan de producción mejora solo si este KPI disminuye, no si disminuye solo uno de sus elementos.     
El efecto de valores diferentes de los parámetros de programación y de las intervenciones del planificador pueden evaluarse en su totalidad por la evolución del valor de este KPI.

## Centros de trabajo<!-- Centri di lavoro -->

Dentro de esta pestaña es posible seleccionar el tipo de indicador que se quiere visualizar entre:

- **% Carga**: el porcentaje de carga es el porcentaje de tiempo disponible en el que se realizó la operación
 
- **% Preparación<!-- Attrezzaggio -->**: el porcentaje de preparación es el porcentaje de tiempo disponible dedicado a actividades de preparación.

- **% horas inactivas<!-- ore inattive -->**: este KPI resulta de la relación entre las horas de espera improductiva y las horas disponibles. Las horas de espera improductiva son aquellas en las que una tarea ha involucrado los recursos correspondientes (máquinas, trabajadores, recursos productivos genéricos) sin poder generar avance, ya que materiales o trabajadores no eran suficientes. Los materiales pueden no ser suficientes por dos motivos: 1. si para alguno de ellos es posible la recogida parcial, y al momento de la puesta en producción no estaba disponible toda la cantidad necesaria, por tanto se recogió la disponible, pero una vez consumida, no había más disponible en almacén, por lo que la operación se interrumpió en espera de la disponibilidad del material. 2. si la tarea está relacionada con una fase de trabajo para la que se estableció la superposición respecto a la fase anterior, y la fase que precede no logra producir al ritmo que requiere esta tarea, la cual habrá procesado lo que llegó de la fase anterior y no tendrá más material para trabajar, quedando inactiva esperando que llegue dicho material. Otra causa posible de inactividad es la falta de trabajadores disponibles. De hecho, la tarea se inicia si los trabajadores con la calificación adecuada están disponibles, pero después de que estos son liberados (fin de preparación<!-- attrezzaggio --> o fin del turno de trabajo de los trabajadores), la tarea no puede encontrar más trabajadores y tendrá que esperar a que se vuelvan disponibles.

- **Buffer medio**: este valor se calcula considerando las actividades en cola esperando ser procesadas en un centro de trabajo<!-- centro di lavoro -->. Este valor representa el promedio diario, durante el periodo de la simulación, del total de horas a trabajar en el centro en cola en espera. Si, por ejemplo, en un centro se procesan fases por un total de 18 horas de tiempo-fase en un día, pero esas fases no tuvieron que esperar para ser procesadas, el buffer de ese día vale 0. En definitiva, valores altos de este KPI indican que el centro es un cuello de botella. Por ejemplo, podemos comparar dos centros de trabajo y si ambos tienen un alto porcentaje de carga, no significa que ambos sean cuellos de botella; es necesario evaluar el valor de este KPI para identificar cuál está más en crisis. Por ejemplo, si ambos tienen un porcentaje de carga de trabajo del 95%, pero uno tiene un buffer de 2 horas y el otro de 16 horas, ciertamente es necesario actuar sobre el segundo, buscando aumentar su capacidad productiva o externalizando parte de la producción.

## Máquinas<!-- Macchine -->

Dentro de esta pestaña es posible seleccionar el tipo de indicador que se quiere visualizar entre:

- **% Carga**: el porcentaje de carga es el porcentaje de tiempo disponible en el que se realizó la operación
 
- **% Preparación<!-- Attrezzaggio -->**: el porcentaje de preparación es el porcentaje de tiempo disponible dedicado a actividades de preparación.

- **% horas inactivas<!-- ore inattive -->**: este KPI resulta de la relación entre las horas de espera improductiva y las horas disponibles. Las horas de espera improductiva son aquellas en las que una tarea ha involucrado los recursos correspondientes (máquinas, trabajadores, recursos productivos genéricos) sin poder generar avance, ya que materiales o trabajadores no eran suficientes. Los materiales pueden no ser suficientes por dos motivos: 1. si para alguno de ellos es posible la recogida parcial, y al momento de la puesta en producción no estaba disponible toda la cantidad necesaria, por tanto se recogió la disponible, pero una vez consumida, no había más disponible en almacén, por lo que la operación se interrumpió en espera de la disponibilidad del material. 2. si la tarea está relacionada con una fase de trabajo para la que se estableció la superposición respecto a la fase anterior, y la fase que precede no logra producir al ritmo que requiere esta tarea, la cual habrá procesado lo que llegó de la fase anterior y no tendrá más material para trabajar, quedando inactiva esperando que llegue dicho material. Otra causa posible de inactividad es la falta de trabajadores disponibles. De hecho, la tarea se inicia si los trabajadores con la calificación adecuada están disponibles, pero después de que estos son liberados (fin de preparación<!-- attrezzaggio --> o fin del turno de trabajo de los trabajadores), la tarea no puede encontrar más trabajadores y tendrá que esperar a que se vuelvan disponibles.

## Competencias de los trabajadores<!-- Competenze lavoratori -->

Dentro de esta pestaña es posible seleccionar el tipo de indicador que se quiere visualizar entre:

- **% Carga**: el porcentaje de carga es el porcentaje de tiempo disponible en el que se realizó la operación
 
- **% Preparación<!-- Attrezzaggio -->**: el porcentaje de preparación es el porcentaje de tiempo disponible dedicado a actividades de preparación.

- **% horas inactivas<!-- ore inattive -->**: este KPI resulta de la relación entre las horas de espera improductiva y las horas disponibles. Las horas de espera improductiva son aquellas en las que una tarea ha involucrado los recursos correspondientes (máquinas, trabajadores, recursos productivos genéricos) sin poder generar avance, ya que materiales o trabajadores no eran suficientes. Los materiales pueden no ser suficientes por dos motivos: 1. si para alguno de ellos es posible la recogida parcial, y al momento de la puesta en producción no estaba disponible toda la cantidad necesaria, por tanto se recogió la disponible, pero una vez consumida, no había más disponible en almacén, por lo que la operación se interrumpió en espera de la disponibilidad del material. 2. si la tarea está relacionada con una fase de trabajo para la que se estableció la superposición respecto a la fase anterior, y la fase que precede no logra producir al ritmo que requiere esta tarea, la cual habrá procesado lo que llegó de la fase anterior y no tendrá más material para trabajar, quedando inactiva esperando que llegue dicho material. Otra causa posible de inactividad es la falta de trabajadores disponibles. De hecho, la tarea se inicia si los trabajadores con la calificación adecuada están disponibles, pero después de que estos son liberados (fin de preparación<!-- attrezzaggio --> o fin del turno de trabajo de los trabajadores), la tarea no puede encontrar más trabajadores y tendrá que esperar a que se vuelvan disponibles.

## Tipos de recurso<!-- Tipi risorsa -->

Dentro de esta pestaña es posible seleccionar el tipo de indicador que se quiere visualizar entre:

- **% Carga**: el porcentaje de carga es el porcentaje de tiempo disponible en el que se realizó la operación
 
- **% Preparación<!-- Attrezzaggio -->**: el porcentaje de preparación es el porcentaje de tiempo disponible dedicado a actividades de preparación.

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).