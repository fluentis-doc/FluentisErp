---
title: Fluentis NSO
sidebar_position: 5
ai_generated: true
---

## Configuración<!-- Configurazione -->

La primera configuración que se debe realizar es marcar el flag Transmisión de Órdenes Electrónicas en *Inicio > Tablas > Configuración general > Configuración de documentos electrónicos*.        
En la tabla de Configuración de documentos electrónicos es posible definir, para cada empresa, el uso 
de la recepción y transmisión de órdenes electrónicas con la administración pública. En la misma tabla se puede identificar cómo deben ejecutarse ciertas transacciones.        
Entre las tablas de Configuración general está la sección PEPPOL, donde se encuentran:
Las tablas precodificadas:
- Tipos de orden de cliente estándar PEPPOL, contiene los códigos de los tipos de orden y sub-orden definidos en la codelist del Estándar PEPPOL
- Códigos de unidad de medida estándar PEPPOL, contiene las unidades de medida definidas en la codelist del Estándar PEPPOL
- Códigos de IVA estándar PEPPOL, contiene los códigos de IVA definidos en la codelist del Estándar PEPPOL
- Códigos de descuento estándar PEPPOL
- Códigos de gastos estándar PEPPOL
- Clasificación de artículos estándar PEPPOL
- Naturaleza de procesos 
- Naturaleza de documentos

## Tablas a configurar<!-- Tabelle da configurare -->

Las tablas a configurar son las siguientes:     

- Los tipos de orden de Fluentis<!-- tipi ordine Fluentis --> que corresponden a los tipos de orden PEPPOL (configuración de tipos de orden de cliente)
- Los códigos de IVA de Fluentis<!-- codici iva Fluentis --> que corresponden a los códigos de IVA de PEPPOL (configuración de IVA) 
- Las unidades de medida de Fluentis<!-- unità di misura di Fluentis --> que corresponden a los códigos de unidades de medida de PEPPOL (configuración de unidad de medida)
- En el tipo de barcode se debe definir qué tipo de barcode identifica el código AIC, la codificación estándar o la clasificación de artículos 
- Configuración de tipos de bonificaciones, donde se asocian los tipos de descuento de Fluentis<!-- sconto Fluentis --> con los códigos de bonificación PEPPOL
- Configuración de tipos de gastos, donde se asocian los tipos de gastos de Fluentis<!-- tipi spese Fluentis --> con los códigos de gastos PEPPOL

## Datos de las tablas pre-codificadas<!-- Dati delle tabelle Precodificate -->

Es necesario identificar el tipo de orden utilizando los valores de la respectiva codelist prevista 
por el estándar PEPPOL, que incluye los siguientes dos códigos: 
- “220”, para las órdenes de compra en sentido estricto; 
- “227”, para las órdenes de entrega.       

En los documentos de tipo: 
- Orden inicial y sustitutiva; 
- Orden de respuesta sustitutiva;        

el código del tipo de orden se indica en el elemento “OrderTypeCode”, como se muestra en el siguiente ejemplo: 

< cbc:OrderTypeCode>220< /cbc:OrderTypeCode>             

En documentos de tipo:       

- Orden preacordada inicial y sustitutiva;       

el código del tipo de orden se indica en el campo “SpecialTerms” del elemento 
“DeliveryTerms”, como se muestra en el siguiente ejemplo:        

< cac:DeliveryTerms> < cbc:SpecialTerms>220< /cbc:SpecialTerms> < /cac:DeliveryTerms>
         
Existe una clasificación adicional de los tipos de orden, no obligatoria.       
Para el tipo de orden 220 Orden de compra:      
- OF, Orden de facturación para productos ya consumidos 
- OFR, Orden de facturación y reposición 
Para el tipo de orden 227 Orden de entrega:      
- CD Consignación en depósito 
- CV Consignación en vista 
- CG Préstamo gratuito       

En los documentos de tipo: 
- Orden inicial y sustitutiva; 
- Orden de respuesta sustitutiva;        

el código del subtipo de orden se indica en el campo “SpecialTerms” del elemento 
“DeliveryTerms”, como se muestra en el siguiente ejemplo:        

< cac:DeliveryTerms> < cbc:SpecialTerms>OFR< /SpecialTerms> < /cac:DeliveryTerms>
     
En documentos de tipo: 
- Orden preacordada inicial y sustitutiva;         

