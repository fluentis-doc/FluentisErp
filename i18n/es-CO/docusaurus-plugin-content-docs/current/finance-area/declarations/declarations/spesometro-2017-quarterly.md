---
title: Spesometro 2017 trimestral
sidebar_position: 8
ai_generated: true
---

Desde este formulario es posible buscar las elaboraciones del Spesometro trimestral<!-- Spesometro trimestrale --> ya generadas y presentes en la base de datos, o proceder a la creación de un nuevo Spesometro.

INTRODUCCIÓN<!-- PREMESSA -->:

La obligación del Spesometro fue introducida por el art. 21 del DL 31 de mayo 2010, n. 78, que estableció el envío telemático de todas las operaciones activas y pasivas relevantes a efectos del IVA (ventas y compras de bienes, prestaciones de servicios emitidas y recibidas).

 

Desde 2017 el decreto 193/2016 introdujo la obligación de comunicación trimestral.

**Documentos que no están incluidos en el spesometro trimestral<!-- Documenti che non rientrano nello spesometro trimestrale -->**:

- No deben comunicarse los datos de las facturas electrónicas, emitidas y recibidas, que han transitado por el Sistema de Intercambio (SdI). En caso de que no todas las facturas emitidas y recibidas pasen por el SdI, el contribuyente podrá limitarse a enviar telemáticamente los datos de las demás facturas, o, si le resulta más conveniente, podrá igualmente enviar los datos relativos a todas las facturas, incluidas las electrónicas;

- No deben comunicarse los datos contenidos en documentos diferentes a las facturas (como por ejemplo los datos de las tarjetas de combustible).

ACTIVIDADES PRELIMINARES<!-- ATTIVITA' PRELIMINARI -->:

Con el fin de proceder a la correcta generación del archivo (de tipo xml para cargarlo en el portal correspondiente para el intercambio con la Agencia Tributaria) es necesario preparar algunos archivos base dentro de las tablas de Fluentis<!-- archivi di base all'interno delle tabelle di Fluentis -->.

 

- **[Tipos de Documento<!-- Tipi Documento -->](/docs/configurations/tables/general-settings/document-types)**

- **[Tipos/Modalidades de IVA<!-- Aliquote/Modalità Iva -->](/docs/configurations/tables/finance/vat-rates)**

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image01.png)

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image02.png)

Dentro de las tablas mencionadas anteriormente, es especialmente necesario gestionar los campos **Código P.A.<!-- Codice P.A. -->** (los mismos que se gestionan para la facturación electrónica hacia las Administraciones Públicas - ya que se trata de un sistema de intercambio similar).

La codificación a adoptar fue publicada por la Agencia Tributaria dentro de la documentación técnica para la creación del archivo telemático y la reproducimos a continuación:

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image03.png)

INDICACIONES OPERATIVAS<!-- INDICAZIONI OPERATIVE -->:

 

**Todas las operaciones que pasan por movimientos de IVA<!-- movimenti iva --> se incluyen en la declaración: si es necesario (ejemplo: tarjetas de combustible), pueden eliminarse manualmente de la declaración.**

Las facturas intracomunitarias serán insertadas automáticamente, en función del tipo de movimiento de IVA<!-- movimento IVA --> de la causale<!-- causale --> utilizada, con el código de documento TD10 (las notas de crédito intracomunitarias se mantienen con el código TD04): si se trata de servicios será necesario intervenir manualmente en la línea correspondiente de la declaración.

 

Los tipos de IVA<!-- aliquote iva --> utilizados en compras con reverse charge, desde el año 2021, ya no deben enviarse con el código N6 y por lo tanto no se rellenan automáticamente con este código de exención (el automatismo permanece activo para los años anteriores): también en este caso, de todas formas, el código de exención está disponible en el procedimiento para modificaciones manuales.

 

Los códigos relativos a la exigibilidad del IVA ([I] IVA de exigibilidad inmediata, [D] IVA de exigibilidad diferida, [S] IVA con escisión de pagos (split payment)), son asignados automáticamente por el tipo de movimiento de IVA<!-- movimento IVA --> de la causale contabile<!-- causale contabile -->.

 

Los datos de deducibilidad/deductibilidad del IVA<!-- detraibilità/deducibilità dell'iva --> indicada, siempre indicados como no obligatorios en el formato, no son gestionados.

 

PROCEDIMIENTO DE CREACIÓN<!-- PROCEDURA DI CREAZIONE -->:

**Datos de cabecera<!-- Dati di testata -->**:

Indique el año y el trimestre para el que se debe generar el archivo.

 

Los demás campos de la cabecera sólo deben completarse si el sujeto obligado a la comunicación de los datos de la factura no coincide con el sujeto pasivo de IVA<!-- soggetto passivo IVA --> al que se refieren los datos.

NO deben completarse si el sujeto transmisor:

 

- coincide con el sujeto de IVA<!-- soggetto IVA --> al que se refieren los datos;

- está vinculado por un mandato con el sujeto de IVA<!-- soggetto IVA --> al que se refieren los datos;

