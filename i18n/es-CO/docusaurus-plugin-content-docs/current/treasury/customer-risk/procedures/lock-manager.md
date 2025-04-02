---
title: lock manager
sidebar_position: 3
---

El formulario se encuentra en Tesorería > Riesgo Cliente > Procedimientos > Gestor de Bloqueos (Lock Manager)

A través de este procedimiento se gestiona la autorización de los documentos que exceden los créditos, así como el bloqueo directo del cliente independientemente del exceso del crédito.

Recordamos que el bloqueo de documentos presupone la gestión de [**anagrafica cliente**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments) (en los clientes sujetos a crédito y según el modo elegido) y de varias tablas relacionadas con los [**tipos de documentos de venta (tipi documenti di vendita)**](/docs/configurations/tables/sales/sales-order-types) (ej. Tipo de Orden, Tipo de DDT ...) con el fin de definir qué tipos están sujetos a control y, eventualmente, a bloqueo.

## Ficha de Autorización (Scheda Autorizzazione)

El usuario que tiene derechos de acceso tiene la posibilidad de verificar la lista de documentos señalados, bloqueados, autorizados, etc.

En la cuadrícula será posible modificar el estado de ***Doc. bloqueado (Doc. bloccato)*** a **autorizzazione rilasciata*** para permitir la continuación del flujo documental relacionado con el mismo documento.

:::tip Info
Con un doble clic en la cuadrícula será posible visualizar el documento en todos sus detalles.
:::

## Ficha **blocco clienti**

Permite forzar un ***Bloqueo de pedidos (Blocco ordini)*** o ***Bloqueo de DDT (Blocco ddt)*** (o ambos mediante los respectivos indicadores) para una lista determinada de clientes, con un rango de fechas de bloqueo.

### Cómo bloquear un cliente

Por ejemplo, si el cliente ha enviado una factura impaga, la administración podría forzar el bloqueo de todas las operaciones hacia el cliente.

1. acceder a esta máscara
2. completar el campo Descripción ingresando la ficha del cliente a bloquear
3. activar los indicadores de Bloqueo de pedidos y/o del Bloqueo de DDT y completar las fechas de inicio y fin de bloqueo

:::note[MNota]
Para rehabilitar al cliente será suficiente establecer una **fecha de fin de validez** (de modo que se mantenga un registro histórico del bloqueo) o directamente eliminar la fila del sistema. 
Se almacena **el usuario y la fecha de bloqueo y de desbloqueo**.
:::

Los indicadores **Autorizar Pedido (Autorizza Ordine)** y **autorizza bolle** hacen que siempre se requiera la autorización para el pedido o el DDT, independientemente de si hay disponibilidad de crédito o no.

**Notas**: permite agregar una nota libre a la operación de bloqueo (o desbloqueo si se mantiene la fila).