---
title: operazioni patrimoniali
sidebar_position: 2
---

Dentro de esta ficha se ingresan los detalles de las diversas operaciones en el libro de activos fijos.

Representa, por lo tanto, junto con la pestaña Detalles, la sección principal de la ficha de activos fijos.

| Función (Funzione) | Significado (Significato) |
| --- | --- |
| Nueva operación (Nuova operazione) | Activa el cursor en la primera cuadrícula de operaciones patrimoniales. |
| Cancelar operación (Cancella operazione) | Cancela la operación seleccionada en la cuadrícula de la operación patrimonial. |
| Nuevo amortización (Nuovo ammortamento) | Activa el cursor en la segunda cuadrícula de amortizaciones. |
| Cancelar amortización (Cancella ammortamento) | Cancela la amortización seleccionada en la cuadrícula de amortizaciones. |
| Ejecutar amortización automática (Esegue ammortamento automatico) | Calcula la amortización del activo utilizado para el año establecido en el campo inmediatamente sobre la cuadrícula de amortizaciones. |
| Inserción centro de costo (Inserimento cdc) | Activa el cursor en la cuadrícula de centros de costo. |
| Cancelar centro de costo (Cancella cdc) | Cancela el movimiento del centro de costo seleccionado en la cuadrícula. |
| Cálculo centros de costo (Calcolo centri di costo) | Realiza el cálculo de los centros de costo para el valor de la fila de amortización seleccionada. |
| Inserción proyectos (Inserimento commesse) | Activa el cursor en la cuadrícula de proyectos. |
| Cancelar proyectos (Cancella commesse) | Cancela el cálculo del proyecto seleccionado en la cuadrícula. |
| Cálculo proyectos (Calcolo commesse) | Realiza el cálculo del proyecto para el valor de la fila de amortización seleccionada. |
| Detalles de revalorización (Dettagli rivalutazione) | Abre la gestión de los detalles de revalorización. El botón está activo solo si el indicador 'revalorizaciones' está configurado para la categoría del activo en uso. Véase la aplicación a. |
| Documentos (Documenti) | Gestión del archivo documental asociado a la máscara en uso. |

### CUADRÍCULA SUPERIOR

Esta cuadrícula se utiliza tanto para operaciones de compra (o incremento) del activo, como para operaciones de venta (total o parcial).

La primera línea se utiliza siempre para la compra inicial del activo: la **fecha de la operación** (data dell'operazione), su número **progresivo** (numero progressivo) y el siguiente **importe** (importo) ingresado en la columna correspondiente:

**costo originario**: si el importe se refiere a una operación de compra y representa, por lo tanto, el costo histórico;

**alienazione**: si el importe se refiere a una alienación total y representa el valor de venta;

**alienazione parziale**: si el importe se refiere a una alienación parcial y representa el valor de venta;

Si está activa la gestión de cantidades, también debe ser valorado el campo **cantidad**.

:::danger NOTA:
En el caso de la carga de un activo histórico preexistente, el importe de los fondos de amortización ya calculados **NO** debe ser ingresado directamente en esta sección, sino trasladado a la sección siguiente (ingresando el valor total de la amortización acumulada en una única cuota de amortización con el año igual al año anterior a la fecha de inserción) **contabilizzato*** mediante la marca del indicador correspondiente para asegurar que esta sección se recalibre por el ERP. **Se vea el video tutorial correspondiente**
:::

**![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image01.png)**

Al ingresar una línea relativa a una operación patrimonial (por ejemplo, compra, pero también alienación) e ingresar el importe correspondiente en la columna adecuada (por ejemplo, costo originario en caso de compra), se observa que los campos destacados en amarillo se actualizan automáticamente por el programa.

**importo da ammortizzare**: valor de "carga" (compra o de todos modos costo histórico cargado) sobre el cual calcular la amortización;

**valore contabile**: Costo histórico - Fondo de amortización acumulado;

**Ya amortizado (Già ammortizzato)**: Valor provisional que se actualizará al momento del cálculo de la amortización y luego será nuevamente anulado actualizando el total de la amortización acumulada (en el momento de contabilización de la amortización).

### CUADRÍCULA CENTRAL Amortizaciones:

Presenta la lista de las amortizaciones calculadas para el activo: la inserción puede ser manual o automática.

- La inserción manual requiere la indicación del año de referencia, del número de línea progresivo de referencia (pero solo para categorías no incrementales, en las otras el campo está oculto ya que la amortización siempre estará vinculada al progresivo 1), el tipo de amortización a aplicar: en este punto el ERP mostrará las configuraciones de la categoría de activos de referencia, con una cuenta y subcuenta para la contabilización de la cuota, el porcentaje y los importes (valores que se pueden forzar y modificar a su gusto). Al final de la cuadrícula está presente la fecha de referencia de la amortización, propuesta como el cierre del ejercicio del año contable de referencia de la línea, y finalmente los importes de la cuota deducible y no deducible de la amortización.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image02.png)

- La inserción automática requiere la definición del año de referencia en el campo superior a la cuadrícula y el uso del botón de gestión *esegue ammortamento automatico* que irá a traer los datos de las amortizaciones previstas en la categoría para todo el activo en uso.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image03.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image04.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image05.png)

El cálculo de la amortización se reflejará en la columna ***Ya amortizado (Già ammortizzato)*** de la cuadrícula superior, que servirá para indicar un importe no definitivo: solo con la indicación del indicador **contabilizzato***, en las diversas filas, los importes superiores serán atribuidos a la columna del fondo correspondiente al tipo de amortización mismo.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image06.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image07.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image08.png)

