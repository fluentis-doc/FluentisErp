---
title: parametri ordini clienti
sidebar_position: 3
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está interesada por el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, refiérase a la lista de verificación de la página enlazada.
:::

Los parámetros de los pedidos de clientes permiten la configuración básica para gestionarlos correctamente y de acuerdo con las solicitudes específicas de cada empresa. La ventana relacionada con estos parámetros consta de 4 pestañas diferentes: General (Generale), Cumplimiento (Evasione), Descarga (Scarico) y Analítica (Analitica).

### General (Generale)

**gestione doppia unità misura**: si está activo, en las líneas del pedido se visualizarán las dos columnas UM Alternativa y Cantidad Alternativa, por lo que será posible gestionar la doble unidad de medida, considerando siempre que es la unidad de medida principal sobre la cual se realizan los controles para el cumplimiento.  

**Propuesta automática UM alternativa (Proposta automatica UM alternativa)**: este indicador se vuelve editable solo si se ha activado el indicador de gestión de la doble unidad de medida y permite reflejar en la pestaña de artículos del pedido la unidad de medida alternativa establecida en el registro del artículo, en la columna correspondiente 'UM alternativa'; si no está activo, la unidad de medida no se propone.  

**Control de Disponibilidad (Controllo Disponibilità)**: este indicador y los otros relacionados con el control, visualización y obligatoriedad con la consideración por área no están gestionados en la versión actual.  

**riferimento ordine**: si este indicador se activa, en el proyecto creado a partir del pedido se inserta la referencia al pedido en el título del proyecto; la composición de la nota debe especificarse en el campo *Descripción* según los parámetros descritos en la etiqueta.  

**ricerca prezzi articoli in tutti i listini predefiniti**: al buscar el precio y los descuentos para un artículo dentro de un pedido, el sistema sigue reglas basadas en las configuraciones establecidas en el registro del cliente, en la sección *Listinos*. Si se activa la opción 'predeterminado' para un determinado tipo de listado, la búsqueda de precios y descuentos se centrará solo en ese tipo de listado específico; si el indicador "predeterminado" no está activo, el sistema ampliará la búsqueda a todos los tipos de listados presentes, siguiendo un orden de prioridad. En práctica, con el indicador 'predeterminado' activo, el sistema buscará primero un listado válido para el tipo predeterminado; si no encuentra resultados, pasará a comprobar los otros tipos de listados en orden de prioridad. Sin embargo, si en el registro del cliente no hay ningún tipo de listado configurado como 'predeterminado' y solo hay prioridades, este parámetro no influirá en la búsqueda, incluso si está activo.  

**proponi provvigione per gli articoli omaggio**: con este indicador se proponen comisiones para los agentes también para las líneas de artículos de tipo regalo, como se hace para las líneas de tipo Artículo Codificado.  

**consentire sconti per gli articoli omaggio**: con este indicador se aplicarán descuentos en el importe de la línea también para las líneas de artículos de tipo regalo.  

**controlla disponibilità**: si está activado, el sistema verifica la disponibilidad del artículo.  

**obbligo rapporto colli articolo con quantità**: si se activa el indicador, obliga al usuario a ingresar una cantidad correspondiente o múltipla del número de bultos definido en la pestaña *Pesos/Dimensiones* del registro de artículos; si la cantidad no coincide con el número de bultos o un múltiplo de este, aparece el mensaje: “Artículo no vendible en cantidad inferior o no múltiplo de ...”.  

**proponi lotto economico**: si el indicador está activado, se propone como cantidad el lote económico y si la cantidad es inferior al lote económico se muestra el mensaje “La cantidad no puede ser inferior a ...”.  

**verifica articoli in esaurimento**: si se activa, este indicador hará aparecer un pop-up de aviso en caso de que se inserten en el pedido artículos que tengan establecido en su registro el indicador de Agotamiento y la fecha en la que el artículo se agotará; este control evita vender artículos que no se producirán o reabastecerán.  

**[Habilitar Widget de descuentos simplificado (Abilita Widget sconti semplificato)](/docs/sales/sales-flow/discount-widget)**: al activar este indicador en la sección Artículos se mostrarán dos nuevas columnas: *Descuentos Artículo* y *Descuentos Finales Artículo*. La columna *Descuentos Artículo* es editable y muestra los descuentos aplicados automáticamente según las configuraciones del cliente, el artículo, el listado o la categoría de descuento. El usuario tiene la posibilidad de ingresar, modificar o eliminar descuentos directamente en esta columna. Para utilizar este widget es necesario que, además de activar el indicador, se especifique en el tipo de pedido qué tipo de descuento utilizar.  

