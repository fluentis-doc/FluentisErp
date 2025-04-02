---
title: Parámetros contables (Parametri contabilità)
sidebar_position: 2
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está relacionada con el procedimiento de [**Inicio Rápido**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página vinculada.
:::

La máscara de Parámetros de contabilidad permite definir los diversos parámetros de gestión **para cada año contable** seleccionado.

:::tip IMPORTANTE
Debe existir un registro que contenga los diversos parámetros de detalle **para cada año contable**. Por lo tanto, **cada nuevo año** debe ser inicializado creando un nuevo registro de parámetros mediante el botón **Nuevo**.

Al crear el nuevo registro de parámetros, el programa preguntará si también se desean crear los [**otros contadores del nuevo año**](/docs/configurations/utility/new-year-counter-generation).
:::

#### Botones específicos

> **Guardar (Salva):** guardar la configuración relativa al año.

> **Inserción de cuenta (Inserimento conto):** para insertar en la cuadrícula Lista de cuentas de Clientes / Proveedores. La configuración autoriza la sustitución automática de la cuenta genérica en la causal con la subcuenta del titular del documento fiscal, al mismo tiempo que bloquea o señala las cuentas incompatibles.

> **Eliminar cuenta (Cancella conto):** para eliminar las cuentas previamente ingresadas.

> **Cancelar impresiones definitivas (Annulla stampe definitive):** para proceder a la cancelación de las impresiones definitivas del libro diario. Una vez cancelada la impresión definitiva, el usuario debe reiniciar el contador relacionado que corresponde al campo ***Fecha de última impresión del libro diario***, en la sección ***Datos del año***, compuesta por tres casillas que contienen la fecha, la última línea y la última página de la impresión definitiva.

> **Cancelar libro de amortizaciones (Annulla libro ammortamenti):** para proceder a la cancelación de las impresiones definitivas del libro de activos. Una vez cancelada la impresión definitiva, el usuario debe reiniciar el contador de páginas que corresponde al campo ***Última página del libro de activos impresa*** en la sección ***Datos del año***.

> **Mover arriba (Sposta su):** para mover hacia arriba la fila seleccionada dentro de la cuadrícula "Propuesta de centros de costo / beneficio", dándole una mayor prioridad.

> **Mover abajo (Sposta giù):** para mover hacia abajo la fila seleccionada dentro de la cuadrícula "Propuesta de centros de costo / beneficio", dándole una menor prioridad.

## **generale**

### 1.1 Datos del año

- **(Inicio/Fín) Ejercicio:** Define el rango de fechas de registro del ejercicio seleccionado. Cada registro contable, para los controles de los campos anteriores, se inserta en el ejercicio correspondiente a estas fechas, que no deben superponerse entre los distintos ejercicios.

- **(Inicio/Fín) Competencia en línea:** Campos opcionales recomendados, definen el rango de fechas de competencia que se pueden gestionar dentro de los registros del ejercicio seleccionado.

- **(Inicio/Fín)  Periodo en línea:** Campos obligatorios, definen el rango de fechas del documento gestionable dentro de los registros del ejercicio seleccionado.

- **Cierre del ejercicio anterior:** Define la fecha de cierre del ejercicio anterior.

- **Fecha de última impresión del libro diario:** Almacena la última fecha impresa en definitivo para el ejercicio actual. Al abrir un nuevo ejercicio, esta fecha debe corresponder con la fecha de cierre del ejercicio anterior.

- **Saldo deudor/acreedor (Saldo dare/avere):** Almacena los últimos saldos deudores/acreedores del libro diario del ejercicio seleccionado impresos en definitivo. Al crear un nuevo ejercicio, estos campos deben establecerse en cero.

- **Fecha / Última línea / Última página del libro diario impresa:** Almacena la fecha, la última página y la última línea del libro diario del ejercicio seleccionado impresa en definitivo. Al crear un nuevo ejercicio, este campo debe establecerse en cero.

- **Última página del libro de activos impresa:** Almacena la última página del libro de activos del ejercicio seleccionado impresa en definitivo. Al crear un nuevo ejercicio, este campo debe establecerse en cero.

- **Causal de apertura y cierre de cuentas (Causale apertura e chiusura conti):** Los dos campos, no obligatorios, permiten preconfigurar las causales a utilizar en los procedimientos de cierre/apertura de cuentas.

- **Porcentaje pro-rata:** El campo permite establecer el valor porcentual del pro-rata válido para el ejercicio seleccionado. En caso de que no sea una opción a utilizar, deje el campo vacío o configurado al 100%.

:::tip[Info]
La gestión del pro-rata puede llevarse a cabo, como alternativa a este campo único para todos los registros de IVA, de manera específica para cada registro de IVA, permitiendo también la gestión de múltiples actividades a efectos de IVA con diferentes porcentajes de pro-rata. Ver [**Registros de IVA**](/docs/configurations/tables/finance/vat-books) y [**Tipo de actividad IVA**](/docs/configurations/tables/finance/vat-activity-type)
:::

- **Tipo de contabilización IVA (Tipo contabilizzazione IVA):** El campo permite definir el tipo de contabilización por defecto de las tasas de IVA en los diversos subcuentas del plan de cuentas.

- **Cierre mensual (Chiusura mensile):** Si está activo, modifica el funcionamiento del procedimiento *Cierre automático de cuentas* para poder realizarlo mensualmente, como se requiere en algunas localizaciones extranjeras (particularmente en Europa del Este). **Configuración no recomendada para Italia**.

:::danger[Atención]
Este indicador debe estar desactivado para la contabilidad normal italiana. Si se activa (por ejemplo, accidentalmente), además de notarse algunas diferencias en la máscara de ejecución del cierre de cuentas, se encontrará con la imposibilidad de calcular y gestionar los ajustes en la forma *Asientos de ajuste*.
:::

- **Gestión de comisiones (Gestione provvigioni):** Activa las funcionalidades de gestión del cálculo de comisiones para agentes desde el módulo de Administración.

- **Factor de actualización (Fattore di attualizzazione):** Indica el valor de incremento de los activos de un año a otro a efectos de la amortización calculada de forma específica dentro del módulo de Control y gestionada en varios otros detalles dentro de la pestaña *Amortización por control* presente en la ficha del activo. La configuración también se invoca en la forma [*Categorías de activos para el control*](/docs/configurations/tables/controlling/analytical-accounting/controlling-asset-categories).  
**EJEMPLO:** Al ingresar un valor de 1.1, habrá, cada año, un incremento del valor amortizable del activo del 10%, por lo que un activo con un valor inicial de 1000 tendrá en el año x+1 un valor de 1,100 y en el año x+2 se añadirá una cuota adicional de incremento según la misma lógica.

- **Régimen fiscal (Regime fiscale):** dato general a completar para gestionar cualquier automatismo y referencia a este dato relacionado con la fiscalidad y la facturación electrónica.

- **Volumen de negocio (Volume d’affari):** se utiliza para el cálculo de algunos indicadores relacionados con la funcionalidad de información financiera destinada a la prevención de crisis empresariales.

- **Liquidación de IVA (Liquidazione IVA):** Establece la periodicidad de las liquidaciones de IVA periódicas. Los indicadores son alternativos entre sí, los dos principales son referidos a la periodicidad mensual o trimestral según el volumen de negocio (consultar la normativa de IVA) y el tercero se refiere a los sujetos trimestrales "por naturaleza" según el régimen particular del artículo 74 DPR 633/72.

- **Deuda mínima para el pago de IVA (Debito minimo per il versamento iva):** representa el valor (sujeto a posibles variaciones según las normativas de IVA) por debajo del cual la deuda que eventualmente resulte de la liquidación de IVA periódica no es debida. Este campo impacta en las impresiones de la liquidación periódica y en el procesamiento de la comunicación trimestral (Li.Pe.).

- **Tipo de redondeo de IVA (Tipo rounding IVA):** Establece el redondeo de la IVA siempre hacia arriba con la selección 'Liras' o según la lógica del Euro.

- **Registros de IVA (Registri IVA):** Define si imprimir los registros de IVA por fecha de registro o por fecha de competencia de IVA dentro del período seleccionado. Para aquellos que no utilizan la posibilidad de facturación diferida dentro del 15 del mes siguiente, el resultado no cambia.

- **Fecha de competencia de plafond igual a (Data competenza plafond uguale a):** Define si la fecha de competencia de plafond que se asignará a los movimientos de IVA con la tasa vinculada al plafond debe establecerse en función de la fecha de registro o de la fecha del documento.

- **Numeración (Numerazione):** Permite vincular a cada año seleccionado un numerador para los registros contables definitivos y para aquellos en estado "provisional". Útil en caso de cambios periódicos en la política de numeraciones en lugar de la definición fija del numerador en la tabla [Numeración de Registros Contables](/docs/configurations/tables/fluentis-numerations). Si la numeración no se establece en este formulario, de manera predeterminada, se buscará en la tabla de *Numeración de Registros Contables*. La configuración del numerador para registros definitivos y provisionales también está presente dentro de cada causal contable (para diferenciar las numeraciones para cada tipo de escritura, como se requirió en algunas localizaciones externas, típicamente la francesa) ** [*en la cabecera de la causal* ](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) ** y si no se establece en la causal, se leerá por defecto el que se configuró en el presente formulario de parámetros generales. Si tampoco aquí se define un numerador, se leerá, como se mencionó anteriormente, el que está presente en la tabla general.

- **Autofactura:** La sección contiene los parámetros para la creación de la autofactura a partir de los registros contables para la comunicación de datos sobre compras al SDI. [**Consulte los parámetros específicos** ](/docs/finance-area/e-invoice/auto-invoice/parameters).

- **Intrastat:** La sección contiene algunos campos relacionados con la elaboración y exportación de los modelos intrastat.

- Visualizar detalles de la naturaleza de la transacción: con una reciente actualización normativa se ha introducido un detalle relativo al campo de la naturaleza de la transacción que puede hacerse visible activando el indicador. (Se recuerda que el campo de detalle se completa por aquellos que superan el umbral de 20 millones de euros en las cesiones del modelo intra 1 bis o compras del modelo intra 2 bis durante el año). Para detalles sobre la codificación de la nueva columna B relacionada con el detalle de la naturaleza de la transacción, consulte las instrucciones ministeriales.

- Código identificativo de usuario habilitado: en este campo es posible especificar una codificación para el nombre del archivo exportado que contiene las listas (también reportada en el registro de cabecera) a efectos del envío de los archivos con el canal Entratel.

- Periodicidad de Intrastat Compras / Ventas: Los combo box permiten establecer la periodicidad mensual o trimestral, respectivamente para compras y ventas, según la cual se solicitará, conforme a la normativa, más o menos detalle en la compilación de los datos. N.B. actualmente para las compras la periodicidad trimestral ha sido abolida.

- **IVA del Margen:** en esta sección se ingresan los parámetros específicos para la gestión de las funcionalidades relacionadas con el régimen IVA del margen. Para detalles, ver [**aquí**](/docs/finance-area/particular-cases/VAT_regime-del-maine).

### 1.2 Lista de cuentas de Clientes / Proveedores

- **El emparejamiento (L' abbinamento)** de los tipos de cuenta de clientes, proveedores, bancos y Agentes con las cuentas respectivas (cuentas maestras sin el código de subcuenta) debe realizarse en esta cuadrícula, aunque no es obligatorio, **es** <u>**altamente recomendable**</u> para permitir varios automatismos dentro del software de gestión.  
En particular, señalamos dos casos:  
1. Después de crear el archivo del contacto, al asignar el tipo de cuenta obteniendo posteriormente los detalles del archivo, el parámetro permite crear la nueva subcuenta contable destinada al cliente, proveedor o agente o banco en cuestión, colocándola bajo la cuenta maestra correcta. Sin este emparejamiento, esta asignación tendría que realizarse manualmente.  
2. Dentro de las causales contables, particularmente aquellas para el registro de facturas, el esquema de la registración que reporta una cuenta maestra particular, permite, a través del emparejamiento en cuestión, controlar que se esté utilizando la cuenta correcta del archivo en el registro (por ejemplo, una cuenta de proveedor en el registro de compras en lugar de una cuenta homónima pero de tipo cliente, impidiendo eventualmente la inserción según la configuración del parámetro de seguridad correspondiente en la causal).  
**ATENCIÓN:** La configuración autoriza la sustitución automática de la cuenta genérica en causal con la subcuenta del titular del documento fiscal; por lo tanto, la falta de configuración no hará funcionar correctamente los automatismos de las causales, impidiendo de hecho contabilizar automáticamente las facturas.

### 1.3 Propuesta de centros de costo/beneficio (Proposta centri di costo/profitto da: {#center-proposal})

La sección define el orden lógico de valorización contable de los centros de costo/beneficio.

Los criterios posibles contenidos en la sección pueden ser movidos con los botones *sposta su* / *sposta giù*, presentes en la barra de herramientas, con el fin de gestionar la prioridad de lectura que siempre se realiza de arriba hacia abajo; por lo tanto, el primero de la lista será el primero leído, si no se encuentra el cdc se pasa al segundo, etc.

**<u>NOTA:</u>** actualmente el criterio *Costo industrial* debe considerarse obsoleto y, por lo tanto, la lectura se realizará prioritariamente desde el plan de cuentas o desde el archivo de cliente.

## **2. Cuentas**

En esta pestaña se configuran en detalle las cuentas del plan de cuentas que serán utilizadas en los diversos procedimientos automáticos de contabilización realizados por el software de gestión.

- **Subcuenta de IVA compras (Sottoconto IVA acquisti):** permite establecer la subcuenta que se propondrá en la detección automática del giro de IVA al momento de la impresión definitiva de la liquidación de IVA periódica.  
- **Subcuenta de IVA ventas (Sottoconto IVA vendite):** permite establecer la subcuenta que se propondrá en la detección automática del giro de IVA al momento de la impresión definitiva de la liquidación de IVA periódica.  
- **Estado patrimonial inicial (Stato patrimoniale iniziale):** permite establecer la subcuenta que se propondrá para las operaciones de apertura automática de cuentas.  
- **Utilidad del ejercicio corriente (Utile d'esercizio corrente):** permite establecer la subcuenta que se propondrá para las operaciones de cierre/apertura automática de cuentas.  
- **Pérdida del ejercicio corriente (Perdita d'esercizio corrente):** permite establecer la subcuenta que se propondrá para las operaciones de cierre/apertura automática de cuentas.  
- **Utilidad del ejercicio anterior (Utile d'esercizio precedente):** permite establecer la subcuenta que se propondrá para las operaciones de cierre/apertura automática de cuentas.  
- **Pérdida del ejercicio anterior (Perdita d'esercizio precedente):** permite establecer la subcuenta que se propondrá para las operaciones de cierre/apertura automática de cuentas.  
- **Cuenta de resultados (Conto economico):** permite establecer la subcuenta que se propondrá para las operaciones de cierre automático de cuentas.  
- **Minusvalías (Minusvalenze):** permite establecer la subcuenta que se utilizará en la detección de las diferencias económicas negativas por cesión de activos.  
- **Plusvalías (Plusvalenze):** permite establecer la subcuenta que se utilizará en la detección de las diferencias económicas positivas por cesión de activos.  
- **Ingresos extraordinarios (Sopravvenienze attive):** permite establecer la subcuenta que se utilizará en la detección de los ingresos extraordinarios (también utilizado en la gestión de descuentos y bonificaciones).  
- **Gastos extraordinarios (Sopravvenienze passive):** permite establecer la subcuenta que se utilizará en la detección de los gastos extraordinarios (también utilizado en la gestión de descuentos y bonificaciones).  
- **Inexistencias activas (Insussistenze attive):** permite establecer la subcuenta que se utilizará en la detección de las inexistencias activas.  
- **Inexistencias pasivas (Insussistenze passive):** permite establecer la subcuenta que se utilizará en la detección de las inexistencias pasivas.  
- **Deudas con el Estado (Debiti v/erario):** permite establecer la subcuenta que se propondrá en la detección automática del giro de IVA al momento de la impresión definitiva de la liquidación de IVA periódica.  
- **Créditos con el Estado (Crediti v/erario):** permite establecer el subcuenta de crédito hacia el Estado que se propondrá en la detección automática del giro de IVA al momento de la impresión definitiva de la liquidación de IVA periódica.  
- **Cuenta de compensación (Conto corrispettivi):** permite establecer la subcuenta del cliente ficticio para la detección patrimonial de los ingresos.  
- **Contrapartida de ingresos (Contropartita corrispettivi):** activa si la cuenta de ingresos anterior está activada, permite establecer la subcuenta de contrapartida económica de los ingresos a ventilación.  
- **Tasa de IVA de ingresos (Aliquota IVA corrispettivi):** activa si la cuenta de ingresos anterior está activada, permite establecer la tasa de IVA de detección de los ingresos a ventilación.  
**Facturas por recibir (Fatture da ricevere):** permite establecer la subcuenta genérica a utilizar en el procedimiento de 'Contabilización de facturas por recibir' presente en el módulo 'Facturas de compra', o en la contabilización de facturas de compra de un [tipo](/docs/configurations/tables/purchase/purchase-invoices-type) que prevea la gestión de la competencia.  
**Facturas por emitir (Fatture da emettere):** permite establecer la subcuenta genérica a utilizar en la contabilización de las facturas de venta de un [tipo](/docs/configurations/tables/sales/invoices-type) que prevea la gestión de la competencia.  
**Notas de crédito por recibir (Note di accredito da ricevere):** permite establecer la subcuenta genérica a utilizar en el procedimiento de 'Contabilización de facturas por recibir' presente en el módulo 'Facturas de compra', o en la contabilización de las Notas de crédito recibidas del proveedor de un [tipo](/docs/configurations/tables/purchase/purchase-invoices-type) que prevea la gestión de la competencia.  
**Notas de crédito por emitir (Note di accredito da emettere):** permite establecer la subcuenta genérica a utilizar en la contabilización de las Notas de crédito a clientes de un [tipo](/docs/configurations/tables/sales/invoices-type) que prevea la gestión de la competencia.  
**Ajustes activos (Risconti attivi):** permite establecer la subcuenta genérica a utilizar en el procedimiento de ajustes automáticos del módulo 'Cierres intermedios'.  
**Ajustes pasivos (Risconti passivi):** permite establecer la subcuenta genérica a utilizar en el procedimiento de ajustes automáticos del módulo 'Cierres intermedios'.  
**Cuenta INAIL:** permite establecer la subcuenta genérica a utilizar en el procedimiento de contabilización del Modelo F24.  
**Cuenta INPS / Seguridad Social (Conto INPS / Previdenza sociale):** permite establecer la subcuenta genérica a utilizar en el procedimiento de contabilización del Modelo F24.  
**Cuenta de otros impuestos (Conto altre imposte):** permite establecer la subcuenta genérica a utilizar en el procedimiento de contabilización del Modelo F24.  
**Subcuenta de autofactura (SottoConto autofattura):** permite establecer la subcuenta para la creación de la autofactura a partir de los registros contables para la comunicación de datos sobre compras al SDI. [**Consulte los parámetros específicos** ](/docs/finance-area/e-invoice/auto-invoice/parameters).  
**Contrapartida de intereses trimestrales de liquidación de IVA:** permite automatizar la contabilización de los intereses pasivos derivados de la liquidación trimestral de IVA ingresando la cuenta de contrapartida (costo) deseada.

## 3. Video tutoriales sobre los Parámetros

:::important Vea También
[**VIDEO TUTORIALS SOBRE LOS PARÁMETROS**](/docs/video/finance/intro)
:::