el código del subtipo de orden se indica en el campo “SpecialTerms” del elemento 
“DeliveryTerms”, después del código del tipo de orden, utilizando el formato de campos estructurados, 
como se muestra en el siguiente ejemplo:         

< cac:DeliveryTerms> < cbc:SpecialTerms>220#OFR< /SpecialTerms> < /cac:DeliveryTerms>

## Código de artículo<!-- Codice Articolo -->

La identificación del producto (bien o servicio) dentro de cada línea de orden se realiza, además 
del nombre (elemento “Name”, que es obligatorio) y la descripción (elemento 
“Description”), también mediante códigos identificativos. 
En particular, los formatos de dichos documentos prevén principalmente dos tipos de código: 
- el código atribuido por el proveedor (elemento “SellersItemIdentification/ID”); 
- el código estándar, correspondiente al identificador asignado al producto por un sistema de 
identificación única (elemento “StandardItemIdentification/ID”) elegido de entre los existentes 
en la codelist prevista por el estándar PEPPOL.         

Los elementos antes mencionados no son obligatorios, sin embargo, se recomienda encarecidamente su uso.      
Ejemplo:     

< cac:OrderLine>          
        < cac:LineItem>        
        < cac:Item>        
            < cbc:Name>Pluma estilográfica< /cbc:Name>        
            < cbc:Description>Pluma estilográfica edición limitada< /cbc:Description>        
            < cac:SellersItemIdentification>           
                < cbc:ID>Stilo24< /cbc:ID>       
            < /cac:SellersItemIdentification>      
            < cac:StandardItemIdentification>      
                < cbc:ID schemeID=”0160”>0K10999746< /ID>       
            < /cac:StandardItemIdentification>       
        < /cac:Item>       
        < /cac:LineItem>      
< /cac:OrderLine>          

Para los bienes de gran consumo, se sugiere rellenar el elemento 
“StandardItemIdentification/ID” con el código GTIN correspondiente (correspondiente al 
“schemeID=”0160” de la codelist PEPPOL), como se muestra en el ejemplo anterior.         
Para los productos farmacéuticos provistos del código de Autorización de Comercialización 
(AIC) emitido por la Agencia Italiana del Medicamento (AIFA), el elemento 
“SellersItemIdentification/ID” debe estar rellenado siempre con el respectivo código AIC.

## Grupo de mercancía<!-- Gruppo Merceologico -->

Para cada producto, dentro de la respectiva línea de orden es posible especificar uno o más 
códigos de clasificación rellenando el campo “ItemClassificationCode/ID” del elemento 
“CommodityClassification”. 
El valor a indicar debe ser tomado de un sistema de clasificación único seleccionado de entre 
los previstos en la codelist respectiva del estándar PEPPOL, como se muestra en el siguiente ejemplo:       

< cac:OrderLine>        
< cac:LineItem>       
< cac:Item>       
< cac:CommodityClassification>        
< cbc:ItemClassificationCode listVersionID=”19.0501” listID=”STI”>12345678< /cbc:ItemClassificationCode>      
< /cac:CommodityClassification>       
< /cac:Item>       
< /cac:LineItem>      
< /cac:OrderLine>      

Se recomienda utilizar al menos uno de los sistemas de clasificación indicados en la tabla 
siguiente, si son aplicables.       

| Código | Descripción del estándar de clasificación | Ámbito de uso |
| :-- | :-- | :-- |
| STI | Sistema oficial europeo de clasificación única para contratos públicos (CPV - Common Procurement Vocabulary) | Productos y servicios objeto de contratación pública |
| STL | Sistema de clasificación anatómica, terapéutica y química (ATC - Anatomical Therapeutic Chemical classification system) | Medicamentos |
| STO | Clasificación Nacional Italiana de Dispositivos Médicos (CND) | Dispositivos médicos |
| STH | Clasificación comercial de productos (GPC - Global Product Classification) | Bienes de gran consumo |
| IB | Sistema internacional de identificación de libros (ISBN - International Standard Book Number) | Libros |
| ZZZ | Sistema definido manualmente entre las partes | Para dispositivos médicos permite especificar los valores 'DM1', 'DM2' o 'DM0' (cuando los dos primeros no aplican) |

En Fluentis estos códigos deben atribuirse a la tabla de códigos de Barcode<!-- codici Barcode --> para asociarlos al artículo.     

