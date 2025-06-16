---
title: Parámetros DDT (Parametri DDT)
sidebar_position: 4
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está relacionada con el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start)

En caso de que se pretenda configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

Los parámetros de los DDT de ventas permiten la configuración básica para gestionarlos correctamente y de acuerdo con las solicitudes específicas de cada empresa. La ventana relacionada con estos parámetros consta de 4 pestañas diferentes: General (Generale), Cumplimiento (Evasione), Descarga (Scarico) y Analítica (Analitica).

### General (Generale)

**Gestión de doble unidad de medida (Gestione doppia unità misura)**: si está activo, en las líneas de DDT se mostrarán las dos columnas UM Alternativa y Cantidad Alternativa, por lo que será posible gestionar la doble unidad de medida, teniendo en cuenta que es la unidad de medida principal sobre la cual se realizan las verificaciones para el cumplimiento.

**Propuesta automática de unidad de medida alternativa (Proposta automatica UM alternativa)**: este indicador se vuelve editable solo si se ha activado el indicador de gestión de la doble unidad de medida y permite mostrar en la pestaña de artículos del DDT la unidad de medida alternativa configurada en el registro del artículo, en la columna correspondiente 'UM alternativa'; si no está activo, la unidad de medida no se propone.

**Control de disponibilidad (Controllo Disponibilità)**: este indicador y los otros relacionados con el control, visualización y obligatoriedad con la consideración por área, en la versión actual, no son gestionados.

**Unidad de medida de volumen/pesos predeterminada (Unità di misura volume/pesi predefinita)**: estas unidades de medida se consideran como UM predeterminadas a proponer en la pestaña [Transporte (Trasporto)](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) del DDT, como unidad de medida de volumen y pesos; el dato es modificable en los documentos.

**Búsqueda de precios de artículos en todos los listados predeterminados (Ricerca prezzi articoli in tutti i listini predefiniti)**: cuando se buscan el precio y los descuentos para un artículo dentro de un DDT, el sistema sigue reglas basadas en las configuraciones establecidas en el registro del cliente, bajo la sección *Listinos*. Si se activa la opción 'predeterminado' en un determinado tipo de listado, la búsqueda de precios y descuentos se centrará solo en esa tipología específica; si el indicador "predeterminado" no está activo, el sistema extenderá la búsqueda a todos los tipos de listados presentes, siguiendo un orden de prioridad. En práctica, con el indicador 'predeterminado' activo, el sistema buscará primero un listado válido para la tipología predeterminada; si no encuentra resultados, pasará a revisar las otras tipologías de listado en orden de prioridad establecida. Sin embargo, si en el registro del cliente no hay ningún tipo de listado configurado como 'predeterminado' y solo existen prioridades, este parámetro no influirá en la búsqueda, incluso si está activo.

**Proponer comisiones para los artículos obsequio (Proponi provvigione per gli articoli omaggio)**: con este indicador se propondrán las comisiones del agente también para las líneas de artículo de tipo obsequio, como sucede para las líneas de tipo Artículo Codificado.

**Permitir descuentos para los artículos obsequio (Consentire sconti per gli articoli omaggio)**: con este indicador se aplicarán descuentos en el importe de la línea también para las líneas de artículo de tipo obsequio.

**Número máximo de líneas (Numero massime righe)**: es el número máximo de artículos para una factura, activo solo en la versión rumana.

**Verificar artículos en agotamiento (Verifica articoli in esaurimento)**: si se establece, este indicador hará que aparezca un aviso emergente en caso de que se inserten en el DDT artículos que tienen el indicador de agotamiento activado en el registro y la fecha en la que el artículo se agotará; este control evita vender artículos que no se volverán a producir o reabastecer.

**[Habilitar Widget de descuentos simplificado (Abilita Widget sconti semplificato)](/docs/sales/sales-flow/discount-widget)**: al activar este indicador en la sección Artículos, se mostrarán dos nuevas columnas: *Descuentos Artículo* y *Descuentos Finales Artículo*. La columna *Descuentos Artículo* es editable y muestra los descuentos aplicados automáticamente según las configuraciones relacionadas con el cliente, el artículo, la lista de precios o la categoría de descuento. El usuario tiene la posibilidad de ingresar, modificar o eliminar los descuentos directamente en esta columna. Para utilizar este widget, es necesario que, además de activar el indicador, se especifique en el tipo de DDT qué tipo de descuento utilizar.

**Uso de artículo cliente (Uso articolo cliente)**: si está activado, este indicador insertará, en la cuadrícula de artículos del DDT, las columnas para el Código y la Descripción del cliente introducidas en el registro del artículo, pestaña Cliente.  

**Uso de código de barras (Uso barcode)**: si está activado, este indicador insertará, en la cuadrícula de artículos del DDT, la columna para mostrar el código de barras del artículo.  

**Código de operador obligatorio (Codice operatore obbligatorio)**: este indicador hace que sea obligatorio completar el campo *Operador (Operatore)* en la cabecera.  

**Bloquear la inserción de documentos en fechas festivas según el calendario de la fábrica (Blocca inserimento documento in date festive da calendario di fabbrica)**: si está activo, el sistema no permitirá la inserción de la oferta en fechas festivas (se revisa primero el Calendario de la Fábrica de la empresa, luego el Calendario de capacidades productivas); si no está activo, el sistema no hace ningún control y permite insertar el documento.  

