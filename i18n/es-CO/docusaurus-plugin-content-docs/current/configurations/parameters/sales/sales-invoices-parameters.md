---
title: parametri fatture di vendita
sidebar_position: 5
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está interesada por el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

Los parámetros de las facturas de venta permiten la configuración básica para gestionarlas correctamente y de acuerdo con las solicitudes específicas de cada empresa. La ventana relacionada con estos parámetros consta de 4 pestañas diferentes: General (Generale), Cumplimiento (Evasione), Descarga (Scarico) y Analítica (Analitica).

### General (Generale)

**gestione doppia unità misura**: si está activo, las líneas de la factura mostrarán las dos columnas UM Alternativa y Cantidad Alternativa, por lo que será posible gestionar la doble unidad de medida, considerando siempre que es la unidad de medida principal sobre la cual se realizan los controles para el cumplimiento. 

**Propuesta automática UM alternativa (Proposta automatica UM alternativa)**: este indicador se vuelve editablesolo si se ha activado el indicador de gestión de la doble unidad de medida y permite mostrar en la pestaña de artículos de la factura la unidad de medida alternativa establecida en el registro del artículo, en la columna correspondiente 'UM alternativa'; si no está activo, no se propone la unidad de medida.

**Control de Disponibilidad (Controllo Disponibilità)**: este indicador y los otros relacionados con el control, visualización y obligatoriedad en relación al área, en la versión actual no son gestionados.

**Unidad de medida de volumen/pesos predeterminada (Unità di misura volume/pesi predefinita)**: estas unidades de medida se consideran como UM predeterminadas para proponer en la pestaña [Transporte (Trasporto)](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) del DDT, como unidad de medida de volumen y pesos; el dato es modificable en los documentos.

**ricerca prezzi articoli in tutti i listini predefiniti**: cuando se buscan el precio y los descuentos para un artículo dentro de una factura, el sistema sigue reglas basadas en las configuraciones establecidas en el registro del cliente, en la sección *Listinos*. Si está activada la opción 'predeterminada' en un determinado tipo de lista, la búsqueda de precios y descuentos se centrará solo en ese tipo específico; si el indicador "predeterminado" no está activo, el sistema extenderá la búsqueda a todos los tipos de listas presentes, siguiendo un orden de prioridad. En práctica, con el indicador 'predeterminado' activo, el sistema primero buscará una lista válida para el tipo predeterminado; si no encuentra resultados, pasará a verificar las otras tipos de lista en orden de prioridad. Sin embargo, si en el registro del cliente no hay ningún tipo de lista configurada como 'predeterminada' y solo hay prioridades, este parámetro no influirá en la búsqueda, incluso si está activo.

**proponi provvigione per gli articoli omaggio**: con este indicador se propondrán las comisiones del agente también para las líneas de artículo de tipo regalo, como ocurre para las líneas de tipo Artículo Codificado.

**Inserción de comisiones en los tipos 6 y 7 (Acantidad/Storno) (Inserimento provvigioni nei tipi 6 e 7 (Acconto/Storno))**: si está activo, permite la inserción y gestión de las comisiones también para los tipos de línea 6 y 7 de las facturas. Para más detalles, consulte el artículo relacionado con la [inserción de la factura (inserimento della fattura)](/docs/sales/sales-invoices/invoicing/sales-invoice).

**consentire sconti per gli articoli omaggio**: con este indicador se calcularán los descuentos también para los artículos de regalo y afectarán los totales.

**Precios negativos de las notas de crédito (Prezzi negativi delle note di credito)**: si está activo, el sistema notificará una advertencia en caso de que haya precios positivos dentro de las notas de crédito. Si no está activo, el sistema no hará ningún control y no devolverá ninguna advertencia.

**verifica articoli in esaurimento**: con este indicador se activa la gestión de artículos en agotamiento; si en el registro del artículo hay una Fecha de agotamiento y el indicador correspondiente, Fluentis advertirá al usuario con un pop up si el artículo se inserta en el documento.

**[Habilitar Widget de descuentos simplificado (Abilita Widget sconti semplificato)](/docs/sales/sales-flow/discount-widget)**: al activar este indicador en la sección Artículos se mostrarán dos nuevas columnas: *sconti articolo* y *sconti finali articolo*. La columna *sconti articolo* es modificable y muestra los descuentos aplicados automáticamente según las configuraciones relacionadas con el cliente, el artículo, la lista o la categoría de descuento. El usuario tiene la posibilidad de ingresar, modificar o eliminar los descuentos directamente en esta columna. Para utilizar este widget es necesario que, además de activar el indicador, se especifique en el tipo de factura qué tipo de descuento utilizar.

**uso articolo cliente**: si se establece, este indicador insertará, en la cuadrícula de artículos de la factura, las columnas para el Código y la Descripción del cliente ingresados en el registro del artículo, pestaña Cliente.

**uso barcode**: si se establece, este indicador insertará, en la cuadrícula de artículos de la factura, la columna para mostrar el código de barras del artículo.

**codice operatore obbligatorio**: este indicador hace que sea obligatorio completar el campo *operatore* en la cabecera.

