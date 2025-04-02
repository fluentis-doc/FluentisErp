---
title: acquisizione effetti dalle partite
sidebar_position: 2
---

El formulario se encuentra en Tesorería > Cartera de Efectos > Procedimientos > Adquisición de efectos desde las partidas.

Desde este formulario es posible ejecutar un *asistente* que lleva a cabo simultáneamente:

- La búsqueda de partidas abiertas de clientes elegibles para la creación de efectos (por ejemplo, un recibo bancario).
- La creación del efecto (por ejemplo, un recibo bancario) leyendo los datos de la partida.
- La contabilización del efecto que, a su vez, cierra la partida y crea la escritura contable de anulación de crédito al cliente y abono a la cuenta asociada con el tipo de efecto utilizado.

## Cómo crear un nuevo efecto automáticamente desde las partidas abiertas

1. Utiliza la parte superior de la máscara para filtrar la búsqueda de las partidas abiertas que se transformarán en efectos (por ejemplo, Recibos bancarios o letras).

:::note[Nota]
En la parte inferior de la zona de filtro, hay algunos indicadores de búsqueda:

- según la configuración del [**agrupamiento de vencimientos**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments) de los registros de clientes; por defecto, están activos y, por lo tanto, visibles ambos grupos, con y sin agrupamiento de vencimientos en los efectos.
- Para visualizar también las partidas activas de los proveedores (desactivada por defecto) además de las de clientes (activa por defecto).
:::

:::tip[Atención]
En esta sección son visibles **SOLO** las partidas contables vinculadas a tipos de pago de naturaleza recibo bancario o letra.

Este es un filtro inicial, activo por seguridad, que se puede gestionar desde la tabla [**Tipos de pago**](/docs/configurations/tables/general-settings/payment-types) asociando a cada tipo de pago el correspondiente tipo de efecto.
:::

2. Selecciona con el ratón desde la cuadrícula central las partidas que deseas adquirir en los efectos. Según la configuración del indicador *Agrupar vencimientos / Agrupar notas de abono en efectos*, presente en los [**registros de clientes**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), y el indicador *Agrupar notas de abono por fecha de vencimiento*, presente en los [**parámetros de la cartera de efectos**](/docs/configurations/parameters/treasury/bills-portfolio-parameters), las partidas se agruparán (**si tienen la misma entidad bancaria y fecha de vencimiento**) o crearán, en cualquier caso, efectos distintos.

3. En la parte inferior de la máscara establece la **fecha de emisión** de los efectos y el **tipo de efecto**.

La sección de **contabilización** se puede establecer por defecto dentro de los parámetros del módulo Cartera de efectos. Sin embargo, puede ser activada y desactivada desde aquí, antes de proceder a iniciar la adquisición.

El procedimiento de contabilización, si no se activa simultáneamente con la creación en este formulario, puede ser lanzado posteriormente [**desde el formulario correspondiente**](/docs/treasury/bills-holding/accounting/bills-accounting). La escritura contable generada se encargará de anular el crédito hacia el cliente, cerrando la partida abierta correspondiente y abonando la cuenta relacionada con la [**tipología de efecto**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types) seleccionada.

El indicador **agrupar por cuenta de efecto** realiza un registro único, donde en este estarán presentes tantas líneas cuántos son los efectos a contabilizar.

El indicador de **gestión provisional** generará registros contables de tipo provisional.

:::danger[Atención]
La **gestión de la adquisición de efectos desde las partidas** es alternativa a la adquisición desde las facturas.
:::

4. Presiona el botón en la barra de herramientas **Adquisición** para iniciar el procedimiento.

#### Botones específicos

> **ricerca**: Busca la lista de partidas para las cuales crear los efectos.

> **acquisizione**: Ejecuta la creación de los efectos para las partidas seleccionadas.

### Anteriores (Precedenti)

Una vez realizada la creación, las líneas desaparecerán de la cuadrícula del *filtro* y el resultado será visible en la pestaña **Anteriores**, dentro de la cual es posible anular la operación.

No es posible anular la creación de efectos si estos están contabilizados o presentados en lista.

#### Botones específicos

> **ricerca**: Busca la lista de las creaciones realizadas.

> **rollback acquisizione**: Con este botón se eliminará toda la adquisición realizada, con todos los efectos asociados.

> **rollback effetto**: Con este botón se eliminará la creación del efecto individual seleccionado.