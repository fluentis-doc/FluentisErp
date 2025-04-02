---
title: parametri differenze inventariali
sidebar_position: 3
---

:::important ¿Para qué sirve? (A cosa serve)
La introducción a los parámetros de las diferencias inventariales de Fluentis es fundamental para garantizar un efectivo alineamiento entre los inventarios físicos y lógicos dentro del almacén. Esta funcionalidad permite a los operadores gestionar y registrar las discrepancias identificadas de manera sistemática, asegurando que cada movimiento de almacén sea rastreado y contabilizado con precisión.

Los parámetros de las diferencias inventariales se encuentran en la sección de configuración y permiten establecer las causales de almacén que se utilizarán durante el proceso de cálculo de las diferencias. Cada almacén puede tener configuraciones personalizadas, donde es necesario establecer una causal de carga para las rectificaciones inventariales positivas y una causal de descarga para las rectificaciones negativas. Además, el sistema automatiza la generación de registros de compensación, lo que simplifica la gestión de cualquier variación en los inventarios.

En el procedimiento de diferencias inventariales, Fluentis ofrece la opción de calcular las diferencias a una fecha específica, permitiendo una gestión retroactiva y un registro preciso de los inventarios.
:::

El formulario permite establecer, para cada almacén, las causales que deberán ser utilizadas automáticamente por la aplicación en caso de creación automática de registros de almacén mediante el uso del procedimiento *differenze inventariali*. Permite calcular la diferencia entre la cantidad lógica y la cantidad física, es decir, la que se detecta en el inventario físico, y generar automáticamente los registros de compensación de las diferencias entre la cantidad lógica y la cantidad física.

Las causales de almacén que se pueden establecer en esta pestaña son exclusivamente aquellas que tienen el indicador *Gestión de inventario físico (Gestione inventario fisico)* activo en las [Causales de almacén (Causali di magazzino)](/docs/configurations/tables/logistics/warehouse-templates). Es necesario establecer, para cada almacén, una causal de carga de rectificación inventarial y una causal de descarga de rectificación inventarial.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).