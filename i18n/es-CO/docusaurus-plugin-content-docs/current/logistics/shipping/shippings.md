---
title: spedizioni
sidebar_position: 3
---

:::important ¿Para qué sirve? (A cosa serve)
La gestión de los **spedizioni** en Fluentis representa un avance significativo en la gestión logística y operativa para las empresas que utilizan esta plataforma ERP. Esta ha sido diseñada para optimizar y simplificar el proceso de envío, ofreciendo un control más eficiente e integrado de todas las actividades logísticas.  
El sistema de gestión de envíos en Fluentis también introduce la posibilidad de crear groupage, un proceso logístico a través del cual los envíos de diferentes clientes o proveedores se agrupan en una única unidad de transporte.

Este método de consolidación ofrece varios beneficios:

- **Reducción de Costos (Riduzione dei Costi)**: La creación de groupage permite optimizar el uso de los espacios de carga y reducir los costos de transporte por unidad de mercancía enviada. Es particularmente ventajoso para las empresas que envían mercancías en cantidades inferiores a la carga completa.
- **Eficiencia Operativa (Efficienza Operativa)**: Consolidar más envíos en una única carga simplifica la gestión de las operaciones y reduce los tiempos de tránsito, mejorando la eficiencia general del proceso logístico.
- **Flexibilidad y Escalabilidad (Flessibilità e Scalabilità)**: Las empresas pueden adaptar fácilmente su estrategia de envío según la demanda y las variaciones del mercado, aprovechando la flexibilidad ofrecida por los groupages para gestionar picos de envío o tener más control sobre los tiempos de entrega.

En resumen, esta funcionalidad para la gestión de envíos de Fluentis ofrece a las empresas una herramienta poderosa para optimizar la logística, mejorar la eficiencia y reducir costos, manteniendo al mismo tiempo un alto nivel de servicio y satisfacción del cliente.
:::

El formulario **Nuevo Envío (Nuova Spedizione)** se abre a través de la ruta **Logística > spedizioni > Nuevo Envío (Logistica > Spedizioni > Nuova Spedizione)** o mediante el botón **nuovo** que se encuentra en el formulario [Buscar spedizioni (Ricerca Spedizioni)](/docs/logistics/shipping/search-shippings).

En el formulario de ingreso se proponen automáticamente la **data** y el **anno** actuales, pero pueden ser modificados.

Para continuar con la creación del envío, el usuario debe ingresar los campos obligatorios:
- **Tipo de envío (Tipo di spedizione)**: indica el tipo de envío y se inserta automáticamente también el *número* del envío. Este se predefine en *Configuración > Tablas > Logística > [Tipos de envío](/docs/configurations/tables/logistics/shipping-type)*.  
- **Estado de envío (Stato di spedizione)**: predefinido en *Configuración > Tablas > Logística > [Estados de envío](/docs/configurations/tables/logistics/shipping-states)*.  
- **Transporte a través de (Trasporto tramite)**: el usuario puede elegir entre las siguientes opciones: *mittente*, *destinatario* y *vettore*.  
- **numero**: a cada documento se le asigna un número según la numeración especificada por el usuario y al tipo de envío que contiene la numeración.  
- **vettore**: permite indicar el transportista que realizará el envío.  
- **cliente**: permite indicar el cliente del envío.

El formulario contiene una serie de pestañas:

- [Cabecera (Testata)](/docs/logistics/shipping/header)

- [Groupage (Groupage)](/docs/logistics/shipping/groupage)

- [Resúmenes (Riepiloghi)](/docs/logistics/shipping/summary)