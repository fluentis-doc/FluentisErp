---
title: Gestión de Previsiones de venta
sidebar_position: 2
ai_generated: true
---

Esta función se encuentra en **Sales Forecast > Gestión de previsiones de venta<!-- Gestione previsioni di vendita -->**. Desde aquí es posible visualizar todas las previsiones de venta<!-- Previsioni di vendita --> ya codificadas y crear nuevas. Analicemos las características de una Nueva previsión de venta<!-- Nuova Previsione di vendita -->.       

El encabezado está compuesto por los siguientes campos:       
**Tipo de previsión de venta<!-- Tipo previsione di vendita -->**: este dato se extrae de la tabla [Tipo de previsión de venta](/docs/configurations/tables/crm/sales-forecast/sales-forecast-type) y desempeña un papel crucial al indicar a Fluentis en qué periodos es necesario dividir la previsión de venta<!-- previsione di vendita -->. A través de la asociación con el [Tipo de periodo](/docs/configurations/tables/crm/sales-forecast/period-type) presente en esta tabla, Fluentis puede determinar si la previsión debe dividirse de manera anual, mensual u otras modalidades específicas;         
**Descripción<!-- Descrizione -->**: este campo contiene una descripción libre;      
**Año/Fecha/Número<!-- Anno/Data/Numero -->**: estos campos se completan automáticamente según la numeración asociada y la fecha actual.     

En la primera cuadrícula se permite insertar las líneas relativas a la previsión de venta<!-- previsione di vendita -->. Utilizando los botones presentes en la barra de herramientas, es posible construir una estructura en forma de árbol, por ejemplo, por división geográfica. Inicialmente, se parte desde el primer grupo y posteriormente se detalla la estructura según los niveles de división deseados. Los importes de la segunda cuadrícula solo pueden completarse a nivel de Detalle, es decir, después de haber insertado el último nivel del árbol. Una vez insertado este último nivel, la segunda cuadrícula se llenará automáticamente, dividiendo las fechas de acuerdo al [Tipo de periodo](/docs/configurations/tables/crm/sales-forecast/period-type) configurado. Entonces será posible ingresar las Cantidades e Importes de los distintos periodos en la segunda cuadrícula, permitiendo así a Fluentis calcular los totales y reportarlos en la primera cuadrícula.

En la primera cuadrícula, algunos campos están activos si se inserta un Grupo, otros si se inserta un Detalle, usando los botones correspondientes de la barra de herramientas.     
Analicemos los campos que se pueden completar si la fila es un Grupo/Nodo:       
**Progresivo de grupo<!-- Progressivo gruppo -->**: a cada grupo se le asigna un número progresivo;      
**Descripción del grupo<!-- Descrizione gruppo -->**: es posible ingresar una descripción libre para cada grupo;       
**Zona**: cada grupo puede ser asignado a una zona diferente;       
**Operador asignado<!-- Operatore assegnato -->**: es necesario indicar el operador responsable de la previsión de venta<!-- Previsione di vendita --> en esta zona;       
**Agente**: es posible indicar un agente responsable de las ventas en esa zona;      
**Nota**: es un campo de notas libre.        
Analicemos los campos que se pueden completar si la fila es un Detalle:         
**Familia de productos<!-- Famiglia prodotti -->**: este campo contiene la familia de artículos para la que se está creando la previsión, con su **descripción<!-- Descrizione -->**; solo las [Clases de artículos<!-- Classi articolo -->](/docs/configurations/tables/logistics/item-class) que tienen asociada esta familia de producto serán consideradas para las estadísticas;          
**Unidad de medida<!-- Unità di Misura -->**: se sugiere la unidad de medida de la familia;      
**Nota de detalle<!-- Nota Dettaglio -->**: es un campo de notas libre.         
Luego hay campos calculados:     
**Cantidad total<!-- Quantità Totale -->**: se muestra la suma de las cantidades por periodo de la segunda cuadrícula;     
**Importe total<!-- Importo Totale -->**: se muestra la suma de los importes por periodo de la segunda cuadrícula;    
**Precio medio unitario<!-- Prezzo Medio Unitario -->**: se muestra el resultado de la operación *Cantidad total/Importe total<!-- Quantità totale/Importo totale -->*.

En la segunda cuadrícula, se muestra el *Detalle<!-- Dettaglio -->* del [Tipo de periodo](/docs/configurations/tables/crm/sales-forecast/period-type) asociado al [Tipo de previsión de venta](/docs/configurations/tables/crm/sales-forecast/sales-forecast-type) seleccionado. Además, será posible indicar una **Cantidad** y un **Importe** de periodo para cada fila. Estos datos, sumados, formarán el **Importe total<!-- Importo totale -->** y la **Cantidad total<!-- Quantità Totale -->** de la primera cuadrícula.