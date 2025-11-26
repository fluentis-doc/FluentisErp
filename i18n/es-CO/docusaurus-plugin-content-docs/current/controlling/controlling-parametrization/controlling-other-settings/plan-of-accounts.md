---
title: Plan de Cuentas  
sidebar_position: 3
ai_generated: true
---

La tabla del [***Plan de cuentas***<!-- Piano dei conti -->](/docs/erp-home/registers/accounting/analytic-chart-of-accounts) presenta una serie de características muy importantes a nivel de lógica de Controlling<!-- Controlling -->, ya sea entendido esto como simulaciones de balance intermedias o como contabilidad analítica/gerencial propiamente dicha. Veamos punto por punto las características específicas.

## CUADRÍCULA DE SUBCUENTAS<!-- GRIGLIA DEI SOTTOCONTI -->

- ***TIPO DE CUENTA***<!-- TIPO CONTO -->: la vinculación con el tipo de cuenta es de fundamental importancia: en particular, el tipo de cuenta que prevé la marca 'Servicio' activa (en ***FastStart*** son los *Costos a rectificar* y los *Ingresos a rectificar*) será el que active la gestión automática de devengos y diferidos<!-- ratei/risconti -->, tanto a nivel de contabilidad general (procedimiento de las ***Escrituras de ajuste***<!-- Scritture di assestamento --> como para los balances intermedios y las respectivas ***Escrituras de rectificación***<!-- Scritture di rettifica --> y ***Escrituras de integración***<!-- Scritture di integrazione -->*)

- Marca ***GESTIÓN DE CENTROS EMPRESARIALES***<!-- GESTIONE CENTRI AZIENDALI -->: si todas las asociadas a tipos de cuentas económicas tienen automáticamente la valoración analítica<!-- valorizzazione analitica --> (si la causale contabile<!-- causale contabile --> a su vez la prevé), esta también puede habilitarse para subcuentas patrimoniales<!-- Sottoconti patrimoniali --> mediante esta marca.

- ***VARIABILIDAD***<!-- VARIABILITA' -->: cuando la empresa tiene la marca *Controlling* activa, la contabilidad gerencial<!-- contabilità gestionale --> que se valoriza desde la analítica prevé la subdivisión de los importes en *cuota fija* y *cuota variable*, que se puede definir con este valor por defecto cuando no se ha valorado la cuadrícula de ***VARIABILIDAD DE CENTROS DE COSTOS***<!-- VARIABILITA' CENTRI DI COSTO --> presente a la derecha de la máscara.

:::tip Nota
Cuando el campo no está valorizado, se entiende que la subcuenta<!-- sottoconto --> es 100% un costo fijo
:::

- ***NO UTILIZAR EN CONTROLLING***<!-- NON UTILIZZARE IN CONTROLLING --> cuando la empresa tiene la marca *Controlling* activa, con este campo podemos indicar que el dato que la contabilidad proporciona no debe ser utilizado en los procesos de controlling<!-- controlling -->, porque es reemplazado por ejemplo por un dato estimado/proyectado de inicio de año (ej. Honorarios del consejo de vigilancia) o por una lógica extracontable (ej. amortizaciones<!-- ammortamenti -->)

- ***TIEMPOS DE AJUSTE***<!-- TEMPI DI BILANCIAMENTO --> el campo se activa si la marca anterior ha sido activada y permite indicar, si se configura, *cuándo* se quiere ejecutar el ajuste entre la gestión y el dato contable. Las opciones disponibles son:
    - *Anual*
    - *Interanual*<!-- Infrannuale -->

- ***TIPO DE AJUSTE***<!-- TIPO DI BILANCIAMENTO --> el campo se activa si la marca anterior ha sido activada y permite indicar, si se configura, *cómo* se quiere ajustar el dato contable. Las opciones disponibles son:
    - *Reproporcionar gestión<!-- Riproporziona gestionale -->*: se insertarán líneas automáticas para llevar el total del controlling<!-- controlling --> a los valores contables
    - *Diferencias analíticas<!-- Differenze analitica -->*: se anulará el dato de controlling<!-- controlling --> para sustituirlo por los valores y centros realmente utilizados en contabilidad

:::tip Nota
La primera opción tiene sentido cuando el registro en controlling<!-- controlling --> solo puede diferir por el importe respecto a lo registrado en contabilidad.
La segunda opción tiene sentido cuando, en el momento del registro contable real, no solo el importe sino también el centro de movimiento puede ser diferente respecto a la hipótesis pre-cargada en controlling<!-- controlling -->.
:::

- ***PORCENTAJES DE VARIACIÓN***<!-- PERCENTUALI DI VARIAZIONE -->: cuando la empresa tiene la marca *Controlling* activa, con este campo podemos definir la lógica de variación porcentual a aplicar cuando se duplican los valores gerenciales de esta subcuenta<!-- sottoconto --> (en la duplicación de los registros del ***Histórico de registros gerenciales***<!-- Storico registrazioni gestionali -->)

- ***DISTRIBUCIÓN DE PERIODOS***<!-- DISTRIBUZIONE PERIODI -->: cuando la empresa tiene la marca *Controlling* activa, con este campo podemos definir cómo distribuir esta subcuenta<!-- sottoconto --> en los periodos de la contabilidad gerencial<!-- contabilità gestionale --> durante el *procesamiento de periodos*. Si no se configura, ***FluentisERP*** utilizará los días de calendario correspondientes a la línea.

