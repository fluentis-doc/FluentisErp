---
title: Creación y gestión de efectos
sidebar_position: 5
ai_generated: true
---

El formulario se encuentra en la ruta **Tesorería > Efectos<!-- Effetti --> > Crear efecto<!-- Crea Effetto -->** y permite la creación *manual* y la gestión, modificación/visualización del efecto<!-- effetto -->.

## Cómo crear un nuevo efecto<!-- Come creare un Nuovo effetto -->

:::tip[Atención<!-- Attenzione -->]
A continuación ilustramos los pasos para la creación ***manual*** de un efecto<!-- effetto -->. Sin embargo, **este método se utiliza raramente. Se recomienda utilizar los procedimientos automáticos:**

[**Adquisición de efectos desde vencimientos**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values)<!-- Acquisizione effetti dalle partite -->

[**Adquisición de efectos desde facturas**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices)<!-- Acquisizione effetti dalle fatture -->
:::

Desde esta pantalla:

1. Selecciona el **tipo de efecto<!-- tipo effetto -->**: el programa asignará un **número** según el numerador asociado al tipo de efecto<!-- tipo effetto --> y el **año** de referencia, que propone como el año de la fecha del sistema.

2. Completa los campos **Deudor<!-- Debitore -->** (con la cuenta contable del titular del efecto<!-- effetto -->) y **Vencimiento<!-- Scadenza -->** (con la fecha de vencimiento del efecto<!-- effetto -->).

3. Guarda la cabecera del efecto<!-- testata dell'effetto -->.

4. Completa los campos **importe en moneda<!-- importo valuta -->** e **importe del efecto<!-- importo effetto -->** manualmente o gestiona automáticamente con base en los vencimientos/partidas seleccionados desde las pestañas de **referencias de vencimientos/partidas<!-- riferimenti scadenze/partite -->**. El campo de importe del timbre no se usa. En las pestañas de referencias de partidas o vencimientos puedes usar los comandos **Insertar partidas<!-- Inserimento partite -->** o **Insertar vencimientos<!-- Inserimento scadenze -->** para buscar e insertar partidas<!-- partite --> / vencimientos<!-- scadenze --> en el efecto<!-- effetto -->.

La **fecha de valor<!-- data valuta -->** es la fecha para el cambio en el caso de efectos en moneda extranjera. Se propone igual a la fecha del efecto<!-- data effetto -->.

Los elementos obligatorios que deben indicarse son la fecha de vencimiento<!-- data scadenza -->, la moneda y el tipo de cambio, el cliente deudor<!-- cliente debitore --> y la plaza (completada en base a los datos del cliente).

El **agente** es un campo de referencia simple al agente principal de la factura de origen.

El **estado del efecto<!-- stato effetto -->** se propone como *emitido* y se actualizará automáticamente según las operaciones realizadas sobre el efecto<!-- effetto -->.

El indicador **Impreso<!-- Stampato -->** no se gestiona, mientras que *contabilizado* y *acreditado* dependen de los procedimientos de contabilización de efectos<!-- contabilizzazione effetti --> y de abonos realizados.

El campo **referencias<!-- riferimenti -->** es un campo de notas libre, que se incluirá en el archivo como referencia de la operación.

### La pestaña Presentación<!-- La Tab Presentazione -->

Presenta dos secciones:

**Soporte bancario<!-- Appoggio bancario -->**, donde se informan los datos de la entidad bancaria de soporte como **abi/cab** (obligatorios para poder insertar el efecto<!-- effetto --> en una lista de presentación) además de *cuenta corriente* (IBAN y SWIFT) y *CIN* que son necesarios solo en caso de efectos<!-- effetti --> RID.

**Datos de presentación<!-- Estremi Presentazione -->**
muestra los datos de la lista con la que fue presentado en el banco (por ejemplo al cobro salvo buen fin o al cobro directo).

### La pestaña Referencias de vencimientos<!-- La Tab Riferimenti scadenze -->

En esta sección se pueden visualizar las referencias de la factura de origen (en caso de usar el procedimiento *adquisición de efectos desde vencimientos*) o agregar manualmente vencimientos a través del botón *insertar vencimientos<!-- inserimento scadenze -->*. En este caso es posible también insertar vencimientos no vinculados a tipos de pago gestionados con efectos<!-- effetti --> (ejemplo *recibos bancarios<!-- ricevute bancarie -->*), así como vencimientos relacionados con notas de crédito.

### La pestaña Referencia de partidas<!-- La Tab Riferimento partite -->

En esta sección se pueden visualizar las referencias de las partidas<!-- partite --> de origen (en caso de adquisición de efectos<!-- effetti --> desde partidas<!-- partite -->) o agregar manualmente partidas a través del botón *insertar partidas<!-- inserimento partite -->*.

En este caso es posible insertar también partidas<!-- partite --> no vinculadas a tipos de pago gestionados con efectos<!-- effetti --> (ejemplo *recibos bancarios<!-- ricevute bancarie -->*), así como partidas<!-- partite --> relacionadas con notas de crédito.

### La pestaña Otro<!-- La Tab Altro -->
En esta sección se pueden almacenar las referencias de los endosantes y avalistas.


## SDD Sepa Direct Debit

El Adeudo Directo Sepa, que sustituye al anterior RID nacional, es una herramienta de cobro preautorizada en base a un mandato de adeudo otorgado por el Deudor<!-- Debitore --> a favor de su Acreedor.

Se basa en un acuerdo previo (mandato) entre Deudor<!-- Debitore --> y Acreedor, que permite a este último solicitar la activación de un procedimiento interbancario para cargar automáticamente la cuenta del Deudor<!-- Debitore -->.


:::tip[Cómo crear una lista SDD<!-- Come creare una distinta SDD -->]
Tras completar los campos necesarios [**en la ficha del cliente**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) titular del SDD y en la tabla con los datos de nuestra empresa, es necesario:

- Definir un tipo especial de Efecto<!-- Effetto --> "*SDD*" [**aquí**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types) y asociarlo al [**Tipo de pago**](/docs/configurations/tables/general-settings/payment-types) correspondiente
- Definir un tipo específico de lista en la cartera de efectos<!-- portafoglio effetti -->, ver el campo Usos [**aquí**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types)
- Utilizar los procedimientos [**Creación de efectos desde partidas<!-- Creazione effetti dalle partite -->**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values) o [**Creación de efectos desde vencimientos<!-- Creazione effetti dalle scadenze -->**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values) para generar un efecto<!-- effetto --> de tipo "*SDD*"
- Crear una [**nueva lista de presentación**](/docs/treasury/bills-holding/lists-ceation-and-management) de tipo "*SDD*" e insertar en ella el efecto<!-- effetto --> "*SDD*"
- Utilizar el botón **Exportar SDD<!-- Esportazione SDD -->** en la barra de herramientas (habilitado por el tipo específico de lista configurado con la opción Usos) para generar el formato bancario específico válido para SDD.
:::