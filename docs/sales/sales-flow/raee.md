---
title: Gestione RAEE
sidebar_position: 10
---


**Contesto funzionale**

Il contributo RAEE (Waste Electrical and Electronic Equipment) rappresenta un importo obbligatorio a carico dei produttori e importatori di apparecchiature elettriche ed elettroniche. Tale contributo finanzia le attività di raccolta, trattamento e recupero dei rifiuti derivanti da questi prodotti.

Dal punto di vista gestionale, il contributo può essere applicato secondo due modalità. Nella prima, detta modalità “visibile”, il contributo viene espresso per pezzo e può essere evidenziato separatamente nei documenti di vendita, risultando quindi esplicito anche per il cliente finale. Nella seconda modalità, definita “internalizzata”, il contributo viene invece espresso per chilogrammo ed è incluso direttamente nel prezzo del prodotto, senza evidenza distinta nei documenti commerciali.

In entrambi i casi il contributo è soggetto ad IVA e non può essere oggetto di scontistiche. Il valore viene definito annualmente dai consorzi di riferimento e comunicato agli enti competenti.

**Obiettivo**

L’obiettivo dell’estensione è introdurre una gestione strutturata del contributo RAEE all’interno del gestionale Fluentis, permettendo di identificare le aziende soggette a tale normativa, classificare gli articoli interessati e determinare quando e come il contributo deve essere applicato nei documenti.

Il sistema deve inoltre garantire la tracciabilità del calcolo a livello di riga documento e la corretta esposizione del valore nei totali, secondo le regole fiscali e commerciali previste.

**Attivazione della gestione in Fluentis**

Per supportare la gestione del contributo è necessario introdurre alcune informazioni aggiuntive nelle anagrafiche esistenti.

A livello di [Società](/docs/configurations/tables/general-settings/company) viene introdotto un flag che identifica se la società è produttore o importatore di apparecchiature elettriche ed elettroniche. Questo campo abilita in generale la gestione RAEE all’interno del sistema e consente l’attivazione delle funzionalità dedicate nei documenti. Il flag si trova nella tabella **Società > Altre Impostazioni > Gestione RAEE > Produttore o Importatore di apparecchi elettrici e elttronici**.

Per quanto riguarda gli articoli, viene aggiunto un riferimento alla categoria prodotto RAEE. Tale classificazione determina se l’articolo è soggetto al contributo e consente di recuperare il valore associato per il calcolo. E' possibile inserire la [Categoria RAEE](/docs/configurations/tables/general-settings/raee-category) nell'**[Anagrafica articolo](/docs/erp-home/registers/items/create-new-item) > Pesi/Dimensioni > Gestione RAEE**.

Infine, per indicare se per un cliente/fornitore il contributo debba essere applicato nei documenti, è presente il flag in **[Anagrafica](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) > Informazioni fiscali > Gestione RAEE**.

La sezione per la Gestione RAEE viene esposta esclusivamente nei **Tipi documento** che presentino il flag **Gestione RAEE**.

**Logica di gestione nei documenti**

Quando le condizioni sono rispettate, il sistema abilita un’apposita sezione negli Articoli dei documenti dedicata al calcolo del contributo RAEE per ogni articolo. In questa sezione viene riportata la Categoria RAEE associata agli articoli, l'eventuale articolo di riferimento per l'esposizione del contributo e il relativo valore unitario moltiplicato per la quantità dell'articolo.

Il calcolo avviene a livello di riga documento, utilizzando la categoria dell’articolo e il valore valido nel periodo di competenza. Il risultato viene memorizzato in una struttura dedicata, in modo da garantire la storicizzazione del dato anche in caso di variazioni successive della classificazione dell’articolo.
Per ogni riga documento viene salvato il dettaglio del contributo RAEE calcolato, insieme all’aliquota IVA applicata, che coincide con quella della riga articolo. Questo consente di gestire correttamente documenti con aliquote differenziate, mantenendo coerenza fiscale tra riga e contributo.

Il totale del contributo viene poi aggregato a livello di documento e riportato separatamente nei totali, in una sezione dedicata. Inoltre, il contributo apparirà come riga spesa nella sezione **Spese/Sconti/Maggiorazioni finali** dei Riepiloghi.
