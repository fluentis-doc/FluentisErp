---
title: Spesómetro 2017 trimestral (Spesometro 2017 trimestrale)
sidebar_position: 8
---

Desde este formulario es posible buscar las elaboraciones del Spesómetro trimestral ya procesadas y presentes en la base de datos, o proceder a la creación de un nuevo Spesómetro.

PREMISAS:

La obligación del Spesómetro fue introducida por el art. 21 del DL 31 de mayo de 2010, n. 78, que previó el envío telemático de todas las operaciones activas y pasivas relevantes a efectos IVA (ventas y compras de bienes, prestaciones de servicios realizadas y recibidas).

Desde 2017, el decreto 193/2016 ha introducido la obligación de comunicación trimestral.

**Documentos que no entran en el spesómetro trimestral**:

- No deben comunicarse los datos de las facturas electrónicas, emitidas y recibidas, que hayan pasado a través del Sistema de Intercambio (SdI). En caso de que no todas las facturas emitidas y recibidas transiten por el SdI, el contribuyente podrá limitarse a enviar telemáticamente los datos de las otras facturas, o, si le resulta más conveniente, podrá enviar los datos relativos a todas las facturas, incluidas las electrónicas;

- No se deben comunicar los datos contenidos en documentos diferentes a las facturas (como por ejemplo los datos de las hojas de combustible).

ACTIVIDADES PRELIMINARES:

Para proceder con la correcta generación del archivo (de tipo xml para cargar en el portal correspondiente para el intercambio con la Agencia de Ingresos) es necesario preparar algunos archivos básicos dentro de las tablas de Fluentis.

- ** [Tipos de Documento](/docs/configurations/tables/general-settings/document-types) **

- ** [Tipos de IVA/Modalidades ](/docs/configurations/tables/finance/vat-rates) **

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image01.png)

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image02.png)

Dentro de las tablas mencionadas es necesario, en particular, gestionar los campos **Código P.A.** (los mismos que se gestionan para la facturación electrónica a las Administraciones Públicas - tratándose de un sistema de intercambio similar).

La codificación a adoptar ha sido publicada por la Agencia de Ingresos en la documentación técnica para la creación del archivo telemático y se presenta a continuación:

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image03.png)

INDICACIONES OPERATIVAS:

**Todas las operaciones que transitan por movimientos de IVA se incluyen en la declaración: si es necesario (p. ej.: hojas de combustible), estas pueden ser eliminadas manualmente de la declaración.**

Las facturas intracomunitarias se incluirán automáticamente, en función del tipo de movimiento de IVA de la causa utilizada, con código de documento TD10 (las notas de crédito intracomunitarias mantienen código TD04): si se trata de servicios, será necesario intervenir en la línea de la declaración con una corrección manual.

Las tasas de IVA utilizadas en las compras en reverse charge, desde el año 2021, ya no deben enviarse con código N6 y, por lo tanto, ya no se completan automáticamente con este código de exención (el automatismo permanece activo para los años anteriores): en este caso, sin embargo, el código de exención está disponible en el procedimiento para modificaciones manuales.

Los códigos relativos a la exigibilidad del IVA ([I] IVA a exigibilidad inmediata, [D] IVA a exigibilidad diferida, [S] IVA con escisión de pagos (split payment)), son asignados automáticamente por el tipo de movimiento de IVA de la causa contable.

Los datos de la deducibilidad/deducibilidad del IVA indicado, siempre indicados como no obligatorios en el trazado, no son gestionados.

PROCEDIMIENTO DE CREACIÓN:

**Datos de encabezado**:

Indicar el año y el trimestre para el cual generar el archivo.

Los demás campos de la cabecera deben ser valorados solo si el sujeto obligado a la comunicación de los datos de la factura no coincide con el sujeto pasivo de IVA al que se refieren los datos.

NO deben ser valorados si el sujeto transmisor:

- coincide con el sujeto de IVA al que se refieren los datos;

- está vinculado por contrato con el sujeto de IVA al que se refieren los datos;

- es un intermediario.

