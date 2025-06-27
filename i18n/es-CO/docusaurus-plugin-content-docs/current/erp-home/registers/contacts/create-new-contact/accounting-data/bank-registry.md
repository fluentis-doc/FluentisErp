---
title: Registros de bancos 
sidebar_position: 1
---

## **1. Referencias**

El registro bancario presenta en la pestaña **Referencias** los datos fundamentales relacionados con la cuenta corriente a indicar:

**ISO**: indicar los primeros 4 caracteres del IBAN, luego 2 caracteres para el código de país (ej. IT) + 2 para el código de la institución;  

Los códigos **ABI**, **CAB**, el número de **C/C** (para los bancos italianos se deben indicar 5 caracteres para abi y cab - por lo tanto también el cero inicial - y todos los 12 caracteres de la cuenta corriente italiana), el código internacional **Swift**, el **CIN**;  

**Divisa**: especificar la divisa con la que está expresada la cuenta bancaria;  

Es posible ingresar algunos datos útiles para la interacción con **DocFinance®** (programa de tesorería externo al sistema):  

**R.B.N.**: representa el tipo de relación (ej. Cuenta corriente, cuenta en divisas...);  

**Banco Doc Finance**: el nombre del banco a utilizar para el análisis de flujos por banco y otras funciones permitidas por DocFinance;  

**Código banco**: un posible código de banco libre;  

**SIA** código para el envío de archivos telemáticos italianos, ej. para los Recibos bancarias, (si no se indica, se utiliza el que está por defecto ingresado en la tabla de Empresas, Inicio > Tablas > Generales).  

**Banco de apoyo** permite vincular el registro bancario al respectivo código de [**banco de apoyo**](/docs/configurations/tables/general-settings/reference-bank) genérico. Esto puede servir para canalizar automáticamente los movimientos financieros de los deudores y evaluarlos en los análisis de flujo de caja.  

La sección relacionada con la *Facturación electrónica* actualmente no está en uso.

## **2. Detalle**

En la primera sección ***Importe Comisiones*** se pueden indicar:  

**Por operación**: utilizado en el abono de efectos;  
**Por descubierto máximo** (no utilizado automáticamente);  
**Varios** (no utilizado automáticamente);  
**Por incumplimiento**: Utilizado como reintegro de gastos y contabilización a costo en el procedimiento de creación de incumplimientos, e ingresado en la cabecera del nuevo incumplimiento en el campo correspondiente.  
**Anticipos de Factura** utilizado para insertar automáticamente una comisión en el módulo [Anticipos&Cobros](/docs/treasury/advance/advances-collections).  

En las cuadrículas **Activos**/**Pasivos** están los tramos de tasas de interés aplicables.  

**Fecha**: entrada en vigor del tramo;  

**Tramo**: valor hasta el cual es válida la tasa;  

**Tasa**: valor porcentual;  

**Código Tasa**: combo box que permite la elección de los tipos ingresados en la tabla relacionada con *Tipo de tasa bancaria (Tipo tasso bancario)* (*Configuración > Tablas > Configuración general > Tipo Tasso Bancario*). La tabla permite codificar tipos de tasa bancaria y definir si son válidas para intereses activos o pasivos.  

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/detail/image04.png)

#### Botones específicos  
> **Eliminar activos**: para eliminar las tasas activas seleccionadas.  
> **Eliminar pasivos**: para eliminar las tasas pasivas seleccionadas.  

## **3. Línea de crédito**

En esta pestaña se indican los castelletti para las presentaciones de efectos en el banco, diferenciado por tipología en "**Al cobro**", "**Al descuento**" y por el **Anticipo** sobre facturas (seleccionando la modalidad **Diferenciado**) o un castelletto único global (seleccionando la modalidad **Global**).  

El valor del castelletto concedido lo ingresa el usuario en función de las condiciones bancarias vigentes, mientras que el valor del castelletto utilizado, y por ende el residual, serán actualizados automáticamente por Fluentis en función de las listas de presentación de efectos referidas al banco del registro en uso y gestionadas en el módulo *Tesorería*.

#### Botón específico

> **Actualizar**: para actualizar los valores mostrados en la pestaña.  

## **4. Asignaciones**

Esta pestaña es un registro manual donde se indica el detalle de las matrices de cheques y los referencias de los cheques emitidos.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/cheques/image01.png)

#### Botones específicos  
> **Eliminar matrices**: para eliminar la matriz seleccionada.  
> **Eliminar detalles de matrices**: para eliminar el detalle de los cheques seleccionados.  

## **5. Días bancarios**

En este formulario se pueden asociar los días valor a las causas contables correspondientes, de modo que se automatice el cálculo de la fecha de valor bancario en los movimientos contables (si las causas contables prevén la gestión de los días bancarios).

La opción **Días hábiles** impone la evaluación de si el día es laborable o festivo (teniendo en cuenta también la tabla de Festividades definidas para la empresa en Inicio > Utilidades > Festividades anuales).

:::note Nota
La causa seleccionada deberá estar habilitada para visualizar el dato relativo a la Fecha de valor bancario.
:::

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/bank-days/image02.png)

De esta manera, el dato podrá ser visualizado dentro del registro contable que utiliza la causa en cuestión y que se refiere al banco que tiene la configuración activa.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/bank-days/image03.png)

#### Botones específicos 
> **Nuevo**: para colocar el cursor en la inserción de un nuevo detalle de días.  
> **Eliminar**: para eliminar los detalles de los días bancarios seleccionados.