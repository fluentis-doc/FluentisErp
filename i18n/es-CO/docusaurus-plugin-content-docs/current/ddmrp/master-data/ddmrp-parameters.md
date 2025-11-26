---
title: Parámetros DDMRP artículos
sidebar_position: 5
ai_generated: true
---

A través de este formulario se definen los parámetros necesarios para la gestión de un artículo buffer, es decir, gestionado con la lógica DDMRP.

Para cada artículo buffer debe existir al menos un registro en esta tabla, uno por cada centro de distribución (ver **estructura logística<!-- struttura logistica -->**) en el que el artículo se gestiona con stock DDMRP, y eventualmente uno para la fábrica (campo almacén<!-- magazzino --> vacío) si el artículo también se gestiona con stock DDMRP en la fábrica.

Los parámetros DDMRP a definir son los siguientes:

- **Almacén<!-- Magazzino -->**:

  es el código de almacén<!-- magazzino --> asociado a la unidad logística del registro, es decir, al centro de distribución (o hub intermedio) y se deja vacío si el registro se refiere a la fábrica.

- **Proveedor**

  indica el proveedor desde el cual se debe abastecer este artículo en esta unidad logística.

  Por defecto la unidad logística proveedora es la indicada en la tabla de la estructura logística, con este campo se pueden gestionar excepciones por artículo individual.

  Por ejemplo, normalmente los artículos en esta unidad logística son suministrados por un Hub pero algunos artículos son suministrados por otro hub o desde la fábrica directamente.

  En caso de que el proveedor no esté presente en la tabla de unidades logísticas, se trata de un proveedor externo y, por lo tanto, se emitirá una orden de compra<!-- ordine d'acquisto --> común a dicho proveedor.

- **Días para transporte**:

  si el campo proveedor está completado, también debe completarse este, que representa el tiempo necesario para abastecer la mercancía desde la unidad logística o proveedor externo indicado en el campo proveedor.

- **Código de perfil (buffer profile)**:

  es el código del perfil de buffer asociado a este artículo en la unidad logística indicada en el campo almacén<!-- magazzino -->.

- **Factor de lead time (lead time factor)**:

  sirve para forzar un valor diferente al previsto por el perfil de buffer asociado al registro.

- **Factor de variabilidad (variability factor)**:

  sirve para forzar un valor diferente al previsto por el perfil de buffer asociado al registro.

- **Consumo medio diario (ADU)**:

  es la cantidad consumida en promedio cada día en la unidad logística del registro (por lo tanto, varía para cada unidad logística) y debe tener en cuenta un período de tiempo suficientemente largo (varias veces el tiempo de abastecimiento del artículo) sobre el cual realizar el promedio.
  
  Este valor influye fuertemente en el nivel de stock del artículo y debe actualizarse periódicamente [(ver procedimiento)](/docs/ddmrp/procedures/adu-update).

- **Lead time desacoplado (DLT)**:

  campo no editable, resultado del cálculo del procedimiento correspondiente.

  Es el tiempo necesario para abastecer el artículo considerando la presencia de otros buffers en su lista de materiales o red logística.

  En el caso de un centro de distribución, se obtiene sumando el tiempo de transporte desde la unidad logística proveedora y el posible tiempo de producción si la unidad proveedora es la fábrica y el artículo no es un buffer en la fábrica (por lo tanto, no hay stock).

- **Lead time acumulativo (CLT)**:

  campo no editable, resultado del cálculo del procedimiento de cálculo DLT.

  Es el tiempo necesario para abastecer el artículo en la fábrica si ninguno de los artículos en su lista de materiales es un buffer, por lo tanto, es el tiempo de producción en caso de ausencia total de stock para los elementos de su lista de materiales.

- **Ciclo de reorden deseado (DOC)**:

  debe expresarse en días y representa el número de días que se desea que transcurran entre una orden y la siguiente.

  Su valor es tomado en cuenta en el cálculo de la zona verde de este artículo.

- **Cantidad mínima ordenable (MOQ)**:

  si existe una cantidad mínima ordenable impuesta por el proveedor o impuesta internamente (sobre todo para minimizar los setups de producción), debe indicarse en este campo.

  Su valor es tomado en cuenta en el cálculo de la zona verde de este artículo.

- **Zona verde**:

  campo no editable, resultado del procedimiento de actualización de zonas.

  La zona verde determina el tamaño de los pedidos (ningún pedido propuesto por el DDMRP puede tener una cantidad inferior a la zona verde) y por tanto también la frecuencia relativa de reorden, que es igual a la relación entre la zona verde y el ADU, así como el nivel medio y máximo de stock previstos.

