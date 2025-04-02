---
title: liquidazione iva periodica
sidebar_position: 5
---

Con este procedimiento de impresión se procede al cálculo del IVA a crédito/débito del período de referencia: para este informe no es obligatorio que ya se hayan impreso los registros de IVA del período, pero para poder reportar el eventual crédito del período anterior, debe haberse realizado la impresión definitiva de la liquidación de IVA del período anterior (o una carga manual en la tabla **[Pagos de IVA](/docs/finance-area/declarations/declarations/vat-payment)** que da el mismo resultado de bloquear el período de IVA en contabilidad). De lo contrario, la impresión se podrá realizar, pero sin el reporte del crédito del mes o trimestre anterior.

Configure el período y el año de referencia (donde el período será mensual o trimestral según la periodicidad de la liquidación de IVA periódica establecida en los **[parámetros de contabilidad](/docs/configurations/parameters/finance/accounting-parameters)**);  

seleccione desde la caja combinada el registro de IVA sobre el cual imprimir la liquidación:  

la impresión puede llevarse a cabo al final del registro de ventas o en un registro de resumen dedicado (opción recomendada).  

En caso de que se haya seleccionado el último período del año, se habilitará la posibilidad de impresión/**cálculo del anticipo** de IVA, según el cual el informe reportará las registraciones hasta la fecha del 20/12/yyyy.

**Fecha de pago / Modalidad de pago (Data versamento / Modalità di versamento)**: estos campos (una fecha que luego se reporta en la cadena textual) permiten que aparezca en la impresión una mención relativa a la fecha y modo de pago del impuesto (o, modificándolos, una anotación libre).

**visualizza intestazione**: indicador propuesto por defecto: debe ser desmarcado solo en caso de que la empresa aún proceda a imprimir en formularios DDT.  

Impresión **stampa definitiva**: el indicador activo hará que la impresión sea definitiva bloqueando el período de IVA de referencia y actualizando los contadores de página del registro sobre el cual se está imprimiendo. Además, permite habilitar la sección siguiente para los asientos automáticos. Asimismo, modificará el período de referencia para hacer que corresponda al siguiente al último impreso de forma definitiva y se deshabilitará el número de copias a imprimir.  

![](/img/it-it/finance-area/ledger-records/fiscal-report/period-vat-settlement/image01.png)  

La ejecución de la vista previa de impresión definitiva no es suficiente para bloquear el período y actualizar los contadores: solo la realización del proceso de impresión física operará el bloqueo del período en contabilidad y actualizará el contador de páginas de la tabla de Registros de IVA (no es relevante si el proceso de impresión se lleva a cabo con éxito o no, podría ser también una impresión en archivo).  

La impresión definitiva habilitará la opción de **contabilizzazione liquidazione** (del saldo del período): al configurar esta opción, la aplicación activará la lista de cuentas a utilizar (tomándolas de los parámetros de contabilidad) y el usuario deberá simplemente confirmar la causa y las fechas de referencia: una vez ejecutado el proceso de impresión, se añadirán en contabilidad dos registraciones de giroconto del IVA de compras y ventas a los subcuentos de IVA a débito/crédito en la cuenta del erario C/IVA.  

![](/img/it-it/finance-area/ledger-records/fiscal-report/period-vat-settlement/image02.png)  

| Función (Funzione) | Significado (Significato) |
| --- | --- |
| Vista previa (Anteprima) | Botón para ejecutar la vista previa de impresión de la liquidación. |
| Impresión (Stampa) | Botón para ejecutar la impresión física de la liquidación. |


:::important Vea También (Vedi Anche)
[**TUTORIALES EN VIDEO SOBRE IMPRESIONES FISCALES**](/docs/video/finance/intro)
:::