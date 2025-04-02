---
title: livelli autorizzativi
sidebar_position: 23
---

Esta tabla permite extender la gestión del bloqueo de partidas pasivas según una lógica más articulada.

Suponiendo que haya
- un control administrativo de la factura  
- un control posterior por parte del departamento de compras de la factura  
- una autorización final por parte del titular  

se podría hipotetizar una codificación de los niveles autorizativos como sigue:

![](/img/it-it/configurations/tables/finance/authorization-levels.png)

El nivel *00 – Bloqueo inicial (Blocco iniziale)* debe preconfigurarse en cada **registro de proveedor (anagrafica fornitore)**, en la pestaña [**pagamenti**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/), para que sus partidas sean creadas bloqueadas con este nivel de partida.

![](/img/it-it/configurations/tables/finance/authorization-levels-combo.png)

La partida puede ser luego llevada al nivel *01* por los usuarios del rol *amministrazione* (en la imagen *Fluentis Users* Cfr. gestión de usuarios y roles de usuario en la sección ARM): esto se debe a que tiene *livello padre* 0, y lo lleva al nivel 1.

Luego la partida puede ser llevada al nivel *02* por los usuarios del rol *acquisti* (en la imagen es *Fluentis Admins*): esto se debe a que tiene *livello padre* 1 y lo lleva al nivel 2.

A continuación, la partida puede llegar al nivel final *03* solo por parte del usuario XXXXXXX (el titular), que otorgará efectivamente la autorización para el pago (y solo en este punto se quitará el bloqueo en la partida, que se volverá pagable).

Cada paso puede requerir la inserción de una nota de autorización, si se activa el indicador en el nivel.

Estos cambios de estado pueden realizarse desde el formulario [**Gestión de Liquidez (Gestione Liquidità)**](/docs/finance-area/maturity-values/procedures/cash-management/), a través del botón *autorizza partita*.

Después de la concesión de la autorización, también desde el formulario *Gestión de liquidez (Gestione liquidità)* es posible preparar directamente las listas de pago del módulo *pagamenti fornitori*, para las partidas autorizadas (o aquellas no bloqueadas) como alternativa al procedimiento clásico de creación de la lista de pago y, desde dentro de la lista, búsqueda de las partidas pasivas a incluir.