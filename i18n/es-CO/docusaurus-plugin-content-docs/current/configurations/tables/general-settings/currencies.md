---
title: divise
sidebar_position: 1
---

:::tip [Inicio Rápido (FAst Start)]
La tabla está relacionada con el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start).

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

### Sección superior (Sezione superiore)

La tabla, común a todas las empresas de la base de datos, permite definir la lista de divisas a utilizar en los diversos documentos/inscripciones.  

**Divisa / Descripción (Divisa / Descrizione)**: Código / Descripción de la divisa codificada.  

**decimali**: debe completarse con el número de cifras decimales previstas para la divisa.  

**CEE**: el indicador define las divisas que forman parte del sistema de tipos de cambio fijos para el euro.  

**EURO**: el indicador identifica el euro.  

**scarica cambi**: habilita el [**scarico automatico**](/docs/configurations/tables/finance/currency-exchange) de las tasas de cambio para la divisa correspondiente.


### Sección inferior (Sezione inferiore)

Los campos de la cuadrícula permiten establecer los subcuentas de ganancias y pérdidas cambiarias, específicos de cada empresa, que se utilizarán en las valoraciones automáticas de las diferencias contables de cambio.

**Cuenta / Subcuenta / Descripción de Ganancias (Conto / Sottoconto / Descrizione Utile)**: se utilizará para contabilizar las ganancias por cambios.  

**Cuenta / Subcuenta / Descripción de Pérdidas (Conto / Sottoconto / Descrizione Perdite)**: se utilizará para contabilizar las pérdidas por cambios.  

**Cuenta / Subcuenta / Descripción de Fondos (Conto / Sottoconto / Descrizione Fondi)**: se utilizará para contabilizar la provisión para el fondo de riesgos cambiarios.