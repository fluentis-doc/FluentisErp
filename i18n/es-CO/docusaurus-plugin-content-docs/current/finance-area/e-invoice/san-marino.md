---
title: Facturación Electrónica de San Marino (Fatt. Elett. di San Marino)
sidebar_position: 5
---

:::note NOTA
En esta sección se trata la gestión de la factura electrónica relativa a operadores económicos usuarios de Fluentis **residentes** o establecidos en San Marino.

NO se refiere por lo tanto a aspectos relacionados con la facturación de sujetos italianos hacia San Marino o recibida desde San Marino.
:::

### Tabla *Configuración de documentos electrónicos*

Dentro de la tabla, normalmente completada para la configuración del Fluentis Business Hub que se conecta con el SDI italiano, en este caso es necesario completar, además de los campos habituales para los cuales se remite [**aquí (video *Configuración inicial de la facturación electrónica*)**](/docs/finance-area/sdi-documents/sdi-documents-intro/), dos campos específicos válidos para San Marino:

- el indicador **Prueba S. Marino** (para identificar la conexión con el entorno fiscal de simulación), el cual prevalece y omite el indicador *Es prueba* presente en el encabezado (que en este caso es irrelevante)

- **Token S. Marino** para ingresar la credencial de conexión con la oficina fiscal sanmarinense (en lugar del SDI italiano).

![](/img/it-it/finance-area/sdi-documents/sanmarino/sdiconfig.png)

:::tip INFO
Aunque los campos en la tabla relacionados con la conexión con Fluentis Business Hub y el SDI italiano son obligatorios (como por ejemplo usuario y contraseña), en el caso de San Marino la llamada se realizará directamente al servicio web de la administración financiera de San Marino. Por lo tanto, podría ser necesario ingresar credenciales "ficticias" de Fluentis Business Hub con el fin de guardar el contenido del formulario y poder completar los campos realmente necesarios para la conexión, como el Token para el servicio web de San Marino.
:::

### Conectores Bizlink a habilitar

![](/img/it-it/finance-area/sdi-documents/sanmarino/bizlinkconnectors.png)

En caso de que los conectores visibles en la imagen no estén ya presentes en el sistema y sea necesario proceder a insertarlos manualmente, se recomienda copiar los códigos y descripciones presentes y luego seleccionar en los diferentes campos los tipos relacionados con la facturación electrónica sanmarinense.

<details>

  <summary>En Particular: (Click to expand)</summary>
 
  1. Tipo de conector: San Marino INPUT y OUTPUT respectivamente para las facturas entrantes y salientes
  
  2. Socio: Fluentis
  
  3. Flujo: San Marino
   
  4. Identificador: Debe corresponder al parámetro *Globalidentifier* configurado en los ajustes del servicio Bizlink, de lo contrario, los conectores en cuestión estarán bloqueados. Por lo tanto, en el momento de la instalación y antes de su uso, los conectores, por precaución, pueden aparecer inhabilitados y deben activarse eliminando la cadena SANMARINO de los conectores si el parámetro del servicio bizlink está establecido en NULL, o llevar el parámetro *Globalidentifier* del servicio a la cadena SANMARINO dejando los conectores como están; en este caso, sin embargo, la cadena SANMARINO debe ser incorporada en todos los otros conectores que son necesarios para las funcionalidades deseadas.
  
  5. Operación de Flujo: seleccionar las opciones respectivamente para el envío, la recepción o la cancelación, respectivamente para facturas de compra o venta; las opciones son coherentes con los códigos visibles en la imagen (que son los conectores necesarios) 
    
  Documento de flujo: seleccionar las opciones correspondientes para el envío o la recepción.
  
![](/img/it-it/finance-area/sdi-documents/sanmarino/bizlinkconnectors2.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/bizlinkconnectors3.png)

</details>

## LÓGICA BÁSICA

### **Compras**:

El operador económico de San Marino recibe de la oficina tributaria sanmarinense, simultáneamente a un correo electrónico que notifica la factura "extranjera" entrante (es decir, de una sociedad italiana que vende a un sanmarinense), el documento proveniente del SDI italiano y encuentra el archivo en los *Documentos de compra en entrada* como es habitual.

