---
title: Stopa PDV-a
sidebar_position: 1
---

:::tip[Fast Start]
Na ovu tabelu odnosi se postupak [**Fast Start**](/docs/guide/fast-start).

Ako nameravate ručno da konfigurišete tabelu, pogledajte kontrolnu listu na povezanoj stranici.
:::

Ova tabela je zajednička za sva preduzeća u bazi podataka i sadrži spisak stopa PDV-a koje se mogu primenjivati u celom sistemu.

Reč je o unapred popunjenoj tabeli u kojoj ovlašćeni korisnik može da menja postojeće podatke ili dodaje nove, u skladu sa poslovnim potrebama preduzeća.

### Glavna tabela

**Šifra / Opis**: numerička identifikaciona šifra stope PDV-a i pripadajući opis.

**Dodatni opis**: dodatni opis koji se može koristiti u prilagođenim izveštajima i ispisima. Po pravilu nije potreban.

**Procenat**: određuje primenjivu stopu PDV-a. Za šifre oslobođenja, izuzeća i neoporezivih isporuka potrebno je postaviti vrednost 0.

**Kategorija PDV-a**: omogućava izbor unapred definisanih vrsta PDV-a u sistemu. Ova klasifikacija je veoma važna, na primer, za sabiranje različitih knjiženja u tromesečnoj prijavi obračuna PDV-a, kao i u svim poreskim prijavama povezanim sa PDV-om. Dostupne opcije za italijansku lokalizaciju su:

- *Stopa*
- *Neoporezivo*
- *Oslobođeno*
- *Izuzeto*
- *74 ter CEE* – za turističke agencije
- *74 ter izvan CEE-a* – za turističke agencije
- *74 ter deo CEE-a* – za turističke agencije
- *74 ter deo izvan CEE-a* – za turističke agencije

**Procenat neodbitnog PDV-a**: određuje procenat PDV-a koji se ne može odbiti. Ova vrednost prenosi se u odeljak PDV-a računovodstvenog knjiženja radi obračuna stvarnog neodbitnog iznosa. Može se promeniti ili ručno uneti direktno u knjiženju.

**Plafon**: ovom oznakom određuju se stope povezane sa izjavama o nameri (*dichiarazioni di intento*). Samo za stope kod kojih je ova oznaka aktivirana u tabeli PDV-a računovodstvenog knjiženja prikazuje se padajući meni za povezivanje sa izjavama o nameri.

PAŽNJA: ova oznaka nije važna za upravljanje izjavama o nameri u nabavnom i prodajnom ciklusu dokumenata. U tom slučaju relevantna je samo oznaka postavljena u odgovarajućem registru izdatih ili primljenih izjava o nameri.

Za obračun opšteg plafona ova oznaka određuje i stopu koja iz meseca u mesec **troši** raspoloživi opšti plafon izvoznika sa statusom redovnog izvoznika, u postupku upravljanja plafonom, odnosno na strani nabavke.

**Inostrana prodaja za plafon**: ovom oznakom određuju se stope PDV-a koje se pojavljuju u prodajnim knjiženjima za godinu yyyy i koje **povećavaju** raspoloživi plafon za godinu yyyy+1 za izvoznike sa statusom redovnog izvoznika.

**U poreskoj prijavi PDV-a**: određuje koje se stope uključuju u prijavu PDV-a, tromesečnu prijavu obračuna PDV-a i ostale poreske prijave povezane sa PDV-om. Na primer, za šifre kategorije PDV-a *Izuzeto* ova oznaka po pravilu nije aktivirana, dok je za kategorije *Stope*, *Oslobođeno* i *Neoporezivo* aktivirana jer ti podaci moraju biti uključeni u poreske prijave PDV-a. Pogledajte zvanična uputstva za godišnju prijavu PDV-a ili tromesečnu prijavu obračuna PDV-a.

**Nije Intrastat**: ovom oznakom određuju se stope koje se, iako se koriste u dokumentima nabavke/prodaje ili knjiženjima transakcija unutar EU, ne smatraju transakcijama unutar EU. Oznaka se proverava prilikom automatskog generisanja zbirnih Intrastat izveštaja.

**Rep. San Marino**: određuje stope koje se koriste u transakcijama sa San Marinom. Zastarelo – izveštavanje je ukinuto.

