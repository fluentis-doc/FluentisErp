---
title: Asignación de recursos WBS
sidebar_position: 3
ai_generated: true
---

## Asignación de recursos WBS<!-- WBS assegnazione risorse -->
La funcionalidad de Asignación de recursos WBS<!-- WBS Assegnazione risorse --> permite asociar los recursos<!-- risorse --> a las WBS de proyecto, sin abrir el proyecto y utilizando directamente el calendario para visualizar los compromisos efectivos del recurso<!-- risorsa -->.
Está disponible para la licencia Fluentis Universal y se puede abrir desde el área Gestión de proyectos > Asignación de recursos WBS<!-- Gestione progetti > WBS Assegnazione risorse -->.

# Filtros<!-- Filtri -->
Al abrir la pantalla será necesario seleccionar los calendarios de los recursos<!-- risorse --> sobre los cuales se desea trabajar, desde la pestaña **Filtros<!-- Filtri -->** ubicada en la parte inferior izquierda.
Haga clic en buscar<!-- ricerca --> para ver todos los recursos<!-- risorse --> disponibles y arrastre al recuadro derecho aquellos de interés.

Luego será necesario indicar los proyectos en los que se desea trabajar, cuyo detalle de estructura de proyecto se visualizará en la pestaña **Calendario por proyecto<!-- Calendario per progetto -->** situada en la parte inferior junto a los filtros<!-- filtri -->.
La opción **WBS con días restantes<!-- WBS con giorni residui -->** mostrará los proyectos que tienen la cantidad de “Días asignados<!-- Giorni assegnati -->” superior a la cantidad de “Días previstos<!-- Giorni previsti -->”.

**Filtros generales<!-- Filtri generali -->**: 
En esta pestaña es posible seleccionar:
- qué documentos se mostrarán en los calendarios: Solicitudes de intervención, Intervenciones planificadas, Intervención, Declaración de actividad, Recursos asignados a Proyecto WBS, Vacaciones. 
- La opción **resaltar los días de los recursos que tienen disponibilidad** colorea el fondo de los días donde no toda la franja horaria del recurso ha sido asignada. 
Los días con disponibilidad se colorearán de turquesa.

Cada tipo de documento en el calendario puede tener un color diferente para facilitar su distinción.

La configuración debe realizarse en las tablas de tipos de documento, por ejemplo:
tabla Tipos de intervención – para cada tipo de intervención es posible gestionar un color diferente.
De la misma manera se procede para las solicitudes de intervención, intervenciones planificadas, declaración de actividad.

Solo las citas de los recursos asignados en el proyecto no pueden elegir color, ya que corresponderá al color del calendario del recurso. Estas citas pueden identificarse por la sigla "PR" (Project resource) después del horario.

En caso de solicitudes de vacaciones y permisos, el fondo se cambiará a naranja. Si la actividad generada por la solicitud de vacaciones está vinculada, se mostrará según la opción **vacaciones** en los filtros "Documentos".

# Calendario por proyecto<!-- Calendario per progetto -->
Desde esta pantalla será posible arrastrar las WBS individuales al calendario de uno o más recursos<!-- risorse -->, y decidir el tipo de documento a crear.
Se muestra la estructura completa del proyecto, con número de línea, número WBS, Descripción WBS, Fecha de inicio y fecha de fin, Días asignados<!-- Giorni assegnati -->, Días previstos<!-- Giorni previsti -->, Días planificados, Días ejecutados.
A través de los botones en la Ribbon bar es posible **Expandir<!-- Espandere -->** y **Comprimir<!-- Comprimere -->** toda la estructura.

Seleccione una WBS de último nivel y arrástrela hacia el día deseado en el calendario.
Se abrirá una pantalla donde podrá indicar el recurso<!-- risorsa --> (propuesto automáticamente según el calendario en que se está asignando la cita), los horarios de inicio-fin y pausa (obtenidos del turno del recurso<!-- risorsa -->), y el documento a generar:
- Asignar el recurso al proyecto WBS
- Solicitud de intervención
- Intervención planificada
- Intervención

La cita podrá ser única o recurrente, configurada mediante el botón específico **Recurrencia<!-- Ricorrenza -->**:
- diaria: cada *N.* días o cada día
- semanal: cada *N.* semanas y en determinados días
- mensual: día específico del mes, cada *N.* meses o *primer/bis/ter/quater/último* día cada *N.* meses
- anual: cada *N.* años o fecha específica o cada *primer/bis/ter/quater/último* día de un mes específico.

Fin de recurrencia indica cuántas citas se asignarán con la regla indicada anteriormente.
- sin fecha de finalización
- Fin después de: *N* repeticiones. Por defecto se propone el valor presente en "Días previstos<!-- Giorni Previsti -->"
- Fin en: *a la fecha*

Según el tipo de documento a generar, se realizarán las siguientes operaciones: 
-	Asignación del recurso al proyecto WBS: se insertará una fila en la pestaña "Recursos" para esa WBS del proyecto.
-	Solicitud de intervención: se insertará una fila en la pestaña "Recursos" para esa WBS del proyecto y automáticamente se generará la solicitud de intervención.
-	Intervención planificada: se insertará una fila en la pestaña "Recursos" para esa WBS del proyecto y automáticamente se generará la intervención planificada.
-	Intervención: se insertará una fila en la pestaña "Recursos" para esa WBS del proyecto, se generará la intervención planificada y en consecuencia la intervención efectiva.

En caso de otros documentos ya presentes para el día, se solicitará si se desea superponer la cita.

Si hay varias citas en el mismo día y no todas pueden visualizarse, se mostrará una flecha que abrirá la vista detallada del día.

Las citas muestran 3 informaciones principales: 
-	horario de inicio y fin – descripción del tipo de documento
-	cliente
-	WBS del proyecto
poniendo el cursor sobre la cita se mostrará un tooltip con más detalles.
Con doble clic es posible abrir el documento correspondiente.

En el calendario también está disponible el procedimiento de arrastrar y soltar (drag&drop), por lo que al arrastrar una cita de un día a otro, o de un recurso<!-- risorsa --> a otro, se actualizarán automáticamente en los documentos relevantes.
Esta operación no está permitida en las intervenciones con estado distinto a insertado, y en las actividades facturadas.

**Calendario por proyecto**: debajo de la estructura del proyecto, hay un expander con un pequeño calendario dedicado solo al proyecto, que muestra las citas por proyecto y no por recurso.