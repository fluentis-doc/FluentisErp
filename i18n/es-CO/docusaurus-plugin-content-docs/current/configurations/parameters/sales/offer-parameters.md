---
title: Parámetros de Ofertas de Ventas
sidebar_position: 2
---

:::tip[Inicio Rápido]
La tabla está afectada por el procedimiento de [**Inicio Rápido**](/docs/guide/fast-start)

En caso de que desee configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

Los parámetros de las ofertas permiten la configuración básica para gestionarlas correctamente y de acuerdo con las solicitudes específicas de cada empresa. La ventana se compone de dos pestañas: General y Descarga.

### General

Los campos presentes en esta pestaña son:

**Gestión de unidad de medida doble**: si está activo, en las líneas de la oferta se mostrarán las dos columnas UM Alternativa y Cantidad Alternativa, por lo que será posible gestionar la doble unidad de medida, teniendo en cuenta que es la unidad de medida principal en la que se realizan los controles para el cumplimiento.

**Propuesta automática de UM alternativa**: este indicador se vuelve editable solo si se ha activado el indicador de gestión de la doble unidad de medida y permite trasladar a la pestaña de artículos de la oferta la unidad de medida alternativa configurada en el registro del artículo, en la columna 'UM alternativa'; si no está activo, no se propone la unidad de medida.

**Buscar el precio del artículo en todas las listas de precios por defecto**: cuando se busca el precio y los descuentos para un artículo dentro de una oferta, el sistema sigue reglas basadas en las configuraciones establecidas en el registro del cliente, en la sección *Listinos*. Si la opción 'por defecto' está activada en un tipo de listado determinado, la búsqueda de precios y descuentos se centrará solo en esa tipo específico de listado; si el indicador "por defecto" no está activo, el sistema ampliará la búsqueda a todos los tipos de listados disponibles, siguiendo un orden de prioridad. En la práctica, con el indicador 'por defecto' activo, el sistema buscará primero un listado válido para la categoría predeterminada; si no encuentra resultados, pasará a verificar los otros tipos de listados en orden de prioridad. Sin embargo, si en el registro del cliente no hay ningún tipo de listado establecido como 'por defecto' y solo hay prioridades, este parámetro no influirá en la búsqueda, aunque esté activo.

**Proponga la comisión por los artículos gratuitos**: con este indicador se propondrán las comisiones del agente también para las líneas de artículos de tipo regalo, tal como ocurre para las líneas de tipo Artículo Codificado.

**Permita descuentos para los artículos de regalo**: con este indicador se aplicarán descuentos al importe de la línea también para las líneas de artículos de tipo regalo.

**Verifique los artículos en agotamiento**: si está configurado, este indicador hará aparecer un pop-up de aviso en caso de que se incluyan en la oferta artículos que tienen establecido en el registro el indicador de Agotamiento y la fecha de agotamiento.

**[Habilitar el Widget de descuentos simplificados](/docs/sales/sales-flow/discount-widget)**: al activar este indicador en la sección de Artículos de ofertas no jerárquicas, se mostrarán dos nuevas columnas: *Descuentos Artículo* y *Descuentos Finales Artículo*. La columna *Descuentos Artículo* es editable y muestra los descuentos aplicados automáticamente según las configuraciones relacionadas con el cliente, el artículo, el listado o la categoría de descuento. El usuario tiene la opción de ingresar, modificar o eliminar descuentos directamente en esta columna. Para usar este widget, es necesario que, además de activar el indicador, se especifique en el tipo de oferta qué tipo de descuento utilizar.

**Utilice el artículo del cliente**: si está configurado, este indicador insertará en la cuadrícula de artículos de la oferta las columnas para el Código y la Descripción del cliente ingresados en el registro del artículo, pestaña Cliente.

**Utilice código de barras**: si está configurado, este indicador insertará en la cuadrícula de artículos de la oferta la columna para mostrar el código de barras del artículo.

**Código de usuario obligatorio**: este indicador hace que sea obligatorio completar el campo *Usuario* en la cabecera de la oferta.

**Bloquear la inserción de documentos en días festivos según el calendario de la fábrica**: si está activo, el sistema no permite la inserción de la oferta en fechas festivas (se verifica primero el Calendario de Fábrica, luego el Calendario de capacidades productivas); si no está activo, el sistema no realiza ninguna verificación y permite la inserción del documento.

**Ofrecer referencia**: si se establece este indicador, en el proyecto creado a partir de la oferta se insertará la Referencia de la oferta en el título del proyecto; la composición de esta nota debe ser ingresada en el campo *Descripción* según los parámetros descritos en la etiqueta.

**Tipo de origen de oferta de costo material por defecto**: en este campo es posible indicar el *Tipo costo origen* a usar como importe de partida para el cálculo de los ingresos de los *Materiales* de una *[oferta jerárquica](/docs/sales/offers/insert-offer)*.

**Recursos de pedido de artículo de la oferta**: en este campo es posible indicar qué artículo codificado asociar a los recursos de una Oferta, para la creación de las líneas del Pedido a partir de una *[oferta jerárquica](/docs/sales/offers/insert-offer)*.

**Referencias de prototipo**: en esta sección es posible componer la nota de referencia al prototipo asociado a la oferta; esta será trasladada al campo *Prototipo* de la pestaña *Actividades* de la oferta jerárquica.

**Confirmación de bloque y conversión de oferta en orden si hay prototipos no codificados**: este indicador impide la confirmación y conversión de la oferta en pedido si están asociados prototipos no codificados.

### Descarga 

Los parámetros de descarga se utilizan solo para proponer el almacén y la causa en las líneas de las ofertas no jerárquicas.

**Prioridad de los parámetros insertados para cada línea de pedido**: si está activo, el almacén y la causa de descarga se leen desde las líneas del pedido; de lo contrario, se usarán el almacén y la causa ingresados en los campos siguientes (**Almacén** y **Plantilla de almacén**).