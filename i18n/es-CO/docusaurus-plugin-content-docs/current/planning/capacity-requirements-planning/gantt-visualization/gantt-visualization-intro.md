---
title: visualizzazione gantt
sidebar_position: 1
---

:::important ¿Para qué sirve? (A cosa serve)
La función del **diagrama de Gantt (diagramma di Gantt)** en Fluentis es una herramienta esencial para la planificación y el monitoreo de proyectos. Permite visualizar gráficamente las actividades programadas, destacando los tiempos y las relaciones entre las diversas fases del proyecto.  
Los usuarios pueden gestionar los recursos, ajustar los plazos y optimizar los procesos productivos, mejorando la eficiencia y la efectividad operativa. Gracias a una interfaz intuitiva, el diagrama de Gantt facilita la identificación de posibles retrasos o cuellos de botella, apoyando una gestión proactiva y estratégica de los proyectos.
:::

El **diagrama de Gantt (diagramma di Gantt)** permite representar gráficamente la ubicación en el tiempo del pedido de producción hasta el detalle de cada fase de trabajo y su avance.  
La herramienta permite gestionar múltiples simulaciones sin afectar la información de los documentos operativos, hasta el momento de la confirmación de una de ellas.

En la cuadrícula de búsqueda, es posible filtrar y visualizar las simulaciones generadas en una estructura en árbol, donde el padre es la simulación principal, mientras que las ramas son los snapshots, es decir, las sub-simulaciones surgidas de la modificación de la simulación principal.

*Campos específicos (Campi specifici)*:

> **numero**: indica el número asociado a la simulación Gantt;  
> **nome**: indica el nombre asociado a la simulación Gantt (de forma predeterminada se propone el nombre del usuario y la fecha y hora de creación);  
> **data inserimento**: indica la fecha de inserción de la simulación Gantt;  
> **tipo**: indica el código del [Tipo de Simulación Gantt (Tipo Simulazione Gantt)](/docs/configurations/tables/production/crp-gantt-simulation-type);  
> **descrizione tipo**: indica la descripción del [Tipo de Simulación Gantt (Tipo Simulazione Gantt)](/docs/configurations/tables/production/crp-gantt-simulation-type);  
> **blocca documento**: indica que todos los documentos que están incluidos en la creación de la simulación Gantt quedan bloqueados;  
> **valida**: indica que la simulación ha sido confirmada y, por lo tanto, los cambios realizados en el Gantt se han trasladado a los documentos vinculados;  
> **snapshot**: si está activo, indica que este es un *tipo simulazione gantt* de tipo Snapshot;  
> **operatore**: indica el usuario de la simulación Gantt.