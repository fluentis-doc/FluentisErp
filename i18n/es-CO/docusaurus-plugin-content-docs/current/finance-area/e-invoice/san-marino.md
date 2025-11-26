---
title: Fact. Electrón. de San Marino
sidebar_position: 5
ai_generated: true
---

:::note NOTA<!-- NOTA -->
En esta sección se trata la gestión de la factura electrónica en relación con los operadores económicos usuarios de Fluentis **residentes** o establecidos en San Marino.

NO se refiere, por tanto, a los aspectos relacionados con la facturación de sujetos italianos hacia San Marino o recibida desde San Marino.
:::

### Tabla *Configuración de documentos electrónicos* <!-- Tabella *Configurazione documenti elettronici* -->

Dentro de la tabla, que normalmente se completa para la configuración del Fluentis Business Hub el cual se conecta con el SDI italiano, en este caso es necesario completar, además de los campos habituales para los cuales se remite [**aquí (video *Configuración inicial de Facturación electrónica*)**](/docs/finance-area/sdi-documents/sdi-documents-intro/), dos campos específicos válidos para San Marino:

- El flag **Test S. Marino** (para identificar la conexión al entorno fiscal de simulación), el cual prevalece y pasa por alto el flag *Es prueba* presente en el encabezado (que en este caso no es relevante)

- **Token S. Marino** para ingresar la credencial de conexión con la oficina fiscal de San Marino (en lugar del SDI italiano).

![](/img/it-it/finance-area/sdi-documents/sanmarino/sdiconfig.png)

:::tip INFO
Aunque los campos en la tabla relacionados con la conexión con Fluentis Business Hub y el SDI italiano son obligatorios (como por ejemplo user name y password), en el caso de San Marino la llamada se efectuará directamente al web service de la administración financiera de San Marino. Por lo tanto, podría ser necesario ingresar credenciales "ficticias" de Fluentis Business Hub para poder guardar el contenido del formulario y completar los campos realmente necesarios para la conexión, como el Token para el webservice de San Marino.
:::

### Conectores Bizlink a habilitar<!-- Connettori Bizlink da abilitare -->

![](/img/it-it/finance-area/sdi-documents/sanmarino/bizlinkconnectors.png)

En el caso de que los conectores visibles en la imagen no estén ya presentes en el sistema y sea necesario proceder a añadirlos manualmente, se recomienda copiar los códigos y descripciones presentes y luego seleccionar en los diversos campos los tipos relacionados con la facturación electrónica sanmarinense.

<details>

  <summary>En Particular: (Clic para expandir)</summary>
 

  1. Tipo de conector: San Marino INPUT y OUTPUT, respectivamente para las facturas de entrada y salida

  2. Partner: Fluentis

  3. Flujo: San Marino

  4. Identificador: Debe coincidir con el parámetro *Globalidentifier* configurado en las configuraciones del servicio Bizlink, de lo contrario los conectores en cuestión quedarán inhabilitados.
  Por lo tanto, en el momento de la instalación y antes de su uso, los conectores, por precaución, podrían estar inhabilitados y es necesario activarlos eliminando la cadena SANMARINO de los conectores si el parámetro del servicio bizlink está establecido en NULL, o bien, reportar en el parámetro *Globalidentifier* del servicio la cadena SANMARINO dejando los conectores como están; en este caso, sin embargo, la cadena SANMARINO deberá encontrarse en todos los demás conectores necesarios para las funcionalidades deseadas.

  5. Operación de Flujo: seleccionar las opciones correspondientes para envío, recepción o cancelación, respectivamente para facturas de compra o venta; las opciones son coherentes con los códigos visibles en la imagen (que son los conectores necesarios) 

Documento de flujo: seleccionar las opciones respectivas para envío o recepción

![](/img/it-it/finance-area/sdi-documents/sanmarino/bizlinkconnectors2.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/bizlinkconnectors3.png)

</details>

## LÓGICA BÁSICA<!-- LOGICA DI BASE -->

### **Compras**:<!-- Acquisti -->

El operador económico de S.Marino recibe de la oficina tributaria de San Marino, junto con un PEC que notifica la factura "extranjera" entrante (es decir, de una empresa italiana que vende a un sanmarinense), el documento proveniente del Sdi italiano y encuentra el archivo en los *Documentos de compra entrantes<!-- Documenti acquisto in entrata -->* como de costumbre.

La factura electrónica de compra antes mencionada se encuentra en este momento, dentro de Fluentis, en el estado ***No asignado<!-- Non assegnato -->***.

