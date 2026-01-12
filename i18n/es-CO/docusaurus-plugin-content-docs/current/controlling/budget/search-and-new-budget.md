---
title: Búsqueda y Nuevo Presupuesto
sidebar_position: 4
ai_generated: true
---

## Búsqueda<!-- Ricerca -->

El comando **Presupuesto<!-- Budget -->** permite buscar, gestionar e imprimir los presupuestos<!-- budget -->: se pueden crear nuevos (con el botón Nuevo ubicado en la ribbon bar, o con el comando Nuevo Presupuesto<!-- Nuovo Budget --> ubicado directamente en el menú), modificar los existentes, o incluso duplicar uno previamente ingresado. La duplicación, en particular, mostrará un popup de gestión donde 
-	podremos definir si queremos crear una **Nueva versión<!-- Nuova versione -->** (flag) del presupuesto<!-- budget --> seleccionado, o crear un nuevo presupuesto<!-- budget --> asignando un nuevo número (flag activado en falso); 
-	deberemos ingresar la **Descripción<!-- Descrizione -->** para la copia a crear;
-	podremos aplicar (flag en verdadero) o no (flag en falso) los **Porcentajes de variación<!-- Percentuali di variazione -->** asignados a los distintos subcuentas<!-- sottoconti --> contables.

El formulario de búsqueda de Presupuestos<!-- Budget --> muestra por defecto solo la última versión de cada presupuesto<!-- budget --> (igualdad de *Número* Presupuesto<!-- Budget -->, *Tipo* Presupuesto<!-- Budget --> y *Tipo de periodo<!-- Tipo Periodo -->*): al abrir la sección de filtro del formulario será posible visualizar también las versiones anteriores, que permanecen en memoria, activando el flag **Mostrar todas las versiones<!-- Mostra tutte le versioni -->**.

:::note[Nota]
La tabla de [**Porcentajes de variación**](/docs/configurations/tables/controlling/analytical-accounting/variation-percentages), disponible en las tablas de Controlling, permite definir un valor porcentual de variación tanto para la parte fija como variable de los valores de las subcuentas<!-- sottoconti -->. Cada código puede luego asignarse individualmente a cada subcuenta<!-- sottoconto --> de coste/ingreso dentro del plan de cuentas<!-- piano dei conti -->.
:::

:::tip[Consuntivo]
Los siguientes comandos del menú, para buscar e ingresar un nuevo **Presupuesto Consuntivo<!-- Budget Consuntivo -->**, permiten realizar elaboraciones a consuntivo para evidenciar **el análisis de los desvíos<!-- l'analisi degli scostamenti -->** respecto al presupuesto previsional elaborado en el presente formulario, y así evaluar el desempeño de la gestión.
:::

## Nuevo Presupuesto<!-- Nuovo Budget -->

1. Complete los datos de cabecera obligatorios como *Tipo de Presupuesto<!-- Tipo Budget -->*, *Tipo de periodo<!-- Tipo periodo -->*, **Descripción<!-- Descrizione -->**. Modifique, si es necesario, los demás datos como la Fecha<!-- Data -->, el Año<!-- Anno --> y las fechas de referencia del presupuesto<!-- budget --> (**Fecha Inicio - Fecha Fin<!-- Data Inizio - Data Fine -->**). Es obligatorio establecer el año<!-- anno --> o el rango de fechas de referencia (en este segundo caso, Fluentis completará el campo año con el año<!-- anno --> de la fecha de inicio).

- Flag **Definitivo<!-- Definitivo -->**: hace que el presupuesto<!-- budget --> no sea modificable; 
- Flag **Predeterminado<!-- Predefinito -->**: identifica cuál es el presupuesto<!-- budget --> en uso respecto a otras versiones utilizadas, por ejemplo, solo con fines de simulación; 
- Flag **Detallado por división<!-- Dettagliato per divisione -->**: activa la posibilidad de asociar *sub-presupuestos<!-- sotto-budget -->* a cada división específica de la empresa.

