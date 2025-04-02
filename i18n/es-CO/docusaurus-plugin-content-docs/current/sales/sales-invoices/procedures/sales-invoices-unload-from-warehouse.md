---
title: Descarga de facturas de venta desde el almacén (Scarico fatture di vendita dal magazzino)
sidebar_position: 2
---

El procedimiento se abre a través de la ruta **Ventas > DDT > Procedimientos > Descarga de facturas desde el almacén (Vendite > DDT > Procedure > Scarico fatture da magazzino)**. 

Este procedimiento permite ejecutar/restaurar las operaciones de descarga automática desde el almacén de los artículos presentes en la factura. 

### Filtro

En esta pestaña, el usuario tiene la posibilidad de buscar y trasladar las facturas que tienen configurado el indicador *stampata* en su interior.

**data registrazione magazzino**: permite especificar la fecha relativa a la descarga desde el almacén, excepto en la configuración de *Crear el registro con la fecha del documento (Crea la registrazione con la data documento)* en *Parámetros de facturas de venta > pestaña Descarga (Parametri fatture di vendita > tab Scarico)*.

*Botones específicos*:

> **ricerca**: permite buscar las facturas para descargar.  
> **scarico**: permite realizar la descarga de las facturas seleccionadas del almacén, basado en los algoritmos de descarga y los parámetros introducidos en la siguiente pestaña *Parámetros*. 

### Parámetros

En esta máscara, el usuario tiene la posibilidad de especificar, para las líneas de artículos, la forma de tratar las excepciones.

En este caso, si las líneas de la factura no han especificado el almacén y el motivo para la descarga, las opciones disponibles son:

- **No realizar la descarga de la factura en su totalidad**: no permite la descarga parcial del DDT;  

- **Omitir el artículo sin almacén y motivo**: permite la descarga parcial del documento;  

- **Aceptar como almacén y motivo los siguientes datos**: para todos los artículos encontrados sin almacén y motivo en las facturas seleccionadas en la sección de filtros, establece los datos ingresados inmediatamente después, en los campos: *magazzino* y *causale* (asegura la descarga completa del documento).

*Botón específico*

> **salva parametri**: permite guardar los parámetros configurados para el registro.

Después de seleccionar las facturas (desde la pestaña *Filtro*) y establecer los parámetros, las facturas pueden ser descargadas con la ayuda del botón *scarico*.

### Resumen (Riepilogativo)

En esta pestaña, el usuario tiene la posibilidad de buscar, visualizar y cancelar las operaciones de descarga realizadas, que satisfacen las condiciones específicas de eliminación de los registros del almacén.

Los datos en las cuadrículas de abajo, **fatture** y **registrazione**, corresponden al registro de descarga seleccionado en la cuadrícula superior (después de filtrar los datos). Además, en estas dos últimas cuadrículas, hay la posibilidad de visualizar la factura y su registro de almacén (doble clic en la fila).

*Botones específicos*:
> **ricerca fatture scaricate**: para buscar las facturas descargadas. El resultado de este procedimiento se visualiza en la cuadrícula de resultados.  
> **cancella scarico**: para eliminar completamente las operaciones de descarga seleccionadas en la cuadrícula de resultados.  
> **ripristina fatture**: para eliminar las operaciones de descarga seleccionadas en la cuadrícula de resultados, para la factura en uso en la cuadrícula de detalles.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MWEUxnmD1hk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>