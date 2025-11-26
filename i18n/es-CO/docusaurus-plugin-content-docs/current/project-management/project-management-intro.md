---
title: Gestión de Proyectos
sidebar_position: 1
ai_generated: true
---

En **Fluentis ERP**, un proyecto es un conjunto complejo de actividades, sujetas a restricciones temporales y de recursos, orientadas a un objetivo predefinido. El seguimiento de los resultados se realiza mediante las herramientas apropiadas como tableros de control, impresiones, diagrama de Gantt, flujo de trabajo, supervisor y sprint para quienes utilizan el método Agile.

Los proyectos deben definirse de forma analítica con la especificación de todas las actividades necesarias para la consecución de los objetivos, los cuales están representados dentro de un proyecto como nodos WBS<!-- WBS -->.  
La organización del trabajo en elementos más fácilmente gestionables, hace menos compleja la comprensión del proyecto, permitiendo comunicar a todos los involucrados (stakeholders) las fases y actividades a realizar; las actividades están representadas por los niveles de WBS de mayor detalle y se definen como Work Package/Task.  
La gestión de proyectos también permite una mayor flexibilidad en términos estratégicos, ya que tiene la capacidad de adaptarse a los constantes cambios externos e internos.

Esta área responde a las necesidades de organizaciones "Product Centric" y "Service Centric", ya que mediante funciones específicas se conecta transversalmente a todas las áreas presentes en Fluentis ERP.

Las principales tipologías de proyecto se pueden resumir en:

**Proyectos WBS<!-- Progetti WBS -->** - Construir proyectos utilizando la metodología Work Break Down Structure, permitiendo la gestión tipo WaterFall dentro de las distintas WBS<!-- WBS --> y Work Packages.

**Proyectos tipo Orden de trabajo<!-- Progetti di tipo Commessa -->** - Permiten la gestión de proyectos simples donde el elemento esencial es el número del proyecto o de la orden de trabajo<!-- commessa --> orientado a agrupar documentos de diferente naturaleza.

**Proyectos de tipo Repetitivo<!-- Progetti di tipo Ripetitivo -->** - Crear proyectos destinados a contratos repetitivos, caracterizados principalmente por una secuencia temporal en la facturación. Típicamente, proyectos de facturación recurrente como contratos de alquiler o de asistencia.

**Proyectos de Mantenimiento<!-- Progetti di Manutenzione -->** - Realizar proyectos que gestionen el mantenimiento programado de instalaciones internas o externas a la empresa. Instalaciones que incluso pueden no ser de propiedad.

**Proyectos tipo SAL<!-- Progetti di tipo SAL -->** - Gestionar contratos de tipo Estado de Avance de las Obras. Son proyectos que prevén la realización de servicios o productos referidos a actividades en curso. Caracterizados por la emisión de facturas a cuenta y de saldo final.

**Proyectos de tipo Manufactura<!-- Progetti di tipo Manufacturing -->** - Conectar la gestión del proyecto al flujo productivo y logístico con el fin de agregar costos relativos a la producción en modalidad típicamente MTO (Make to Order).

A continuación se muestran algunos ejemplos de procesos de negocio según la realidad que se desea gestionar:

La imagen siguiente ilustra cómo se organiza el flujo de una empresa de servicios.

Comenzando por la definición de los requerimientos del cliente, definiendo el equipo de trabajo y realizando un análisis del estado actual, se construye un proyecto de tipo WBS<!-- WBS --> dentro de Fluentis con los objetivos específicos a alcanzar.  
Se realiza la planificación de recursos, se gestiona la parte administrativa con posibles facturas de anticipo, y se monitorizan los Sprint.  
Periódicamente se procede a la rendición de cuentas del proyecto y a su facturación.

![Servicios<!-- Servizi -->](/img/it-it/project-management/projects/BPM_SERVIZI.jpg)

La imagen siguiente ilustra cómo se organiza el flujo de una empresa productiva.

El primer paso ocurre en el área de ventas, con la elaboración de una oferta y posibles prototipos. Ya en la fase de oferta es posible definir presupuestos relativos a costes de materiales y servicios.  
En el momento en que la oferta es confirmada, no es necesario volver a ingresar todos los datos desde cero, será suficiente convertir la oferta en proyecto. El proyecto puede incluso integrar una plantilla.  
Desde el proyecto pueden entonces crearse intervenciones planificadas, monitorizadas mediante sprint, para luego finalizar con la realización de las intervenciones y la correspondiente facturación.

![Producción<!-- Produzione -->](/img/it-it/project-management/projects/BPM_PROD.jpg)

Resumiendo los principales flujos en el área de proyectos:

un proyecto puede originarse de:
1. ingreso manual
2. desde una plantilla de proyecto
3. desde una oferta de venta (varias opciones disponibles: desde oferta, desde oferta y plantilla, agregando la oferta a un proyecto ya existente)

Un proyecto puede ser de un solo nivel o multinivel gestionando una estructura jerárquica.

Dentro del proyecto se pueden ingresar periodos temporales, el precio de venta, diversos costes, de materiales y de recursos.  
Se establecen los criterios de facturación y se planifican los recursos.

Los datos esenciales de un proyecto son las líneas, que si son de tipo 1-codificado / 2-no codificado, deben tener artículo y/o descripción, UM y precio. De lo contrario, quedarán como líneas descriptivas, que siempre podrán ser utilizadas en los documentos siguientes. Sin embargo, no podrán determinar un valor en facturación, salvo mediante intervenciones manuales del operador.

Si en el proyecto se han planificado recursos, desde el propio proyecto se podrán generar automáticamente solicitudes de intervención o intervenciones planificadas.

- Recursos planificados en el proyecto > solicitud de intervención > intervención planificada > intervención efectiva > factura de venta
- Recursos planificados en el proyecto > intervención planificada > intervención efectiva > factura de venta
- Declaración de actividad > intervención > factura de venta

El uso o no de la solicitud de intervención depende de las distintas necesidades:
- gestión de portales externos, donde clientes/usuarios ingresan las solicitudes de intervención, que posteriormente deberán ser verificadas y aprobadas
- introducir un paso intermedio de verificación de lo programado, antes de la planificación efectiva con intervenciones planificadas que incrementan los contadores dentro del proyecto

La facturación en el área de proyectos puede realizarse de dos maneras:
- directamente desde el proyecto (común para facturación recurrente en casos de proyectos de gestión de cánones, licencias, etc.) y para facturas de anticipo
- desde las intervenciones.

En consecuencia, todos los documentos a facturar deben confluir en las intervenciones.  
De hecho, una actividad marcada como facturable puede convertirse automáticamente en intervención.

Por otro lado, para la gestión de nómina/empleados deben estar presentes todas las declaraciones de actividades. Si el usuario ingresa una intervención, en el momento en que el estado de la intervención sea "Aprobado" se podrá generar automáticamente la actividad para el conteo de horas del empleado.

Se deduce entonces que las intervenciones y actividades son documentos vinculados entre sí:
de intervención > a actividad
de actividad (si es facturable) > a intervención

Para mayores detalles consulte las páginas específicas para cada documento, donde además de las explicaciones e indicaciones sobre las configuraciones a realizar, también se ilustrarán las prioridades con las que se leen las configuraciones y la vinculación con los demás documentos.