- es un intermediario.

 

**Ruta del archivo<!-- Percorso file -->:** permite especificar una ruta local para guardar el archivo que se enviará telemáticamente. El archivo se guardará igualmente en el documental de Fluentis<!-- documentale di Fluentis --> y será posible descargar una copia en el PC local.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image04.png)

**Datos de facturas<!-- Dati Fatture -->**:

Pulse el botón **Calcular<!-- Calcola -->** en la barra de herramientas para obtener los datos de IVA<!-- dati iva --> del trimestre, que se dividirán en la sección de facturas emitidas y recibidas.

En esta fase, el sistema verificará si existe un mayor número de documentos de los que el ministerio ha previsto que se puedan incluir en cada archivo (1000 clientes y 1000 facturas para cada uno en las emitidas, 1000 proveedores y 1000 facturas para cada uno en las recibidas).

 

En el caso de que se supere este límite, Fluentis avisará al usuario que será necesario crear otra declaración para introducir los documentos restantes (se pueden enviar N archivos).

 

Además, el nombre del archivo ya se codificará según la nomenclatura prevista (campos Nombre de archivo y No. Progresivo).

 

El campo “Identificador de archivo<!-- Identificativo file -->” sirve para almacenar en el sistema el recibo que devolverá el sistema telemático del ministerio: una vez almacenado este campo, la sección ya no será editable.

 

Dado que es posible indicar hasta 1000 documentos por cada contraparte, las filas se numeran progresivamente en orden de NIF<!-- partita iva --> de la contraparte, sin que tenga ninguna relevancia la protocolización de los libros de IVA<!-- registri iva --> originales.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image05.png)

**SECCIÓN DTE / DTR (facturas emitidas / recibidas)<!-- SEZIONE DTE / DTR (fatture emesse / ricevute) -->**

 

Los datos a enviar para la sección DTE y los clientes son los siguientes (desde 2018):

 

Código de país del NIF<!-- partita iva --> (editable en la rejilla)

NIF<!-- Partita iva --> (o alternativamente el código fiscal) (NIF editable en la rejilla)

La subcuenta<!-- sottoconto --> de referencia (y la correspondiente ficha asociada) son modificables en la rejilla

 

Para cada documento, se deben indicar:

 

El código del tipo de documento (extraído de la tabla Tipos de documento pero editable en la rejilla)

La fecha y el número del documento de venta (editables en la rejilla)

 

En la rejilla inferior se indican los datos de IVA<!-- dati iva --> de la registración<!-- registrazione -->, se deben indicar:

 

Base imponible

Importe de IVA<!-- Importo iva -->

Porcentaje de IVA<!-- Percentuale iva -->

Código de exención (obligatorio en caso de que no haya IVA<!-- iva -->)

 

En esta sección, los datos están detallados, en el archivo serán agrupados por porcentaje/código de exención.

**RECTIFICACIONES/ANULACIONES<!-- RETTIFICHE/ANNULLAMENTI -->**

 

Si es necesario enviar una rectificación de un documento ya enviado, será necesario crear una nueva declaración: no se permite incluir, en un archivo, más de una rectificación o anulación (es decir, una rectificación de DTE en su archivo, una de DTR en su archivo, una anulación en la sección ANN), por lo que será necesario crear N declaraciones.

 

Para crear una rectificación de una registración<!-- registrazione --> ya enviada, bastará con crear una nueva declaración y utilizar el botón 'Inserción manual de una rectificación'<!-- Inserimento manuale di una rettifica --> para buscar las registraciones<!-- registrazioni --> ya enviadas para el trimestre indicado.

 ![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image06.png)

Una vez seleccionado de esta búsqueda, Fluentis trasferirá la línea a la declaración rellenando también el campo de identificación de archivo y el número progresivo dentro de la declaración:

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image07.png)

Es igualmente posible rellenar estos datos manualmente y/o modificarlos. La sección de anulación sólo requiere los datos del identificador de archivo y el número a anular como se destaca a continuación:

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image08.png)

**CREACIÓN DEL ARCHIVO<!-- CREAZIONE DEL FILE -->**

 

Una vez completada la declaración del trimestre, será posible proceder a la creación del archivo mediante el botón **Crear archivo<!-- Crea file -->**

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image09.png)

Tras completar la operación, los archivos serán adjuntados a la propia declaración y se podrán descargar desde el documental<!-- documentale -->, como se muestra en la imagen a continuación.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image10.png)

**ERRORES EN EL TRAZADO<!-- ERRORI NEL TRACCIATO -->**

 

Los archivos visualizados como adjuntos con nombre ‘...Errors’ se generan para control interno y señalan posibles errores en los datos presentes en la declaración (como NIF<!-- partite iva --> faltantes, etc.).

ATENCIÓN: los archivos que contienen errores son sólo una indicación general y NO sustituyen el procedimiento de control oficial de la Agencia Tributaria, dicho procedimiento se puede descargar libremente en el sitio web de la Agencia Tributaria. Véase al respecto el anexo al presente artículo.