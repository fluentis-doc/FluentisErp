---
title: Otras configuraciones específicas de facturación electrónica (Altre configurazioni specifiche fatt. elett.)
sidebar_position: 4
---
### Gestión de la nota de crédito (Gestione della nota di accredito)

A partir de la versión 606, las notas de crédito deben ser ingresadas en Fluentis siempre con el signo negativo, en particular se ingresará un valor negativo a partir del campo Cantidad (Quantità).  
En el documento se devuelve un mensaje de aviso en caso de que el total no sea negativo con propuesta de inversión de signos.  

Con respecto a la facturación electrónica, se requiere para los controles realizados por el SDI que el signo del documento sea positivo; por lo tanto, el parser de generación del archivo XML realizará la nueva inversión del signo (cuando el tipo de documento es TD04).

:::note Nota
A efectos de la contabilización, en caso de que dentro de la nota de crédito haya signos mixtos (líneas positivas y líneas negativas), es necesario habilitar la posibilidad de gestionar su contabilización variando un parámetro interno en la base de datos (cambiar de 0 a 1, en el pasado se configuraba -1 antes del cambio mencionado). Hacer referencia a la documentación técnica y, eventualmente, al servicio de soporte.
:::

### Codificación de artículo para cliente (Tag 2.2.1.3 CodiceArticolo)

El tag código de artículo puede repetirse varias veces, generando una doble codificación, cambiando el código en el tag 2.2.1.3.1 

```xml
    <CodiceTipo> . 
```
El código Tipo que se propone por defecto (en las facturas de venta) es el que se refiere al código de artículo presente en Fluentis (de los registros de artículos de la empresa en uso) que puede ser reportado con dos diferentes 

```xml
    <CodiceTipo> 
```
**Por defecto, la codificación se realiza según este esquema**
    
```xml
    <CodiceArticolo> 
    <CodiceTipo>Código Art. proveedor (Codice Art. fornitore)</CodiceTipo>    
    <CodiceValore>1504X0</CodiceValore>
    </CodiceArticolo> 
```         

O el *CódigoTipo* puede ser personalizado valorando el campo **[Código de artículo de proveedor](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information)** presente en anagrafica cliente en la pestaña *información fiscal*.

:::note Nota
Prestar atención, se trata de un par de campos adyacentes relativos, respectivamente, a la codificación de nuestra empresa (proveedor) para la personalización con respecto al valor por defecto, y al cliente para una doble codificación que se debe insertar en el trazado de la factura.
:::

Ejemplo:

```xml
    <CodiceArticolo>
    <CodiceTipo>MIODCODICE</CodiceTipo>
    <CodiceValore>104X0</CodiceValore>
    </CodiceArticolo>
```

Son posibles otras tipologías de codificación específicas, como por ejemplo la codificación EAN o la específica para el sector de dispositivos médicos.

Ejemplo:

```xml
    <CodiceArticolo> 
    <CodiceTipo>EAN</CodiceTipo>
    <CodiceValore>XX345678</CodiceValore>
    </CodiceArticolo>
```

Es posible agregar la codificación a la tabla **[Tipos de Código de Barras](/docs/configurations/tables/general-settings/barcode-types)**.

Ejemplo práctico de uso para los ‘Dispositivos médicos’: se codifican 3 tipos de código de barras (activando también el indicador **Exportar a la Administración Pública** para la gestión del código de barras en el trazado XML de la factura electrónica): 

![](/img/it-it/finance-area/e-invoice/configuration/tipibarcode.png)

Luego, **[en el registro del artículo](/docs/erp-home/registers/items/create-new-item)** se indica el valor para cada tipo de código: 

![](/img/it-it/finance-area/e-invoice/configuration/tipibarcode2.png)

El resultado será 

```xml
     <CodiceArticolo> 
     <CodiceTipo>DM1</CodiceTipo> 
     <CodiceValore>26554/R</CodiceValore> 
     </CodiceArticolo> 
```

Como se requiere por la normativa del ministerio de salud.  

Con respecto a la posibilidad de una doble codificación en la factura, añadiendo la del lado del cliente que recibe el documento, el código de artículo del cliente, si se inserta en la pestaña Clientes del registro del artículo, referida al cliente de la factura, puede expresarse de 2 formas diferentes: 

- con el tag CódigoTipo que tenga la mención “Código Art. cliente” (Codice Art. cliente)

Ejemplo:

```xml
    <CodiceArticolo> 
    <CodiceTipo>Código Art. cliente (Codice Art. cliente)</CodiceTipo>    
    <CodiceValore>XX4</CodiceValore>
    </CodiceArticolo> 
```

- con el tag CódigoTipo igual al código de artículo cliente (de la pareja de campos *tipo código artículo proveedor/cliente*) presente en el registro del cliente en la pestaña 
información fiscal.

