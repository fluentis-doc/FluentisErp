---
title: Operaciones patrimoniales
sidebar_position: 2
ai_generated: true
---

En esta pestaña se ingresan los detalles de las distintas operaciones en el libro de activos fijos<!-- cespite -->.

Por lo tanto, representa junto con la pestaña Detalle, la sección principal de la ficha del activo fijo<!-- cespite -->.

| Función | Significado |
| --- | --- |
| Nueva operación | Activa el cursor en la primera cuadrícula de operaciones patrimoniales. |
| Eliminar operación | Elimina la operación seleccionada en la cuadrícula de la operación patrimonial. |
| Nuevo amortización | Activa el cursor en la segunda cuadrícula de amortizaciones. |
| Eliminar amortización | Elimina la amortización seleccionada en la cuadrícula de amortizaciones. |
| Ejecutar amortización automática | Calcula la amortización del activo fijo<!-- cespite --> en uso para el año configurado en el campo inmediatamente superior a la cuadrícula de amortizaciones. |
| Inserción cdc | Activa el cursor en la cuadrícula de centros de costo. |
| Eliminar cdc | Elimina el movimiento del centro de costo seleccionado en la cuadrícula. |
| Cálculo de centros de costo | Ejecuta el cálculo de los centros de costo para el valor de la fila de amortización seleccionada. |
| Inserción de obras | Activa el cursor en la cuadrícula de obras<!-- commesse -->. |
| Eliminar obras | Elimina el cálculo de obra<!-- commessa --> seleccionado en la cuadrícula. |
| Cálculo de obras | Ejecuta el cálculo de la obra<!-- commessa --> para el valor de la fila de amortización seleccionada. |
| Detalles de revalorización | Abre la gestión de detalles de revalorización. El botón solo está activo si el indicador ‘revalorizaciones’ está configurado para la categoría del activo fijo<!-- cespite --> en uso. Ver aplicación a. |
| Documentos | Gestión del archivo documental asociado a la pantalla en uso. |

### CUADRÍCULA SUPERIOR<!-- GRIGLIA SUPERIORE -->

Esta cuadrícula se utiliza tanto para operaciones de compra (o incremento) del activo fijo<!-- cespite -->, como para operaciones de venta (total o parcial).

La primera fila siempre se utiliza para la compra inicial del activo fijo<!-- cespite -->: la **fecha de la operación**, su número **progresivo** y el **importe** sucesivo ingresado en la columna correspondiente: 

**Costo original**: si el importe corresponde a una operación de compra y, por ende, representa el costo histórico;

**Enajenación**: si el importe se refiere a una enajenación total y representa el valor de venta;

**Enajenación parcial**: si el importe se refiere a una enajenación parcial y representa el valor de venta;

 

Si está activa la gestión de cantidades, también debe completarse el campo **cantidad**.

 
:::danger NOTA:
En caso de carga de un activo fijo<!-- cespite --> histórico preexistente, el importe de los fondos de amortización ya calculados **NO** debe ser ingresado directamente en esta sección, sino reportado en la sección de abajo (ingresando el valor total de la amortización acumulada en una única cuota de amortización con año igual al año anterior a la fecha de ingreso) **con estado *Contabilizado*** mediante la selección del indicador correspondiente, para que esta sección sea recalculada por el ERP. **Véase el video tutorial correspondiente**
:::

**![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image01.png)**

Al insertar una fila relativa a una operación patrimonial (por ejemplo, compra o también enajenación) y establecer el importe correspondiente en la columna adecuada (por ejemplo, costo original en caso de compra), se observa que los campos resaltados en amarillo son actualizados automáticamente por el programa.

**Importe por amortizar**: valor de "carga" (compra o costo histórico cargado) sobre el cual calcular la amortización;


**Valor contable**: Costo histórico - Fondo de amortización acumulado;


**Ya amortizado**: Valor provisional que será actualizado al momento del cálculo de la amortización y luego será nuevamente puesto en cero al actualizar el total de la amortización acumulada (en el momento de la contabilización de la amortización).



### CUADRÍCULA CENTRAL Amortizaciones<!-- GRIGLIA CENTRALE Ammortamenti: -->

Presenta la lista de las amortizaciones calculadas para el activo fijo<!-- cespite -->: la inserción puede ser manual o automática. 

