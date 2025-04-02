---
title: Fluentis NSO
sidebar_position: 5
---

## Configuración (Configurazione)

La primera configuración que se debe realizar es habilitar el indicador de **trasmissione ordini elettronici** en *Inicio > Tablas > Configuración General > Configuración de Documentos Electrónicos*.        
En la tabla de Configuración de Documentos Electrónicos se puede definir para cada empresa el uso de la recepción y transmisión de pedidos electrónicos con la administración pública. En la misma tabla también se puede identificar cómo deben realizarse ciertas transacciones.        
Entre las tablas de configuraciones generales existe la sección **PEPPOL** donde están:  
Las tablas precodificadas:  
- Tipos de pedido de cliente estándar PEPPOL, contiene los códigos de los tipos de pedido **ordine** y **Sub-Orden (sotto-Ordine)** definidos en la lista de códigos del estándar PEPPOL.  
- Códigos de Unidad de medida estándar PEPPOL, contiene las Unidades de medida definidas en la lista de códigos del estándar PEPPOL.  
- Códigos de IVA estándar PEPPOL, contiene los códigos de IVA definidos en la lista de códigos del estándar PEPPOL.  
- Códigos de descuento estándar PEPPOL.  
- Códigos de gastos estándar PEPPOL.  
- Clasificación de Artículos estándar PEPPOL.  
- Naturaleza de Procesos.  
- Naturaleza de Documentos.  

## Tablas a configurar (Tabelle da configurare)

Las tablas a configurar son las siguientes:     

- Los tipos de pedido Fluentis que corresponden a los tipos de pedido PEPPOL (configuración de tipos de pedido de cliente).  
- Los códigos de IVA Fluentis que corresponden a los códigos de IVA de PEPPOL (configuración de IVA).  
- Las unidades de medida de Fluentis que corresponden a los códigos de unidad de medida de PEPPOL (configuración de unidades de medida).  
- En los tipos de código de barras se debe definir qué tipo de código de barras identifica el código AIC, la codificación estándar o la clasificación de artículos.  
- Configuración de tipos de rebajas, donde se asocian los tipos de descuento Fluentis con los códigos de descuento PEPPOL.  
- Configuración de tipos de gastos, donde se asocian los tipos de gastos Fluentis con los códigos de gastos PEPPOL.  

## Datos de las tablas Precodificadas (Dati delle tabelle Precodificate)

Es necesario identificar el tipo de pedido, utilizando los valores de la lista de códigos correspondiente prevista por el estándar PEPPOL, que incluye los siguientes dos códigos:  
- “220”, para los pedidos de compra en sentido estricto;  
- “227”, para los pedidos de entrega.       

En los Documentos de tipo:  
- Orden inicial y sustituto;  
- Orden de confirmación sustituta;        

el código del tipo de pedido se indica en el elemento “OrderTypeCode”, como se muestra en el siguiente ejemplo: 

<cbc:OrderTypeCode>220</cbc:OrderTypeCode>             

En los Documentos de tipo:       

- Orden pre-concordada inicial y sustituto;       

el código del tipo de pedido se indica en el campo “SpecialTerms” del elemento “DeliveryTerms”, como se muestra en el siguiente ejemplo:        

<cac:DeliveryTerms> <cbc:SpecialTerms>220</cbc:SpecialTerms> </cac:DeliveryTerms>
         
Existe una clasificación adicional de los tipos de pedido, no obligatoria.       
Para el tipo de pedido 220 **ordine di acquisto**:      
- OF, Pedido de facturación por productos ya consumidos.  
- OFR, Pedido de facturación y reintegro.  
Para el tipo de pedido 227 **ordine di consegna**:      
- CD, Cuenta de depósito.  
- CV, Cuenta de visión.  
- CG, Comodato gratuito.       

En los Documentos de tipo: 
- Orden inicial y sustituto; 
- Orden de confirmación sustituta;        

el código del sub-tipo de pedido se indica en el campo “SpecialTerms” del elemento “DeliveryTerms”, como se muestra en el siguiente ejemplo:        

