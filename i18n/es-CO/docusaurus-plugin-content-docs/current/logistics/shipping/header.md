---
title: testata
sidebar_position: 4
---

Después de haber seleccionado los datos obligatorios en la sección superior, el usuario puede continuar ingresando los siguientes datos:  
- **data inizio**: permite indicar la fecha de inicio del envío;  
- **data fine**: permite indicar la fecha de fin del envío;  
- **ore pianificate**: indica el total de horas necesarias para el envío. Se calcula automáticamente en función de la fecha de inicio y fin;  

La información relacionada con el vehículo y el conductor:  
- **automezzo**: permite seleccionar el vehículo con el que se realizará el envío entre los indicados en la tabla [Vehículos (Automezzi)](/docs/logistics/motorvehicles/motorvehicle);  
- **Conductor asignado (Autista assegnato)**: permite seleccionar el conductor que realizará el envío entre los indicados en la tabla [Conductores (Autisti)](//docs/logistics/motorvehicles/motorvehicle-drivers);  
- **volume**: permite indicar el volumen del envío y la unidad de medida correspondiente;  
- **peso netto**: permite indicar el peso neto del envío y la unidad de medida correspondiente;  
- **peso lordo**: permite indicar el peso bruto del envío y la unidad de medida correspondiente;  

La información relacionada con los bienes:  
- **aspetto esteriore dei beni**: permite seleccionar la apariencia exterior de la mercancía enviada entre las indicadas en la tabla [Apariencia exterior de bienes (Aspetto esteriore beni)](/docs/configurations/tables/logistics/type-of-packaging/);  
- **Número de seguimiento (Numero tracking)**: permite indicar el número de seguimiento del envío. Este se propone por defecto para todos los envíos ingresados en la pestaña **gruopage**;  
- **Número total de bultos (Numero totale di colli)**: permite indicar el número de bultos del envío.  

La información relacionada con la moneda:  
- **divisa**: sección que contiene los datos relativos a la [Moneda (Divisa)](/docs/guide/common/glossary/glossary-intro#currency);  
- **data valuta**: indica la [Fecha de moneda (Data valuta)](/docs/guide/common/glossary/glossary-intro#currency-date).  

La información relacionada con el destinatario y el destino:  
- **sito produttivo**: permite elegir el sitio de producción desde el cual se realizará el envío y muestra automáticamente la dirección asociada al *Contacto* (enviado en el *Sitio de Producción*) en la dirección del lugar de carga del envío;  
- **Dirección del lugar de carga (Indirizzo del luogo di carico)**: al abrir el formulario, este campo se valora por defecto con la dirección de la empresa desde la cual normalmente deberían partir las mercancías. También es posible modificarlo manualmente;  
- **Dirección del lugar de destino (Indirizzo del luogo di destinazione)**: permite indicar el lugar de destino del envío.  

La información relacionada con el envío:  
- **spedizione**: permite indicar los datos relativos al [Envío (Spedizione)](/docs/guide/common/glossary/glossary-intro#shipment);  
- **porto**: permite indicar los datos relativos al [Puerto (Porto)](/docs/guide/common/glossary/glossary-intro#carriage);  
- **imballo**: permite indicar los datos relativos al [Embalaje (Imballo)](/docs/guide/common/glossary/glossary-intro#packing).  

Cualquier nota:  
- **nota**: permite insertar una nota libre;  
- **Nota inicial (Nota iniziale)**: permite insertar una nota libre adicional.  

Y, por último, la información relacionada con el estado de cumplimiento del envío:  
- **stato evasione**: cuando el envío se cumple a través de los documentos DDT o facturas, su estado de cumplimiento cambia automáticamente de *non evaso* a *parzialmente evaso* o *evaso*; el usuario puede forzar el cumplimiento de un pedido no totalmente cumplido indicando el estado *Cumplido forzado (Evaso forzatamente)*;  
- **data chiusura**: indica la fecha de cumplimiento del documento.