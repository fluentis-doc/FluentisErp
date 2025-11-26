---
title: Visualización del Balance
sidebar_position: 8
ai_generated: true
---

Desde este formulario es posible obtener una visualización de los datos en pantalla que corresponde, aproximadamente, al reporte del balance de comprobación, pudiendo sin embargo utilizar varias opciones de filtrado, agrupamiento de datos y opciones adicionales.

ÁREA DE FILTRO<!-- area di filtro -->:

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image01.png)

Permite filtrar los datos contables<!-- dati contabili --> a procesar ingresando un rango de **fechas de registro<!-- date di registrazione -->** contable<!-- contabile -->, un rango (subconjunto) de cuentas<!-- conti --> o subcuentas<!-- sottoconti -->, un tipo de cuenta<!-- tipo conto -->, una razón contable<!-- causale contabile --> (**Template**) una división específica (útil si hay más de una activa) y una moneda extranjera (**Moneda<!-- Valuta -->**).

**Convertir también las demás sumas en moneda<!-- Converti anche le altre somme in divisa -->**: activando esta opción, junto con la valorización del filtro anterior de Moneda<!-- Valuta --> (que extrae los movimientos<!-- movimenti --> expresados en una moneda<!-- divisa --> en particular), también los demás movimientos<!-- movimenti --> contables<!-- contabili --> expresados en euros u otras monedas se convertirán a la moneda seleccionada según el tipo de cambio de la fecha de registro<!-- data di registrazione -->.

PARÁMETROS<!-- parametri -->: (abrir el expansor)

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image02.png)

Dado que la cuadrícula de resultados también muestra el campo **Nivel<!-- Livello -->**, que representa el orden jerárquico de la cuenta<!-- conto -->/subcuenta<!-- sottoconto --> respectiva en el plan de cuentas<!-- piano dei conti --> (donde 99 es el último nivel inferior de máximo detalle posible y 0 es el nodo raíz, generalmente conteniendo el total), existe un filtro sobre los niveles a visualizar:

**Todos<!-- Tutti -->**: muestra todos los niveles<!-- livelli -->;

**Mostrar los totales por nivel X...<!-- Mostra i totali per livello X... -->**: introduciendo el nivel deseado (ejemplo 98) en el campo correspondiente junto a **Nivel<!-- Livello -->**, los resultados se agruparán por cuenta principal<!-- conto mastro --> (que en el plan de cuentas<!-- piano dei conti --> es el nivel inmediatamente superior al 99, definido en esta elaboración como el máximo detalle posible de las subcuentas<!-- sottoconti --> en el plan de cuentas<!-- piano dei conti -->);

**Mostrar los totales por nivel X... con subtotales<!-- Mostra i totali per livello X... con subtotali -->**: respecto al tipo de agrupamiento anterior, también mostrará los subtotales de los posibles agrupamientos jerárquicamente inferiores.

**Mostrar totales solo para subcuentas<!-- Mostra totali solo per sottoconti -->**: los valores serán visualizados solo para los niveles que contienen subcuentas<!-- sottoconti --> (los niveles jerárquicamente superiores no serán visualizados).

**Excluir las filas en cero<!-- Escludere le righe a zero -->**: no se visualizarán las cuentas<!-- conti --> / subcuentas<!-- sottoconti --> sin movimiento<!-- movimentati -->.

**Agregar (activado/desactivado)<!-- Aggiungere (off/on) -->**: la opción activa o desactiva un modo particular de visualización que, en caso de modificar el rango de fechas de registro<!-- date di registrazione --> y actualizar la pantalla presionando nuevamente el botón Buscar en la barra, añade el nuevo resultado (agregándolo en la cuadrícula de resultados) al previamente visualizado, permitiendo, por ejemplo, realizar comparaciones de valores entre distintos periodos. Por razones de manejabilidad y claridad del resultado, se recomienda utilizar este modo solo en combinación con el filtro sobre cuentas<!-- conti --> / subcuentas<!-- sottoconti --> ajustado para devolver un conjunto limitado de datos.

CUADRÍCULA DE RESULTADOS<!-- griglia del risultato -->:

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image03.png)

En esta cuadrícula<!-- griglia --> se muestran las cuentas<!-- conti --> / subcuentas<!-- sottoconti --> según los parámetros de filtro y agrupamiento definidos en la parte superior del formulario.