- La inserción manual requiere indicar el año de referencia, el número progresivo de fila de referencia (solo para categorías no incrementales; para las otras, el campo está oculto, ya que la amortización estará siempre vinculada al progresivo 1), el tipo de amortización a aplicar: en este punto el ERP reportará las configuraciones de la categoría de activo fijo<!-- cespite --> de referencia, con una cuenta y subcuenta<!-- sottoconto --> para la contabilización de la cuota, el porcentaje y los importes (valores que pueden forzarse y modificarse libremente). Al final de la cuadrícula está presente la fecha de referencia de la amortización, que se propone como el cierre del ejercicio contable de referencia de la línea, y finalmente los importes de la cuota deducible e indeducible de la amortización. 

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image02.png)


- La inserción automática implica la definición del año de referencia en el campo superior a la cuadrícula y el uso del botón de gestión *Ejecutar amortización automática* que reportará los datos de las amortizaciones previstas en la categoría para todo el activo fijo<!-- cespite --> en uso.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image03.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image04.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image05.png)

 

El cálculo de la amortización será reportado en la columna ***Ya amortizado*** de la cuadrícula superior, que servirá para indicar un importe aún no definitivo: solo con la selección del indicador ***Contabilizado***, en las distintas filas, los importes superiores serán atribuidos a la columna del fondo relativa al tipo de amortización.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image06.png)

 

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image07.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image08.png)

 
:::danger Nota
La inserción manual del indicador **NO** realiza un registro en la contabilidad (para eso existe el procedimiento de contabilización de amortizaciones): normalmente solo se utiliza para la carga manual inicial de la situación histórica, para la cual, usualmente, se realiza una única entrada del importe total amortizado al año anterior al inicio del uso del sistema de gestión y no todos los detalles de la amortización. 
:::

Al guardar la fila con el indicador *Contabilizado*, Fluentis preguntará si se desea vincular un registro contable ya existente, mensaje al que normalmente (en caso de recuperación de datos históricos) se responde negativamente. 

El indicador de Amortización fiscal prevé la gestión fiscal de la fila de amortización: se propone en base al mismo indicador previsto en la categoría de activo fijo<!-- cespite -->. En algunos casos puede ser utilizado manualmente para registrar en el libro de activos<!-- cespiti --> el traspaso de amortizaciones anticipadas empleadas en el balance ordinario como amortizaciones fiscales a gestionar solo para el cálculo del impuesto. La gestión fiscal, por el contrario, se obtiene llenando los campos con los importes deducibles/indeducibles de la amortización, valores que se calculan automáticamente según el porcentaje de deducibilidad asociado al activo fijo<!-- cespite --> o su categoría.

### Amortización no deducible<!-- Ammortamento indeducibile -->
Hay dos columnas para el cálculo de la cuota *deducible* y *no deducible* de la amortización.

El porcentaje de no deducibilidad de la amortización se define a través del campo ***Tipo de deducibilidad<!-- Tipo deducibilità -->*** dentro de las [**categorías de activos fijos<!-- categorie cespite -->**](/docs/configurations/tables/finance/fixed-asset-category).

La **Cuenta / Subcuenta/ Descripción no deducible** se rellena automáticamente si dentro de la categoría de activo fijo<!-- cespite -->, en combinación con el Tipo de deducibilidad, se ha definido la cuenta contable que se utilizará automáticamente.

Si en los procedimientos de contabilización automática de la amortización se activa el indicador **Usar cuenta no deducible**, la parte fiscalmente no deducible de la amortización será contabilizada automáticamente en la cuenta específica.



En la última sección está presente el detalle de valorización a centro de costo de las amortizaciones seleccionadas en la segunda cuadrícula.


### Carga de un activo fijo<!-- cespite --> preexistente

Para ingresar al sistema los activos fijos<!-- cespiti --> ya existentes al inicio de los registros, con la situación relativa del fondo de amortización, proceda de la siguiente manera:
1. Ingrese una nueva ficha de activo fijo<!-- cespite --> con los datos de identificación: descripción, categoría, etc. (pestaña *Detalle*) y
preste atención a la **fecha de inicio de actividad** que debe ser la histórica.

