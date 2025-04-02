---
title: registrazioni gestionali
sidebar_position: 3
---

Esta máscara es esencialmente la misma que el **storico registrazioni gestionali***, es decir, muestra el resultado de la **elaborazione periodi*** pero filtrando únicamente las líneas que están directamente imputadas a un proyecto/obra, es decir, típicamente serán los costos/ingresos directamente imputados a la dimensión de análisis por proyecto/obra.

Los campos son los mismos que los del formulario genérico de la dimensión direccional, son:

- **sottoconto***
- [**area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- [**centro aziendale***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)
- [**centro cedente***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), que solo se valorará para las líneas relacionadas con los drivers
- **anno***
- **periodo***
- **dare***
- **avere***
- **valore fisso***, que sumado al siguiente valor variable dará el valor de Debe o Haber anterior
- **valore variabile***, que sumado al valor fijo anterior dará el valor de Debe o Haber anterior
- **divisione***
- **divisa***, siempre igual a la moneda de la empresa
- **distribuzione periodi*** asociada a la línea
- **tipo riga***, que pueden ser:
    - *0* es decir líneas de origen: se utiliza tanto para las líneas que nacen de los cierres o de los registros manuales de cierre o de área, como para las líneas de los drivers de atribución
    - *1* es decir líneas cedidas: para los drivers de traspaso, son las líneas que restan el valor del *Centro empresarial*
    - *2* es decir líneas recibidas: para los drivers de traspaso, son las líneas que traspasan el valor del *Centro cedente* al *Centro empresarial*
:::tip Nota
Las líneas de *atribución* son esencialmente las líneas de traspaso de los *Cost drivers* que desde el Centro de conveniencia *Cuentas por reasignar* valoran los *Centros empresariales* reales de la dirección. Los drivers de *traspaso* son esencialmente todos los demás.
:::
- **tipo distribuzione*** del driver aplicado
- [**cost driver***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) aplicado
- **sorgente***, es decir, el origen de los datos, que puede ser:
    - *Contable (1)*, es decir, proveniente directamente del *Cierre interanual*
    - *Manual (2)*, es decir, proveniente de los *Registros extracontables de área*
    - *Fórmula (3)*, es decir, proveniente de registros creados por las *Fórmulas de cálculo*
    - *Amortizaciones (4)*, es decir, proveniente de registros creados por la elaboración de las amortizaciones del controlling
    - *Ajustes (5)*, es decir, proveniente de registros de los ajustes interanuales o anuales
    - *Drivers de tarifas (6)*, es decir, proveniente de los drivers de aplicación de las tarifas
    - *Existencias (7)*, es decir, proveniente de registros de las existencias en el controlling
    - *Materiales de producción (8)*, es decir, proveniente de costos por los materiales de producción
    - *Trabajos externos (9)*, es decir, proveniente de costos del trabajo por encargo
    - *Transformaciones de producción (10)*, es decir, de los trabajos internos en producción
    - *Consolidación del controlling (15)*, es decir, del procedimiento de *Consolidación master* del controlling, en instalaciones multisocietarias

:::tip Nota
Existen otras 4 tipologías de orígenes de datos, visibles en el histórico del consolidado de proyecto:
    - *tiempo de máquina (11)*
    - *tiempo de hombre (12)*
    - *ajuste de máquina (13)*
    - *ajuste de hombre (14)*
:::

- **numero***, **anno***, **riga***, **wbs***: siempre estarán valorados por los referentes a los proyectos.

No se permite la eliminación ni la modificación o la inserción de datos en la cuadrícula.