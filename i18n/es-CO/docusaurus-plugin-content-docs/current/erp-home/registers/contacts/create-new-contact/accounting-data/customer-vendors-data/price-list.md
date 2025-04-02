---
title: listini
sidebar_position: 6
---

En pestaña se ofrece la posibilidad de vincular las *listini di vendita* relacionadas con el contacto para permitir la valorización de los documentos.

**Búsqueda de precio por prioridad (Ricerca del prezzo per priorità)**: este indicador habilita la columna de prioridades en la cuadrícula de artículos. En el caso de los clientes, con esta opción se podrán asociar múltiples listas al cliente (tanto generales como personalizadas) que se evaluarán en cascada desde la prioridad 1 hasta la prioridad N;

**Cálculo de lista para mejor precio (Calcolo listino per miglior prezzo)**: con esta opción se evalúan todas las listas aplicables a los clientes para seleccionar aquella que garantiza el mejor precio para el cliente.

**Gestión de precios desde lista de compra del proveedor preferente del artículo (Gestione prezzi da listino acq. del forn.pref. articolo)**: este indicador, visible solo para los registros de clientes, habilita la gestión de precios desde la lista de compras del proveedor preferencial para el artículo.

**Gestión de precios de venta desde lista del proveedor (Gestione prezzi di vend. da listino fornitore)**: este indicador, visible solo para los registros de proveedores, habilita la gestión de precios basándose en los precios del proveedor preferencial.

### listini (Listini)
La cuadrícula ofrece la posibilidad de ingresar las listas aplicables al cliente/proveedor, según las prioridades y las fechas de validez.

Para los clientes, está disponible la opción de listas generales, mientras que para los proveedores solo está presente la lista de listas de proveedor personalizadas.

La *data validità* se utilizará para identificar las listas que, a su vez, tienen fecha de inicio de validez superior a esta: dado que puede haber múltiples listas del mismo tipo con fechas de validez diferentes, se identificará el precio del artículo de la lista más reciente (incluso sin tener que establecer una fecha de finalización de validez de la lista misma). Por lo tanto, cada vez que se cree una nueva lista actualizada para ese cliente, no será necesario reemplazarla también en el registro, ya que gracias a la fecha de validez, se considerará directamente la más reciente.

:::note[Observación] 
Para poder vincular una lista al cliente/proveedor, primero se debe crear la lista general o personalizada para el cliente a través del procedimiento de *Creación de listas (Creazione listini)*, y una vez creada, ingresar en la *Ficha del contacto > pestaña Listas (tab Listini)* y seleccionar la lista dentro de la cuadrícula *listini*. 
:::

### Descuentos de lista (Sconti di listino)

Para cada lista de cliente/proveedor es posible asociar, a la derecha, una estructura de descuentos adicional, específica para el sujeto en uso. Por ejemplo, el cliente1 podría tener la lista general (que ya prevé un descuento del 10% en algunos artículos) además de un descuento de caja del 2% (que se aplicará adicionalmente, por lo tanto, habrá artículos con 10%+2% y otros con solo 2%) y un cliente2 con lista general + 3% (que tendrá por lo tanto 10%+3% y 3%).

### Listas de venta con actualización automática desde pedidos de proveedores

Vinculada a la lista del proveedor está la posibilidad de asociar una lista de listas de venta que se actualizan automáticamente al variar la lista del proveedor mismo, según un criterio de incremento (porcentaje) y de redondeo.

*Botones específicos*:
> **cancella listini**: para eliminar las listas seleccionadas.  
> **cancella sconti per listino**: para eliminar los descuentos seleccionados de la lista.  

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funciones, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).