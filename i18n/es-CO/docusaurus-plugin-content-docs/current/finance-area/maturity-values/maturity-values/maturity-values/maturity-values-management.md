---
title: gestione partite
sidebar_position: 1
---

Este formulario es accesible solo desde el formulario **partite** (Administración > Partite > Partite).

El acceso se realiza de dos maneras:

 1. A través del comando *nuova partita*
 2. Haciendo doble clic con el mouse en una partida presente en la cuadrícula principal del formulario de *ricerca partite* o seleccionando la fila y utilizando el comando Modificar partida en la barra de ribbon.

Desde esta posición es posible:

- insertar una nueva partida manualmente (sin que sea generada por un asiento contable)

- modificar los datos de una partida preexistente.

En particular, típicamente, desde esta posición se puede agregar o quitar el bloqueo de la partida para el pago actuando sobre el indicador correspondiente:

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image01.png) 

agregando el indicador para bloquear (el programa agregará automáticamente la fecha y el usuario que ha bloqueado)

o quitándolo para desbloquear (en este punto también aparecerá el usuario que ha desbloqueado). 

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image02.png)

**Subcuenta de pago (Sottoconto di pagam.)**: esta subcuenta se asocia a las partidas creadas, con el fin de poder verificar la canalización de los pagos/entradas en las impresiones de los vencimientos y en las simulaciones de flujo de caja; se completará ingresando la cuenta bancaria de la empresa en uso. El campo se completará automáticamente, para las partidas creadas a partir de registros contables, si en la **[anagrafía del proveedor (anagrafica del fornitore)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)** se ha completado el campo correspondiente.

**agente**: el campo se completa automáticamente para las partidas generadas por la contabilización automática de facturas de venta, indicando al agente vinculado a la factura misma. Esta información es útil para filtrar las partidas en el formulario de búsqueda y en las impresiones donde el campo está presente.

**data prevista**: este campo puede ser completado para apoyar la elaboración del **[Flujo de Caja (Cash Flow)](/docs/treasury/cash-flow/cash-flow/cash-flow-management)** (funcionalidad presente en el área de tesorería). Se puede indicar una fecha prevista de entrada o pago que difiera de la fecha de vencimiento de la partida y que se reflejará en las elaboraciones para el flujo de caja (a las cuales se remite). En particular, se recuerda que en ausencia de una indicación particular definida en el campo en comentario, la fecha prevista se valorará en la elaboración del flujo de caja, a partir de la fecha de vencimiento, sumando el dato (si está presente) contenido en el campo **giorni di ritardo** presente en la anagrafía del cliente o proveedor.

Para otros campos, consultar el **[Glosario (Glossario)](/docs/guide/common/glossary/glossary-intro)** y hacer referencia a las instrucciones relacionadas con la **[Pestaña Partidas en el Registro Contable (Tab Partite nella Registrazione contabile)](/docs/finance-area/ledger-records/records/ledger-record)**.

**NOTA:**

Generalmente, la inserción manual de partidas es una operación no ordinaria ya que las partidas surgen a través de los registros contables. Puede realizarse, por ejemplo, para introducir manualmente algunas partidas abiertas derivadas de la transferencia de datos de un sistema de gestión anterior (como alternativa a las funcionalidades de importación masiva) o por otras razones particulares.

Si, paralelamente, por ejemplo, se introduce un asiento contable de apertura de saldo de cliente o proveedor, desde la máscara en comentario se puede vincular el asiento contable a través del comando correspondiente presente en la barra de ribbon y más abajo descrito.

## Partidas agrupadas (Partite raggruppate)

 Desde el formulario en comentario también es posible realizar una especie de "agrupamiento" de las partidas. Es decir, a la partida actualmente en modificación se le puede agrupar otras partidas (también no tituladas al mismo sujeto). El comando está ubicado en la barra de ribbon. **aggiungi partite da raggruppare**.

El resultado será que:

- las partidas agrupadas ya no serán visibles en el formulario de búsqueda de partidas

- la partida en modificación asumirá como valor el total de su valor más el de las partidas agrupadas

- el detalle de las partidas que han sido agrupadas a la que se está modificando aparecerá en la cuadrícula en comentario.

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image03.png)

**Para realizar la adición de las partidas que serán agrupadas, utilizar el comando Agregar partidas a agrupar presente en la barra de ribbon.**

*Botones específicos*
> **aggiungi partite da raggruppare**: permite seleccionar otras partidas que serán agrupadas a la partida en modificación;  
> **cancella partite da raggruppare**: elimina la partida seleccionada de la cuadrícula 'Partidas agrupadas' restableciendo su autonomía respecto a la partida en modificación (que es la única visible respecto a las agrupadas);  
> **Crear desde partidas/pagos (Crea da partite / pagamenti)**: permite crear una partida a partir de un pago. Útil para operaciones de alineación de diferencias o compensaciones. El comando hace aparecer un formulario de búsqueda de los pagos desde los cuales crear la partida. Generalmente se realiza inmediatamente después de haber creado manualmente una nueva partida desde el formulario de búsqueda de partidas;  
> **collegamento registrazioni**: permite vincular la partida en modificación a un registro contable (útil si la partida fue creada manualmente).

## Pagos vinculados (Pagamenti collegati)

## Datos adicionales (Extra Data)

Se muestra la lista de datos adicionales vinculados, con la posibilidad de agregar nuevos datos adicionales útiles solo para el documento en cuestión, con la opción a través del indicador correspondiente, de elegir qué datos adicionales imprimir.