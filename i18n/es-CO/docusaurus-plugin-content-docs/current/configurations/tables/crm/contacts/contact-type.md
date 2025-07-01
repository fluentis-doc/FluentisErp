---
title: Tipo de contacto
sidebar_position: 1
---

Es una tabla que permite definir los **Tipos de Contacto** en lo que respecta a los contactos del CRM, de manera que se puedan categorizar.  
Está compuesta por una parte de filtro donde se puede buscar a través del código o la descripción del tipo, y por una cuadrícula donde se enumerarán todos los tipos de contacto ingresados.  
Dentro de este formulario, también es posible agregar nuevos tipos de contacto en la cuadrícula, haciendo clic en el botón ![](/img/neutral/common/new.png) Nuevo: de esta manera, se añadirá una nueva fila en la cuadrícula donde se ingresará el código y la descripción del nuevo tipo.  
Para cada contacto también es posible definir:  
- La tipología, seleccionando desde la cuadrícula una opción entre Contacto, Prospecto, Lead, Oportunidad, Cliente, Proveedor;  
- Las pestañas que deben ser visualizadas para ese tipo de contacto entre: Actividades, Referencias, Direcciones, Notas, Gestión de Documentos, Informes de Visitas, Categoría Comercial, Zona, Agentes, Boletín informativo, Pago, Ofertas, Órdenes de venta, Nota de entrega de venta, Actividades de servicio, Datos adicionales, Horario de Apertura, Competidores, Llamada telefónica, Campañas de Marketing, Lista de precios.

Para cada tipología de contacto también es posible definir 

## Tipo de contacto Rol 

Es decir, para los usuarios individuales de Fluentis (o los grupos de usuarios definidos en función de los Roles) es posible definir qué pestañas pueden ser visualizadas. Para cada Tipo de contacto Rol es necesario definir:  
**Fecha de creación**: es la fecha de creación del tipo de contacto Rol;  
**Rol**: hace referencia a la tabla de roles de los usuarios de Fluentis;  
**Usuario**: hace referencia a la tabla de usuarios de Fluentis.  
**Pestañas habilitadas para Rol/Usuario**: qué pestañas puede visualizar y gestionar entre las presentes, como: Actividades, Dirección, Agentes, Categoría comercial, etc.  

## Datos adicionales

También es posible definir para cada tipo de contacto algunos [Datos adicionales](/docs/configurations/utility/extra-data/extradata/search-extradata/), que deben ser propuestos para los contactos que presentan dicha tipología (para más información sobre los Datos adicionales, consulte la sección correspondiente de esta guía).

## Tubería de contacto

Lista de los estados disponibles para el tipo de contacto, configurados por el usuario.  
Si el contacto tiene un flujo de trabajo asociado, y el estado del flujo de trabajo coincide con uno de los estados disponibles para el Tipo de contacto, el campo "Tubería de contacto" en el registro del contacto se actualizará automáticamente.  
Por lo tanto, con cada cambio de estado del flujo de trabajo, si hay una correspondencia, se actualizará automáticamente el campo "Tubería de contacto". De esta manera, el flujo de trabajo y el campo Tubería de contacto en el registro del contacto estarán siempre alineados.