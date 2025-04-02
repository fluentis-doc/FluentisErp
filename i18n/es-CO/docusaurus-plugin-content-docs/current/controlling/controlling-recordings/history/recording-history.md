---
title: storico registrazioni gestionali
sidebar_position: 3
---

En esta pantalla tenemos la lista de los registros creados por el proceso de **elaborazione periodi*** del control: se trata de la base de datos, no editable, que contiene el detalle de cada línea valorada, desde los valores mensualizados de origen contable hasta la individualización de los Cost drivers elaborados (excluyendo aquellos del presupuesto del proyecto, que tienen un procedimiento de cálculo y un formulario de visualización independiente).

:::tip Nota
Dado que la **elaborazione periodi*** del Control cancela y recrea los valores del año, tendremos un único registro por cada año y área elaborada.
:::

Podemos abrir en visualización cada registro para verificar los pasos individuales de elaboración y el detalle de los datos procesados, con plena visibilidad de todas las características de origen de los datos, de la distribución por períodos, del cost driver aplicado y del ciclo de elaboración: desde este formulario, por lo tanto, podemos rastrear las razones lógicas de eventuales incongruencias causadas por configuraciones inconsistentes con los resultados buscados.

Los campos disponibles en la cuadrícula son los siguientes:

- **sottoconto***
- [**area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- [**centro aziendale***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)
- [**centro cedente***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), que se valorará solo para las líneas vinculadas a los drivers
- **anno***
- **periodo***
- **dare***
- **avere***
- **valore fisso***, que sumado al siguiente valor variable dará el valor Debe o Haber anterior
- **valore variabile***, que sumado al previo valor fijo dará el valor Debe o Haber anterior
- **divisione***
- **divisa***, siempre igual a la divisa de la empresa
- **distribuzione periodi*** asociada a la línea
- **tipo riga***, que puede ser
    - *0* es decir, líneas de origen: se usa tanto para las líneas que surgen de los cierres o de los registros manuales de cierre o de área, como también para las líneas de los drivers de atribución
    - *1* es decir, líneas cedidas: para los drivers de rebalanceo, son las líneas que descuentan el valor del *centro aziendale*
    - *2* es decir, líneas recibidas: para los drivers de rebalanceo, son las líneas que trasladan el valor del *Centro cedente* al *centro aziendale*
:::tip Nota
Las líneas de *attribuzione* son sustancialmente las líneas de rebalanceo de los *Cost drivers* que desde el Centro temporal *Cuentas por reasignar* valorizan los *Centros empresariales* reales de la dirección. Los drivers de *rebalanceo (ribaltamento)* son sustancialmente todos los demás.
:::
- **tipo distribuzione*** del driver aplicado
- [**cost driver***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) aplicado
- **sorgente***, es decir, el origen del dato, que puede ser:
    - *contabile* (1), es decir, proveniente directamente del *chiusura infrannuale*
    - *manuale* (2), es decir, proveniente de los *registrazioni extracontabili di area*
    - *formula* (3), es decir, proveniente de registros creados por las *Fórmulas de cálculo*
    - *ammortamenti* (4), es decir, proveniente de registros creados por la elaboración de las amortizaciones del control
    - *Ajustes (Conguagli)* (5), es decir, proveniente de registros de los ajustes interanuales o anuales
    - *Drivers de tarifas (Driver delle tariffe)* (6), es decir, proveniente de los drivers de aplicación de tarifas
    - *rimanenze* (7), es decir, proveniente de registros de existencias en control
    - *Materiales de producción (Materiali produzione)* (8), es decir, proveniente de costos por materiales de producción
    - *lavorazioni esterne* (9), es decir, proveniente de costos de trabajo por encargo
    - *Transformaciones de producción (Trasformazioni di produzione)* (10), es decir, de los trabajos internos en producción
    - *Consolidación de control (Consolidamento controlling)* (15), es decir, del procedimiento de *Consolidación maestra* del control, en instalaciones multi-empresas

:::tip Nota
Existen otras 4 tipologías de orígenes de datos, visibles en el histórico de consolidado de proyecto:
    - *tempo macchina* (11)
    - *tempo uomo* (12)
    - *Ajuste de máquina (attrezzaggio macchina)* (13)
    - *Ajuste de hombre (attrezzaggio uomo)* (14)
:::

- **numero***, **anno***, **riga***, **wbs***: referencias a los proyectos, no valoradas

No se permite la eliminación ni la modificación o inserción de datos en la cuadrícula.