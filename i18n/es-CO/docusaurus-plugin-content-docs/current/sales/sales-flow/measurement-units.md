---
title: Gestión de Unidad de medida principal y alternativa
sidebar_position: 5
ai_generated: true
---

Esta funcionalidad permite definir y utilizar diferentes unidades de medida para el mismo producto en distintos contextos, como la venta, la compra o la gestión de inventario<!-- magazzino -->.

:::note
Para habilitar la gestión de unidades de medida alternativas, es necesario activar la casilla de Gestión de doble unidad de medida en los [Parámetros](/docs/configurations/parameters/sales/dn-parameters) .<!-- Gestione doppia unità di misura nei [Parametri] -->
:::

La unidad de medida principal, obligatoria, se define para cada artículo en su ficha maestra y no se puede modificar después de que el artículo se haya utilizado en documentos o movimientos de inventario<!-- magazzino -->. La unidad de medida alternativa, en cambio, permite gestionar el producto en una unidad diferente respecto a la principal y puede configurarse en la pestaña "Unidades de Medida Alternativas" de la ficha del artículo.

En los documentos, la unidad de medida principal se muestra en la cuadrícula de los [Artículos](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn), mientras que el widget de la unidad de medida alternativa está visible en la pestaña "Datos del artículo", que contiene los campos "Cantidad Alternativa" y "Precio por Unidad de Medida Alternativa", pero solo si la casilla "Gestión de Doble Unidad de Medida" está activa en los parámetros del módulo.

Si la casilla "Propuesta Automática de Unidad de Medida Alternativa" está habilitada, el sistema propondrá automáticamente la unidad de medida alternativa con la opción "Predeterminado" activa en la ficha del artículo, calculando e ingresando automáticamente la cantidad alternativa utilizando el factor de conversión.

Las casillas presentes en la pestaña "Unidades de Medida Alternativas" de la ficha del artículo influyen en la propuesta y el cálculo de las cantidades en los documentos. Si la casilla "Predeterminado" está activa, esa será la unidad de medida utilizada para la propuesta automática. Si la casilla "Obligatoria" está activada, cualquier modificación de la cantidad principal o alternativa implicará el recálculo automático de la cantidad correspondiente, manteniendo el vínculo a través del factor de conversión. En cambio, con la casilla "Prioritaria" activa, prevalece la cantidad alternativa, calculando la cantidad principal sin recalcular la alternativa.

El cálculo de la cantidad alternativa se basa en el factor de conversión, que puede ser multiplicado o dividido por la cantidad principal; esta opción se configura en los [Parámetros iniciales de inventario](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters) mediante las casillas correspondientes.<!-- Parametri iniziali di magazzino -->

En los documentos, en la columna "Unidad de Medida", se propone la unidad de medida principal del artículo, pero el usuario puede reemplazarla por una de las unidades de medida alternativas disponibles. Si se selecciona una unidad de medida alternativa en esta columna, no será posible especificar otra en el widget homónimo, ya que en un movimiento de inventario<!-- movimento di magazzino --> solo pueden utilizarse dos unidades de medida: la de gestión (siempre la unidad de medida principal del artículo) y la alternativa, especificada en la columna "Unidad de Medida" o en el widget de Unidad de Medida Alternativa.