Para la empresa en cuestión debe haberse activado (en la tabla Empresa<!-- Società --> - SH_Companies directamente en la base de datos) el flag que activa la creación de facturas de compra desde archivo Sdi.
El usuario entonces crea la factura de compra (la factura electrónica en este punto pasa al estado ***Recibida<!-- Ricevuta -->***), integra los datos necesarios, en particular el tipo facturado compras en las líneas, para especificar el tipo de mercancía - ver imagen abajo -, y la tasa de IVA a efectos del cálculo del impuesto monofásico, datos requeridos por la fiscalidad de San Marino<!-- S.Marino -->.

<details>

  <summary>Detalles de integración de factura: (Clic para expandir)</summary>

La indicación del tipo de mercancía se realiza directamente a través de la tabla de definición de las partidas de Facturación compras<!-- Fatturato acquisti --> donde, en el campo Tipo IVA (tabla fija), se contiene la información que irá a valorizar la etiqueta específica.

![](/img/it-it/finance-area/sdi-documents/sanmarino/purchaseintegration.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/purchaseintegration2.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/xmlpurchaseinvoice.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/vatintegration.png)

</details>

Una vez que ha integrado la factura, a través de un cambio de estado especial (workflow) crea el archivo de integración de la importación para enviar a la oficina tributaria de San Marino.

Los estados del documento, específicos para San Marino son en este punto:

- **Controlada<!-- Controllato -->**: ejecuta una prueba en la factura de compra Fluentis para verificar que se hayan completado los campos necesarios;
- **Generada<!-- Generato -->**: crea el archivo con estructura XML-SM
- **Por enviar<!-- Da spedire -->**: transmite el archivo a FBH y desde aquí a la oficina tributaria de S.M.
- **Rechazada HUB_SM<!-- Respinto HUB_SM -->**: si el archivo no es aceptado y por tanto tampoco procesado por la oficina tributaria de S.M. - desde este estado puede volver a *Recibida<!-- Ricevuta -->*
- **en HUB-SM<!-- in HUB-SM -->**: durante el tiempo en que el archivo permanece en la oficina tributaria de S.M.
- **Rechazada No conforme HUB-SM<!-- Scartato Non conforme HUB-SM -->**: si la oficina tributaria de S.M. rechaza el archivo; desde aquí puede volver al estado *Recibida<!-- Ricevuta -->* para correcciones y nuevo envío
- **Adquirida HUB-SM<!-- Acquisito HUB-SM -->**: si la elaboración es exitosa. El éxito de la adquisición de datos desde el formato XML-RSM determina el acto de presentación de la factura a la Oficina Tributaria, registrado en la fecha de transmisión del archivo.
- **Cancelada<!-- Cancellato -->**: estado al que se puede llegar enviando una solicitud de cancelación; si la solicitud es exitosa, es posible devolver el documento al estado *Recibido<!-- Ricevuto -->*

:::note **NOTA**
En el lapso de tiempo entre la transmisión de los archivos y su procesamiento efectivo, el operador tiene la posibilidad de cancelarlos, en caso de detectar, mientras tanto, eventuales errores de llenado.

La carga de un archivo de integración en el área temporal desencadena la cancelación inmediata de cualquier otro archivo de integración que se pueda asociar al mismo archivo FE Import y esté presente en ese momento en el área temporal; en esencia, en el área temporal para cada FE Import de referencia prevalece la última versión cargada del archivo de integración.
:::

		
La Oficina Tributaria, a través de elaboraciones automatizadas, realiza el procesamiento de las facturas en lotes y procede a la emisión de eventuales Avisos de pago relativos al impuesto sobre 
importaciones (Monofase).
El último paso del proceso es la confirmación de la recepción y aceptación del archivo por parte de la oficina tributaria de S. Marino (notificación de "Visado"), que actualiza el estado del documento.

La factura de compra se contabiliza posteriormente como de costumbre, para registrarla en contabilidad.

:::note **Nota**
Las facturas de importación de servicios exentos del pago del impuesto monofásico deben integrarse en el HUB-SM indicando Tipo Mercancía 9 "Servicios Exentos", mediante las modalidades descritas en este documento, para evitar que queden pendientes indefinidamente en la lista de facturas a presentar.
Para este tipo de facturas no se prevé ni el procesamiento en lotes ni el envío de ninguna notificación de "visado" dirigida al SdI.
:::

### **Ventas**:<!-- Vendite -->

El flujo es similar al italiano (es la misma estructura Sdi, aunque con alguna etiqueta compilada de una manera particular).