<cac:DeliveryTerms> <cbc:SpecialTerms>OFR</SpecialTerms> </cac:DeliveryTerms>
     
En los Documentos de tipo: 
- Orden pre-concordada inicial y sustituto;         

el código del sub-tipo de pedido se indica en el campo “SpecialTerms” del elemento “DeliveryTerms”, después del código del tipo de pedido, utilizando el formato de campos estructurados, como se muestra en el siguiente ejemplo:         

<cac:DeliveryTerms> <cbc:SpecialTerms>220#OFR</SpecialTerms> </cac:DeliveryTerms>

## Código Artículo (Codice Articolo)

La identificación del producto (bien o servicio) dentro de cada línea de pedido se realiza, además del nombre (elemento “Name”, que es obligatorio) y la descripción (elemento “Description”), también mediante el uso de códigos identificativos.  
En particular, los formatos de los mencionados Documentos prevén, principalmente, dos tipos de código:  
- el código asignado por el Proveedor (elemento “SellersItemIdentification/ID”);  
- el código estándar, correspondiente al identificador asignado al producto por un sistema de identificación única (elemento “StandardItemIdentification/ID”) seleccionado entre los que están presentes en la lista de códigos prevista por el estándar PEPPOL.         

Los elementos mencionados no son obligatorios, sin embargo, se recomienda encarecidamente su uso.      
Ejemplo:     

< cac:OrderLine>          
        < cac:LineItem>        
        < cac:Item>        
            < cbc:Name>Pluma estilográfica</cbc:Name>        
            < cbc:Description>Pluma estilográfica edición limitada</cbc:Description>        
            < cac:SellersItemIdentification>           
                < cbc:ID>Stilo24</cbc:ID>       
            < /cac:SellersItemIdentification>      
            < cac:StandardItemIdentification>      
                < cbc:ID schemeID=”0160”>0K10999746</cbc:ID>       
            < /cac:StandardItemIdentification>       
        < /cac:Item>       
        < /cac:LineItem>      
< /cac:OrderLine>          

