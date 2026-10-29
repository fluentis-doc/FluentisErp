---
title: Stopa PDV-a
sidebar_position: 1
---

:::tip[Fast Start]
Na ovu se tablicu odnosi postupak [**Fast Start**](/docs/guide/fast-start).

Ako tablicu namjeravate konfigurirati ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

Ova je tablica zajednička svim tvrtkama u bazi podataka i sadrži popis stopa PDV-a koje se mogu primjenjivati u cijelom sustavu.

Riječ je o unaprijed popunjenoj tablici u kojoj ovlašteni korisnik može mijenjati postojeće podatke ili dodavati nove, prema potrebama poslovanja tvrtke.

### Glavna tablica

**Šifra / Opis**: numerička identifikacijska šifra stope PDV-a i pripadajući opis.

**Dodatni opis**: dodatni opis koji se može koristiti u prilagođenim izvještajima i ispisima. U pravilu nije potreban.

**Postotak**: određuje stopu PDV-a koja se primjenjuje. Za šifre oslobođenja, izuzeća i neoporezivih isporuka potrebno je postaviti vrijednost 0.

**Kategorija PDV-a**: omogućuje odabir unaprijed definiranih vrsta PDV-a u sustavu. Ova je klasifikacija vrlo važna, primjerice za zbrajanje različitih knjiženja u tromjesečnoj prijavi obračuna PDV-a te općenito u svim poreznim prijavama povezanim s PDV-om. Dostupne opcije za talijansku lokalizaciju su:

- *Stopa*
- *Neoporezivo*
- *Oslobođeno*
- *Izuzeto*
- *74 ter CEE* – za turističke agencije
- *74 ter izvan CEE-a* – za turističke agencije
- *74 ter dio CEE-a* – za turističke agencije
- *74 ter dio izvan CEE-a* – za turističke agencije

**Postotak neodbitnog PDV-a**: određuje postotak PDV-a koji se ne može odbiti. Ta se vrijednost prenosi u odjeljak PDV-a računovodstvenog knjiženja radi izračuna stvarnog neodbitnog iznosa. Može se promijeniti ili ručno zadati izravno u knjiženju.

**Plafond**: ovom se oznakom određuju stope povezane s izjavama o namjeri (*dichiarazioni di intento*). Samo za stope s aktiviranom ovom oznakom u tablici PDV-a računovodstvenog knjiženja prikazuje se padajući izbornik za povezivanje s izjavama o namjeri.

PAŽNJA: ova oznaka nije važna za upravljanje izjavama o namjeri u nabavnom i prodajnom ciklusu dokumenata. U tom je slučaju relevantna samo oznaka postavljena u odgovarajućem registru izdanih ili primljenih izjava o namjeri.

Za izračun općeg plafonda ova oznaka također određuje stopu koja iz mjeseca u mjesec **troši** raspoloživi opći plafon izvoznika s redovitim izvoznim statusom, u postupku upravljanja plafonom, odnosno na strani nabave.

**Inozemna prodaja za plafond**: ovom se oznakom određuju stope PDV-a koje se pojavljuju u prodajnim knjiženjima za godinu yyyy i koje **povećavaju** raspoloživi plafon za godinu yyyy+1 za izvoznike s redovitim izvoznim statusom.

**U poreznoj prijavi PDV-a**: određuje koje se stope uključuju u prijavu PDV-a, tromjesečnu komunikaciju obračuna PDV-a i ostale porezne prijave povezane s PDV-om. Primjerice, šifre kategorije PDV-a *Izuzeto* u pravilu nemaju aktiviranu ovu oznaku, dok je za kategorije *Stope*, *Oslobođeno* i *Neoporezivo* oznaka aktivirana jer se ti podaci moraju uključiti u porezne prijave PDV-a. Pogledajte službene upute za godišnju prijavu PDV-a ili tromjesečnu komunikaciju obračuna PDV-a.

**Nije Intrastat**: ovom se oznakom određuju stope koje se, iako se koriste u dokumentima nabave/prodaje ili knjiženjima transakcija unutar EU-a, ne smatraju transakcijama unutar EU-a. Oznaka se provjerava pri automatskoj izradi zbirnih Intrastat izvještaja.

**Rep. San Marino**: određuje stope koje se koriste u transakcijama sa San Marinom. Zastarjelo – komunikacija je ukinuta.

