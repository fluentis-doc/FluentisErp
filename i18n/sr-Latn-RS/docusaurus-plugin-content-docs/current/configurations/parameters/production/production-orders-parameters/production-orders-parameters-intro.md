---
title: Parametri naloga za proizvodnju
sidebar_position: 1
---

Obrazac se otvara putem menija **Parametri > Proizvodnja > Parametri naloga za proizvodnju**. U ovom prozoru podešavaju se svi parametri koji se odnose na skladišna kretanja artikala putem postupaka povezanih sa proizvodnjom, kao i pojedini parametri kojima se određuje način upravljanja određenim delovima proizvodnog područja.

## 1. Opšte

**Automatsko upravljanje lotovima i serijskim brojevima**: ako je opcija aktivirana, sistem automatski predlaže lotove i/ili serijske brojeve materijala koji se koriste tokom proizvodnje, direktno u odgovarajućim mrežama povezanim sa mrežom korišćenih materijala u prijavi proizvodnje. U suprotnom, korisnik mora ručno da odredi lotove i serijske brojeve korišćenih artikala koji se vode na taj način. Podsećamo da se upravljanje lotovima ili serijskim brojevima podešava na kartici artikla, na kartici [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-item), izborom željene vrste upravljanja.

**Upravljanje dvema mernim jedinicama**: ako je opcija aktivirana, korisniku omogućava upravljanje dvema mernim jedinicama u prijavama proizvodnje, kako za proizvedene artikle tako i za korišćene materijale.

**Isti lot za otpadne artikle**: ako je opcija aktivirana, korisnik može da odredi da se nastali otpad prima na skladište pod istim lotom pod kojim se primaju i proizvodi. Ako opcija nije aktivirana, proizvodi i otpad primaće se pod različitim lotovima.

**Podela naloga ako lotovi materijala nisu dovoljni**: ako je opcija aktivirana, postupak *Puštanje naloga za proizvodnju* proverava da li su količine materijala koje treba automatski izdati dovoljne na skladištu sa kojeg ih je potrebno preuzeti. Ovo se odnosi samo na automatsko preuzimanje ili na ručno preuzimanje uz upravljanje WIP-om. Ako količine nisu dovoljne, postupak deli nalog za proizvodnju na dva zasebna naloga sa istim brojem i godinom, ali različitim lotovima. Prvi nalog imaće lot 0, a drugi lot 1. Prvi nalog odnosi se na materijale kojih ima dovoljno na skladištu.

**Promena datuma radnog naloga pri promeni datuma naloga za proizvodnju**: ako je opcija aktivirana, promenom završnog datuma naloga za proizvodnju automatski se menja i završni datum radnog naloga, pod uslovom da je artikal na nalogu za proizvodnju isti kao artikal na radnom nalogu. To znači da nalog za proizvodnju mora biti prvog nivoa.

**Štampanje radnih listova za pokrenute naloge**: omogućava da opcija *Pokrenuti* bude podrazumevano aktivirana u odgovarajućem obrascu za pokretanje štampanja [Radnog lista](/docs/production/pp-production-in-progress/reports/worksheet).

**Automatsko određivanje vremena u prijavama**: ako je opcija aktivirana, sistem automatski izračunava mašinsko vreme i vreme rada radnika na osnovu vremena navedenih u prijavama. U suprotnom, korisnik mora ručno da unese navedena vremena u red prijave proizvodnje.

**Automatski predlog alternativne merne jedinice**: ako je opcija aktivirana, sistem automatski predlaže alternativnu mernu jedinicu definisanu za artikal u prijavi proizvodnje. Ako je aktivirana opcija **Upravljanje dvema mernim jedinicama**, preporučuje se aktiviranje i ove opcije radi jednostavnijeg rada. Ova opcija može da se menja samo ako je aktivirana opcija **Upravljanje dvema mernim jedinicama**.

**Isti lot za otpadne materijale**: ako je opcija aktivirana, otpadni materijali zadržavaju isti lot kao i utrošeni materijali.

**Automatsko knjiženje prijava**: ova opcija se koristi u obrascu prijava proizvodnje u sistemu WMS. Ako je aktivirana, prijava se automatski knjiži odmah nakon unosa.

