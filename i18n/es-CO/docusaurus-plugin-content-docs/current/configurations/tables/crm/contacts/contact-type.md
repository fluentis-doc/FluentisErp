---
title: tipo contatto
sidebar_position: 1
---

Es una tabla que permite definir los **Tipos de Contacto (Tipi Contatto)** en lo que respecta a los contactos del CRM, de manera que se puedan categorizar.  
Está compuesta por una parte de filtro donde se puede buscar a través del código o la descripción del tipo, y por una cuadrícula donde se enumerarán todos los tipos de contacto ingresados.  
Dentro de este formulario, también es posible agregar nuevos tipos de contacto en la cuadrícula, haciendo clic en el botón ![](/img/neutral/common/new.png) Nuevo (Nuovo): de esta manera, se añadirá una nueva fila en la cuadrícula donde se ingresará el código y la descripción del nuevo tipo.  
Para cada contacto también es posible definir:  
- La tipología, seleccionando desde la cuadrícula una opción entre Contacto (Contatto), Prospecto (Prospect), Lead, Oportunidad (Opportunità), Cliente (Cliente), Proveedor (Fornitore);  
- Las pestañas que deben ser visualizadas para ese tipo de contacto entre: Actividades (Attività), Referencias (Riferimenti), Direcciones (Indirizzi), Notas (Note), Gestión Documental (Gestione Documentale), Informes de visita (Visit reports), Categoría Comercial (Categoria Commerciale), Zona, Agentes, Boletines (Newsletter), Pago (Pagamento), Ofertas (Offerte), Pedidos del Cliente (Ordini Cliente), DDT de venta (DDT di vendita), Intervenciones (Interventi), Datos adicionales (Extra data), Horario de Apertura (Orario Apertura), Competidores (Concorrenti), Llamadas (Telefonata), Campañas de Marketing (Campagne Marketing), Listas (Listini).

Para cada tipología de contacto también es posible definir 

## Tipo de contacto Rol (Tipo di contatto Ruolo)

Es decir, para los usuarios individuales de Fluentis (o los grupos de usuarios definidos en función de los Roles) es posible definir qué pestañas pueden ser visualizadas. Para cada Tipo de contacto Rol es necesario definir:  
**data creazione**: es la fecha de creación del tipo de contacto Rol;  
**ruolo**: hace referencia a la tabla de roles de los usuarios de Fluentis;  
**operatore**: hace referencia a la tabla de usuarios de Fluentis.  
**Pestañas habilitadas para Rol/Operador (Tab abilitate per Ruolo/Operatore)**: qué pestañas puede visualizar y gestionar entre las presentes, como: Actividades (Attività), Dirección (Indirizzo), Agentes (Agenti), Categoría comercial (Categoria commerciale), etc.  

## Datos adicionales (Extra data)

También es posible definir para cada tipo de contacto algunos [Datos adicionales (Extra data)](/docs/configurations/utility/extra-data/extradata/search-extradata/), que deben ser propuestos para los contactos que presentan dicha tipología (para más información sobre los Datos adicionales, consulte la sección correspondiente de esta guía).

## Pipeline de Contacto (Pipeline Contatto)

Lista de los estados disponibles para el tipo de contacto, configurados por el usuario.  
Si el contacto tiene un flujo de trabajo (workflow) asociado, y el estado del flujo de trabajo coincide con uno de los estados disponibles para el Tipo de contacto, el campo "Pipeline de contacto (Pipeline contatto)" en el registro del contacto se actualizará automáticamente.  
Por lo tanto, con cada cambio de estado del flujo de trabajo, si hay una correspondencia, se actualizará automáticamente el campo "Pipeline de Contacto". De esta manera, el flujo de trabajo y el campo Pipeline de contacto en el registro del contacto estarán siempre alineados.