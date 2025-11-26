---
title: Gestión de tickets
sidebar_position: 1
ai_generated: true
---

Desde la pantalla de búsqueda de Tickets es posible visualizar los tickets<!-- ticket --> ya ingresados. Generalmente, la gestión de tickets<!-- Gestione ticket --> es utilizada por el servicio empresarial de helpdesk.
Desde esta pantalla es posible abrir los tickets<!-- ticket --> en modo edición o visualización y crear nuevos.     
Además, el botón en la ribbon bar **Creación de ofertas desde Ticket<!-- Creazione offerte da Ticket -->** permite crear [Ofertas](/docs/sales/offers/insert-offer) directamente a partir de los tickets<!-- ticket --> seleccionados. El artículo/servicio ingresado en el ticket<!-- ticket --> se convertirá en una línea de artículo de la oferta y también se transferirán a la Oferta los demás datos ingresados en el ticket<!-- ticket -->: Proyecto, Cliente, Importes de línea (prestar atención en este caso si existen listas de precios válidas para el cliente: la oferta modificará los importes según la lista asociada al cliente). Este procedimiento también está presente dentro de cada ticket<!-- ticket --> individual.         

Al hacer clic en *Nuevo*, es posible ingresar un nuevo Ticket<!-- Ticket -->. La gestión de tickets<!-- Gestione ticket --> consta de dos partes: el Encabezado y las pestañas inferiores, que pasaremos a enumerar.     

## Encabezado<!-- Testata -->

El encabezado contiene los siguientes campos.     
**Tipo/Año/Número**: estos datos se completan automáticamente si al Operador se le ha asignado un Tipo de ticket<!-- Tipo ticket --> por defecto en los [Parámetros por operador del CRM](/docs/configurations/parameters/crm/ticket-parameters); el número es progresivo.     
**Fecha de creación/Vencimiento**: la fecha de creación se inserta automáticamente con la fecha actual; la fecha de vencimiento es un campo que se debe ingresar manualmente.     
**Fecha de cierre/Cerrado**: al marcar la casilla Cerrado, se completa automáticamente la Fecha de cierre.     
**Cliente**: este campo se completa automáticamente si al Operador se le ha asignado un Cliente por defecto en los [Parámetros por operador del CRM](/docs/configurations/parameters/crm/ticket-parameters); de lo contrario, es posible ingresarlo manualmente.     
**Contacto**: es posible ingresar alternativamente un [Contacto](/docs/crm/home-crm/contacts/new-contact).        
**Proyecto**: es posible indicar un proyecto de referencia;      
**Operaciones del ticket<!-- Operazioni ticket -->**: en este campo se visualizan las posibles [Operaciones](/docs/configurations/tables/crm/tickets/operations) para este Tipo de ticket<!-- Tipo ticket -->;      
**Persona de referencia<!-- Referente -->**: en este campo se muestra la *Persona de referencia* del cliente ingresado, tomada del registro maestro; el campo es igualmente modificable;      
**Severidad del ticket<!-- Severità ticket -->**: es un campo que contiene la [Severidad](/docs/configurations/tables/crm/tickets/severity);   
**Asunto<!-- Oggetto -->**: es un campo editable manualmente;     
**Estado<!-- Stato -->**: es posible asignar un estado al ticket<!-- ticket -->; los estados visualizados son los que se han ingresado en el [Tipo de ticket<!-- Tipo ticket -->](/docs/configurations/tables/crm/tickets/ticket-type) correspondiente;              
**Facturado/Facturable<!-- Fatturato/Fatturabile -->**: estas casillas indican si el ticket<!-- ticket --> ya ha sido facturado o si deberá serlo;      
**Criterios de facturación<!-- Criteri di fatturazione -->**: indicar si el criterio de facturación son las horas previstas en la oferta o las realmente realizadas;      
**Periodo de facturación<!-- Periodo di fatturazione -->**: indicar si la facturación debe ser a cuenta o a la entrega.      

Analicemos las pestañas inferiores.     

## Detalle del ticket<!-- Dettaglio ticket -->

Esta pestaña se compone de dos campos: **Idioma** (se llena automáticamente) y **Descripción** (obligatorio).    

## Usuarios<!-- Utenti -->

En esta pestaña se muestran los operadores que realizan actividades sobre el ticket<!-- ticket -->; al crear un nuevo ticket<!-- ticket -->, los campos **Operador** y **Primera fecha asignada** se completan automáticamente.     

## Estimación/Esfuerzo<!-- Stima/Sforzo -->

