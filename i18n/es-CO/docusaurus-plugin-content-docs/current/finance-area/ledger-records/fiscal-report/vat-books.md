---
title: Registros IVA
sidebar_position: 9
ai_generated: true
---

La impresión de los registros IVA<!-- registri IVA --> debe realizarse individualmente para cada registro<!-- registro -->: no se permite la impresión conjunta de todos los registros<!-- registri --> del período.

**Período IVA<!-- Periodo IVA -->**: Al abrir la pantalla, este podrá ser el mes anterior al actual en caso de período mensual, o el trimestre si la periodicidad de la liquidación configurada en los parámetros de contabilidad<!-- contabilità --> es trimestral;

**Año de referencia<!-- Anno di riferimento -->**: se propone por defecto el año en curso;

**Registro IVA a imprimir<!-- Registro IVA da stampare -->**: seleccione el registro<!-- registro --> a imprimir;

**División<!-- Divisione -->**: normalmente no debe utilizarse, especialmente si no hay varias divisiones;

**Resumen<!-- Riepilogativo -->**: la casilla permite imprimir, en el registro<!-- registro --> seleccionado mediante el campo correspondiente, un resumen de los registros<!-- registri --> y los códigos IVA<!-- codici iva --> correspondientes gestionados en el mes o trimestre seleccionado;

Los siguientes campos muestran cuál es el último número de la página impresa para el registro<!-- registro --> configurado: este dato se toma de la tabla de registros IVA<!-- tabella Registri IVA -->.

La casilla **Mostrar encabezado<!-- Visualizza intestazione -->** ya está marcada por defecto: se quitaba cuando era necesario certificar los módulos DDT en los cuales imprimir los registros<!-- registri -->, una obligación que ya no existe. Con esta casilla se muestra el nombre del registro IVA, de la empresa y el número/año de las páginas.

La casilla **Mostrar tipo de documento<!-- Visualizza tipo documento -->** añadirá, en las referencias de los documentos, también el tipo de documento: puede ser útil si las facturas de venta tienen varias numeraciones que pertenecen al mismo registro IVA.

**Título de la impresión<!-- Registrazione titolo -->**: cuando la casilla Resumen<!-- Riepilogativo --> no está activa es posible imponer un título a la impresión diferente al nombre del registro IVA que aparece por defecto.

El título del registro<!-- registro --> se toma del nombre del registro IVA y será el que se mostrará en la impresión con la opción 'Mostrar encabezado<!-- Visualizza intestazione -->'.

**Mensual / Trimestral<!-- Mensile / Trimestrale -->**: las dos casillas reflejan la configuración de la periodicidad IVA definida en los parámetros de contabilidad<!-- contabilità --> como referencia, pero la configuración no puede modificarse desde aquí;

 

Al activar la casilla **Definitiva**, el procedimiento imprimirá los registros<!-- registri --> de forma definitiva bloqueando el período seleccionado para posteriores modificaciones: además se deshabilitará el filtro por división<!-- divisione -->. La ejecución de la vista previa de impresión en definitiva no bloqueará el período ni actualizará los contadores: solo la ejecución del proceso de impresión física bloqueará el período/registro<!-- periodo/registro --> en la contabilidad<!-- contabilità --> y actualizará el contador de páginas de la tabla de registros IVA<!-- tabella Registri IVA --> (y no es relevante si el proceso de impresión se completa correctamente o no, podría ser incluso una impresión en archivo). Ejecutando la impresión o la vista previa, la aplicación verificará si hay vacíos en la protocolización y si se ha respetado el orden cronológico, bloqueando la impresión definitiva a menos que para el registro IVA se haya desactivado la casilla de control en la tabla<!-- tabella -->. La impresión definitiva NO es necesaria para proceder a la impresión de la liquidación IVA periódica.

| Función | Significado |
| --- | --- |
| Vista previa<!-- Anteprima --> | Botón para ejecutar la vista previa de impresión del registro IVA. |
| Imprimir<!-- Stampa --> | Botón para ejecutar la impresión física del registro IVA. |

:::important Ver también<!-- Vedi Anche -->
[**VIDEO TUTORIALES SOBRE IMPRESIONES FISCALES**](/docs/video/finance/intro)
:::