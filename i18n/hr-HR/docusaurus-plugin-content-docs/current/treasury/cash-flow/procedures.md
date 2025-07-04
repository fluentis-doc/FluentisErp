---
title: Automatsko generiranje novčanog tijeka 
sidebar_position: 4
---

Obično se simulacija novčanog toka kreira kroz ovaj obrazac, koji omogućuje definiranje parametara upravljanja za svaki tip toka.

Svaka nova obrada sprema izračun povezan s poljem **Broj**, koji se automatski dodjeljuje. Također je moguće dodati detaljan **Opis**.

*Specifična polja*

**Tip / Opis tijeka:** preuzeto iz tablice Tipovi toka 

**Od datuma / Do datuma:** Raspon datuma filtra koji djeluje prema specifičnoj logici svakog tipa toka 

**Omogući:** oznaka koja upravlja stvarnom upotrebom odgovarajućeg tipa tijeka u izračunu koji će biti pokrenut 

**Privremeni zapis:** uzima ili ne uzima u obzir podatke povezane s računovodstvenim zapisima u statusu *Privremeno*

**Neplativo:** uzima ili ne uzima u obzir stavke koje su *nenaplative*

**Koristi preostalu količinu:** omogućuje uzimanje u obzir narudžbi prema preostalom iznosu koji treba isporučiti 

**Koristi trenutnu dostupnost:** čita račune u portfelju koji nisu neplaćeni s rokom koji je veći od današnjeg, te ih prikazuje na današnji datum u grupnom računu (iako će knjiženje biti izvršeno tek nakon naplate) 

**Koristi dospijeće:** omogućuje uzimanje u obzir i računa "po primitku".  

:::danger PAŽNJA
Stavke unesene u popis bit će vidljive samo ako imaju aktiviranu oznaku **Knjiženo** unutar njih (jer je izvršeno računovodstveno knjiženje). Budući da ih je ipak moguće unijeti u popis za prezentaciju banci, čak i ako nisu knjiženi, preporuča se obratiti pažnju.

Drugi važan uvjet je filtriranje koje isključuje (neovisno o datumu filtra postavljenom prije pokretanja izračuna) račune s datumom dospijeća koji je prije "današnjeg", odnosno datumom obrade novčanog toka u pitanju. 
:::

Ako se radi s tipom tijeka **Avansi**, tada će se uzimati iznosi iz popisa predujma faktura koje nisu knjižene za iznos predujma na bankovnom računu, s datumom jednakim datumu dospijeća predujma.

**PAŽNJA:**
Ako se odabere ova opcija, NE smiju se unositi i pomoćni računi koji se koriste u početnoj financijskoj ravnoteži (putem upravljanja tipovima financijskih računa), inače će se podaci (u smislu pozitivnog novčanog toka) duplicirati i rezultat će biti iskrivljen i nepouzdan. 


*Detalj logika primijenjenih na tipove toka*:

**Stanje glavne knjige**: raspon datuma koristi se za izračunavanje računovodstvenog salda prema datumu računovodstvenog knjiženja;

**Dospijeća plaćanja**: raspon datuma koristi se za filtriranje prema datumima dospijeća. Također su prisutne oznake za uzimanje u obzir dospijeća povezanih s privremenim knjiženjima, kao i dospijeća koja nisu plaćena;

**Narudžbe kupaca/dobavljača**: raspon datuma filtrira prema datumu narudžbe. Uzimaju se u obzir samo tipovi s označenim *novčani tijekom* koji su ispisani i potvrđeni. Preporučuje se postaviti oznaku *Koristi preostalu količinu* kako bi se simulirala narudžba prema preostalom iznosu koji treba isporučiti/primiti. Ispod se računaju hipotetski rokovi temeljem postavki tipa/načina plaćanja postavljenih u zaglavlju, uzimajući kao početni datum isporuke stavke (ako nedostaje datum isporuke iz zaglavlja narudžbe) ili današnji datum ako je on prije današnjeg. ;

**Otpremnice/primke**: raspon datuma filtrira prema datumu otpremnice. Uzimaju se u obzir samo vrste postavljene za 'novčani tijek', ispisane ili kontrolirane, koje nisu već valorizirane u fakturi. Ispod se računaju hipotetski rokovi temeljem postavki tipa/načina plaćanja postavljenih u zaglavlju, počevši od datuma otpremnice;

**Fakture prodaja/nabava**: raspon datuma filtrira prema datumu dospijeća na fakturi. Razmatraju se dokumenti koji nisu proforma, isprintani, kontrolirani ili oni koji nisu knjiženi;

**Narudžbe/radni nalog**: raspon datuma filtrira prema datumu narudžbe, samo otisnute narudžbe koje nisu izvršene. Stvaraju se hipotetski rokovi temeljem preostalog iznosa koji nije naplaćen i troška obrade;

**Povrat/radni nalog**: raspon datuma filtrira prema datumu povratka, samo otisnuti povratci koji nisu fakturirani. 

Povrati moraju biti generirani tako da se izvrši narudžba za radni nalog, a ne unosom ručno, inače neće biti vidljiva;

**Vanbilančni zapisi**: raspon datuma filtrira prema datumu dospijeća vanbilančnih zapisa.

Samo završni datum za vrstu toka računovodstvenog salda uvijek će biti postavljen kao današnji datum pri otvaranju. Nakon što je postavljen opis novčanog tijeka, moguće je pritisnuti gumb za izračun. S obzirom na pomake narudžbi, za koje sustav mora napraviti simulaciju redak po redak, obrada može biti osobito duga, ovisno o broju podataka prisutnih u postavljenom filtru. Kada obrada bude završena, moguće je otvoriti novčani tijek putem odgovarajućeg gumba za upravljanje. 

**Aktivni portfelj**: PAŽNJA: potrebno je obratiti pažnju na stavke koji su prikazane, ali nisu knjižene. Takva situacija može nastati, na primjer, ako su računi izdani iz dospjelih dugovanja i zatim uneseni u popis bez knjiženja. U tom će slučaju računi biti isključeni iz novčanog tijeka. Drugi uvjet na koji treba obratiti pažnju je taj da, neovisno o filtru, datum dospijeća učinka mora biti veći ili jednak od "današnjeg" (datum obrade novčanog toka). 

| Funkcija  | Značenje |
| --- | --- |
| Kreiranje | Izvršava postupak generiranja novčanog tijeka prema postavkama unesenim u obrazac. |
| Izmjeni | Otvara novčani tijek koji je stvoren u načinu uređivanja. |