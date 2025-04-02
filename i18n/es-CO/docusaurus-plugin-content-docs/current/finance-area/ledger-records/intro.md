---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo incluye funcionalidades para la búsqueda, la inserción y la modificación de registros contables y movimientos relacionados con el IVA.  
Con este módulo es posible llevar una contabilidad completa de la empresa.

Los registros son generados por los procedimientos de contabilización de documentos del ciclo activo y pasivo o registrados directamente, de forma manual.

Desde el módulo se puede proceder a la visualización del balance, a la visualización de las cuentas, así como al lanzamiento de varias **stampe**, agrupadas en tres bloques:

- **contabili**: Balances, Extractos de cuentas, situaciones contables y otras impresiones de detalle  
- **Fiscales (Fiscali)**: Libros contables, Registros de IVA, Liquidaciones de IVA, Declaraciones de intención  
- **contabilità analitica**: movimientos de los centros de costo vinculados a los movimientos contables  

Los **procedure** del módulo permiten:

- El cálculo y contabilización de las escrituras de ajuste  
- El cierre y reapertura automática de las cuentas  
- El cálculo de las diferencias de cambio a fin de año (Regularización de moneda)  
- La gestión de los registros provisionales  
- El reordenamiento de los protocolos del IVA  

Antes de proceder a la introducción o realización de un registro, es necesario asegurarse de haber configurado correctamente todos los datos tabulares así como los [**parametri**](/docs/configurations/parameters/finance/accounting-parameters) del módulo.

Los datos contables son utilizados por el módulo de Control (Controlling) para procesar los cierres interanuales y para procesar todos los movimientos de los centros de costo relacionados.  
El módulo está estrechamente interconectado con la tesorería, con la que intercambia datos y recibe movimientos contables de los procedimientos automáticos de contabilización de los diversos hechos contables relacionados con las operaciones de tesorería (transferencias, cartera activa, etc.).

Una de las características fundamentales y distintivas del módulo para los registros contables es su lógica basada en [**Causales contables (Causali contabili)**](/docs/configurations/tables/finance/ledger-records-templates/ledger-records-templates-intro) configurables libremente para definir sus propios esquemas contables.

:::important Ver También (Vedi Anche)  
[**VIDEOS TUTORIALES SOBRE LOS REGISTROS CONTABLES (VIDEO TUTORIALS SULLE REGISTRAZIONI CONTABILI)**](/docs/video/finance/intro)  
:::