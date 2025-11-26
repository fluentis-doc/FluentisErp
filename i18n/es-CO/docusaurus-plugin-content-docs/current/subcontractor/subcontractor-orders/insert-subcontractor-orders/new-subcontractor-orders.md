---
title: Nueva orden de cuenta de trabajo
sidebar_position: 1
ai_generated: true
---

A través de este formulario es posible crear manualmente una nueva orden de cuenta de trabajo<!-- ordine di conto lavoro --> o bien modificar las que ya existen.

El formulario se abre desde la ruta **Cuenta de trabajo<!-- Conto Lavoro --> > Orden de cuenta de trabajo<!-- Ordine di conto lavoro --> > Nueva orden de cuenta de trabajo<!-- Nuovo ordine di conto lavoro -->** o mediante el botón **Nuevo<!-- Nuovo -->** que se encuentra en el formulario [Búsqueda de orden de cuenta de trabajo<!-- Ricerca ordine di conto lavoro -->](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/search-subcontractor-orders).

## **1. Datos obligatorios**<!-- Dati obbligatori -->

La aplicación requiere ingresar el **Proveedor** (Tercerista) titular de la orden<!-- ordine -->, utilizando la ayuda específica de cuentas. Automáticamente se propondrán: **Año**, **Número**, **Fecha** actuales y el **Tipo de documento** (propuesto igual al insertado en los *Parámetros de cuenta de trabajo<!-- Parametri di Conto Lavoro -->*), los cuales pueden ser modificados por el usuario.

## **2. Cabecera** {#header}<!-- Testata -->

Después de seleccionar los datos obligatorios en la sección superior, el usuario puede continuar el ingreso de los siguientes datos [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o con la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o bien, según los datos registrados en el perfil del tercerista<!-- terzista -->, la aplicación completa los campos *automáticamente*.

### 2.1 Datos del proveedor<!-- Dati fornitore -->

Al ingresar el **Proveedor**, se *proponen* automáticamente todos los datos específicos de la pestaña **Cabecera<!-- Testata -->**, según lo configurado previamente en la [ficha del proveedor<!-- anagrafica fornitore -->](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) en los campos correspondientes a su dirección y en las *secciones*:

- **Moneda**: [Moneda](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha valor](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Nación**: [Nación](/docs/guide/common/glossary/glossary-intro#country), [Idioma](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Entrega**: [Entrega](/docs/guide/common/glossary/glossary-intro#shipment), [Puerto](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje](/docs/guide/common/glossary/glossary-intro#packing), [Lista de precios](/docs/guide/common/glossary/glossary-intro#sales-price-list) y su [intervalo de validez](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.2 Pagos<!-- Pagamenti -->

Las **Soluciones de pago** se traen automáticamente desde la *Ficha del tercerista<!-- Anagrafica terzista --> > pestaña Pagos* y pueden ser modificadas o eliminadas por el usuario.

#### Botón específico<!-- Pulsante specifico -->

> **Eliminar pagos<!-- Cancella pagamenti -->**: utilizado para eliminar las filas de pago seleccionadas.

### 2.3 Descuentos<!-- Sconti -->

Solo se proponen los descuentos predefinidos traídos desde la *Ficha del tercerista<!-- Anagrafica terzista --> > pestaña Descuentos* y pueden ser modificados o eliminados por el usuario.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

## **3. Artículos**<!-- Articoli --> 

El formulario consta de una cuadrícula en la cual el usuario puede ingresar manualmente los productos requeridos al tercerista<!-- terzista -->.  
Es posible ingresar artículos codificados y notas.

Esta ya estará completada en el caso de que la orden<!-- ordine --> provenga de *Programación general<!-- Schedulazione generale -->* o de *Procesamiento MRP<!-- Elaborazione MRP -->*, dejando la posibilidad al usuario de modificarla y/o agregar materiales adicionales a la lista de componentes de la orden<!-- ordine --> planificada. Tenga en cuenta que si la orden<!-- ordine --> planificada es de compra, la pestaña Materiales no estará activa.

### 3.1 Datos del artículo<!-- Dati articolo -->

En esta pestaña se visualiza la información relativa a la fila seleccionada en la cuadrícula de artículos, entre las cuales:

**Curso de elaboración<!-- Corso lavorazione -->**: en este campo se toma el indicador presente en los parámetros MRP del artículo llamado *Curso de Elaboración<!-- Corso Lavorazione -->*;  
**Cantidad a producir<!-- Quantità da produrre -->**: cantidad de la orden<!-- ordine --> inicial comunicada al tercerista<!-- terzista -->;  
**Cantidad ya recibida<!-- Quantità già rientrata -->**: total de la cantidad recibida y trabajada;  
**Fecha prevista de recepción<!-- Data previsto rientro -->**: fecha de llegada de la mercancía trabajada;  
**Notas de elaboración<!-- Note lavorazione -->**: son gestionadas por el usuario. Puede ser parametrizado y pueden aparecer datos sensibles del sistema, por ejemplo, la descripción de la fase de trabajo que generó la necesidad de elaboración;  
**Fase**: con doble clic se abre una ayuda de fases de elaboración desde la cual se puede seleccionar la fase y subfase correspondiente, y así asignar el material seleccionado a una determinada fase de elaboración del artículo;  
**Almacén<!-- Magazzino -->**: almacén<!-- magazzino --> de destino del producto trabajado;  
**Pesos<!-- Pesi -->**: se reportan el Peso neto y el Peso bruto totales de las líneas de artículo. Se reportan los pesos del perfil del artículo multiplicados por la cantidad de la línea.

## **3. Materiales**<!-- Materiali -->

El formulario consta de dos cuadrículas que muestran los materiales a enviar al tercerista<!-- terzista --> para la elaboración y los materiales que serán empleados al retornar el producto elaborado.  
Es posible ingresar artículos codificados, no codificados y notas.

Los materiales enviados y empleados pueden ser gestionados por el operador, siendo necesario ingresar la cantidad, el posible precio de la elaboración, la fecha prevista de retorno, la fecha de empleo del material. Estos datos ya estarán valorados en el caso de que la orden<!-- ordine --> provenga de *Programación general<!-- Schedulazione generale -->* o de *Procesamiento MRP<!-- Elaborazione MRP -->*.

### 3.1 Materiales a entregar<!-- Materiali da consegnare -->

**Código de artículo<!-- Codice articolo -->**: indica el material a entregar para la elaboración;

:::note Nota
En el caso de que la orden de cuenta de trabajo<!-- ordine di conto lavoro --> sea generada por la emisión de una *Orden planificada de cuenta de trabajo<!-- Ordine pianificato di conto lavoro -->* o de una *Orden planificada de producción<!-- Ordine pianificato di produzione -->* con una o más fases externas, los materiales a entregar no serán visualizados si: no existen los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) del artículo, o la marca *Considerar en cuenta de trabajo<!-- Considera in conto lavoro -->* no está habilitada en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), o si el *tipo de extracción<!-- tipo prelievo -->* en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) es *automático*, o si los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) el *tipo de extracción<!-- tipo prelievo -->* es *con lista* y la marca WIP no está habilitada.
:::

