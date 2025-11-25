---
title: Contabilización de movimientos
sidebar_position: 4
ai_generated: true
---

:::note Nota<!-- Nota -->
El formulario de **Contabilización de movimientos<!-- Contabilizzazione movimenti -->** se utiliza en las localizaciones de Rumania y Croacia.
:::

El procedimiento se abre a través del menú **Logística > Registros > title: Contabilización de movimientos<!-- Logistica > Registrazioni > title: Contabilizzazione movimenti -->**.     
Este formulario permite la contabilización de los registros de almacén<!-- magazzino --> en el libro mayor. La ventana está compuesta por dos pestañas, Contabilización libro mayor y Registro contable, ambas con área de filtro y resultados en la cuadrícula.

## **Movimientos Contables**<!-- Movimenti Contabili -->

Después de configurar todos los filtros deseados, solo es necesario hacer clic en el botón Buscar para visualizar los resultados, es decir, la lista de registros de almacén<!-- Registri di magazzino --> en la cuadrícula de resultados.
Para contabilizar un registro, basta con seleccionarlo y hacer clic en el botón Crear Registro, y es posible registrar uno o más registros según las necesidades y preferencias del usuario. El campo Datos contables y la bandera Datos contables son iguales a la fecha de inserción de existencias y permiten la selección de la fecha de contabilización deseada.

La cuadrícula de resultados está compuesta por los siguientes campos:     
**Almacén<!-- Magazzino -->**: el campo muestra el código del almacén<!-- magazzino --> en el que se generó el registro;      
**Causal<!-- Causale -->**: el campo muestra el código de la causal<!-- causale --> de almacén<!-- magazzino --> utilizada para el movimiento<!-- movimento --> y por tanto insertada en el encabezado del registro;      
**Fecha<!-- Data -->**: el campo muestra la fecha de inserción del registro de almacén<!-- magazzino -->;     
**Número<!-- Numero -->**: el campo muestra el número progresivo del registro de almacén<!-- magazzino -->;     
**Doc. de referencia<!-- Doc. di riferimento -->**: el campo muestra lo que está presente en el campo *Doc. de referencia<!-- Doc. di riferimento -->* en el encabezado del registro;      
**Fecha del documento<!-- Data documento -->**: el campo muestra la fecha del documento relacionado presente en el encabezado del registro;      
**Entrada / Salida<!-- Carico / Scarico -->**: el campo muestra el tipo de registro, que puede ser solo entrada o salida;      
**Almacén de destino<!-- Magazzino di destinazione -->**: el campo muestra el código del almacén de destino<!-- magazzino di destinazione -->, si existe;      
**Modelo del almacén de destino<!-- Modello del magazzino di destinazione -->**: el campo muestra el código identificativo del almacén de destino<!-- magazzino di destinazione -->, si existe;      
**Número del almacén de destino<!-- Numero del magazzino di destinazione -->**: el campo muestra el número progresivo del registro del almacén de destino<!-- magazzino di destinazione -->, si existe;      
**Documento de referencia del almacén de destino<!-- Documento di riferimento del magazzino di destinazione -->**: el campo muestra lo que está presente en el campo *Documento de referencia<!-- Documento di riferimento -->* del encabezado del registro del almacén de destino, si existe;      
**Descripción de la cuenta<!-- Descrizione conto -->**: el campo muestra la descripción de la cuenta<!-- conto --> del contacto dependiendo de si se trata de débito o crédito.     

## **Registro contable**<!-- Registrazione contabile -->

Como segunda pestaña, está la pestaña Registro contable de devolución y se puede utilizar para filtrar, visualizar y anular las operaciones.      
Los datos en las siguientes tablas, **Documentos y Registro contable / Errores**, corresponden a la contabilización seleccionada en la tabla superior **Contabilización** (después de filtrar los datos).      
Además, en estas dos últimas tablas, existe la posibilidad de visualizar el registro de almacén<!-- magazzino --> o el registro principal correspondiente haciendo doble clic en la fila deseada en la tabla correspondiente. La pestaña Errores muestra cualquier error ocurrido durante la contabilización de los registros.     

