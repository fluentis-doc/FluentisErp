---
title: Creación de Factura de Venta
sidebar_position: 1
ai_generated: true
---

En el área de filtro es posible indicar una serie de filtros para buscar los proyectos<!-- progetti --> de manera más dirigida.

Después de configurar los filtros, al presionar el botón **Buscar<!-- Ricerca -->** en la ribbon bar, aparecerán los resultados en la cuadrícula.
En la parte inferior se pueden indicar los parámetros a utilizar para ejecutar el procedimiento:

**Tipo de factura<!-- Tipo fattura -->**: contiene la tipología de factura<!-- fattura --> a crear, si no está configurada en la tabla [Tipos de proyecto<!-- Tipi progetto -->](/docs/configurations/tables/project-management/project-type/);

**Fecha de creación<!-- Data creazione -->**: contiene la fecha en la que se creará la factura<!-- fattura -->;

**Agrupar los artículos en la factura<!-- Raggruppa gli articoli nella fattura -->**: con esta opción, en la factura<!-- fattura --> habrá agrupamiento por artículo;

**Agregar Proyecto de referencia<!-- Aggiungi Progetto di riferimento -->**: esta opción añade el proyecto<!-- progetto --> de origen a la factura<!-- fattura -->;

**Creación de factura de anticipo<!-- Creazione della fattura di acconto -->**: esta opción permite generar una posible factura de anticipo<!-- fattura di acconto -->.

También es posible elegir si convertir la moneda con la opción **Conversión de Moneda<!-- Conversione Valuta -->**, que habilita los campos **Divisa**, **Redondeo<!-- Arrotondamento -->**, **Tipo de cambio<!-- Cambio valuta -->**.

Para ejecutar el procedimiento, una vez configurados los parámetros, basta con seleccionar la fila del proyecto<!-- progetto --> en la cuadrícula y hacer clic en el botón **Transferencia<!-- Trasferimento -->** en la ribbon bar.

Los resultados del procedimiento son visibles en la pestaña **Restaurar<!-- Ripristina -->**. En esta, al presionar el botón **Buscar<!-- Ricerca -->** en la ribbon bar, se visualizan las operaciones realizadas. Al seleccionar la fila del usuario que ejecutó el procedimiento, las cuadrículas inferiores **Facturas<!-- Fatture -->** y **Artículos<!-- Articoli -->** muestran los detalles de la operación.
Si se desea realizar el **Rollback** del procedimiento, seleccione la fila deseada y haga clic en **Restaurar<!-- Ripristina -->** en la ribbon bar.