<details>

  <summary>Etiquetas específicas para San Marino (específicas para SM): (Clic para expandir)</summary>

Etiqueta fija NIF del emisor ejemplo:

```xml
    <IdTrasmittente>
    	<IdPaese>SM</IdPaese>
    	<IdCodice>96428100588</IdCodice>
    </IdTrasmittente>
```    

Para cada sección 2.2.1 DetalleLíneas de la sección 2.2DatosBienesServicios 

```xml
    <AltriDatiGestionali>
    		<TipoDato>TM</TipoDato>
    		<RiferimentoTesto>1</RiferimentoTesto>
    	</AltriDatiGestionali>
```

donde el valor de la etiqueta TipoDato *TM* es fijo y el valor de la etiqueta RiferimentoTesto se toma de la lista de valores del campo **Tipo IVA** conectados a las clases de **Facturación ventas<!-- Fatturato vendite -->** (tabla Fluentis) ingresados en la factura

![](/img/it-it/finance-area/sdi-documents/sanmarino/salesturnover.png)

En la sección DatiRiepilogo se inserta, para cada valor del campo Tipo IVA (mencionado arriba) relacionado con la facturación de ventas, encontrada en el documento, una etiqueta específica *RiferimentoNormativo* donde el valor se obtiene concatenando el código del Tipo IVA vinculado a la facturación y el valor del campo Categoría IVA presente en la tabla [**Tasas de IVA**](/docs/configurations/tables/finance/vat-rates). 

```xml
    <DatiRiepilogo>
    		<AliquotaIVA>0.00</AliquotaIVA>
    		<Natura>N3.1</Natura>
    		<ImponibileImporto>1725.00</ImponibileImporto>
    		<Imposta>0.00</Imposta>
    		<EsigibilitaIVA>I</EsigibilitaIVA>
    		<RiferimentoNormativo>**TM:1**, ESENZIONE</RiferimentoNormativo>
    	</DatiRiepilogo>
```

</details>

La oficina tributaria de S.Marino actúa como intermediaria en el proceso de envío, por lo que están previstos algunos estados particulares del documento relacionados con el hecho de que el archivo pasa por la oficina tributaria sanmarinense (por lo tanto, es S.Marino quien realiza una primera prueba de los requisitos específicos en términos de valorización de las etiquetas) y luego, si también es aceptado por el Sdi italiano, el estado del documento pasa al habitual (por ejemplo, Entregado).

La información sobre las notificaciones de entrega, etc. (italianas), pasa a través de la oficina tributaria de S.Marino, que las reenvía al Fluentis Business Hub para su adquisición en el sistema de gestión.

(Principales) ESTADOS DEL WORKFLOW (en *cursiva* los *ESPECÍFICOS PARA SM*<!-- *corsivo* quelli *SPECIFICI PER SM* -->):

- **Controlada<!-- Controllato -->**: realiza una prueba sobre la factura de compra Fluentis para verificar que se hayan completado los campos necesarios; un control particular para S. Marino que se ha añadido es el requisito de que en la misma factura solo puedan estar presentes las siguientes combinaciones relativas al tipo mercancía (etiqueta TM): Materias primas con Bienes de Consumo y con Bienes de Equipo y separadamente los servicios de cuenta trabajo<!-- conto lavoro -->, ya sea con o sin materias primas (separados entre sí).
- **Generada<!-- Generato -->**: crea el archivo con estructura XML-SM
- **Por enviar<!-- Da spedire -->**: transmite el archivo a FBH y desde aquí a la oficina tributaria de S.M.
- ***Rechazada HUB_SM<!-- Respinto HUB_SM -->***: si el archivo es rechazado por la oficina tributaria de S.M. por errores formales respecto a las especificaciones del archivo xml - desde este estado puede volver a *No examinado<!-- Non esaminato -->*
- ***en HUB-SM<!-- in HUB-SM -->***: durante el tiempo en que el archivo permanece en la oficina tributaria de S.M.
- ***Cancelado HUB SM<!-- Cancellato HUB SM -->***: tras una solicitud de cancelación activada por un cambio de estado específico
- ***Rechazada No conforme HUB-SM<!-- Scartato Non conforme HUB-SM -->***: si la oficina tributaria de S.M. rechaza el archivo por errores sustanciales relativos a la corrección de los datos en la factura (La Oficina Tributaria, a través de elaboraciones automatizadas, realiza la adquisición de datos y el procesamiento de las facturas en lotes, luego procede a eventuales controles (por ejemplo, transferencias de IVA cargadas en la factura y a remitir a la Administración Financiera italiana, etc.), luego determina la continuación del procedimiento.); desde aquí puede volver al estado *Recibida<!-- Ricevuta -->* para correcciones y resentado.
- ***No entregado al SDI<!-- Non consegnato allo SDI -->***: en caso de imposibilidad de entrega
- ***En espera de respuesta<!-- In attesa di risposta -->***: en espera del mensaje de respuesta del Sdi italiano
- **En SDI<!-- In SDI -->**: en tránsito en el Sdi italiano, que realiza los controles habituales previstos en Italia
- **No conforme<!-- Non conforme -->**: rechazada por no superar los controles realizados por el Sdi italiano
- **Fallo en la entrega<!-- Mancata consegna -->**: imposibilidad de entrega al destinatario
- **Entregada<!-- Consegnata -->**: entrega realizada al destinatario

