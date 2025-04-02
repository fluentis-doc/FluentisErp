---
title: wbs assegnazione risorse
sidebar_position: 3
---

## wbs assegnazione risorse (WBS assegnazione risorse)
La funcionalidad de wbs assegnazione risorse permite asociar recursos a los WBS de un proyecto, sin abrir el proyecto y utilizando directamente el calendario para visualizar los compromisos efectivos del recurso.  
Está disponible para la licencia Fluentis Universal y se puede abrir desde el área de Gestión de proyectos > wbs assegnazione risorse.

# Filtros (Filtri)
Al abrir, será necesario seleccionar los calendarios de los recursos en los que se desea trabajar, desde la pestaña **Filtros** presente en la parte inferior izquierda.  
Haga clic en buscar para ver todos los recursos disponibles y arrastre a la sección de la derecha aquellos que le interesen.

Luego será necesario indicar los proyectos en los que se quiere trabajar, cuyo detalle de la estructura de proyecto será visible en la pestaña **Calendario por proyecto** situada en la parte inferior junto a los filtros.  
El indicador **WBS con días restantes** mostrará los proyectos que tienen la cantidad de “Días asignados” superior a la cantidad de “Días previstos”.

**filtri generali**:  
En esta pestaña es posible seleccionar:  
- qué documentos se visualizarán en los calendarios: Solicitudes de intervención, Intervenciones planificadas, Intervención, Declaración de actividades, Recursos asignados al proyecto WBS, Vacaciones.  
- La opción **resaltar días de recursos con disponibilidad** colorea el fondo de los días en los que no toda la franja horaria del recurso ha sido asignada.  
Los días con disponibilidad se colorearán de turquesa.

Cada tipo de documento en el calendario puede ser coloreado de manera diferente para facilitar su distinción.  

La configuración debe hacerse en las tablas de tipos de documentos, por ejemplo:  
tabla Tipos de intervención – para cada tipo de intervención se puede gestionar un color diferente.  
De la misma manera se procede para las solicitudes de intervención, intervenciones planificadas, declaración de actividades.

Solo las citas de los recursos asignados en el proyecto no tienen opción de selección de color, que corresponderá al color del calendario del recurso. Estas citas pueden ser identificadas por la sigla “PR” (Project resource) después de la hora.

En caso de solicitudes de vacaciones y permisos, el fondo cambiará a naranja. Si está vinculada la actividad generada por la solicitud de vacaciones, se mostrará según la opción **vacaciones** en los filtros “Documentos”.

# Calendario por proyecto (Calendario per progetto)
Desde esta vista será posible arrastrar los WBS individuales al calendario de uno o más recursos y decidir el tipo de documento a crear.  
Se visualiza la estructura completa del proyecto, con número de línea, número WBS, Descripción WBS, Fecha de inicio y Fecha de finalización, Días asignados, Días previstos, Días planificados, Días ejecutados.  
A través de los botones en la Ribbon bar, es posible **Expandir** y **Comprimir** toda la estructura.

Seleccione un WBS de último nivel y arrástrelo hacia el día deseado en el calendario.  
Se abrirá una ventana donde será posible indicar el recurso (que se propone automáticamente según el calendario en el que se está asignando la cita), los horarios de inicio-fin y pausa (obtenidos del turno del recurso), y el documento a generar:  
- Asignar el recurso al proyecto WBS  
- Solicitud de intervención  
- Intervención planificada  
- Intervención

La cita puede ser única o recurrente, configurada a través del botón **ricorrenza**:  
- diaria: cada *N.* días o cada día  
- semanal: cada *N.* semanas y en determinados días  
- mensual: día específico del mes, cada *N.* meses o *primer/bis/ter/quater/último* día cada *N.* meses  
- anual: cada *N.* años o fecha específica o cada *primer/bis/ter/quater/último* día del mes específico.

Fin de recurrencia indica cuántas citas se asignarán con la regla indicada arriba.  
- ninguna fecha de fin  
- Fin después: *N* recurrencias. Se propone por defecto el valor presente en "Días Previsto"  
- Fin para: *en la fecha*

Según el tipo de documento a generar, se llevarán a cabo las siguientes operaciones:  
- Asignación de recurso al proyecto WBS: se insertará una línea en la pestaña “Recursos” para ese WBS del proyecto.  
- Solicitud de intervención: se insertará una línea en la pestaña “Recursos” para ese WBS del proyecto y automáticamente se generará la solicitud de intervención.  
- Intervención planificada: se insertará una línea en la pestaña “Recursos” para ese WBS del proyecto y automáticamente se generará la intervención planificada.  
- Intervención: se insertará una línea en la pestaña “Recursos” para ese WBS del proyecto, se generará la intervención planificada y, en consecuencia, la intervención efectiva.

En caso de otros documentos ya presentes para el día, se preguntará si desea superponer la cita.  

Si hay múltiples citas en el mismo día y no todas pueden visualizarse, se mostrará una flecha que abrirá la visualización detallada del día.  

Las citas muestran 3 informaciones principales:  
- hora de inicio y fin – descripción tipo documento  
- cliente  
- WBS del proyecto  
Al pasar el mouse sobre la cita, se mostrará una tooltip con más detalles.  
Con doble clic es posible abrir el documento relacionado.  

En el calendario también está disponible el procedimiento de arrastrar y soltar (drag&drop), por lo que al arrastrar una cita de un día a otro, o de un recurso a otro, se actualizarán automáticamente en los documentos correspondientes.  
Esta operación no está permitida en intervenciones con estado diferente de insertado y en actividades facturadas.

**calendario per progetto**: debajo de la estructura del proyecto, hay un expander con un pequeño calendario dedicado solo al proyecto, que muestra las citas por proyecto y no por recurso.