La factura electrónica de compra mencionada anteriormente se encuentra en ese momento, dentro de Fluentis, en el estado ***No asignado***.

Para la sociedad en cuestión debe haberse activado (en la tabla Sociedades - SH_Companies directamente en la base de datos) el indicador que activa la creación de facturas de compra a partir del archivo SDI.  
El usuario entonces crea la factura de compra (la factura electrónica en este punto pasa al estado ***Recibida***) e integra los datos necesarios, en particular el tipo de facturado de compras en las líneas, para especificar el tipo de mercancía - ver imagen a continuación -, y la tasa del IVA a efectos del cálculo del impuesto monofásico, datos requeridos por la fiscalidad de San Marino.

<details>

  <summary>Detalles de integración de la factura: (Click to expand)</summary>

La indicación de la tipología de mercancía se realiza directamente a través de la tabla de definición de las partidas de Facturado de compras donde, en el campo Tipo IVA (tabla fija), se contienen las informaciones que deberán valorizar el tag correspondiente.

![](/img/it-it/finance-area/sdi-documents/sanmarino/purchaseintegration.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/purchaseintegration2.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/xmlpurchaseinvoice.png)

![](/img/it-it/finance-area/sdi-documents/sanmarino/vatintegration.png)

</details>

Una vez que ha integrado la factura, a través de un cambio de estado específico (workflow), crea el archivo de integración de la importación que se enviará a la oficina tributaria de San Marino.

Los estados del documento, específicos para San Marino, son en este momento:

- **Controlado**: realiza una prueba sobre la factura de compra de Fluentis para verificar que se hayan completado los campos necesarios;
- **Generado**: crea el archivo con estructura XML-SM
- **Por enviar**: transmite el archivo a FBH y desde aquí a la oficina tributaria de S.M.
- **Rechazado HUB_SM**: si el archivo no es adquirido y por lo tanto no es procesado por la oficina tributaria de S.M. - desde este estado puede ser devuelto a *Recibida*
- **en HUB-SM**: por el tiempo que el archivo permanece en la oficina tributaria de S.M.
- **Desechado No conforme HUB-SM**: si la oficina tributaria de S.M. rechaza el archivo; desde aquí puede ser devuelto al estado *Recibida* para correcciones y nuevo envío	
- **Adquirido HUB-SM**: si el procesamiento se realiza con éxito. El éxito de la adquisición de datos desde el formato XML-RSM determina el acto de presentación de la factura a la Oficina Tributaria, registrado en la fecha de transmisión del archivo.
- **Cancelado**: estado que se puede alcanzar enviando una solicitud de cancelación; si la solicitud es exitosa, posteriormente se puede regresar el documento al estado *Recibida*

:::note **NOTA**
En el intervalo de tiempo entre la transmisión de los archivos y su efectiva elaboración, el operador tiene la posibilidad de cancelarlos, en caso de que mientras tanto se dé cuenta de posibles errores de compilación.

La carga de un archivo de integración en el área temporal desencadena la cancelación inmediata de cualquier otro archivo de integración que se relacione con el mismo archivo FE Import y esté presente en ese momento en el área temporal; en esencia, en el área temporal para cada FE Import de referencia prevalece la última versión cargada del archivo de integración.
:::

El Departamento de Impuestos, a través de procesos automatizados, realiza la tramitación de las facturas en listados y procede a la emisión de posibles Avisos de pago relacionados con el impuesto sobre las 
importaciones (Monofásico).  
El último paso del proceso es la confirmación de la recepción y aceptación del archivo por parte de la oficina tributaria de San Marino (notificación de "Validación"), que actualiza el estado del documento.

La factura de compra se contabiliza como es habitual, para registrarla en contabilidad.

:::note **Nota**
Las facturas en importación de servicios exentos del pago del impuesto monofásico deben integrarse en el HUB-SM indicando Tipo Mercancía 9 "Servicios Exentos", mediante los métodos descritos en este documento, para evitar su permanencia indefinida en la lista de facturas a presentar.
Para este tipo de facturas no se prevé ni la tramitación en listados ni el envío de ninguna notificación de "validación" dirigida al SDI.
:::

