---
title: Crear SAL por Proyecto
sidebar_position: 1
ai_generated: true
---

Este procedimiento permite crear un estado de avance de trabajos<!-- stato avanzamento lavori --> a partir de un proyecto<!-- progetto -->. En el área de filtro es posible indicar una serie de filtros para buscar proyectos<!-- progetti --> de manera más precisa.
Una vez establecidos los filtros, basta hacer clic en **Buscar<!-- Ricerca -->** en la ribbon bar para que los resultados aparezcan en la cuadrícula inferior. Para realizar el procedimiento, seleccione una fila de la cuadrícula y haga clic en el botón **Crear SAL por proyecto<!-- Crea SAL per progetto -->** en la ribbon bar. Esta acción abrirá una ventana donde se debe ingresar:

**Tipo**: contiene el tipo de estado de avance<!-- stato avanzamento --> que se desea crear;

**Desde fecha<!-- Da data -->**: indica la fecha desde la cual empezar a recopilar los datos para este estado de avance de trabajos<!-- stato avanzamento lavori -->;

**Hasta fecha<!-- A data -->**: indica la fecha hasta la cual recopilar los datos para el avance;

**Fecha de confirmación<!-- Data conferma -->**: indica la fecha de confirmación del estado;

**Comparable<!-- Comparabile -->**: indica si el documento podrá ser comparado en el futuro.

Después de confirmar, se le preguntará si desea o no abrir el [Estado de avance de trabajos<!-- Stato avanzamento lavori -->](/docs/project-management/work-project-status/new-work-project-status/) creado.

:::note[Criterios para obtención de costos específicos de recursos en el cálculo de SAL de proyecto<!-- Criteri ottenimento costi specifici risorse in calcolo SAL di progetto -->]
La búsqueda del costo correspondiente se realizará con la siguiente lógica:
1. ¿La fecha de inicio de la actividad corresponde a uno de los días marcados en el Calendario de días no laborables?
> Si es así, se asignará el valor establecido en el “Tipo costo: Festivo<!-- Tipo costo: Festività -->”.

2. Si la fecha de inicio no corresponde a los días del Calendario de días no laborables, se continúa la comprobación en la cuadrícula de Días laborables previstos para el recurso.

3. Si la fecha de inicio no corresponde ni a festivos ni a días laborables para el recurso, se utilizará el costo marcado como “Default día no laborable” si está presente. En caso de no existir ese costo marcado, se tomará como alternativa el costo “Extraordinario”.

4. Si la fecha de inicio corresponde a uno de los días laborales ordinarios, se verifica el número de horas previsto en el turno.
> Las primeras, por ejemplo, 8 horas previstas en el turno se verifican si corresponden al turno principal  
>> Si el turno principal está marcado como “nocturno”, se considerará el costo nocturno; en caso contrario, se considera el costo base del recurso;  
>>> Si hay horas extra, superiores a las 8 horas, las horas excedentes se calculan con el costo:
>>>- si el turno es nocturno se considera el extraordinario nocturno
>>>- de lo contrario se considera el extraordinario diurno
5. Si la fecha de inicio no corresponde al turno principal, se verifica si corresponde al turno alternativo. Entonces, por ejemplo, se consideran las primeras 8 horas previstas para el turno
> si el turno alternativo tiene un costo dedicado, se considera este valor
> si el turno alternativo está marcado como “nocturno”, se considerará el costo nocturno; de lo contrario, se considera el costo base del recurso;

> Si hay horas extra, superiores a las 8 horas, las horas excedentes se calculan con el costo:
>- si el turno alternativo es nocturno se considera el extraordinario nocturno
>- de lo contrario se considera el extraordinario diurno

:::

:::note[Nota]
En el caso de horas de servicio que están dentro del límite diario de horas laborables del recurso, pero superan la franja horaria prevista, se contabilizarán igualmente como "ordinarias" y no "extraordinarias".
:::