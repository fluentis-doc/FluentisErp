---
title: Kreiranje privremenih zatvaranja
sidebar_position: 3
---

Ovaj postupak omogućuje kreiranje novih simulacija međugodišnje/privremene bilance.

Polazni podaci uvijek potječu iz glavne knjige u trenutku kreiranja zatvaranja: program preuzima salda različitih podkonta prema parametrima kreiranja zatvaranja postavljenim u ovom obrascu. Nakon toga omogućuje dodavanje svih operacija obračuna razgraničenja, amortizacija i ručnih knjiženja kako bi se dobila simulacija bilance s potrebnim prilagodbama i korekcijama. Ova operacija nema nikakav utjecaj na podatke glavne knjige u kontekstu završnog zatvaranja knjiga na kraju godine. Modul prviremenog zatvaranja se izvodi u potpuno odvojenim tablicama od glavne knjige.


## Kartica *Opći*

Flag **Odaberi podatke za odjel**: Ako je uključeno, prethodno polje odjela postaje filter koji omogućuje preuzimanje samo podataka određenog odjela iz knjigovodstva.

**Godina knjiženja**: Godina na koju se podaci odnose; koristi se za identifikaciju zadanih konta za knjiženje prilagodbi i pripadajuće računovodstvene periode.

**Isključi predložak**: Ako se preuzimaju podaci za cijelu već zatvorenu računovodstvenu godinu, omogućuje isključenje zatvaranja konta kako bi se dobili podaci samo za poslovnu godinu.

**Područje**: Vidljivo samo u poduzećima koja koriste kontroling; ovdje se može odabrati područje analize koje će se povezati s obrađenim podacima.



### Odjeljak za **dohvat financijske vrijednosti imovine**

Označavanje flaga **Dohvat zapisa kretanja imovine**, (zadano uključeno) omogućuje filtriranje podataka. ERP će tada u privremeno zatvaranje uključiti i salda podkonta povezanih s tipovima konta koji imaju flag za praćenje vrijednosti imovine.

Filteri za datum knjiženja i datum obračuna omogućuju definiranje raspona datuma koji će se koristiti za dohvaćanje imovinskih podataka iz knjiženja odabranog razdoblja. 

:::tip Napomena
Ako zatvaranje i ponovno otvaranje konta još nisu evidentirani u knjigovodstvu, početni datum treba biti unazad datiran na posljednji evidentirani datum otvaranja konta kako bi imovinski podaci bili točni.

U tom slučaju može doći do razlike između imovinskog i ekonomskog salda tekućeg razdoblja, što odgovara dobiti/gubitku iz prethodnog razdoblja koji još nije evidentiran u zatvaranju/otvaranju konta glavne knjige. Tijekom procesa kreiranja, Fluentis će pitati želi li se ta razlika dodijeliti na zadana konta dobiti ili gubitka. Ako se ne odabere ta opcija, doći će do neuravnoteženog knjiženja, što znači da će se morati omogućiti spremanje neuravnoteženih unosa. Ako zatvaranje ne uključuje preuzimanje imovinskih vrijednosti, knjiženje privremenog zatvaranja (samo ekonomski dio) bit će neuravnoteženo za dobit/gubitak razdoblja.
:::


U slučaju da zatvaranje ne predviđa povrat imovine, ponovno će knjiženje međugodišnjeg zatvaranja (samo ekonomskog dijela) dovesti do neravnoteže za dobit/gubitak razdoblja.

### Odjeljak za **dohvat ekonomskih vrijednosti**

Označavanje flaga **dohvata kretanj ekonomske vrste**, (zadano uključeno) omogućuje dodatno filtriranje podataka. ERP uključuje u privremeno zatvaranje salda podkonta povezanih s tipovima konta koji imaju aktivan status ekonomskog troška ili ekonomskog prihoda.

Filteri za datum knjiženja, obračuna i dokumenta omogućuju definiranje raspona datuma koji će se koristiti za dohvaćanje ekonomskih podataka.

:::tip NAPOMENA
Filter datuma dokumenta nije uključen prema zadanim postavkama jer ne sadrže sva knjigovodstvena knjiženja podatke o datumu dokumenta (najčešće ga imaju samo knjiženja ulaznih/izlaznih faktura).
:::