2. Complete los datos de la cuadrícula superior ingresando los **tipos de valores** que utilizaremos en nuestro Presupuesto<!-- Budget --> (definido a continuación en relación con los datos detallados de *sub-presupuestos<!-- sotto-budget -->*), entre los disponibles, desde el campo **Tipo de objeto de Presupuesto<!-- Tipo di oggetto di Budget -->**:
    - Subcuentas contables<!-- Sottoconti contabili -->
    - Centros de coste / ingreso<!-- Centri di costo / ricavo -->
    - Modelos de reclasificación<!-- Modelli di riclassificazione -->
    - Artículos<!-- Articoli -->
 
Dependiendo del tipo de dato, se habilita la columna relativa para la configuración del dato (en el caso del dato contable o del modelo de reclasificación).
La columna **Descripción<!-- Descrizione -->**, opcional, permite agregar más detalles sobre el dato seleccionado.

La columna **Departamento<!-- Dipartimento -->** está activa solo si en cabecera se ha activado la definición del presupuesto<!-- budget --> por división.

3. Gestione las cuadrículas inferiores de acuerdo al tipo de dato seleccionado:

- La cuadrícula inferior **izquierda** contendrá la lista con el detalle de los valores referidos al sub-presupuesto<!-- sotto-budget --> seleccionado anteriormente, por lo que los campos disponibles dependerán de la tipología del propio sub-presupuesto<!-- sotto-budget --> (tipo de dato), compartiendo los importes *debe*<!-- dare -->, *haber*<!-- avere -->, importe *fijo*<!-- fisso --> e importe *variable*<!-- variabile -->. La asignación porcentual del Importe fijo<!-- Importo fisso --> y variable se puede predefinir en el plan de cuentas<!-- piano dei conti -->, completando el campo de *variabilidad<!-- variabilità -->* a nivel de subcuenta<!-- sottoconto --> o a nivel de la cuadrícula de variabilidades de la subcuenta<!-- sottoconto --> para el centro de coste<!-- centro di costo -->.

:::note[Ejemplo<!-- Esempio -->]
Si el sub-presupuesto<!-- sotto-budget --> es para subcuentas, tendremos una lista de subcuentas<!-- sottoconti -->; si es de tipo centro de coste, tendremos la subcuenta<!-- sottoconto --> y el centro de coste<!-- centro di costo -->; si es de tipo centro de ingreso, tendremos la subcuenta<!-- sottoconto --> y el centro de ingreso<!-- centro di ricavo -->; si es de tipo modelo, podremos seleccionar los nodos del modelo asociado.
:::

Una vez que se empiezan a completar los datos de detalle de un sub-presupuesto<!-- sotto-budget -->, la fila superior enlazada ya no será editable.

- La cuadrícula de **derecha** permitirá asignar valores periodo por periodo: en el caso de ingreso manual en la cuadrícula izquierda, actualmente no existe ninguna asignación automática ni verificación de saldo entre el detalle derecho e izquierdo.

### Procedimientos de valorización automática de los sub-presupuestos<!-- Procedure di valorizzazione automatica dei sotto-budget -->

Dentro del presupuesto<!-- budget --> hay algunos botones que permiten asignar automáticamente los datos de los diferentes sub-presupuestos<!-- sotto-budget -->, tomando información de otras secciones de Fluentis según el sub-presupuesto<!-- sotto-budget --> seleccionado.

**PRESUPUESTO POR SUBCUENTAS CONTABLES<!-- BUDGET PER SOTTOCONTI CONTABILI -->**

Podemos valorar este sub-presupuesto<!-- sotto-budget --> mediante dos botones: 
-	**Crear desde asientos contables<!-- Crea da registrazioni contabili -->**: abre un popup para filtrar las fechas de registro, de competencia, cualquier causale<!-- causale --> contable a excluir (por ejemplo, la de cierre de cuentas de un periodo anterior, para no tener los saldos en cero), los flags para incluir también las cuentas patrimoniales<!-- conti patrimoniali --> (la parte económica siempre será tomada), aplicar los porcentajes de variación<!-- percentuali di variazione --> (definidos en la tabla ‘Porcentajes de variación<!-- Percentuali di variazione -->’), y aplicar el valor relativo del periodo o (alternativamente) utilizar las competencias económicas originales.

