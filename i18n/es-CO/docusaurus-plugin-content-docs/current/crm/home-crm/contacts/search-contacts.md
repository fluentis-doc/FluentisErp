---
title: Búsqueda de Contactos CRM (Ricerca Contatti CRM)
sidebar_position: 1
---

El módulo de Contactos permite al operador gestionar el registro de los contactos del CRM. Se encuentra dentro del área CRM y permite gestionar las actividades relacionadas con el contacto, el flujo operativo de gestión del contacto, sus referencias, los agentes vinculados y las ofertas presentadas.  
Los contactos del CRM tienen su propio registro, diferente al de los contactos de Fluentis, pero se puede vincular cuando un contacto del CRM se convierte en cliente a todos los efectos.

El procedimiento de **Búsqueda de Contactos (Ricerca Contatti)** ha sido diseñado para permitir al usuario buscar fácilmente los contactos del CRM ya ingresados, con el fin de visualizarlos, modificarlos y, en su caso, eliminarlos.  
Con la ayuda de los filtros, se puede visualizar: un solo contacto (**nome**), más contactos que pertenecen al mismo tipo ([**tipo contatto**](/docs/configurations/tables/crm/contacts/contact-type/)), más contactos que pertenecen a la misma categoría comercial ([**categoria commerciale**](/docs/configurations/tables/crm/contacts/commercial-category/)). También es posible filtrar por el **agente principale** indicado en el contacto, al cual están relacionados los filtros sobre los **concorrenti** y el **Sector de Uso (Settore d’Uso)**, o por otros filtros.  

Al hacer clic en **ricerca** en la barra de herramientas, es posible visualizar los contactos importados o ingresados manualmente, con sus características respectivas.  
El ícono a la izquierda que representa a una persona es de color gris si el sujeto aún es un contacto, pero se volverá verde cuando sea cliente.  
En la parte superior, es posible filtrar la búsqueda según las características preferidas. Al hacer clic en el **+** a la izquierda de la fila, se pueden visualizar más información del contacto. Para abrir los detalles de un contacto, basta con seleccionarlo y hacer doble clic con el mouse.

A la derecha de la cuadrícula, hay dos etiquetas:  
- **Mapa (Map)**: esta función permite visualizar los Contactos en el mapa. Para visualizar los Contactos CRM en el Mapa, primero se busca la presencia de una Dirección, luego la presencia de Latitud y Longitud. En el primer caso, al hacer clic en el pin en el Mapa, se visualizarán el Nombre de la empresa y la Dirección; en el segundo caso, solo el Nombre de la empresa.  
- **funnel per qualità contatto**: en esta sección se visualiza gráficamente la tendencia de la gestión de contactos basada en la [Calidad (Qualità)](/docs/configurations/tables/crm/contacts/contact-quality).

#### Botón específico (Pulsante specifico)  
> **conversione a cliente**: con este botón es posible convertir un contacto CRM en un [Cliente (Cliente)](/docs/erp-home/registers/contacts/create-new-contact/general); los datos ingresados en el contacto se copiarán en el nuevo registro; el botón está activo para los [Tipos de contacto (Tipi contatto)](/docs/configurations/tables/crm/contacts/contact-type) que no tienen activado el indicador *Cliente*.