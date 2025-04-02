---
title: Nueva Lista de Distribución (Nuova Lista di Distribuzione)
sidebar_position: 3
---

El procedimiento para crear una nueva **lista di distribuzione** permite definir cuáles serán las características de la lista que luego se utilizará en el procedimiento de envío de las [Boletines (Newsletter)](/docs/crm/budget-marketing-automation/newsletter/search-newsletter/), además de determinar cuáles serán los **contatti crm** que formarán parte de dicha lista. Para crear una nueva lista, es necesario hacer clic en el botón ![](/img/neutral/common/new.png) Nuevo desde la máscara de búsqueda de listas de distribución.

El formulario consta de dos secciones.

La sección superior permite definir la siguiente información:

**nome**: corresponde al código identificativo de la lista de distribución;  

**data creazione**: es la fecha en que se creó la lista;  

**nota**: campo alfanumérico que permite ingresar notas libres;  

**autore**: se indica el usuario que generó la lista;  

**tipo**: permite definir el tipo de lista de distribución como **Estática (Statica)** o **Dinámica (Dinamica)**.


La sección inferior se diferencia dependiendo de si la lista es de tipo Estática o de tipo Dinámica.

## ***LISTA ESTÁTICA (LISTA STATICA)***

La sección se divide en 2 pestañas.

**Pestaña Asignados (Tab Assegnato)**

En la pestaña Asignados se muestran los sujetos que ya han sido asignados a la lista de distribución.

![](/img/it-it/applications/crm/distribution-list/assigned.png)

**Pestaña No Asignados (Tab Non Assegnato)**

En la pestaña No Asignados se muestran los contactos que aún no han sido asignados a la lista en cuestión.  
La pestaña se divide en 2 secciones.  
Una primera sección de Filtro, donde es posible establecer una serie de filtros respecto a los contactos a extraer.

![](/img/it-it/applications/crm/distribution-list/not-assigned.png)

La segunda sección, en cambio, la cuadrícula de resultados, muestra los sujetos extraídos en base a los filtros establecidos previamente después de presionar el botón Buscar ![](/img/neutral/common/search.png).  
El botón Asignar ![](/img/neutral/common/assign-row.png) mueve el contacto de la pestaña **non assegnato** a la pestaña **assegnato**, insertando así el contacto en la Lista de distribución.

**raggruppa per contatto**: permite agrupar los sujetos (contactos y referencias) en una única línea según el contacto al que pertenecen.


## ***LISTA DINÁMICA (LISTA DINAMICA)***

La sección se divide en 2 pestañas.

**Pestaña Configuración (Tab Configurazione)**

Deben indicarse inicialmente estos 3 datos:  
**area**: sirve para definir el área de Fluentis de donde se recuperarán los datos;  
**modulo**: se refiere al Área seleccionada anteriormente;  
**sql query**: debe seleccionarse la Consulta SQL previamente creada en Fluentis (para más información consulte la sección Fluentis Query Studio).  
En la cuadrícula inferior se muestran las propiedades y cómo han sido mapeadas.

![](/img/it-it/applications/crm/distribution-list/configuration.png)

**Pestaña Mapeo (Tab Mapping)**

En esta pestaña se muestran en tiempo real los contactos procesados e insertados en la lista de distribución según la Consulta SQL indicada en la pestaña Configuración.

![](/img/it-it/applications/crm/distribution-list/mapping.png)