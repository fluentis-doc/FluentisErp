---
title: Gestión de tickets (Gestione ticket)
sidebar_position: 1
---

Desde la máscara de búsqueda de Tickets, es posible visualizar los tickets ya ingresados. Generalmente, la Gestión de tickets es utilizada por el servicio empresarial de helpdesk.  
Desde esta máscara, se pueden abrir en edición o visualización los tickets y crear nuevos.  
Además, el botón de la barra de herramientas **Creación de ofertas desde Ticket** permite crear [Ofertas](/docs/sales/offers/insert-offer) directamente desde los tickets seleccionados. El artículo/servicio ingresado en el ticket se convertirá en una línea de artículo de la oferta, y se incluirán en la Oferta también los otros datos ingresados en el ticket: Proyecto, Cliente, Importes de línea (tener en cuenta en este caso si existen precios válidos para el cliente: la oferta modificará los importes en función del precio asociado al cliente). Este procedimiento también está presente dentro de los tickets individuales.  

Al hacer clic en *Nuevo*, es posible ingresar un nuevo Ticket. La Gestión de tickets se compone de dos partes: la Cabecera y las pestañas Subyacentes, que enumeraremos a continuación.  

## Cabecera (Testata)  

La cabecera contiene los siguientes campos.  
**Tipo/Año/Número (Tipo/Anno/Numero)**: estos datos se completan automáticamente si se ha asignado a la Operador un Tipo de ticket por defecto en los [Parámetros para operador del CRM](/docs/configurations/parameters/crm/ticket-parameters); el número es progresivo.   
**Fecha de creación/Fecha de caducidad (Data creazione/Scadenza)**: la fecha de creación se inserta automáticamente con la fecha de hoy; la fecha de caducidad es un campo que debe ser ingresado manualmente.  
**Fecha de cierre/Cerrado (Data chiusura/Chiuso)**: al marcar el indicador Cerrado, se registra automáticamente la Fecha de cierre.  
**cliente**: este campo se completa automáticamente si se ha asignado a la Operador un Cliente por defecto en los [Parámetros para operador del CRM](/docs/configurations/parameters/crm/ticket-parameters); de lo contrario, se puede ingresar manualmente.  
**contatto**: es posible ingresar alternativamente un [Contacto](/docs/crm/home-crm/contacts/new-contact/header).  
**progetto**: se puede indicar un proyecto al que hacer referencia;  
**Operaciones de ticket (Operazioni ticket)**: en este campo se visualizan las posibles [Operaciones](/docs/configurations/tables/crm/tickets/operations) para este Tipo de ticket;  
**referente**: en este campo se registra la *Persona de referencia* del cliente ingresado, tomada del registro; el campo es modificable;  
**severità ticket**: es un campo que contiene la [Severidad](/docs/configurations/tables/crm/tickets/severity);  
**oggetto**: es un campo que se puede completar manualmente;  
**stato**: es posible asignar un estado al ticket; los estados mostrados son los ingresados en el [Tipo de ticket](/docs/configurations/tables/crm/tickets/ticket-type) correspondiente;  
**Facturado/Facturable (Fatturato/Fatturabile)**: estos indicadores indican si el ticket ya ha sido facturado o si lo será;  
**criteri di fatturazione**: indicar si el criterio de facturación son las acciones previstas en la oferta o las que se han realizado efectivamente;  
**periodo di fatturazione**: indicar si la facturación debe ser final o al momento de la entrega.  

Analicemos las pestañas subyacentes.  

## Detalle del ticket (Dettaglio ticket)

Esta pestaña está compuesta por dos campos: **Idioma** (compilado automáticamente) y **Descripción** (obligatoria).  

## Usuarios (Utenti)

En esta pestaña se listan los operadores que realizan las actividades sobre el ticket; al crear un nuevo ticket, se completan automáticamente los campos **Operador** y **Primera fecha asignada**.  

## Estimación/Esfuerzo (Stima/Sforzo)

