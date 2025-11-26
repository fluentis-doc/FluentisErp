---
title: Nuevo POS
sidebar_position: 2
ai_generated: true
---

El formulario **Crear POS** se abre desde la ruta **Ventas > POS > Crear POS<!-- Vendite > POS > Crea POS -->** o mediante el botón **Nuevo<!-- Nuovo -->** que se encuentra en el formulario de búsqueda *POS*.

## **1. Datos obligatorios**
En el formulario de inserción se proponen automáticamente la **Fecha** y **Año** actuales, pero pueden ser modificados.

Para continuar con la creación de la factura de venta, el usuario debe completar los campos obligatorios:

- **Tipo POS** predeterminado en *Configuración > Tablas > Ventas > Tipos POS*.

- **Número**: a cada documento se le asigna un número según la numeración especificada por el usuario en la tabla [Numeración POS](/docs/configurations/tables/fluentis-numerations) y al tipo de documento que contiene la numeración.

- **Cuenta<!-- Conto -->**, usando la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o digitando [directamente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) los datos.

:::danger[Atención]
Este campo no es relevante para la gestión de la [**Contabilización POS**](/docs/sales/pos/pos-accounting). La causa contable<!-- causale contabile --> asociada a la contabilización POS deberá tener en su interior la definición de una cuenta Cliente **FIJA** y detallada con código de **subcuenta<!-- sottoconto -->** (por ejemplo una cuenta "Cliente corrispettivi"). El tipo de importe en la línea de la causa para la subcuenta de clientes se configurará como *Total Documento / registro<!-- registrazione -->*.
:::

- **Datos de contacto<!-- Anagrafica -->**: campo alternativo al anterior *Cuenta<!-- Conto -->* que puede utilizarse para incluir un *Contacto* que no está vinculado a ninguna subcuenta<!-- sottoconto -->.

- **Código de barras<!-- Barcode -->**: permite una inserción fácil de los artículos. De hecho, al ingresar en este campo el código de barras del artículo se creará una nueva línea de artículo con cantidad 1 en la pestaña correspondiente.

### 1.1 Totales del documento

En la parte derecha del formulario están presentes los totales del documento.

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

#### Botones específicos  
> **Fiscal**: permite lanzar la generación del comprobante fiscal, interactuando con una caja registradora (previa configuración de la conexión mediante los campos correspondientes).  
> **Salida POS<!-- Scarico POS -->**: permite la salida POS, si para cada artículo se han indicado el almacén<!-- magazzino --> y la causa<!-- causale -->.


## **2. Encabezado<!-- Testata -->**

