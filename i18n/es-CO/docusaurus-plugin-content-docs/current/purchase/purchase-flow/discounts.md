---
title: Recuperación de precios y descuentos 
sidebar_position: 1
---

La recuperación de **precios y descuentos** es un proceso automatizado que garantiza la alineación de los documentos de compra con los listados de proveedores actualizados. Cuando se inserta un artículo en un documento, el sistema verifica los listados disponibles, considerando proveedores, monedas y fechas de validez, y aplica los precios y descuentos apropiados.

## Listados de proveedores

Cada **Listado de proveedor** está identificado por tres elementos clave:

- **Proveedor**  
- **Moneda**  
- **Fechas de validez** (de/a)

Dentro de cada listado, los precios de los artículos pueden especificarse para la unidad de medida de gestión (obligatoria y definida en el registro del artículo) o para una de las unidades de medida alternativas. Los precios también pueden estar asociados a escalas de cantidad (pestaña "Precio por Cantidad") o a destinos de mercancías específicas (pestaña "Destinaciones").

## Gestión de Descuentos 

Los **Descuentos** se pueden configurar de varias maneras:

- **Registro de Proveedor**: Los descuentos definidos en la pestaña "Gastos/Descuentos" se aplican automáticamente al documento de compra cuando se selecciona un proveedor. Se pueden asociar múltiples descuentos.  
- **Tipo de Pago**: Los descuentos relacionados con el tipo de pago se recuperan automáticamente cuando se selecciona o se propone un tipo de pago en el documento.  
- **listino**: Los descuentos se pueden asociar a cada línea de la cuadrícula de listados en el registro del proveedor.  
- **Listado de Artículos**: Los descuentos pueden especificarse para cada línea de artículo en el listado, incluso a nivel de escala (descuentos por cantidad o por valor).  
- **Definición de Políticas de Descuento**: Los descuentos pueden configurarse para proveedores, clases de artículos, categorías de descuento y detalles de categoría de descuento.

## Procedimiento de Recuperación de Precios y Descuentos 

Cuando se inserta un artículo en un documento de compra, se activa el procedimiento de **recuperación de precios y descuentos**. El sistema busca un listado válido entre los asociados al proveedor, comenzando con el tipo que tiene el indicador "predeterminado" o siguiendo la prioridad de búsqueda establecida.

La búsqueda de un listado válido se basa en los siguientes criterios:

- El listado debe incluir el artículo con la misma moneda que la del proveedor.  
- La fecha de validez del listado debe estar comprendida entre la fecha de inicio de validez de la línea en la pestaña "Listados (Listini)" y la fecha del documento.

Si no se encuentra un listado válido, y el indicador [Búsqueda en todos los listados predeterminados](/docs/configurations/parameters/purchase/purchase-orders-parameters/) está activado, la búsqueda continúa entre los otros listados presentes en el registro del proveedor, según el orden de prioridad. Si el indicador anterior no está activo, pero el indicador "Costo cero en ausencia de listados (Costo zero in assenza di listini)" está activado, el artículo se insertará con un precio de cero. Alternativamente, el sistema utiliza el *Último costo* del registro de artículos.

La búsqueda del artículo dentro del listado tiene en cuenta no solo el código del artículo, sino también la variante y la unidad de medida. Si el precio está definido para una unidad de medida alternativa, el sistema lo inserta en el documento, activando el indicador "Precio Unidad de Medida Alternativa (Prezzo Unità di Misura Alternativa)", y calcula los totales en función de la cantidad alternativa.

Después de haber localizado el precio, también se buscan los descuentos y los precios escalonados. Si en la pestaña "Listados" del registro del proveedor está activo el indicador "Gestión de Precios", el sistema busca posibles descuentos adicionales en la configuración "Definición de Políticas de Descuento". Todos los descuentos encontrados se reportan en la colección de descuentos, con la indicación de su origen.