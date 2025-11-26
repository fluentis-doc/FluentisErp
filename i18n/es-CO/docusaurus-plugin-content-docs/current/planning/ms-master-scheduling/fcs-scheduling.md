--- 
title: Programación F.C.S. 
sidebar_position: 5 
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
El sistema AFCS de Fluentis permite simular los procesos productivos, de aprovisionamiento, ventas y distribución de una organización.
Fluentis AFCS realiza una simulación de detalle muy realista que permite lograr los siguientes objetivos:
- Estimar con precisión las fechas de entrega a clientes internos y externos de la organización (también en contextos DDMRP).
- Optimizar los procesos productivos para equilibrar al máximo el costo de producción y el nivel de servicio.
- Identificar las críticas<!-- criticità --> que reducen el rendimiento del sistema productivo y, en consecuencia, simular acciones de mejora (por ejemplo, horas extra, externalización de actividades, aumento de la capacidad productiva, etc.).
- Medir la calidad del plan de producción mediante indicadores numéricos de desempeño (K.P.I.).
- Simular diferentes escenarios para comparar a través de los K.P.I y elegir la mejor solución.
- Crear planes de trabajo detallados de corto plazo para lanzar en producción.
- Actualizar rápidamente el plan de producción según el avance real y ante la aparición de imprevistos (por ejemplo, ausencia inesperada de personal, avería de una máquina, etc.).
:::

Para iniciar una sesión de simulación FCS es necesario primero ejecutar la fase de importación en RAM de los datos de la base de datos Fluentis.      
Durante esta fase se realizan numerosos controles sobre la validez de los datos a fines de la simulación, y al finalizar se pueden tener notificaciones de errores, que impiden iniciar la sesión de simulación, o advertencias, que permiten de todos modos proceder con la simulación.      
Si la fase de importación terminó sin errores, se puede proceder a la simulación presionando el botón **Ejecutar<!-- Esegui -->**, y al final de esta, se puede guardar el resultado presionando el botón **Guardar<!-- Salva -->**, y analizar posteriormente los detalles a través del formulario [Ejecuciones FCS<!-- Esecuzioni FCS -->](/docs/planning/ms-master-scheduling/fcs-execution).       
El comportamiento del programador<!-- schedulatore --> depende de los valores insertados en los parámetros de programación<!-- schedulazione --> presentes en las siguientes secciones del formulario.

### **Simulación<!-- Simulazione -->**

- **Fecha y hora de inicio de la simulación<!-- Data ed ora inizio simulazione -->**: mediante este campo se configuran la fecha y la hora de inicio de la simulación. Cuando se abre el formulario, este campo se completa con la fecha y hora actuales.
- **Paso de simulación en minutos<!-- Passo simulazione in minuti -->**: con este campo se configura la duración de cada paso de la simulación, en múltiplos de 6 minutos (décimas de hora), desde un mínimo de 6 hasta un máximo de 30. Cuanto más pequeño sea el paso, más tiempo tardará la simulación, en igualdad de horizonte de simulación.      
Si las actividades laborales son en promedio cortas, elija un paso pequeño; si son en promedio largas, como en el sector de la construcción, se puede utilizar un paso más largo.
- **Días de antelación para la liberación de órdenes<!-- Giorni anticipo rilascio ordini -->**: las fases de una orden de producción se simulan a partir de la fecha de inicio de la orden. Si se desea adelantar los trabajos (programación lo más pronto posible o para optimizar las secuencias de trabajo en máquinas con altos tiempos de preparación), ingrese un valor positivo en este campo. Si, por ejemplo, se ingresa 10, los trabajos de una orden serán liberados en el área de producción y, por tanto, potencialmente trabajados, 10 días antes de la fecha de inicio de la orden.      
Un valor negativo tendrá el efecto contrario, es decir, los trabajos no podrán ser liberados en producción en la fecha de inicio de la orden, sino solo después del número de días indicado por este parámetro.    
En resumen, un valor positivo puede mejorar las secuencias de trabajo en máquinas con tiempos elevados de preparación y aumentar la carga de trabajo de la fábrica en el corto plazo, pero inevitablemente se adelantarán trabajos, incrementando el capital circulante a invertir en el plan de producción y los costos de permanencia en el área de producción de los productos.
- **Días de duración de la simulación<!-- Giorni durata simulazione -->**: este parámetro indica la duración en días de la simulación, a partir de la fecha de inicio configurada.

### **Proveedores<!-- Fornitori -->**

