---
title: Determinante de costos
sidebar position: 6
---

Dentro de la tabla de **Determinante de costos** podemos codificar todas las lógicas de distribución entre centros. Veamos en detalle las propiedades individuales disponibles.

:::tip nota
La tabla de Controladores de Costos está disponible, en una versión *simplificada*, también para empresas que no tienen activado el *Control*. En este caso, *que no se detalla ya que es de interés marginal*, el controlador de costos prevé un Código y una Descripción, con solo una lista de Centros destinatarios valorizados únicamente en porcentaje (variable opcionalmente por año contable). El controlador de costos, luego, deberá ser vinculado a los Centros empresariales a distribuir según esta lógica porcentual, a través del procedimiento **Asientos para controladores de costos** presente en el módulo de **Cierres interanuales**.

Por ejemplo, podemos definir un criterio 'metros cuadrados del almacén x', que prevé la distribución 60%-40% sobre dos centros productivos, y luego vincular este controlador a un centro 'Almacén x' que suma todos los costos de su competencia, a distribuir sobre los centros productivos destinatarios.
:::

## Datos generales

- **Código** de la regla que estamos ingresando. Dentro de cada ciclo de procesamiento, **FluentisERP** evalúa los controladores en orden de código.

:::tip Nota
Para dar un criterio de codificación sugerimos:
    -   A: como ATRIBUCIONES. Todas las A son aquellas relacionadas con el centro genérico 'VALORES CON ATRIBUCIÓN EN EL CONTROL', que es ese centro empresarial que tiene el FLAG sobre CUENTAS A REASIGNAR. El primer paso del procesamiento del control es atribuir estas cuentas genéricas que la contabilidad no puede gestionar, o que deben ser atribuidas con lógicas más variables en comparación con las lógicas que un contador conoce. 
    -   R para los REASIGNACIONES; cuando los valores de un centro se redistribuyen a otros centros.
    -   P como PROYECTOS; Es importante tener en cuenta que los procesos que conciernen a los proyectos se aplicarán lógicamente al final de todo, porque con estos asignaremos a los proyectos del período los costos indirectos ya calculados en la dimensión ‘industrial/direccional’.
:::

- **Descripción** del controlador, que puede ser más o menos explicativa de lo que gestiona.

- [**Área**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas): en los Controladores de Costos *el área siempre es obligatoria*. Tendremos reglas específicas para ciertas áreas (quizás para una simulación) mientras que las reglas generales serán las del área genérica del Conjunto de reglas.

- **Número de ciclo**: el procesamiento del control de **FluentisERP** debe tener un orden lógico. En primer lugar, se debe comenzar con el cálculo de los movimientos físicos del período, luego están las amortizaciones de los activos y luego se pasan a los controladores, para los cuales se debe empezar con las atribuciones con número de ciclo 1 (porque primero se debe vaciar el *centro genérico a reatribuir*), luego se pasarán las reasignaciones según su orden de ciclo y finalmente, para quienes han valorado una dimensión de proyecto/encargo típicamente, los controladores del último ciclo de atribución dados por la dirección a los proyectos. A igualdad de número de ciclo, los controladores se elaboran luego en el orden del código del controlador.

- **Cuenta/Detalle de cuenta**: significa vincular el controlador a la combinación detalle de cuenta-centro, es decir, se tomará el total de los movimientos de esta cuenta y del centro indicado a continuación y luego el controlador indicará dónde y cómo reasignarlos en los centros de destino de la lista en la parte inferior izquierda. La cuenta/detalle de cuenta es un campo obligatorio solo para los controladores de costos vinculados al centro genérico a reatribuir, para los demás es opcional.

- [**TAMAÑO DE LOS CENTROS DE RECEPTORES**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension); esta dimensión filtra los centros de receptores de los valores de la cuadrícula en la parte inferior izquierda. En **FluentisERP**, de hecho, podemos tener controladores que mueven o copian datos de una dimensión a otra de nuestros centros: como ya hemos dicho, el caso típico es la asignación de costos directos/indirectos a la dimensión de análisis de proyectos.

