---
title: Calcular disponibilidad
sidebar_position: 5
---

:::important Para qué sirve 
El Cálculo de la Disponibilidad de Fluentis es una herramienta esencial que permite a los usuarios determinar con precisión la disponibilidad de artículos dentro de los almacenes. Esta funcionalidad es accesible a través de una interfaz fácil de usar, donde se pueden seleccionar los almacenes sobre los cuales se desea realizar el cálculo. El usuario puede ingresar información como el código del almacén y su descripción, configurando así la base sobre la cual operar.  

En la sección dedicada al cálculo, los usuarios pueden establecer los criterios para la disponibilidad física y lógica, especificando si considerar documentos relacionados con compras, ventas, producciones planificadas y liberadas. Además, es posible establecer un intervalo de tiempo específico para el cual se desea realizar el cálculo, aumentando así la precisión de los datos recopilados.  

Esta funcionalidad no solo facilita el monitoreo de inventarios, sino que también apoya decisiones estratégicas en tiempo real, asegurando que las empresas puedan responder rápidamente a las necesidades de aprovisionamiento y venta. Gracias al cálculo de la disponibilidad, Fluentis ofrece así una ventaja competitiva significativa, optimizando la gestión de existencias y mejorando la eficiencia operativa.  
:::  

La ventana relacionada con el cálculo de disponibilidad se abre a través de la ruta **Inicio > Artículos > Calcular disponibilidad**.

A través de este formulario, se ingresan los almacenes sobre los cuales se desea calcular la disponibilidad y que luego serán reportados en el formulario [Análisis de la disponibilidad](/docs/erp-home/registers/items/availability-analysis).  

El formulario se compone de una cuadrícula, en la que se ingresan el código del **almacén** y la correspondiente **descripción** para todos los almacenes en los que se desea que se calcule la disponibilidad (al agregar o eliminar un almacén dentro de esta cuadrícula, este se añadirá o eliminará también de la cuadrícula de almacenes presente en el *Análisis de la disponibilidad*).  

En la sección de la derecha se puede configurar el tipo de **Cálculo de la disponibilidad física** y de la **Disponibilidad lógica** para: cuenta/trabajo, compras, ventas, producción planificada, producción liberada, almacén (se pueden elegir una, algunas o todas estas opciones que pueden ser diferentes en el caso de la disponibilidad física en comparación con la disponibilidad lógica).  

Por último, hay la posibilidad de indicar el período que el sistema debe tener en cuenta para el cálculo de la disponibilidad, ingresando a partir de la fecha actual (es decir, desde la fecha en que se lanza el análisis de disponibilidad) el **Número de días** hasta el cual el sistema debe ir a comprobar la disponibilidad dentro de los documentos.  

Actualmente, estos campos ya no se gestionan porque han sido implementados dentro de la pantalla de Análisis de la disponibilidad. La única parte aún activa sigue siendo la cuadrícula de Almacenes.  

Una vez que se han configurado los parámetros, se puede proceder al [Análisis de la disponibilidad](/docs/erp-home/registers/items/availability-analysis) a través de la impresión *Análisis de disponibilidad*.