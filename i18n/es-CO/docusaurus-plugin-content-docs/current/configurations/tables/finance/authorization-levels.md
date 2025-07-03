---
title: Niveles de autorización
sidebar_position: 23
---

Esta tabla permite extender la gestión del bloqueo de valores mat. pasivas según una lógica más articulada.

Suponiendo que haya
- un control administrativo de la factura  
- un control posterior por parte del departamento de compras de la factura  
- una autorización final por parte del titular  

se podría hipotetizar una codificación de los niveles autorizativos como sigue:

![](/img/it-it/configurations/tables/finance/authorization-levels.png)

El nivel *00 – Bloqueo inicial (Blocco iniziale)* debe preconfigurarse en cada **registro de proveedor**, en la pestaña [**Pagos**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/), para que sus valores mat. sean creadas bloqueadas con este nivel de madurez.

![](/img/it-it/configurations/tables/finance/authorization-levels-combo.png)

La madurez puede ser luego llevada al nivel *01* por los usuarios del rol *Finanzas* (en la imagen *Fluentis Users* Cfr. gestión de usuarios y roles de usuario en la sección ARM): esto se debe a que tiene *Nivel paternal* 0, y lo lleva al nivel 1.

Luego la madurez puede ser llevada al nivel *02* por los usuarios del rol *Compras* (en la imagen es *Fluentis Admins*): esto se debe a que tiene *Nivel paternal* 1 y lo lleva al nivel 2.

A continuación, la madurez puede llegar al nivel final *03* solo por parte del usuario XXXXXXX (el titular), que otorgará efectivamente la autorización para el pago (y solo en este punto se quitará el bloqueo en la madurez, que se volverá pagable).

Cada paso puede requerir la inserción de una nota de autorización, si se activa el indicador en el nivel.

Estos cambios de estado pueden realizarse desde el formulario [**Gestión de efectivo**](/docs/finance-area/maturity-values/procedures/cash-management/), a través del botón *Autorizar la madurez*.

Después de la concesión de la autorización, también desde el formulario *Gestión de efectivo* es posible preparar directamente las listas de pago del módulo *Pagos a proveedores*, para las valores mat. autorizadas (o aquellas no bloqueadas) como alternativa al procedimiento clásico de creación de la lista de pago y, desde dentro de la lista, búsqueda de las valores mat. pasivas a incluir.