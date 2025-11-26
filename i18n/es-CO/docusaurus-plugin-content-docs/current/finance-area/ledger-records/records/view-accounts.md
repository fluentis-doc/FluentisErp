---
title: Visualización de cuentas
sidebar_position: 2
ai_generated: true
---

El formulario permite visualizar los movimientos contables<!-- movimenti contabili --> de cualquier cuenta<!-- conto --> o subcuenta<!-- sottoconto contabile --> contable, de cualquier tipo (activo, pasivo, costos, ingresos o anagráfico): todos los movimientos de todos los ejercicios contables<!-- esercizi contabili --> están siempre en línea, pero claramente podrán ser modificados o no según el cierre del periodo tras la realización definitiva de impresiones fiscales obligatorias o por operaciones de cierre de cuentas<!-- chiusura conti -->.

## Encabezado:<!-- Testata: -->

En la parte superior, es obligatorio ingresar un código de cuenta<!-- conto --> o directamente una subcuenta<!-- sottoconto --> de detalle: los campos de filtro siguientes son opcionales.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image01.png)

 

## La cuadrícula de datos:<!-- La griglia dati: -->

Está ordenada de forma predeterminada por **fecha de registro<!-- data registrazione --> descendente** (el criterio de orden se puede cambiar igualmente) y muestra la lista de movimientos según los filtros configurados:

Con esta configuración, los datos deben leerse teniendo en cuenta que:

-  suponiendo que se filtre con 'desde fecha de registro<!-- da data registrazione -->' 01/01/yyyy, en los campos (superiores) **Saldo anterior<!-- Saldo precedente -->** se mostrarán los totales debe-haber<!-- dare avere --> de los asientos previos al 01/01/yyyy,

- en la cuadrícula de movimientos los datos se presentarán del más reciente al más antiguo (en orden temporal) leyendo de arriba hacia abajo

- el campo **Progresivo** mostrará en la última fila el importe del campo **Saldo anterior<!-- Saldo precedente -->** actualizado con el valor de la propia fila para luego ser actualizado fila a fila desde abajo hacia arriba.


:::note[Nota]
El campo **Progresivo** solo es visible si se mantiene el orden predeterminado que prevé el formulario; de lo contrario, el campo desaparece y para hacerlo reaparecer será necesario cerrar y volver a abrir el formulario y ejecutar nuevamente la búsqueda.
:::


 

## Totales en la parte inferior de la pantalla:<!-- Totali alla base della maschera: -->

**Saldo de selección<!-- Saldo selezione -->**: suma debe/haber<!-- dare/avere --> de las filas que están seleccionadas en la cuadrícula con el mouse; al seleccionar toda la cuadrícula (con ctrl+a), este campo mostrará el mismo resultado que el campo *Saldo corriente<!-- Saldo corrente -->*

**Saldo corriente<!-- Saldo corrente -->**: suma debe/haber<!-- dare/avere --> de las filas visualizadas en la cuadrícula (siempre todas, independientemente de la selección hecha con el mouse);

**Total<!-- Totale -->**: suma debe/haber<!-- dare/avere --> del saldo anterior<!-- saldo precedente --> y del saldo corriente<!-- saldo corrente -->;

**Saldo<!-- Saldo -->**: saldo final, ya sea en debe o en haber (que siempre corresponderá al progresivo mostrado en la primera fila).


:::tip[Cómo leer e interpretar los totales<!-- Come leggere e interpretare i totali -->]
**Debe/Haber anterior<!-- Dare/Avere precedente -->** (al rango filtrado y desde la última apertura de cuentas<!-- apertura conti -->) **+ Saldo corriente = Total<!-- Totale -->** (ambas columnas debe / haber se completan siempre en estos 3 bloques).

**Saldo anterior +  Saldo corriente<!-- Saldo precedente +  Saldo corrente -->** (como diferencia debe-haber<!-- dare-avere -->) **= Saldo<!-- Saldo -->** (actual)

El *Saldo corriente<!-- Saldo Corrente -->* se muestra en ambas secciones para evidenciar analíticamente la formación del *Total<!-- Totale -->* (ya que para calcularlo se suma al Saldo corriente las dos secciones separadas *Debe / Haber anterior<!-- Dare / Avere precedente -->*)

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image04.png)

:::


En la cuadrícula son visibles dos series de subcuentas<!-- sottoconti --> visualizadas, la subcuenta principal<!-- sottoconto intestazione --> (que se toma de la subcuenta titular<!-- sottoconto intestatario --> del asiento del que proviene el propio movimiento<!-- movimento -->) y la subcuenta de detalle que es efectivamente la subcuenta<!-- sottoconto --> cuyos movimientos se están consultando. Por ejemplo, si se están visualizando los movimientos de una cuenta<!-- conto --> genérica de costo, se tendrá en la subcuenta principal<!-- sottoconto intestazione --> los códigos de los proveedores que enviaron facturas registradas a esa cuenta<!-- conto --> de costo y en la subcuenta de detalle las distintas subcuentas<!-- sottoconto --> de costo específicas registradas.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image02.png)

 

Además, es posible "expandir" la fila mediante el comando + a la izquierda para visualizar todo el asiento contable<!-- scrittura contabile -->.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image03.png)

 

Otras operaciones que se pueden realizar en la cuadrícula de resultados:

- Doble clic sobre la fila mostrada: en este caso, si el usuario tiene los permisos requeridos, se abrirá en modo edición el asiento<!-- registrazione --> al que pertenece el movimiento<!-- movimento -->;

- Presionar el botón **Modificar<!-- Modifica -->** situado en la barra de herramientas tendrá el mismo efecto que el doble clic recién descrito;

- Presionar el botón **Doc. Origen<!-- Doc. Origine -->**, cuando esté activo, abrirá en vista (si el usuario tiene los permisos) la factura de compra o de venta que, mediante su contabilización, generó el movimiento<!-- movimento di contabilità --> contable seleccionado;

ÁREA DE FILTRO: el área de filtro está destinada a alojar la lista de los posibles tipos de datos con los cuales se puede realizar una selección. Los filtros suelen estar siempre en condición 'AND' y es posible especificar múltiples criterios de filtro simultáneamente.

CUADRÍCULA DE RESULTADOS: la cuadrícula de resultados representa la lista de asientos<!-- registrazioni --> que cumplen con los datos de filtro arriba especificados. El usuario, tras especificar los valores a través de los cuales desea obtener una búsqueda de asientos<!-- registrazioni -->, al presionar el botón [Buscar<!-- Ricerca -->] presente en la barra correspondiente, obtendrá en la cuadrícula de resultados la lista de asientos<!-- registrazioni --> deseados.

:::important También ver<!-- Vedi Anche -->
[**VIDEO TUTORIALES SOBRE LOS REGISTROS CONTABLES**](/docs/video/finance/intro)
:::