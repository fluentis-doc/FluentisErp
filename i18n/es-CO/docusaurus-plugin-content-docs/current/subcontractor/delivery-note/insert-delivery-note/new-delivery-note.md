---
title: Nuevo DDT de Entrega
sidebar_position: 1
ai_generated: true
---

El formulario se abre a través de la ruta **Cuenta Trabajo<!-- Conto Lavoro --> > Órdenes > Nueva Orden de Cuenta Trabajo<!-- Nuovo Ordine di Conto Lavoro -->** o mediante el botón **Nuevo<!-- Nuovo -->** que se encuentra en el formulario [Búsqueda de órdenes de C/T<!-- Ricerca ordini di C/L -->](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders).

## **1. Datos obligatorios<!-- Dati obbligatori -->**

La aplicación solicita ingresar el **Proveedor** (Subcontratista<!-- Terzista -->) titular del DDT, utilizando la ayuda de cuentas presente en la cabecera del DDT. Se propondrán automáticamente: **Año**, **Número**, **Fecha** actuales y el **Tipo DDT de Entrega<!-- Tipo DDT di Consegna -->** (propuesto igual al ingresado en los *Parámetros de Cuenta Trabajo<!-- Parametri di Conto Lavoro -->*), que pueden ser modificados por el usuario.

## **2. Cabecera<!-- Testata -->**

