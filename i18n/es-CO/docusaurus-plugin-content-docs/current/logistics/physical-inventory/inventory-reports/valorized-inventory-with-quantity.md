---
title: Inventario de cantidades valorizadas
sidebar_position: 1
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
El informe "Inventario de cantidades valorizadas<!-- Inventario quantità valorizzato -->" de Fluentis representa una herramienta clave para la gestión y el monitoreo de las existencias de inventario<!-- giacenze di magazzino -->, permitiendo a las empresas tener una visión clara y detallada de sus stocks<!-- scorte -->. A través de este informe, los usuarios pueden acceder a información completa no solo sobre las cantidades físicas de los artículos presentes en inventario<!-- magazzino -->, sino también sobre su valor, obtenido mediante diferentes lógicas de valoración como costo medio, último costo, FIFO y LIFO.

La generación del informe se realiza mediante filtros personalizables, que permiten visualizar datos específicos por inventario<!-- magazzino -->, artículo, categoría comercial y más, facilitando el análisis y la gestión de las existencias. Los usuarios pueden también agrupar y ordenar los datos según parámetros significativos, haciendo que todo el proceso de control de inventario sea más eficiente e informado.

Este informe no solo apoya las decisiones operativas diarias, sino que también es crucial para garantizar el cumplimiento normativo y para llevar a cabo análisis financieros y de desempeño dentro de la organización.
:::

La impresión permite al usuario visualizar un informe que contiene la información relativa al inventario<!-- inventario -->.
El formulario se compone de una parte superior que contiene una serie de filtros (inventario<!-- magazzino -->, motivo<!-- causale -->, artículo/variante, tipo de artículo, categoría fiscal, categoría comercial,...) que permiten visualizar los datos deseados.

Además, a través de una serie de casillas dedicadas es posible:

- agrupar los datos por artículo o inventario<!-- magazzino -->;
- ordenarlos por artículo, característica, descripción y categoría comercial;
- obtener un detalle por variante, ubicación, obra<!-- commessa -->, lote o cliente/proveedor;
- visualizar los artículos con stock<!-- giacenza --> positivo, nulo o negativo.

Al activar la casilla **Con valoración al<!-- Con valorizzazione al -->**, se incluirá también en el informe de inventario<!-- inventario --> el valor de cada artículo en función de los siguientes indicadores:

- **Costo medio**: si está activo, los artículos se valoran con el costo medio calculado en base a los movimientos de inventario<!-- movimenti di magazzino --> (si la casilla **Desde ficha de artículo<!-- Da anagrafica articolo -->** está deshabilitada);
- **Último costo<!-- Costo ultimo -->**: si está activo, los artículos se valorizan con el último costo calculado en base a los movimientos de inventario<!-- movimenti di magazzino --> (si la casilla **Desde ficha de artículo<!-- Da anagrafica articolo -->** está deshabilitada);
- **FIFO anual<!-- FIFO a scatti annuali -->**: si está activo, los artículos se valorizan mediante la lógica FIFO anual;
- **LIFO anual<!-- LIFO a scatti annuali -->**: si está activo, los artículos se valorizan mediante la lógica LIFO anual;
- **Área de gestión<!-- Area gestionale -->**: si está activo, los artículos se valorizan basándose en el área de gestión indicada para ese inventario<!-- magazzino --> dentro de la tabla [Inventarios<!-- Magazzini -->](/docs/configurations/tables/logistics/warehouses/);
- **Por costo efectivo de lotes<!-- Da costo effettivo lotti -->**: si está activo, los artículos se valorizan con el valor indicado en la ficha de lotes;
- **Desde ficha de artículo<!-- Da anagrafica articolo -->**: si está activo, junto con las casillas **Costo medio** o **Último costo<!-- Costo ultimo -->**, los artículos se valorizan respectivamente con el costo medio o último, pero basado en los costos insertados en la ficha de artículo;
- **Historización de inventario<!-- Storicizzazione inventario -->**: si está activo, los datos del proceso se guardarán en el [Historial de inventario<!-- Storico magazzino -->](/docs/logistics/physical-inventory/warehouse-history);
- **Desde historización<!-- Da storicizzazione -->**: si está activo, los artículos se valorizan con los valores presentes en el [Historial de inventario<!-- Storico magazzino -->](/docs/logistics/physical-inventory/warehouse-history) con fecha igual a la indicada en el campo **Fecha de costo histórico<!-- Data costo storico -->**;
- **Fecha de costo histórico<!-- Data costo storico -->**: sólo se habilita si la casilla **Desde historización<!-- Da storicizzazione -->** está activa, permite ingresar la fecha del costo histórico que se utilizará para la valoración.