:::danger Nota
La inserción manual del indicador **NO** registra en contabilidad (para esto está el procedimiento de contabilización de amortizaciones): se usa normalmente solo para la carga manual inicial de la situación histórica, para la cual, de norma, se realiza una inserción única del importe total amortizado al año anterior al inicio del uso del sistema de gestión y no de todo el detalle de la amortización. 
:::

Al guardar la fila con el indicador *contabilizzato*, Fluentis preguntará si se desea vincular un registro contable ya existente, mensaje al que normalmente (en caso de recuperación de datos históricos) se responde negativamente.

El indicador de Amortización fiscal prevé la gestión fiscal de la fila de amortización: se propone en base al mismo indicador previsto en la categoría de activo. En algunos casos se puede utilizar manualmente para registrar en el libro de activos, el giro de los amortizaciones anticipados utilizados en el balance ordinario a amortizaciones fiscales que se gestionan solo para el cálculo de la imposición. La gestión fiscal, por otro lado, se realiza a través de la valorización de los campos con los importes deducibles/no deducibles de la amortización, valorados automáticamente en función del porcentaje de deducibilidad asociado al activo o a su categoría.

En la última sección está presente el detalle de valorización a centro de costo de las amortizaciones seleccionadas en la segunda cuadrícula.

### Carga de un activo preexistente

Para ingresar en el sistema los activos ya existentes al momento del inicio de los registros, con la respectiva
situación del fondo de amortización, operar de la siguiente manera:
1. Insertar una nueva ficha de activo con los datos anagráficos del activo: descripción, categoría, etc. (pestaña *Detalles*) y
prestar atención a la **fecha de inicio de actividades** que debe ser la histórica.

2. En la pestaña *operazioni patrimoniali* insertar el costo histórico indicando la fecha de compra y completando
el campo **costo originario**.

3. **NO** completar manualmente el campo *fondo ammortamento* en la fila (de lo contrario se sobrescribirá en la próxima amortización), sino ingresar una línea (debajo) en la cuadrícula de Amortizaciones con año igual al año anterior a la inserción y el total de las amortizaciones ya calculadas. Y poner el indicador contabilizado. La amortización debe ser ingresada en el campo costo (imponiéndola independientemente de los otros campos anteriores).

### Gestión de la alienación del activo (casos de alienación parcial)

#### Caso del activo ya amortizado
Ejemplo válido si el activo no ha sido gestionado a través de componentes o incrementos, sino de manera indivisible.

1. La escritura contable automática no se gestiona, por lo que se puede gestionar el activo desde dentro de la ficha y luego hacer la escritura de Fondo de amortización a Activo por separado.
2. Para descargar el activo parcialmente, insertar un importe negativo en la columna del fondo por un valor correspondiente a la cuota del costo histórico cedido o destruido.
3. En la columna Alienación parcial indicar (**siempre**) el valor al que se cede (o 0,00 si se destruyó).
4. La columna de costo original cedido se actualizará automáticamente.

#### Caso del activo NO completamente amortizado

Situación inicial.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling1.png)

Para descargar el activo parcialmente, insertar un importe negativo en la columna del fondo por un valor
correspondiente a la cuota del fondo acumulado proporcional al costo histórico cedido o destruido.

En la columna Alienación parcial indicar el valor al que se cede (o 0,00 si se destruyó; en este caso se puede indicar el valor también en la columna Destrucción).
La columna de costo original cedido se actualizará automáticamente.

El cálculo que se realiza en la columna de costo original cedido también considera la plusvalía/minusvalía de la cesión, que deberá ser ingresada considerando la parte correspondiente del valor neto contable que se cede.

**Ejemplo 1:**
Costo histórico 1000, amortizado por 125.
Vendo la mitad a un precio de 200.

Rectifico el fondo acumulado por la mitad, entonces -62,50 y tengo un valor de venta (prestar atención a completar la columna de Alienación parcial; de lo contrario, si completo la de alienación total, obligo a descargar todo el costo histórico) de 200.

Por lo tanto, deberé calcular la minusvalía a ingresar en base a la mitad del valor neto contable, entonces
875 / 2 = 437,50.
Minusvalía = 437,50 – 200 = 237,50.

El campo de Costo original cedido se calcula automáticamente a 500, que es el costo histórico efectivamente descargado del libro de activos para la mitad.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling2.png)

**Ejemplo 2:**
Costo histórico 1000, amortizado por 125.
Desecho la mitad a precio 0,00.

Rectifico el fondo acumulado por la mitad, entonces -62,50 y tengo un valor de venta (prestar atención a completar la columna de Alienación parcial; de lo contrario, si completo la de alienación total, obligo a descargar todo el costo histórico) de 0,00.

Por lo tanto, deberé calcular la minusvalía a ingresar en base a la mitad del valor neto contable, entonces
875 / 2 = 437,50.
Minusvalía = 437,50 – 0 = 437,50.

El campo de Costo original cedido se calcula automáticamente a 500, que es el costo histórico efectivamente descargado del libro de activos para la mitad.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling3.png)

:::tip[Sugerencia (Suggerimento)]
La alienación de activos, en particular en los casos más simples de alienación total, puede gestionarse con mayor automatismo a través del registro contable de la venta realizada con una causal que haya habilitado la funcionalidad para los activos y con tipo de operación de Alienación total (o parcial).

En la escritura aparecerá [**la sección correspondiente de Activo**](/docs/finance-area/ledger-records/records/ledger-record).
:::