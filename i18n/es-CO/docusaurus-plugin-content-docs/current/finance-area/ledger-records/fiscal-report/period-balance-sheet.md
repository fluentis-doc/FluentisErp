---
title: Estado financiero
sidebar_position: 1
ai_generated: true
---

Este reporte tiene la función de presentar un panorama básico del estado financiero<!-- bilancio aziendale --> de la empresa, dividiendo por defecto las cuatro secciones típicas de activo/pasivo/costos/ingresos<!-- attivo/passivo/costi/ricavi -->. Se destaca que el reporte solo funciona según la fecha de competencia contable introducida en el encabezado de la registración<!-- registrazione -->, independientemente de la fecha de registro de la misma en el libro diario<!-- libro giornale -->.

Además, hay que considerar que las fechas de competencia han sido diferenciadas para las cuentas<!-- conti --> del balance<!-- stato patrimoniale --> respecto a las cuentas de resultados<!-- conti economici -->.

![](/img/it-it/finance-area/ledger-records/fiscal-report/period-balance-sheet/image01.png)

De esta forma es posible, y se recomienda, mantener el rango de fechas económicas dentro del año en curso (por ejemplo 01/01/2018 - 31/12/2018) y llevar la fecha de inicio de la competencia contable patrimonial hasta la última apertura de cuentas<!-- apertura conti --> (por ejemplo 01/01/2017) en caso de que el año anterior (2017) aún no haya sido cerrado. Esto es necesario en tal situación para obtener el correcto saldo actual de las cuentas<!-- saldo attuale dei conti --> en ausencia de los valores iniciales para el año en curso que de otra manera serían omitidos al filtrar normalmente.

 

Son posibles varios diseños, entre ellos una representación por secciones opuestas y otra con agrupación para obtener totales por cuenta<!-- conto --> y por nivel de la estructura del plan de cuentas<!-- piano dei conti -->. El tipo de impresión deseado se puede seleccionar desde el menú desplegable en la parte superior izquierda.

 

**Visualización de importes en negativo**: si se activa, la aplicación ubicará cada subcuenta<!-- sottoconto --> en la sección correspondiente (según su tipo de cuenta<!-- tipo conto -->) con signo negativo si el saldo se encuentra en la sección opuesta. Si el indicador no está activado, como predeterminado, cada subcuenta<!-- sottoconto --> será visualizada en la sección correspondiente a su saldo;

**Detalle de las anagráficas**: por defecto la aplicación excluye todo el detalle de las subcuentas<!-- sottoconti --> asociadas a clientes/proveedores y agentes. Solo con el indicador correspondiente se visualizarán los detalles de estas subcuentas<!-- sottoconti di anagrafica -->;

**Excluir cuentas de orden<!-- conti d'ordine -->**: las cuentas de orden<!-- conti d'ordine --> se visualizan al final de las secciones de activos y pasivos. Con este indicador, las cuentas de orden<!-- conti d'ordine --> no serán mostradas en el reporte. Se recuerda en particular que las cuentas de orden<!-- conti d'ordine --> nunca son objeto de cierre/apertura de cuentas<!-- chiusura/apertura conti --> en el procedimiento automático de la aplicación;

**Comparación con el año anterior**: con esta opción será visible la columna del año en curso y otra para el saldo del mismo periodo pero del año anterior al configurado como filtro

**Excluir causal<!-- causale -->**: si se han registrado las operaciones de cierre de cuentas<!-- registrazioni di chiusura dei conti -->, para obtener los saldos del estado financiero<!-- saldi di bilancio --> será necesario excluir los movimientos<!-- movimenti --> basados en la causal<!-- causale --> de cierre. Ejecutar el informe sin excluir esto dará como resultado un informe con todos los saldos en cero (salvo las cuentas de orden<!-- conti d'ordine --> según lo mencionado antes): esto puede utilizarse como control de verificación del buen cierre de operaciones de cuentas<!-- chiusura conti --> realizados;

Es posible incluir en la impresión también los movimientos<!-- movimenti --> derivados de registros provisionales<!-- registrazioni provvisorie -->.

<iframe width="560" height="315" src="https://www.youtube.com/embed/E_lIBlV2OXI" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

---

### Reclasificación del estado financiero<!-- Riclassificazione di bilancio --> para la elaboración del balance legal<!-- bilancio civilistico --> (esquema CEE)

:::important Vea también<!-- Vedi Anche -->
[**VIDEO TUTORIALES SOBRE REPORTES FISCALES**](/docs/video/finance/intro)
:::