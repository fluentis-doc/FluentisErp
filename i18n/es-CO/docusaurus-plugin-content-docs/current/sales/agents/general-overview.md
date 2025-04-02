---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo se encuentra en el área *Ventas > Agentes*.  

El módulo ofrece una solución integral para la gestión, control y procesamiento de las comisiones de los agentes de ventas. Esta funcionalidad permite a las empresas calcular las comisiones devengadas, generar liquidaciones detalladas y gestionar compensaciones para profesionales.  

**Funciones Principales (Funzionalità Principali)**:  
- Gestión y control de las comisiones (Gestione e controllo delle provvigioni): El sistema permite gestionar, controlar y procesar el cálculo de las comisiones adeudadas a los agentes, teniendo en cuenta las ventas realizadas y las condiciones contractuales específicas.  
- Generación de liquidaciones (Generazione delle liquidazioni): Es posible generar liquidaciones periódicas para los agentes, agregando las comisiones devengadas y presentando un cuadro claro de las sumas adeudadas.  
- Creación de compensaciones para profesionales (Creazione di compensi per professionisti): Fluentis ofrece la posibilidad de crear compensaciones específicas para profesionales externos, garantizando una gestión flexible y detallada de los pagos.  
- Impresión de recibos y documentación (Stampa di cedolini e documentazione): El módulo permite la impresión de recibos para los agentes, detallando las comisiones devengadas y las liquidaciones realizadas, proporcionando así una documentación clara y transparente.  
- Reportes y análisis (Reportistica e analisi): Es posible generar reportes sobre las comisiones y las liquidaciones, facilitando el monitoreo del desempeño de los agentes y permitiendo un análisis detallado de las ventas.  

**Automatización e Integración (Automazione e Integrazione)**:  
El módulo de Liquidación de Agentes está integrado con el resto del sistema de gestión de Fluentis, permitiendo la recuperación automática de los datos de venta y las comisiones de los módulos de venta y facturación. Esta integración reduce el riesgo de errores y garantiza la coherencia de los datos, facilitando la reconciliación entre ventas, facturas y liquidaciones.  

Está a su vez conectado con el módulo de Administración, permitiendo convertir la liquidación de comisiones en compensación percibida, con el fin de poder ejecutar automáticamente las correspondientes entradas contables y el pago de la retención a cuenta, además de las contribuciones a ENASARCO.  
Finalmente, la compensación de los agentes también se incluirá en el procesamiento fiscal del certificado único de las retenciones.  

Antes de utilizar el módulo, es necesario completar las siguientes tablas:  
> - [**anagrafica agente**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail)  
> - [**categorie agenti**](/docs/configurations/tables/sales/agent-category)  
> - [Rango de descuento (Range sconto)](/docs/configurations/tables/sales/discount-range)  
> - [Definición de tramos de comisión (Definizione fasce provvigionali)](/docs/configurations/tables/sales/discount-range)  
> - [Características del agente (Caratteristiche agente)](/docs/configurations/tables/sales/agent-characteristics)  

:::danger[Atención]  
Se recuerda que, además de configurar los detalles del registro del agente, es necesario [**asignar los agentes a sus respectivos clientes**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/agents) para poder calcular las comisiones en los documentos y, por lo tanto, alimentar las liquidaciones.  
:::