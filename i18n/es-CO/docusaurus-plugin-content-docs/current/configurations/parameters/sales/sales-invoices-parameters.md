---
title: Parámetros de Facturas de Ventas
sidebar_position: 5
---

:::tip[Inicio Rápido]
La tabla está relacionada con el procedimiento de [**Inicio Rápido**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

Los parámetros de las facturas de venta permiten la configuración básica para gestionarlas correctamente y de acuerdo con las solicitudes específicas de cada empresa. La ventana relacionada con estos parámetros consta de 4 pestañas diferentes: General, Ejecución, Descarga y Analítica.

### General 

**Gestión de unidad de medida doble**: si está activo, en las líneas de la factura se mostrarán las dos columnas UM Alternativa y Cantidad Alternativa, por lo que será posible gestionar la doble unidad de medida, considerando siempre que es la unidad de medida principal sobre la cual se realizan los controles para el ejecución.  

**Propuesta automática de UM alternativa**: este indicador se vuelve editable solo si se ha activado el indicador de gestión de la doble unidad de medida y permite mostrar en la pestaña de artículos de la factura la unidad de medida alternativa establecida en el registro del artículo, en la columna 'UM alternativa'; si no está activo, la unidad de medida no se propone.  

**Control de Disponibilidad**: este indicador y los demás relacionados con el control, visualización y obligatoriedad con la consideración por área, en la versión actual, no se gestionan.  

**Unidad de medida de volumen/pesos predeterminada**: estas unidades de medida se consideran como UM por defecto que se propondrán en la pestaña [Transporte](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) de la nota de entrega, como unidad de medida de volumen y pesos; el dato es modificable en los documentos.  

**Buscar el precio del artículo en todas las listas de precios por defecto**: al buscar el precio y los descuentos para un artículo dentro de una factura, el sistema sigue reglas basadas en la configuración establecida en el registro del cliente, bajo la sección *Listinos*. Si está activada la opción 'default' en un determinado tipo de listado, la búsqueda de precios y descuentos se centrará solo en esa tipología específica de listado; si el indicador "default" no está activo, el sistema extenderá la búsqueda a todos los tipos de listados presentes, siguiendo un orden de prioridad. En práctica, con el indicador 'default' activo, el sistema buscará primero un listado válido para la tipología predefinida; si no encuentra resultados, pasará a verificar las otras tipologías de listado en orden de prioridad establecida. Sin embargo, si en el registro del cliente no hay ninguna tipología de listado configurada como 'default' y solo hay prioridades, este parámetro no influirá en la búsqueda, aunque esté activo.  

**Proponga la comisión por los artículos gratuitos**: con este indicador se propondrán las comisiones del agente también para las líneas de artículo de tipo promoción, como ocurre con las líneas de tipo Artículo Codificado.  

**Inserte comentario en la línea tipo 6 y 7 (cuenta/ reversión)**: si está activo, permite la inserción y gestión de las comisiones también para los tipos de línea 6 y 7 de las facturas. Para más detalles, consulte el artículo relacionado con la [inserción de la factura](/docs/sales/sales-invoices/invoicing/sales-invoice).

**Permita descuentos para los artículos de regalo**: con este indicador se calcularán los descuentos también para los artículos promocionales y afectarán los totales.

**Precios negativos en notas de crédito**: si está activo, el sistema notificará un aviso si hay precios positivos en notas de crédito. Si no está activo, el sistema no realizará ningún control y no devolverá ningún aviso.

**Sin cargos de cobranza en la nota de crédito**: si está activo, no se incluirán gastos de cobro en las notas de crédito.

**Verificar lotes de precios de venta**: campo obsoleto, ya no se utiliza.

**Número máximo de líneas**: es el número máximo de artículos permitidos en una factura, activo solo en la versión rumana.

**Verifique los artículos en agotamiento**: con este indicador se activa la gestión de los artículos en agotamiento; si en el registro del artículo hay una Fecha de agotamiento y el indicador correspondiente, Fluentis avisará al usuario con un popup si el artículo se inserta en el documento.  

**[Habilitar el Widget de descuentos simplificados](/docs/sales/sales-flow/discount-widget)**: al activar este indicador en la sección Artículos, se mostrarán dos nuevas columnas: *Descuentos Artículo* y *Descuentos Finales de Artículos*. La columna *Descuentos Artículo* es editable y muestra los descuentos aplicados automáticamente según las configuraciones relativas al cliente, al artículo, al listado o a la categoría de descuento. El usuario tiene la posibilidad de ingresar, modificar o eliminar descuentos directamente en esta columna. Para utilizar este widget, es necesario que, además de activar el indicador, se especifique en el tipo de factura qué tipo de descuento utilizar. 

**Utilice el artículo del cliente**: si se activa, este indicador insertará, en la cuadrícula de artículos de la factura, las columnas para el Código y la Descripción del cliente ingresados en el registro del artículo, pestaña Cliente.  

**Utilice código de barras**: si se activa, este indicador insertará, en la cuadrícula de artículos de la factura, la columna para mostrar el código de barras del artículo.  

**Código de usuario obligatorio**: este indicador hace que se vuelva obligatorio completar el campo *Usuario* en la cabecera.  

**Bloquear la inserción de documentos en días festivos según el calendario de la fábrica**: si está activo, el sistema no permitirá la entrada de la oferta en días festivos (se revisa primero el Calendario de Producción de la empresa, luego el Calendario de capacidades productivas); si no está activo, el sistema no realizará ningún control y permitirá ingresar el documento.  

**Control intra-CEE**: si está activo y el país del cliente pertenece a la Unión Europea, el sistema verifica que el [Tipo de Factura](/docs/configurations/tables/sales/invoices-type) tenga activado el indicador *Intracomunitaria* y que, en el registro del cliente, esté habilitado el indicador *Intrastat*; si estas condiciones no se cumplen, se mostrará un mensaje de error: "El tipo de documento es intracomunitario, pero el código del cliente no está marcado como intracomunitario".  

**Recalcular transporte**: este indicador hace que en la pestaña [Transporte](/docs/sales/sales-invoices/invoicing/sales-invoice) de la factura se muestren los totales de peso, volumen y bultos de las líneas del documento; sin este indicador, los campos no se completarán.  

**Referencias de orden externas**: este indicador hace que los campos *Nuestra referencia* y *Su referencia* se transfieran desde las líneas del pedido/nota de entrega a las líneas de la factura.  

**Mantener el precio del pedido de compra para los soportes**: se utiliza al cumplir los pedidos en factura en caso de que la cantidad cumplida sea diferente (generalmente parcial) de la cantidad ordenada para la cual se ha ingresado un precio o un descuento por escalón de cantidad. Si el precio o el descuento no dependen de la cantidad entregada sino solo de la cantidad en pedido, este indicador debe activarse; si el precio o el descuento por escalón no debe ingresarse en el documento de entrega en caso de que el ejecución no ocurra para la cantidad total del pedido, el indicador no debe activarse.  

**Contabilidad de empaques**: si está activo, considera en la contabilización también las líneas de embalaje.

### Ejecución

**Pago**: especifica el valor utilizado para el pago de la factura del cliente en caso de ejecución múltiple de la orden de venta: *Primera orden*, *Registro* o *Selección manual*.  

**Destinatario**: especifica el valor utilizado para el destinatario del pedido del cliente en caso de ejecución múltiple de la orden de venta: *Primera orden*, *Registro* o *Selección manual*.  

**Recalcular CDC/CDP**: en caso de que se haya elegido generar la factura a partir del pedido del cliente mediante el procedimiento correspondiente, al activar este indicador, el sistema recalculará los centros de costos y de beneficio en la factura, sin considerar los establecidos en el pedido de venta. Si no está activo, el sistema no recalculará estos datos, sino que mantendrá los ingresados en el pedido del cliente;  

**Vista de cuadrícula de ejecución**: si está activo, el indicador habilita el modo de cuadrícula en el formulario de ejecución de DDT de venta.  

**Vista del árbol de ejecución**: si está activo, el indicador habilita el modo de árbol en el formulario de ejecución de DDT de venta.  

**Proponer Lotes**: si no hay lotes en la línea del pedido, al cumplir, busca lotes disponibles en el inventario, si el tipo de extracción *No* es *Manual*.  

### Descarga 

**Crear grabación con fecha del documento**: si está activo, el registro de almacén se realiza con la misma fecha de la factura, y no será necesario especificar la fecha de registro en el formulario de descarga. Si no está activo, será necesario especificar la fecha en el formulario de descarga de la factura;  

**Plantilla de prioridad de almacén y descarga de líneas de ítems de DN**: si está activo, el almacén y el motivo de descarga se leen desde las líneas de la factura; si no está activo, se utilizarán el almacén y el motivo ingresados en los campos siguientes (Almacén y Plantilla  de almacén);  

**Carga/Descarga automática**: si está activo, la descarga de la nota de entrega se realizará automáticamente al activar el indicador Impresión. Si no está activo, la descarga deberá hacerse con el botón correspondiente presente en la barra de ribbon del formulario de entrada de factura (ver [Ingreso de facturas de venta](/docs/sales/sales-invoices/invoicing/sales-invoice)) o mediante el procedimiento correspondiente;  

**Advertencia de artículos fantasma**: si está activo, durante la descarga de la factura, el sistema comprobará si hay artículos ficticios presentes y, en caso afirmativo, aparecerá un mensaje que permitirá al usuario elegir si completar o no el procedimiento; en caso de respuesta afirmativa, toda la factura será descargada (con excepción de los artículos ficticios), mientras que en caso de respuesta negativa, la factura NO será descargada.  

### Analítica 

Esta pestaña especifica con qué prioridad recuperar el Centro de Costos (CDC) o Centro de Beneficios (CDP) en la línea del documento.  
Es posible modificar las prioridades utilizando los botones **Mover arriba**![](/img/neutral/common/move-up.png) y **Mover abajo**![](/img/neutral/common/delete-cc.png).  
*Valores predeterminados*: el CDC o CDP se recupera del tipo de facturación si está presente. Para más detalles, consulte la tabla [Tipo de rotación](/docs/configurations/tables/sales/sales-turnover);  
Si no está presente en el tipo de facturación, el sistema lo buscará en el registro del cliente. Si no está presente, se buscará en el registro del artículo y posteriormente a nivel de almacén.  
El indicador **Evaluar la prioridad por dimensión** hace que en los documentos los CDC/CDP se agrupen por dimensión, en la pestaña Analítica.
