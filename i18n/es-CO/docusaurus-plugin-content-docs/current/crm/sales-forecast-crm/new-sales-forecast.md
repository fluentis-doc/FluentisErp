---
title: gestione previsioni di vendita
sidebar_position: 2
---

Esta función es accesible desde **Pronóstico de Ventas > Gestión de pronósticos de ventas (Sales Forecast > Gestione previsioni di vendita)**. Desde aquí es posible visualizar todos los Pronósticos de ventas ya codificados y crear nuevos. Analicemos las características de un Nuevo Pronóstico de ventas. 

El encabezado está compuesto por los siguientes campos:  
**tipo previsione di vendita**: este dato se extrae de la tabla [Tipo de pronóstico de ventas (Tipo previsione di vendita)](/docs/configurations/tables/crm/sales-forecast/sales-forecast-type) y asume un papel crucial al indicar a Fluentis en qué períodos es necesario subdividir el pronóstico de ventas. A través de la asociación con el [Tipo de período (Tipo periodo)](/docs/configurations/tables/crm/sales-forecast/period-type) presente en esta tabla, Fluentis puede determinar si el pronóstico debe subdividirse de manera anual, mensual, o en otras modalidades especificadas;  
**descrizione**: este campo contiene una descripción libre;  
**Año/Fecha/Número (Anno/Data/Numero)**: estos campos se completan automáticamente en función de la Numeración asociada y de la Fecha actual.  

En la primera cuadrícula se permiten ingresar las líneas relacionadas con el pronóstico de ventas. Utilizando los botones presentes en la barra de herramientas, es posible construir una estructura jerárquica, por ejemplo, por subdivisión geográfica. Inicialmente, se parte del primer grupo y luego se detalla la estructura según los niveles de subdivisión deseados. Los importes de la segunda cuadrícula pueden ser completados solo a nivel de Detalle, es decir, después de haber ingresado el último nivel del árbol. Una vez ingresado este último nivel, la segunda cuadrícula se poblará automáticamente, subdividiendo las fechas según el [Tipo de período (Tipo periodo)](/docs/configurations/tables/crm/sales-forecast/period-type) configurado. Así, será posible llenar las Cantidades y los Importes de los distintos períodos en la segunda cuadrícula, permitiendo así que Fluentis calcule los totales y los reporte en la primera cuadrícula.

En la primera cuadrícula, algunos campos están activos si se ingresa un Grupo, otros si se ingresa un Detalle, con los botones apropiados de la barra de herramientas.  
Analicemos los campos que se pueden completar si la línea es un Grupo/Nodo:  
**progressivo gruppo**: a cada Grupo se le asigna un número progresivo;  
**descrizione gruppo**: es posible ingresar una descripción libre para cada Grupo;  
**zona**: cada Grupo puede ser asociado a una Zona diferente;  
**operatore assegnato**: es necesario indicar el Operador responsable del Pronóstico de ventas en esta Zona;  
**agente**: se puede indicar un Agente responsable de las ventas en esta Zona;  
**nota**: es un campo de notas libre.  
Analicemos los campos que se pueden ingresar si la línea es un Detalle:  
**famiglia prodotti**: este campo contiene la Familia de artículos para la cual se está creando el Pronóstico, con la respectiva **Descripción**; solo las [Clases de artículos (Classi articolo)](/docs/configurations/tables/logistics/item-class) que tengan asociada esta Familia de productos serán consideradas para las estadísticas;  
**unità di misura**: se propone la UM de la Familia;  
**nota dettaglio**: es un campo de notas libre.  
También hay campos calculados:  
**quantità totale**: se reporta la suma de las Cantidades de Período de la segunda cuadrícula;  
**importo totale**: se reporta la suma de los Importes de Período de la segunda cuadrícula;  
**prezzo medio unitario**: se inserta el resultado de la operación *Cantidad total / Importe total*.  

En la segunda cuadrícula, se reporta el *Detalle* del [Tipo de período (Tipo Periodo)](/docs/configurations/tables/crm/sales-forecast/period-type) asociado al [Tipo de pronóstico de ventas (Tipo previsione di vendita)](/docs/configurations/tables/crm/sales-forecast/sales-forecast-type) seleccionado. Además, será posible indicar una **Cantidad** y un **Importe** de período para cada línea. Estos datos, sumados, formarán el **Importe Total** y la **Cantidad Total** de la primera cuadrícula.