<details>

  <summary>Detalles de los pasos de estado (específicos para SM): (Clic para expandir)</summary>

De Enviar --> Rechazado por HUB - SM (automático)

De Enviar --> Transferencia al HUB - SM (automático)

Rechazado por HUB - SM --> Volver a no examinado (manual)

Transferencia al HUB - SM --> Para eliminar en el HUB-SM (manual) --> Desde este estado será automáticamente reiniciado a No examinado (o a otros estados según la respuesta de HUB-SM)

---

Transferencia al HUB-SM --> Rechazado por el HUB-SM (automático)

Transferencia al HUB-SM --> No adquirido por el HUB-SM (automático) --> Pasa a Rechazado por el HUB-SM (automático) o Aceptado por el HUB-SM (automático)

Transferencia al HUB-SM --> Aceptado por el HUB-SM (automático)

---

Rechazado por Hub SM No conforme --> Volver a no examinado (manual)

Aceptado por el HUB-SM --> En Sdi (automático)

Aceptado por el HUB-SM --> No transmitido al Sdi (automático)

Aceptado por el HUB-SM --> Esperando respuesta del Sdi (automático)

</details>

:::note Nota
Si la factura está dentro del alcance de los acuerdos de intercambio, el HUB-SM transmite al SdI el archivo FE y se prosigue con los siguientes pasos, de lo contrario el proceso termina.

SdI notifica a HUB-SM la recepción o el rechazo del archivo FE. En caso de recepción, el Cesionario/Cliente de Italia dispone de la factura electrónica en el 
portal italiano "Facturas y recibos" o en el "casillero fiscal". Si la factura contiene IVA cargado, entonces permanece en un estado "suspendido" (en espera de visado), de lo contrario se 
considera perfeccionada desde el punto de vista del cesionario.

HUB-SM notifica al OESM el resultado recibido de SdI (recibida/rechazada)
:::

El Cedente/Prestador OESM produce la factura electrónica y la transmite al HUB-SM (tanto en el caso de IVA cargado - donde el impuesto será luego enviado desde la Oficina Tributaria de SM a la Agencia Tributaria italiana, como sin IVA cargado).

Durante la fase de transmisión ocurren:
- el cálculo del código hash correspondiente al archivo, cuyo valor se almacena en el HUB-SM y se devuelve al remitente.
- el control sintáctico del archivo FE: Si se detectan errores, estos se comunican inmediatamente al remitente y el archivo FE es rechazado de inmediato.

Una vez transmitido al HUB-SM, cada archivo FE permanece almacenado en un área temporal hasta la ejecución del procesamiento automático que valida, adquiere y 
trabaja los datos; durante ese período el remitente puede cancelar o reemplazar los archivos transmitidos y aún no procesados.

Las facturas que no contienen IVA siguen un proceso más corto, la factura adquirida con éxito por el HUB-SM se incluye en una Lote Export y se envía al SDI italiano. La comunicación de un resultado positivo por parte del SdI desencadena por parte de la Oficina Tributaria el registro de las Solicitudes de Reembolso en la Cuenta Fiscal, creando así la disponibilidad del crédito.

Las transferencias con IVA, después del primer control formal, se incluyen en Lotes Export pero permanecen en espera de que el OESM realice el pago en el banco a la cuenta corriente de la Oficina Tributaria de S.M. del IVA y presente el recibo en papel del pago a la Oficina Tributaria. Solo entonces los archivos de las facturas correspondientes se enviarán al Sdi italiano.

Para las facturas con carga de IVA, la comunicación de un resultado positivo por parte del SdI provoca, desde la Oficina Tributaria, el registro de las Solicitudes de Reembolso en la Cuenta Fiscal, creando así la disponibilidad del crédito. En ese momento, el comprador italiano podrá consultar las facturas con cargo de IVA y aún no perfeccionadas en el portal "Facturas y recibos" con la evidencia de los siguientes dos estados de procesamiento:

