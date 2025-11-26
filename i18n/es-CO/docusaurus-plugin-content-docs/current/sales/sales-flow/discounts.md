---
title: Recuperación de precios y descuentos
sidebar_position: 1
ai_generated: true
---

Los precios de los productos pueden definirse en las listas de precios de venta o directamente en el maestro de artículos<!-- anagrafica articoli -->. En las listas de precios, los precios pueden ser "con IVA" o "sin IVA", una diferencia determinada por la activación del flag "Precio con IVA" en la cabecera de la lista de precios<!-- listino -->.

**Tipos de Lista de Precios<!-- Tipologie di Listino -->**      
Las listas de precios se dividen en dos categorías principales: general y por cliente<!-- listino per cliente -->. Las listas generales deben configurarse en la tabla correspondiente, donde también es posible especificar si la lista es "con IVA" o "sin IVA" mediante un flag. Las listas por cliente utilizan como código la cuenta<!-- conto --> y subcuenta<!-- sottoconto --> del cliente, haciéndolas únicas y personalizadas.

Cada lista de precios está identificada por tres elementos clave:

- Tipología (general o por cliente<!-- generale o per cliente -->)
- Moneda
- Fechas de validez (desde/hasta<!-- da/a -->)     
Dentro de cada lista de precios, los precios de los artículos pueden especificarse para la unidad de medida de gestión<!-- unità di misura gestionale --> (obligatoria y definida en el maestro de artículos<!-- anagrafica articolo -->) o para una de las unidades de medida alternativas. Los precios también pueden asociarse a tramos de cantidad (pestaña "Precio por Cantidad<!-- Prezzo per Quantità -->") o a destinos específicos de mercancía (pestaña "Destinos<!-- Destinazioni -->").

### **Gestión de Descuentos<!-- Gestione degli Sconti -->**      
Los descuentos pueden configurarse de varias maneras:

- Maestro de Clientes<!-- Anagrafica Cliente -->: Los descuentos definidos en la pestaña "Gastos/Descuentos<!-- Spese/Sconti -->" se aplican automáticamente al documento de venta cuando se selecciona un cliente. Es posible asociar varios descuentos.

- Tipo de Pago: Los descuentos vinculados al tipo de pago se recuperan automáticamente cuando se selecciona o propone un tipo de pago en el documento.

- Tipo de Lista de Precios<!-- Tipologia di Listino -->: Los descuentos pueden asociarse a cada línea de la cuadrícula de listas de precios en el maestro de clientes<!-- anagrafica cliente -->.

- Lista de Precios de Artículos: Los descuentos pueden especificarse para cada línea de artículo en la lista de precios<!-- listino -->, incluso a nivel de tramo (descuentos por cantidad o por valor).

- Definición de Políticas de Descuento: Los descuentos pueden configurarse para artículos, clientes, clases de artículos, categorías comerciales, categorías de descuento y detalles de categoría de descuento.

:::important Recuerda<!-- Ricorda -->
Para poder gestionar los descuentos sobre el imponible es necesario activar en base de datos el parámetro general GEN-GlobalSettings_CalculateDiscountOnAmount para la sociedad interesada.     
Si este parámetro no está activo, los descuentos sobre el imponible serán transformados en descuentos en cascada. 
:::


### **Procedimiento de Recuperación de Precios y Descuentos<!-- Procedura di Ripresa Prezzi e Sconti -->**      
Cuando se ingresa un artículo en un documento de venta, se activa el procedimiento de recuperación de precios y descuentos. El sistema busca una lista de precios válida entre las asociadas al cliente, empezando por la tipología con el flag "default" o siguiendo la prioridad de búsqueda establecida.

La búsqueda de una lista válida se basa en los siguientes criterios:

- La lista debe incluir el artículo con la misma moneda del cliente.
- La fecha de validez de la lista debe estar comprendida entre la fecha de inicio de validez de la línea en la pestaña "Listas de Precios<!-- Listini -->" y la fecha del documento.
Si no se encuentra una lista válida, y no está activo el flag "Buscar en todas las listas predefinidas", el sistema utiliza el precio de venta del maestro de artículos<!-- anagrafica articoli -->. Si el flag está activado, la búsqueda continúa entre los demás tipos de listas presentes en el maestro de clientes<!-- anagrafica cliente -->, según el orden de prioridad.

La búsqueda del artículo dentro de la lista de precios tiene en cuenta no sólo el código de artículo, sino también la variante y la unidad de medida. Si el precio está definido para una unidad de medida alternativa, el sistema lo inserta en el documento, activando el flag "Precio Unidad de Medida Alternativa", y calcula los totales en base a la cantidad alternativa.

Después de identificar el precio, también se buscan los descuentos y precios por tramo. Si en la pestaña "Listas de Precios<!-- Listini -->" del maestro de clientes<!-- anagrafica cliente --> está activo el flag "Gestión de Precios<!-- Gestione Prezzi -->", el sistema busca posibles descuentos adicionales en la configuración "Definición de Políticas de Descuento". Todos los descuentos encontrados se reportan en la colección de descuentos, con la indicación de su origen.

### **Consideraciones Finales<!-- Considerazioni Finali -->**     
La misma lógica de búsqueda se aplica tanto para documentos con precios "con IVA" como "sin IVA". Sin embargo, si un documento requiere precios "sin IVA", la búsqueda se limita a las listas de precios con este tipo de precio, y viceversa para los precios "con IVA".

Atención: Si no existe una lista válida y el maestro de artículos<!-- anagrafica articoli --> tiene un precio de venta definido, este se propone como precio de la línea del documento, independientemente del tipo de precio solicitado (con IVA o sin IVA).