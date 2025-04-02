---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo de Flujo de Efectivo (Cash Flow) de Fluentis ERP es una herramienta útil para el análisis de los flujos de caja empresariales previstos.

Permite monitorear de manera precisa la entrada y salida de dinero, ayudando a las empresas a mantener una visión clara y actualizada de su liquidez. El módulo se integra con los datos contables y de tesorería para proporcionar un análisis preciso y previsiones detalladas sobre los flujos de caja futuros.

El módulo está completo con la posibilidad de insertar manualmente fechas de vencimiento extracontributivas relacionadas con datos no presentes en el sistema, como por ejemplo, una proyección futura de los salarios de los empleados, un plan de reembolso para un crédito ya eliminado de la contabilidad, etc.

**Funcionalidades Principales (Funzionalità Principali)**:

- Generación automática del flujo de caja con la posibilidad de incluir o excluir las tipologías de flujo financiero habilitado manejando un simple indicador.
- Posibilidad de filtrar por fechas para cada flujo individual.
- Visualización detallada del procesamiento del flujo de caja con posibilidad de exportar los datos en varios formatos, entre los cuales Excel.
- Ejecución de una impresión analítica para la lectura de los resultados con evidencia de la evolución del flujo de caja al final de cada mes.
- Posibilidad de lectura de la impresión analítica agrupando por banco de apoyo.
- Posibilidad de definir una fecha prevista para cada flujo, paralela a la fecha de vencimiento natural.

**Lista de tablas necesarias para gestionar el módulo (Elenco tabelle necessarie per gestire il modulo):**

[Tipos de cuenta financiera (Tipi conto finanziario)](/docs/configurations/tables/treasury/cash-flow-module-tables/financial-account-types),  

[Tipos de flujo (Tipi flusso)](/docs/configurations/tables/treasury/cash-flow-module-tables/flux-types),  

[Tipos de vencimiento (Tipi scadenza)](/docs/configurations/tables/treasury/cash-flow-module-tables/due-date-types),  

[Tipos de orden/boleto/factura (Tipi ordine/bolla/fattura)](/docs/configurations/tables/treasury/cash-flow-module-tables/order-dn-invoice-types),  

[Registro de cliente/proveedor/agente (Anagrafica cliente/fornitore/agente)](/docs/configurations/tables/treasury/cash-flow-module-tables/customer-vendor-agent-register).

Además, en relación a cada tipología de flujo financiero que se activa, es necesario gestionar dentro de las tablas correspondientes, como por ejemplo, Tipos de DDT, Tipos de orden (clientes y proveedores), etc., qué tipos específicos de documentos deben ser monitoreados.

Por ejemplo, típicamente se excluirá un DDT que no esté en cuenta de venta, como por ejemplo, el cuenta depósito, cuenta de visión, etc., ya que no generarán flujo de caja.