**% poljoprivrednog odbitnog PDV-a**: određuje fiksni kompenzacijski postotak neodbitnog PDV-a koji se primjenjuje na stopu u slučaju knjiženja u okviru poljoprivrednog režima.

**Dopusti PDV 0 u dnevniku knjiženja**: omogućuje knjiženje redaka PDV-a s iznosom 0 na dugovnoj i potražnoj strani dnevnika knjiženja. Međutim, računovodstveni [**predložak knjiženja**](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) koji se koristi također mora dopuštati takve retke s nultim iznosom.

**Uvoz zlata i srebra**: određuje koje se stope prikazuju u odgovarajućim poljima godišnje komunikacije PDV-a. Trenutačno se smatra zastarjelim.

**Uvoz otpadnog materijala**: određuje koje se stope prikazuju u odgovarajućim poljima godišnje komunikacije PDV-a. Trenutačno se smatra zastarjelim.

**Ne uključuj u spesometro**: omogućuje isključivanje PDV knjiženja povezanih s ovom stopom iz postupka *spesometro*. Trenutačno se smatra zastarjelim.

**Šifra PA**: u ovo se polje unosi šifra predviđena za elektroničko fakturiranje između privatnih subjekata i prema javnoj upravi u slučajevima kada PDV nije iskazan (oslobođenje, izuzeće ili neoporeziva isporuka). Za pojedinosti o predviđenim šiframa pogledajte tehničke specifikacije elektroničkog računa koje objavljuje talijanska Porezna uprava.

**Isključi iz izjave o namjeri**: oznaka koju trenutačno ne koristi nijedan postupak. Razvijena je kako bi se, prema potrebi, spriječilo da se odgovarajuća šifra PDV-a s aktiviranom oznakom zamijeni šifrom PDV-a postavljenom u registru izjava o namjeri kao šifrom za transakcije oslobođene PDV-a na temelju izjave o namjeri.

**Isključi iz automatskog predloška knjiženja**: aktiviranjem ove oznake odgovarajuća šifra PDV-a neće se prenijeti u računovodstvena knjiženja koja se automatski generiraju na temelju glavnog računovodstvenog predloška putem polja *Automatski predložak knjiženja*.

:::note Napomena
Uporaba ove oznake **posebno je važna** u slučaju primitka **mješovitog nabavnog računa**, kod kojeg je dobavljač jedan dio obračunao prema načelu **prijenosa porezne obveze (Reverse Charge)**, a drugi dio prema redovnom režimu. Za redovni dio moguće je odbiti pretporez, dok je dio koji se odnosi na Reverse Charge neutralan jer se evidentira i u registru nabave i u registru prodaje.

Ako se koriste odgovarajuće razdvojene šifre PDV-a, primjerice šifra „Mješoviti Reverse Charge – odbitni dio”, i ako je na njoj aktivirana ova oznaka, pri unosu iznosa s obje šifre u glavno nabavno knjiženje (primjerice šifra 22 za dio koji podliježe *Reverse Chargeu* i šifra „Mješoviti Reverse Charge...”), u automatski generiranom prijenosnom knjiženju prenijet će se samo šifra 22. Time će se automatski ostvariti odbitak samo za dio koji nije obuhvaćen mehanizmom Reverse Charge.
:::

**PDV za automatske predloške knjiženja**: ovo polje služi za nametanje posebne šifre PDV-a u automatski generiranom računovodstvenom knjiženju, primjerice prijenosnom knjiženju za Reverse Charge, umjesto šifre korištene u glavnom knjiženju, primjerice nabavnom knjiženju.

:::note Napomena
Uporaba ovog polja **posebno je važna** u slučaju primitka **nabavnog računa s prijenosom porezne obveze (Reverse Charge) kod kojeg je pretporez djelomično ili potpuno neodbitan**.

Softver bi prema zadanim postavkama primijenio istu šifru PDV-a i u prijenosnom knjiženju na strani prodaje. Postotak neodbitnog PDV-a tada bi odgovarajući dio tretirao kao neoporeziv, pa bi učinak u praksi uvijek bio neutralan.

Da bi se primijenio ograničeni odbitak, cjelokupni PDV na strani prodaje mora biti oporeziv, dok neodbitni dio na strani nabave ostaje trošak. Kako bi se izbjegao ručni ulazak u automatski generirano prijenosno knjiženje i izmjena šifre PDV-a (primjerice, promjena šifre 2250, koja omogućuje samo 50 % odbitka, u šifru 22), ovo se polje može unaprijed postaviti tako da se šifra automatski ispravi.
:::