Ejemplo:

```xml
    <CodiceArticolo>
    <CodiceTipo>CODCLI</CodiceTipo>
    <CodiceValore>XX4</CodiceValore></CodiceArticolo>
    </CodiceArticolo>
```

Donde CODCLI es el valor insertado en el campo *tipo código artículo cliente* en el registro del cliente.  

:::tip Acerca del tema
Si se desea visualizar el código de artículo de Fluentis de forma diferente a la estándar, se debe personalizar en Arm la transformación de FSItem que se llama FullTextDescriptionXMLFE.  
Si no se quiere insertar nada en el tag CódigoArticolo para el CódigoTipo “código art. proveedor (codice art. fornitore)”, en la transformación, en la cuadrícula, en correspondencia de la cadena “Engine Parameters”, no debe insertarse nada.  
Para excluir el código de clase en las líneas del documento, es necesario personalizar en Arm la transformación FullTextDesctiption del objeto FSItem, modificando el texto contenido en la sección EngineParameters de la línea “Default” de “ItemClassCode +"-“+ Code” a “Code”. 
:::

### Declaración de intención (tag 2.2.1.16 AltriDatiGestionali)

Los datos de la declaración de intención se insertan automáticamente como “otros datos de gestión”:  

2.2.1.16.1 TipoDato INTENTO  

2.2.1.16.2 ReferenciaTexto (RiferimentoTesto) se reporta la referencia identificativa y progresiva leyéndola del **[registro de declaraciones de intención](/docs/finance-area/declarations/declarations/intent-declaration)**.  

2.2.1.16.4 ReferenciaFecha (RiferimentoData) se reporta la fecha de protocolo leyéndola del registro de declaraciones de intención.


### Anotaciones fijas en factura (tag 2.1.1.11 Causale)

Para gestionar las anotaciones que en las impresiones de las antiguas facturas se insertaban fijas en el informe (ejemplo “Contribución Conai satisfecha donde debía”), deben insertarse nuevas notas en la tabla Notas codificadas (Utilidad->Gestión notas codificadas). Este tipo de anotaciones se reportan en el tag Causale del archivo XML.  
Las condiciones a cumplir para haber completado el tag Causale son: 
- el tipo de nota codificada debe tener el código         
    
```
   FATTURAZIONEELETTRONICA_CAUSALE
```
   
- la nota debe estar ligada a la empresa en particular. 
- Se reporta lo que está escrito en el campo Descripción, si este está vacío, se toma lo que hay en el campo ‘Título’.


### Anotaciones fijas por cliente (tag 2.1.1.11 Causale)

Para gestionar anotaciones que se deben reportar basadas en el cliente, deben gestionarse las notas codificadas en la tabla correspondiente (Utilidad->Gestión notas codificadas). Este tipo de anotaciones se reportan en el tag Causale del archivo XML que puede ser replicado varias veces en el archivo. 

Las condiciones que se deben cumplir para haber completado el tag Causale son: 
- el tipo de nota codificada debe tener el código
```
   FATTURAZIONEELETTRONICA_CAUSALE
```
- las notas deben ser insertadas en la ficha ‘Varios’ del registro del cliente, dedicada a la gestión de notas específicas a incluir en la impresión de documentos. 
- la nota debe tener el indicador ‘Imprimir en Facturas de Venta’ o, si este está vacío, se reporta lo que está escrito en el campo ‘Notas’ de la línea.


### Gestión de datos adicionales libres (tag 2.2.1.16 AltriDatiGestionali)

Para gestionar datos adicionales ‘libres’ de línea, en Fluentis es necesario insertar ExtraData con un código que empieza con 

```
  AltriDGes_
```
(p.ej. AltriDGes_AltriDati3). 

Estos Extradata, de tipo simple, deben conectarse al objeto padre  

```
   FSSalesInvoiceItem
```
en la propiedad, precisamente, ExtraData (se prevén 3 tipos: cadena, numérico, fecha). 

En cada línea de artículo, entonces, el usuario puede agregar libremente (manualmente) estos datos adicionales; como resultado, la línea de artículo tendrá, (por ejemplo, si el extra data es de tipo cadena), esta sección adicional: 

```xml
    <AltriDatiGestionali> 
    <TipoDato>AltriDati3</TipoDato> 
    <RiferimentoTesto>Texto ejemplo</RiferimentoTesto> 
    </AltriDatiGestionali> 
```

Donde: 
- el ‘TipoDato’ se toma del texto que sigue al código 
```
   AltriDGes_ 
```
del extra data, 
- cuando el tipo del extra data es numérico, lo que hay en el campo ‘Valor’ del extra data se ingresa en el tag ‘RiferimentoNumero’ y lo que hay en el campo ‘Descripción’ (si no está vacío) del mismo extra data se ingresará en ‘RiferimentoTesto’. 

