---
title: parametri fabbisogno materiali
sidebar_position: 7
tags: [Necesidad de materiales (Fabbisogno materiali)]
---

A través de esta ventana se configuran los parámetros que conciernen a algunas de las configuraciones básicas del área de Producción.

**primo giorno della settimana cal. capacità produttiva**: es posible decidir qué día se considerará como el primero de la semana en el [Calendario de capacidades productivas (Calendario delle capacità produttive)](/docs/configurations/tables/production/factory-calendar), es decir, en el calendario de los centros de trabajo. Generalmente se establece el lunes.

**ultimo ordine pianificato inserito per l'anno in corso**: representa el último número secuencial utilizado en el año en curso para los pedidos planificados.

**colori tipologie documento**: permite establecer el color de fondo y del texto para los diferentes tipos de pedido: de Compra, de Producción o de Cuenta de Trabajo, en retraso y/o vencidos.

## Parámetros para la liberación de pedidos planificados (Parametri per il rilascio ordini pianificati)

En esta sección, el usuario puede configurar el tipo de solicitud de compra y el tipo de pedido de cuenta de trabajo (si está cerrado, por lo tanto, no se puede modificar más o está abierto y, por ende, modificable) que deben generarse automáticamente durante la liberación de los pedidos planificados de compra y de cuenta de trabajo, respectivamente.

**controllo terzista obbligatorio per le fasi esterne**: si está activo, en caso de que no se indique el tercerista en una fase externa, esto será señalado con el **Color de texto de la línea del pedido** indicado a continuación.

**gestione semplificata della produzione**: está obsoleto y se utiliza solo en versiones anteriores.

**mantenimento legame tra ordini di una commessa**: si está activo, permite, aprovechando también los indicadores inmediatamente siguientes, decidir que si se modifica manualmente la fecha de un pedido planificado, la procedure realice la modificación correspondiente también en los pedidos planificados adyacentes al que sufrió la modificación inicial.

**Número de días para el cálculo de disponibilidad (Numero giorni per il calcolo disponibilità)**: indica hasta dónde avanzar para la evaluación del cálculo de la disponibilidad, sin considerar pedidos y necesidades que superen esa fecha.

**data impegno materiali alla fase di scarico materiali**: si está activo, la fecha de uso de material indicada en los pedidos planificados será igual a la fecha de inicio más tardía entre todas las fases, lo que significa que será igual a la fecha de inicio de la última fase. Mientras que, si el indicador no está activo, la fecha de uso de material indicada en los pedidos planificados será igual a la fecha de inicio del pedido, es decir, a la fecha de inicio de la primera fase.

**giorni anticipo impegno materiali**: el valor indicado permite adelantar ese número de días la disponibilidad del material respecto al inicio de la operación (tanto en los pedidos planificados de producción como en los pedidos de producción), con el fin de permitir a la logística llevar el material a tiempo a producción. Esto se toma en cuenta en los siguientes procedimientos: todas las programaciones "lo más pronto posible", "lo más tarde posible", "a capacidad finita", "MRP", "Finalización de datos de pedido", tanto en pedidos planificados como en pedidos de producción, "Recalcular fecha de inicio", tanto en pedidos planificados como en pedidos de producción, todos los procedimientos del CRP ("Gantt", "Capacidades de los centros de trabajo" y "Secuencia de fases") que operan sobre un cambio de fecha de inicio o fin de la fase del pedido.

**giorni storico m.r.p. da mantenere**: permite indicar cuál es el período en días por el cual se mantendrán los resultados de los procesos M R P dentro del historial. Cuando un proceso supera el número de días ingresado en este campo, este será eliminado del historial en la siguiente elaboración de M R P. Si se deja el campo vacío, no se eliminará ninguna elaboración del historial.

## Almacenes para programación de pedidos (Magazzini di schedulazione ordini)

La cuadrícula es una visualización simple de la lista de almacenes cuyos disponibilidades deben ser controladas. Esta lista se establece en el formulario llamado *calcolo disponibilità* que se encuentra dentro de las Utilidades del sistema de gestión.

## Parámetros Gantt (Parametri Gantt)

Permite establecer parámetros predeterminados para la gestión del formulario de Gantt (*tipo simulazione gantt* y *tipo simulazione snapshot*).

## Parámetros de Cálculo de Factibilidad (Parametri Calcolo Fattibilità)

Permite ingresar las indicaciones para la activación y visualización de la **fattibilità** de las fases de trabajo.

Para la versión de producto actual, la única activación posible es en la gestión de *sequenza fasi*. En versiones posteriores se introducirán también los otros procedimientos.

Es posible activar el control de factibilidad:

- **considera materiali**: habilita el botón *Detalle de Factibilidad de materiales (Dettaglio Fattibilità materiale)* y el campo *Factibilidad de materiales (Fattibilità materiali)* en la cuadrícula de procedimientos activos en el cuadro **calcolo fattibilità da applicare in**;  
- **considera fasi precedenti**: habilita el botón *dettaglio fattibilità fasi* y el campo *Factibilidad de fases (Fattibilità fasi)* en la cuadrícula de procedimientos activos en el cuadro **calcolo fattibilità da applicare in**.

## Cálculo de factibilidad a aplicar en (Calcolo fattibilità da applicare in) 
Permite habilitar la factibilidad en los procedimientos individuales:
- Secuencia de fases (Sequenza fasi)
- Capacidades de los centros de trabajo (Capacità centri di lavoro)
- Liberación de pedidos planificados (Rilascio ordini pianificati)
- Lista de extracción de materiales (Lista prelievo materiali)
- Filtro de pedidos de producción (Filtro ordini di produzione)

## Colores de cálculo de factibilidad (Colori calcolo fattibilità) 

Se pueden establecer colores que destacan diferentes informaciones sobre las disponibilidades de los materiales a utilizar:   
- *materiale non disponibile*: indica que no hay ningún material disponible, ni siquiera en cantidad parcial;   
- *materiale disponibile parzialmente*: indica que tenemos al menos una cantidad parcial de uno de los materiales, pero no la disponibilidad completa de todos;   
- *materiale disponibile*: indica que tengo la disponibilidad de todos los materiales para las cantidades totales;   
- *materiale non necessario*: indica que no se requiere ningún material;   

y sobre el estado de avance de las fases de trabajo anteriores a la fase analizada:   
- *fase precedente non iniziata*: indica que la fase anterior a la considerada no ha sido iniciada;   
- *fase precedente iniziata*: indica que la fase anterior a la considerada ha sido iniciada, pero no completada;   
- *fase precedente completata*: indica que la fase anterior a la considerada ha sido completada;   
- *fase iniziata*: indica que la fase considerada ha iniciado.   

Para todo lo no detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).