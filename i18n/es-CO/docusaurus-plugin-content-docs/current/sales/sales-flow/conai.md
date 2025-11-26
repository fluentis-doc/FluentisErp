---
title: Gestión Conai
sidebar_position: 2
ai_generated: true
---

La gestión **CONAI** (Consorzio Nazionale Imballaggi) en Fluentis es un módulo que permite automatizar la aplicación de los gastos relacionados con la contribución ambiental CONAI en los documentos de compra y venta. Esta herramienta es fundamental para las empresas que gestionan embalajes<!-- imballaggi --> y que deben cumplir con las normativas italianas sobre eliminación y reciclaje de materiales de embalaje<!-- imballaggio -->. La aplicación automática de los gastos CONAI en Fluentis se realiza en base a los parámetros configurados por el usuario y se refleja directamente en los documentos contables, garantizando un cálculo preciso y conforme.

## Activación de la Gestión CONAI<!-- Attivazione della Gestione CONAI -->

Para activar la gestión CONAI en Fluentis, es necesario configurar algunos campos en la tabla [Empresa](/docs/configurations/tables/general-settings/company), en la sección Otras configuraciones:

**Código Socio CONAI<!-- Codice Partner CONAI -->**: Este código se asigna a las empresas en el momento de la inscripción al CONAI. Es un identificador único que sirve para monitorear las declaraciones y contribuciones ambientales debidas por la empresa en base a los embalajes<!-- imballaggi --> puestos en el mercado.

**Tipo de Socio CONAI<!-- Tipo Partner CONAI -->**: Define el rol de la empresa en la cadena de embalajes<!-- imballaggi --> en Italia. Los tipos de socios disponibles son:
- A – Autoproductor: Empresa que produce embalajes<!-- imballaggi --> para uso propio sin venderlos a terceros. Utiliza los embalajes para embalar sus propios productos.
- U1 – Comerciante/Distribuidor: Empresa que compra embalajes para revenderlos sin utilizarlos directamente. En esta categoría entran mayoristas o distribuidores.
- U2 – Otros Usuarios: Empresas que compran embalajes para embalar productos destinados a la venta pero que no los producen. No entran en las categorías "Autoproductor" o "Comerciante/Distribuidor".
- P – Productor: Empresa que produce embalajes y los vende a otros usuarios o distribuidores.

**Fecha de Inicio/Fin de la Relación CONAI<!-- Data Inizio/Fine Partner CONAI -->**: Es posible especificar el periodo de validez de la relación con el CONAI, si corresponde.

## Tabla de Tipos de Materiales<!-- Tabella Tipi Materiali -->

La gestión de los tipos de materiales de embalaje<!-- materiali di imballaggio --> se lleva a cabo en la tabla de logística llamada [Tipos de Materiales](/docs/configurations/tables/logistics/material-types). En esta tabla se codifican los diferentes materiales (como acero, aluminio, papel, madera, plástico, etc.) utilizados para los embalajes<!-- imballaggi -->. Para cada tipo de material, deben configurarse:

**Código de Material CONAI<!-- Codice Materiale CONAI -->**: Especifica el tipo de material conforme a la clasificación CONAI.  
**Código de Artículo Ficticio<!-- Codice Articolo Fittizio -->**: Se utiliza para crear la línea de gasto relativa a la contribución CONAI en los albaranes o facturas. Si no se indica un código de artículo, ese material no será válido para la configuración CONAI.

Es posible utilizar un solo código de artículo para todos los materiales o especificar uno para cada tipo, según el nivel de detalle deseado en los documentos fiscales.

**Tarifas y Unidades de Medida<!-- Tariffe e Unità di Misura -->**: La cuadrícula inferior permite definir las tarifas aplicables para cada material según los distintos intervalos de fechas. La unidad de medida, generalmente en toneladas, debe ser coherente con la utilizada en los artículos de venta y en los artículos ficticios CONAI.

## Definiciones en la Ficha de Artículos<!-- Definizioni in Anagrafica Articoli -->