Se reportan el código y la descripción tanto del **grupo** (ver la estructura del **[plan de cuentas<!-- piano dei conti -->](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**) como de la cuenta<!-- conto --> / subcuenta<!-- sottoconto --> y el código del **nivel<!-- livello -->** definido específicamente para este procesamiento como se describió antes.

**Final<!-- Finale -->**: este campo indica (con una marca) si la cuenta<!-- conto --> y/o el grupo es de nivel jerárquicamente superior respecto a todos los demás de su rama (de la estructura del plan de cuentas<!-- piano dei conti -->). Esto es útil porque, en caso de organización no óptima o no perfectamente uniforme de la estructura del plan de cuentas<!-- piano dei conti -->, el código visualizado en el campo Nivel<!-- livello --> podría no ser en realidad el jerárquicamente superior y por tanto podría no ser posible filtrar correctamente (y obtener totales correctos).

Entonces, en la fila de filtro de la cuadrícula<!-- griglia --> es posible elegir todas las cuentas<!-- conti --> con la marca Final<!-- Finale --> activa, asegurándose así de extraer todos los niveles superiores.

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image04.png)

NOTAS<!-- note -->:

En las columnas con los datos numéricos se utilizan las siguientes abreviaciones:

VdS = Moneda de la empresa<!-- Valuta della società --> (se entiende como la moneda de la empresa en uso, aquella en la que se lleva la contabilidad que estamos gestionando, en el caso de una empresa italiana es el Euro).

VS = Moneda seleccionada<!-- Valuta scelta --> en el filtro inicial.

Euroam = Euroamount: contravalor en euros de una operación en moneda extranjera<!-- operazione in valuta -->.

ATENCIÓN: es posible visualizar (u ocultar) más columnas respecto al perfil estándar del formulario haciendo clic con el botón derecho sobre los encabezados de las columnas de la cuadrícula<!-- griglia --> y eligiendo **Mostrar selector de columnas<!-- Visualizza selettore colonne -->**.

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image05.png)

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image06.png)

SIGNIFICADO DE LAS COLUMNAS<!-- significato colonne -->:

Apertura Año Debe / Haber<!-- Apertura Anno Dare / Avere --> = valor de la última apertura de cuentas<!-- conti --> calculada **(A)**

Importe anterior (Debe / Haber<!-- Dare / Avere -->) = importe referido al periodo transcurrido entre la última apertura de cuentas<!-- conti --> (A) y la fecha de inicio del periodo configurada en el filtro para fechas de registro<!-- date registrazione --> **(B)**

Balance anterior (Debe / Haber<!-- Dare /Avere -->) = **(A) + (B)**

Debe / Haber en el periodo<!-- Dare / Avere nel periodo --> = importe referido al periodo indicado en el filtro para fechas de registro<!-- date registrazione --> **(C)**

Total Debe / Haber<!-- Totale Dare / Avere --> = **(A) + (B) + (C)**

Saldo final Debe / Haber<!-- Saldo finale Dare /Avere --> = es el saldo neto de los valores totales debe/haber expresados en el punto anterior.

Columna **Filtro**: es un dato "técnico" que sirve, en caso de exportación de los datos de la cuadrícula<!-- griglia --> a Excel (o transferencia con copiar y pegar), para gestionar correctamente la posterior creación, en Excel, de tablas dinámicas (se debe llevar también este dato a Excel).

TOTALES<!-- totali -->:

![](/img/it-it/finance-area/ledger-records/records/account-balance-visualization/image07.png)

**Total de filas seleccionadas<!-- Totale righe selezionate -->**: es posible seleccionar una o más (manteniendo pulsada la tecla Ctrl) cuentas<!-- conti --> / subcuentas<!-- sottoconti -->. En este caso los importes son totalizados en esta fila.

ATENCIÓN: En caso de que se seleccionen, por ejemplo, subcuentas<!-- sottoconti --> y también las cuentas principales<!-- conti mastro --> correspondientes, o bien grupos de nivel jerárquico superior (que por tanto ya incluyen el valor de las subcuentas<!-- sottoconti --> de detalle), **el importe visualizado** en esta fila se mostrará **en rojo** para evidenciar que el total estará distorsionado por una selección no homogénea y coherente.

**Total de cuentas detalladas<!-- Totale conti dettagliati -->**: los totales visualizados en esta fila son solo los referidos a subcuentas<!-- sottoconti --> de detalle de menor nivel jerárquico.

**Total de la tabla<!-- Totale tabella -->**: los totales visualizados en esta fila son los referidos a todas las filas visualizadas en la cuadrícula<!-- griglia --> de resultados, por lo tanto, en caso de que se devuelvan (según los filtros configurados) tanto subcuentas<!-- sottoconti --> de detalle, como cuentas<!-- conti --> o niveles superiores, el total será la suma de subcuentas<!-- sottoconti --> y niveles superiores (multiplicando los valores según el nivel de detalle, representando en este caso un dato poco significativo).