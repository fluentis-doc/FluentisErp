---
title: Parametri naloga za proizvodnju
sidebar_position: 1
---

Obrazac se otvara putem izbornika **Parametri > Proizvodnja > Parametri naloga za proizvodnju**. U ovom se prozoru postavljaju svi parametri koji se odnose na skladišna kretanja artikala putem postupaka povezanih s proizvodnjom, kao i pojedini parametri kojima se određuje način upravljanja određenim dijelovima proizvodnog područja.

## 1. Općenito

**Automatsko upravljanje lotovima i serijskim brojevima**: ako je opcija aktivirana, sustav automatski predlaže lotove i/ili serijske brojeve materijala koji se upotrebljavaju tijekom proizvodnje, izravno u odgovarajućim mrežama povezanima s mrežom korištenih materijala u prijavi proizvodnje. U suprotnom korisnik mora ručno odrediti lotove i serijske brojeve korištenih artikala koji se vode na taj način. Podsjećamo da se upravljanje lotovima ili serijskim brojevima postavlja u kartici artikla, na kartici [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-item), odabirom željene vrste upravljanja.

**Upravljanje dvjema mjernim jedinicama**: ako je opcija aktivirana, korisniku omogućuje upravljanje dvjema mjernim jedinicama u prijavama proizvodnje, kako za proizvedene artikle tako i za korištene materijale.

**Isti lot za otpadne artikle**: ako je opcija aktivirana, korisnik može odrediti da se nastali otpad zaprima na skladište pod istim lotom pod kojim se zaprimaju i proizvodi. Ako opcija nije aktivirana, proizvodi i otpad zaprimat će se pod različitim lotovima.

**Podjela naloga ako lotovi materijala nisu dostatni**: ako je opcija aktivirana, postupak *Puštanje naloga za proizvodnju* provjerava jesu li količine materijala koje treba automatski izdati dostatne na skladištu s kojeg ih je potrebno preuzeti. To se odnosi samo na automatsko preuzimanje ili na ručno preuzimanje uz upravljanje WIP-om. Ako količine nisu dostatne, postupak dijeli nalog za proizvodnju na dva zasebna naloga s istim brojem i godinom, ali različitim lotovima. Prvi nalog imat će lot 0, a drugi lot 1. Prvi nalog odnosi se na materijale kojih ima dovoljno na skladištu.

**Promjena datuma radnog naloga pri promjeni datuma naloga za proizvodnju**: ako je opcija aktivirana, promjenom završnog datuma naloga za proizvodnju automatski se mijenja i završni datum radnog naloga, pod uvjetom da je artikl na nalogu za proizvodnju isti kao artikl na radnom nalogu. To znači da nalog za proizvodnju mora biti prve razine.

**Ispis radnih listova za pokrenute naloge**: omogućuje da opcija *Pokrenuti* bude zadano aktivirana u odgovarajućem obrascu za pokretanje ispisa [Radnog lista](/docs/production/pp-production-in-progress/reports/worksheet).

**Automatsko određivanje vremena u prijavama**: ako je opcija aktivirana, sustav automatski izračunava strojno vrijeme i vrijeme rada radnika na temelju vremena navedenih u prijavama. U suprotnom korisnik mora ručno unijeti navedena vremena u redak prijave proizvodnje.

**Automatski prijedlog alternativne mjerne jedinice**: ako je opcija aktivirana, sustav automatski predlaže alternativnu mjernu jedinicu definiranu za artikl u prijavi proizvodnje. Ako je aktivirana opcija **Upravljanje dvjema mjernim jedinicama**, preporučuje se aktivirati i ovu opciju radi jednostavnijeg rada. Ona se može uređivati samo ako je aktivirana opcija **Upravljanje dvjema mjernim jedinicama**.

**Isti lot za otpadne materijale**: ako je opcija aktivirana, otpadni materijali zadržavaju isti lot kao i utrošeni materijali.

**Automatsko knjiženje prijava**: ova se opcija upotrebljava u obrascu prijava proizvodnje u sustavu WMS. Ako je aktivirana, prijava se automatski knjiži odmah nakon unosa.