Después de seleccionar los datos obligatorios en la sección superior, el usuario puede continuar completando los siguientes datos [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o con la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

Al introducir la **Cuenta<!-- Conto -->** se proponen automáticamente todos los datos específicos de la pestaña **Encabezado<!-- Testata -->**, según los datos configurados previamente en la [ficha de contacto<!-- anagrafica contatto -->](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), en los campos correspondientes a su dirección y en las *secciones*:

- **Divisa**: [Divisa](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha valor](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Nación**: [Nación](/docs/guide/common/glossary/glossary-intro#country), [Idioma](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Envío**: [Envío](/docs/guide/common/glossary/glossary-intro#shipment), [Puerto](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje](/docs/guide/common/glossary/glossary-intro#packing), [Lista de precios](/docs/guide/common/glossary/glossary-intro#sales-price-list) y su [intervalo de validez](/docs/guide/common/glossary/glossary-intro#validity-date)

#### Otros campos

- **Estado POS**: durante la creación, el POS no presenta ninguna bandera activa. La sección comprende los campos:
> - **Impresa**: se activa cuando se lanza la impresión del comprobante.  
> - **Salida**: indica que el POS fue descargado del almacén<!-- magazzino --> manualmente o mediante el procedimiento de baja automática.  
> - **Contabilizado**: se selecciona automáticamente cuando el POS se contabiliza.  
> - **Anulado**: la bandera activa permite anular el POS.

:::note
Las banderas pueden ser retiradas con el procedimiento de restauración de operación.
:::

- **Nuestra referencia / su referencia**: en estos campos normalmente se indica una referencia interna y una referencia de cliente para el POS en cuestión.  

import InitialNote from './../../../import/fields/initial-note.md'

<InitialNote />

- **Operador**: permite especificar el usuario que crea el documento. Los empleados han sido ingresados previamente en la tabla *Empleados* que se encuentra en la ruta *Home > Empleados*.

- **Proyecto**: usando la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) es posible vincular el documento a un proyecto.  
Esta asociación funciona solo a nivel de encabezado de artículo.

### 2.1 Pagos

Las **Soluciones de pago** se traen automáticamente desde la *Ficha del cliente > pestaña Pagos* y pueden ser modificadas/eliminadas por el usuario.

#### Botón específico

> **Eliminar pagos**: utilizado para borrar las líneas de pago seleccionadas.

### 2.2  Descuentos

Solo se proponen los descuentos predeterminados tomados de la *Ficha del cliente > pestaña Descuentos* y pueden ser modificados/eliminados por el usuario.
  
import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.3 Agentes

Indica el código del agente y su comisión para cada línea de artículo. Se propone el código y el porcentaje definidos en la *Ficha del cliente > pestaña Agentes*.

Si la comisión no está vinculada al cliente en su ficha, igualmente debe agregarse el agente pero con comisión NULA, ya que si fuera con comisión 0, significaría que el agente está asociado, pero no percibe comisión.

La misma sección se mostrará para cada línea de artículo en la pestaña correspondiente *Agentes*.

#### Botón específico

> **Eliminar agentes**: permite borrar los agentes seleccionados.

## **3. Artículos**

En esta pestaña se ingresan todos los artículos junto con sus datos correspondientes.

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace: [Funcionalidades, botones y campos comunes](/docs/guide/common).

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Para insertar un **Nuevo artículo** en la cuadrícula basta posicionarse en la fila para completar los diferentes datos o utilizar el botón **Nuevo<!-- Nuovo -->** presente en la cinta de opciones.

### 3.1 Datos obligatorios

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Tipo de línea<!-- Tipo riga -->** ofrece la posibilidad de seleccionar artículos con diferentes características:

> - **Artículo codificado**: son los artículos codificados en ficha y pueden ser contabilizados en contabilidad analítica y registrados en almacén<!-- magazzino -->; 
> - **Artículo nota**: es una simple nota, no afecta a la contabilidad ni al almacén<!-- magazzino -->.
> - **Artículo obsequio**: este tipo de línea indica que el artículo insertado en esa línea será un artículo obsequio, por lo que no tendrá un costo para el cliente;

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Variant from './../../../import/fields/item-variant.md'

<Variant />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Precio con IVA<!-- Prezzo ivato -->**: representa el precio con IVA y debe haberse ingresado previamente en *Ficha de artículos > pestaña Costos*. Puede ser diferente por almacenes<!-- magazzini -->.

- **IVA** e **Base imponible<!-- Imponibile -->** se calculan automáticamente, tomando los valores del precio con IVA.

#### Botones específicos

import PackagesManagement from './../../../import/procedure/packages-management.md'
import UpdatePriceLists from './../../../import/buttons/update-price-lists.md'

> <PackagesManagement />
> <UpdatePriceLists />

### 3.2 Descuentos/Listas de precios

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

### 3.3 Detalle de artículo

Dentro de esta pestaña se reportan/se ingresan informaciones adicionales relativas al artículo.

- **Artículo**: retoma la información del artículo seleccionado en la cuadrícula de artículos.

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Proyecto**: es el proyecto asociado al documento o puede ser asignado utilizando la ayuda de campo.

- **Marca**: representa la marca del artículo, tomada de su ficha o de la lista de precios del artículo;

- **Ventas facturadas<!-- Fatturato vendite -->**: se propone el valor ingresado en la *Ficha de artículos > pestaña Generalidades*.

Si este no está presente, no se propone ningún dato pero al momento de la contabilización, se considerará el valor ingresado en el campo *Costo/Ingreso de contrapartida predeterminado* de la *Ficha del cliente > Datos contables > pestaña Administrativa*.

- **Almacén y causa<!-- Magazzino e causale -->**: se proponen el almacén<!-- magazzino --> y la causa<!-- causale --> de referencia que aparecerán automáticamente al momento de la salida de los artículos respectivos del almacén<!-- magazzino -->. Los datos se retoman de la tabla *Tipos POS*.

- **Notas**: permite ingresar notas para cada artículo.

### 3.4 Agentes

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.5 Analítica

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

## **4. Resúmenes<!-- Riepiloghi -->**

### 4.1 Descuentos finales por artículo

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Gastos/Descuentos/Recargos finales

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.3 Resúmenes de IVA

Se muestra el resumen de IVA del documento, para cada código de IVA.

### 4.4 Resumen de vencimientos

Representa el resumen de los vencimientos del documento, para cada *tipo* y *solución* de pago.
 
- **Número**: valor progresivo de la línea.  
- **Pago**: representa el código alfanumérico del *Tipo de pago* tomado del *Encabezado del documento > pestaña Pagos*.  
- **Importe**: Importe del vencimiento calculado. Puede ser modificado manualmente, y en ese caso se activa automáticamente la siguiente bandera *Modificación manual*. (Se activan controles y avisos automáticos sobre la cuadratura entre los valores de los vencimientos y el total de la factura)
- **Fecha de vencimiento**: Fecha del vencimiento calculada. Puede ser modificada manualmente, y en ese caso se activa automáticamente la siguiente bandera *Modificación manual*.
- **Gastos de cobro**: Campo en el que se indican los gastos de cobro calculados.
- **IVA**: a aplicar a los gastos de cobro (puede establecerse manualmente también)
- **Causa de pago<!-- Causale pagamento -->**: es posible ingresar directamente en la factura una causa contable<!-- causale contabile --> que origine un apunte automático de cobro/pago. NB prestar atención a la plantilla de la causa porque utilizará las cuentas presentes incluso sin subcuenta<!-- sottoconto -->, motivo por el cual existe el siguiente campo.
- **Cuenta/subcuenta del cliente<!-- Conto/sottoconto cliente -->**: cuenta que se utiliza para cobrar/pagar (por ejemplo, caja o banco) el vencimiento sobrescribiendo la cuenta presente en la causa contable<!-- causale contabile --> de pago (o cobro).