---
title: Vencimientos Extracontables
sidebar_position: 3
ai_generated: true
---

El formulario se encuentra en Tesorería > Cash Flow > Cash Flow > Vencimientos extracontables<!-- Scadenze extra-contabili -->

Con esta pantalla es posible gestionar los vencimientos extracontables<!-- scadenze extracontabili --> que se leen en el flujo de cash flow<!-- flusso di cash flow --> correspondiente (definido en la tabla [**Tipos de Flujo**<!-- Tipi Flusso -->](/docs/configurations/tables/treasury/cash-flow-module-tables/flux-types) mediante el flag *Extra contable<!-- Extra contabile -->*), como, por ejemplo, prever salidas por impuestos, salarios/sueldos, etc.

## Cómo ingresar un vencimiento extra contable<!-- scadenza extra contabile --> para su lectura en el cashflow<!-- cash flow -->

Ingrese directamente en la cuadrícula los vencimientos<!-- scadenze --> previstos.

- El campo **Tipos de vencimiento<!-- Tipi scadenza -->** está vinculado a la tabla homónima, donde se puede definir libremente una “etiqueta” para representar la tipología de vencimiento<!-- scadenza -->
- La Fecha de vencimiento<!-- Data scadenza --> definirá la representación en el cashflow<!-- cashflow --> (en el mes correspondiente), ya que debe considerarse como la fecha de manifestación del flujo financiero<!-- flusso finanziario --> que estamos ingresando
- La Moneda<!-- Divisa --> será propuesta igual que la de la compañía (ej. El Euro) y puede variar si se desea ingresar un flujo en moneda extranjera; en este caso, también se gestionará el tipo de cambio según la fecha de vencimiento<!-- data scadenza -->
- El importe en moneda corresponde al denominado en la divisa seleccionada en el campo anterior, mientras que el importe Debe (flujo financiero<!-- flusso finanziario --> positivo, por ejemplo un crédito) o Haber (flujo negativo, por ejemplo una deuda) están denominados en la moneda de la sociedad (ej. Euro)
- El flag **cerrada<!-- chiusa -->** puede usarse para que la fila no sea considerada en próximas simulaciones sin necesidad de eliminarla, en caso de querer conservar y memorizar la información.

**Botones específicos**

**Buscar<!-- Ricerca -->** Botón para aplicar filtros de búsqueda en la lista de vencimientos extracontables<!-- scadenze extracontabili -->.

**Nuevo<!-- Nuovo -->** Posiciona el cursor para ingresar un nuevo vencimiento extracontable<!-- scadenza extracontabile -->.

**Eliminar<!-- Cancella -->** Elimina el vencimiento extracontable<!-- scadenza extracontabile --> seleccionado.