Esta pestaña se activa después de hacer clic en el botón *Estimación técnica<!-- Stima tecnica -->* en la ribbon bar. Según el Tipo de ticket<!-- Tipo ticket --> que se está creando, se propondrá el [Template<!-- Template -->](/docs/configurations/tables/crm/tickets/template-ticket) asociado, con los datos ya ingresados en la respectiva tabla. El usuario puede modificar todos los campos. Los campos que no se recuperan de las tablas del Tipo de ticket<!-- Tipo ticket --> o Template<!-- Template -->, y que por tanto deben ser completados manualmente, son los siguientes:        
**Fecha efectiva de inicio<!-- Effettiva data inizio -->**: en este campo es posible ingresar una fecha de inicio real de trabajos, que puede ser diferente de la **Fecha prevista de inicio<!-- Data previsto inizio -->**, ubicada al lado y completada automáticamente con la fecha de creación del ticket<!-- ticket -->;     
**Comercial/Técnico<!-- Commerciale/Tecnico -->**: en estos campos se ingresan los respectivos operadores, que también se propondrán en la siguiente pestaña *Estimación comercial<!-- Stima commerciale -->*.       
En la cuadrícula inferior es importante indicar en la columna **Cantidad prevista** el tiempo previsto para la realización de las actividades y la correspondiente **Unidad de medida**. El llenado de esta columna hará que se completen automáticamente también los campos **Minutos estimados de esfuerzo<!-- Minuti stimato sforzo -->** y **Horas laborales<!-- Ore lavorative -->** y servirá para la posterior creación de la estimación comercial.      
**Recursos de proyectos<!-- Risorse Commesse -->** permite asociar un recurso del área de proyectos, indicando cuál será el recurso que realizará esta fase de Estimación Técnica<!-- Stima Tecnica -->. 
Cuando el recurso declare la actividad en el área de proyectos, seleccionando el ticket<!-- ticket --> correspondiente, tendrá propuesto automáticamente el proyecto de referencia insertado en la correspondiente estimación técnica<!-- stima tecnica --> del ticket<!-- ticket -->.


**Proyecto** permite indicar una línea de proyecto del área de Proyectos, que será propuesta automáticamente cuando el recurso realice la declaración de actividad en el área de proyectos, seleccionando el ticket<!-- ticket --> correspondiente.

**Fecha de inicio<!-- Data Inizio -->** y **Fecha de finalización<!-- Data Fine -->** : indica con precisión la fecha de inicio y finalización de cada paso de la estimación técnica<!-- stima tecnica -->. 

Una vez completada la Estimación técnica<!-- Stima tecnica -->, haga clic en el botón de la ribbon bar *Finalizar estimación técnica<!-- Fine stima tecnica -->*: esto bloqueará nuevamente la edición de la pestaña Estimación/Esfuerzo<!-- Stima/Sforzo -->. Para poder editarla nuevamente, haga clic en el botón *Cancelar estimación técnica<!-- Annulla stima tecnica -->*.       

## Información de cierre<!-- Informazioni chiusura -->

Esta pestaña se compone de los campos **Fecha de cierre** y **Notas**; ambos campos son de libre digitación y no obligatorios.     

## Tickets relacionados<!-- Ticket collegati -->

En esta pestaña es posible ingresar eventuales tickets<!-- ticket --> relacionados. Para hacerlo, es posible utilizar la ayuda de campo, haciendo doble clic en la columna **Número**.     

## Nota

En esta pestaña es posible insertar/eliminar notas. Para ello, utilice los botones de la ribbon bar *Nueva nota* y *Eliminar nota*. Las columnas **Operador** y **Fecha de inserción** se llenan automáticamente. La casilla **info reservada** indica que la Nota debe estar disponible solo para el Operador que la ha ingresado.        

## Estimación comercial<!-- Stima commerciale -->

Esta pestaña se activa después de hacer clic en el botón *Estimación comercial<!-- Stima commerciale -->* en la ribbon bar. Según el [Tipo de ticket<!-- Tipo ticket -->](/docs/configurations/tables/crm/tickets/ticket-type) que se está creando y el respectivo [Template<!-- Template -->](/docs/configurations/tables/crm/tickets/template-ticket) asociado, se propondrá una serie de campos, por ejemplo las Descripciones. El usuario puede modificar todos los campos.       
El campo **Técnico/Comercial<!-- Tecnico/Commerciale -->** se recupera de la pestaña *Estimación técnica<!-- Stima tecnica -->*.     
En la cuadrícula es importante revisar/modificar la columna **Cantidad comercial**. Esta columna muestra la Cantidad prevista por la estimación técnica<!-- stima tecnica -->, pero puede ser incrementada/decrementada por el área comercial, que creará la estimación definitiva. Esta columna también llenará el campo que se encuentra debajo de la cuadrícula: **Cantidad total comercial**.       
Una vez completada la Estimación técnica<!-- stima tecnica -->, haga clic en el botón de la ribbon bar *Finalizar estimación comercial<!-- Fine stima commerciale -->*: esto volverá a bloquear la edición de la pestaña Estimación/Esfuerzo<!-- Stima/Sforzo -->. Para editarla nuevamente, haga clic en el botón *Cancelar estimación comercial<!-- Annulla stima commerciale -->*.       
Una vez completada también la estimación comercial<!-- stima commerciale -->, se podrá crear la oferta a través del procedimiento *Creación de Ofertas desde ticket<!-- Creazione Offerte da ticket -->*.    

## Ofertas

En esta pestaña se reportan eventuales Ofertas<!-- Offerte --> relacionadas al ticket<!-- ticket --> y creadas con el procedimiento de *Creación de Ofertas desde ticket<!-- Creazione Offerte da ticket -->*.