### **Ventas**:

El flujo es similar al italiano (es la misma trazabilidad SDI, aunque con algunos tags cumplidos de manera particular).

<details>

  <summary>Tags Específicos para San Marino (específicos para SM): (Click to expand)</summary>

Tag fijo Número de IVA del transmitente ejemplo:

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

donde el valor del Tag TipoDato *TM* es fijo y el valor del tag RiferimentoTesto se toma de la lista de valores del campo **Tipo IVA** asociados a las clases de **Facturado de ventas** (tabla Fluentis) ingresados en la factura.

![](/img/it-it/finance-area/sdi-documents/sanmarino/salesturnover.png)

En la sección DatosResumen se inserta, para cada valor del campo Tipo IVA (de arriba) asociado al facturado de ventas, un tag específico *RiferimentoNormativo* donde el valor se toma concatenando el código del Tipo IVA vinculado a facturado y el valor del campo Categoría IVA presente en la tabla [**Tasas de IVA**](/docs/configurations/tables/finance/vat-rates). 

```xml
    <DatiRiepilogo>
    		<AliquotaIVA>0.00</AliquotaIVA>
    		<Natura>N3.1</Natura>
    		<ImponibileImporto>1725.00</ImponibileImporto>
    		<Imposta>0.00</Imposta>
    		<EsigibilitaIVA>I</EsigibilitaIVA>
    		<RiferimentoNormativo>**TM:1**, EXENCIÓN</RiferimentoNormativo>
    	</DatiRiepilogo>
```

</details>

La oficina tributaria de San Marino actúa como intermediario en el proceso de envío, por lo que se prevén estados particulares del documento relacionados con el hecho de que el archivo transita por la oficina tributaria sanmarinense (por lo tanto, es San Marino quien realiza una primera prueba de las solicitudes específicas en términos de valorización de tags), y luego, si también es aceptado por el SDI italiano, el estado del documento llega al correspondiente habitual (por ejemplo, Entregado).

La información relacionada con las notificaciones de entrega, etc. (italianas) pasa a través de la oficina tributaria de San Marino que las reenvía al Fluentis Business Hub para su adquisición en el sistema de gestión.

(Principales) ESTADOS DEL WORKFLOW (en *cursiva* los *ESPECÍFICOS PARA SM*):

- **Controlado**: realiza una prueba sobre la factura de compra de Fluentis para verificar que se hayan completado los campos necesarios; un control particular para San Marino que se ha añadido es el requisito de que en la misma factura solo pueden incluirse las siguientes combinaciones relacionadas con el tipo de mercancía (tag TM); Materias primas con Bienes de Consumo y con Bienes Instrumentales y separadamente los servicios de trabajo por encargo, tanto con como sin materias primas (separados entre sí). 
- **Generado**: crea el archivo con estructura XML-SM
- **Por enviar**: transmite el archivo a FBH y desde aquí a la oficina tributaria de S.M.
- ***Rechazado HUB_SM***: si el archivo es rechazado por la oficina tributaria de S.M. por errores formales en relación con las especificaciones de la trazabilidad XML - desde este estado puede ser devuelto a *No examinada*
- ***en HUB-SM***: durante el tiempo que el archivo permanece en la oficina tributaria de S.M.
- ***Cancelado HUB SM***: como resultado de una solicitud de cancelación activada por un cambio de estado específico.
- ***Desechado No conforme HUB-SM***: si la oficina tributaria de S.M. rechaza el archivo por errores sustanciales relacionados con la corrección de los datos en la factura (La Oficina Tributaria, a través de procesos automatizados, realiza la adquisición de datos y la tramitación de las facturas en listados, luego procede a posibles controles [por ejemplo, pagos del IVA cargados en la factura y que deben ser enviados a la Administración Financiera italiana, etc.], determinando así la continuación del proceso); desde aquí puede ser retornada al estado *Recibida* para correcciones y nuevo envío	
- ***No entregado al SDI***: en caso de imposibilidad de entrega 
- ***En espera de respuesta***: en espera del mensaje de respuesta por parte del SDI italiano
- **En SDI**: en tránsito ante el SDI italiano, que realiza los controles normales previstos en Italia.
- **No conforme**: rechazado por no adherirse a los controles realizados por el SDI italiano.
- **Falla en la entrega**: imposibilidad de entrega al destinatario.
- **Entregado**: se ha completado la entrega al destinatario.

