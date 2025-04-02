---
title: testata
sidebar_position: 2
---

Después de seleccionar los datos obligatorios en la sección superior, el usuario puede continuar ingresando los siguientes datos [manualmente (manualmente)](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o con la [ayuda de campo (help di campo)](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o, dependiendo de los datos ingresados en el registro del subcontratista ('anagrafica del terzista'), la aplicación completa los campos *automáticamente (automaticamente)*.

Al ingresar el **fornitore**, se *proponen (proposti)* automáticamente todos los datos específicos de la pestaña **testata**, de acuerdo con los datos establecidos anteriormente en el [registro del proveedor (anagrafica fornitore)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) en los campos correspondientes a su dirección y en las *secciones*:  

- **divisa**: [Moneda (Divisa)](/docs/guide/common/glossary/glossary-intro#currency), [Tasa de cambio (Cambio)](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha de valor (Data valuta)](/docs/guide/common/glossary/glossary-intro#currency-date).
- **nazione**: [País (Nazione)](/docs/guide/common/glossary/glossary-intro#country), [Idioma (Lingua)](/docs/guide/common/glossary/glossary-intro#language), [Zona (Zona)](/docs/guide/common/glossary/glossary-intro#zone)
- **spedizione**: [Envío (Spedizione)](/docs/guide/common/glossary/glossary-intro#shipment), [Flete (Porto)](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje (Imballo)](/docs/guide/common/glossary/glossary-intro#packing), [Lista de precios (Listino)](/docs/guide/common/glossary/glossary-intro#sales-price-list) y su [rango de validez (intervallo di validità)](/docs/guide/common/glossary/glossary-intro#validity-date)

*Otros campos*:  

**Estado DDT**: con estos 2 indicadores se identifica el estado del DDT, que puede ser impreso (después de que se haya iniciado la impresión física del reporte del DDT de entrega) y descargado (después de que se haya realizado la descarga del mismo DDT del almacén). Si el DDT no ha sido impreso, no se puede descargar;  

**nostro/vostro riferimento**: cuando se completa el procedimiento [Cumplimiento de pedido (Evasione da ordine)](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), también se propone la información del campo homónimo del pedido;  

**progetto**: usando la [ayuda de campo (help di campo)](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), se puede vincular el documento a un proyecto.  

**Botones específicos**

> [Entregas previstas (Consegne previste)](/docs/subcontractor/delivery-note/insert-delivery-note/header-procedures/execute-from-order): llama el procedimiento para crear un DDT a partir de un pedido. Se activa ingresando el proveedor y el tipo de DDT. El pedido a cumplir debe tener configurado el indicador *stampato* y la *data conferma ordine* valorada;  
> **scarico automatico**: utilizado para descargar automáticamente el almacén con los artículos seleccionados. Este campo será editable solo una vez activado el campo *stampato*.

### Pagos

Las **soluzioni di pagamento** se informan automáticamente desde el *Registro del proveedor > pestaña Pagos* y pueden ser modificadas/eliminadas por el usuario.

Si al **tipo pagamento** se le asocia un descuento financiero, el monto del descuento se considera solo a efectos contables, es decir, en los vencimientos del documento y no en el total del DDT.

Si el documento se origina de un pedido, los tipos de pago pueden ser recuperados del primer documento o del registro del proveedor.  

*Botones específicos*

> **Agregar/Eliminar pagos (Inserisci/Cancella pagamenti)**: utilizados para agregar/eliminar las filas de pago seleccionadas.

### Descuentos

Se proponen solo los descuentos predeterminados recuperados del *Registro del proveedor > pestaña Descuentos* y pueden ser modificados/eliminados por el usuario.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### Agentes

Indica el código del agente y su comisión para cada línea de artículo. Se propone el código y el porcentaje definidos en el *Registro del subcontratista > pestaña Agentes*.

Si la comisión no está vinculada al subcontratista en su registro, se debe insertar el agente pero con comisión NULL, porque si estuviera con comisión 0, significaría que el agente está vinculado al subcontratista pero no recibe comisión.

La misma sección se volverá a proponer para cada línea de artículo en su pestaña *Agentes*. 

**Botón específico**

**cancella agenti**: permite eliminar los agentes seleccionados.