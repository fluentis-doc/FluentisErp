---
title: Registro de devoluciones (Registrazione rientri)
sidebar_position: 1
---

El formulario se abre a través de la ruta **Trabajo por Encargo > Devoluciones > Procedimientos > Registro de devoluciones (Conto Lavoro > Rientri > Procedure > Registrazione rientri)** y permite registrar en el almacén las devoluciones de trabajo por encargo que ya han sido controladas y no están aún registradas.

## Filtro

En esta pestaña, el usuario tiene la posibilidad de buscar y transferir al almacén las devoluciones, según los criterios de filtro disponibles.

*Botones específicos*:

> **Buscar (Ricerca)**: permite aplicar los filtros de búsqueda a toda la base de datos de las Devoluciones de Trabajo por Encargo ingresadas, controladas y no registradas;  
> **Descarga (Scarico)**: permite realizar la descarga de las devoluciones seleccionadas del almacén, según los algoritmos de descarga.

*Campos específicos*:

**Número doc. def. (Numero doc. def.)**: en esta columna se muestra el número de la devolución de trabajo por encargo;  
**Fecha doc. def. (Data doc. def.)**: en esta columna se muestra la fecha de la devolución de trabajo por encargo;  
**Fecha de registro en almacén (Data registrazione magazzino)**: se encuentra en la parte inferior del formulario y está configurada por defecto en la fecha actual, pero puede ser modificada.

Una vez seleccionadas las devoluciones de trabajo por encargo, utilice el botón *Descarga (Scarico)* para realizar los movimientos de almacén: simultáneamente a esta operación, la aplicación realiza la carga en el almacén de devoluciones de los artículos producidos por el subcontratista, la descarga del almacén del subcontratista de los materiales utilizados y la posible carga de los retornos en el almacén de devoluciones correspondiente.

## Resúmenes (Riepiloghi)

En esta pestaña es posible realizar el 'rollback' de la operación de registro de la devolución de trabajo por encargo, restaurando así la situación anterior a la operación misma.

Los datos en las cuadrículas inferiores, **Devoluciones (Rientri)** y **Registros (Registrazioni)**, corresponden al registro de descarga seleccionado en la cuadrícula superior (después de filtrar los datos).

*Botones específicos*:
> **Buscar (Ricerca)**: para buscar las devoluciones descargadas. El resultado de este procedimiento se visualiza en la cuadrícula de resultados, *Descarga de devoluciones (Scarico rientri)*;  
> **Restaurar (Ripristina)**: llama al procedimiento que realiza el rollback de toda la operación de registro de devoluciones seleccionada en la cuadrícula *Descarga de devoluciones (Scarico rientri)*; por lo tanto, si con la misma operación de registro se han registrado múltiples devoluciones, todas estas devoluciones se devolverán al estado de 'no cargadas';  
> **Restaurar devoluciones (Ripristina rientri)**: llama al procedimiento que realiza el rollback del registro de solo las devoluciones seleccionadas en la cuadrícula inferior, en la pestaña *Devoluciones (Rientri)*.