---
title: consolidato di commessa
sidebar_position: 5
---

En cada Elaboración de un **consolidato di progetto*** creado desde la máscara de **elaborazione periodi*** encontraremos aquí el registro correspondiente que contiene el detalle de todos los costos e ingresos asignados a proyectos, sean estos directos o indirectos por transferencia de cost drivers aplicados a los datos de la dimensión direccional.

Los campos visualizados son:

- **sottoconto***
- [**area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- [**centro aziendale***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): en este caso se trata del *Centro de proyecto/commessa*, es decir, del centro que tiene el indicador 'Default para dimensión proyectos' en lugar del centro asignado al proyecto a través de la tabla de ***Asociación de centros de proyectos/commesse (Associazione centri progetti/commesse)***.
- [**centro cedente***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), que será valorado por el centro de origen del movimiento, ya sea derivado de un cost driver o no.
- **anno***
- **periodo***
- **dare***
- **avere***
- **valore fisso***, que sumado al siguiente valor variable dará el valor Debe o Haber anterior.
- **valore variabile***, que sumado al anterior valor fijo dará el valor Debe o Haber anterior.
- **divisione***
- **divisa***, siempre igual a la moneda de la empresa.
- **tipo riga***, que pueden ser:
    - *0* es decir, líneas de origen: se utiliza tanto para las líneas que nacen de los cierres o de las registraciones manuales de cierre o de área, como para las líneas de los drivers de asignación.
    - *2* líneas recibidas: para los drivers de transferencia, son las líneas que transfieren el valor del *Centro cedente* al *Centro empresarial*.
:::tip Nota
Las líneas de *attribuzione* son, en esencia, las líneas de transferencia de los *Cost drivers* que del centro de conveniencia *Cuentas por reasignar* valoran los *Centros empresariales* reales de la dirección. Los drivers de *transferencia (ribaltamento)* son, en esencia, todos los demás.
:::
- **tipo distribuzione*** del driver aplicado.
- [**cost driver***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) aplicado.
- **sorgente***, es decir, el origen del dato, que puede ser:
    - *Contable (1)*, es decir, proveniente directamente del *chiusura infrannuale*.
    - *Manual (2)*, es decir, proveniente de las *registrazioni extracontabili di area*.
    - *Fórmula (3)*, es decir, proveniente de registros creados a partir de las *Fórmulas de cálculo*.
    - *A amortizaciones (4)*, es decir, proveniente de registros creados por el procesamiento de amortizaciones del controlling.
    - *Ajustes (5)*, es decir, proveniente de registros de ajustes interanuales o anuales.
    - *Drivers de tarifas (6)*, es decir, provenientes de los drivers de aplicación de tarifas.
    - *Inventarios (7)*, es decir, provenientes de registros de inventarios en controlling.
    - *Materiales de producción (8)*, es decir, provenientes de costos por materiales de producción.
    - *Trabajos externos (9)*, es decir, provenientes de costos de cuentas por trabajo.
    - *Transformaciones de producción (10)*, es decir, de los trabajos internos en producción.
    - *Tiempo de máquina (11)*.
    - *Tiempo hombre (12)*.
    - *Preparación de máquina (13)*.
    - *Preparación hombre (14)*.
    - *Consolidación de controlling (Consolidamento controlling)* (15), es decir, de la procedencia del *consolidamento master* del controlling, en instalaciones multisocietarias.
:::

- **tipo costo*** aplicado a la línea, para las líneas con origen *Materiales*.

- **numero***, **anno***, **riga***, ***Wbs***: referencias a los proyectos, no valorizados.

- [**unità di misura***](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), **articolo***, **descrizione articolo***, **fase***, **sottofase***, **numero***, **descrizione*** y **quantità*** del artículo producido o trabajado.

No se permite la eliminación ni la modificación o inserción de datos en la cuadrícula.