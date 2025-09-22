---
title: Parametri za kontrolu artikala
sidebar_position: 1
---

Parametri se nalaze na putu **Parametri > Kvaliteta > Parametri za kontrolu artikala**.

Podaci prisutni u ovom upravljanju koriste se za predlaganje informacija u upravljanjima:  
- **Tehnička uputstva**;   
- **Kontrolni planovi**;   
- **Kontrola artikala**;   
- **Certifikati analiza**.   

#### Specifična tipka

**Spremi**: omogućuje spremanje izmijenjenih informacija. 

## Općenito   

U ovom kartici moguće je unijeti podatke koji se zadano predlažu u dokumentima modula *Kontrola artikala*.   

### Vrsta testiranja     

U ovom ekspanderu moguće je unijeti podatke koje treba predložiti u *Vrsta testiranja*.   
U expanderu je moguće unijeti:   
- **Vrsta iznosa**: *Vrsta iznosa* da predloži unos jednog *Vrsta testa*.   
- **Vrsta limita**: *Vrsta limita* da predloži unos jednog *Vrsta testa*.   

### Tehnički listovi   

U ovom expanderu moguće je unijeti podatke za predlaganje u *Tehničke listove*.   
U expanderu je moguće unijeti:    
- **Vrsta podatkovnog lista**: *Vrsta podatkovnog lista* za predlaganje pri unosu *Tehničkog lista*.   
- **Odgovoran**: *Zaposlenik* koji se predlaže kao odgovorna osoba pri unosu *Tehničkog lista*.   
- **Vrsta deklaracije u artiklima**: *Vrsta izjave* za predlaganje pri unosu *Povezanog artikla* u *Tehničkom listu*.    
- **Vrsta izjave za ispis**: *Vrsta izjave* za predlaganje u *Vrsta izjave za ispis u slučaju da artikal nije opremljen* u  *Ispis tehničkog lista*.   

### Planovi kontrole      

U ovom proširivom dijelu moguće je unijeti podatke za predlaganje u *Planove kontrole*.   
U proširivom dijelu moguće je unijeti:    
- **Vrsta plana kontrole**: *Vrsta plana kontrole* za predlaganje pri unosu *Plana kontrole*.   
- **Odgovorna osoba**: *Zaposlenik* za predlaganje kao odgovorna osoba pri unosu *Plana kontrole*.   

### Certifikati analize     

U ovom proširivom dijelu moguće je unijeti podatke za predlaganje u *Certifikate analize*.   
U proširivom dijelu moguće je unijeti:    
- **Vrsta certifikata**: *Vrsta certifikata analize* za predlaganje pri unosu *Certifikata analize*.   
- **Odgovorna osoba**: *Zaposlenik* za predlaganje kao odgovorna osoba pri unosu *Certifikata analize*.   


## Kontrola artikala

U ovom tabulatoru moguće je unijeti podatke:  
> - za predlaganje po defaultu u *Kontroli artikala*;   
> - za definiranje različitih boja koje se koriste u filteru pretrage za prepoznavanje različitih stanja *Kontrole*;   
> - za postavljanje upravljačkih parametara;     
> - za automatsku pretragu i povezivanje *Planova kontrole* koje treba povezati s *Kontrolom artikla*.   

- **Omogući višestruko očitavanje vrijednosti**: označava omogućavanje mogućnosti očitavanja više vrijednosti za svaki test, u svim vrstama dokumenata.     
- **Automatsko odobrenje očitanih vrijednosti**: označava automatsko *Odobrenje* *Testa* aprilikom očitavanja *Vrijednosti* i *Ishoda*.   
- **Prijedlog negativnog rezultata**: popis unaprijed definiranih vrijednosti koje sustav koristi za određivanje metodologije dodjele nesukladnost *Testu*.    
> Metodologija se uzima u obzir samo za očitavanje *Testova* tipa *Numerički* u *Višestrukom očitavanju vrijednosti*. Predefinirane vrijednosti su:     
> - *pri prvoj zabilježenoj nesukladnoj vrijednosti*;   
> - *na osnovu aritmetičke sredine očitanih vrijednosti (samo numeričke vrijednosti)*.   
>
- **Vrsta negativnog rezultata**: prijedlog *Vrste ishoda* u slučaju nesukladnih *Testova*.   
- **Vrsta pozitivnog rezultata**: prijedlog *Vrste ishoda* u slučaju nesukladnih *Testova*.   


### Vrste dokumenata za uvoz        

U ovom proširivom dijelu/popisu moguće je unijeti podatke koji se uzimaju u obzir tijekom *Uvoza artikala za kontrolu* i predlažu se u *Kontroli artikla*.   
Tablica sadrži vrste dokumenata kojima upravlja *Kontrola artikala*.   
Radi se o unaprijed definiranim vrstama u sustavu kojima se ne mogu dodavati nove ili brisati postojeće. Predefinirane vrijednosti su:  
> - *Prijem robe*;   
> - *Primka*;   
> - *Ulazni račun*;   
> - *Izvješćivanje proizvodnje*;   
> - *Faza Izrada narudžbe*;   
> - *Povrat od podizvođača*;   
> - *Rukovanje teretom*.   

