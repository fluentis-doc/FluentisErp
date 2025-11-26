---
title: Parámetros
sidebar_position: 3
ai_generated: true
---

Dentro de la sección **Parámetros<!-- Parametri -->**, el procedimiento muestra todas las filas de detalle de los artículos<!-- articoli --> incluidos en los documentos seleccionados, trayendo de cada uno de ellos los datos extraídos del documento. En particular:

![](/img/it-it/finance-area/declarations/intrastat/automatic-creation-intrastat1/parameters/image01.png)

 

**Estado y código IVA**: se toman de la ficha del sujeto titular;

**Valor en moneda**: muestra el importe del artículo (precio*cantidad-descuentos) en la moneda de la factura de compra (el campo solo está presente para intra2);

**Importe de operaciones en euros**: toma el importe del artículo al tipo de cambio ingresado en la factura;

**Naturaleza de la transacción**: se toma del tipo de documento;

**Nomenclatura combinada**: de la línea de artículo en la factura y, si está vacío, de la ficha de artículos<!-- anagrafica articoli -->;

**Masa neta**: calculada en base al peso configurado en la ficha del artículo;

**Unidad adicional**: puede calcularse automáticamente si el código de nomenclatura prevé una segunda unidad de medida, mediante la conversión entre la unidad de medida de gestión y ésta, según los factores de conversión configurados en el artículo;

**Valor estadístico** se calcula de diferentes formas según la configuración (variación porcentual respecto a la ficha del cliente/proveedor, o incrementado por los gastos incluidos específicamente en el documento);

**Código de transporte y Modalidad de transporte** se ingresan según los códigos de puerto/envío asignados al documento;

**Datos relativos a las provincias de origen/destino** y al **país de procedencia/destino** se obtienen de la ficha del sujeto titular del documento o de la tabla de sociedades.

Al final de la cuadrícula se visualizan las referencias al documento de origen de la fila.

Una vez completados los datos necesarios en el modelo (y esto depende de la marca Simplificada en la cabecera de la declaración pero también del tipo de periodo del resumen) es posible proceder a la creación del modelo. Esta operación reportará los detalles en las secciones bis/ter/cuater según la naturaleza de la transacción Intrastat (el tipo 2 se registra en la sección Ter referente a las rectificaciones, el tipo “S” en la sección cuater). Se puede proceder, antes aún de este traslado, a un primer agrupamiento de los importes: sin embargo, esta operación se realiza documento por documento, causando un primer redondeo de los datos a la unidad.

| Función | Significado |
| --- | --- |
| Eliminar | Botón para eliminar las facturas de tipo intracomunitario seleccionadas. |
| Creación | Realiza la creación del modelo intrastat reportando los datos presentes en esta pestaña dentro de las secciones del modelo |
| Crear | Ejecuta la eliminación de todas las filas de la cuadrícula |
| Agrupar | Realiza el agrupamiento de las filas en función del destinatario de las facturas y de los demás datos homogéneos |
| Guardar | Permite guardar los datos ingresados para, por ejemplo, continuar en otro momento |