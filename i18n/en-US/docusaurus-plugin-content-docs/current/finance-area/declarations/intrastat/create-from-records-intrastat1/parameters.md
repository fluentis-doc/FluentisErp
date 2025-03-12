---
title: Parameters (Parametri)
sidebar_position: 3
---

Within the 'Parameters' section, the procedure lists all the rows of the movements entered. In particular:

**Status and VAT code (Stato e codice IVA)** are taken from the registry of the registered entity;

the optional **Value in foreign currency (Valore in divisa)** according to what has been entered in the registration (the field is only present for intra2);

**Amount operation Euro** takes the amount in the company's currency;

**Document Number**, **Registration date**, and **Service code (Codice del servizio)** are taken from the registrant's registry.

Once the data is completed, it is possible to proceed with the creation, an operation that will bring the details into sections two - three - four.

The correct automatic entry in the appropriate section of the model depends on the management, at the time of entering the accounting entry, of the **VAT type** field in the VAT grid. If set to *General*, the movement will be entered in section Two (Bis); if set to *Service*, it will be entered in section Four (quater). This data, in turn, will correctly value the ***BisTer*** field (to be understood as the section of the model) present in the *Intrastat* tab of the registration, which is then the factual data passed during model creation.

Section Three (Ter) is instead populated, still through the *Intrastat* tab of the registration, when registering a credit note, where the flag ***Credit note for previous years (Nota di variazione anni precedenti)*** is activated in the VAT grid of the registration (which identifies in any case a variation not related to the month or quarter of registration and requires the completion of section Three). Next to this flag it is possible to enter the reference date of the invoice that is being corrected.