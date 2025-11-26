---
title: Crear modelo de reclasificación
sidebar_position: 2
ai_generated: true
---

:::note Ruta<!-- Percorso -->
**Controlling > Reclasificaciones > Modelos de reclasificación > Crear modelo de reclasificación**

Nota:
Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).

:::

---

### INSERCIÓN DE NUEVO MODELO - ENCABEZADO<!-- INSERIMENTO NUOVO MODELLO - TESTATA -->

Los modelos de reclasificación<!-- riclassificazione --> son elementos comunes a todas las empresas cargadas en la misma base de datos: la estructura del reclasificado<!-- riclassificato -->, por tanto, será visible en todas las empresas, mientras que lo que será específico en cada una de ellas será la asignación de su propia estructura de plan de cuentas<!-- piano dei conti --> (cdc/cdp etc.) a los distintos modelos. De este modo, también será posible crear un reclasificado<!-- riclassificato --> consolidado de grupo.

:::tip Nota
Son comunes a todas las empresas, o a todas las empresas de la misma localización geográfica asignada al *Tipo de reclasificación<!-- Tipo riclassificazione -->* a través de su propiedad *País<!-- Nazione -->*
:::

Los elementos necesarios para poder crear un nuevo modelo son: 

- **Tipo de reclasificación<!-- Tipo riclassificazione -->** de pertenencia,

- **Código del modelo** (alfanumérico de 10 caracteres), 

- **Descripción** del mismo.

- **Inversión de signo**, disponible solo en tipos de reclasificación<!-- tipi riclassificazione --> vinculados al *Controlling*, permite forzar la inversión +/- en todos los nodos del modelo.

- **Índice en valor absoluto**, disponible solo en tipos de reclasificación<!-- tipi riclassificazione --> relacionados con *Controlling*, establece el cálculo de los índices porcentuales en valor absoluto.

Asignados estos valores, se activarán los diferentes botones para la definición de la estructura de reclasificación<!-- riclassificazione -->: con el botón **Inserción de nodo raíz** se crearán los primeros niveles de la estructura, mientras que con el siguiente **Inserción de nodo** se agregarán subniveles al seleccionado en la estructura.

Cada nivel de la estructura, a su vez, se definirá mediante un código (alfanumérico de 8 caracteres) y una descripción: la unicidad en este caso particular está dada por la combinación de ambos valores, código y descripción juntos (esto porque en un reclasificado<!-- riclassificato --> UE, por ejemplo, existen varios niveles ‘A’ en las distintas secciones del modelo, con descripciones diferentes). A continuación veremos, en detalle, los diferentes *Tipos de nivel* que se pueden asignar a estos códigos, teniendo en cuenta que la eliminación de los distintos niveles sólo se permite si no están valorizados en una fórmula ("suma de los hijos" o "expresión").

### UTILIDADES EN LA BARRA DE OPCIONES<!-- UTILITY NELLA RIBBON BAR -->

 1. La pantalla **búsqueda de subcuentas faltantes<!-- ricerca sottoconti mancanti -->** permite buscar e imprimir las subcuentas<!-- sottoconti --> que no han sido insertadas en ninguna parte del modelo de reclasificación<!-- riclassificazione -->: en el filtro de búsqueda están disponibles las siguientes banderas: *Mostrar cuentas vencidas - con fecha fin de validez*, la bandera *Mostrar la cuenta no utilizada en la cuadrícula de centros de costo* y la bandera *Mostrar la cuenta no utilizada en la cuadrícula de cuentas*, estas dos últimas permiten definir si buscar en los nodos de tipo *Centros de costo* o *Subcuentas<!-- Sottoconti -->*
 En particular, si se ha insertado la cuenta genérica, no se mostrarán sus subcuentas<!-- sottoconti --> aunque éstas no estén específicamente insertadas en el propio modelo.
 2. La pantalla **búsqueda de subcuentas duplicadas<!-- ricerca sottoconti doppi -->** permite buscar e imprimir la lista de subcuentas<!-- sottoconti --> que se han insertado en más de un punto del modelo, considerando solo los nodos de cuentas o los nodos de centros mediante las dos banderas *Mostrar la cuenta duplicada en la cuadrícula de los centros de costo* y *Mostrar la cuenta duplicada en la cuadrícula de cuentas* presentes en el filtro. En particular, si se ha insertado la cuenta genérica y una de sus subcuentas<!-- sottoconto -->, esto se mostrará ya que se considera tanto en el total como en el detalle.

