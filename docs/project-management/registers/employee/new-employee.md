---
title: Nuovo Dipendente
sidebar_position: 2
---

Questa finestra permette di inserire i dati di un nuovo **Dipendente**. 

### Dati principali 
I dati principali sono:

**Codice dipendente**: contiene il codice univoco del dipendente;

**Nome utente**: contiene l’utente del dipendente;

**Password**: contiene la password di accesso per l’utente;

**Operatore**: è possibile collegare un operatore all’anagrafica dipendente;

**Cognome**: contiene il cognome del dipendente;

**Nome**: contiene il nome del dipendente.

**Codice dipendente paghe**: codice che identifica il dipendente nella gestione paghe - fondamentale altrimenti il dipendente non verrà trovato nella ricerca per il calcolo dati paghe. Lo stesso codice verrà utilizzato nel tracciato del file generato per l'esportazione dei dati verso sistemi esterni a Fluentis. 

Sono presenti diverse tab.
### Tab Generalità
     
La tab **Tab Generalità** contiene dati generali del dipendente, per esempio:  
**Codice Carica**: è una tabella predefinita in cui è possibile assegnare un codice carica, derivati dalla tabella ministeriale dei codici carica utilizzata nei dichiarativi fiscali;  
**Agente**: contiene l’eventuale anagrafica Agente collegata al dipendente;   
**Codice Fiscale**: codice fiscale del dipendente;   
**IBAN**: contiene l’IBAN del dipendente;  
**Dati anagrafici**: quali Sesso/Data di nascita, comune e provincia di nascita, Indirizzo di domicilio, indirizzo di residenza, comune residenza, cap residenza, provincia residenza;  
**Dati di contatto**: telefono abitazione, telefono cellulare, email;  
**Tipo di documento di identificazione**: tipologia di documento utilizzato per identificare la persona, come ad es. carta di identità, passaporto, etc;  
**Rilasciato**: ente che ha rilasciato il documento di identificazione;    
**C.I./Data di rilascio**: contiene le specifiche del documento d’identità del dipendente;  
**Debiti vs/Dipendente**: contiene il conto nel quale imputare i debiti verso il dipendente.

### Allocazione Qualifiche
     
Nella tab **Tab Allocazione Qualifiche** è possibile allocare le qualifiche del dipendente, attraverso campi quali **Livelli contrattuali** e **Qualifiche**. È possibile inoltre assegnare un **Centro di costo** ed una **Voce di costo**, dati che verranno trasferiti anche alla tab successiva.

### Tab Turni e ferie
   
Nella tab **Tab Turni e ferie** è possibile inserire:  
**Centri di costo** e **Voce di costo**: centro di costo di riferimento del dipendente, utilizzato per la parte di controlling.  
**Orario di lavoro**: contiene l’rario di lavoro tipico del dipendente;  
**Causale dichiarazione attività**: contiene la causale di default da proporre nella dichiarazione attività;  
**Turno di lavoro**: indica il turno di lavoro tipico del dipendente;  
**Ferie**: contiene delle indicazioni sulle ferie anni precedenti e totali correnti aggiornati.  

Nella sezione sottostante sono presenti 3 griglie Ferie / Permessi / ROL 
con i conteggi ore dettagliati per ogni anno. 

**Anno**: anno di riferimento dei conteggi;  
**Maturato Annuo**: valore di riferimento del monte ore annuo di Ferie/Permessi/ROL che spettano al dipendente. Una volta indicato, viene copiato di anno in anno a meno che non si effettui una variazione manuale. Questo valore è utilizzato come base per calcolare le ore maturate fino all'ultimo cedolino.  
**Maturate**: ore maturate risultanti dall'ultimo cedolino elaborato.  
**Godute**: ore utilizzate nell'anno corrente;  
**Anno precedente**: ore residue non utilizzate dell'anno precedente;  
**Residuo**: totale ore residuo dell'anno corrente;  
**Modificato manualmente**:  flag che indica se la riga è stata modificata manualmente dall'operatore oppure aggiornata in automatico con l'elaborazione dei cedolini. 