**Dodjela lota za listu za preuzimanje**: ako je opcija aktivirana, prilikom izrade liste za preuzimanje odgovarajućim postupkom sustav za materijale koji se vode po lotovima odabire lotove koje je potrebno preuzeti za odabrane naloge za proizvodnju. Ako opcija nije aktivirana, korisnik mora ručno navesti u postupku **Picking** koji su lotovi preuzeti.

**Ažuriranje korištenih materijala u nalogu za proizvodnju**: ako je opcija aktivirana, pri promjeni prijavljene količine u prijavi proizvodnje prikazuje se poruka s upitom želi li korisnik ponovno izračunati količine korištenih materijala. Ako opcija nije aktivirana, preračunavanje materijala odvija se automatski.

**Omogući kontrolu prisutnosti u sustavu MES**: ako je opcija aktivirana, omogućuje kontrolu prisutnosti unutar sustava [Fluentis MES](/docs/production/mes/mes-intro). Kontrola se temelji na tablici *Fluentis.HR_BadgeRecords*.

Obvezna polja za kontrolu u toj tablici su:
- *HRBR_Resource_HRR_Id*
- *HRBR_RecordDateTime*
- *HRBR_BadgeRecordType_HRBRTY_Id* — može imati vrijednost E = ulazak ili U = izlazak.

Svaki redak može sadržavati samo vrijeme ulaska ili vrijeme izlaska. Stoga će za svaki dan biti četiri retka za svakog korisnika, primjerice:

- 2024-01-02 08:30:00.000 — vrsta E
- 2024-01-02 12:30:00.000 — vrsta U
- 2024-01-02 14:00:00.000 — vrsta E
- 2024-01-02 18:00:00.000 — vrsta U

Podaci se moraju uvesti u ovu tablicu na temelju podataka s korištenog uređaja za evidenciju radnog vremena.

Nakon toga uspoređuju se s vremenima početka i završetka rada svakog operatera unesenog na kartici *Tim* unutar sustava [Fluentis MES](/docs/production/mes/mes-intro).

**Prikaz verzije komponente u sastavnici**: ako je opcija aktivirana, omogućuje prikaz polja verzije na kartici komponente sastavnice.

**Omogući automatsko spremanje prijava proizvodnje**: ako je opcija aktivirana, omogućuje automatsko spremanje prijava proizvodnje.

**Format vremena**: ovim se parametrom određuje format prikaza vremena navedenih u prijavama te vremena početka i završetka rada. Dostupni su formati sati, minute i sekunde ili sati i minute (zadani format). Postavka se primjenjuje na faze planiranih naloga i naloga za proizvodnju, prijave proizvodnje, prijave u rješenju M.E.S. te funkcionalnosti redoslijeda faza i kapaciteta radnih centara.

**Vrsta zadatka koja se predlaže u MES-u**: vrsta zadatka koja će se upotrebljavati za generiranje zadataka za faze ili grupe faza za koje će se evidentirati prijave.

Postoje i sljedeći odjeljci: **Upravljani radni listovi za**, **Razdoblje analize**, **Vrednovanje materijala prema trošku**, **Pojednostavljene prijave** i **Prijedlog redoslijeda faza**.

Odjeljak **Upravljani radni listovi za**

> Odjeljak omogućuje odabir vrste grupiranja koja će se upotrebljavati prilikom ispisa radnog lista (koji sadrži parametre koji određuju kako se određeni materijal mora proizvesti), aktiviranjem jednog od radio gumba. Odabrana je vrijednost samo prijedlog koji se naknadno može promijeniti u obrascu za ispis samog radnog lista.

Odjeljak **Razdoblje analize**

> Odjeljak omogućuje odabir razdoblja filtriranja naloga za proizvodnju koji će se prikazivati u prozoru za ispis radnog lista, aktiviranjem jednog od radio gumba. Dostupne su mogućnosti: tjedno, dnevno ili svakih X dana.

Odjeljak **Vrednovanje materijala prema trošku**

> Odjeljak omogućuje definiranje parametara koji će se upotrebljavati za izračun troškova evidentiranih prijava proizvodnje. Ovi se parametri ne uzimaju u obzir u postupku [Kalkulacije troškova](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization), jer se u tom postupku vrijednosti preuzimaju izravno iz knjiženja prijava proizvodnje.