:::note[Nota]
Con estas dos últimas opciones, que son alternativas, Fluentis valorará el detalle de los periodos (es decir, la cuadrícula inferior derecha) leyendo los pesos atribuidos a cada periodo del presupuesto<!-- periodi di budget -->, o bien considerando los rangos de fechas de competencia originales de los asientos<!-- registrazioni --> (por ejemplo, si el coste X tiene un solo movimiento<!-- movimento --> de competencia del 01/03 al 31/08, a la derecha veremos los valores de marzo a agosto, proporcionados según el número de días efectivos de cada mes)
:::

- **Crear desde cierres intermedios<!-- Crea da chiusure infrannuali -->**: muestra un popup para filtrar el cierre intermedio<!-- chiusura infrannuale --> a tomar como origen de datos, aplicando las mismas opciones ya vistas en el caso anterior (flag para incluir datos patrimoniales, porcentajes de variación y valores relativos de periodo de la distribución de periodos o competencias económicas originales de los asientos<!-- registrazioni -->).

- **Agrupar filas de los detalles<!-- Raggruppa righe dei dettagli -->**: sirve cuando se ha utilizado la opción *Usar competencias económicas originales<!-- Usa competenze economiche originali -->*: en este caso, Fluentis insertará una fila de detalle por cada rango de competencia económica encontrada, conveniente para una verificación de los cálculos pero incómoda para la gestión posterior de totales del presupuesto<!-- budget -->. Por ello, este botón permite totalizar los valores por cada subcuenta<!-- sottoconto -->, agrupando los datos relativos a los periodos.

**PRESUPUESTO POR CENTROS DE COSTE / INGRESO<!-- BUDGET PER CENTRI DI COSTO - RICAVO -->**

Para esta tipología tendremos disponibles los siguientes botones (los dos primeros y el último son los mismos ya explicados antes y no requieren nuevas explicaciones):

-	Crear desde asientos contables<!-- Crea da registrazioni contabili -->

-	Crear desde cierres intermedios<!-- Crea da chiusure infrannuali -->

-	Crear centros de coste desde cuentas contables<!-- Crea centri di costo dai conti contabili -->: activa un popup para seleccionar (selección múltiple activa) la lista de sub-presupuestos<!-- sotto-budget --> de tipo *Subcuenta<!-- Sottoconto -->* a usar como origen de datos; se leen los datos de presupuesto<!-- dati di budget --> de esas subcuentas<!-- sottoconti --> y se valora el presupuesto por centros de coste<!-- centri di costo --> tomando la configuración de defecto del Plan de cuentas<!-- Piano dei conti --> (vínculos con los centros, etc.) para cada subcuenta<!-- sottoconto -->, recalculando eventualmente la variabilidad (misma referencia que el caso anterior).

-	Crear centros de coste desde histórico de asientos de gestión<!-- Crea centri di costo da storico registrazioni gestionali -->: activa un popup (útil solo si se utiliza completamente el módulo de controlling) para seleccionar el *Histórico de asientos de gestión<!-- Storico registrazioni gestionali -->* (De año a año, de periodo a periodo y el Área), pudiendo aplicar porcentajes de variación<!-- percentuali di variazione --> (flag).

-	Agrupar filas de los detalles<!-- Raggruppa righe dei dettagli -->

**PRESUPUESTO CON MODELOS DE RECLASIFICACIÓN<!-- BUDGET SU MODELLI DI RICLASSIFICAZIONE -->**

Para este tipo, el único botón activo es **Crear valores del modelo<!-- Crea valori del modello -->**, que activa un popup para seleccionar los *sub-presupuestos<!-- sotto-budget -->* a considerar como origen de datos (en la combo box está activa la selección múltiple con Ctrl o Shift):

- Los *sub-presupuestos<!-- sotto-budget -->* por *subcuentas<!-- sottoconti -->* serán utilizados para valorar los nodos (las filas) del modelo de reclasificación [**marcadas con tipo *subcuentas***<!-- impostate con tipologia *sottoconti* -->](/docs/controlling/reclassifications/create-reclassification-model)
- Los *sub-presupuestos<!-- sotto-budget -->* por *centros de coste* se usarán para valorar los nodos (las filas) del modelo de reclasificación [**marcadas con tipo *centros de coste***<!-- impostate con tipologia *centri di costo* -->](/docs/controlling/reclassifications/create-reclassification-model)