---
title: Contratti
sidebar_position: 3
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

Infine, a livello cliente/fornitore viene utilizzato un flag già esistente che indica se il contributo deve essere applicato nei documenti. Questo campo controlla se il contributo deve essere esposto come onere nel documento oppure gestito in modalità internalizzata.

4. Struttura dati di configurazione

La gestione del RAEE si basa su una struttura dati dedicata alle categorie prodotto e ai relativi valori economici.

La prima entità definisce le categorie RAEE, identificando ogni categoria tramite codice e descrizione e associando le unità di misura necessarie per la gestione del valore e del peso. È inoltre prevista la possibilità di collegare un articolo di riferimento utilizzabile per l’eventuale esposizione del contributo come riga spesa nei documenti.

La seconda entità gestisce invece lo storico dei valori associati a ciascuna categoria. Ogni valore è valido per un intervallo temporale definito, in modo da consentire la gestione delle variazioni periodiche stabilite dai consorzi.

5. Logica di gestione nei documenti

All’interno dei documenti, la gestione del contributo RAEE viene attivata solo quando risultano soddisfatte alcune condizioni contemporanee. L’azienda deve essere abilitata alla gestione RAEE, il cliente o fornitore deve avere attiva la gestione del contributo e, in una fase successiva, anche il tipo documento dovrà essere abilitato esplicitamente.

Quando le condizioni sono rispettate, il sistema abilita un’apposita sezione nei documenti dedicata al calcolo del contributo RAEE. In questa sezione viene riportata la categoria associata agli articoli e il relativo valore calcolato.

Il calcolo avviene a livello di riga documento, utilizzando la categoria dell’articolo e il valore valido nel periodo di competenza. Il risultato viene memorizzato in una struttura dedicata, in modo da garantire la storicizzazione del dato anche in caso di variazioni successive della classificazione dell’articolo.

6. Persistenza e calcolo dei valori

Per ogni riga documento viene salvato il dettaglio del contributo RAEE calcolato, insieme all’aliquota IVA applicata, che coincide con quella della riga articolo. Questo consente di gestire correttamente documenti con aliquote differenziate, mantenendo coerenza fiscale tra riga e contributo.

Il totale del contributo viene poi aggregato a livello di documento e riportato separatamente nei totali, in una sezione dedicata analoga alle spese di bollo o incasso. La voce identificativa del totale è “Contributo RAEE”.

Il valore complessivo viene inoltre memorizzato nella testata del documento, al fine di garantire performance e tracciabilità.

7. Regole di esposizione e comportamento

La visibilità del contributo RAEE nei documenti dipende dalla combinazione di tre condizioni: abilitazione aziendale, abilitazione cliente/fornitore e abilitazione del tipo documento.

Quando tutte le condizioni sono attive, il contributo viene calcolato ed esposto come voce separata nel documento. Se invece solo la gestione aziendale è attiva, il contributo viene comunque calcolato ma non esposto come riga o spesa, rimanendo quindi internalizzato e tracciato solo a livello dati.