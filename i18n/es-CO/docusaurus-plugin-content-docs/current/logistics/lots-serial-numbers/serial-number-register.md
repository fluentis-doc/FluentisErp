---
title: "Datos Maestros de Serial Number"
sidebar_position: 8
sidebar_label: "Datos Maestros de Serial Number"
description: "Guía para la gestión del registro maestro de Serial Number, funcionalidad esencial de Fluentis para la trazabilidad de los artículos."
schema: "TechArticle"
tags: ["Serial Number", "Gestión de Almacén", "Fluentis"]
keywords: ["Serial Number", "Gestión de Artículos", "Trazabilidad", "Fluentis"]
ai_generated: true
---

# Datos Maestros de Serial Number<!-- Anagrafica Serial Number -->

:::important
El registro maestro<!-- anagrafica serial number --> de Serial Number de Fluentis es un módulo esencial para la gestión detallada de los serial numbers, permitiendo a las empresas realizar un seguimiento de artículos individuales a través de un código identificativo único. Esta funcionalidad responde a necesidades específicas de trazabilidad y seguridad, especialmente importante para artículos críticos o de alto valor, donde es fundamental monitorear cada pieza individual y no solamente una cantidad total.

El usuario tiene la posibilidad de buscar un serial number específico y visualizar sus detalles con un simple doble clic. En esta sección, es posible modificar información clave como el código del cliente, el código del proveedor, y el estado del serial number, que puede ser anulado, cerrado forzosamente o reservado. Además, el registro maestro<!-- anagrafica --> proporciona detalles sobre los documentos de ingreso y egreso<!-- carico e scarico --> asociados al serial number, permitiendo un análisis completo de su uso a lo largo del tiempo.

El enfoque sistemático para la gestión de los serial numbers no solo optimiza los procesos internos, sino que también garantiza el cumplimiento de la normativa vigente, haciendo de este registro maestro<!-- anagrafica --> una herramienta imprescindible para las empresas modernas que buscan maximizar la eficiencia operativa y la calidad del servicio.
:::

## Detalle de Lote<!-- Dettaglio Lotto -->

Esta ventana muestra el detalle del lote y se compone de 4 secciones diferentes:

### Encabezado del Serial Number<!-- Testata Serial Number -->

En esta sección se muestran, con la posibilidad de modificar algunos, los principales datos relativos al lote, en particular:

- **Artículo**: en los 3 campos relacionados se muestran la clase, el código y la descripción del artículo al que se refiere el Serial Number. Se trata seguramente de un artículo con la casilla *Gestión SN* activada en el *Registro maestro de artículo<!-- Anagrafica articolo -->* > pestaña *Lotes/SN<!-- Lotti/SN -->*, de lo contrario no habría sido posible realizar el ingreso<!-- carico --> del lote para el propio artículo;

- **Variante**: en los 2 campos relacionados se muestran el código y la descripción de la variante del artículo al que se refiere el Serial Number, si la hay;

- **Código de Lote<!-- Codice Lotto -->**: en este campo aparece el código del Lote al que pertenece el Serial Number. El artículo al que se refiere el Serial Number podría además gestionarse por Lotes; por lo tanto, en este caso, un lote de 100 piezas, por ejemplo, podría estar compuesto por 100 Serial Numbers diferentes. El mismo Serial Number también podría pertenecer a lotes diferentes del mismo artículo, o bien a lotes de artículos distintos;

- **Tipo de lote<!-- Tipo lotto -->**: indica el tipo de lote utilizado;

- **Tipo de código de lote<!-- Tipo codice lotto -->**: indica el tipo de código de lote con el que se ha generado el lote;

- **Código de Serial Number<!-- Codice Serial Number -->**: en este campo aparece el Código del Serial Number. Es un campo editable por el usuario, aunque durante las operaciones de ingreso<!-- carico --> puede ser generado automáticamente dependiendo de algunas reglas que se configuran en el *Tipo de Serial Number* vinculado al artículo. Primero se ingresa un código y una descripción del *tipo de código de Serial Number*, se guarda la línea y luego se decide qué parámetros se desean utilizar para la composición del tipo de código de lote recién creado. Por cada parámetro utilizado se puede decidir de cuántos caracteres debe estar formado e incluso el carácter de relleno a utilizar. Por ejemplo, con el parámetro 'Número progresivo', configurando como carácter de relleno el '0' y como longitud '5', se crearán Serial Numbers comenzando con el número 00000, luego 00001, luego 00002 y así sucesivamente. El *tipo de código de Serial Number* debe ser vinculado luego al registro maestro de artículo<!-- anagrafica articolo --> en el campo correspondiente situado en la pestaña *Lotes/SerialNumber*, de modo que en los procedimientos que crean automáticamente el código *Serial Number* para el artículo en cuestión, el Serial Number se genere de acuerdo a las reglas configuradas en el *tipo de código de Serial Number* vinculado al artículo. El campo es alfanumérico y puede alcanzar una longitud máxima de 50 caracteres;

- **Tipo de Serial Number<!-- Tipo Serial Number -->**: indica el tipo de código de Serial Number con el que se ha generado el Serial Number;

