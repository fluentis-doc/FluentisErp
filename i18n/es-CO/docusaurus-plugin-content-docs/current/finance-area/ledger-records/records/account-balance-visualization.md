---
title: visualizzazione bilancio
sidebar_position: 8
---

Desde este formulario es posible obtener una visualización de los datos en pantalla que corresponde, grosso modo, al informe del balance de comprobación, pudiendo, sin embargo, beneficiarse de diversas posibilidades de filtrado, agrupamiento de datos y opciones adicionales.

ÁREA DE FILTRO:

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image01.png)

permite filtrar los datos contables a procesar ingresando un rango de **fechas de registro** contable, un rango (subconjunto) de cuentas o subcuentas, un tipo de cuenta, una causal contable (**Template**), una división específica (útil si hay más de una activa) y una moneda extranjera (**Valuta**).

**converti anche le altre somme in divisa**: al activar este indicador, junto con la valoración del filtro anterior de Moneda (que extrae los movimientos expresados en una divisa particular), también los otros movimientos contables expresados en Euro o en otras divisas serán convertidos a la divisa seleccionada con el tipo de cambio de la fecha de registro.

PARÁMETROS: (abrir el expander)

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image02.png)

Dado que la cuadrícula de resultados también presenta el campo **Nivel**, que representa el orden jerárquico de la cuenta/subcuenta respectiva en el plan de cuentas (donde 99 es el último nivel inferior de máximo detalle posible y 0 es el nodo raíz, generalmente conteniendo el total), existe un filtro sobre los niveles a visualizar:

**tutti**: muestra todos los niveles;  

**Mostrar los totales por nivel X... (Mostra i totali per livello X...)**: al ingresar el nivel deseado (ejemplo 98) en el campo correspondiente **Nivel**, los resultados se agruparán por cuenta maestra (que en el plan de cuentas es el nivel inmediatamente superior al 99, definido a efectos de este procesamiento como el máximo detalle posible de las subcuentas en el plan de cuentas);  

**Mostrar los totales por nivel X... con subtotales (Mostra i totali per livello X... con subtotali)**: respecto al tipo de agrupamiento anterior mostrará también los subtotales de los posibles agrupamientos jerárquicamente inferiores.  

**mostra totali solo per sottoconti**: los valores se visualizarán solo para los niveles que contengan subcuentas (los niveles jerárquicamente superiores no se mostrarán).  

**Excluir las filas a cero (Escludere le righe a zero)**: no se mostrarán las cuentas/subcuentas no movidas.  

**Agregar (Add) (off/on)**: el indicador activa o desactiva un modo de visualización particular que, en caso de modificar el rango de fechas de registro y actualizar la pantalla haciendo nuevamente clic en el botón Buscar en la barra de ribbon, agrega el nuevo resultado (acumulándolo en la cuadrícula del resultado) a lo previamente visualizado, permitiendo, por ejemplo, realizar comparaciones de valores entre periodos diferentes. Por razones de manejabilidad y claridad del resultado, se recomienda utilizar este modo solamente en combinación con el filtro sobre las cuentas/subcuentas ajustado para devolver un conjunto limitado de datos.

CUADRÍCULA DEL RESULTADO:

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image03.png)

En esta cuadrícula se exponen las cuentas/subcuentas de acuerdo con los parámetros de filtro y agrupamiento establecidos en la parte superior del formulario.

Se reporta el código y la descripción tanto del **gruppo** (ver la estructura del **[plan de cuentas (piano dei conti)](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**) como de la cuenta/subcuenta y el código del **nivel** definido específicamente para este procesamiento y descrito anteriormente.

**finale**: este campo indica (con un indicador) si la cuenta y/o el grupo es de un nivel jerárquicamente superior respecto a todos los demás de su rama (de la estructura del plan de cuentas). Esto es útil porque, en caso de organización no óptima o no perfectamente homogénea de la estructura del plan de cuentas, el código visualizado en el campo Nivel podría no ser realmente el jerárquicamente superior y, por lo tanto, podría no ser posible filtrar correctamente (y obtener totales correctos).

Así, en la fila de filtro de la cuadrícula, es posible elegir todas las cuentas con el indicador Final activo, asegurándose así de extraer todos los niveles superiores.

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image04.png)

NOTAS:

En las columnas donde se encuentran los datos numéricos se utilizan las siguientes abreviaciones:

VdS = Moneda de la empresa (entendida como la divisa de la empresa en uso, aquella en la que está denominada la contabilidad que estamos llevando, en el caso de una empresa italiana es el Euro).  

VS = Moneda elegida (divisa) en el filtro inicial.  

Euroam = Euroamount: contraprestación en Euro de una operación en moneda.

ATENCIÓN: es posible visualizar (o esconder) columnas adicionales respecto al perfil estándar del formulario haciendo clic con el botón derecho sobre los encabezados de las columnas de la cuadrícula y eligiendo **visualizza selettore colonne**.

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image05.png)

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image06.png)

SIGNIFICADO DE LAS COLUMNAS:

Apertura Año Debe / Haber (Apertura Anno Dare / Avere) = valor de la última apertura de las cuentas calculada **(A)**  

Importe anterior (Debe / Haber) (Importo precedente (Dare / Avere)) = importe referido al periodo comprendido entre la última apertura de cuentas (A) y la fecha de inicio del periodo establecida en el filtro por fechas de registro **(B)**  

Balance anterior (Debe / Haber) = **(A) + (B)**  

Debe / Haber en el periodo (Dare / Avere nel periodo) = importe referido al periodo ingresado en el filtro por fechas de registro **(C)**  

Total Debe / Haber = **(A) + (B) + (C)**  

Saldo final Debe / Haber (Saldo finale Dare / Avere) = es el saldo neto de los valores totales de debe/haber expresados en el punto anterior.  

Columna **Filtro**: es un dato "técnico" que sirve, en caso de exportación de datos de la cuadrícula en Excel (o transferencia con copia y pega), para gestionar correctamente la creación subsiguiente, en Excel, de tablas dinámicas (por lo que este dato también debe ser llevado a Excel).  

TOTALES:

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image07.png)

**totale righe selezionate**: es posible seleccionar una o más (manteniendo presionada la tecla Ctrl) cuentas/subcuentas. En este caso, los importes se totalizan en esta fila.

ATENCIÓN: En caso de que se seleccionen, por ejemplo, subcuentas y también las cuentas maestras correspondientes, o grupos de nivel jerárquico superior (que por lo tanto ya comprenden el valor de las subcuentas de detalle), **el importe visualizado** en esta fila se mostrará **en rojo** para evidenciar que el total será distorsionado por una selección no homogénea y coherente.

**totale conti dettagliati**: los totales visualizados en esta fila son solamente aquellos referidos a subcuentas de detalle de nivel jerárquico más bajo.

**totale tabella**: los totales visualizados en esta fila son aquellos referidos a todas las filas visualizadas en la cuadrícula de resultados, por lo que en caso de que se devuelvan (en base a los filtros establecidos) tanto subcuentas de detalle como cuentas o niveles superiores, el total será la suma de las subcuentas y los niveles superiores (multiplicando los valores respecto al nivel de detalle y representando en este caso un dato poco significativo).