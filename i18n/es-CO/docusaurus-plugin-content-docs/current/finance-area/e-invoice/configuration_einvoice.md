---
title: Otras configuraciones específicas de factura electrónica
sidebar_position: 4
ai_generated: true
---

### Gestión de la nota de crédito<!-- Gestione della nota di accredito -->

A partir de la versión 606, las notas de crédito<!-- note di accredito --> deben ser ingresadas en Fluentis siempre con el signo negativo, en particular se deberá ingresar un valor negativo a partir del campo Cantidad<!-- Quantità -->.  
En el documento se muestra un mensaje de advertencia en caso de que el total no sea negativo, proponiendo la inversión de los signos.

En lo que respecta a la facturación electrónica<!-- fatturazione elettronica -->, se requiere, para los controles realizados por el SDI, que el signo del documento sea positivo, por lo que el parser de generación del archivo xml realizará una nueva inversión del signo (cuando el tipo de documento sea TD04).

:::note Nota
A efectos de la contabilización, en caso de que dentro de la nota de crédito<!-- nota di credito --> existan signos mixtos (líneas positivas y negativas), es necesario habilitar la posibilidad de gestionarla variando un parámetro interno en la base de datos (cambiar de 0 a 1, anteriormente se configuraba en -1 antes del cambio mencionado anteriormente). Consultar la documentación técnica y, si es necesario, el servicio de soporte.
:::

### Codificación de artículo por cliente (Tag 2.2.1.3 CodiceArticolo)<!-- Codifica articolo per cliente  (Tag 2.2.1.3 CodiceArticolo) -->

El tag código de artículo<!-- codice articolo --> puede repetirse varias veces, generando una doble codificación, cambiando el código en el tag 2.2.1.3.1

```xml
    <CodiceTipo> . 
```
El código Tipo que se propone por defecto (en las facturas de venta) es el relacionado al código de artículo<!-- codice articolo --> presente en Fluentis (de los datos maestros de artículos de la empresa en uso) que puede reportarse de dos formas diferentes

```xml
    <CodiceTipo> 
```
*Por defecto la codificación se realiza siguiendo este esquema*<!-- Di default la codifica avviene secondo questo schema -->

```xml
    <CodiceArticolo> 
    <CodiceTipo>Código Art. proveedor</CodiceTipo>    
    <CodiceValore>1504X0</CodiceValore>
    </CodiceArticolo> 
```
<!--
**Di default la codifica avviene secondo questo schema**
-->

O el *CodiceTipo* puede ser personalizado indicando el campo **[Código de artículo del proveedor<!-- Codice articolo fornitore -->](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information)** presente en los datos del cliente en la pestaña *información fiscal<!-- informazioni fiscali -->*.

:::note Nota
Prestar atención, se trata de un par de campos adyacentes relativos, respectivamente, a la codificación de nuestra sociedad (proveedor) para la personalización respecto al valor por defecto, y al cliente para una doble codificación a insertar en el registro de la factura.
:::

Ejemplo:

```xml
    <CodiceArticolo>
    <CodiceTipo>MIOCODICE</CodiceTipo>
    <CodiceValore>104X0</CodiceValore>
    </CodiceArticolo>
```

Son posibles otros tipos de codificación específicas, como por ejemplo la codificación EAN o la específica para el sector de dispositivos médicos<!-- dispositivi medici -->.

Ejemplo:

```xml
    <CodiceArticolo> 
    <CodiceTipo>EAN</CodiceTipo>
    <CodiceValore>XX345678</CodiceValore>
    </CodiceArticolo>
```

Es posible apoyar la codificación en la tabla **[Tipos de código de barras<!-- Tipi Barcode -->](/docs/configurations/tables/general-settings/barcode-types)**

Ejemplo práctico de uso para 'Dispositivos médicos<!-- Dispositivi medici -->': se codifican 3 tipos de código de barras (activando también el flag **Exportar Administración Pública<!-- Export Pubblica amministrazione -->** para la gestión del código de barras en el registro xml de la factura electrónica<!-- fattura elettronica -->):

![](/img/it-it/finance-area/e-invoice/configuration/tipibarcode.png)

