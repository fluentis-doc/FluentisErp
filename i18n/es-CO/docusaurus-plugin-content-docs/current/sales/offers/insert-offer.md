---
title: Nueva oferta cliente
sidebar_position: 3
ai_generated: true
---

El formulario **Nueva Oferta<!-- Nuova Offerta -->** se abre a través de la ruta **Ventas > Nueva Oferta<!-- Vendite > Nuova Offerta -->** o mediante el botón **Nuevo<!-- Nuovo -->** que se encuentra en el formulario de [Búsqueda de Ofertas<!-- Ricerca Offerte -->](/docs/sales/offers/search-offers).

## *Cómo crear una oferta cliente*<!-- *Come creare un'offerta cliente* -->

## **1. Datos obligatorios**<!-- Dati obbligatori -->

- **Tipo de oferta de venta<!-- Tipo offerta di vendita -->**: contiene la tipología de oferta, entre las ingresadas en [Tipos de Ofertas<!-- Tipi Offerte -->](/docs/configurations/tables/sales/sales-offer-type).

- **Número<!-- Numero -->**: a cada documento se le asigna un número según la numeración especificada por el usuario en la tabla [Numeración Ofertas<!-- Numerazione Offerte -->](/docs/configurations/tables/fluentis-numerations) y según el tipo de documento que contiene la numeración.

