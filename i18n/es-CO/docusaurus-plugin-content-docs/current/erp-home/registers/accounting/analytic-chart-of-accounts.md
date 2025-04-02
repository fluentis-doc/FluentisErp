---
title: piano dei conti
sidebar_position: 1
---
:::tip[Inicio Rápido (FAst Start)]
La tabla está afectada por el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consultar la lista de verificación de la página vinculada.
:::

### BARRA DE HERRAMIENTAS:
:::note Botones de la Barra de Herramientas

| Función | Significado |
| --- | --- |
| Búsqueda | Realiza la búsqueda de cuentas/subcuentas dentro del grupo seleccionado. |
| Nueva cuenta | Coloca el cursor para la inserción de una nueva subcuenta dentro de la cuadrícula de detalle. |
| Movimiento de cuentas | Abre un formulario para mover una cuenta de un grupo a otro. |
| Abrir registros | Abre el registro asociado a la subcuenta de cliente/proveedor/banco/agente seleccionado. |
| Nuevo agrupamiento | Realiza la inserción de un nuevo grupo ‘raíz' en la estructura del plan de cuentas, independientemente del grupo seleccionado. |
| Nuevo grupo | Realiza la inserción de un grupo dentro del seleccionado. No es posible insertar grupos dentro de uno que ya tenga cuentas/subcuentas asociadas. |
| Eliminar cuenta | Realiza la eliminación de la cuenta seleccionada. Para eliminar, también se puede seleccionarla y presionar la tecla SUPR en el teclado. No es posible eliminar una subcuenta si ha sido utilizada en el sistema. (en este caso, establecer una fecha de fin de validez para hacerla invisible al usuario.) |
| Eliminar grupo | Realiza la eliminación del grupo seleccionado. |
| Expandir árbol | Expande el árbol subyacente al grupo seleccionado. |
| Colapsar árbol | Colapsa el árbol subyacente al grupo seleccionado. |
| Nueva Cc | Coloca el cursor para la inserción de un nuevo centro de costos para la subcuenta seleccionada. |
| Eliminar C.c. | Elimina el centro de costo seleccionado. |
| Nuevo Cp | Coloca el cursor para la inserción de un nuevo centro de beneficios para la subcuenta seleccionada. |
| Eliminar C.p. | Elimina el centro de beneficios seleccionado. |
| Nueva subcuenta automática | Coloca el cursor para la inserción de una nueva subcuenta automática para la subcuenta seleccionada. |
| Eliminar subcuenta automática | Elimina la subcuenta automática seleccionada. |

:::

---

### Conexión con otras tablas
La codificación del plan de cuentas implica el completado de una serie de tablas: [Tipos de cuenta](/docs/configurations/tables/finance/account-types), [Registros de contactos](/docs/erp-home/registers/contacts/registers-management), [Ítem de gasto](/docs/configurations/tables/finance/charge-item), Tipos de periodicidad del presupuesto, Centros de costos, Centros de beneficios, Divisiones, Escritos de ajuste/integración, Escritos de varia presupuesto, [Causales automáticas](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates), Tipo de monto.

### Inserción de la estructura del plan de cuentas

La codificación del plan de cuentas requiere comenzar con la inserción de la lista de grupos en la sección superior del formulario: 

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image01.png)

A través de los botones de inserción de agrupamientos/grupos, se podrán insertar nuevos niveles primarios o niveles inferiores al seleccionado, asignando a cada uno un código alfanumérico único, una descripción y un tipo de cuenta.

**Nuevo Agrupamiento**: actúa solamente para insertar un nuevo **nivel cero** (un grupo sin padres encima de él).

**Nuevo Grupo**: actúa para insertar un grupo hijo del grupo seleccionado. 

**Estructura**: campo completado automáticamente por el sistema para representar una concatenación de los códigos de los grupos y agrupamientos en los que está contenida la línea;

**Descr. alternativa**: permite asignar una descripción adicional que puede ser utilizada, por ejemplo, en la impresión del balance (personalizándola con las herramientas específicas). Podría, por ejemplo, insertarse una traducción en otro idioma de la descripción de la cuenta.

