---
title: Parámetros no pagados
sidebar_position: 2
---

Los parámetros del módulo **no remunerado** se encuentran en **Parámetros > Tesorería**.

En los parámetros no pagados, se pueden preconfigurar los elementos predeterminados que se propondrán en los procedimientos del módulo.

#### Tipo de grabación
- **Cuenta transitoria + gastos de protesta**: con esta configuración, se procederá a la reapertura de la cuenta del cliente en una cuenta transitoria, por el mismo importe del efecto original, y se cargarán los gastos a la cuenta bancaria.  
- **Cliente + gastos de protesta**: se recomienda configurar la opción en ‘Cliente + gastos de protesta' para poder reaperturar la cuenta del cliente, por el mismo importe del efecto original, y cargar los gastos a la cuenta bancaria.  

#### Gestión de valores de madurez
- **Reapertura del valor de vencimiento de la factura**: se recomienda configurar la opción en ‘Reapertura del valor de vencimiento de la factura'. Con esta opción, la procedimiento abrirá una nueva madurez, pero con los mismos referencias al número y fecha del documento de la factura original. En caso de efecto resumido de varios documentos, se insertará el primero de la lista, pero en las notas de la madurez se gestionará la lista de todas las referencias.  
- **Apertura de nuevo valor de madurez**: la opción alternativa, abrir una nueva madurez, creará una nueva madurez con el número y la fecha del documento asignados en función del número y la fecha del efecto ido no remunerado. 

#### Gastos  

La sección debe configurarse si se desea tener un valor predeterminado que se proponga para la creación de la factura al cliente por los gastos de no remunerado.

- **Tipo de factura**: permite establecer el tipo de factura a utilizar.  
- **Tipo P.**: permite establecer el tipo de pago a utilizar.  
- **Unidades de Medida**: permite establecer la unidad de medida de la línea del artículo.  
- **Solución de pago**: permite establecer la solución de pago para generar el vencimiento correspondiente.  

#### Cargos de recurso
- **Contabilidad por costos de reembolso de gastos**: FluentisERP contabilizará el costo de los gastos de recobro cargados al cliente.  
- **Tipo de facturación**: permite establecer el facturado de ventas, es decir, la contrapartida de ingresos que se asociará a la línea de factura.  
- **Tasa de IVA**: permite establecer la tasa de IVA. 

#### Recuperación de estampillas 
- **Tipo de facturación**: permite establecer el facturado de ventas, es decir, la contrapartida de ingresos que se asociará a la línea de factura.  
- **Tasa de IVA**: permite establecer la tasa de IVA. 

#### Cargos de recurso
- **Tipo de facturación**: permite establecer el facturado de ventas, es decir, la contrapartida de ingresos que se asociará a la línea de factura.  
- **Tasa de IVA**: permite establecer la tasa de IVA. 

#### Parámetros  
- **Plantilla de Registros de Libro Mayor**: es la causa que se propondrá en los procedimientos de contabilización de no remunerado.  
- **Cuenta de gastos de protesta**: es la cuenta que se utilizará para registrar los gastos cargados por el banco.  
- **Cuenta transitoria**: es la subcuenta de tránsito que se utilizaría para la contabilización en caso de haberse establecido la gestión ‘Cuenta transitoria + gastos de protesto'. Se recomienda completar este campo (quizás con la misma cuenta de gastos) ya que será requerido obligatoriamente para la ejecución del procedimiento de contabilización.  
- **Cuenta transitoria bancaria**: es la cuenta transitoria bancaria que se utilizará en caso de que el no remunerado se relacione con efectos no presentados con el procedimiento (ej. en caso de uso del módulo DocFinance). 

:::danger Atención 
Al valorizar este campo, la cuenta establecida se utilizará, independientemente de la configuración de los indicadores descritos anteriormente en la sección *Tipo de grabación*, con prioridad sobre la cuenta de contrapartida normalmente movida (la cuenta de efectos si el efecto es *emitido*, la cuenta sujeta a cobranza en cabecera de lista si el efecto es *presentado*, y la cuenta bancaria C/C si el efecto es *acreditado*).

**Por lo tanto, se recomienda no valorizarlo si no es necesario.**
:::

- **Cuenta de cargo de gastos al cliente**: es la subcuenta de ingresos que se utilizará en el procedimiento de contabilización de no remunerado por cesión en caso de que se haya elegido la opción de carga de gastos al cliente.  
- **Tipo de interés**: al no remunerado se puede asociar una tasa de interés de referencia. En caso de letras, se puede simular un cálculo inicial de intereses entre la fecha de vencimiento prevista del título y la fecha de registro del no remunerado.  
- **Creación de valor de una sola matrícula**: este indicador permite abrir una única cuenta para el no remunerado de una letra creada por N valores de madurez diferentes. Normalmente no se utiliza, de modo que se reabren los históricos de valores de madurez con las referencias originales.

:::danger Atención 
no se debe establecer si se gestionan Agentes con vencimiento sobre pago realizado o total.
:::

- **La fecha de vencimiento es igual a la fecha de vencimiento de la factura**: al activar este parámetro, la fecha de vencimiento de la madurez reabierta por el no remunerado se establece igual a la fecha de vencimiento del efecto, en lugar de la fecha del no remunerado.