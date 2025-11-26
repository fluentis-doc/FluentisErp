---
title: Orden de Producción Monoproducto
sidebar_position: 4
ai_generated: true
---

El formulario se abre a través de la ruta **Planificación > Órdenes de producción<!-- Commesse di produzione -->** haciendo clic en el formulario **Órdenes de producción<!-- Commesse di produzione -->** en el botón **Insertar orden<!-- Inserisci commessa -->**.

## Botones específicos<!-- Pulsanti specifici -->

> [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): mediante este botón es posible abrir la pantalla relativa a los parámetros de MRP del artículo;      
> [Lista de materiales<!-- Distinta base -->](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permite abrir la pantalla relativa a la lista de materiales del artículo;  
> [Rutas de trabajo<!-- Cicli di lavoro -->](/docs/erp-home/registers/production/routes/new-route): permite visualizar la ruta de trabajo y las correspondientes fases de producción del artículo.

## Gestión órdenes monoproducto<!-- Gestione commesse monoprodotto -->

Dentro de esta pestaña se indican los datos principales que debe contener la orden de producción<!-- commessa di produzione -->.

**Tipo de orden<!-- Tipo commessa -->**: se propone el tipo predeterminado como tipo por defecto con el *código estándar CP* (que indica la orden de producción<!-- commessa di produzione -->) presente en la tabla [Tipo de documentos<!-- Tipo documenti -->](/docs/configurations/tables/production/documents-types/);    

**Número**: indica el número progresivo de la orden<!-- commessa -->, que se propone automáticamente;     

**Año**: se propone automáticamente el actual;   

**Cliente**: indica las referencias de cuenta / subcuenta<!-- sottoconto --> y descripción del cliente;    

**Fecha**: se propone automáticamente la actual;        

**Obligatoria<!-- Tassativa -->**: si está activo, convierte en obligatoria la orden<!-- commessa --> y todos los pedidos planificados generados de esta serán obligatorios y serán considerados en la [Programación a capacidad finita](/docs/planning/ms-master-scheduling/finite-capacityscheduling);    

**Estado de la orden<!-- Stato commessa -->**: el sistema propone automáticamente como *No examinada*, estado que la orden<!-- commessa --> asume apenas creada;   

Los otros estados que puede asumir son:

- **Planificada<!-- Pianificata -->**: la orden<!-- commessa --> pasa a este estado después de haber sido sometida al proceso de Planificación General;  
- **Lanzada<!-- Lanciata -->**: la orden<!-- commessa --> pasa a este estado después de que al menos uno de los pedidos planificados de producción generados durante la [Planificación General](/docs/planning/ms-master-scheduling/general-schedule) ha sido liberado (no deben haber sido liberados otros pedidos planificados de tipo compra o subcontratación<!-- conto lavoro -->, de lo contrario la orden<!-- commessa --> pasa al estado ejecutiva);      
- **Ejecutiva<!-- Esecutiva -->**: la orden<!-- commessa --> pasa a este estado después de que al menos uno de los pedidos de producción generados ha sido liberado y se ha convertido en ejecutiva, o después de que al menos uno de los pedidos planificados de compra o subcontratación<!-- conto lavoro --> generados ha sido liberado;   
- **Despachada<!-- Evasa -->**: la orden<!-- commessa --> pasa a este estado después de que el pedido de nivel uno generado para el artículo objeto de la orden haya pasado al estado *Despachado<!-- Evaso -->*;   
- **Historizada<!-- Storicizzata -->**: la orden<!-- commessa --> puede pasar a este estado manualmente para evitar que aparezca más cuando se realiza una búsqueda de órdenes *Despachadas<!-- Evase -->*;  
- **Anulada<!-- Annullata -->**: la orden<!-- commessa --> puede ser puesta en este estado manualmente, en vez de eliminarla completamente, para indicar que la orden que inicialmente estaba prevista no fue llevada a producción.

**Descripción**: permite ingresar una descripción relativa a la orden<!-- commessa -->;        

**Tipo de aprovisionamiento<!-- Tipo approvvigionamento -->**: generalmente coincide con el tipo de aprovisionamiento del artículo ingresado en la orden de producción<!-- commessa di produzione -->. El tipo de aprovisionamiento del artículo se indica dentro de los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) pertinentes;     

**Prioridad de aprovisionamiento<!-- Priorità approvvigionamento -->**: indica la prioridad del aprovisionamiento;           
       
**Proyectos**: indica el proyecto en el que se incluye la orden<!-- commessa -->;       

**Sitio de Producción<!-- Sito Produzione -->**: indica el sitio de producción en el cual se producirá la orden<!-- commessa -->. Sobre este campo existe un control que, si la orden<!-- commessa --> se origina desde un pedido de cliente, verifica que el almacén<!-- magazzino --> indicado en la línea del pedido de cliente pertenezca al mismo sitio productivo indicado en la orden de producción<!-- commessa di produzione -->.  

**Fecha de mercancía lista<!-- Data merce pronta -->**: en esta columna se visualiza la fecha de la mercancía lista que se ha establecido en la línea del pedido de cliente del que se muestra el detalle;      

