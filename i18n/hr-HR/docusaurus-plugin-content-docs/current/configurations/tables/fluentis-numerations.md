---
title: Numeracije u Fluentisu
sidebar_position: 13
last_update:
  date: 03/30/2023
---

U fazi unosa novog dokumenta, jedan od prvih podataka koji se traže je broj dokumenta o kojem se radi. Ovaj podatak se automatski predlaže zahvaljujući tablicama numeratora.

U Fluentisu je upravljanje numeratorima podijeljeno prema vrsti dokumenta, kao što možemo vidjeti iz stavki izbornika prisutnih među tablicama svakog modula.

Logika koja stoji iza svih ovih numeratora je ista, stoga ćemo razmotriti jedan, posebno **Numeraciju kompenzacija**, koja će poslužiti kao teorijska osnova za definiranje numeratora drugih vrsta dokumenata.
U formi **Numeriranje naplate** prikazana je tablica s popisom postojećih numeratora za kompenzacije. To znači da je moguće upravljati s više numeratora unutar iste vrste dokumenta. Klikom na tipku **Novi** otvara se forma **Numeracija**.


![](/img/it-it/configurations/tables/fluentis-numerations/image01.png)

### Sezione superiore

**Codice**: è il codice del numeratore;

**Descrizione**: la descrizione del numeratore;

**Formula numero**: in questo campo si può impostare una valorizzazione di una stringa alfanumerica, che sarà memorizzata nella proprietà alfanumerica predefinita ‘FormattedNumber' dell'oggetto (mentre il campo numerico viene memorizzato nella proprietà ‘Number'). La definizione della *Formula* per la formattazione del numero del documento può essere definita a livello di tipo numerazione, al livello di periodo di validità del tipo numerazione oppure a livello definizione dei range di validità. La priorità di applicazione è bottom-up, si verifica se è definita nei range di validità, se null si verifica se è definita nei periodi di validità se nulla si verifica se è definita nel tipo numerazione.

Na slici iznad (preuzeto iz numeracija za kompenzacije) unesena je sljedeća formula “Year.ToString() + "-" + Number.ToString("D5") + "-" + SalesInvoiceType.Code”, što će generirati niz u formatu: “2015-00001-TestCode”.

Drugi primjer – umetanje vrijednosti koju unosi korisnik: “Number.ToString("D5") + "-" + "-" + (CreationUser != null ? CreationUser.Description.Substring(0,3) : "")”

U ovom slučaju potrebno je dodatno intervenirati i na razini ARM sustava, kako bi se omogućilo da setter za formatirani broj ima pristup svojstvu korisnika. Unutar sekcije Patterns, uređuje se odgovarajući setter.

![](/img/it-it/configurations/tables/fluentis-numerations/image02.png)

Zatim se aktivira oznaka **Used**:

![](/img/it-it/configurations/tables/fluentis-numerations/image03.png)

Spremi, u IIS-u ponovo pokreni pool Fluentis i dobit ćeš operativne podatke.

*Dodatni primjer*: postavljanje broja fakture (ili otpremnice) s oznakom, (npr. 1/A, 2/A.... 1/B, 2/B):

number.ToString()+"/B"

potrebno unijeti u numeraciju (u zaglavlju)

Zatim je u izvještaju potrebno zamijeniti standardno polje (npr. Number) s izračunatim poljem (npr. CalcNumber), unutar kojeg se nalazi sljedeći izraz:  

Iif(IsNullOrEmpty([FormattedNumber]),  [Number], [FormattedNumber])

*NAPOMENA*: ovo funkcionira isključivo u izvještaju, u formama će se i dalje prikazivati standardni broj bez kosog broja.

**Onesposobljen**: za onemogućavanje brojača.

### Politike upravljanja (prva tablica)

U ovom odjeljku unose se politike upravljanja brojačem.

**Nalog**: kod zapisa retka;

**Vrijedi od datuma**: obavezno polje koje označava početni datum važenja numeracije;

**Valjan na datum**: datum završetka važenja intervala. Polje može biti prazno (vidi sljedeće polje);

**Razdoblje**: periodičnost intervala. Opcije su *Nema* (interval vrijedi samo u definiranom rasponu; ako nema datuma završetka, brojač je stalni), *Godišnje* (brojač se automatski resetira na početni broj svake godine, do datuma završetka valjanosti), *Mjesečno* (brojač se automatski resetira na početni broj svaki mjesec, do datuma završetka valjanosti), *Dnevno* (brojač se automatski resetira na početni broj svaki dan, do datuma završetka valjanosti);  

**Smjenski mjeseci**: mjeseci koje treba dodati na početni datum valjanosti da bi se dobio mjesec u kojem se brojač resetira;

**Smjenski dani**: dani koje treba dodati na početni datum valjanosti da bi se dobio dan u kojem se brojač resetira;  

**Progresivni datumski broj**: ako je aktivno, osigurava da numeracija bude progresivna po datumu, sprečavajući unos dokumenta s većim brojem, ali s datumom ranijim od posljednjeg unosa;

**Oporavak brojeva**: omogućuje automatsko popunjavanje praznina u numeraciji. Ako je aktivan **Progresivni datumski broj** vraćanje broja može se dogoditi samo ako je u skladu s gore navedenim pravilima;

**Onesposobljen**: za onemogućavanje politike numeracije;


### Numerički intervali (druga tablica)

Ova tablica je povezana s odabranom politikom iz gornje tablice.

**Nalog**: kod numeričkog intervala;  

**Početni broj**: obavezno polje koje označava početni broj intervala;

**Početni broj pretraživanja**: može se unijeti ako se želi ograničiti pretraživanje broja na određeni početni interval;

**Završni broje**: maksimalni broj intervala, može biti prazno;

**Vanjska Numeracija**: označiti ako numeraciju ne dodjeljuje Fluentis, već neki vanjski sustav;  

**Formula numero**: ne koristi se;

**Onesposobljen**: za onemogućavanje korištenja navedenog intervala.  
