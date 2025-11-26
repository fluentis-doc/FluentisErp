---
title: Visualización Gantt
sidebar_position: 1
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La función del **diagrama de Gantt<!-- diagramma di Gantt -->** en Fluentis es una herramienta esencial para la planificación y el seguimiento de proyectos. Permite visualizar gráficamente las actividades programadas, destacando los plazos y las relaciones entre las distintas fases del proyecto.     
Los usuarios pueden gestionar los recursos, ajustar los plazos y optimizar los procesos productivos, mejorando la eficiencia y la eficacia operativa. Gracias a una interfaz intuitiva, el diagrama de Gantt<!-- diagramma di Gantt --> facilita la identificación de posibles retrasos o cuellos de botella, apoyando una gestión proactiva y estratégica de los proyectos.
:::

El **diagrama de Gantt<!-- diagramma di Gantt -->** permite representar gráficamente la ubicación en el tiempo de la orden de producción<!-- commessa di produzione --> hasta el detalle de cada fase de procesamiento individual y su progreso.
La herramienta permite gestionar múltiples simulaciones sin afectar la información de los documentos operativos, hasta el momento en que se confirma una de ellas.

En la cuadrícula de búsqueda es posible filtrar y visualizar las simulaciones generadas en una estructura de árbol, donde el padre es la simulación principal y las ramas son los snapshots, es decir, sub-simulaciones generadas a partir de la modificación de la simulación principal.

*Campos específicos<!-- Campi specifici -->*:

> **Número<!-- Numero -->**: indica el número asociado a la simulación Gantt;     
> **Nombre<!-- Nome -->**: indica el nombre asociado a la simulación Gantt (por defecto se propone el nombre del usuario y la fecha y hora de creación);    
> **Fecha de inserción<!-- Data inserimento -->**: indica la fecha de inserción de la simulación Gantt;      
> **Tipo**: indica el código del [Tipo de Simulación Gantt<!-- Tipo Simulazione Gantt -->](/docs/configurations/tables/production/crp-gantt-simulation-type);           
> **Descripción tipo<!-- Descrizione tipo -->**: indica la descripción del [Tipo de Simulación Gantt<!-- Tipo Simulazione Gantt -->](/docs/configurations/tables/production/crp-gantt-simulation-type);        
> **Bloquear documento<!-- Blocca documento -->**: indica que todos los documentos que están incluidos en la creación de la simulación Gantt se bloquean;  
> **Validar<!-- Valida -->**: indica que la simulación ha sido confirmada y, por tanto, las modificaciones efectuadas en el Gantt se han reflejado en los documentos asociados;      
> **Snapshot**: si está activo, indica que este es un *Tipo de Simulación Gantt<!-- Tipo Simulazione Gantt -->* de tipo Snapshot;
> **Operador<!-- Operatore -->**: indica el usuario que realizó la simulación Gantt.