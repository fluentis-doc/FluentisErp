---
title: nuovo leasing
sidebar_position: 3
---

Al ingresar un nuevo contrato de leasing, es necesario definir, además de los campos indicados con la cruz roja, primero el **tipo leasing**. Este campo se refiere a la tabla **[Tipo de leasing](/docs/finance-area/leasing/search)** (ver detalles en la documentación del formulario de Búsqueda), donde previamente se deben haber definido uno o más tipos.

Al llamar un Tipo de Leasing, se proponen los datos relacionados en los campos para la alícuota del IVA y las cuentas a utilizar para contabilizar los cánones (cuota de capital), los intereses (cuota de intereses de los cánones) y los costos (por ejemplo, gastos de cobro de los cánones individuales).

![](/img/it-it/finance-area/leasing/new/image01.png)

![](/img/it-it/finance-area/leasing/new/image02.png)

## ENCABEZADO (TESTATA):

Deben ser ingresados los campos relacionados con:

**Cuenta/Subcuenta de Banco (Conto/ sottoconto Banca)**: relacionada con el banco que será utilizado en los asientos de pago de los cánones;

**Cuenta/Subcuenta de la sociedad concedente (Conto / sottoconto società concedente)**: relacionada con la cuenta del proveedor (sociedad de leasing concedente) que será utilizada en los asientos relativos a los cánones pagados;

**data stipula**: propuesta por defecto como la fecha actual (modificable), representa la fecha a partir de la cual se calcularán los días de competencia del leasing;

**numero**: número interno del contrato de leasing gestionado por un numerador de Fluentis;

**descrizione**: descripción del contrato;

**data estinzione**: ingresar la fecha prevista para la extinción a fin de permitir el cálculo automático de los días totales del contrato y, por lo tanto, de los días de competencia para el prorrateo del maxicanón y de las cuotas no de competencia.

:::danger Atención
Dicha fecha, aunque ingresada por el usuario, debería coincidir normalmente con la fecha final del plan de amortización. Por lo tanto, se ha puesto un control con mensaje de aviso cuando se utiliza el procedimiento de cálculo automático del plan de amortización. El desalineamiento de estas fechas podría llevar a un cálculo incorrecto del prorrateo anual del maxicanón (y de la cuota no de competencia).
:::

**tasso interno di attualizzazione**: permite utilizar la tasa indicada para calcular automáticamente el plan de amortización del leasing (amortización a cuota constante). Ingrese la tasa anual, esta tasa se calculará automáticamente para determinar la tasa periódica en función de la periodicidad de las cuotas y la duración del leasing.

**valore del bene**: Valor del bien concedido en leasing.

**valore di riscatto**: Normalmente, al término del leasing se prevé un pago por adquirir la propiedad definitiva del bien.

**spese riscatto**: Cualquier gasto accesorio para el rescate.

**maxicanone iniziale**: Normalmente, en los contratos de leasing se prevé un maxicanón inicial.

**spese istruttoria e pratica**: Accesorios respecto al maxicanón y, eventualmente, previstos una sola vez al inicio del contrato.

## CAMPOS NO EDITABLES (calculados):

**debito residuo**: Valor del bien menos la suma de las cuotas de capital de los cánones pagados (detecta la presencia del indicador Contabilizado en la correspondencia de la cuota de canon).

**Valor total del contrato (Valore totale del contratto)**: Maxicanón inicial + gastos de instrucción y trámite + suma de los cánones (cuota de capital + cuota de intereses + gastos de cobro/gastos de la cuota).

**importo finanziato**: Valor del bien neto (menos) del maxicanón inicial.

## CUADRO DE DETALLES (GRIGLIA DI DETTAGLIO):

En esta sección es posible ingresar manualmente el plan de amortización de los cánones de leasing (excluido el maxicanón inicial ya indicado en los datos del encabezado). Alternativamente, está disponible en la barra de herramientas un procedimiento específico para calcular automáticamente el plan de amortización a partir de los datos básicos del leasing ya ingresados en el encabezado.

![](/img/it-it/finance-area/leasing/new/image03.png)

