---
title: Parámetros de Cuenta Trabajo (Parametri Conto Lavoro)
sidebar_position: 2
tags: [Cuenta Trabajo (Conto Lavoro)]
---

A través de esta ventana se configuran todos los parámetros que conciernen la gestión de cuenta trabajo y, más específicamente, la manera en que deben ejecutarse las operaciones de almacén desencadenadas por los procedimientos del módulo mismo.

## General (Generale)

#### Datos propuestos en los pedidos (Dati proposti negli ordini)

> **rigenerazione materiali nell'aggiornamento dell'articolo**: si el indicador está activado, cada vez que se realice una modificación en la línea del artículo presente en la pestaña *articoli da produrre* del pedido de cuenta trabajo, el procedimiento regenerará la información relativa a los materiales a entregar y a utilizar que deben ser ingresados en la última pestaña del mismo pedido.  
>  
> **dati materiali proposti**: muestra las 4 diferentes posibilidades que el usuario tiene para que la procedimiento proponga automáticamente los materiales en la pestaña Materiales a Entregar del pedido de cuenta trabajo.  
> Las posibilidades son las siguientes:  
> 1. *da ultima consegna effettuata presso lo stesso terzista*: se verifica el último pedido de cuenta trabajo generado para el mismo subcontratista y en el que está presente el mismo artículo a producir.    
> 2. *esplosione livello da struttura distinta*: se verifica la lista de materiales del artículo ingresado en la pestaña Artículos a Producir.    
> 3. *consegna dello stesso articolo da produrre*: se ingresa en la pestaña Materiales a Entregar el mismo artículo ingresado en la pestaña Artículos a Producir.    
> 4. *nessun materiale*: en la pestaña Materiales a Entregar no se propone ningún material.  
> 5. *dall'ordine di produzione*: utilizado para los pedidos de cuenta trabajo generados mediante la liberación de un pedido planificado de cuenta trabajo o de un pedido de producción con fase externa.   
>
> **versione**: permite seleccionar la versión de la lista de materiales.

#### Considerar las disponibilidades provenientes de (Considera le disponibilità provenienti da) 

> Esta sección permite decidir si considerar o no las disponibilidades provenientes de **conto lavoro** / **produzione** / **acquisti** / **magazzino** / **vendite**; cada uno de estos indicadores indica la voluntad por parte del usuario de hacer que el procedimiento de creación del pedido de cuenta trabajo considere la disponibilidad de los materiales en base a la información que proviene de las distintas áreas aplicativas del ERP. Por ejemplo, si el usuario elige activar el indicador solo en Compras y no en Ventas, significa que se considerará la disponibilidad proveniente de los pedidos de proveedores, de las DDT y facturas de compra, y de las solicitudes de compra, pero no aquellas provenientes de pedidos de clientes, DDT y facturas de venta.

#### Productos terminados (Prodotti finiti) 

> **proposta dell'ultimo prezzo di lavorazione effettuato**: si está activado, permite que se proponga en el pedido de cuenta trabajo, en el cuadro del precio unitario de trabajo de la pestaña *articoli da produrre*, el precio del último pedido de cuenta trabajo emitido para ese artículo para el mismo subcontratista.  
>  
> **considera le quantità in base al lotto economico** y **considera i multipli del lotto economico**: permite elegir, al momento de ingresar un artículo en la pestaña *articoli da produrre* del pedido de cuenta trabajo, si considerar las cantidades de los artículos mismos según el lote económico, y/o eventualmente considerar también los múltiplos del lote.  

**tipo ddt**: en esta sección se establece el [Tipo DDT de venta (Tipo DDT di vendita)](/docs/configurations/tables/sales/delivery-notes-type) que debe ser propuesto por defecto cuando se utiliza el procedimiento de creación del DDT de entrega de cuenta trabajo. Este tipo DDT utilizará automáticamente el almacén y la causal establecidos en las comboboxes de la opción "Entregas de materiales a subcontratistas (Consegne materiali a terzisti)" que se encuentra en la ventana de parámetros de cuenta trabajo.

**unità di misura volume predefinita**: permite indicar la unidad de medida que se utilizará por defecto para los volúmenes.  

**unità di misura pesi predefinita**: permite indicar la unidad de medida que se utilizará por defecto para los pesos.  