U popisu, za svaku vrstu dokumenta, moguće je unijeti:    
- **Def.**: označava vrstu dokumenta koja se predlaže u filterima pretrage; može se odabrati samo jedna vrsta ili nijedna.    
- **Detalj artikla**: popis unaprijed definiranih vrijednosti koje sustav koristi za identifikaciju vrste detalja za kontrolu *Artikla* za određenu vrstu dokumenta. Predefinirane vrijednosti su:    
>- *Nijedan* - redak *Artikla* neće imati dodatne detalje;   
>- *Lot* - redak *Artikla* ima najviše detalje u obliku *Serije*;   
>- *S.N.* - redak *Artikla* ima najviše detalje u obliku *Serijskog broja*;   
>- *Utovarna jedinica* - redak *Artikla* ima najviše detalje u obliku *Jedinice utovara*;   
>
- **Višestr.**: označava je li omogućeno *Višestruko očitavanje vrijednosti* u *Kontroli artikala* za određenu vrstu dokumenta.  
> Per essere considerato deve essere indicato il parametro generale *Abilita il rilevamento multipli valori*.   
- **Tipo controllo**: *Tipo controllo* da proporre all'inserimento di un *Controllo articoli* per la tipologia documento specifica.   
- **Tipo piano di controllo**: durante l'*Importazione articoli da controllare*, escluse le tipologie documento di produzione (*Dichiarazione di produzione* e *Fase Ordine di produzione*), è il *Tipo piano di controllo* che ha priorità maggiore per la ricerca del *Piano di controllo* da associare al *Controllo articoli*.   
- **Descrizione tipo controllo**: è la descrizione del *Tipo controllo*.   
- **Descrizione tipo piano di controllo**: è la descrizione del *Tipo piano di controllo*.   

### Colori righe Controlli articolo      

In questo elenco è possibile definire varie colorazioni per riconoscere i vari stati di un'*Controllo articolo*.   
Tali colori sono applicati nel *Filtro dei Controlli articolo*. L'elenco si compone delle seguenti informazioni:   
- **Tipo**: è lo stato del *Controllo articolo* al quale associare le colorazioni.   
> La tabella contiene dei valori predefiniti dal sistema e non è possibile inserirne di nuovi, eliminarli o modificarli. I valori predefiniti sono:
> - *Articoli non soggetti a controllo*;   
> - *Controlli privi di un Piano di controllo*;   
> - *Controlli con più Piani di controllo*;   
> - *Controlli ancora da rilevare*;   
> - *Controlli con esiti Non conformi*;   
> - *Controlli ancora da validare*;   
> - *Controlli già validati*.   
>
- **Sfondo**: è il colore applicato allo sfondo della riga del *Controllo articolo* dello stato specifico.   
- **Testo**: è il colore applicato al testo della riga del *Controllo articolo* dello stato specifico.   

### Personalizzazione dati per tipo documento      

In questo elenco è possibile aggiungere *Proprietà* della tipologia documento di origine nell'elenco dati del *Controllo articolo*.   
La tabella contiene le medesime tipologie di documento riportate in **Tipi documento per l'importazione**.   
Sono tipologie predefinite dal sistema e non è possibile inserirne di nuove o eliminarle.   
Sono previste 5 informazioni per tipo di dato: *Testo*, *Si/No*, *Intero*, *Decimale*, *Data*.   
Tramite un doppio click sulla cella è possibile selezionare la *Proprietà* desiderata del documento.   

:::tip *Esempio:*   
per la tipologia documento *Fattura di Acquisto* è possibile aggiungere il valore della *Proprietà* di testata *Vostro riferimento*.   
Essendo *Vostro riferimento* un’informazione di testo, tramite il doppio click del mouse sulla colonna *Testo 01* viene eseguito l'Help sulle proprietà di riga del documento *Fattura di Acquisto*.   
Espandere il riferimento *Invoice (Fattura)*, selezionare la proprietà *Your reference (Vostro riferimento)* e premere il pulsante *Seleziona*.   
Nella cella dove è stata effettuata la selezione comparirà la proprietà *YourReference*.
:::

### Personalizzazione intestazioni colonne per tipo documento      

In questo elenco è possibile indicare il *Titolo della proprietà*, corrispondenti alle *Proprietà* selezionate dell'elenco **Personalizzazione dati per tipo documento** e che compariranno nell'elenco dati del *Controllo articolo*.   
La tabella contiene le medesime tipologie di documento riportate in **Tipi documento per l'importazione**.   
Sono tipologie predefinite dal sistema e non è possibile inserirne di nuove o eliminarle.   
Sono previste 5 informazioni per tipo di dato: *Testo*, *Si/No*, *Intero*, *Decimale*, *Data*.   
Tramite un doppio click sulla cella è possibile selezionare la *Voce del dizionario* desiderata da riportare come intestazione.   

:::tip *Esempio:*   
per la tipologia documento *Fattura di Acquisto* è possibile indicare l'intestazione corrispondente all'esempio fatto precedentemente per il valore della *Proprietà* di testata *Vostro riferimento*.   
Tramite il doppio click del mouse sulla colonna *Testo 01* o digitando manualmente la *Voce del dizionario* inserire *Vostro riferimento*.   
:::

Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).