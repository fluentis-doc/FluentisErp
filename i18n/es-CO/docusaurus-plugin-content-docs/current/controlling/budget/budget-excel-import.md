---
title: Importación excel de los asientos extracontables de Presupuesto
sidebar_position: 3
ai_generated: true
---

En el menú de herramientas, dentro del grupo **Bizlink**, encontramos las ***Importaciones a demanda*** y por lo tanto las ***Importaciones excel***: entre estas tenemos disponible la importación con código **OffBalanceRecordsForArea**, que permite importar fácilmente los asientos extracontables<!-- registrazioni Extracontabili --> de Área, es decir, tanto asientos del área de gestión<!-- area gestionale --> que se usarán en integración con el área de resultados del periodo (por ejemplo, asientos de los honorarios del consejo de vigilancia que se cargan al inicio del año, o valoraciones extracontables de las nóminas del mes en curso) como asientos a utilizar para procesar el detalle del Presupuesto<!-- Budget --> del periodo.

Los campos disponibles son los siguientes:
- ***Fecha de registro<!-- Data registrazione -->***: obligatorio, es la fecha de registro que se debe asignar

- ***Fecha de competencia<!-- Data competenza -->***: obligatorio, es la fecha de competencia del asiento<!-- registrazione -->, será siempre igual a la fecha anterior

- ***Número de asiento<!-- Numero registrazione -->***: obligatorio, se recomienda asignar un número de asiento<!-- registrazione --> alto, para evitar posibles solapamientos con otros asientos ya presentes en la fecha, creados tal vez automáticamente por procedimientos de contabilización (por ejemplo, el procesamiento de las amortizaciones del controlling, o la contabilización de existencias en los cierres intermedios)

- ***Causal<!-- Causale -->***: la causal del movimiento<!-- movimento -->, obligatoria, que debe gestionar los centros de costos<!-- centri di costo -->

- ***Cuenta<!-- Conto --> y Subcuenta<!-- SottoConto -->***: obligatorio, la cuenta/subcuenta a asignar al movimiento<!-- movimento -->

- [***CENTRO EMPRESARIAL<!-- CENTRO AZIENDALE -->***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): obligatorio, el centro empresarial<!-- centro aziendale --> a asignar

- ***Tipo-Número interno-Año-Número WBS***: opcionalmente la posible vinculación a un proyecto

- ***Importe debe<!-- Importo dare -->***: obligatorio, debe valorarse (incluso en cero)

- ***Importe haber<!-- Importo avere -->***: obligatorio, debe valorarse (incluso en cero)

- ***Desde fecha de competencia<!-- Da data competenza -->***: la fecha inicial de competencia económica de la línea, no obligatoria pero siempre a valorarse cuando se trata de movimientos económicos<!-- movimenti economici -->

- ***Hasta fecha de competencia<!-- A data competenza -->***: la fecha final de competencia económica de la línea, no obligatoria pero siempre a valorarse cuando se trata de movimientos económicos<!-- movimenti economici -->

- ***División<!-- Divisione -->***: no obligatoria, si no se indica se usará la de los parámetros de importación, por defecto la activa

Una vez completados todos los campos necesarios, se podrá validar el rango de datos ingresados para verificar la existencia de posibles códigos faltantes o erróneos (botón ***Validar rango de datos<!-- Valida range di dati -->***), o lanzar directamente la importación con el botón ***Importar hoja excel<!-- Importa foglio excel -->***: se solicitará la selección del **Área<!-- Area -->** a utilizar y la divisa de referencia de la operación.