2. En la pestaña *Operaciones patrimoniales* ingrese el costo histórico indicando la fecha de compra y llenando
el campo **Costo original**

3. **NO** complete manualmente el campo *Fondo de amortización* en la fila (de lo contrario se sobrescribirá en el próximo amortización), sino ingrese una fila (debajo) en la cuadrícula de Amortizaciones con año igual al año anterior al de la inserción y el total de las amortizaciones ya calculadas. Y coloque el indicador contabilizado. La amortización debe ingresarse en el campo costo (estableciéndolo independientemente de los otros campos anteriores)


### Gestión de la enajenación del activo fijo<!-- alienazione cespite --> (casos de enajenación parcial)

#### Caso del activo fijo<!-- cespite --> ya amortizado
Ejemplo válido si el activo fijo<!-- cespite --> no se ha gestionado mediante componentes o incrementos sino de manera indivisa

1. El registro contable automático no se gestiona, por lo que puede gestionarse el activo fijo<!-- cespite --> desde dentro
de la ficha y luego realizar el asiento Fondo de Amortización a Activo fijo<!-- Cespite --> por separado.
2. Para descargar el activo fijo<!-- cespite --> parcialmente, ingrese un importe negativo en la columna del fondo por un
valor correspondiente a la cuota del costo histórico cedido o destruido.
3. En la columna Enajenación parcial indique (**siempre**) el valor al que se cede (o 0,00 si se destruye)
4. La columna costo original cedido se actualizará automáticamente.


#### Caso del activo fijo<!-- cespite --> NO completamente amortizado

Situación inicial

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling1.png)

Para descargar el activo fijo<!-- cespite --> parcialmente ingrese un importe negativo en la columna del fondo por un valor correspondiente a la cuota del fondo acumulado proporcional al costo histórico cedido o destruido.

En la columna Enajenación parcial indique el valor al que se cede (o 0,00 si se destruye, en este caso también puede indicar el valor en la columna Destrucción)
La columna costo original cedido se actualizará automáticamente.

El cálculo que se realiza en la columna costo original cedido también tiene en cuenta la plusvalía / minusvalía de cesión, que deberá ser ingresada teniendo en cuenta la cuota de valor neto contable que se cede.

**Ejemplo 1:**
Costo histórico 1000, amortizado por 125
Vendo la mitad al precio de 200

Rectifico el fondo acumulado por la mitad, es decir, -62,50 y tengo un valor de venta (preste atención a completar
la columna Enajenación parcial, de lo contrario, si se completa enajenación total forzará la descarga de todo el costo
histórico) de 200.

Por lo tanto, deberé calcular la minusvalía a ingresar sobre la base de la mitad del valor neto contable, por lo tanto
875 / 2 = 437,50
Minusvalía = 437,50 – 200 = 237,50

El campo Costo original cedido se calcula automáticamente en 500 que es el costo histórico efectivamente
descargado del libro de activos fijos<!-- cespiti --> por la mitad.


![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling2.png)

**Ejemplo 2:**
Costo histórico 1000, amortizado por 125
Elimino la mitad a precio 0,00

Rectifico el fondo acumulado por la mitad, entonces -62,50 y tengo un valor de venta (preste atención a completar
la columna Enajenación parcial, de lo contrario si completa enajenación total forzará la descarga de todo el costo
histórico) de 0,00.

Por lo tanto, deberé calcular la minusvalía a ingresar sobre la base de la mitad del valor neto contable, por lo tanto
875 / 2 = 437,50
Minusvalía = 437,50 – 0 = 437,50

El campo Costo original cedido se calcula automáticamente en 500 que es el costo histórico efectivamente
descargado del libro de activos fijos<!-- cespiti --> por la mitad.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling3.png)

:::tip[Sugerencia]
La enajenación de un activo fijo<!-- alienazione cespite -->, especialmente en los casos más sencillos de enajenación total, puede ser gestionada de forma más automática mediante el registro contable de la venta realizada con una causal que tiene habilitada la funcionalidad para activos fijos<!-- cespiti --> y con el tipo de operación Enajenación total (o parcial).

En el asiento aparecerá [**la sección correspondiente de Activo fijo<!-- Cespite -->**](/docs/finance-area/ledger-records/records/ledger-record)
:::