---
title: Parametri popisa vrijednosnih papira
sidebar_position: 4
---

Parametri modula Popis vrijednosnih papira nalaze se na putanji **Parametri > Riznica**.

U parametrima modula Popis vrijednosnih papira mogu se unaprijed definirati zadane vrijednosti koje će se predlagati u postupcima modula. Konkretno:

#### Preuzimanje vrijednosnih papira

- **Automatsko knjiženje**: omogućuje unaprijed definiranje knjiženja vrijednosnih papira izravno prilikom njihova preuzimanja iz računa ili otvorenih stavki.
- **Preuzimanje samo vrijednosnih papira s dospijećem nakon određenog broja dana**: ako je naveden broj dana, **FluentisERP** će blokirati kreiranje vrijednosnog papira s ranijim datumom dospijeća koji se ne može predati banci na naplatu.
- **Blokiraj kreiranje vrijednosnih papira bez ABI/CAB kodova**: ako je opcija aktivirana, **FluentisERP** će blokirati kreiranje vrijednosnih papira kojima nije moguće dodijeliti odgovarajuće ABI/CAB kodove banke.
- **Grupiraj odobrenja prema datumu dospijeća**: ako je opcija aktivirana, automatsko storniranje odobrenja, koje se može postaviti za pojedinog kupca, primjenjivat će se samo kada su datumi dospijeća usklađeni s datumima dospijeća računa.

#### Knjiženje vrijednosnih papira

- **Knjigovodstveni predložak**: omogućuje definiranje zadanog knjigovodstvenog predloška koji će se predlagati u istoimenom postupku.
- **Grupiranje prema kontu vrijednosnih papira**: omogućuje definiranje načina grupiranja vrijednosnih papira u knjiženjima koja se izvršavaju ovim postupkom.
- **Privremena knjiženja**: omogućuje određivanje statusa privremenog knjiženja za knjiženja koja se izvršavaju ovim postupkom.

#### Knjiženje popisa vrijednosnih papira

- **Knjigovodstveni predložak**: omogućuje definiranje zadanog knjigovodstvenog predloška koji će se predlagati u istoimenom postupku.
- **Knjiži na datum dospijeća**: ovom se opcijom knjiženje popisa dijeli na više knjiženja prema datumima dospijeća pojedinih vrijednosnih papira, uz dodavanje broja bankovnih dana definiranog u šifarniku banke za odabrani predložak.
- **Knjiži na datum dospijeća uz datum valute banke jednak datumu obračuna**: ovom se opcijom pojedini vrijednosni papiri knjiže na njihove datume dospijeća, dok se datum valute banke prilagođava prema broju bankovnih dana definiranom u šifarniku banke za odabrani predložak.
- **Zatvaranje kupca prilikom knjiženja popisa vrijednosnih papira**: aktiviranjem ove opcije neće se provoditi zasebno knjiženje vrijednosnih papira pa se neće koristiti prijelazni konto *vrijednosni papiri u portfelju*. Umjesto toga, kupac će se izravno zatvoriti postupkom *Knjiženje popisa vrijednosnih papira*, uz protustavku koja je najčešće *vrijednosni papiri uz uvjet povrata bez naplate (SBF)*, odnosno prijelazni konto unesen u zaglavlju samog popisa.

#### Knjiženje vrijednosnih papira prema dobavljaču

- **Knjiženje vrijednosnih papira prema dobavljaču**: omogućuje unaprijed definiranje knjigovodstvenog predloška koji će se predlagati u postupku knjiženja vrijednosnih papira prema dobavljaču, odnosno prijenosa kreditnih instrumenata kojima se plaćaju dobavljači.

#### Knjiženje priljeva

- **Knjigovodstveni predložak**: omogućuje definiranje zadanog knjigovodstvenog predloška koji će se predlagati u istoimenom postupku.
- **Troškovi provizija**: omogućuje definiranje analitičkog konta troškova provizija za knjiženja koja se izvršavaju ovim postupkom.
- **Financijski rashodi**: omogućuje definiranje analitičkog konta financijskih rashoda za knjiženja koja se izvršavaju ovim postupkom.

#### Grupiranje

- **Grupiraj iznose manje od**: ako ovo polje nije prazno i vrijednost nije nula, određuje se prag iznosa stavki koje će se grupirati. Primjerice, ako se postavi vrijednost 1000, grupirat će se stavke čiji su iznosi manji od tog iznosa, odnosno do 999,99.