### CAMPOS DEL ENCABEZADO<!-- CAMPI DI TESTATA -->

**Tipo de nodo** - Representa el tipo de línea del modelo de reclasificación<!-- riclassificazione -->. Están disponibles las siguientes tipologías:

- ***Subcuentas***<!-- Sottoconti --> está dedicado a la valorización de los datos de contabilidad general, según los detalles de la estructura del plan de cuentas<!-- piano dei conti --> de la empresa.

- ***Centros de costo***<!-- Centri di costo --> dedicado a la valorización de los datos de la contabilidad analítica. En el caso que el modelo esté ligado al controlling dispondrá de algunas funcionalidades específicas.

- ***Centros de beneficio***<!-- Centri di profitto --> (presente por retrocompatibilidad, solo si la empresa no tiene la bandera *Controlling*) dedicado a la valorización de los datos de contabilidad por centro de beneficio/ingreso.

- ***Suma de los hijos***<!-- Somma dei figli -->: es un nodo que se valora automáticamente con la suma de los nodos presentes en el primer nivel subordinado.

- ***Expresión***<!-- Espressione -->: en este caso la sección de compilación de la expresión es de libre configuración. Se permiten paréntesis, la gestión de los 4 signos matemáticos principales, y la inserción de números. Para incluir un nodo del modelo en la fórmula, se recomienda utilizar el botón "Fórmula", que abrirá una ayuda para seleccionar los nodos del modelo: en esta pantalla, los nodos en rojo identifican aquellos que aún no han sido guardados y por ende aún no pueden utilizarse en una fórmula.

- ***Órdenes de trabajo***<!-- Commesse --> (presente por retrocompatibilidad, solo si la empresa no tiene la bandera *Controlling*) dedicado a la valorización de los datos de contabilidad por órdenes de trabajo<!-- commesse -->, según los detalles de la orden de trabajo.

- **Tipo de dato**, el campo está activo solo en nodos de tipo *Expresión* y tiene las opciones *Moneda* o *Número*: en el primer caso el nivel mostrará un valor monetario con el símbolo y decimales relativos de la moneda de la empresa; en el segundo caso, el nivel mostrará un valor numérico genérico redondeado al número de decimales establecido en el campo siguiente.

- **Inversión de signo del nodo seleccionado** permite invertir los signos negativos en positivos y viceversa: en los reclasificados de ***FluentisERP*** cualquier dato con saldo "debe" se mostrará con signo positivo, el "haber" con signo negativo. A través de esta bandera, por lo tanto, se podrán visualizar totales positivos para niveles que por naturaleza tienen saldo "haber" (pasivos, ingresos). Atención que esta configuración influye notablemente en el resultado de las sumatorias y de las expresiones en general. La inversión de signo se aplica al resultado del nivel, no a los detalles (subcuentas<!-- sottoconti -->, cdc, cdp, órdenes) que lo valorizan: estos seguirán teniendo el signo de su saldo (ver más adelante en este documento para la inversión de signos de subcuentas<!-- sottoconti --> específicas).

- **Imprimir**: indica si el nivel debe ser incluido en la impresión o no.

:::tip Nota
El uso de esta bandera depende claramente de su gestión en la visibilidad dentro de los reportes de impresión.
:::

- **Mostrar detalles**: habilita la posibilidad de destacar, en los comparados, los detalles internos del nodo (es decir, la lista de subcuentas<!-- sottoconti --> o centros).

- **Gestión de divisas**: la opción es válida para nodos de tipo *Subcuenta*, indica a ***FluentisERP*** valorizar saldos en divisa para subcuentas<!-- sottoconti --> que tienen la bandera *Gestión de divisas* en el plan de cuentas<!-- piano dei conti --> (típicamente todas las fichas de clientes/proveedores/agentes/bancos). En este caso, por tanto, en los reclasificados de este modelo podremos tener N líneas para cada subcuenta<!-- sottoconto -->, una para cada divisa de movimiento utilizada en la cierre intermedia.

- La sección **Naturaleza de agrupamiento** permite configurar los tipos de cuenta que se pueden asignar a este nivel, y es visible solo cuando estamos en un nodo de tipo *Subcuentas*: básicamente, al insertar la subcuenta<!-- sottoconto --> se aplicará un filtro por tipo de cuenta ya limitado a aquellas que tienen banderas coherentes con la propia configuración.