**Dodela lota za listu za preuzimanje**: ako je opcija aktivirana, prilikom izrade liste za preuzimanje odgovarajućim postupkom sistem za materijale koji se vode po lotovima bira lotove koje je potrebno preuzeti za izabrane naloge za proizvodnju. Ako opcija nije aktivirana, korisnik mora ručno da navede u postupku **Picking** koji su lotovi preuzeti.

**Ažuriranje korišćenih materijala u nalogu za proizvodnju**: ako je opcija aktivirana, pri promeni prijavljene količine u prijavi proizvodnje prikazuje se poruka sa pitanjem da li korisnik želi ponovo da izračuna količine korišćenih materijala. Ako opcija nije aktivirana, preračunavanje materijala obavlja se automatski.

**Omogući kontrolu prisustva u sistemu MES**: ako je opcija aktivirana, omogućava kontrolu prisustva unutar sistema [Fluentis MES](/docs/production/mes/mes-intro). Kontrola se zasniva na tabeli *Fluentis.HR_BadgeRecords*.

Obavezna polja za kontrolu u toj tabeli su:
- *HRBR_Resource_HRR_Id*
- *HRBR_RecordDateTime*
- *HRBR_BadgeRecordType_HRBRTY_Id* — može imati vrednost E = ulazak ili U = izlazak.

Svaki red može da sadrži samo vreme ulaska ili vreme izlaska. Zato će za svaki dan postojati četiri reda za svakog korisnika, na primer:

- 2024-01-02 08:30:00.000 — vrsta E
- 2024-01-02 12:30:00.000 — vrsta U
- 2024-01-02 14:00:00.000 — vrsta E
- 2024-01-02 18:00:00.000 — vrsta U

Podaci se moraju uvesti u ovu tabelu na osnovu podataka sa korišćenog uređaja za evidenciju radnog vremena.

Nakon toga upoređuju se sa vremenima početka i završetka rada svakog operatera unetog na kartici *Tim* u sistemu [Fluentis MES](/docs/production/mes/mes-intro).

**Prikaz verzije komponente u sastavnici**: ako je opcija aktivirana, omogućava prikaz polja verzije na kartici komponente sastavnice.

**Omogući automatsko čuvanje prijava proizvodnje**: ako je opcija aktivirana, omogućava automatsko čuvanje prijava proizvodnje.

**Format vremena**: ovim parametrom određuje se format prikaza vremena navedenih u prijavama, kao i vremena početka i završetka rada. Dostupni su formati sati, minuta i sekundi ili sati i minuta (podrazumevani format). Podešavanje se primenjuje na faze planiranih naloga i naloga za proizvodnju, prijave proizvodnje, prijave u rešenju M.E.S., kao i na funkcionalnosti redosleda faza i kapaciteta radnih centara.

**Vrsta zadatka koja se predlaže u MES-u**: vrsta zadatka koja će se koristiti za generisanje zadataka za faze ili grupe faza za koje će se evidentirati prijave.

Postoje i sledeći odeljci: **Upravljani radni listovi za**, **Period analize**, **Vrednovanje materijala prema trošku**, **Pojednostavljene prijave** i **Predlog redosleda faza**.

Odeljak **Upravljani radni listovi za**

> Odeljak omogućava izbor vrste grupisanja koja će se koristiti prilikom štampanja radnog lista (koji sadrži parametre koji određuju kako određeni materijal treba da se proizvede), aktiviranjem jednog od radio-dugmadi. Izabrana vrednost predstavlja samo predlog koji se naknadno može promeniti u obrascu za štampanje samog radnog lista.

Odeljak **Period analize**

> Odeljak omogućava izbor perioda filtriranja naloga za proizvodnju koji će se prikazivati u prozoru za štampanje radnog lista, aktiviranjem jednog od radio-dugmadi. Dostupne su sledeće mogućnosti: nedeljno, dnevno ili svakih X dana.

Odeljak **Vrednovanje materijala prema trošku**

> Odeljak omogućava definisanje parametara koji će se koristiti za izračunavanje troškova evidentiranih prijava proizvodnje. Ovi parametri se ne uzimaju u obzir u postupku [Kalkulacije troškova](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization), jer se u tom postupku vrednosti preuzimaju direktno iz knjiženja prijava proizvodnje.