Ako zatvaranje ne uključuje preuzimanje ekonomskih vrijednosti, knjiženje privremenog zatvaranja (samo imovinski dio) bit će neuravnoteženo za dobit/gubitak razdoblja.

### Odjeljak o **podacima za zatvaranje konta**

Ovaj odjeljak sadrži elemente koji će biti pridruženi simulaciji bilance.

**Predložak zatvaranja konta**: Koristi se za kreiranje knjiženja preuzimanja salda. Predložak mora podržavati centre troškova/profita i projekte kako bi ti elementi bili uključeni u privremeno zatvaranje.

**Datum zatvaranja**: Datum kreiranja simulacije, koji se koristi kao datum zatvaranja i drugih povezanih knjiženja.

**Broj zatvaranja**: Sekvencijalni broj zatvaranja koji automatski generira sustav.

**Opis zatvaranja**: Opis koji će biti prikazan u svim oblicima modula privremenog zatvaranja, bilance i budžeta. Preporučuje se jasan opis raspona datuma kako bi se lakše identificiralo razdoblje simulacije.

**Datum obračuna za konta prihoda/troška (od/do)**: Ovaj raspon datuma obavezan je kako bi se moglo nastaviti s kreiranjem privremenog zatvaranja. Označava razdoblje ekonomske pripadnosti koje je relevantno te će stoga biti uzeto kao referenca za izračun knjiženja ispravaka/integracija, za izračun ponovnog obračuna amortizacije za razdoblje i općenito za razne postupke koji slijede. Na primjer, ako su preuzeta knjiženja za prvo polugodište poslovne godine X i ako je isto polugodište uneseno kao raspon datuma ekonomske pripadnosti, postupcima ispravka program će provjeriti postoje li zapisi u računovodstvu s rasponom ekonomske pripadnosti izvan tog polugodišta kako bi evidentirao pripadajuće razgraničenje.

### Opcije za **zatvaranja konta**


**Zatvaranje po projektu/nalogu**: Ako je uključeno, program će kreirati knjiženja privremenog zatvaranja za svaki projekt koji je evidentiran u odabranom periodu.

**Razmotri privremene zapise**: Ako je uključeno, prilikom preuzimanja podataka iz knjigovodstva uzimaju se u obzir i privremena knjiženja.

### Odjeljak Izračunate vrijednosti

Ovaj odjeljak prikazuje ukupne imovinske i ekonomske vrijednosti izračunate iz prvog knjiženja zatvaranja. 

(Ako je označena opcija **Zatvaranje po projektu/nalogu** ovaj će odjeljak prikazati samo podatke iz prvog projekta/naloga identificiranog u razdoblju.)

### Ispravci i objedinjavanje

Ovaj odjeljak omogućuje automatsko upravljanje relevantnim knjiženjima ispravaka i objedinjavanja na kraju knjiženja prijenosa podataka za privremeno zatvaranje.

:::note NAPOMENA
Ova vrsta usklađivanja provodi se automatski samo za pokrete podkonta ekonomske prirode koji su povezani s kontom s aktiviranim flagom *Usluga*.
:::

Referenca za ispravke/objedinjavanje odnosi se na **raspon datuma ekonomske pripadnosti** unesen u početne zapise (kao i u centre troškova/profita za analitički dio).

**Automatsko prilagođenje unosa**: Aktiviranjem ovog flaga omogućuju se sekcija automatskih ispravaka.
Potrebno je postaviti predložak koji će evidentirati operaciju. Također, kako bi se ispravili i pokreti centara troškova/profita (CDC/CDP), predložak mora predviđati njihovu obradu.

Preporučene postavke uključuju opciju **grupiranja po knjiženju** i korištenje **godišnjeg kalendara**. 

:::tip NAPOMENA
Podkonta koja će se koristiti bit će ona navedena u kontnom planu uz pojedini podkonto troška/prihoda ili generički podkonto unesen u računovodstvene parametre godine privremenog zatvaranja.
:::

Ovaj flag automatski generira ono što korisnik može zasebno upravljati i nakon obrade završnih salda, unutar namjenske procedure *Zapisi usklađenja* u izborniku zatvaranja.

