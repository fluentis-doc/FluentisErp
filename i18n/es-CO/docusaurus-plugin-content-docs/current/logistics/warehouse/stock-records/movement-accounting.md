---
title: contabilizzazione movimenti
sidebar_position: 4
---

:::note Nota
El formulario de **contabilizzazione movimenti** es utilizado en las localizaciones de Rumanía y Croacia.
:::

El procedimiento se abre a través del menú **Logística > Registros > title: contabilizzazione movimenti**.  
Este formulario permite la contabilización de los registros de almacén en el libro mayor. La ventana consta de dos pestañas, Contabilización del libro mayor y Registro contable, ambas con área de filtro y resultados de la cuadrícula.

## **movimenti contabili**

Después de haber configurado todos los filtros deseados, basta con hacer clic en el botón Buscar para visualizar los resultados, es decir, la lista de Registros de almacén dentro de la cuadrícula de resultados.  
Para contabilizar un registro, simplemente seleccionarlo y hacer clic en el botón Crear Registro, y es posible registrar uno o más registros dependiendo de las necesidades y preferencias del usuario. El campo Datos contables y el indicador Datos contables son iguales a la fecha de ingreso de las existencias y permiten seleccionar la fecha de contabilización deseada.

La cuadrícula de resultados está compuesta por los siguientes campos:  
**magazzino**: el campo muestra el código del almacén en el que se generó el registro;  
**causale**: el campo muestra el código de la causa de almacén utilizado para el movimiento y, por lo tanto, insertado en el encabezado del registro;  
**data**: el campo muestra la fecha de ingreso del registro de almacén;  
**numero**: el campo muestra el número progresivo del registro de almacén;  
**doc. di riferimento**: el campo muestra lo que está presente en el campo *Doc. de referencia* en el encabezado del registro;  
**data documento**: el campo muestra la fecha del documento relacionado presente en el encabezado del registro;  
**Carga / Descarga (Carico / Scarico)**: el campo muestra el tipo de registro, que puede ser solo carga o descarga;  
**magazzino di destinazione**: el campo muestra el código del almacén de destino, si está presente;  
**Modelo del almacén de destino (Modello del magazzino di destinazione)**: el campo muestra el código identificativo del almacén de destino, si está presente;  
**Número del almacén de destino (Numero del magazzino di destinazione)**: el campo muestra el número progresivo del registro del almacén de destino, si está presente;  
**Documento de referencia del almacén de destino (Documento di riferimento del magazzino di destinazione)**: el campo muestra lo que está presente en el campo *Documento de referencia* en el encabezado del registro del almacén de destino, si está presente;  
**descrizione conto**: el campo muestra la descripción de la cuenta del contacto, dependiendo de si se trata de una débito o crédito.  

## **registrazione contabile**

Como segunda pestaña, está la pestaña Registro contable que se puede utilizar para filtrar, visualizar y anular las operaciones.  
Los datos en las tablas siguientes, **Documentos y Registro contable / Errores**, corresponden a la contabilización seleccionada en la tabla superior **Contabilización** (después de haber filtrado los datos).  
Además, en estas dos últimas tablas, existe la posibilidad de visualizar el registro de almacén o el registro principal correspondiente haciendo doble clic en la fila deseada en la tabla correspondiente. La pestaña Errores muestra cualquier error que haya ocurrido durante la contabilización de los registros.  

*Botones específicos*:  
> **ricerca contabilizzazione**: permite buscar los registros de almacén contabilizados;  
> **rollback contabilizzazione**: permite deshacer toda la operación, es decir, en caso de creación de varios registros contables simultáneamente, elimina todos los registros;  
> **rollback registrazione magazzino**: permite deshacer el movimiento de almacén seleccionado dentro de la pestaña Documentos.  

La cuadrícula de resultados de **Documentos** contiene los siguientes campos principales:  
**magazzino**: el campo muestra el código del almacén en el que se generó el registro;  
**Causa de almacén (Causale di magazzino)**: el campo muestra el código de la causa de almacén utilizado para el movimiento y que por esta razón se insertó en el encabezado del registro;  
**data contabilizzazione**: el campo muestra la fecha de contabilización del registro de almacén;  
**no. movimento**: el campo muestra el número progresivo del registro de almacén;  
**documento**: el campo muestra lo que está presente en el campo *Doc. de riferimento* en el encabezado del registro;  
**data del documento**: el campo muestra la fecha del *Doc. de riferimento* presente en el encabezado del registro;  
**Carga / Descarga (Carico / Scarico)**: el campo muestra el tipo de movimiento, puede ser solo carga o descarga;  
**numero documento**: el campo muestra el número del documento;  
**conto**: el campo muestra la cuenta del socio;  
**sottoconto**: el campo muestra la subcuenta;  
**Descripción cuenta / Subcuenta (Descrizione conto / Sottoconto)**: el campo muestra la descripción detallada de la cuenta / nombre del socio.  

La cuadrícula de resultados de **Registro contable** contiene los siguientes campos principales:  
**data di registrazione**: la columna muestra la fecha de ingreso en el registro principal;  
**numero registrazione**: la columna muestra el número de registro en el registro principal;  
**causale**: la columna muestra el nombre abreviado del modelo para la contabilización;  
**descrizione causale**: la columna muestra el nombre completo de la causa para la contabilización;  
**numero del documento**: la columna muestra el número del documento;  
**conto**: la columna muestra la cuenta en el registro principal;  
**sottoconto**: la columna muestra la subcuenta en el registro principal;  
**descrizione**: la columna muestra el nombre de la cuenta en el registro principal;  
**dettaglio conto**: la columna muestra los detalles del movimiento;  
**descrizione movimento**: la columna muestra la descripción de la modificación;  
**utente**: la columna muestra el usuario que creó el registro;  
**importo valuta**: la columna muestra el importe en moneda;  
**importo dare**: la columna muestra el saldo deudor;  
**apertura avere**: la columna muestra el saldo acreedor.