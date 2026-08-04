---
title: Advance Invoice
sidebar_position: 7
---

In this tab, you can manage advance invoices<!-- fatture di anticipo --> related to the project, which can be associated with documents in the projects area, such as service requests, planned interventions, and interventions<!-- interventi -->.
The association with documents can occur automatically by configuring specific parameters in the projects area, or manually. Indicating this information within individual documents allows for the automatic reversal of advance invoices<!-- fatture di anticipo --> in the final invoices issued from the intervention valuation<!-- valorizzazione interventi -->.

The rows in this tab contain the Items<!-- Articoli --> to be invoiced with their specific characteristics:
  
**Row Type<!-- Tipo Riga -->**: you can choose between type 1-Coded or 2-Non-coded

**Unit of measure<!-- Unità di misura -->**: Only "Time" type units of measure are allowed. However, advance invoices<!-- fatture di anticipo --> can be used to cover services, materials, and accessory expenses that have units of measure other than "Time".

**Quantity<!-- Quantità -->**: quantity of the advance invoice<!-- fattura di anticipo -->, used as the starting value to calculate and update the remaining quantity.

**Unit price<!-- Prezzo unitario -->**: value used as the unit price both in the advance invoice<!-- fattura di anticipo --> and in the reversal rows of the advance invoice<!-- fattura di anticipo -->.

**Sales Invoices<!-- Fatture di Vendita -->**: contains the reference of the advance invoice<!-- fattura di anticipo --> generated from the project.

**Type<!-- Tipo -->**: you can choose the type of invoicing between On account<!-- In conto --> and Final<!-- A saldo -->;

**Remaining quantity<!-- Quantità residua -->**: Value obtained from the following calculation

Quantity entered in the advance invoice<!-- fattura di anticipo --> row of the project

minus

the quantities present in the invoicing plan<!-- piano di fatturazione --> of each intervention<!-- intervento -->, to which the advance invoice<!-- fattura di anticipo --> is linked through the specific field.

The quantity to be reversed is calculated in proportion to the price of the row in the invoicing plan<!-- piano di fatturazione -->.

:::note[Example 1<!-- Esempio 1 -->]
Project, Advance Invoice<!-- Fattura di anticipo --> tab, enter the expected quantity and unit price in the item row.
Then generate the advance invoice<!-- fattura dell'anticipo -->.
For each intervention<!-- intervento --> linked to this project or for each intervention<!-- intervento --> assigned to a customer who has valid advance invoices<!-- fatture di anticipo -->, in the "Advance Invoice<!-- Fattura di anticipo -->" field of services, materials, expenses, and the invoicing plan<!-- piano di fatturazione -->, the reference to the advance invoice<!-- fattura di anticipo --> present in the project will be reported.


During the intervention valuation<!-- valorizzazione interventi --> phase containing references to advance invoices<!-- fatture di anticipo -->, the reversal row with reference to the advance invoice<!-- fattura di anticipo --> will be automatically inserted.


The total of the reversal row will correspond to the sum of all the values to which the advance invoice<!-- fattura di anticipo --> has been associated, whether they are services, materials, or expenses.
An advance invoice<!-- fattura di anticipo --> can be used to cover even only part of an intervention<!-- intervento -->, associating it, for example, only to services and not to materials and expenses.
The unit price of the reversal row will be taken from the unit price of the advance invoice<!-- fattura di anticipo --> present in the project.
Consequently, the quantity to be reversed will be calculated in proportion to the total to be reversed / unit price of the advance invoice<!-- prezzo unitario fattura di anticipo -->.

Example of ADVANCE INVOICE<!-- Esempio fattura di ANTICIPO -->:

- quantity: 10
- Unit of measure: days
- unit price: €500
- total: €5000


INTERVENTION<!-- INTERVENTO -->

- service 1 day, €500 associated with the advance invoice<!-- fattura di anticipo -->