<details>

  <summary>Detalles de los pasos de estado (específicos para SM): (Click to expand)</summary>

Desde Enviar --> Rechazado por HUB - SM (automático)

Desde Enviar --> Transferencia al HUB - SM (automático)

Rechazado por HUB - SM --> Regresar a No examinada (manual)

Transferencia al HUB - SM --> Por cancelar en HUB-SM (manual) --> Desde este estado se restablecerá automáticamente a No examinada (o a otros estados dependiendo de la respuesta por parte de HUB-SM)

---

Transferencia al HUB-SM --> Desechado por HUB-SM (automático)

Transferencia al HUB-SM --> No adquirido por HUB-SM (automático) --> Pasa a Desechado por HUB-SM (automático) o Aceptado por HUB-SM (automático)

Transferencia al HUB-SM --> Aceptado por HUB-SM (automático)

---

Desechado por el Hub SM No conforme --> Regresar a No examinada (manual)

Aceptado por el HUB-SM --> En SDI (automático)

Aceptado por el HUB-SM --> No transmitido al SDI (automático)

Aceptado por el HUB-SM --> Espera de respuesta del SDI (automático)

</details>

:::note Nota
Si la factura está dentro del ámbito de los acuerdos de intercambio, el HUB-SM transmite al SDI el archivo FE y se continúa con los siguientes pasos; de lo contrario, el proceso finaliza.

El SDI notifica al HUB-SM la recepción o el rechazo del archivo FE. En caso de recepción, el Cesionario/Comitente sujeto italiano tiene a su disposición la factura electrónica en 
el portal italiano "Facturas y Correspondencias" o en el "buzón fiscal". Si la factura incluye el IVA, entonces permanece en un estado "suspendido" (a la espera de validación), de lo contrario se considera perfeccionada desde el punto de vista del cesionario.

El HUB-SM notifica al OESM el resultado recibido del SDI (recibido/rechazado).
:::

El Cedente/Prestatario OESM produce la factura electrónica y la transmite al HUB-SM (tanto en el caso de cobro del IVA - donde el impuesto será luego enviado por la oficina tributaria SM a la Agencia de Ingresos italiana, como sin cobro del IVA).

Durante la fase de transmisión ocurren:
- el cálculo del código hash correspondiente al archivo, el valor del hash se almacena en el HUB-SM y se devuelve al transmitente.
- el control sintáctico del archivo FE: si se detectan errores, estos se informan de inmediato al transmisor y el archivo FE se rechaza de inmediato.

Una vez transmitido al HUB-SM, cada archivo FE permanece depositado en un área temporal hasta que se complete la automatización que valida, adquiere y 
procesa los datos; dentro de ese intervalo, el transmitente puede cancelar o reemplazar los archivos transmitidos que aún no han sido procesados.

Las facturas que no contienen IVA siguen un procedimiento más corto; la factura adquirida con éxito por el HUB SM se inserta en una Lista de Exportación y se envía al SDI italiano. La comunicación de un resultado positivo por parte del SDI desencadena, desde la oficina tributaria, el registro de Solicitudes de Reembolso en la Cuenta Fiscal, creando así la disponibilidad del crédito.

Las cesiones con IVA, después de un primer control formal, se insertan en Listas de Exportación, pero permanecen a la espera de que el OESM realice el pago en el banco de la cuenta corriente de la oficina tributaria de S.M. del IVA y presente el recibo en papel del pago a la oficina tributaria. Solo a partir de este punto los archivos de las facturas relacionadas serán enviados al SDI italiano.

