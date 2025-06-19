---
title: Parámetros de Requisitos de Materiales
sidebar_position: 7
tags: [Requisitos de Materiales]
---

A través de esta ventana se configuran los parámetros que conciernen a algunas de las configuraciones básicas del área de Producción.

**Primer día de la semana para calcular la capacidad productiva**: es posible decidir qué día se considerará como el primero de la semana en el [Calendario de capacidad de producción](/docs/configurations/tables/production/factory-calendar), es decir, en el calendario de los centros de trabajo. Generalmente se establece el lunes.

**El último pedido planificado ingresado para este año**: representa el último número secuencial utilizado en el año en curso para los órdenes planificadas.

**Colores de tipo de documento**: permite establecer el color de fondo y del texto para los diferentes tipos de pedido: de Compra, de Producción o de Subcontratista, en retraso y/o vencidos.

## Parámetros para la liberación de órdenes planificadas

En esta sección, el usuario puede configurar el tipo de solicitud de compra y el tipo de pedido de subcontratista (si está cerrado, por lo tanto, no se puede modificar más o está abierto y, por ende, modificable) que deben generarse automáticamente durante la liberación de los órdenes planificadas de compra y de subcontratista, respectivamente.

**Verificación obligatoria para contratistas en las fases externas**: si está activo, en caso de que no se indique el tercerista en una fase externa, esto será señalado con el **Color de texto de la línea del pedido** indicado a continuación.

**Gestión simplificada de la producción**: está obsoleto y se utiliza solo en versiones anteriores.

**Mantener el vínculo entre los pedidos de una orden de trabajo**: si está activo, permite, aprovechando también los indicadores inmediatamente siguientes, decidir que si se modifica manualmente la fecha de un pedido planificado, la procedure realice la modificación correspondiente también en los órdenes planificadas adyacentes al que sufrió la modificación inicial.

**Número de días para calcular disponibilidad**: indica hasta dónde avanzar para la evaluación del cálculo de la disponibilidad, sin considerar pedidos y necesidades que superen esa fecha.

**Fecha de compromiso de materiales para la fase de descarga de materiales**: si está activo, la fecha de uso de material indicada en los órdenes planificadas será igual a la fecha de inicio más tardía entre todas las fases, lo que significa que será igual a la fecha de inicio de la última fase. Mientras que, si el indicador no está activo, la fecha de uso de material indicada en los órdenes planificadas será igual a la fecha de inicio del pedido, es decir, a la fecha de inicio de la primera fase.

**Días anticipados para el compromiso de materiales**: el valor indicado permite adelantar ese número de días la disponibilidad del material respecto al inicio de la operación (tanto en los órdenes planificadas de producción como en los órdenes de producción), con el fin de permitir a la logística llevar el material a tiempo a producción. Esto se toma en cuenta en los siguientes procedimientos: todas las programaciones "lo más pronto posible", "lo más tarde posible", "a capacidad finita", "MRP", "Finalización de datos de pedido", tanto en órdenes planificadas como en órdenes de producción, "Recalcular fecha de inicio", tanto en órdenes planificadas como en órdenes de producción, todos los procedimientos del CRP ("Gantt", "Capacidades de los centros de trabajo" y "Secuencia de fases") que operan sobre un cambio de fecha de inicio o fin de la fase del pedido.  

**Días restantes de la historia del M.R.P.**: permite indicar cuál es el período en días por el cual se mantendrán los resultados de los procesos M R P dentro del historial. Cuando un proceso supera el número de días ingresado en este campo, este será eliminado del historial en la siguiente elaboración de M.R.P. Si se deja el campo vacío, no se eliminará ninguna elaboración del historial.

## Almacenes para la programación de pedidos

La cuadrícula es una visualización simple de la lista de almacenes cuyos disponibilidades deben ser controladas. Esta lista se establece en el formulario llamado *Calcular Disponibilidad* que se encuentra dentro de las Utilidades del sistema de gestión.

## Parámetros Gantt 

Permite establecer parámetros predeterminados para la gestión del formulario de Gantt (*Tipo de Simulación de Gantt* y *Tipo de simulación de instantánea*).

## Parámetros de Cálculo de Viabilidad

Permite ingresar las indicaciones para la activación y visualización de la **Viabilidad** de las fases de trabajo.

Para la versión de producto actual, la única activación posible es en la gestión de *secuencia de fases*. En versiones posteriores se introducirán también los otros procedimientos.

Es posible activar el control de viabilidad:

- **Considerar materiales**: habilita el botón *Detalle de viabilidad de materiales* y el campo *Viabilidad de materiales* en la cuadrícula de procedimientos activos en el cuadro **Cálculo de viabilidad que se aplicará en**;  
- **Considere las fases anteriores**: habilita el botón *Fases de detalle de viabilidad* y el campo *Fases de detalle de viabilidad* en la cuadrícula de procedimientos activos en el cuadro **Cálculo de viabilidad que se aplicará en**.

## Cálculo de viabilidad que se aplicará en 
Permite habilitar la viabilidad en los procedimientos individuales:
- Secuencia de fases 
- Capacidad del Centro de Trabajo
- Liberar Órdenes Planificadas
- Lista de materiales para picking
- Filtro de órdenes de producción 

## Cálculo de viabilidad de colores 

Se pueden establecer colores que destacan diferentes informaciones sobre las disponibilidades de los materiales a utilizar:   
- *Material no disponible*: indica que no hay ningún material disponible, ni siquiera en cantidad parcial;   
- *Material parcialmente disponible*: indica que tenemos al menos una cantidad parcial de uno de los materiales, pero no la disponibilidad completa de todos;   
- *Material disponible*: indica que tengo la disponibilidad de todos los materiales para las cantidades totales;   
- *Material no necesario*: indica que no se requiere ningún material;   

y sobre el estado de avance de las fases de trabajo anteriores a la fase analizada:   
- *Fase anterior no iniciada*: indica que la fase anterior a la considerada no ha sido iniciada;   
- *Fase anterior iniciada*: indica que la fase anterior a la considerada ha sido iniciada, pero no completada;   
- *Fase anterior completada*: indica que la fase anterior a la considerada ha sido completada;   
- *Fase iniciada*: indica que la fase considerada ha iniciado.   

Para todo lo no detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).