---
title: piano dei conti  
sidebar_position: 3
---

La tabla del [***piano dei conti***](/docs/erp-home/registers/accounting/analytic-chart-of-accounts) presenta una serie de características muy importantes a nivel de lógicas de Control (Controlling), ya sea entendido como simulaciones de estado financiero interanual o como contabilidad analítica/gestional propiamente dicha. Veamos punto por punto las características específicas.

## CUADRÍCULA DE SUBCUENTAS (GRIGLIA DE SOTTOCONTI)

- **tipo conto***: el vínculo al tipo de cuenta es de fundamental importancia; en particular, el tipo de cuenta que prevé el indicador 'Servicio' activo (en ***FastStart*** son los *Costos a rectificar* y los *Ingresos a rectificar*) será el que activará la gestión automática de acumulaciones/rectificaciones, tanto a nivel de contabilidad general (procedimiento de **scritture di assestamento*** para los estados financieros interanuales y los correspondientes **scritture di rettifica*** y **scritture di integrazione***).

- indicador **gestione centri aziendali***: si todos asociados a tipos de cuentas económicas tienen automáticamente la valorización de la analítica (si la causa contable a su vez prevé su gestión), esta puede habilitarse también para Subcuentas patrimoniales a través de este indicador.

- ***VARIABILIDAD (VARIABILITA')***: cuando la empresa tiene el indicador *controlling* activo, la contabilidad gestionada que se valora desde la analítica prevé la subdivisión de los importes en *cuota fija* y *cuota variable*, que puede definirse con este valor por defecto cuando no se ha valorizado la cuadrícula de ***VARIABILIDAD CENTROS DE COSTO*** presente a la derecha de la máscara.

:::tip Nota
Cuando el campo no está valorizado, se entiende que el subcuenta es 100% un costo fijo.
:::

- **non utilizzare in controlling***: cuando la empresa tiene el indicador *controlling* activo, con este campo se puede indicar que el dato que proporciona la contabilidad no se debe utilizar en las elaboraciones del control, porque es reemplazado, por ejemplo, por un dato estimado previsto a principio de año (ej. Honorarios del consejo de vigilancia) o por una lógica extracontable (ej. amortizaciones).

- **tempi di bilanciamento***: el campo se activa si el indicador anterior ha sido activado y permite indicar, si se configura, *cuándo* se desea realizar el ajuste entre la gestión y el dato contable. Las opciones disponibles son:
    - *annuale*
    - *infrannuale*

- **tipo di bilanciamento***: el campo se activa si el indicador anterior ha sido activado y permite indicar, si se establece, *cómo* se quiere ajustar el dato contable. Las opciones disponibles son:
    - *riproporziona gestionale*: se ingresarán filas automáticas para llevar el total del control a los valores contables.
    - *differenze analitica*: se anulará el dato del control para reemplazarlo con los valores y los centros efectivamente utilizados en contabilidad.

:::tip Nota
La primera opción tiene sentido cuando el registro en el control puede diferir solo en el importe con respecto a lo que se registra en contabilidad.  
La segunda opción tiene sentido cuando, en el momento del registro contable real, no solo el importe, sino también el centro de movimiento puede ser diferente con respecto a la hipótesis precargada en el control.
:::

- **percentuali di variazione***: cuando la empresa tiene el indicador *controlling* activo, con este campo podemos indicar la lógica de variación porcentual que se puede aplicar cuando se duplican los valores de gestión de este subcuenta (en la duplicación de los registros del **storico registrazioni gestionali***).

- **distribuzione periodi***: cuando la empresa tiene el indicador *controlling* activo, con este campo podemos definir cómo repartir este subcuenta en los períodos de la contabilidad de gestión durante la *elaboración de períodos*. Si no se configura, ***FluentisERP*** utilizará los días del calendario que correspondan a la línea.

- **gruppi di conguaglio***: cuando la empresa tiene el indicador *controlling* activo, el campo es de fundamental importancia para los subcuentas económicos de los saldos iniciales y finales, mientras que tiene validez para agrupar datos homogéneos en la máscara de control denominada **valori di controllo***.

## CUADRÍCULA DE ASIGNACIÓN DE LOS CENTROS (GRIGLIA DI ATTRIBUZIONE DEI CENTRI)
Para cada subcuenta seleccionada, en la pestaña *Asignación de centros* presente en el lado derecho, tendremos la posibilidad de predefinir una lista de centros a valorar cuando se mueve esta subcuenta en contabilidad, o se valora a través del volumen de negocios de compras/ventas de la línea de artículo en el ciclo documental pasivo/activo, dependiendo de las prioridades de cada módulo.

En esta cuadrícula tenemos los siguientes campos:
- **numero***: progresivo de línea.

- [**centro di costo***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): en este campo se asocia el centro empresarial. La propiedad es obligatoria en las empresas que **no** gestionan el *controlling*, mientras que es opcional en aquellas con la gestión **activa**. En este segundo caso, de hecho, se podrá indicar solo la *dimensión* a valorar y la *categoría* del centro predefinida.

- **percentuale %***: la porcentaje de asignación, obligatoria de valorar dentro del rango 0-100.

- **divisione***: la división a asignar por defecto al movimiento de analítica.
:::tip Nota
En instalaciones multidivisionales, es posible gestionar la división de dos maneras respecto a los centros: vincular el uso de los centros ligados a la división activa/seleccionada en la línea, en lugar de permitir la valorización del centro individual en todas las divisiones empresariales, independientemente de la división a la que pertenezca el centro mismo.
:::

- ***FECHA INICIO DE VALIDEZ (DATA INIZIO VALIDITA')*** y ***FECHA FIN DE VALIDEZ (DATA FINE VALIDITA')***: este rango actualmente **no** se verifica.

- [**dimensione***](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension): el campo es específico para las empresas con el *controlling* activo, se valora según el centro seleccionado en la línea pero también puede ser introducido manualmente cuando el centro no está previsto en la línea. En este caso, sirve para aquellos casos en los que esta dimensión es de cuadratura obligatoria (como es típicamente la *dimensión direccional* de los centros), para obligar al usuario a valorizarla en cuadratura con la general.

- ***CATEGORÍA DE CENTROS DE COSTO (CATEGORIA CENTRI DI COSTO)***: el campo es específico para las empresas con el *controlling* activo, se valora según el centro seleccionado en la línea pero también puede ser introducido manualmente cuando el centro no está previsto en la línea. Sirve para limitar la visibilidad de los centros seleccionables, en esta dimensión, cuando se valora este subcuenta.

:::tip Nota
En caso de que se decida una valorización puntual caso por caso por parte del usuario en contabilidad, en el plan de cuentas podemos elegir:
- insertar más centros con porcentaje 0: el usuario encontrará estas líneas en el registro y podrá valorizar manualmente la línea individual con el valor correspondiente y ***FluentisERP***, al guardar, eliminará las restantes con importe cero. Si la dimensión de los centros y la causa no permiten registros desequilibrados, no se podrán tener cuadraturas.
- insertar más centros con porcentaje 100: el usuario encontrará estas líneas valorizadas en el registro y podrá eliminar aquellas que no deben ser valoradas, en lugar de modificar los valores antes de guardar. Si la dimensión de los centros y la causa no permiten registros desequilibrados, no se podrán tener cuadraturas.
- Para quienes utilizan la gestión del Control de la Contabilidad gestor, es posible insertar una línea de configuración sin un centro específico, pero solo con la dimensión de los centros y, opcionalmente, también la categoría de los centros que se desea valorar para esa cuenta: el usuario encontrará en el registro la línea valorada con el centro vacío y, al abrir el desplegable, solo tendrá visibilidad de los centros de la dimensión (y de la categoría, si se ha configurado) del caso.
:::

## CUADRÍCULA DE ASIGNACIÓN DE LA VARIABILIDAD (GRIGLIA DI ATTRIBUZIONE DELLA VARIABILITA')
Esta sección es específica de las empresas con el *controlling* activo y sirve para vincular la variabilidad de la movimentación del subcuenta seleccionado dependiendo del centro que lo valora. Podría haber casos, de hecho, en los cuales ciertos subcuentas son variables según la función que los valora. Esta cuadrícula es prioritaria respecto al campo *Variabilidad* genérico que se puede valorar en la línea del subcuenta.

:::tip Nota
Por ejemplo, la electricidad podría ser 100% variable cuando se asocia a la producción (porque si no produzco, no consumo), mientras que ser totalmente fija (es decir, variabilidad 0%) cuando se valora en la administración, que se supone consume energía independientemente del volumen de producción.
:::