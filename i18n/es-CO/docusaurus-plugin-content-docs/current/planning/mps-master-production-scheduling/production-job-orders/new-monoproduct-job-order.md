---
title: Orden de Producto Único (Commessa Monoprodotto)
sidebar_position: 4
---

El formulario se abre a través de la ruta **Planificación > Órdenes de producción (Pianificazione > Commesse di produzione)** haciendo clic en el botón **inserisci commessa** en el formulario **commesse di produzione**.  

## Botones específicos

> [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): a través de este botón es posible abrir la pantalla relacionada con los parámetros MRP del artículo;  
> [Lista de materiales](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): permite abrir la pantalla relacionada con la lista de materiales del artículo;  
> [Ciclos de trabajo](/docs/erp-home/registers/production/routes/new-route): permite visualizar el ciclo de trabajo y las fases de producción relacionadas con el artículo.

## Gestión de órdenes de producto único (Gestione commesse monoprodotto)

Dentro de esta pestaña se indican los principales datos que debe contener la orden de producción.

**tipo commessa**: se propone el tipo predeterminado como tipo por defecto con el *código estándar CP* (que indica la orden de producción) presente en la tabla [Tipo de documentos](/docs/configurations/tables/production/documents-types/);  

**numero**: indica el número secuencial de la orden, que se propone automáticamente;  

**anno**: se propone automáticamente el actual;  

**cliente**: indica las referencias de cuenta / subcuenta y la descripción del cliente;  

**data**: se propone automáticamente la actual;  

**tassativa**: si está activo, hace que la orden sea obligatoria y todos los pedidos planificados generados por esta serán obligatorios y se considerarán en la [Programación con capacidad finita (Schedulazione a capacità finita)](/docs/planning/ms-master-scheduling/finite-capacityscheduling);  

**stato commessa**: el sistema propone automáticamente como *non esaminata*, estado que la orden asume apenas se crea;  

Los otros estados que puede asumir son:

- **pianificata**: la orden pasa a este estado después de haber sido sometida al proceso de Planificación General;  
- **lanciata**: la orden pasa a este estado después de que al menos uno de los pedidos planificados de producción generados a partir de ella durante la [Planificación General (Pianificazione Generale)](/docs/planning/ms-master-scheduling/general-schedule) haya sido liberado (no deben haberse liberado otros pedidos planificados de tipo compra o trabajo por encargo, de lo contrario la orden pasa a estado ejecutivo);  
- **esecutiva**: la orden pasa a este estado después de que al menos uno de los pedidos de producción generados haya sido liberado y ha pasado a ser ejecutivo, o después de que al menos uno de los pedidos planificados de compra o trabajo por encargo generados haya sido liberado;  
- **evasa**: la orden pasa a este estado después de que el pedido de nivel uno generado para el artículo objeto de la orden haya pasado a estado *evaso*;  
- **storicizzata**: la orden puede ser puesta en este estado manualmente para asegurarse de que no aparezca más cuando se realiza una búsqueda de las órdenes *evase*;  
- **annullata**: la orden puede ser puesta en este estado manualmente, en lugar de eliminarla por completo, para indicar que la orden, que inicialmente había sido prevista, no se ha llevado a producción.

**descrizione**: permite ingresar una descripción relacionada con la orden;  

**tipo approvvigionamento**: generalmente coincide con el tipo de aprovisionamiento del artículo ingresado en la orden de producción. El tipo de aprovisionamiento del artículo se indica dentro de los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) de este último;  

**priorità approvvigionamento**: indica la prioridad del aprovisionamiento;  

**progetti**: indica el proyecto en el que está inserta la orden;  

**sito produzione**: indica el sitio de producción en el que se producirá la orden. En este campo hay un control que, en caso de que la orden provenga de un pedido de cliente, verifica que el almacén indicado en la línea del pedido de cliente pertenezca al mismo sitio productivo indicado en la orden de producción.  

**data merce pronta**: en esta columna se muestra la fecha de la mercancía lista que se ha establecido en la línea del pedido de cliente del cual se expone el detalle;  

