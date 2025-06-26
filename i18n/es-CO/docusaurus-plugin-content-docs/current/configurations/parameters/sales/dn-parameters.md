---
title: Parámetros de Notas de Entrega
sidebar_position: 4
---

:::tip[Inicio Rápido]
La tabla está relacionada con el procedimiento de [**Inicio Rápido**](/docs/guide/fast-start)

En caso de que se pretenda configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

Los parámetros de las notas de entrega de ventas permiten la configuración básica para gestionarlos correctamente y de acuerdo con las solicitudes específicas de cada empresa. La ventana relacionada con estos parámetros consta de 4 pestañas diferentes: General, Ejecución, Descarga y Analítica.

### General

**Gestión de unidad de medida doble**: si está activo, en las líneas de notas de entrega se mostrarán las dos columnas UM Alternativa y Cantidad Alternativa, por lo que será posible gestionar la doble unidad de medida, teniendo en cuenta que es la unidad de medida principal sobre la cual se realizan las verificaciones para el ejecución.

**Propuesta automática de unidad de medida alternativa**: este indicador se vuelve editable solo si se ha activado el indicador de gestión de la doble unidad de medida y permite mostrar en la pestaña de artículos de la nota de entrega la unidad de medida alternativa configurada en el registro del artículo, en la columna correspondiente 'UM alternativa'; si no está activo, la unidad de medida no se propone.

**Control de disponibilidad**: este indicador y los otros relacionados con el control, visualización y obligatoriedad con la consideración por área, en la versión actual, no son gestionados.

**Unidad de medida de volumen/pesos predeterminada**: estas unidades de medida se consideran como UM predeterminadas a proponer en la pestaña [Transporte](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) de la nota de entrega, como unidad de medida de volumen y pesos; el dato es modificable en los documentos.

**Buscar el precio del artículo en todas las listas de precios por defecto**: cuando se buscan el precio y los descuentos para un artículo dentro de una nota de entrega, el sistema sigue reglas basadas en las configuraciones establecidas en el registro del cliente, bajo la sección *Listinos*. Si se activa la opción 'predeterminado' en un determinado tipo de listado, la búsqueda de precios y descuentos se centrará solo en esa tipología específica; si el indicador "predeterminado" no está activo, el sistema extenderá la búsqueda a todos los tipos de listados presentes, siguiendo un orden de prioridad. En práctica, con el indicador 'predeterminado' activo, el sistema buscará primero un listado válido para la tipología predeterminada; si no encuentra resultados, pasará a revisar las otras tipologías de listado en orden de prioridad establecida. Sin embargo, si en el registro del cliente no hay ningún tipo de listado configurado como 'predeterminado' y solo existen prioridades, este parámetro no influirá en la búsqueda, incluso si está activo.

**Proponga la comisión por los artículos gratuitos**: con este indicador se propondrán las comisiones del agente también para las líneas de artículo de regalo, como sucede para las líneas de tipo Artículo Codificado.

**Permita descuentos para los artículos de regalo**: con este indicador se aplicarán descuentos en el importe de la línea también para las líneas de artículo de regalo.

**Número máximo de líneas**: es el número máximo de artículos para una factura, activo solo en la versión rumana.

**Verifique los artículos en agotamiento**: si se establece, este indicador hará que aparezca un aviso emergente en caso de que se inserten en la nota de entrega artículos que tienen el indicador de agotamiento activado en el registro y la fecha en la que el artículo se agotará; este control evita vender artículos que no se volverán a producir o reabastecer.

**[Habilitar el Widget de descuentos simplificados](/docs/sales/sales-flow/discount-widget)**: al activar este indicador en la sección Artículos, se mostrarán dos nuevas columnas: *Descuentos Artículo* y *Descuentos Finales Artículo*. La columna *Descuentos Artículo* es editable y muestra los descuentos aplicados automáticamente según las configuraciones relacionadas con el cliente, el artículo, la lista de precios o la categoría de descuento. El usuario tiene la posibilidad de ingresar, modificar o eliminar los descuentos directamente en esta columna. Para utilizar este widget, es necesario que, además de activar el indicador, se especifique en el tipo de notas de entrega qué tipo de descuento utilizar.

**Utilice el artículo del cliente**: si está activado, este indicador insertará, en la cuadrícula de artículos de la nota de entrega, las columnas para el Código y la Descripción del cliente introducidas en el registro del artículo, pestaña Cliente.  

**Utilice código de barras**: si está activado, este indicador insertará, en la cuadrícula de artículos de la nota de entrega, la columna para mostrar el código de barras del artículo.  

**Código de usuario obligatorio**: este indicador hace que sea obligatorio completar el campo *Usuario* en la cabecera.  

**Bloquear la inserción de documentos en días festivos según el calendario de la fábrica**: si está activo, el sistema no permitirá la inserción de la oferta en fechas festivas (se revisa primero el Calendario de la Fábrica de la empresa, luego el Calendario de capacidades productivas); si no está activo, el sistema no hace ningún control y permite insertar el documento.  

