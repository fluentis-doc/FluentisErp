---
title: Contabilización POS
sidebar_position: 4
ai_generated: true
---

El procedimiento se abre a través de la ruta **Ventas > POS > Contabilización > Contabilización POS<!-- Vendite > POS > Contabilizzazione > Contabilizzazione POS -->**.

Para que un POS<!-- POS --> pueda ser contabilizado, debe cumplir una serie de condiciones: en su cabecera debe tener activado el flag *Impresa<!-- Stampata -->* y el tipo de POS<!-- POS --> debe contener la causale<!-- causale --> general para la contabilización<!-- contabilizzazione -->.

:::danger[Atención<!-- Attenzione -->]
El campo **Cuenta<!-- Conto -->** definido en la cabecera del POS<!-- POS --> no es relevante para la gestión de la **Contabilización<!-- Contabilizzazione -->**. La causale contable<!-- causale contabile --> asociada deberá tener en su interior la definición de una cuenta de Cliente **FIJA** y detallada con un código de **subcuenta<!-- sottoconto -->** (por ejemplo, una cuenta "Cliente de ventas diarias<!-- Cliente corrispettivi -->"). El tipo de importe en la línea de la causale para la subcuenta clientes será configurado como *Total Documento / registración<!-- registrazione -->*.
:::

## Contabilización<!-- Contabilizzazione -->

El formulario presenta en la parte superior los filtros de búsqueda para localizar y visualizar, en la cuadrícula, la lista de POS<!-- POS --> pendientes por contabilizar presentes en el sistema.

En la parte inferior del formulario hay algunos parámetros de gestión de la contabilización<!-- contabilizzazione -->:

**Fecha de registro igual a la fecha del documento<!-- Data registrazione uguale alla data documento -->**: este flag impone la contabilización<!-- contabilizzazione --> de cada factura individual en su fecha de emisión.

Si el flag se desactiva, se habilita el siguiente campo, **Fecha de registro<!-- Data registrazione -->**, en el cual es posible establecer una fecha fija de registro;

#### Botones específicos   
> **Buscar<!-- Ricerca -->**: para buscar los POS<!-- POS -->; se mostrarán todos los POS<!-- POS --> impresos y no contabilizados.  
> **Contabilización<!-- Contabilizzazione -->**: ejecuta la contabilización<!-- contabilizzazione --> de los POS<!-- POS --> seleccionados, según los parámetros definidos.  

## Anteriores<!-- Precedenti -->

El formulario presenta la lista de las operaciones de contabilización<!-- contabilizzazione --> realizadas, para visualizarlas y eventualmente anularlas a través de los botones correspondientes.

La anulación será posible solo si el periodo todavía es modificable.

**Contabilización POS<!-- Contabilizzazione POS -->**: cuadrícula con los detalles de las operaciones realizadas. Se llena después del procedimiento de búsqueda y se pueden seleccionar las operaciones sobre las que aplicar las funciones de la cinta de opciones.

Los datos en las cuadrículas inferiores, **Punto de venta<!-- Punto di vendita -->** y **Registro contable<!-- Registrazione contabile -->**, corresponden a la operación seleccionada en la cuadrícula superior. Un doble clic en la sección de puntos de venta/registros permitirá visualizar el punto de venta/el registro contable relacionado.

#### Botones específicos  
> **Buscar<!-- Ricerca -->**: busca la lista de contabilizaciones<!-- contabilizzazioni --> realizadas.  
> **Restaurar contabilización<!-- Ripristina contabilizzazione -->**: con este botón se eliminará toda la contabilización<!-- contabilizzazione --> realizada, con todos los POS<!-- POS --> asociados.