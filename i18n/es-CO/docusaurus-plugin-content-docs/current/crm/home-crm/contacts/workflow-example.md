---
title: Ejemplo de Workflow de Contactos CRM
sidebar_position: 3
ai_generated: true
---

A continuación se muestra un ejemplo de Workflow creado para gestionar el customer journey<!-- customer journey -->.
Recordamos que para que sea visualizado, el Workflow debe estar incluido entre los Workflows Activos de Fluentis:    

![](/img/it-it/crm/workflows.png)

Proponemos un workflow que prevea las siguientes etapas: Start > Qualification > Prospect > Lead > Opportunity > Not qualified customer > Customer > Closed.     
La etapa Start es el estado inicial, el estado Closed es el final.    
En la imagen que sigue se ha seleccionado la etapa Start. En la cuadrícula de la derecha, para esta etapa, son visibles diferentes datos, como el Código (que debe ser único para cada etapa), posibles derechos de visualización, eventuales coloraciones válidas solo para esa etapa. Para la misma, se han insertado también dos actividades obligatorias (debido al check *Obligatorio*: sin la ejecución de esta actividad no será posible pasar a la siguiente etapa): el ingreso de la ficha en el CRM empresarial y la primera llamada de presentación. Será posible agregar otras actividades dentro del contacto CRM<!-- contatto CRM -->, si están disponibles; el hecho de no ingresarlas en esta cuadrícula no impide su uso.   

![](/img/it-it/crm/contactworkflow.png)