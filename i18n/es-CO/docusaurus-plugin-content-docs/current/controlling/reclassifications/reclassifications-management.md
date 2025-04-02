---
title: riclassificazioni
sidebar_position: 4
---

Las reclasificaciones son esencialmente la aplicación de los datos de un *Cierre de cuentas intermedio* (Chiusura conti infrannuale) o de un *Consolidado* a un [*Modelo de reclasificación*](/docs/controlling/reclassifications/create-reclassification-model).

En caso de insertar una nueva reclasificación, al abrir el formulario es necesario establecer un código único de *5* caracteres alfanuméricos, la descripción de la reclasificación e insertar el modelo de reclasificación: en este punto tendremos la posibilidad de invocar un *Cierre de cuentas intermedio* para utilizar o usar el botón de creación de un nuevo *Cierre de cuentas intermedio*. En este segundo caso, se abrirá el formulario de creación del cierre; una vez completado el procedimiento, ***FluentisERP*** asignará automáticamente la nueva creación a la reclasificación en proceso.

:::tip Nota
Esta posibilidad es utilizable en las situaciones más simples, donde no se considera necesario aplicar los procedimientos actualmente excluidos de la gestión automática del cierre mismo.
:::

En caso de que se haya activado el indicador de ***Consolidado***, será posible invocar el código del *Consolidado* interempresarial a gestionar en la reclasificación.

Para reclasificaciones sobre modelos contables, en el encabezado de la Reclasificación hay además un campo de enlace con los pedidos de venta, uno para los centros de costo y un último para los centros de beneficio: una vez configurado uno de estos, el sistema recalculará toda la estructura de la reclasificación tomando los datos de los registros intermedios vinculados al filtro establecido.

El último campo del encabezado de la reclasificación se denomina **Cierre de referencia para cálculo por incrementos (Chiusura di rif. per calcolo ad incrementi)**: se trata, en esencia, del valor inicial sobre el cual el programa procederá a calcular las diferencias para valorar los detalles de los subcuentas con tipo de saldo *Incremental* (se consulte la documentación detallada de los tipos de nivel de subcuentas y pedidos).

Debajo de esta sección, en el lado izquierdo del formulario, se volverá a mostrar la estructura del [*Modelo de reclasificación*](/docs/controlling/reclassifications/create-reclassification-model) valorizado por los datos del cierre/consolidado establecido. Al seleccionar desde esta parte un nodo de tipo diferente a *Suma de hijos* o *Expresión*, ***FluentisERP*** mostrará en el lado derecho dos cuadrículas: en la superior se visualizará la lista de saldos del cierre (o consolidado) coherente con las configuraciones del nivel mismo, en la inferior la lista de datos que realmente han valorizado el nivel. A través de los botones presentes en la cinta, será posible realizar una modificación directamente en la reclasificación sin modificar el modelo de referencia. También se permite la intervención manual en los datos presentes en la cuadrícula inferior, con la posibilidad de insertar nuevas filas manualmente.

:::tip Nota
Si un nodo de tipo *Expresión* se ha configurado con un valor fijo de 0, entonces en la reclasificación habrá disponible en el lado derecho un campo para establecer manualmente el valor a utilizar en el procesamiento actual.
:::

En el formulario (así como en la búsqueda de las riclassificazioni) hay disponible una impresión de la Reclasificación: alternativamente, está disponible la impresión ***Valoración de reclasificaciones*** que permite comparar dos reclasificaciones ya memorizadas en el sistema.