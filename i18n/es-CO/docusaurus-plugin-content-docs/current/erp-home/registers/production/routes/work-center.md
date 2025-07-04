---
title: Centros de trabajo 
sidebar_position: 3
---

A través de este formulario se pueden codificar los diversos centros de trabajo, incluyendo la información relacionada con las máquinas y los grupos de mano de obra que los componen.

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

### Búsqueda de Centros de trabajo 

El formulario se compone de un área de filtro y otra de resultados. Una vez configurados todos los filtros deseados, basta hacer clic en el botón **Buscar** para visualizar los resultados en la cuadrícula de resultados.

### Inserción de Centros de trabajo

Para poder insertar nuevas codificaciones es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **Insertar**.

Las informaciones obligatorias para la creación de un nuevo centro de trabajo son: el código, la descripción y el tipo.

El formulario se compone de una sección principal, donde se introducen los siguientes datos relativos al centro de trabajo:

**Centros de trabajo**: indica el código del CdL;  
**Descripción del centro de trabajo**: indica la descripción del CdL;  
**Tiempo fijo**: indica que el centro de trabajo opera a tiempo fijo, el tiempo de procesamiento del artículo no depende del número de piezas;  
**Capacidad infinita**: indica que el centro de trabajo trabaja a capacidad infinita; por lo tanto, tiene una disponibilidad tan grande que se puede cargar continuamente;  
**Tipo de centro de trabajo**: indica si el centro de trabajo es interno o externo;  
**Máquina**: indica el código de la máquina asociada a ese centro de trabajo;  
**Número de máquinas**: indica el número de máquinas equivalentes;  
**Grupos de Mano de obra**: indica el código del grupo de mano de obra asociado al centro de trabajo;  
**Número de obreros**: indica el número de obreros del centro de trabajo;  
**Prioridad para el cálculo de disponibilidad del calendario**: indica qué criterio utilizar para calcular la disponibilidad en el tiempo de ese centro de trabajo;  
**Departamento**: indica el código del departamento en el que se inscribe el centro de trabajo;  
**% de utilización del centro de trabajo**: indica el porcentaje de eficiencia del centro de trabajo;  
**% mínimo de nivel de ocupación**: indica el porcentaje mínimo que debe estar libre en el centro de trabajo para poder asignarle otra actividad;  
**Hora de inicio de trabajo**: indica la hora de inicio de trabajo del centro de trabajo;  
**Hora de inicio de pausa**: indica la hora de inicio de pausa del centro de trabajo;  
**Hora de fin de pausa**: indica la hora de fin de pausa del centro de trabajo;  
**Hora de fin de trabajo**: indica la hora de fin de trabajo del centro de trabajo;  
**Horas diarias**: indica el total diario de horas trabajadas;  
**Turno de trabajo**: indica el código del turno de trabajo asociado al centro de trabajo;  
**Descripción del turno**: indica la descripción del turno de trabajo asociado al centro de trabajo;  
**Fecha de inserción**: indica la fecha de inserción del registro;  
**Fecha de última modificación**: indica la fecha de última modificación del registro;  
**Descripción de la máquina**: indica la descripción de la máquina;  
**Descripción del grupo de Mano de obra**: indica la descripción del grupo de mano de obra;  
**Descripción del departamento**: indica la descripción del departamento;  
**Sitio de producción**: indica el [Sitio de producción](/docs/configurations/parameters/production/production-orders-parameters/production-site) del centro de trabajo;  
**Descripción del sitio de producción**: indica la descripción del [Sitio de producción](/docs/configurations/parameters/production/production-orders-parameters/production-site) del centro de trabajo.

En la segunda sección es posible introducir excepciones respecto a los horarios de trabajo del centro de trabajo seleccionado.

<details>
<summary> Los siguientes campos se utilizan únicamente en el procedimiento de [Programación F.C.S](/docs/planning/ms-master-scheduling/fcs-scheduling) </summary>

