---
title: Parametri popisa vrijednosnih papira
sidebar_position: 4
---

I parametri del modulo Portafoglio Effetti si trovano in **Parametri > Tesoreria**.

U parametrima modula Portfelj računa mogu se unaprijed postaviti zadane stavke koje će se predlagati u procedurama modula. 

Konkretno:

#### Prijem računa 
- **Automatsko knjiženje označenih računa**: omogućuje unaprijed definiranje knjiženja efekata izravno u trenutku preuzimanja efekata iz faktura ili iz stavki.  
- **Acquisizione solo con scadenza oltre numero giorni**: se indicato un numero di giorni, allora ***FluentisERP*** bloccherà la creazione di un effetto con scadenza più recente non bancabili
- **Blocco creazione effetti senza abi/cab**: se impostato, ***FluentisERP*** bloccherà la creazione di effetti ai quali non è possibile assegnare codici abi/cab di appoggio
- **Raggruppa note credito per data scadenza**: se impostato, lo storno automatico delle note di credito, che si può impostare sul singolo cliente, opererà solo per data uniforme alle scadenze fatture.

#### Contabilizzazione effetti  
- **Causale di contabilità**: consente di definire la causale contabile di default da proporre nella procedura omonima.  
- **Raggruppa per conto effetto**: consente di definire il parametro di raggruppamento effetto alle registrazioni effettuate con tale procedura.  
- **Registrazioni provvisorie**: consente di definire lo stato di registrazione provvisoria alle registrazioni effettuate con tale procedura.  

#### Contabilizzazione distinte  
- **Causale di contabilità**: consente di definire la causale contabile di default da proporre nella procedura omonima.  
- **Contabilizza alla data di maturazione**: la prima opzione andrà a spezzare la registrazione della distinta alle varie date scadenza degli effetti con l'aggiunta dei giorni banca impostati in anagrafica banca per la causale impostata.  
- **Contabilizza in data scadenza con data valuta banca = data di maturazione**: la seconda opzione, invece, registrerà i vari effetti alle varie date scadenza ma con data valuta banca rettificata secondo i giorni banca impostati in anagrafica banca per la causale impostata. 
- **Chiusura cliente in contabilizzazione distinta**: con questa impostazione non sarà effettuata la Contabilizzazione effetti e quindi non si utilizzerà un conto di appoggio *effetti in portafoglio*, ma il cliente sarà chiuso direttamente con la *Contabilizzazione distinte* con contropartita tipicamente *effetti sbf*, cioè il conto di transito inserito in testata della distinta stessa.

#### Contabilizzazione Effetti a fornitore  
- **Contabilizzazione effetti a fornitore**: consente di predefinire la causale contabile da proporre nella procedura di Contabilizzazione effetti a fornitore, cioè il giro di titoli di credito in pagamento ai fornitor

#### Contabilizzazione accrediti 
- **Predložak zapisa knjige**: omogućuje definiranje zadane knjigovodstvene šifre koja će se predlagati u istoimenom postupku.  
-  **Provizijske naknade**: omogućuje definiranje podračuna za troškove provizija za knjiženja izvršena tim postupkom.  
- **Pasivni troškovi**: omogućuje definiranje podračuna za financijske rashode za knjiženja izvršena tim postupkom.  

#### Raggrupamento  
- **Grupiraj iznose manje od**: ovo polje, ako nije prazno i različito od nule, određuje graničnu vrijednost stavki koje će se grupirati. Ako je, primjerice, postavljeno na ‘1000’, to znači da će se grupirati sve stavke manje od tog iznosa, dakle do 999,99.  