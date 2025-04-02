---
title: gestione conai
sidebar_position: 2
---

La gestión **CONAI** (Consorzio Nazionale Imballaggi) en Fluentis es un módulo que permite automatizar la aplicación de los gastos relacionados con el aporte ambiental CONAI en los documentos de compra y venta. Esta herramienta es fundamental para las empresas que gestionan envases y que deben cumplir con las normativas italianas sobre la eliminación y reciclaje de materiales de embalaje. La aplicación automática de los gastos CONAI en Fluentis se realiza según los parámetros configurados por el usuario y se refleja directamente en los documentos contables, garantizando un cálculo preciso y conforme.

## Activación de la gestione conai

Para activar la gestión CONAI en Fluentis, es necesario configurar algunos campos en la tabla [Empresa (Società)](/docs/configurations/tables/general-settings/company), en la sección Otras configuraciones:

- **codice partner conai**: Este código se asigna a las empresas al momento de la inscripción en el CONAI. Es un identificador único que sirve para monitorear las declaraciones y los aportes ambientales debidos por la empresa según los envases introducidos en el mercado.

- **tipo partner conai**: Define el papel de la empresa en la cadena de suministro de envases en Italia. Los tipos de socio disponibles son:
  - **autoproduttore**: Empresa que produce envases para uso propio sin venderlos a terceros. Utiliza los envases para empaquetar sus propios productos.
  - **commerciante/distributore**: Empresa que compra envases para revenderlos sin utilizarlos directamente. Incluye a mayoristas o distribuidores.
  - **altri utilizzatori**: Empresas que compran envases para empaquetar productos destinados a la venta pero que no los producen. No se incluyen en las categorías "Autoproducer" o "Comerciante/Distribuidor".
  - **produttore**: Empresa que produce envases y los vende a otros usuarios o distribuidores.

- **Fecha de Inicio/Fín del Socio CONAI (Data Inizio/Fine Partner CONAI)**: Es posible especificar el período de validez de la asociación con el CONAI, si aplica.

## Tipos de Materiales

La gestión de las tipologías de materiales de embalaje se realiza en la tabla de logística denominada [Tipos de Materiales (Tipi Materiali)](/docs/configurations/tables/logistics/material-types). En esta tabla se codifican los diferentes materiales (como acero, aluminio, papel, madera, plástico, etc.) utilizados para los embalajes. Para cada tipo de material, se deben establecer:

- **codice materiale conai**: Especifica el tipo de material conforme a la clasificación CONAI.
- **Código de Artículo Ficticio (Codice Articolo Fittizio)**: Se utiliza para crear la línea de gasto relativa al aporte CONAI en las notas de entrega o facturas. Si no se indica un código de artículo, ese material no será válido para la configuración CONAI.

Es posible utilizar un solo código de artículo para todos los materiales o especificar uno para cada tipo, según el nivel de detalle deseado en los documentos fiscales.

- **Tarifas y Unidades de Medida (Tariffe e Unità di Misura)**: La cuadrícula inferior permite definir las tarifas aplicables para cada material según los distintos intervalos de fechas. La unidad de medida, generalmente en toneladas, debe ser coherente con la utilizada en los artículos de venta y en los artículos ficticios CONAI.

## Definiciones en el Registro de Artículos

En la ficha [Pesos/Dimensiones (Pesi/Dimensioni)](/docs/erp-home/registers/items/create-new-item) del registro de artículos es posible especificar las características de los embalajes para la gestión CONAI. En esta sección se pueden definir:

- **Usar en Compra/Venta (Usa in Acquisto/Vendita)**: Especifica si el artículo está sujeto al cálculo del aporte CONAI en los documentos de compra o venta.
- **tipologia di imballaggio**: Indica si el embalaje es primario, secundario o terciario.
- **vuoto o pieno**: Indica si el embalaje está vacío (indicador no activado) o lleno (indicador activado).
- **Materiales de Embalaje (Materiali di Imballaggio)**: Lista de los materiales que componen el embalaje con el peso correspondiente en unidades de medida codificadas.

## Configuraciones en el Registro de Clientes/Proveedores

Para aplicar correctamente los gastos CONAI en los documentos de compra o venta, es necesario configurar acertadamente el registro del cliente o proveedor en la pestaña [Configuraciones CONAI (Impostazioni CONAI)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/conai):

- **tipo partner conai**: Para el cálculo en venta, el cliente debe ser un autoproducer (A), un comerciante/distribuidor (U1) u otros usuarios (U2). Para el cálculo en compra, el proveedor debe ser un productor (P).
- **Porcentajes de Exención (Percentuali di Esenzione)**: En la cuadrícula es posible establecer los porcentajes de exención por tipo de material, con las respectivas fechas de validez.

## Tipos de DDT y Tipos de Factura

En los [tipos de DDT (tipi DDT)](/docs/configurations/tables/sales/delivery-notes-type) y en los [tipos de facturas (tipi fatture)](/docs/configurations/tables/sales/invoices-type) hay un indicador **gestione conai**. Este indicador activa el cálculo automático del aporte CONAI para ese tipo específico de documento.

## Ejemplo de Aplicación en una Factura de Venta

Si la gestión CONAI está activada para una empresa, en la pestaña *Artículos* de la factura de venta estará disponible una subtaba denominada **Materiales CONAI para el artículo**. Esta sección incluye los materiales de embalaje que componen el artículo, con la siguiente información:

- **unità di misura**: Especifica la unidad de medida utilizada para el material.
- **Peso Unitario (Peso Unitario)**: El peso de cada material, posiblemente reducido por el porcentaje de exención definido en el registro del cliente.
- **totale peso**: Calculado multiplicando el número de artículos vendidos por el peso unitario.

Cuando se guarda el documento o se presiona el botón *ricalcolo conai* en la barra de herramientas, Fluentis insertará automáticamente una o más líneas de gasto, recuperando el artículo de los materiales con la cantidad y el precio correspondientes al costo CONAI para ese material. En el archivo de la factura electrónica para el SDI (Sistema de Interscambio), Fluentis añadirá automáticamente las etiquetas en la sección "Otros Datos de Gestión" para reportar los materiales y los pesos unitarios de los artículos.

## Impresiones de Control y Totalización

En los módulos de facturas de compra y venta están disponibles dos formatos de impresión que permiten extraer los totales periódicos para los diversos materiales, tanto para el control interno como para la elaboración de datos a declarar al CONAI. Para las ventas, también está disponible un informe que refleja las páginas web del CONAI para la carga de datos de las declaraciones, filtrando los materiales según las letras iniciales del Código CONAI ingresado en la tabla de materiales.