**Naturaleza del grupo**: recoge el tipo de cuenta del grupo. El combo box está vinculado a la tabla Tipo de cuenta. Se recomienda completar el tipo de cuenta también para los grupos y agrupamientos, como se hace en la fase de inserción de las subcuentas de detalle descrita a continuación.


### Inserción del detalle del plan de cuentas

Una vez seleccionado el grupo de nivel más bajo, se activará en la cuadrícula inferior la lista de cuentas y subcuentas insertadas dentro de este. 

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image03.png)

Esta **cuadrícula inferior se completa insertando directamente los datos** en las líneas. Siempre se nota la última línea disponible para la inserción de una nueva entrada, y está marcada con el símbolo del asterisco en la zona azul en la extrema izquierda.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image04.png)

**ATENCIÓN: la estructura del plan de cuentas requiere que se inserte, para cada grupo de nivel más bajo del cual estamos insertando el detalle, al menos una cuenta ("maestra") sin subcuenta que funcione como el último agrupamiento de detalle de las subcuentas operativas. Se recuerda que solo las cuentas con subcuenta pueden ser utilizadas en los registros contables.**

Se recomienda seguir un criterio numérico progresivo con uniformidad de caracteres (por ejemplo, todas las cuentas a 4 caracteres, todas las subcuentas a 3).

ATENCIÓN: en la fase de inserción de las subcuentas de detalle, hay un contador activo que incrementa la subcuenta automáticamente en uno en relación a la última insertada para ese grupo; se desaconseja dejar "huecos" en la numeración, ya que estos no serán recuperados automáticamente en ningún caso.

Proceder en orden insertando el **tipo de cuenta**, luego la **cuenta** (sin subcuenta si se desea crear un nuevo "maestra") y luego la **subcuenta** (si la subcuenta se inserta por primera vez para ese grupo, ingresar manualmente el número también definiendo el número de caracteres, por ejemplo 1 o 01 o 001; en la siguiente inserción, el número será incrementado automáticamente).

**Fecha de inserción**: es la fecha de creación de la cuenta/subcuenta;

**Fecha de última modificación**: es la fecha de última modificación del código de cuenta/subcuenta, actualizada automáticamente por el sistema;

**Apertura de partidas**: indicador que indica, para las cuentas vinculadas a registros de clientes y proveedores, si se gestiona la apertura de partidas para esa cuenta. El indicador se recoge, y debe gestionarse, dentro del registro. Es posible activar el indicador desde aquí para cuentas NO registradas (costos, ingresos, etc.) con el fin de abrir partidas en concomitancia con el registro contable (raro). En este caso, la causal contable utilizada deberá tener activo el parámetro para la apertura de partidas. En este caso, el indicador activo en la cuenta permite, en particular, realizar el control de cuadratura entre el movimiento contable y la partida abierta. En cualquier caso, la apertura de partidas en cuentas no registradas deberá ser hecha manualmente y no podrá suceder automáticamente.

**Tipo / Solución de pago**: en combinación con el anterior indicador de apertura de partidas, en caso de que se use en cuentas NO registradas (por ejemplo, costos, ingresos, patrimoniales, etc.) permite especificar las condiciones de pago a utilizar en la fase de apertura de la partida.

**Gestión de costos empresariales**: al activar este indicador, será posible gestionar centros de costos también en cuentas patrimoniales (raro); por ejemplo, incrementos por trabajos internos en economía, etc.

**Gestión de divisas**: Indicador que habilita la cuenta para:
- Gestión en el procedimiento de Regularización de divisas (Administración > Registros contables > Procedimientos > Regularización de divisas)
- Gestión del monto en divisas en el cierre y reapertura de cuentas

:::danger[Atención]
El indicador se habilita automáticamente en la fase de inserción de un nuevo registro y asociación con el tipo de cuenta para la creación de una nueva subcuenta en el plan de cuentas. Se recomienda no desactivarlo (si en el registro se asocia una divisa extranjera), de lo contrario, el cierre de cuentas perderá, para esa cuenta, la gestión del valor en divisa, incluso si en los parámetros del cierre está habilitada en general esta gestión de la divisa. Por lo tanto, la posibilidad de desactivarlo está reservada para una gestión particular voluntaria de una cuenta determinada que, aunque valorada en divisa, debe luego ser cerrada recalculando todo en euros, sin asignación de las diferencias de cambio.
:::

