---
title: Orden de producción multiproducto
sidebar_position: 5
ai_generated: true
---

El formulario se abre mediante la ruta **Planificación > Órdenes de producción<!-- Commesse di produzione -->** haciendo clic en el formulario **Órdenes de producción<!-- Commesse di produzione -->** sobre el botón **Insertar orden multiproducto<!-- Inserisci commessa multiprodotto -->**.

## Botones específicos<!-- Pulsanti specifici -->

> [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): mediante este botón es posible abrir la pantalla relativa a los parámetros MRP del artículo;  
> [Lista de materiales<!-- Distinta base -->](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permite abrir la pantalla relativa a la lista de materiales<!-- distinta base --> del artículo;  
> [Rutas de trabajo<!-- Cicli di lavoro -->](/docs/erp-home/registers/production/routes/new-route): permite visualizar la ruta de trabajo<!-- ciclo di lavoro --> y las fases de producción correspondientes del artículo.

## Gestión de órdenes multiproducto<!-- Gestione commesse multiprodotto -->

Esta pestaña es igual a la que está presente en la pantalla de [inserción de órdenes de un solo producto<!-- inserimento commesse monoprodotto -->](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order).

La *diferencia sustancial<!-- differenza sostanziale -->* reside en que no hay una sección en la que se ingresa el artículo<!-- articolo --> con sus datos relacionados como ocurre en la creación de una orden de un solo producto<!-- commessa monoprodotto -->, sino que este espacio es reemplazado por una cuadrícula que permite el ingreso no de uno, sino de varios artículos<!-- articoli --> al tratarse justamente de una orden multiproducto<!-- commessa multiprodotto -->.

Los campos presentes en la cuadrícula son los mismos que en la [orden de un solo producto<!-- commessa monoprodotto -->](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order); la única diferencia es el campo **Progresivo**, que es editable por el usuario, donde se propone un progresivo de línea de la *Orden de Producción Multiproducto<!-- Commessa di Produzione Multiprodotto -->* y las fechas previstas de inicio/fin, la fecha sugerida y la fecha de inicio y fin de previsión se especifican para cada artículo presente en la orden multiproducto<!-- commessa multiprodotto --> (no obstante, sigue existiendo la sección Fecha prevista y Fecha efectiva referidas al estado global de la orden multiproducto<!-- commessa multiprodotto -->).

### Referencias a pedidos de clientes<!-- Riferimenti ordini clienti -->

La pestaña contiene una cuadrícula de solo lectura, en la que aparecen los pedidos de clientes<!-- ordini clienti --> vinculados a la orden de producción<!-- commessa di produzione --> de referencia cuando la orden<!-- commessa --> ha sido generada desde una o más líneas de pedidos de clientes<!-- righe ordini clienti -->.  
**Tipo/Año/Número**: en estas columnas se visualizan el *Tipo/Año/Número* del pedido de cliente<!-- ordine cliente --> en el que se encuentra la línea cuyo detalle se expone;  
**N./Cantidad/*UM**: en esta columna se visualiza la cantidad de la línea del pedido de cliente<!-- ordine cliente --> cuyo detalle se expone;  
**Fecha mercancia lista<!-- Data merce pronta -->**: en esta columna se visualiza la fecha en la que la mercancía está lista que se ha establecido en la línea del pedido de cliente<!-- ordine cliente --> cuyo detalle se expone;  
**Cuenta<!-- Conto -->**: en esta columna se visualizan la cuenta<!-- conto --> y subcuenta<!-- sottoconto --> del cliente a nombre del cual está el pedido de cliente<!-- ordine cliente --> donde se encuentra la línea de la que se muestra el detalle.

### Extra data

Esta pestaña también consta de una cuadrícula en la que se mostrarán todos los *extra data* vinculados al artículo<!-- articolo --> presente en la orden de producción<!-- commessa di produzione -->.

##  Costeo<!-- Costificazione -->

Toda la información referente al **Costeo<!-- Costificazione -->** se puede consultar en la página [Costeo<!-- Costificazione -->](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Extra data

Esta pestaña, que acompaña a la pestaña *Gestión de órdenes multiproducto<!-- Gestione commesse multiprodotto -->*, contiene todo el conjunto de [extra data](/docs/configurations/utility/extra-data/extradata/search-extradata) vinculados a la orden de producción<!-- commessa di produzione -->.

Para más detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes<!-- Funzionalità, pulsanti e campi comuni -->](/docs/guide/common).