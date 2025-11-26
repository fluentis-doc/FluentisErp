---
title: Nuevo Leasing
sidebar_position: 3
ai_generated: true
---

Al ingresar un nuevo contrato de leasing, es necesario definir, además de los campos indicados con la cruz roja, ante todo el **Tipo de Leasing<!-- Tipo Leasing -->**. Este campo remite a la tabla **[Tipo de leasing](/docs/finance-area/leasing/search)<!-- Tipo leasing -->** (ver detalles en la documentación del formulario de Búsqueda<!-- Ricerca -->) donde previamente deben haberse definido uno o más tipos.

Al seleccionar un Tipo de Leasing<!-- Tipo Leasing -->, se proponen los datos correspondientes en los campos para la tasa IVA<!-- aliquota iva --> y las cuentas<!-- conti --> que se utilizarán para contabilizar los cánones (parte de capital), los intereses (parte de intereses de los cánones) y los costos (por ejemplo, gastos de cobranza de los respectivos cánones).

![](/img/it-it/finance-area/leasing/new/image01.png)

![](/img/it-it/finance-area/leasing/new/image02.png)

## CABECERA<!-- TESTATA: -->

Deben ser ingresados los campos relativos a:

**Cuenta/subcuenta bancaria<!-- Conto/ sottoconto Banca -->**: relativa al banco que se utilizará en los asientos de pago de los cánones;

**Cuenta / subcuenta de la sociedad otorgante<!-- Conto / sottoconto società concedente -->**: relativa a la cuenta del proveedor (sociedad de leasing) que se utilizará en los asientos relacionados con los cánones pagados;

**Fecha de firma<!-- Data stipula -->**: propuesta por defecto como fecha actual (modificable), representa la fecha a partir de la cual se calcularán los días de competencia del leasing<!-- giorni di competenza del leasing -->;

**Número<!-- Numero -->**: número interno del contrato de leasing gestionado por una numeración de Fluentis;

**Descripción<!-- Descrizione -->**: descripción del contrato;

**Fecha de extinción<!-- Data estinzione -->**: ingrese la fecha prevista para la extinción, con el fin de permitir el cálculo automático de los días totales de contrato y, por lo tanto, de los días de competencia para el diferimiento del maxicanone y de las cuotas no competentes.

:::danger Atención<!-- Attenzione -->
Esta fecha, incluso si es ingresada por el usuario, normalmente debería coincidir con la fecha final del plan de amortización; por ello se ha implementado un control con mensaje de aviso cuando se utiliza el procedimiento de cálculo automático del plan de amortización. La desalineación de estas fechas podría llevar a un cálculo incorrecto del diferimiento anual del maxicanone (y de la cuota no competente).
:::

**Tasa interna de actualización<!-- Tasso interno di attualizzazione -->**: permite utilizar la tasa indicada para calcular automáticamente el plan de amortización del leasing<!-- piano di ammortamento del leasing --> (amortización de cuota constante); ingrese la tasa anual, esta se calculará automáticamente para determinar la tasa periódica en base a la periodicidad de las cuotas y a la duración del leasing.

**Valor del bien<!-- Valore del Bene -->**: valor del bien entregado en leasing.

**Valor de rescate<!-- Valore di Riscatto -->**: normalmente, al término del leasing, se prevé un importe para adquirir la propiedad definitiva del bien.

**Gastos de rescate<!-- Spese riscatto -->**: gastos accesorios eventuales para el rescate.

**Maxicanón inicial<!-- Maxicanone iniziale -->**: normalmente en los contratos de leasing se prevé un maxicanón inicial.

**Gastos de gestión y trámite<!-- Spese istruttoria e pratica -->**: accesorios respecto al maxicanón y, eventualmente, previstos como pago único al inicio del contrato.



## CAMPOS NO EDITABLES (calculados)<!-- CAMPI NON EDITABILI (calcolati): -->

**Deuda residual<!-- Debito residuo -->**: valor del bien neto de la suma de las cuotas de capital de los cánones pagados (considera la presencia de la bandera Contabilizado<!-- flag Contabilizzato --> en correspondencia de la cuota).

**Valor total del contrato<!-- Valore totale del contratto -->**: Maxicanón inicial + gastos de gestión y trámite + suma de los cánones (parte de capital + parte de intereses + gastos de cobranza / gastos de la cuota)

**Importe financiado<!-- Importo finanziato -->**: valor del bien neto (menos) el maxicanón inicial.



## CUADRÍCULA DE DETALLE<!-- GRIGLIA DI DETTAGLIO: -->

En esta sección es posible ingresar manualmente el plan de amortización de los cánones de leasing (excluyendo el maxicanón inicial, ya indicado en los datos de la cabecera). Alternativamente, está disponible en la ribbon bar el procedimiento específico para calcular automáticamente el plan de amortización a partir de los datos básicos del leasing ya ingresados en la cabecera.

![](/img/it-it/finance-area/leasing/new/image03.png)

