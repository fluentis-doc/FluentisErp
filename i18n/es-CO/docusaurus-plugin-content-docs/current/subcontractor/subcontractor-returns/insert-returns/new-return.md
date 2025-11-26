---
title: Nuevo reingreso
sidebar_position: 1
ai_generated: true
---

Por medio de este formulario es posible crear manualmente un nuevo reingreso de cuenta trabajo<!-- conto lavoro --> o bien se pueden modificar los ya existentes.

El formulario se abre mediante la ruta **Cuenta Trabajo<!-- Conto Lavoro --> > Reingresos<!-- Rientri --> > Nuevo reingreso<!-- Nuovo Rientro -->** o mediante el botón **Nuevo<!-- Nuovo -->** que se encuentra en el formulario [Búsqueda de reingresos<!-- Ricerca Rientri -->](/docs/subcontractor/subcontractor-returns/insert-returns/search-returns).

## **1. Datos obligatorios<!-- Dati obbligatori -->**

La aplicación requiere ingresar el **Proveedor** (Subcontratista) titular de la orden, utilizando la ayuda de cuentas correspondiente, el **Tipo**, el **Número** y la **Fecha de reingreso<!-- Data rientro -->** real (que normalmente corresponde a la fecha actual).

**Controlado<!-- Controllato -->**: la casilla se activa manualmente por parte del usuario;  
**Valorizado y Cargado<!-- Valorizzato e Caricato -->**: se activan automáticamente en el momento en que se realiza, en orden, la valorización y el registro en almacén<!-- magazzino --> del documento.

> **Reingresos previstos<!-- Rientri previsti -->**: el botón se activa tras guardar los datos obligatorios y abre el formulario *Ejecución desde pedido<!-- Evasione da ordine -->*, en el que el usuario ve todas las órdenes de cuenta trabajo<!-- conto lavoro --> que aún tienen líneas parcial o totalmente no resueltas y desde las que es posible generar reingresos;  
> **Registro de reingresos<!-- Registrazione rientri -->**:

## **2. Cabecera<!-- Testata -->**

Después de seleccionar los datos obligatorios en la sección superior, el usuario puede continuar ingresando los siguientes datos [manualmente](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) o bien mediante la [ayuda de campo](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), o bien, basado en los datos insertados en la ficha de subcontratista, la aplicación completa los campos *automáticamente*.

Al ingresar el **Proveedor**, se *proponen* automáticamente todos los datos específicos de la pestaña **Cabecera<!-- Testata -->**, según los datos configurados previamente en la [ficha del proveedor<!-- anagrafica fornitore -->](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro)** en los campos correspondientes a su dirección y en las *secciones*:  

