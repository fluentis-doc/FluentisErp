---
title: parametri ordini fornitori
sidebar_position: 2
---

Los parámetros de los pedidos de proveedores permiten la configuración básica para gestionar correctamente los pedidos de proveedores de acuerdo con las solicitudes específicas de cada empresa.  

La ventana se compone de botones y tres pestañas diferentes: *generale*, *carico* y *analitica*.

### General (Generale)

**gestione doppia unità misura**: solo si está activado, el sistema puede gestionar la unidad de medida alternativa en el pedido del proveedor.

**Propuesta automática de UM alternativa (Proposta automatica UM alternativa)**: si está activado, se propondrá la cantidad relacionada con la unidad de medida alternativa, siempre que se haya configurado una como predeterminada en el registro del artículo. Este indicador solo se puede activar si el indicador anterior está activado.

**costo zero in assenza di listini**: si está activo, en ausencia de un listado válido, poblará el precio con el valor cero. Si esta opción no está marcada, el campo se valorará con el último costo del artículo, si está presente.

**blocca inserimento documento in date festive**: si está activo, el sistema no permite la inserción del pedido en días festivos (sábado, domingo y festividades). Si no está activo, el sistema no realiza ningún control y permite ingresar el pedido.

**proponi marca con priorità listino fornitore/ordine cliente**: ya no se utiliza.

**permetti modifica iva**: si está activo, en caso de [Creación automática de pedidos desde solicitudes de compra (Creazione automatica Ordini da Richieste di acquisto)](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) se propone el código de IVA desde el registro del proveedor.

**codice operatore obbligatorio**: si está activo, es necesario especificar el código del operador en el encabezado, debajo del campo *nazione*; de lo contrario, no será posible guardar el pedido. Cuando el indicador no está activo, este dato es opcional.

**ricerca prezzi articoli in tutti i listini predefiniti**: si está activo, el precio del artículo ingresado en la línea del pedido del proveedor se buscará en todos los listados predeterminados del registro del proveedor, además del listado por defecto. Si no está activo, el precio del artículo se buscará solo en el listado predeterminado presente en el encabezado del pedido, pero no en otros listados para el mismo proveedor con fechas de validez diferentes.

**uso articolo fornitore**: si está activo, en la cuadrícula de artículos del pedido del proveedor también se propone el campo para ingresar y buscar el código del artículo del proveedor. Si no está activo, este campo no será visible.

**verifica articoli in esaurimento**: si está activado, el sistema realiza un control sobre la disponibilidad de los artículos en la línea del pedido y avisa si el artículo está agotándose, es decir, si en el [registro del artículo](/docs/erp-home/registers/items/create-new-item) se ha activado el indicador *in esaurimento*.

**contabilizzazione imballi**: permite contabilizar, en contabilidad general, también las líneas con artículos de naturaleza embalaje que usualmente se gestionan para tener la verificación de las existencias de los [Embalajes a devolver (Imballi a rendere)](/docs/configurations/tables/logistics/package-to-be-returned).

### Carga (Carico)

En esta pestaña se definen los parámetros utilizados para el [Recepción de mercancías (Carico ricevimento merci)](/docs/purchase/goods-reception/procedures/good-receipt-load).

**crea registrazione con la data del documento**: si está activo, el registro de almacén se realiza con la misma fecha del pedido y no será necesario especificar la fecha de registro en el formulario de carga. Si no está activo, será necesario especificar la fecha en el formulario de carga.

**priorità magazzino e causale di carico**: si está activo, asegura que la carga de almacén se realice utilizando el **magazzino** y el **causale** definidos en esta pestaña. Si el indicador no está activado, utiliza el almacén y la causa definidos en las líneas de recepción de mercancías, si están presentes; de lo contrario, se consideran los parámetros establecidos en el procedimiento de carga de recepción de mercancías.

### Analítica (Analitica)

En esta pestaña se especifica con qué prioridad recuperar el centro de costo (CdC) o centro de beneficio (CdP) en la línea del documento.

Es posible modificar las prioridades utilizando los siguientes botones en la barra de herramientas:

> **sposta su**  
> **sposta giù**.

*Valores predeterminados (Valori di default)*: el CDC o CDP se recupera del tipo de facturación si está presente. Para más detalles, consulte la tabla [Tipo de Facturación de Compras (Tipo Fatturato Acquisti)](/docs/configurations/tables/purchase/purchase-invoices-type). Si no está presente en el tipo de facturación, el sistema lo buscará en el *Registro de proveedores (Anagrafica fornitore)*. Si tampoco está allí, se buscará en el *anagrafica articolo* y posteriormente a nivel de *magazzino*.

**ricalcolo**: si está activo, este indicador recalcula los centros de costo/profitos de acuerdo con la prioridad seleccionada.

**Centro de costo/ingreso obligatorios (Centro di costo/ricavo obbligatori)**: si está activo, este indicador hace obligatoria la imputación de los centros de costo/profitos.

**valuta la priorità su ogni dimensione**: si está activo, este indicador permite evaluar cada prioridad ingresada en la parte superior para entender si hay dimensiones adicionales que aún no están valoradas. Por ejemplo, supongamos que en el Registro de artículos se tiene el centro de costo de la dimensión *Unidad de negocio (Business unit)* y en el Tipo de facturación de compras la dimensión *direzionale*. Si el indicador no está activo, el sistema evalúa solo el CdC presente en el Registro de artículos; si el indicador está activo, después de haber cargado el CdC presente en el Registro de artículos, el sistema también evalúa la dimensión presente en el Tipo de facturación de compras (en nuestro ejemplo, la dimensión *Direccional*) y si es diferente de aquellas que ya ha gestionado (*Unidad de negocio*), carga el centro y continúa con la verificación de las otras prioridades.