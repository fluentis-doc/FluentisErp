---
title: Nueva factura de venta (Nuova fattura di vendita)
sidebar_position: 2
---

El formulario se abre:  
1. a través de la ruta **Ventas > Facturas > Crear factura de venta (Vendite > Fatture > Crea fattura di vendita)**  
o bien  
2. mediante el botón **nuova** que se encuentra en el formulario [Buscar facturas de venta](/docs/sales/sales-invoices/invoicing/search-sales-invoices).

## *Cómo crear una factura de venta*

## **1. Datos obligatorios**

Para continuar con la creación del documento, el usuario debe ingresar los campos *obligatorios*:

- **tipo fattura**: predeterminado en *Configuración > Tablas > Ventas > [Tipo de factura de venta](/docs/configurations/tables/sales/invoices-type)*.          
- **numero**: a cada documento se le asigna un número según la numeración especificada por el usuario en la tabla [Numeración](/docs/configurations/tables/fluentis-numerations) y al tipo de documento que contiene la numeración. La numeración asociada a la tipología de factura generalmente prevé una progresión automática basada en la fecha y el número, con una función de recuperación que cubre eventuales huecos en la secuencia (por ejemplo, causados por la eliminación de documentos). Este comportamiento está regulado por dos indicadores específicos en la tabla de numeración. Si el usuario desea ingresar manualmente el número, puede desactivar el indicador de progresión fecha-número (que garantiza el incremento de la numeración en fechas futuras) y el indicador de recuperación de números. Además, deberá habilitar el indicador de numeración externa, señalando así al sistema que la numeración será gestionada manualmente.            
- **cliente**: utilizando el [help de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o ingresando [directamente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) los datos. Al ingresar el cliente, se completan automáticamente, si están presentes en el registro, los siguientes campos, que explicaremos en las secciones posteriores: moneda, país, idioma, zona, envío, lista de precios y eventuales descuentos, pagos, cargos, agentes, destino, transportistas, datos adicionales.               
- **data fattura**: indica la fecha de creación de la factura. Esta fecha es fundamental para el cálculo de los plazos y las posibles condiciones de pago. Se propone la fecha actual, modificable; en caso de que la numeración prevea una progresión de fecha y número, y yo ingrese una fecha en el pasado, Fluentis verificará la disponibilidad de números en esa fecha para garantizar la progresión, y si no está presente, notificará al usuario que no hay números disponibles en esa fecha.

Continuar la creación ingresando al menos los datos obligatorios en cada una de las pestañas a continuación.

## **testata**

Después de haber seleccionado los datos obligatorios en la sección superior, el usuario puede continuar ingresando los siguientes datos:  
- [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)  
- o mediante el [help de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) 
- o, según los procedimientos que elija, la aplicación completa los campos **automáticamente**.

:::note Recuerda
Si el documento se *crea automáticamente*, estos datos se toman del *documento de origen* del cual se generó.
:::

Al ingresar el **Cliente**, se proponen automáticamente todos los datos específicos de la pestaña **Encabezado**, según los datos establecidos previamente en la [anagrafica cliente](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), en los campos correspondientes a su dirección y en las *secciones*:  
- **divisa**: sección que contiene los datos [Moneda](/docs/guide/common/glossary/glossary-intro#currency), [Tipo de cambio (Cambio)](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha de moneda (Data valuta)](/docs/guide/common/glossary/glossary-intro#currency-date).
- **nazione**: sección que contiene los datos [País](/docs/guide/common/glossary/glossary-intro#country), [Idioma (Lingua)](/docs/guide/common/glossary/glossary-intro#language), [Zona (Zona)](/docs/guide/common/glossary/glossary-intro#zone).
- **spedizione**: sección que contiene los datos [Envío](/docs/guide/common/glossary/glossary-intro#shipment), [Puerto (Porto)](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje (Imballo)](/docs/guide/common/glossary/glossary-intro#packing), [Lista de precios (Listino)](/docs/guide/common/glossary/glossary-intro#sales-price-list) (en el encabezado del documento se inserta la lista de precios ingresada en la anagrafica cliente con el indicador predeterminado) con el tipo de escalonamiento de descuento y su [intervalo de validez](/docs/guide/common/glossary/glossary-intro#validity-date).

#### Otros campos

- **stampata**: se activa cuando se inicia la impresión del documento e identifica que el documento ha sido impreso.      
- **scaricata**: este indicador se activa automáticamente cuando el documento se mueve al almacén, mediante el botón de la barra de herramientas *Descarga automática* o mediante los procedimientos disponibles.  

:::note Nota
En el caso de la factura creada a partir de un documento de transporte ya descargado, está presente el parámetro general VE-PurchaseInvoices_VerifyLoadStatusDDT que bloquea el indicador *Descargada* también en la factura. 
:::  

- **annullata**: el indicador activo permite anular el documento; se insertan automáticamente los indicadores *Descargada* y *Valorizada* para evitar que el documento sea visible en los procedimientos.      
- **contabilizzata**: el indicador indica que la factura ha sido contabilizada.    

:::note
Los indicadores pueden ser desactivados con los procedimientos de restauración de operación.
:::

- **annotazioni cliente**: se propone la información ingresada en la anagrafica cliente, mientras que en el caso de creación automática desde una orden/DDT se tomarán los mismos datos contenidos en el campo homónimo del documento de origen; también se puede ingresar manualmente. Con el botón derecho del mouse se puede abrir un formulario para especificar un texto muy largo de nota; si el campo contiene un valor, se cambia el color de fondo del campo.      
- **Nuestra referencia/Su referencia (Nostro riferimento/vostro riferimento)**: en estos campos generalmente se indica una referencia interna y una referencia del cliente para la factura en cuestión.   
- **Referencia al Número de Pedidos de Cliente (Riferimento al Numero Ordini Cliente)**: en este campo se inserta automáticamente el pedido del que deriva la factura.     
- **Referencia a la Fecha de Pedidos de Cliente (Riferimento alla Data Ordini cliente)**: en este campo se inserta automáticamente la fecha del pedido del que deriva la factura; junto con el campo anterior, crea los datos necesarios para la etiqueta 2.1.2 del archivo xml de la factura electrónica, cuando se genere; si no se completan, se tomará el campo Su Referencia. En caso de que la factura se genere a través del procedimiento de:  
> *Creación desde pedido de cliente (Creazione da ordine cliente)*, estos últimos cuatro campos se poblarán con las indicaciones presentes en el pedido del cliente. Esta transferencia es válida solo en el caso de la factura creada a través de la extracción de datos de un solo pedido;  
> *evasione ddt*, estos campos se poblarán con las indicaciones presentes en el DDT. Esta transferencia es válida solo en el caso de la factura creada a través de la extracción de datos de un solo DDT.          

import InitialNote from './../../../import/fields/initial-note.md'

<InitialNote />

import User from './../../../import/fields/user.md'

<User />

- **progetto**: utilizando el [help de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) se puede vincular el documento a un proyecto.  
Esta asociación funciona solo a nivel del encabezado del artículo.
- **audit trail**: como en todos los documentos, esta sección reproduce la fecha de creación del documento con el operador, y la fecha de última modificación del documento con el operador.      
- **tipo riferimento**: si la factura proviene de otra factura debido a una anulación del documento, aquí se reporta el tipo de factura del documento de origen.     
- **riferimento ft**: si la factura fue creada a partir de otra factura, aquí se reportan el número y la fecha del documento de origen.       
- **riferimento sdi id**: en este campo se reportan las referencias de la factura si se envió al SDI.      
- **registrazione contabile**: contiene el identificador del registro contable si la factura ha sido contabilizada.      
- **spedizione**: en esta sección se reportan eventuales Puerto, Embalaje y Vehículo insertados en anagrafica cliente; los campos son modificables.       
- **listino**: se propone la lista de precios con el indicador predeterminado insertado en *Anagrafica cliente > Listini* que será utilizado para el documento; es un dato modificable.     
- **tipo scaglione**: reporta el tipo de escalonamiento de descuento insertado en *Anagrafica cliente > Listini* previsto para el tipo de lista de precios predeterminada.       
- **decorrenza**: representa la fecha de inicio para el cálculo de los plazos de pago.

#### Botones específicos

> **[Evasión desde pedido de cliente](/docs/sales/sales-invoices/invoicing/sales-invoice)**: llama el procedimiento para crear una factura a partir de un pedido de cliente. Se activa con la inserción del cliente y del tipo de factura.      
> **Evasión desde DDT (Evasione da DDT)**: llama el procedimiento para crear una factura a partir de un documento de transporte. Se activa con la inserción del cliente y del tipo de factura;      
> **[Descarga automática (Scarico automatico)](/docs/sales/sales-invoices/invoicing/sales-invoice)**: este procedimiento permite realizar la descarga de almacén del documento, si está *stampato*.      
> **Help destinatario/destinación (Help destinatario/destinazione)**: permite visualizar e insertar los destinatarios/destinos desde la anagrafica cliente.     
> **inserisci agente nelle righe**: distribuye el agente insertado en el encabezado a las líneas de artículo, en la pestaña *agenti*.     
> **Insertar CIG/CUP en las líneas (Inserisci CIG/CUP nelle righe)**: distribuye los códigos insertados en el encabezado a las líneas de artículo, en las respectivas combinaciones.     
> **cancella pagamenti**: elimina los pagos del encabezado.    
> **registro dei documenti sdi**: abre el documento SDI relacionado con la factura, una vez *controllata*.       

### 2.1 Pagos (Pagamenti) 

Las **Soluciones de pago** se reportan automáticamente desde *Anagrafica cliente > pestaña Pagos (tab Pagamenti)* y pueden ser modificadas/eliminadas por el usuario.

Si al **tipo pagamento** se le asocia un descuento financiero, el importe del descuento se considera solo a efectos contables, es decir, en los plazos del documento y no en el total de la factura.  

Si el documento nace de un:

- *Pedido de cliente* los tipos de pago pueden ser tomados del primer documento, de la anagrafica cliente, o bien tendrán una visualización en una forma de todos los pagos de los documentos por evadir, y el usuario selecciona la tipología de pago de interés.

- *DDT* pueden mantenerse los pagos de la anagrafica del cliente o mantenerse los pagos individuales presentes en cada DDT; en este caso, se reportará en la factura el tipo de pago con el imponible y el IVA igual al de DDT y se agregará una nueva línea para las eventuales líneas de artículo añadidas en la factura que no proceden de DDT.

### 2.2 Descuentos (Sconti)

Se proponen solo los descuentos predeterminados tomados de *Anagrafica cliente > pestaña Descuentos (tab Sconti)* y pueden ser modificados/eliminados por el usuario.
  
import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.3 Agentes (Agenti)

Indica el código de agente y su comisión por cada línea de artículo. Se propone el código y el porcentaje definidos en *Anagrafica cliente > pestaña Agentes (tab Agenti)*.

Si la comisión no está vinculada al cliente en su anagrafica, debe ser ingresado el agente, pero con comisión NULA, porque si fuera con comisión 0, significaría que el agente está vinculado al agente pero no percibe comisión.

En el caso de generación de la factura desde el pedido, este dato se reportará igual que el del pedido de cliente.

La misma sección se repetirá para cada línea de artículo en su pestaña Agentes.

### 2.4 Datos Adicionales (Extra Data)

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## Procedimientos del encabezado (Procedure testata):  

### *Facturación electrónica (Fatturazione elettronica)*

Desde esta sección presente en la barra de herramientas de la factura, es posible gestionar la creación y el envío de la factura electrónica al SDI. Este procedimiento se ejecuta con el cambio de estado del documento; los estados son los siguientes:
- *non esaminata*: es el estado inicial en el que se encuentran los documentos antes de comunicarse con el SDI; el documento ha sido generado y aún no se han realizado acciones relacionadas con la gestión del documento electrónico; los estados posteriores pueden ser Controlado (Controllato), Anulada (Annullata) o Excluida (Esclusa);             
- *controllato*: al configurar este estado se llevan a cabo los controles por parte de Fluentis sobre el documento; en caso de que falten datos para la comunicación con SDI, se avisará al usuario; desde este estado en adelante se activará el botón *registro dei documenti sdi* donde consultar el histórico y la hoja de estilo del xml; los estados posteriores pueden ser Generado (Generata), Anulada (Annullata), Excluida (Esclusa);              
- *generato*: Se ha creado el archivo XML relacionado con el documento electrónico. Desde este momento es posible proceder con los estados posteriores para enviar el archivo al Fluentis Business Hub o descargar el archivo XML para gestiones externas; los estados posteriores pueden ser Firmado (Firmata), Por enviar (Da spedire), Anulada (Annullata), Excluida (Esclusa);       
- *firmata*: El documento ha sido firmado externamente con certificado de firma Cadeso Xades y reimportado en Fluentis en el nuevo formato; los estados posteriores pueden ser Por enviar (Da spedire), Anulada (Annullata), Excluida (Esclusa);      
- *da spedire*: Este estado, a utilizar en caso de que el canal Fluentis Business Hub esté correctamente configurado, coloca el documento en la lista de documentos que BizLink deberá procesar para el envío a SDI; no se prevén otras acciones manuales, ya que será necesario esperar el resultado del SDI;           
- *annullata*: el documento no debe ser enviado al cliente final, pero sigue siendo válido a efectos de IVA;       
- *esclusa*: El documento ha sido creado, pero no entra entre los que se deben enviar al SDI (por ejemplo, nota de anulación interna o cliente no residente en Italia y no sujeto a facturación electrónica con envío a SDI).

### *Evasión desde DDT (Evasione da DDT)*

En el encabezado de la factura, al presionar el botón **Evasión desde DDT**, se abrirá el formulario donde se puede filtrar los DDT relacionados con el cliente del documento.

A través de este procedimiento es posible crear una factura de venta a partir de la evasión del DDT correspondiente. Por lo tanto, es posible insertar los artículos dentro de la factura, evadiendo total o parcialmente un pedido entero o una línea.

Para poder utilizar este procedimiento, hay condiciones iniciales que deben ser respetadas:
 -  el/los cliente(s) debe(n) ser el mismo que el de la factura;
 -  el DDT que se desea evadir debe tener activado el indicador *stampato*;

#### Procedimiento 

Los filtros por cliente y moneda se reportarán automáticamente según el cliente seleccionado en la factura.

Una vez establecidos todos los *Filtros* deseados, al hacer clic en el botón de *ricerca* se visualizará en la cuadrícula una fila por cada DDT impreso, confirmado y no evadido o evadido parcialmente.

:::note Nota
El procedimiento toma todos los datos presentes en el DDT y, como consecuencia, se aplicarán las condiciones de compra presentes, incluso si estas han cambiado actualmente (por ejemplo, actualización de listas de precios).
:::

:::note Nota
Las líneas de tipo Nota siempre serán visibles, incluso si ya han sido evadidas, hasta que todas las líneas de otros tipos sean evadidas.
:::

En la cuadrícula de resultados, el usuario tiene luego la posibilidad de:

 1. seleccionar el *DDT completo*. Para ello, basta con seleccionar el indicador presente al inicio de la fila.
 2. seleccionar solo *algunos* de los *artículos* propuestos. Para ello, basta con seleccionar el indicador presente al inicio de la fila del artículo.
 3. seleccionar solo *algunos artículos* pero solo para una *cantidad determinada*. En este caso, deberá modificar la cantidad a evadir.

Para completar el procedimiento, luego se deberá hacer clic en el botón *trasferimento*, que tomará todos los datos presentes en el DDT y los reportará en la factura.

#### Botones específicos 

> **ricerca**: permite buscar los documentos.  
> **trasferimento**: permite transferir los datos del documento seleccionado dentro de la nueva factura.  
> **evasione forzata dell'ordine**: permite la evasión forzada del DDT.  
> **evasione ddt**: permite la evasión del DDT.  
> **espandi**: permite expandir todo el árbol de los DDT en la cuadrícula inferior, para visualizar los artículos contenidos en ellos.  
> **comprimi**: permite comprimir la visualización de las líneas de artículo, y mostrar solo las filas del DDT.  
> **seleziona tutti**: permite seleccionar todos los artículos de la lista.  
> **deseleziona tutti**: permite deseleccionar todos los artículos de la lista. 

### *evasione da ordini clienti*

En el encabezado de la factura, al presionar el botón **Evasión desde pedidos de clientes**, se abrirá el formulario donde es posible filtrar los pedidos relacionados con el cliente del documento.

A través de este procedimiento es posible crear una factura de venta desde la evasión del pedido del cliente correspondiente. Es posible, por lo tanto, insertar los artículos dentro de la factura, evadiendo total o parcialmente un pedido entero o una línea.

Para poder utilizar este procedimiento, hay condiciones iniciales que deben ser respetadas:
 -  el/los cliente(s) de los pedidos deben ser el mismo que el de la factura;
 -  el pedido que se desea evadir debe tener activado el indicador *stampato* y la *data conferma ordine*;
 -  los tipos de documento deben ser compatibles: en la tabla de *Tipos de pedidos (Tipi ordini)* el tipo de pedido que se desea evadir debe tener configurado el tipo de factura correspondiente, mientras que en la tabla de *tipi fatture* debe existir el indicador *ordine* (que indica que la factura deriva de un pedido);

Luego se deberá establecer en el encabezado del nuevo DDT, el *Tipo DDT* que se desea crear (que debe corresponder al configurado en la tabla de *Tipos de pedidos*) y el *Cliente*. Una vez ingresados estos datos, se deberá hacer clic en el botón *evasione ordini* para abrir el formulario de evasión.

#### Procedimiento 

Los filtros por cliente y moneda se reportarán automáticamente según el cliente seleccionado en la factura.

Una vez establecidos todos los *Filtros* deseados, al hacer clic en el botón de *ricerca* se visualizará en la cuadrícula una fila para cada pedido impreso, confirmado y no evadido o evadido parcialmente.

:::note Nota
El procedimiento toma todos los datos presentes en el pedido y, como consecuencia, se aplicarán las condiciones de compra presentes en el pedido, incluso si estas han cambiado actualmente (por ejemplo, actualización de listas de precios).
:::

:::note Nota
Las líneas de tipo Nota siempre serán visibles, incluso si ya han sido evadidas, hasta que todas las líneas de otros tipos sean evadidas.
:::

En la cuadrícula de resultados, el usuario tiene luego la posibilidad de:

 1. seleccionar el *pedido completo*. Para ello, basta con seleccionar el indicador presente al inicio de la fila del pedido.
 2. seleccionar solo *algunos* de los *artículos* propuestos. Para ello, basta con seleccionar el indicador presente al inicio de la fila del artículo.
 3. seleccionar solo *algunos artículos* pero solo para una *cantidad determinada*. En este caso, deberá modificar la cantidad a evadir.

Para completar el procedimiento, luego se deberá hacer clic en el botón *trasferimento*, que tomará todos los datos presentes en el pedido y los reportará en la factura.

#### Botones específicos 

> **ricerca**: permite buscar los pedidos.  
> **trasferimento**: permite transferir los datos del pedido seleccionado dentro de la nueva factura.  
> **evasione forzata dell'ordine**: permite la evasión forzada del pedido.  
> **evasione ordini**: permite la evasión del pedido.  
> **espandi**: permite expandir todo el árbol de los pedidos en la cuadrícula inferior, para visualizar los artículos contenidos en ellos.  
> **comprimi**: permite comprimir la visualización de las líneas de artículo, y mostrar solo las filas del pedido.  
> **seleziona tutti**: permite seleccionar todos los artículos de la lista.  
> **deseleziona tutti**: permite deseleccionar todos los artículos de la lista. 

### *scarico automatico*

Otro procedimiento presente en el encabezado es la descarga automática desde el almacén. El botón se habilita si el documento está Impreso y si la factura no está vinculada a un DDT ya descargado.      
Recordemos que si en [Parámetros de factura (Parametri fattura)](/docs/configurations/parameters/sales/sales-invoices-parameters) está habilitada la descarga automática, este procedimiento se iniciará automáticamente una vez que se haya Impreso el documento.      
Una vez iniciada la procedimiento, Fluentis verifica la presencia de almacén y causal en las líneas de factura y la eventual presencia de lotes y números de serie si son requeridos; en caso de que la procedimiento no sea exitosa, se avisará al usuario con un error.      
Si la procedimiento es exitosa, se crea el [Registro de almacén (Registrazione di magazzino)](/docs/logistics/warehouse/stock-records/record) que mueve los artículos del documento y se inserta el indicador **scaricato** en el encabezado.      

## **articoli**

En esta pestaña se ingresan todos los artículos con los datos relevantes.

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Para insertar un **Nuevo artículo** en la cuadrícula, basta con posicionarse en la fila para completar los diversos datos o utilizar el botón **nuovo** presente en la barra de ribbons. Las columnas disponibles son las siguientes:   

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **tipo riga**: ofrece la posibilidad de seleccionar, desde la combo-box, artículos con características diferentes:
>- *articolo codificato*: son los artículos codificados en la anagrafica y pueden contabilizarse en contabilidad analítica y registrarse en el almacén.
>- *Artículo no codificado (Articolo non-codificato)*: son artículos descriptivos que pueden contabilizarse en contabilidad analítica pero no pueden ser movidos a almacén.
>- *articolo spese*: son artículos codificados o no codificados y se resumen de forma distinta en los resumenes de documentos, si el artículo gasto está codificado y es de interés fiscal se moverá en almacén, si es no codificado o no de interés fiscal no se moverá a almacén.
>- *articolo note*: son notas descriptivas reportadas en la impresión del documento; no afectan la contabilidad y el almacén.
>- *articolo omaggio*: el artículo regalo se gestiona como un artículo codificado o no codificado a efectos fiscales y de almacén, pero al ser un regalo se contabiliza por separado en los resúmenes del documento y según el indicador de Reembolso IVA se calcula el importe del IVA del regalo a cargo del sujeto o no.
>- *fattura d'acconto*: la línea de artículo anticipo se utiliza para crear facturas de anticipo.  
>- *storno fattura d'acconto*: la línea de artículo anulación de anticipo cierra la línea de artículo de anticipo y los anticipos pueden ser seleccionados mediante un help de anticipos. Estos datos pueden ser ingresados automáticamente cuando se ingresa directamente la clase o la matrícula, ya que el tipo de fila 'artículo codificado' se selecciona automáticamente.
:::note[NOTA]
Si se comienza directamente con la inserción del artículo, su clase, el código y el tipo de fila - Artículo codificado se ingresan automáticamente.
:::

- **barcode**: si en [Parámetros de factura (Parametri fattura)](/docs/configurations/parameters/sales/sales-invoices-parameters) se ha habilitado la gestión de Códigos de barras, aparecerá la columna Código de barras donde seleccionar el dato para el artículo entre los Códigos de barras ingresados en *Anagrafica articolo > Barcode*. 

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

- **articolo cliente**: si en [Parámetros de factura (Parametri fattura)](/docs/configurations/parameters/sales/sales-invoices-parameters) se ha habilitado la gestión de Artículo cliente, aparecerá la columna Artículo cliente, con el código de artículo válido para el cliente titular del documento e ingresado en *Anagrafica articolo > Clienti*. 

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

:::note
En ausencia de la lista de precios, el dato propuesto es el **precio de venta** tomado de *Anagrafica articolo > pestaña [Costos](/docs/erp-home/registers/items/create-new-item)*, o se recuperará según la configuración de los parámetros del documento. En ausencia también de este dato, se reportará el precio 0.
:::

- **imponibile**: en este campo se reporta el Precio unitario, multiplicado por la cantidad del artículo, neto de descuentos.        

- **sconti articolo**: se reporta la suma de los descuentos previstos para el artículo.     

- **sconti finali articolo**: se reporta la suma de los descuentos finales ingresados en los Resúmenes del documento.     

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **fatturato vendite**: se propone el dato ingresado en *Anagrafica articoli > pestaña Generalidades (tab Generalità)*. Si este no está presente, no se propone ningún dato, pero al momento de contabilizar la factura, se considerará el valor ingresado en el campo *Costo/Ricavo de contrapartida predeterminado (Costo/Ricavo di contropartita predefinito)* de *Anagrafica cliente > Datos contables > pestaña Administrativa (Dati contabili > tab Amministrativa)*, o se generará un mensaje de error.
Si este no está presente, no se propone ningún dato, pero al momento de contabilizar la factura, se considerará el valor ingresado en el campo *Costo/Ricavo de contrapartida predeterminado* de *Anagrafica cliente > Datos contables > pestaña Administrativa* o se generará un mensaje de error.

#### Botones específicos

> **ricalcolo conai**: si el [Conai](/docs/sales/sales-flow/conai) está habilitado para el documento, es posible recalcular los valores con este botón después de eventuales modificaciones.     

> **aggiorna i dati conai nell'anagrafica articolo**: si en la pestaña *Materiales Conai para el artículo* se modifican Unidad de medida y/o Peso, es posible transferir estos valores a la sección Conai de la anagrafica artículo.      

> **gestione imballi**: permite abrir la gestión de los embalajes retornables utilizados en el documento de compras.
El botón se vuelve activo si el documento está guardado, pero no cargado.
Al hacer clic en este botón, se abre el formulario correspondiente donde: ingresar la cantidad, seleccionar la fila y ejecutar la transferencia del embalaje seleccionado en las líneas artikel haciendo clic en el botón Ejecutar (Execute). En este formulario se reportan los artículos que han sido ingresados con la naturaleza de Embalaje y que están presentes en la tabla de Embalajes retornables.         
  
> **aggiornamento listini**: al hacer clic en la flecha junto al botón, se accede a dos procedimientos. El primer procedimiento es **aggiorna il listino corrente**, que permite alinear el precio del artículo internamente en la Lista de precios, tras una eventual modificación de precio directamente en la fila del artículo. Por otro lado, con el segundo procedimiento, **crea nuovo listino con nuova validità**, es posible crear una nueva lista de precios personalizada para el cliente titular del documento; se solicitarán, en un pop-up, las fechas de inicio y fin de validez de la nueva lista de precios.      

> **mostra/nascondi dettagli**: al hacer clic en este botón se hacen visibles o no las pestañas internas de los Artículos.   

> **gestione acconti**: Fluentis permite gestionar las facturas de anticipo y su anulación, procedimientos que se pueden abrir haciendo clic en este botón.
> - **Creación de factura de anticipo (Creazione fattura di acconto)**
Las facturas de anticipo pueden tener un [Tipo de documento](/docs/configurations/tables/sales/invoices-type) dedicado o no, ya que la gestión de anticipos no se realiza a nivel de tabla, sino de artículos.
Por lo tanto, la gestión de anticipos prevé la creación de una factura de venta normal, para la cual se requieren un **Tipo**, un **Cliente**, etc.
Después de completar los datos de Encabezado, es posible pasar a la pestaña Artículos.
En la cuadrícula de artículos, se inserta un *Tipo de fila 6 Factura de anticipo*, una descripción libre, el precio, el IVA, un facturado (que debería tener como cuenta Anticipos clientes), y otros datos eventuales. Por lo tanto, es la línea de este tipo la que determina el importe del anticipo.
Una vez completada la factura, es posible imprimirla. 
En este punto, la factura de anticipo se considera confirmada.
Al momento de crear otros documentos para este cliente, Fluentis alertará sobre la existencia de una factura de anticipo.
> - **Anulación de factura de anticipo (Storno fattura di acconto)**
Para anular una factura de anticipo, es necesario crear una nueva factura de venta a nombre del mismo cliente.
En la pestaña Artículos, si el cliente tiene al menos una factura de anticipo, se activará el botón de la barra de ribbons **gestione acconti**. Al hacer clic, se abrirá el procedimiento homónimo.    
En la pestaña **storno acconti** se pueden seleccionar los anticipos a anular; después de la selección, con el botón **crea storno** se creará la anulación, la cual se reportará en la cuadrícula en la parte inferior. 
Al cerrar la máscara se preguntará si se debe ingresar el nuevo valor de anulación en la factura. En caso de confirmación, será posible consultar la línea de anulación en la pestaña Artículos de la factura, que reportará los datos de la factura de anticipo previamente creada.

A continuación, hay algunas pestañas que analizaremos. 

### 3.1 Descuentos/Listas de precios (Sconti/Listini)

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

### 3.2 Datos del artículo (Dati articolo)

- **variante**: contiene la eventual variante del artículo;    

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Almacén, causal y ubicación (Magazzino, causale e ubicazione)**: se proponen el almacén y la causal de referencia que aparecerán automáticamente al momento de descargar los artículos correspondientes del almacén. Los datos se toman de la tabla *tipi fatture*;     

- **articolo**: reporta el artículo seleccionado;     

- **progetto**: es el proyecto asociado al documento o puede ser asignado con la ayuda del help de campo; 

- **rivalsa iva**: si está configurado, el IVA del regalo se considera para el total de la factura;     

- **dettaglio dichiarazioni**: contiene la eventual [declaración de intención](/docs/finance-area/declarations/declarations/intent-declaration) del cliente;

- **riferimento ordine**: hace referencia al pedido a partir del cual se creó la factura;

- **marca**: representa la marca del artículo, tomada de su anagrafica o de la lista de precios del artículo;

- **note**: ofrece la posibilidad de ingresar notas para cada artículo;

### 3.3 Agentes (Agenti)

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.4 Lotes y Números de serie (Lotti e Serial number)

En las dos cuadrículas pueden ser ingresados los lotes y los números de serie que deben ser descargados del almacén y que están vinculados al artículo en la *Anagrafica articolo > pestaña [Lotes y Números de serie](/docs/erp-home/registers/items/create-new-item)* o pueden ser ingresados manualmente.

Esta operación está condicionada por la presencia de los lotes y los números de serie en el almacén. 

Si el artículo no prevé la gestión de Lotes/Números de serie, esta pestaña estará deshabilitada.

#### Botones específicos

import DeleteLot from './../../../import/buttons/delete-lot.md'
import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteLot />  
> <DeleteSN />

### 3.5 Analítica (Analitica)

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

### 3.6 Datos Adicionales (Extra data)

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.7 Documentos adjuntos (Documenti allegati)

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.8 Sección de valores (Sezione valori)

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

## **riepiloghi**

En las diferentes secciones de esta pestaña se presentan las informaciones principales del documento completo y algunos botones específicos.

### 4.1 IVA/Plazos (IVA/Scadenze)

#### Resúmenes de IVA (Riepiloghi IVA)

Se propone el resumen de IVA del documento, para cada código IVA.

#### Resumen de plazos (Riepilogo scadenze)

import SummariesDueDate from './../../../import/sections/summaries-due-date.md'

<SummariesDueDate />

Generalmente, los plazos se recalculan si se modifica el pago en el encabezado del documento. Los casos en los cuales no se actualizan los plazos, si modifico el pago en el encabezado, son los siguientes:      
-	Cuando la factura tiene el vínculo SDI y tiene un estado diferente a No examinado, Controlado, Anulada, Excluida 
-	Cuando hay al menos un plazo con el indicador ‘Modificación manual’ activo 
-	Cuando la factura tiene el vínculo con uno o más Efectos o está vinculada con una línea FSAdvanceInvoiceMaturity
-	Cuando hay un descuento en el plazo que, sin embargo, no proviene del pago
-	Cuando la suma del Importe en la cuadrícula Pagos es mayor que el Imponible de la factura
-	O si las facturas han sido modificadas fuera de Fluentis

En estos casos, es necesario hacer clic en el botón de la barra de herramientas 'Recalcular y agrupar plazos (Ricalcola e raggruppa scadenze)'.    

### 4.2 Agentes/Descuentos/Gastos (Agenti/Sconti/Spese)

#### Descuentos finales de artículos (Sconti finali articoli)

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

#### Gastos/Descuentos (Spese/Sconti)

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

#### Otros campos 

**note finali**: es un campo libre que puede ser completado por el usuario con la ayuda de 'Help notas codificadas'.

### 4.3 Totales del documento (Totali documento)

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

- **sconto totale percentuale**: es posible ingresar un descuento final adicional en porcentaje; al ingresar este campo, se completa automáticamente también el siguiente.     

- **sconto totale valore**: es posible ingresar un descuento final en valor.      

- **arrotondamento**: hay un campo adicional para redondear en exceso el documento.     

- **totale a pagare**: se reporta finalmente el total definitivo obtenido.     

## **trasporto**

Si la factura es acompañatoria, es necesario completar la pestaña Transporte.       
Los datos presentes son: 

- **destinatario**: se propone el destinatario predeterminado ingresado en la anagrafica cliente; si no está presente, se toma la dirección del cliente.    
- **destinazione**: se propone el destino predeterminado del destinatario, si se ha ingresado en la anagrafica cliente.        
- **Número de seguimiento (Numero Tracking)**: campo libre. 
- **volume**: se propone el volumen acumulado, resultado de la suma de los volúmenes de los artículos (el valor se toma de la Anagrafica articolo > pestaña Pesos/Dimensiones), cuando la unidad de medida del volumen de los artículos corresponde a la ingresada en los parámetros de la factura. 
- **peso netto**: se propone el peso neto acumulado, resultado de la suma de los pesos de los artículos (el valor se toma de la Anagrafica articolo > pestaña Pesos/Dimensiones), cuando la unidad de medida del peso de los artículos corresponde a la ingresada en los parámetros de la factura. 
- **peso lordo**: se propone el peso bruto acumulado, resultado de la suma de los pesos de los artículos (el valor se toma de la Anagrafica articolo > pestaña Pesos/Dimensiones), cuando la unidad de medida del peso de los artículos corresponde a la ingresada en los parámetros de la factura.     
- **aspetto esteriore dei beni**: combo box que remite a la tabla homónima.     
- **colli**: se propone el número de bultos, basado en los datos ingresados en la *Anagrafica articolo > pestaña Pesos/Dimensiones*, en los campos *articoli presenti in un collo* o *colli per formare l'articolo*. Solo se toman en consideración los artículos que tienen este campo completado.     
- **valori modificati manualmente**: con este indicador se permite la modificación de los campos Volumen, Peso neto, Peso bruto y Bultos, que de otra forma reportan los datos de la anagrafica articolo sin posibilidad de modificación.     
- **trasporto**: es necesario seleccionar la figura que se encargará del transporte, colocando el indicador en Remitente (Mittente), Destinatario o Transportista (Vettore); en función de la selección, la sección inferior cambiará; si el transporte es a cargo del Remitente, será posible ingresar la matrícula del vehículo, Remolque, Fecha y Hora de inicio del transporte; si es a cargo del Destinatario, será posible ingresar la matrícula del vehículo, Remolque, Fecha y Hora de inicio del transporte; si es a cargo del Transportista, los campos disponibles serán la anagrafica contable del Transportista, Matrícula, Remolque, Fecha y Hora de transporte, eventual Cliente, Cargador, Propietario, Lugar de carga. 

## **documenti collegati**

En esta pestaña es posible consultar los documentos adjuntos.
Para adjuntar documentos, se puede proceder de dos maneras:
- utilizando el botón de la barra de herramientas **documenti** se puede elegir si adjuntar un documento ya codificado en Fluentis o si crear un nuevo Documento para adjuntar.       
- utilizando directamente en la cuadrícula el botón derecho y seleccionando *allega file* se procede a la creación de un nuevo Documento para adjuntar.