**% poljoprivrednog odbitnog PDV-a**: određuje fiksni kompenzacioni procenat neodbitnog PDV-a koji se primenjuje na stopu u slučaju knjiženja u okviru poljoprivrednog režima.

**Dozvoli PDV 0 u dnevniku knjiženja**: omogućava knjiženje redova PDV-a sa iznosom 0 na dugovnoj i potražnoj strani dnevnika knjiženja. Međutim, računovodstveni [**šablon knjiženja**](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) koji se koristi takođe mora da dozvoljava takve redove sa nultim iznosom.

**Uvoz zlata i srebra**: određuje koje se stope prikazuju u odgovarajućim poljima godišnje prijave PDV-a. Trenutno se smatra zastarelim.

**Uvoz otpadnog materijala**: određuje koje se stope prikazuju u odgovarajućim poljima godišnje prijave PDV-a. Trenutno se smatra zastarelim.

**Ne uključuj u spesometro**: omogućava isključivanje knjiženja PDV-a povezanih sa ovom stopom iz postupka *spesometro*. Trenutno se smatra zastarelim.

**Šifra PA**: u ovo polje unosi se šifra predviđena za elektronsko fakturisanje između privatnih subjekata i prema javnoj upravi u slučajevima kada PDV nije iskazan (oslobođenje, izuzeće ili neoporeziva isporuka). Za detalje o predviđenim šiframa pogledajte tehničke specifikacije elektronske fakture koje objavljuje italijanska Poreska uprava.

**Isključi iz izjave o nameri**: oznaka koju trenutno ne koristi nijedan postupak. Razvijena je kako bi se, po potrebi, sprečilo da odgovarajuća šifra PDV-a sa aktiviranom oznakom bude zamenjena šifrom PDV-a postavljenom u registru izjava o nameri kao šifrom za transakcije oslobođene PDV-a na osnovu izjave o nameri.

**Isključi iz automatskog šablona knjiženja**: aktiviranjem ove oznake odgovarajuća šifra PDV-a neće biti preneta u računovodstvena knjiženja koja se automatski generišu na osnovu glavnog računovodstvenog šablona putem polja *Automatski šablon knjiženja*.

:::note Napomena
Upotreba ove oznake **posebno je važna** u slučaju prijema **mešovite ulazne fakture**, kod koje je dobavljač jedan deo obračunao prema načelu **prenosa poreske obaveze (Reverse Charge)**, a drugi deo prema redovnom režimu. Za redovni deo moguće je odbiti prethodni porez, dok je deo koji se odnosi na Reverse Charge neutralan jer se evidentira i u registru nabavke i u registru prodaje.

Ako se koriste odgovarajuće razdvojene šifre PDV-a, na primer šifra „Mešoviti Reverse Charge – odbitni deo“, i ako je na njoj aktivirana ova oznaka, prilikom unosa iznosa sa obe šifre u glavno nabavno knjiženje (na primer, šifra 22 za deo koji podleže *Reverse Charge-u* i šifra „Mešoviti Reverse Charge...“), u automatski generisanom prenosnom knjiženju biće preneta samo šifra 22. Time se automatski ostvaruje odbitak samo za deo koji nije obuhvaćen mehanizmom Reverse Charge.
:::

**PDV za automatske šablone knjiženja**: ovo polje služi za nametanje posebne šifre PDV-a u automatski generisanom računovodstvenom knjiženju, na primer u prenosnom knjiženju za Reverse Charge, umesto šifre korišćene u glavnom knjiženju, kao što je nabavno knjiženje.

:::note Napomena
Upotreba ovog polja **posebno je važna** u slučaju prijema **ulazne fakture sa prenosom poreske obaveze (Reverse Charge) kod koje je prethodni porez delimično ili potpuno neodbitan**.

Softver bi podrazumevano primenio istu šifru PDV-a i u prenosnom knjiženju na strani prodaje. Procenat neodbitnog PDV-a tada bi odgovarajući deo tretirao kao neoporeziv, pa bi efekat u praksi uvek bio neutralan.

Da bi se primenio ograničeni odbitak, celokupan PDV na strani prodaje mora biti oporeziv, dok neodbitni deo na strani nabavke ostaje trošak. Kako bi se izbegao ručni pristup automatski generisanom prenosnom knjiženju i promena šifre PDV-a (na primer, promena šifre 2250, koja omogućava samo 50 % odbitka, u šifru 22), ovo polje može se unapred podesiti tako da se šifra automatski ispravi.
:::

