---
title: Tipo de Ticket 
sidebar_position: 1
---

La tabla permite definir las tipologías de ticket que podrán ser utilizadas en el momento de ingresar un nuevo ticket, definiendo previamente algunas características de los tickets que se registrarán con dicha tipología. 
Está compuesta por una parte de filtro en la que se puede buscar a través del código o la descripción de la tipología y por una cuadrícula donde se enumerarán todas las tipologías ingresadas.

Dentro de este formulario, también es posible agregar nuevas tipologías en la cuadrícula, haciendo clic en el botón **Nuevo**: de esta forma se añadirá una nueva fila en la cuadrícula donde se definirán los siguientes parámetros:

**Código**: es el código del tipo de ticket;  

**Descripción**: es la descripción del tipo de ticket;  

**numerazione**: es la numeración del tipo de ticket y se refiere a la tabla *Numeración Tipo*;  

**Tipo de oferta**: contiene el [Tipo de oferta](/docs/configurations/tables/sales/sales-offer-type) que se creará con el procedimiento de *Creación de oferta desde el ticket*;  

**Clase y Código Artículo**:  

**Tickets de plantilla**: contiene la [Plantilla](/docs/configurations/tables/crm/tickets/template-ticket) a proponer para este tipo de ticket;  

### Indicadores para hacer campos obligatorios

**Cliente**: si está habilitado, indica la obligatoriedad de completar el campo Cliente en el ticket.  

**Sujeto**:  

**Persona de referencia**: si está habilitado, indica la obligatoriedad de completar el campo persona de referencia en el ticket.  

**Correo electrónico del referente**: si está habilitado, indica la obligatoriedad de completar el campo Correo electrónico del referente en el ticket.  

**Proyecto**: si está habilitado, indica la obligatoriedad de completar el campo Proyecto en el ticket.  

**Nivel de Servicio**: si está habilitado, indica la obligatoriedad de completar el campo Nivel de servicio en el ticket.  

**Severidad**: si está habilitado, indica la obligatoriedad de completar el campo Severidad en el ticket.  

**Primer usuario asignado**: usuario propuesto por defecto.  

Para cada tipología es posible indicar uno o más **Estado del ticket** en la cuadrícula inferior. Estos estados pueden ser diferentes para cada tipología de ticket y se propondrán como Estados posibles en la creación de un nuevo ticket con esta tipología.

Para cada estado de ticket es posible definir los siguientes parámetros:

**Código**: es el código del estado de ticket;  

**Descripción**: es la descripción del estado de ticket;  

**Fecha de finalización**: es la fecha de finalización del estado de ticket;  

**Nota**: en este campo se pueden agregar notas adicionales al ticket.  

Para cada tipología es posible indicar uno o más **Usuarios** en la cuadrícula inferior. Esta configuración es obligatoria si se desea habilitar todas las pestañas gestionables en el ticket. Puede configurarse para cada usuario individual o por rol.  

**Rol**: indica el rol para el cual es válida la configuración establecida.  

**Usuario**: se indica, como alternativa al rol, el usuario para quien es válida la configuración establecida.  

**Detalles del ticket**: habilitar para hacer visible la sección/pestaña Detalle del ticket en el ticket.  

**Usuarios**: habilitar para hacer visible la sección/pestaña Usuarios en el ticket.  

**Estimación/Esfuerzo**: habilitar para hacer visible la sección/pestaña Estimación/Esfuerzo en el ticket.  

**Estimación Comercial**: habilitar para hacer visible la sección/pestaña Estimación Comercial en el ticket.  

**Información de cierre**: habilitar para hacer visible la sección/pestaña Información de cierre en el ticket.  

**Tickets vinculados**: habilitar para hacer visible la sección/pestaña Tickets vinculados en el ticket.  

**Nota**: habilitar para hacer visible la sección/pestaña Nota en el ticket.  

**Producto**: habilitar para hacer visible la sección/pestaña Producto en el ticket.  

**Datos adicionales**: habilitar para hacer visible la sección/pestaña Datos adicionales en el ticket.  

**Gestión de Documentos**: habilitar para hacer visible la sección/pestaña Gestión de Documentos en el ticket.  

**Ofertas**: habilitar para hacer visible la sección/pestaña Ofertas en el ticket.