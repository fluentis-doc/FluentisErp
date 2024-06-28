---
title: Tipo codici lotto
sidebar_position: 26
---

La tabella permette di impostare i *tipi di codici lotto* da gestire poi nel database.

**Ricerca Codici lotto**

La form si compone di un'area di filtro e da una di risultato. Una volta impostati i filtri desiderati, basterà cliccare sul pulsante **Ricerca** per visualizzare i risultati nell'aria di risultato.

**Inserimento Codici lotto**

Per poter inserire nuove codifiche è necessario cliccare nella griglia sulla prima riga vuota oppure premere il pulsante **Nuovo**. Inserire il **Codice** e la **Descrizione** del tipo codice lotto, salvare la riga e decidere quali parametri si vogliono utilizzare per la composizione del tipo codice lotto appena creato.

Per ogni parametro utilizzato si può decidere da quanti caratteri deve essere formato ed eventualmente anche il carattere di riempimento da utilizzare. Per esempio, con il parametro “Numero progressivo” impostando come carattere di riempimento lo “0” e come Lunghezza 5 verranno creati lotti con come primo numero lo 00000, poi lo 00001, poi lo 00002 e così via. 

Il **Tipo codice lotto** deve poi essere agganciato all'*Anagrafica articolo* nell'apposito ed omonimo campo situato nel tab *Lotti e serial number*, in modo che nelle procedure che creano automaticamente il codice lotto per l'articolo in questione il lotto stesso venga generato secondo le regole impostate qui.

**Dettagli tipi codice lotto**

> *Matricola*: riporta il codice articolo;     
> *Caratteristica*: riporta la caratteristica dell'anagrafica articolo;     
> *Cat. Merceologica*: riporta la categoria merceologica dell'anagrafica articolo;    
> *Tipo Articolo*: riporta il tipo articolo dell'anagrafica articolo;    
> *Variante*: riporta la variante dell'articolo;     
> *Caratteri alfabetici*:  permette di inserire dei caratteri alfabetici;        
> *Giorno Data Inserimento*: riporta il giorno della data inserimento;    
> *Mese Data Inserimento*: riporta il mese della data inserimento;    
> *Anno Data Inserimento*: riporta l'anno della data inserimento;    
> *Giorno Data Scadenza*: riporta il giorno della data di scadenza;    
> *Mese Data Scadenza*: riporta il mese della data di scadenza;    
> *Anno Data Scadenza*: riporta l'anno della data di scadenza;     
> *Tipo Lotto*: riporta il tipo lotto dell'articolo;     
> *Assoc. Anno Lettera*: riporta il valore associato all'anno nella tabella [Associazione anno - lettera](/docs/configurations/tables/general-settings/year-letter-association);    
> *Assoc. Mese Lettera*: riporta il valore associato al mese nella tabella [Associazione mese - lettera](/docs/configurations/tables/general-settings/month-letter-association);    
> *Nomignolo fornitore*: riporta il nomigliolo presente in anagrafica del fornitore;          
> *Numero Bolla Acquisto*: riporta il numero della bolla di acquisto;     
> *Numero Fattura Acquisto*: riporta il numero della fattura di acquisto;    
> *Lotto Fornitore*: riporta il numero del lotto fornitore;    
> *Classe*: riporta la classe dell'articolo.    

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).