**Datum isteka važenja**: nakon navedenog datuma šifra više neće moći da se koristi. Polje je korisno za blokiranje šifara koje više nisu na snazi.

**Osnovica za obračun takse**: taksa se na fakturi automatski dodaje samo kada se koriste šifre PDV-a kategorije *Oslobođeno*, *Izuzeto* ili *Neoporezivo* i kada faktura premašuje određeni iznos definisan u tabeli šifarnika preduzeća. Ova oznaka služi za upravljanje izuzecima koji, iako pripadaju tim kategorijama, ne podležu obračunu takse. U takvim slučajevima oznaka mora biti deaktivirana.

NAPOMENA: ako je oznaka pogrešno aktivirana na šifri kategorije *Stopa*, prednost ipak ima kategorija PDV-a, pa se taksa **neće** dodati.

**Reverse Charge (prenos poreske obaveze)**: pogledajte [**ovde**](/docs/finance-area/particular-cases/mixed-reverse-charge).

**PDV na maržu / Referentni PDV na maržu**: pogledajte [**ovde**](/docs/finance-area/particular-cases/VAT_regime-del-maine).

### Tip knjiženja PDV-a

U ovom odeljku moguće je definisati jedan ili više analitičkih konta za PDV na nabavku/prodaju za svaku stopu PDV-a. Ovo je posebno korisno u lokalizacijama izvan Italije, na primer u zemljama istočne Evrope, gde postoji obaveza zasebnog računovodstvenog evidentiranja sniženih, redovnih ili povišenih stopa PDV-a na različitim analitičkim kontima.

Ta konta mogu se povezati i sa *tipom knjiženja PDV-a*, koji se definiše u odgovarajućoj [**tabeli**](/docs/configurations/tables/finance/vat-accounting-types), dodeljuje kupcu ili dobavljaču u njegovom šifarniku ili postavlja kao podrazumevana vrednost u [**opštim računovodstvenim parametrima**](/docs/configurations/parameters/finance/accounting-parameters).

**Tip / Opis knjiženja PDV-a**: šifra i opis tipa knjiženja PDV-a. Polje nije obavezno.

**Konto nabavke**: konto nabavke koji se predlaže za ovaj tip knjiženja PDV-a.

**Analitički konto nabavke**: analitički konto nabavke koji se predlaže za ovaj tip knjiženja PDV-a.

**Opis**: opis analitičkog konta nabavke koji se predlaže za ovaj tip knjiženja PDV-a.

**Konto prodaje**: konto prodaje koji se predlaže za ovaj tip knjiženja PDV-a.

**Analitički konto prodaje**: analitički konto prodaje koji se predlaže za ovaj tip knjiženja PDV-a.

**Opis**: opis analitičkog konta prodaje koji se predlaže za ovaj tip knjiženja PDV-a.

### Napomene

**Šifra**: numerička identifikaciona šifra stope PDV-a.

**Napomene**: dodatne napomene po potrebi.

### Podešavanja poreske prijave

U ovom odeljku moguće je konfigurisati pojedinačne šifre PDV-a koje se koriste u računovodstvenim knjiženjima kako bi se dobio izveštaj koji predstavlja šablon godišnje prijave PDV-a. Izveštaj se po potrebi izrađuje pomoću integrisanog alata Report Designer u Fluentisu.

Izveštaj objedinjuje različite šifre PDV-a korišćene tokom godine i prikazuje ukupne iznose koji se prenose u odgovarajuće redove poreske prijave.

Zato je svakoj šifri PDV-a potrebno dodeliti odgovarajući red prijave, u skladu sa zvaničnim uputstvima i pravilima konkretne poreske prijave.

**Transakcije**: putem padajućeg menija bira se tip transakcije – aktivna, pasivna ili Reverse Charge – kako bi se razlikovali iznosi evidentirani odgovarajućom šifrom PDV-a koji se prenose u redove prijave za nabavku, prodaju ili Reverse Charge.

**Red poreske prijave / Opis**: putem padajućeg menija bira se red prijave PDV-a kojem se dodeljuju šifra i opis. Spisak je unapred popunjen i korisnik ne može da ga menja.

### VIDEO-UPUTSTVA

:::important Pogledajte i
[**VIDEO-UPUTSTVA O STOPAMA PDV-a**](/docs/video/finance/intro)
:::