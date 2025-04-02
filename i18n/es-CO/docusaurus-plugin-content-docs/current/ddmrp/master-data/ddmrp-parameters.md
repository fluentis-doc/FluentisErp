---
title: Parámetros DDMRP de artículos (Parametri DDMRP articoli)
sidebar_position: 5
---

A través de este formulario se definen los parámetros necesarios para la gestión de un artículo buffer, es decir, gestionado según la lógica DDMRP.

Para cada artículo buffer debe haber al menos un registro en esta tabla, uno por cada centro de distribución (ver **estructura logística**) en el que el artículo se gestiona como stock DDMRP, y posiblemente uno para la fábrica (campo de almacén vacío) si el artículo también se gestiona como stock DDMRP en la fábrica.

Los parámetros DDMRP a definir son los siguientes:

- **magazzino**, 

  es el código de almacén asociado con la unidad logística del registro, es decir, al centro de distribución (o hub intermedio) y se deja vacío si el registro se refiere a la fábrica.

- **fornitore**

  indica el proveedor del cual abastecer este artículo en esta unidad logística.

  Por defecto, la unidad logística proveedora está indicada en la tabla de la estructura logística; con este campo se pueden gestionar excepciones para un artículo específico.

  Por ejemplo, normalmente los artículos en esta unidad logística son suministrados por un hub, pero algunos artículos son suministrados por otro hub o directamente por la fábrica.

  En caso de que el proveedor no esté presente en la tabla de unidades logísticas, se trata de un proveedor externo y, por lo tanto, se emitirá una orden de compra común a dicho proveedor.

- **giorni per trasporto**

  si el campo de proveedor está completo, también debe completarse este campo, que representa el tiempo necesario para aprovisionar la mercancía desde la unidad logística o proveedor externo indicado en el campo proveedor.

- **codice profilo**, 

  es el código del perfil de buffer asociado a este artículo en la unidad logística indicada en el campo almacén.

- **fattore lead time**,

  sirve para forzar un valor diferente al previsto por el perfil de buffer asociado al registro.

- **Factor de variabilidad (Fattore variabilità)**,

  sirve para forzar un valor diferente al previsto por el perfil de buffer asociado al registro.

- **Consumo medio diario (ADU)**, 

  es la cantidad consumida en promedio cada día en la unidad logística del registro (por lo tanto, varía según la unidad logística) y debe tener en cuenta un período de tiempo lo suficientemente largo (más de una vez el tiempo de aprovisionamiento del artículo) para realizar el promedio.
  
  Este valor influye fuertemente en el nivel de stock del artículo y debe actualizarse periódicamente [(ver procedimiento)](/docs/ddmrp/procedures/ADU-update).

- **Tiempo de entrega desacoplado (DLT)**,

  campo no editable resultado del cálculo del procedimiento correspondiente.

  Es el tiempo necesario para aprovisionar el artículo considerando la presencia de otros buffers en su lista o red logística.

  En el caso de un centro de distribución, se calcula sumando el tiempo de transporte desde la unidad logística proveedora y el tiempo de producción, si la unidad proveedora es la fábrica y el artículo no es un buffer en la fábrica (por lo tanto, no hay stock).

- **Tiempo de entrega acumulado (CLT)**,

  campo no editable resultante del cálculo del procedimiento de cálculo DLT.

  Es el tiempo necesario para aprovisionar el artículo en la fábrica si ninguno de los artículos de su lista es un buffer, por lo que es el tiempo de producción en caso de ausencia total de stock para sus elementos de lista de materiales.

- **Ciclo de reorden deseado (DOC)**,

  debe expresarse en días y representa el número de días que se desea que transcurran entre un pedido y el siguiente.

  Su valor se tiene en cuenta en el cálculo de la zona verde para este artículo.

- **Cantidad mínima ordenable (MOQ)**,

  si existe una cantidad mínima ordenable impuesta por el proveedor o impuesta internamente (especialmente para minimizar las configuraciones de producción), debe indicarse en este campo.

  Su valor se tiene en cuenta en el cálculo de la zona verde para este artículo.

- **Zona verde**,

  campo no editable resultado del procedimiento de actualización de zonas.

  La zona verde determina el tamaño de los pedidos (ningún pedido propuesto por el DDMRP puede tener una cantidad inferior a la zona verde) y, por lo tanto, también la frecuencia de reorden, que es la relación entre la zona verde y el ADU, así como el nivel medio y máximo de stock previsto.

