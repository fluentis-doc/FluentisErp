---
title: visualizzazione conti
sidebar_position: 2
---

El formulario permite visualizar los movimientos contables de cualquier cuenta o subcuenta contable, de cualquier tipo (activo, pasivo, costos, ingresos o anagráfico): todos los movimientos de todos los ejercicios contables están siempre en línea, pero claramente pueden ser modificados o no según el cierre del período tras las impresiones fiscales obligatorias realizadas de forma definitiva o por operaciones de cierre de cuentas.

## Encabezado (Testata):

En la parte superior es obligatorio ingresar un código de cuenta o directamente una subcuenta de detalle: los campos de filtro siguientes, en cambio, son opcionales.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image01.png)



## La cuadrícula de datos (La griglia dati):

Está ordenada por defecto por fecha de registro en orden descendente**, (el criterio de ordenamiento puede ser modificado) y muestra la lista de movimientos según los filtros establecidos:

Con esta configuración, los datos deben leerse teniendo en cuenta que:

- suponiendo que se filtre con "desde fecha de registro" 01/01/yyyy, tendremos en los campos (en la parte superior) **Saldo anterior** los totales de los registros anteriores al 01/01/yyyy,

- en la cuadrícula de movimientos, los datos se presentarán de más reciente a más antiguo (temporalmente) y se leerán de arriba hacia abajo.

- el campo **Progresivo** mostrará en la última línea el monto del campo **Saldo anterior** actualizado con el valor de la fila misma y luego se irá actualizando fila por fila de abajo hacia arriba.


:::note[Nota]
El campo **Progresivo** es visible solo si se mantiene el ordenamiento predeterminado previsto para el formulario; en otros casos, el campo desaparece y para que vuelva a aparecer será necesario cerrar y volver a abrir el formulario y así reiniciar la búsqueda. 
:::



## Totales al pie del formulario (Totali alla base della maschera):

**Saldo selección**: suma de los débitos/créditos de las filas que están seleccionadas en la cuadrícula con el mouse; al seleccionar todo en la cuadrícula (con ctrl+a), este campo mostrará el mismo resultado que el campo *Saldo actual*.

**Saldo actual**: suma de los débitos/créditos de las filas que se muestran en la cuadrícula (siempre todas, independientemente de la selección realizada con el mouse);  

**Total**: suma de los saldos anterior y actual;  

**Saldo**: saldo final, ya sea en débito o en crédito (que corresponderá siempre al progresivo mostrado en la primera fila).


:::tip[Cómo leer e interpretar los totales]
**Débito/Crédito anterior** (al rango filtrado y desde la última apertura de cuentas) **+ Saldo actual = Total** (ambas columnas de débito/crédito están valorizadas siempre en estos 3 bloques).

**Saldo anterior + Saldo actual** (como diferencia entre débito y crédito) **= Saldo** (actual)

El *Saldo Actual* se representa en ambas secciones para resaltar analíticamente la formación del *Total* (ya que para calcularlo se suman al Saldo actual las dos secciones distintas *Débito / Crédito anterior*).

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image04.png)

:::


En la cuadrícula son visibles dos series de subcuentas, la subcuenta encabezada (que se toma de la subcuenta titular del registro del cual proviene el movimiento) y la subcuenta de detalle que es efectivamente la subcuenta de la que se están buscando los movimientos. Por ejemplo, en el caso de que se estén visualizando los movimientos de una cuenta genérica de costo, tendremos en la subcuenta encabezada los códigos de los proveedores que nos han enviado facturas registradas a esa cuenta de costos y en la subcuenta de detalle los distintos subcuentas de costo específicos registrados.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image02.png)


Además, es posible "expandir" la fila mediante el comando + a la izquierda para visualizar el asiento contable completo.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image03.png)


Otras operaciones que se pueden realizar con respecto a la cuadrícula de resultados:

- Doble clic en la fila individual mostrada: en este caso, si el usuario tiene los derechos correspondientes, se abrirá para editar el registro de pertenencia del movimiento;

- Presionar el botón **Modificar** situado en la barra de ribbon tendrá el mismo efecto que el doble clic descrito anteriormente;

- Presionar el botón **Doc. Origen**, cuando esté activo, abrirá en visualización (si el usuario tiene el derecho) la factura de compra o venta que con la contabilización ha creado el movimiento contable seleccionado;

ÁREA DE FILTRO: el área de filtro está dedicada a albergar la lista de los posibles tipos de datos mediante los cuales es posible realizar una selección. Los filtros suelen estar en condición 'AND' y es posible especificar múltiples criterios de filtro simultáneamente.

CUADRÍCULA DE RESULTADO: la cuadrícula de resultado representa la lista de los registros que corresponden a los datos de filtro especificados anteriormente. El usuario, después de especificar los valores a través de los cuales desea realizar una búsqueda de registros, si presiona el botón [Buscar] presente en la barra de ribbon correspondiente, obtendrá en la cuadrícula de resultados la lista de los registros deseados.

:::important Ver También
[**VIDEO TUTORIALES SOBRE REGISTROS CONTABLES**](/docs/video/finance/intro)
:::