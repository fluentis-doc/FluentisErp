---
title: Nueva Solicitud de compra (Nuova Richiesta di acquisto)
sidebar_position: 2
---

El formulario se abre a través del camino **Compras > Solicitudes de Compra > Nueva solicitud** o desde el filtro de búsqueda *Solicitudes de Compra* mediante el botón *Nuevo*.   

## *Cómo crear una Solicitud de Compra*

<details>

<summary>Clic para ver los pasos fundamentales</summary>

1. **Ingresa el *Tipo RDA* a crear**: *Fecha*, *Año* y *Número* serán propuestos automáticamente.  

2. **Ingresa los Artículos**: mediante doble clic en el campo *Código artículo* se abre la ayuda de artículos que permite buscar y seleccionar un artículo existente. Todos los demás datos de la línea, como *unidad de medida*, *cantidad*, *precio*, serán propuestos automáticamente, pero pueden ser modificados.  
En alternativa, se puede seleccionar como *Tipo de línea* un *Artículo no codificado* e ingresar manualmente los datos sucesivos.

3. **Ingresa cualquier información adicional** en las pestañas *Datos artículo*.

4. **Autoriza la Solicitud de Compra**: después de seleccionar los artículos en la cuadrícula, presiona el botón *Autorización RDA* de la barra de herramientas, para que la RDA esté disponible para los procedimientos siguientes.   

</details>

## **1. Sección superior** {#upper-section}

Los campos obligatorios para la introducción de una solicitud de compra son los siguientes:

- **Tipo**: predefinido en *Configuración > Tablas >* [*Tipos de solicitudes de compra*](/docs/configurations/tables/purchase/purchase-request-type). Dependiendo del tipo elegido, se activarán algunas funcionalidades como, por ejemplo, el *control de disponibilidad*.   
- **Fecha/Año**: por defecto se propone la fecha actual, pero puede ser modificada manualmente.   
- **Número**: propuesto automáticamente en base a la numeración asociada al *Tipo RDA* elegido.

#### Otros datos

- **Historizada**: al activar este indicador, la RDA no será más visible en el procedimiento de [Creación automática de pedidos](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests).   
- **Anotaciones**: permite insertar notas visibles a nivel de RDA.   
- **Estado de solicitud**: campo no editable; visualiza el estado de cumplimiento de toda la solicitud considerando el estado de cumplimiento de cada línea de artículo. Una RDA se considera *Cumplida* o *Parcialmente cumplida* cuando se ha generado el pedido al proveedor para todas o algunas de las líneas de artículo contenidas en ella.       

## **2. Artículos** {#items}

En la cuadrícula de artículos están presentes los siguientes datos:

- **Tipo de línea** ofrece la posibilidad de seleccionar, desde la combo-box, artículos con características diferentes:
    - *Artículo codificado*: son los artículos codificados en el registro y pueden ser contabilizados en contabilidad analítica y registrados en el almacén.   
    - *Artículo no codificado*: son artículos descriptivos que pueden ser contabilizados en contabilidad analítica pero no pueden ser movidos en el almacén.    
    - *Artículo notas*: son notas descriptivas que aparecen en la impresión del documento; no afectan la contabilidad y el almacén.

- **Clase/Código/Descripción artículo**: se pueden ingresar manualmente o con la ayuda de la *ayuda de campo*, que propondrá todos los datos relativos ingresados en el *Registro de artículo*. Después de ingresar el *Código* artículo, la *Descripción* y la *Clase* serán tomadas automáticamente del registro. Si el artículo tiene *Variantes*, será posible seleccionar la variante deseada en la pestaña *Datos artículo*.

- **Unidad de medida**: se propone la unidad de medida principal del artículo, pero en caso de que en el registro del artículo estén codificadas unidades de medida alternativas, el usuario tiene la posibilidad de seleccionar otra.

- **Cantidad**: representa la cantidad de la U.M. principal.    

- **Precio**: el precio es propuesto por la lista del proveedor preferencial por defecto del artículo; la lista de referencia para el artículo se visualiza en la pestaña *Descuentos/Listas*. El mismo documento podría contener artículos con precios tomados de listas diferentes. A través del doble clic en el campo **Listas** (pestaña *Descuentos/Listas*), el usuario tiene la posibilidad de seleccionar una lista diferente de la predeterminada, de la cual se tomará el precio del artículo ingresado.  
En ausencia de la lista, el dato propuesto puede ser tomado del *último costo* del registro del artículo o puede ser propuesto en cero, dependiendo de los parámetros establecidos en los **Parámetros de solicitudes de compra**.   

