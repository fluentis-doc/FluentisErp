---
title: Nueva Solicitud de compra
sidebar_position: 2
ai_generated: true
---

El formulario se abre mediante la ruta **Compras > Solicitudes de compra<!-- Richieste di Acquisto --> > Nueva solicitud<!-- Nuova richiesta -->** o bien desde el filtro de búsqueda *Solicitudes de compra<!-- Richieste di Acquisto -->* usando el botón *Nuevo<!-- Nuovo -->*.   

## *Cómo crear una Solicitud de Compra<!-- Come creare una Richiesta di Acquisto -->*<!-- Come creare una Richiesta di Acquisto -->

<details>
 
<summary>Haz clic para ver los pasos fundamentales</summary><!-- Clicca per vedere i passaggi fondamentali -->
 
1. **Ingresa el *Tipo de solicitud de compra<!-- Tipo RDA -->* a crear**: *Fecha<!-- Data -->*, *Año<!-- Anno -->* y *Número<!-- Numero -->* se propondrán automáticamente.  
 
2. **Ingresa los Artículos**: mediante doble clic en el campo *Código de artículo<!-- Codice articolo -->* se abre el asistente de artículos que permite buscar y seleccionar un artículo existente. Todos los demás datos de la línea, como *unidad de medida<!-- unità di misura -->*, *cantidad<!-- quantità -->*, *precio<!-- prezzo -->*, se propondrán automáticamente, pero podrán ser modificados.
Alternativamente es posible seleccionar como *Tipo de línea<!-- Tipo riga -->* un *Artículo no codificado<!-- Articolo non codificato -->* e ingresar manualmente los datos siguientes.
 
3. **Ingresa cualquier información adicional** en las pestañas *Datos del artículo<!-- Dati articolo -->*.
 
4. **Autoriza la Solicitud de Compra<!-- Richiesta di Acquisto -->**: después de seleccionar los artículos en la cuadrícula, presiona el botón *Autorización solicitud de compra<!-- Autorizzazione RDA -->* de la barra de herramientas, para que la solicitud de compra<!-- RDA --> quede disponible para los procedimientos posteriores.   

 
</details>

## **1. Sección superior** {#upper-section}

Los campos obligatorios para el ingreso de una solicitud de compra<!-- richiesta di acquisto --> son los siguientes:

- **Tipo**: predeterminado en *Configuración > Tablas >* [*Tipos de solicitud de compra*](/docs/configurations/tables/purchase/purchase-request-type). Según el tipo elegido, se activarán algunas funcionalidades como el *control de disponibilidad<!-- controllo della disponibilità -->*.   
- **Fecha/Año**: por defecto se propone la fecha actual, pero puede ser modificada manualmente.   
- **Número**: propuesto automáticamente en base a la numeración asociada al *Tipo de solicitud de compra<!-- Tipo RDA -->* seleccionado.

#### Otros datos

- **Archivada<!-- Storicizzata -->**: activando este indicador la solicitud de compra<!-- RDA --> ya no será visible en el procedimiento de [Creación automática de pedidos<!-- Creazione automatica ordini -->](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests).   
- **Anotaciones<!-- Annotazioni -->**: permite ingresar notas visibles a nivel de solicitud de compra<!-- RDA -->.   
- **Estado solicitud<!-- Stato richiesta -->**: campo no editable; muestra el estado de cumplimiento de toda la solicitud considerando el estado de cada línea de artículo. Una solicitud de compra<!-- RDA --> se considera *Cumplida<!-- Evasa -->* o *Parcialmente cumplida<!-- Parzialmente evasa -->* cuando se ha generado el pedido al proveedor por todas o algunas de las líneas de artículo contenidas en ella.       

## **2. Artículos** {#items}

En la cuadrícula de artículos se encuentran los siguientes datos: 

- **Tipo de línea<!-- Tipo riga -->** ofrece la posibilidad de seleccionar, desde el combo-box, artículos con diferentes características:
    - *Artículo codificado<!-- Articolo codificato -->*: son artículos registrados en el catálogo que pueden contabilizarse en contabilidad analítica y registrarse en almacén<!-- magazzino -->.   
    - *Artículo no codificado<!-- Articolo non-codificato -->*: son artículos descriptivos que pueden contabilizarse en contabilidad analítica pero no pueden ser gestionados en almacén<!-- magazzino -->.    
    - *Artículo nota<!-- Articolo note -->*: son notas descriptivas reflejadas en la impresión del documento; no afectan la contabilidad ni el almacén<!-- magazzino -->.

