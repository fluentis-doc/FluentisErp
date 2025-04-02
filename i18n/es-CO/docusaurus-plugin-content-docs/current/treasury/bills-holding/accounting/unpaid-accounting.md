---
title: contabilizzazione insoluti
sidebar_position: 4
---

El formulario se encuentra en Tesorería > Cartera de Efectos > Contabilización > contabilizzazione insoluti (Contabilizzazione Insoluti).

Desde esta máscara se procede a la contabilización de insolutos: el procedimiento reabre las cuentas de los clientes asociadas a los efectos insolutos y eventualmente genera una factura de cargo por gastos.

**Botones específicos**

**ricerca**: Busca la lista de los insolutos a contabilizar.

**contabilizza**: Realiza la contabilización para las líneas seleccionadas.

## Cómo contabilizar un insoluto

1. Utiliza la parte superior de la máscara para filtrar la búsqueda de los insolutos a contabilizar. ATENCIÓN: es necesario proceder primero con su creación.

2. Selecciona de la cuadrícula central los efectos que deseas contabilizar. 

3. Completa los parámetros para la contabilización, como la **causale di contabilità** y la **data registrazione**.

:::note[Nota]
Esta sección puede estar predefinida dentro de los [**parámetros**](/docs/configurations/parameters/treasury/unpaids-parameters) del módulo de Insolutos.

En particular:

- la causa contable se propone según los parámetros del módulo, 
- las fechas de registro se proponen como la fecha actual; 
- los subcuentas para los **spese di protesto** y la cuenta **Transitoria (Transitorio)** se toman de los parámetros del módulo, pero pueden ser modificadas o ingresadas en cada ocasión.

El indicador **contabilizzazione riepilogativa** registra en una única anotación todos los insolutos presentados en el mismo banco: normalmente esta opción no se utiliza, particularmente si se ha establecido la obligatoriedad de la fecha y número de factura en la causa contable por utilizar.

El indicador **spese di rivalsa** impone el registro del recargo de gastos al cliente: con esta opción se activará (en la parte inferior) la sección de gestión de la factura para estos gastos, en lugar de registrarlos directamente en contabilización. En esta sección, todos los campos deben ser ajustados para poder crear la factura de venta.

Finalmente, queda por insertar: 
- el **tipo de pago (tipo di pagamento)** y 
- la **data scadenza** que se asignará para la reapertura de la cuenta. Alternativamente, el indicador **Fecha de vencimiento igual a la fecha de vencimiento del efecto (Data scadenza uguale alla data scadenza effetto)** (que ha quedado insoluto).

También en este caso se leen los parámetros del módulo para proponer estos dos datos.

4. Presiona el botón en la barra de herramientas **contabilizzazione**.

### Pestaña Anteriores

Desde la pestaña anterior es posible proceder a la anulación de las contabilizaciones realizadas. 

La anulación será posible solo si el período aún es modificable (impresión del libro diario y cierre de cuentas no realizados). 

Un doble clic en la sección de registros permitirá visualizar la anotación contable relacionada. 

Está disponible un informe para visualizar los errores detectados durante la contabilización.

**Botones específicos**

**ricerca**: Busca la lista de las contabilizaciones realizadas.

**rollback contabilizzazione**: Realiza la restauración de las contabilizaciones seleccionadas.

**Revertir insolutos (Rollback insoluti)**: Realiza la restauración de la anotación contable seleccionada.

Hay una pestaña para visualizar los errores almacenados durante el proceso de contabilización.