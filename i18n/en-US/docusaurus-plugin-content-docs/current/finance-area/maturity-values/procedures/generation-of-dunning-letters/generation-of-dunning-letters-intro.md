---
title: Dunning Letters Generation
sidebar_position: 1
---

From this screen, dunning letters will be generated with the feature of being able to set a level of dunning letter that will go beyond the logical order of priority, which instead characterizes the automatic generation of dunning letters. It is also possible to manually select the mat. values to remind after filtering them, thus having greater control over the operation. 

To proceed, it is necessary, in the lower part of the screen, to assign the creation date of the dunning letters and select the type of dunning letters (previously coded in the *dunning letters Types* table) from the combo box. The assignment of a specific level of dunning letter (via the combo box ***Dun. Letters Nr.***) is optional, in order to force the creation beyond the logical order of priority. Normally, in fact, mat. values that have never been dunned will have a priority 1 dunning letter, those already dunned will pass to a new dunning letter of priority 2, and so on for the successive ones.

The dunning letter date affects the creation as it must respect the parameters present in the type of dunning letter and in the dunning letter number, such as the days of delay and the *days* that determine the expiration of the potential previous dunning letter. If the dunning letter date is not valid concerning the parameters for the selected mat. value, the creation command will not execute any dunning letter.

FILTER FIELDS:

**Account / Detail account:** refers to the holder of the mat. values

**Agent:** to filter the agent that is within the customer contact 

**Agent from Dunned maturity values:** filters the mat. values with the agent entered in the mat. value, since it in turn is valued during the accounting of sales invoices with the main agent present in the document, that is, the one with the highest amount in the case of multiple agents valued.

FIELDS RELATED TO MAT. VALUES TO BE RESEARCHED:
Document No., Mat. Val Position, From / To Document date, From / To Due date, Mat. value year, number ... Document type, Finance category (in customer contact), Payment type

FIELDS RELATED TO THE PREVIOUS DUNNING LETTER REFERENCES ON ALREADY DUNNES MAT. VALUE:  
Dunning letter type, FROM / TO Dun. letter date, FROM / TO due date (dunning letter), Dun. letter no., Reference...  

MAT. VALUE TYPE: Flag to extract not only the classic active customer mat. value but also those related, for example, to suppliers, etc.