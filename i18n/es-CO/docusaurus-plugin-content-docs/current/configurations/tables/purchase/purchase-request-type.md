---
title: Tipos de solicitud de compra 
sidebar_position: 1
---

Esta tabla es fundamental para definir los diversos tipos de solicitud de compra disponibles, cada uno con sus propias características. Se puede acceder desde *Configuración > Tablas > Compras > Tipos de solicitud de compra*.

Los campos presentes son:    

**Código/Descripción**: campos obligatorios para identificar el tipo de solicitud.  

**Numeración**: seleccionar la [Numeración](/docs/configurations/tables/fluentis-numerations) a asociar con el tipo de solicitud.  

**Centro de costo**: centro de costo a proponer en la creación de la solicitud de compra. Puede ser dejado vacío si no se utiliza el módulo de control de gestión.  

**Almacén/Descripción del almacén**: almacén por defecto a utilizar en la creación de la solicitud de compra.  

**Control de disponibilidad**: si está configurado, las solicitudes de compra creadas con este tipo se utilizan para el cálculo de disponibilidad y son visibles en el formulario de [Análisis de disponibilidad](/docs/erp-home/registers/items/availability-analysis).         

**Imprimir Informe**: en este campo es posible elegir la impresión por defecto a utilizar (se recuesolicitud de compra que, para imprimir el informe por defecto, en el momento de la impresión será necesario seleccionar la opción *Múltiples informes*); en el siguiente campo se puede indicar un **Número de copias** a imprimir.    

**Flujo de Caja**: si este indicador está activo, este tipo de solicitud de compra contribuirá al cálculo del flujo de efectivo.  

**Tipo de Solicitud de Oferta**: en este campo es necesario indicar qué [Tipo de solicitud de oferta](/docs/configurations/tables/purchase/purchase-offer-type) crear a partir de este tipo de solicitud de compra.