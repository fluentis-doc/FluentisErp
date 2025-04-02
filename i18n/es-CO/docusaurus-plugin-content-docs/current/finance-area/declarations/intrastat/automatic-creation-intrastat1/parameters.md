---
title: parametri
sidebar_position: 3
---

Dentro de la sección **parametri**, el procedimiento muestra todas las filas de detalle de los artículos ingresados en los documentos seleccionados, reportando de cada uno de ellos los datos extraídos del documento. En particular:

![](/img/it-it/finance-area/declarations/intrastat/automatic-creation-intrastat1/parameters/image01.png)

 

**Estado y código IVA (Stato e codice IVA)**: se obtienen de la ficha del sujeto titular;  

**Valor en moneda (Valore in divisa)**: presenta el dato del importe del artículo (precio * cantidad - descuentos) en la moneda de la factura de compra (el campo solo está presente para intracomunitarios);  

**ammontare operazioni euro**: toma el importe del artículo al tipo de cambio ingresado en la factura;  

**Naturaleza de la transacción (Natura della transazione)**: se extrae del tipo de documento;  

**nomenclatura combinata**: de la línea del artículo en la factura y, si está vacío, de la ficha de artículos;  

**massa netta**: calculada sobre la base del peso establecido en la ficha del artículo;  

**unità suppl.**: puede ser calculada automáticamente si el código de nomenclatura prevé una segunda unidad de medida, a través de la conversión entre unidad de medida de gestión y esta, de acuerdo con los factores de conversión establecidos en el artículo;  

**valore statistico** se calcula de varias maneras según las configuraciones (variación porcentual respecto a la ficha del cliente/proveedor, o incrementada por los gastos insertados de manera específica en el documento);  

**Código de transporte y Modalidad de transporte (Codice trasporto e Modalità trasporto)** se ingresan respecto a los códigos de puerto/envío asignados al documento;  

**Datos relativos a las provincias de origen/destino (Dati relativi alle provincie di origine/destinazione)** y al **país de procedencia/destino (paese di provenienza/destinazione)** se leen de la ficha del sujeto titular del documento o de la tabla de la sociedad.

Al final de la cuadrícula se visualizan las referencias al documento de origen de la fila.

Una vez completados los datos necesarios en el modelo (y esto depende del indicador Simplificado incluido en el encabezado de la declaración, pero también del tipo de período del resumen), es posible proceder a la creación del modelo, operación que llevará los detalles a las secciones bis/ter/quater según la naturaleza de la transacción Intrastat (el tipo 2 se reporta en la sección Ter relativo a las correcciones, el tipo “S” en la sección quater). Es posible proceder, incluso antes de este movimiento, a un primer agrupamiento de los importes: esta operación se llevará a cabo documento por documento, causando un primer redondeo de los datos a la unidad.



| Función (Funzione) | Significado (Significato) |
| --- | --- |
| Eliminar (Cancella) | Botón para eliminar las facturas intracomunitarias seleccionadas. |
| Creación (Creazione) | Ejecuta la creación del modelo Intrastat reportando los datos presentes en esta pestaña dentro de las secciones del modelo. |
| Crear (Crear) | Ejecuta la eliminación de todas las filas de la cuadrícula. |
| Agrupar (Raggruppa) | Ejecuta el agrupamiento de las filas según el sujeto destinatario de las facturas y otros datos homogéneos. |
| Guardar (Salva) | Permite guardar los datos ingresados para, por ejemplo, continuar en un segundo momento. |