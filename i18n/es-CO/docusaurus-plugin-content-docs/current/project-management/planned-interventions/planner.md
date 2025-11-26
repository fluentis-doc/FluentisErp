---
title: Planificador
sidebar_position: 2
ai_generated: true
---

## Planificador<!-- Planner -->
El planificador<!-- planner --> está disponible para la licencia Fluentis Universal y se puede abrir desde el área Gestión de proyectos > Planificador<!-- Planner -->, y permite visualizar el calendario relacionado con recursos, proyectos y clientes.  

# Filtros
Al abrirlo, se propone el calendario correspondiente al recurso del usuario actual, pero es posible visualizar varios calendarios simultáneamente:

Abra la pestaña relacionada con los filtros a la izquierda, pestaña **Recursos<!-- Risorse -->**, haga clic en buscar para ver todos los recursos disponibles y arrastre al recuadro de la derecha los que sean de interés.
De manera análoga funcionan los filtros para **Cliente** y **Proyecto**, que se aplican a los calendarios visualizados.

En la pestaña **Documentos** es posible seleccionar qué documentos se mostrarán en los calendarios.  
Para cada uno de estos documentos se pueden aplicar además filtros adicionales específicos, iguales a los disponibles en las áreas individuales.

En los **Filtros generales** hay opciones para:
- mostrar citas superpuestas
- citas no confirmadas
- Resaltar los días en los que no se ha asignado toda la franja horaria del recurso. Los días con disponibilidad<!-- disponibilità --> se mostrarán en turquesa.

Para eliminar uno de los elementos seleccionados previamente en el filtro, selecciónelo y presione la tecla SUPR del teclado. Para borrar todos los filtros utilice el botón **borrar filtros<!-- cancella filtri -->**  

**Periodo<!-- Periodo -->**: permite seleccionar en el calendario el periodo a visualizar.  

# Calendario
Cada tipo de documento en el calendario puede colorearse de manera diferente para facilitar la distinción. La configuración debe hacerse en las tablas individuales de los tipos de documentos.
Solo las citas de los recursos asignados al proyecto no tienen opción de color, éste corresponderá al color del calendario del recurso (es decir, el color de la barra donde aparece el nombre del recurso). Estas citas pueden identificarse por la sigla “PR” (Project resource) que aparece después del horario.
 
En presencia de solicitudes de vacaciones y permisos, el fondo se cambiará a naranja. Si se vincula la actividad generada por la solicitud de vacaciones, se mostrará según la opción “vacaciones” en los filtros “Documentos”.
Si hay varias citas en el mismo día y no todas pueden visualizarse, se mostrará una flecha en la parte inferior derecha que abrirá la vista detallada del día.
 
Las citas muestran 3 informaciones principales: 
-	hora de inicio y fin – descripción del tipo de documento
-	cliente
-	wbs del proyecto

Al pasar el ratón sobre la cita se mostrará un tooltip con información adicional.
 
Para cada tipo de documento, con el botón derecho puede proceder a generar el siguiente documento previsto para el flujo de proyectos.
Por ejemplo, desde una cita de un recurso en el proyecto, es posible generar una intervención planificada o una solicitud de intervención. Los tipos de documento utilizados son los configurados en los parámetros generales del área de Proyectos.
 
El calendario se actualizará de inmediato cambiando el color según el nuevo tipo de documento.

Con doble clic puede abrir el documento de interés.

El procedimiento de conversión también es posible en una selección múltiple de documentos.

También con el botón derecho se puede borrar el documento recién creado, que se restaurará al estado anterior (en nuestro ejemplo, volverá a visualizarse la cita de recurso del proyecto).

Los procedimientos que se pueden utilizar son los siguientes:
-	cita de recurso del proyecto > solicitud de intervención
-	solicitud de intervención > intervención planificada
-	solicitud de intervención > intervención
-	cita de recurso del proyecto > intervención planificada
-	intervención planificada > intervención

En el calendario también está disponible la funcionalidad de arrastrar y soltar (drag&drop), por lo que al arrastrar una cita de un día a otro, o de un calendario de recurso a otro, se actualizarán automáticamente los datos en los documentos correspondientes.

Esta operación NO está permitida en intervenciones con estado <u>distinto de ingresado</u>, ni en <u>actividades facturadas</u>.
 
# Barra de herramientas<!-- Ribbon bar -->
En la barra de herramientas<!-- ribbon bar --> hay varios botones:
- **Acercar/alejar (Zoom in/out)** : permite hacer zoom sobre el periodo de interés, hasta llegar al mayor detalle horario.
- **Vista<!-- Visualizza -->**: vista mensual, semanal, diaria o **línea de tiempo (timeline)**. Esta última es óptima para poder visualizar posibles “huecos” de días o franjas horarias libres, por ejemplo, en los periodos de vacaciones.
- **Agrupar por<!-- Raggruppare per -->**: es posible cambiar la visualización del calendario, pasando de recurso, por proyecto, cliente o por fecha.