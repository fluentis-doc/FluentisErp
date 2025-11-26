---
title: Tablas del módulo Riesgo cliente
sidebar_position: 7
ai_generated: true
---

No existen tablas específicas del módulo en cuestión, pero cabe señalar que varios tipos de documento de compra y venta presentan configuraciones vinculadas al riesgo cliente<!-- rischio cliente -->.

El crédito cliente<!-- fido cliente --> toma los datos de los siguientes documentos del área de ventas<!-- area vendita -->:

**[Tipo de pedido de cliente](/docs/configurations/tables/sales/sales-order-types)<!-- Tipo ordine cliente -->**: el ‘flag de crédito<!-- flag fido -->' indica si el documento (impreso y confirmado) será considerado en el cálculo del crédito cliente<!-- fido cliente --> o no. El flag ‘Excluir bloqueo<!-- Escludi blocco -->' excluye este tipo de documento del bloqueo de cliente<!-- blocco cliente -->;

**Tipos de albarán<!-- Tipi DDT -->**: el ‘flag de crédito<!-- flag fido -->' indica si el documento (impreso, no valorizado en factura) será considerado en el cálculo del crédito cliente<!-- fido cliente --> o no. El flag ‘Excluir bloqueo<!-- Escludi blocco -->' excluye este tipo de documento del bloqueo de cliente<!-- blocco cliente -->;

**[Tipos de factura](/docs/configurations/tables/purchase/purchase-invoices-type)<!-- Tipi fattura -->**: el ‘flag de crédito<!-- flag fido -->' indica si el documento (impreso, no contabilizado) será considerado en el cálculo del crédito cliente<!-- fido cliente --> o no. El flag ‘Excluir bloqueo<!-- Escludi blocco -->' excluye este tipo de documento del bloqueo de cliente<!-- blocco cliente -->.

Por último, cada ficha del cliente<!-- anagrafica cliente --> presenta dos configuraciones vinculadas al módulo en cuestión:

**El tipo de control de crédito<!-- tipo controllo fido -->:** 

**Bloqueo de documento y monitor de crédito<!-- Blocco doc. e monitor fido -->**: el documento del área de ventas<!-- area vendita --> que exceda el crédito<!-- fido --> será bloqueado y deberá ser autorizado para continuar con las siguientes etapas del flujo documental;

**Monitor de crédito<!-- Monitor fido -->**: simplemente se realizará un control del crédito<!-- fido --> con un posible mensaje al usuario en caso de superación;

**Bloqueo de grupo<!-- Blocco di gruppo -->**: como en el primer caso, pero el cálculo es acumulativo para todas las empresas de la base de datos que comparten la misma ficha de cliente<!-- anagrafica cliente -->;

**Monitor de grupo<!-- Monitor di gruppo -->**: como en el segundo, pero el cálculo es acumulativo para todas las empresas de la base de datos que comparten la misma ficha de cliente<!-- anagrafica cliente -->.

La segunda configuración es el check ‘control de exposición<!-- controllo esposizione -->', que hace visible al cliente en la pantalla de exposición de clientes<!-- esposizione clienti -->.