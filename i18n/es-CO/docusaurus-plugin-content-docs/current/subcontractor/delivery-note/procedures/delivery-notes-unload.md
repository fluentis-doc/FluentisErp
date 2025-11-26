---
title: Descarga de DDT de entrega
sidebar_position: 1
ai_generated: true
---

El procedimiento se abre mediante la ruta **Trabajo a Terceros<!-- Conto Lavoro --> > DDT de entrega > Procedimientos<!-- Procedure --> > Descarga de DDT<!-- Scarico DDT -->** y permite descargar del almacén<!-- magazzino --> los DDT de entrega de trabajo a terceros<!-- conto lavoro --> ya impresos y no descargados aún.

## Filtro

En esta pestaña es posible filtrar los DDT de entrega según el tercero al que están asignados, la fecha del DDT (Desde...a...), el número de DDT, etc.

*Botones específicos*:
> **Buscar<!-- Ricerca -->**: botón para aplicar los filtros de búsqueda a toda la base de datos de DDT de entrega introducidos, revisados y aún no registrados;  
> **Descargar<!-- Scarico -->**: inicia el procedimiento que ejecuta el registro de la Nota de Entrega<!-- Bolla di Consegna --> y, por tanto, los movimientos de almacén<!-- movimenti di magazzino --> relacionados.

*Campos específicos*:

En la zona inferior del formulario aparece un campo de fecha, llamado **Fecha de registro de almacén<!-- Data registrazione magazzino -->**, configurado por defecto con la fecha actual. El usuario, modificando esta fecha, puede decidir que el registro de almacén<!-- registrazione di magazzino --> se realice en una fecha diferente a la actual.

Una vez seleccionados los DDT de entrega que desea registrar, es posible utilizar el botón **Descargar<!-- Scarico -->** ubicado en la barra de herramientas para ejecutar los movimientos de almacén<!-- movimenti di magazzino -->: simultáneamente, la aplicación realiza la descarga desde el almacén de recogida de los materiales a entregar al tercero y el ingreso de dichos materiales en el almacén<!-- magazzino --> del tercero<!-- terzista -->.

## Resumen<!-- Riepilogo -->

En esta pestaña es posible ejecutar el rollback de la operación de registro del DDT de entrega, restaurando así la situación anterior a dicha operación. En el encabezado de esta pestaña están presentes algunos filtros de búsqueda, que permiten al usuario seleccionar las operaciones filtrando por número de descarga (Desde...a...), fecha de descarga DDT (Desde...a...), número de DDT (Desde...a...).

Los resultados son visibles dentro de la cuadrícula ubicada en la parte superior de la ventana, denominada **Descarga de DDT<!-- Scarico DDT -->**.  
Manteniendo seleccionada una fila de esta cuadrícula, en la cuadrícula ubicada en la parte inferior del formulario se pueden visualizar los DDT de entrega descargados (en la pestaña *DDT*), así como los respectivos registros de almacén<!-- registrazioni di magazzino --> que han sido generados automáticamente por la descarga del DDT seleccionado en la pestaña *DDT* (en la pestaña *Registro<!-- Registrazione -->* correspondiente).

*Botones específicos*:  
> **Buscar<!-- Ricerca -->**: botón para aplicar los filtros de búsqueda a toda la base de datos de DDT de entrega introducidos, impresos y ya descargados.  
> **Eliminar<!-- Cancella -->**: inicia el procedimiento que ejecuta el rollback de toda la operación de descarga del DDT seleccionado en la cuadrícula *Descarga de DDT<!-- Scarico DDT -->*; por lo tanto, si con la misma operación de registro se han descargado varios DDT, todos estos DDT se volverán a colocar en estado de *no descargado<!-- non scaricate -->*.  
> **Restaurar DDT<!-- Ripristina DDT -->**: inicia el procedimiento que realiza el rollback del registro de los DDT seleccionados en la cuadrícula inferior, en la pestaña *DDT*.  
> **Restaurar<!-- Ripristina -->**: inicia el procedimiento que ejecuta la simple eliminación de los registros de almacén<!-- registrazioni di magazzino --> seleccionados en la pestaña *Registro<!-- Registrazione -->*, sin volver a colocar el DDT correspondiente en estado de *no descargado<!-- non scaricata -->*. Se recomienda no utilizar nunca este botón salvo en situaciones de necesidad particular.