- **Posljednji**: omogućuje vrednovanje materijala prema posljednjem trošku.
- **Prosječni**: omogućuje vrednovanje materijala prema prosječnom trošku.
- **Standardni**: omogućuje vrednovanje materijala prema standardnom trošku.
- **Prema upravljačkom području**: omogućuje vrednovanje materijala prema trošku povezanom s odabranim **upravljačkim područjem** u odgovarajućem padajućem izborniku.
- **Trošak lota**: aktiviranjem ove opcije postupak vrednuje materijal prema odabranoj vrsti troška, uzimajući u obzir samo vrijednosti koje se odnose na određeni lot.
- **Trošak radnog naloga**: aktiviranjem ove opcije postupak vrednuje materijal prema odabranoj vrsti troška, uzimajući u obzir samo vrijednosti koje se odnose na određeni radni nalog.

:::note Napomena
Ako su istodobno aktivirane opcije **Trošak lota** i **Trošak radnog naloga**, postupak vrednuje materijal prema odabranoj vrsti troška, uzimajući u obzir samo vrijednosti koje se odnose na određeni radni nalog i određeni lot.

Pritom se uzimaju u obzir knjiženja izvršena pomoću predložaka ulaza koji imaju aktiviranu opciju ažuriranja posljednjeg ili prosječnog troška (ovisno o vrijednosti odabranoj u polju **Vrsta troška**) te aktiviranu opciju porezne relevantnosti.

Ako ne pronađe nijedno knjiženje koje ispunjava te uvjete, postupak traži knjiženja kojima je zaprimljen taj lot. Ako ni takva knjiženja ne postoje, pretražuju se sva knjiženja za taj artikl. Ako za artikl ne postoji nijedno knjiženje ulaza, postupak provjerava odgovarajuća polja posljednjeg, prosječnog i standardnog troška u šifarniku artikala.
:::

Odjeljak **Pojednostavljene prijave**

> Ovaj se odjeljak odnosi isključivo na upravljanje **Pojednostavljenim prijavama** u rješenju M.E.S. i omogućuje konfiguriranje njihova načina rada.

Dostupni parametri su:

- **Zahtjev za odabirom operatera**: ako je opcija aktivirana, od operatera će se zatražiti unos zaposlenika (putem čitača barkodova) koji će sudjelovati u timu zaduženom za izvođenje operacije.
- **Zahtjev za unosom više operatera**: opcija je dostupna samo ako je aktivirana opcija **Zahtjev za odabirom operatera**. Ako je aktivirana, od operatera će se zatražiti unos dodatnog zaposlenika (putem čitača barkodova) koji će se pridružiti timu zaduženom za izvođenje operacije.
- **Zahtjev za potvrdom radnog centra**: ako je opcija aktivirana, od operatera će se zatražiti potvrda predloženog radnog centra ili će mu se omogućiti njegova zamjena unosom drugog radnog centra putem čitača barkodova.
- **Zahtjev za potvrdom stroja**: ako je opcija aktivirana i za odabranu radnu fazu postoji definiran stroj, od operatera će se zatražiti potvrda predloženog stroja ili će mu se omogućiti odabir alternativnog stroja putem čitača barkodova. Alternativni stroj mora biti valjan za odabrani radni centar.
- **Zahtjev za vremenom pripreme**: ako je opcija aktivirana i za radnu fazu postoji definirano vrijeme pripreme, od operatera će se zatražiti da navede je li uz prijavu otvaranja povezana aktivnost pripreme. Ta će se aktivnost završiti pri sljedećoj prijavi obustave aktivnosti.
- **Automatsko zatvaranje po dostizanju ili prekoračenju planirane količine**: ako je opcija aktivirana, kada prijavljena proizvedena količina dosegne ili premaši planiranu količinu, automatski će se evidentirati zatvaranje faze. U suprotnom će se nastaviti nuditi prijave obustave i nastavka aktivnosti.
- **Prikaz kartice Radne upute**: ako je opcija aktivirana i ako je radni centar tako konfiguriran, prikazat će se kartica **Radne upute**.
- **Zahtjev za potvrdom pregleda radnih uputa**: opcija je dostupna samo ako je aktivirana opcija **Prikaz kartice Radne upute**. Ako je opcija aktivirana, a radni centar podržava tu funkcionalnost, od operatera će se zatražiti potvrda da je pregledao radne upute, ako one postoje.
- **Prikaz kartice Napomene**: ako je opcija aktivirana i ako je radni centar tako konfiguriran, prikazat će se kartica **Napomene**.
- **Prikaz kartice Dokumenti**: ako je opcija aktivirana i ako je radni centar tako konfiguriran, prikazat će se kartica **Dokumenti**.
- **Vrijeme potvrde automatskog prijelaza na sljedeću aktivnost (5–60 sekundi)**: dopuštene su vrijednosti 0 i svi cijeli brojevi od 5 do 60. Parametar određuje broj sekundi čekanja prije automatskog prelaska na sljedeći korak prijave, ako je ta funkcionalnost predviđena. Ako je vrijednost 0, operater mora ručno potvrditi prelazak na sljedeću aktivnost.

