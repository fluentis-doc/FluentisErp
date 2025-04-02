---
title: Actualización del tiempo de entrega desacoplado (DLT) (Aggiornamento lead time disaccoppiato (DLT))
sidebar_position: 2
---

Este procedimiento calcula el tiempo de entrega desacoplado (DLT) de todos los artículos en buffer, ya sea que estén en fábrica o en los centros de distribución/hubs. 

Este es un parámetro muy importante para determinar el tamaño de las zonas de un buffer y, por lo tanto, también los niveles de stock que son proporcionales al DLT. 

Si un centro de distribución/hub es abastecido por un hub, el DLT de los artículos almacenados en él es igual para todos y está dado por el tiempo de entrega indicado en la tabla de la estructura logística (a menos que el artículo indique en los parámetros Ddmrp una excepción de suministro). 

Si el centro de distribución/hub es abastecido por la fábrica, cada artículo tendrá un valor DLT específico dado por la suma del tiempo de entrega de transporte desde la fábrica y el tiempo necesario para fabricar el producto en la fábrica (nulo solo para aquellos artículos que son buffers en la fábrica). 

El procedimiento requiere información presente y correcta; por lo tanto, el tipo de parte del perfil de buffer debe ser correcto para los artículos en buffer, y en general, el tiempo de entrega de los artículos en las listas de materiales debe estar presente (para los artículos de compra debe especificarse el proveedor preferido con su respectivo indicador y tiempo de entrega; para los otros artículos, debe estar presente el tiempo de entrega en los parámetros MRP). 

Los artículos con datos incongruentes o faltantes no se tomarán en consideración en el cálculo; además, al finalizar el procedimiento se mostrará un mensaje que enumerará las incongruencias encontradas. 

Para todos los artículos de fábrica que tienen lista de materiales, el procedimiento sumará los tiempos de entrega de cada artículo a lo largo de cada rama de la lista, deteniéndose cuando encuentra un artículo en buffer, ya que un artículo en buffer está disponible y, por lo tanto, no requiere tiempo para ser abastecido. 

La mayor de las sumas de las diversas ramas determina el valor DLT del artículo, es decir, el tiempo necesario para construir el producto. 

Este cálculo también se realiza para los productos que en fábrica no son existencias Ddmrp, ya que los mismos pueden serlo en los centros de distribución/hubs, por lo que el DLT correspondiente es igual al valor DLT en fábrica más el tiempo de transporte. 

El procedimiento también determina la ruta crítica de cada artículo, es decir, identifica todos los artículos que se encuentran en la cadena de suministro más larga, es decir, aquellos que determinan el valor DLT del artículo. 

Si se desea reducir el valor del DLT de un artículo, se deben elegir artículos en la cadena crítica como nuevos artículos en buffer, ya que elegir artículos que no están en la cadena crítica no aporta ningún beneficio. 

Al finalizar el procedimiento, se llama automáticamente al procedimiento de actualización de las zonas.