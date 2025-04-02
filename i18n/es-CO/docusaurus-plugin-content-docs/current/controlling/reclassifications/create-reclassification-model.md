---
title: crea modello di riclassificazione
sidebar_position: 2
---

:::note Ruta
**Controlling > Reclasificaciones > Modelos de reclasificación > Crear modelo de reclasificación**

Nota:
Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).

:::

---

### INGRESO NUEVO MODELO - CABECERA

Los modelos de reclasificación son elementos comunes a todas las empresas cargadas en la misma base de datos: la estructura del reclasificado, por lo tanto, será visible en todas las empresas, mientras que lo que será específico en cada una de ellas será la asignación de su propia estructura del plan de cuentas (cdc/cdp, etc.) a los diversos modelos. De este modo, también será posible crear un reclasificado consolidado de grupo.

:::tip Nota
Son comunes a todas las empresas, o a todas las empresas de la misma localización geográfica asignada al *Tipo de reclasificación* a través de su propiedad *Nación*.
:::

Los elementos necesarios para crear un nuevo modelo son:

- **Tipo de reclasificación** al que pertenece,

- **Código del modelo** (alfanumérico de 10 caracteres),

- **Descripción** del mismo.

- **Inversión de signo**, disponible solo en tipos de reclasificación relacionados con el *Controlling*, que permite forzar la inversión +- en todos los nodos del modelo.

- **Índice en valor absoluto**, disponible solo en tipos de reclasificación relacionados con el *Controlling*, establece el cálculo de los índices porcentuales en valor absoluto.

Asignados estos valores, se activarán los diversos botones para definir la estructura de reclasificación: con el botón **Inserción de nodo raíz** se crearán los primeros niveles de la estructura, mientras que con el siguiente **Inserción de nodo** se añadirán subniveles al seleccionado en la estructura.

Cada nivel de la estructura, a su vez, será definido a través de un código (alfanumérico de 8 caracteres) y una descripción: la unicidad en este caso particular se da por la combinación de ambos valores, código y descripción juntos (esto se debe a que en un reclasificado UE, por ejemplo, hay múltiples niveles 'A' en las diversas secciones del modelo, con descripciones diferentes). A continuación, en los siguientes puntos, veremos en detalle los *Tipos de nivel* que se pueden asignar a estos códigos, teniendo en cuenta que la eliminación de los diversos niveles solo está permitida si estos no están valorados en una fórmula ('suma de los hijos' o 'expresión').

### UTILIDAD EN LA BARRA DE MENÚ


1. La máscara **búsqueda de subcuentas faltantes** permite buscar e imprimir las subcuentas que no están insertadas en ningún punto del modelo de reclasificación: en el filtro de búsqueda están disponibles los indicadores *Mostrar cuentas vencidas - con fecha de fin de validez*, el indicador *Mostrar la cuenta no utilizada en la cuadrícula de centros de costo* y el indicador *Mostrar la cuenta no utilizada en la cuadrícula de cuentas*, los dos últimos que permiten definir si buscar en los nodos de tipo *Centros de costo* o *Subcuentas*. En particular, si se ha insertado la cuenta genérica, no se visualizarán sus subcuentas aunque estas no estén específicamente insertadas en el modelo.
2. La máscara **búsqueda de subcuentas duplicadas** permite buscar e imprimir la lista de subcuentas que han sido insertadas en más de un punto del modelo, considerando solo los nodos de cuentas o los nodos de centros a través de los dos indicadores *Mostrar cuenta duplicada en la cuadrícula de centros de costo* y *Mostrar cuenta duplicada en la cuadrícula de cuentas* presentados en el filtro. En particular, si se ha insertado la cuenta genérica y una de sus subcuentas, esta será visualizada ya que se considera tanto en el total como en el detalle.


### CAMPOS DE CABECERA

**Tipo de nodo** - Representa el tipo de fila del modelo de reclasificación. Están disponibles las siguientes tipologías:

- ***Subcuentas***, dedicado a la valorización de los datos de contabilidad general, según los detalles de la estructura del plan de cuentas de la empresa.

- ***Centros de costo***, dedicado a la valorización de los datos de analítica. En caso de que el modelo esté relacionado con el controlling, tendrá disponibles algunas características específicas.

- ***Centros de beneficio*** (presente por retrocompatibilidad, solo si la empresa no tiene el indicador *Controlling*), dedicado a la valorización de los datos de contabilidad por centro de beneficio/ingreso.

- ***Suma de los hijos***: es un nodo que se valora automáticamente con la suma de los nodos presentes en el primer nivel subyacente.

- ***Expresión***: en este caso, la sección de compilación de la expresión es libremente configurable. Se permiten los paréntesis, la gestión de los 4 signos matemáticos principales y la inserción de números. Para incluir un nodo del modelo en la fórmula, se recomienda el uso del botón 'Fórmula', que abrirá una ayuda para la selección de nodos del modelo: en esta máscara, los nodos en rojo identifican aquellos que no se han guardado aún y, por lo tanto, no son utilizables en una fórmula.