- **Fecha de inicio<!-- Data inizio -->**: en este campo suele aparecer la fecha en que se ingresó el Serial Number, editable por el usuario. Si el Serial Number se ingresó mediante el registro de almacén<!-- registrazione di magazzino -->, esta fecha será igual a la fecha en que se creó el registro; si el Serial Number se ingresó mediante el ingreso de una DDT de compra o registro de devolución de subcontrato<!-- conto lavoro -->, esta fecha será igual a la fecha de la DDT de compra o de subcontrato (a menos que dentro de la DDT el usuario la haya modificado manualmente); si el Serial Number se ingresó vía el registro de un parte de producción, esta fecha será igual a la fecha de dicho parte de producción;

- **Fecha de vencimiento<!-- Data scadenza -->**: en este campo aparece la fecha de vencimiento del Serial Number, editable por el usuario, la cual se calcula, en el momento de creación del lote y por lo tanto del ingreso<!-- carico --> del respectivo movimiento de almacén<!-- movimento di magazzino -->, a partir de la fecha de inicio y sumando los días de validez del Serial Number ingresados en la pestaña Lotes/SN en el registro maestro del artículo;

- **Código de cliente<!-- Codice cliente -->**: en este campo aparece el código del *Lote de cliente*, usualmente el nombre que el cliente da al lote. Es un campo editable por el usuario y no generable automáticamente durante las operaciones de ingreso<!-- carico -->. También puede alcanzar la longitud máxima de 50 caracteres y puede ser idéntico para lotes distintos de artículos diferentes;

- **Código de proveedor<!-- Codice fornitore -->**: en este campo aparece el código del *Lote de proveedor*, usualmente el nombre que el proveedor otorga al lote. Es un campo editable por el usuario y no generable automáticamente durante las operaciones de ingreso<!-- carico -->. También puede alcanzar la longitud máxima de 50 caracteres y puede ser idéntico para lotes distintos de artículos diferentes;

- **Proveedor**: en este campo se indicará la cuenta/subcuenta/descrición del proveedor;

- **Anulado<!-- Annullato -->**: si está activo, indica que el Serial number ha sido anulado;

- **Cerrado forzadamente<!-- Chiuso forzatamente -->**: si está activo, indica que el Serial number está cerrado forzosamente;

- **Reservado<!-- Prenotata -->**: si está activo, indica que el Serial number ha sido reservado.

### Ingreso<!-- Carico -->

En esta sección se muestran los datos fundamentales de los documentos que han contribuido al ingreso<!-- carico --> del Serial Number:

- **Cantidad**: cantidad del lote empleada en el documento.
- **Unidad de medida**: unidad de medida utilizada en el documento.
- **Número de bultos**: número de bultos.
- **Fecha de ingreso**: fecha de ingreso.
- **Cerrado forzadamente**: indica que el Serial Number ha sido cerrado forzosamente, si está activo.
- **Documento de referencia**: tipo de documento que ha generado el ingreso del Serial Number. Puede ser un registro de almacén<!-- registrazione di magazzino -->, una DDT de compra o un retorno de subcontrato<!-- conto lavoro -->;

**Registro**: en estos campos aparece el número y la fecha del documento;

**Almacén<!-- Magazzino -->**: en estos campos aparece el código y la descripción del almacén<!-- magazzino --> donde se ingresó el Serial Number;

**Ubicación**: en estos campos aparece el código y la descripción de la ubicación;

**Causal<!-- Causale -->**: en estos campos aparece el código y la descripción de la causal<!-- causale --> utilizada para la creación de ese movimiento de ingreso<!-- movimento di carico -->.
- **Cliente/Proveedor**: cuenta, subcuenta y descripción relativas al cliente o proveedor.

### Egreso<!-- Scarico -->

En esta sección se muestran los datos fundamentales del primer documento, en orden cronológico, que ha empleado el Serial Number. Estos datos se visualizan en una cuadrícula en la que aparecen las siguientes columnas:

- **Cantidad**: cantidad del lote empleada en el documento.
- **Unidad de medida**: unidad de medida utilizada en el documento.
- **Documento de referencia**: tipo de documento que por primera vez empleó el Serial Number. Puede ser una orden de producción, una orden de cliente, una DDT de venta, una factura de venta, una lista de picking, una DDT de entrega de subcontrato<!-- conto lavoro -->, una devolución de subcontrato<!-- conto lavoro -->.
- **Registro**: número y fecha del documento.
- **Almacén<!-- Magazzino -->**: código y descripción del almacén<!-- magazzino -->.
- **Ubicación**: código y descripción de la ubicación.
- **Causal<!-- Causale -->**: código y descripción de la causal<!-- causale --> utilizada.
- **Cliente/Proveedor**: cuenta, subcuenta y descripción relativas al cliente o proveedor.

## Resumen y ampliación<!-- Riepilogo e approfondimenti -->

El registro maestro<!-- anagrafica --> de Serial Number en Fluentis ERP es una potente herramienta para la gestión de la trazabilidad y la seguridad de los artículos. Las secciones principales comprenden el Encabezado de Serial Number, el Ingreso<!-- Carico --> y el Egreso<!-- Scarico -->, cada una con datos críticos que respaldan las operaciones de la empresa.

Para más información, consulta [Registro Maestro de Artículos<!-- Anagrafica Articolo -->](/docs/erp-home/registers/items/create-new-item) y [Almacén<!-- Magazzino -->](/docs/logistics/warehouse/warehouse-intro).