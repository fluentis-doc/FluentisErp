---
title: Búsqueda de Leasing
sidebar_position: 2
ai_generated: true
---

Desde esta sección es posible buscar los contratos de leasing<!-- leasing --> presentes en la base de datos y proceder a modificar su detalle, o bien ingresar un nuevo contrato con el botón **Nuevo<!-- Nuovo -->**.

Los filtros de búsqueda, además del número, descripción y fecha de firma, pueden aplicarse por banco de pago de las cuotas y por sociedad concedente (sociedad de leasing<!-- leasing -->).

Otro campo de filtro fundamental es el **Tipo de Leasing<!-- Tipo Leasing -->**.

Este campo, que también aparece en la cuadrícula de resultados, remite a la **tabla específica** (accesible también con el botón derecho del mouse > Abrir formulario<!-- Apri form -->) que **es necesario completar antes de ingresar un nuevo leasing<!-- leasing --> por primera vez**.

![](/img/it-it/finance-area/leasing/search/image01.png)

Los demás datos mostrados en la cuadrícula de resultados son la **Fecha de firma<!-- Data di stipula -->** (del contrato, fecha desde la cual se calcula el número de días correspondientes),

**Fecha de cancelación<!-- Data estinzione -->** (fecha hasta la que se calculan los días totales a efectos del cálculo de los días correspondientes),

**Número<!-- Numero -->** del contrato,

**Descripción<!-- Descrizione -->** del bien otorgado en leasing<!-- leasing -->,

**Cuenta / subcuenta<!-- Conto / sottoconto -->** del banco de pago y de la sociedad concedente,

**Maxicuota inicial<!-- Maxicanone iniziale -->** (si está prevista y registrada dentro de los datos del contrato),

**Gastos de apertura<!-- Spese di istruttoria -->** (gastos de gestión del contrato, si están previstos y registrados),

**Deuda pendiente<!-- Debito residuo -->**: campo calculado como suma de las cuotas de capital de los cánones previstos, descontando las ya contabilizadas como pagadas.

**TABLA TIPOS DE LEASING<!-- TABELLA TIPI LEASING -->**:

Tabla que define todos los atributos obligatorios de la tipología de leasing<!-- leasing -->, tipología que debe ser llamada obligatoriamente al ingresar un nuevo contrato de leasing<!-- leasing -->.![](/img/it-it/finance-area/leasing/search/image02.png)

**Código / Descripción<!-- Codice / Descrizione -->**: asignables libremente, identifican el tipo de leasing<!-- leasing --> que estamos codificando.

**Tipo de leasing<!-- Tipo leasing -->**: campo actualmente solo informativo, no determina ningún automatismo, define si se trata de Leasing<!-- Leasing --> Financiero o Alquiler Operativo<!-- Noleggio Operativo -->.

**Método contable<!-- Metodo contabile -->**: ATENCIÓN, actualmente solo el modo **Patrimonial<!-- Patrimoniale -->** está implementado y permite el correcto funcionamiento de los procedimientos de contabilización.

El método Patrimonial<!-- Patrimoniale --> corresponde a los principios contables italianos OIC (prevén contabilizar los cánones según la forma jurídica del contrato, como un simple arrendamiento sin transferencia de propiedad, y la consiguiente inscripción en el activo patrimonial y carga del activo fijo solo al final del contrato cuando el bien sea rescatado).

El método Financiero<!-- Finanziario --> corresponde a los principios contables internacionales IAS/IFRS (prevén considerar la sustancia de la operación en lugar de la forma jurídica, registrando el bien en el activo patrimonial y cargando la ficha de activo fijo).

**Tipos de Flujo<!-- Tipi Flusso -->**: cuadro combinado que permite seleccionar desde la tabla Tipos de Flujo<!-- Tipi Flusso --> del módulo Cash flow<!-- Cash flow --> el tipo (con la marca Extracontable<!-- Extracontabile --> en la tabla Tipos de flujo) el concepto con el cual representar los flujos financieros de la necesidad para los distintos cánones previstos en el contrato.

**Causal de registro<!-- Registrazione causale -->**: causal contable que será utilizada en los registros contables relativos a los cánones de leasing<!-- canoni leasing --> facturados por la sociedad concedente y que deben contabilizarse.

**Cuenta / subcuenta de intereses<!-- Conto / sottoconto interessi -->**: indicar en estos campos la cuenta donde se contabilizará la parte de intereses de los cánones previstos. Este ajuste se propondrá en los nuevos contratos ingresados con esta tipología.

**Cuenta / subcuenta de cánones<!-- Conto / sottoconto canoni -->**: indicar en este campo la cuenta a utilizar para la parte de capital de los cánones que se contabilizarán. La cuenta será propuesta en los nuevos leasing<!-- leasing --> ingresados con esta tipología.

**Cuenta / subcuenta de costo<!-- Conto / sottoconto costo -->**: indicar la cuenta a utilizar para la parte de costo de cobranza de cada cuota (si está prevista).

**IVA**: tratándose de registro de factura de los cánones, indicar la tarifa que será propuesta automáticamente en los registros contables de los cánones.