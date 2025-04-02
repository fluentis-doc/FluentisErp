---
title: Descarga DDT de entrega (Scarico DDT di consegna)
sidebar_position: 1
---

El procedimiento se abre a través de la ruta **Trabajo por cuenta (Conto Lavoro) > DDT de entrega (DDT di consegna) > Procedimientos (Procedure) > Descarga DDT (Scarico DDT)** y permite descargar del almacén los DDT de entrega de trabajo por cuenta ya impresos y no aún descargados.

## Filtro

En esta pestaña es posible filtrar los DDT de entrega según el subcontratista a quien están a nombre, según la fecha del DDT (De…a…), según el número de DDT, etc.

*Botones específicos*:  
> **ricerca**: botón para aplicar los filtros de búsqueda a toda la base de datos de los DDT de entrega ingresados, controlados y no aún registrados;  
> **scarico**: llama al procedimiento que ejecuta el registro de la Bolla de Entrega y, por lo tanto, los movimientos de almacén relacionados.  

*Campos específicos*: 

En la parte inferior del formulario aparece un campo de fecha, llamado **data registrazione magazzino**, configurado por defecto a la fecha actual. El usuario, al modificar esta fecha, puede decidir que el registro de almacén se realice en una fecha diferente a la fecha actual.

Una vez seleccionados los DDT de entrega que se desean registrar, se puede utilizar el botón **scarico** ubicado en la barra de ribbon y ejecutar los movimientos de almacén: simultáneamente a esta operación, la aplicación realiza la descarga del almacén de los materiales a entregar al subcontratista y la carga de los mismos materiales en el almacén del subcontratista.

## Resumen (Riepilogo)

En esta pestaña es posible realizar el rollback de la operación de registro del DDT de entrega, restaurando así la situación anterior a la operación misma. En el encabezado de esta pestaña hay algunos filtros de búsqueda, que permiten al usuario seleccionar las operaciones filtrando por número de descarga (De…a…), fecha de descarga del DDT (De…a…), número de DDT (De…a…).

Los resultados son visibles dentro de la cuadrícula situada en la parte superior de la ventana, denominada **scarico ddt**.  
Al mantener seleccionada una fila de esta cuadrícula, en la cuadrícula situada en la parte inferior del formulario se pueden visualizar los DDT de entrega descargados (en la pestaña correspondiente *DDT*), así como los registros de almacén que se han generado automáticamente con la descarga del DDT seleccionado en la pestaña *DDT* (en la pestaña correspondiente *Registro*).

*Botones específicos*:  
> **ricerca**: botón para aplicar los filtros de búsqueda a toda la base de datos de DDT de entrega ingresados, impresos y ya descargados.  
> **cancella**: llama al procedimiento que ejecuta el rollback de toda la operación de descarga del DDT seleccionado en la cuadrícula *scarico ddt*; por lo tanto, si con la misma operación de registro se han descargado varios DDT, todos estos DDT se volverán al estado de *no descargados*.  
> **ripristina ddt**: llama al procedimiento que ejecuta el rollback del registro de los DDT seleccionados en la cuadrícula inferior, en la pestaña *DDT*.  
> **ripristina**: llama al procedimiento que ejecuta la simple eliminación de los registros de almacén seleccionados en la pestaña *Registro*, sin devolver el DDT relacionado al estado de *no descargado*. Se aconseja no utilizar nunca este botón a menos que sea en situaciones de particular necesidad.