- **Clase/Código/Descripción del artículo<!-- Classe/Codice/Descrizione articolo -->**: se pueden ingresar manualmente o con el apoyo del *asistente de campo<!-- help di campo -->*, el cual sugerirá todos los datos relacionados registrados en la *Ficha de artículo<!-- Anagrafica articolo -->*. Tras la introducción del *Código* de artículo, la *Descripción* y la *Clase* serán traídas automáticamente de la ficha. Si el artículo tiene *Variantes*, será posible seleccionar la variante deseada en la pestaña *Datos del artículo<!-- Dati articolo -->*.

- **Unidad de medida<!-- Unità di misura -->**: se propone la unidad de medida principal del artículo, pero, si en la ficha de artículo están codificadas unidades alternativas, el usuario puede elegir otra.

- **Cantidad<!-- Quantità -->**: representa la cantidad de la unidad de medida principal.   

- **Precio<!-- Prezzo -->**: el precio se propone desde la lista de precios del proveedor preferente predeterminado del artículo; la lista de referencia para el mismo artículo se visualiza en la pestaña *Descuentos/Listas de precios<!-- Sconti/Listini -->*. El mismo documento podría contener artículos con precios tomados de diferentes listas de precios. Mediante doble clic en el campo **Listas de precios<!-- Listini -->** (pestaña *Descuentos/Listas de precios<!-- Sconti/Listini -->*) el usuario puede seleccionar una lista diferente a la predeterminada, de la cual se tomará el precio del artículo ingresado.   
En ausencia de la lista de precios, el dato propuesto puede retomarse del *costo último<!-- costo ultimo -->* de la ficha de artículo o proponerse a cero, según los parámetros establecidos en los **Parámetros de solicitudes de compra<!-- Parametri richieste di acquisto -->**.   

- **Cumplido forzosamente<!-- Evaso forzatamente -->**: se puede establecer el cumplimiento forzado para la línea seleccionada. Así, no se realizará la entrada en almacén<!-- magazzino -->.

- **Estado**: indica el estado de cumplimiento de cada línea de artículo.   

- **Fecha de solicitud<!-- Data richiesta -->**: si la solicitud de compra<!-- RDA --> viene de la planificación, se rellenará automáticamente con la *Fecha final<!-- Data fine -->* del pedido de compra planificado; también puede ser introducida o modificada manualmente.   

- **Fecha de envío<!-- Data spedizione -->**: si la solicitud de compra<!-- RDA --> proviene de planificación y la *Fecha FOB<!-- Data FOB -->* del pedido planificado tiene valor, se reportará en este campo; también puede ser introducida o modificada manualmente. 

- **Fecha estimada de llegada<!-- Data di arrivo stimata -->**: si la solicitud de compra<!-- RDA --> proviene de planificación y la *Fecha ETA<!-- Data ETA -->* del pedido planificado tiene valor, se reportará en este campo; también puede ser introducida o modificada manualmente. 

:::tip Recuerda<!-- Ricorda -->
En las Solicitudes de compra<!-- Richieste di Acquisto --> generadas por la emisión de Pedidos Planificados siempre se incluye la *Cantidad de uso<!-- Quantità di utilizzo -->* del pedido planificado, con la respectiva unidad de medida.   
Si la unidad de medida no coincide con la gestionada del artículo, en el momento de crear el Pedido al Proveedor se insertará en el campo *Unidad de medida alternativa<!-- Unità di misura alternativa -->* junto con la cantidad indicada en el pedido. En la cuadrícula de artículo, en cambio, se reportará la unidad de medida gestionada y la cantidad será recalculada sobre la base del factor de conversión definido en la ficha de artículo.  
:::

En la sección debajo de la cuadrícula se reportan los totales del documento:   

- **Base imponible<!-- Imponibile -->**: total imponible de la Solicitud de compra<!-- Richiesta di acquisto -->.    
- **Impuesto<!-- Imposta -->**: valor del impuesto calculado sobre la base imponible, según la tasa de IVA indicada para cada artículo en la pestaña *Datos del artículo<!-- Dati articolo -->*.    
- **Total<!-- Totale -->**: suma de *Base imponible<!-- Imponibile -->* y *Impuesto<!-- Imposta -->*.

#### Botones específicos

> **Autorización solicitud de compra<!-- Autorizzazione RDA -->**: permite autorizar todas las líneas de artículo seleccionadas; desde este momento el documento se considera confirmado.   