### 3.2 Materiales a emplear<!-- Materiali da impiegare -->

**Código de artículo<!-- Codice articolo -->**: indica el material a emplear al retorno del producido;  
**Empleo unitario<!-- Impiego unitario -->**: cantidad a emplear por cada unidad de retorno del producto trabajado, en caso de gestión automática de la programación de listas; este dato es valorado por el sistema;  
**Empleo total<!-- Impiego totale -->**: cantidad total a emplear para la elaboración completa en caso de gestión automática de la programación de listas; este dato es valorado por el sistema;  
**% merma<!-- % scarto -->**: cantidad extra a emplear que corresponde a la merma;  
**Fecha prev. de empleo<!-- Data prev. impegno -->**: en base a esta fecha el sistema planifica la disponibilidad de la necesidad.

## **4. Resúmenes**<!-- Riepiloghi -->

En los Resúmenes se muestran las informaciones principales de todo el documento.

### 3.1 Descuentos finales de artículos<!-- Sconti finali articoli -->

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 3.2 Gastos<!-- Spese -->

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 3.3 Totales del documento<!-- Totali documento -->

**Importe bruto de artículos<!-- Importo lordo articoli -->**: representa la suma de los valores de todos los artículos;  
**Anticipo<!-- Acconto -->**: representa el valor de cualquier anticipo recibido para el documento;  
**Importe de regalo<!-- Importo omaggio -->**: representa el importe de los artículos de tipo regalo insertados en la pestaña *Artículos*;  
**Total de descuentos aplicados<!-- Totale sconti applicati -->**: representa el valor total de los descuentos aplicados a los artículos, pero sin los descuentos finales;  
**Importe neto de artículos<!-- Importo netto articoli -->**: *Importe bruto de artículos* – *Total de descuentos aplicados*;  
**Total de descuentos finales<!-- Totale sconti finali -->**: representa el valor de los descuentos finales expresados como porcentaje sobre el importe bruto de los artículos;  
**Importe neto de descuentos finales<!-- Importo netto sconti finali -->**: *Importe neto de artículos* - *Total de descuentos finales*;  
**Gastos de cobro<!-- Spese di incasso -->**: representa la suma de los gastos de cobro ingresados en la cuadrícula de *Gastos*;  
**Gastos de timbre<!-- Spese bollo -->**: representa la suma de los gastos de timbre ingresados en la cuadrícula de *Gastos*;   
**Base imponible<!-- Imponibile -->**: *Importe neto de artículos* – *Descuentos finales* + *Total de gastos no documentados* + *Total de gastos documentados*;  
**Impuesto<!-- Imposta -->**: representa la suma de los valores contenidos en los resúmenes de IVA;  
**Total<!-- Totale -->**: *Base imponible* + *IVA*.