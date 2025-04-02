---
title: Parámetros DDT (Parametri DDT)
sidebar_position: 4
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está relacionada con el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

Los parámetros de los DDT de venta permiten la configuración básica para gestionarlos correctamente y de acuerdo con las solicitudes específicas de cada empresa. La ventana relacionada con estos parámetros consta de 4 pestañas diferentes: General (Generale), Cumplimiento (Evasione), Descarga (Scarico) y Analítica (Analitica).

### General (Generale)

**gestione doppia unità misura**: si está activo, en las líneas del DDT se mostrarán las dos columnas de UM Alternativa y Cantidad Alternativa, por lo tanto, será posible gestionar la doble unidad de medida, considerando siempre que es la unidad de medida principal sobre la cual se realizan los controles para el cumplimiento.

**Propuesta automática de UM alternativa (Proposta automatica UM alternativa)**: este indicador solo se puede editar si se ha activado el indicador de gestión de la doble unidad de medida y permite mostrar en la pestaña de artículos del DDT la unidad de medida alternativa establecida en el registro del artículo, en la columna correspondiente 'UM alternativa'; si no está activo, la unidad de medida no se propone.

**Control de Disponibilidad (Controllo Disponibilità)**: este indicador y los demás relacionados con el control, visualización y obligatoriedad considerando el área, en la versión actual no se gestionan.

**Unidad de medida de volumen/pesos predeterminada (Unità di misura volume/pesi predefinita)**: estas unidades de medida se consideran como UM predeterminadas a proponer en la pestaña [Transporte (Trasporto)](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) del DDT, como unidad de medida de volumen y pesos; el dato es modificable en los documentos.

**ricerca prezzi articoli in tutti i listini predefiniti**: cuando se busca el precio y los descuentos para un artículo dentro de un DDT, el sistema sigue reglas basadas en las configuraciones establecidas en el registro del cliente, en la sección *Listinos*. Si se activa la opción 'predeterminado' en un determinado tipo de lista, la búsqueda de precios y descuentos se centrará solo en esa tipología específica; si el indicador "predeterminado" no está activo, el sistema extenderá la búsqueda a todos los tipos de listas presentes, siguiendo un orden de prioridad. En práctica, con el indicador 'predeterminado' activo, el sistema buscará primero una lista válida para la tipología predeterminada; si no encuentra resultados, procederá a comprobar las otras tipologías de listas en orden de prioridad. Sin embargo, si en el registro del cliente no hay ningún tipo de lista configurada como 'predeterminado' y solo hay prioridades, este parámetro no influirá en la búsqueda, incluso si está activo.

**proponi provvigione per gli articoli omaggio**: con este indicador se propondrán las comisiones de los agentes también para las líneas de artículo de tipo regalo, al igual que ocurre para las líneas de tipo Artículo Codificado.

**consentire sconti per gli articoli omaggio**: con este indicador se insertarán los descuentos en el importe de la línea también para las líneas de artículo de tipo regalo.

**verifica articoli in esaurimento**: si está configurado, este indicador hará aparecer un pop-up de aviso en caso de que se inserten en el DDT artículos que tengan activado en el registro el indicador de Agotamiento y la fecha en la que el artículo va a agotarse; este control evita la venta de artículos que no serán más producidos o reabastecidos.

**[Habilitar Widget de descuentos simplificado (Abilita Widget sconti semplificato)](/docs/sales/sales-flow/discount-widget)**: al activar este indicador en la sección de Artículos, se mostrarán dos nuevas columnas: *Descuentos Artículo* y *Descuentos Finales Artículo*. La columna *Descuentos Artículo* es editable y muestra los descuentos aplicados automáticamente en base a las configuraciones relativas al cliente, al artículo, a la lista o a la categoría de descuento. El usuario tiene la posibilidad de insertar, modificar o eliminar los descuentos directamente en esta columna. Para utilizar este widget, es necesario que, además de activar el indicador, se especifique en el tipo de DDT qué tipo de descuento utilizar.

**uso articolo cliente**: si está configurado, este indicador insertará, en la cuadrícula de artículos del DDT, las columnas para el Código y la Descripción del cliente ingresados en el registro del artículo, pestaña Cliente.

**uso barcode**: si está configurado, este indicador insertará, en la cuadrícula de artículos del DDT, la columna para mostrar el código de barras del artículo.

**codice operatore obbligatorio**: este indicador hace que sea obligatorio completar el campo *Operador* en la cabecera.

**blocca inserimento documento in date festive da calendario di fabbrica**: si está activo, el sistema no permitirá la inserción de la oferta en fechas festivas (se controlará primero el Calendario de Producción de la empresa, luego el Calendario de capacidades productivas); si no está activo, el sistema no realizará ningún control y permitirá la inserción del documento.

**ricalcola trasporto**: este indicador garantiza que en la pestaña [Transporte (Trasporto)](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) del DDT se muestren los totales de peso, volumen y bultos de las líneas del documento; sin este indicador, los campos no se completarán.