- ***GRUPOS DE AJUSTES***<!-- GRUPPI DI CONGUAGLIO -->: cuando la empresa tiene la marca *Controlling* activa, el campo es de suma importancia para las subcuentas económicas de existencias iniciales y finales, mientras que tiene validez de agrupamiento de datos homogéneos en la pantalla de control denominada ***Valores de control***<!-- Valori di controllo -->

## CUADRÍCULA DE ATRIBUCIÓN DE CENTROS<!-- GRIGLIA DI ATTRIBUZIONE DEI CENTRI -->
Para cada subcuenta<!-- sottoconto --> seleccionada, en la pestaña *Asignación de centros*<!-- Assegnazione centri --> ubicada al lado derecho, tendremos la posibilidad de predefinir una lista de centros a valorizar cuando se mueva esta subcuenta<!-- sottoconto --> en contabilidad, o se valore a través de la facturación de compras/ventas de la línea de artículo en el ciclo documental pasivo/activo, según las prioridades de cada módulo.

En esta cuadrícula tenemos los siguientes campos:
- ***NÚMERO***<!-- NUMERO --> progresivo de línea

- [***CENTRO DE COSTO***<!-- CENTRO DI COSTO -->](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) en este campo se asocia el centro empresarial<!-- centro aziendale -->. La propiedad es obligatoria en las empresas que **no** gestionan el *Controlling*<!-- Controlling -->, mientras que es opcional en aquellas con la gestión **activa**. En este segundo caso, de hecho, solo se podrá indicar la *dimensión*<!-- dimensione --> a valorizar y la *categoría* del centro predefinida.

- ***PORCENTAJE %***<!-- PERCENTUALE % --> el porcentaje de atribución, obligatorio dentro del rango 0-100

- ***DIVISIÓN***<!-- DIVISIONE --> la división que se debe asignar por defecto al movimiento analítico<!-- movimento di analitica -->
:::tip Nota
En instalaciones multidivisionales, es posible gestionar la división de dos maneras respecto a los centros: restringir el uso de los centros ligados a la división activa/seleccionada en la línea, o permitir la valoración de un solo centro en todas las divisiones empresariales<!-- divisioni aziendali -->, independientemente de la división de pertenencia del centro.
:::

- ***FECHA DE INICIO DE VIGENCIA***<!-- DATA INIZIO VALIDITA' --> y ***FECHA FIN DE VIGENCIA***<!-- DATA FINE VALIDITA' --> este rango actualmente **no** se verifica

- [***DIMENSIÓN***<!-- DIMENSIONE -->](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) el campo es específico para empresas con el *Controlling*<!-- Controlling --> activo, se valoriza según el centro seleccionado en la línea pero también puede ser ingresado manualmente cuando el centro no está previsto en la línea. En este caso sirve en situaciones donde esta dimensión es obligatoriamente cuadrada (como suele ser la *dimensión direccional* de los centros), para obligar al usuario a valorizarla en coincidencia con la general.

- ***CATEGORÍA CENTROS DE COSTO***<!-- CATEGORIA CENTRI DI COSTO --> el campo es específico para empresas con el *Controlling*<!-- Controlling --> activo, se valoriza según el centro seleccionado en la línea, pero también puede ser insertado manualmente cuando el centro no está previsto en la línea. Sirve para limitar la visibilidad de los centros seleccionables, en esta dimensión, cuando se valora esta subcuenta<!-- sottoconto -->.

:::tip Nota
En caso de que se decida una valoración puntual caso por caso por parte del usuario en contabilidad, en el Plan de cuentas<!-- Piano dei conti --> podemos elegir:
- insertar varios centros con porcentaje 0: el usuario encontrará estas líneas en el registro y podrá valorar manualmente la línea correspondiente con el valor adecuado y ***FluentisERP*** al guardar eliminará las restantes con importe cero. Si la dimensión de los centros y la causale<!-- causale --> no permiten asientos descuadrados, no se podrán tener desbalanceos.
- insertar varios centros con porcentaje 100: el usuario encontrará estas líneas ya valoradas en el registro y podrá eliminar las que no se valoran, o bien modificar los valores antes de guardar. Si la dimensión de los centros y la causale<!-- causale --> no permiten asientos descuadrados, no se podrán tener desbalanceos.
- Para quienes utilizan la gestión de Controlling<!-- Controlling --> de la contabilidad gerencial<!-- Contabilità gestionale -->, es posible insertar una línea de configuración sin un centro específico, pero solo con la dimensión de los centros y, opcionalmente, también la categoría de los centros que se desea valorar para esa cuenta: el usuario encontrará en el registro la línea valorada con el centro vacío y al abrir el desplegable tendrá visibilidad solo de los centros de la dimensión (y de la categoría, si se configura) correspondiente.
:::


## CUADRÍCULA DE ATRIBUCIÓN DE LA VARIABILIDAD<!-- GRIGLIA DI ATTRIBUZIONE DELLA VARIABILITA' -->
Esta sección es específica de empresas con el *Controlling*<!-- Controlling --> activo, y sirve para vincular la variabilidad del movimiento de la subcuenta<!-- movimentazione del sottoconto --> seleccionada según el centro que la valore. Podrían existir casos, de hecho, en los que ciertas subcuentas<!-- sottoconto --> sean variables según la función que las valore. Esta cuadrícula tiene prioridad sobre el campo *Variabilidad*<!-- Variabilità --> genérico que se puede valorizar en la línea de la subcuenta<!-- sottoconto -->.

:::tip Nota
Por ejemplo, la energía eléctrica podría ser 100% variable cuando se asocia a la producción (porque si no produzco no consumo) mientras que puede ser totalmente fija (es decir, variabilidad 0%) cuando se valoriza en administración, que se presupone consume energía independientemente del volumen productivo.
:::