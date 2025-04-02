---
title: Tipos de ofertas de clientes (Tipi offerte cliente)
sidebar_position: 23
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está relacionada con el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start).

En caso de que se quiera configurar manualmente, se debe consultar la lista de verificación de la página enlazada.
:::

La tabla se abre a través de la ruta **Tablas > Ventas > Tipos de ofertas de clientes (Tabelle > Vendite > Tipi offerte cliente)**.

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

El formulario se compone de un área de filtro y otra de resultados. Una vez establecidos todos los filtros deseados, basta hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

Para insertar nuevos registros, es necesario hacer clic en la primera fila vacía de la cuadrícula o presionar el botón **nuovo**.

**codice/descrizione**: campos donde se indica el código y la descripción del tipo de documento (el código que se inserta debe ser único).

**struttura gerarchica**: al activar este indicador, los artículos de la oferta seguirán una estructura jerárquica; para más detalles, consulte la [documentación correspondiente](/docs/sales/offers/insert-offer).

**modifica versione**: este indicador señala los tipos de oferta para los cuales se gestionarán las versiones.

**prezzo ivato**: permite al sistema recuperar el precio de venta de las listas de precios o del registro del artículo y lo muestra con la adición del IVA. Si no encuentra la lista de precios, en el caso, por ejemplo, de una lista de precios caducada o una lista de precios en una moneda no compatible, recupera los costos o precios del registro del artículo y los muestra con IVA incluido. Los costos y precios en el registro están en EUR, por lo que el sistema también los convertirá a la moneda del cliente.

**numerazione**: en este campo debe ingresarse el código de numeración apropiado. Para más información sobre la numeración de documentos, consulte el artículo sobre [Numeraciones Fluentis](/docs/configurations/tables/fluentis-numerations).

**tipo ordine cliente**: en este campo se indica el [tipo de Orden de venta](/docs/configurations/tables/sales/sales-order-types) que se creará al momento de la Conversión de la oferta mediante el procedimiento correspondiente.

**listino di vendita**: este tipo de lista, de tipo genérico, se utiliza para la búsqueda de precios en caso de que en la pestaña de listas del registro del cliente o contacto no haya ningún tipo de lista ingresada. Normalmente se utiliza para ofrecer a contactos de CRM que aún no se han adquirido como clientes y para los cuales no se han ingresado los tipos de listas en la pestaña de Listas del registro.

**Impresión y número de copias (Stampa e numero di copie)**: a través de estos campos se define la impresión predeterminada y el número de copias a imprimir; recordamos que para imprimir la impresión predeterminada es necesario seleccionar *Impresiones múltiples* al momento de la impresión.

**tipo prototipo articolo**: este campo contiene el tipo de prototipo de artículo que se creará en el procedimiento de creación de prototipo desde dentro de la oferta.

**tipo opportunità**: si en el Tipo de Oferta se vincula un [Tipo de oportunidad](/docs/configurations/tables/crm/opportunities/opportunity-type), al guardar la Oferta se crea una [Nueva Oportunidad](/docs/crm/chance/new-chance) si en la cabecera de la Oferta no se ha ingresado una preexistente; si se ha ingresado, se actualiza la Oportunidad preexistente.

**Gestión de activos y Tipo de operación (Gestione cespiti e Tipo operazione)**: el indicador permite gestionar los activos para este tipo de documento. En el campo siguiente se indica el tipo de operación de los activos, que en el caso de ventas puede ser una enajenación total, parcial o una destrucción.

**Tipo de descuento/Descripción (Tipo sconto/Descrizione)**: en esta columna es posible asociar el tipo de descuento a proponer cuando los descuentos se ingresan directamente en la columna *sconti articolo* de la cuadrícula de artículos de los documentos (para más detalles, consulte el artículo sobre [Gestión del widget de descuentos simplificado](/docs/sales/sales-flow/discount-widget)).