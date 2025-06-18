---
title: Plan de cuentas (Piano dei conti)
sidebar_position: 1
---
:::tip[Inicio Rápido (FAst Start)]
La tabla está afectada por el procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start).

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

### BARRA DE RIBBON (RIBBON BAR):
:::note Botones de la Barra de Ribbon

| Función (Funzione) | Significado (Significato) |
| --- | --- |
| Búsqueda (Ricerca) | Ejecuta la búsqueda de cuentas/subcuentas dentro del grupo seleccionado. |
| Nueva cuenta (Nuovo conto) | Ubica el cursor para ingresar una nueva subcuenta en la cuadrícula de detalles. |
| Movimiento de cuentas (Spostamento conti) | Abre una máscara para mover una cuenta de un grupo a otro. |
| Abrir registros (Apri anagrafiche) | Abre el registro asociado a la subcuenta cliente/proveedor/banco/agente seleccionado. |
| Nuevo agrupamiento (Nuovo raggruppamento) | Realiza la inserción de un nuevo grupo 'raíz' en la estructura del plan de cuentas, independientemente del grupo seleccionado. |
| Nuevo grupo (Nuovo gruppo) | Realiza la inserción de un grupo dentro del seleccionado. No es posible insertar grupos dentro de uno que ya tenga cuentas/subcuentas asociadas. |
| Eliminar cuenta (Cancella conto) | Ejecuta la eliminación de la cuenta seleccionada. Para eliminar, también se puede seleccionar y presionar la tecla SUPR en el teclado. No es posible eliminar una subcuenta si esta se ha utilizado en el sistema. (en este caso, debe establecerse una fecha de caducidad para hacerla invisible al usuario.) |
| Eliminar grupo (Cancella gruppo) | Ejecuta la eliminación del grupo seleccionado. |
| Expandir árbol (Esplodi l'albero) | Expande el árbol subyacente al grupo seleccionado. |
| Colapsar árbol (Implodi l'albero) | Colapsa el árbol subyacente al grupo seleccionado. |
| Nuevo C.C. (Nuovo CdC) | Ubica el cursor para ingresar un nuevo centro de costos para la subcuenta seleccionada. |
| Eliminar C.C. (Cancella C.d.C.) | Elimina el centro de costos seleccionado. |
| Nuevo C.P. (Nuovo CdP) | Ubica el cursor para ingresar un nuevo centro de beneficios para la subcuenta seleccionada. |
| Eliminar C.P. (Cancella C.d.P.) | Elimina el centro de beneficios seleccionado. |
| Nueva subcuenta automática (Nuova automatica conti) | Ubica el cursor para ingresar una nueva subcuenta automática para la subcuenta seleccionada. |
| Eliminar subcuenta automática (Cancella automatica conti) | Elimina la subcuenta automática seleccionada. |

:::

---

### Vinculación con otras tablas (Collegamento con altre tabelle)
La codificación del plan de cuentas implica el completado de una serie de tablas: [Tipos de cuenta (Tipi conto)](/docs/configurations/tables/finance/account-types), [Registros de contactos (Anagrafiche contatti)](/docs/erp-home/registers/contacts/registers-management), [Ítem de gasto (Voce di spesa)](/docs/configurations/tables/finance/charge-item), Tipos de periodicidad de presupuesto, Centros de costo, Centros de beneficio, Divisiones, Asientos de ajuste/integración, Asientos de diferencia de presupuesto, [Causales automáticas (Causali automatiche)](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates), Tipo de importe.

### Inserción de la estructura del plan de cuentas (Inserimento della struttura del piano dei conti)

La codificación del plan de cuentas requiere comenzar con la inserción de la lista de grupos en la sección superior de la máscara: 

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image01.png)

A través de los botones de inserción de agrupamientos/grupos, se podrán insertar nuevos primeros niveles o niveles inferiores al seleccionado, asignando a cada uno un código alfanumérico único, una descripción y un tipo de cuenta.

**Nuevo Agrupamiento (Nuovo Raggruppamento)**: actúa únicamente para insertar un nuevo **nivel cero (livello zero)** (un grupo sin padres sobre él).

**Nuevo Grupo (Nuovo Gruppo)**: actúa para insertar un grupo hijo del grupo seleccionado.

**Estructura (Struttura)**: campo completado automáticamente por el sistema para representar una concatenación de los códigos de los grupos y agrupamientos en los que está contenida la fila;

**Descripción alternativa (Descr. alternativa)**: permite asignar una descripción adicional que puede ser utilizada, por ejemplo, en la impresión de balances (personalizándola con las herramientas específicas). Podría, por ejemplo, incluirse una traducción al idioma de la descripción de la cuenta.

**Naturaleza del grupo (Natura gruppo)**: acepta el tipo de cuenta del grupo. La caja combinada está vinculada a la tabla Tipo de cuenta (Tipo conto). Se recomienda completar el tipo de cuenta también para los grupos y agrupamientos, al igual que se hace en la fase de inserción de las subcuentas de detalle descritas a continuación.


### Inserción del detalle del plan de cuentas (Inserimento del dettaglio del piano dei conti)

Una vez que se seleccione el grupo de nivel más bajo, se activará, en la cuadrícula inferior, la lista de cuentas y subcuentas insertadas dentro de este.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image03.png)

