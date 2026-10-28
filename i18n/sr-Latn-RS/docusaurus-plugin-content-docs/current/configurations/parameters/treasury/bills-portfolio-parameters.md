---
title: Parametri popisa hartija od vrednosti
sidebar_position: 4
---

Parametri modula Popis hartija od vrednosti nalaze se na putanji **Parametri > Rizinica (Trezor)**.

U parametrima modula Popis hartija od vrednosti mogu se unapred definisati zadate vrednosti koje će se predlagati u postupcima modula. Konkretno:

#### Preuzimanje hartija od vrednosti

- **Automatsko knjiženje**: omogućava unapred definisanje knjiženja hartija od vrednosti direktno prilikom njihovog preuzimanja iz faktura ili otvorenih stavki.
- **Preuzimanje samo hartija od vrednosti sa dospećem nakon određenog broja dana**: ako je naveden broj dana, **FluentisERP** će blokirati kreiranje hartije od vrednosti sa ranijim datumom dospeća koja ne može da se preda banci na naplatu.
- **Blokiraj kreiranje hartija od vrednosti bez ABI/CAB kodova**: ako je opcija aktivirana, **FluentisERP** će blokirati kreiranje hartija od vrednosti kojima nije moguće dodeliti odgovarajuće ABI/CAB kodove banke.
- **Grupiši odobrenja prema datumu dospeća**: ako je opcija aktivirana, automatsko storniranje odobrenja, koje se može podesiti za pojedinačnog kupca, primenjivaće se samo kada su datumi dospeća usklađeni sa datumima dospeća faktura.

#### Knjiženje hartija od vrednosti

- **Knjigovodstveni šablon**: omogućava definisanje podrazumevanog knjigovodstvenog šablona koji će se predlagati u istoimenom postupku.
- **Grupisanje prema kontu hartija od vrednosti**: omogućava definisanje načina grupisanja hartija od vrednosti u knjiženjima koja se izvršavaju ovim postupkom.
- **Privremena knjiženja**: omogućava određivanje statusa privremenog knjiženja za knjiženja koja se izvršavaju ovim postupkom.

#### Knjiženje popisa hartija od vrednosti

- **Knjigovodstveni šablon**: omogućava definisanje podrazumevanog knjigovodstvenog šablona koji će se predlagati u istoimenom postupku.
- **Knjiži na datum dospeća**: ovom opcijom knjiženje popisa deli se na više knjiženja prema datumima dospeća pojedinačnih hartija od vrednosti, uz dodavanje broja bankarskih dana definisanog u šifarniku banke za izabrani šablon.
- **Knjiži na datum dospeća uz datum valute banke jednak datumu obračuna**: ovom opcijom pojedinačne hartije od vrednosti knjiže se na datume njihovog dospeća, dok se datum valute banke prilagođava prema broju bankarskih dana definisanom u šifarniku banke za izabrani šablon.
- **Zatvaranje kupca prilikom knjiženja popisa hartija od vrednosti**: aktiviranjem ove opcije neće se obavljati zasebno knjiženje hartija od vrednosti, pa se neće koristiti prelazni konto *hartije od vrednosti u portfelju*. Umesto toga, kupac će se direktno zatvoriti postupkom *Knjiženje popisa hartija od vrednosti*, uz protivstavku koja je najčešće *hartije od vrednosti uz uslov povrata bez naplate (SBF)*, odnosno prelazni konto unet u zaglavlju samog popisa.

#### Knjiženje hartija od vrednosti prema dobavljaču

- **Knjiženje hartija od vrednosti prema dobavljaču**: omogućava unapred definisanje knjigovodstvenog šablona koji će se predlagati u postupku knjiženja hartija od vrednosti prema dobavljaču, odnosno prenosa kreditnih instrumenata kojima se plaćaju dobavljači.

#### Knjiženje priliva

- **Knjigovodstveni šablon**: omogućava definisanje podrazumevanog knjigovodstvenog šablona koji će se predlagati u istoimenom postupku.
- **Troškovi provizija**: omogućava definisanje analitičkog konta troškova provizija za knjiženja koja se izvršavaju ovim postupkom.
- **Finansijski rashodi**: omogućava definisanje analitičkog konta finansijskih rashoda za knjiženja koja se izvršavaju ovim postupkom.

#### Grupisanje

- **Grupiši iznose manje od**: ako ovo polje nije prazno i vrednost nije nula, određuje se prag iznosa stavki koje će se grupisati. Na primer, ako se postavi vrednost 1000, grupisaće se stavke čiji su iznosi manji od tog iznosa, odnosno do 999,99.