---
title: Introducción
sidebar_position: 1
ai_generated: true
---

El módulo Cash Flow<!-- Cash Flow --> de Fluentis ERP es una herramienta útil para el análisis de los flujos de caja<!-- flussi di cassa --> empresariales previstos.

Permite monitorear de manera precisa la entrada y salida de dinero, ayudando a las empresas a mantener una visión clara y actualizada de su liquidez. El módulo se integra con los datos contables y de tesorería<!-- tesoreria --> para proporcionar un análisis preciso y previsiones detalladas sobre los flujos de caja<!-- flussi di cassa --> futuros.

El módulo incluye la posibilidad de ingresar manualmente vencimientos<!-- scadenze --> extra contables referidos a datos no presentes en el sistema, como por ejemplo una proyección futura de los salarios de los empleados, un plan de recuperación para un crédito ya dado de baja en la contabilidad y así sucesivamente.

**Principales funcionalidades<!-- Funzionalità Principali -->**:

- Generación automática del cashflow<!-- cashflow --> con posibilidad de incluir o excluir los tipos de flujo<!-- flusso --> financiero habilitados simplemente marcando un flag.
- Posibilidad de filtrar por fechas para cada flujo<!-- flusso --> individual
- Visualización detallada del procesamiento del cashflow<!-- cashflow --> con posibilidad de exportar los datos en varios formatos, entre ellos Excel<!-- excel -->
- Ejecución de un informe analítico para la lectura de los resultados evidenciando la evolución del cashflow<!-- cashflow --> al final de cada mes
- Posibilidad de lectura del informe analítico agrupando por banco de apoyo<!-- banca d'appoggio -->
- Posibilidad de definir una fecha prevista para cada flujo<!-- flusso -->, paralela a la fecha de vencimiento natural

**Listado de tablas necesarias para gestionar el módulo<!-- Elenco tabelle necessarie per gestire il modulo -->:** 

[Tipos de cuenta financiera<!-- Tipi conto finanziario -->](/docs/configurations/tables/treasury/cash-flow-module-tables/financial-account-types),  

[Tipos de flujo<!-- Tipi flusso -->](/docs/configurations/tables/treasury/cash-flow-module-tables/flux-types),  

[Tipos de vencimiento<!-- Tipi scadenza -->](/docs/configurations/tables/treasury/cash-flow-module-tables/due-date-types),  

[Tipos de pedido/remisión/factura<!-- Tipi ordine/bolla/fattura -->](/docs/configurations/tables/treasury/cash-flow-module-tables/order-dn-invoice-types)  

[Maestro de cliente/proveedor/agente<!-- Anagrafica cliente/fornitore/agente -->](/docs/configurations/tables/treasury/cash-flow-module-tables/customer-vendor-agent-register).

Además, para cada tipo de flujo<!-- tipologia di flusso --> financiero que se active, es necesario gestionar dentro de las tablas relacionadas, como por ejemplo Tipos de remisión<!-- Tipi DDT -->, Tipos de pedido<!-- Tipi ordine --> (clientes<!-- clienti --> y proveedores<!-- fornitori -->), etc., qué tipos específicos de documentos deben ser monitoreados.

Por ejemplo, normalmente se excluirá una remisión<!-- DDT --> que no sea en cuenta venta<!-- conto vendita -->, como por ejemplo la cuenta depósito<!-- conto deposito -->, cuenta vista<!-- conto visione -->, etc., ya que no generarán flujo de caja<!-- flusso di cassa -->.