luego, **[en la ficha de artículo<!-- nell'anagrafica articolo -->](/docs/erp-home/registers/items/create-new-item)** se indica el valor para cada tipo de código:

![](/img/it-it/finance-area/e-invoice/configuration/tipibarcode2.png)

el resultado será

```xml
     <CodiceArticolo> 
     <CodiceTipo>DM1</CodiceTipo> 
     <CodiceValore>26554/R</CodiceValore> 
     </CodiceArticolo> 
```

como lo exige la normativa del ministerio de salud.

Respecto a la posibilidad de una doble codificación en factura, agregando la lado cliente titular del documento, el código de artículo cliente, si está insertado en la pestaña Clientes de la ficha de artículo, asociado al cliente de la factura, puede  
expresarse de 2 formas diferentes:

- con el tag CodiceTipo con la mención "Código Art. cliente"

ejemplo:

```xml
    <CodiceArticolo> 
    <CodiceTipo>Código Art. cliente</CodiceTipo>    
    <CodiceValore>XX4</CodiceValore>
    </CodiceArticolo> 
```

- con el tag CodiceTipo igual al código de artículo cliente (del par de campos *tipo código de artículo proveedor/cliente*) presente en los datos del cliente en la pestaña 
información fiscal

ejemplo:

```xml
    <CodiceArticolo>
    <CodiceTipo>CODCLI</CodiceTipo>
    <CodiceValore>XX4</CodiceValore></CodiceArticolo>
    </CodiceArticolo>
```

donde CODCLI es el valor introducido en el campo *tipo código de artículo cliente* en los datos del cliente.

:::tip Ampliación<!-- Approfondimento -->
Si se desea visualizar el código de artículo de Fluentis de modo diferente al estándar, se debe personalizar en arm la 
transformación de FSItem que se llama FullTextDescriptionXMLFE. 
Si no se quiere incluir nada en el tag CodiceArticolo para el CodiceTipo "código art. proveedor", en la transformación, 
en la cuadrícula, en la cadena "Engine Parameters" no debe incluirse nada. 
Para excluir el código de clase en cada línea del documento, es necesario personalizar en Arm la transformación 
FullTextDesctiption del objeto FSItem, modificando el texto contenido en la sección EngineParameters de la línea 
"Default" de "ItemClassCode +"-"+ Code" a "Code"
:::

### Declaración de intención (tag 2.2.1.16 AltriDatiGestionali)<!-- Dichiarazione di intento ( tag 2.2.1.16 AltriDatiGestionali) -->

Los datos de la declaración de intención<!-- dichiarazione intento --> se insertan automáticamente como “otros datos de gestión”:

2.2.1.16.1 TipoDato INTENTO

2.2.1.16.2 RiferimentoTesto se inserta la referencia identificativa y progresiva tomada del **[registro de las declaraciones de intención<!-- registro delle dichiarazioni di intento -->](/docs/finance-area/declarations/declarations/intent-declaration)**

2.2.1.16.4 RiferimentoData se inserta la fecha de protocolo tomada del registro de las declaraciones de intención<!-- registro delle dichiarazioni di intento -->

### Anotaciones fijas en factura (tag 2.1.1.11 Causale)<!-- Annotazioni fisse in fattura ( tag 2.1.1.11 Causale) -->

Para gestionar las anotaciones que en las impresiones de las antiguas facturas se insertaban fijas en el informe (por ejemplo, “Contributo Conai assolto ove dovuto”), deben insertarse nuevas notas en la tabla Notas codificadas (Utilidades->Gestión de notas codificadas). Este tipo de anotaciones se reportan en el tag Causale del archivo XML.  
Las condiciones a respetar para que se complete el tag Causale son:  
- el tipo de nota codificada debe tener código        

```
   FATTURAZIONEELETTRONICA_CAUSALE
```

- la nota debe estar asociada a la sociedad adecuada 
- se reporta lo que está escrito en el campo Descripción, si este está vacío, lo que está en el campo ‘Título’

### Anotaciones fijas por cliente (tag 2.1.1.11 Causale)<!-- Annotazione fisse per cliente ( tag 2.1.1.11 Causale) -->

Para gestionar anotaciones por cliente<!-- cliente -->, deben gestionarse notas codificadas en la tabla correspondiente 
(Utilidades->Gestión de notas codificadas). Este tipo de anotaciones se reportan en el tag Causale del archivo XML, que puede  
repetirse varias veces.

Las condiciones a respetar para que se complete el tag Causale son:  
- el tipo de nota codificada debe tener código
```
   FATTURAZIONEELETTRONICA_CAUSALE
```
- las notas deben insertarse en la ficha 'Varios' de los datos del cliente, dedicada a la gestión de notas  
específicas para mostrar en la impresión de los documentos.
- la nota debe tener activo el flag 'Imprimir en Facturas de Venta' o, si esto está vacío, se reporta lo escrito en el campo ‘Notas’ de la línea

### Gestión de datos adicionales libres (tag 2.2.1.16 AltriDatiGestionali)<!-- Gestione dati aggiuntivi liberi (tag 2.2.1.16 AltriDatiGestionali) -->

Para gestionar datos adicionales/*libres*/ por línea, en Fluentis es necesario insertar unos ExtraData con código que comience con

```
  AltriDGes_
```
(ej. AltriDGes_AltriDati3).

Estos ExtraData, de tipo simple, deben asociarse al objeto padre

```
   FSSalesInvoiceItem
```
en la propiedad ExtraData (hay previstos 3 tipos: cadena, numérico, fecha).

En cada línea de artículo, el usuario puede agregar libremente (manualmente) estos datos adicionales; como resultado la línea de artículo tendrá, (por ejemplo, si el extra data es de tipo cadena), esta sección adicional:

```xml
    <AltriDatiGestionali> 
    <TipoDato>AltriDati3</TipoDato> 
    <RiferimentoTesto>Texto de ejemplo</RiferimentoTesto> 
    </AltriDatiGestionali> 
```

donde:  
- el 'TipoDato' se toma del texto que sigue al código
```
   AltriDGes_ 
```
del extra data, 
- cuando el tipo de extra data es numérico, lo que hay en el campo ‘Valor’ del extra data termina en el tag ‘RiferimentoNumero’ y lo que hay en el campo ‘Descripción’ (si no está vacío) del propio extra data terminará en ‘RiferimentoTesto’.

Ejemplo

```xml
    <AltriDatiGestionali>
    <TipoDato>Espesor</TipoDato>
    <RiferimentoNumero>500</RiferimentoNumero>
    </AltriDatiGestionali>
```

### Gestión del “referente de administración” en la cabecera del documento (tag 1.2.6 RiferimentoAmministrazione)<!-- Gestione del “riferimento amministrazione” in testata documento (tag 1.2.6 RiferimentoAmministrazione) -->

El “RiferimentoAmministrazione” en la cabecera de la factura se gestiona recuperando de los datos del cliente la ‘Persona de  
referencia’ ingresada con nota

```
   XMLPA
```

En la factura se incluyen los campos “Nombre” + “ ” + “Apellido” de la persona  
así ingresada.

### Gestión del “referente de administración” por línea (tag 2.2.1.15 RiferimentoAmministrazione)<!-- Gestione del “riferimento amministrazione” per dettaglio linee (tag 2.2.1.15 RiferimentoAmministrazione) -->

Algunas entidades públicas requieren un 'Riferimento amministrazione' para cada línea de artículo (y no solo en la cabecera).

En Fluentis es posible ingresar ‘ExtraData’ con código

```
   RiferimentoAmminis
```

Este extra data, de tipo simple, debe asociarse al objeto padre

```
   FSSalesInvoiceItem
```

con propiedad ExtraData (previsto como cadena de texto).

En cada línea de artículo, por tanto, el usuario puede agregar libremente (manualmente) estos datos adicionales y el resultado será que esa línea de artículo tendrá esta sección adicional:

```xml
    <RiferimentoAmministrazione>RifAmm</RiferimentoAmministrazione> 
```

Donde el valor ‘RifAmm’ se toma de la "Descripción" del extra data insertado en la línea de artículo.

### Unidad de medida alternativa (tag 2.2.1.16 AltriDatiGestionali)<!-- Unità di misura alternativa (tag 2.2.1.16 AltriDatiGestionali) -->
 
La cantidad utilizada para el cálculo del precio por línea (ya sea la primera o la segunda, depende de la marca UMPrecio de la propia línea) se reporta en el tag 2.2.1.5 Cantidad.

La unidad de medida no correspondiente al precio se reporta como ‘Otros datos de gestión’,

con TipoDato =
```
   QTALTERNA
```
y la cantidad reportada en el tag ‘RiferimentoNumero’.

Ejemplo

```xml
    <AltriDatiGestionali>
    <TipoDato>QTAALTERNA</TipoDato>
    <RiferimentoNumero>4.00</RiferimentoNumero>
    </AltriDatiGestionali>
```

### Datos Orden de Compra (tag 2.1.2 DatiOrdineAcquisto)<!-- Dati Ordine Acquisto (tag 2.1.2 DatiOrdineAcquisto) -->

En el tag

2.1.2 DatiOrdineAcquisto

2.1.2.1 RiferimentoNumeroLinea

2.1.2.2 IdDocumento

Se indica la referencia al pedido del cliente.

En el tag **IdDocumento** se reporta el texto presente en el campo **Vuestra Referencia** de la **cabecera de pedido de cliente** vinculada a la línea de artículo de la factura y **en ausencia de ese valor** se reporta el *Vuestra referencia* de la **cabecera de la factura**.

Este tag se inserta solo para las líneas de factura vinculadas a líneas de pedido de cliente.

En caso de que la factura no haya sido creada a partir de pedidos de clientes de Fluentis, para tener la referencia a la orden de compra, se debe introducir un código en el campo **Ref. pedido** presente, para cada línea de la factura, en la pestaña de detalle por línea **Datos de artículo<!-- Dati articolo -->**.

![](/img/it-it/finance-area/e-invoice/configuration/datiarticolo.png)

### Datos DDT (tag 2.1.8 DatiDDT)<!-- Dati DDT (tag 2.1.8 DatiDDT) -->
 
En el tag

2.1.8 Dati DDT

2.1.8.1 NumeroDDT

2.1.8.2 DataDDT

2.1.8.3 RiferimentoNumeroLinea

Se incluye la referencia al DDT del cual fue creada la factura.  
En “RiferimentoNumeroLinea” se reportan solo los números de línea de factura vinculados a una línea DDT.

### Gastos de timbre fiscal (Tag 2.1.1.6 DatiBollo)<!-- Spese di Bollo (Tag 2.1.1.6 DatiBollo) -->

Para la gestión de los gastos de timbre fiscal deben seguirse las siguientes reglas:

- En la tabla **[Tipos de gasto<!-- Tipi spese -->](/docs/configurations/tables/general-settings/expenses-types)** debe insertarse el gasto de tipo “timbre fiscal” con flag en el campo *Bollo* y con el *Valor Bollo* 2 euros
- En los datos del cliente se debe agregar un gasto de tipo “timbre fiscal” en la sección **[Gastos y descuentos<!-- Spese sconti -->](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/charges-discounts)** seleccionando el código previamente creado en la tabla *Tipo gasto*
- Para no cargarlos al cliente: en el gasto de timbre fiscal en los datos del cliente el valor debe ser 0
- En la tabla **[Sociedad<!-- Società -->](/docs/configurations/tables/general-settings/company)** completar el campo *Gastos de timbre fiscal* (2 euros) y *Techo mínimos gastos* (77,47 euros)
- En las facturas de venta los gastos de timbre fiscal aparecen automáticamente si están presentes en los datos del cliente
- En la factura de venta se puede modificar el valor del gasto propuesto (Panel de resúmenes > Agentes/Descuentos/Gastos), por lo tanto para cada factura se puede tomar la decisión de cargarlo o no (para no cargar el timbre fiscal pero igualmente mostrar la evidencia en la factura basta con ingresar el gasto con importe = 0)
- Cuando se crea el archivo XML, si hay en los resúmenes de la factura un gasto de tipo timbre fiscal, se añade la sección de timbre virtual

```xml
        <DatiBollo>
        <BolloVirtuale>SI</BolloVirtuale>
        <ImportoBollo>2.00</ImportoBollo>
        </DatiBollo> 
```

- Si en los resúmenes de la factura está presente el gasto de tipo timbre fiscal con valor distinto de 0 (caso de cargo en factura), en el XML se añade una sección de detalle de línea con número de línea el último de la factura + 1 y el valor del timbre fiscal.

Esta sección se agrega para el control de los totales de la factura

```xml
    <NumeroLinea>2</NumeroLinea>
    <TipoCessionePrestazione>AC</TipoCessionePrestazione>
    <Descrizione>Spesebollo</Descrizione>
    <Quantita>1.00</Quantita>
    <PrezzoUnitario>2.00000000</PrezzoUnitario>
    <PrezzoTotale>2.00</PrezzoTotale>
    <AliquotaIVA>0.00</AliquotaIVA>
    <Natura>N3</Natura>
```

### Códigos Cig y Cup (Tag 2.1.2.6 CodiceCUP y 2.1.2.7 CodiceCIG)<!-- Codici Cig e Cup (Tag 2.1.2.6 CodiceCUP e 2.1.2.7 CodiceCIG) -->
 
En el tag de los datos de la orden de compra están contenidos el CIG y CUP, por lo que para poder reportar estos dos códigos la factura debe referirse a un pedido de cliente de Fluentis o bien debe especificarse la ref. Orden en el campo homónimo presente en la pestaña Datos de Artículo de la pestaña Artículos de la factura.

    2.1.2 \<DatiOrdineAcquisto> 
    2.1.2.1 \<RiferimentoNumeroLinea> 
    2.1.2.2 \<IdDocumento> 
    …….. 
    2.1.2.6 \<CodiceCUP> 
    2.1.2.7 \<CodiceCIG>

### Decimales para los campos numéricos<!-- Decimali da utilizzare per i campi numerici -->
Para saber cuántos decimales máximos se pueden especificar para cada campo numérico, consulte las especificaciones técnicas para la factura electrónica<!-- fattura elettronica --> de la Agencia Tributaria:

Como indican las especificaciones:
- cantidad de artículo: decimales de 2 a 8
- precio unitario: decimales de 2 a 8
- porcentaje de descuento: 2 decimales
 
### Retención de impuestos y Enasarco (tag 2.1.1.5 DatiRitenuta)<!-- Ritenuta d’acconto e Enasarco (tag 2.1.1.5 DatiRitenuta) -->

Para la gestión de la retención de impuestos<!-- ritenuta d'acconto -->:

- en los datos del cliente activar el flag **Retención de impuestos<!-- Ritenuta d'acconto -->** en la pestaña **información fiscal<!-- informazioni fiscali -->** y especificar cuál es el tipo de retención a utilizar mediante la lista desplegable **Tipo de retención<!-- Tipo ritenuta -->**
- en la tabla **Tipos de retención<!-- Tipi ritenute -->** codificar correctamente el código para la factura electrónica<!-- fatturazione elettronica --> (RT01, RT02)
- completar la factura como habitualmente, el documento detecta automáticamente la sujeción a la retención para las líneas sobre las que es posible hacer el cálculo y calcula automáticamente el importe de la retención
- crear el archivo XML que incluye la indicación de la retención y, para cada línea, el tag "Retención SI" si la línea está sujeta

En cuanto a Enasarco, con la versión 1.6 del esquema de la factura electrónica (en vigor desde el 01/10/2020) se ha definido que la sección 2.1.1.5, inicialmente dedicada solo a retenciones, ahora pueda replicarse N veces para indicar también Enasarco, al que se le ha asignado el código RT04. Fluentis, si la retención  
insertada en la cabecera tiene las opciones enasarco, valora en el documento también el cálculo de Enasarco, y valora como se pide la sección 2.1.1.5

:::danger[Atención]<!-- Attenzione -->
CONTABILIZACIÓN: la factura activa asociada a la retención de impuestos<!-- ritenuta d'acconto --> sufrida y la contribución enasarco será contabilizada generando automáticamente el asiento contable correcto que compensa de la cuenta a cobrar hacia el cliente la retención y la contribución.
PRESTE ATENCIÓN QUE EN LA CONFIGURACIÓN DEL TIPO DE RETENCIÓN ASOCIADO, EL CAMPO **Tipo de partidas<!-- Tipi Partite -->** debe estar configurado en *Partidas netas*, de lo contrario el asiento contable y el cálculo de partidas abiertas serán incorrectos y faltará el giro de la retención.
:::

:::tip **Ver también**<!-- **Vedere anche** -->
Para la gestión del recargo **contribución caja de previsión** en la factura electrónica<!-- fattura elettronica --> [**ver aquí**](/docs/configurations/tables/general-settings/expenses-types)
:::