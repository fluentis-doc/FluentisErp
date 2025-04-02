---
title: scadenze extracontabili
sidebar_position: 3
---

El formulario se encuentra en Tesorería > Flujo de Efectivo > Flujo de Efectivo > Fechas de vencimiento extracontables.

Con esta máscara es posible gestionar las fechas de vencimiento extracontables que se leen en el flujo de flujo de efectivo correspondiente (definido en la tabla [**tipi flusso**](/docs/configurations/tables/treasury/cash-flow-module-tables/flux-types) por el indicador *Extracontable*), como por ejemplo prever las salidas para tributos, salarios/bonificaciones, etc. 

## Cómo insertar una fecha de vencimiento extracontable para lectura en el flujo de efectivo

Introducir directamente en la cuadrícula las fechas de vencimiento previstas.

- El campo **tipi scadenza** está vinculado a la tabla homónima donde se puede definir libremente una "etiqueta" para representar el tipo de vencimiento.  
- La fecha de vencimiento (Data scadenza) definirá la representación en el flujo de efectivo (en el mes correspondiente) considerándose como la fecha de manifestación del flujo financiero que estamos ingresando.  
- La Divisa será propuesta igual a la de la empresa (por ejemplo, el Euro), y puede ser cambiada para introducir un flujo en moneda extranjera; en este caso, también se gestionará el cambio según la fecha de vencimiento.  
- El importe en moneda es el que se denomina en la divisa seleccionada en el campo anterior, mientras que el importe Débito (flujo financiero positivo, como un crédito) o Crédito (flujo negativo, como una deuda) están denominados en la divisa de la empresa (por ejemplo, Euro).  
- el indicador **chiusa** puede ser usado para no considerar más la línea en las próximas simulaciones sin tener que eliminar la línea, en caso de querer conservarla y almacenarla.

**Botones específicos**

**ricerca**: Botón para aplicar los filtros de búsqueda en la lista de fechas de vencimiento extracontables.  

**nuovo**: Coloca el cursor para la inserción de una nueva fecha de vencimiento extracontable.  

**cancella**: Elimina la fecha de vencimiento extracontable seleccionada.