- **zona gialla**,

  campo no editable resultado del procedimiento de actualización de zonas.

  La zona amarilla representa el consumo medio en el período de tiempo necesario para aprovisionar el artículo (DLT). 
  

- **Zona roja**,

  campo no editable resultado del procedimiento de actualización de zonas.

  La zona roja determina el nivel de stock de seguridad, el inventario mínimo y máximo previstos.

  Su tamaño aumenta con la variabilidad asociada al buffer (ver perfil de buffer).

- **Umbral de picos de pedidos (OST)**,

  se utiliza en el cálculo NFP (Posición de Flujo Neto).

  Cuando la demanda total en un día (dentro del horizonte de picos) supera este valor, se considera en el cálculo NFP.

  Se recomienda usar un valor entre el 50% y el 100% de la zona roja del artículo.

  Un valor demasiado pequeño llevaría a considerar picos de demanda como oscilaciones normales de la misma y, en consecuencia, se emitirían pedidos demasiado a menudo con un inventario promedio más alto del necesario.

  Un valor demasiado grande llevaría a no reconocer picos de demanda relevantes (pero no enormes) con mucha frecuencia, y en consecuencia la disponibilidad sería menor de lo necesario, lo que resultaría en una profunda erosión de la zona roja o incluso rotura de stock.

- **Horizonte de picos de pedidos (OSH)**,

  horizonte temporal a partir de hoy dentro del cual verificar si hay picos de demanda (cálculo NFP).

  Este valor no debe ser inferior al valor del DLT (tiempo de entrega desacoplado), ya que es necesario detectar picos de demanda con suficiente anticipación, es decir, con una antelación igual al tiempo necesario para aprovisionar el artículo.

- **Método de previsión del consumo medio diario**,

  seleccionar uno de los siguientes métodos que será aplicado por el procedimiento correspondiente de actualización del ADU (consumo medio diario):

  - 0) ninguna actualización
  - 1) media aritmética del pasado (se analizan los consumos reales del pasado y todos los consumos tienen el mismo peso)
  - 2) media ponderada del pasado (los consumos recientes pesan más que los pasados)
  - 3) media aritmética del futuro (se analiza la tabla de previsiones del consumo diario)
  - 4) media aritmética del pasado y del futuro (combinación de los métodos 1 y 3)
  - 5) pasado ponderado y futuro aritmético (combinación de los métodos 2 y 3)

- **giorni nel passato**,

  período de tiempo en el pasado en el que realizar la media del consumo diario

- **giorni nel futuro**,

  período de tiempo en el futuro en el que realizar la previsión media del consumo diario

- **Tipo de stock (Tipo scorta)**

  define el tipo de stock DDMRP

  - 1 = Reabastecido (scorta dinamica)
  - 2 = Reabastecido por anulación (scorta statica)
  - 3 = Min-max (scorta min–max)

**Botón importar**

Permite ingresar los parámetros DDMRP para una combinación artículo-variante-almacén donde el código de almacén identifica una [**unidad logística**](/docs/ddmrp/master-data/facilities) como un centro de distribución o un hub o la fábrica (en este caso el campo está vacío).

Primero, elija un almacén de la caja de combinación correspondiente, de esta manera se mostrarán los artículos para los cuales no existe ya un registro en los parámetros DDMRP para dicho almacén (para la fábrica elija uno cualquiera de los que están asociados a ella, ya que para el sistema todos los almacenes de la fábrica equivalen al almacén con código nulo).

Luego, seleccione un perfil de buffer para asociar al nuevo registro para poder habilitar el botón "insertar".

En este punto, seleccione las filas a importar y presione el botón "insertar", luego abra los nuevos registros para completar la entrada de datos.

**Botón de reemplazo de parámetros**

Funciona seleccionando filas del formulario con el mismo valor en el campo Almacén.

Si debe actuar sobre varios almacenes, hágalo uno por uno.

Una vez seleccionadas varias filas, se habilita el botón y este abre un formulario a través del cual es posible modificar uno o más parámetros para los registros seleccionados.

La modificación ocurre solo si se activa el indicador junto al parámetro.

**Botón eliminar**

Permite eliminar una fila y, por lo tanto, asegurar que el artículo en el almacén indicado ya no se considere un buffer DDMRP.

Los valores históricos relativos al artículo-almacén se conservarán, y serán visibles tanto en el historial de parámetros DDMRP como en el historial de Posición de Flujo Neto.