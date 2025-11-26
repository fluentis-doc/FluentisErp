---
title: Búsqueda de Contactos CRM
sidebar_position: 1
ai_generated: true
---

El módulo de Contactos permite al operador gestionar la información básica<!-- anagrafica --> de los contactos del CRM<!-- CRM -->. Se encuentra dentro del área CRM y permite gestionar las actividades sobre el contacto, el flujo operativo de gestión del contacto, sus referencias, los agentes asociados y las ofertas presentadas.
Los contactos del CRM cuentan con un registro propio, diferente al de los contactos de Fluentis, pero al cual se pueden vincular en el momento en que un contacto del CRM se convierta en cliente de pleno derecho.

El procedimiento de **Búsqueda de Contactos<!-- Ricerca Contatti -->** ha sido diseñado para permitir al usuario buscar fácilmente los contactos del CRM<!-- CRM --> ya ingresados, con el objetivo de visualizarlos, modificarlos y eventualmente eliminarlos.
Con la ayuda de los filtros se puede visualizar: un solo contacto (**Nombre**), varios contactos que pertenecen al mismo tipo ([**Tipo de Contacto**](/docs/configurations/tables/crm/contacts/contact-type/)), varios contactos que pertenecen a la misma categoría comercial ([**Categoría comercial**](/docs/configurations/tables/crm/contacts/commercial-category/)). También es posible filtrar por el **Agente principal** indicado en el Contacto, al cual también están vinculados los filtros relacionados con los **Competidores** y el **Sector de Uso**, o por otros filtros.

Al hacer clic en **Buscar<!-- Ricerca -->** en la ribbon bar es posible visualizar los contactos que han sido importados o ingresados manualmente, junto con sus características.
El ícono a la izquierda que representa una persona es de color gris si el sujeto aún es un contacto, pero se volverá verde cuando sea cliente.
En la parte superior es posible filtrar la búsqueda según las características preferidas. Al hacer clic en el **+** a la izquierda de la fila, se pueden visualizar más detalles del contacto.
Para abrir los detalles de un contacto, basta con seleccionarlo y hacer doble clic con el mouse.

A la derecha de la cuadrícula hay dos etiquetas:
- **Mapa<!-- Map -->**: esta función permite visualizar los Contactos en el mapa. Para la visualización de los Contactos CRM<!-- Contatti CRM --> en el Mapa, se busca primero la existencia de una dirección, luego la existencia de Latitud y Longitud. En el primer caso, al hacer clic en el pin del Mapa, se mostrarán el Nombre de la compañía y la Dirección, en el segundo caso solo el Nombre de la compañía.
- **Embudo de calidad de contacto<!-- Funnel per qualità contatto -->**: en esta sección se muestra gráficamente el avance de la gestión de contactos basado en la [Calidad](/docs/configurations/tables/crm/contacts/contact-quality).

#### Botón específico<!-- Pulsante specifico -->
> **Conversión a cliente**: con este botón es posible convertir un contacto CRM<!-- CRM --> en un [Cliente](/docs/erp-home/registers/contacts/create-new-contact/general); los datos ingresados en el contacto serán copiados a la nueva ficha<!-- anagrafica -->; el botón está activo para los [Tipos de contacto](/docs/configurations/tables/crm/contacts/contact-type) que no tienen activada la opción *Cliente*.