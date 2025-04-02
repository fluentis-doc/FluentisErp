---
title: contabilizzazione pos
sidebar_position: 4
---

El procedimiento se abre a través de la ruta **Ventas > POS > Contabilización > contabilizzazione pos (Vendite > POS > Contabilizzazione > Contabilizzazione POS)**. 

Un POS, para ser contabilizado, debe cumplir una serie de condiciones: en su encabezado debe tener activada la opción *stampata* y el tipo de POS debe contener la causal general para la contabilización.

:::danger[Atención (Attenzione)]
El campo **conto** definido en el encabezado del POS no es relevante para la gestión de la **contabilizzazione**. La causal contable asociada deberá tener dentro de su definición una cuenta de Cliente **fisso** y detallada con un código de **sottoconto** (por ejemplo, una cuenta "Cliente de ingresos"). El tipo de importe en la línea causal para la subcuenta de clientes se establecerá como *Total Documento / registro (Totale Documento / registrazione)*.
:::

## Contabilización (Contabilizzazione)

El formulario presenta en la parte superior los filtros de búsqueda para identificar y visualizar, en la cuadrícula, la lista de los POS a contabilizar presentes en el sistema.

En la parte inferior del formulario hay algunos parámetros de gestión de la contabilización:

**data registrazione uguale alla data documento**: este indicador impone la contabilización de cada factura individual a su fecha de emisión.

Si el indicador se desactiva, se activa el siguiente campo, **data registrazione**, dentro del cual es posible establecer una fecha fija de registro;

#### Botones específicos   
> **ricerca**: para buscar los POS; se proponen todos los POS impresos y no contabilizados.  
> **contabilizzazione**: ejecuta la contabilización de los POS seleccionados, de acuerdo con las configuraciones definidas.  

## Anteriores (Precedenti)

El formulario presenta la lista de las operaciones de contabilización realizadas, con el fin de visualizarlas y, eventualmente, anularlas a través de los botones correspondientes.

La anulación será posible solo si el período es aún modificable.

**contabilizzazione pos**: cuadrícula con los detalles de las operaciones realizadas. Se llena después del procedimiento de búsqueda y se pueden seleccionar las operaciones sobre las que aplicar las funciones de la cinta (ribbon).

Los datos en las cuadrículas inferiores, **punto di vendita** y **registrazione contabile** corresponden a la operación seleccionada en la cuadrícula superior. Un doble clic en la sección de puntos de venta/registro permitirá visualizar el punto de venta/la contabilización correspondiente.

#### Botones específicos  
> **ricerca**: busca la lista de las contabilizaciones realizadas.  
> **ripristina contabilizzazione**: con este botón se borrará toda la contabilización realizada, junto con todos los POS asociados.