- **Poslednji**: omogućava vrednovanje materijala prema poslednjem trošku.
- **Prosečni**: omogućava vrednovanje materijala prema prosečnom trošku.
- **Standardni**: omogućava vrednovanje materijala prema standardnom trošku.
- **Prema upravljačkom području**: omogućava vrednovanje materijala prema trošku povezanom sa izabranim **upravljačkim područjem** u odgovarajućem padajućem meniju.
- **Trošak lota**: aktiviranjem ove opcije postupak vrednuje materijal prema izabranoj vrsti troška, uzimajući u obzir samo vrednosti koje se odnose na određeni lot.
- **Trošak radnog naloga**: aktiviranjem ove opcije postupak vrednuje materijal prema izabranoj vrsti troška, uzimajući u obzir samo vrednosti koje se odnose na određeni radni nalog.

:::note[Napomena]
Ako su istovremeno aktivirane opcije **Trošak lota** i **Trošak radnog naloga**, postupak vrednuje materijal prema izabranoj vrsti troška, uzimajući u obzir samo vrednosti koje se odnose na određeni radni nalog i određeni lot.

Pritom se uzimaju u obzir knjiženja izvršena pomoću ulaznih šablona koji imaju aktiviranu opciju ažuriranja poslednjeg ili prosečnog troška (u zavisnosti od vrednosti izabrane u polju **Vrsta troška**) i aktiviranu opciju poreske relevantnosti.

Ako ne pronađe nijedno knjiženje koje ispunjava ove uslove, postupak traži knjiženja kojima je taj lot primljen. Ako ni takva knjiženja ne postoje, pretražuju se sva knjiženja za taj artikal. Ako za artikal ne postoji nijedno ulazno knjiženje, postupak proverava odgovarajuća polja poslednjeg, prosečnog i standardnog troška u šifarniku artikala.
:::

Odeljak **Pojednostavljene prijave**

> Ovaj odeljak odnosi se isključivo na upravljanje **Pojednostavljenim prijavama** u rešenju M.E.S. i omogućava podešavanje njihovog načina rada.

Dostupni parametri su:

- **Zahtev za izborom operatera**: ako je opcija aktivirana, od operatera će se zahtevati da unese zaposlenog (putem čitača bar-kodova) koji će učestvovati u timu zaduženom za izvršavanje operacije.
- **Zahtev za unosom više operatera**: opcija je dostupna samo ako je aktivirana opcija **Zahtev za izborom operatera**. Ako je aktivirana, od operatera će se zahtevati da unese dodatnog zaposlenog (putem čitača bar-kodova) koji će se pridružiti timu zaduženom za izvršavanje operacije.
- **Zahtev za potvrdom radnog centra**: ako je opcija aktivirana, od operatera će se zahtevati da potvrdi predloženi radni centar ili će mu biti omogućeno da ga zameni unosom drugog radnog centra putem čitača bar-kodova.
- **Zahtev za potvrdom mašine**: ako je opcija aktivirana i za izabranu radnu fazu postoji definisana mašina, od operatera će se zahtevati da potvrdi predloženu mašinu ili će mu biti omogućeno da izabere alternativnu mašinu putem čitača bar-kodova. Alternativna mašina mora biti važeća za izabrani radni centar.
- **Zahtev za vremenom pripreme**: ako je opcija aktivirana i za radnu fazu postoji definisano vreme pripreme, od operatera će se zahtevati da navede da li je uz prijavu početka povezana aktivnost pripreme. Ta aktivnost će se završiti pri sledećoj prijavi obustave aktivnosti.
- **Automatsko zatvaranje po dostizanju ili prekoračenju planirane količine**: ako je opcija aktivirana, kada prijavljena proizvedena količina dostigne ili premaši planiranu količinu, automatski će se evidentirati zatvaranje faze. U suprotnom će se i dalje nuditi prijave obustave i nastavka aktivnosti.
- **Prikaz kartice Radna uputstva**: ako je opcija aktivirana i ako je radni centar tako konfigurisan, prikazaće se kartica **Radna uputstva**.
- **Zahtev za potvrdom pregleda radnih uputstava**: opcija je dostupna samo ako je aktivirana opcija **Prikaz kartice Radna uputstva**. Ako je opcija aktivirana, a radni centar podržava ovu funkcionalnost, od operatera će se zahtevati da potvrdi da je pregledao radna uputstva, ako ona postoje.
- **Prikaz kartice Napomene**: ako je opcija aktivirana i ako je radni centar tako konfigurisan, prikazaće se kartica **Napomene**.
- **Prikaz kartice Dokumenti**: ako je opcija aktivirana i ako je radni centar tako konfigurisan, prikazaće se kartica **Dokumenti**.
- **Vreme potvrde automatskog prelaska na sledeću aktivnost (5–60 sekundi)**: dozvoljene su vrednosti 0 i svi celi brojevi od 5 do 60. Parametar određuje broj sekundi čekanja pre automatskog prelaska na sledeći korak prijave, ako je ta funkcionalnost predviđena. Ako je vrednost 0, operater mora ručno da potvrdi prelazak na sledeću aktivnost.