**Ruta del archivo:** permite especificar una ruta local para el guardar el archivo que se enviará telemáticamente. El archivo se guardará en los documentos de Fluentis y será posible descargar una copia en el PC local.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image04.png)

**Datos de Facturas**:

Pulse el botón **Calcular** en la barra de herramientas para recuperar los datos de IVA del trimestre, que se dividirán en la sección de facturas emitidas y en las recibidas.

En esta fase, el sistema comprobará si hay más documentos de los que el ministerio ha previsto que se puedan incluir en cada archivo (1000 clientes y 1000 facturas por cada uno para las emitidas, 1000 proveedores y 1000 facturas por cada uno para las recibidas).

Si se supera este límite, Fluentis avisará al usuario de que será necesario crear otra declaración para incluir los documentos restantes (se pueden enviar N archivos).

Además, se codificará el nombre del archivo según la nomenclatura prevista (campos Nombre de archivo y No. Progresivo).

El campo "Identificador de archivo" sirve para almacenar en el sistema el recibo que el sistema telemático del ministerio devolverá: una vez almacenado, esta sección no será más editable.

Dado que es posible indicar hasta 1000 documentos por cada contraparte, las líneas se numeran progresivamente en orden de número de IVA de la contraparte, no siendo relevante la numeración de los registros de IVA originales.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image05.png)

**SECCIÓN DTE / DTR (facturas emitidas / recibidas)**

Los datos a enviar para la sección DTE y los clientes son los siguientes (desde 2018): 

Código de país de la partida IVA (editable en la cuadrícula)

Partida IVA (o alternativamente el código fiscal) (partida IVA editable en la cuadrícula)

El subcuenta de referencia (y la respectiva registración conectada) son modificables en la cuadrícula

Para cada documento, se deben indicar: 

El código del tipo de documento (recuperado de la tabla Tipos de documento pero editable en la cuadrícula)

La fecha y el número del documento de venta (editables en la cuadrícula) 

En la cuadrícula inferior se indican los datos de IVA de la registración, se deben indicar: 

Base imponible

Importe IVA

Porcentaje IVA

Código de exención (obligatorio en caso de no haber IVA) 

En esta sección, los datos son detallados, en el archivo serán agrupados por porcentaje/código de exención.

**RECLAMACIONES/ANULACIONES**

En caso de que sea necesario enviar una rectificación para un documento ya enviado, será necesario crear una nueva declaración: no se permite incluir, en un archivo, más de una rectificación o anulación (es decir, una rectificación de DTE en su archivo, una rectificación de DTR en su archivo, una anulación en la sección ANN), por lo que será necesario crear N declaraciones.

Para crear una rectificación de una registración ya enviada, por lo tanto, es suficiente con crear una nueva declaración y utilizar el botón ‘Inserción manual de una rectificación’ para buscar las registraciones ya enviadas para el trimestre indicado.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image06.png)

Una vez seleccionado de esta búsqueda, Fluentis devolverá la línea en la declaración valorizando en la misma también el campo del identificador de archivo y el número progresivo dentro de la declaración:

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image07.png)

De todos modos, es posible valorar estos datos manualmente y/o modificarlos. La sección de anulación solo requiere los datos del identificador de archivo y número a anular, como se resalta a continuación:

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image08.png)

**CREACIÓN DEL ARCHIVO**

Una vez completada la declaración del trimestre, será posible proceder a la creación del archivo a través del botón **Crear archivo**.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image09.png)

Una vez completada la operación, los archivos estarán adjuntos a la declaración misma y serán descargables desde los documentos como se visualiza en la imagen a continuación.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image10.png)

**ERRORES EN EL TRAZADO**

Los archivos visualizados como adjuntos con el nombre ‘...Errors’ son utilizados para fines de control interno y señalan posibles errores en los datos presentes en la declaración (números de IVA faltantes, etc.).

ATENCIÓN: los archivos que contienen errores representan una indicación general y NO reemplazan el procedimiento de control oficial de la Agencia de Ingresos, este procedimiento es descargable libremente desde el sitio web de la Agencia de Ingresos. Ver en este sentido el anexo a este artículo.