- ***Órdenes*** (presente por retrocompatibilidad, solo si la empresa no tiene el indicador *Controlling*), dedicado a la valorización de los datos de la contabilidad por órdenes, según los detalles de la orden.

- **Tipo de dato**, el campo está activo solo en nodos de tipo *Expresión* y tiene las opciones *Moneda* o *Número*: en el primer caso, el nivel visualizará un valor monetario con el símbolo y los decimales correspondientes de la divisa de la empresa; en el segundo caso, el nivel visualizará un valor numérico genérico redondeado al número de decimales establecido en el campo siguiente.

- **Inversión del signo del nodo seleccionado** permite invertir los signos negativos en positivos y viceversa: en los reclasificados de ***FluentisERP***, cualquier dato con saldo deudor se visualizará con signo positivo, el acreedor con signo negativo. A través de este indicador, por lo tanto, se podrán visualizar totales positivos para niveles que por naturaleza tienen saldo acreditor (pasivos, ingresos). Atención que esta configuración tiene una influencia determinante en el resultado de las sumatorias y de las expresiones en general. La inversión del signo se aplica al resultado del nivel, no a los detalles (subcuentas, cdc, cdp, órdenes) que lo valoran: estos continuarán teniendo el signo del saldo (véase más adelante en este documento la inversión de los signos de subcuentas específicas).

- **Para imprimir**: indica si el nivel debe incluirse en la impresión o no.

:::tip Nota
El uso de este indicador depende claramente de su gestión en la visibilidad dentro de los reportes de impresión.
:::

- **Mostrar detalles**: habilita la posibilidad de resaltar, en los comparativos, los detalles internos del nodo (es decir, la lista de subcuentas o centros).

- **Gestión de divisa**: la opción es válida para los nodos de tipo *Subcuenta*, indica a ***FluentisERP*** que valore los saldos en divisa para las subcuentas que tienen el indicador *Gestión de divisa* en el plan de cuentas (típicamente todas las entidades de clientes/proveedores/agenets/bancos). En este caso, por lo tanto, en los reclasificados de este modelo podremos tener N filas para cada subcuenta, una por cada divisa de movimiento en el cierre intertrimestral utilizado.

- La sección **Naturaleza de agrupación** permite establecer los tipos de cuenta que se pueden asignar a este nivel, y es visible solo cuando estamos en un nodo de tipo *Subcuentas*: en esencia, al momento de la inserción de la subcuenta se aplicará un filtro por tipo de cuenta ya limitado a aquellos que presenten indicadores coherentes con la configuración misma.

:::tip Ejemplos
Por ejemplo, si la naturaleza es 'Patrim. activo', será posible insertar los tipos de cuenta que tienen este indicador en la tabla: típicamente el activo, los clientes y los bancos. En caso de que se modifique esta configuración con subcuentas ya presentes en el nivel, al momento de guardar la modificación se requerirá si se deben eliminar las subcuentas no coherentes.
:::

Con el indicador **Considera c.d.c./c.d.p. hijos** (para modelos no vinculados a tipos de *Controlling*) se podrá insertar en el nivel el centro de costo X y ***FluentisERP*** reportará en el reclasificado todos sus centros de costo internos que tengan un valor. El indicador permite, por lo tanto, evitar reportar y mantener todo el posible detalle de los centros de costo, pero solo el centro de costo superior que los agrupa.

### GRILLA DE ENLACE DE CUENTAS

La grilla **Cuentas** permite definir la lista de cuentas y/o subcuentas que valorizarán este nivel del modelo. No se permite la inserción de la misma cuenta o subcuenta con el mismo tipo de saldo en el mismo nivel, mientras que este puede ser insertado en otros puntos del reclasificado sin ningún vínculo. Se permite la inserción de solo la cuenta (maestra) genérica: el caso típico es la cuenta genérica que contiene las subcuentas de registro, sin detallar la lista de clientes/proveedores en el modelo, lo que requeriría un continuo alineamiento de los diversos modelos.

El **tipo de saldo** de la fila individual de cuenta o subcuenta prevé las siguientes posibilidades:

**General** (se insertará el saldo de la subcuenta independientemente de su signo; en caso de cuenta genérica, se insertará la suma de los saldos de las subcuentas que pertenecen a esa cuenta),

**Deudor** (se insertará el saldo de la subcuenta solo si este tiene signo deudor; en caso de cuenta genérica, se insertará la suma de los saldos deudores de las subcuentas pertenecientes a esa cuenta),

**Acreedor** (se insertará el saldo de la subcuenta solo si este tiene signo acreedor; en caso de cuenta genérica, se insertará la suma de los saldos acreedores de las subcuentas pertenecientes a esa cuenta),

**Incremento** (para la subcuenta o cuenta, se calculará el valor como diferencia entre el cierre intertrimestral del reclasificado y otro cierre de referencia: esta tipología es útil en caso de análisis por flujos).

El último indicador presente en la grilla se denomina **Inv. col.**: significa que, sobre la subcuenta seleccionada, el signo del saldo será invertido.