Esta **cuadrícula inferior se completa ingresando directamente los datos** en las filas. Siempre se nota la última fila disponible para la inserción de un nuevo dato, marcada con el símbolo del asterisco en la zona azul en el extremo izquierdo.

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image04.png)

**ATENCIÓN: la estructura del plan de cuentas prevé que, para cada grupo de nivel más bajo del cual estamos insertando el detalle, se inserte al menos una cuenta ("mastro") sin subcuenta que funcione como el último agrupamiento de detalle de las subcuentas operativas. Se recuerda que solo las cuentas con subcuenta pueden ser utilizadas en los registros contables.**

Se recomienda seguir un criterio numérico progresivo con uniformidad de caracteres (ej. todas las cuentas a 4 caracteres, todas las subcuentas a 3).

**ATENCIÓN:** durante la inserción de las subcuentas de detalle, hay un contador que incrementa automáticamente la subcuenta en uno respecto a la última ingresada para ese grupo; se desaconseja dejar "vacíos" en la numeración, ya que estos no serán recuperados automáticamente en ningún caso.

Proceda en orden ingresando el **tipo de cuenta**, luego la **cuenta** (sin subcuenta si se pretende crear un nuevo "mastro") y luego la **subcuenta** (si la subcuenta se ingresa por primera vez para ese grupo, ingrese manualmente el número definiendo también el número de caracteres, por ejemplo 1 o 01 o 001; en el siguiente ingreso, el número se incrementará automáticamente).

**Fecha de inserción**: es la fecha de creación de la cuenta/subcuenta;  

**Fecha de última modificación**: es la fecha de la última modificación del código de cuenta/subcuenta, actualizada automáticamente por el sistema;  

**Apertura de partidas**: indicador que indica, para las cuentas vinculadas a registros de clientes y proveedores, si se gestiona la apertura de partidas para esa cuenta. El indicador se retoma y debe ser gestionado dentro del registro. Es posible activar el indicador desde aquí para cuentas NO de registro (costos, ingresos, etc.) con el fin de abrir partidas en concomitancia con el registro contable (raro). En este caso, la causa contable utilizada deberá tener activo el parámetro para la apertura de partidas. En este caso, el indicador activo en la cuenta permite, en particular, realizar el control de cuadratura entre el movimiento contable y la partida abierta. En cualquier caso, la apertura de partidas en cuentas no registradas debe hacerse manualmente y no podrá suceder automáticamente.

**Tipo/Solución de pago**: en combinación con el indicador anterior de apertura de partidas, en caso de que se utilice en cuentas NO de registro (por ejemplo, costos, ingresos, patrimoniales, etc.), permite especificar las condiciones de pago a utilizar en la fase de apertura de partida.

**Gestión de centros de costos (Gestione c. aziendali)**: al activar este indicador, será posible gestionar centros de costos también en cuentas patrimoniales (raro); ejemplo incrementos por trabajos internos en economía, etc.

**Gestión de divisas (Gestione Divisa)**: Indicador que habilita la cuenta para:  
- Gestión en el procedimiento de Regularización de divisas (Amministrazione > Registrazioni contabili > Procedure > Regolarizzazione valuta)  
- Gestión del importe en divisa en el cierre y reapertura de cuentas  

:::danger[Atención]
El indicador se habilita automáticamente en la fase de inserción de un nuevo registro y asociación con el tipo de cuenta para la creación de la nueva subcuenta en el plan de cuentas. Se recomienda no deshabilitarlo (si en el registro se asocia una divisa extranjera), de lo contrario, el cierre de cuentas perderá, para esa cuenta, la gestión del valor en divisa, incluso si en los parámetros del cierre esta gestión de la divisa está habilitada en general. Por lo tanto, la posibilidad de desactivarlo está reservada a una gestión voluntaria particular de una determinada cuenta que, aunque valorada en divisa, debe luego cerrarse recalculando todo en euros, sin asignación de las diferencias cambiarias.
:::

