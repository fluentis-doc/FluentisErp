---
title: Parámetros de Pedidos de Venta
sidebar_position: 3
---

:::tip[Inicio Rápido]
La tabla está sujeta al procedimiento de [**Inicio Rápido**](/docs/guide/fast-start).

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página vinculada.
:::

Los parámetros de los pedidos de venta permiten la configuración básica para gestionarlos correctamente y de acuerdo con las solicitudes específicas de cada empresa. La ventana relacionada con estos parámetros consta de 4 pestañas diferentes: General, Ejecución, Descarga y Analítica.

### General 

**Gestión de unidad de medida doble**: si está activo, en las líneas de pedido se mostrarán las dos columnas de UM Alternativa y Cantidad Alternativa, por lo que será posible gestionar la doble unidad de medida, teniendo siempre en cuenta que es la unidad de medida principal sobre la cual se realizan los controles para el ejecución.  

**Propuesta automática de UM alternativa**: este indicador se vuelve editable solo si se ha activado el indicador de gestión de la doble unidad de medida y permite traer en la pestaña de artículos del pedido la unidad de medida alternativa establecida en el registro del artículo, en la columna correspondiente 'UM alternativa'; si no está activo, la unidad de medida no se propone.  

**Control de Disponibilidad**: este indicador y los otros relacionados con el control, visualización y obligatoriedad según área, en la versión actual, no se gestionan.  

**Referencia de Pedido**: si se configura este indicador, en el proyecto creado a partir del pedido se insertará la Referencia del pedido en el título del proyecto; la composición nota debe especificarse en el campo *Descripción* según los parámetros descritos en la etiqueta.  

**Buscar el precio del artículo en todas las listas de precios por defecto**: al buscar el precio y los descuentos para un artículo dentro de un pedido, el sistema sigue reglas basadas en la configuración establecida en el registro del cliente, en la sección *Listinos*. Si está activada la opción 'default' en un tipo determinado de catálogo, la búsqueda de precios y descuentos se centrará únicamente en esa tipología específica de catálogo; si el indicador "default" no está activo, el sistema extenderá la búsqueda a todos los tipos de catálogos presentes, siguiendo un orden de prioridad. En práctica, con el indicador 'default' activo, el sistema buscará primero un catálogo válido para el tipo predeterminado; si no encuentra resultados, pasará a verificar otros tipos de catálogo en el orden de prioridad establecido. Sin embargo, si en el registro del cliente no hay ningún tipo de catálogo configurado como 'default' y solo hay prioridades, este parámetro no influirá en la búsqueda, incluso si está activo.  

**Proponga la comisión por los artículos gratuitos**: con este indicador se propondrán las comisiones para el agente también para las líneas de artículos de tipo regalo, igual que ocurre para las líneas de tipo Artículo Codificado.  

**Permita descuentos para los artículos de regalo**: con este indicador se aplicarán descuentos en el importe de la línea también para las líneas de artículo de tipo regalo.  

**Relación obligatoria entre cajas y cantidad**: si se establece el indicador, obliga al usuario a ingresar una cantidad correspondiente o múltipla del número de bultos definido en la pestaña *Pesos/Dimensiones* del registro de artículos; si la cantidad no es el número de bultos o un múltiplo de este, aparece el mensaje: “Artículo no vendible en cantidad inferior o no múltiplo de .  

**Proponer lote económico**: si el indicador está establecido, se propone como cantidad el lote económico, y si la cantidad es inferior al lote económico, se da el mensaje “La cantidad no puede ser inferior a …”.  

**Verifique los artículos en agotamiento**: si está establecido, este indicador mostrará un pop-up de aviso en caso de que se inserten en el pedido artículos que tienen configurado en el registro el indicador de Agotamiento y la fecha en la que el artículo se agotará; este control evita vender artículos que no serán producidos o reabastecidos nuevamente.  

**[Habilitar el Widget de descuentos simplificados](/docs/sales/sales-flow/discount-widget)**: al activar este indicador, en la sección de Artículos se mostrarán dos nuevas columnas: *Descuentos Artículo* y *Descuentos Finales de Artículos*. La columna *Descuentos Artículo* es editable y muestra los descuentos aplicados automáticamente según la configuración relativa al cliente, al artículo, al catálogo o a la categoría de descuento. El usuario tiene la posibilidad de insertar, modificar o eliminar los descuentos directamente en esta columna. Para utilizar este widget es necesario activar este indicador y especificar en el tipo de pedido qué tipo de descuento utilizar.  