**Automatski unos integracije**: Aktiviranjem ovog flaga omogućuje se sekcija automatskih integracija/objedinjavanja. Potrebno je postaviti predložak koji će evidentirati operaciju te **datum početka ekonomske pripadnosti**. 

Također, kako bi se integrirali i pokreti centara troškova i profita, predložak mora predviđati njihovu obradu. 

Preporučuje se korištenje zadane postavke godišnjeg kalendara.

Aktiviranjem ovog flaga program će provjeriti, *počevši od *datuma početka za **integraciju za knjiženja integracije***, redove troškova/prihoda prisutne u računovodstvu, ali ne uključene u zatvaranje (tj. zapise izvan postavljenih raspona datuma registracije/pripadnosti), kako bi stvorio razgraničenja za dane unutar postavljenog raspona za zatvaranje.

:::tip NAPOMENA
Podkonta koja će se koristiti bit će ona navedena u kontnom planu uz pojedini podkonto troška/prihoda ili generički podkonto unesen u računovodstvene parametre godine privremenog zatvaranja.
Ako trošak/prihod ima ekonomsko razgraničenje *potpuno uključeno u raspon zatvaranja* i nalazi se u računovodstvenom zapisu s popunjenim zaglavljem podkonta, tada Fluentis pretpostavlja da se radi o knjieženju fakture te će koristiti podkonta preuzeta iz šifrarnika kupca/dobavljača ili iz računovodstvenih parametara odabrane godine, umjesto podkonta razgraničenja.
:::

Ova opcija automatski generira ono što korisnik može zasebno upravljati i nakon obrade završnih salda, unutar namjenske procedure *Zapisi integracija*.

:::danger VAŽNO
Posebnu pozornost treba posvetiti postavljanju **datuma početka obračuna**. 

Obično se ovaj datum postavlja jednako kao datum posljednjeg otvaranja konta zabilježenog u računovodstvu. 

Primjer: Ako se kreira zatvaranje za prvo tromjesečje poslovne godine, raspon datuma za ekonomski odjeljak obično će biti 01.01. godine X – 31.03. godine X. Ako je prisutno ponovno otvaranje konta iz prethodne godine, tada će unutar ovog raspona izravno biti preneseni troškovi/prihodi razgraničeni u bilanci godine X-1, te je stoga potrebno postaviti datum početka integracija/objedinjavanja na 01.01. godine X kako bi softver provjerio postoje li nakon 31.03. zapisi s pripadnošću prethodnom tromjesečju. 

**Ako ponovno otvaranje konta nije prisutno**, tada je potrebno postaviti datum početka na 01.01.**godine X-1 kako bi se uključili i zapisi koji bi inače bili predmet ponovnog otvaranja (razgraničenja i prijelazni troškovi) iz prethodne godine.** 
:::

:::danger PAŽNJA
Modul kontroling funkcionira fleksibilnije u nekim situacijama u odnosu na administrativni modul. Naime, može automatski ispraviti bilo koji trošak/prihod (s kompatibilnim tipom konta) u prošlosti i budućnosti, budući da mjesečno raspodjeljuje troškove/prihode i automatski uklanja vrijednosti izvan raspona zatvaranja. Na primjer, ako je trošak registriran u godini X, a ekonomski pripada (djelomično ili potpuno) godini X-1, tijekom obrade perioda u završnim podacima godine X, sustav će uzeti u obzir samo traženi period pripadnosti. 

Posebnu pažnju treba posvetiti **upravljanju usklađenjima u administrativnom modulu. Preporučuje se izvršiti izračun i knjiženje usklađenja, zatvaranje i ponovno otvaranje kontâ pomoću automatskih procedura, izbjegavajući ručna knjiženja**.

Automatska procedura nameće da knjiženja ponovnog otvaranja usklađenja imaju datum jednak izvornom knjiženju koje se ispravlja te ekonomsku pripadnost tog knjiženja jednakom godini X-1. Time se izbjegava ponovni izračun dodatnih ispravaka u zatvaranjima godine X, budući da su ispravni saldi već uključeni u rezultate godine X.
:::

### Odjeljak Povrat amortizacije osnovnog sredstva 