*Botones específicos*:
> **Buscar contabilización<!-- Ricerca contabilizzazione -->**: permite buscar los registros de almacén<!-- registri di magazzino --> contabilizados;     
> **Reversión de contabilización<!-- Rollback contabilizzazione -->**: permite anular toda la operación, es decir, en caso de crear varios registros contables simultáneamente, elimina todos los registros;     
> **Reversión de registro de almacén<!-- Rollback registrazione magazzino -->**: permite anular el movimiento de almacén<!-- movimento di magazzino --> seleccionado dentro de la pestaña Documentos.     

La cuadrícula de resultados de **Documentos** contiene los siguientes campos principales:     
**Almacén<!-- Magazzino -->**: el campo muestra el código del almacén<!-- magazzino --> en el que se generó el registro;     
**Causal de almacén<!-- Causale di magazzino -->**: el campo muestra el código de la causal<!-- causale --> de almacén<!-- magazzino --> utilizada para el movimiento<!-- movimento --> y por tanto se ha insertado en el encabezado del registro;     
**Fecha de contabilización<!-- Data contabilizzazione -->**: el campo muestra la fecha de contabilización del registro de almacén<!-- magazzino -->;     
**N.º de movimiento<!-- No. movimento -->**: el campo muestra el número progresivo del registro de almacén<!-- magazzino -->;     
**Documento**: el campo muestra lo que está presente en el campo *Doc. de referencia<!-- Doc. di riferimento -->* del encabezado del registro;     
**Fecha del documento<!-- Data del documento -->**: el campo muestra la fecha del *Doc. de referencia<!-- Doc. di riferimento -->* presente en el encabezado del registro;     
**Entrada / Salida<!-- Carico / Scarico -->**: el campo muestra el tipo de movimiento<!-- movimento -->, puede ser solo entrada o salida;     
**Número de documento<!-- Numero documento -->**: el campo muestra el número del documento;     
**Cuenta<!-- Conto -->**: el campo muestra la cuenta<!-- conto --> del socio;     
**Subcuenta<!-- Sottoconto -->**: el campo muestra la subcuenta<!-- sottoconto -->;     
**Descripción de cuenta / Subcuenta<!-- Descrizione conto / Sottoconto -->**: el campo muestra la descripción detallada de la cuenta<!-- conto --> / nombre del socio.     

La cuadrícula de resultados del **Registro contable** contiene los siguientes campos principales:     
**Fecha de registro<!-- Data di registrazione -->**: la columna muestra la fecha de inserción en el registro principal;     
**Número de registro<!-- Numero registrazione -->**: la columna muestra el número de registro en el registro principal;     
**Causal<!-- Causale -->**: la columna muestra el nombre abreviado del modelo para el registro contable;     
**Descripción de causal<!-- Descrizione causale -->**: la columna muestra el nombre completo de la causal para el registro contable;     
**Número del documento<!-- Numero del documento -->**: la columna muestra el número del documento;     
**Cuenta<!-- Conto -->**: la columna muestra la cuenta<!-- conto --> en el registro principal;     
**Subcuenta<!-- Sottoconto -->**: la columna muestra la subcuenta<!-- sottoconto --> en el registro principal;     
**Descripción<!-- Descrizione -->**: la columna muestra el nombre de la cuenta<!-- conto --> en el registro principal;     
**Detalle de la cuenta<!-- Dettaglio conto -->**: la columna muestra los detalles del movimiento<!-- movimento -->;     
**Descripción del movimiento<!-- Descrizione movimento -->**: la columna muestra la descripción del cambio;     
**Usuario<!-- Utente -->**: la columna muestra el usuario que ha creado el registro;     
**Importe en moneda<!-- Importo valuta -->**: la columna muestra el importe en moneda;     
**Importe al debe<!-- Importo dare -->**: la columna muestra el saldo deudor;     
**Saldo acreedor<!-- Apertura avere -->**: la columna muestra el saldo acreedor.