---
title: crea sal per progetto
sidebar_position: 1
---

Este procedimiento permite crear un estado de avance de trabajos a partir de un proyecto. En el área de filtro se pueden indicar una serie de filtros para buscar de manera más precisa los proyectos.  
Una vez ingresados los filtros, basta con hacer clic en **ricerca** en la barra de la cinta para que aparezcan los resultados en la cuadrícula debajo. Para realizar el procedimiento, seleccione una fila en la cuadrícula y haga clic en el botón **crea sal per progetto** en la barra de la cinta. Esta acción abrirá una ventana en la que se debe ingresar:

**tipo**: contiene la tipología de estado de avance que se quiere crear;  

**da data**: indica la fecha a partir de la cual comenzar a recopilar datos para este estado de avance de trabajos;  

**a data**: indica la fecha hasta la cual recopilar los datos para el avance;  

**data conferma**: indica la fecha de confirmación del estado;  

**comparabile**: indica si el documento podrá ser comparado en el futuro.  

Después de confirmar, se me preguntará si quiero o no abrir el [Estado de avance de trabajos (Stato avanzamento lavori)](/docs/project-management/work-project-status/new-work-project-status/) creado.

:::note[Criterios para obtener costos específicos de recursos en el cálculo SAL de proyecto (Criteri ottenimento costi specifici risorse in calcolo SAL di progetto)]
La búsqueda del costo correspondiente se llevará a cabo con la siguiente lógica:  
1. ¿La fecha de inicio de la actividad cae en uno de los días marcados en el Calendario de días no laborables?  
> Si es así, se asignará el valor configurado en "Tipo de costo: Festividades (Tipo costo: Festività)"

2. Si la fecha de inicio no cae en los días del Calendario de días no laborables, se continúa el control en la cuadrícula de Días laborables previstos para el recurso.

3. Si la fecha de inicio no corresponde a festivos ni a días laborables para el recurso, se utilizará el costo marcado como "Default día no laborable (Default giorno non lavorativo)" si está presente. En caso de que no haya un costo así marcado, se tomará como alternativa el costo "Extraordinario (Straordinario)".  

4. Si la fecha de inicio corresponde a uno de esos días laborales ordinarios, se verifica el monto de horas previsto en el turno.  
> Por ejemplo, se verifica si las primeras 8 horas previstas en el turno caen dentro del turno principal.  
>> Si el turno principal está marcado como "nocturno (notturno)", se considera el costo nocturno; si no es nocturno, se considera el costo de cabecera del recurso;  
>>> Si hay horas más allá de las 8 horas, las horas excedentes se calcularán con el costo:  
>>> - si el turno es nocturno, se considera el extraordinario nocturno;  
>>> - de lo contrario, se considera el extraordinario diurno.  

5. Si la fecha de inicio no cae dentro del turno principal, se verifica si corresponde al turno alternativo. Entonces, por ejemplo, se consideran las primeras 8 horas previstas para el turno.  
> Si el turno alternativo tiene un costo dedicado, se considera este valor.  
> Si el turno alternativo está marcado como "nocturno (notturno)", se considera el costo nocturno; si no es nocturno, se considera el costo de cabecera del recurso;  

> Si hay horas más allá de las 8 horas, las horas excedentes se calcularán con el costo:  
>- si el turno alternativo es nocturno, se considera el extraordinario nocturno;  
>- de lo contrario, se considera el extraordinario diurno.  

:::

:::note[Nota (Nota)]
En el caso de horas de servicio que caen dentro de la carga horaria diaria laboral del recurso, pero superan el horario, se contabilizarán como "ordinarias" y no "extraordinarias".
:::