**Datum završetka valjanosti**: nakon navedenog datuma šifra se više neće moći koristiti. Polje je korisno za blokiranje šifri koje više nisu na snazi.

**Osnovica za obračun biljegovine**: biljegovina se na računu automatski dodaje samo kada se koriste šifre PDV-a kategorije *Oslobođeno*, *Izuzeto* ili *Neoporezivo* i kada račun premašuje određeni iznos definiran u tablici šifarnika tvrtke. Ova oznaka služi za upravljanje iznimkama koje, iako pripadaju tim kategorijama, ne podliježu obračunu biljegovine. U takvim slučajevima oznaka mora biti deaktivirana.

NAPOMENA: ako je oznaka pogrešno aktivirana na šifri kategorije *Stopa*, prednost ipak ima kategorija PDV-a pa se biljegovina **neće** dodati.

**Reverse Charge (prijenos porezne obveze)**: pogledajte [**ovdje**](/docs/finance-area/particular-cases/mixed-reverse-charge).

**PDV na maržu / Referentni PDV na maržu**: pogledajte [**ovdje**](/docs/finance-area/particular-cases/VAT_regime-del-maine).

### Vrsta knjiženja PDV-a

U ovom je odjeljku moguće definirati jedan ili više analitičkih konta za PDV na nabavu/prodaju za svaku stopu PDV-a. To je posebno korisno u lokalizacijama izvan Italije, primjerice u zemljama istočne Europe, gdje postoji obveza zasebnog računovodstvenog evidentiranja sniženih, redovnih ili povišenih stopa PDV-a na različitim analitičkim kontima.

Ta se konta mogu povezati i s *vrstom knjiženja PDV-a*, koja se definira u odgovarajućoj [**tablici**](/docs/configurations/tables/finance/vat-accounting-types), dodjeljuje kupcu ili dobavljaču u njegovu šifarniku ili postavlja kao zadana vrijednost u [**općim računovodstvenim parametrima**](/docs/configurations/parameters/finance/accounting-parameters).

**Vrsta / Opis knjiženja PDV-a**: šifra i opis vrste knjiženja PDV-a. Polje nije obvezno.

**Konto nabave**: konto nabave koji se predlaže za ovu vrstu knjiženja PDV-a.

**Analitički konto nabave**: analitički konto nabave koji se predlaže za ovu vrstu knjiženja PDV-a.

**Opis**: opis analitičkog konta nabave koji se predlaže za ovu vrstu knjiženja PDV-a.

**Konto prodaje**: konto prodaje koji se predlaže za ovu vrstu knjiženja PDV-a.

**Analitički konto prodaje**: analitički konto prodaje koji se predlaže za ovu vrstu knjiženja PDV-a.

**Opis**: opis analitičkog konta prodaje koji se predlaže za ovu vrstu knjiženja PDV-a.

### Napomene

**Šifra**: numerička identifikacijska šifra stope PDV-a.

**Napomene**: dodatne napomene prema potrebi.

### Postavke porezne prijave

U ovom je odjeljku moguće konfigurirati pojedine šifre PDV-a koje se koriste u računovodstvenim knjiženjima kako bi se dobio izvještaj koji predstavlja predložak godišnje prijave PDV-a. Izvještaj se prema potrebi izrađuje pomoću integriranog alata Report Designer u Fluentisu.

Izvještaj objedinjuje različite šifre PDV-a korištene tijekom godine i prikazuje ukupne iznose koji se prenose u odgovarajuće retke porezne prijave.

Stoga je svakoj šifri PDV-a potrebno dodijeliti odgovarajući redak prijave, u skladu sa službenim uputama i pravilima konkretne porezne prijave.

**Transakcije**: putem padajućeg izbornika odabire se vrsta transakcije – aktivna, pasivna ili Reverse Charge – kako bi se razlikovali iznosi evidentirani odgovarajućom šifrom PDV-a koji se prenose u retke prijave za nabavu, prodaju ili Reverse Charge.

**Redak porezne prijave / Opis**: putem padajućeg izbornika odabire se redak prijave PDV-a kojem se dodjeljuje šifra i opis. Popis je unaprijed popunjen i korisnik ga ne može mijenjati.

### VIDEOUPUTE

:::important Vidi također
[**VIDEOUPUTE O STOPAMA PDV-a**](/docs/video/finance/intro)
:::