---
title: Tipi indirizzi
sidebar_position: 6
---

La tabella si apre tramite il percorso **Tabelle > Impostazioni generali > Tipi indirizzi** e serve per codificare liberamente (a livello di codice e descrizione) una serie di indirizzi alternativi da associare all'anagrafica contatti (sia essa Fornitore, Cliente, Banca o Agente).


Per poter inserire i record è necessario cliccare sulla prima riga vuota della griglia oppure premere il pulsante **Nuovo**.

Sono presenti una serie di flag predefiniti che attribuiscono una caratteristica utilizzabile in ulteriori automazioni (alcune già previste nella versione standard) presenti nel programma.

Le automazioni già presenti e pronte all'uso sono:

**Email Fatture Clienti**: associando questo flag al tipo di indirizzo che si sta codificando ed inserendo tale indirizzo nell'anagrafica contatti alla sezione *Indirizzi alternativi*, l'indirizzo (o gli indirizzi) e-mail inserito nell'apposito campo sarà utilizzato nel Workflow (cambio stato) di invio automatico massivo delle fatture di vendita.

:::note[Nota]
Gli altri possibili flag relativi all'invio-email possono essere associati al documento specifico previa *configurazione*.
:::

**Cointestatari**: associando questo flag si codifica il tipo indirizzo idoneo per definire i dati anagrafici (relativi ad ogni cointestatario inserito in anagrafica) per poterli poi richiamare nella fattura id vendita.

**Utilizzato in SEPA**: consente di memorizzare un indirizzo alternativo in anagrafica contatti al fine di leggere la **ragione sociale del creditore** ed inserirla nella **distinta di bonifico** (campo *Creditore*) e nel relativo tracciato xml per l'esportazione verso i portali bancari, in modo da evitare i problemi del ***controllo titolare*** del conto.

**Stabile organizzazione**: flag a attivare per utilizzare l'indirizzo alternativo da inserire nelle anagrafiche fornitori al fine di indicare la stabile organizzazione in Italia del fornitore estero.

**Rappresentante fiscale**: flag a attivare per utilizzare l'indirizzo alternativo da inserire nelle anagrafiche fornitori al fine di indicare il rappresentate fiscale in Italia del fornitore estero.

**Sede Generica**: non connesso ad una logica particolare e da utilizzare preferibilmente per indirizzi alternativi generici.