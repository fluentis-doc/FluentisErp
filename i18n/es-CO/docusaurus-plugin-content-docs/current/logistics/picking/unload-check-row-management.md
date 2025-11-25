---
title: Descarga por selección
sidebar_position: 5
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
El procedimiento de *Descarga por selección<!-- Scarico da spunta -->* de Fluentis es un módulo especializado que permite gestionar el proceso de descarga sólo para las líneas que han sido efectivamente seleccionadas durante las operaciones de picking<!-- picking -->. Esta funcionalidad garantiza una ola de eficiencia y precisión, permitiendo seleccionar y registrar sólo los artículos que han sido confirmados como retirados del almacén<!-- magazzino -->.

Los usuarios pueden buscar los picking<!-- picking --> deseados a través de filtros personalizados para encontrar rápidamente los pertinentes. Una vez seleccionados, la interfaz permite crear los movimientos de almacén<!-- registrazioni di magazzino --> para las líneas seleccionadas, mientras que un resumen puntual de las operaciones realizadas ofrece la posibilidad de consultar detalles y gestionar posibles rollback.

El procedimiento de *Descarga por selección<!-- Scarico da spunta -->* no sólo reduce el riesgo de errores, sino que también optimiza la productividad, asegurando que las operaciones de descarga se ejecuten de manera coherente y fiable.
:::

:::note Nota
A diferencia de la [Descarga picking<!-- Scarico picking -->](/docs/logistics/picking/unload-picking), este procedimiento permite realizar las mismas funciones pero únicamente para las líneas seleccionadas.
:::

Al seleccionar uno o más picking<!-- picking --> y pulsar el botón **Descargar<!-- Scarico -->** se abre una ventana que permite realizar el movimiento de los picking<!-- picking --> para las líneas seleccionadas.

**Filtro**

En esta pestaña es posible buscar los picking<!-- picking --> deseados según los filtros introducidos. También es posible especificar la **Fecha de registro de almacén<!-- Data di registrazione di magazzino -->**.

*Botón específico*:  
> **Descargar<!-- Scarico -->**: crea los registros de almacén<!-- registrazioni di magazzino --> para los picking<!-- picking --> seleccionados.  

**Parámetros**

En esta pestaña es posible especificar los parámetros necesarios para la creación de los movimientos de almacén<!-- movimenti a magazzino -->. En particular, para las líneas picking<!-- picking --> que carecen de almacén<!-- magazzino --> y motivo<!-- causale -->, es posible elegir no realizar la descarga de todo el documento, omitir el artículo sin almacén<!-- magazzino --> y motivo<!-- causale -->, visualizar los artículos que no han sido descargados, o utilizar como almacén<!-- magazzino --> y motivo<!-- causale --> los definidos por defecto.

**Resumen**

La pestaña resumen permite visualizar las operaciones realizadas y, en caso necesario, ejecutar el rollback de las operaciones.

Es posible aplicar filtros para visualizar sólo las operaciones deseadas. Seleccionando en la cuadrícula de resultados una línea, será posible ver el detalle (es decir, los picking<!-- picking --> de referencia y sus respectivos registros) en las pestañas en la parte inferior de la ventana.

Seleccionando una o más líneas en la cuadrícula de búsqueda y pulsando el botón *Eliminar las descargas seleccionadas* se eliminarán los registros de almacén<!-- registrazioni di magazzino --> realizados.

*Botones específicos*:
> **Eliminar las descargas seleccionadas<!-- Cancella gli scarichi selezionati -->**: elimina los registros derivados de las líneas seleccionadas en la cuadrícula de resultados.  
> **Restaurar picking<!-- Ripristina picking -->**: elimina los registros sólo para las líneas picking<!-- righe picking --> seleccionadas.  

Para todo lo que no se detalla en este documento respecto al funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).