I valori indicati in queste griglie, vengono poi utilizzati per i calcoli ed i totali nei cedolini paga elaborati dall'area progetti.

:::note[Esempio]
Ipotizziamo che il dipendente Mario Rossi in 1 anno abbia diritto a 192 ore di ferie.  
Se il dipendente non ha uno storico, si dovranno inserire i valori dell'anno precedente manualmenmte.  
Per l’anno successivo (ad es. 2026) il valore "maturato annuo" viene direttamente copiato dall’anno precedente(2025).  
Elaborando il cedolino di giugno 2026, si calcoleranno in automatico le ferie maturate fino a giugno, utilizzando la seguente formula:  
192 / 12 (mesi in 1 anno) * 6 (mese ultimo cedolino elaborato) = 96 ore maturate fino a giugno 2026

A giugno 2026 il dipendente Mario Rossi ha utilizzato 8 ore di ferie.  
il riepilogo mostrerà:  

Anno: 2026  
Maturato annuo: 192  
Maturato: 96  
Godute: 8  
Anno precedente: 32 (es. il dipendente ha un residuo di 4 giornate di ferie)  
Residuo: 120 (totale corrente)  
:::


### Tab Indennità
  
Nella tab **Tab Indennità** sono indicate le eventuali indennità del dipendente, codificate attraverso:
**Codice**: contiene il codice dell’indennità;
**Descrizione**: contiene la descrizione;
**Valore**: contiene il valore dell’indennità da applicare.
Le Indennità si possono codificare nella relativa tabella, raggiungibile con l’Apri form.

### Tab Mansioni 

La tab **Tab Mansioni** contiene le mansioni del dipendente, codificabili nella tabella Mansioni e completate da:
**Data inizio**: contiene la data di inizio svolgimento della mansione;
**Data fine**: contiene la data di fine svolgimento della mansione;
**Categoria**: contiene la categoria della mansione, codificabile nella tabella Categoria Mansioni e la relativa **Descrizione**.

### Tab Studi e Lingue

Nella tab **Tab Studi e Lingue** è possibile indicare gli studi conseguiti dal dipendente, codificati nella tabella [Titoli di studio], e le Lingue conosciute, codificate nella tabella [Lingue conosciute], entrambe raggiungibili con l’Apri form.

### Tab Curriculum e Corsi

Nella tab **Tab Curriculum e Corsi** è possibile inserire manualmente ulteriori dati del dipendente, nelle griglie **Curriculums** e **Corsi di aggiornamento frequentati**. Questi dati vengono completati dalla **Data inizio**, dalla **Data fine**, da un eventuale **Fornitore** codificato, dal **Numero di ore**, dal **Costo**, dalla **Valutazione**, ecc.

### Tab Situazioni speciali

Nella tab **Tab Situazioni speciali** è possibile indicare le situazioni speciali non previste dalle altre tab. Queste situazioni sono codificabili nella tabella Situazioni speciali.

### Tab Assunzione
 
Nella **Tab Assunzione** è possibile indicare le informazioni relative all’assunzione del dipendente:
**Tipo associazione**: è possibile indicare una tipologia codificata nella tabella Tipi assunzioni;
**Attualmente in prova**: è possibile indicare se il dipendete è attualmente in periodo di prova;
**Data inizio**: contiene la data di inizio assunzione;
**Data fine**: contiene la data di fine assunzione;
**Durata gg.**: è un dato calcolato in base alle date inserite e indica i giori totali di assunzione.
È possibile indicare un totale di tre periodi di assunzione.

### Tab Storia lavorativa

Nella **Tab Storia lavorativa** contiene la storia lavorativa del dipendente associata alle precise postazioni, infatti i dati richiesti sono:
**Da data/A data**: intervallo di tempo nel quale il dipendente è rimasto in una determinata postazione;
**Impianto**: contiene l’impianto di riferimento;
**Postazioni di lavoro**: contiene la postazione di lavoro;
**Rischio**: contiene il rischio associato.

### Tab Extra Data
     
Nella **Tab Extra Data** sono contenuti i valori degli Extra Data assegnati al il dipendente. Per ulteriori informazioni si rimanda alla sezione [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata/). 