- **Cliente**: la inserción del cliente es posible utilizando la [ayuda de campo<!-- help di campo -->](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o ingresando los caracteres [manualmente<!-- manualmente -->](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

- **Contacto CRM<!-- Contatto CRM -->**: si la Oferta es para un lead que aún no es cliente, será posible ingresar un Contacto CRM en lugar de un cliente.

- **Año<!-- Anno -->**: se propone el año actual.

- **Fecha<!-- Data -->**: se propone la fecha de hoy.

- **Versión<!-- Versione -->**: en este campo se indica el número de Versión de la oferta; si es nueva, la Versión propuesta será la primera.

#### Datos no obligatorios<!-- Dati non obbligatori -->

- **Oportunidad de contacto<!-- Opportunità contatto -->**: si el Tipo de oferta creado tiene un Tipo de Oportunidad asociado en la tabla de [Tipos de Oferta<!-- Tipi Offerta -->](/docs/configurations/tables/sales/sales-offer-type), al guardar la Oferta se creará automáticamente una Oportunidad para el cliente/contacto, que se reflejará en este campo y será editable por el usuario. Si en este campo se ingresa manualmente una Oportunidad preexistente, esta se actualizará.

## **2. Encabezado**<!-- Testata -->

Después de ingresar los datos en la sección superior, es posible proceder con los datos de encabezado:

- **Divisa**: se propone la Divisa del cliente.

- **Envío<!-- Spedizione -->**: se propone la modalidad de [Envío<!-- Spedizione -->](/docs/configurations/tables/general-settings/shipments) desde el registro del cliente.

- **Lista de precios de venta<!-- Listino di vendita -->**: se propone la lista de precios por defecto presente en el registro del cliente, con el relativo Tipo de escalón previsto para el cliente.

- **Anotaciones del cliente<!-- Annotazioni clienti -->**: en esta sección es posible ingresar las Referencias del cliente, posibles Notas iniciales/finales; el campo *Anotaciones del cliente<!-- Annotazioni cliente -->* muestra las Notas ingresadas en los [Datos de registro del cliente<!-- Dati anagrafici del cliente -->](/docs/erp-home/registers/contacts/create-new-contact/general).

- **Fecha de confirmación de la oferta<!-- Data conferma offerta -->**: indica la fecha en la cual la oferta ha sido confirmada y puede ser convertida en pedido.

- **Fecha prevista de entrega<!-- Data prevista consegna -->**: es la fecha en la que se prevé que la mercancía será entregada; este dato se reporta en el pedido generado desde oferta.

- **Fecha de cierre<!-- Data chiusura -->**: indica la fecha en la que la oferta ha sido cerrada.

- **Fecha de anulación<!-- Data annullamento -->**: la fecha en la que la Oferta se considerará nula si no se ha convertido en Pedido.

- **Validez de la Oferta<!-- Validità Offerta -->**: fecha límite de validez de la oferta; es un campo informativo.

#### Botones específicos<!-- Pulsanti specifici -->

> **Nueva versión<!-- Nuova versione -->**: genera una nueva versión de la oferta, incrementando el campo *Versión<!-- Versione -->*. Las versiones sucesivas de una Oferta heredan los Documentos adjuntos.
>
> **Sustituir fecha prevista de entrega en las líneas<!-- Sostituisci data prevista consegna nelle righe -->**: sustituye en todas las líneas de artículo la Fecha prevista de entrega ingresada en el encabezado.
>
> **Conversión<!-- Conversione -->**: permite transformar una oferta de venta en un pedido de venta efectivo. Para que el proceso ocurra correctamente, es esencial configurar el Tipo de pedido deseado en la tabla de [Tipos de oferta<!-- Tipi offerta -->](/docs/configurations/tables/sales/sales-offer-type). Además, para que la oferta pueda ser convertida con éxito, es necesario que tenga una Fecha de confirmación en el encabezado; de lo contrario, el sistema avisará al usuario mediante un mensaje pop-up de la necesidad de confirmar la oferta antes de proceder. Una vez que todos los datos requeridos hayan sido ingresados, al iniciar el procedimiento aparecerá un pop-up con los siguientes campos:
> - si al menos algunas líneas de la oferta ya han sido convertidas en pedido, se preguntará al usuario si desea crear un nuevo pedido utilizando todas las líneas de la oferta o solo las líneas que aún no están referenciadas.
> - **Crear/Actualizar proyecto<!-- Crea/Aggiorna progetto -->**: con este flag indicamos al sistema que además de la creación del pedido debe proceder también con la creación o actualización del proyecto. Si el proyecto debe ser creado, es necesario marcar el comando *Crear Nuevo proyecto vacío<!-- Crea Nuovo progetto vuoto -->*, *Crear Nuevo proyecto desde Oferta<!-- Crea Nuovo progetto da Offerta -->* o **Crear Nuevo proyecto desde Oferta y Plantilla de proyecto<!-- Crea Nuovo progetto da Offerta e Template progetto -->**; en todos los casos será necesario ingresar el **[Tipo de proyecto<!-- Tipo progetto -->](/docs/configurations/tables/project-management/project-type)** a crear en el campo correspondiente, en el último caso se solicitará también el ingreso del proyecto **Plantilla<!-- Template -->**. Si el proyecto ya existe y debe ser actualizado con los datos ingresados en la oferta, en cambio, será necesario completar el campo **Proyecto** con el proyecto a actualizar.
> - **Traer Materiales/Recursos desde las líneas de la Oferta como líneas de Pedido<!-- Riporta Materiali/Risorse da righe Offerta come righe Ordine -->**: con estos flags se insertan en el pedido líneas de artículo con los recursos y los materiales de la oferta, si es jerárquica.
> Una vez confirmado el pop-up, el sistema generará entonces un nuevo Pedido cliente utilizando los datos de la oferta. Este pedido puede ser visualizado y modificado en la sección de [Búsqueda de pedidos cliente<!-- Ricerca ordini clienti -->](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders). Además, el usuario será informado mediante un mensaje pop-up sobre el éxito de la conversión, el número de la oferta convertida y la versión, junto con un mensaje que contiene el número del pedido cliente generado por la conversión.
> Si en la Oferta se modifican los datos propuestos por el registro del cliente, se trasladan al Pedido generado por la conversión: Anotaciones cliente, Envío, Pagos, Descuentos, Agentes, Destinatarios, Transportistas.

Las pestañas inferiores se rellenan con los campos tomados del registro del cliente/contacto, modificables:
- **Pagos**
- **Descuentos**
- **Destinatarios**
- **Transportistas<!-- Vettori -->**
- **Agentes**
- **Datos Extra<!-- Extra Data -->**
- **Información de correo electrónico<!-- Informazioni email -->**

## **3.a Artículos de la oferta<!-- Articoli offerta -->**

En la cuadrícula principal se insertan los artículos.

Después, están disponibles las siguientes pestañas:
- **Descuentos<!-- Sconti -->**: esta pestaña muestra la Lista de precios, si existe, de donde tomar el precio para el artículo seleccionado; también muestra los descuentos, ya sea de lista o de registro, y permite el ingreso de nuevos descuentos; por último, está presente el flag *Precio manual<!-- Prezzo manuale -->*, que indica mantener los precios ingresados manualmente (este flag se traslada en la conversión de la oferta en pedido).
- **Agentes**: en esta pestaña se muestran los Agentes del cliente con sus respectivas comisiones.
- **Datos del artículo<!-- Dati articolo -->**: hay varios datos relativos al artículo, como posibles Variantes, almacén<!-- magazzino -->, Unidad de medida alternativa.
- **Datos Extra<!-- Extra Data -->**
- **Documentos adjuntos<!-- Documenti allegati -->**

#### Botones específicos<!-- Pulsanti specifici -->

- **Crear nuevo prototipo<!-- Crea nuovo prototipo -->**: este botón crea un [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) para la línea de artículo seleccionada; la referencia al presupuesto generado se muestra en la pestaña Datos del artículo, campo Presupuesto. Será posible modificar el prototipo generado desde el módulo correspondiente.
- **Asociar prototipo<!-- Associa prototipo -->**: con este botón es posible asociar la oferta a un [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) ya existente; se abre una ayuda en la que se puede elegir entre los prototipos disponibles para ese artículo.
- **Abrir prototipo<!-- Apri prototipo -->**: este botón está habilitado si la línea de artículo seleccionada tiene un Prototipo asociado, y permite abrirlo.
- **Importar desde proyecto<!-- Import da progetto -->**: esta función abre la ayuda *Artículo proyecto*, en la cual es posible seleccionar los artículos procedentes de un proyecto que se desee incluir en la oferta de venta. El pop up se abre directamente con el filtro en el cliente titular de la oferta, para visualizar los proyectos correspondientes.

## **3.b Artículos de oferta jerárquica<!-- Articoli offerta gerarchica -->**

En caso de que la Oferta sea de *tipo jerárquico<!-- tipo gerarchico -->*, la pestaña de Artículos será diferente.

En la cuadrícula principal se insertan los artículos utilizando los botones de la barra de herramientas, que permiten crear una estructura en forma de árbol. Las características de los artículos deben especificarse en la pestaña *Actividades<!-- Attività -->*.

A continuación enumeramos las pestañas específicas de una oferta jerárquica.

### 3.b.1 Actividades<!-- Attività -->

En esta pestaña es necesario ingresar las características de los artículos de la cuadrícula de artículos. Los campos presentes son:
- **Número de línea/Nivel<!-- Numero riga/Livello -->**: contiene los números de la línea y de la WBS y se establece automáticamente, aunque puede ser modificado libremente.
- **Tipo de nodo<!-- Tipo Nodo -->**: indica si la línea es un **Nodo raíz<!-- Root Node -->** (nodo principal), un **Nodo de actividad<!-- Activity Node -->** (relativo a las actividades) o un **Nodo de paquete de trabajo<!-- Work Package Node -->** (nodo final del proyecto, el único que puede contener códigos de artículo codificados).
- **Tipo de línea<!-- Tipo riga -->**: indica el tipo de artículo entre Codificado, No codificado, Gastos o Notas (este último por defecto).
- **Código de artículo<!-- Codice Articolo -->**: esta sección muestra Clase, Código y Descripción del artículo codificado eventualmente seleccionado.
- **Código de variante<!-- Codice Variante -->**: muestra una posible [Variante](/docs/erp-home/registers/items/create-new-item) del artículo.
- **Descripción del artículo<!-- Descrizione articolo -->**: esta sección muestra la Descripción del artículo, si es de tipo Nota o No codificado.
- **Prototipo**: contiene el posible [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) vinculado.
- **Cantidad/UM/Precio<!-- Quantità/UM/Prezzo -->**: contiene cantidad, unidad de medida y precio del artículo seleccionado.
- **Cantidad alternativa<!-- Quantità alternativa -->**: contiene la posible cantidad alternativa, junto a la Unidad de medida alternativa.
- **UM Precio<!-- UM Prezzo -->**: si está activo, este flag indica multiplicar el precio unitario por la cantidad alternativa, para obtener el importe.
- **Lista de precios<!-- Listino -->**: es posible asociar una lista de precios de la que obtener el precio del artículo, junto al **Tipo de escalón<!-- Tipo scaglione -->** a aplicar para el descuento.
- **Precio manual<!-- Prezzo manuale -->**: este flag indica que se ha ingresado un precio manualmente, y que entonces el precio de lista no debe ser considerado.
- **Actualizar el precio desde los recursos<!-- Aggiorna il prezzo dalle risorse -->**: este flag, si se activa, hace que cambie el campo *Precio* ingresando el mismo importe de la columna *Ingreso<!-- Ricavo -->* de la pestaña *Recursos<!-- Risorse -->*; se puede usar, por ejemplo, cuando el importe de línea depende enteramente del tiempo empleado por los Recursos.
- **Actualizar el precio desde los materiales<!-- Aggiorna il prezzo dai materiali -->**: este flag, si se activa, hace que cambie el campo *Precio* ingresando el mismo importe de la columna *Ingreso<!-- Ricavo -->* de la pestaña *Materiales<!-- Materiali -->*; se puede usar, por ejemplo, cuando el importe de línea depende enteramente de los Materiales empleados.
- **Actualizar el precio desde el prototipo<!-- Aggiorna il prezzo dal prototipo -->**: este flag, si se activa, hace que cambie el campo *Precio* ingresando el mismo importe de la columna *Precio de venta<!-- Prezzo di vendita -->* del prototipo asociado.
- **Excluir recursos en pedido cliente<!-- Escludi risorse in ordine cliente -->**: este flag hace que los Recursos de la línea de artículo seleccionada no se reflejen en el Pedido cliente creado con la Conversión de la oferta.
- **Excluir materiales en pedido cliente<!-- Escludi materiali in ordine cliente -->**: este flag hace que los Materiales de la línea de artículo seleccionada no se reflejen en el Pedido cliente creado con la Conversión de la oferta.
- **Descuentos<!-- Sconti -->**: en esta cuadrícula se muestran los descuentos previstos para el cliente y es posible añadir otros.
- **Ingresos de materiales/Ingresos de recursos<!-- Ricavi materiali/Ricavi risorse -->**: en estos campos se muestran las columnas *Ingreso<!-- Ricavo -->* de las pestañas Recursos y Materiales; de este modo es posible ver directamente desde esta pestaña la incidencia de los importes sobre el Precio total.
- **IVA**: indica el IVA a aplicar.
- **Facturación ventas<!-- Fatturato vendite -->**: indica la [Facturación ventas<!-- Fatturato vendite -->](/docs/configurations/tables/sales/sales-turnover) del artículo.
- **Fecha prevista de entrega/Periodo de entrega prevista<!-- Data prevista consegna/Periodo di prevista consegna -->**: en estos campos es posible ingresar la fecha/periodo previstos para la entrega del artículo seleccionado.

### 3.b.2 Recursos<!-- Risorse -->

En esta pestaña es posible indicar los Ingresos obtenidos de los distintos Recursos. Los campos presentes son:
- **Recurso<!-- Risorsa -->**: requiere la inserción de un [Recurso](/docs/project-management/registers/employee/new-employee) precodificado que ha realizado la actividad.
- **Unidad de medida<!-- Unità di misura -->**: contiene la unidad de medida a utilizar para el Recurso; se propone la de defecto ingresada en el registro de recurso, pero puede cambiarse.
- **Cantidad/Costo unitario/Costo total<!-- Quantità/Costo unitario/Costo totale -->**: para obtener el Costo total se multiplica automáticamente la Cantidad ingresada con el Precio unitario.
- **Porcentaje/Valor<!-- Percentuale/Valore -->**: en estos campos es posible ingresar un cargo adicional a aplicar al Costo total, en porcentaje o valor.
- **Ingreso<!-- Ricavo -->**: en esta columna se calculará automáticamente el Costo total con recargo.
- **Nota**: en este campo es posible ingresar notas libres.
- **Equivalente a tiempo completo<!-- Equivalente a tempo pieno -->**: en este campo es posible ingresar a cuánto corresponden los días/horas del recurso respecto al horario de la empresa (por ejemplo si un recurso hace un horario de medio tiempo de 4 horas, 1 día de este recurso debe corresponder a 0,5 días de la empresa).

### 3.b.3 Materiales<!-- Materiali -->

En esta pestaña es posible indicar los Ingresos obtenidos del uso de Materiales.
En las primeras columnas de la cuadrícula se puede ingresar un Artículo codificado, No codificado o Notas, su posible Variante y el IVA. Las columnas siguientes son:
- **Cantidad/Costo unitario/Costo total<!-- Quantità/Costo unitario/Costo totale -->**: para obtener el Costo total se multiplica automáticamente la Cantidad ingresada con el Costo unitario.
- **Tipo origen costo<!-- Tipo origine costo -->**: es posible seleccionar el origen del que poblar la columna *Costo unitario* entre: Último costo, Costo medio, Costo estándar, Lista de precios proveedor neta, Pedido proveedor o Factura de compra; este campo es paramétrico por defecto en los [Parámetros de oferta<!-- Parametri offerta -->](/docs/configurations/parameters/sales/offer-parameters).
- **Porcentaje/Valor<!-- Percentuale/Valore -->**: en estos campos es posible ingresar un recargo a aplicar al Costo total, en porcentaje o valor.
- **Ingreso<!-- Ricavo -->**: en esta columna se calculará automáticamente el Costo total con recargo.
- **Descripción del proveedor<!-- Descrizione fornitore -->**: se propone el Proveedor preferente ingresado en el registro de artículo, pero puede cambiarse; si en la columna *Tipo origen costo* se ha seleccionado la lista de proveedor, se considerará la lista válida para ese proveedor; además, este proveedor será el titular de la **Solicitud de oferta<!-- Richiesta di offerta -->** generada por la línea de material.
- **Número/Fecha de solicitud<!-- Numero/Data richiesta -->**: contiene la posible **Solicitud de oferta<!-- Richiesta di offerta -->** creada para el Material; de hecho, cuando se está en la pestaña *Materiales*, en la barra de herramientas aparece el botón *Creación de Solicitud de oferta<!-- Creazione Richiesta di offerta -->* que generará la RDO para el material seleccionado.
- **Nota**: en este campo es posible ingresar notas libres.

Las demás pestañas presentes son análogas a las de la oferta no jerárquica.

#### Botones específicos<!-- Pulsanti specifici -->

> **Crear nuevo prototipo<!-- Crea nuovo prototipo -->**: este botón crea un [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) para la línea de artículo seleccionada; la referencia al presupuesto generado aparece en la pestaña Datos del artículo, campo Presupuesto. Se podrá modificar el prototipo generado desde el módulo correspondiente.
> **Asociar prototipo<!-- Associa prototipo -->**: con este botón es posible asociar la oferta a un [Prototipo](/docs/erp-home/registers/production/standardization/new-prototype) ya existente; se abre una ayuda donde se podrá elegir entre los prototipos disponibles para ese artículo.
> **Abrir prototipo<!-- Apri prototipo -->**: este botón está habilitado si la línea de artículo seleccionada tiene un Prototipo asociado, y permite abrirlo.
> **Importar desde proyecto<!-- Import da progetto -->**: esta función abre la ayuda Artículo proyecto, en la que se puede seleccionar los artículos provenientes de un proyecto que se desea incluir en la oferta de venta. El pop up se abre filtrando automáticamente por el cliente titular de la oferta, permitiendo ver sus proyectos relacionados.
> **Nuevo hijo<!-- Nuovo figlio -->**: permite insertar una línea de proyecto hija de la línea seleccionada.
> **Nuevo hermano<!-- Nuovo fratello -->**: permite insertar una línea de proyecto en el mismo nivel de la línea seleccionada.
> **Sustituir el número WBS<!-- Sostituisci il numero WBS -->**: permite incorporar al Número WBS de las líneas también el Número del proyecto.
> **Implosionar<!-- Implodi -->**: permite ocultar las líneas del árbol.
> **Explosionar<!-- Esplodi -->**: permite visualizar las líneas del árbol.

## **4. Resúmenes de Oferta<!-- Riepiloghi Offerta -->**

En esta pestaña pueden insertarse y son válidos para la totalidad del documento:

### 4.1 Descuentos finales de artículos<!-- Sconti finali articoli -->

import SummariesFinalDiscount from './../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount /> 

### 4.2 Gastos/Descuentos/aumentos finales<!-- Spese/Sconti/maggiorazioni finali -->

import SummariesExpenses from './../../import/sections/summaries-expenses.md'

<SummariesExpenses />