## Unidad de medida<!-- Unità di misura -->

En las líneas de orden, es necesario indicar la cantidad del producto especificando una unidad de medida 
de las indicadas en la correspondiente codelist del estándar PEPPOL, como se muestra en el siguiente ejemplo:     

< cac:OrderLine> 
< cac:LineItem> 
< cbc:Quantity unitCode=”C62”>3< /cbc:Quantity> 
< /cac:LineItem> 
< /cac:OrderLine>          

En la siguiente tabla, se indican los códigos de unidades de medida recomendados para su uso, 
si aplican (para más detalles, consulte las directrices).         

| Código | Unidad de medida | Ámbito de uso |
| :-: | :-- | :-: |
| C62 | Unidad de producto (bien o servicio) | Cantidad |
| PR | Par | Cantidad |
| XBK | Paquete, caja: envase primario que contiene varias unidades del mismo artículo | Empaquetado |
| DZP | Empaque estándar que contiene doce piezas del mismo artículo | Empaquetado |
| KT | Equipamiento (kit): envase primario que contiene varias unidades de artículos distintos pero utilizables conjuntamente | Empaquetado |
| XBX | Caja, embalaje (box): envase secundario que contiene varios envases primarios | Empaquetado |
| XOB | Palé (pallet): plataforma o caja abierta, generalmente de madera, sobre la que se sujetan las mercancías para facilitar su manipulación mecánica durante el transporte y almacenamiento | Empaquetado |
| MTR | Metro | Longitud |
| CMT | Centímetro | Longitud |
| MMT | Milímetro | Longitud |
| MTK | Metro cuadrado | Superficie |
| CMK | Centímetro cuadrado | Superficie |
| MTQ | Metro cúbico | Volumen |
| CMQ | Centímetro cúbico | Volumen |
| MMQ | Milímetro cúbico | Volumen |
| LTR | Litro | Capacidad |
| MLT | Mililitro | Capacidad |
| GRM | Gramo | Peso |
| HGM | Hectogramo | Peso |
| KGM | Kilogramo | Peso |
| MGM | Miligramo | Peso |
| MC | Microgramo | Peso |
| HUR | Hora | Tiempo |
| DAY | Día | Tiempo |
| MON | Mes | Tiempo |
| ANN | Año | Tiempo |
| E40 | Día laborable | Trabajo |
| KWH | Kilovatio-hora | Electricidad |
| BQL | Becquerelio | Radiactividad |
| 4N | Mega-Becquerelio | Radiactividad |
| GBQ | Giga-Becquerelio | Radiactividad |
| CUR | Curie | Radiactividad |
| MCU | Milicurie | Radiactividad |

## Destino de la mercancía<!-- Destinazione merce -->

El ID indica el código atribuido al lugar donde debe realizarse la entrega. Este código debe 
siempre ser indicado si el lugar de entrega es una dirección institucional del Cliente a la que se ha 
asociado un identificador único proporcionado al Proveedor.          

Los diversos campos del elemento “DeliveryLocation” deben ser rellenados adecuadamente 
(incluidos los que no son obligatorios, donde esto contribuya a especificar su identificación exacta), como 
se muestra en el siguiente ejemplo, referente a un Documento de tipo Orden o Respuesta de Orden. 
La indicación del lugar de entrega está prevista solo con referencia a todo el Documento.        

Para facilitar el suministro de bienes en las sedes institucionales de las administraciones 
públicas, es conveniente que los puntos de entrega sean codificados de manera única. Para 
entidades del Sistema Nacional de Salud, desde septiembre de 2019 estará disponible el sitio web 
(http://www.puntidiconsegna-nso.it/) donde será posible publicar el listado de sus propios códigos 
identificativos de los puntos de entrega institucionales. En particular, se recomienda a las Entidades crear 
los códigos de los puntos de entrega institucionales anteponiendo el propio código fiscal al código interno 
del punto de entrega, definido libremente, separados por el carácter “-” (guion), sin espacios de por medio. El formato del código será entonces: Código fiscal-ID interno 
punto de entrega. Por ejemplo, en el caso de una entidad con Código Fiscal “123456788901” y almacén<!-- magazzino -->
“acdg45”, el Código Ship-To a introducir en la orden será "123456788901-acdg45” (ver Párrafo 
3.3.3.6). Se sugiere mantener la longitud de este código dentro de los 20 caracteres en total 
(incluido el “-”).         