**Fecha sugerida<!-- Data suggerita -->**: campo en el que aparece la fecha sugerida por el sistema en caso de que el usuario haya programado la orden<!-- commessa --> usando el parámetro *Controla documentos retrasados con ATP* y habiendo configurado, siempre en los parámetros de *Planificación general*, una *Fecha Inicio MS* (Master Scheduling). La fecha sugerida es la que el usuario puede decidir que se convierta en la fecha de finalización prevista de la orden<!-- commessa -->;

**Fecha prevista de trabajo Inicio/Fin<!-- Data lavorazione prevista Inizio/Fine -->**: en estos campos aparecen las fechas previstas de inicio/fin de la *Orden de producción<!-- Commessa di produzione -->*. Mientras la Orden de Producción permanezca en el estado *No examinada*, estas fechas son idénticas entre sí y coinciden con la fecha de mercancía lista de la línea del Pedido de Cliente del cual se generó la orden, o coinciden con la fecha de finalización de la Previsión de Venta desde la que la orden fue generada. Una vez programada la Orden de Producción, la fecha prevista de inicio de la orden coincide con la fecha de inicio prevista del primer pedido planificado generado por la programación de la orden. Por último, cabe recordar que en caso de ingreso manual de la Orden de Producción, el usuario debe ingresar estos datos manualmente, de lo contrario no se podrá guardar la orden;

**Fecha real de trabajo Inicio/Fin<!-- Data Lavorazione effettiva Inizio/Fine -->**: en estos campos aparecen las fechas de inicio/fin del trabajo real, es decir, respectivamente la fecha de la primera señalización de producción de un pedido generado por la orden y la fecha de la última señalización de producción que ha causado el cierre definitivo del pedido de producción cuyo artículo es el mismo de la Orden de Producción. Obviamente la fecha de finalización real solo está presente si la orden se encuentra en el estado *Despachada<!-- Evasa -->*;

*Campos obligatorios para la generación de la orden de producción<!-- commessa di produzione -->*: **Artículo<!-- Articolo -->** (con su correspondiente clase, código y descripción), **Versión**, **Cantidad** de la orden<!-- commessa --> y la correspondiente **Unidad de medida**.  
Por último, hay una serie de campos que se toman de los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) del artículo seleccionado, tales como: el **Ciclo**, el **Lote económico** con sus **Múltiplos**, el **Lead time**, el **Porcentaje de desperdicio** sobre la cantidad y el **Tipo de aprovisionamiento<!-- Tipo approvvigionamento -->**.
Los campos **Inicio / Fin previsión** indican el inicio y fin del periodo considerado en la previsión de ventas que generó esa orden<!-- commessa -->.

Es importante tener en cuenta que el estado de cabecera de la orden multiproducto está influenciado automáticamente por los estados de las líneas individuales. El estado de cabecera será igual al más avanzado de las líneas, entre: no examinada, planificada, lanzada y ejecutiva.
Mientras tanto, la cabecera asumirá el estado de despachada cuando todas las líneas hayan sido despachadas; lo mismo ocurre con los estados de historizada y anulada.

### Referencias de pedidos de cliente<!-- Riferimenti ordini clienti -->

La pestaña contiene una cuadrícula de solo lectura, en la que aparecen los pedidos de cliente vinculados a la orden de producción<!-- commessa di produzione --> correspondiente cuando la orden<!-- commessa --> ha sido generada desde una o más líneas de pedidos de cliente.  
**Tipo/Año/Número**: en estas columnas se muestran el *Tipo/Año/Número* del pedido de cliente en el que está contenida la línea cuyo detalle se expone;  
**N./Cantidad/Unidad de medida**: en esta columna se muestra la cantidad de la línea del pedido de cliente cuyo detalle se expone;  
**Fecha de mercancía lista<!-- Data merce pronta -->**: en esta columna se muestra la fecha de la mercancía lista que ha sido establecida en la línea del pedido de cliente cuyo detalle se expone;  
**Cuenta<!-- Conto -->**: en esta columna se visualizan la cuenta y subcuenta<!-- sottoconto --> del cliente a cuyo nombre está el pedido de cliente donde se encuentra la línea cuyo detalle se expone.

### Extra data

Esta pestaña también consiste en una cuadrícula donde se mostrarán todos los extra data relacionados con el artículo presente en la orden de producción<!-- commessa di produzione -->.

##  Costeo<!-- Costificazione -->

Toda la información relativa al **Costeo<!-- Costificazione -->** se puede consultar en la página [Costeo](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Extra data

Esta pestaña, que acompaña a la pestaña *Gestión órdenes monoproducto<!-- Gestione commesse monoprodotto -->*, contiene todo el conjunto de [extra data](/docs/configurations/utility/extra-data/extradata/search-extradata) vinculados a la orden de producción<!-- commessa di produzione -->.

Para más detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes<!-- Funzionalità, pulsanti e campi comuni -->](/docs/guide/common).