---
title: Parámetros de DDT de compra (Parametri DDT acquisto)
sidebar_position: 3
---

Los parámetros de los DDT de compra permiten la configuración básica para poder gestionar las facturas de compra correctamente y de acuerdo con las especificaciones solicitadas por cada empresa.

La ventana se compone de botones y tres pestañas diferentes: *generale*, *carico* y *analitica*.

### General (Generale)

**gestione doppia unità misura**: solo si este indicador está activado, el sistema puede gestionar la unidad de medida alternativa en los DDT de compra.

**Propuesta automática de UM alternativa (Proposta automatica UM alternativa)**: si está activado, se propone la cantidad relativa a la unidad de medida alternativa, siempre que en el registro del artículo se haya establecido una por defecto. Este indicador solo se puede activar si el indicador anterior ha sido activado.

**costo zero in assenza di listini**: si está activo, en ausencia de un listado válido, se establece el precio con el valor cero. Si esta opción no está marcada, el campo se llenará con el último costo del artículo, si está presente.

**permetti ddt con stesso numero e fornitore**: si está activo, permite la inserción de dos DDT para el mismo proveedor con el mismo número. Se recomienda dejar este indicador desactivado para permitir que el sistema realice el control de unicidad.

**Lotes y S.N. (Serial Number) obligatorios (Lotti e S.N. (Serial Number) obbligatori)**: si está activo, obliga al usuario a ingresar a nivel de línea de artículo el lote y el número de serie para todos los artículos para los cuales se prevé esta gestión. Si no está activo, el lote y el número de serie no serán datos obligatorios y será posible guardar el documento incluso sin haberlos ingresado. Se aconseja activar este indicador si se utiliza la gestión de artículos con lote.

**ricerca prezzi articoli in tutti i listini predefiniti**: si está activo, el precio del artículo ingresado en la línea de la orden de proveedor se buscará en todos los listados predeterminados del registro del proveedor, además del listado por defecto. Si no está activo, el precio del artículo se buscará solo en el listado por defecto presente en el encabezado de la orden, pero no en otros listados del mismo proveedor que tengan fechas de validez diferentes.

**Permitir descuentos para artículos de regalo (Consentire sconti per articoli omaggio)**: si está activo, permite la inserción de descuentos en las líneas de artículo de tipo regalo.

**uso articolo fornitore**: si está activo, en la cuadrícula de artículos del DDT se propone también el campo para ingresar el código de artículo del proveedor.

