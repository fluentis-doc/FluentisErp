---
title: materiali
sidebar_position: 4
---

El formulario consta de dos cuadrículas que muestran los materiales a enviar al proveedor para el procesamiento y los materiales que se utilizarán al recibir el producto procesado. Es posible ingresar artículos codificados, no codificados y notas.

Los materiales enviados y utilizados pueden ser gestionados por el operador y, en tal caso, es necesario ingresar la cantidad, el posible precio del procesamiento, la fecha de previsto retorno y la fecha de uso del material. Estos datos ya están valorados si el pedido proviene de *schedulazione generale* o de *Procesamiento MRP (Elaborazione MRP)*.

## materiali a entregar (Materiali da consegnare)

**codice articolo**: indica el material a entregar para el procesamiento;  

:::note Nota (Nota)
En el caso de que el pedido de trabajo por encargo sea generado por la liberación de un *ordine pianificato di conto lavoro* o de un *ordine pianificato di produzione* con una o más fases externas, los materiales a entregar no se visualizarán si: no existen los [Parámetros MRP (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) del artículo, o el indicador *considera in conto lavoro* no está habilitado en los [Parámetros MRP (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), o si el *tipo prelievo* en los [Parámetros MRP (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) es *automatico*, o si en los [Parámetros MRP (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) el *tipo prelievo* es *con lista* y el indicador WIP no está habilitado.
:::

## materiali a utilizar (Materiali da impiegare)

**codice articolo**: indica el material a utilizar al recibir el producto procesado;  
**Uso unitario (Impiego unitario)**: cantidad a utilizar por cada unidad del producto procesado, en caso de gestión automática de la programación de listas de materiales; este dato es valorado por el sistema;  
**Uso total (Impiego totale)**: cantidad total a utilizar para el procesamiento completo en caso de gestión automática de la programación de listas de materiales; este dato es valorado por el sistema;  
**% scarto**: cantidad a utilizar adicional que resulta ser el desperdicio;  
**Fecha prevista de uso (Data prev. impegno)**: según esta fecha, el sistema planifica la disponibilidad de la demanda.