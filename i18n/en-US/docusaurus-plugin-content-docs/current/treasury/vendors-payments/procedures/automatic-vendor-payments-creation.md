---
title: Automatic Creation of Supplier Payments (Creazione automatica pagamento fornitori)
sidebar_position: 1
---
The form is located in Treasury > Supplier Payments > Procedures > Automatic Creation of Supplier Payments (Creazione automatica pagamenti fornitori)

This procedure is an alternative to creating a new [payment list (distinta di pagamento)](/docs/treasury/vendors-payments/create-vendor-payments) and its subsequent accounting, allowing these operations to be performed in an integrated manner directly from this form.

## How to Automatically Create a Supplier Payment

1. Use the first tab *Maturity value filter* to locate the items to be paid. (You can also filter by ABI/CAB codes of bank supports connected to the accounting entry, as well as by code/description of the supporting bank - by expanding the *Bank* section). 

By expanding the *Maturity value type* section, **payments of recipient items (pagamenti delle partite percipienti)** are **excluded** by default, for which <u>**the operation must be carried out within the recipient module**</u> if you want to use the [certification of withholdings (certificazione ritenute)](/docs/finance-area/declarations/declarations/withholding-tax-certification) procedure. 

The filter for *sub-account* of payment bank allows for the creation of the list based on what has been channeled to the various banks through the settings of the registry and the [Payment Support Management (Gestione Appoggio Pagamenti)](/docs/treasury/vendors-payments/procedures/payments-support-management) procedure of the module itself.

2. Check, at the bottom, the totals of the selected lines.

3. Move to the second tab **Item Data** and set the various management elements of the procedure: first of all, the **payment bank** must be entered, which will be the main bank of the list. 
This field unlocks the button **Start creation of payment from maturity values**.

4. Manage the other parameters:

- The flag **Use the payment bank from the supplier's item, if absent from the registry (Utilizza la banca di pagamento dalla partita del fornitore, in assenza dall'anagrafica)** will instruct the procedure to create as many lists as there are payment banks assigned to the various items selected in the payment support management procedure, or entered in the supplier registry. In the absence of both, the payment will be entered in the list for the bank code set in the initial field.

- The flag **Use the support bank present in the supplier's registry (Utilizza la banca d'appoggio presente in anagrafica del fornitore)** forces the assignment of the beneficiary bank codes by reading them from the default bank row entered in the bank support section of the supplier's payment tab. This flag can be preset within the module parameters.

- The **Payment type** allows you to define the type of payment to assign to the list: the field becomes mandatory only when the items to be paid require non-uniform payment types.

- The year and issue date are set by default based on the system date.

- The **Enforce Beneficiary Value Date (Imponi data valuta beneficiario)** flag allows you to assign, within the telematic track, a value date for the payment beneficiary, which, if not set, will be assigned as the current date. If the flag is not set, the value date will be equal to the due date.

- The **Initial note** field is a free field for payment notes, not used in the standard.

- The **Final notes** field is used in payment accounting to enhance the detailed description of the accounting movement of the bank sub-account.

5. If you want to immediately account for the payments, activate the **Maturity value accounting** flag, which allows for the direct recording of the closure of the items and the related double entry movements of the payments being created: if not used, it will be possible to use the *separate accounting procedure* later.

6. Fill in the accounting reason to be used for registration, the registration and accrual dates. The sub-accounts for recording active and passive discounts are proposed based on the *Casual profits* sub-account present in the accounting parameters. The date and document number to be entered as the references of the registration header are optional (it could be the list number/date).

On the right, there is a default flag for **Closure of Items (Chiusura della partite)** (proposed by default, do not remove) and the grouping management criterion in accounting **Grouping bank**, which allows for recording one entry for each outgoing bank sub-account. 

Alternatively, a **Group by detail account** and an option for detailed payment registration for each payment (**No grouping**) are available.

If the accounting reason involves the management of the bank value date and within the bank registry a number of days for its calculation in relation to the used accounting reason has been defined, the field will be automatically handled in the resulting registration.

7. Press the **Start creation of payment from maturity values** button.

**<a href="https://youtu.be/DkxoWgTkvUg&amp;t=2m25s" target="_blank" rel="noopener noreferrer">Refer to the Tutorial - YouTube Link  (Si rinvia al Tutorial - Link YouTube)</a>**

### Restoration Tab (La scheda di ripristino)

allows you to view the accounting registration through a double click in the section related to registrations, as well as the partial/total cancellation of the selected payment operations. Cancellation will only be possible if the period is still modifiable (journal book printing and account closure not executed).

**Specific Buttons**

**Search Previous**: Searches the list of executed creations.

**Delete Creation**: With this button, all accounting performed will be deleted, along with all associated payments.

**Delete Payments**: The button restores the selected payment.