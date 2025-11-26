---
title: Introducción
sidebar_position: 1
ai_generated: true
---

El módulo se encuentra en el área *Ventas > Agentes*<!-- Vendite > Agenti -->.

El módulo ofrece una solución completa para la gestión, el control y el procesamiento de las comisiones<!-- provvigioni --> de los agentes de ventas. Esta funcionalidad permite a las empresas calcular las comisiones<!-- provvigioni --> acumuladas, generar liquidaciones detalladas y gestionar compensaciones para profesionales.

**Principales funcionalidades<!-- Funzionalità Principali -->**:<!-- **Funzionalità Principali** -->
- Gestión y control de comisiones<!-- provvigioni -->: El sistema permite gestionar, controlar y procesar el cálculo de las comisiones<!-- provvigioni --> de los agentes, teniendo en cuenta las ventas realizadas y las condiciones contractuales específicas.
- Generación de liquidaciones: Es posible generar liquidaciones periódicas para los agentes, agrupando las comisiones<!-- provvigioni --> acumuladas y presentando un resumen claro de las sumas adeudadas.
- Creación de compensaciones para profesionales: Fluentis ofrece la posibilidad de crear compensaciones específicas para profesionales externos, garantizando una gestión flexible y detallada de los pagos.
- Impresión de recibos y documentación: El módulo permite la impresión de recibos para los agentes, detallando las comisiones<!-- provvigioni --> acumuladas y las liquidaciones realizadas, proporcionando así una documentación clara y transparente.
- Informes y análisis: Es posible generar informes sobre las comisiones<!-- provvigioni --> y las liquidaciones, facilitando el seguimiento del desempeño de los agentes y permitiendo un análisis detallado de las ventas.

**Automatización e Integración<!-- Automazione e Integrazione -->**:        
El módulo de Liquidación de Agentes<!-- Liquidazione Agenti --> está integrado con el resto del sistema de gestión de Fluentis, permitiendo la recuperación automática de los datos de ventas y comisiones<!-- provvigioni --> desde los módulos de ventas y facturación. Esta integración reduce el riesgo de errores y garantiza la coherencia de los datos, facilitando la conciliación entre ventas, facturas y liquidaciones.

A su vez, está conectado con el módulo de Administración<!-- modulo Amministrazione -->, permitiendo convertir la liquidación de comisiones<!-- liquidazione provvigioni --> en compensación para percibientes, con el fin de poder ejecutar automáticamente los correspondientes asientos contables<!-- scritture contabili --> y el pago de la retención en la fuente<!-- ritenuta d'acconto --> además de las contribuciones ENASARCO.
Finalmente, la compensación de los agentes también estará incluida en la elaboración fiscal de la certificación única de las retenciones.

Antes de utilizar el módulo, es necesario completar las siguientes tablas:
> - [**Ficha del agente<!-- Anagrafica agente -->**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail)
> - [**Categorías de agentes<!-- Categorie agenti -->**](/docs/configurations/tables/sales/agent-category)
> - [Rango de descuento<!-- Range sconto -->](/docs/configurations/tables/sales/discount-range)
> - [Definición de tramos de comisión<!-- Definizione fasce provvigionali -->](/docs/configurations/tables/sales/discount-range)
> - [Características de agente<!-- Caratteristiche agente -->](/docs/configurations/tables/sales/agent-characteristics)

:::danger[Atención<!-- Attenzione -->]
Se recuerda que además de la configuración de los detalles en la ficha del agente<!-- anagrafica agente -->, es necesario [**asociar los agentes a sus respectivos clientes**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/agents) para poder calcular las comisiones<!-- provvigioni --> en los documentos y alimentar así las liquidaciones<!-- liquidazioni -->
:::