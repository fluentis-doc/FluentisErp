---
title: Tablas del módulo de Riesgo del cliente (Tabelle modulo Rischio cliente)
sidebar_position: 7
---

No hay tablas específicas del módulo en cuestión, pero se debe señalar que varios tipos de documentos en compra y venta presentan configuraciones relacionadas con el riesgo del cliente.

El límite del cliente toma los datos de los siguientes documentos del área de ventas:

**[Tipo de pedido del cliente (Tipo ordine cliente)](/docs/configurations/tables/sales/sales-order-types)**: el ‘indicador de límite (flag fido)’ indica si el documento (impreso y confirmado) se considera en el cálculo del límite del cliente o no. El indicador ‘Excluir bloqueo (Escludi blocco)’ excluye este tipo de documento del bloqueo del cliente;

**Tipos de DDT (Tipi DDT)**: el ‘indicador de límite (flag fido)’ indica si el documento (impreso, no valorado en la factura) se considera en el cálculo del límite del cliente o no. El indicador ‘Excluir bloqueo (Escludi blocco)’ excluye este tipo de documento del bloqueo del cliente;

**[Tipos de factura (Tipi fattura)](/docs/configurations/tables/purchase/purchase-invoices-type)**: el ‘indicador de límite (flag fido)’ indica si el documento (impreso, no contabilizado) se considera en el cálculo del límite del cliente o no. El indicador ‘Excluir bloqueo (Escludi blocco)’ excluye este tipo de documento del bloqueo del cliente.

Finalmente, cada ficha del cliente presenta dos configuraciones relacionadas con el módulo en cuestión:

**El tipo de control de límite (tipo controllo fido):** 

**Bloqueo de documento y control de límite (Blocco doc. e monitor fido)**: el documento del área de ventas que exceda el límite será bloqueado y, por lo tanto, será necesario autorizarlo para proceder a las siguientes fases del flujo documental;  

**monitor fido**: simplemente se realizará un control del límite con un posible mensaje al usuario sobre el exceso ocurrido;  

**blocco di gruppo**: al igual que en el primero, pero el cálculo es acumulativo para todas las empresas de la base de datos que pertenecen a la misma ficha de cliente;  

**monitor di gruppo**: al igual que en el segundo, pero el cálculo es acumulativo para todas las empresas de la base de datos que pertenecen a la misma ficha de cliente.

La segunda configuración es la verificación ‘control de exposición (controllo esposizione)’, que hace visible al cliente en la máscara de exposición de clientes.