Odeljak **Predlog redosleda faza**

> Odeljak omogućava izbor broja redosleda faze koji će se predlagati prilikom izrade tehnološkog postupka. Broj se može preuzeti iz redosleda standardne faze ili se može dodeljivati uzastopno, prema redosledu unosa. Takođe je moguće odrediti vrednost koraka.

## 2. Skladišta

Obrazac služi za unos skladišta i pripadajućih šablona koji upravljaju skladišnim kretanjima artikala putem postupaka povezanih sa proizvodnjom. Isti obrazac nalazi se i u *MRP parametrima* artikla, na kartici [Skladišta](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters), s tom razlikom što se skladišta definisana u *Parametrima naloga za proizvodnju* smatraju opštim podrazumevanim podešavanjima koja važe za sve artikle. Ako se za određeni artikal u njegovim *MRP parametrima* podese druga skladišta, sistem će pri ulazu i izlazu materijala povezanih sa proizvodnjom tog artikla **dati prednost parametrima** podešenim u tom obrascu.

Osim toga, iste parametre moguće je podesiti i za određenu lokaciju proizvodnje.

Prioritet za **ulaz** određuje se sledećim redosledom:

- Skladište i šablon ako su navedeni u zaglavlju naloga za proizvodnju.
- [Parametri lokacije proizvodnje](/docs/configurations/parameters/production/production-orders-parameters/production-site) navedeni u radnom nalogu povezanom sa nalogom za proizvodnju.
- [MRP parametri artikla](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro).
- Parametri lokacije proizvodnje povezane sa mašinom navedenom u prijavi proizvodnje. Ako mašina nije navedena u prijavi, parametri se preuzimaju sa lokacije proizvodnje povezane sa mašinom navedenom u fazi naloga za proizvodnju.
- [Parametri naloga za proizvodnju](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).

Prioritet za **izlaz** određuje se sledećim redosledom:

- [Parametri lokacije proizvodnje](/docs/configurations/parameters/production/production-orders-parameters/production-site) navedeni u radnom nalogu povezanom sa nalogom za proizvodnju.
- [MRP parametri artikla](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro).
- Parametri lokacije proizvodnje povezane sa mašinom navedenom u prijavi proizvodnje. Ako mašina nije navedena u prijavi, parametri se preuzimaju sa lokacije proizvodnje povezane sa mašinom navedenom u fazi naloga za proizvodnju.
- [Parametri naloga za proizvodnju](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).

Na ovoj kartici moguće je podesiti skladišta za **Sirovine**, **Poluproizvode**, **Gotove proizvode** i eventualni **Otpad**, zajedno sa pripadajućim ulaznim i izlaznim šablonima.

Za podešavanje pojedinačnog skladišta potrebno je u odgovarajućim padajućim menijima izabrati skladište i šablone koji su prethodno definisani u tabelama [Skladišta](/docs/configurations/tables/logistics/warehouses) i [Šabloni skladišnih kretanja](/docs/configurations/tables/logistics/warehouse-templates).

Pored ovih glavnih skladišta, postoje i **W.I.P. skladišta**, koja se aktiviraju izborom opcije W.I.P. Nakon toga potrebno je u odgovarajućim padajućim menijima izabrati skladišta i šablone, na isti način kao i za ostala skladišta.

