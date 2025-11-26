---
title: Descarga de facturas de venta desde el almacén
sidebar_position: 2
ai_generated: true
---

El procedimiento se abre mediante la ruta **Ventas > DDT > Procedimientos > Descarga de facturas desde almacén<!-- scarico fatture da magazzino -->**.

Este procedimiento permite ejecutar/restaurar las operaciones de descarga automática desde el almacén<!-- magazzino --> de los artículos presentes en la factura.

:::tip Recuerda<!-- Ricorda -->
Si el documento contiene **artículos ficticios**, el procedimiento tendrá en cuenta la *Tipología de aprovisionamiento* definida en los Parámetros MRP del artículo:
- Los artículos de tipo *Compra* no se incluirán en el registro de almacén<!-- registrazione di magazzino -->.
- Los artículos de tipo *Producción* o *Cuenta de trabajo*<!-- Conto Lavoro --> se registrarán en almacén<!-- magazzino --> con el primer nivel de la lista de materiales.
:::

### Filtro

En esta pestaña, el usuario tiene la posibilidad de buscar y transferir las facturas que tienen activada la marca *Impresa*.

**Fecha de registro en almacén<!-- Data registrazione magazzino -->**: permite especificar la fecha relativa a la descarga desde almacén<!-- magazzino -->, excepto la configuración de *Crear el registro con la fecha del documento* en *Parámetros de facturas de venta > pestaña Descarga*.

*Botones específicos*:

> **Buscar<!-- Ricerca -->**: permite buscar las facturas para descargar.  
> **Descargar<!-- Scarico -->**: permite ejecutar la descarga de las facturas seleccionadas desde el almacén<!-- magazzino -->, según los algoritmos de descarga y los parámetros introducidos en la siguiente pestaña *Parámetros*.

:::note NOTA
Solo pueden ser movilizadas en almacén<!-- movimentate a magazzino --> las facturas de tipo Inmediato que no derivan de un DDT.

Cuando la factura se genera a partir de un DDT, es necesario proceder con la descarga de los documentos de transporte. Una vez que todos los DDT valorizados en la factura hayan sido descargados, la activación de la marca *Impresa* en la factura también activará automáticamente la marca *Descargada*.

Excepción: si en el tipo de factura está activa la marca [*Desvincular DDT*](/docs/configurations/tables/sales/invoices-type), también será posible movilizar en almacén<!-- movimentare a magazzino --> la factura de venta.

Las facturas no inmediatas, en cambio, nunca podrán ser movidas en almacén<!-- movimentate a magazzino -->: en consecuencia, la marca Descargada no se activará ni siquiera después de la descarga de todos los DDT contenidos en ellas.
:::

### Parámetros

En esta pantalla, el usuario puede especificar, para las líneas de los artículos, la forma de tratar las excepciones.

En este caso, si las líneas de la factura no han especificado el almacén<!-- magazzino --> y la causa<!-- causale --> para la descarga, las opciones disponibles son:

- **No realizar la descarga completa de la factura**: no permite la descarga parcial del DDT;

- **Omitir el artículo sin almacén<!-- magazzino --> y causa<!-- causale -->**: permite la descarga parcial del documento;

- **Aceptar como almacén<!-- magazzino --> y causa<!-- causale --> los siguientes datos**: para todos los artículos encontrados sin almacén<!-- magazzino --> y causa<!-- causale --> en las facturas seleccionadas en la sección de filtros, se asignan los datos insertados a continuación, en los campos: *Almacén<!-- Magazzino -->* y *Causa<!-- Causale -->* (asegura la descarga completa del documento).

*Botón específico*

> **Guardar parámetros**: permite guardar los parámetros establecidos para el registro.

Tras seleccionar las facturas (desde la pestaña *Filtro*) y configurar los parámetros, las facturas pueden descargarse con la ayuda del botón *Descargar*.

### Resumen<!-- Riepilogativo -->

En esta pestaña, el usuario tiene la posibilidad de buscar, visualizar y anular las operaciones de descarga realizadas, que cumplen las condiciones específicas para la cancelación de los registros de almacén<!-- registrazioni di magazzino -->.

Los datos en las cuadrículas inferiores, **Facturas** y **Registro**, corresponden al registro de descarga seleccionado en la cuadrícula superior (después de filtrar los datos). Además, en estas dos últimas cuadrículas, existe la posibilidad de visualizar la factura y su registro de almacén<!-- registrazione di magazzino --> (doble clic en la fila).

*Botones específicos*:
> **Buscar facturas descargadas**: para buscar las facturas descargadas. El resultado de este procedimiento se visualiza en la cuadrícula de resultados.  
> **Cancelar descarga**: para borrar completamente las operaciones de descarga seleccionadas en la cuadrícula de resultados.  
> **Restaurar facturas**: para borrar las operaciones de descarga seleccionadas en la cuadrícula de resultados, para la factura en uso en la cuadrícula de detalles.

<iframe width="560" height="315" src="https://www.youtube.com/embed/MWEUxnmD1hk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>