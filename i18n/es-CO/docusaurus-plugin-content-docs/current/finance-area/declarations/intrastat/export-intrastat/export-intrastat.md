---
title: Exportación de archivo telemático (Esportazione tracciato telematico)
sidebar_position: 1
---

A través del botón **esporta su file**, ubicado en los modelos en la barra de herramientas y también en el formulario de búsqueda, se crea el archivo telemático necesario para el envío de los mismos modelos:

- a la aduana (canal *Intraweb*), o alternativamente
- a la Agencia de impuestos (canal *Entratel*)

Es posible establecer, también desde la interfaz, el tipo de archivo deseado accediendo al formulario **parametri generali**, luego abriendo el árbol de navegación de la capa de negocio hasta el área de Finanzas (Finance).

En el detalle del parámetro de exportación intrastat, el indicador **valore*** asume el siguiente significado: 0 = indicador desactivado (*False*) = Intraweb; 1 = indicador activado (*True*) = Entratel.

![](/img/it-it/finance-area/declarations/intrastat/export/FI_GeneralParameters.png)

El archivo del archivo telemático se archiva automáticamente en el documental y puede ser descargado desde allí como todos los demás archivos exportados (botón con el clip).  
Paralelamente, también se prevé una exportación a una carpeta externa controlada por el conector Bizlink (código *Intrastat*), por lo que es posible personalizar la ruta de guardado.

:::tip Info
La diferencia en el archivo entre la versión Intraweb y Entratel se refiere al registro de encabezado donde se nota, para la versión Entratel, el código inicial ZENT.  
También el nombre del archivo puede ser diferente, típicamente scambi.cee para Intraweb.

Es posible también gestionar un **código personalizado (codice personalizzato)** para el registro de encabezado a través del campo **codice identificativo utente abilitato** presente dentro de los [**Parámetros generales de contabilidad (Parametri generali di contabilità)**](/docs/configurations/parameters/finance/accounting-parameters), sección *Intrastat*.
:::