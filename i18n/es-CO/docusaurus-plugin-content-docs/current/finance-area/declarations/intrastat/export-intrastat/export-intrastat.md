---
title: Exportación de archivo telemático
sidebar_position: 1
ai_generated: true
---

A través del botón **Exportar a archivo<!-- Esporta su File -->**, ubicado dentro de los modelos en la ribbon bar y también en el formulario de búsqueda<!-- form di ricerca -->, se crea el archivo telemático necesario para el envío de los propios modelos:

- a la aduana (canal *Intraweb*), o como alternativa
- a la Agencia Tributaria (canal *Entratel*)

Es posible configurar, también desde la interfaz, el tipo de archivo deseado accediendo al formulario **Parámetros generales<!-- Parametri generali -->**, y abriendo el árbol de navegación de la capa de negocio hasta el área de Finanzas<!-- Finance -->.

En el detalle del parámetro de exportación de intrastat<!-- esportazione intrastat -->, la bandera ***Valor<!-- Valore -->*** asume el siguiente significado: 0 = bandera desactivada (*False*) = Intraweb; 1 = bandera activada (*True*) = Entratel.

![](/img/it-it/finance-area/declarations/intrastat/export/FI_GeneralParameters.png)

El archivo telemático se archiva automáticamente en el gestor documental y puede ser descargado desde allí como todos los demás archivos exportados (botón con el clip).
Paralelamente, también se prevé una exportación a una carpeta externa controlada por el conector Bizlink correspondiente (código *Intrastat*) y, por lo tanto, es posible personalizar la ruta de guardado.

:::tip Info<!-- Info -->
La diferencia en el archivo entre la versión Intraweb y Entratel se refiere al track record de cabecera, donde se observa, para la versión Entratel, el código inicial ZENT.
También el nombre del archivo puede ser diferente, típicamente scambi.cee para intraweb.

También es posible gestionar un **código personalizado** para el track record de cabecera a través del campo **Código identificativo de Usuario habilitado<!-- Codice identificativo Utente abilitato -->** presente dentro de los [**Parámetros generales de contabilidad<!-- Parametri generali di contabilità -->**](/docs/configurations/parameters/finance/accounting-parameters), sección *Intrastat*
:::