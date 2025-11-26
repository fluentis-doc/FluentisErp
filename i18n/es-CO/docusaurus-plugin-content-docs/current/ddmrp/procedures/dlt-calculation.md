---
title: Actualización de lead time desacoplado (DLT)
sidebar_position: 2
ai_generated: true
---

Este procedimiento calcula el lead time<!-- lead time --> desacoplado (DLT) de todos los artículos con buffer<!-- articoli a buffer -->, tanto si están en fábrica<!-- fabbrica --> como en los centros de distribución<!-- centri di distribuzione -->/hubs.

Este es un parámetro muy importante para determinar el tamaño de las zonas de un buffer<!-- buffer --> y, por lo tanto, también los niveles de inventario<!-- scorta --> que son proporcionales al DLT<!-- DLT -->.

Si un centro de distribución<!-- centro distribuzione -->/hub es abastecido por un hub, el DLT<!-- DLT --> de los artículos almacenados en él es igual para todos y está determinado por el lead time<!-- lead time --> indicado en la tabla de la estructura logística (a menos que el artículo tenga en los parámetros Ddmrp una excepción de suministro).

Si el centro de distribución<!-- centro distribuzione -->/hub es abastecido por la fábrica<!-- fabbrica -->, cada artículo tendrá un valor DLT<!-- DLT --> específico dado por la suma del lead time de transporte<!-- lead time di trasporto --> desde la fábrica<!-- fabbrica --> y del tiempo necesario para fabricar el producto en fábrica<!-- tempo necessario a realizzare il prodotto in fabbrica --> (nulo solo para aquellos artículos que son buffer<!-- buffer --> en fábrica<!-- fabbrica -->).

El procedimiento requiere que la información esté presente y sea correcta, por lo tanto, el tipo de parte del perfil de buffer<!-- tipo parte del buffer profile --> debe ser correcto para los artículos con buffer<!-- articoli a buffer -->, y en general debe estar presente el lead time<!-- lead time --> de los artículos en las listas de materiales<!-- distinte base --> (para los artículos de compra<!-- articoli d'acquisto --> debe estar especificado el proveedor preferente con el respectivo indicador y lead time<!-- lead time -->; para los demás artículos, el lead time<!-- lead time --> debe estar presente en los parámetros mrp<!-- parametri mrp -->).

Los artículos con datos incongruentes o incompletos no serán tenidos en cuenta en el cálculo, además al finalizar el procedimiento se mostrará un mensaje enumerando las incongruencias detectadas.

Para todos los artículos de fábrica<!-- articoli di fabbrica --> que tengan lista de materiales<!-- distinta base -->, el procedimiento sumará los lead time<!-- lead time --> de cada artículo a lo largo de cada rama de la lista deteniéndose cuando encuentre un artículo con buffer<!-- articolo a Buffer -->, ya que un artículo con buffer<!-- articolo a Buffer --> ya está disponible, por lo que no requiere tiempo para ser abastecido.

La mayor de las sumas de las diferentes ramas determina el valor DLT<!-- valore DLT --> del artículo, es decir, el tiempo necesario para construir el producto.

Este cálculo también se realiza para los productos que en fábrica<!-- fabbrica --> no son inventario<!-- scorte --> Ddmrp, ya que estos pueden serlo en los centros de distribución<!-- centri di distribuzione -->/hubs, por lo tanto su DLT<!-- DLT --> correspondiente es igual al valor DLT<!-- valore DLT --> en fábrica<!-- fabbrica --> más el tiempo de transporte<!-- tempo di trasporto -->.

El procedimiento también determina el camino crítico de cada artículo, es decir, identifica todos los artículos que se encuentran en la cadena de suministro<!-- catena di approvvigionamento --> más larga, es decir, aquellos que determinan el valor DLT<!-- valore DLT --> del artículo.

Si se desea reducir el valor del DLT<!-- DLT --> de un artículo, se deben elegir artículos en la cadena crítica como nuevos artículos con buffer<!-- nuovi articoli a buffer -->, ya que elegir artículos que no están en la cadena crítica no aporta ningún beneficio.

Al finalizar el procedimiento se llama automáticamente al procedimiento de actualización de zonas<!-- procedura di aggiornamento delle zone -->.