**Fecha<!-- Data -->**: la fecha a ingresar corresponde a la fecha prevista de vencimiento del cánon; será utilizada para proponerla en el asiento contable con el cual se registra la recepción de la factura por el cánon por parte de la sociedad otorgante;

**Cuota capital<!-- Quota capitale -->**: representa la cuota en línea de capital de la cuota y se contabilizará en la cuenta contable definida en la tabla Tipos de leasing<!-- Tipi Leasing -->;

**Cuota de intereses<!-- Quota interessi -->**: representa el componente de intereses relativos a la cuota y se contabilizará en la cuenta específica definida en la tabla Tipos de leasing<!-- Tipi leasing -->;

**Costo de la cuota<!-- Costo rata -->**: representa, por ejemplo, el importe cargado en concepto de gastos de cobranza y también se contabilizará en la cuenta específica definida en la tabla Tipos de leasing<!-- Tipi Leasing -->;

**Total**: no editable; calcula el total de los componentes de la cuota;

**Contabilizado<!-- Contabilizzata -->**: el indicador se activa cuando se realiza la contabilización del cánon e influye tanto en el cálculo de la deuda residual como en el cálculo del diferimiento del maxicanón;

**Número / Fecha de Registro<!-- Numero / Data Registrazione -->**: se muestran las referencias del registro generado por el procedimiento de contabilización de cánones.



## PROCEDIMIENTOS ACTIVABLES DESDE LA RIBBON BAR<!-- PROCEDURE ATTIVABILI DALLA RIBBON BAR: -->

### Los procedimientos **contables**<!-- Le procedure contabili -->

activables desde el formulario de Detalles de Leasing son los mismos accesibles también desde la lista de procedimientos contables relativos al módulo Leasing<!-- modulo Leasing -->.

La diferencia consiste en que desde esta posición sólo se operará sobre el leasing<!-- leasing --> específico en el que hemos entrado en detalle, mientras que en el caso de los procedimientos contables del módulo, en el formulario dedicado, serán consultables y seleccionables todos los cánones aún pendientes de todos los leasings presentes en la base de datos.

La contabilización del maxicanón<!-- maxicanone --> se realiza una sola vez (también después e independientemente de la contabilización de cánones).

Para la contabilización de cánones es posible seleccionar la cuota a contabilizar y, una vez confirmado continuar, se requerirá completar un cuadro de diálogo con el número y la fecha del documento en el que ingresar las referencias a la factura recibida por el cánon a vencer.

La causale contable<!-- causale contabile --> a utilizar ha sido definida en la tabla Tipos de leasing<!-- Tipi leasing -->, pero el esquema del registro es fijo y guiado por la lógica del procedimiento.

Ambos procedimientos son recuperables también desde esta posición con las habituales lógicas de rollback.

### Calcular plan de amortización<!-- Calcola piano di ammortamento -->

Al presionar este botón, el procedimiento, en base a los principales campos de la cabecera, es decir, fecha de firma, número de cuotas<!-- rate -->, valor del bien, tasa de interés (tasa interna de actualización), calculará el plan de amortización utilizando el método de cuota constante (amortización a la francesa).

:::tip ATENCIÓN<!-- ATTENZIONE -->:
 no se toma en consideración el maxicanón<!-- maxicanone --> ingresado en la cabecera, que debe ser tratado como una cuota inicial adelantada adicional (a menudo igual a una o dos cuotas en términos de valor).
:::

Se abre un cuadro de diálogo en el que ingresar (de nuevo si difiere del ingresado ya en la cabecera) la **fecha de la primera cuota<!-- data del primo canone -->**, el número de **meses de diferencia<!-- mesi di scostamento -->** entre una cuota y otra (lo que determina la periodicidad de la cuota, por ejemplo 1 = mensual, 2 = bimestral, 3 = trimestral, etc.). ATENCIÓN: la periodicidad considera el tiempo entre cada cuota y calcula igual tantas cuotas como se hayan ingresado en la cabecera.

El **costo de la cuota<!-- costo rata -->**: por ejemplo, gastos de cobranza, etc., que se añaden para cada cuota en la columna correspondiente del detalle. 

Este botón también puede utilizarse para recalcular, actualizando, el plan de amortización, siempre que aún no se hayan contabilizado las cuotas.

**Cambiar fechas de cuotas<!-- Cambia date rate -->**: sirve para variar únicamente las fechas de los cánones y/o su periodicidad sin recalcular todo el plan (donde podrían haberse realizado también cambios manuales en los valores). Se solicitarán únicamente la fecha de la primera cuota y la periodicidad

**Actualizar gastos de cuota<!-- Aggiorna spese rata -->**: sirve para cambiar la comisión (por ejemplo, gastos de cobranza de cuota) en todas las filas sin tener que recalcular todo el plan o tener que actualizar manualmente todas las filas (siempre es posible). El cuadro de diálogo solicitará únicamente el nuevo valor de la comisión de cuota (Costo cuota<!-- Costo rata -->).