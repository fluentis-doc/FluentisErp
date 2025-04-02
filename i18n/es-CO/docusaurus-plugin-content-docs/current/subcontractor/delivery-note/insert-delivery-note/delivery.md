---
title: consegna
sidebar_position: 4
---

En esta pestaña se ingresan los materiales que deben ser entregados al proveedor externo. Estos pueden ser ingresados automáticamente a través del procedimiento de *Cumplimiento de Pedido (Evasione da Ordine)* o manualmente por el usuario.

*Botones específicos*:
> **inserisci materiale**: invoca el procedimiento para ingresar un nuevo material en la cuadrícula de artículos de la pestaña 'consegnas'.  
> **cancella materiale**: invoca el procedimiento para eliminar un material de la cuadrícula de artículos de la pestaña 'consegnas'.  

*Campos específicos*:

**Pedido C/L número y año (Ordine C/L numero e anno)**: se muestran el número y el año del pedido de trabajo por cuenta ajena del cual se ha extraído la línea de artículo. Si la línea ha sido ingresada manualmente, esta columna estará vacía;  

**data prevista consegna**: representa la fecha prevista de entrega del material, tomada de la pestaña *Materiales a entregar* del pedido de trabajo por cuenta ajena del cual se generó la línea de artículo del DDT;  

**previsto rientro**: representa la fecha de regreso previsto del producto terminado que debe ser fabricado por el proveedor utilizando el material en entrega, tomado de la pestaña *articoli da produrre* del pedido de trabajo por cuenta ajena del cual se generó la línea de artículo del DDT;  

**n. riga**: representa un simple número progresivo de la línea del documento, editable por el usuario;  

**um**: representa la unidad de medida de gestión del artículo en entrega;  

**fase/sottofase**: se muestran el código de fase y el código de subfase de la fase de producción del pedido de producción al que el artículo está eventualmente vinculado; esto ocurre si el pedido de trabajo por cuenta ajena del cual se ha creado esta línea de DDT fue generado a partir de una fase externa de un pedido de producción;  

**quantità**: representa la cantidad que se ha decidido entregar al proveedor externo, editable por el usuario;  

**magazzino**: representa el código del almacén desde el cual se retira la mercancía a entregar al proveedor externo. El código del almacén se propone igual al que se estableció en la línea de la pestaña 'Materiales a entregar' del pedido de trabajo por cuenta ajena del cual se generó la línea DDT, pero es editable por el usuario. Si está activo el indicador, presente en los Parámetros de Trabajo por Cuenta Ajena, llamado 'Considerar almacenes según el tipo de DDT de entrega', el almacén propuesto será el que se establezca en la tabla de 'Tipos de Remito de Venta', en la columna correspondiente 'Almacén';  

**causale**: representa el código de la causa del almacén que se utilizará para realizar la extracción del almacén desde el cual es necesario hacer salir la mercancía a entregar al proveedor externo. El código de la causa del almacén se propone igual al que se estableció en la línea de la pestaña 'Materiales a entregar' del pedido de trabajo por cuenta ajena del cual se generó la línea DDT, pero es editable por el usuario. Si está activo el indicador, presente en los Parámetros de Trabajo por Cuenta Ajena, llamado 'Considerar almacenes según el tipo de DDT de entrega', la causa propuesta será la que se establezca en la tabla de 'Tipos de Remito de Venta', en la columna correspondiente 'Causale';  

**prezzo**: representa el precio unitario del artículo. Es una columna editable por el usuario y no obligatoria. Se utiliza generalmente cuando el DDT de entrega debe pasar por una aduana;  

**iva**: representa el código IVA, o puede verse automáticamente propuesto por el procedimiento que lo toma del registro del proveedor externo o del registro del artículo presente en la línea, según los casos. La caja combinada se extrae de la tabla 'Tipo de IVA' que se encuentra en 'Configuraciones Generales';  

**tipo fatturato acquisti**: representa el código del Tipo de Facturación, o puede verse automáticamente propuesto por el procedimiento que lo toma del registro del artículo presente en la línea. La caja combinada se extrae de la tabla 'Tipo de Facturación de Compras' que se encuentra en 'Tablas del Área de Compras';     

**pesi**: se presentan el Peso neto y el Peso bruto totales de las líneas de artículo. Se reportan los pesos del registro del artículo multiplicados por la cantidad de la línea.

### Descarga de lotes (Scarico lotti)

En esta pestaña se da la posibilidad de establecer, para la línea seleccionada en la cuadrícula, los lotes a descargar del almacén con la cantidad de artículo extraída para el envío al proveedor externo, en caso de que se trate de varios lotes diferentes extraídos con la misma línea de DDT.

La cuadrícula de lotes permite al usuario extraer el lote a partir del 'Help Lotes' correspondiente, que filtra entre los lotes disponibles del artículo seleccionado en la cuadrícula superior. La información que se reporta en la cuadrícula de lotes incluye tipo de código de lote, código de lote, lote del proveedor, tipo de lote, fecha de inicio y fecha de caducidad, cantidad del lote, ubicación, datos del proveedor del lote (cuenta, subcuenta y razón social). Obviamente, la suma de las cantidades de los varios lotes deberá corresponder exactamente a la cantidad entregada de la línea de artículo.

### Datos de material (Dati materiale)

En esta pestaña se visualizan las siguientes informaciones relacionadas con la línea seleccionada en la cuadrícula:

**Clase, código, descripción y variante del artículo, cantidad a entregar, unidad de medida, Almacén, Causale, Pedido C/L**: se trata de una serie de informaciones simplemente trasladadas desde la línea de DDT seleccionada;  

**progetto**: representa la orden de venta vinculada a la línea del DDT. Por lo general, se invoca la orden de venta ingresada en la línea del pedido de trabajo por cuenta ajena del cual se generó la línea de DDT;  

**note**: en este campo el usuario puede ingresar una nota relativa a la línea seleccionada.