**riferimenti esterni ordine**: este indicador hace que los campos *Nuestro* y *Su referencia* se transfieran de las líneas de pedidos a las líneas del DDT.

**mantieni prezzi da oc per gli scaglioni**: este indicador garantiza que, durante el cumplimiento parcial de un pedido en el DDT, se mantenga el mismo tramo de precio presente en el pedido original, sin ningún recalculo. Por ejemplo, si en el pedido se especifica una cantidad de 100 unidades que activa un tramo de precio específico, pero en el DDT se cumplen solo 20 unidades, con este indicador activado, el DDT conservará el precio asociado al tramo original, sin modificarlo según la cantidad efectivamente cumplida.

### Cumplimiento (Evasione)

En esta pestaña están presentes los siguientes campos:

**pagamento**: especifica el valor utilizado para el pago del DDT del cliente en caso de cumplimiento múltiple de pedidos en el DDT: *primo ordine*, *anagrafica* o *selezione manuale*.

**destinatario**: especifica el valor utilizado para el destinatario del DDT del cliente en caso de cumplimiento múltiple de pedidos en el DDT: *primo ordine*, *anagrafica* o *selezione manuale*.

**controllo coerenza tra pagamenti ddt e ordine**: si está activo, el sistema no permitirá el cumplimiento de pedidos con pagos diferentes.

**Recalcular CDC/CDP (Ricalcola CDC/CDP)**: en caso de que se haya elegido generar el DDT a partir del pedido del cliente con el procedimiento correspondiente, al activar este indicador, el sistema recalculará los centros de costo y de beneficio si el DDT se ha generado a partir del pedido, sin considerar los que están establecidos en el pedido de venta. Si no está activo, el sistema no recalculará estos datos, sino que mantendrá los ingresados en el pedido del cliente.

**Visualización de cuadrícula de cumplimiento (Visualizzazione griglia evasione)**: si está activo, el indicador habilitará el modo cuadrícula en el formulario de cumplimiento de pedidos de venta.

**Visualización de árbol de cumplimiento (Visualizzazione tree evasione)**: si está activo, el indicador habilitará el modo árbol en el formulario de cumplimiento de pedidos de venta.

**proposta lotti**: este indicador garantiza que, al momento del cumplimiento, en caso de que se ingrese una cantidad diferente a cumplir respecto a la que está presente en el documento de origen, la cantidad de los lotes sea igual a la cantidad de línea en el documento creado; esto es para evitar que el documento creado tenga una cantidad de línea diferente a la de los lotes.

### Descarga (Scarico)

**crea registrazione con la data del documento**: si está activo, el registro de almacén se hará con la misma fecha del DDT, y no será necesario especificar la fecha de registro en el formulario de descarga. Si no está activo, será necesario especificar la fecha en el formulario de descarga del DDT.

**Prioridad de almacén y causal de descarga en las líneas de artículos de los DDT (Priorità magazzino e causale di scarico alle righe articoli dei DDT)**: si está activo, el almacén y la causal de descarga se leerán desde las líneas del DDT; si no está activado, se utilizarán el almacén y la causal ingresados en los campos siguientes (**magazzino** y **Causal de almacén (Causale di magazzino)**).

**carico/scarico automatico**: si está activo, la descarga del DDT se realizará automáticamente al activar el indicador Impreso. Si no está activo, la descarga deberá hacerse con el botón correspondiente.

**avviso articoli fittizi**: si está activo, durante la descarga del DDT, el sistema verificará si hay artículos ficticios y, en caso de encontrarlos, aparecerá un mensaje que permitirá al usuario decidir si completar o no el procedimiento; en caso de respuesta afirmativa, todo el DDT se descargará (excepto los artículos ficticios), mientras que si la respuesta es negativa, el DDT NO se descargará.

### Analítica (Analitica)

Esta pestaña especifica con qué prioridad se recupera el Centro de Costos (CDC) o el Centro de Beneficios (CDP) en la línea del DDT.
Es posible modificar las prioridades utilizando los botones **sposta su**![](/img/neutral/common/move-up.png) y **sposta giù**![](/img/neutral/common/delete-cc.png).  
*Valores predeterminados (Valori di default)*: el CDC o CDP se recupera del [Tipo de facturación (Tipo fatturato)](/docs/configurations/tables/sales/sales-turnover) si está presente.  
Para más detalles, consulte la tabla [Tipo de facturación (Tipo fatturato)](/docs/configurations/tables/sales/sales-turnover).  
Si no está presente en el *tipo fatturato*, el sistema lo buscará en el *anagrafica cliente*. Si tampoco está allí, se buscará en el registro del artículo y posteriormente a nivel de almacén.  
El indicador **Evalúa la prioridad de cada dimensión (Valuta la priorità di ogni dimensione)** hace que en los documentos los CDC/CDP se agrupen por dimensión, en la pestaña Analítica (Analitica).