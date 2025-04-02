---
title: articoli
sidebar_position: 3
---

El formulario se compone de una cuadrícula, dentro de la cual el usuario puede ingresar manualmente los productos que se requieren al tercerizador.  
Es posible ingresar artículos codificados y notas.

Este ya está completo en caso de que el pedido provenga de *schedulazione generale* o de *Procesamiento MRP (Elaborazione MRP)*, dejando de todos modos al usuario la facultad de modificarlo y/o agregar más materiales a la lista de componentes del pedido planificado. Cabe señalar que si el pedido planificado es de compra, la pestaña Materiales permanece inactiva.

## Datos del artículo (Dati articolo)

En esta pestaña se visualizan las informaciones relativas a la línea seleccionada en la cuadrícula de artículos, entre las cuales:

**corso lavorazione**: en este campo se toma el indicador presente en los parámetros MRP del artículo llamado *corso lavorazione*;  
**quantità da produrre**: cantidad del pedido inicial comunicada al tercerizador;  
**quantità già rientrata**: total de la cantidad recibida y procesada;  
**data previsto rientro**: fecha de llegada de la mercancía procesada;  
**note lavorazione**: son gestionadas por el usuario. Pueden ser parametrizadas y pueden incluir datos sensibles del sistema, por ejemplo, la descripción de la fase de trabajo que generó la necesidad de procesamiento;  
**fase**: con un doble clic se abre un ayuda sobre las fases de procesamiento desde la cual se puede seleccionar la fase y subfase correspondientes, y así asignar el material seleccionado a una determinada fase de procesamiento del artículo;  
**magazzino**: almacén de destino del producto procesado;  
**pesi**: se indican el Peso neto y el Peso bruto totales de las líneas del artículo. Se reportan los pesos del registro de artículo multiplicados por la cantidad de la línea.