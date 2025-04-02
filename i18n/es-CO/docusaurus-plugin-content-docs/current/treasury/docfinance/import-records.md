---
title: importazione registrazioni
sidebar_position: 3
---

A través de este procedimiento se lleva a cabo la importación del archivo de registros contables creado por DocFinance.

La importación se realiza a través de un flujo *Folder Monitor* de Bizlink.

Por lo tanto, el archivo con los registros a importar será depositado en la carpeta monitoreada por el servicio, el cual se encargará de importarlos automáticamente.

En este punto, el sistema generará los registros contables correspondientes, cerrando las partidas indicadas por DocFinance y reconociendo contablemente los movimientos en las cuentas mapeadas en el sistema (las causales contables deben tener el mismo código entre ERP y DocFinance).

El resultado de la importación será visible en la cuadrícula inferior (mientras que en la superior se visualizarán las importaciones realizadas) y con los comandos de la barra de cinta, será posible eliminar la importación y visualizar el detalle de los errores encontrados durante la importación.

:::danger ATENCIÓN
La importación de los pagos requiere que en el trazado de DocFinance se haya pasado el id de la partida abierta por cerrar, generando así desde Fluentis un pago asociado a ella.

Si por alguna razón el id de la partida no coincide con el que está presente en el trazado (modificaciones manuales de cualquier tipo realizadas después de la exportación de partidas que luego han sido gestionadas en DocFinance), se generarán pagos, pero no estarán correctamente vinculados a las partidas, que permanecerán abiertas. Se puede proceder a compensar dichas partidas o buscar los pagos importados en esta situación, eliminarlos y recrearlos manualmente vinculando correctamente la partida correspondiente. La operación se realiza, después de haber eliminado el pago, presionando el botón *Nuevo (Nuovo)* y luego *Crear desde partidas / pagos (Crea da partite / pagamenti)* y seleccionando la partida a cerrar.
:::


:::note Info
[Enlace a las especificaciones técnicas **Docfinance** (Link alle specifiche tecniche **Docfinance**)](/pdf/it-IT/TRACCIATI_DocFinance_28_Luglio_2021.pdf)
:::