---
title: Registros de bancos (Anagrafiche banche)
sidebar_position: 1
---

## **1. Referencias (Riferimenti)**

El registro bancario presenta en la pestaña **Referencias (Riferimenti)** los datos fundamentales relacionados con la cuenta corriente a indicar:

**ISO**: indicar los primeros 4 caracteres del IBAN, luego 2 caracteres para el código de país (ej. IT) + 2 para el código de la institución;  

Los códigos **ABI**, **CAB**, el número de **C/C** (para los bancos italianos se deben indicar 5 caracteres para abi y cab - por lo tanto también el cero inicial - y todos los 12 caracteres de la cuenta corriente italiana), el código internacional **Swift**, el **CIN**;  

**Divisa**: especificar la divisa con la que está expresada la cuenta bancaria;  

Es posible ingresar algunos datos útiles para la interacción con **DocFinance®** (programa de tesorería externo al sistema):  

**R.B.N.**: representa el tipo de relación (ej. Cuenta corriente, cuenta en divisas...);  

**Banco Doc Finance**: el nombre del banco a utilizar para el análisis de flujos por banco y otras funciones permitidas por DocFinance;  

**Código banco**: un posible código de banco libre;  

**SIA** código para el envío de archivos telemáticos italianos, ej. para los Recibos bancarias (Ricevute bancarie), (si no se indica, se utiliza el que está por defecto ingresado en la tabla de Empresas, Home>Tabelle>Generali).  

**Banco de apoyo (Banca d'appoggio)** permite vincular el registro bancario al respectivo código de [**banco de apoyo**](/docs/configurations/tables/general-settings/reference-bank) genérico. Esto puede servir para canalizar automáticamente los movimientos financieros de los deudores y evaluarlos en los análisis de flujo de caja.  

La sección relacionada con la *Facturación electrónica* actualmente no está en uso.

## **2. Detalle (Dettaglio)**

En la primera sección ***Importe Comisiones (Importo Commissioni)*** se pueden indicar:  

**Por operación (Per operazione)**: utilizado en el abono de efectos;  
**Por descubierto máximo (Per massimo scoperto)** (no utilizado automáticamente);  
**Varios (Varie)** (no utilizado automáticamente);  
**Por incumplimiento (Per insoluto)**: Utilizado como reintegro de gastos y contabilización a costo en el procedimiento de creación de incumplimientos, e ingresado en la cabecera del nuevo incumplimiento en el campo correspondiente.  
**Anticipos de Factura (Anticipo Fattura)** utilizado para insertar automáticamente una comisión en el módulo [Anticipos&Cobros (Anticipi&Incassi)](/docs/treasury/advance/advances-collections).  

En las cuadrículas **Activos (Attivi)**/**Pasivos (Passivi)** están los tramos de tasas de interés aplicables.  

**Fecha (Data)**: entrada en vigor del tramo;  

**Tramo (Scaglione)**: valor hasta el cual es válida la tasa;  

**Tasa (Tasso)**: valor porcentual;  

**Código Tasa (Codice Tasso)**: combo box que permite la elección de los tipos ingresados en la tabla relacionada con *Tipo de tasa bancaria (Tipo tasso bancario)* (*Configuración > Tablas > Configuración general > Tipo Tasso Bancario*). La tabla permite codificar tipos de tasa bancaria y definir si son válidas para intereses activos o pasivos.  

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/detail/image04.png)

#### Botones específicos  
> **Eliminar activos (Cancella attivi)**: para eliminar las tasas activas seleccionadas.  
> **Eliminar pasivos (Cancella passivi)**: para eliminar las tasas pasivas seleccionadas.  

## **3. Castelletti**

En esta pestaña se indican los castelletti para las presentaciones de efectos en el banco, diferenciado por tipología en "**Al cobro (Salvo buon fine)**", "**Al descuento (Allo sconto)**" y por el **Anticipo** sobre facturas (seleccionando la modalidad **Diferenciado (Differenziato**) o un castelletto único global (seleccionando la modalidad **Global (Globale)**).  

El valor del castelletto concedido lo ingresa el usuario en función de las condiciones bancarias vigentes, mientras que el valor del castelletto utilizado, y por ende el residual, serán actualizados automáticamente por Fluentis en función de las listas de presentación de efectos referidas al banco del registro en uso y gestionadas en el módulo *Tesorería*.

#### Botón específico (Pulsante specifico)  
> **Actualizar (Aggiorna)**: para actualizar los valores mostrados en la pestaña.  

## **4. Asignaciones (Assegni)**

Esta pestaña es un registro manual donde se indica el detalle de las matrices de cheques y los referencias de los cheques emitidos.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/cheques/image01.png)

#### Botones específicos (Pulsanti specifici)  
> **Eliminar matrices (Cancella matrici)**: para eliminar la matriz seleccionada.  
> **Eliminar detalles de matrices (Cancella dett. matrici)**: para eliminar el detalle de los cheques seleccionados.  

## **5. Días bancarios (Giorni banca)**

En este formulario se pueden asociar los días valor a las causas contables correspondientes, de modo que se automatice el cálculo de la fecha de valor bancario en los movimientos contables (si las causas contables prevén la gestión de los días bancarios).

La opción **Días hábiles (Lavorativi)** impone la evaluación de si el día es laborable o festivo (teniendo en cuenta también la tabla de Festividades definidas para la empresa en Home>Utilidades>Festividades anuales).

:::note Nota
La causa seleccionada deberá estar habilitada para visualizar el dato relativo a la Fecha de valor bancario (Data valuta banca).
:::

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/bank-days/image02.png)

De esta manera, el dato podrá ser visualizado dentro del registro contable que utiliza la causa en cuestión y que se refiere al banco que tiene la configuración activa.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/bank-days/image03.png)

#### Botones específicos (Pulsanti specifici)  
> **Nuevo (Nuovo)**: para colocar el cursor en la inserción de un nuevo detalle de días.  
> **Eliminar (Cancella)**: para eliminar los detalles de los días bancarios seleccionados.