**Fecha de fin de validez**: sirve **para bloquear el uso de la subcuenta en nuevos registros** (a partir de la fecha ingresada), manteniendo la visibilidad de los movimientos previamente ingresados;

**Descripción adicional**: ver Descr. alternativa arriba;

**Ajustes / Reintegros - activos / pasivos - Cuenta / Subcuenta / Descripción**: Campos que permiten insertar, respectivamente para ajustes y reintegros activos y pasivos, una subcuenta específica sobre la cual serán contabilizados, con prioridad sobre las subcuentas genéricas para ajustes y reintegros activos y pasivos insertados en [parámetros contables](/docs/configurations/parameters/finance/accounting-parameters), los escritos de ajuste e integración relacionados con la subcuenta de costo o ingreso que estamos completando. Se recuerda que para la gestión automática de ajustes y reintegros, la cuenta de costo o ingreso objeto de ajustes debe tener un tipo de cuenta particular (por ejemplo, "a ajustar") que tenga el indicador de servicio activo en la tabla [Tipo de cuenta](/docs/configurations/tables/finance/account-types).


**Cuenta / subcuenta / descripción No Deducible**: Gestionado principalmente para localizaciones no italianas donde hay necesidad de contabilizar la cuota de IVA no deducible en una cuenta separada.


**Porcentaje de no deducibilidad**: Gestionado principalmente para localizaciones no italianas donde hay necesidad de contabilizar la cuota de IVA no deducible en una cuenta separada. Campo relacionado con el uso del anterior. Permite la definición del porcentaje de no deducibilidad de IVA directamente en la cuenta contable en lugar de en el código de IVA utilizado.


**Ítems de gasto / Descripción**: combo box vinculado a la tabla **[Ítems de gasto](/docs/configurations/tables/finance/charge-item)**; permite la conexión a un dato estadístico útil en el control de gestión.

**Variabilidad**: este campo, vinculado a las cuadrículas, presentes a la derecha del formulario, *Asignación Cdc* y *Variabilidad Cdc* (necesarias para la inserción de los vínculos entre subcuentas contables y centros empresariales con el fin de repartir automáticamente los movimientos contables en los centros) se **mueve en particular cuando el movimiento contable está vinculado a más de un centro empresarial**. Así como el homónimo campo presente en la cuadrícula Variabilidad Cdc acepta un valor en porcentaje que **define si el costo es un costo fijo** (variabilidad 0%) **o un costo** totalmente **variable** (variabilidad 100%) o parcialmente variable (por ejemplo, 70%). Véase la imagen a continuación para una correcta compilación.

NOTA: no confundir con el campo Porcentaje (presente en la cuadrícula Asignación Cdc) que se utiliza para indicar el porcentaje del movimiento contable a imputar a ese centro (por ejemplo, un costo repartido entre dos centros al 50% o 70% y 30%).

El campo **Variabilidad** presente en la cuadrícula principal en comentario es prioritario respecto al que está presente en la cuadrícula *Variabilidad Cdc*. Por esta razón, si se completa solo el campo en la cuadrícula principal, el dato será utilizado para ambos (o todos) los Centros asociados a la cuenta seleccionada.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image05.png)

**No utilizar en controlling**: el indicador, utilizado solo si están activadas las funciones avanzadas para el controlling en la tabla de sociedades, permite excluir (si se activa) los movimientos contables presentes para la cuenta seleccionada de los procesos específicos del controlling (como, por ejemplo, reversiones en base a controladores de costos, fórmulas y amortizaciones técnicas específicas para el controlling). De este modo, será posible operar manualmente a través de las funciones específicas del módulo controlling.

Ejemplo: si se desea utilizar a efectos de los procesos del controlling las amortizaciones específicas definidas en el ámbito de las funciones del controlling en lugar de partir del dato contable. Otro ejemplo: se desea registrar manualmente el costo del consejo de vigilancia asignándolo manualmente con las funciones del controlling para gestionar presupuestos y reales, en lugar de esperar la detección del costo correspondiente en contabilidad (típicamente a posteriori y, por lo tanto, no a tiempo útil).