- **Fecha de inicio** y **Fecha de finalización**: en estos campos se establece desde qué fecha hasta qué fecha vale el controlador. No se permite que dos reglas de la misma área para el mismo centro (y cuenta, si se valoriza) se superpongan. Si a lo largo del tiempo nos percatamos de que es necesario realizar modificaciones a una regla, podemos cerrarla en una fecha determinada para luego aplicar una diferente a partir del período siguiente.

## TIPOS DE DISTRIBUCIÓN

- **Tipo de Distribución**: define cómo se gestiona la atribución o la redistribución. Disponemos de códigos del 01 al 09 que se pueden usar para atribuciones; se añaden otros 3 para las redistribuciones entre centros, en las que también podremos utilizar tarifas del centro; en cambio, tendremos 6 diferentes, específicos de la dimensión de destino proyectos/encargos. En detalle:
    - tipos de distribución para atribuciones y redistribuciones:
        - **Porcentaje**: el dato de origen, período por período, se repartirá en base al porcentaje del centro destinatario individual.
        - **Débito total**: por cada período se calculará un porcentaje basado en el total de debe del centro destinatario individual respecto al total de debe de todos los centros destinatarios.
        - **Crédito Total**: como en el anterior, pero considerando el total de haber.
        - **04 Márgenes**: como en el anterior, pero considerando debe-haber (en valor absoluto).
        - **05 Sobre detalle de cuenta seleccionada**: el porcentaje se obtiene considerando el debe-haber (en valor absoluto) de los centros destinatarios, filtrado por la lista de *detalle de cuentas* de la cuadrícula de la derecha.
        - **06 Sobre cuenta seleccionada**: el porcentaje se obtiene considerando el debe-haber (en valor absoluto) de los centros destinatarios, filtrado por la lista de *cuentas* de la cuadrícula de la derecha.
        - **07 A exclusión de detalle de cuentas seleccionadas**: el porcentaje se obtiene considerando el debe-haber (en valor absoluto) de los centros destinatarios, filtrado excluyendo la lista de *detalle de cuentas* de la cuadrícula de la derecha.
        - **08 A exclusión de cuentas seleccionadas**: el porcentaje se obtiene considerando el debe-haber (en valor absoluto) de los centros destinatarios, filtrado excluyendo la lista de *cuentas* de la cuadrícula de la derecha.
        - **09 Sobre dimensión física**: el porcentaje se obtiene considerando las cantidades (de la unidad de medida establecida en el campo dedicado) de los centros destinatarios en relación al total de las cantidades de todos los centros destinatarios.
    - tipos de distribución específicos para las redistribuciones:
        - **10 Reversión sobre producción a tarifa estándar**: redistribuimos un Centro a varios Centros según un flujo de Movimientos Físicos entre el Centro de origen (que es el centro vinculado al controlador) y los Centros destinatarios (que son los centros de destino del controlador): por lo tanto, las Horas del Centro de origen serán iguales a las Horas de los Centros destinatarios. El Centro cedente no se vacía completamente, por lo tanto tendrá un valor residual diferente de cero.
        - **11 Reversión directa a tarifa estándar**: permite redistribuir un Centro a varios Centros basándose en una Tarifa Estándar del Centro de origen (el centro del controlador) y en un flujo de Movimientos Físicos de los Centros destinatarios. El monto atribuido a los Centros destinatarios será el producto entre la Tarifa Estándar del Centro de origen y el monto del valor de la Magnitud Física de cada Centro destinatario. También en este caso, el Centro cedente no se vacía completamente, por lo que tendrá un valor residual diferente de cero.
        - **12 Reversión sobre producción a tarifa calculada**: permite redistribuir un Centro a varios Centros basado en una Tarifa Calculada del Centro de origen y un flujo de Movimientos Físicos entre el Centro de origen y los Centros destinatarios, por lo tanto las Horas del Centro de origen serán iguales a las Horas de los Centros destinatarios. El monto atribuido a los Centros destinatarios será el producto entre la Tarifa Calculada del Centro de origen y el monto del valor de la Magnitud Física de cada Centro destinatario, por lo que el Centro cedente se vacía completamente y tendrá un valor residual igual a cero.
    - tipos de distribución específicos para la dimensión de proyectos/encargos (detallados a continuación):
        - **13 Reversión sobre producción por proyecto**
        - **14 Reversión de márgenes por proyecto**
        - **15 Reversión de amortizaciones específicas por proyecto** 
        - **16 Reversión sobre ingresos de proyecto** 
        - **17 Reversión sobre costos de proyecto** 
        - **18 Reversión sobre costo industrial de proyecto** 