**data suggerita**: un campo en el que aparece la fecha sugerida por el sistema en caso de que el usuario haya programado la orden utilizando el parámetro *Verificar documentos atrasados con ATP* y habiendo establecido, también en los parámetros de *Programación general*, una *Fecha de Inicio MS* (Master Scheduling). La fecha sugerida es la que el usuario tiene la facultad de decidir si se convierte en la fecha de finalización prevista de la orden;

**Fecha de trabajo prevista Inicio/Fín (Data lavorazione prevista Inizio/Fine)**: en estos campos aparecen las fechas de previsto inicio/fín de la *commessa di produzione*. Mientras la Orden de Producción esté en estado *non esaminata*, estas fechas son idénticas entre sí y iguales a la fecha de mercancía lista de la línea del Pedido de Cliente a partir del cual se generó la orden, o iguales a la fecha de fin de la Previsión de Venta a partir de la cual se generó la orden. Después de que la Orden de Producción ha sido programada, la fecha de previsto inicio de la orden coincide con la fecha de previsto inicio del primer pedido planificado que se genera a partir de la programación de la orden. Finalmente, se recuerda que en caso de inserción manual de la Orden de Producción, el usuario debe ingresar este dato manualmente, de lo contrario no podrá guardar la orden;  

**Fecha de trabajo efectiva Inicio/Fín (Data Lavorazione effettiva Inizio/Fine)**: en estos campos aparecen las fechas de Inicio/Fín del trabajo efectivo, es decir, respectivamente la fecha del primer reporte de producción de un pedido de producción generado por la orden y la fecha del último reporte de producción que ha causado el cierre definitivo del pedido de producción cuyo artículo es el mismo que el de la Orden de Producción. Obviamente, la fecha de fin efectiva está presente solo en caso de que la orden esté en estado de *evasa*;

*Campos obligatorios para la generación de la orden de producción*: **articolo** (con su respectiva clase, código y descripción), **versione**, **quantità** de la orden y la respectiva **unità di misura**.  
Finalmente, hay una serie de campos que son todos tomados de los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) del artículo seleccionado, como: **ciclo**, el **lotto economico** con los respectivos **multipli**, el **Lead time**, el **percentuale di scarto** sobre la cantidad y el **tipo approvvigionamento**. 
Los campos **Inicio / Fin de previsión (Inizio / Fine previsione)** indican el inicio y fin del período considerado de la previsión de venta que ha generado dicha orden. 

Es importante tener en cuenta que el estado de encabezado de la orden de producto múltiple se ve afectado automáticamente por los estados de las líneas individuales. El estado de encabezado será igual al más avanzado de las líneas individuales entre: no examinada, planificada, iniciada y ejecutiva. Mientras que, el encabezado asumirá el estado de cumplido cuando todas las líneas hayan sido cumplidas; lo mismo ocurre para los estados de historizada y cancelada.

### Referencias de pedidos de clientes

La pestaña contiene una cuadrícula de solo lectura, en la que aparecen los pedidos de clientes conectados a la orden de producción de referencia cuando la orden ha sido generada a partir de una o más líneas de pedidos de clientes.  
**Tipo/Año/Número**: en estas columnas se visualizan el *Tipo/Año/Número* del pedido de cliente en el que se contiene la línea de la cual se expone el detalle;  
**N./Cantidad/Unidad de medida**: en esta columna se muestra la cantidad de la línea del pedido de cliente de la cual se expone el detalle;  
**data merce pronta**: en esta columna se muestra la fecha de la mercancía lista que ha sido establecida en la línea del pedido de cliente de la cual se expone el detalle;  
**conto**: en esta columna se visualizan la cuenta y subcuenta del cliente a cuyo nombre está el pedido de cliente en el que se contiene la línea de la cual se expone el detalle.

### Datos extra (Extra data)

También esta pestaña está constituida por una cuadrícula en la que se mostrarán todos los datos adicionales asociados al artículo presente en la orden de producción.

## Costificación 

Toda la información relacionada con la **Costificación** se puede consultar en la página [Costificación](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Datos extra (Extra data)

Esta pestaña, que acompaña a la pestaña *gestione commesse monoprodotto*, contiene todo el conjunto de [datos extra](/docs/configurations/utility/extra-data/extradata/search-extradata) relacionados con la orden de producción.

Para los detalles sobre el funcionamiento común de los formularios, consultar el enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).