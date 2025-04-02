---
title: Importación excel de las registraciones extracontables de Presupuesto (Importazione excel delle registrazioni extracontabili di Budget)
sidebar_position: 3
---

En el menú de herramientas, dentro del grupo **Bizlink**, encontramos las **importazioni on demand*** y, por lo tanto, las **importazioni excel***: entre estas, tenemos disponible la importación con código **OffBalanceRecordsForArea**, que permite importar fácilmente las registraciones Extracontables de Área, tanto las registraciones del área de gestión que se utilizarán en integración con el área de los resultados de período (por ejemplo, registraciones de compensaciones del consejo de vigilancia que se cargan al inicio del año, así como valorizaciones extracontables de los pagos del mes individual) como registraciones para utilizar en el detalle del Presupuesto de período.

Los campos disponibles son los siguientes:
- **data registrazione***: obligatorio, es la fecha de registración a asignar.

- **data competenza***: obligatorio, es la fecha de competencia de la registración, que siempre será igual a la fecha anterior.

- **numero registrazione***: obligatorio, se recomienda establecer un número de registración alto, para no arriesgarse a superponerse con eventuales registraciones ya presentes en la fecha, creadas quizás automáticamente por procedimientos de contabilización (p. ej., el procesamiento de las amortizaciones del controlling, o la Contabilización de existencias de los cierres interanuales).

- **causale***: la causa del movimiento, obligatoria, que debe gestionar los centros de costo.

- ***Cuenta y Subcuenta (Conto e SottoConto)***: obligatorio, la cuenta/subcuenta que se asignará al movimiento.

- [**centro aziendale***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): obligatorio, el centro empresarial a asignar.

- ***Tipo-Número interno-Año-Número WBS (Tipo-Numero interno-Anno-Numero WBS)***: opcionalmente el posible vínculo a un proyecto.

- **importo dare***: debe asignarse (quizás a cero) obligatoriamente.

- **importo avere***: debe asignarse (quizás a cero) obligatoriamente.

- **da data competenza***: la fecha inicial de competencia económica de la línea, no obligatoria pero siempre debe valorizarse cuando se trata de movimientos económicos.

- **a data competenza***: la fecha final de competencia económica de la línea, no obligatoria pero siempre debe valorizarse cuando se trata de movimientos económicos.

- **divisione***: no obligatoria, si no se indica, se utilizará la de los parámetros de importación, de forma predeterminada la activa.

Una vez ingresados todos los campos necesarios, se podrá validar el rango de los datos ingresados para verificar eventuales códigos faltantes o erróneos (botón **valida range di dati***), o lanzar directamente la importación con el botón **importa foglio excel***: se solicitará la valorización del **Área** a utilizar y de la divisa de referencia de la operación.