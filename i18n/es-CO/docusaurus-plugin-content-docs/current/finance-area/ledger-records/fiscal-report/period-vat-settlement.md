---
title: Liquidación periódica del IVA
sidebar_position: 5
ai_generated: true
---

Con este procedimiento de impresión se procede al cálculo del IVA a crédito/débito del periodo de referencia<!-- periodo di riferimento -->: para este informe no es obligatorio que ya estén impresos los registros de IVA<!-- registri IVA --> del periodo, pero para poder trasladar el eventual crédito del periodo anterior, se deberá haber realizado la impresión definitiva de la liquidación de IVA<!-- liquidazione IVA --> del periodo anterior (o bien una carga manual en la tabla **[Pagos de IVA](/docs/finance-area/declarations/declarations/vat-payment)**, que tiene el mismo efecto de bloquear el periodo de IVA<!-- periodo IVA --> en contabilidad<!-- contabilità -->). De lo contrario, la impresión podrá ejecutarse igualmente, pero sin el traslado del crédito del mes o trimestre anterior.

Establezca el periodo y el año de referencia (donde el periodo será mensual o trimestral, según la periodicidad de la liquidación periódica de IVA<!-- liquidazione IVA periodica --> configurada en los **[parámetros de contabilidad](/docs/configurations/parameters/finance/accounting-parameters)**);

seleccione desde el cuadro combinado el registro de IVA<!-- registro iva --> en el que imprimir la liquidación:

la impresión puede efectuarse al final del registro de ventas o en un registro resumen dedicado (opción recomendada).

En caso de que se haya seleccionado el último periodo del año, se habilitará la posibilidad de impresión/**cálculo del anticipo** de IVA, en base al cual el informe incluirá los asientos hasta la fecha del 20/12/aaaa.

**Fecha de pago / Modalidad de pago**: estos campos (una fecha que luego se refleja en la cadena textual) permiten hacer aparecer en la impresión una leyenda relativa a la fecha y modalidad de pago del impuesto (o, modificándolos, una anotación libre).

 

**Mostrar cabecera**: opción marcada por defecto; debe desmarcarse solo si la empresa todavía imprime en módulos DDTti.

Impresión **definitiva**: si esta opción está activa, la impresión será definitiva, bloqueando el periodo de IVA<!-- periodo iva --> de referencia y actualizando los contadores de página del registro donde se está imprimiendo. Además, permite habilitar la sección inferior para los asientos automáticos. También modificará el periodo de referencia para que corresponda al siguiente al último impreso en forma definitiva y se deshabilitará la cantidad de copias a imprimir.

![](/img/it-it/finance-area/ledger-records/fiscal-report/period-vat-settlement/image01.png)

 

La ejecución de la vista previa de impresión en forma definitiva no es suficiente para bloquear el periodo y actualizar los contadores: solo la ejecución del proceso de impresión física procederá a bloquear el periodo en contabilidad<!-- contabilità --> y actualizará el contador de páginas de la tabla Registros de IVA<!-- Registri iva --> (y no es relevante si el proceso de impresión resulta exitoso o no, incluso puede tratarse de una impresión a archivo).

La impresión definitiva habilitará la opción de **contabilización de la liquidación** (del saldo del periodo): al seleccionar esta opción, la aplicación activará la lista de cuentas<!-- conti --> a utilizar (tomándolas de los parámetros de contabilidad<!-- parametri di contabilità -->) y el usuario simplemente deberá confirmar el motivo<!-- causale --> y las fechas de referencia: una vez ejecutado el proceso de impresión, se añadirán en contabilidad<!-- contabilità --> dos asientos<!-- registrazioni --> de transferencia interna del IVA de compras y ventas a las subcuentas<!-- sottoconti --> de IVA a débito/crédito en la cuenta de Hacienda C/IVA<!-- conto erario C/iva -->.

![](/img/it-it/finance-area/ledger-records/fiscal-report/period-vat-settlement/image02.png)

| Función | Significado |
| --- | --- |
| Vista previa | Botón para ejecutar la vista previa de impresión de la liquidación. |
| Imprimir | Botón para ejecutar la impresión física de la liquidación. |

:::important Ver también<!-- Vedi Anche -->
[**VIDEO TUTORIALES SOBRE IMPRESIONES FISCALES**](/docs/video/finance/intro)
:::