Después de introducir los parámetros deseados es posible imprimir informes estándar o personalizados (previa configuración en la gestión de impresiones). En caso de querer imprimir un informe personalizado, es necesario elegirlo en la lista de parámetros de impresión.

De forma estándar se encuentran disponibles los siguientes informes:

- **Impresión FIFO<!-- Stampa FIFO -->**: se trata de un informe con lógica FIFO para inventarios<!-- inventari --> (debe usarse junto con la casilla **FIFO anual<!-- FIFO a scatti annuali -->**);
- **Impresión de inventario<!-- Stampa inventario -->**: se trata de un informe estándar para inventarios<!-- inventari -->;
- **Impresión LIFO<!-- Stampa LIFO -->**: se trata de un informe con lógica LIFO para inventarios<!-- inventari --> (debe usarse junto con la casilla **LIFO anual<!-- LIFO a scatti annuali -->**).


**LIFO anual<!-- LIFO a scatti annuali -->**

El LIFO anual<!-- LIFO a scatti annuali --> realizado sin considerar la casilla *Desde ficha de artículos<!-- Da Anagrafica Articoli -->* o *Área de gestión<!-- Area Gestionale -->* funciona de la siguiente manera:

En el año en curso, es decir, desde la última fecha de cierre hasta la fecha *Inventario a<!-- Inventario Al -->*, se calcula el stock<!-- giacenza --> y el costo medio.

Para el cálculo del costo medio ponderado se consideran todos los movimientos de artículos con casilla de interés fiscal activa de los registros<!-- registrazioni --> de inventario<!-- magazzino --> con motivo<!-- causale --> que actualiza el costo medio y de interés fiscal.

Para el cálculo del stock<!-- giacenza --> se consideran todos los movimientos de artículos con casilla de interés fiscal activa de los registros<!-- registrazioni --> de inventario<!-- magazzino --> con motivo<!-- causale --> de interés fiscal.

Obtenido el inventario<!-- giacenza --> al final del periodo, se verifican las estratificaciones LIFO en el *Historial de inventario<!-- Storico di magazzino -->*, calculando hacia atrás la existencia de cada año, y luego para cada año se multiplica la existencia del año por el costo medio de ese año y sumando los valores de cada año de la estratificación se obtiene el costo FIFO de cada artículo.
Si en el *Historial de inventario<!-- Storico di magazzino -->* existen años con existencia 0, la búsqueda de las estratificaciones LIFO se detiene y la valoración empieza desde el año estratificado siguiente.

:::note Nota
Para todos los años anteriores al último cierre de inventario<!-- chiusura di magazzino --> se considera la existencia a fin de año, sin desglosarla por inventario<!-- magazzino -->.  
En consecuencia, para los informes LIFO y FIFO solo es posible aplicar el filtro de *agrupación por inventario<!-- raggruppamento per magazzino -->* para el año en curso, es decir, para todos los registros realizados después de la fecha del último cierre de inventario<!-- chiusura del magazzino -->.
:::

Veamos un ejemplo:

el cierre de inventario<!-- chiusura di magazzino --> es con fecha 31/12/2023  
hoy hacemos la impresión del inventario valorizado del artículo A que tiene stock<!-- giacenza --> al 23/05/2024 de 170 y costo medio al 23/05/2024 de 3 euros  
En el historial para el artículo A encontramos:

| Año | Existencia | Costo medio |
| :-- | :-: | :-: |
| 2020 | 100 | 2 |
| 2021 |   0 | 0 |
| 2022 |  60 | 1,5 |
| 2023 | 100 | 2,5 |         

El cálculo se realiza así:  
170 de hoy son seguramente 100 del 2023, de los 100 del 2023, 60 son seguramente del 2022, no pueden ser del 2021 porque la existencia era 0.  
Entonces el costo LIFO al 23/05/2024 es:  
((60 * 1,5) + (40 * 2,5) +(70 * 3)) /170 = 2,35

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios de impresión, consulte el siguiente enlace [Vista previa e impresión<!-- Anteprima e stampa -->](/docs/guide/common/operations-with-data/reports).