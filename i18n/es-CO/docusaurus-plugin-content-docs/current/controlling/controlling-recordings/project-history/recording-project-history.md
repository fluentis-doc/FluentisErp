---
title: Registros de gestión
sidebar_position: 3
ai_generated: true
---

Esta pantalla es básicamente la misma que la del ***Histórico de registros de gestión<!-- Storico registrazioni gestionali -->***, es decir, muestra el resultado del ***Procesamiento de periodos<!-- Elaborazione periodi -->*** pero filtrando únicamente las filas que están directamente imputadas a proyecto/orden<!-- commessa -->, es decir, normalmente serán los costos/ingresos directamente imputados a la dimensión de análisis por proyecto/orden<!-- commessa -->.

Los campos son los mismos que en el formulario genérico de la dimensión directiva, y son:

- ***Subcuenta<!-- Sottoconto -->***
- [***Área<!-- Area -->***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- [***Centro empresarial<!-- Centro aziendale -->***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)
- [***Centro cedente<!-- Centro cedente -->***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), que se rellenará solo para las filas asociadas a los drivers
- ***Año<!-- Anno -->***
- ***Periodo<!-- Periodo -->***
- ***Debe<!-- Dare -->***
- ***Haber<!-- Avere -->***
- ***Valor fijo<!-- Valore fisso -->***, que sumado al siguiente valor variable dará el valor de Debe o Haber anterior
- ***Valor variable<!-- Valore variabile -->***, que sumado al valor fijo anterior dará el valor de Debe o Haber anterior
- ***División<!-- Divisione -->***
- ***Moneda<!-- Divisa -->***, siempre igual a la moneda de la empresa
- ***Distribución de periodos<!-- Distribuzione periodi -->*** asociada a la fila
- ***Tipo de fila<!-- Tipo riga -->***, que pueden ser
    - *0*, es decir, filas de origen: se usa tanto para las filas que nacen de los cierres o de los registros manuales de cierre o de área, como también para las filas de los drivers de atribución
    - *1*, es decir, filas cedidas: para los drivers de reparto, son las filas que compensan el valor desde el *Centro empresarial<!-- Centro aziendale -->*
    - *2*, es decir, filas recibidas: para los drivers de reparto, son las filas que trasladan el valor desde el *Centro cedente<!-- Centro cedente -->* al *Centro empresarial<!-- Centro aziendale -->*
:::tip Nota<!-- Nota -->
Las filas de *atribución* son básicamente las filas de reparto de los *Cost drivers* que, desde el centro temporal *Cuentas a reasignar<!-- Conti da riassegnare -->*, valorizan los *Centros empresariales<!-- Centri aziendali -->* efectivos de la directiva. Los drivers de *reparto* son básicamente todos los demás.
:::
- ***Tipo de distribución<!-- Tipo distribuzione -->*** del driver aplicado
- [***Cost driver***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) aplicado
- ***Fuente<!-- Sorgente -->***, es decir, el origen del dato, que puede ser:
    - *Contable* (1), es decir, proveniente directamente del *Cierre interanual<!-- Chiusura infrannuale -->*
    - *Manual* (2), es decir, proveniente de los *Registros extracontables de área<!-- Registrazioni extracontabili di area -->*
    - *Fórmula* (3), es decir, proveniente de registros creados por las *Fórmulas de cálculo<!-- Formule di calcolo -->*
    - *Amortizaciones* (4), es decir, proveniente de registros creados por el procesamiento de amortizaciones de controlling
    - *Ajustes* (5), es decir, proveniente de registros de ajustes interanuales o anuales
    - *Driver de tarifas* (6), es decir, proveniente de los drivers de aplicación de tarifas
    - *Existencias* (7), es decir, proveniente de registros de existencias en controlling
    - *Materiales de producción* (8), es decir, proveniente de costos por materiales de producción
    - *Trabajos externos* (9), es decir, proveniente de costos de la cuenta de trabajo<!-- conto lavoro -->
    - *Transformaciones de producción* (10), es decir, de los procesos internos de producción
    - *Consolidación de controlling* (15), es decir, del procedimiento de *Consolidación master<!-- Consolidamento master -->* del controlling, en instalaciones multisocietarias

:::tip Nota<!-- Nota -->
Existen otros 4 tipos de orígenes de datos, visibles en el histórico del consolidado de proyecto:
    - *tiempo máquina* (11)
    - *tiempo hombre* (12)
    - *preparación máquina* (13)
    - *preparación hombre* (14)
:::

- ***Número<!-- Numero -->***, ***Año<!-- Anno -->***, ***Fila<!-- Riga -->***, ***Wbs***: siempre se rellenarán por las referencias a los proyectos

No está permitido eliminar, modificar o insertar datos en la cuadrícula.