:::tip Ejemplos<!-- Esempi -->
Por ejemplo, si la naturaleza es ‘Activo patrimonial', será posible insertar los tipos de cuenta que tienen esta bandera en la tabla: típicamente el activo, los clientes y los bancos. En caso de que se modifique esta configuración con subcuentas<!-- sottoconti --> ya presentes en el nivel, al momento de guardar el cambio se pedirá si desea eliminar o no las subcuentas<!-- sottoconti --> no coherentes.
:::

Con la bandera **Considerar c.d.c./c.d.p. hijos** (para modelos no ligados a tipos de *Controlling*) se podrá insertar en el nivel el centro de costo X y ***FluentisERP*** reportará en el reclasificado<!-- riclassificato --> todos sus centros de costo internos que tengan un valor. La bandera permite, entonces, evitar incluir y mantener todo el detalle posible de los centros de costo y únicamente reportar el centro de costo superior que los agrupe.

### CUADRÍCULA DE VINCULACIÓN DE CUENTAS<!-- GRIGLIA AGGANCIO CONTI -->

La cuadrícula **Cuentas** permite definir la lista de cuentas y/o subcuentas<!-- sottoconti --> que valorarán este nivel del modelo. No está permitido insertar la misma cuenta o subcuenta<!-- sottoconto --> con el mismo tipo de saldo en el mismo nivel, aunque esto sí puede hacerse en otros puntos del reclasificado<!-- riclassificato --> sin ninguna restricción. Se permite la inserción únicamente de la cuenta genérica (mayor): el caso típico es la cuenta genérica que contiene las subcuentas<!-- sottoconti --> de los registros, sin detallar la lista de clientes/proveedores en el modelo, lo que obligaría a una constante alineación de los diferentes modelos.

El **tipo de saldo** de la línea de cuenta o subcuenta<!-- sottoconto --> prevé las siguientes posibilidades: 

**General** (se insertará el saldo de la subcuenta<!-- sottoconto --> independientemente de su signo; en el caso de cuenta genérica, se insertará la suma de los saldos de las subcuentas<!-- sottoconti --> pertenecientes a esa cuenta), 

**Debe** (se insertará el saldo de la subcuenta<!-- sottoconto --> solo si éste tiene signo "debe"; en el caso de cuenta genérica, se insertará la suma de los saldos "debe" de las subcuentas<!-- sottoconti --> pertenecientes a esa cuenta),

**Haber** (se insertará el saldo de la subcuenta<!-- sottoconto --> solo si éste tiene signo "haber"; en el caso de cuenta genérica, se insertará la suma de los saldos "haber" de las subcuentas<!-- sottoconti --> pertenecientes a esa cuenta),

**Incremento** (para la subcuenta<!-- sottoconto --> o cuenta, se calculará el valor como diferencia entre el cierre intermedio del reclasificado<!-- riclassificato --> y otro cierre de referencia: este tipo es útil en caso de análisis de flujos).

La última bandera presente en la cuadrícula se denomina **Inv. col.**: significa que, para la subcuenta<!-- sottoconto --> seleccionada, el signo del saldo será invertido.

:::tip Nota
Puede ser útil, por ejemplo, para deducir del saldo de una cuenta el valor de una de sus subcuentas<!-- sottoconto -->: por ejemplo, quitar un cliente intercompany que ha sido registrado dentro del mayor clientes estándar, para poder gestionarlo en un nodo separado sin duplicar valores.
:::

La inserción, en esta cuadrícula, puede realizarse de dos formas: cargando directamente en la cuadrícula, digitando el código o a través de la ayuda de cuentas que permite la selección de un único registro, o utilizando el botón ‘Inserción múltiple de subcuentas<!-- Inserimento multiplo sottoconti -->’ obteniendo una ayuda de cuentas con la selección múltiple activa.

### CUADRÍCULA DE VINCULACIÓN DE CENTROS EMPRESARIALES<!-- GRIGLIA AGGANCIO CENTRI AZIENDALI -->

En la cuadrícula de los centros de costo se cargan los centros de costo que valorarán el nivel. Los campos disponibles son los siguientes:

- **Tipo de línea**: el campo está vinculado a la gestión de los *Cost driver* en el *Controlling* y, por tanto, solo se utiliza en modelos ligados a la contabilidad de gestión del controlling, la selección posible es entre
    - *Origen*: las líneas analíticas asignadas directamente al centro o atribuidas al primer ciclo de los drivers
    - *Cedida*: a otros Centros de Costo, que se indicarán en la cuadrícula
    - *Recibida*: de otros Centros de Costo, que se indicarán en la cuadrícula