**Tipo capacidad**: seleccione **Capacidad finita** para tener en cuenta la capacidad productiva del centro y los recursos asociados a él (máquinas, trabajadores, recursos genéricos). Para centros con máquinas, la capacidad se calcula considerando todas las máquinas del centro y los respectivos turnos de trabajo estándar y sus excepciones de calendario (ver histogramas de carga). Para centros sin máquinas, el límite de las tareas trabajables simultáneamente está dado por los trabajadores disponibles con la cualificación de procesamiento requerida por el centro (según los turnos de trabajo estándar y las excepciones de calendario). En este caso, la capacidad mostrada en los histogramas es el contenido del campo **Horas mediamente trabajadas** del centro de trabajo, que podría ser inferior en algún día a la carga de trabajo simulada, aun habiendo programado el centro a capacidad finita. Esto se debe a que la capacidad del centro mostrada en los histogramas no se calcula considerando a todos los trabajadores que poseen la cualificación de procesamiento requerida por el centro, ya que a menudo las personas tienen múltiples cualificaciones y no se dedican de manera exclusiva al centro de trabajo, por lo tanto, si la capacidad se calculase de este modo, sería poco realista y sobreestimada.  
Si se selecciona **Capacidad infinita**, el centro no debe tener ni maquinaria ni cualificaciones, y en este caso las tareas se programan considerando solo las restricciones de materiales y el turno de trabajo estándar y sus excepciones de calendario del centro. Esta elección tiene sentido cuando el centro siempre tiene recursos abundantes en comparación con las solicitudes y nunca es necesario esperar a que los recursos del centro se liberen. Utilice este valor para las fases de procesamiento que se realizarán en subcontratistas (trabajo por encargo de fase), a menos que se desee programar a capacidad finita al subcontratista. En el caso de una fase externa programada a capacidad infinita, la duración de la fase se da por las horas de la misma y las horas del turno del centro. Por ejemplo, si la fase dura 40 horas y el centro tiene un turno estándar de 8 horas, la fase tendrá una duración de 5 días laborables. En tal caso, podría ser necesario utilizar el indicador **Tiempo fijo** del centro para que la duración de la fase sea independiente de la cantidad.  
**Tipo de programación del centro**: seleccione **Estándar** si el centro utiliza máquinas que requieren trabajadores dedicados a tiempo total o parcial para funcionar, **Automático** si el centro utiliza máquinas que pueden funcionar sin trabajadores, **Conjunto** si no utiliza máquinas y el número de trabajadores asignados a la tarea es fijo, **Banco flexible** si no utiliza máquinas y el número de trabajadores asignados a la tarea puede variar de un valor mínimo, indicado por el campo número de trabajadores de la fase correspondiente, a un valor máximo indicado por el campo "número máximo de trabajadores" indicado en el centro.  
**Cualificación de preparación**: indica la cualificación de los trabajadores necesaria para realizar la preparación de las máquinas del centro;  
**Cualificación de procesamiento**: indica la cualificación de los trabajadores necesaria para realizar el procesamiento en el centro;  
**Número de obreros de preparación**: indica el número de trabajadores necesario para realizar la preparación de las máquinas del centro;  
**Número máximo de obreros de procesamiento**: indica el número máximo de trabajadores (solo para centros de tipo banco flexible). El programador empleará un número mínimo de trabajadores igual al número de operadores y un máximo de este valor;  
**Número máximo de tareas**: indica el máximo número de tareas activas simultáneamente programables. Si no se completa, el límite será dado por el número de máquinas, o el número de trabajadores necesarios, o los recursos de producción requeridos. Por ejemplo, si el centro tiene 10 máquinas, pero se quiere que no se utilicen más de 5 simultáneamente, se debe establecer este campo en 5;  
**Horas mediamente trabajadas**: indica las horas trabajadas en promedio en un día. Para los centros de trabajo que no tienen máquinas, este valor se considerará como capacidad, mientras que en el caso de centros con máquinas, se considerará la suma de las capacidades de las mismas, día a día, según los respectivos turnos de trabajo y excepciones de calendario;  
**Tiempo de buffer**: indica las horas de buffer deseadas. El programador intentará crear una cola de actividades en espera de ser trabajadas en este centro, equivalente al valor de este campo. Esto sirve para aplicar un principio clave de la "teoría de restricciones", a saber, que los centros de trabajo que son cuellos de botella nunca deben estar inactivos por falta de material para trabajar, como consecuencia de una mala programación de las actividades.

</details>

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funciones, botones y campos comunes](/docs/guide/common).