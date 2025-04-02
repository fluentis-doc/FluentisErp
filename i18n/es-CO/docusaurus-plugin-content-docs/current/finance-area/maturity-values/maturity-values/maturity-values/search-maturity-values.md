---
title: ricerca partite
sidebar_position: 2
---

Esta máscara permite buscar las partidas a través de los campos presentes en el encabezado, que representan el área de filtro para los datos que se propondrán, y acceder a la modificación de cada partida con un doble clic del mouse.

Campos adicionales útiles para el filtro de búsqueda están disponibles al abrir los **Expander** presentes en el encabezado. ![](/img/it-it/finance-area/maturity-values/maturity-values/image03.png)

Por defecto, se proponen las partidas abiertas (estando al abrir la máscara completado el campo **stato** del filtro con la opción Partida Abierta). Es posible visualizar todas las partidas simplemente eliminando el valor en el campo del filtro de modo que no filtre un tipo en particular.

Al ejecutar la búsqueda (comando **ricerca** en la Ribbon Bar), se mostrarán las partidas con toda la información relacionada.

**Para los campos de detalle mostrados se remite al [Glosario](/docs/guide/common/glossary/glossary-intro).**

**CAMPOS ESPECÍFICOS DEL ENCABEZADO:**

**partite aperte al**: representa la fecha de referencia a la cual considerar abierta la partida (por ejemplo, hoy podría estar cerrada, pero representándola a la fecha de ayer podría considerarse abierta ya que no se había pagado aún). Para utilizar este campo, quite el estado Abierta del filtro principal **stato**.

**con effetti a scadere**: de manera similar a las impresiones del módulo, permite incluir también aquellas partidas que estarían cerradas pero han sido transformadas en efectos activos (ej. RiBa) y, por lo tanto, son relevantes ya que no han sido cobradas definitivamente. Para utilizar este campo, quite el estado Abierta del filtro principal **stato**.

**mostra cauzioni**: campo que hace visibles los depósitos de fianza cobrados de los clientes. Estos ingresos particulares están representados por partidas que incluyen en su interior (en el formulario de gestión de partidas, el campo **conto cauzione** completado). Cuando se cierran mediante un registro contable de cobranza, en la sección Libro diario, en lugar de ser un movimiento habitual del cliente, se mueve el *Cuenta de Fianza* presente dentro de la partida que se está cobrando.

En particular, para cada línea correspondiente a la partida, hay un comando (+) que permite visualizar información adicional que inicialmente está oculta: se trata de los posibles pagos asociados a la partida cerrada o parcialmente abierta.

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image01.png)

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image02.png)

**CAMPOS ESPECÍFICOS PARA EL FORMULARIO EN CUESTIÓN:**

**in pagamento**: indica que la partida ya ha sido incluida en un listado de pago a proveedores, pero el listado de pago no ha sido contabilizado y, por lo tanto, el cierre de la partida aún no se ha realizado.

**contab.**: indica que la partida está vinculada a un registro contable.

**non pagabile**: indica que la partida ha sido bloqueada por el usuario para que no sea pagable. El bloqueo puede establecerse directamente al momento de la creación o posteriormente tanto desde la **[pestaña Partidas (tab Partite)](/docs/finance-area/ledger-records/records/ledger-record)** del registro contable que genera la partida, como accediendo a la modificación de la propia partida desde el formulario comentado.

**Ribbon bar:**

| Función (Funzione) | Significado |
| --- | --- |
| Búsqueda (Ricerca) | Inicia la búsqueda de partidas según los datos ingresados en el filtro |
| Nueva Partida (Nuova Partita) | Permite ingresar una nueva partida manualmente |
| Modificar partida (Modifica partita) | Accede al formulario de modificación de la partida seleccionada 'Gestión de partidas' (como alternativa al doble clic sobre la fila a modificar) |
| Visualizar (Visualizza) | Accede al formulario 'Gestión de partidas' en modo de solo visualización, no será posible guardar cambios |
| Eliminar partidas seleccionadas (Cancella partite selezionate) | Elimina la fila seleccionada |
| Eliminar pagos seleccionados (Cancella pagamenti selezionati) | Permite eliminar los pagos asociados a las partidas (visibles a través del botón + a la izquierda de las partidas) |
| Cambiar la posición de las partidas (Cambia la posizione partite) | Hace aparecer un formulario de búsqueda de la posición de la partida permitiendo atribuir el estado seleccionado a la partida sin necesidad de acceder al formulario de modificación 'Gestión de partidas' |
| Actualizar el estado de las partidas (Aggiorna lo stato delle partite) | Realiza un refresco del estado de las partidas para una correcta visualización. |
| División de partidas (Suddivisione partite) | Abre un formulario emergente que permite dividir la partida seleccionada en varias partidas de importe y fecha de vencimiento deseados. **Claramente, la suma de las partidas resultantes debe coincidir con el importe de la partida de inicio.** El importe de la partida inicial se propone en el campo **suddividi**; en este punto, se deben ingresar en las filas de la cuadrícula los **importes** y las **fechas de vencimiento** de las partidas resultantes (por ejemplo, de una se quieren hacer dos o tres) y el programa se encargará de realizar la operación automáticamente. |
| Modificar registro (Modifica registrazione) | Permite acceder directamente a la modificación del registro contable vinculado a la partida seleccionada. Si la partida seleccionada no está vinculada a un registro contable, el botón estará deshabilitado. |

:::tip[NOTA: Actualizar el estado de las partidas]
Desde las versiones Fluentis2021 en adelante, ya no están presentes los triggers y stored procedures que ejecutan procedimientos de cálculo o recálculo. Uno de estos procedimientos ejecutados a nivel de base de datos era el recálculo automático del estado de las partidas, particularmente típicamente la partida **Vencida (Scaduta)** en lugar de la genérica partida Abierta. Por lo tanto, es necesario utilizar el botón Actualizar el estado de las partidas para realizar el recálculo del estado y la correcta visualización de partidas (no movidas por ningún pago, incluso parcial, el cual las actualizaría en el estado) vencidas.

Se recuerda que si se desea ignorar el estado *scaduto* para fines de filtro, es posible utilizar los filtros en el encabezado del formulario por fecha de vencimiento obteniendo el mismo resultado.

Para los usuarios que disponen de la herramienta ***Supervisor***, es posible habilitar la tarea código FI_MaturitiesOverdueStatusFix que establece el estado *scaduto* en partidas con saldo != 0 y fecha de vencimiento < hoy.
:::