from the INTERVENTION VALUATION<!-- VALORIZZAZIONE interventi --> you will get:

- service 1 day, €500
- reversal row for advance invoice<!-- riga di storno fattura anticipo -->: quantity 1, UM days, unit price 500, row total -500

Through the remaining advance invoice<!-- residuo Fattura di anticipo --> check, you will have a remaining of 9 days

:::

:::note[Example 2<!-- Esempio 2 -->]

Project, Advance Invoice<!-- Fattura di anticipo --> tab, enter the expected quantity and unit price in the item row.
Then generate the advance invoice<!-- fattura dell'anticipo -->.
For each intervention<!-- intervento --> linked to this project or for each intervention<!-- intervento --> assigned to a customer who has valid advance invoices<!-- fatture di anticipo -->, in the "Advance Invoice<!-- Fattura di anticipo -->" field of services, materials, expenses, and the invoicing plan<!-- piano di fatturazione -->, the reference to the advance invoice<!-- fattura di anticipo --> present in the project will be reported.


During the intervention valuation<!-- valorizzazione interventi --> phase containing references to advance invoices<!-- fatture di anticipo -->, the reversal row with reference to the advance invoice<!-- fattura di anticipo --> will be automatically inserted.


The total of the reversal row will correspond to the sum of all the values to which the advance invoice<!-- fattura di anticipo --> has been associated, whether they are services, materials, or expenses.
An advance invoice<!-- fattura di anticipo --> can be used to cover even only part of an intervention<!-- intervento -->, associating it, for example, only to services and not to materials and expenses.
The unit price of the reversal row will be taken from the unit price of the advance invoice<!-- fattura di anticipo --> present in the project.
Consequently, the quantity to be reversed will be calculated in proportion to the total to be reversed / unit price of the advance invoice<!-- prezzo unitario fattura di anticipo -->.

example of ADVANCE INVOICE<!-- esempio fattura di ANTICIPO -->:

- quantity: 10
- Unit of measure: days
- unit price: €500
- total: €5000


INTERVENTION<!-- INTERVENTO -->

- service 1 day, €500 associated with the advance invoice<!-- fattura di anticipo -->
- material 3 pieces, total €300 associated with the advance invoice<!-- fattura di anticipo -->


from the INTERVENTION VALUATION<!-- VALORIZZAZIONE interventi --> you will get:

- service 1 day, €500
- material 3 pieces, total €300
- reversal row for advance invoice<!-- riga di storno fattura anticipo -->: quantity 1.6 UM days, unit price 500, row total -800
- Through the remaining advance invoice<!-- residuo Fattura di anticipo --> check, you will have a remaining of 8.4 days

:::

Each time an intervention's<!-- intervento --> invoicing plan<!-- piano di fatturazione --> is generated, it will be automatically reversed from the original quantity of the advance invoice<!-- fattura di anticipo -->. In this way, you will always have an updated remaining. The remaining can still be updated manually using the dedicated **Update Advance Invoice<!-- Aggiorna Fattura di Anticipo -->** button.

**Last remaining update date<!-- Data ultimo aggiornamento residuo -->**: indicates the date of the remaining quantity update

**Active from<!-- Attivo da -->**: date from which the advance invoice<!-- fattura di anticipo --> is active, used for proposal in documents

**Closing date<!-- Data di chiusura -->**: closing date of the advance invoice<!-- fattura di anticipo -->, after which it will no longer be possible to associate documents with a later date

For each row, it is possible to issue an invoice directly from this screen using the dedicated **Value<!-- Valorizza -->** button. A message will appear allowing you to choose whether or not to open the generated invoice.
If the Value<!-- Valorizza --> button is not active, check whether the **Invoice Type<!-- Tipo Fattura -->** has been indicated in the relevant Project Type<!-- Tipo Progetto -->, which is necessary to generate the invoice.

![](/img/it-it/project-management/projects/sal.png)