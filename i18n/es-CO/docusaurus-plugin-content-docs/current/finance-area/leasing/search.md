---
title: ricerca leasing
sidebar_position: 2
---

Desde esta posición es posible buscar los contratos de leasing presentes en la base de datos y proceder a modificar sus detalles, o insertar un nuevo contrato con el botón **nuovo**.

Los filtros de búsqueda, además del número, descripción y fecha de firma, son posibles para la banca de pago de las cuotas y para la sociedad concedente (sociedad de leasing).

Otro campo de filtro fundamental es el **tipo leasing**.

Este campo, que también aparece en la cuadrícula de resultados, remite a la **tabla específica** (accesible también con el botón derecho del mouse > Abrir formulario) que es **necesario completar antes de insertar un nuevo leasing por primera vez**.

![](/img/it-it/finance-area/leasing/search/image01.png)

Los otros datos que aparecen en la cuadrícula de resultados son la **Fecha de firma (Data di stipula)** (del contrato, fecha a partir de la cual comienza el cálculo de los días de competencia),

**data estinzione** (fecha hasta la cual calcular los días totales para el cálculo de los días de competencia),

**numero** del contrato,

**descrizione** del bien concedido en leasing,

**Cuenta / subcuenta (Conto / sottoconto)** del banco pagador y de la sociedad concedente,

**maxicanone iniziale** (si está previsto e insertado en los datos del contrato),

**Gastos de instrucción (Spese di istruttoria)** (gastos de gestión del contrato si están previstos e insertados),

**debito residuo**: campo calculado como la suma de las cuotas de capital de los cánones previstos, neto de los ya contabilizados como pagados.

**TABLA TIPOS DE LEASING (TABELLA TIPI LEASING)**:

Tabla que define todos los atributos obligatorios del tipo de leasing, tipo que debe ser invocado obligatoriamente al insertar un nuevo contrato de leasing. ![](/img/it-it/finance-area/leasing/search/image02.png)

**codice / descrizione**: asignables libremente, identifican el tipo de leasing que estamos codificando.

**tipo leasing**: campo actualmente solo informativo, no determina automatismos, define si se trata de Leasing Financiero o Alquiler Operativo.

**metodo contabile**: ATENCIÓN, actualmente solo el modo **patrimoniale** está implementado y permite el funcionamiento regular de los procedimientos de contabilidad.

El método Patrimonial corresponde a los principios contables italianos OIC (prevén contabilizar los cánones según la forma jurídica del contrato, como un simple arrendamiento sin transferencia de propiedad, e inscripción en los activos patrimoniales y carga del activo solo al final del contrato cuando el bien sea rescatado).

El método Financiero corresponde a los principios contables internacionales IAS/IFRS (prevén considerar la sustancia de la operación en lugar de la forma jurídica, inscribiendo el bien en los activos patrimoniales y cargando la ficha de activo).

**tipi flusso**: combo box que permite invocar desde la tabla Tipos de Flujo del módulo de Flujo de Caja (Cash flow) la tipología (con el indicador Extracontable dentro de la tabla Tipos de flujo) la voz con la cual representar los flujos financieros del requerimiento por los varios cánones previstos dentro del contrato.

**registrazione causale**: causal contable que será utilizada en los registros contables relativos a los cánones de leasing facturados por la sociedad concedente y por contabilizar.

**Cuenta / subcuenta de intereses (Conto / sottoconto interessi)**: indique en estos campos la cuenta sobre la cual se contabilizará la cuota de intereses de los cánones previstos. Esta configuración será propuesta en los nuevos contratos insertados con este tipo.

**Cuenta / subcuenta de cánones (Conto / sottoconto canoni)**: indique en este campo la cuenta a utilizar para la cuota de capital de los cánones que será contabilizada. La cuenta será propuesta en los nuevos leasing insertados con este tipo.

**Cuenta / subcuenta de costo (Conto / sottoconto costo)**: indique la cuenta a utilizar para la cuota de costo de cobro de los cánones individuales (si está previsto).

**IVA**: tratándose de registro de factura de los cánones, indique la tasa impositiva a proponer automáticamente en los registros contables de los cánones.