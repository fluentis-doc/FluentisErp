---
title: Adquisición de efectos desde partidas
sidebar_position: 2
ai_generated: true
---

El formulario<!-- form --> se encuentra en Tesorería > Cartera de Efectos > Procedimientos > Adquisición de efectos desde partidas<!-- Acquisizione effetti dalle partite -->.

Desde este formulario es posible ejecutar un *asistente* que realiza simultáneamente:

- La búsqueda de las partidas<!-- partite --> abiertas de los clientes aptas para la creación de efectos<!-- effetti --> (por ejemplo, un recibo bancario).
- La creación del efecto<!-- effetto --> (por ejemplo, un recibo bancario) leyendo los datos de la partida<!-- partita -->.
- La contabilización del efecto<!-- effetto --> que, a su vez, cierra la partida<!-- partita --> y crea el asiento contable<!-- scrittura contabile --> de reversión del crédito del cliente y abono en la cuenta<!-- conto --> asociada al tipo de efecto<!-- tipologia di effetto --> utilizado.

## Cómo crear un nuevo efecto automáticamente desde partidas abiertas<!-- Come creare un nuovo effetto automaticamente dalle partite aperte -->

1. Utiliza la parte superior de la pantalla para filtrar la búsqueda de partidas<!-- partite --> abiertas a transformar en efectos<!-- effetti --> (por ejemplo, recibos bancarios o letras de cambio).

:::note[Nota]
En la parte inferior de la zona de filtro hay algunos indicadores de búsqueda:

- según la configuración del [**agrupamiento de vencimientos**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments) de los registros de clientes; por defecto están activos y por tanto son visibles ambos grupos, con y sin agrupamiento de vencimientos en los efectos<!-- effetti -->.
- Para visualizar también las partidas<!-- partite --> activas de los proveedores (desactivada por defecto) además de las de clientes (activada por defecto).
:::

:::tip[Atención]
En esta sección se muestran **ÚNICAMENTE** las partidas<!-- partite --> contables vinculadas a tipos de pago de naturaleza recibo bancario o letra de cambio.

Este es un filtro previo, activo por seguridad, que se puede gestionar desde la tabla [**Tipos de pago**](/docs/configurations/tables/general-settings/payment-types) asociando a cada tipo de pago el correspondiente tipo de efecto<!-- tipo effetto -->.
:::

2. Selecciona con el ratón desde la cuadrícula central las partidas<!-- partite --> que deseas adquirir en los efectos<!-- effetti -->. Según la configuración del indicador *Agrupa vencimientos / Agrupa notas de crédito en efectos<!-- effetti -->*, presente en los [**registros de clientes**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), y el indicador *Agrupa notas de crédito por fecha de vencimiento*, presente en los [**parámetros de la cartera de efectos**](/docs/configurations/parameters/treasury/bills-portfolio-parameters), las partidas<!-- partite --> se agruparán (**siempre que coincida banco y fecha de vencimiento**) o, en caso contrario, crearán efectos<!-- effetti --> distintos en cada caso.

3. En la parte inferior de la pantalla, configura la **fecha de emisión** de los efectos<!-- effetti --> y el **tipo de efecto<!-- tipo effetto -->**.

La sección de **contabilización** se puede configurar por defecto dentro de los parámetros del módulo Cartera de efectos. No obstante, se puede activar o desactivar desde aquí, antes de proceder a lanzar la adquisición.

El procedimiento de contabilización, si no se activa simultáneamente durante la creación en este formulario, se puede ejecutar posteriormente [**desde el formulario específico**](/docs/treasury/bills-holding/accounting/bills-accounting). El asiento contable<!-- scrittura contabile --> generado anulará el crédito con el cliente, cerrando la correspondiente partida<!-- partita --> abierta y abonando la cuenta<!-- conto --> relativa al [**tipo de efecto**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types) seleccionado.

El indicador  **agrupa por cuenta de efecto<!-- raggruppa per conto effetto -->**  ejecuta un único registro, donde estarán presentes tantas filas como efectos<!-- effetti --> a contabilizar.

El indicador de **gestión provisional<!-- gestione provvisoria -->** generará asientos contables<!-- registrazioni contabili --> de tipo provisional.

:::danger[Atención]
La **gestión de adquisición de efectos<!-- acquisizione effetti --> desde partidas<!-- partite -->** es alternativa a la adquisición desde facturas.
:::

4. Pulsa el botón en la barra de acciones **Adquisición<!-- Acquisizione -->** para iniciar el procedimiento.

#### Botones específicos<!-- Pulsanti specifici -->

> **Buscar<!-- Ricerca -->**: Busca la lista de partidas<!-- partite --> para las que crear los efectos<!-- effetti -->.

> **Adquisición<!-- Acquisizione -->**: Ejecuta la creación de los efectos<!-- effetti --> para las partidas<!-- partite --> seleccionadas.

### Anteriores<!-- Precedenti -->

Una vez realizada la creación, las filas desaparecerán de la cuadrícula del *filtro* y el resultado será visible en la pestaña **Anteriores<!-- Precedenti -->**, donde es posible anular la operación.

No es posible anular la creación de efectos<!-- effetti --> si estos están contabilizados o presentados en el listado.

#### Botones específicos<!-- Pulsanti specifici -->

> **Buscar<!-- Ricerca -->**: Busca la lista de creaciones realizadas.

> **Revertir adquisición<!-- Rollback acquisizione -->**: Con este botón se eliminará toda la adquisición realizada, con todos los efectos<!-- effetti --> asociados.

> **Revertir efecto<!-- Rollback effetto -->**: Con este botón se eliminará la creación del efecto<!-- effetto --> individual seleccionado.