**blocca inserimento documento in date festive da calendario di fabbrica**: si está activo, el sistema no permite la inserción de la oferta en días festivos (primero se controla el Calendario de Producción de la empresa, luego el Calendario de Capacidades Productivas); si no está activo, el sistema no realiza ningún control y permite la inserción del documento.

**ricalcola trasporto**: este indicador asegura que en la pestaña [Transporte (Trasporto)](/docs/sales/sales-invoices/invoicing/sales-invoice) de la factura se muestren los totales de peso, volumen y paquetes de las líneas del documento; sin este indicador, los campos no se completarán.

**riferimenti esterni ordine**: este indicador asegura que los campos *Nuestro (Nostro)* y *vostro riferimento* se transfieran de las líneas de pedido/DDT a las líneas de la factura.

**mantieni prezzi da ordini per gli scaglioni**: se utiliza en el cumplimiento de los pedidos en la factura en caso de que la cantidad despachada sea diferente (normalmente parcial) a la cantidad ordenada para la cual se ha ingresado un precio o un descuento en escalonia de cantidad. Si el precio o el descuento no dependen de la cantidad entregada, sino solo de la cantidad en orden, este indicador debe estar activo; si el precio o el descuento en escalón no debe ser ingresado en el documento de entrega en caso de que la entrega no se realice por la cantidad total del pedido, el indicador no debe ser activado.

### Evasión (Evasione)

**pagamento**: especifica el valor usado para el pago de la factura del cliente en caso de cumplimiento múltiple de la orden de venta: *primo ordine*, *anagrafica* o *selezione manuale*.

**destinatario**: especifica el valor usado para el destinatario del pedido del cliente en caso de cumplimiento múltiple de la orden de venta: *primo ordine*, *anagrafica* o *selezione manuale*.

**Recalcular CDC/CDP (Ricalcola CDC/CDP)**: en caso de haber elegido generar la factura a partir del pedido del cliente con el procedimiento correspondiente, al activar este indicador, el sistema recalculará los centros de costo y de beneficio en la factura, sin considerar los que se establecieron en la orden de venta. Si no está activo, el sistema no recalculará estos datos, sino que mantendrá los ingresados en el pedido del cliente.

**Visualización de la cuadrícula de cumplimiento (Visualizzazione griglia evasione)**: si está activo, el indicador habilita la modalidad de cuadrícula en el formulario de cumplimiento de DDT de venta.

**Visualización de árbol de cumplimiento (Visualizzazione tree evasione)**: si está activo, el indicador habilita la modalidad de árbol en el formulario de cumplimiento de DDT de venta.

### Descarga (Scarico)

**crea registrazione con la data del documento**: si está activo, el registro de almacén se realiza con la misma fecha de la factura, y no será necesario especificar la fecha de registro en el formulario de descarga. Si no está activo, será necesario especificar la fecha en el formulario de descarga de la factura.

**Prioridad de almacén y causal de descarga en las líneas de artículos de los DDT (Priorità magazzino e causale di scarico alle righe articoli dei DDT)**: si está activo, el almacén y la causal de descarga se leen desde las líneas de la factura; si no se activa, se utilizarán el almacén y la causal ingresadas en los campos siguientes (Almacén y Causal de almacén).

**carico/scarico automatico**: si está activo, la descarga del DDT se realizará automáticamente al activar el indicador Impreso (Stampata). Si no está activo, la descarga debe hacerse con el botón correspondiente presente en la barra de ribbon del formulario de inserción de facturas (ver [Inserción de facturas de venta (Inserimento fatture di vendita)](/docs/sales/sales-invoices/invoicing/sales-invoice)) o con el procedimiento correspondiente.

**avviso articoli fittizi**: si está activo, durante la descarga de la factura, el sistema controlará si hay artículos ficticios y, en caso de haberlos, aparecerá un mensaje que permitirá al usuario elegir si completar el procedimiento o no; en caso de respuesta afirmativa, toda la factura será descargada (excepto los artículos ficticios), mientras que en caso de respuesta negativa, la factura NO será descargada.

### Analítica (Analitica)

Esta pestaña especifica con qué prioridad se recupera el Centro de Costos (CDC) o el Centro de Beneficios (CDP) en la línea del documento.  
Es posible modificar las prioridades utilizando los botones **sposta su**![](/img/neutral/common/move-up.png) y **sposta giù**![](/img/neutral/common/delete-cc.png).  
*Valores predeterminados (Valori di default)*: el CDC o CDP se recupera del [Tipo de facturación (Tipo fatturato)](/docs/configurations/tables/sales/sales-turnover) si está presente. Para más detalles, consulte la tabla [Tipo de facturación (Tipo fatturato)](/docs/configurations/tables/sales/sales-turnover).  
Si no está presente en el tipo de facturación, el sistema lo buscará en el registro del cliente (anagrafica Cliente). Si no está presente, se buscará en el registro del artículo y, posteriormente, a nivel de almacén.  
El indicador **Evalúa la prioridad de cada dimensión (Valuta la priorità di ogni dimensione)** asegura que en los documentos los CDC/CDP se agrupen por dimensión, en la pestaña Analítica.