- **Divisa**: [Divisa](/docs/guide/common/glossary/glossary-intro#currency), [Cambio](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Fecha valor<!-- Data valuta -->](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Nación**: [Nación<!-- Nazione -->](/docs/guide/common/glossary/glossary-intro#country), [Idioma<!-- Lingua -->](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone)
- **Envío<!-- Spedizione -->**: [Envío<!-- Spedizione -->](/docs/guide/common/glossary/glossary-intro#shipment), [Puerto<!-- Porto -->](/docs/guide/common/glossary/glossary-intro#carriage), [Embalaje<!-- Imballo -->](/docs/guide/common/glossary/glossary-intro#packing), [Lista de precios<!-- Listino -->](/docs/guide/common/glossary/glossary-intro#sales-price-list) y su [intervalo de validez<!-- intervallo di validità -->](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.1 Pagos<!-- Pagamenti -->

Las **Soluciones de pago<!-- Soluzioni di pagamento -->** se cargan automáticamente desde la *Ficha del subcontratista > pestaña Pagos* y pueden ser modificadas/eliminadas por el usuario.

#### Botón específico  
> **Eliminar pagos<!-- Cancella pagamenti -->**: se utiliza para eliminar las filas de pago seleccionadas.

### 2.2 Descuentos<!-- Sconti -->

Se proponen solo los descuentos predeterminados extraídos de la *Ficha del subcontratista > pestaña Descuentos* y pueden ser modificados/eliminados por el usuario.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

## Procedimientos cabecera<!-- Procedure testata -->:

### *Ejecución desde pedido<!-- Evasione da ordine -->*

En esta ventana, que se abre utilizando el botón *Reingresos previstos<!-- Rientri Previsti -->* situado en la ribbon bar, es posible filtrar los pedidos de cuenta trabajo<!-- conto lavoro -->.

En la cuadrícula inferior aparece una fila por cada pedido de cuenta trabajo<!-- ordine di conto lavoro --> que aún no ha sido resuelto o ha sido resuelto parcialmente.  
El usuario, con doble clic en la línea del pedido, tiene la posibilidad de desplegar las líneas que aún están pendientes de regresar por parte del subcontratista; puede seleccionarlas o ingresar la cantidad en cada una de ellas y presionar el botón *Adquisición<!-- Acquisizione -->* para transferir las cantidades de los artículos seleccionados dentro de la cuadrícula de la pestaña *Artículos<!-- Articoli -->* del reingreso de cuenta trabajo<!-- rientro di conto lavoro -->.

#### Botones específicos  
> **Buscar pedidos<!-- Ricerca ordini -->**: permite aplicar los filtros de búsqueda a toda la base de datos de Pedidos de Cuenta Trabajo<!-- Ordini di Conto Lavoro --> ingresados y aún no resueltos o solo parcialmente resueltos;  
> **Adquisición<!-- Acquisizione -->**: llama al procedimiento que transfiere a la cuadrícula de la pestaña Artículos Reingresados del reingreso de cuenta trabajo<!-- rientro di conto lavoro --> los artículos seleccionados en la ventana inferior;  
> **Ejecución forzada de pedido<!-- Evasione forzata ordine -->**: llama al procedimiento que permite dar por resuelta, de manera forzada, la línea del pedido de cuenta trabajo<!-- ordine di conto lavoro --> que el usuario está transfiriendo;  
> **Seleccionar todos<!-- Seleziona tutti -->**: permite seleccionar todas las filas presentes en la sección derecha de la ventana donde aparecen los artículos a transferir;  

### *Registro de reingresos<!-- Registrazione rientri -->*

Ver detalles sobre el tema en [Registro de reingresos<!-- Registrazione rientri -->](/docs/subcontractor/subcontractor-returns/procedure/returns-record).

## **3. Artículos<!-- Articoli -->**

El formulario consta de una cuadrícula, dentro de la cual el usuario puede ingresar manualmente los artículos reingresados.

### 3.1 Datos

En esta pestaña se visualizan las informaciones relativas a la línea seleccionada en la cuadrícula de artículos, entre las cuales:

**Orden prod.<!-- Ordine prod. -->**: se trata de la orden de producción cuya fase externa ha generado la línea de pedido de cuenta trabajo<!-- ordine di conto lavoro --> que ha sido resuelta con la línea de reingreso seleccionada;

**Proyecto**: en este campo se visualiza el proyecto ligado a la línea del reingreso. Normalmente se carga el proyecto insertado en la línea del pedido de cuenta trabajo<!-- ordine di conto lavoro --> del que se ha generado la línea de reingreso;

**Pesos**: se muestran el Peso neto y el Peso bruto totales de las líneas de artículo. Se muestran los pesos de la ficha de artículo multiplicados por la cantidad de línea.

### 3.2 Lotes/SN

En esta pestaña se da la posibilidad de establecer, para la línea seleccionada en la cuadrícula, los lotes o los números de serie a cargar en almacén<!-- magazzino --> con la cantidad de artículo reingresado, en el caso de que se trate de varios lotes diferentes reingresados con la misma línea de reingreso. Dependiendo de si el artículo se gestiona por lotes o por nombres de serie se activa la cuadrícula correspondiente de esta pestaña.

:::note Nota
La suma de las cantidades de los distintos lotes/números de serie debe corresponder exactamente a la cantidad reingresada de la línea de artículo.
:::

## **4. Materiales**

En esta pestaña se muestran los materiales que el subcontratista debería haber utilizado para producir lo que se ha incluido en la pestaña *Artículos*. La propuesta de los materiales se define en los Parámetros de cuenta trabajo<!-- Conto lavoro -->, en el campo **Datos de materiales propuestos<!-- Dati materiali proposti -->**.

La sección *Artículo* contiene la información de la línea seleccionada en la pestaña *Artículos*.

### 4.1 Materiales

Para cada artículo visualizado arriba se pueden ingresar los materiales y sus detalles, o bien estos datos se proponen automáticamente.

### Detalle material

En esta pestaña se ingresan los materiales que no han sido utilizados por el subcontratista, ya sea por exceso o porque se descartaron.

#### Campos específicos

**Almacén<!-- Magazzino -->**: en esta columna se visualiza el código del almacén<!-- magazzino --> de Devoluciones, extraído de los parámetros de cuenta trabajo<!-- conto lavoro -->, visualizado automáticamente solo si se ingresa la cantidad devuelta en la línea del material, editable por el usuario;

**Causal<!-- Causale -->**: en esta columna se visualiza el código de la causal<!-- causale --> para la carga de Devoluciones, extraído de los parámetros de cuenta trabajo<!-- conto lavoro -->, visualizado automáticamente solo si se ingresa la cantidad devuelta sobre la línea del material, editable por el usuario. Si los materiales no utilizados por el usuario han sido descartados, entonces la causal<!-- causale --> no debe tener contrapartida. Si en cambio los materiales han sido devueltos, entonces la causal<!-- causale --> debe tener una contrapartida de carga para indicar dónde colocar los materiales devueltos.

**Carga de lote<!-- Carico Lotto -->**  
En la cuadrícula, el usuario puede indicar cuáles son los lotes de los materiales que han sido utilizados por el subcontratista. Las columnas visualizadas y las reglas de uso de la cuadrícula son las mismas respecto a la cuadrícula de lotes de la pestaña Lotes\SN que se encuentra en la pestaña *Artículos*.

## **5. Resúmenes<!-- Riepiloghi -->**

En los Resúmenes<!-- Riepiloghi --> se presentan las informaciones principales de todo el documento.

### 5.1 Descuentos finales de artículos<!-- Sconti finali articoli -->

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 5.2 Gastos<!-- Spese -->

Se proponen los gastos insertados en la ficha de contacto, en la pestaña *Gastos/Descuentos*. En esta cuadrícula cualquier gasto debe ser ingresado en positivo, cualquier descuento en negativo.      

Estos elementos se aplican a la totalidad del documento y no se distribuyen entre las líneas de los artículos. Pueden incluir costes adicionales, descuentos globales, o recargos aplicados a todo el documento. Si se configuran en la ficha de artículo, se proponen automáticamente al crear el documento.

- **Tipo/Descripción**: permite seleccionar los tipos de gasto (predefinidos en la tabla [Tipos de gasto<!-- Tipi spese -->](/docs/configurations/tables/general-settings/expenses-types)), atribuyendo al tipo el porcentaje de gasto a aplicar.  
- **Importe gasto**: indica el valor del gasto expresado en la divisa del documento.    
- **IVA**: indica la tasa de IVA a aplicar a los gastos ingresados.   
- **Porcentaje/Valor**: indica si calcular los gastos con un porcentaje o con un valor monetario predefinido. Seleccionando *valor* el importe del gasto debe ingresarse bajo la opción homónima.      
- **Porcentaje**: valor numérico del porcentaje de gasto.  

:::note Nota
Si el *Tipo de gasto<!-- Tipo spesa -->* insertado tiene la opción [repartido<!-- ripartito -->](/docs/configurations/tables/general-settings/expenses-types) activa, durante la carga del reingreso en almacén<!-- magazzino --> el gasto será repartido entre todos los artículos en base a los importes totales de cada línea de artículo. El resultado de la repartición del gasto es visible en el [registro de almacén<!-- registrazione di magazzino -->](/docs/logistics/warehouse/stock-records/record).    
1. Si los artículos tienen un precio: el gasto total será repartido proporcionalmente sobre los importes netos de cada artículo; el resultado se agregará al precio inicial del artículo en el campo *Importe total* del registro. Si en algunas líneas el importe es 0, se considerará como 1 para permitir una repartición del gasto en todos los artículos.   
2. Si todos los artículos tienen precio igual a 0: el gasto se distribuirá equitativamente entre todas las líneas de artículo y, partiendo de esta distribución, se calculará el *importe del movimiento<!-- importo movimento/importo gestionale -->* en el registro, tomando en cuenta las cantidades de cada artículo.   
:::

### 5.3 Totales del documento<!-- Totali documento -->

**Importe bruto de artículos**: representa la suma de los valores de todos los artículos;  
**Anticipo**: representa el valor del eventual anticipo recibido para el documento;  
**Importe de obsequio**: representa el importe de los artículos de obsequio insertados en la pestaña *Artículos*;  
**Total de descuentos aplicados**: representa el valor total de los descuentos aplicados sobre los artículos, pero sin considerar los descuentos finales;  
**Importe neto de artículos**: *Importe bruto de artículos* – *Total de descuentos aplicados*;  
**Total de descuentos finales**: representa el valor de los descuentos finales expresados en porcentaje sobre el importe bruto de los artículos;  
**Importe neto de descuentos finales**: *Importe neto de artículos* - *Total de descuentos finales*;  
**Gastos de cobranza**: representa la suma de los gastos de cobranza ingresados en la cuadrícula de *Gastos*;  
**Gastos de timbre**: representa la suma de los gastos de timbre ingresados en la cuadrícula de *Gastos*;   
**Base imponible**: *Importe neto de artículos* – *Descuentos finales* + *Total de gastos no documentados* + *Total de gastos documentados*;  
**Impuesto**: representa la suma de los valores contenidos en los resúmenes de IVA;  
**Total**: *Base imponible* + *IVA*.