- Factura aún no visada por la Agencia Tributaria (Dirección Provincial PU), por tanto válida solo a efectos comerciales;
- Factura visada por la Agencia Tributaria (Dirección Provincial PU), por tanto válida para la deducción del IVA por parte del comprador italiano

Para cada archivo FE enviado desde HUB-SM al SdI, este último sistema produce y devuelve a HUB-SM un archivo XML de acuse de recibo, que certifica la entrega, la falta de entrega o el rechazo.

## GESTIÓN IMPUESTO MONOFÁSICO DE IMPORTE FIJO<!-- GESTIONE IMPOSTA MONOFASE A IMPORTO FISSO -->

:::tip Info
El régimen fiscal de San Marino prevé actualmente, en general, un impuesto monofásico del 17% sobre compras / importaciones de bienes genéricos u otras tasas según el tipo de bien, como por ejemplo los combustibles, etc.

Para los únicos servicios de agencia se prevé el impuesto monofásico por un importe fijo de 2€.
Los demás tipos de servicios están exentos del impuesto monofásico, pero la factura de compra (como se explica mejor a continuación) se procesa igualmente por las empresas residentes en San Marino para enviar a la oficina tributaria el archivo con la integración de la compra, aunque con código de IVA exento.

En cuanto a las ventas de BIENES hacia Italia, la aplicación del IVA (italiano) es opcional y se aplica a solicitud del cliente, de lo contrario se facturan con el código de exención de IVA.

La venta de servicios siempre está exenta.
:::

Para las compras de servicios de agencia (comisiones), la normativa de S.Marino prevé la imposición de un impuesto monofásico fijo de 2€ por cada documento: esencialmente, cualquier sea la base imponible del impuesto, el importe está fijado en este valor fijo.

### CONFIGURACIÓN EN TABLA TASAS DE IVA<!-- CONFIGURAZIONE IN TABELLA ALIQUOTE IVA -->
El impuesto monofásico es esencialmente la tasa de IVA aplicada a los diversos artículos, para la localización de S.Marino tenemos visibilidad del campo **Valor fijo<!-- Valore fisso -->**:

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase1.png)

Cuando se configura un valor en este campo, el campo de porcentaje se restablece a cero y viceversa.

### USO EN LOS DOCUMENTOS DEL CICLO DE COMPRAS/VENTAS, EN LAS COMISIONES, EN LOS ASIENTOS, EN LAS CONTABILIZACIONES<!-- USO NEI DOCUMENTI DEL CICLO ACQUISTI/VENDITE, NEI COMPENSI, NELLE REGISTRAZIONI, NELLE CONTABILIZZAZIONI -->

Ej. factura de venta: **primera línea de artículo** con impuesto monofásico fijo, se valoriza con el importe relativo:

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase2.png)

Todas las demás líneas de artículo (o gastos) con la misma tasa fija tendrán en cambio impuesto = 0:

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase3.png)

Total en los resúmenes de IVA: independientemente del total imponible para esta tasa, el importe del impuesto será el fijado en la tabla

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase4.png)

Resultado en contabilización: solo una línea tendrá el importe fijo de los 2€

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase5.png)

En los asientos manuales, el campo del impuesto fijo no será editable: para ser precisos, parece editable, pero una vez salga del campo Fluentis anulará la modificación para restaurar el importe anterior tomado de la tabla de IVA.

### INTEGRACIÓN DE FACTURA DE IMPORTACIÓN, DETALLES PARA EL IMPUESTO MONOFÁSICO FIJO<!-- INTEGRAZIONE FATTURA D’IMPORTAZIONE, DETTAGLI PER L’IMPOSTA MONOFASE FISSA -->
Cuando se recibe una factura electrónica desde Italia, a partir del archivo Sdi se crean las facturas de compra, se asignan a las líneas las partidas de facturación de compras<!-- fatturati acquisti --> y las diferentes tasas de IVA correspondientes, para luego enviar telemáticamente a la oficina tributaria de SM la integración realizada y pagar el impuesto correspondiente.

:::note Nota
El flag para identificar el impuesto fijo de 2€, denominado ‘S.Marino’, que se utiliza también para la creación del archivo de integración, debe considerarse obsoleto, ya que actualmente se lee directamente el nuevo campo específico, que se gestiona correctamente en el documento y en la contabilización.
:::