**Recalcular transporte**: este indicador hace que en la pestaña [Transporte](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) de la nota de entrega se muestren los totales de peso, volumen y cajas de las líneas del documento; sin este indicador, los campos no se completarán.  

**Referencias de orden externas**: este indicador garantiza que los campos *Nuestra referencia* y *Su referencia* se transfieran de las líneas de pedido a las líneas de la nota de entrega.  

**Mantener el precio del Pedido de Venta para los soportes**: este indicador garantiza que, durante el ejecución parcial de un pedido en la nota de entrega, se mantenga el mismo tramo de precio presente en el pedido original, sin recalculo. Por ejemplo, si en el pedido se especifica una cantidad de 100 unidades que activa un tramo de precio específico, pero en la nota de entrega solo se cumplen 20 unidades, con este indicador activado, la nota de entrega conservará el precio asociado con el tramo original, sin modificarlo según la cantidad efectivamente cumplida.

### Ejecución

En esta pestaña se encuentran los siguientes campos:  

**Pago**: especifica el valor utilizado para el pago de la nota de entrega del cliente en caso de ejecución múltiple de pedidos en la nota de entrega: *Primera orden*, *Registro* o *Selección manual*.  

**Destinatario**: especifica el valor utilizado para el destinatario de la nota de entrega del cliente en caso de ejecución múltiple de pedidos en la nota de entrega: *Primera orden*, *Registro* o *Selección manual*.  

**Control de concordancia entre los pagos de DN y el pedido**: si está activo, el sistema no permitirá el ejecución de pedidos con pagos diferentes.  

**Recalcular CDC/CDP**: en caso de que se haya elegido generar la nota de entrega a partir del pedido del cliente con el procedimiento correspondiente, al activar este indicador, el sistema recalculará los centros de costo y de beneficio si la nota de entrega se generó a partir de un pedido, sin tener en cuenta los establecidos en el pedido de venta. Si no está activo, el sistema no recalculará estos datos, pero mantendrá los insertados en el pedido del cliente.  

**Vista de cuadrícula de ejecución**: si está activo, el indicador habilita la modalidad cuadrícula en el formulario de ejecución de pedidos de venta.  

**Vista del árbol de ejecución**: si está activo, el indicador habilita la modalidad árbol en el formulario de ejecución de pedidos de venta.  

**Proponer Lotes**: este indicador garantiza que al momento del ejecución, si se inserta una cantidad diferente a cumplir en comparación con la presente en el documento de origen, la cantidad de los lotes sea igual a la cantidad de línea en el documento creado; esto evita que el documento creado tenga una cantidad de línea diferente de la de los lotes.

### Descarga 

**Crear grabación con fecha del documento**: si está activo, el registro de almacén se hará con la misma fecha que la nota de entrega y no será necesario especificar la fecha de registro en el formulario de descarga. Si no está activo, será necesario especificar la fecha en el formulario de descarga de la nota de entrega.  

**Plantilla de prioridad de almacén y descarga de líneas de ítems de DN**: si está activo, el almacén y la causa de descarga se leen de las líneas de la nota de entrega; si no, se utilizarán el almacén y la causa introducidos en los campos siguientes (**Almacén** y **Plantilla de almacén**).  

**Carga/Descarga automática**: si está activo, la descarga de la nota de entrega se realizará automáticamente al activar el indicador Impresión. Si no está activo, la descarga deberá hacerse con el botón correspondiente.  

**Advertencia de artículos fantasma**: si está activo, durante la descarga de la nota de entrega, el sistema verificará si hay artículos ficticios y, en caso de que los haya, aparecerá un mensaje que permitirá al usuario elegir si completar el procedimiento o no; en caso de respuesta afirmativa, todo la nota de entrega se descargará (con la excepción de los artículos ficticios), mientras que en caso de respuesta negativa, la nota de entrega NO se descargará.

### Analítica 

Esta pestaña especifica con qué prioridad recuperar el Centro de costos (CDC) o Centro de beneficios (CDP) en la línea de la nota de entrega.  
Es posible modificar las prioridades utilizando los botones **Mover arriba**![](/img/neutral/common/move-up.png) y **Mover abajo**![](/img/neutral/common/delete-cc.png).  
*Valores predeterminados*: el CDC o CDP se recupera del *Tipo de rotación* si está presente.  
Para más detalles, consulte la tabla [Tipo de rotación](/docs/configurations/tables/sales/sales-turnover).  
Si no está presente en el *Tipo de rotación*, el sistema lo buscará en *Contacto con el cliente*. Si no está presente, se buscará en el registro del artículo y posteriormente a nivel de almacén.  
El indicador **Evaluar la prioridad por dimensión** garantiza que en los documentos los CDC/CDP se agrupen por dimensión en la pestaña Analítica.