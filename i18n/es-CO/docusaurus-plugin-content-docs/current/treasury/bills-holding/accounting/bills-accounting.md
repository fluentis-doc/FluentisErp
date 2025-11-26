---
title: Contabilización de efectos
sidebar_position: 1
ai_generated: true
---

El formulario<!-- form --> se encuentra en Tesorería > Cartera de efectos > Contabilización > Contabilización de efectos<!-- Tesoreria > Portafoglio Effetti > Contabilizzazione > Contabilizzazione effetti -->.

Desde esta pantalla, se procede a la contabilización de efectos<!-- contabilizzazione effetti -->: el procedimiento, según la configuración de la causal contable<!-- causale contabile --> definida, cerrará las partidas de clientes<!-- partite clienti --> asociadas a los efectos<!-- effetti --> seleccionados.

:::tip[Nota]
Generalmente, este procedimiento puede ejecutarse directamente realizando ***la adquisición automática de efectos<!-- acquisizione automatica effetti --> desde las partidas<!-- partite -->*** donde, habilitando la opción correspondiente, se ejecuta de forma simultánea el presente procedimiento.

**Es necesario, en cambio, acceder específicamente a este formulario para el restablecimiento de la contabilización de efectos<!-- ripristino della contabilizzazione effetti -->**.
:::

## Cómo contabilizar un efecto<!-- Come contabilizzare un effetto -->

1. Usa la parte superior de la pantalla para filtrar la búsqueda de los efectos<!-- effetti --> a contabilizar.

2. Selecciona en la cuadrícula central los efectos<!-- effetti --> que deseas contabilizar.

3. Completa los parámetros para la contabilización tales como la **Causal contable<!-- Causale di contabilità -->**, la **fecha de registro<!-- data registrazione -->** y la fecha de competencia.

:::note[Nota]
Esta sección puede estar predefinida en los [**parámetros**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) del módulo Cartera de efectos<!-- Portafoglio effetti -->.

La opción de **agrupamiento por cuenta de efecto<!-- raggruppamento per conto effetto -->** significa efectuar un solo asiento donde habrá tantas líneas como efectos<!-- effetti --> a contabilizar y, en la contrapartida, la cuenta<!-- conto --> asociada con el tipo de efecto<!-- tipologia di effetto --> (en la **tabla Tipos de efectos<!-- tabella Tipi Effetti -->**).

La opción de **gestión provisional<!-- gestione provvisoria -->** generará asientos contables de tipo provisional.

Si la causal contable<!-- causale contabile --> prevé el flag de apertura de partidas<!-- apertura partite --> y el efecto<!-- effetto --> se ha creado manualmente sin asociar una partida<!-- partita --> (o su importe es superior al de las partidas enlazadas), entonces se creará una partida de cliente<!-- partita cliente --> a tener para compensar posteriormente.

Se recuerda que no será posible contabilizar efectos<!-- effetti --> creados a partir de facturas<!-- fatture --> impresas si estas aún no han sido contabilizadas.
:::

4. Pulsa el botón en la ribbon bar **Contabilización de efectos<!-- Contabilizzazione effetti -->**.

**Botones específicos**

**Búsqueda<!-- Ricerca -->**: Busca la lista de efectos<!-- effetti --> a contabilizar.

**Contabilización de efectos<!-- Contabilizzazione effetti -->**: Ejecuta la contabilización para las filas seleccionadas.

### Pestaña Anteriores<!-- Tab Precedenti -->

Desde la pestaña *Anteriores<!-- precedenti -->* es posible proceder a la anulación de las contabilizaciones realizadas.

La anulación solo será posible si el periodo aún es modificable (no se ha impreso el libro diario ni realizado el cierre de cuentas).

Un doble clic en la sección de los asientos permitirá visualizar el asiento contable relacionado<!-- registrazione contabile relativa -->.

Existe una pestaña de detalle para visualizar los errores detectados durante la contabilización.

:::tip[Nota]
El restablecimiento de la contabilización del efecto<!-- ripristino della contabilizzazione dell'effetto --> debe **necesariamente** realizarse desde este formulario.

De hecho, en la fase de creación del efecto<!-- effetto --> es posible lanzar al mismo tiempo su contabilización, pero NO lo contrario.

Por lo tanto, se debe proceder primero a anular su contabilización aquí, y luego se podrá anular el procedimiento de creación, regresando a una situación anterior (partida de cliente abierta<!-- partita cliente aperta --> y saldo de cliente no compensado<!-- saldo cliente non ancora stornato -->).
:::

**Botones específicos**

**Búsqueda<!-- Ricerca -->**: Busca la lista de contabilizaciones realizadas.

**Rollback contabilización**: Ejecuta el restablecimiento de las contabilizaciones seleccionadas para todos los documentos contenidos en ellas.

**Rollback efectos<!-- effetti -->**: Ejecuta el restablecimiento del asiento contable<!-- registrazione contabile --> seleccionado referido al efecto individual. ATENCIÓN: esta modalidad solo es posible si, en la fase de contabilización, no se ha activado la opción para agrupar por tipo de efecto<!-- raggruppare per tipo effetto --> (que genera asientos únicos por cada tipo de efecto<!-- tipo effetto -->).