Ejemplo

```xml
    <AltriDatiGestionali>
    <TipoDato>Grosor</TipoDato>
    <RiferimentoNumero>500</RiferimentoNumero>
    </AltriDatiGestionali>
```

### Gestión del “referencia a la administración” en el encabezado del documento (tag 1.2.6 RiferimentoAmministrazione)

La “Referencia a la administración” en el encabezado de la factura se gestiona tomando del registro del cliente la ‘Persona de referencia’ insertada con la nota 

```
   XMLPA
```

En la factura se reportan los campos “Nombre” + “ “ + “Apellido” de la persona así inserta.

### Gestión del “referencia a la administración” para detalle de líneas (tag 2.2.1.15 RiferimentoAmministrazione)

Algunos entes públicos requieren un ‘Referencia a la administración’ para cada línea de artículo (y no en el encabezado). 

En Fluentis es posible insertar ‘ExtraData’ con el código 

```
   RiferimentoAmminis
```

Este extra data, de tipo simple, debe estar vinculado al objeto padre 

```
   FSSalesInvoiceItem
```

con propiedad ExtraData (previsto como cadena). 

En cada línea de artículo, por lo tanto, el usuario puede agregar libremente (manualmente) estos datos adicionales y el resultado será que esa línea de artículo tendrá esta sección adicional: 

```xml
    <RiferimentoAmministrazione>RifAmm</RiferimentoAmministrazione> 
```

Donde el valor ‘RifAmm’ se toma de la “Descripción” del extra data insertado en la línea de artículo.  

### Unidad de medida alternativa (tag 2.2.1.16 AltriDatiGestionali)
 
La cantidad utilizada para el cálculo del precio de línea (independientemente de si es la primera o la segunda, depende del indicador UMPrecio de la línea misma) se reporta en el tag 2.2.1.5 Cantidad. 

La unidad de medida no referida al precio se reporta como ‘Otros datos de gestión’, 

con TipoDato = 
```
   QTALTERNA
```
y cantidad reportada en el tag ‘RiferimentoNumero’. 

Ejemplo

```xml
    <AltriDatiGestionali>
    <TipoDato>QTAALTERNA</TipoDato>
    <RiferimentoNumero>4.00</RiferimentoNumero>
    </AltriDatiGestionali>
```

### Datos de Orden de Compra (tag 2.1.2 DatiOrdineAcquisto)

En el tag 

2.1.2 Datos de Orden de Compra (DatiOrdineAcquisto) 

2.1.2.1 ReferenciaNumeroLínea (RiferimentoNumeroLinea) 

2.1.2.2 IdDocumento 

Se reporta la referencia al pedido del cliente. 

En el tag **IdDocumento** se reporta el texto presente en el campo **vostro riferimento** del **encabezado del pedido del cliente** vinculado a la línea de la factura y **en caso de falta de ese valor**, se reporta el *vostro riferimento* del **encabezado de la factura**.  

Este tag se inserta solo para las líneas de facturas que están vinculadas a líneas de pedidos de clientes.  

En caso de que la factura no haya sido creada a partir de pedidos de clientes de Fluentis, se debe insertar un código en el campo **Ref. pedido (Rif.ordine)** presente, para cada línea de la factura, en la pestaña de detalle de línea **dati articolo**.  

![](/img/it-it/finance-area/e-invoice/configuration/datiarticolo.png)

### Datos DDT (tag 2.1.8 DatiDDT)

En el tag 

2.1.8 Datos DDT 

2.1.8.1 NúmeroDDT (NumeroDDT) 

2.1.8.2 FechaDDT (DataDDT) 

2.1.8.3 ReferenciaNumeroLínea (RiferimentoNumeroLinea) 

Se reporta la referencia al DDT del cual se creó la factura. 
En “ReferenciaNumeroLínea” se reportan solo los números de línea de la factura vinculados a una línea de DDT. 

### Gastos de Timbrado (Tag 2.1.1.6 DatiBollo)

Para la gestión de los gastos de timbrado se deben seguir las siguientes reglas:

- En la tabla **[Tipos de gastos](/docs/configurations/tables/general-settings/expenses-types)** debe insertarse el gasto de tipo “timbrado” con el indicador en el campo *bollo* y con el *valore bollo* de 2 euros.  
- En el registro del cliente se debe agregar un gasto de tipo “timbrado” en la sección **[Gastos descuentos](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/charges-discounts)** seleccionando el código previamente creado en la tabla *Tipos de gasto*.  
- Para no cargarlo al cliente: en el gasto de timbrado en el registro del cliente el valor debe ser 0.  
- En la tabla **[Empresas](/docs/configurations/tables/general-settings/company)** completar el campo *Gastos de timbrado* (2 euros) y *Techo mínimo de gastos* (77,47 euros).  
- En las facturas de venta, los gastos de timbrado aparecen automáticamente si están presentes en el registro del cliente.  
- En la factura de venta es posible cambiar el valor de la propuesta de gasto (Panel de resúmenes > Agentes/Descuentos/Gastos); así que para cada factura se puede tomar la decisión de cargar o no (para no cargar el timbrado pero obtener igualmente la evidencia en la factura, basta con insertar el gasto con un importe = 0).  
- Cuando se crea el archivo XML, si hay en los resúmenes de la factura un gasto de tipo timbrado, se añade la sección del timbrado virtual. 

