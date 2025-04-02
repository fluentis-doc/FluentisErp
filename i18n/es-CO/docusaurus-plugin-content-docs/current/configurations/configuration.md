---
title: configurazione
sidebar_position: 1
---

El área de configuración se compone principalmente de dos elementos: **tabelle** y **parametri**.

Ambos están agrupados por área funcional, además de un grupo de tablas y parámetros generales (necesarios independientemente del área de interés).

:::danger[Advertencia]
Una mala gestión de estos datos básicos podría impedir el uso efectivo del ERP en el área de interés.
:::

**tabelle**: contienen datos básicos necesarios para la creación de otros datos o documentos. Por ejemplo, la tabla Tipos de Facturas contiene las tipologías de factura. Para la creación de una nueva factura, primero es necesario seleccionar el tipo desde el combo box correspondiente.

**parametri**: generalmente contienen opciones o datos predeterminados para el funcionamiento de procedimientos de procesamiento o creación automática de datos. Su mala gestión, en particular en ciertos casos, como el guardado de un parámetro predeterminado, podría impedir el correcto funcionamiento del procedimiento relacionado.

:::important[**Inicio rápido (Fast Start)**]
Después de la instalación de Fluentis ERP, antes de comenzar a usarlo, es posible inicializar un [**entorno *FastStart* completamente listo para usar**](/docs/guide/fast-start).

Consulte el enlace para la lista de **tabelle** y **parametri** que se pueblan a través de este procedimiento.

Un elemento discriminante para el lanzamiento del Fast Start es el [**piano dei conti**](/docs/erp-home/registers/accounting/analytic-chart-of-accounts) (área administrativa).

Al iniciar el procedimiento de Fast Start, se creará un plan de cuentas estándar; sin embargo, es posible integrarlo y modificar las descripciones de las cuentas, o eliminar algunas cuentas, pero solo si estas no se están utilizando ya en otros datos generados por el procedimiento (por ejemplo, las causales contables, modelos de reclasificación de balances). En caso de que el plan de cuentas sea completamente inadecuado a la realidad empresarial que ha instalado Fluentis, se recomienda proceder con una configuración manual de las tablas y parámetros relacionados con las áreas funcionales de interés, así como la creación manual o importación del plan de cuentas deseado. En el enlace mencionado anteriormente se encuentra una **lista de verificación (check list)** para la verificación detallada de las tablas más importantes.
:::