- [**UNIDAD DE MEDIDA**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units): el campo se activa para los tipos de distribución *09 - 10 - 11 - 12* y sirve para seleccionar cuál es la unidad de medida a buscar en los movimientos físicos.

## OTROS CAMPOS

- **Error en la gestión**: en este campo podemos indicar cómo gestionar, eventualmente, los casos en los cuales no hay datos para la aplicación de la regla.
    - *Cerrojo*: el bloqueo claramente interrumpe el procesamiento si no hay los datos necesarios para la aplicación del controlador.
    - *VALOR RESIDUAL*: El valor residual no puede utilizarse para atribuciones, sino solo para redistribuciones, porque deja en el centro de origen el valor residual que no se pudo asignar a los centros de destino. El centro genérico debe permanecer siempre vacío y, por lo tanto, este tipo de gestión de errores no es utilizable en las atribuciones.
    - *MEDIA DE LOS VALORES EXISTENTES*, en cambio, se extiende en el período actual, cuando no hay un valor, sobre la base del promedio de los valores existentes en otros períodos del año en procesamiento.

:::tip Nota
Por ejemplo, puede servir para evitar bloqueos en períodos, como agosto, en los cuales las cantidades o valores a utilizar en el controlador podrían ser cero debido al cierre de la empresa por vacaciones.
:::

- **Valores a utilizar**: indico cuáles son los datos que debo considerar para los centros destinatarios. La elección es entre:
    - TODOS: lee todos los movimientos asignados (hasta ese determinado ciclo que estoy procesando). 
    - SOLO FILAS DE ORIGEN: solo los datos que provienen de las atribuciones iniciales.

:::tip Nota
Sustancialmente, para las redistribuciones, en este campo se define si se deben considerar o no, para los Centros Destinatarios, también los valores recibidos de redistribuciones de otros centros. Por lo tanto, tiene validez solo para los Tipos de Distribución del 02 al 08 incluidos, es irrelevante para los demás tipos que se basan en tarifas.
:::

- **FLAG DE REVERSIÓN**: este indicador responde a la pregunta de si los datos de la dimensión de origen deben mantenerse o deben *trasladarse* a la dimensión de destino.

:::tip Nota
Cuando el controlador está vinculado a la dimensión de proyectos/encargos, definitivamente debo mantener el valor también en el origen que es la dirección, de lo contrario, me faltarían costos y eventuales cuentas de resultados serían inexactas.
:::

- **Por departamento**: habilitamos la posibilidad de filtrar los datos de origen a distribuir en base a la división establecida en el campo siguiente.

:::tip nota
En lo que respecta a la división, es también interesante notar que es potencialmente posible definir controladores que llevan a cabo una redistribución de costos/ingresos de una división a otra: es necesario que la empresa opere en múltiples divisiones y que haya activado el *Parámetro general* de *gestión de centros por división*.
:::

## PARTICULARIDADES PARA DIMENSIÓN DE PROYECTO/ENCARGO

Cambiamos ahora la atención a los campos relacionados con los controladores de proyecto/encargo. Primero, veamos los últimos tres campos en la cuadrícula.

- **Tipo de medición**: en este campo debemos establecer cuál es el índice de costo (la tarifa) a utilizar para valorar el centro asociado al controlador de costos. Las opciones disponibles son:
    - *UM1*: se utilizará el índice relacionado a la primera unidad de medida del centro.
    - *UM2*: se utilizará el índice relacionado a la segunda unidad de medida del centro.
    - *%*: se utilizará el índice porcentual del centro.