Después de seleccionar los datos obligatorios en la sección superior, el usuario puede continuar el ingreso de los siguientes datos [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o con la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o, en base a los datos ingresados en la ficha del subcontratista<!-- terzista -->, la aplicación completa los campos *automáticamente*.

### 2.1 Datos del proveedor<!-- Dati fornitore -->

Al ingresar el **Proveedor**, se *proponen* automáticamente todos los datos específicos de la pestaña **Cabecera<!-- Testata -->**, según los datos previamente configurados en la [ficha del proveedor<!-- anagrafica fornitore -->](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) en los campos correspondientes a su dirección y en las *secciones*:  

- **Divisa**: [Divisa](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha valor<!-- Data valuta -->](/docs/guide/common/glossary/glossary-intro#currency-date).
- **País<!-- Nazione -->**: [País<!-- Nazione -->](/docs/guide/common/glossary/glossary-intro#country), [Idioma<!-- Lingua -->](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Envío<!-- Spedizione -->**: [Envío<!-- Spedizione -->](/docs/guide/common/glossary/glossary-intro#shipment), [Puerto<!-- Porto -->](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje<!-- Imballo -->](/docs/guide/common/glossary/glossary-intro#packing), [Lista de precios<!-- Listino -->](/docs/guide/common/glossary/glossary-intro#sales-price-list) y su [intervalo de validez<!-- intervallo di validità -->](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.2 Datos opcionales de cabecera<!-- Dati facoltativi testata -->

**Estado DDT**: con estas 2 banderas se identifica el estado del DDT, que puede ser impreso (después de que se haya lanzado la impresión física del reporte del DDT de entrega) y descargado (después de que se haya realizado la salida del DDT mismo del almacén<!-- magazzino -->). Si el DDT no ha sido impreso no es posible descargarlo;  

**Nuestro/Vuestro referente**: cuando se completa el procedimiento de [Ejecución desde orden<!-- Evasione da ordine -->](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), se propone también la información presente en el campo homónimo de la orden;  

**Proyecto**: usando la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) se puede vincular el documento a un proyecto.  

#### Botones específicos

> [Entregas previstas<!-- Consegne previste -->](/docs/subcontractor/delivery-note/insert-delivery-note/new-delivery-note): llama al procedimiento para crear un DDT desde una orden. Se activa con la inserción del proveedor y del tipo de DDT. La orden a despachar debe haber marcado la opción *Impreso<!-- Stampato -->* y tener la *Fecha de confirmación de orden<!-- Data conferma ordine -->* completada;  
> **Descarga automática<!-- Scarico automatico -->**: se utiliza para descargar automáticamente el almacén<!-- magazzino --> con los artículos seleccionados. Este campo será editable solo una vez activada la opción *Impreso<!-- Stampato -->*.

### 2.3 Pagos<!-- Pagamenti -->

Las **Soluciones de pago** se reportan automáticamente desde la *Ficha del proveedor > pestaña Pagos* y pueden ser modificadas/eliminadas por el usuario.

Si al **Tipo de pago** va asociado un descuento financiero, el importe del descuento se considera solo a efectos contables, es decir, en los vencimientos del documento y no en el total del DDT.

Si el documento se inicia desde una orden, los tipos de pago pueden ser recuperados del primer documento o de la ficha del proveedor. 

#### Botón específico

> **Insertar/Eliminar pagos<!-- Inserisci/Cancella pagamenti -->**: utilizados para insertar/eliminar las líneas de pago seleccionadas.

### 2.4 Descuentos<!-- Sconti -->

Solo se proponen los descuentos predefinidos tomados de la *Ficha del proveedor > pestaña Descuentos* y pueden ser modificados/eliminados por el usuario.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Agentes

Indica el código del agente y su comisión para cada línea de artículo. Se propone el código y el porcentaje definidos en la *Ficha del subcontratista<!-- Anagrafica terzista --> > pestaña Agentes*.

Si la comisión no está vinculada al subcontratista en su ficha, de todas formas, se debe ingresar el agente pero con comisión NULL, porque si fuera con comisión 0, significaría que el agente está vinculado pero no recibe comisión.

La misma sección se repetirá para cada línea de artículo en la pestaña *Agentes* correspondiente.

#### Botón específico

**Eliminar agentes<!-- Cancella agenti -->**: permite eliminar los agentes seleccionados.

## **Procedimientos cabecera<!-- Procedure testata -->:**

### *Ejecución DDT<!-- Evasione DDT -->*

En la cabecera del DDT de entrega, al pulsar el botón **Entregas Previstas<!-- Consegne Previste -->** se abrirá el formulario donde es posible filtrar las órdenes relativas al cliente del documento.

A través de este procedimiento es posible crear un DDT de entrega a partir de la ejecución de la orden relativa. Es posible insertar los artículos dentro del DDT, despachando total o parcialmente una orden completa o sólo una línea.

Para poder utilizar este procedimiento se deben cumplir ciertas condiciones iniciales:

 - el/los proveedor/es de las órdenes debe/n ser el mismo que el del DDT;
 - la orden que se desea despachar debe tener activada la opción *Impreso<!-- Stampato -->*;
 - los tipos de documentos deben ser compatibles.

#### Procedimiento

Los filtros para proveedor y moneda se tomarán automáticamente en función del proveedor seleccionado en el DDT.

Una vez configurados todos los *Filtros* deseados, al hacer clic en el botón de *Buscar<!-- Ricerca -->* se visualizará en la cuadrícula una línea por cada orden impresa y no despachada o despachada parcialmente.

:::note AVISO<!-- AVVISO -->
El procedimiento toma todos los datos presentes en la orden y, como consecuencia, se aplicarán las condiciones presentes en la orden, incluso si estas han cambiado actualmente.
:::

En la cuadrícula de resultados, el usuario tiene la posibilidad de:

 1. seleccionar la *orden completa*. Para ello basta con seleccionar la bandera presente al inicio de la línea de la orden.
 2. seleccionar solo *algunos* de los *artículos* propuestos. Para ello basta con seleccionar la bandera presente al inicio de la línea del artículo.
 3. seleccionar solo *algunos artículos* pero solo por una *cantidad determinada*. En este caso deberá modificar la cantidad a despachar.

Para completar el procedimiento será necesario hacer clic en el botón **Transferencia<!-- Trasferimento -->**, que recuperará todos los datos presentes en la orden y los reportará en el DDT.

#### Botones específicos

> **Buscar<!-- Ricerca -->** permite aplicar los filtros de búsqueda dentro de la base de datos de las órdenes ingresadas y no aún despachadas o solo parcialmente despachadas.  
> **Transferencia<!-- Trasferimento -->** permite transferir a la cuadrícula de la pestaña Entregas del DDT de cuenta trabajo los artículos seleccionados en la ventana inferior.  
> **Expandir<!-- Esplodi -->** permite expandir todo el árbol de las órdenes en la cuadrícula inferior, para visualizar los artículos que contienen.  
> **Comprimir<!-- Comprimi -->** permite comprimir la visualización de las líneas de artículo, mostrando solo las líneas de las órdenes.  
> **Seleccionar todos<!-- Seleziona tutti -->** permite seleccionar todos los artículos de la lista.  

## **3. Entrega<!-- Consegna -->**

En esta pestaña se ingresan los materiales que deben ser entregados al subcontratista<!-- terzista -->. Pueden ser ingresados automáticamente a través del procedimiento de *Ejecución desde Orden<!-- Evasione da Ordine -->* o manualmente por el usuario.

#### Botones específicos
> **Insertar material<!-- Inserisci materiale -->**: llama al procedimiento para insertar un nuevo material en la cuadrícula de artículos de la pestaña 'Entregas'.  
> **Eliminar material<!-- Cancella materiale -->**: llama al procedimiento para eliminar un material de la cuadrícula de artículos de la pestaña 'Entregas'.

#### Campos específicos

**Número y año de orden C/T<!-- Ordine C/L numero e anno -->**: se visualizan el número y el año de la orden de cuenta trabajo<!-- ordine di conto lavoro --> de la que se extrajo la línea del artículo. Si la línea fue ingresada manualmente, esta columna queda vacía;

**Fecha prevista de entrega<!-- Data prevista consegna -->**: representa la fecha de entrega prevista del material, tomada de la pestaña *Materiales a entregar<!-- Materiali da consegnare -->* de la orden de cuenta trabajo<!-- ordine di conto lavoro --> de la que se generó la línea de artículo del DDT;

**Previsto retorno<!-- Previsto rientro -->**: representa la fecha prevista de retorno del producto terminado que deberá ser realizado por el subcontratista<!-- terzista --> utilizando el material entregado, tomada de la pestaña *Artículos a producir<!-- Articoli da Produrre -->* de la orden de cuenta trabajo<!-- ordine di conto lavoro --> de la que se generó la línea de artículo del DDT;

**N° línea<!-- N. riga -->**: representa un simple número progresivo de la línea del documento, editable por el usuario;

**UM**: representa la unidad de medida de gestión del artículo entregado;

**Fase/Subfase<!-- Fase/Sottofase -->**: se visualizan el código de la fase y el código de la subfase de la fase de producción de la orden de producción a la que eventualmente está ligado el artículo; esto sucede si la orden de cuenta trabajo<!-- ordine di conto lavoro --> de la que se creó esta línea de DDT fue generada por una fase externa de una orden de producción;

**Cantidad<!-- Quantità -->**: representa la cantidad que se ha decidido entregar al subcontratista<!-- terzista -->, editable por el usuario;

**Almacén<!-- Magazzino -->**: representa el código del almacén<!-- magazzino --> del que se toma la mercancía para entregar al subcontratista<!-- terzista -->. El código del almacén<!-- magazzino --> se propone igual a aquel configurado en la línea de la pestaña 'Materiales a entregar<!-- Materiali da consegnare -->' de la orden de cuenta trabajo<!-- ordine di conto lavoro --> de la que se generó la línea DDT, pero es editable por el usuario. Si está activa la bandera presente en los Parámetros de Cuenta Trabajo<!-- Parametri di Conto Lavoro --> llamada 'Considerar almacenes según el tipo de DDT de entrega<!-- Considera magazzini in base al tipo DDT di consegna -->', el almacén<!-- magazzino --> propuesto será el configurado en la tabla de 'Tipos de Guía de Venta<!-- Tipi Bolla di Vendita -->', en la columna específica 'Almacén<!-- Magazzino -->';

**Causal<!-- Causale -->**: representa el código de la causal<!-- causale --> de almacén<!-- magazzino --> que se usará para realizar la extracción del almacén<!-- magazzino --> de donde debe salir la mercancía para entregar al subcontratista<!-- terzista -->. El código de la causal<!-- causale --> de almacén<!-- magazzino --> se propone igual a aquel configurado en la línea de la pestaña 'Materiales a entregar<!-- Materiali da consegnare -->' de la orden de cuenta trabajo<!-- ordine di conto lavoro --> de la que se generó la línea DDT, pero es editable por el usuario. Si está activa la bandera 'Considerar almacenes según el tipo DDT de entrega<!-- Considera magazzini in base al tipo DDT di consegna -->', la causal<!-- causale --> propuesta será la configurada en la tabla de 'Tipos de Guía de Venta<!-- Tipi Bolla di Vendita -->', en la columna específica 'Causal<!-- Causale -->';

**Precio<!-- Prezzo -->**: representa el precio unitario del artículo. Es una columna editable por el usuario y no obligatoria. Generalmente se usa cuando el DDT de entrega debe pasar por una aduana;

**IVA**: representa el código de IVA, o puede verse propuesto automáticamente por el procedimiento que lo toma de la ficha del subcontratista<!-- terzista --> o de la ficha del artículo presente en la línea, según el caso. La lista desplegable toma los datos de la tabla 'Tasas de IVA<!-- Aliquote IVA -->' que se encuentra en 'Configuraciones Generales<!-- Impostazioni Generali -->';

**Tipo de facturación de compras<!-- Tipo fatturato acquisti -->**: representa el código del Tipo de Facturación, o puede verse propuesto automáticamente por el procedimiento que lo toma de la ficha del artículo presente en la línea. La lista desplegable toma los datos de la tabla 'Tipo de Facturación de Compras<!-- Tipo Fatturato Acquisti -->' ubicada en las 'Tablas Área Compras<!-- Tabelle Area Acquisti -->';    

**Pesos<!-- Pesi -->**: se reportan el Peso neto y el Peso bruto totales de las líneas de artículo. Se reportan los pesos de la ficha del artículo multiplicados por la cantidad de la línea.

### 3.1 Descarga de lotes<!-- Scarico lotti -->

En esta pestaña se da la posibilidad de configurar, para la línea seleccionada en la cuadrícula, los lotes a descargar del almacén<!-- magazzino --> con la cantidad de artículo extraída para el envío al subcontratista<!-- terzista -->, en caso de que se trate de varios lotes diferentes extraídos con la misma línea del DDT.

La cuadrícula de lotes permite al usuario seleccionar el lote utilizando la función 'Ayuda Lotes<!-- Help Lotti -->', que filtra entre los lotes disponibles del artículo seleccionado en la cuadrícula superior. La información mostrada en la cuadrícula de lotes es: tipo de código de lote, código de lote, lote de proveedor, tipo de lote, fecha de inicio y fecha de vencimiento, cantidad del lote, ubicación, datos del proveedor del lote (cuenta, subcuenta<!-- sottoconto --> y razón social). Obviamente, la suma de las cantidades de los diferentes lotes debe corresponder exactamente a la cantidad entregada de la línea del artículo.

### 3.2 Datos del material<!-- Dati materiale -->

En esta pestaña se visualiza la siguiente información relativa a la línea seleccionada en la cuadrícula:

**Clase, código, descripción y variante del artículo, cantidad a entregar, unidad de medida, Almacén<!-- Magazzino -->, Causal<!-- Causale -->, Orden C/T<!-- Ordine C/L -->**: se trata de información reportada simplemente de la línea de DDT seleccionada;

**Proyecto**: representa la orden<!-- commessa --> de venta vinculada a la línea del DDT. Generalmente se recupera la orden<!-- commessa --> de venta ingresada en la línea de la orden de cuenta trabajo<!-- ordine di conto lavoro --> de la que se generó la línea del DDT;

**Notas**: en este campo el usuario puede ingresar una nota relativa a la línea seleccionada.

## **4. Resúmenes<!-- Riepiloghi -->**

En los Resúmenes se presentan las informaciones principales de todo el documento.

### 4.1 Descuentos finales<!-- Sconti finali -->

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Gastos/Descuentos/Aumentos finales<!-- Spese/Sconti/Maggiorazioni finali -->

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.3 Otros campos<!-- Altri campi -->

**Volumen**: se propone el volumen acumulado, resultado de la suma de los volúmenes de los artículos (el valor se toma de la *Ficha del artículo > pestaña Pesos/Dimensiones*), cuando la unidad de medida del volumen de los artículos corresponde a la ingresada en los parámetros de la factura. Solo se consideran los artículos que tienen este campo completado;  
**Peso neto**: se propone el peso neto acumulado, resultado de la suma de los pesos de los artículos (el valor se toma de la *Ficha del artículo > pestaña Pesos/Dimensiones*), cuando la unidad de medida del peso de los artículos corresponde a la ingresada en los parámetros de la factura. Solo se consideran los artículos que tienen este campo completado;  
**Peso bruto**: se propone el peso bruto acumulado, resultado de la suma de los pesos de los artículos (el valor se toma de la *Ficha del artículo > pestaña Pesos/Dimensiones*), cuando la unidad de medida del peso de los artículos corresponde a la ingresada en los parámetros de la factura. Solo se consideran los artículos que tienen este campo completado;  
**Bultos<!-- Colli -->**: se propone el número de bultos, según los datos ingresados en la *Ficha del artículo > pestaña Pesos/Dimensiones*, en los campos *Artículos en un bulto* o *Bultos para formar el artículo*. Solo se consideran los artículos que tienen este campo completado.  

### 4.3 Transporte

Se propone automáticamente el *Transporte a cargo de* presente en la *Ficha del contacto > pestaña [Entrega<!-- Consegna -->](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)* (opciones: Remitente/Destinatario/Transportista), pero los datos pueden ser modificados.

### 4.4 Totales del documento

**Importe bruto de artículos**: representa la suma de los valores de todos los artículos;  
**Anticipo**: representa el valor del posible anticipo recibido por el documento;  
**Importe obsequio**: representa el importe de los artículos tipo obsequio ingresados en la pestaña *Artículos*;  
**Total de descuentos aplicados**: representa el valor total de los descuentos aplicados a los artículos, pero sin los descuentos finales;  
**Importe neto de artículos**: *Importe bruto de artículos* – *Total de descuentos aplicados*;  
**Total de descuentos finales**: representa el valor de los descuentos finales expresados en tanto por ciento sobre el importe bruto de los artículos;  
**Importe neto de descuentos finales**: *Importe neto de artículos* - *Total de descuentos finales*;  
**Gastos de cobranza**: representa la suma de los gastos de cobranza ingresados en la cuadrícula de *Gastos*;  
**Gastos de timbre**: representa la suma de los gastos de timbre ingresados en la cuadrícula de *Gastos*;   
**Base imponible**: *Importe neto de artículos* – *Descuentos finales* + *Total de gastos no documentados* + *Total de gastos documentados*;  
**Impuesto**: representa la suma de los valores contenidos en los resúmenes de IVA;  
**Total**: *Base imponible* + *IVA*.