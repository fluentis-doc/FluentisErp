---
title: Parametri
sidebar_position: 3
---

All'interno della sezione **Parametri** la procedura riporta tutte le righe di dettaglio degli articoli inseriti nei documenti selezionati, riportando da ognuno di questi i dati prelevati dal documento. In particolare:

![](/img/it-it/finance-area/declarations/intrastat/automatic-creation-intrastat1/parameters/image01.png)

 

**Stato e codice IVA**: sono presi dall'anagrafica del soggetto intestatario;

**Valore** **in divisa**: presenta il dato dell'importo articolo (prezzo*quantità-sconti) nella divisa della fattura d'acquisto (il campo è presente solo per l'intra2);

**Ammontare operazioni euro**: prende l'importo dell'articolo al cambio inserito in fattura;

**Natura della transazione**: è ripreso dal tipo documento;

**Nomenclatura combinata**: dalla riga articolo in fattura e, se vuoto, dall'anagrafica articoli;

**Massa netta**: calcolata sulla base del peso impostato nell'anagrafica articolo;

**Unità suppl.**: può essere calcolata automaticamente se il codice nomenclatura prevede una seconda unità di misura, attraverso la conversione tra unità di misura gestionale e questa, secondo i fattori di conversione impostati nell'articolo;

**Valore statistico** viene calcolato in più modi a seconda delle impostazioni (variazione percentuale rispetto all'anagrafica cliente/fornitore, oppure incrementato dalle spese inserite in modo specifico nel documento);

**Codice trasporto e Modalità trasporto** sono inseriti rispetto ai codici porto/spedizione assegnati al documento;

**Dati relativi alle provincie di origine/destinazione** sono letti dalla tabella società (Campo della **Provincia**).

:::tip[Novità]
Dalla versione 804 il software verificherà se la riga fattura ha un magazzino collegato.
Se c’è un magazzino, e se il magazzino è legato ad un contatto (Campi *Nomignolo* e *Ragione sociale* nella tabella [**Magazzini**](/docs/configurations/tables/logistics/warehouses)) e se questo contatto ha il campo *Provincia* valorizzato, allora userà questa provincia:
-	Direttamente in creazione intrastat vendite da fatture di vendita
-	In contabilizzazione fattura di vendita, per valorizzare la scheda *intrastat* della registrazione nel campo della provincia di origine e quindi poi da qui finirà nell’intrastat se si usa la procedura [**Creazione da registrazioni**](/docs/finance-area/declarations/intrastat/create-from-records-intrastat1/create-from-records-intrastat1-intro)

La provincia di origine, infatti, dovrebbe essere la provincia da dove la merce è partita, quindi in caso di aziende con più magazzini dislocati in diverse provincie sarà più preciso e non obbligherà a modifiche manuali.
:::


Dati relativi al **paese di provenienza/destinazione** sono letti dall'anagrafica del soggetto intestatario del documento (Fattura).

Alla fine della griglia sono visualizzati i riferimenti al documento d'origine della riga.

Una volta completati i dati necessari nel modello (e questo dipende dal flag Semplificata inserito in testata della dichiarazione ma anche dal tipo di periodo del riepilogo) è possibile procedere alla creazione del modello, operazione che andrà a riportare i dettagli nelle sezioni bis/ter/quater a seconda della natura della transazione Intrastat (il tipo 2 viene riportato nella sezione Ter relativo alle rettifiche, il tipo “S” nella sezione quater). E' possibile procedere, prima ancora di questo spostamento, ad un primo raggruppamento degli importi: questa operazione sarà però effettuata documento per documento, causando un primo arrotondamento dati all'unità.



| Funzione | Significato |
| --- | --- |
| Cancella | Pulsante per cancellare le fatture di tipo intracomunitario selezionate. |
| Creazione | Esegue la creazione del modello intrastat riportando i dati presenti nella presente Tab all'interno delle sezioni del modello |
| Crear | Esegue la cancellazione di tutte le righe dalla griglia |
| Raggruppa | Esegue il raggruppamento delle righe in base al soggetto destinatario delle fatture ed agli altri dati omogenei |
| Salva | Permette di salvare i dati immessi al fine, ad esempio, di proseguire in un secondo tempo |






