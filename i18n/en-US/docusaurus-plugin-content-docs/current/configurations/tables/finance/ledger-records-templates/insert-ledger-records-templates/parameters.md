---
title: Ledger Templates - Parameters
sidebar_position: 4
---

The first part of parameters deals with the setting of the order with which it is possible to present tabs, through an appropriate command. 



| Function | Meaning |
| --- | --- |
| Control Account Type | The presence of this flag will impose on the procedure to verify the correspondence of the recording holder detail account in respect to the accounting parameters settings (e.g. the use of a customer account in a purchase template from vendor): in case of failure a simple warning will perform |
| Block Record if the Account Type Is Incompatible | The presence of this flag will impose on the procedure to cancel the insertion of a recording holder detail account, that is invalid because it does not respect the accounting parameters setting (e.g. the use of a customer account in a purchase template from vendor) |
| Allow Ledger Recording With Imbalance | The presence of this flag will enable the user to save not balanced accounting recordings. In case that the user permits recordings of this type, it is necessary to remember that there is a visualization report  of the imbalanced recordings, that can be linked to the print of the general accounting template day-book |
| Lock Deleting of Records with Paid Maturity Value | Thanks to this flag it will not possible to delete those recordings, that have at least a maturity value with a linked payment |
| Block Recording if the Maturity Value is not Equal to Accounting Transaction | The presence of this flag will impose on the procedure to block the recordings save, for which the accounting movements value does not correspond to the sales ledger movement values (in opening and in closing of the maturity values): in case that this flag isn't set up, the procedure will perform in any case a warning for the presence of a difference.  |
| Block Record if the Document Total Is Different from the Total of VAT Data | The presence of this flag will impose on the procedure to block the recordings save for which the total value of VAT movements does not correspond to the totals in recording header: in case that the field isn't set, the procedure will perform in any case a warning |
| Automatic Update the Total Document, Depending on the Data Change in VAT Grid | The presence of this flag will impose on the procedure to update, but only in increase, the recording header totals, depending on the total amount change in the recording VAT section. |
| Update also in Decrease | This flag, that is active only when the previous one is set, will force the procedure in order to update the totals of recording even in decrease |
| Block Recording if the VAT Reference No. Order Is not Respected | The presence of this flag will impose on the procedure to block the recordings save, where the temporal order of logging is not respected: in particular, with this flag the procedure will recover the protocol numbers, only when a valid procedure date is set for the same number. If the flag isn't inserted, in any case the procedure will perform a warning for the lack of logging order: it is important also to remember that the VAT register print does not enable the user, in default setting, to print in definitive VAT registers, that have lacks in numeration or that do not respect the right logging order |
| Separate Management CC/PC | This flag, that is active only in the case in which model manages both cost and profit centers, will enable the user to assign the accounting economic movements both to cost and profit centers. If it isn't set, on the contrary, the movement can be assigned only to one of the two sections.  |
| Automatic Recalculating of CC, PC and Job Orders | This flag will record even in the accounting recordings of this model: the meaning is that of perform automatically or not the recalculation of analytical sections of cost, profit centers and job orders, when they are within an accounting recording, that has been already saved. At the time of a new recording insertion up to its first save, the updating of these sections will be always automatic according to the definitive default settings |
| Block Recording if the Value of CC/CP Is not Equal to Accounting Transaction | The presence of this flag will impose on the procedure to block the save of recordings, for which the total value of analytical movements of cost and profit centers does not correspond to the economic amounts in general accounting section: in the case that the flag isn't inserted, a warning about the missing balance of values will be in any case performed  |
| Group VAT Movements in the Journal | The presence of this flag will impose to the procedure to group on journal the VAT lines, that are assigned to the same accounting detail account (and to the same division) |
| Block Saving with Number of the Duplicate Document | The presence of this flag, set in default, will impose to the procedure to block the saving of the accounting recording with the same document number, year, document type and register of the recording |
| Background colour | In this field it is possible to organize the background colour in order to visualize the movements based on this model. Colours can be useful in order to identify the movement type without reading models descriptions or codes |
| Foreground colour | In this field it is possible to organize the foreground colour of texts in order to visualize the movements based on this model. Colours can be useful in order to identify the movement type without reading models descriptions or codes |
| Sample text | The field visualizes the result of the set colours combination |
| Italic | n this filed it is possible to organize the italic visualization of characters about this model and during the video searches: it identifies even the type of movement without reading models descriptions or codes |
| Bold | In this filed it is possible to organize the bold visualization of characters about this model and during the video searches: it identifies even the type of movement without reading models descriptions or codes |

RIBBON BAR: the ribbon bar represents the Form menu, that is the area in which it is possible to operate on previous recordings or generate new ones. The possible features list is the following:



| Function | Meaning |
| --- | --- |
| Save | It is a command that is necessary in order to save the insertion /modification of ledger template |
| Delete | It is a command that is necessary in order to delete the ledger template |






