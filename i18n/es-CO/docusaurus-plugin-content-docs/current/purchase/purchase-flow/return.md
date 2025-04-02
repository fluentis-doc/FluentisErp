---
title: Gestión de Devoluciones y Notas de Crédito (Gestione Resi e Note di Accredito)
sidebar_position: 3
--- 

La gestión de **devoluciones a proveedores (resi a fornitore)** y **notas de crédito (note di accredito)** permite administrar los flujos de retorno de mercancías y los ajustes financieros relacionados con los proveedores.    

:::important Recuerda (Ricorda)
Las **devoluciones a proveedores (resi fornitore)** se diferencian de otros tipos de facturas porque la *natura fattura* (presente en la tabla [Tipos de facturas de compra (Tipi fatture di acquisto)](/docs/configurations/tables/purchase/purchase-invoices-type)) es **nota accredito da fornitore**. De manera similar, el DDT de devolución tendrá [Naturaleza (Natura)](/docs/configurations/tables/purchase/purchase-delivery-notes-type) **reso**. 
:::

### Creación de la devolución a proveedor (Creazione del Reso fornitore)

Cuando se devuelve un producto a un proveedor, el proceso comienza con la creación de un documento de devolución en el sistema. Este documento puede ser ingresado manualmente (creando un DDT de *reso* o una *Nota de crédito (Nota di accredito)* e ingresando manualmente los artículos a devolver), o automáticamente mediante el procedimiento de *storno* disponible en la búsqueda de documentos. 

En la barra de opciones de la [Búsqueda de facturas de compra (Ricerca fatture di acquisto)](/docs/purchase/purchase-invoices/insert-purchase-invoice/search-purchase-invoices) está presente el botón **storno fatturazione** (de manera similar, en la [Búsqueda de DDT de compra (Ricerca DDT di acquisto)](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/search-delivery-note) está presente el botón **storno**). Este botón permite crear una devolución asociada a la factura de compra seleccionada.    
Una vez seleccionada la factura a anular y presionado el botón, se abre la máscara **storno documento**, donde es necesario marcar los artículos a devolver e indicar la [tipología (tipologia)](/docs/configurations/tables/purchase/purchase-invoices-type) de documento a crear (se proponen solo los documentos con Naturaleza *nota accredito da fornitore*). Una vez confirmada la operación, se creará la factura de anulación, visible en la Búsqueda de facturas. La factura se crea con la fecha actual y tendrá el importe total de los artículos a anular tomado de la factura original.    

Si se crea un **DDT de devolución (DDT di reso)**, por otro lado, el sistema puede generar automáticamente la nota de crédito correspondiente utilizando los procedimientos de [Valoración de DDT de Compra (Valorizzazione DDT di Acquisto)](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization) o mediante la [Anulación de DDT (Evasione DDT)](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) desde dentro de una nueva *Nota de Crédito (Nota di Accredito)*.

Antes de ser finalizada, la nota de crédito puede ser revisada y modificada, si es necesario. Al guardar una nota de crédito, se propone la modificación de los signos de todos los tipos de gasto asociados, pero se puede decidir libremente si aceptar la modificación o no.    

También para las **resi** es posible utilizar las diferentes **stampe** previstas por el módulo, solo hay que filtrar por el tipo de documento elegido. 

### Actualización de Stock (Aggiornamento delle Scorte)

Después de haber registrado en el almacén el documento de anulación, el sistema actualiza automáticamente el stock del almacén para reflejar el retorno de la mercancía, disminuyendo el inventario y la disponibilidad de los artículos devueltos.    

### Actualización de Contabilidad (Aggiornamento della Contabilità)

Una vez contabilizada, la **nota de crédito (nota di accredito)** actualiza los registros contables, reduciendo el monto adeudado al proveedor. Esto puede resultar en una disminución del saldo pendiente o un reembolso, según los acuerdos contractuales con el proveedor.    

:::note Nota
A partir de la versión 607, las **Notas de Crédito (Note di accredito)** se gestionan con el signo negativo. Al momento de guardar la factura, **Fluentis** cambiará el signo de los artículos y los gastos, advirtiendo al usuario con un pop-up.    
La gestión de la contabilización del documento no cambia respecto al pasado, ya que el documento negativo continúa siendo deducido del registro de IVA (antes se convertía en negativo al momento de la contabilización). El envío del documento al SDI mediante la generación del archivo .xml prevé un nuevo cambio de signo en conformidad con las especificaciones técnicas para la facturación electrónica.   
La modificación en comentario se ha hecho necesaria, por tanto, especialmente para una mejor gestión de las estadísticas y las elaboraciones relacionadas.
:::