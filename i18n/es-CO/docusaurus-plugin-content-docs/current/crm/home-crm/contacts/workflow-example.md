---
title: Ejemplo de Workflow de Contactos CRM (Esempio Workflow Contatti CRM)
sidebar_position: 3
---

A continuación se ilustra un ejemplo de Workflow creado para gestionar el customer journey.  
Recordamos que para ser visualizado, el Workflow debe estar incluido entre los Workflows Activos de Fluentis:  

![](/img/it-it/crm/workflows.png)

Proponemos un workflow que contemple los siguientes estadios: Inicio (Start) > Calificación (Qualification) > Prospecto (Prospect) > Cliente potencial (Lead) > Oportunidad (Opportunity) > Cliente no calificado (Not qualified customer) > Cliente (Customer) > Cerrado (Closed).  
El estadio Inicio (Start) es el estado inicial, y el estado Cerrado (Closed) es el final.  
En la imagen que sigue se selecciona el estadio Inicio (Start). En la cuadrícula de la derecha, para este estadio, son visibles varios datos, como el Código (que debe ser único para cada estadio), derechos de visualización, colores válidos solo para ese estadio. Para este también se han insertado dos actividades obligatorias (debido al indicador *obbligatorio*: sin la realización de esta actividad no será posible pasar al siguiente estadio): la inserción de la anagráfica en el CRM empresarial y la primera llamada de conocimiento. Será posible insertar otras actividades dentro del contacto CRM, si están disponibles; la no inserción en esta cuadrícula no impide su uso.  

![](/img/it-it/crm/contactworkflow.png)