- **Cumplido forzadamente**: es posible establecer el cumplimiento forzado para la línea seleccionada. De este modo, no se realizará la carga al almacén.

- **Estado**: indica el estado de cumplimiento de cada línea de artículo.   

- **Fecha solicitada**: en caso de RDA liberada por la planificación, se completa automáticamente con la *Fecha fin* del pedido planificado de compra; también se puede ingresar o modificar manualmente.   

- **Fecha de envío**: si la RDA ha sido generada por la planificación y la *Fecha FOB* del pedido planificado está valorizada, esta se reportará en este campo; también puede ser ingresada o modificada manualmente. 

- **Fecha de llegada estimada**: si la RDA ha sido generada por la planificación y la *Fecha ETA* del pedido planificado está valorizada, esta será reportada en este campo; también puede ser ingresada o modificada manualmente. 

En la sección inferior de la cuadrícula se reportan los totales del documento:   

- **Imponible**: reporta el total imponible de la Solicitud de compra.    
- **Impuesto**: reporta el valor del impuesto calculado sobre el total imponible, basado en la alícuota IVA indicada para cada artículo en la pestaña *Datos artículo*.    
- **Total**: dado por la suma de *Imponible* y *Impuesto*.

#### Botones específicos

> **Autorización RDA**: permite autorizar todas las líneas de artículo seleccionadas; a partir de este momento, el documento se considera confirmado.   

> **Generador RDO**: al hacer clic en este botón se creará la [Solicitud de Oferta](/docs/purchase/offer-request/settings) para las líneas presentes en la pestaña *Generador RDO*. Para más detalles, consulte el párrafo [Generador RDO](/docs/purchase/purchase-requests/purchase-request/insert-purchase-request).   

> **Rollback RDO**: permite anular y eliminar la solicitud de oferta creada previamente.   

### 2.1 Datos artículo {#items-data}

Son campos informativos que se toman por defecto del artículo/proveedor. Es posible sobrescribir dicha información a nivel de línea.   

- **Listas**: se propone la lista de donde se ha tomado el precio del artículo.    

- **Proveedor**: se reporta el *proveedor preferencial* por defecto del [registro de artículo](/docs/erp-home/registers/items/create-new-item).    
- **IVA**: reporta la alícuota IVA asociada al artículo.   
- **Marca**: representa la marca del artículo, tomada de su registro o de la lista del artículo.
- **Divisa**: por defecto se propone la [divisa](/docs/configurations/tables/general-settings/currencies) presente en el [registro](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance) del *Proveedor preferencial*. 
- **Cambio**: reporta la fecha y la tasa de cambio a utilizar para la conversión de divisas.   