Odjeljak **Prijedlog redoslijeda faza**

> Odjeljak omogućuje odabir broja redoslijeda faze koji će se predlagati prilikom izrade tehnološkog postupka. Broj se može preuzeti iz redoslijeda standardne faze ili se može dodijeliti uzastopno, prema redoslijedu unosa. Također je moguće odrediti vrijednost koraka.

## 2. Skladišta

Obrazac služi za unos skladišta i pripadajućih predložaka koji upravljaju skladišnim kretanjima artikala putem postupaka povezanih s proizvodnjom. Isti se obrazac nalazi i u *Parametrima MRP-a* artikla, na kartici [Skladišta](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters), uz razliku što se skladišta definirana u *Parametrima proizvodnje* smatraju općim zadanim postavkama koje vrijede za sve artikle. Ako se za određeni artikl u njegovim *Parametrima MRP-a* postave druga skladišta, sustav će pri ulazu i izlazu materijala povezanih s proizvodnjom tog artikla **dati prednost parametrima** postavljenima u tom obrascu.

Osim toga, iste je parametre moguće postaviti i za određenu lokaciju proizvodnje.

Prioritet za **ulaz** određuje se sljedećim redoslijedom:

- Skladište i predložak ako su navedeni u zaglavlju naloga za proizvodnju.
- [Parametri lokacije proizvodnje](/docs/configurations/parameters/production/production-orders-parameters/production-site) navedeni u radnom nalogu povezanom s nalogom za proizvodnju.
- [Parametri MRP-a artikla](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro).
- Parametri lokacije proizvodnje povezane sa strojem navedenim u prijavi proizvodnje. Ako stroj nije naveden u prijavi, parametri se preuzimaju s lokacije proizvodnje povezane sa strojem navedenim u fazi naloga za proizvodnju.
- [Parametri naloga za proizvodnju](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).

Prioritet za **izlaz** određuje se sljedećim redoslijedom:

- [Parametri lokacije proizvodnje](/docs/configurations/parameters/production/production-orders-parameters/production-site) navedeni u radnom nalogu povezanom s nalogom za proizvodnju.
- [Parametri MRP-a artikla](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro).
- Parametri lokacije proizvodnje povezane sa strojem navedenim u prijavi proizvodnje. Ako stroj nije naveden u prijavi, parametri se preuzimaju s lokacije proizvodnje povezane sa strojem navedenim u fazi naloga za proizvodnju.
- [Parametri naloga za proizvodnju](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).

Na ovoj kartici moguće je postaviti skladišta za **Sirovine**, **Poluproizvode**, **Gotove proizvode** i eventualni **Otpad**, zajedno s pripadajućim predlošcima ulaza i izlaza.

Za postavljanje pojedinog skladišta potrebno je u odgovarajućim padajućim izbornicima odabrati skladište i predloške koji su prethodno definirani u tablicama [Skladišta](/docs/configurations/tables/logistics/warehouses) i [Predlošci skladišnih kretanja](/docs/configurations/tables/logistics/warehouse-templates).

Osim ovih glavnih skladišta, postoje i **W.I.P. skladišta**, koja se aktiviraju odabirom opcije W.I.P. Nakon toga potrebno je u odgovarajućim padajućim izbornicima odabrati skladišta i predloške, na isti način kao i za ostala skladišta.

