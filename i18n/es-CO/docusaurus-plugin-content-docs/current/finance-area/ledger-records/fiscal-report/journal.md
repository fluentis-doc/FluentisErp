---
title: Libro diario
sidebar_position: 3
ai_generated: true
---

Al abrir la ventana se propone el ejercicio contable<!-- esercizio contabile --> actual y el filtro para los asientos<!-- registrazioni --> está configurado por defecto para cubrir el ejercicio contable<!-- esercizio contabile --> correspondiente (la fecha de competencia contable no se completa por defecto suponiendo que se desea operar por fecha "formal"); 

se muestran los datos iniciales de número de página, línea, saldo deudor y saldo acreedor: el programa propone el filtro de los asientos<!-- registrazioni --> teniendo en cuenta también la fecha de la última impresión definitiva.

![](/img/it-it/finance-area/ledger-records/fiscal-report/journal/image01.png)

 

OPCIONES POSIBLES:<!-- POSSIBILI OPZIONI: -->

**Ver cabecera<!-- Visualizza intestazione -->**: para gestionar posibles módulos DDT ya impresos;

**Definitiva**: activa el modo de impresión definitiva que, una vez ejecutado, bloquea posteriores modificaciones en los asientos contables<!-- registrazioni contabili --> del periodo;

**Reimpresión<!-- Ristampa -->**: esta opción está pensada para permitir **reimprimir el libro diario<!-- giornale --> ya impreso en definitiva**, al activarla, los campos relativos a los últimos saldos Deudor / Acreedor, última página y última línea, que han sido completados y memorizados por la impresión definitiva, se volverán editables con el objetivo de gestionar una reimpresión del libro diario<!-- libro giornale -->, sin tener que proceder a la anulación de la anterior impresión definitiva ni a la modificación y guardado de los valores anteriores dentro del formulario de *parámetros de contabilidad general<!-- parametri di contabilità generale -->* (para obtener los mismos progresivos finales después de la reimpresión).



Al ejecutar la impresión definitiva, el programa verifica la presencia de asientos<!-- registrazioni --> anteriores no impresos y la presencia dentro del rango de fechas ya impresas. Una vez lanzado el proceso de impresión (por lo tanto, la simple vista previa no realiza ninguna operación, sino que debe ejecutarse la impresión física, incluso en archivo, independientemente de la correcta finalización del proceso) las registraciones<!-- registrazioni --> relacionadas serán bloqueadas en toda la parte fiscal mientras que se actualizarán los contadores almacenados en la tabla de **[Parámetros de contabilidad<!-- Parametri di contabilità -->:](/docs/configurations/parameters/finance/accounting-parameters)** dentro de esta tabla está el botón para borrar las impresiones definitivas (puede estar sujeto a derechos específicos de usuario): una vez pulsado será necesario indicar el rango de fechas a desbloquear, confirmar la operación y luego actualizar manualmente todos los contadores relacionados;

**División**: permite gestionar la impresión especificando una de las divisiones presentes en la base de datos;

**Desde nº de asiento / Hasta nº de asiento<!-- Da n. registrazione / A nr. registrazione -->**: permite filtrar la impresión por número de asiento<!-- registrazione --> (menos relevante en caso de impresión definitiva).


| Función | Significado |
| --- | --- |
| Vista previa | Botón para ejecutar la vista previa de impresión del libro diario<!-- libro giornale -->. |
| Imprimir | Botón para ejecutar la impresión física del libro diario<!-- libro giornale -->. |



:::important Ver también<!-- Vedi Anche -->
[**VIDEO TUTORIALES SOBRE IMPRESIONES FISCALES**](/docs/video/finance/intro)
:::