- **Días de retraso en la disponibilidad para compras<!-- Giorni ritardo disponibilità per acquisti -->**: este parámetro indica cuántos días después de la fecha de entrega indicada en las órdenes de compra, la mercancía se considera disponible para ser retirada del almacén<!-- magazzino --> a efectos de la simulación FCS. Es un parámetro de seguridad que hace más realista y probable el plan de producción generado por el programador<!-- schedulatore -->.      
De hecho, si este parámetro es nulo, la mercancía de las órdenes de compra se considerará disponible a partir del día siguiente a la fecha de entrega de la orden. Si, por ejemplo, una entrega de un proveedor ocurre con 3 días de retraso y este parámetro vale al menos 3, el plan de trabajo creado por el programador<!-- schedulatore --> seguiría siendo válido y factible, ya que estamos seguros de que ningún trabajo que requiera dicha mercancía podría haber sido simulado antes de la llegada efectiva de la mercancía, mientras que si este campo fuera nulo, los trabajos que requieren la mercancía retrasada programados dentro de esos 3 días, no serían ejecutables.  
- **Días de retraso en la disponibilidad para maquila<!-- Giorni ritardo disponibilità per conto lavoro -->**: funciona como en el caso de la compra, pero para las órdenes de maquila<!-- conto lavoro -->.

### **Agrupación<!-- Accorpamento -->**

- **Máxima espera en horas<!-- Massima attesa in ore -->**: un trabajo en máquina de trabajos agrupados se mantiene en espera para ser trabajado junto con otras fases con el mismo código de agrupación, a fin de optimizar la productividad de la máquina.       
Si el tiempo de espera de la fase (en horas de turno activo de la máquina), supera este valor, el trabajo se incluye en la primera sesión de trabajo disponible, independientemente de las necesidades de optimización del uso de la máquina.      
Si no se especifica ningún valor para este parámetro, el tiempo de espera de una fase de trabajo sería indefinible.      
Si, por ejemplo, el turno normal de una máquina es de 8 horas al día, y si este parámetro vale 24, entonces la fase podría permanecer en espera de ser trabajada no más de 3 días.     
Este parámetro sirve para limitar el retraso que puede sufrir un trabajo por las necesidades de optimización de la carga de la máquina. Cuanto mayor sea este valor, mejor será la optimización del uso de la máquina, pero los retrasos promedio de los trabajos podrían ser mayores.

### **Preparación<!-- Attrezzaggio -->**

- **Se considera breve si no supera minutos<!-- Considerato breve se non supera minuti -->**: si a una máquina se le asocia una regla de preparación, cuando durante la simulación queda libre, si ninguno de los trabajos liberados tiene un tiempo de preparación inferior al valor de este campo, y si el centro de trabajo tiene un porcentaje de carga inferior al parámetro de programación<!-- schedulazione --> que determina cuándo se considera un cuello de botella, el programador<!-- schedulatore --> podría decidir no emplearla inmediatamente y dejarla inactiva, esperando que se libere un trabajo con preparación de corta duración.      
Si existe un trabajo liberado, que tiene un tiempo de preparación que no supera el valor de este campo, el trabajo se asigna sin duda a la máquina.
- **Máximo retraso de operación en días<!-- Massimo ritardo operazione in giorni -->**: un trabajo puede retrasarse respecto a su inicio programado si, dado el estado de la máquina, el tiempo de preparación no es breve.     
Esta lógica podría llevar a un retraso inaceptable de algunos trabajos, por lo tanto, se establece un retraso máximo aceptable mediante este parámetro, más allá del cual el trabajo se realiza independientemente del tiempo de preparación.
- **El centro se considera un cuello de botella si el % de carga supera<!-- Il centro è considerato un collo di bottiglia se % carico supera -->**: este es el porcentaje de carga de un centro de trabajo, más allá del cual se considera saturado, y como consecuencia, las máquinas de ese centro que tienen una regla de preparación, siempre se emplean cuando quedan libres, independientemente de los tiempos de preparación de los trabajos liberados y en espera de ser trabajados.       
Este valor solo tiene efecto para los centros de trabajo con máquinas con reglas de preparación.
- **Costo diario de retraso en la entrega<!-- Costo giornaliero ritardo consegna -->**: la optimización de la secuencia de trabajo de una máquina con regla de preparación puede llevar a adelantar algunos trabajos y posponer otros.       
Este parámetro, cuyo valor óptimo debe determinarse experimentalmente en cada empresa, asigna un costo a cada día de retraso de un trabajo, con el fin de alcanzar la secuencia óptima. Aumentar este valor penaliza más las secuencias de trabajo con tareas muy retrasadas y, por ende, reduce el retraso promedio de los trabajos en las máquinas con regla de preparación.
- **Costo anual de inventario en %<!-- Costo annuo scorte in % -->**: en las máquinas con regla de preparación, la secuencia de trabajo óptima se obtiene considerando también el costo derivado de adelantar trabajos para reducir el tiempo de preparación.      
Esto inevitablemente genera un costo de work in process, ya que adelantar trabajos significa hacer un mayor uso de capital circulante<!-- capitale circolante --> (sobre el cual se paga un interés), y necesitar mayores espacios de almacenamiento, aumentando así el costo de almacenamiento de los productos. Aumentar este valor reduce el anticipo promedio de los trabajos en máquinas con regla de preparación.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes<!-- Funzionalità, pulsanti e campi comuni -->](/docs/guide/common).