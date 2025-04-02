---
title: Descarga DDT desde almacén (Scarico DDT da magazzino)
sidebar_position: 1
---

El procedimiento masivo se abre a través de la ruta **Ventas > DDT > Procedimientos > Descarga DDT desde almacén (Vendite > DDT > Procedure > Scarico DDT da magazzino)**.  

Este procedimiento permite realizar/restaurar las operaciones de descarga automática desde el almacén de los artículos presentes en el DDT.  
Recordemos que el procedimiento también se puede llevar a cabo dentro del [Encabezado (Testata)](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) del DDT individual con el botón [Descarga automática (Scarico automatico)](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn).  

El procedimiento masivo se compone de tres pestañas que se analizan a continuación.

### Filtro

En esta pestaña, el usuario tiene la posibilidad de buscar y transferir los DDT que han establecido el indicador *stampata* y por lo tanto están listos para la descarga.  

*Botones específicos*:  

> **ricerca**: permite buscar los DDT a descargar.  
> **scarico**: permite realizar la descarga de los DDT seleccionados del almacén, de acuerdo con los algoritmos de descarga y los parámetros ingresados en la siguiente pestaña *Parámetros*.  

### Parámetros

En esta pantalla, el usuario tiene la posibilidad de especificar, para las líneas de artículos, la manera de tratar las excepciones.  

En este caso, si las líneas del DDT no han especificado el almacén y el motivo para la descarga, las opciones disponibles son:  

- **No realizar la descarga del DDT completo**: no permite la descarga parcial del DDT.  
- **Omitir el artículo sin almacén y motivo**: permite la descarga parcial del documento.  
- **Aceptar como almacén y motivo los siguientes datos**: para todos los artículos encontrados sin almacén y motivo en los DDT seleccionados en la parte de filtros, establece los datos ingresados inmediatamente después, en los campos: *magazzino* y *causale* (asegura la descarga completa del documento).  

*Botón específico*  

> **salva parametri**: permite guardar los parámetros establecidos para el registro.  

Después de haber seleccionado los DDT (desde la pestaña *Filtro*) y haber configurado los parámetros, los DDT se pueden descargar con la ayuda del botón *scarico*.

### Resumen (Riepilogativo)

En esta pestaña, el usuario tiene la opción de buscar, visualizar y anular las operaciones de descarga realizadas, que cumplen con las condiciones específicas para la cancelación de los registros de almacén.  

Los datos en las cuadrículas inferiores, **DDT** y **registrazione**, corresponden al registro de descarga seleccionado en la cuadrícula superior (después de filtrar los datos). Además, en estas dos últimas cuadrículas, hay la posibilidad de visualizar el DDT y su registro de almacén (doble clic en la fila).  

*Botones específicos*:  
> **ricerca**: para buscar los DDT descargados. El resultado de este procedimiento se visualiza en la cuadrícula de resultados.  
> **cancella**: para eliminar por completo las operaciones de descarga seleccionadas en la cuadrícula de resultados, si cumplen con las condiciones específicas para la cancelación de los registros de almacén.  
> **ripristina ddt**: para eliminar las operaciones de descarga seleccionadas en la cuadrícula de resultados, para el DDT en uso en la cuadrícula de detalles.