En la pestaña [Pesos/Dimensiones](/docs/erp-home/registers/items/create-new-item) de la ficha de artículos<!-- anagrafica articoli --> es posible especificar las características de los embalajes<!-- imballaggi --> para la gestión CONAI. En esta sección es posible definir:

**Usar en Compra/Venta<!-- Usa in Acquisto/Vendita -->**: Especifica si el artículo está sometido al cálculo de la contribución CONAI en los documentos de compra o venta.     
**Tipología de Embalaje<!-- Tipologia di Imballaggio -->**: Indica si el embalaje es primario, secundario o terciario.  
**Vacío o Lleno<!-- Vuoto o Pieno -->**: Indica si el embalaje está vacío (sin marcar) o lleno (marcado).  
**Materiales de Embalaje<!-- Materiali di Imballaggio -->**: Lista de los materiales que componen el embalaje con el relativo peso en la unidad de medida codificada.

## Configuraciones en la Ficha del Cliente/Proveedor<!-- Impostazioni in Anagrafica Cliente/Fornitore -->

Para aplicar correctamente los gastos CONAI en los documentos de compra o venta, es necesario configurar correctamente la ficha del cliente o proveedor en la pestaña [Configuraciones CONAI](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/conai):

**Tipo de Socio CONAI<!-- Tipo Partner CONAI -->**: Para el cálculo en venta, el cliente debe ser un autoproductor (A), un comerciante/distribuidor (U1) u otros usuarios (U2). Para el cálculo en compra, el proveedor debe ser un productor (P).  
**Porcentajes de Exención<!-- Percentuali di Esenzione -->**: En la cuadrícula es posible establecer eventuales porcentajes de exención por tipo de material, con las correspondientes fechas de validez.

## Tipos de Albarán y Tipos de Factura<!-- Tipi DDT e Tipi Fattura -->

En los [tipos de albarán<!-- tipi DDT -->](/docs/configurations/tables/sales/delivery-notes-type) y en los [tipos de factura<!-- tipi fatture -->](/docs/configurations/tables/sales/invoices-type) existe una casilla **Gestión CONAI<!-- Gestione CONAI -->**. Esta opción activa el cálculo automático de la contribución CONAI para ese tipo específico de documento.

## Ejemplo de Aplicación en una Factura de Venta<!-- Esempio di Applicazione in una Fattura di Vendita -->

Si la gestión CONAI está activada para una empresa, en la pestaña *Artículos* de la factura de venta estará disponible una subpestaña llamada **Materiales CONAI para el artículo**. Esta sección incluye los materiales de embalaje<!-- imballaggio --> que componen el artículo, con la siguiente información:

**Unidad de Medida<!-- Unità di Misura -->**: Especifica la unidad de medida utilizada para el material.  
**Peso Unitario<!-- Peso Unitario -->**: El peso de cada material, eventualmente reducido por el porcentaje de exención definido en la ficha del cliente.  
**Peso Total<!-- Totale Peso -->**: Calculado multiplicando el número de artículos vendidos por el peso unitario.  

Cuando se guarda el documento o se pulsa el botón *Recalcular CONAI<!-- Ricalcolo CONAI -->* en la barra de herramientas, Fluentis insertará automáticamente una o más líneas de gasto, recuperando el artículo de los materiales con cantidades y precios correspondientes al costo CONAI para ese material. En el archivo de la factura electrónica para el SDI (Sistema di Interscambio), Fluentis añadirá automáticamente las etiquetas en la sección "Otros Datos de Gestión" para reportar los materiales y los pesos unitarios de los artículos.

## Impresiones de Control y Totalización<!-- Stampe di Controllo e Totalizzazione -->

En los módulos de facturas de compra y venta hay disponibles dos formatos de impresión que permiten extraer los totales periódicos para los distintos materiales, tanto para el control interno como para la elaboración de los datos a declarar al CONAI. Para las ventas, también está disponible un informe que refleja las páginas web del CONAI para la carga de los datos de las declaraciones, filtrando los materiales en base a las letras iniciales del Código CONAI introducido en la tabla de materiales.