> **Generador de solicitud de oferta<!-- Generatore RDO -->**: pulsando este botón se creará la [Solicitud de Oferta<!-- Richiesta di Offerta -->](/docs/purchase/offer-request/settings) para las líneas presentes en la pestaña *Generador de solicitud de oferta<!-- Generatore RDO -->*. Para más detalles, ver el párrafo [Generador de solicitud de oferta<!-- Generatore RDO -->](/docs/purchase/purchase-requests/purchase-request/insert-purchase-request#generate-RDO).   

> **Reversión de solicitud de oferta<!-- Rollback RDO -->**: permite anular y eliminar la solicitud de oferta creada previamente.   


### 2.1 Datos del artículo {#items-data}

Son campos informativos que se recuperan por defecto del artículo/proveedor. Es posible sobrescribir esta información a nivel de línea.   

- **Listas de precios<!-- Listini -->**: se propone la lista desde donde se ha tomado el precio del artículo.    

- **Proveedor<!-- Fornitore -->**: se muestra el *proveedor preferente<!-- fornitore preferenziale -->* por defecto de la [ficha de artículo<!-- anagrafica articolo -->](/docs/erp-home/registers/items/create-new-item).    
- **IVA**: muestra la tasa de IVA asociada al artículo.   
- **Marca**: representa la marca del artículo, tomada de su ficha o de la lista de precios del artículo.
- **Divisa**: por defecto se propone la [divisa](/docs/configurations/tables/general-settings/currencies) presente en la [ficha<!-- anagrafica -->](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance) del *Proveedor preferente<!-- Fornitore preferenziale -->*. 
- **Cambio**: muestra la fecha y el tipo de cambio a utilizar para la conversión de moneda.   

- **Variante**: en este campo es posible seleccionar una variante del artículo entre las previamente codificadas en la pestaña [Variantes](/docs/erp-home/registers/items/create-new-item) de la ficha de artículo. Si en la lista se han introducido precios y/o descuentos distintos para cada variante, estos se actualizarán al seleccionar una variante diferente del artículo.   
- **Órdenes de producción<!-- Commesse di produzione -->**: si la solicitud de compra<!-- richiesta di acquisto --> fue generada por la [planificación<!-- pianificazione -->](/docs/planning/ms-master-scheduling/general-schedule/) de una orden de producción<!-- commessa di produzione --> (con emisión automática de pedidos o mediante el [procedimiento<!-- procedura -->](/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders) de liberación de un pedido planificado de compra) en este campo se reportará la referencia a la orden. Para más información ver también la [sección introductoria<!-- sezione introduttiva -->](/docs/purchase/purchase-requests/general-overview).   
- **Operario<!-- Operatore -->**: en este campo es posible ingresar el operario que introdujo la solicitud de compra<!-- richiesta di acquisto -->.   

- **Proyecto**: en este campo es posible asociar un proyecto a cada artículo. Si la solicitud de compra<!-- RDA --> se ha generado a partir de la planificación de una orden de producción<!-- commessa di produzione --> que contiene un proyecto, este se reportará automáticamente en cada línea de artículo.   
- **Tipo facturación de compras<!-- Tipo fatturato acquisti -->**: se propone el dato introducido en la pestaña [Generalidades<!-- Generalità -->](/docs/erp-home/registers/items/create-new-item) de la ficha de artículos.    
- **Prioridad solicitud<!-- Priorità richiesta -->**: muestra la *prioridad de aprovisionamiento<!-- priorità approvvigionamento -->* presente en la [orden de producción<!-- commessa di produzione -->](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order).   
- **Notas**: en este campo es posible ingresar notas relativas a la línea de artículo; se mostrarán en todos los documentos generados a partir de este.   
- **Fecha de cumplimiento<!-- Data evasione -->**: cuando se [crea el pedido de proveedor<!-- creazione dell'ordine fornitore -->](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) desde la solicitud de compra, las líneas insertadas en el pedido se cumplen y se introduce en este campo la fecha del cumplimiento.   

- **Autorizada**: puede marcarse manualmente para cada línea o mediante el botón de la cinta de opciones *Autorización solicitud de compra<!-- Autorizzazione RDA -->*.    
- **En fecha<!-- In data -->**: muestra la fecha en que fue autorizada la línea de artículo de la solicitud de compra<!-- richiesta di acquisto -->.   
- **Por el usuario<!-- Dall'utente -->**: muestra el nombre del usuario que autorizó la solicitud de compra<!-- richiesta di acquisto -->.   

### 2.2 Analítica {#cost-profit-centers-tab}

Contiene campos relativos a la contabilidad analítica. Se muestran los centros de costos/beneficios donde se distribuyen los valores de los productos adquiridos.    

Estos datos pueden ser introducidos: manualmente o automáticamente, en caso de que los centros de costos/beneficios hayan sido introducidos previamente en la ficha del contacto<!-- anagrafica del contatto -->, ficha de artículo<!-- anagrafica articolo --> o en el plan de cuentas<!-- piano dei conti -->.

### 2.3 Documentos adjuntos {#attached-documents}

Se visualiza el detalle de un eventual documento adjunto (nombre, tipo de documento, notas, referencia interna/externa).    

Para instrucciones sobre cómo adjuntar un documento se remite al artículo [Adjuntar documentos<!-- Allega documenti -->](/docs/guide/common/operations-with-data/attach-documents).

### 2.4 Generador de solicitud de oferta<!-- Generatore RDO --> {#generate-RDO}

En esta pestaña se muestran los *Proveedores preferentes<!-- Fornitori preferenziali -->* presentes en la ficha del artículo seleccionado en la cuadrícula con sus respectivos datos, listas y precios. Desde esta pestaña se puede entonces elegir el mejor precio. Alternativamente, es posible introducir manualmente el proveedor a considerar para el artículo.    

Se puede elegir entre: 
1. **Proveedor**: para especificar una ficha de proveedor existente; esta opción habilita el ingreso de datos en el campo *Descripción de cuenta<!-- Descrizione conto -->*.  
2. **Nomenclatura**: para especificar *Apodo<!-- Nomignolo -->* y *Razón social<!-- Ragione sociale -->* del contacto a utilizar; esta opción habilita la introducción de datos en los campos *Nomenclatura* y *Descripción nomenclatura*.  
3. **Contacto**: para seleccionar un [Contacto CRM](/docs/crm/home-crm/contacts/search-contacts) a quien solicitar la oferta; esta opción habilita la introducción del dato en el campo *Contacto*.  
4. **Nuevo proveedor**: para seleccionar un proveedor cuyo registro aún no ha sido codificado; esta opción habilita la introducción del dato en el campo *Descripción proveedor<!-- Descrizione fornitore -->*.  

Los otros campos presentes en la cuadrícula son: 
- **Código/Descripción/Barcode del artículo proveedor<!-- Codice/Descrizione/Barcode articolo fornitore -->**: muestran el código y la descripción con que el proveedor identifica el artículo solicitado; son campos opcionales.     
- **Unidad de medida<!-- Unità di misura -->**: se propone la unidad de medida asociada al proveedor en la [ficha de artículo<!-- angrafica dell'articolo -->](/docs/erp-home/registers/items/create-new-item), o la principal si dicho campo no está valorado.   
- **Cantidad**: se propone según el lote económico del proveedor, si está indicado en la pestaña [proveedores preferentes<!-- fornitori preferenziali -->](/docs/erp-home/registers/items/create-new-item) del artículo; en caso contrario, se propone la cantidad presente en la línea de artículo de la solicitud de compra<!-- RDA -->.
- **Precio**: se sugiere según la lista asociada al proveedor preferente. Si el precio del artículo en la solicitud de compra<!-- RDA --> fue modificado manualmente, también se permitirá la modificación del precio en el Generador de solicitud de oferta<!-- Generatore RDO -->. En este caso, en la Solicitud de Oferta<!-- Richiesta di Offerta --> generada se reportará el precio introducido manualmente en la pestaña Generador de solicitud de oferta<!-- Generatore RDO --> y se activará el indicador *Precio manual<!-- Prezzo manuale -->*.      
- **Fecha estimada de entrega**: permite ingresar la fecha prevista para la entrega. 
- **IVA**: se propone la tasa de IVA presente en la pestaña *Datos del artículo<!-- Dati articolo -->*, pero puede modificarse manualmente.  
- **Unidad de medida/Cantidad alternativa<!-- Unità di misura/Quantità alternativa -->**: permite seleccionar una unidad y cantidad alternativa, que se reportarán en los documentos generados por la solicitud de oferta<!-- RDO -->. 
- **Precio por unidad de medida alternativa<!-- Prezzo unità di misura alternativa -->**: si está activa, el precio se multiplica por la cantidad alternativa. 
- **Lista de compras<!-- Listino di Acquisto -->**: muestra la lista de la que se tomó el precio. 
- **Suspendida<!-- Sospseso -->**: este indicador se activa automáticamente cuando la solicitud de oferta<!-- RDO --> ha sido generada.

La existencia de al menos una línea en esta pestaña activa el botón de la cinta de opciones **Generar solicitud de oferta<!-- Generazione RDO -->**. Pulsando este botón, se creará la [Solicitud de Oferta<!-- Richiesta di Offerta -->](/docs/purchase/offer-request/settings) para las líneas seleccionadas. El documento creado podrá consultarse en la búsqueda de solicitudes de oferta<!-- ricerca RDO -->, o puede abrirse directamente con el botón **Abrir solicitud de oferta<!-- Apri richiesta di offerta -->** de la cinta de opciones.   

Para anular una creación realizada, es posible utilizar el botón de la cinta de opciones **Reversión de solicitud de oferta<!-- Rollback RDO -->**, que eliminará la *Solicitud de oferta<!-- Richiesta di offerta -->* creada.