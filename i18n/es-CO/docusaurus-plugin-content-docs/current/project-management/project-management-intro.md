---
title: gestione progetti
sidebar_position: 1
---

En **Fluentis ERP**, un proyecto es un conjunto complejo de actividades, sujetas a restricciones de tiempo y recursos, destinadas a un objetivo predefinido. El monitoreo de los resultados se realiza a través de las herramientas adecuadas como paneles (dashboard), impresiones, diagramas de Gantt, flujos de trabajo (workflow), supervisores y sprints para quienes utilizan el método Agile.

Los proyectos deben definirse de manera analítica con la especificación de todas las actividades necesarias para alcanzar los objetivos, que se representan dentro de un proyecto como nodos WBS. La organización del trabajo en elementos más fácilmente gestionables, hace que la comprensión del proyecto sea menos compleja, de forma que se pueda comunicar a todos los involucrados (stakeholders) las fases y actividades a realizar; las actividades se representan por niveles de WBS de mayor detalle y se definen como Work Package/Task. La gestión de proyectos además permite una mayor flexibilidad en términos estratégicos, ya que tiene la capacidad de adaptarse a los continuos cambios externos e internos.

Esta área responde a las necesidades de realidades empresariales "Product Centric" y "Service Centric", ya que a través de funcionalidades específicas se conecta de manera transversal a todas las áreas en Fluentis ERP.

Las principales tipologías de proyecto pueden resumirse en:

**Proyectos WBS** - Construir proyectos con el método Work Break Down Structure, para permitir la gestión de tipo WaterFall en el ámbito de las WBS y Work Packages individuales.

**Proyectos de tipo Commessa (Encargo)** - Permitir la gestión de proyectos simples donde el elemento esencial es el número del proyecto o encargo, destinado a agregar documentos de diversa naturaleza.

**Proyectos de tipo Repetitivo** - Crear proyectos que tengan la finalidad de contratos repetitivos, caracterizados principalmente por una secuencialidad temporal en la facturación. Típicamente, proyectos de facturación repetitiva como contratos de alquiler o de asistencia.

**Proyectos de Mantenimiento** - Poder realizar proyectos que gestionen el mantenimiento programado de instalaciones internas o externas a la empresa. Instalaciones que pueden no ser de propiedad.

**Proyectos de tipo SAL (Estado de Avance de los Trabajos)** - Gestionar contratos de tipo Sal. Son proyectos que prevén la realización de servicios o productos que se refieren a actividades en curso de realización. Caracterizados por la emisión de facturaciones anticipadas y a saldo final.

**Proyectos de tipo Manufacturing** - Conectar la gestión del proyecto al flujo productivo y logístico con el propósito de agregar costos relativos a la producción en la modalidad típicamente MTO (Make to Order).

A continuación, se muestran algunos ejemplos de procesos comerciales según la realidad que se desea gestionar:

La imagen siguiente ilustra cómo se organiza el flujo de una empresa de servicios.

Partiendo de la definición de las necesidades del cliente, definiendo el equipo de trabajo y llevando a cabo una actividad de análisis del estado de cosas, se llega a construir un proyecto de tipo WBS dentro de Fluentis con los objetivos específicos a alcanzar. Se realiza la planificación de los recursos, se gestiona la parte administrativa con eventuales facturas de anticipo y se monitorean los sprints. Periódicamente, se procede a la rendición de cuentas del proyecto y su facturación.

![Servicios](/img/it-it/project-management/projects/BPM_SERVIZI.jpg)

La imagen siguiente ilustra cómo se organiza el flujo de una empresa productiva.

El primer paso ocurre en el área de ventas, con la formulación de una oferta y eventuales prototipos. Ya a nivel de la oferta es posible definir algunos presupuestos relativos a costos de materiales y servicios. En el momento en que la oferta es confirmada, no es necesario reintegrar todos los datos desde cero, sino que será suficiente convertir la oferta en proyecto. El proyecto puede también integrar una plantilla. Desde el proyecto, podrán entonces crearse intervenciones planificadas, monitoreadas a través de sprints, que concluirán con la realización de las intervenciones y la correspondiente facturación.

![Producción](/img/it-it/project-management/projects/BPM_PROD.jpg)

Resumiendo los principales flujos en el área de proyectos:

un proyecto puede nacer de:
1. ingreso manual
2. de plantilla de proyecto
3. de oferta de venta (diversas opciones presentes: de oferta, de oferta y plantilla, adjuntando la oferta a un proyecto ya existente)

Un proyecto puede ser mononivel o multinivel gestionando una estructura jerárquica.

Dentro del proyecto se pueden insertar períodos temporales, el precio de venta, costos diversos, de materiales y recursos. Se establecen los criterios de facturación y se planifican los recursos.

Los datos esenciales de un proyecto son las líneas, que si son de tipo 1-codificado / 2-no codificado, deben tener artículo y/o descripción, UM y precio. De lo contrario, quedarán como líneas de tipo descriptivo, que siempre podrán ser utilizadas en los documentos siguientes. No podrán, sin embargo, determinar un valor en facturación, a menos que lo haga manualmente un operador.

Si en el proyecto se han planificado recursos, desde el proyecto se podrán generar automáticamente solicitudes de intervención o intervenciones planificadas.

- Recursos planificados en el proyecto > solicitud de intervención > intervención planificada > intervención efectiva > factura de venta
- Recursos planificados en el proyecto > intervención planificada > intervención efectiva > factura de venta
- Declaración de actividad > intervención > factura de venta

El uso o no de la solicitud de intervención depende de las diversas necesidades:
- gestión de portales externos, donde clientes/usuarios ingresan las solicitudes de intervención, que luego deberán ser verificadas y aprobadas.
- introducir un paso intermedio de verificación de lo que se ha programado, antes de la planificación efectiva con intervenciones planificadas que incrementan los contadores dentro del proyecto.

La facturación en el área de proyectos puede realizarse de 2 maneras:
- directamente desde el proyecto (común para la facturación recurrente en casos de proyectos para la gestión de cánones, licencias, etc.) y para las facturas de anticipo.
- desde las intervenciones.

Como consecuencia, todos los documentos a facturar deberán fluir a través de las intervenciones. De hecho, una actividad marcada como facturable puede convertirse automáticamente en intervención.

En cambio, para la gestión de nómina/empleados deben estar presentes todas las declaraciones de actividad. Si el operador ingresa una intervención, en el momento en que el estado de la intervención sea "Aprobada", se podrá generar automáticamente la actividad para el conteo de horas del empleado.

Por lo tanto, se deduce que las intervenciones y actividades son documentos entrelazados:
de intervención > a actividad
de actividad (si es facturable) > a intervención

Para más detalles, consulte las páginas específicas para cada documento, donde, además de las explicaciones e indicaciones sobre las configuraciones a realizar, también se ilustrarán las prioridades con las que se leen las configuraciones y la conexión con los demás documentos.