**Fecha de fin de validez (Data di fine validità)**: sirve **para bloquear el uso del subcuenta en nuevos registros** (a partir de la fecha insertada), manteniendo la visibilidad de los movimientos previamente insertados;  

**Descripción adicional (Ulteriore descrizione)**: ver Descr. alternativa arriba;  

**Devengos / Ajustes - activos / pasivos - Cuenta / Subcuenta / Descripción (Ratei / Risconti - attivi / passivi - Conto / Sottoconto / Descrizione)**: Campos que permiten insertar, respectivamente para devengos y ajustes activos y pasivos, una subcuenta específica sobre la cual se contabilizarán, con prioridad sobre las subcuentas genéricas para devengos y ajustes activos y pasivos que se encuentren en los [parámetros de contabilidad](/docs/configurations/parameters/finance/accounting-parameters), las anotaciones de ajuste e integración relativas a la subcuenta de costo o ingreso que estamos completando. Se recuerda que para la gestión automática de devengos y ajustes, la cuenta de costo o ingreso objeto de ajustes debe tener un tipo de cuenta particular (por ejemplo, "a ajustar") que tenga el indicador de servicio activo en la tabla [Tipo de cuenta](/docs/configurations/tables/finance/account-types).

**Cuenta / subcuenta / descripción No Deducible (Conto / sottoconto / descrizione Non Deducibile)**: Gestionado principalmente para ubicaciones no italianas donde hay necesidad de contabilizar la cuota de IVA no deducible en una cuenta separada.  

**Porcentaje de no deducibilidad (Percentuale indetraibilità)**: Gestionado principalmente para ubicaciones no italianas donde hay necesidad de contabilizar la cuota de IVA no deducible en una cuenta separada. Campo relacionado con el uso del anterior. Permite la definición del porcentaje de no deducibilidad del IVA directamente en la cuenta contable en lugar de en el código de IVA utilizado.  

**Items de gasto / Descripción (Voci di spesa / Descrizione)**: cuadro combinado relacionado con la tabla **[Items de gasto](/docs/configurations/tables/finance/charge-item)**; permite la conexión a un dato estadístico útil en el control de gestión.  

**Variabilidad (Variabilità)**: este campo, vinculado a las cuadrículas, presentes a la derecha del formulario, *Asignación Cdc* y *Variabilidad Cdc* (necesarios para la inserción de los vínculos entre subcuentas contables y centros empresariales con el fin de repartir automáticamente los movimientos contables en los centros) se **movimenta especialmente cuando el movimiento contable está vinculado a más de un centro empresarial**. Al igual que el homónimo campo presente en la cuadrícula Variabilidad Cdc, acoge un valor en porcentaje que **define si el costo es un costo fijo** (variabilidad 0%) **o un costo** totalmente **variable** (variabilidad 100%) o parcialmente variable (por ejemplo, 70%). Consulte la imagen a continuación para una correcta compilación.  

NOTA: no confundir con el campo Porcentaje (presente en la cuadrícula Asignación Cdc) que sirve para indicar el porcentaje del movimiento contable que se imputará a ese centro (por ejemplo, un costo repartido entre dos centros al 50% o 70% y 30%).  

El campo **Variabilidad** presente en la cuadrícula principal en comentario tiene prioridad sobre el que se encuentra en la cuadrícula *Variabilidad Cdc*. Por esta razón, si solo se llena el campo en la cuadrícula principal, el dato se utilizará para ambos (o todos) los Centros asociados a la cuenta seleccionada.  

![](/img/it-it/erp-home/registers/accounting/analytic-chart-of-accounts/image05.png)  

**No utilizar en controlling (Non utilizzare in controlling)**: el indicador, utilizado solo si están activas las funciones avanzadas para el control en la tabla de empresas, permite excluir (si se activa) los movimientos contables presentes para la cuenta seleccionada de los procesos específicos del control (como, por ejemplo, reversiones en base a costos impulsivos, fórmulas y amortizaciones técnicas específicas para el control). De este modo, será posible operar manualmente mediante las funciones específicas del módulo de control.  

Ejemplo: si se desea utilizar para los fines de los procesos de control los amortizaciones específicos definidos dentro de las funciones del control en lugar de partir del dato contable. Otro ejemplo: se desea registrar manualmente el costo del consejo de administración al asignarlo manualmente con las funciones del control para gestionar presupuestos y resultados, en lugar de esperar la contabilización del costo correspondiente en contabilidad (típicamente posteriormente y, por lo tanto, no a tiempo).  

