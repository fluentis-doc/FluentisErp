---
title: Tipo de Ticket (Tipo Ticket)
sidebar_position: 1
---

La tabla permite definir las tipologías de ticket que podrán ser utilizadas en el momento de ingresar un nuevo ticket, definiendo previamente algunas características de los tickets que se registrarán con dicha tipología. 
Está compuesta por una parte de filtro en la que se puede buscar a través del código o la descripción de la tipología y por una cuadrícula donde se enumerarán todas las tipologías ingresadas.

Dentro de este formulario, también es posible agregar nuevas tipologías en la cuadrícula, haciendo clic en el botón **nuovo**: de esta forma se añadirá una nueva fila en la cuadrícula donde se definirán los siguientes parámetros:

**codice**: es el código del tipo de ticket;  

**descrizione**: es la descripción del tipo de ticket;  

**numerazione**: es la numeración del tipo de ticket y se refiere a la tabla *Numeración Tipo*;  

**tipo offerta**: contiene el [Tipo de oferta (Tipo offerta)](/docs/configurations/tables/sales/sales-offer-type) que se creará con el procedimiento de *Creación de oferta desde el ticket (Creazione offerta da ticket)*;  

**Clase y Código Artículo (Classe e Codice Articolo)**:  

**Plantilla de ticket (Template ticket)**: contiene el [Template (Template)](/docs/configurations/tables/crm/tickets/template-ticket) a proponer para este tipo de ticket;  

### Indicadores para hacer campos obligatorios

**Cliente**: si está habilitado, indica la obligatoriedad de completar el campo Cliente en el ticket.  

**soggetto**:  

**Sujeto de Referencia (Soggetto di Riferimento)**: si está habilitado, indica la obligatoriedad de completar el campo sujeto de referencia en el ticket.  

**Email sujeto de Referencia (Email soggetto di Riferimento)**: si está habilitado, indica la obligatoriedad de completar el campo Email sujeto de referencia en el ticket.  

**progetto**: si está habilitado, indica la obligatoriedad de completar el campo Proyecto en el ticket.  

**livello di servizio**: si está habilitado, indica la obligatoriedad de completar el campo Nivel de servicio en el ticket.  

**severità**: si está habilitado, indica la obligatoriedad de completar el campo Severidad en el ticket.  

**primo utente assegnato**: usuario propuesto por defecto.  

Para cada tipología es posible indicar uno o más **stato ticket** en la cuadrícula inferior. Estos estados pueden ser diferentes para cada tipología de ticket y se propondrán como Estados posibles en la creación de un nuevo ticket con esta tipología.

Para cada estado de ticket es posible definir los siguientes parámetros:

**codice**: es el código del estado de ticket;  

**descrizione**: es la descripción del estado de ticket;  

**data fine**: es la fecha de finalización del estado de ticket;  

**nota**: en este campo se pueden agregar notas adicionales al ticket.  

Para cada tipología es posible indicar uno o más **utenti** en la cuadrícula inferior. Esta configuración es obligatoria si se desea habilitar todas las pestañas gestionables en el ticket. Puede configurarse para cada usuario individual o por rol.  

**ruolo**: indica el rol para el cual es válida la configuración establecida.  

**utente**: se indica, como alternativa al rol, el usuario para quien es válida la configuración establecida.  

**dettaglio ticket**: habilitar para hacer visible la sección/pestaña Detalle del ticket en el ticket.  

**utenti**: habilitar para hacer visible la sección/pestaña Usuarios en el ticket.  

**stima/sforzo**: habilitar para hacer visible la sección/pestaña Estimación/Esfuerzo en el ticket.  

**stima commerciale**: habilitar para hacer visible la sección/pestaña Estimación Comercial en el ticket.  

**informazione chiusura**: habilitar para hacer visible la sección/pestaña Información de cierre en el ticket.  

**ticket collegati**: habilitar para hacer visible la sección/pestaña Tickets relacionados en el ticket.  

**nota**: habilitar para hacer visible la sección/pestaña Nota en el ticket.  

**prodotto**: habilitar para hacer visible la sección/pestaña Producto en el ticket.  

**extra data**: habilitar para hacer visible la sección/pestaña Datos extra en el ticket.  

**gestione documentale**: habilitar para hacer visible la sección/pestaña Gestión documental en el ticket.  

**offerte**: habilitar para hacer visible la sección/pestaña Ofertas en el ticket.