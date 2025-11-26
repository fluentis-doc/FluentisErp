---
title: Registro de devoluciones
sidebar_position: 1
ai_generated: true
---

El formulario se abre a través de la ruta **Conto Lavoro > Devoluciones<!-- Rientri --> > Procedimientos > Registro de devoluciones<!-- Registrazione rientri -->** y permite registrar en el almacén<!-- magazzino --> las devoluciones<!-- rientri --> de conto lavoro que ya han sido controladas y aún no han sido registradas.

## Filtro

En esta pestaña, el usuario tiene la posibilidad de buscar y transferir al almacén<!-- magazzino --> las devoluciones<!-- rientri -->, según los criterios de filtro disponibles. 
  

*Botones específicos*:

> **Buscar<!-- Ricerca -->**: permite aplicar los filtros de búsqueda a toda la base de datos de devoluciones<!-- Rientri --> de Conto Lavoro ingresadas, controladas y aún no registradas;    
> **Descargar<!-- Scarico -->**: permite ejecutar la descarga<!-- scarico --> de las devoluciones<!-- rientri --> seleccionadas desde el almacén<!-- magazzino -->, según los algoritmos de descarga.

*Campos específicos*:

**Número doc. def.**: en esta columna se visualiza el número de la devolución<!-- rientro --> de conto lavoro;  
**Fecha doc. def.**: en esta columna se visualiza la fecha de la devolución<!-- rientro --> de conto lavoro;  
**Fecha de registro en almacén<!-- Data registrazione magazzino -->**: se encuentra en la parte inferior del formulario y está configurada por defecto con la fecha actual, pero puede ser modificada.

Una vez seleccionadas las devoluciones<!-- rientri --> de conto lavoro, utilice el botón *Descargar<!-- Scarico -->* para ejecutar los movimientos de almacén<!-- movimenti di magazzino -->: simultáneamente con esta operación, la aplicación realiza la entrada en el almacén<!-- magazzino --> de devolución<!-- rientro --> de los artículos producidos por el tercerista, la descarga del almacén<!-- magazzino --> del tercerista de los materiales utilizados y la eventual entrada de las devoluciones<!-- resi --> en el almacén<!-- magazzino --> correspondiente de resi.

## Resúmenes<!-- Riepiloghi -->

En esta pestaña es posible ejecutar el 'rollback' de la operación de registro de la devolución<!-- registrazione del rientro --> de conto lavoro, restaurando así la situación anterior a la propia operación.

Los datos en las cuadrículas inferiores, **Devoluciones<!-- Rientri -->** y **Registros<!-- Registrazioni -->**, corresponden al registro de descarga<!-- registrazione di scarico --> seleccionado en la cuadrícula superior (después de haber filtrado los datos).

*Botones específicos*:
> **Buscar<!-- Ricerca -->**: para buscar las devoluciones<!-- rientri --> descargadas. El resultado de este procedimiento se visualiza en la cuadrícula de resultados, *Descarga de devoluciones<!-- Scarico rientri -->*;    
> **Restaurar<!-- Ripristina -->**: Llama al procedimiento que realiza el rollback de toda la operación de registro de devoluciones<!-- registrazione rientri --> seleccionada en la cuadrícula *Descarga de devoluciones<!-- Scarico rientri -->*; por lo tanto, si con la misma operación de registro se han registrado varias devoluciones<!-- rientri -->, todas estas devoluciones<!-- rientri --> serán devueltas al estado de 'no cargados';  
> **Restaurar devoluciones<!-- Ripristina rientri -->**: llama al procedimiento que realiza el rollback del registro únicamente de las devoluciones<!-- rientri --> seleccionadas en la cuadrícula inferior, en la pestaña *Devoluciones<!-- Rientri -->*.