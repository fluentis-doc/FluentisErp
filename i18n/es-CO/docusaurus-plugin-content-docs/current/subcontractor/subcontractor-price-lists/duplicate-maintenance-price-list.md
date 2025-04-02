---
title: Duplicar y Mantenimiento de listas de trabajo (Duplica e Manutenzione listini di conto lavoro)
sidebar_position: 2
---

A través de este procedimiento es posible actualizar, cerrar, duplicar, reabrir o modificar los descuentos de las listas preexistentes. Al abrir, notamos que hay filtros, a través de los cuales se puede buscar la lista a tratar de manera más específica. Al hacer clic en el botón Buscar, se proponen los artículos de la lista según los filtros establecidos. Es necesario seleccionar uno o más artículos, aquellos que serán objeto de la modificación, para llevar a cabo el procedimiento. Con los botones de la barra de herramientas **modifica** y **visualizzazione** se puede respectivamente entrar en la modificación o visualización de la lista de referencia; recordemos que la visualización no permite la modificación.

Con el botón **aggiorna**, se abre un formulario en el cual se solicitan los datos a aplicar en la actualización:  
- **data inizio validità** y **data fine validità** deben ser iguales a las de la lista original, de lo contrario, Fluentis no podrá realizar la actualización; estas fechas se pueden consultar directamente en la línea del artículo;  
- **percentuale incremento**: se puede indicar un porcentaje de incremento a aplicar al precio;  
- **arrotondamenti**: este campo excluye el anterior, por lo que, para poder editarlo, es necesario borrar el contenido del campo anterior; aquí se puede elegir el tipo de redondeo a aplicar al precio; recordemos que los redondeos pueden contener a su vez un porcentaje de incremento: por lo tanto, no tendría sentido dejar editable el campo anterior.  
Una vez configuradas las actualizaciones deseadas, para ejecutar el procedimiento, hacemos clic en **OK**. Notamos que el precio de las líneas seleccionadas ha cambiado, de acuerdo con las configuraciones ingresadas.

Con el botón **chiudi listini**, en cambio, es posible introducir una fecha de fin de validez para los artículos de la lista seleccionados. De hecho, al hacer clic en el botón Cerrar, se abrirá un formulario donde se puede ingresar una Fecha de fin de validez, a partir de la cual el artículo ya no será considerado válido en la lista.

Con el botón **duplica listini** es posible crear una nueva lista a partir de la línea del artículo seleccionada. Al hacer clic en el botón duplicar listas, se solicitarán los datos obligatorios para la creación de una lista y, por lo tanto:  
- El Proveedor (Fornitore);  
- La fecha de inicio de validez y una posible fecha de fin;  
- La Divisa (Divisa).  
Al hacer clic en OK, se generará la lista con los datos ingresados. Podemos notar que ahora los resultados de búsqueda presentan una línea más, que es precisamente la línea de la nueva lista creada.

Al hacer clic en **sconti** en la barra de herramientas, en cambio, es posible gestionar los descuentos relacionados con la línea del artículo seleccionada. El indicador **Eliminar descuentos anteriores (Cancella gli sconti precedenti)** elimina posibles descuentos preexistentes en la lista para ese artículo. En la cuadrícula es posible ingresar descuentos a incluir en la lista de origen en relación con el artículo seleccionado. Para insertar los descuentos es necesario ingresar descuentos precodificados, para permitir que la aplicación derive el tipo de descuento y su respectiva propiedad.  
Por lo tanto, ingresamos el tipo y el valor.

El botón de la barra de herramientas **riapertura listini**, finalmente, permite reabrir una lista que ha sido cerrada previamente, es decir, una lista que tiene una Fecha de fin de validez. Al hacer clic en este botón, la fecha de fin de validez se eliminará.

En la barra de herramientas también hay otros botones. Por lo tanto, es posible imprimir las líneas seleccionadas, crear perfiles en caso de que sea necesario modificar el formulario, y finalmente, es posible crear actividades para asignar a los empleados.