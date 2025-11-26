---
title: Lock manager
sidebar_position: 3
ai_generated: true
---

El formulario se encuentra en Tesorería<!-- Tesoreria --> > Riesgo Cliente<!-- Rischio Cliente --> > Procedimientos<!-- Procedure --> > Lock Manager<!-- Lock Manager -->

A través de este procedimiento se gestiona la autorización de los documentos que sobrepasan los límites de crédito<!-- fidi -->, así como el bloqueo directo del cliente<!-- cliente --> independientemente del superamiento del límite de crédito<!-- fido -->.

Recordamos que el bloqueo de los documentos presupone la gestión de la [**ficha de cliente**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments)<!-- anagrafica cliente --> (para los clientes<!-- clienti --> sujetos a límite de crédito<!-- fido --> y según el modo elegido) y de las diferentes tablas relativas a los [**tipos de documentos de venta**](/docs/configurations/tables/sales/sales-order-types)<!-- tipi documenti di vendita --> (por ejemplo, Tipo Pedido<!-- Tipo Ordine -->, Tipo Remisión<!-- Tipo DDT -->, etc.) con el fin de configurar qué tipologías estarán sujetas a control y eventualmente a bloqueo.




## Ficha de Autorización<!-- Scheda Autorizzazione -->

El usuario que tiene derechos de acceso tiene la posibilidad de verificar la lista de documentos señalados, bloqueados, autorizados, etc.

En la cuadrícula será posible modificar el estado de ***Doc. bloqueado***<!-- Doc. bloccato --> a ***Autorización concedida***<!-- Autorizzazione rilasciata --> para permitir la continuación del flujo documental relacionado con el propio documento.

:::tip Info
Con un doble clic en la cuadrícula será posible visualizar el mismo documento en todos sus detalles.
:::

## Ficha **Bloqueo de clientes**<!-- Scheda **Blocco clienti** -->

Permite forzar un ***Bloqueo de pedidos***<!-- Blocco ordini --> o ***Bloqueo de remisiones***<!-- Blocco ddt --> (o ambos, usando las casillas respectivas) para una determinada lista de clientes, con un rango de fechas de bloqueo.

### Cómo bloquear un cliente

Por ejemplo, si el cliente<!-- cliente --> ha dejado impagada una riba, la administración podría forzar el bloqueo de todas las operaciones con respecto al cliente<!-- cliente -->.

1. Acceda a esta pantalla
2. Complete el campo Descripción ingresando la ficha del cliente<!-- anagrafica del cliente --> que desea bloquear
3. Active las casillas de Bloqueo de pedidos<!-- Blocco ordini --> y/o Bloqueo de remisiones<!-- Blocco DDT --> y complete las fechas de inicio y fin de bloqueo

:::note[MNota]
Para rehabilitar al cliente<!-- cliente --> será suficiente establecer una **fecha de finalización de validez** (de modo que se mantenga un historial del bloqueo) o directamente eliminar la fila del sistema.
Se guarda **el usuario y la fecha de bloqueo y desbloqueo**.
:::




Las casillas **Autorizar pedido**<!-- Autorizza Ordine --> y **Autorizar remisiones**<!-- Autorizza Bolle --> hacen que siempre se requiera autorización para el pedido o la remisión<!-- ddt -->, independientemente de si existe disponibilidad de límite de crédito<!-- fido --> o no.

**Notas**: permite añadir una nota libre a la operación de bloqueo (o desbloqueo, si se mantiene la fila).