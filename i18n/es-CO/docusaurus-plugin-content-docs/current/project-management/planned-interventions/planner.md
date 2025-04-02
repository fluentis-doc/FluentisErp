---
title: planner
sidebar_position: 2
---
## planner (Planner)
El planificador está disponible para la licencia Fluentis Universal y se puede abrir desde el área de Gestión de proyectos > planner, y permite visualizar el calendario relativo a recursos, proyectos y clientes.

# Filtros (Filtri)
Al abrirse, se propone el calendario correspondiente al recurso del usuario actual, aunque es posible visualizar varios calendarios simultáneamente:

Apertura de la pestaña relacionada con los filtros a la izquierda, pestaña **risorse**, hacer clic en buscar para ver todos los recursos disponibles y arrastrar al recuadro de la derecha aquellos que sean de interés.  
De manera similar funcionan los filtros para **Cliente** y **Proyecto**, que se aplicarán a los calendarios visualizados.  

En la pestaña **documenti** es posible seleccionar qué documentos se visualizarán en los calendarios.  
Para cada uno de estos documentos se pueden aplicar filtros adicionales específicos, iguales a los disponibles en las áreas individuales.  

En los **filtri generali** hay opciones para: 
- mostrar citas superpuestas 
- citas no confirmadas 
- Resaltar los días donde no toda la franja horaria del recurso ha sido asignada. Los días con disponibilidad serán coloreados en turquesa.

Para eliminar uno de los elementos seleccionados anteriormente en el filtro, seleccionarlo y presionar la tecla SUPR del teclado. Para eliminar todos los filtros, utilizar el botón **cancella filtri**.

**periodo**: permite seleccionar en el calendario el período a visualizar.

# Calendario
Cada tipo de documento en el calendario puede ser coloreado de manera diferente para facilitar su distinción. La configuración debe hacerse en las tablas individuales de los tipos de documentos.  
Solo las citas de los recursos asignados en el proyecto no tienen opción de selección de color, que corresponderá al color del calendario del recurso (se entiende el color de la barra donde está escrito el nombre del recurso). Estas citas pueden ser identificadas por la sigla “PR” (Project resource) indicada después del horario.

En caso de solicitudes de vacaciones y permisos, el fondo cambiará a naranja. Si está conectada la actividad generada por la solicitud de vacaciones, se mostrará en función de la opción "vacaciones" en los filtros "Documentos".  
Si hay más citas en el mismo día y no todas pueden ser visualizadas, aparecerá una flecha en la esquina inferior derecha que abrirá la visualización detallada del día.

Las citas muestran 3 informaciones principales:
- horario de inicio y fin – descripción del tipo de documento  
- cliente  
- wbs del proyecto  

Al pasar el mouse sobre la cita se mostrará un tooltip con más detalles.

Para cada tipo de documento, con el botón derecho es posible generar el documento siguiente previsto para el flujo de los proyectos.  
Por ejemplo, desde una cita del recurso en el proyecto, es posible generar una intervención planificada o una solicitud de intervención. Los tipos de documentos utilizados son los que están configurados en los parámetros generales del área de Proyectos.

El calendario se actualizará al instante cambiando de color según el nuevo tipo de documento.

Con un doble clic se puede abrir el documento de interés.

La operación de conversión también es posible en una selección múltiple de documentos.

Asimismo, con el botón derecho es posible eliminar el documento recién creado, que se restaurará al estado anterior (en nuestro ejemplo, se volverá a mostrar la cita del recurso del proyecto).

Los procedimientos que se pueden utilizar son los siguientes:
- cita recurso proyecto > solicitud de intervención  
- solicitud de intervención > intervención planificada  
- solicitud de intervención > intervención  
- cita recurso proyecto > intervención planificada  
- intervención planificada > intervención  

En el calendario también está disponible la funcionalidad de arrastrar y soltar (drag & drop), por lo que al arrastrar una cita de un día a otro, o del calendario de un recurso a otro, se actualizarán automáticamente los datos en los documentos correspondientes.  

Esta operación NO está permitida en las intervenciones con estado <u>diferente de ingresado</u>, y en las <u>actividades facturadas</u>.

# Barra de herramientas (Ribbon bar)
En la barra de herramientas hay varios botones: 
- **Acercar / Alejar (Zoom in / out)**: permite hacer zoom en el período de interés, hasta llegar al máximo detalle horario.  
- **visualizza**: visualización mensual, semanal, diaria o **línea de tiempo (timeline)**. Esta última resulta óptima para poder visualizar eventuales "huecos" en días o franjas horarias descubiertas, por ejemplo, en períodos de vacaciones.  
- **Agrupar (Raggruppare)** por: es posible cambiar la visualización del calendario, pasando por recurso, por proyecto, por cliente o por fecha.