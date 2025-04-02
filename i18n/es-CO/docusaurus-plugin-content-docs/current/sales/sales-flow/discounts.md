---
title: Recuperación de precios y descuentos (Ripresa prezzi e sconti)
sidebar_position: 1
---

Los precios de los productos se pueden definir en las listas de precios o directamente en el registro de artículos. En las listas, los precios pueden ser "con IVA" o "sin IVA", una diferencia determinada por la activación del indicador "Precio con IVA (Prezzo Ivato)" en la cabecera de la lista.

**Tipos de Lista (Tipologie di Listino)**  
Las listas se dividen en dos categorías principales: general y para cliente. Las listas generales deben configurarse en la tabla correspondiente, donde también es posible especificar si la lista es "con IVA" o "sin IVA" mediante un indicador. Las listas para cliente utilizan como código la cuenta y subcuenta del cliente, haciéndolas únicas y personalizadas.

Cada lista se identifica por tres elementos clave:

- Tipo (general o para cliente),
- Moneda (divisa),
- Fechas de validez (de/a).  
Dentro de cada lista, los precios de los artículos pueden especificarse para la unidad de medida de gestión (obligatoria y definida en el registro de artículos) o para una de las unidades de medida alternativa. Los precios también pueden asociarse a tramos de cantidad (pestaña "Precio por Cantidad") o a destinos de mercancía específicos (pestaña "Destinos").

**Gestión de Descuentos (Gestione degli Sconti)**  
Los descuentos pueden configurarse de diversas maneras:

- Registro de Cliente (Anagrafica Cliente): Los descuentos definidos en la pestaña "Gastos/Descuentos (Spese/Sconti)" se aplican automáticamente al documento de venta cuando se selecciona un cliente. Es posible asociar múltiples descuentos.

- Tipo de Pago: Los descuentos relacionados con el tipo de pago se recuperan automáticamente al seleccionar o proponer un tipo de pago en el documento.

- Tipo de Lista: Los descuentos pueden asociarse a cada línea de la cuadrícula de listas en el registro de cliente.

- Lista de Artículos: Los descuentos pueden especificarse para cada línea de artículo en la lista, incluso a nivel de tramo (descuentos por cantidad o por valor).

- Definición de Políticas de Descuento: Los descuentos pueden configurarse para artículos, clientes, clases de artículos, categorías comerciales, categorías de descuento y detalles de la categoría de descuento.

**Procedimiento de Recuperación de Precios y Descuentos (Procedura di Ripresa Prezzi e Sconti)**  
Cuando se inserta un artículo en un documento de venta, se activa el procedimiento de recuperación de precios y descuentos. El sistema busca una lista válida entre las asociadas al cliente, comenzando por el tipo con el indicador "por defecto" o siguiendo la prioridad de búsqueda establecida.

La búsqueda de una lista válida se basa en los siguientes criterios:

- La lista debe incluir el artículo con la misma moneda del cliente.
- La fecha de validez de la lista debe estar comprendida entre la fecha de inicio de validez de la línea en la pestaña "Listas" y la fecha del documento.
Si no se encuentra una lista válida y no está activo el indicador "Buscar en todas las listas predefinidas (Ricerca in tutti i listini predefiniti)", el sistema utiliza el precio de venta del registro de artículos. Si el indicador está activado, la búsqueda continúa entre los otros tipos de listas presentes en el registro de cliente, según el orden de prioridad.

La búsqueda del artículo dentro de la lista considera no solo el código del artículo, sino también la variante y la unidad de medida. Si el precio está definido para una unidad de medida alternativa, el sistema lo inserta en el documento, activando el indicador "Precio Unidad de Medida Alternativa (Prezzo Unità di Misura Alternativa)", y calcula los totales en base a la cantidad alternativa.

Después de identificar el precio, también se buscan los descuentos y los precios por tramos. Si en la pestaña "Listas" del registro de cliente está activo el indicador "Gestión de Precios (Gestione Prezzi)", el sistema busca posibles descuentos adicionales en la configuración "Definición de Políticas de Descuento (Definizione Politiche di Sconto)". Todos los descuentos encontrados se registran en la colección de descuentos, con la indicación de su origen.

**Consideraciones Finales (Considerazioni Finali)**  
La misma lógica de búsqueda se aplica tanto para documentos con precios "con IVA" como "sin IVA". Sin embargo, si un documento requiere precios "sin IVA", la búsqueda se limita a las listas con este tipo de precio, y viceversa para los precios "con IVA".

Atención: Si no existe una lista válida y el registro de artículos tiene un precio de venta definido, este se propone como precio de la línea del documento, independientemente del tipo de precio solicitado (con IVA o sin IVA).