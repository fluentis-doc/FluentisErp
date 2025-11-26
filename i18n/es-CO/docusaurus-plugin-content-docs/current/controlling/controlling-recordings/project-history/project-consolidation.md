---
title: Consolidado de proyecto
sidebar_position: 5
ai_generated: true
---

En cada Elaboración de un ***Consolidado de proyecto<!-- Consolidato di progetto -->*** creado desde la pantalla de ***Elaboración de periodos<!-- Elaborazione periodi -->*** encontraremos aquí el respectivo registro que contiene el detalle de todos los costos y ingresos asignados a proyectos<!-- progetti -->, ya sean estos directos o indirectos por traspaso de cost driver aplicados sobre los datos de la dimensión direccional<!-- dimensione direzionale -->.

Los campos visualizados son:

- ***Subcuenta<!-- Sottoconto -->***
- [***Área<!-- Area -->***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- [***Centro de negocio<!-- Centro aziendale -->***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): en este caso se trata del *Centro de proyecto/orden de trabajo<!-- Centro di progetto/commessa -->*, es decir, el centro que tiene el indicador ‘Predeterminado para la dimensión proyectos’ en lugar del centro asignado al proyecto<!-- progetto --> a través de la tabla de ***Asociación de centros a proyectos/órdenes de trabajo<!-- Associazione centri progetti/commesse -->***.
- [***Centro cedente<!-- Centro cedente -->***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), que será valorizado por el centro de origen del movimiento<!-- movimento -->, provenga o no de un cost driver
- ***Año<!-- Anno -->***
- ***Periodo<!-- Periodo -->***
- ***Debe<!-- Dare -->***
- ***Haber<!-- Avere -->***
- ***Valor fijo<!-- Valore fisso -->***, que sumado al siguiente valor variable dará el importe de Debe o Haber anterior
- ***Valor variable<!-- Valore variabile -->***, que sumado al anterior valor fijo dará el importe de Debe o Haber anterior
- ***División<!-- Divisione -->***
- ***Moneda<!-- Divisa -->***, siempre igual a la moneda de la compañía
- ***Tipo de línea<!-- Tipo riga -->***, que pueden ser
    - *0* es decir líneas de origen: se utiliza tanto para las líneas que surgen de cierres o registros manuales de cierre o de área, como también para las líneas de los drivers de imputación
    - *2* es decir líneas recibidas: para los drivers de traspaso, son las líneas que trasladan el valor desde el *Centro cedente* al *Centro de negocio<!-- Centro aziendale -->*
:::tip Nota<!-- Nota -->
Las líneas de *asignación<!-- attribuzione -->* son fundamentalmente las líneas de traspaso de los *Cost driver* que, desde el Centro temporal *Cuentas a reasignar<!-- Conti da riassegnare -->*, valorizan los *Centros de negocio<!-- Centri aziendali -->* efectivos de la dirección<!-- direzionale -->. Los drivers de *traspaso<!-- ribaltamento -->* son básicamente todos los demás.
:::
- ***Tipo de distribución<!-- Tipo distribuzione -->*** del driver aplicado
- [***Cost driver***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) aplicado
- ***Fuente<!-- Sorgente -->***, es decir, el origen del dato, que puede ser:
    - *Contable* (1), es decir proveniente directamente del *Cierre interanual<!-- Chiusura infrannuale -->*
    - *Manual* (2), es decir proveniente de los *Asientos extracontables de área<!-- Registrazioni extracontabili di area -->*
    - *Fórmula* (3), es decir proveniente de asientos creados por las *Fórmulas de cálculo<!-- Formule di calcolo -->*
    - *Amortizaciones* (4), es decir provenientes de asientos creados por el procesamiento de las amortizaciones del controlling
    - *Ajustes* (5), es decir provenientes de asientos de ajustes interanuales o anuales
    - *Driver de tarifas* (6), provenientes de los drivers de aplicación de tarifas
    - *Existencias* (7), provenientes de asientos de existencias en controlling
    - *Materiales de producción* (8), provenientes de costes por materiales de producción
    - *Trabajos externos* (9), provenientes de costes de la cuenta de trabajo<!-- conto lavoro -->
    - *Transformaciones de producción* (10), es decir, de los trabajos internos en producción
    - *tiempo máquina* (11)
    - *tiempo hombre* (12)
    - *preparación máquina* (13)
    - *preparación hombre* (14)
    - *Consolidación controlling* (15), es decir desde la *Consolidación master<!-- Consolidamento master -->* del controlling, en instalaciones multiempresa
:::

- ***Tipo de coste<!-- Tipo costo -->*** aplicado a la línea, para líneas con origen *Materiales*

- ***Número<!-- Numero -->***, ***Año<!-- Anno -->***, ***Línea<!-- Riga -->***, ***Wbs***: referencias a los proyectos<!-- progetti -->, no valorizados

- [***Unidad de medida<!-- Unità di misura -->***](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), ***Artículo<!-- Articolo -->***, ***Descripción del artículo<!-- Descrizione articolo -->***, ***Fase***, ***Subfase<!-- Sottofase -->***, ***Número<!-- Numero -->***, ***Descripción<!-- Descrizione -->*** y ***Cantidad<!-- Quantità -->*** del artículo producido o trabajado

No se permite la eliminación, modificación o inserción de datos en la cuadrícula.