**W.I.P. skladišta** (*Work in Progress*) predstavljaju prijelazna skladišta kroz koja roba prolazi prilikom puštanja naloga za proizvodnju gotovog proizvoda ili poluproizvoda. Kada su ova skladišta postavljena, vrsta preuzimanja materijala mora biti *Ručno*. U suprotnom, ako je odabrana vrsta preuzimanja *Automatski*, izlaz materijala izvršit će se automatski prilikom puštanja naloga za proizvodnju.

U slučaju W.I.P. skladišta, materijal se prilikom puštanja naloga premješta u ta skladišta putem [Liste za preuzimanje materijala](/docs/production/pp-production-in-progress/picking-materials-list). Izlaz materijala evidentira se tijekom prijave proizvodnje posljednje proizvodne faze koja omogućuje skladišna kretanja za artikl iz naloga za proizvodnju ili tijekom faze kojoj je materijal pridružen.

Ako je, umjesto toga, za materijal odabrana vrsta preuzimanja *S listom*, premještanje materijala u W.I.P. skladište odvija se na isti način kao i kod ručnog preuzimanja, dok se izlaz iz W.I.P. skladišta izvršava putem postupka [Liste za preuzimanje materijala](/docs/production/pp-production-in-progress/picking-materials-list).

### Funkcioniranje skladišta i predložaka

Što se tiče **ulaza gotovih proizvoda i poluproizvoda**:

- Ako se radi o **posljednjoj proizvodnoj fazi koja omogućuje skladišna kretanja** u tehnološkom postupku, upotrebljavaju se skladišta i predlošci iz odjeljka **Gotovi proizvodi** ako je nalog za proizvodnju **prve razine**, odnosno ako se odnosi na gotov proizvod. Ako nalog za proizvodnju **nije prve razine**, odnosno odnosi se na poluproizvod, upotrebljavaju se skladišta i predlošci iz odjeljka **Poluproizvodi**. Ako u odjeljku **Poluproizvodi** nisu definirane vrijednosti, upotrebljavaju se one iz odjeljka **Gotovi proizvodi**.
- Ako se **ne radi o posljednjoj proizvodnoj fazi koja omogućuje skladišna kretanja** i **upravljanje W.I.P. skladištima nije aktivirano**, upotrebljavaju se skladišta i predlošci iz odjeljka **W.I.P. poluproizvodi**. Ako je **upravljanje W.I.P. skladištima aktivirano**, upotrebljavaju se skladišta i predlošci iz odjeljka **W.I.P.**, a vrijednosti iz odjeljka **W.I.P. poluproizvodi** više se ne uzimaju u obzir.

Što se tiče **izlaza materijala**:

- Ako **upravljanje W.I.P. skladištima nije aktivirano**, upotrebljavaju se skladišta i predlošci iz odjeljka **Sirovine** ako je za artikl u [Parametrima MRP-a](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) postavljena **vrsta nabave Nabava**. Ako je postavljena **vrsta nabave Proizvodnja ili Kooperacija**, za izlaz se upotrebljavaju skladišta i predlošci iz odjeljka **Poluproizvodi**.
- Ako je **upravljanje W.I.P. skladištima aktivirano**, upotrebljavaju se skladišta i predlošci iz odjeljka **W.I.P.** Ako u tom odjeljku nisu definirane vrijednosti, upotrebljavaju se one iz odjeljka **Sirovine**. Prema tome, ako je za artikl postavljena **vrsta nabave Nabava**, upotrebljava se predložak **Potrošnja materijala**. Ako je postavljena **vrsta nabave Proizvodnja ili Kooperacija**, upotrebljava se predložak **Potrošnja poluproizvoda**.

:::note Napomena
Kada se u *Parametrima naloga za proizvodnju* aktivira opcija *W.I.P.*, pri izradi naloga za kooperaciju (putem postupka *Puštanje planiranih naloga* ili izravno iz naloga za proizvodnju) za materijale koji se šalju kooperantu uzimaju se u obzir skladište i predložak definirani u [Parametrima kooperacije](/docs/configurations/parameters/production/subcontractor-parameters), u odjeljku *Isporuka materijala kooperantima – W.I.P.*. U tom se slučaju materijali koji se šalju kooperantima preuzimaju izravno iz **W.I.P. skladišta**.
:::

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu: [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).