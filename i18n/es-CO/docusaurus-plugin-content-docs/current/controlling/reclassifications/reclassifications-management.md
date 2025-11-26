---
title: Reclasificaciones
sidebar_position: 4
ai_generated: true
---

Las reclasificaciones<!-- riclassificazioni --> son básicamente la aplicación de los datos de un *Cierre de cuentas interanual<!-- Chiusura conti infrannuale -->* (o de un *Consolidado*) a un [*Modelo de reclasificación<!-- Modello di riclassificazione -->*](/docs/controlling/reclassifications/create-reclassification-model).

:::danger[Atención<!-- Attenzione -->]
La reclasificación que se puede ejecutar desde este formulario **NO considera los resultados de los procedimientos de contabilidad de gestión**, como por ejemplo Elaboración de periodos (para lanzar los cost driver) o Recuperación de datos desde producción, aunque dichos procedimientos procesen datos generados con los cierres interanuales.

Para realizar reclasificaciones completas con datos de contabilidad de gestión es necesario utilizar el formulario [**Comparación de reclasificaciones<!-- Comparazione riclassificazioni -->**](/docs/controlling/reclassifications/comparations) activando el flag Datos desde controlling en el encabezado de la nueva comparación.
:::

En caso de inserción de una nueva reclasificación<!-- riclassificazione -->, al abrir la pantalla será necesario establecer el código único de *5* caracteres alfanuméricos, la descripción de la reclasificación<!-- riclassificazione --> e ingresar el modelo de reclasificación<!-- riclassificazione -->: en este punto se tendrá la posibilidad de llamar un *Cierre de cuentas interanual<!-- Chiusura conti infrannuale -->* a utilizar o bien utilizar el botón de creación de un nuevo *Cierre de cuentas interanual<!-- Chiusura conti infrannuale -->*. En este segundo caso se abrirá la pantalla de creación del cierre, y una vez completado el procedimiento ***FluentisERP*** asignará automáticamente la nueva creación a la reclasificación<!-- riclassificazione --> en elaboración.

:::tip Nota
Esta posibilidad es útil en situaciones más simples, donde no se considere necesario aplicar los procedimientos actualmente excluidos de la gestión automática del propio cierre
:::

En caso de que se haya activado el flag de ***Consolidado*** será posible llamar el código del *Consolidado* intersocietario a gestionar en el reclasificado.

Para reclasificaciones sobre modelos de contabilidad<!-- modelli di contabilità -->, en el encabezado del Reclasificado también están presentes un campo de enlace con los proyectos de venta<!-- commesse di vendita -->, uno para los centros de costo y un último para los centros de beneficio: una vez establecido uno de estos, el sistema gestionará el recálculo de toda la estructura del reclasificado recuperando los datos desde los registros interanuales<!-- registrazioni infrannuali --> vinculados al filtro establecido.

El último campo del encabezado de la reclasificación<!-- riclassificazione --> se denomina **Cierre de ref. para cálculo por incrementos<!-- Chiusura di rif. per calcolo ad incrementi -->**: se trata básicamente del valor inicial sobre el cual el programa calculará las diferencias para valorizar los detalles de subcuentas<!-- sottoconti --> con tipo saldo *Incremental*. (Consulte la documentación detallada de los tipos de nivel de subcuentas<!-- sottoconti --> y proyectos<!-- commesse -->).

Debajo de esta sección, en el lado izquierdo de la pantalla se reproducirá la estructura del [*Modelo de reclasificación<!-- Modello di riclassificazione -->*](/docs/controlling/reclassifications/create-reclassification-model) valorado por los datos del cierre/consolidado establecidos. Seleccionando desde esta parte un nodo de tipo diferente de *Suma de hijos<!-- Somma dei figli -->* o *Expresión<!-- Espressione -->*, ***FluentisERP*** mostrará en el lado derecho dos cuadrículas: en la superior se visualizará la lista de saldos del cierre (o consolidado) coherente con la configuración del propio nivel, en la inferior la lista de los datos que han valorado efectivamente el nivel. A través de los botones presentes en la cinta de opciones será posible modificar directamente el reclasificado<!-- riclassificato --> sin modificar el modelo de referencia. También se permite la intervención manual sobre los datos presentes en la cuadrícula inferior, incluyendo la posibilidad de insertar nuevas filas manuales.

:::tip Nota
Si un nodo de tipo *Expresión<!-- Espressione -->* ha sido configurado con valor fijo 0, entonces en el reclasificado<!-- riclassificato --> estará disponible en el lado derecho un campo para establecer manualmente el valor a utilizar en el procesamiento actual
:::

En la pantalla (como también en la búsqueda de Reclasificaciones<!-- Riclassificazioni -->) está disponible una impresión del Reclasificado<!-- Riclassificato -->: alternativamente, está disponible la impresión ***Valoración de reclasificaciones<!-- Valorizzazione riclassificazioni -->*** que permite comparar dos reclasificaciones<!-- riclassificazioni --> ya guardadas en el sistema.