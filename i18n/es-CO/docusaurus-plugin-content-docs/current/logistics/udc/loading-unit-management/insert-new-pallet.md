---
title: Inserción nueva UDC (Inserimento nuova UDC)
sidebar_position: 3
---

Para crear una nueva UDC, es suficiente con insertar una nueva fila en la cuadrícula principal especificando el año, grupo, número y tipo. Estos campos definen la clave única para cada UDC.  
Se completarán automáticamente los campos de **anagrafica** relacionados con las dimensiones y pesos (obteniéndolos de lo indicado en la tabla **tipi udc**), que de todas formas pueden ser cambiados.

Además, es necesario indicar el almacén y la ubicación, después de lo cual se puede pasar a la pestaña **dettaglio udc**, donde es posible insertar el artículo o los artículos que la componen.

La inserción puede realizarse a través del botón dedicado **nuovo articolo udc**, o directamente en la primera fila libre. En ambos casos, esto requiere especificar obligatoriamente la clase, el código, y eventualmente la variante si el artículo se gestiona por variante, junto con la cantidad. También es posible asociar el artículo a la línea del pedido del cliente, eligiendo en la columna correspondiente el Tipo y el número del Pedido del cliente. La información relacionada con el almacén se actualizará automáticamente después de la carga de la UDC.

*Indicadores (Flag)*:

- **stampata**: se establece automáticamente una vez que se ha impreso la unidad de carga;  
- **caricata**: se establece automáticamente una vez que se ha cargado la unidad de carga;  
- **scaricata**: se establece automáticamente una vez que se ha descargado la unidad de carga;  
- **da unità di carico**: se establece automáticamente cuando la unidad de carga tiene una unidad de carga padre.

*Botones específicos (Pulsanti specifici)*:

> **nuovo articolo udc**: permite añadir un nuevo artículo a la unidad de carga;  
> **cancella articolo udc**: permite eliminar un nuevo artículo de la unidad de carga.