- **Variante**: en este campo se puede seleccionar una variante del artículo entre las previamente codificadas en la pestaña [Variantes](/docs/erp-home/registers/items/create-new-item) del registro de artículo. Si en la lista se han ingresado precios y/o descuentos diferentes para cada variante, estos se actualizarán al seleccionar una variante diferente del artículo.   
- **Proyectos de producción**: si la solicitud de compra ha sido generada por la [planificación](/docs/planning/ms-master-scheduling/general-schedule/) de un proyecto de producción (con liberación de pedidos automáticos o mediante la [procedimiento](/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders#richieste-dacquisto) de liberación de un pedido planificado de compra), en este campo se reportará la referencia al proyecto. Para más información consulte también la [sección introductoria](/docs/purchase/purchase-requests/general-overview).   
- **Operador**: en este campo se puede ingresar el operador que ha ingresado la solicitud de compra.   

- **Proyecto**: en este campo se puede asociar un proyecto a cada artículo. Si la RDA ha sido generada a partir de la planificación de un proyecto de producción que contiene un proyecto, este será reportado automáticamente en cada línea de artículo.   
- **Tipo de facturación de compras**: se propone el dato ingresado en la pestaña [Generalidades](/docs/erp-home/registers/items/create-new-item) del registro de artículos.    
- **Prioridad de solicitud**: se reporta la *prioridad de aprovisionamiento* presente dentro de la [orden de producción](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order).   
- **Notas**: en este campo se pueden ingresar notas relacionadas con la línea de artículo; serán reportadas en todos los documentos generados por esto.   
- **Fecha de cumplimiento**: en el momento de la [creación del pedido al proveedor](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) desde la solicitud de compra, las líneas ingresadas en el pedido se cumplen y se reporta en este campo la fecha del cumplimiento.   

- **Autorizada**: puede ser activada manualmente para cada línea o a través del botón de la barra de herramientas *Autorización RDA*.    
- **En fecha**: reporta la fecha en que se ha autorizado la línea de artículo de la RDA.   
- **Por usuario**: reporta el nombre del usuario que ha autorizado la solicitud de compra.   

### 2.2 Analítica {#cost-profit-centers-tab}

Contiene campos relativos a la contabilidad analítica. Se reportan los centros de costo/profitos sobre los cuales se distribuyen los valores de los productos adquiridos.    

Estos datos pueden ser ingresados: manualmente o automáticamente, en caso de que los centros de costo/profitos hayan sido ingresados previamente en el registro de contacto, registro de artículo o en el plan de cuentas.

### 2.3 Documentos adjuntos {#attached-documents}

Se visualiza el detalle de un posible documento adjunto (nombre, tipo de documento, notas eventuales, ns/vs referencia).    

Para las instrucciones sobre cómo adjuntar un documento, se remite al artículo  [Adjuntar documentos](/docs/guide/common/operations-with-data/attach-documents).

### 2.4 Generador RDO {#generate-RDO}

En esta pestaña se reportan los *Proveedores preferenciales* presentes en el registro del artículo seleccionado en la cuadrícula con los datos, listas y precios correspondientes. Desde esta pestaña es posible elegir el mejor precio. En alternativa, se puede ingresar manualmente el proveedor a considerar para el artículo.    

Se puede elegir entre: 
1. **Proveedor**: para especificar un registro de proveedor existente; la selección de esta opción habilita la inserción de datos en el campo *Descripción cuenta*.  
2. **Nomenclatura**: para especificar *Apodo* y *Razón social* del contacto a utilizar; la selección de esta opción habilita la inserción de datos en los campos *Nomenclatura* y *Descripción nomenclatura*.  
3. **Contacto**: para seleccionar un [Contacto CRM](/docs/crm/home-crm/contacts/search-contacts) al que solicitar la oferta; la selección de esta opción habilita la inserción de datos en el campo *Contacto*.  
4. **Nuevo proveedor**: para seleccionar un proveedor cuya información no ha sido codificada aún; la selección de esta opción habilita la inserción de datos en el campo *Descripción proveedor*.  

Los otros campos presentes en la cuadrícula son: 
- **Código/Descripción/Código de barras artículo proveedor**: reportan el código y la descripción con la que el proveedor identifica el artículo solicitado; son campos opcionales.     
- **Unidad de medida**: se propone la unidad de medida asociada al proveedor en el [registro del artículo](/docs/erp-home/registers/items/create-new-item), o la unidad de medida principal en caso de que este campo no esté valorizado.   
- **Cantidad**: se propone según el posible lote económico del proveedor, si se ha especificado en la pestaña [proveedores preferenciales](/docs/erp-home/registers/items/create-new-item) del artículo; de lo contrario se propone la cantidad presente en la línea del artículo de la RDA.
- **Precio**: se propone según la lista asociada al proveedor preferencial. 
- **Fecha estimada de entrega**: permite ingresar la fecha prevista para la entrega. 
- **IVA**: se propone la alícuota IVA presente en la pestaña *Datos artículo*, pero se puede modificar manualmente.  
- **Unidad de medida/Cantidad alternativa**: permite seleccionar una unidad de medida y una cantidad alternativa que serán reportadas en los documentos generados por la RDO. 
- **Precio unidad de medida alternativa**: si está activo, el precio se multiplica por la cantidad alternativa. 
- **Lista de Compra**: reporta la lista de donde se ha tomado el precio. 
- **Suspendido**: este indicador se activa automáticamente cuando se ha generado la RDO.

La presencia de al menos una línea en esta pestaña activa el botón de la barra de herramientas **Generación RDO**. Al hacer clic en este botón, se creará la [Solicitud de Oferta](/docs/purchase/offer-request/settings) para las líneas seleccionadas. El documento creado será consultable en la búsqueda de RDO, o es posible abrirlo directamente con el botón **Abrir solicitud de oferta** de la barra de herramientas.   

Para cancelar una creación realizada, se puede utilizar el botón de la barra de herramientas **Rollback RDO**, que cancelará la *Solicitud de oferta* creada.