---
title: nuovo pos
sidebar_position: 2
---

El formulario **Crea POS** se abre a través de la ruta **Ventas > POS > Crea POS** o mediante el botón **Nuevo** que se encuentra en el formulario de búsqueda *POS*.

## **1. Datos obligatorios (Dati obbligatori)**
En el formulario de ingreso se proponen automáticamente la **Fecha** y **Año** actuales, pero pueden ser modificados.

Para continuar con la creación de la factura de venta, el usuario debe ingresar los campos obligatorios:

- **Tipo POS** predeterminado en *Configuración > Tablas > Ventas > Tipos POS*.

- **Número**: a cada documento se le asigna un número según la numeración especificada por el usuario en la tabla [Numeración POS](/docs/configurations/tables/fluentis-numerations) y el tipo de documento que contiene la numeración.

- **conto**, usando el [help de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o escribiendo [directamente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) los datos. 

:::danger[Advertencia]
Este campo no es relevante para la gestión de la [**Contabilización POS**](/docs/sales/pos/pos-accounting). La causa contable asociada a la contabilización POS deberá incluir la definición de una cuenta de Cliente **FIJA** y detallada con el código de **subcuenta** (por ejemplo, una cuenta "Cliente corresponsales"). El tipo de importe de la línea de causa para el subcuenta clientes estará establecido como *Total Documento / registro*.
:::

- **anagrafica**: se trata de un campo alternativo al anterior *Cuenta* que puede ser utilizado para ingresar un *Contacto* que no está vinculado a ninguna subcuenta.

### 1.1 Totales documento (Totali documento)

En la parte derecha del formulario se presentan los totales del documento.

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

#### Botones específicos  
> **fiscale**: permite iniciar la generación del recibo fiscal interfaciándose con una caja registradora (previa configuración de la conexión mediante los campos apropiados).  
> **scarico pos**: permite la descarga POS, si se han ingresado el almacén y la causa para cada artículo.

## **testata**

Después de seleccionar los datos obligatorios en la sección superior, el usuario puede continuar ingresando los siguientes datos [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o con el [help de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

Al ingresar la **Cuenta**, se *proponen* automáticamente todos los datos específicos de la pestaña **Cabecera**, de acuerdo con los datos establecidos anteriormente en la [anagrafica de contacto](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), en los campos correspondientes a su dirección y en las *secciones*:  

- **divisa**: [Divisa](/docs/guide/common/glossary/glossary-intro#currency), [Cambio (Cambio)](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha de divisa (Data valuta)](/docs/guide/common/glossary/glossary-intro#currency-date).
- **nazione**: [Nación](/docs/guide/common/glossary/glossary-intro#country), [Idioma (Lingua)](/docs/guide/common/glossary/glossary-intro#language), [Zona (Zona)](/docs/guide/common/glossary/glossary-intro#zone)
- **spedizione**: [Envío](/docs/guide/common/glossary/glossary-intro#shipment), [Flete (Porto)](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje (Imballo)](/docs/guide/common/glossary/glossary-intro#packing), [Tarifa (Listino)](/docs/guide/common/glossary/glossary-intro#sales-price-list) y su [intervalo de validez (intervallo di validità)](/docs/guide/common/glossary/glossary-intro#validity-date).

#### Otros campos 

- **stato pos**: en fase de creación, el POS no presenta ningún indicador activo. La sección incluye los campos:
> - **stampato** se activa cuando se inicia la impresión del recibo.  
> - **scaricato** indica que el POS ha sido descargado del almacén manualmente o a través del procedimiento de descarga automática.  
> - **contabilizzato**: se selecciona automáticamente cuando el POS es contabilizado.  
> - **annullato**: el indicador activo permite anular el POS.

:::note
Los indicadores pueden ser eliminados mediante el procedimiento de restauración de operación.
:::

- **Nuestra referencia/su referencia (Nostro riferimento/vostro riferimento)**: en estos campos generalmente se indica una referencia interna y una referencia del cliente para el POS en cuestión.  

import InitialNote from './../../../import/fields/initial-note.md'

<InitialNote />

- **operatore**: permite ingresar al usuario que crea el documento. Los empleados han sido ingresados previamente en la tabla *Empleados* que se encuentra en la ruta *Inicio > Empleados*. 

- **progetto**: usando el [help de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) se puede vincular el documento a un proyecto.  
Esta asociación sólo funciona a nivel de la cabecera del artículo.

### 2.1 Pagos (Pagamenti)

Las **Soluciones de pago** se traen automáticamente de *Registro de clientes > pestaña Pagos* y pueden ser modificadas/a los usuarios.

#### Botón específico

> **cancella pagamenti**: utilizado para eliminar las líneas de pago seleccionadas.

### 2.2 Descuentos (Sconti)

Se proponen sólo los descuentos predeterminados recogidos de *Registro de clientes > pestaña Descuentos* y pueden ser modificados/eliminados por el usuario.
  
import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.3 Agentes

Indica el código del agente y su comisión para cada línea de artículo. Se propone el código y el porcentaje definidos en *Registro de clientes > pestaña Agentes*.

Si la comisión no está vinculada al cliente en su anagrafica, aún debe ser ingresado el agente, pero con comisión NULL, porque si fuera con comisión 0, significaría que el agente está asociado, pero no percibe comisión.

La misma sección se volverá a proponer para cada línea de artículo en su respectiva pestaña *Agentes*.

#### Botón específico

> **cancella agenti**: permite eliminar los agentes seleccionados.

## **articoli**

En esta pestaña se ingresan todos los artículos con los datos correspondientes.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

Para ingresar un **Nuevo artículo** en la cuadrícula, basta posicionarse en la línea para completar los diversos datos o utilizar el botón **Nuevo** presente en la barra de ribbon.

### 3.1 Datos obligatorios (Dati obbligatori)

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **tipo riga** ofrece la posibilidad de seleccionar los artículos con características diferentes:

> - **articolo codificato**: son los artículos codificados en anagrafica y pueden ser contabilizados en contabilidad analítica y registrados en almacén; 
> - **articolo note**: es una simple nota, no afecta la contabilidad y el almacén.
> - **articolo omaggio**: este tipo de línea indica que el artículo ingresado en esa línea será un artículo regalo, y por lo tanto no tendrá costo para el cliente;

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Variant from './../../../import/fields/item-variant.md'

<Variant />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **prezzo ivato**: representa el precio con IVA y debe ser ingresado previamente en *Registro de artículos > pestaña Costos* y puede ser diferente para los almacenes;

- **IVA** y **Imponible** se calculan automáticamente, tomando los valores del precio con IVA.

#### Botones específicos

import PackagesManagement from './../../../import/procedure/packages-management.md'
import UpdatePriceLists from './../../../import/buttons/update-price-lists.md'

> <PackagesManagement />
> <UpdatePriceLists />

### 3.2 Descuentos/Listas (Sconti/Listini)

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

### 3.3 Detalle del artículo (Dettaglio articolo)

Dentro de esta pestaña se reportan/se ingresan más información relacionada con el artículo.

- **Artículo**: retoma la información del artículo seleccionado en la cuadrícula de artículos.

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **progetto**: es el proyecto asociado al documento o puede ser asignado con la ayuda del help de campo.

- **marca**: representa la marca del artículo, recogida de su anagrafica o de la lista de precios del artículo;

- **fatturato vendite**: se propone el dato ingresado en *Registro de artículos > pestaña Generalidades*.

Si esto no está presente, no se propone ningún dato, pero al momento de la contabilización, se considerará el valor ingresado en el campo *Costo/Ingreso de contrapartida predeterminado* de *Registro de cliente > Datos contables > pestaña Administrativa*.

- **Almacén y causa (Magazzino e causale)**: se proponen el almacén y la causa de referencia que aparecerán automáticamente al momento de descargar los artículos relacionados del almacén. Los datos son recogidos de la tabla *Tipos POS*.

- **note**: ofrece la posibilidad de ingresar notas para cada artículo.

### 3.4 Agentes

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.5 Analítica (Analitica)

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

## **riepiloghi**

### 4.1 Descuentos finales de artículos (Sconti finali articoli)

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Gastos/Descuentos/Aumentos finales (Spese/Sconti/Maggiorazioni finali)

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.3 Resumen IVA (Riepiloghi IVA)

Se propone el resumen IVA del documento, para cada código IVA.

### 4.4 Resumen de vencimientos (Riepilogo scadenze)

Representa el resumen de los vencimientos del documento, para cada *tipo* y *solución* de pago. 

- **numero**: valor progresivo de la línea.  
- **pagamento**: representa el código alfanumérico del *Tipo de pago* recogido de *Cabecera del documento > pestaña Pagos*.  
- **importo**: Importe de la fecha calculada. Puede ser forzado manualmente, en cuyo caso se activa automáticamente el siguiente indicador *modifica manuale*. (Automáticamente se activan controles y avisos sobre la conciliación entre los valores de los vencimientos y el total de la factura)
- **data scadenza**: Fecha de la fecha calculada. Puede ser forzada manualmente, en cuyo caso se activa automáticamente el siguiente indicador *modifica manuale*.
- **spese di incasso**: Campo en el que se reportan los gastos de cobro calculados.
- **iva**: a aplicar a los gastos de cobro (puede establecerse manualmente)
- **Causa de pago (Causale pagamento)**: es posible insertar directamente en factura una causa contable que da lugar a un asiento automático de cobro/pago. Nota: prestar atención al template de la causa porque utilizará las cuentas presentes incluso sin subcuenta, razón por la cual está presente el siguiente campo.
- **Cuenta/subcuenta cliente (Conto/sottoconto cliente)**: cuenta que se utiliza para cobrar/pagar (caja o banco, por ejemplo) la fecha, sobrescribiendo la cuenta presente en la causa contable de pago (o cobro).