**Recalcular transporte (Ricalcola trasporto)**: este indicador hace que en la pestaña [Transporte (Trasporto)](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) del DDT se muestren los totales de peso, volumen y cajas de las líneas del documento; sin este indicador, los campos no se completarán.  

**Referencias externas del pedido (Riferimenti esterni ordine)**: este indicador garantiza que los campos *Nuestro (Nostro)* y *Su referencia (Vostro riferimento)* se transfieran de las líneas de pedido a las líneas del DDT.  

**Mantener precios de OC para los tramos (Mantieni prezzi da OC per gli scaglioni)**: este indicador garantiza que, durante el cumplimiento parcial de un pedido en el DDT, se mantenga el mismo tramo de precio presente en el pedido original, sin recalculo. Por ejemplo, si en el pedido se especifica una cantidad de 100 unidades que activa un tramo de precio específico, pero en el DDT solo se cumplen 20 unidades, con este indicador activado, el DDT conservará el precio asociado con el tramo original, sin modificarlo según la cantidad efectivamente cumplida.

### Cumplimiento (Evasione)

En esta pestaña se encuentran los siguientes campos:  

**Pago (Pagamento)**: especifica el valor utilizado para el pago del DDT del cliente en caso de cumplimiento múltiple de pedidos en el DDT: *Primer pedido (Primo ordine)*, *Registro (Anagrafica)* o *Selección manual (Selezione manuale)*.  

**Destinatario (Destinatario)**: especifica el valor utilizado para el destinatario del DDT del cliente en caso de cumplimiento múltiple de pedidos en el DDT: *Primer pedido (Primo ordine)*, *Registro (Anagrafica)* o *Selección manual (Selezione manuale)*.  

**Control de coherencia entre pagos de DDT y pedido (Controllo coerenza tra pagamenti DDT e ordine)**: si está activo, el sistema no permitirá el cumplimiento de pedidos con pagos diferentes.  

**Recalcular CDC/CDP (Ricalcola CDC/CDP)**: en caso de que se haya elegido generar el DDT a partir del pedido del cliente con el procedimiento correspondiente, al activar este indicador, el sistema recalculará los centros de costo y de beneficio si el DDT se generó a partir de un pedido, sin tener en cuenta los establecidos en el pedido de venta. Si no está activo, el sistema no recalculará estos datos, pero mantendrá los insertados en el pedido del cliente.  

**Visualización de la cuadrícula de cumplimiento (Visualizzazione griglia evasione)**: si está activo, el indicador habilita la modalidad cuadrícula en el formulario de cumplimiento de pedidos de venta.  

**Visualización de árbol de cumplimiento (Visualizzazione tree evasione)**: si está activo, el indicador habilita la modalidad árbol en el formulario de cumplimiento de pedidos de venta.  

**Propuesta de lotes (Proposta lotti)**: este indicador garantiza que al momento del cumplimiento, si se inserta una cantidad diferente a cumplir en comparación con la presente en el documento de origen, la cantidad de los lotes sea igual a la cantidad de línea en el documento creado; esto evita que el documento creado tenga una cantidad de línea diferente de la de los lotes.

### Descarga (Scarico)

**Crear registro con la fecha del documento (Crea registrazione con la data del documento)**: si está activo, el registro de almacén se hará con la misma fecha que el DDT y no será necesario especificar la fecha de registro en el formulario de descarga. Si no está activo, será necesario especificar la fecha en el formulario de descarga del DDT.  

**Prioridad de almacén y causa de descarga en las líneas de artículos de los DDT (Priorità magazzino e causale di scarico alle righe articoli dei DDT)**: si está activo, el almacén y la causa de descarga se leen de las líneas del DDT; si no, se utilizarán el almacén y la causa introducidos en los campos siguientes (**Almacén (Magazzino)** y **Causa de almacén (Causale di magazzino)**).  

**Carga/Descarga automática (Carico/Scarico Automatico)**: si está activo, la descarga del DDT se realizará automáticamente al activar el indicador Impresión. Si no está activo, la descarga deberá hacerse con el botón correspondiente.  

**Aviso de artículos ficticios (Avviso articoli fittizi)**: si está activo, durante la descarga del DDT, el sistema verificará si hay artículos ficticios y, en caso de que los haya, aparecerá un mensaje que permitirá al usuario elegir si completar el procedimiento o no; en caso de respuesta afirmativa, todo el DDT se descargará (con la excepción de los artículos ficticios), mientras que en caso de respuesta negativa, el DDT NO se descargará.

### Analítica (Analitica)

Esta pestaña especifica con qué prioridad recuperar el Centro de costos (CDC) o Centro de beneficios (CDP) en la línea del DDT.  
Es posible modificar las prioridades utilizando los botones **Mover arriba (Sposta su)**![](/img/neutral/common/move-up.png) y **Mover abajo (Sposta giù)**![](/img/neutral/common/delete-cc.png).  
*Valores predeterminados (Valori di default)*: el CDC o CDP se recupera del *tipo de facturación (tipo fatturato)* si está presente.  
Para más detalles, consulte la tabla [Tipo de facturación (Tipo fatturato)](/docs/configurations/tables/sales/sales-turnover).  
Si no está presente en el *tipo de facturación (Tipo fatturato)*, el sistema lo buscará en *Registro del cliente (Anagrafica cliente)*. Si no está presente, se buscará en el registro del artículo y posteriormente a nivel de almacén.  
El indicador **Evalúa la prioridad de cada dimensión (Valuta la priorità di ogni dimensione)** garantiza que en los documentos los CDC/CDP se agrupen por dimensión en la pestaña Analítica.