Nota: el movimiento contable será, sin embargo, incluido en los cierres de cuentas intermedias (Controlling > Cierres intermedios).

La **metodología** aquí descrita determina la necesidad, periódicamente, de proceder a **ajustes** para cuadrar los movimientos contables (que confluyen en el balance) con los movimientos de la contabilidad de gestión (propios del controlling). Dichos ajustes se representarán en la reportística específica del controlling mediante rectificaciones (con signo positivo o negativo según los casos) específicas y distintamente indicadas que reconcilien los totales de balance con los totales de la contabilidad de gestión (los cuales son fruto de los movimientos gestionados manualmente, o de alguna manera no a partir del dato contable).

Los siguientes dos campos son funcionales a esta maniobra:

**Tiempos de balanceo**: el combo box permite elegir si el ajuste mencionado se realizará anualmente, o con una frecuencia intermedia, o si está deshabilitado (eligiendo ninguno).

**Tipos de balanceo**: el combo box permite elegir entre dos diferentes metodologías de ajuste:

- **Reproporcionar gestión**: parte del movimiento contable y lo reproporciona (insertando las rectificaciones) utilizando las lógicas de la contabilidad analítica (es decir, la asignación a los centros empresariales) para gestionar la diferencia;

- **Diferencias analíticas**: parte de la contabilidad de gestión (controlling) y lo realinea al dato contable insertando las rectificaciones con signo positivo o negativo.

**Porcentajes de variación / descripción**: el combo box, vinculado a la tabla [Porcentajes de variación](/docs/configurations/tables/controlling/analytical-accounting/variation-percentages), permite definir, para cada subcuenta, porcentajes (predefinidos y categorizados dentro de la tabla vinculada) a aplicar en varios procesos del controlling, como por ejemplo el presupuesto preventivo a partir del real del año anterior, aplicando incrementos o decrementos.

**Distribución de períodos / Descripción**: el combo box, vinculado a la tabla [Distribución de períodos](/docs/configurations/tables/controlling/managerial-accounting/periods-distribution), permite asignar, a cada subcuenta, una lógica de distribución específica del movimiento contable en los diferentes períodos en la fase de elaboración de los cierres intermedios.

**Grupos de ajuste / Descripción**: el combo box está vinculado a la tabla [Grupos de ajuste](/docs/configurations/tables/controlling/analytical-accounting/adjustments-groups), dentro de la cual es posible codificar agrupaciones de cuentas útiles para la gestión de la reportística específica para el controlling. El campo no tiene otra valencia operativa y no genera automatismos adicionales.

**Descripción extendida 1 / 2 / 3**: campos adicionales para contener descripciones alternativas (por ejemplo, en otro idioma). Pueden ser, por ejemplo, posteriormente insertadas en la impresión del balance mediante la personalización de la misma.

**Crisis empresarial**: ver página específica relacionada con esta funcionalidad. Se trata del módulo específico, integrado en Fluentis, para la gestión de los índices a calcular para cumplir con la normativa sobre la prevención de crisis empresariales. Dichos índices son gestionados a través del módulo CPM de Fluentis (que permite más en general el cálculo de indicadores de rendimiento).

Dado que los indicadores para la crisis empresarial hacen algunas consideraciones y cálculos relativos a algunas cuentas o subcuentas específicas, al momento de configurar el módulo para su uso, es necesario vincular a las varias categorías específicas previstas por el combo box, y refiriéndose a la documentación teórica específica de esta normativa, las cuentas pertinentes.


### INSERCIÓN DE LA CONEXIÓN SUBCUENTAS - CENTROS EMPRESARIALES

La conexión se realiza simplemente seleccionando la subcuenta de referencia e insertando la lista de cdc/cdp en las dos cuadrículas correspondientes: es posible vincular la valorización en divisiones empresariales diferentes, pero normalmente la división no se completa. No hay ningún control que la suma de los porcentajes ingresados sea igual a 100%.