**data**: la fecha a ingresar es la prevista para la fecha de vencimiento del canon, se utilizará para proponerla en el registro contable con el cual se registra la recepción de la factura por el canon por parte de la sociedad concedente;

**quota capitale**: representa la porción de capital de la cuota y será contabilizada en la cuenta contable definida en la tabla Tipos de Leasing;

**quota interessi**: representa la componente de los intereses relativos a la cuota y será contabilizada en la cuenta específica definida en la tabla Tipos de Leasing;

**costo rata**: representa, por ejemplo, la parte cobrada como gastos de cobro y también será contabilizada en la cuenta específica definida en la tabla Tipos de Leasing;

**totale**: no editable, calcula el total de las componentes de la cuota;

**contabilizzata**: el indicador se activa cuando se realiza la contabilización del canon y afecta tanto el cálculo de la deuda residual como el cálculo del prorrateo del maxicanón;

**Número/Fecha de Registro (Numero / Data Registrazione)**: se hacen constar las referencias del registro generado por el procedimiento de contabilización de cánones.

## PROCEDIMIENTOS ACTIVABLES DESDE LA BARRA DE HERRAMIENTAS (RIBBON BAR):

### Los procedimientos **contables** 

activables desde dentro del formulario de Detalles de Leasing son los mismos accesibles también desde la lista de procedimientos contables relativos al módulo de Leasing.

La diferencia consiste en que desde esta posición se operará solo en el leasing específico del cual se ha entrado en detalles, mientras que en el caso de los procedimientos contables del módulo, en el formulario dedicado relacionado, serán buscables y seleccionables todos los cánones aún por vencer de todos los leasing presentes en la base de datos.

La contabilización del maxicanón se realiza una sola vez (incluso después e independientemente de la contabilización de cánones).

Para la contabilización de cánones, es posible seleccionar la cuota a contabilizar y, una vez confirmado proceder, se solicitará completar un cuadro de diálogo con el número de documento y la fecha del documento en el que ingresar las referencias a la factura recibida por el canon próximo a vencer.

La causal contable a utilizar se ha definido en la tabla Tipos de leasing, pero el esquema del registro es fijo y guiado por la lógica del procedimiento.

Ambos procedimientos son restaurables también desde esta posición con las lógicas habituales de reversión.

### Calcular plan de amortización (Calcola piano di ammortamento)

Al presionar este botón, el procedimiento, basado en los campos principales del encabezado, es decir, fecha de firma, número de cuotas, valor del bien y tasa de interés (tasa interna de actualización), calculará el plan de amortización utilizando el método de cuota constante (amortización a la francesa).

:::tip ATENCIÓN:
no tiene en cuenta el maxicanón ingresado en el encabezado, que debe considerarse como un canon inicial anticipado adicional (a menudo igual a uno o dos cánones en términos de valor).
:::

Se abre un diálogo en el que se debe ingresar (nuevamente si es diferente de la ya ingresada en el encabezado) la **fecha del primer canon**, el número de **meses de variación** entre una cuota y otra (que determina la periodicidad de la cuota, por ejemplo, 1 = mensual, 2 = bimestral, 3 = trimestral, etc.). ATENCIÓN, la periodicidad tiene en cuenta el tiempo entre una cuota y otra y calcula, de todos modos, tantas cuotas como se inserten en el encabezado.

El **costo de la cuota**: por ejemplo, gastos de cobro, etc., que se agregarán por cada cuota en la columna correspondiente del detalle.

Este botón también se puede utilizar para recalcular, actualizando, el plan de amortización, siempre que los cánones no hayan sido contabilizados aún.

**cambia date rate**: sirve para variar únicamente las fechas de los cánones y/o la respectiva periodicidad sin recalcular todo el plan (donde también se podrían haber hecho variaciones manuales en los valores). Se solicitan únicamente la fecha del primer canon y la periodicidad.

**aggiorna spese rata**: sirve para cambiar la comisión (por ejemplo, gastos de cobro de cuota) en todas las líneas sin recalcular todo el plan o tener que actualizar manualmente todas las líneas (siempre posible). El diálogo requiere únicamente el nuevo valor de la comisión de cuota (Costo rata).