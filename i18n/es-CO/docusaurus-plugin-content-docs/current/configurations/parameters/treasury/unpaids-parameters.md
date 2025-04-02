---
title: parametri insoluti
sidebar_position: 2
---

Los parámetros del módulo **insoluti** se encuentran en **Parámetros > Tesorería (Parametri > Tesoreria)**.

En los parámetros de insolutos, se pueden preconfigurar los elementos predeterminados que se propondrán en los procedimientos del módulo.

#### Tipo de registro (Tipo di registrazione)  
- **Cuenta transitoria + gastos de protesto (Conto transitorio + spese di protesto)**: con esta configuración, se procederá a la reapertura de la cuenta del cliente en una cuenta transitoria, por el mismo importe del efecto original, y se cargarán los gastos a la cuenta bancaria.  
- **Cliente + gastos de protesto (Cliente + spese di protesto)**: se recomienda configurar la opción en ‘Cliente + gastos de protesto' para poder reaperturar la cuenta del cliente, por el mismo importe del efecto original, y cargar los gastos a la cuenta bancaria.  

#### Gestión de cuentas (Gestione partite)  
- **riapertura della partita relativa alla fattura**: se recomienda configurar la opción en ‘Reapertura de la cuenta relacionada con la factura'. Con esta opción, la procedimiento abrirá una nueva cuenta, pero con los mismos referencias al número y fecha del documento de la factura original. En caso de efecto resumido de varios documentos, se insertará el primero de la lista, pero en las notas de la cuenta se gestionará la lista de todas las referencias.  
- **apertura di una nuova partita**: la opción alternativa, abrir una nueva cuenta, creará una nueva cuenta con el número y la fecha del documento asignados en función del número y la fecha del efecto ido insoluto. 

#### Gastos (Spese) 

La sección debe configurarse si se desea tener un valor predeterminado que se proponga para la creación de la factura al cliente por los gastos de insoluto.

- **tipo fattura**: permite establecer el tipo de factura a utilizar.  
- **tipo pag.**: permite establecer el tipo de pago a utilizar.  
- **unità di misura**: permite establecer la unidad de medida de la línea del artículo.  
- **Solución de pago (Sol. pagamento)**: permite establecer la solución de pago para generar el vencimiento correspondiente.  

#### Gastos de recobro (Spese di rivalsa) 
- **contabilizzazione a costo spese di rivalsa**: FluentisERP contabilizará el costo de los gastos de recobro cargados al cliente.  
- **tipo fatturazione**: permite establecer el facturado de ventas, es decir, la contrapartida de ingresos que se asociará a la línea de factura.  
- **aliq. iva**: permite establecer la tasa de IVA. 

#### Recuperación de sellos (Recupero bolli) 
- **tipo fatturazione**: permite establecer el facturado de ventas, es decir, la contrapartida de ingresos que se asociará a la línea de factura.  
- **aliq. iva**: permite establecer la tasa de IVA. 

#### Gastos de recobro (Spese di rivalsa) 
- **tipo fatturazione**: permite establecer el facturado de ventas, es decir, la contrapartida de ingresos que se asociará a la línea de factura.  
- **aliq. iva**: permite establecer la tasa de IVA. 

#### Parámetros (Parametri) 
- **causale di contabilità**: es la causa que se propondrá en los procedimientos de contabilización de insolutos.  
- **conto spese di protesto**: es la cuenta que se utilizará para registrar los gastos cargados por el banco.  
- **conto transitorio**: es la subcuenta de tránsito que se utilizaría para la contabilización en caso de haberse establecido la gestión ‘Cuenta transitoria + gastos de protesto'. Se recomienda completar este campo (quizás con la misma cuenta de gastos) ya que será requerido obligatoriamente para la ejecución del procedimiento de contabilización.  
- **conto transitorio banca**: es la cuenta transitoria bancaria que se utilizará en caso de que el insoluto se relacione con efectos no presentados con el procedimiento (ej. en caso de uso del módulo DocFinance). 

:::danger Atención (Attenzione)
Al valorizar este campo, la cuenta establecida se utilizará, independientemente de la configuración de los indicadores descritos anteriormente en la sección *tipo di registrazione*, con prioridad sobre la cuenta de contrapartida normalmente movida (la cuenta de efectos si el efecto es *emitido*, la cuenta s.b.f en cabecera de lista si el efecto es *presentado*, y la cuenta bancaria C/C si el efecto es *acreditado*).

**Por lo tanto, se recomienda no valorizarlo si no es necesario.**
:::

- **Cuenta de cargo de gastos al cliente (Conto addebito spese a cliente)**: es la subcuenta de ingresos que se utilizará en el procedimiento de contabilización de insolutos por cesión en caso de que se haya elegido la opción de carga de gastos al cliente.  
- **tipo interesse**: al insoluto se puede asociar una tasa de interés de referencia. En caso de letras, se puede simular un cálculo inicial de intereses entre la fecha de vencimiento prevista del título y la fecha de registro del insoluto.  
- **creazione singola partita**: este indicador permite abrir una única cuenta para el insoluto de una letra creada por N cuentas diferentes. Normalmente no se utiliza, de modo que se reabren los históricos de cuentas con las referencias originales.

:::danger Atención (Attenzione)
no se debe establecer si se gestionan Agentes con vencimiento sobre pago realizado o total.
:::

- **data scadenza uguale a data scadenza effetto**: al activar este parámetro, la fecha de vencimiento de la cuenta reabierta por el insoluto se establece igual a la fecha de vencimiento del efecto, en lugar de la fecha del insoluto.