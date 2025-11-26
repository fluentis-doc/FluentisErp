---
title: Consolidación master
sidebar_position: 5
ai_generated: true
---

El procedimiento de ***Consolidación master***<!-- Consolidamento master --> está dedicado a las instalaciones multiempresa: configurando la sociedad master en una empresa, será posible enlazar el plan de cuentas<!-- piano dei conti --> de las sociedades "slave" con la cuenta de la master.

El procedimiento de consolidación tomará los datos de la dimensión seleccionada de las sociedades slave para trasladarlos a la master en la dimensión de destino.
En este paso se reemplazará el subcuenta<!-- sottoconto --> de la línea de origen por el correspondiente de la sociedad master, mientras que para el centro de costo se buscarán los centros *con el mismo código*<!-- con lo stesso codice -->.

:::tip Nota<!-- Nota -->
En caso de subcuentas<!-- sottoconti --> no mapeadas o centros no codificados de forma uniforme, el procedimiento reportará un error
:::

El resultado de la consolidación será tener en la sociedad Master los datos del ***Histórico de registros de gestión***<!-- Storico registrazioni gestionali --> acumulados de todas las sociedades hijas, con el fin de crear una reportería de grupo. Potencialmente, también en esta sociedad master se podrá aplicar una nueva serie de drivers de cálculo