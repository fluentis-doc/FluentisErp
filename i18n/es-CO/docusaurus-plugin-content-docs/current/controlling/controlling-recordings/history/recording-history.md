---

title: Histórico de registros de gestión
sidebar_position: 3
ai_generated: true
---

En esta pantalla tenemos la lista de los registros creados por el procedimiento de ***Procesamiento de períodos***<!-- Elaborazione periodi --> del controlling<!-- controlling -->: se trata de la base de datos, no editable, que contiene el detalle de cada línea valorizada, desde los valores mensualizados de origen contable hasta el único prorrateo de los *Cost driver* procesados (excepto los del cierre de proyecto, que tienen un procedimiento de cálculo y un formulario de visualización aparte).

:::tip Nota<!-- Nota -->
Dado que el ***Procesamiento de períodos***<!-- Elaborazione periodi --> del Controlling elimina y vuelve a crear los valores del año, tendremos un único registro por cada año y área procesada.
:::

Podemos abrir en modo visualización cada registro para verificar los distintos pasos del procesamiento y el detalle de los datos procesados, con total visibilidad de todas las características de origen del dato, la distribución de períodos, el cost driver aplicado y el ciclo de procesamiento: desde este formulario, por tanto, podemos rastrear las causas lógicas de posibles incoherencias ocasionadas por configuraciones inconsistentes con los resultados esperados.

Los campos disponibles en la cuadrícula son los siguientes:

- ***Subcuenta***<!-- Sottoconto -->
- [***Área***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)<!-- Area -->
- [***Centro empresarial***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)<!-- Centro aziendale -->
- [***Centro cedente***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)<!-- Centro cedente -->, que solo se valorará para las líneas relacionadas con los drivers
- ***Año***<!-- Anno -->
- ***Período***<!-- Periodo -->
- ***Debe***<!-- Dare -->
- ***Haber***<!-- Avere -->
- ***Valor fijo***<!-- Valore fisso -->, que sumado al siguiente valor variable dará el valor de Debe o Haber anterior.
- ***Valor variable***<!-- Valore variabile -->, que sumado al valor fijo anterior dará el valor de Debe o Haber anterior.
- ***División***<!-- Divisione -->
- ***Divisa***, siempre igual a la moneda de la empresa<!-- sempre uguale alla divisa della società -->
- ***Distribución de períodos***<!-- Distribuzione periodi --> asociada a la línea
- ***Tipo de línea***<!-- Tipo riga -->, que pueden ser
    - *0*, es decir, líneas de origen: se utiliza tanto para las líneas que provienen de los cierres o registros manuales de cierre o de área, como también para las líneas de los drivers de imputación
    - *1*, es decir, líneas cedidas: para los drivers de prorrateo, son las líneas que revocan el valor del *Centro empresarial*<!-- Centro aziendale -->
    - *2*, es decir, líneas recibidas: para los drivers de prorrateo, son las líneas que transfieren el valor desde el *Centro cedente* al *Centro empresarial*<!-- Centro cedente > Centro aziendale -->
:::tip Nota<!-- Nota -->
Las líneas de *imputación* son esencialmente las líneas de prorrateo de los *Cost driver* que, desde el centro temporal *Cuentas por reasignar* valorizan los *Centros empresariales*<!-- Centri aziendali --> efectivos de la dirección. Los drivers de *prorrateo* son básicamente todos los demás.
:::
- ***Tipo de distribución***<!-- Tipo distribuzione --> del driver aplicado
- [***Cost driver***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) aplicado
- ***Fuente***<!-- Sorgente -->, es decir, el origen del dato, que puede ser:
    - *Contable* (1), es decir, proveniente directamente del *Cierre interanual*<!-- Chiusura infrannuale -->
    - *Manual* (2), es decir, proveniente de los *Registros extracontables de área*<!-- Registrazioni extracontabili di area -->
    - *Fórmula* (3), es decir, proveniente de registros creados por las *Fórmulas de cálculo*<!-- Formule di calcolo -->
    - *Amortizaciones* (4), es decir, proveniente de registros creados por el procesamiento de las amortizaciones del controlling<!-- ammortamenti del controlling -->
    - *Ajustes* (5), es decir, proveniente de registros de ajustes interanuales o anuales<!-- conguagli infrannuali o annuali -->
    - *Driver de tarifas* (6), es decir, proveniente de los drivers de aplicación de tarifas 
    - *Existencias* (7), es decir, proveniente de registros de existencias en controlling<!-- rimanenze nel controlling -->
    - *Materiales de producción* (8), es decir, proveniente de costes por materiales de producción
    - *Trabajos externos* (9), es decir, proveniente de costes de la cuenta de trabajo<!-- conto lavoro -->
    - *Transformaciones de producción* (10), es decir, de los trabajos internos en producción<!-- lavorazioni interne in produzione -->
    - *Consolidación controlling* (15), es decir, del procedimiento de *Consolidación master*<!-- Consolidamento master --> del controlling, en instalaciones multisocietarias

:::tip Nota<!-- Nota -->
Existen otros 4 tipos de orígenes de datos, visibles en el histórico del consolidado de proyecto:
    - *tiempo máquina* (11)
    - *tiempo hombre* (12)
    - *preparación máquina* (13)
    - *preparación hombre* (14)
:::

- ***Número***, ***Año***, ***Línea***, ***Wbs***: referencias a los proyectos, no valorizados.

No está permitido eliminar, modificar ni insertar datos en la cuadrícula.