**verifica articoli in esaurimento**: si está activado, el sistema hace un control sobre la disponibilidad de los artículos ingresados en el DDT y avisa si el artículo está en agotamiento, es decir, si en la [ficha del artículo (anagrafica dell'articolo)](/docs/erp-home/registers/items/create-new-item) el indicador *in esaurimento* está activo.

**contabilizzazione imballi**: permite contabilizar, en contabilidad general, también las líneas con artículos de naturaleza de envase que suelen ser gestionados para tener la verificación de los stocks de los [Envases a devolver (Imballi a rendere)](/docs/configurations/tables/logistics/package-to-be-returned).

**mantieni prezzi da ordini per gli scaglioni**: se utiliza en el procedimiento de cumplimiento de órdenes en DDT en caso de que la cantidad cumplida sea diferente (normalmente parcial) a la cantidad ordenada para la cual se ha ingresado un precio o un descuento por escalón de cantidad. Si el precio o el descuento no dependen de la cantidad entregada sino solo de la cantidad en orden, este indicador debe activarse; si en cambio el precio o descuento por escalón no debe ser incluido en el documento de entrega en caso de que el cumplimiento no se realice por la cantidad total de la orden, el indicador no debe activarse.

**Activar el Control de Calidad (Attiva il Controllo Qualità)**: en progreso.

**ricalcola trasporto**: si está activo, calcula el peso y volumen a partir de los valores del registro de artículos en el documento, estableciendo automáticamente el valor del transporte. Si no está activo, el costo del transporte del DDT deberá calcularse manualmente ya que no se propondrá.

**Def U.M. volumen (Def U.M. volume)**: indica la unidad de medida por defecto para el volumen al calcular el transporte del DDT.

**def. u.m. pesi**: indica la unidad de medida por defecto para el peso al calcular el transporte del DDT.

### Carga (Carico)

**crea registrazione con la data del documento**: si está activo, el registro de almacén se realiza con la misma fecha del DDT. Si no está activo, el registro se realizará con la *data carico* indicada en el encabezado del DDT, si está presente, de lo contrario con la *data registrazione magazzino* indicada en el procedimiento de [Registro de DDT de compra en almacén (Registrazione DDT di acquisto in magazzino)](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse). Si el registro se realiza desde dentro del DDT mediante el botón *carico automatico nel magazzino* y la *data carico* no está ingresada, se utilizará la fecha actual.

**priorità magazzino e causale di carico**: si está activo, al momento del registro del DDT en el almacén se utilizan los valores establecidos en los campos a continuación: **magazzino** y **causale magazzino**. Si el indicador no está activo, el almacén y la causal de carga se leen desde las líneas del DDT. Si no están presentes en las líneas del DDT, no será posible realizar la Carga automática desde dentro de la factura de compra, pero se podrá registrar el DDT a través del procedimiento específico (ver [Registro de DDT de compra en almacén (Registrazione DDT di acquisto in magazzino)](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse)) seleccionando en la pestaña *parametri* el indicador "*Aceptar como almacén y causal los siguientes datos:*" e indicando *magazzino* y *causale* a utilizar.

**carico/scarico automatico**: si está activo, al momento de activar el indicador *controllata* en el encabezado del documento, se recibe un mensaje recordando que el parámetro de carga/descarga automática está activo y pregunta si se desea proceder. Al presionar "*sì*", el DDT se cargará en el almacén; de lo contrario, será posible cargarlo más tarde presionando el botón *carico automatico nel magazzino* en la barra de ribbon.

**avviso articoli fittizi**: si está activo, durante la carga del DDT se controla si hay artículos ficticios presentes. Si están presentes, se da un mensaje para completar el procedimiento; si la respuesta es afirmativa, todo el DDT se cargará (excepto los artículos ficticios, por supuesto). Si se responde que no, el DDT no se cargará. El artículo ficticio puede estar sin lista de materiales de primer nivel si en los parámetros MRP está declarado con tipo de aprovisionamiento de compra; de lo contrario, el registro de carga dará un mensaje de error si hay artículos ficticios en el documento a cargar.

### Analítica (Analitica)

En esta pestaña se especifica con qué prioridad recuperar el centro de costos (CdC) o centro de beneficios (CdP) en la línea del DDT.

Es posible modificar las prioridades utilizando los siguientes botones en la barra de ribbon:

> **sposta su**  
> **sposta giù**.

*Valores predeterminados (Valori di default)*: el CDC o CDP se recupera del tipo de facturación si está presente. Para más detalles, consulte la tabla [Tipo de Facturación de Compras (Tipo Fatturato Acquisti)](/docs/configurations/tables/purchase/purchase-invoices-type). Si no está presente en el tipo de facturación, el sistema lo buscará en *Registro del proveedor (Anagrafica fornitore)*. Si no está presente, se buscará en *anagrafica articolo* y posteriormente a nivel de *magazzino*.

**ricalcolo**: si está activo, recalcula los centros de costos/profitos según la prioridad elegida.

**valuta la priorità su ogni dimensione**: si está activo, este indicador permite evaluar cada prioridad ingresada en la parte superior para entender si hay dimensiones adicionales que aún no se han valorado. Por ejemplo, supongamos que en el Registro del artículo se tiene el centro de costos de la dimensión *Unidad de negocio (Business unit)* y en el Tipo de facturación de compras la dimensión *direzionale*. Si el indicador no está activo, el sistema solo evalúa el CdC presente en el Registro del artículo; si el indicador está activo, después de cargar el CdC presente en el Registro del artículo, el sistema también evalúa la dimensión presente en el Tipo de facturación de compras (en nuestro ejemplo, la dimensión *Direccional*) y si es diferente de las que ya ha gestionado (*Unidad de negocio (Business Unit)*), carga el centro y continúa con la verificación de las otras prioridades.