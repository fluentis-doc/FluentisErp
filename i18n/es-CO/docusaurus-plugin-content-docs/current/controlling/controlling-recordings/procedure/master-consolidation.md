---
title: consolidamento master
sidebar_position: 5
---

El procedimiento de **consolidamento master*** está dedicado a las instalaciones multiosociativas: al configurar la empresa maestra en una compañía, podremos conectar el plan de cuentas de las compañías ‘esclavas’ a la cuenta de la maestra.

El procedimiento de consolidación tomará los datos de la dimensión seleccionada de las empresas esclavas para llevarlos a la maestra en la dimensión de destino.  
En este paso, se reemplazará la subcuenta de la línea de origen con la de la empresa maestra, mientras que para el centro de costos se buscarán los centros *con el mismo código*.

:::tip Nota
En el caso de subcuentas no mapeadas o centros no codificados de manera uniforme, el procedimiento informará un error.
:::

El resultado de la consolidación será que en la empresa Maestra se tendrán los datos del **storico registrazioni gestionali*** acumulados de todas las empresas hijas, con el fin de crear una reportística de grupo. Potencialmente, en esta empresa maestra también podremos aplicar una nueva serie de controladores de cálculo.