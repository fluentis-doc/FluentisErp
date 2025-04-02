---
title: inventario quantità valorizzato
sidebar_position: 1
---

:::important ¿Para qué sirve? (A cosa serve)
El informe "inventario quantità valorizzato" de Fluentis representa una herramienta clave para la gestión y el monitoreo de las existencias en el almacén, permitiendo a las empresas tener una visión clara y detallada de sus inventarios. A través de este informe, los usuarios pueden acceder a información completa no solo sobre las cantidades físicas de los artículos presentes en el almacén, sino también sobre su valor, obtenido mediante diferentes lógicas de valorización como costo promedio, costo último, FIFO y LIFO.

La generación del informe se realiza a través de filtros personalizables, que permiten visualizar datos específicos por almacén, artículo, categoría mercantil y más, facilitando el análisis y la gestión de las existencias. Los usuarios también pueden agrupar y ordenar los datos según parámetros significativos, haciendo que todo el proceso de control de inventarios sea más eficiente e informado.

Este informe no solo apoya las decisiones operativas diarias, sino que también es crucial para garantizar el cumplimiento normativo y para realizar análisis financieros y de rendimiento dentro de la organización.
:::

La impresión permite al usuario visualizar un informe que contiene la información relacionada con el inventario.  
El formulario se compone de una parte superior que contiene una serie de filtros (almacén, motivo, artículo/variante, tipo de artículo, categoría fiscal, categoría mercantil,...) que permiten visualizar los datos deseados.

Además, a través de una serie de cuadros dedicados es posible:

- agrupar los datos por artículo o almacén;  
- ordenarlos por artículo, característica, descripción y categoría mercantil;  
- tener un detalle por variante, ubicación, proyecto, lote o cliente/proveedor;  
- visualizar los artículos con saldo positivo, cero o negativo.

Activando el cuadro **con valorizzazione al**, se insertará dentro del informe del inventario también el valor del artículo individual en base a los siguientes indicadores:

- **costo medio**: si está activo, los artículos se valoran con el costo medio calculado en función de los movimientos de almacén (si el indicador **Desde registro de artículo (Da anagrafica articolo)** está desactivado);  
- **costo ultimo**: si está activo, los artículos se valoran con el costo último calculado en función de los movimientos de almacén (si el indicador **Desde registro de artículo (Da anagrafica articolo)** está desactivado);  
- **fifo a scatti annuali**: si está activo, los artículos se valoran con la lógica FIFO a escalones anuales;  
- **lifo a scatti annuali**: si está activo, los artículos se valoran con la lógica LIFO a escalones anuales;  
- **area gestionale**: si está activo, los artículos se valoran en función del área de gestión indicada para ese almacén dentro de la tabla [Almacenes (Magazzini)](/docs/configurations/tables/logistics/warehouses/);  
- **da costo effettivo lotti**: si está activo, los artículos se valoran con el valor indicado en el registro de lotes;  
- **Desde registro de artículo (Da anagrafica articolo)**: si está activo, en conjunto con los indicadores **costo medio** o **costo ultimo**, los artículos se valorarán respectivamente a costo medio o último, pero sobre la base de los costos correspondientes registrados en el registro de artículos;  
- **storicizzazione inventario**: si está activo, los datos del procesamiento se guardarán en el [Historial de almacén (Storico magazzino)](/docs/logistics/physical-inventory/warehouse-history);  
- **da storicizzazione**: si está activo, los artículos se valoran con los valores presentes en el [Historial de almacén (Storico magazzino)](/docs/logistics/physical-inventory/warehouse-history) con fecha igual a la indicada en el campo **data costo storico**;  
- **data costo storico**: se habilita solo si el indicador **da storicizzazione** está activo, permite ingresar la fecha del costo histórico a utilizar para la valorización.

Después de la inserción de los parámetros deseados, es posible imprimir informes estándar o personalizados (previa mapeo en la gestión de impresiones). En caso de querer imprimir un informe personalizado, es necesario elegirlo desde el listado en los parámetros de impresión.

Están disponibles los siguientes informes estándar:

- **stampa fifo**: se trata de un informe con lógica FIFO para los inventarios (a utilizar en conjunto con el uso del indicador **fifo a scatti annuali**);  
- **stampa inventario**: se trata de un informe estándar para los inventarios;  
- **stampa lifo**: se trata de un informe con lógica LIFO para los inventarios (a utilizar en conjunto con el uso del indicador **lifo a scatti annuali**).

**lifo a scatti annuali**

El LIFO a escalones anuales ejecutado sin considerar el indicador *da anagrafica articoli* o *area gestionale* funciona de la siguiente manera:

En el año en curso, es decir, desde la fecha del último cierre hasta la fecha *Inventario Al*, se calcula el saldo y el costo medio.  

Para el cálculo del costo medio ponderado se consideran todos los movimientos de artículos con impacto fiscal activo de los registros de almacén con motivo que actualiza el costo medio y de impacto fiscal.

Para el cálculo del saldo se consideran todos los movimientos de artículos con impacto fiscal activo de los registros de almacén con motivo de impacto fiscal.

Una vez obtenido el saldo al final del período, se verifican las estratificaciones LIFO en el *Historial de almacén (Storico di magazzino)*, calculando hacia atrás los saldos de cada año; luego, para cada año, se multiplica el saldo del año por el costo medio del año, y al sumar los valores de cada año de la estratificación se obtiene el costo FIFO de cada artículo.  
Si en el *Historial de almacén (Storico di magazzino)* hay años con saldo 0, la búsqueda de estratificaciones LIFO se detiene y se valora desde el año estratificado siguiente.

:::note Nota
Para todos los años anteriores al último cierre de almacén, se considera el saldo al final del año, sin desglosarlo por almacén.  
Por lo tanto, para las impresiones LIFO y FIFO se puede aplicar el filtro de *agrupamiento por almacén* solo para el año corriente, es decir, para todos los registros realizados después de la fecha del último cierre del almacén.
:::

Hagamos un ejemplo:

el cierre de almacén es con fecha 31/12/2023  
hoy hacemos la impresión de inventario valorizado del artículo A que tiene un saldo al 23/05/2024 de 170 y un costo medio al 23/05/2024 de 3 euros.  
En el historial para el artículo A encontramos:

| Año | Saldo | Costo medio |
| :-- | :-: | :-: |
| 2020 | 100 | 2 |
| 2021 |   0 | 0 |
| 2022 |  60 | 1,5 |
| 2023 | 100 | 2,5 |         

El cálculo se realiza así:  
170 de hoy son seguramente 100 del 2023, de los 100 del 2023, 60 son seguramente del 2022, no pueden ser del 2021 porque el saldo era 0.  
Entonces, el costo LIFO al 23/05/2024 es:  
((60 * 1,5) + (40 * 2,5) +(70 * 3)) /170 = 2,35

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios de impresión, consulte el siguiente enlace [Vista previa e impresión (Anteprima e stampa)](/docs/guide/common/operations-with-data/reports).