**Utilice el artículo del cliente**: si está establecido, este indicador insertará, en la cuadrícula de artículos del pedido, las columnas para el Código y la Descripción del cliente que se hayan ingresado en el registro del artículo, pestaña Cliente.  

**Utilice código de barras**: si está establecido, este indicador insertará, en la cuadrícula de artículos del pedido, la columna para mostrar el código de barras del artículo.  

**Permitir el cambio de orden de trabajo de producción desde la orden de venta vinculada**: si está activo, permite modificar la orden de producción vinculada a un pedido.  

**Código de usuario obligatorio**: este indicador hace que el campo *Usuario* en el encabezado sea obligatorio.  

**Bloquear la inserción de documentos en días festivos según el calendario de la fábrica**: si está activo, el sistema no permitirá la inserción de la oferta en fechas festivas (se controla primero el Calendario de Fabrica de la empresa y luego el Calendario de capacidades productivas); si no está activo, el sistema no realizará ningún control y permitirá la inserción del documento.  

**Utilice el Configurador de Matrices**: este parámetro activa la gestión de matrices.  

**Expandir la lista de materiales**: si está activo, en el momento de ingresar un artículo, este será reemplazado por el primer nivel de su lista de materiales, si existe; por lo tanto, en lugar del artículo “producto terminado”, el pedido estará poblado con la lista de materiales de este artículo.  

**Proponer datos comerciales para la lista de materiales desglosada manualmente**: si está activo, este indicador indica que para los componentes de primer nivel insertados a través del indicador “Explotar lista de materiales” se propondrán precios de catálogo, descuentos y comisiones como para los artículos codificados.  

**Gestión de Versiones de BOM**: si está activo, el indicador habilita en la pestaña de artículos la columna de Versión de lista de materiales para poder elegir una versión diferente de la que se utiliza automáticamente como predeterminada.  

**No agrupe durante la inserción del BOM**: si está activo, el indicador permite insertar los componentes del primer nivel de lista en líneas diferentes, incluso si tienen el mismo código material.  

### Ejecución

En esta pestaña, se encuentran los siguientes campos:  

**Pago**: especifica el valor usado para el pago del pedido de cliente en caso de ejecución múltiple de los proyectos en Pedido: *Primera orden*, *Registro* o *Selección manual*.  

**Destinatario**: especifica el valor usado para el destinatario del pedido de cliente en caso de ejecución múltiple de los proyectos en Pedido: *Primera orden*, *Registro* o *Selección manual*.
**Agrupación por tipo de pago y términos**: Especifica que los pedidos de venta se agruparán por tipo y solución de pago al cumplirse desde el formulario de búsqueda de pedidos con los botones de ribbon Ejecución de D.N. o Ejecución de facturas.  

**Agrupación por destino**: Especifica que los pedidos de venta se agruparán por el destinatario y la dirección al cumplirse desde el formulario de búsqueda de pedidos con los botones de ribbon Ejecución de D.N. o Ejecución de facturas.  

**Vista de cuadrícula de ejecución**: si está activo, el indicador habilita el modo de cuadrícula en el formulario de ejecución de pedidos de venta.  

**Vista del árbol de ejecución**: si está activo, el indicador habilita el modo de árbol en el formulario de ejecución de pedidos de venta.  

### Descarga 

**Prioridad de los parámetros insertados para cada línea de pedido**: si está activo, el almacén y el motivo de descarga se leen desde las líneas del pedido; de lo contrario, se utilizarán el almacén y el motivo introducidos en los campos siguientes (*Almacén* y *Plantilla de almacén*).

### Analítica 

Esta pestaña especifica con qué prioridad se recupera el Centro de Costos (CDC) o el Centro de Beneficios (CDP) en la línea del pedido.  
Es posible modificar las prioridades utilizando los botones **Mover arriba**![](/img/neutral/common/move-up.png) y **Mover abajo**![](/img/neutral/common/delete-cc.png).  
*Valores predeterminados*: el CDC o CDP se recupera del [Tipo de rotación](/docs/configurations/tables/sales/sales-turnover) si está presente.  
Para más detalles, consulte la tabla [Tipo de rotación)](/docs/configurations/tables/sales/sales-turnover).  
Si no está presente en el *Tipo de rotación*, el sistema lo buscará en el *Contacto con el cliente*. Si tampoco está allí, se buscará en el registro del artículo y posteriormente a nivel de almacén.  
El indicador **Evaluar la prioridad por dimensión** asegura que en los documentos los CDC/CDP se agruparán por dimensión en la pestaña Analítica.
