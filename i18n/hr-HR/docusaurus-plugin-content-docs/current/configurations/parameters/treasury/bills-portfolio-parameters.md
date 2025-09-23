---
title: Parametri popisa vrijednosnih papira
sidebar_position: 4
---
Parametri modula Portfelj efekata nalaze se u **Parametri > Riznica**.

U parametrima modula Portfelj računa mogu se unaprijed postaviti zadane stavke koje će se predlagati u procedurama modula. 

Konkretno:

#### Prijem računa 
- **Automatsko knjiženje označenih računa**: omogućuje unaprijed definiranje knjiženja efekata izravno u trenutku preuzimanja efekata iz faktura ili iz stavki.  
- **Preuzimanje samo s dospijećem nakon određenog broja dana**: ako se unese određeni broj dana, ***FluentisERP*** će blokirati kreiranje efekta čiji je datum dospijeća preblizu i stoga nije podoban za bankarsku obradu.  
- **Blokiranje kreiranja efekata bez ABI/CAB kodova**: ako je ova opcija uključena, ***FluentisERP*** će onemogućiti kreiranje efekata kojima nije moguće dodijeliti ABI/CAB kodove potrebne za banku.  
- **Grupiraj odobrenja po datumu isteka**: ako je postavljeno, automatsko poništavanje kreditnih nota, koje se može postaviti za pojedinog kupca, djelovat će samo za datume koji su jednaki datumima dospijeća faktura.

#### Knjiženje vrijednosnih papira 
- **Predložak zapisa knjige**: omogućuje definiranje zadatnog računovodstvenog uzroka koji će se predložiti u istoimenoj proceduri.  
- **Grupiranje po kontu računa**: omogućuje definiranje parametra grupiranja učinka za registracije izvršene ovom procedurom.
- **Uključi privremene zapise**: omogućuje definiranje stanja privremenog evidentiranja za evidencije napravljene ovom procedurom. 

#### Knjiženje popisa
- **Predložak zapisa knjige**: omogućuje definiranje zadane računovodstvene svrhe koja će se predložiti u istoimenoj proceduri.  
- **Knjiženje na datum dospijeća**: Prva opcija će razbiti registraciju popisa na različite datume dospijeća efekata s dodatkom dana banke postavljenih u kartici banke za postavljeni uzrok.  
- **Knjiženje na datum dospijeća uz bankovnu valutu = datum dospijeća (maturacije)**: druga opcija, međutim, registrirat će različite učinke na različite datume dospijeća, ali s datumom valute banke ispravljenim prema danima banke postavljenim u kartonu banke za postavljeni uzrok.  
- **Zatvaranje kupca prilikom knjiženja zbirnog naloga**: s ovom postavkom neće se izvršiti Knjigovodstvo efekata i stoga se neće koristiti račun za podršku *efekti u portfelju*, već će kupac biti zatvoren izravno s *Knjigovodstvom popisa* s protivračunom tipično *efekti sbf*, tj. račun tranzita unesen u zaglavlje samog popisa.

#### Knjiženje vrijednosnih papira prema dobavljaču
- **Knjiženje vrijednosnih papira prema dobavljaču**: omogućuje unaprijed definiranje računovodstvenog uzroka koji će se predložiti u postupku Računovodstva efekata prema dobavljaču, tj. prijenosu potraživanja u plaćanju dobavljačima.

#### Knjiženje odobrenja
- **Predložak zapisa knjige**: omogućuje definiranje zadane knjigovodstvene šifre koja će se predlagati u istoimenom postupku.  
-  **Provizijske naknade**: omogućuje definiranje podračuna za troškove provizija za knjiženja izvršena tim postupkom.  
- **Pasivni troškovi**: omogućuje definiranje podračuna za financijske rashode za knjiženja izvršena tim postupkom.  

#### Parametri Konfiguriranja Grupiranja 
- **Grupiraj iznose manje od**: ovo polje, ako nije prazno i različito od nule, određuje graničnu vrijednost stavki koje će se grupirati. Ako je, primjerice, postavljeno na ‘1000’, to znači da će se grupirati sve stavke manje od tog iznosa, dakle do 999,99.  