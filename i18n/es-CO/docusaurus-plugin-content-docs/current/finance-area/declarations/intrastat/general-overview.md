---
title: Introducción
sidebar_position: 1
ai_generated: true
---

El módulo Intrastat está dedicado a la creación de declaraciones estadísticas Intrastat: se prevé tanto una gestión manual de los datos como un ingreso automático en relación con los datos presentes en las facturas de compra<!-- fatture di acquisto --> y de venta<!-- vendite --> de las respectivas áreas de compras<!-- acquisti --> y ventas<!-- vendite -->, así como una recuperación de los datos desde los asientos contables<!-- registrazioni contabili -->. Los dos modos son alternativos e interdependientes.
Contabilizando las facturas implicadas con las configuraciones adecuadas (en particular activando el **flag** *Intrastat* dentro de las **causales**<!-- causali --> contables involucradas) es posible gestionar la creación automática, siempre a través de los asientos contables<!-- registrazioni contabili -->, tanto para bienes como para servicios.

La configuración básica está vinculada a las **anagráficas**<!-- anagrafiche --> y a los **tipos de documento** en compras<!-- acquisto --> y ventas<!-- vendita -->: 

**es necesario, de hecho, que el documento sea de tipo intracomunitario y que la anagráfica<!-- anagrafica --> titular de este haya sido definida como sujeto Intrastat.**

Para obtener el máximo de automatización será necesario definir, en las fichas de artículo<!-- anagrafiche articoli -->, los códigos de nomenclatura de cada uno así como los posibles factores de conversión para obtener la valorización automática de la unidad de medida complementaria. Claramente es necesario, cuando sea posible, definir dentro de los diferentes documentos de forma completa los datos del tipo de transporte y de las condiciones de entrega.

El uso del módulo se realiza mediante la creación de una nueva declaración intrastat1 (para las ventas<!-- vendite -->) e Intrastat2 (para las compras<!-- acquisti -->): se completarán los datos tomándolos de las facturas de compra<!-- fatture acquisto --> y venta<!-- vendite -->, o bien de los asientos contables<!-- registrazioni contabili -->, o bien con la inserción manual en las secciones correspondientes.

Una vez completados los datos de los modelos, será posible proceder a la impresión de los modelos o al envío telemático de los mismos con la creación del archivo previsto.

**Lista de tablas obligatorias para utilizar el módulo**:

[Inicio>Tablas>Administración]<!-- Home>Tabelle>Amministrazione --> y [Inicio>Tablas>Configuraciones generales]<!-- Home>Tabelle>Impostazioni generali --> para identificar la correcta configuración de la gestión Intra.

[Naturaleza de la transacción Intrastat<!-- Natura transazione intrastat -->](/docs/configurations/tables/finance/nature-of-intrastat-transaction),

[Numeración Intrastat<!-- Numerazione intrastat -->](/docs/configurations/tables/fluentis-numerations),

[Códigos de nomenclatura<!-- Codici nomenclatura -->](/docs/configurations/tables/finance/nomenclature-codes),

[Puerto<!-- Porto -->](/docs/configurations/tables/general-settings/carriages),

[Envíos<!-- Spedizioni -->](/docs/configurations/tables/general-settings/shipments).