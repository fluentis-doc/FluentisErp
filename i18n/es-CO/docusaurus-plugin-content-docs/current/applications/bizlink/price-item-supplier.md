---
title: importazione prezzi e articoli fornitore
sidebar_position: 5
---

La hoja de importación se abre desde la ruta Aplicaciones > BizLink > Importaciones Bajo Demanda > Registros > importazione prezzi e articoli fornitore.  
En esta hoja, muy similar a Excel, hay una tabla en la que se pueden ingresar los datos que serán importados.  
Las columnas en rojo son obligatorias: por lo tanto, es necesario ingresar el **codice articolo**, la **descrizione** correspondiente, el **prezzo** y la **quantità per prezzo**. Los otros datos son libremente editables por el usuario según sus necesidades e incluyen varias características del artículo: Unidad de medida, descuentos, etcétera.  
Pasando a la segunda página de la hoja de importación, llamada **Parámetros BizLink (BizLink Parameters)**, se pueden ingresar los parámetros que debe utilizar el procedimiento. En particular, para esta importación es necesario indicar la **ragione sociale** y el **nomignolo** del Proveedor para el cual se importan los nuevos precios, y un **inizio validità**, fecha a partir de la cual se aplicarán los cambios. También se puede especificar una fecha para el Fin de Validez, que no es obligatoria.

Desde la barra de ribbon es posible realizar diversas operaciones para facilitar la usabilidad de la hoja. Por ejemplo, se puede abrir una hoja guardada anteriormente con el botón **Abrir (Open)**, se puede guardar el documento en curso con el botón **save**, se puede visualizar la vista previa de impresión, etcétera. Estas operaciones son parte de la pestaña “Archivo (File)”. De hecho, aún más arriba de la barra de ribbon hay varias pestañas que, a su vez, permiten al usuario realizar diversas operaciones, las cuales no se tratarán en este video. La única pestaña que nos interesa, además de “Archivo (File)”, en este curso es “Importación (Importazione)”.  
Al hacer clic en el botón **importazione** de la pestaña "Importación", los datos ingresados en la hoja serán importados. Si la operación se realiza con éxito, aparecerá el mensaje “Importación completada”, de lo contrario, será posible consultar los errores en los **Documentos en Entrada de BizLink (Documenti in Entrata di BizLink)**.

Podemos cerrar esta hoja una vez importada y podemos trasladarnos, por lo tanto, a los procedimientos de listas de precios, accesibles desde Compras > Procedimientos de Listas de Proveedores > [Precios de Proveedor (Prezzi Fornitore)](/docs/purchase/purchase-price-lists/procedures/supplier-price).