---
title: Áreas de Negocio - Tesorería (Business Areas - Tesoreria)
sidebar_position: 2
---

**creazione file sepa** (código FS-PR-SEPA-PaymentRequest): este parámetro permite asociar un determinado flujo Bizlink 'SEPA' para la exportación de transferencias en euros. Cada localización geográfica tiene su configuración predeterminada de generación (actualmente el formato italiano es el 4.01), pero en caso de cambios en la estructura de referencia, puede ser conveniente poder cambiar libremente a partir de una cierta fecha el tipo de archivo a crear.

**SDD (Débito Directo Sepa) (SDD ( Debito Diretto Sepa))** (código FS-PR-SEPA-SDD): similar al anterior, pero para los archivos SDD que se pueden crear desde las Listas de Cartera de Efectos (actualmente para Italia, la versión es 1.01).

**creazione file sepa estero** (código FS-PR-SEPA-ForeignPaymentRequest): como el primero, pero para el formato de las transferencias en moneda extranjera.

Los flujos actualmente disponibles son:

- *EsteroSEPA_XML_Payment*
- *ExportSDDWorkflow*
- *ExportSDDWorkflow_1.01*
- *SEPA_XML_Payments_Export*
- *SEPA_XML_Payments_Export_4.01*
- *SEPA_XML_Payments_Export_FR*
- *SEPA_XML_Payments_Export_HR*
- *SEPA_XML_Payments_Export_RO*
- *SEPA_XML_Payments_Export_RS*
- *SEPA_XML_Payments_Export_SI*

**dettaglio movimento** (código FS-PR-DocFinanceNote): para las empresas que reciben los movimientos bancarios de DocFinance, con este parámetro se puede definir cómo ***FluentisERP*** valorizará las descripciones de detalle de los movimientos importados. La lógica de codificación de la cadena sigue las lógicas ya en uso en las Causales de contabilidad, con la adición del código (DF) para indicar la descripción presente directamente en el archivo recibido de DocFinance.

:::tip Nota
por ejemplo:
- al configurar el parámetro como "(2) FT.N. (DF) del (4) – (6)" se creará un texto con
"Descripción causal" + FT.N. + "Descripción de DocFinance" del "fecha doc. de la partida" - "Descripción del subcuenta de la partida"
- al configurar el parámetro como "FT. (3) del (4)", es decir, sin usar la cadena enviada por DocFinance, obtendremos:
    - para las líneas vinculadas a partidas, una nota tipo FT. + "Número doc. partida" + del + "fecha doc. de la partida"
    - para las líneas no vinculadas a partida, se usará por defecto la cadena presente en el archivo de DocFinance.
:::