- **Zona amarilla**:

  campo no editable, resultado del procedimiento de actualización de zonas.

  La zona amarilla representa el consumo medio en el periodo de tiempo necesario para abastecer el artículo (DLT). 
  

- **Zona roja**:

  campo no editable, resultado del procedimiento de actualización de zonas.

  La zona roja determina el nivel de stock de seguridad, la existencia mínima y máxima prevista.

  Su tamaño aumenta a medida que aumenta la variabilidad asociada al buffer (ver perfil de buffer).

- **Umbral de pico de órdenes (OST)**:

  se utiliza en el cálculo NFP (Net Flow Position).

  Cuando la demanda total en un día (dentro del horizonte de picos) supera este valor, se considera en el cálculo NFP.

  Se recomienda utilizar un valor entre el 50% y el 100% de la zona roja del artículo.

  Un valor demasiado pequeño llevaría a considerar picos de demanda simples oscilaciones normales de la misma, y en consecuencia se emitirían órdenes con demasiada frecuencia y un stock medio más alto de lo necesario.

  Un valor demasiado grande haría que a menudo no se reconocieran picos de demanda (relevantes pero no enormes), y en consecuencia el stock sería más bajo de lo necesario, con una profunda erosión de la zona roja o incluso falta de stock.

  **Horizonte de picos de órdenes (OSH)**:

  horizonte temporal a partir de hoy en el cual verificar si hay picos de demanda (cálculo NFP).

  Este valor no debe ser inferior al valor del DLT (lead time desacoplado) porque es necesario darse cuenta de cualquier pico de demanda con suficiente antelación, es decir, con una antelación al menos igual al tiempo necesario para abastecer el artículo.

- **Método de previsión de consumo medio diario**:

  seleccionar uno de los siguientes métodos que será aplicado por el procedimiento respectivo de actualización de ADU (consumo medio diario):

  - 0) ningún actualización
  - 1) media aritmética sobre pasado (se analizan los consumos reales del pasado y todos los consumos tienen el mismo peso)
  - 2) media ponderada sobre pasado (los consumos recientes pesan más que los pasados)
  - 3) media aritmética sobre futuro (se analiza la tabla de previsiones de consumo diario)
  - 4) media aritmética del pasado y del futuro (combinación de los métodos 1 y 3)
  - 5) pasado ponderado y futuro aritmético (combinación de los métodos 2 y 3)

- **Días en el pasado**:

  período de tiempo en el pasado sobre el cual realizar el promedio de consumo diario

- **Días en el futuro**:

  período de tiempo en el futuro sobre el cual realizar la previsión promedio de consumo diario

- **Tipo de stock<!-- Tipo scorta -->**:

  define el tipo de stock DDMRP

  - 1 = Reabastecido (stock dinámico)
  - 2 = Reabastecido override (stock estático)
  - 3 = Min-max (stock min—max)

**Botón importar**

Permite insertar los parámetros DDMRP para una combinación artículo-variante-almacén<!-- magazzino --> donde el código de almacén<!-- magazzino --> identifica una [**unidad logística**](/docs/ddmrp/master-data/facilities) como un centro de distribución o un hub o la fábrica (en este caso el campo está vacío).

Primero elija un almacén<!-- magazzino --> de la respectiva lista desplegable; de esta manera se mostrarán los artículos para los que aún no existe un registro en los parámetros DDMRP para dicho almacén<!-- magazzino --> (para la fábrica elija cualquiera de los asociados a ella, ya que para el sistema todos los almacenes<!-- magazzini --> de fábrica equivalen al almacén<!-- magazzino --> con código nulo).

Luego, elija un perfil de buffer para asociar al nuevo registro para poder habilitar el botón "insertar".

En este punto, seleccione las filas a importar y pulse el botón "insertar", luego abra los nuevos registros para completar la inserción de datos.

**Botón de sustitución de parámetros**

Funciona seleccionando filas del formulario con el mismo valor en el campo Almacén<!-- Magazzino -->.

Si necesita actuar sobre varios almacenes<!-- magazzini -->, hágalo uno por uno.

Una vez seleccionadas varias filas, se habilita el botón y esto abre un formulario mediante el cual es posible modificar uno o más parámetros para los registros seleccionados.

La modificación ocurre solo si se activa la bandera al lado del parámetro.

**Botón eliminar**

Permite eliminar una fila y así hacer que el artículo en el almacén<!-- magazzino --> indicado ya no sea considerado un buffer DDMRP.

Los valores históricos relativos al artículo-almacén<!-- articolo-magazzino --> se conservarán igualmente y serán visibles tanto en el histórico de parámetros DDMRP como en el histórico de Net Flow Position.