Odjeljak Povrat amortizacije osnovnog sredstva omogućuje automatsko upravljanje evidentiranjem amortizacija za razdoblje nadležnosti, kao završni dio unosa podataka u okviru periodične obrade. Primjenjuje se ista logika kao kod postupka *amortizacije dugotrajne imovine* iz modula Sredstva, ali samo za dane koji su relevantni za ekonomsku nadležnost u zatvaranju.
Nakon što je izračun omogućen, potrebno je postaviti kontni razlog koji će se koristiti i odabrati hoće li se kreirati *pojedinačno zbirno knjiženje* ili detaljno knjiženje za svaku stavku osnovnog sredstva zasebno. 
Flag ‘Inkrementalne operacije’, na koju se upućuje u modulu osnovnog sredstva, omogućuje filtriranje vrsta osnovnog sredstva koje će se obrađivati. 
Ova oznaka automatski stvara ono što korisnik može zasebno upravljati i nakon obrade salda zatvaranja putem procedure *Povrat amortizacije osnovnog sredstva*.

:::tip NAPOMENA
Ako u poduzeću postoje i inkrementalne i neinrementalne kategorije dugotrajne imovine, preporučuje se korištenje postupka *Povrat amortizacije osnovnog sredstva* kako bi se obje kombinacije mogle
pokrenuti u slijedu.
:::


### Računovodstvo zaliha

Ovaj odjeljak omogućuje automatsko evidentiranje početnih/završnih zaliha za relevantno razdoblje kao završni dio unosa podataka u okviru periodične obrade. 
Nakon što je upravljanje omogućeno, potrebno je definirati raspon datuma koji će se koristiti, vrstu zaliha koju treba uzeti u obzir (*pozitivna/negativna*), vrstu izračuna troška (*prosječni trošak, posljednji trošak, FIFO na godišnjoj razini, LIFO na godišnjoj razini, područje*), te predložak koji će se koristiti za kreiranje zapisa.
Prisutnost ili odsutnost flaga Kontroling utjecat će na upravljanje operacijama na dva različita načina:
- Ako flag *nije prisutan*, **FluentisERP** će kreirati unose za početne i završne zalihe na datume početka i kraja razdoblja periodičnog zatvaranja te će ih dodati na kraj ostalih unosa za prilagodbu zatvaranja.
- Ako je oznaka *prisutna*, **FluentisERP** će kreirati unose početnih i završnih zaliha za svaki pojedini mjesec unutar vremenskog raspona relevantnog za periodično zatvaranje i dodati ih kao izvanbilančne unose u povezano područje zatvaranja (dakle, neće biti dio zatvaranja, već će vrijediti samo za kontroling).

:::tip NAPOMENA
Obrada provodi test prisutnosti ovog tipa unosa te, ako ih pronađe, traži potvrdu o njihovom brisanju i ponovnom kreiranju ili njihovom dodavanju (kao u slučaju kada se odluči odabrati samo određena skladišta, a ne sva, putem dostupnog padajućeg izbornika). Ako je potrebno kreirati i unose za kontroling i unose prilagodbe unutar zatvaranja, potrebno je *prvo* pokrenuti postupak s aktiviranim flagom Kontroling, a *zatim* ga ponoviti s deaktiviranim flagom.
:::


## Kartica *Parametri*

Kartica ‘Parametri’ omogućuje postavljanje vrste salda za određene vrste konta ili pojedinačna konta/podkonta. Detaljno:

**Općenito**: Ovo je standardna zadana postavka. S ovom opcijom ERP će izračunati dugovni ili potražni saldo te ukupni saldo.

**Dugovni/potražni:** S ovom opcijom program će izračunati ukupni iznos dugovnih pokreta, ukupni iznos potražnih pokreta i odgovarajući završni saldo.

Referenca su različite opcije modela rekategorizacije u modulu *Izvještavanje > Reklasifikacije*, gdje je moguće postaviti samo vrijednost "Dugovni", "Potražni" ili opću vrijednost.

Na primjer, u reklasifikaciji može biti korisno prikazati trošak (tj. ukupni dugovni pokreti podkonta X) i njegove korekcije (tj. ukupni potražni pokreti podkonta X) na dvije odvojene pozicije, čime se dobiva dodatna informacija u usporedbi s jednostavnim algebarskim saldom "dugovno - potražno".