Para las facturas con cobro del IVA, la comunicación de un resultado positivo por parte del SDI desencadena que, desde el lado de la oficina tributaria, se registre Solicitudes de Reembolso en la Cuenta Fiscal, creando así la disponibilidad del crédito. En este punto, el comprador italiano podrá consultar las facturas con cobro del IVA y que aún no se hayan perfeccionado en el portal "Facturas y Correspondencias" "con la evidencia de los siguientes dos estados de procesamiento:

- Factura aún no validada por la Agencia de Ingresos (Dirección Provincial PU), por lo tanto, válida solo con fines comerciales;
- Factura validada por la Agencia de Ingresos (Dirección Provincial PU), por lo tanto, válida para la deducción del IVA por parte del comprador italiano.

Para cada archivo FE enviado por el HUB-SM al SDI, este último sistema produce y devuelve al HUB SM un archivo XML de recibo, que certifica la entrega, la falta de entrega o el rechazo.


## GESTIÓN DEL IMPUESTO MONOFASE A IMPORTE FIJO

:::tip Info
El régimen fiscal de San Marino prevé actualmente, en general, un impuesto monofásico del 17% sobre las compras / importaciones de bienes genéricos, o bien otras tasas según el tipo de bien, como por ejemplo los combustibles, etc.

Para los únicos servicios de agencia se prevé un impuesto monofásico en una medida fija de 2€.
Los otros tipos de servicios están exentos del impuesto monofásico pero la factura de compra (como se explica mejor a continuación) se trabaja, no obstante, por las empresas residentes en San Marino para enviar a la oficina tributaria el archivo con la integración de la compra, aunque con código IVA exento.

En cuanto a las ventas de BIENES hacia Italia, la aplicación del IVA (italiana) es opcional y se aplica a solicitud del cliente; de lo contrario, se facturan con el código de exención IVA.

La venta de servicios siempre está exenta.
:::

Para las compras de servicios de agencia (comisiones), la normativa de San Marino prevé la imposición de un impuesto monofásico fijo de 2€ por cada documento: en esencia, sea cual sea la base imponible del impuesto, el monto se fija en este importe fijo.

### CONFIGURACIÓN EN LA TABLA DE TASAS DE IVA
El impuesto monofásico es esencialmente la tasa del IVA aplicada a los varios artículos; para la localización de San Marino tenemos la visibilidad del campo **Valor fijo**:

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase1.png)

Cuando se establece un valor en este campo, el campo porcentual se restablecerá a cero y viceversa.

### USO EN LOS DOCUMENTOS DEL CICLO DE COMPRAS/VENTAS, EN LOS COMPENSOS, EN LAS REGISTRACIONES, EN LA CONTABILIZACIÓN

Ej. factura de venta: **primera línea de artículo** con impuesto monofásico fijo, se valoriza con el importe relativo:

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase2.png)

Todas las demás líneas de artículo (o gastos) con la misma tasa fija tendrán, en cambio, impuesto = 0:

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase3.png)

Total en los resúmenes de IVA: independientemente del total imponible por esta tasa, el importe del impuesto será el que se fije en tabla.

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase4.png)

Resultado en contabilidad: solo una línea tendrá el importe fijo de 2€.

![](/img/it-it/finance-area/sdi-documents/sanmarino/SMMonofase5.png)

En las registraciones manuales, el campo del impuesto fijo será no modificable: para ser precisos, parece modificable, pero una vez que se sale del campo, Fluentis anulará la modificación para restablecer el importe anterior tomado de la tabla de IVA.

### INTEGRACIÓN DE LA FACTURA DE IMPORTACIÓN, DETALLES PARA EL IMPUESTO MONOFASE FIJO
Cuando se recibe una factura electrónica desde Italia, se crean las facturas de compra a partir del archivo SDI, se asignan a las líneas los facturados de compras y las diversas tasas de IVA del caso para luego realizar el envío telemático a la oficina tributaria de SM de la integración realizada y abonar el impuesto correspondiente.

:::note Nota
El indicador para identificar el impuesto fijo de 2€ denominado ‘San Marino’ utilizado también a efectos de la creación del archivo de integración se considera obsoleto, ya que actualmente se lee directamente el nuevo campo específico, que se gestiona correctamente en el documento y en la contabilización.
:::