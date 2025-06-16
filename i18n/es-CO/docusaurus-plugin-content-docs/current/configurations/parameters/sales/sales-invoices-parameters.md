---
title: Parámetros de facturas de venta (Parametri fatture di vendita)
sidebar_position: 5
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está relacionada con el procedimiento de [**Inicio Rápido** (Fast Start)](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

Los parámetros de las facturas de venta permiten la configuración básica para gestionarlas correctamente y de acuerdo con las solicitudes específicas de cada empresa. La ventana relacionada con estos parámetros consta de 4 pestañas diferentes: General (Generale), Cumplimiento (Evasione), Descarga (Scarico) y Analítica (Analitica).

### General (Generale)

**Gestión de doble unidad de medida (Gestione doppia unità misura)**: si está activo, en las líneas de la factura se mostrarán las dos columnas UM Alternativa y Cantidad Alternativa, por lo que será posible gestionar la doble unidad de medida, considerando siempre que es la unidad de medida principal sobre la cual se realizan los controles para el cumplimiento.  

**Propuesta automática de UM alternativa (Proposta automatica UM alternativa)**: este indicador se vuelve editable solo si se ha activado el indicador de gestión de la doble unidad de medida y permite mostrar en la pestaña de artículos de la factura la unidad de medida alternativa establecida en el registro del artículo, en la columna 'UM alternativa'; si no está activo, la unidad de medida no se propone.  

**Control de Disponibilidad (Controllo Disponibilità)**: este indicador y los demás relacionados con el control, visualización y obligatoriedad con la consideración por área, en la versión actual, no se gestionan.  

**Unidad de medida de volumen/pesos predeterminada (Unità di misura volume/pesi predefinita)**: estas unidades de medida se consideran como UM por defecto que se propondrán en la pestaña [Transporte (Trasporto)](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) del DDT, como unidad de medida de volumen y pesos; el dato es modificable en los documentos.  

**Búsqueda de precios de artículos en todos los listados predeterminados (Ricerca prezzi articoli in tutti i listini predefiniti)**: al buscar el precio y los descuentos para un artículo dentro de una factura, el sistema sigue reglas basadas en la configuración establecida en el registro del cliente, bajo la sección *Listinos*. Si está activada la opción 'default' en un determinado tipo de listado, la búsqueda de precios y descuentos se centrará solo en esa tipología específica de listado; si el indicador "default" no está activo, el sistema extenderá la búsqueda a todos los tipos de listados presentes, siguiendo un orden de prioridad. En práctica, con el indicador 'default' activo, el sistema buscará primero un listado válido para la tipología predefinida; si no encuentra resultados, pasará a verificar las otras tipologías de listado en orden de prioridad establecida. Sin embargo, si en el registro del cliente no hay ninguna tipología de listado configurada como 'default' y solo hay prioridades, este parámetro no influirá en la búsqueda, aunque esté activo.  

**Proponer comisión para los artículos promocionales (Proponi provvigione per gli articoli omaggio)**: con este indicador se propondrán las comisiones del agente también para las líneas de artículo de tipo promoción, como ocurre con las líneas de tipo Artículo Codificado.  

**Inserción de comisiones en los tipos 6 y 7 (Acconto/Storno) (Inserimento provvigioni nei tipi 6 e 7 (Acconto/Storno))**: si está activo, permite la inserción y gestión de las comisiones también para los tipos de línea 6 y 7 de las facturas. Para más detalles, consulte el artículo relacionado con la [inserción de la factura](/docs/sales/sales-invoices/invoicing/sales-invoice).

**Permitir descuentos para artículos promocionales (Consentire sconti per gli articoli omaggio)**: con este indicador se calcularán los descuentos también para los artículos promocionales y afectarán los totales.

**Precios negativos en notas de crédito (Prezzi negativi delle note di credito)**: si está activo, el sistema notificará un aviso si hay precios positivos en notas de crédito. Si no está activo, el sistema no realizará ningún control y no devolverá ningún aviso.

**Sin gastos de cobro en notas de crédito (Senza spese incacco in note di accredito)**: si está activo, no se incluirán gastos de cobro en las notas de crédito.

**Verificación de ventas por precio de lotes (Verifica vendite prezzo lotti)**: campo obsoleto, ya no se utiliza.

**Número máximo de líneas (Numero massime righe)**: es el número máximo de artículos permitidos en una factura, activo solo en la versión rumana.

**Verificar artículos en agotamiento (Verifica articoli in esaurimento)**: con este indicador se activa la gestión de los artículos en agotamiento; si en el registro del artículo hay una Fecha de agotamiento y el indicador correspondiente, Fluentis avisará al usuario con un popup si el artículo se inserta en el documento.  

**[Habilitar Widget de descuentos simplificados (Abilita Widget sconti semplificato)](/docs/sales/sales-flow/discount-widget)**: al activar este indicador en la sección Artículos, se mostrarán dos nuevas columnas: *Descuentos Artículo (Sconti Articolo)* y *Descuentos Finales Artículo (Sconti Finali Articolo)*. La columna *Descuentos Artículo* es editable y muestra los descuentos aplicados automáticamente según las configuraciones relativas al cliente, al artículo, al listado o a la categoría de descuento. El usuario tiene la posibilidad de ingresar, modificar o eliminar descuentos directamente en esta columna. Para utilizar este widget, es necesario que, además de activar el indicador, se especifique en el tipo de factura qué tipo de descuento utilizar. 

**Uso de artículo cliente (Uso articolo cliente)**: si se activa, este indicador insertará, en la cuadrícula de artículos de la factura, las columnas para el Código y la Descripción del cliente ingresados en el registro del artículo, pestaña Cliente.  

**Uso de código de barras (Uso barcode)**: si se activa, este indicador insertará, en la cuadrícula de artículos de la factura, la columna para mostrar el código de barras del artículo.  

**Código de operador obligatorio (Codice operatore obbligatorio)**: este indicador hace que se vuelva obligatorio completar el campo *Operador* en la cabecera.  

**Bloquear la entrada de documentos en días festivos según el calendario de producción (Blocca inserimento documento in date festive da calendario di fabbrica)**: si está activo, el sistema no permitirá la entrada de la oferta en días festivos (se revisa primero el Calendario de Producción de la empresa, luego el Calendario de capacidades productivas); si no está activo, el sistema no realizará ningún control y permitirá ingresar el documento.  

**Controlar intra-CEE (Controlla intra-cee)**: si está activo y el país del cliente pertenece a la Unión Europea, el sistema verifica que el [Tipo de Factura (Tipo Fattura)](/docs/configurations/tables/sales/invoices-type) tenga activado el indicador *Intracomunitaria* y que, en el registro del cliente, esté habilitado el indicador *Intrastat*; si estas condiciones no se cumplen, se mostrará un mensaje de error: "El tipo de documento es intracomunitario, pero el código del cliente no está marcado como intracomunitario".  

**Recalcular transporte (Ricalcola trasporto)**: este indicador hace que en la pestaña [Transporte (Trasporto)](/docs/sales/sales-invoices/invoicing/sales-invoice) de la factura se muestren los totales de peso, volumen y bultos de las líneas del documento; sin este indicador, los campos no se completarán.  

**Referencias externas del pedido (Riferimenti esterni ordine)**: este indicador hace que los campos *Nuestro* y *Su referencia* se transfieran desde las líneas del pedido/DDT a las líneas de la factura.  

**Mantener precios de pedidos para los escalones (Mantieni prezzi da ordini per gli scaglioni)**: se utiliza al cumplir los pedidos en factura en caso de que la cantidad cumplida sea diferente (generalmente parcial) de la cantidad ordenada para la cual se ha ingresado un precio o un descuento por escalón de cantidad. Si el precio o el descuento no dependen de la cantidad entregada sino solo de la cantidad en pedido, este indicador debe activarse; si el precio o el descuento por escalón no debe ingresarse en el documento de entrega en caso de que el cumplimiento no ocurra para la cantidad total del pedido, el indicador no debe activarse.  

**Contabilización de embalajes (Contabilizzazione imballi)**: si está activo, considera en la contabilización también las líneas de embalaje.

### Cumplimiento (Evasione)

**Pago (Pagamento)**: especifica el valor utilizado para el pago de la factura del cliente en caso de cumplimiento múltiple de la orden de venta: *Primer pedido (Primo ordine)*, *Registro (Anagrafica)* o *Selección manual (Selezione manuale)*.  

**Destinatario (Destinatario)**: especifica el valor utilizado para el destinatario del pedido del cliente en caso de cumplimiento múltiple de la orden de venta: *Primer pedido (Primo ordine)*, *Registro (Anagrafica)* o *Selección manual (Selezione manuale)*.  

**Recalcular CDC/CDP (Ricalcola CDC/CDP)**: en caso de que se haya elegido generar la factura a partir del pedido del cliente mediante el procedimiento correspondiente, al activar este indicador, el sistema recalculará los centros de costos y de beneficio en la factura, sin considerar los establecidos en el pedido de venta. Si no está activo, el sistema no recalculará estos datos, sino que mantendrá los ingresados en el pedido del cliente;  

**Visualización de cuadrícula de cumplimiento (Visualizzazione griglia evasione)**: si está activo, el indicador habilita el modo de cuadrícula en el formulario de cumplimiento de DDT de venta.  

**Visualización en formato árbol de cumplimiento (Visualizzazione tree evasione)**: si está activo, el indicador habilita el modo de árbol en el formulario de cumplimiento de DDT de venta.  

**Propuesta de lotes (Proposta lotti)**: si no hay lotes en la línea del pedido, al cumplir, busca lotes disponibles en el inventario, si el tipo de extracción *no* es *Manual*.  

### Descarga (Scarico)

**Crear registro con la fecha del documento (Crea registrazione con la data del documento)**: si está activo, el registro de almacén se realiza con la misma fecha de la factura, y no será necesario especificar la fecha de registro en el formulario de descarga. Si no está activo, será necesario especificar la fecha en el formulario de descarga de la factura;  

**Prioridad de almacén y motivo de descarga en las líneas de artículos de los DDT (Priorità magazzino e causale di scarico alle righe articoli dei DDT)**: si está activo, el almacén y el motivo de descarga se leen desde las líneas de la factura; si no está activo, se utilizarán el almacén y el motivo ingresados en los campos siguientes (Almacén y Motivo de almacén);  

**Carga/Descarga automática (Carico/Scarico Automatico)**: si está activo, la descarga del DDT se realizará automáticamente al activar el indicador Impresión. Si no está activo, la descarga deberá hacerse con el botón correspondiente presente en la barra de ribbon del formulario de entrada de factura (ver [Ingreso de facturas de venta (Inserimento fatture di vendita)](/docs/sales/sales-invoices/invoicing/sales-invoice)) o mediante el procedimiento correspondiente;  

**Aviso de artículos ficticios (Avviso articoli fittizi)**: si está activo, durante la descarga de la factura, el sistema comprobará si hay artículos ficticios presentes y, en caso afirmativo, aparecerá un mensaje que permitirá al usuario elegir si completar o no el procedimiento; en caso de respuesta afirmativa, toda la factura será descargada (con excepción de los artículos ficticios), mientras que en caso de respuesta negativa, la factura NO será descargada.  

### Analítica (Analitica)

Esta pestaña especifica con qué prioridad recuperar el Centro de Costos (CDC) o Centro de Beneficios (CDP) en la línea del documento.  
Es posible modificar las prioridades utilizando los botones **Mover arriba (Sposta su)**![](/img/neutral/common/move-up.png) y **Mover abajo (Sposta Giù)**![](/img/neutral/common/delete-cc.png).  
*Valores predeterminados (Valori di default)*: el CDC o CDP se recupera del tipo de facturación si está presente. Para más detalles, consulte la tabla [Tipo de facturación (Tipo fatturato)](/docs/configurations/tables/sales/sales-turnover);  
Si no está presente en el tipo de facturación, el sistema lo buscará en el registro del cliente. Si no está presente, se buscará en el registro del artículo y posteriormente a nivel de almacén.  
El indicador **Evalúa la prioridad de cada dimensión (Valuta la priorità di ogni dimensione)** hace que en los documentos los CDC/CDP se agrupen por dimensión, en la pestaña Analítica.
