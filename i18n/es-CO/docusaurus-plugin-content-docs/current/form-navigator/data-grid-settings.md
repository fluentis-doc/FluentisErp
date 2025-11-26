---
title: Form Navigator - Configuración de datos de grillas
sidebar_position: 3
ai_generated: true
---

Para definir que la grilla<!-- griglia --> debe configurarse con la opción de **carga completa de datos<!-- caricamento completo dei dati -->**, siga los siguientes pasos:

**1.** abra a la izquierda el *Form navigator*, abra el *Results Widgets*, luego la definición de la grilla<!-- griglia --> y seleccione el objeto *Grid*: aparecerá en la parte inferior el *Grid Control*, donde puede seleccionar la opción *Load all data* con el número máximo de filas a considerar (*Limit rows number*).

**2.** vuelva a ejecutar la búsqueda en la grilla<!-- griglia -->, para cargar todos los datos.

**3.** esta opción debe guardarse en un perfil, que eventualmente podrá ser almacenado y recuperado cuando sea necesario: tenga en cuenta que la carga de todos los datos ralentizará los tiempos de carga de los datos<!-- caricamento dei dati -->:
 
![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image01.png)  

Una vez definida esta modalidad de gestión de datos, se presentan algunas opciones de **totalización/gestión de datos<!-- totalizzazione/gestione dei dati -->**:

Con clic derecho sobre el encabezado de la grilla<!-- griglia --> se abre el menú desde donde se elige la opción *Panel de resumen de totales<!-- Pannello riepilogo totali -->*, luego clic derecho fuera de la grilla<!-- griglia -->, pero en correspondencia con la columna a totalizar, para elegir si mostrar: Suma, Mín, Máx, Contar, Promedio:

![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image02.png)

Se puede configurar esta totalización también a nivel de grupo, eligiendo siempre desde el menú la opción *Agrupar por esta columna<!-- Raggruppa per questa colonna -->*  
![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image03.png)  

Si se agrupa por un campo de fecha en una grilla<!-- griglia --> con carga total, al presionar el botón derecho sobre la etiqueta de agrupamiento estará disponible la opción *Agrupar intervalo<!-- Raggruppa intervallo -->* con las siguientes opciones: Ninguno (por lo tanto cada fecha será un grupo diferente), ‘Día’, ‘Mes’, ‘Año’, ‘Inteligente’, donde esta última mostrará los días pasados, la semana anterior y luego retroactivamente los meses:

![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image04.png)  

Otra opción disponible con estos grupos en grillas<!-- griglia --> de carga total es la ordenación por la suma configurada, en sentido ascendente o descendente:  

![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image05.png)  

Obteniendo así un resultado como este:  
![](/img/it-it/guide/panels/form-navigator/data-grid-settings/image06.png)