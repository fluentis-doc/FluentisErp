---
title: creazione fattura di vendita
sidebar_position: 1
---

En el área de filtro es posible indicar una serie de filtros para buscar los proyectos de manera más específica.

Después de haber configurado los filtros, al presionar el botón **ricerca** en la barra de ribbon aparecerán los resultados en la cuadrícula.  
En la parte inferior se pueden indicar los parámetros a utilizar para ejecutar el procedimiento:

**tipo fattura**: contiene la tipología de factura a crear, si no está configurada en la tabla [Tipos de proyecto (Tipi progetto)](/docs/configurations/tables/project-management/project-type/);  

**data creazione**: contiene la fecha en la cual se creará la factura;  

**raggruppa gli articoli nella fattura**: con este indicador, en la factura habrá agrupamiento por artículo;  

**aggiungi progetto di riferimento**: este indicador añade el proyecto de origen a la factura;  

**Creación de factura de anticipo (Creazione della fattura di acconto)**: este indicador permite generar una eventual factura de anticipo.  

También es posible elegir si convertir la moneda con el indicador **conversione valuta**, el cual habilita los campos **divisa**, **arrotondamento**, **cambio valuta**.

Para ejecutar el procedimiento, una vez configurados los parámetros, basta con seleccionar la fila del proyecto en la cuadrícula y hacer clic en el botón **trasferimento** en la barra de ribbon.

Los resultados del procedimiento son visibles en la pestaña **ripristina**. En esta, al presionar el botón **ricerca** en la barra de ribbon, se visualizan las operaciones realizadas. Al seleccionar la fila del usuario que realizó el procedimiento, las cuadrículas de abajo **fatture** y **articoli** muestran los detalles de la operación.  
Si se desea realizar el **rollback** del procedimiento, seleccione la fila elegida y haga clic en **ripristina** en la barra de ribbon.