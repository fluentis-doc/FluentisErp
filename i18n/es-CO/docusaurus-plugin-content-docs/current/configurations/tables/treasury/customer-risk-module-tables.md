---
title: Tablas del módulo Riesgo de Cliente
sidebar_position: 7
---

No existen tablas específicas del módulo en cuestión, pero cabe señalar que varios tipos de documento de compra y venta presentan configuraciones vinculadas al riesgo cliente.

El cliente de crédito toma los datos de los siguientes documentos del área de ventas:

**[Tipo de orden de venta](/docs/configurations/tables/sales/sales-order-types)**: el ‘flag de crédito' indica si el documento (impreso y confirmado) será considerado en el cálculo del cliente de crédito o no. El flag ‘Excluir bloqueo' excluye este tipo de documento del bloqueo de cliente;

**Tipos de notas de entrega**: el ‘flag de crédito' indica si el documento (impreso, no valorizado en factura) será considerado en el cálculo del cliente de crédito o no. El flag ‘Excluir bloqueo' excluye este tipo de documento del bloqueo de cliente;

**[Tipos de factura](/docs/configurations/tables/purchase/purchase-invoices-type)**: el ‘flag de crédito' indica si el documento (impreso, no contabilizado) será considerado en el cálculo del cliente de crédito o no. El flag ‘Excluir bloqueo' excluye este tipo de documento del bloqueo de cliente.

Por último, cada registro del cliente presenta dos configuraciones vinculadas al módulo en cuestión:

**Tipo de control de crédito:** 

**Bloqueo de documento y monitor de dependecia**: el documento del área de ventas que exceda el crédito será bloqueado y deberá ser autorizado para continuar con las siguientes etapas del flujo documental;

**Monitor de confianza**: simplemente se realizará un control del crédito con un posible mensaje al usuario en caso de superación;

**Bloqueo de grupo**: como en el primer caso, pero el cálculo es acumulativo para todas las empresas de la base de datos que comparten el mismo registro de cliente;

**Monitor de grupo**: como en el segundo, pero el cálculo es acumulativo para todas las empresas de la base de datos que comparten el mismo registro de cliente.

La segunda configuración es el check ‘control de exposición', que hace visible al cliente en la pantalla de exposición de clientes.