Para los bienes de consumo, se sugiere valorar el elemento "StandardItemIdentification/ID" con el código GTIN correspondiente ("schemeID=”0160” de la lista de códigos PEPPOL), como se mostró en el ejemplo anterior.         
Para los productos farmacéuticos con el código de Autorización de Comercialización (AIC) emitido por la Agencia Italiana del Medicamento (AIFA), el elemento “SellersItemIdentification/ID” debe ser valorado siempre con el código AIC correspondiente.

## Grupo Merceológico (Gruppo Merceologico)

Para cada producto, dentro de la línea de pedido correspondiente se pueden especificar uno o más códigos de clasificación, valorando el campo “ItemClassificationCode/ID” del elemento “CommodityClassification”.  
El valor a indicar debe ser tomado de un sistema de clasificación única seleccionado entre los que están presentes en la lista de códigos prevista por el estándar PEPPOL, como se muestra en el siguiente ejemplo:       

<cac:OrderLine>        
< cac:LineItem>       
< cac:Item>       
< cac:CommodityClassification>        
< cbc:ItemClassificationCode listVersionID=”19.0501” listID=”STI”>12345678</cbc:ItemClassificationCode>      
< /cac:CommodityClassification>       
< /cac:Item>       
< /cac:LineItem>      
< /cac:OrderLine>      

Se recomienda utilizar al menos uno de los sistemas de clasificación indicados en la tabla que sigue, donde sean aplicables.       

| Código | Descripción del estándar de clasificación | Ámbito de uso |
| :-- | :-- | :-- |
| STI | Sistema oficial europeo de clasificación único para las contrataciones públicas (CPV - Common Procurement Vocabulary) | Productos y servicios objeto de contrataciones públicas |
| STL | Sistema de clasificación anatómico, terapéutico y químico (ATC - Anatomical Therapeutic Chemical classification system) | Medicamentos |
| STO | Clasificación Nacional Italiana de Dispositivos médicos (CND) | Dispositivos médicos |
| STH | Clasificación comercial de productos (GPC - Global Product Classification) | Bienes de consumo |
| IB | Sistema de identificación internacional de libros (ISBN - International Standard Book Number) | Libros |
| ZZZ | Sistema definido manualmente entre las partes | Para dispositivos médicos permite especificar los valores 'DM1', 'DM2' o 'DM0' (cuando no aplicables los primeros dos) |

En Fluentis, estos códigos deben ser atribuidos a la tabla de códigos de barras que se asociarán al artículo.     

## Unidad de Medida (Unità di misura)

En las líneas de pedido, es necesario indicar la cantidad del producto especificando una unidad de medida entre las indicadas en la lista de códigos prevista por el estándar PEPPOL, como se muestra en el siguiente ejemplo:     

< cac:OrderLine> 
< cac:LineItem> 
< cbc:Quantity unitCode=”C62”>3</cbc:Quantity> 
< /cac:LineItem> 
< /cac:OrderLine>          

En la tabla que sigue, se presentan los códigos de las unidades de medida que se recomienda utilizar, donde sean aplicables (para más detalles se remite a las Guías).         

| Código | Unidad de medida | Ámbito de uso |
| :-: | :-- | :-: |
| C62 | Unidad de producto (bien o servicio) | Cantidad |
| PR | Par | Cantidad |
| XBK | Paquete, caja: embalaje primario que contiene más unidades del mismo artículo | Embalaje |
| DZP | Embalaje estándar que contiene doce piezas del mismo artículo | Embalaje |
| KT | Equipamiento (kit): embalaje primario que contiene más unidades de artículos diferentes pero utilizables conjuntamente | Embalaje |
| XBX | Caja, embalaje (box): embalaje secundario que contiene más embalajes primarios | Embalaje |
| XOB | Palet (pallet): plataforma o caja abierta, usualmente de madera, sobre la que se retienen las mercancías para facilitar su manipulación mecánica durante el transporte y almacenamiento | Embalaje |
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
| BQL | Becquerel | Radioactividad |
| 4N | Mega-Becquerel | Radioactividad |
| GBQ | Giga-Becquerel | Radioactividad |
| CUR | Curie | Radioactividad |
| MCU | Millicurie | Radioactividad |

## Destinación Mercancía (Destinazione merce)

El ID indica el código asignado al lugar donde debe llevarse a cabo la entrega. Este código debe siempre especificarse si el lugar de entrega es una dirección institucional del Cliente a la que se ha asociado un identificador único proporcionado al Proveedor.          

Deben ser adecuadamente valorizados los diferentes campos del elemento “DeliveryLocation” (incluidos aquellos no obligatorios, donde esto contribuya a especificar su identificación exacta), como se muestra en el siguiente ejemplo, referido a un Documento de tipo Pedido o Pedido de confirmación.  
La indicación del lugar de entrega se prevé solo en relación con el Documento completo.        

Con el fin de facilitar la entrega de bienes en las sedes institucionales de las administraciones públicas, es recomendable que los respectivos puntos de entrega estén codificados de manera única. Con respecto a las entidades del **SSN**, se señala que desde septiembre de 2019 estará disponible la página web (http://www.puntidiconsegna-nso.it/) donde será posible publicar la lista de sus códigos identificativos de los puntos de entrega institucionales. En específico, se recomienda a las entidades crear los códigos de los puntos de entrega institucionales anteponiendo su código fiscal al código interno del punto de entrega, definido libremente, separados por el carácter “-“ (guion o signo menos), sin interposición de espacios. El formato del código será: Código Fiscal-ID interno del punto de entrega. Por ejemplo, en el caso de una Entidad con Código Fiscal “123456788901” y almacén “acdg45”, el código Ship-To que se insertará en el pedido será "123456788901-acdg45” (v. Párrafo 3.3.3.6). Se sugiere que la longitud de este código no supere los 20 caracteres en total (“-” incluido).         

En Fluentis, la Destinación Mercancía se reconoce mediante este código ID y se busca como destino codificado en el cliente, asignando al apodo del contacto en Fluentis los últimos 7 caracteres del código que sigue el “-” del punto de entrega NSO.

## PEPPOL Pedidos de Clientes (PEPPOL Ordini clienti)

En aplicaciones Bizlink se encuentra el formulario **PEPPOL Pedidos de Clientes** para visualizar todos los mensajes entrantes desde NSO y salientes hacia NSO.         
Después de seleccionar la línea de un pedido, al presionar el botón “Visualizar” en la barra de ribbon se abre un formulario adicional **Registro de Documentos SDI**.       
Dentro de este formulario se muestran algunos datos relacionados con el archivo NSO del pedido, como el estado del documento, los archivos adjuntos y el contenido del archivo.  
Es posible visualizar el contenido del pedido. También se pueden visualizar las posibles notificaciones del SDI.           
Al presionar el botón **Descargar Adjunto**, es posible descargar el archivo adjunto seleccionado en la cuadrícula “Adjuntos”, mientras que al presionar “Descargar el contenido del registro” es posible descargar el archivo seleccionado en la cuadrícula **Registro de Documentos SDI**, que contiene el archivo xml del pedido y todos los archivos relacionados, como el de las notificaciones.       
Al presionar el botón de la barra de ribbon **Abrir Documento**, es posible visualizar el contenido del pedido Peppol, en caso de que esté al menos en estado “Insertado”, directamente en Fluentis, mediante la apertura del formulario “Pedidos de Clientes”.         
Al presionar el botón **Registro de Documentos SDI** en el formulario “Pedidos de Cliente” se abrirá el formulario “Registro de Documentos SDI”, de manera similar a lo que ocurre al presionar el botón “Visualizar” en la barra de ribbon del formulario *PEPPOL Pedidos de Clientes*.       
Al presionar el botón **Descargar Adjunto** en la barra de ribbon del formulario *PEPPOL Pedidos de Clientes*, se descargará, en una carpeta indicada por el usuario, el archivo Xml del pedido seleccionado.        
Al presionar el botón **Modificar Datos XML** después de haber seleccionado un pedido con estado SDI “En error”, se abre el formulario para modificar los datos del archivo importado.           
En este formulario será posible corregir cualquier dato incorrecto en el pedido recibido, como líneas con precio a 0, códigos de artículos no interpretables automáticamente, unidades de medida, con el fin de indicar datos obligatorios faltantes.         
En la cuadrícula **Registro de Pedidos NSO** se visualizan diversas informaciones. Veamos las principales:          
- Estado SDI: es el estado de avance en el que se encuentra el pedido PEPPOL (ver la sección relativa a los estados del pedido).  
- Tipo: es la tipología del pedido PEPPOL y puede asumir los siguientes valores:  
> - 220 = Pedido de compra (pedido recibido del proveedor).  
> - 227 = Pedido de entrega.  
> - PRE = Pedido Pre-concordado.  
- Número (ID): es el número del pedido, que junto con la fecha del cliente y el endpointCliente identifica de manera única el pedido.  
- Fecha Cliente: es la fecha del pedido, que junto con el número (ID) y el EndpointCliente identifica de manera única el pedido.  
- EndpointCliente: puede indicar o el código de oficina del cliente o el NIT del proveedor que ha enviado el pedido, y junto con el Número (ID) y la Fecha Cliente identifica de manera única el pedido.  
- Tipo de proceso: indica la tipología de proceso del que forma parte el pedido y puede asumir 3 valores:  
> - Ordenación simple.  
> - Ordenación completa.  
> - Ordenación pre-concordada.  
- Tipo de documento: indica la última tipología de documento o notificación vinculada al pedido.  
- Tripleta: es la referencia al pedido al que hace referencia el pedido actual, la tripleta está compuesta por: Identificador del documento, fecha de emisión del documento e identificador del sujeto emisor.  
- Nombre archivo NSO: indica el nombre del archivo Xml del pedido PEPPOL.  
- NSO fecha recibida: indica la fecha de recepción del pedido por parte del cliente o el envío del pedido pre-concordado.  
- NSO último evento: indica la fecha de la última modificación de estado que sufrió el pedido.