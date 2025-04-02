---
title: Balance del ejercicio (Bilancio d'esercizio)
sidebar_position: 1
---

Este informe tiene la función de presentar un resumen básico del balance empresarial, dividiendo por defecto las cuatro secciones típicas activo/pasivo/costos/ingresos. Se destaca que el informe funciona únicamente para la fecha de competencia contable ingresada en el encabezado del registro, independientemente de la fecha de registro en el libro diario.

Además, es importante tener en cuenta que las fechas de competencia se han diferenciado para las cuentas del estado patrimonial, en comparación con las económicas.

![](/img/it-it/finance-area/ledger-records/fiscal-report/period-balance-sheet/image01.png)

De este modo, es posible, y se recomienda, mantener el rango de fechas económicas dentro del año en curso (por ejemplo, 01/01/2018 - 31/12/2018) y llevar la fecha de inicio de la competencia contable patrimonial hasta la última apertura de cuentas (por ejemplo, 01/01/2017) en caso de que el año anterior (2017) no haya sido cerrado aún. Esto es necesario en tal situación para obtener el saldo actual correcto de las cuentas en ausencia de los valores de apertura para el año en curso que de otro modo serían omitidos al filtrar normalmente.

Los distintos diseños son posibles, entre los cuales una representación en secciones opuestas y una con agrupamiento a fin de obtener los totales por cuenta y por nivel de la estructura del plan de cuentas. La impresión deseada se puede seleccionar desde el menú desplegable en la parte superior izquierda.

**visualizzazione importi segno negativo**: si se activa, la aplicación insertará cada subcuenta en la sección correspondiente (según su tipo de cuenta) con el signo negativo cuando el saldo esté en la sección opuesta. Si el indicador no está activado, como es por defecto, cada subcuenta se mostrará en la sección relacionada con su saldo;

**Detalle de las entidades (Dettaglio della anagrafiche)**: por defecto, la aplicación excluye todo el detalle de los subcuentas vinculados a clientes/proveedores y agentes. Solo con el indicador correspondiente se visualizarán los detalles de estas subcuentas de entidades;

**escludi conti d'ordine**: las cuentas de orden se visualizan al final de las secciones de activo y pasivo. Con este indicador, las cuentas de orden no se mostrarán en el informe. Se recuerda, en particular, que las cuentas de orden nunca son objeto de cierre/apertura de cuentas en el procedimiento automático de la aplicación;

**comparazione anno precedente**: con esta opción se mostrará la columna del año en curso y una por el saldo del mismo período pero del año anterior al que está configurado como filtro.

**escludi causale**: en caso de que se hayan registrado los cierres de cuentas, para obtener los saldos del balance será necesario excluir los movimientos basados en la causal de cierre. Ejecutar el informe sin excluir esto dará un informe con todos los saldos en cero (salvo las cuentas de orden por lo mencionado anteriormente): esto puede ser utilizado como un control de verificación del buen término de las operaciones de cierre de cuentas realizadas;

Es posible incluir en la impresión también los movimientos derivados de los registros provisionales.

<iframe width="560" height="315" src="https://www.youtube.com/embed/E_lIBlV2OXI" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>

---

### Reclasificación de balance para la elaboración del balance civil (schema CEE) (Riclassificazione di bilancio per elaborazione bilancio civilistico (schema CEE))

:::important También ver
[**TUTORIALES EN VIDEO SOBRE IMPRESIONES FISCALES (VIDEO TUTORIALS SULLE STAMPE FISCALI)**](/docs/video/finance/intro)
:::