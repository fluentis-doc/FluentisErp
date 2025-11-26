---
title: Descarga de DDT desde almacén
sidebar_position: 1
ai_generated: true
---

El procedimiento masivo se abre a través de la ruta **Ventas > DDT > Procedimientos > Descarga de DDT desde almacén<!-- Scarico DDT da magazzino -->**. 

Este procedimiento permite ejecutar/restaurar las operaciones de descarga automática desde el almacén<!-- magazzino --> de los artículos presentes en el DDT.    
Recordamos que el procedimiento también puede ejecutarse dentro de la [Cabecera](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) de cada DDT con el botón [Descarga automática](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn). 

:::tip Recuerda<!-- Ricorda -->
Si el documento contiene **artículos ficticios**, el procedimiento tendrá en cuenta la *Tipología de abastecimiento* definida en los Parámetros MRP del artículo:
- Los artículos de tipo *Compra<!-- Acquisto -->* no serán insertados en la registración de almacén<!-- registrazione di magazzino -->.   
- Los artículos de tipo *Producción* o *Trabajo a terceros<!-- Conto Lavoro -->* serán registrados en almacén<!-- magazzino --> con el primer nivel del listado de materiales.
:::

El procedimiento masivo está compuesto por tres pestañas que analizamos a continuación. 

### Filtro

En esta pestaña, el usuario tiene la posibilidad de buscar y transferir los DDT que tienen activada la bandera *Impreso* y que por lo tanto están listos para la descarga.     

*Botones específicos*:

> **Buscar<!-- Ricerca -->**: permite buscar los DDT a descargar.  
> **Descargar<!-- Scarico -->**: permite ejecutar la descarga de los DDT seleccionados desde el almacén<!-- magazzino -->, según los algoritmos de descarga y los parámetros ingresados en la siguiente pestaña *Parámetros*.

:::important Recuerda<!-- Ricorda -->
Si en los *[Parámetros DDT](/docs/configurations/parameters/sales/dn-parameters#scarico) > pestaña Descarga<!-- tab Scarico -->* la bandera **Crear registración con la fecha del documento** no está activa, la registración de almacén<!-- registrazione di magazzino --> siempre se realizará con la fecha actual.     
Si la bandera en los parámetros está activa, la registración se creará usando la *Fecha de transporte* indicada en la pestaña *Transporte* del DDT, si está especificada; de lo contrario se usará la fecha del DDT.    
:::

### Parámetros

En esta pantalla, el usuario tiene la posibilidad de especificar, para las líneas de artículos, la forma de tratar las excepciones.

En este caso, si las líneas del DDT no han especificado el almacén<!-- magazzino --> y la causale<!-- causale --> para la descarga, las opciones disponibles son:

- **No descargar el DDT en su totalidad**: no permite la descarga parcial del DDT.     
- **Omitir el artículo sin almacén<!-- magazzino --> y causale<!-- causale -->**: permite la descarga parcial del documento.       
- **Aceptar como almacén<!-- magazzino --> y causale<!-- causale --> los siguientes datos**: para todos los artículos encontrados sin almacén<!-- magazzino --> y causale<!-- causale --> en los DDT seleccionados en la parte de filtros, se asignan los datos ingresados a continuación, en los campos: *Almacén<!-- Magazzino -->* y *Causale*. (asegura la descarga completa del documento).

*Botón específico*

> **Guardar parámetros<!-- Salva parametri -->**: permite guardar los parámetros configurados para la registración.

Después de seleccionar los DDT (desde la pestaña *Filtro*) y haber configurado los parámetros, los DDT pueden descargarse utilizando el botón *Descargar<!-- Scarico -->*.

### Resumen<!-- Riepilogativo -->

En esta pestaña, el usuario puede buscar, visualizar y anular las operaciones de descarga realizadas que cumplen con las condiciones específicas de cancelación de las registraciones de almacén<!-- registrazioni di magazzino -->.

Los datos en las cuadrículas inferiores, **DDT** y **Registración**, corresponden a la registración de descarga seleccionada en la cuadrícula superior (luego de filtrar los datos). Además, en estas dos últimas cuadrículas, existe la posibilidad de visualizar el DDT y su registración de almacén<!-- registrazione di magazzino --> (doble clic sobre la línea).

*Botones específicos*:
> **Buscar<!-- Ricerca -->**: para buscar los DDT descargados. El resultado de este procedimiento se visualiza en la cuadrícula de resultados.  
> **Eliminar<!-- Cancella -->**: para eliminar completamente las operaciones de descarga seleccionadas en la cuadrícula de resultados, si cumplen con las condiciones específicas de cancelación de las registraciones de almacén<!-- registrazioni di magazzino -->.  
> **Restaurar DDT<!-- Ripristina DDT -->**: para eliminar las operaciones de descarga seleccionadas en la cuadrícula de resultados para el DDT en uso en la cuadrícula de detalles.