:::tip Nota
Puede resultar útil, por ejemplo, para restar del saldo de una cuenta el valor de una de sus subcuentas: por ejemplo, eliminar un cliente intercompany que ha sido codificado dentro de la cuenta maestra de clientes estándar, para poder gestionarlo en un nodo separado sin duplicar valores.
:::

La inserción, en esta grilla, puede realizarse con dos metodologías: la carga directamente en la grilla, digitando el código o a través de la ayuda de cuentas que permite la selección de un único registro, o el uso del botón ‘Inserción múltiple de subcuentas’ para tener una ayuda de cuentas con la selección múltiple activa.

### GRILLA DE ENLACE DE CENTROS EMPRESARIALES

En la grilla de centros de costo se cargarán los centros de costo que valorizarán el nivel. Los campos disponibles son los siguientes:

- **Tipo de fila**: el campo está relacionado con la gestión de *Cost driver* en *Controlling* y por lo tanto está en uso solo en modelos de tipos relacionados con la contabilidad de gestión del controlling, la selección posible es entre
    - *Fuente*, las filas de analítica asignadas directamente al centro o atribuidas al primer ciclo de los drivers.
    - *Cedida* a otros Centros de costo, que serán indicados en la grilla.
    - *Recibida* de otros Centros de costo, que serán indicados en la grilla.

- **Cuenta-Subcuenta-Descripción**: sirve para indicar con qué cuenta (o cuenta-subcuenta) contable filtrar los datos de la analítica o de la gestión.

- [**Centro de costo**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): el campo es opcional en los modelos de tipo ligado al Controlling, mientras que es obligatorio en otros casos. Es el centro a utilizar para filtrar los datos de la analítica o de la gestión.

- **Inversión de columnas**: significa que, en la fila seleccionada, el signo del saldo será invertido.

- **Variables**: el campo es visible solo en modelos de tipo ligado al Controlling, permite definir si utilizar la
    - cuota *variable* 
    - cuota *fija*
    - *general* (deudor o acreedor), que es el valor por defecto cuando no se indica.

**Tipo de saldo**: siempre se gestiona el saldo de tipo *General*, solo en los modelos de tipo ligado al Controlling deberemos utilizar los tipos de saldo
    - *Inicial* 
    - *Final* 
    
para las filas de subcuentas de las existencias iniciales/finales.


### PARTICULARIDADES DEL TIPO DE NODO CENTROS DE COSTO PARA MODELOS DEL CONTROLLING
En los modelos con tipo ligado al Controlling, tenemos disponibilidad de algunas opciones específicas en los nodos de los Centros de costo. En particular:

- **Referencia porcentual**: sirve para entender, en las comparaciones, cuál es el nodo de referencia para calcular un porcentaje 'vertical' en el modelo.

:::tip Nota
Por ejemplo, lo configuraremos en el total de ingresos para poder entender cuánto incide, en porcentaje, cada nodo de costo respecto a él.
:::

- **Numerador para cálculo de índices**: en un modelo de totalización de costos de los centros, indica el nodo que totaliza los costos para usarlo como numerador para el cálculo de las tarifas de los centros.

- **Variables**: permite definir si utilizar la
    - cuota *variable* 
    - cuota *fija*
    - *general* (deudor o acreedor), que es el valor por defecto cuando no se indica.

La indicación a nivel de nodo se aplica si no está indicada a nivel de fila individual en la grilla.

- **Índice del nodo**: no utilizado.

### PARTICULARIDADES DEL TIPO DE NODO CENTROS DE COSTO PARA MODELOS DE CONSOLIDADO DE PROYECTO/ORDEN

- **Numerador para cálculo de rentabilidad**: indica el nodo que totaliza el margen de proyecto/orden.

- **Tipo de fuente**: indica qué tipo de origen de datos irá a valorizar el nodo. Son posibles las siguientes orígenes:
    - *Contable*: utilizado típicamente para el nodo que totaliza los ingresos directos de la orden, el dato llega en la gestión desde la contabilidad.
    - *Manual*: para datos que provienen de registros extracontables de área.
    - *Fórmula*: para datos que provienen de las fórmulas de cálculo.
    - *Amortizaciones*: para datos que provienen del cálculo técnico de las amortizaciones en el controlling.
    - *Asignaciones residuales*: para los ajustes de fin de período, normalmente no utilizado.
    - *Reversión a tarifa*: normalmente no utilizado.
    - *Existencias*: para datos que provienen de la contabilización de las existencias en el controlling.
    - *Materiales*: para resaltar los consumos de los artículos (materiales) en producción.
    - *Trabajos externos*: para resaltar los costos de los trabajos externos (del trabajo por encargo).
    - *Transformación*: para resaltar los costos de los trabajos internos (de la producción).
    - *Tiempo de máquina*: para mostrar los tiempos de máquina empleados en la producción.
    - *Tiempo hombre*: para mostrar los tiempos hombre empleados en la producción.
    - *Tiempo de máquina de configuración*: para mostrar los tiempos de configuración de máquina.
    - *Tiempo hombre de configuración*: para mostrar los tiempos de configuración de hombre.
    - *Consolidación*: para los registros de consolidación intercompany, normalmente no utilizado.