Nota: el movimiento contable se incluirá, sin embargo, en los cierres de cuentas interanuales (Controlling > Cierres interanuales).  

La **metodología** aquí descrita determina la necesidad, periódicamente, de proceder a unos **ajustes** para cuadrar los movimientos contables (que confluyen en el balance) con los movimientos de la contabilidad de gestión (propios del control). Dichos ajustes se representarán en la documentación específica del control mediante ajustes (con signo positivo o negativo según los casos) específicos e indicados que reconcilian los totales del balance con los totales de la contabilidad de gestión (los cuales son fruto de los movimientos gestionados manualmente, o de alguna manera no a partir del dato contable).  

Los siguientes dos campos son funcionales a esta maniobra:  

**Tiempos de equilibrado (Tempi di bilanciamento)**: el cuadro combinado permite elegir si el ajuste anterior se llevará a cabo anualmente, o con cadencia interanual, o si será desactivado (eligiendo ninguno).  

**Tipos de equilibrado (Tipi di bilanciamento)**: el cuadro combinado permite elegir entre dos metodologías diferentes de ajuste:  

   - **Reproporcionar gestión (Riproporziona gestionale)**: parte del movimiento contable y lo reproporciona (insertando los ajustes) utilizando las lógicas de la contabilidad analítica (es decir, la asignación a los centros empresariales) para gestionar la diferencia;  

   - **Diferencias analíticas (Differenze analitica)**: parte de la contabilidad de gestión (controlling) y lo realinea al dato contable, insertando los ajustes con signo positivo o negativo.  

**Porcentajes de variación / descripción (Percentuali di variazione / descrizione)**: el cuadro combinado, vinculado a la tabla [Porcentajes de variación](/docs/configurations/tables/controlling/analytical-accounting/variation-percentages), permite definir, para cada subcuenta, porcentajes (predefinidos y categorizados en la tabla vinculada) que se aplicarán en varios procesos del control, como, por ejemplo, el presupuesto preventivo a partir del resultado del año anterior, aplicando aumentos o disminuciones.  

**Distribución de períodos / Descripción (Distribuzione periodi / Descrizione)**: el cuadro combinado, vinculado a la tabla [Distribución de períodos](/docs/configurations/tables/controlling/managerial-accounting/periods-distribution), permite asignar, a cada subcuenta, una lógica de distribución específica del movimiento contable en los períodos individuales durante el proceso de cierre interanual.  

**Grupos de ajuste / Descripción (Gruppi di conguaglio / Descrizione)**: el cuadro combinado está vinculado a la tabla [Grupos de ajuste](/docs/configurations/tables/controlling/analytical-accounting/adjustments-groups), dentro de la cual es posible codificar agrupaciones de cuentas útiles para la gestión de la documentación específica para el control. El campo no tiene otro valor operativo y no genera más automatismos.  

**Descripción extendida 1 / 2 / 3 (Descrizione estesa 1 / 2 / 3)**: campos adicionales para acoger descripciones alternativas (por ejemplo, en otro idioma). Pueden ser, por ejemplo, insertadas posteriormente en la impresión del balance mediante la personalización del mismo.  

