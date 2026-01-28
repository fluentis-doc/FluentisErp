---
title: Búsqueda de partidas
sidebar_position: 2


Esta pantalla permite buscar las partidas<!-- partite --> a través de los campos presentes en el encabezado, que representa el área de filtro para los datos que serán mostrados, y acceder a la edición de cada partida con un doble clic del ratón.

Campos adicionales útiles para el filtro de búsqueda están disponibles abriendo los **Expander** presentes en el encabezado.

Por defecto se proponen las partidas abiertas (ya que al abrir la pantalla, el campo **Estado** del filtro está rellenado con la opción Partida Abierta). Es posible visualizar todas las partidas simplemente eliminando el valor del campo filtro para no filtrar un tipo en particular.

Al realizar la búsqueda (comando **Buscar<!-- Ricerca -->** en la barra de herramientas) se mostrarán las partidas junto con toda la información relacionada.

**Para la descripción de los campos de detalle visualizados, consulte el [Glosario](/docs/guide/common/glossary/glossary-intro).**<!-- Per i campi di dettaglio visualizzati si rinvia al  [Glossario](/docs/guide/common/glossary/glossary-intro). -->

**CAMPOS ESPECÍFICOS DE CABECERA:**<!-- CAMPI SPECIFICI DI TESTATA: -->

**Partidas abiertas a fecha**: representa la fecha de referencia para considerar la partida como abierta (por ejemplo, hoy podría estar cerrada pero mostrándola a la fecha de ayer podría considerarse abierta ya que aún no había sido pagada). Para utilizar este campo elimine el estado Abierta del filtro principal **Estado**.

**Con efectos por vencer**: de forma análoga a los reportes del módulo, permite incluir también aquellas partidas que estarían cerradas pero que se han convertido en efectos activos (por ejemplo, recibo bancario) y por lo tanto siguen siendo interesantes porque aún no han sido cobradas definitivamente. Para utilizar este campo elimine el estado Abierta del filtro principal **Estado**.

**Mostrar Depósitos de garantía**: campo que permite visualizar los depósitos de garantía recaudados de los clientes. Estos ingresos particulares están representados por partidas que contienen el campo **Cuenta Depósito de Garantía<!-- Conto Cauzione -->** rellenado (en el formulario de gestión de partidas). Cuando se cierran mediante un registro contable de cobro, en la sección Libro Diario en lugar de mover normalmente la cuenta del cliente, se mueve la *Cuenta Depósito de Garantía<!-- Conto Cauzione -->* dentro de la partida que es cobrada.

En particular, para cada fila correspondiente a la partida hay un comando (+) que permite visualizar información adicional que inicialmente está oculta: se trata de los posibles pagos vinculados a partidas cerradas o parcialmente abiertas.

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image01.png)

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image02.png)

**CAMPOS ESPECÍFICOS DEL FORMULARIO EN CUESTIÓN:**<!-- CAMPI SPECIFICI PER LA FORM IN OGGETTO -->

**En pago**: indica que la partida<!-- partita --> ya se ha incluido en una orden de pago a proveedores, pero la orden de pago aún no está contabilizada y por lo tanto la partida<!-- partita --> no ha sido cerrada.

**Contab.**: indica que la partida<!-- partita --> está vinculada a un asiento contable<!-- registrazione contabile -->.

**No pagable**: indica que la partida<!-- partita --> ha sido bloqueada por el usuario para que no sea pagable. El bloqueo puede ser configurado directamente al momento de la creación o luego, y tanto desde la **[pestaña Partidas<!-- tab Partite -->](/docs/finance-area/ledger-records/records/ledger-record)** del asiento contable<!-- registrazione contabile --> que genera la partida<!-- partita -->, como editando la misma partida desde este formulario.

**Barra de herramientas (Ribbon Bar):**<!-- barra de herramientas -->

| Función | Significado |
| --- | --- |
| Buscar<!-- Ricerca --> | Inicia la búsqueda de partidas<!-- partite --> según los datos introducidos en el filtro |
| Nueva Partida | Permite insertar manualmente una nueva partida<!-- partita --> |
| Modificar partida | Accede al formulario de modificación de la partida<!-- partita --> seleccionada ("Gestión de partidas<!-- Gestione partite -->", como alternativa al doble clic sobre la fila a modificar) |
| Visualizar | Accede al formulario "Gestión de partidas<!-- Gestione partite -->" en modo solo lectura, no será posible guardar cambios |
| Eliminar partidas seleccionadas | Elimina la fila seleccionada |
| Eliminar pagos seleccionados | Permite eliminar los pagos vinculados a las partidas<!-- partite --> (visibles usando el botón + a la izquierda de las partidas<!-- partite -->) |
| Cambiar el estado de las partidas | Hace aparecer un formulario de búsqueda del estado de la partida<!-- posizione partita --> permitiendo asignar el estado seleccionado a la partida<!-- partita --> sin necesidad de acceder al formulario de modificación "Gestión de partidas<!-- Gestione partite -->" |
| Actualizar estado de las partidas | Realiza una actualización (refresh) del estado de las partidas<!-- partite --> para una correcta visualización. |
| Subdivisión de partidas | Abre una ventana emergente que permite subdividir la partida<!-- partita --> seleccionada en varias partidas<!-- partite --> con el importe y vencimiento deseados. **Claramente la suma de las partidas<!-- partite --> resultantes debe coincidir con el importe de la partida<!-- partita --> de origen.** El importe de la partida<!-- partita --> inicial se propone en el campo **Subdividir,** y en ese momento se deben introducir en las filas de la tabla los **importes** y las **fechas de vencimiento** de las partidas<!-- partite --> resultantes (por ejemplo, de una desea generar dos o tres) y el programa llevará a cabo la operación automáticamente. |
| Modificar asiento | Permite acceder directamente a la edición del asiento contable<!-- registrazione contabile --> vinculado a la partida<!-- partita --> seleccionada. Si la partida<!-- partita --> seleccionada no está vinculada a un asiento contable<!-- registrazione contabile -->, el botón estará deshabilitado. |

:::tip[NOTA: Actualizar estado de las partidas<!-- NOTA: Aggiorna lo stato delle partite -->]
A partir de las versiones Fluentis2021 y posteriores, ya no existen triggers ni procedimientos almacenados que realicen procedimientos de cálculo o recálculo. Uno de estos procedimientos realizados a nivel de base de datos era el recálculo automático del estado de las partidas<!-- partite -->, en particular para marcar la partida<!-- partita --> como **Vencida<!-- Scaduta -->** en lugar de la genérica partida Abierta<!-- partita Aperta -->. Por lo tanto, es necesario utilizar el botón Actualizar estado de las partidas<!-- Aggiorna lo stato delle partite --> para realizar el recálculo del estado y la correcta visualización de partidas<!-- partite --> (que no han sido afectadas por ningún pago, ni siquiera parcial, lo cual actualizaría su estado) vencidas.

Se recuerda que si desea ignorar el estado *Vencido<!-- Scaduto -->* a efectos de filtro, es posible utilizar los filtros en la cabecera del formulario para fecha de vencimiento obteniendo el mismo resultado.

Para los usuarios que disponen de la herramienta ***Supervisor***, se puede habilitar la tarea código FI_MaturitiesOverdueStatusFix
que establece el estado *Vencido<!-- Scaduto -->* en partidas<!-- partite --> con saldo != 0 y fecha de vencimiento < hoy
:::