- **Cuenta-Subcuenta-Descripción**: sirve para indicar con qué cuenta (o cuenta-subcuenta<!-- conto-sottoconto -->) contable filtrar los datos de la analítica o de la gestión.

- [**Centro de costo**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): el campo es opcional en los modelos de tipo ligados al Controlling, mientras que es obligatorio en los demás casos. Es el centro a utilizar para filtrar los datos analíticos o de gestión.

- **Inversión de columnas**: significa que, para la línea seleccionada, el signo del saldo será invertido.

- **Variables**: el campo es visible solo en modelos ligados al Controlling, permite definir si utilizar la 
    - cuota *variable* 
    - cuota *fija*
    - *general* (debe o haber), que es el valor predeterminado cuando no se indica.

**Tipo de saldo**: siempre se gestiona el saldo de tipo *General*, solo en modelos ligados al Controlling deberemos utilizar los tipos de saldo 
    - *Inicial*
    - *Final* 
para las líneas de subcuentas<!-- sottoconti --> de inventarios iniciales/finales.

### PARTICULARIDADES DEL TIPO DE NODO CENTROS DE COSTO PARA MODELOS DE CONTROLLING<!-- PARTICOLARITA' DEL TIPO NODO CENTRI DI COSTO PER MODELLI DEL CONTROLLING -->
En los modelos con tipo ligado al Controlling, tenemos disponibles algunas opciones específicas en los nodos de los Centros de costo. En particular:

- **Referencia porcentual**: sirve para saber, en las comparaciones, cuál es el nodo de referencia para calcular un porcentaje "vertical" en el modelo.

:::tip Nota
por ejemplo, lo configuraremos en el total de ingresos para así entender cuánto incide, en porcentaje, cada nodo de costo respecto a él.
:::

- **Numerador para cálculo de índices**: en un modelo de totalización de costos de los centros, indica el nodo que totaliza los costos para usarlo como numerador para el cálculo de las tarifas de los centros.

- **Variables**: permite definir si utilizar la 
    - cuota *variable* 
    - cuota *fija*
    - *general* (debe o haber), que es el valor predeterminado cuando no se indica.

La indicación a nivel de nodo se aplica si no se indica a nivel de línea simple en la cuadrícula.

- **Índice del nodo**: no utilizado.

### PARTICULARIDADES DEL TIPO DE NODO CENTROS DE COSTO PARA MODELOS DE CONSOLIDADO DE PROYECTO/ORDEN<!-- PARTICOLARITA' DEL TIPO NODO CENTRI DI COSTO PER MODELLI DI CONSOLIDATO DI PROGETTO/COMMESSA -->

- **Numerador para cálculo de rentabilidad**: indica el nodo que totaliza el margen del proyecto/orden<!-- commessa -->.

- **Tipo de fuente**: indica qué tipo de origen de datos valorará el nodo. Son posibles los siguientes orígenes:
    - *Contable*: utilizado típicamente para el nodo que totaliza los ingresos directos del proyecto<!-- commessa -->, el dato llega a la gestión desde la contabilidad.
    - *Manual*: para datos provenientes de registros extracontables de área.
    - *Fórmula*: para datos provenientes de fórmulas de cálculo.
    - *Amortizaciones*: para datos provenientes del cálculo técnico de amortizaciones en controlling.
    - *Provisiones residuales*: para ajustes de fin de periodo, comúnmente no utilizado.
    - *Reversión a tarifa*: comúnmente no utilizado.
    - *Inventarios*: para datos provenientes de la contabilización de inventarios en controlling.
    - *Materiales*: para evidenciar los consumos de artículos (materiales) en producción.
    - *Procesos externos*: para destacar los costos de procesos externos (desde la cuenta de trabajo<!-- conto lavoro -->).
    - *Transformación*: para evidenciar los costos de los procesos internos (desde producción).
    - *Tiempo máquina*: para mostrar los tiempos de uso de máquinas en producción.
    - *Tiempo hombre*: para mostrar los tiempos humanos empleados en producción.
    - *Tiempo máquina de preparación*: para mostrar los tiempos de preparación de máquinas.
    - *Tiempo humano de preparación*: para mostrar los tiempos de preparación humana.
    - *Consolidación*: para los registros de consolidación interempresa, comúnmente no utilizado.