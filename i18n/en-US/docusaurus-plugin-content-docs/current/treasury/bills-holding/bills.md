---
title: Bills
sidebar_position: 3
---

The effects search form 
- is located in Treasury > Bills Portfolio > Bills > Bills

- allows the user to search for previously issued effects with the aim of viewing, modifying, and possibly deleting them.

From this form, it is also possible to manually enter a new effect, but this mode is rarely used in practice. Usually, creation procedures are followed through automatic effects creation (from transactions or invoices).


## Ribbon Bar Buttons

> - **Search Bills (Ricerca effetti):** Button to search for effects according to the search filters set in the header of the form.
> - **New Effect (Nuovo effetto):** Calls the form to enter a new effect.
> - **Modify Effect (Modifica effetto):** Allows modifying a previously entered effect.
> - **View Effect (Visualizzazione effetto):** Allows viewing a previously entered effect.
> - **Delete Effect (Cancella effetto):** Deletes a previously entered effect.

> Performing **prints** (*Preview* or *Print Report*) launches, regarding the effects selected with the mouse (holding down Ctrl allows selecting multiple effects simultaneously), the corresponding print found in the [**print menu**](/docs/treasury/bills-holding/reports/bill-holding-situation) of the module.

> - *Expiry Notice of Bills (Avviso scadenza effetti):* Letter addressed to the customer (one page for each selected effect) highlighting the effects that are about to expire with relevant references.
> - *Accumulation Letter (Lettera di cumulo):* Letter addressed to the customer highlighting the transactions or invoices included in each individual effect.
> - *Bills Portfolio (Portafoglio effetti):* Prints a list of effects highlighting the main related data.
> - *Ledger Situation (Situazione castelletti):* Prints the situation of the granted, used, and remaining ledger for each bank (related to the selected effects).


## Search Filters

- **Account (Conto):** Filter referring to the **Debtor*** field present within the effect.
- **Year / Effect Type (Anno / Tipo effetto):** Filters referring to the eponymous fields present within the effect.
- **FROM / TO / Expiration Date (DA / A / data scadenza) / Issue Date (Dat emissione) / Number (Numero):** Referring to the eponymous fields present within the effect.
- **Effect States (Stati effetti):** Filter referring to the *Bill status* present within the effect. The state is automatically modified depending on the procedures that have been performed; for example, it starts as Issued (Emesso), then becomes Presented (presentato), Credited (Accreditato), Unpaid (insoluto), etc.
- **Currency (Divisa):** To filter only effects denominated in dollars, etc.
- **Place / ABI / CAB / Bank Description (Piazza / ABI / CAB / Descrizione Banca):** Referring to the support bank of the debtor.
- **Effect State Section Flag (Flag della sezione Stato Effetto):** By default, *All* is active, but it can be changed by selecting various search conditions that, if activated simultaneously, will broaden the search base, such as those printed + those accounted + those NOT printed...

## Results Grid

This form presents the same fields available in the filters detailed above.

It also shows the **Amounts (Importi)** (in currency, e.g., dollars, and in Euros) of the effect (matching if the effect is denominated in euros).