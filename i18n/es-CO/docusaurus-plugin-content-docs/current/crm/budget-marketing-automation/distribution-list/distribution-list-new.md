---
title: Nueva Lista de Distribución
sidebar_position: 3
ai_generated: true
---

El procedimiento para crear una nueva **Lista de distribución**<!-- Lista di distribuzione --> permite definir cuáles serán las características de la lista que luego se utilizará en el procedimiento de envío de las [Newsletters](/docs/crm/budget-marketing-automation/newsletter/search-newsletter/), además de definir cuáles serán los **contactos CRM** que formarán parte de dicha lista. Para crear una nueva lista es necesario hacer clic en el botón **Nuevo<!-- Nuovo -->** desde la pantalla de búsqueda de listas de distribución.

El formulario está compuesto por dos secciones.

La sección superior permite definir la siguiente información:

**Nombre**: corresponde al código identificativo de la lista de distribución<!-- lista di distribuzione -->;

**Fecha de creación<!-- Data creazione -->**: es la fecha en la que la lista fue creada;

**Nota**: campo alfanumérico que permite ingresar notas libres;

**Autor<!-- Autore -->**: se indica el usuario que generó la lista;

**Tipo**: permite definir el tipo de lista de distribución<!-- lista di distribuzione --> entre **Estática<!-- Statica -->** o **Dinámica<!-- Dinamica -->**.

El formulario inferior varía según si la lista es de tipo Estático<!-- Statico --> o de tipo Dinámico<!-- Dinamico -->.

### Lista estática<!-- Lista statica -->

La sección se divide en 2 pestañas.

#### Asignado<!-- Assegnato -->

En la pestaña Asignado<!-- Assegnato --> se muestran los sujetos que ya han sido asignados a la lista de distribución<!-- lista di distribuzione -->.

#### No Asignado<!-- Non Assegnato -->

En la pestaña No Asignado<!-- Non Assegnato --> se muestran los contactos que aún no han sido asignados a la lista en cuestión.
La pestaña se divide en 2 secciones.
Una primera sección de Filtros, donde es posible configurar una serie de filtros relativos a los contactos a extraer.

La segunda sección, la cuadrícula de resultados, muestra los sujetos extraídos en base a los filtros configurados anteriormente, luego de haber presionado el botón **Buscar<!-- Ricerca -->**.  
El botón **Asignar<!-- Assegna -->** mueve el contacto de la pestaña **No asignado<!-- Non assegnato -->** a la pestaña **Asignado<!-- Assegnato -->**, insertando así el contacto en la Lista de distribución<!-- Lista di distribuzione -->.

**Agrupar por contacto<!-- Raggruppa per contatto -->**: permite agrupar los sujetos (contactos y referencias) en una sola fila según el contacto al que pertenecen.

### Lista dinámica<!-- Lista Dinamica -->

La sección se divide en 2 pestañas.

#### Configuración<!-- Configurazione -->

Inicialmente deben indicarse estos 3 datos:
**Área**: sirve para definir el área de Fluentis en la que deben recuperarse los datos;
**Módulo**: se refiere al Área seleccionada previamente;
**Consulta Sql<!-- Sql Query -->**: debe seleccionarse la Consulta Sql previamente creada en Fluentis (para más información, consultar la sección Fluentis Query Studio)
En la cuadrícula inferior se muestran las propiedades y cómo han sido mapeadas.

![](/img/it-it/applications/crm/distribution-list/configuration.png)

#### Mapeo<!-- Mapping -->

En esta pestaña se muestran en tiempo real los contactos procesados e insertados en la lista de distribución<!-- lista di distribuzione --> según la Consulta Sql indicada en la pestaña Configuración<!-- Configurazione -->.

![](/img/it-it/applications/crm/distribution-list/mapping.png)