**uso articolo cliente**: si se activa, este indicador insertará, en la cuadrícula de artículos del pedido, las columnas para el Código y la Descripción del cliente ingresados en el registro del artículo, pestaña Cliente.  

**uso barcode**: si se activa, este indicador insertará, en la cuadrícula de artículos del pedido, la columna para reflejar el código de barras del artículo.  

**codice operatore obbligatorio**: este indicador hace que sea obligatorio completar el campo *Operador* en el encabezado.  

**blocca inserimento documento in date festive da calendario di fabbrica**: si está activo, el sistema no permite la inserción de la oferta en fechas festivas (primero se verifica el Calendario de Fábrica de la empresa y luego el Calendario de capacidades productivas); si no está activo, el sistema no lleva a cabo ningún control y permite insertar el documento.  

**esplodi distinta base**: si se activa, en el momento de la inserción de un artículo, este será reemplazado por el primer nivel de su lista de materiales, si existe; por lo tanto, en lugar del artículo "Producto Terminado", el pedido se poblará con la lista de materiales de este artículo.  

**Proponer Datos comerciales para la lista de materiales explotada manualmente (Proponi Dati commerciali per distinta base esplosa manualmente)**: si está activo, este indicador indica que para los componentes de primer nivel ingresados a través del indicador "Explotar lista de materiales", se propondrán precios de lista, descuentos y comisiones como para los artículos codificados.  

**gestione versione distinta base**: si está activo, el indicador habilita en la pestaña de artículos la columna Versión de lista de materiales para poder elegir una versión diferente de la que se utiliza automáticamente como predeterminada.  

**non raggruppare le righe quando inserisci da distinta base**: si está activo, el indicador permite insertar los componentes del primer nivel de la lista en diferentes líneas incluso si tienen el mismo código material.

### Cumplimiento (Evasione)

En esta pestaña están presentes los siguientes campos:  

**pagamento**: especifica el valor utilizado para el pago del pedido del cliente en caso de cumplimiento múltiple de los proyectos en Pedido: *primo ordine*, *anagrafica* u *selezione manuale*.  

**destinatario**: especifica el valor utilizado para el destinatario del pedido del cliente en caso de cumplimiento múltiple de los proyectos en Pedido: *primo ordine*, *anagrafica* o *selezione manuale*.  

**Agrupamiento por tipo y solución de pago (Raggruppamento per tipo e soluzione pagamento)**: especifica si los pedidos de los clientes serán agrupados por tipo y solución de pago al momento del cumplimiento desde el formulario de búsqueda de Pedidos con los botones de ribbon Cumplimiento DDT o Cumplimiento de facturas.  

**raggruppamento per destinazione**: especifica si los pedidos de los clientes serán agrupados por destinatario y destino al momento del cumplimiento desde el formulario de búsqueda de Pedidos con los botones de ribbon Cumplimiento DDT o Cumplimiento de facturas.  

**Visualización en cuadrícula de cumplimiento (Visualizzazione griglia evasione)**: si está activo, el indicador habilita el modo cuadrícula en el formulario de cumplimiento de pedidos de venta.  

**Visualización en árbol de cumplimiento (Visualizzazione tree evasione)**: si está activo, el indicador habilita el modo árbol en el formulario de cumplimiento de pedidos de venta.

### Descarga (Scarico)

**priorità parametri inseriti per ogni riga ordine**: si está activo, el almacén y el motivo de descarga se leen desde las líneas del pedido; si no se activa, se utilizarán el almacén y el motivo ingresados en los campos siguientes (*magazzino* y *Motivo de almacén (Causale di magazzino)*).

### Analítica (Analitica)

Esta pestaña especifica con qué prioridad se recupera el Centro de Costos (CDC) o el Centro de Beneficios (CDP) en la línea del pedido.  
Es posible modificar las prioridades utilizando los botones **sposta su**![](/img/neutral/common/move-up.png) y **sposta giù**![](/img/neutral/common/delete-cc.png).  
*Valores predeterminados (Valori di default)*: el CDC o CDP se recupera del tipo de facturación si está presente.  
Para más detalles, consulte la tabla [Tipo de facturación (Tipo Fatturato)](/docs/configurations/tables/sales/sales-turnover).  
Si no está presente en el *tipo fatturato*, el sistema lo buscará en el *anagrafica cliente*. Si tampoco está allí, se buscará en el registro del artículo y posteriormente a nivel de almacén.  
El indicador **Evaluar la prioridad de cada dimensión (Valuta la priorità di ogni dimensione)** hace que en los documentos los CDC/CDP se agrupen por dimensión en la pestaña Analítica.