```xml
        <DatiBollo>
        <BolloVirtuale>SI</BolloVirtuale>
        <ImportoBollo>2.00</ImportoBollo>
        </DatiBollo> 
```

- Si en los resúmenes de la factura está presente el gasto de tipo timbrado con un valor diferente de 0 (caso de carga en factura), en el XML se añade una sección de detalle de líneas con número de línea el último de la factura + 1 y el valor del timbrado. 

Esta sección se añade para el control de los totales de la factura. 

```xml
    <NumeroLinea>2</NumeroLinea>
    <TipoCessionePrestazione>AC</TipoCessionePrestazione>
    <Descrizione>Gastos de timbrado (Spesebollo)</Descrizione>
    <Quantita>1.00</Quantita>
    <PrezzoUnitario>2.00000000</PrezzoUnitario>
    <PrezzoTotale>2.00</PrezzoTotale>
    <AliquotaIVA>0.00</AliquotaIVA>
    <Natura>N3</Natura>
```

### Códigos CIG y CUP (Tag 2.1.2.6 CodiceCUP y 2.1.2.7 CodiceCIG)

En el tag de datos del pedido de compra están contenidos el CIG y el CUP, para poder reportar estos 2 códigos, la factura debe referirse a un pedido de cliente de Fluentis o debe especificarse el ref. Pedido en el homónimo edit presente en la pestaña de Datos del Artículo del tab Artículos de la factura.

    2.1.2 \<DatiOrdineAcquisto> 
    2.1.2.1 \<RiferimentoNumeroLinea> 
    2.1.2.2 \<IdDocumento> 
    …….. 
    2.1.2.6 \<CodiceCUP> 
    2.1.2.7 \<CodiceCIG>

### Decimales a utilizar para los campos numéricos 

Para saber cuántos decimales máximos se pueden especificar para cada campo numérico, hacer referencia a las especificaciones técnicas para la factura electrónica de la Agencia de Ingresos:

Según las especificaciones: 
- cantidad de artículo: decimales de 2 a 8 
- precio unitario: decimales de 2 a 8 
- porcentaje de descuento: 2 decimales

### Retención de impuesto y Enasarco (tag 2.1.1.5 DatiRitenuta) 

Para la gestión de la retención: 

- en el registro del cliente, activar el indicador **ritenuta d'acconto** en la pestaña **información fiscal** y especificar cuál es el tipo de retención que se utilizará a través de la caja de combinación **Tipo de retención**. 
- en la tabla **Tipos de retenciones (Tipi ritenute)** codificar correctamente el código para la facturación electrónica (RT01, RT02). 
- completar la factura como se hace normalmente, el documento recupera automáticamente el sometimiento a la retención para las líneas sobre las cuales es posible hacer el cálculo y calcula automáticamente el importe de la retención. 
- crear el archivo XML que reporta la indicación de la retención y, para cada línea, el tag "Retención SI" si la línea está sujeta.

Con respecto al Enasarco, con la versión 1.6 del esquema de facturación electrónica (en vigor desde el 01/10/2020), se ha definido que la sección 2.1.1.5, dedicada inicialmente a las únicas retenciones, ahora puede ser replicada N veces para indicar también el Enasarco, al que se le ha asignado el código RT04. Fluentis, si la retención insertada en el encabezado tiene las configuraciones de enasarco, valora en el documento también el cálculo de la enasarco y valora como se requiere la sección 2.1.1.5.

:::danger[Atención]
CONTABILIZACIÓN: La factura activa vinculada a la retención de impuesto sufrida y a la contribución de enasarco será contabilizada generando automáticamente la escritura contable correcta que anula del crédito hacia el cliente la retención y la contribución.
PRESTAR ATENCIÓN A QUE EN LA CONFIGURACIÓN DEL TIPO DE RETENCIÓN ASOCIADO EL CAMPO **Tipos de Partidas** esté configurado en *Partidas netas,* de lo contrario, la escritura contable y el cálculo de las partidas abiertas serán erróneos y faltará el giro de la retención.
:::

:::tip **Ver también**
Para la gestión del traslado **contribución caja de previsión** en la factura electrónica [**ver aquí**](/docs/configurations/tables/general-settings/expenses-types). 
:::