**W.I.P. skladišta** (*Work in Progress*) predstavljaju prelazna skladišta kroz koja roba prolazi prilikom puštanja naloga za proizvodnju gotovog proizvoda ili poluproizvoda. Kada su ova skladišta podešena, vrsta preuzimanja materijala mora biti *Ručno*. U suprotnom, ako je izabrana vrsta preuzimanja *Automatski*, izlaz materijala izvršiće se automatski prilikom puštanja naloga za proizvodnju.

U slučaju W.I.P. skladišta, materijal se prilikom puštanja naloga premešta u ta skladišta putem [Liste za preuzimanje materijala](/docs/production/pp-production-in-progress/picking-materials-list). Izlaz materijala evidentira se tokom prijave proizvodnje poslednje proizvodne faze koja omogućava skladišna kretanja za artikal iz naloga za proizvodnju ili tokom faze kojoj je materijal pridružen.

Ako je, umesto toga, za materijal izabrana vrsta preuzimanja *Sa listom*, premeštanje materijala u W.I.P. skladište odvija se na isti način kao i kod ručnog preuzimanja, dok se izlaz iz W.I.P. skladišta izvršava putem postupka [Liste za preuzimanje materijala](/docs/production/pp-production-in-progress/picking-materials-list).

### Funkcionisanje skladišta i šablona

Što se tiče **ulaza gotovih proizvoda i poluproizvoda**:

- Ako je u pitanju **poslednja proizvodna faza koja omogućava skladišna kretanja** u tehnološkom postupku, koriste se skladišta i šabloni iz odeljka **Gotovi proizvodi** ako je nalog za proizvodnju **prvog nivoa**, odnosno ako se odnosi na gotov proizvod. Ako nalog za proizvodnju **nije prvog nivoa**, odnosno odnosi se na poluproizvod, koriste se skladišta i šabloni iz odeljka **Poluproizvodi**. Ako u odeljku **Poluproizvodi** nisu definisane vrednosti, koriste se one iz odeljka **Gotovi proizvodi**.
- Ako **nije u pitanju poslednja proizvodna faza koja omogućava skladišna kretanja** i **upravljanje W.I.P. skladištima nije aktivirano**, koriste se skladišta i šabloni iz odeljka **W.I.P. poluproizvodi**. Ako je **upravljanje W.I.P. skladištima aktivirano**, koriste se skladišta i šabloni iz odeljka **W.I.P.**, a vrednosti iz odeljka **W.I.P. poluproizvodi** više se ne uzimaju u obzir.

Što se tiče **izlaza materijala**:

- Ako **upravljanje W.I.P. skladištima nije aktivirano**, koriste se skladišta i šabloni iz odeljka **Sirovine** ako je za artikal u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) podešena **vrsta nabavke Nabavka**. Ako je podešena **vrsta nabavke Proizvodnja ili Kooperacija**, za izlaz se koriste skladišta i šabloni iz odeljka **Poluproizvodi**.
- Ako je **upravljanje W.I.P. skladištima aktivirano**, koriste se skladišta i šabloni iz odeljka **W.I.P.** Ako u tom odeljku nisu definisane vrednosti, koriste se one iz odeljka **Sirovine**. Prema tome, ako je za artikal podešena **vrsta nabavke Nabavka**, koristi se šablon **Potrošnja materijala**. Ako je podešena **vrsta nabavke Proizvodnja ili Kooperacija**, koristi se šablon **Potrošnja poluproizvoda**.

:::note[Napomena]
Kada se u *Parametrima naloga za proizvodnju* aktivira opcija *W.I.P.*, prilikom izrade naloga za kooperaciju (putem postupka *Puštanje planiranih naloga* ili direktno iz naloga za proizvodnju) za materijale koji se šalju kooperantu uzimaju se u obzir skladište i šablon definisani u [Parametrima kooperacije](/docs/configurations/parameters/production/subcontractor-parameters), u odeljku *Isporuka materijala kooperantima – W.I.P.*. U tom slučaju materijali koji se šalju kooperantima preuzimaju se direktno iz **W.I.P. skladišta**.
:::

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću stranicu: [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).