- **Área para índice**: en este campo podemos especificar en qué *Área* buscar el índice de costo anterior: en esencia, para la dimensión de proyectos podemos indicar un área específica desde la cual leer los índices, independientemente del área seleccionada para el *Elaboración de resultados de proyectos*.

- **Tipo de cálculo del índice**: en este campo puedo definir cómo calcular el índice, según estas opciones:
    - *Mes*: se utilizará el índice puntual del mes individual.
    - *Hasta el periodo*: se utilizará un índice calculado con los datos acumulados desde el inicio del año que se está procesando.
    - *Año móvil*: se utilizará un índice calculado con los datos acumulados de los 12 meses anteriores al período individual que se está procesando.
    - *Año*: se utilizará un índice calculado con los datos acumulados de todos los meses disponibles en el año que se está procesando.
    - *Tarifa estándar*: se utilizará la tarifa estándar del centro, válida para el período individual que se está procesando.

- **TIPOS DE DISTRIBUCIÓN** específicos de proyecto/encargo: en primer lugar, el controlador siempre prevé centros de destino, pero para una dimensión de proyectos tendremos no solo estos centros 'de proyecto' sino también el proyecto específico vinculado a ellos. La referencia es a la posibilidad de tener un único *centro de proyecto* (mediante el flag *Centro de default para los proyectos*), que será el único insertado como destinatario del controlador, en lugar de utilizar la tabla *Asociación centros/encargos* a través de la cual vincular una lista de códigos de centro según ciertas características de los proyectos. Esta última posibilidad permite, potencialmente, tener controladores diferentes en tipos de proyecto diferentes (porque, por ejemplo, se tienen estructuras de costo diferentes según el tipo de proyecto). En detalle, los tipos de distribución son:

    - **13 Reversión sobre producción por proyecto**: se leerá el índice de costo (para la UM1 o 2, área y tipo de cálculo establecidos) del centro del controlador y se valorizará sobre las horas trabajadas del centro en los proyectos/encargos asociados a los CDC en la parte inferior izquierda.
    - **14 Reversión de márgenes por proyecto**: se leerá el índice de costo (%) del centro del controlador y se valorizará sobre los márgenes de los proyectos/encargos asociados a los CDC en la parte inferior izquierda.
    - **15 Reversión de amortizaciones específicas por proyecto**: se buscarán los costos unitarios de las amortizaciones técnicas del controlling del activo individual y se multiplicarán por las cantidades que el activo ha producido en el proyecto/encargo individual asociados a los CDC en la parte inferior izquierda.
    - **16 Reversión sobre ingresos de proyecto**: se leerá el índice de costo (%) del centro del controlador y se valorizará sobre los ingresos de los proyectos/encargos asociados a los CDC en la parte inferior izquierda, filtrando los datos sobre las cuentas indicadas en la cuadrícula de la derecha, si es necesario.
    - **17 Reversión sobre costos de proyecto**: se leerá el índice de costo (%) del centro del controlador y se valorizará sobre los costos de los proyectos/encargos asociados a los CDC en la parte inferior izquierda, filtrando los datos sobre las cuentas indicadas en la cuadrícula de la derecha, si es necesario.
    - **18 Reversión sobre costo industrial de proyecto**: en este caso, el índice porcentual se aplicará al costo industrial calculado, proyecto por proyecto, mediante los tipos de *origen de datos* configurados en la cuadrícula de la derecha. Podemos entonces indicar *Materiales*, *Trabajos internos*, *Trabajos externos* y quizás los importes de determinadas detalle de cuentas extraídos de la *Contabilidad*.

:::tip Nota
Si debemos valorar el centro de carpintería, que es un centro de producción, sobre los proyectos en trabajo en el período, por ejemplo, deberé tener un controlador que tome ese costo y me lo redistribuya tal vez por *Reversión sobre producción por proyecto*: iré entonces a leer los datos tomados de la producción, proyecto por proyecto, cuánto se ha trabajado desde este centro, sobre la base del tipo de medida del centro (es decir, la UM1 o UM2 para centros productivos). El índice porcentual, en cambio, típicamente lo utilizaremos cuando el criterio de distribución esté relacionado con costos/ingresos/márgenes de proyecto.
:::