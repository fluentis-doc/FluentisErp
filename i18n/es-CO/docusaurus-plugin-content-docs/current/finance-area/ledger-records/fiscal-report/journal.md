---
title: libro giornale
sidebar_position: 3
---

Al abrir la ventana, se propone el ejercicio contable actual y el filtro para los registros está configurado por defecto para cubrir el ejercicio contable correspondiente (la fecha de competencia contable no se completa por defecto, suponiendo que se desea operar por la fecha "formal"); 

se muestran los datos iniciales de número de página, línea y saldo deudor y saldo acreedor: el programa propone el filtro de registros teniendo en cuenta también la fecha de la última impresión definitiva.

![](/img/it-it/finance-area/ledger-records/fiscal-report/journal/image01.png)



POSIBLES OPCIONES:

**visualizza intestazione**: para gestionar eventuales documentos DDT ya impresos;

**definitiva**: activa el modo de impresión definitiva que, una vez ejecutado, bloquea modificaciones posteriores en los registros contables del período;

**ristampa**: este indicador está diseñado para permitir **reimprimir el diario ya impreso en definitivo**, al activarlo, los campos relativos a los últimos saldos deudores / acreedores, última página y última línea, que han sido poblados y almacenados por la impresión definitiva, se volverán editables con el fin de gestionar una reimpresión del libro diario, sin tener que proceder a la anulación de la impresión definitiva anterior, ni a la modificación y almacenamiento de los valores anteriores dentro de la máscara de los *parámetros de contabilidad general* (para obtener los mismos progresivos finales después de la reimpresión).

Al ejecutar la impresión definitiva, el programa realiza un control sobre la presencia de registros anteriores no impresos y sobre la existencia dentro del rango de fechas ya reportadas en la impresión. Una vez lanzado el proceso de impresión (por lo que la simple vista previa no realiza ninguna operación, sino que se debe ejecutar la impresión física, incluso en archivo, independientemente del buen término del proceso), los registros relacionados estarán bloqueados en toda la parte fiscal, mientras se actualizarán los contadores almacenados en la tabla **[Parámetros de contabilidad (Parametri di contabilità):](/docs/configurations/parameters/finance/accounting-parameters)**; dentro de esta tabla hay un botón para la eliminación de impresiones definitivas (puede estar sujeto a derechos de usuario específicos): una vez presionado, se deberá indicar el rango de fechas a desbloquear, confirmar la operación y luego actualizar manualmente todos los contadores relacionados;

**divisione**: permite gestionar la impresión especificando una de las divisiones presentes en la base de datos;

**De n. registro / A n. registro (Da n. registrazione / A nr. registrazione)**: permite filtrar la impresión por número de registro (menos significativo en caso de impresión definitiva).


| Función (Funzione) | Significado (Significato) |
| --- | --- |
| Vista previa (Anteprima) | Botón para ejecutar la vista previa de la impresión del libro diario. |
| Impresión (Stampa) | Botón para ejecutar la impresión física del libro diario. |



:::important Ver También
[**TUTORIALES EN VIDEO SOBRE IMPRESIONES FISCALES (VIDEO TUTORIALS SULLE STAMPE FISCALI)**](/docs/video/finance/intro)
:::