En Fluentis el Destino de la Mercancía<!-- Destinazione Merce --> se reconoce mediante este código ID y se busca como destino codificado en el cliente, asignando al apodo del contacto en Fluentis los últimos 7 caracteres del código que sigue al “-” del punto de entrega NSO.

## Órdenes de clientes PEPPOL<!-- PEPPOL Ordini clienti -->

En las aplicaciones Bizlink existe el formulario PEPPOL Órdenes de clientes para visualizar todos los mensajes entrantes de NSO y salientes para NSO.         
Tras seleccionar la línea de una orden, al pulsar el botón “Visualizar” en la ribbon bar se abre un formulario adicional **Registro de documentos SDI**.       
Dentro de este formulario se muestran algunos datos referidos al archivo NSO de la orden, como el 
estado del documento, los archivos relacionados y el contenido del archivo.
Es posible visualizar el contenido de la orden. Además, se pueden visualizar las eventuales notificaciones del SDI.           
Al pulsar el botón **Descargar adjunto** se puede descargar el adjunto seleccionado en la 
cuadrícula “Adjuntos”, mientras que pulsando **Descargar el contenido del registro** se puede descargar el 
archivo seleccionado en la cuadrícula **Registro de documentos SDI**, la cual contiene el archivo xml 
de la orden y todos los archivos relacionados, como los de notificaciones.       
Al pulsar el botón de la ribbon bar **Abrir documento** es posible visualizar el contenido 
de la orden Peppol, siempre que esté al menos en estado “Insertado”, directamente en Fluentis, 
mediante la apertura del formulario “Órdenes de cliente”.         
Al pulsar el botón **Registro de documentos SDI** en el formulario “Órdenes de Cliente” se abrirá el 
formulario “Registro de documentos SDI”, de manera similar a lo que ocurre al pulsar el botón 
“Visualizar” en la ribbon bar del formulario *PEPPOL órdenes de clientes*.       
Al pulsar el botón **Descargar adjunto** en la ribbon bar del formulario *PEPPOL Órdenes de clientes* 
se descargará, en una carpeta indicada por el usuario, el archivo Xml de la orden seleccionada.        
Al pulsar el botón **Modificar datos XML** después de seleccionar una orden con el estado SDI “En 
error”, se abre el formulario de modificación de los datos del archivo importado.           
En este formulario será posible corregir eventuales datos erróneos en la orden recibida, como líneas con 
precio 0, códigos de artículos no interpretables automáticamente, unidad de medida, de modo que 
se puedan introducir los datos obligatorios faltantes.         
En la cuadrícula **Registro de Órdenes NSO** se visualizan diversas informaciones. Veamos las 
principales:          
- Estado SDI: es el estado de avance en que se encuentra la orden PEPPOL (véase la parte 
relativa a los estados de la orden)
- Tipo: es el tipo de orden PEPPOL y puede asumir los siguientes valores
> - 220 = Orden de compra (orden recibida del proveedor)
> - 227 = Orden de entrega
> - PRE = Orden preconvenida
- Número(Id): es el número de la orden, que junto con la fecha de cliente y endpointCliente identifica 
de manera única la orden
- Fecha Cliente: es la fecha de la orden, que junto con el número(Id) y EndpointCliente identifica 
de manera única la orden
- Endpointcliente: puede indicar el código de oficina del cliente o el NIT del 
proveedor que ha enviado la orden, y junto con el Número(Id) y la Fecha Cliente identifica 
de manera única la orden
- Tipo de proceso: indica el tipo de proceso del que forma parte la orden y puede asumir 3 
valores:
> - Ordenación simple
> - Ordenación completa
> - Ordenación pre-convenida
- Tipo de documento: indica el último tipo de documento o notificación ligada a la orden
- Tripleta: es la referencia a la orden a la que hace referencia la orden actual, la tripleta está 
compuesta por: Identificador del documento, fecha de emisión del documento e 
identificador del sujeto emisor
- Nombre de archivo NSO: indica el nombre del archivo Xml de la orden PEPPOL
- Fecha de recepción NSO: indica la fecha de recepción de la orden por parte del cliente o 
del envío de la orden pre-convenida
- Último evento NSO: indica la fecha de la última modificación de estado sufrida por la orden