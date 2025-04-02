---
title: Nueva oferta cliente (Nuova offerta cliente)
sidebar_position: 3
---

El formulario **nuova offerta** se abre a través de la ruta **Ventas > Nueva Oferta (Vendite > Nuova Offerta)** o mediante el botón **nuovo** que se encuentra en el formulario de [Búsqueda de Ofertas](/docs/sales/offers/search-offers).

## *Cómo crear una oferta cliente (Come creare un'offerta cliente)*

## **1. Datos obligatorios (Dati obbligatori)**     

- **tipo offerta di vendita**: contiene la tipología de oferta, entre las que están insertadas en los [Tipos de Ofertas](/docs/configurations/tables/sales/sales-offer-type).

- **numero**: a cada documento se le asigna un número de acuerdo con la numeración específica proporcionada por el usuario en la tabla [Numeración de Ofertas](/docs/configurations/tables/fluentis-numerations) y al tipo de documento que contiene la numeración.     

- **cliente**: la inserción del cliente es posible utilizando la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o ingresando los caracteres [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

- **contatto crm**: si la oferta es para un lead que no es aún cliente, será posible insertar un contacto CRM en lugar de un cliente.    

- **anno**: se propone el año corriente.  

- **data**: se propone la fecha de hoy.     

- **versione**: en este campo se indica el número de versión de la oferta; si es nueva, la versión propuesta será la primera.    

#### Datos no obligatorios (Dati non obbligatori):

- **opportunità contatto**: si el tipo de oferta creado tiene un tipo de oportunidad asociado en la tabla de [Tipos de Oferta](/docs/configurations/tables/sales/sales-offer-type), al guardar la oferta, se creará automáticamente una oportunidad para el cliente/contacto, que se mencionará en este campo y se volverá modificable por el usuario. Si se introduce manualmente una oportunidad preexistente en este campo, se actualizará.           

## **testata**

Después de haber ingresado los datos en la sección superior, se puede proceder con los datos de encabezado:      

- **divisa**: se propone la divisa del cliente.

- **spedizione**: se propone la modalidad de [Envío](/docs/configurations/tables/general-settings/shipments) desde la ficha del cliente.      

- **listino di vendita**: se propone la lista predeterminada existente en la ficha del cliente, con el tipo de escala correspondiente para el cliente.     

- **Anotaciones del cliente (Annotazioni clienti)**: en esta sección se pueden insertar las referencias del cliente, notas iniciales/finales; el campo *Anotaciones cliente* reporta las notas ingresadas en [Datos de la ficha del cliente](/docs/erp-home/registers/contacts/create-new-contact/general).     

- **data conferma offerta**: indica la fecha en la que la oferta ha sido confirmada y, por lo tanto, podrá ser convertida en un pedido.     

- **data prevista consegna**: es la fecha en la que se prevé que la mercancía será entregada; este dato se reflejará en el pedido creado a partir de la oferta.     

- **data chiusura**: indica la fecha en la que la oferta ha sido cerrada.

- **data annullamento**: la fecha en la que la oferta será considerada nula si no se ha convertido en pedido.

- **validità offerta**: fecha límite de validez de la oferta; es un campo informativo.

#### Botones específicos (Pulsanti specifici)    

> **nuova versione**: genera una nueva versión de la oferta, incrementando el campo *versione*. Las versiones posteriores de una oferta heredan los documentos adjuntos.       

> **Reemplazar fecha prevista de entrega en las líneas (Sostituisci data prevista consegna nelle righe)**: reemplaza en todas las líneas de artículo la fecha prevista de entrega ingresada en el encabezado.       

> **conversione**: permite transformar una oferta de venta en un pedido de venta real. Para que el proceso se realice correctamente, es esencial configurar el tipo de pedido deseado en la tabla de [Tipos de oferta](/docs/configurations/tables/sales/sales-offer-type). Además, para que la oferta pueda ser convertida exitosamente, es necesario que tenga una fecha de confirmación en el encabezado; de lo contrario, el sistema notificará al usuario a través de un mensaje emergente sobre la necesidad de confirmar la oferta antes de proceder. Una vez que se hayan ingresado todos los datos requeridos, al iniciar el procedimiento aparecerá un pop-up con los siguientes campos:     
> - si al menos algunas líneas de la oferta ya se han convertido en pedido, se le pedirá al usuario si desea crear un nuevo pedido utilizando todas las líneas de la oferta o solo las líneas que aún no han sido referenciadas.             
> - **crea/aggiorna progetto**: con este indicador indicamos al sistema que, además de la creación del pedido, debe proceder también con la creación o actualización del proyecto. Si el proyecto debe ser creado, es necesario marcar el comando *crea nuovo progetto vuoto*, *crea nuovo progetto da offerta* o **crea nuovo progetto da offerta e template progetto**; en todos los casos será necesario ingresar el **[Tipo de proyecto](/docs/configurations/tables/project-management/project-type)** a crear en el campo apropiado; en el último caso, también se pedirá el ingreso del proyecto **template**. Si el proyecto ya existe y debe ser actualizado con los datos ingresados en la oferta, será necesario llenar el campo **progetto** con el proyecto a actualizar.     
> - **Reportar materiales/recursos de líneas de oferta como líneas de pedido (Riporta Materiali/Risorse da righe Offerta come righe Ordine)**: con estos indicadores se inserten en el pedido las líneas de artículo con los recursos y materiales de la oferta, si es jerárquica.              
Una vez confirmado el pop-up, el sistema generará un nuevo pedido de cliente utilizando los datos de la oferta. Este pedido puede ser visualizado y modificado en la sección [Búsqueda de pedidos de clientes](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders). Además, el usuario será informado a través de un mensaje emergente sobre el éxito de la conversión, el número de la oferta convertida y la versión, junto con un mensaje que contiene el número del pedido de cliente generado por la conversión.        
Si en la oferta se modifican los datos propuestos por la ficha, estos son incluidos en el pedido generado a partir de la conversión: anotaciones del cliente, envío, pagos, descuentos, agentes, destinos, transportistas.      

Las pestañas subyacentes se poblarán con los campos tomados de la ficha del cliente/contacto, modificables:  
- **pagamenti**
- **sconti**
- **destinatari**
- **vettori**
- **agenti**
- **extra data**
- **Información de email (Informazioni email)**

## **3.a Artículos de la oferta (Articoli offerta)**

En la cuadrícula principal se insertan los artículos.    

Luego, están presentes las siguientes pestañas:       
- **sconti**: esta pestaña reporta la lista de precios, si está presente, de la cual se toma el precio para el artículo seleccionado; también reporta los descuentos, de lista o de ficha, y permite la inserción de nuevos descuentos; además, está presente el indicador *prezzo manuale*, que indica que se mantendrán los precios introducidos manualmente (este indicador se reporta en la conversión de la oferta en pedido).     
- **agenti**: en esta pestaña se reportan los agentes del cliente con las respectivas comisiones.      
- **dati articolo**: se presentan diversos datos relacionados con el artículo, como posibles variantes, almacén, unidad de medida alternativa.    
- **extra data**
- **documenti allegati**        

#### Botones específicos (Pulsanti specifici)

- **crea nuovo prototipo**: este botón crea un [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) para la línea de artículo seleccionada; la referencia al presupuesto generado se reporta en la pestaña Datos del artículo, campo Presupuesto. Será posible modificar el prototipo generado desde el módulo correspondiente.
- **associa prototipo**: con este botón es posible asociar la oferta a un [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) ya existente; se abre una ayuda en la que se puede elegir entre los prototipos disponibles para ese artículo.
- **apri prototipo**: este botón está habilitado si la línea de artículo seleccionada tiene un prototipo asociado, y permite abrirlo.     
- **import da progetto**: esta función abre la ayuda *Artículo proyecto*, en la cual es posible seleccionar los artículos provenientes de un proyecto que queremos incluir en la oferta de venta. El pop-up se abre directamente con el filtro en el cliente titular de la oferta, para permitir visualizar sus respectivos proyectos.    

## **3.b Artículos de oferta jerárquica (Articoli offerta gerarchica)**

En caso de que la oferta sea de *tipo jerárquico*, la pestaña de artículos será diferente.      

En la cuadrícula principal se insertan los artículos utilizando los botones de la barra de herramientas, que permiten crear una estructura en árbol. Las características de los artículos deben especificarse en la pestaña *attività*.    

Ahora enumeramos las pestañas particulares de una oferta jerárquica.        

### 3.b.1 Actividades (Attività)

En esta pestaña es necesario insertar las características de los artículos de la cuadrícula de artículos. Los campos presentes son:     
- **Número de línea/Nivel (Numero riga/Livello)**: contiene los números de la línea y de la WBS y se establece automáticamente, aunque es modificable.          
- **tipo nodo**: indica si la línea es un **Root Node (nodo raíz)**, un **Activity Node (nodo de actividad)** o un **Work Package Node (nodo de paquete de trabajo)** (el único que puede contener códigos de artículo codificados).       
- **tipo riga**: indica la tipología de artículo entre Codificado, No codificado, Gastos o Notas (este último por defecto).            
- **codice articolo**: esta sección reporta la Clase, Código y Descripción del artículo codificado eventualmente seleccionado.             
- **codice variante**: reporta una posible [Variante](/docs/erp-home/registers/items/create-new-item) del artículo.       
- **descrizione articolo**: esta sección reporta la descripción del artículo, si es del tipo Nota o No codificado.    
- **prototipo**: contiene el eventual [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) asociado.          
- **Cantidad/UM/Precio (Quantità/UM/Prezzo)**: contiene la cantidad, unidad de medida y precio del artículo seleccionado.        
- **quantità alternativa**: contiene la eventual cantidad alternativa, con al lado la unidad de medida alternativa.     
- **um prezzo**: si se ingresa, este indicador indica multiplicar el precio unitario por la cantidad alternativa, para obtener el importe.   
- **listino**: es posible asociar una lista de precios de la cual obtener el precio del artículo, con al lado el **tipo scaglione** a aplicar para el descuento.     
- **prezzo manuale**: este indicador indica que se ha ingresado un precio manualmente, y que por lo tanto no se debe considerar el precio de lista.          
- **aggiorna il prezzo dalle risorse**: este indicador, si está establecido, cambia el campo *Precio* introduciendo la misma cantidad de la columna *ricavo* de la pestaña *risorse*; puede usarse, por ejemplo, cuando el importe de línea depende completamente del tiempo empleado por los recursos.        
- **aggiorna il prezzo dai materiali**: este indicador, si está establecido, cambia el campo *Precio* introduciendo la misma cantidad de la columna *ricavo* de la pestaña *materiali*; puede usarse, por ejemplo, cuando el importe de línea depende completamente de los materiales utilizados.       
- **aggiorna il prezzo dal prototipo**: este indicador, si está establecido, cambia el campo *Precio* introduciendo la misma cantidad de la columna *prezzo di vendita* del prototipo asociado.     
- **escludi risorse in ordine cliente**: este indicador asegura que los recursos de la línea de artículo seleccionada no se incluyan en el pedido de cliente creado con la conversión de la oferta.     
- **escludi materiali in ordine cliente**: este indicador asegura que los materiales de la línea de artículo seleccionada no se incluyan en el pedido de cliente creado con la conversión de la oferta.     
- **sconti**: en esta cuadrícula se reportan los descuentos previstos para el cliente y se pueden agregar otros.     
- **ricavi materiali/ricavi risorse**: en estos campos se reportan las columnas *ricavo* de las pestañas Recursos y Materiales; de esta manera, es posible entender directamente desde esta pestaña la incidencia de los importes en el precio total.     
- **iva**: indica el IVA a aplicar.             
- **fatturato vendite**: indica el [Facturación de ventas (Fatturato vendite)](/docs/configurations/tables/sales/sales-turnover) del artículo.                
- **Fecha prevista de entrega/Periodo de prevista de entrega (Data prevista consegna/Periodo di prevista consegna)**: en estos campos es posible ingresar la fecha/periodo previstos para la entrega del artículo seleccionado.    

### 3.b.2 Recursos (Risorse)

En esta pestaña es posible indicar los ingresos obtenidos de los diversos recursos. Los campos presentes son: 
- **risorsa**: requiere el ingreso de un [Recurso](/docs/project-management/registers/employee/new-employee) precodificado que ha realizado la actividad.     
- **unità di misura**: contiene la unidad de medida a utilizar para el recurso; se propone la que está por defecto en la ficha del recurso, pero se puede cambiar.      
- **Cantidad/Costo unitario/Costo total (Quantità/Costo unitario/Costo totale)**: para obtener el costo total, la cantidad ingresada se multiplica automáticamente por el precio unitario.      
- **percentuale/valore**: en estos campos es posible ingresar un eventual recargo a aplicar al costo total, en porcentaje o valor.     
- **ricavo**: en esta columna se calculará automáticamente el costo total recargado.        
- **nota**: en este campo es posible ingresar notas libres.       
- **equivalente a tempo pieno**: en este campo es posible indicar a cuánto equivalen los días/horas del recurso respecto al horario empresarial (por ejemplo, si un recurso trabaja medio tiempo de 4 horas, 1 día de ese recurso debe equivaler a 0.5 días empresariales).     

### 3.b.3 Materiales (Materiali)

En esta pestaña es posible indicar los ingresos obtenidos del uso de materiales.      
En las primeras columnas de la cuadrícula es posible insertar un artículo codificado, no codificado o notas, su eventual variante y el IVA. Las columnas siguientes son:     
- **Cantidad/Costo unitario/Costo total (Quantità/Costo unitario/Costo totale)**: para obtener el costo total, la cantidad ingresada se multiplica automáticamente por el costo unitario.      
- **tipo origine costo**: es posible seleccionar el origen del cual poblar la columna *Costo unitario* entre: Costo último, Costo medio, Costo estándar, Lista de precios del proveedor neto, Pedido del proveedor o Factura de compra; este campo es parametrizable por defecto en los [Parámetros de oferta](/docs/configurations/parameters/sales/offer-parameters).    
- **percentuale/valore**: en estos campos es posible ingresar un eventual recargo a aplicar al costo total, en porcentaje o valor.     
- **ricavo**: en esta columna se calculará automáticamente el costo total recargado.        
- **descrizione fornitore**: se propone el proveedor preferencial insertado en la ficha del artículo, pero es posible modificarlo; si en la columna *Tipo de origen de costo* se ha seleccionado la lista del proveedor, la lista considerada será la válida para este proveedor; además, este proveedor será el titular de la **richiesta di offerta** generada por la línea de material.           
- **Número/Fecha de solicitud (Numero/Data richiesta)**: contiene la eventual **richiesta di offerta** creada para el material; de hecho, cuando se está posicionado en la pestaña *Materiales*, aparece en la barra de herramientas el botón *creazione richiesta di offerta* que generará la RDO para el material seleccionado.    
- **nota**: en este campo es posible ingresar notas libres.   

Las demás pestañas presentes son análogas a las de la oferta no jerárquica.     

#### Botones específicos (Pulsanti specifici)

> **crea nuovo prototipo**: este botón crea un [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) para la línea de artículo seleccionada; la referencia al presupuesto generado se reporta en la pestaña Datos del artículo, campo Presupuesto. Será posible modificar el prototipo generado desde el módulo correspondiente.      
> **associa prototipo**: con este botón es posible asociar la oferta a un [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) ya existente; se abre una ayuda en la que se puede elegir entre los prototipos disponibles para ese artículo.       
> **apri prototipo**: este botón está habilitado si la línea de artículo seleccionada tiene un prototipo asociado, y permite abrirlo.       
> **import da progetto**: esta función abre la ayuda Artículo proyecto, en la cual es posible seleccionar los artículos provenientes de un proyecto que queremos incluir en la oferta de venta. El pop-up se abre directamente con el filtro en el cliente titular de la oferta, para permitir visualizar sus respectivos proyectos.     
> **nuovo figlio**: permite insertar una línea de proyecto hija de la línea seleccionada.        
> **nuovo fratello**: permite insertar una línea de proyecto en el mismo nivel que la línea seleccionada.       
> **sostituisci il numero wbs**: permite incorporar al número WBS de las líneas también el número del proyecto.       
> **implodi**: permite ocultar las líneas del árbol.       
> **esplodi**: permite visualizar las líneas del árbol.

## **4. Resúmenes de la oferta (Riepiloghi Offerta)**

En esta pestaña pueden ser insertados y son válidos para la totalidad del documento:

### 4.1 Descuentos finales de artículos (Sconti finali articoli)

import SummariesFinalDiscount from './../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount /> 

### 4.2 Gastos/Descuentos/mayoraciones finales (Spese/Sconti/maggiorazioni finali)

import SummariesExpenses from './../../import/sections/summaries-expenses.md'

<SummariesExpenses />