**Crisis de empresa (Crisi d'impresa)**: ver página específica relacionada con esta funcionalidad. Se trata del módulo específico, integrado en Fluentis, para la gestión de los índices a calcular para cumplir con la normativa sobre la prevención de crisis empresariales. Dichos índices son gestionados a través del módulo CPM de Fluentis (que permite más generalmente el cálculo de indicadores de rendimiento).  

Dado que los indicadores para la crisis de empresa hacen algunas consideraciones y cálculos en relación con algunas cuentas o subcuentas específicas, al momento de configurar el módulo para su uso, es necesario vincular a las diversas categorías específicas previstas por el cuadro combinado, y refiriéndose a la documentación teórica específica de esta normativa, las cuentas adecuadas.


### INSERIMENTO DEL COLLEGAMENTO SOTTOCONTI - CENTRI AZIENDALI (INSERTION OF SUBACCOUNT LINK - BUSINESS CENTERS)

El enlace se realiza simplemente seleccionando el subcuenta de referencia e insertando la lista de cdc/cdp en las dos cuadrículas correspondientes: es posible vincular la valoración en divisiones empresariales diferentes, pero normalmente la división no se completa. No hay ningún control que verifique que la suma de los porcentajes ingresados sea igual al 100%.

NOTA: Al activar las funciones avanzadas para el control en la tabla [empresa (società)](/docs/configurations/tables/general-settings/company), se operará según las nuevas lógicas en las que no tiene más relevancia el uso de centros de ganancias, sino que se utilizan los cdc (en su denominación de centros Empresariales) a los cuales se les atribuirán componentes negativos o positivos para proceder luego a elaboraciones avanzadas como reversiones y comparaciones para determinar márgenes, etc.

Por esta razón, la cuadrícula de **centros de ganancias (centri di profitto)** (mantenida para utilizar las lógicas estándar) se ha trasladado a la pestaña **Otro (Altro)** (relativa a la cuadrícula de Atribución de Cdc).

Se recuerda, además, que hay otros puntos de codificación de los Centros de costo/ganancias: registros de clientes/proveedores/agentes, registros de artículos, almacenes, activos. La prioridad de valoración se define normalmente en los parámetros de gestión del módulo individual.

### Griglia Attribuzione CDC (Grid for Assigning CDC)

**N (N)**: Progresivo de línea  

**Cdc / Descrizione (Cdc / Description)**: combo box conectada a la tabla **Centri aziendali (Business Centers)**, necesaria para llamar al centro deseado;  

**Percentuale % (Percentage %)**: ingresar aquí el porcentaje de atribución del movimiento contable al centro insertado en la línea. Por ejemplo, al ingresar el valor 100, el movimiento contable será atribuido al 100% a este centro, al ingresar 50 será atribuido al 50% y, por lo tanto, el remanente será atribuido (eventualmente) a otros centros incluidos en las líneas siguientes.  

**Divisione / Descrizione (Division / Description)**: el vínculo puede ser insertado diferenciando eventualmente por cada división.  

**Data inizio validità (Start Date of Validity)**: indica la fecha desde la cual está activa la atribución automática del movimiento al centro.  

**Data fine validità (End Date of Validity)**: indica la fecha de fin de validez a partir de la cual la atribución automática del movimiento al centro no tendrá más efecto.  

**Dimensione / Descrizione (Dimension / Description)**: combo box necesaria para atribuir al centro empresarial que se está insertando la correspondiente dimensión de análisis (este concepto se introduce y está disponible solo activando las funciones avanzadas para el control desde la tabla de la empresa).  

**Categoria centro di costo / Descrizione (Cost Center Category / Description)**: la combo box, conectada a la tabla **Categorie centri (Categories of Centers)**, permite asociar a cada **Dimensión (Dimension)** de análisis del controlling una categoría que a su vez está vinculada a diferentes centros empresariales (siendo la categoría un campo obligatorio en la codificación de cada centro empresarial). De esta manera, en la fase de inserción del movimiento contable, se permite al operador la elección de una serie de centros empresariales predefinidos. Esto se puede hacer como alternativa a una definición rígida del centro asociado a la cuenta (posible activando el parámetro "Vinculo cuenta / centro" dentro de la dimensión).

### Griglia Sottoconti automatici (Grid for Automatic Subaccounts)

En esta cuadrícula es posible insertar, para cada subcuenta que será llamada en un registro contable insertado a través de una causal contable con una segunda causal automática vinculada, un subcuenta específica a utilizar en el registro referente a la segunda causal automática.

De esta manera, es posible hacer variar "dinámicamente" los subcuentas utilizados por la segunda causal, dependiendo del subcuenta que se sustituye a la cuenta genérica (normalmente insertado en la plantilla de la causal principal) en el momento de la creación del registro contable gracias a los automatismos del programa.

Es necesario insertar, además del código del subcuenta, también el tipo de importe y la sección de debe o haber (ver la documentación relativa a la gestión de las causales contables).

:::note Nota (Note)

En particular, la lógica de funcionamiento prevé:

- que el subcuenta sea utilizado en la sección IVA del registro;  

- que el registro se base en una causal que prevé una causal automática;  

- bajo estas condiciones, el ERP añadirá en el registro automático, los subcuentas automáticos que están vinculados a los subcuentas;  

- la valoración de estos subcuentas utilizará el tipo de importe de la sección ‘subcuentas automáticas' pero aplicándola a la línea IVA de origen.  
:::

**Un ejemplo de uso puede ser el registro de subcuentas para las cuales deben ser valorizados en debe/haber cuentas de orden.**

---

### Extra Data: (Datos adicionales)
se remite a la documentación relativa a los [Extra Data (Datos adicionales)](/docs/configurations/utility/extra-data/extradata/search-extradata)

---

### VIDEO TUTORIALS (TUTORÍAS EN VIDEO)

:::important Vedi Anche (Ver También)
[**VIDEO TUTORIALS SUL PIANO DEI CONTI (TUTORIZACIONES EN VIDEO SOBRE EL PLAN CONTABLE)**](/docs/video/finance/intro)
:::