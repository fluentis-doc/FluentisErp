---
title: registri iva
sidebar_position: 9
---

La impresión de los registros IVA debe realizarse individualmente para cada registro: no se permite la impresión total de todos los registros del periodo.

**periodo iva**: Al abrir la máscara, este puede ser el mes anterior al actual en caso de un periodo mensual, o el trimestre en caso de que la periodicidad de la liquidación configurada en los parámetros de contabilidad sea trimestral;  

**anno di riferimento**: por defecto se propone el año en curso;  

**Registro IVA a imprimir (Registro IVA da stampare)**: seleccionar el registro a imprimir;  

**divisione**: generalmente no se debe utilizar, especialmente si no hay varias divisiones presentes;  

**riepilogativo**: el indicador permite imprimir, en el registro seleccionado a través del campo correspondiente, un resumen de los registros y los códigos IVA relacionados movimentados en el mes o trimestre seleccionado;  

Los campos siguientes muestran cuál es el último número de la página impresa para el registro establecido: estos datos se toman de la tabla de registri iva.

El indicador **visualizza intestazione** está configurado por defecto: se desactivaba cuando se debían validar los formularios DDT en los que se imprimen los registros, un requisito que ya no se prevé. Con este indicador se menciona el nombre del registro IVA, de la empresa y el número/año de las páginas.

El indicador **visualizza tipo documento** añadirá, en los referencias de los documentos, también el tipo del documento: esto puede ser útil en caso de que las facturas de venta tengan múltiples numeraciones que correspondan al mismo registro IVA.

**registrazione titolo**: cuando el indicador de Resumen (Riepilogativo) no está activo, es posible imponer un título a la impresión diferente del nombre del registro IVA que aparece por defecto.

El título del registro se toma del nombre del registro IVA y será el que se muestre en la impresión con la opción 'Mostrar encabezado (Visualizza intestazione)'.

**Mensual / Trimestral (Mensile / Trimestrale)**: los dos indicadores recuperan la configuración de la periodicidad IVA definida en los parámetros de contabilidad para memoria, pero la configuración no se puede modificar desde aquí;  

Activando el indicador **definitiva**, el proceso imprimirá los registros en definitivo bloqueando el periodo seleccionado para futuras modificaciones: también se desactivará el filtro por división. La ejecución de la vista previa de impresión en definitivo no bloqueará el periodo ni actualizará los contadores: solo la ejecución del proceso de impresión física operará el bloqueo del periodo/registro en contabilidad y actualizará el contador de páginas de la tabla de registri iva (y no es relevante que el proceso de impresión tenga éxito o no, podría ser incluso una impresión en archivo). Al realizar la impresión o la vista previa, la aplicación verificará si hay huecos en la protocolización y si se ha respetado el orden cronológico, bloqueando la impresión definitiva a menos que para el registro IVA se haya desactivado el indicador de control en la tabla. La impresión definitiva NO es necesaria para proceder con la impresión de la liquidación IVA periódica.

| Función (Funzione) | Significado (Significato) |
| --- | --- |
| Vista Previa (Anteprima) | Botón para ejecutar la vista previa de impresión del registro IVA. |
| Impresión (Stampa) | Botón para ejecutar la impresión física del registro IVA. |


:::important Vea También (Vedi Anche)
[**TUTORIALS DE VIDEO SOBRE IMPRESIONES FISCALES (VIDEO TUTORIALS SULLE STAMPE FISCALI)**](/docs/video/finance/intro)
:::