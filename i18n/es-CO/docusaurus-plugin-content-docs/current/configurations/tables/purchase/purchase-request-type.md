---
title: Tipos de solicitud de compra (Tipi richiesta di acquisto)
sidebar_position: 1
---

Esta tabla es fundamental para definir los diversos tipos de RDA disponibles, cada uno con sus propias características. Se puede acceder desde *Configuración (Configurazione) > Tablas (Tabelle) > Compras (Acquisti) > Tipos de solicitud de compra (Tipi richiesta di acquisto)*.

Los campos presentes son:    

**codice/descrizione**: campos obligatorios para identificar el tipo de solicitud.  

**numerazione**: seleccionar la [Numeración (Numerazione)](/docs/configurations/tables/fluentis-numerations) a asociar con el tipo de solicitud.  

**centro di costo**: centro de costo a proponer en la creación de la solicitud de compra. Puede ser dejado vacío si no se utiliza el módulo de control de gestión.  

**Almacén/Descripción del almacén (Magazzino/Descrizione magazzino)**: almacén por defecto a utilizar en la creación de la solicitud de compra.  

**controlla disponibilità**: si está configurado, las solicitudes de compra creadas con este tipo se utilizan para el cálculo de disponibilidad y son visibles en el formulario de [Análisis de disponibilidad (Analisi disponibilità)](/docs/erp-home/registers/items/availability-analysis).         

**stampa**: en este campo es posible elegir la impresión por defecto a utilizar (se recuerda que, para imprimir el informe por defecto, en el momento de la impresión será necesario seleccionar la opción *stampe multiple*); en el siguiente campo se puede indicar un **numero di copie** a imprimir.    

**cash flow**: si este indicador está activo, este tipo de RDA contribuirá al cálculo del flujo de efectivo.  

**tipo richiesta di offerta**: en este campo es necesario indicar qué [Tipo de RDO (Tipo RDO)](/docs/configurations/tables/purchase/purchase-offer-type) crear a partir de este tipo de RDA.