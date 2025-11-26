---
title: Gestión de partidas
sidebar_position: 1
ai_generated: true
---

Este formulario solo es accesible desde el formulario **Partidas<!-- Partite -->** (Administración<!-- Amministrazione --> > Partidas<!-- Partite --> > Partidas<!-- Partite -->).

El acceso se realiza de dos maneras:

 1. A través del comando *Nueva partida<!-- Nuova partita -->*
 2. Haciendo doble clic con el mouse en una partida<!-- partita --> presente en la cuadrícula principal del formulario de *Búsqueda de partidas<!-- Ricerca partite -->* o seleccionando la fila y utilizando el comando Modificar partida<!-- Modifica partita --> en la ribbon bar.

Desde esta posición es posible:

- insertar manualmente una nueva partida<!-- partita --> (sin que sea generada por un asiento contable<!-- scrittura contabile -->)

- modificar los datos de una partida<!-- partita --> preexistente.

En particular, típicamente, desde esta posición se puede agregar o quitar el bloqueo de la partida<!-- partita --> para el pago activando o desactivando el flag correspondiente:

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image01.png) 

agregando el flag para bloquear (el programa agregará automáticamente la fecha y el usuario que realizó el bloqueo)

o quitándolo para desbloquear (en ese momento también aparecerá el usuario que realizó el desbloqueo). 

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image02.png)

**Subcuenta de pag.<!-- Sottoconto di pagam. -->**: esta subcuenta<!-- sottoconto --> se asocia a las partidas<!-- partite --> creadas, para poder verificar la canalización de los pagos/cobros en los listados de vencimientos<!-- scadenziari --> y en las simulaciones de cash flow; por lo tanto, se completará ingresando la cuenta bancaria<!-- conto bancario --> de la empresa en uso. El campo se completará automáticamente, para las partidas<!-- partite --> creadas desde asientos contables<!-- registrazioni contabili -->, si en la ** [ficha del proveedor](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance) ** está completo el campo correspondiente.<!-- anagrafica del fornitore -->

**Agente**: el campo se completa automáticamente para las partidas<!-- partite --> generadas por contabilización automática de facturas de venta que tengan asociado un agente a la misma. Esta información es útil para filtrar las partidas<!-- partite --> en el formulario de búsqueda y en los reportes donde dicho campo está presente.

**Fecha prevista<!-- Data Prevista -->**: este campo puede completarse para soportar el procesamiento del ** [Cash Flow](/docs/treasury/cash-flow/cash-flow/cash-flow-management) ** (funcionalidad presente en el área de tesorería<!-- area tesoreria -->). Por lo tanto, se puede indicar una fecha prevista de cobro o de pago que difiere de la fecha de vencimiento<!-- data scadenza --> de la partida<!-- partita --> y que será reportada en los procesos de cash flow (véanse los detalles allí). En particular, se recuerda que, en ausencia de una indicación particular definida en este campo, la fecha prevista se valorizará en la elaboración del cash flow sumando, a partir de la fecha de vencimiento<!-- data scadenza -->, el dato (si está presente) contenido en el campo **Días de retraso<!-- Giorni di Ritardo -->** presente en la ficha<!-- anagrafica --> del cliente o proveedor.

Para los demás campos ver el ** [Glosario](/docs/guide/common/glossary/glossary-intro) ** y consulte las instrucciones relativas a la ** [Pestaña Partidas<!-- Tab Partite --> en el Asiento contable<!-- Registrazione contabile -->](/docs/finance-area/ledger-records/records/ledger-record) **.

**NOTA:**

Generalmente la inserción manual de partidas<!-- partite --> es una operación poco común ya que las partidas<!-- partite --> se crean mediante asientos contables<!-- registrazioni contabili -->. Puede hacerse, por ejemplo, para ingresar manualmente algunas partidas abiertas<!-- partite aperte --> derivadas de la transferencia de datos desde un sistema de gestión anterior (como alternativa a las funcionalidades de importación masiva) o por otras motivaciones particulares.

Si, en paralelo, por ejemplo, se inserta un asiento contable<!-- scrittura contabile --> de apertura de saldo de cliente o proveedor, desde el formulario en cuestión es posible vincular el asiento contable<!-- scrittura contabile --> mediante el comando correspondiente presente en la ribbon bar, descrito más abajo.

## Partidas agrupadas<!-- Partite raggruppate -->

Desde el formulario en comentario también es posible realizar una especie de "agrupamiento" de partidas<!-- accorpamento delle partite -->. Es decir, a la partida<!-- partita --> que se está modificando, se pueden agrupar otras partidas<!-- partite --> (incluso que no pertenezcan al mismo sujeto). El comando está en la ribbon bar. **Agregar partidas a agrupar<!-- Aggiungi partite da raggruppare -->**.

El resultado será que:

- las partidas<!-- partite accorpate --> agrupadas ya no serán visibles en el formulario de búsqueda de partidas<!-- form di ricerca partite -->

- la partida<!-- partita --> en modificación asumirá como valor la suma de su valor más el de las partidas agrupadas<!-- partite accorpate -->

- el detalle de las partidas<!-- partie --> que han sido agrupadas a la que está en modificación aparecerá en la cuadrícula correspondiente.

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image03.png)

**Para ejecutar la adición de partidas<!-- partite --> a agrupar utilice el comando Agregar partidas a agrupar<!-- Aggiungi partite da raggruppare --> presente en la ribbon bar.**

*Botones específicos*
> **Agregar partidas a agrupar<!-- Aggiungi partite da raggruppare -->**: permite seleccionar otras partidas<!-- partite --> que se agruparán a la partida<!-- partita --> en edición;  
> **Eliminar partidas agrupadas<!-- Cancella partite da raggruppare -->**: elimina la partida<!-- partita --> seleccionada de la cuadrícula 'Partidas agrupadas<!-- Partite raggruppate -->' restableciendo su autonomía respecto a la partida<!-- partita --> en edición (que es la única visible a diferencia de las agrupadas);  
> **Crear desde partidas/pagos<!-- Crea da partite / pagamenti -->**: permite crear una partida<!-- partita --> a partir de un pago<!-- pagamento -->. Útil para operaciones de ajuste o compensación. El comando hace aparecer un formulario de búsqueda de los pagos<!-- pagamenti --> a partir de los cuales crear la partida<!-- partita -->. Normalmente se utiliza justo después de haber creado manualmente una partida<!-- nuova partita --> desde el formulario de búsqueda de partidas<!-- form di ricerca partite -->;  
> **Vincular asientos<!-- Collegamento registrazioni -->**: permite vincular la partida<!-- partita --> en edición a un asiento contable<!-- registrazione contabile --> (útil si la partida<!-- partita --> se ha creado manualmente).

## Pagos vinculados<!-- Pagamenti collegati -->

## Datos Extra<!-- Extra Data -->

Se muestra la lista de datos extra<!-- Extra data --> vinculados, con la posibilidad de agregar nuevos datos extra<!-- extra data --> útiles solo para el documento en cuestión, y mediante el flag correspondiente, elegir cuáles imprimir.