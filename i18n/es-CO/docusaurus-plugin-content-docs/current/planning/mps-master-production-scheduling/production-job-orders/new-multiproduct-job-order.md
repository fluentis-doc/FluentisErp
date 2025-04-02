---
title: Pedido Multiproduto (Commessa Multiprodotto)
sidebar_position: 5
---

El formulario se abre mediante la ruta **Planificación > Pedidos de producción (Pianificazione > Commesse di produzione)** haciendo clic en el botón **inserisci commessa multiprodotto** en el formulario **commesse di produzione**.

## Botones específicos

> [Parámetros MRP (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): mediante este botón se puede abrir la pantalla relacionada con los parámetros MRP del artículo;  
> [Lista de materiales (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permite abrir la pantalla relacionada con la lista de materiales del artículo;  
> [Rutas de trabajo (Cicli di lavoro)](/docs/erp-home/registers/production/routes/new-route): permite visualizar el ciclo de trabajo y las fases de producción relacionadas del artículo.

## Gestión de pedidos multiprodutos (Gestione commesse multiprodotto)

Esta pestaña se presenta igual que la que se encuentra en la pantalla de [inserción de pedidos monoproduto (inserimento commesse monoprodotto)](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order).

La *diferencia sustancial (differenza sostanziale)* radica en que no hay una sección donde se inserte el artículo con sus datos correspondientes, como ocurre para la creación de un pedido monoproduto, sino que este espacio es reemplazado por una cuadrícula que permite la inserción no de uno, sino de varios artículos, siendo por lo tanto un pedido multiproduto.

Los campos presentes en la cuadrícula son los mismos de la [orden monoproduto (commessa monoprodotto)](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order); la única diferencia es el campo **progressivo** que es un campo editable por el usuario, donde se propone un número de línea del *Pedido de Producción Multiproduto*, y las fechas de inicio y fin previstas, la fecha sugerida y la fecha de inicio y fin de previsión se especifican para cada artículo presente en el pedido multiproduto (sin embargo, se mantiene la sección Fecha prevista y Fecha efectiva referidas al estado general del pedido multiproduto).

### Referencias a pedidos de clientes (Riferimenti ordini clienti)

La pestaña contiene una cuadrícula de solo lectura, donde aparecen los pedidos de clientes relacionados con el pedido de producción de referencia cuando el pedido ha sido generado a partir de una o más líneas de pedidos de clientes.  
**Tipo/Año/Número (Tipo/Anno/Numero)**: en estas columnas se visualizan el *Tipo/Año/Número* del pedido del cliente en el que se encuentra la línea de la que se expone el detalle;  
**N./Cantidad/*UM (N./Quantità/*UM)**: en esta columna se visualiza la cantidad de la línea del pedido del cliente de la que se expone el detalle;  
**data merce pronta**: en esta columna se visualiza la fecha de la mercancía lista que se ha establecido en la línea del pedido del cliente de la que se expone el detalle;  
**conto**: en esta columna se visualizan la cuenta y subcuenta del cliente a quien está dirigido el pedido del cliente en el que se encuentra la línea de la que se expone el detalle.

### Datos adicionales (Extra data)

Esta pestaña también está compuesta por una cuadrícula en la que se reportarán todos los datos adicionales relacionados con el artículo presente en el pedido de producción.

## Costificación (Costificazione)

Toda la información relacionada con la **costificazione** se puede consultar en la página [Costificación (Costificazione)](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Datos adicionales (Extra data)

Esta pestaña, que acompaña a la pestaña *gestione commesse multiprodotto*, contiene todo el conjunto de [datos adicionales (extra data)](/docs/configurations/utility/extra-data/extradata/search-extradata) relacionados con el pedido de producción.

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).