Esta pestaña se activa después de hacer clic en el botón *Estimación técnica* en la barra de herramientas. Según el Tipo de ticket que se está creando, se propondrá el [Template](/docs/configurations/tables/crm/tickets/template-ticket) asociado, con los datos correspondientes ya ingresados en la tabla respectiva. El usuario puede modificar todos los campos. Los campos que no son tomados de las tablas del Tipo de ticket o Template, y que por lo tanto deben ser completados manualmente, son los siguientes:  
**Fecha efectiva de inicio (Effettiva data inizio)**: en este campo es posible ingresar una Fecha de efectivo inicio de trabajos, que puede ser diferente de la **Fecha prevista de inicio**, a su lado y completada automáticamente con la fecha de creación del ticket;  
**Comercial/Técnico (Commerciale/Tecnico)**: en estos campos se ingresan los respectivos operadores, que también se propondrán en la siguiente pestaña *Estimación comercial*.  
En la cuadrícula subyacente, es importante indicar en la columna **Cantidad prevista** el tiempo previsto para realizar las actividades y la correspondiente **Unidad de medida**. Completar esta columna también completará automáticamente los campos **Minutos estimados de esfuerzo** y **Horas trabajadas**, y servirá para la posterior creación de la estimación comercial.  
**risorse commesse** permite asociar un recurso del área de proyectos, indicando cuál será el recurso que realizará esta fase de Estimación Técnica. 
Cuando el recurso declare la actividad en el área de proyectos, al seleccionar el ticket correspondiente, se le propondrá automáticamente el proyecto de referencia ingresado en la correspondiente estimación técnica del ticket.

**progetto** permite indicar una línea de proyecto del área de Proyectos, que se propondrá automáticamente cuando el recurso realice la declaración de actividad en el área de proyectos, seleccionando el ticket correspondiente.

**data inizio** y **data fine**: indican con precisión la fecha de inicio y fin de cada paso de la estimación técnica. 

Una vez completada la Estimación técnica, haga clic en el botón de la barra de herramientas *Fin estimación técnica*: esto bloqueará nuevamente la modificación de la pestaña Estimación/Esfuerzo. Para poder modificarla nuevamente, haga clic en el botón *Cancelar estimación técnica*.  

## Información de cierre (Informazioni chiusura)

Esta pestaña está compuesta por los campos **data chiusura** y **note**; ambos campos son de libre escritura y no son obligatorios.  

## Tickets relacionados (Ticket collegati)

En esta pestaña es posible ingresar posibles tickets relacionados. Para hacerlo, se puede utilizar la Ayuda de campo, haciendo doble clic en la columna **Número**.  

## Nota (Nota)

En esta pestaña es posible ingresar/eliminar notas. Para hacerlo, utilice los botones de la barra de herramientas *Nueva nota* y *Eliminar nota*. Las columnas **Operador** y **Fecha de ingreso** se completan automáticamente. El indicador **info reservada** indica que la Nota debe estar disponible solo para el Operador que la ingresó.  

## Estimación comercial (Stima commerciale)

Esta pestaña se activa después de hacer clic en el botón *Estimación comercial* en la barra de herramientas. Según el [Tipo de ticket](/docs/configurations/tables/crm/tickets/ticket-type) que se está creando y el correspondiente [Template](/docs/configurations/tables/crm/tickets/template-ticket) asociado, se propondrán una serie de campos, por ejemplo, las Descripciones. El usuario puede modificar todos los campos.  
El campo **Técnico/Comercial (Tecnico/Commerciale)** se toma de la pestaña *Estimación técnica*.  
En la cuadrícula, es importante revisar/modificar la columna **Cantidad comercial**. Esta columna refleja la Cantidad prevista de la estimación técnica, pero puede ser aumentada/disminuida por el comercial, quien creará la estimación definitiva. Esta columna también llenará el campo debajo de la cuadrícula: **Cantidad total comercial**.  
Una vez completada la Estimación técnica, haga clic en el botón de la barra de herramientas *Fin estimación comercial*: esto bloqueará nuevamente la modificación de la pestaña Estimación/Esfuerzo. Para poder modificarla nuevamente, haga clic en el botón *Cancelar estimación comercial*.  
Una vez completada también la estimación comercial, se podrá crear la oferta a través del procedimiento de *Creación de Ofertas desde ticket*.  

## Ofertas (Offerte)

En esta pestaña se listan las posibles Ofertas relacionadas al ticket y creadas con el procedimiento de *Creación de Ofertas desde ticket*.