---
title: registrazione rientri
sidebar_position: 1
---

El formulario se abre a través de la ruta **Trabajo por Encargo > Devoluciones > Procedimientos > registrazione rientri** y permite registrar en el almacén las devoluciones de trabajo por encargo ya controladas y aún no registradas.

## Filtro

En esta pestaña, el usuario tiene la posibilidad de buscar y transferir al almacén las devoluciones, según los criterios de filtro disponibles.

*Botones específicos*:

> **ricerca**: permite aplicar los filtros de búsqueda a toda la base de datos de las Devoluciones de Trabajo por Encargo ingresadas, controladas y aún no registradas;  
> **scarico**: permite realizar la descarga de las devoluciones seleccionadas del almacén, en base a los algoritmos de descarga.

*Campos específicos*:

**numero doc. def.**: en esta columna se visualiza el número de la devolución de trabajo por encargo;  
**data doc. def.**: en esta columna se visualiza la fecha de la devolución de trabajo por encargo;  
**data registrazione magazzino**: se encuentra en la parte inferior del formulario y se establece por defecto en la fecha actual, pero puede ser modificada.

Una vez seleccionadas las devoluciones de trabajo por encargo, utilice el botón *scarico* para ejecutar los movimientos de almacén: concurrentemente a esta operación, la aplicación realiza la carga en el almacén de devoluciones de los artículos producidos por el tercer proveedor, la descarga del almacén del proveedor de los materiales utilizados y la carga de los retornos en el almacén adecuado de devoluciones.

## Resúmenes (Riepiloghi)

En esta pestaña es posible realizar el 'rollback' de la operación de registro de la devolución de trabajo por encargo, restaurando así la situación anterior a la operación misma.

Los datos en las cuadrículas de abajo, **rientri** y **registrazioni**, corresponden al registro de descarga seleccionado en la cuadrícula superior (después de haber filtrado los datos).

*Botones específicos*:
> **ricerca**: para buscar las devoluciones descargadas. El resultado de este procedimiento se visualiza en la cuadrícula de resultados, *scarico rientri*;  
> **ripristina**: Llama al procedimiento que realiza el rollback de toda la operación de registro de devoluciones seleccionada en la cuadrícula *scarico rientri*; por lo tanto, si con la misma operación de registro se han registrado más devoluciones, todas estas devoluciones volverán al estado de 'no cargadas';  
> **ripristina rientri**: llama al procedimiento que realiza el rollback de la registración de solo las devoluciones seleccionadas en la cuadrícula inferior, en la pestaña *rientri*.