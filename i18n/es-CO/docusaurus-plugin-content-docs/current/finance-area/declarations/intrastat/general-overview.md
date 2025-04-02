---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo Intrastat está dedicado a la creación de declaraciones estadísticas Intrastat: está prevista tanto una gestión manual de los datos como una entrada automática en relación con los datos presentes en las facturas de compra y venta de las respectivas áreas de compras y ventas, así como una recuperación de los datos de los registros contables. Las dos modalidades son alternativas e interdependientes.  
Contabilizando las facturas afectadas con la configuración adecuada (activando, en particular, el **indicador (flag)** *Intrastat* dentro de las **causas (causali)** contables involucradas), es posible gestionar la creación automática siempre a través de los registros contables, tanto para bienes como para servicios.

Las configuraciones básicas están relacionadas con las **anagrafiche** y con los **tipos de documento** en compra y venta:  

**es necesario, de hecho, que el documento sea de tipo intracomunitario y que el registro a nombre del mismo se haya definido como sujeto Intrastat.** 

Para obtener el máximo de automatismos será necesario definir, en los registros de artículos, los códigos de nomenclatura de cada uno, así como los posibles factores de conversión para obtener la valorización automática de la unidad de medida complementaria. Es claramente necesario, en la medida de lo posible, definir dentro de los varios documentos de manera completa los datos del tipo de transporte y las condiciones de entrega.

El uso del módulo se realiza con la creación de una nueva declaración intrastat1 (para las ventas) e Intrastat2 (para las compras): se completarán los datos extrayéndolos de las facturas de compra y venta, o de los registros contables, o con la entrada manual en las secciones correspondientes.

Una vez que se completen los datos de los modelos, será posible proceder a la impresión de los modelos o al envío electrónico de los mismos con la creación del archivo previsto.

**Lista de tablas obligatorias para usar el módulo**:  

[Inicio > Tablas > Administración (Home>Tabelle>Amministrazione)] y [Inicio > Tablas > Configuraciones generales (Home>Tabelle>Impostazioni generali)] para identificar las configuraciones correctas de la gestión Intra.  

[Naturaleza de la transacción intrastat (Natura transazione intrastat)](/docs/configurations/tables/finance/nature-of-intrastat-transaction),  

[Numeración intrastat (Numerazione intrastat)](/docs/configurations/tables/fluentis-numerations),  

[Códigos de nomenclatura (Codici nomenclatura)](/docs/configurations/tables/finance/nomenclature-codes),  

[Transporte (Porto)](/docs/configurations/tables/general-settings/carriages),  

[Envíos (Spedizioni)](/docs/configurations/tables/general-settings/shipments).