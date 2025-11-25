---
title: Descarga de picking
sidebar_position: 4
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
El procedimiento de Descarga de Picking<!-- Scarico Picking --> en Fluentis está diseñado para facilitar el movimiento de los artículos extraídos del almacén<!-- magazzino --> durante el proceso de picking. Esta funcionalidad permite a los usuarios seleccionar uno o varios picking ya creados y, mediante una interfaz intuitiva, realizar los registros de almacén<!-- registrazioni di magazzino --> necesarios para la correcta descarga<!-- scarico --> de los artículos.

Dentro del procedimiento, los usuarios pueden aplicar filtros para seleccionar los picking deseados y especificar la fecha de registro en almacén<!-- registrazione a magazzino -->. 
Una vez seleccionados, es posible iniciar el proceso de descarga<!-- scarico -->, asegurando que los movimientos<!-- movimenti --> queden correctamente registrados en el sistema. 

Además, el módulo ofrece funcionalidades para gestionar anomalías, como artículos sin almacén<!-- magazzino --> y causal<!-- causale -->, o para visualizar artículos no descargados<!-- scaricati -->, mejorando así la eficiencia operativa y la trazabilidad de los inventarios<!-- giacenze -->.
:::

Seleccionando uno o varios picking y pulsando el botón **Descargar<!-- Scarico -->** se abre una ventana que permite realizar el movimiento de los picking.

**Filtro**

En esta pestaña es posible buscar los picking deseados en función de los filtros insertados. También es posible especificar la **Fecha de registro en almacén<!-- Data di registrazione di magazzino -->**.

*Botón específico*:  
> **Descargar<!-- Scarico -->**: crea los registros de almacén<!-- registrazioni di magazzino --> para los picking seleccionados.  

**Parámetros**

En esta pestaña es posible especificar los parámetros necesarios para la creación de los movimientos en almacén<!-- movimenti a magazzino -->. En particular, para las filas de picking que carecen de almacén<!-- magazzino --> y causal<!-- causale -->, se puede optar por no realizar la descarga para todo el documento, omitir el artículo que no tiene almacén<!-- magazzino --> y causal<!-- causale -->, visualizar los artículos que no han sido descargados<!-- scaricati -->, o bien utilizar como almacén<!-- magazzino --> y causal<!-- causale --> las configuradas por defecto.

**Resumen<!-- Riepilogo -->**

La pestaña de resumen permite visualizar las operaciones realizadas y, eventualmente, ejecutar el rollback de las operaciones.

Es posible aplicar filtros para visualizar solo las operaciones que se desean. Seleccionando en la cuadrícula de resultados una fila será posible ver el detalle (es decir, los picking de referencia y sus respectivos registros) en las pestañas de la parte inferior de la ventana.

Seleccionando una o más filas en la cuadrícula de búsqueda y pulsando el botón *Eliminar las descargas seleccionadas<!-- Cancella gli scarichi selezionati -->* se eliminarán los registros de almacén<!-- registrazioni di magazzino --> realizados.

*Botones específicos*:
> **Eliminar las descargas seleccionadas<!-- Cancella gli scarichi selezionati -->**: elimina los registros derivados de las filas seleccionadas en la cuadrícula de resultados.  
> **Restablecer picking<!-- Ripristina picking -->**: elimina los registros únicamente de las filas de picking seleccionadas.  

Para todo aquello no detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace: [Funcionalidades, botones y campos comunes](/docs/guide/common).