NOTA: Al activar las funciones avanzadas para el controlling en la tabla [sociedades](/docs/configurations/tables/general-settings/company), se operará de acuerdo con las nuevas lógicas en las que ya no tiene relevancia el uso de los centros de beneficios, sino que se utilizan los cdc (bajo su denominación de centros Empresariales) sobre los cuales se asignarán componentes negativos o positivos para luego proceder a elaboraciones avanzadas como reversiones y comparaciones para determinar márgenes, etc.

Por esta razón, la cuadrícula de **centros de beneficios** (mantenida para utilizar las lógicas estándar) ha sido movida a la pestaña **Otro** (relativa a la cuadrícula Asignación Cdc).

Además, se recuerda que hay otros puntos de codificación de los Centros de costo/Beneficio: registros de clientes/proveedores/agentes, registros de artículos, almacenes, activos. La prioridad de valorización se define normalmente en los parámetros de gestión del módulo individual.

### Cuadrícula Asignación Cdc

**N**: Progresivo de línea

**Cdc / Descripción**: combo box vinculado a la tabla **Centros empresariales**, necesario para recuperar el centro deseado;

**Porcentaje %**: insertar aquí el porcentaje de atribución del movimiento contable al centro insertado en la línea. Por ejemplo, al ingresar el valor 100, el movimiento contable será atribuido al 100% a este centro, al ingresar 50 será atribuido al 50% y por lo tanto el residuo será atribuido (eventualmente) a otros centros insertados en las líneas siguientes.

**División / Descripción**: el vínculo puede ser insertado eventualmente diferenciando por cada división.

**Fecha de inicio de validez**: indica la fecha a partir de la cual está activa la atribución automática del movimiento al centro.

**Fecha de fin de validez**: indica la fecha de fin de validez a partir de la cual la atribución automática del movimiento al centro ya no tendrá efecto.

**Dimensión / Descripción**: combo box necesaria para atribuir al centro empresarial que se está insertando la correspondiente dimensión de análisis (este concepto se introduce y está disponible solo al activar las funciones avanzadas para el controlling desde la tabla de sociedades).

**Categoría del centro de costo / Descripción**: el combo box, vinculado a la tabla **Categorías de centros** empresariales permite asociar a cada **Dimensión** de análisis del controlling una categoría que a su vez está vinculada a diferentes centros empresariales (siendo la categoría un campo obligatorio en la codificación de cada centro empresarial). De este modo, en la fase de inserción del movimiento contable, se permite al operador la elección de una serie de centros empresariales predefinidos. Esto puede hacerse como alternativa a una definición rígida del centro asociado a la cuenta (posible al activar el parámetro "Vinculo cuenta / centro" dentro de la dimensión).

### Cuadrícula Subcuentas automáticas

En esta cuadrícula es posible insertar, para cada subcuenta que será llamada en un registro contable insertado a través de una causal contable que tenga una segunda causal automática asociada, una subcuenta específica a utilizar en la escritura relacionada con la segunda causal automática.

De este modo es posible hacer variar "dinámicamente" las subcuentas utilizadas por la segunda causal, dependiendo de la subcuenta que se sustituye a la cuenta genérica (típicamente insertada en la plantilla de la causal principal) en el momento de la creación del registro contable gracias a los automatismos del programa.

Es necesario insertar, además del código de la subcuenta, también el tipo de monto y la sección deudora o acreedora (ver la documentación relacionada con la gestión de las causales contables).

:::note Nota

En particular, la lógica de funcionamiento prevé:

- que la subcuenta sea utilizada en la sección IVA del registro;

- que el registro se base en una causal que prevea una causal automática;

- bajo estas condiciones, el ERP añadirá, en el registro automático, las subcuentas automáticas que están conectadas a las subcuentas;

- la valorización de estas subcuentas utilizará el tipo de monto de la sección ‘subcuentas automáticas' pero aplicándola a la línea IVA original.
:::


**Un ejemplo de uso puede ser el registro de subcuentas para las cuales deben ser valoradas en el debe/haber cuentas de orden.**

---

### Datos Adicionales: 
se remite a la documentación relacionada con los [Datos Adicionales (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata)

---

### VIDEOS TUTORIALES

:::important Ver También
[**VIDEOS TUTORIALES SOBRE EL PLAN DE CUENTAS**](/docs/video/finance/intro)
:::