**Valor. trabajo de materiales a costo (Valor. lavorazione materiali a costo)**: permite definir si la valorización del trabajo de los materiales debe hacerse a costo último o a costo medio. Entonces se trata de un método para decidir si los materiales utilizados por los subcontratistas deben ser imputados al trabajo usando el costo último o el costo medio entre los que están ingresados en la ficha del artículo. Además, es posible, al seleccionar los indicadores **lotti** y/o **commessa di produzione**, proponer como costo del material el costo último/medio para el respectivo lote y/o orden de producción según los indicadores activados.    

#### Evasión (Evasione) 

> **Visualización de la cuadrícula de evasión (Visualizzazione griglia di evasione)**: si está activado, en los procedimientos de evasión de pedido en DDT de entrega o en el retorno será visible la cuadrícula de evasión.   
> 
> **Visualización árbol de evasión (Visualizzazione tree evasione)**: si está activado, en los procedimientos de evasión de pedido en DDT de entrega o en el retorno será visible la estructura jerárquica. Estos dos indicadores pueden ser activados simultáneamente.    

**codice operatore obbligatorio**: si está activado, permite decidir si es necesario ingresar el código del operador al momento de ingresar el DDT de entrega de cuenta trabajo.

**Propuesta automática de número de serie para el artículo devuelto si está presente también como material consumido (Proposta automatica serial number per l'articolo rientrato se presente anche come materiale consumato)**: en los retornos de cuenta trabajo, este indicador activo permite que se proponga automáticamente el número de serie para el artículo.

**controlla disponibilità**: si está activado, permite decidir si hacer que el procedimiento controle o no la disponibilidad proveniente de los indicadores establecidos en la sección *Considerar las disponibilidades provenientes de*. 

**disponibilità obbligatoria**: si está activado, impide la incorporación de materiales en pedidos de cuenta trabajo en caso de falta de disponibilidad en la fecha de la posible entrega al subcontratista.

**nessun materiale in consegna**: si está activado, asegura que en la pestaña *materiali da consegnare* no se ingrese ningún artículo para ningún artículo a producir.

**carico/scarico automatico**: si está activado, permite al usuario hacer que las operaciones de almacén salientes ocurran automáticamente tan pronto como se imprima el DDT de entrega. Esto permite saltar el paso de descarga de los DDT de entrega de cuenta trabajo.

**registrazioni di magazzino con data del documento**: 
para el registro de los **ddt di consegna**, si este indicador está activado, se utiliza la *data trasporto* (presente en la pestaña *Resumen > Destinatario (Riepiloghi > Destinatario)*), si está valorada; de lo contrario, se considera la fecha de creación del documento presente en la cabecera. Si el indicador no está activado, la descarga dentro del documento siempre se efectúa con la fecha actual.    
Para el registro de los **Retornos de cuenta trabajo (Rientri di conto lavoro)**: si el indicador está activado, se utiliza siempre la *data rientro* presente en la cabecera; si no está activado, el registro dentro del documento se hace con la *Fecha del documento def. (Data documento def.)* presente en la cabecera.

**blocca inserimento documento in date festive**: si está activado, impide el ingreso de un pedido, DDT y retorno de cuenta trabajo en fechas festivas.

**controllo terzista di riferimento per gli articoli**: si está activado, permite al usuario hacer que el procedimiento de creación de los pedidos de cuenta trabajo verifique si el artículo que se está ingresando en la pestaña *articoli da produrre* tiene, como proveedor preferencial, al subcontratista ingresado en la cabecera del mismo pedido.

**Lotes y números de serie obligatorios (Lotti e numeri serali obbligatori)**: si se activa, obliga al usuario a ingresar en todos los documentos el lote del artículo ingresado en el documento, siempre que el artículo esté gestionado a lotes o a números de serie.

**ricalcola trasporto**: este indicador asegura que en la pestaña Transporte del DDT se reporten los totales de peso, volumen y bultos de las líneas del documento; sin este indicador, los campos no se completarán.

**verifica articoli in esaurimento**: si se activa, el sistema realiza un control sobre la disponibilidad de los artículos en la línea del pedido y alerta si el artículo está agotado, es decir, si en la [ficha del artículo (anagrafica dell'articolo)](/docs/erp-home/registers/items/create-new-item) se ha activado el indicador *in esaurimento*.

**Activar control de calidad (Attiva il controllo qualità)**: trabajo en progreso.

**gestione doppia unità misura**: solo si está activado, el sistema puede gestionar la unidad de medida alternativa en los documentos de cuenta trabajo.

**Propuesta automática de UM alternativa (Proposta automatica UM alternativa)**: si está activado, asegura que se proponga la cantidad relativa a la unidad de medida alternativa, siempre que en la ficha del artículo se haya establecido una por defecto. Este indicador solo se puede activar si el indicador anterior ha sido activado.

**considera magazzini in base al tipo ddt rientro**: permite elegir si considerar los almacenes según el tipo del DDT de retorno o del tipo de DDT de entrega, en lugar de utilizar las configuraciones establecidas en las respectivas comboboxes de las opciones *Entregas de materiales a subcontratistas (Consegne materiali a terzisti)* y *Retorno de producto (Rientro prodotto)*.

## Almacenes (Magazzini)

#### Entregas de materiales a subcontratistas W.I.P. (Consegne materiali a terzisti W.i.P.)  
En esta sección se configuran el almacén y la causa correspondiente que deben ser considerados para la descarga de los materiales destinados a los subcontratistas en caso de que se utilice la gestión del almacén W.I.P., que se puede activar en los [Parámetros de pedidos de producción (Parametri ordini produzione)](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro). En este caso, todos los pedidos de cuenta trabajo creados desde el *rilascio ordini pianificati* o directamente desde el pedido de producción utilizarán este almacén y causal para la descarga de los materiales que se ingresan en la pestaña [Materiales a Entregar (Materiali da Consegnare)](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/materials) del pedido de cuenta trabajo.    

#### Entregas de materiales a subcontratistas (Consegne materiali a terzisti)  
En esta sección se configuran el almacén y la causal correspondiente que deben ser considerados para la descarga de los materiales destinados a los subcontratistas. Por lo tanto, el almacén configurado es el almacén desde el cual se descargarán los materiales ingresados en la pestaña [Materiales a Entregar (Materiali da Consegnare)](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/materials) del pedido de cuenta trabajo. Estos serán utilizados solo en los pedidos de cuenta trabajo creados manualmente en caso de que la gestión del almacén W.I.P. esté activa, mientras que si la gestión del almacén W.I.P. no está activa, se considerarán en todos los casos.     

#### Consumo de materiales utilizados (Consumo materiali impiegati)   
En esta sección se configuran el almacén y la causal correspondiente que deben ser considerados para la descarga de los materiales que los subcontratistas han utilizado. Por lo tanto, el almacén configurado es el almacén desde el cual se descargarán los materiales ingresados en la pestaña Materiales del pedido de Retorno de cuenta trabajo. Se hará enlace cuando se cree el artículo.   

#### Cargas de materiales a subcontratistas (Carichi materiali a terzisti)   
En esta sección se configuran el almacén y la causal correspondiente que deben ser considerados para la carga de los materiales destinados a los subcontratistas. Por lo tanto, el almacén configurado es el almacén sobre el cual se cargarán los materiales ingresados en la pestaña Materiales a Entregar del pedido de cuenta trabajo. Estos datos se toman de la causal de contrapartida ingresada en la tabla de causas en correspondencia de la causal que realiza la descarga de los materiales destinados a los subcontratistas (es decir, la causal configurada en la respectiva combobox de la sección *Entregas de materiales a subcontratistas*).

#### Entregas de materiales entre subcontratistas (Consegne materiali tra terzisti)   
En esta sección se configuran el almacén y la causal correspondiente que deben ser considerados para el movimiento de los materiales de un subcontratista a otro.     

#### Retorno de artículo W.I.P. (Rientro articolo W.I.P.)  
En esta sección se configuran el almacén y la causal correspondiente que deben ser considerados para la carga de los semielaborados que los subcontratistas han realizado; esto se utilizará en el caso de todas las fases externas que no sean la última fase del ciclo de trabajo. Por lo tanto, el almacén configurado es el almacén sobre el cual se cargarán los artículos ingresados en la pestaña Artículos del Pedido de Retorno de cuenta trabajo.

#### Retorno de artículo terminado (Rientro articolo finito)  
En esta sección se configuran el almacén y la causal correspondiente que deben ser considerados para la carga de los productos terminados / semielaborados que los subcontratistas han realizado; esto se utilizará en caso de que la fase externa sea la última fase del ciclo de trabajo. Por lo tanto, el almacén configurado es el almacén sobre el cual se cargarán los artículos ingresados en la pestaña Artículos del Pedido de Retorno de cuenta trabajo.

#### Materiales devueltos (Materiale reso)  
En esta sección se configuran el almacén y la causal correspondiente que deben ser considerados para la carga de los retornos. Por lo tanto, el almacén configurado es el almacén sobre el cual se cargarán los artículos ingresados en la pestaña Materiales Utilizados del Retorno de cuenta trabajo y a los que se les ha asociado una cantidad devuelta.

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).