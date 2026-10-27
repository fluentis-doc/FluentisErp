---
title: MRP parametri
sidebar_position: 2
---

Za izmjenu parametara MRP-a:
1. Otvorite obrazac putem izbornika **Parametri > Proizvodnja > MRP parametri**.
2. Odaberite artikl i dvaput kliknite na redak ili upotrijebite gumb **Izmijeni parametre**.

Parametre MRP-a sustav automatski stvara prilikom spremanja novog artikla unesenog u šifarnik, pri čemu se dodjeljuju zadane vrijednosti koje operater može ručno mijenjati pojedinačno ili skupno putem gumba **Zamjena parametara**, koji se nalazi u obrascu za filtriranje.

## 1. Opći podaci

Parametri koje je moguće definirati na ovoj kartici su sljedeći:

**Politika upravljanja**: ovaj padajući izbornik omogućuje korisniku odabir načina upravljanja artiklom:

> **Prognoziranje**: u ovom slučaju artiklom se upravlja generiranjem prognoza prodaje ili unosom glavnog plana proizvodnje. Ova se politika upravljanja uzima u obzir i u postupku [Generiranje proizvodnih naloga](/docs/planning/mps-master-production-scheduling/job-order-creation) i u postupku [MRP](/docs/planning/ms-master-scheduling/mrp).

> **Zaliha**: u ovom slučaju artiklom se upravlja na temelju podataka o točki ponovnog naručivanja i minimalnoj zalihi, unesenih na kartici [Nabava](/docs/erp-home/registers/items/create-new-item) u šifarniku artikala. Ova je opcija namijenjena artiklima kod kojih potražnja stiže prekasno u odnosu na vrijeme potrebno za nabavu ili proizvodnju, zbog čega ih je potrebno upravljati na temelju zaliha. Time se omogućuje nabava prije pojave stvarne potražnje. I u ovom se slučaju proizvodni nalog za artikl generira putem postupka [Generiranje proizvodnih naloga](/docs/planning/mps-master-production-scheduling/job-order-creation) ili postupka [MRP](/docs/planning/ms-master-scheduling/mrp).

> **Nalog**: koristi se za artikle koji se proizvode prema nalogu kako bi se osigurala sljedivost tijekom svih faza proizvodnje. Ova se politika upravljanja primjenjuje tijekom postupka [Generiranje proizvodnih naloga](/docs/planning/mps-master-production-scheduling/job-order-creation), korištenjem kartice Narudžbe kupaca, putem koje se generiraju proizvodni nalozi. Artiklom se može upravljati i putem postupka [MRP](/docs/planning/ms-master-scheduling/mrp), ali samo ako je to izričito određeno aktiviranjem zastavice **Uključi artikl u izračun MRP-a**, koja se nalazi na kartici Parametri ovog obrasca.

> Primjer: generirana je narudžba kupca za 6 komada artikla kojim se upravlja prema nalogu, a zatim još jedna narudžba za 8 komada istog artikla. Kako bi se pratila proizvodnja i veza između narudžbi kupaca i proizvodnih naloga, izradit će se dva zasebna proizvodna naloga, svaki povezan s odgovarajućom narudžbom kupca.

> **Potreba**: u ovom slučaju riječ je o artiklima kod kojih možda nije potrebno osigurati sljedivost. Stoga je moguće objediniti više potreba iz različitih izvora, pri čemu se gubi veza s pojedinačnim nalogom. Takav se artikl može uzeti u obzir pri korištenju postupka [MRP](/docs/planning/ms-master-scheduling/mrp), umjesto postupka **Opće planiranje**.

> Primjer: u situaciji sličnoj prethodnoj, s jednom narudžbom kupca za 6 komada i drugom za 8 komada istog artikla, moguće je generirati jedan zbirni proizvodni nalog za 14 komada. Pritom se gubi veza između pojedinačnih narudžbi i proizvodnih naloga, a time i sljedivost. Alternativno, artiklom se može upravljati bez objedinjavanja potreba.

:::note NAPOMENA
Sljedeće opcije za međuspremnike i toleranciju vremena kupca dostupne su samo uz DDMRP.
:::

> **Dinamički DDMRP bufferi**: omogućuju promjenu triju karakterističnih zona (zelene, žute i crvene) tijekom vremena, a time i promjenu prosječne razine zaliha.

> **Fiksni DDMRP bufferi**: koriste fiksne vrijednosti zona, a time i fiksnu prosječnu razinu zaliha. Primjenjuju se u slučajevima ograničenog prostora, investicijskih ograničenja, sigurnosnih ograničenja i slično.

> **Min-max DDMRP bufferi**: koriste samo crvenu i zelenu zonu.

>> **Tolerancija vremena kupca**: vrijeme isporuke izraženo u danima koje kupci općenito smatraju prihvatljivim. Ova se opcija aktivira tek nakon odabira vrste DDMRP međuspremnika.

**Vrsta nabave**: ovaj padajući izbornik služi za određivanje vrste planiranih naloga koji se stvaraju. Korisnik može odabrati hoće li se artikl nabavljati na jedan od sljedećih načina:

> **Nabava**: u ovom slučaju eksplozija potreba stvara planirani nabavni nalog za predmetni artikl.

> **Proizvodnja**: u ovom slučaju eksplozija potreba stvara planirani proizvodni nalog za predmetni artikl.

> **Kooperacija**: u ovom slučaju eksplozija potreba stvara planirani nalog za kooperaciju za predmetni artikl.

**Vrsta izdavanja**: ovaj padajući izbornik omogućuje korisniku odabir načina izdavanja materijala za artikl, odnosno načina na koji se materijal izdaje u proizvodnom pogonu. Dostupne su sljedeće mogućnosti:

> **Automatski**: artikl se izdaje prilikom puštanja proizvodnog naloga u izvršenje, odnosno pri promjeni statusa naloga iz „Pokrenut” u „U izvršenju”.

> **S listom**: artikl se izdaje putem liste za preuzimanje materijala, koja se ručno izrađuje u odjeljku Proizvodnja > Lista za preuzimanje materijala. U tom se slučaju ručno određuje trenutak izdavanja materijala.

> **Ručno**: artikl se izdaje tek prilikom evidentiranja proizvodnje neposredno nadređene razine sastavnice. Izdavanje se provodi istodobno s evidentiranjem proizvodne faze s kojom je materijal povezan ili, ako nije povezan ni s jednom fazom, prilikom evidentiranja posljednje proizvodne faze koja omogućuje skladišno kretanje.

> Drugim riječima, kada se evidentira proizvodnja nadređenog artikla, predlažu se sve količine podređenih artikala koje su trebale biti utrošene za njegovu proizvodnju. Potvrdom tih količina istodobno se provodi i njihovo izdavanje iz skladišta.

> Važno je napomenuti da u slučaju korištenja WIP skladišta ručno izdavanje podrazumijeva prijenos predmetnog materijala iz skladišta sirovina u WIP skladište tijekom puštanja proizvodnog naloga u izvršenje, a zatim njegovo izdavanje iz WIP skladišta tijekom evidentiranja proizvodnje. Objašnjenje WIP skladišta nalazi se u zasebnom članku o kartici *Parametri MRP*, pod nazivom *Skladišta*.

Osim toga, dostupna su sljedeća polja:

**Prioritet nabave:** ovo polje omogućuje korisniku postavljanje prioriteta koji će se dodijeliti artiklu. Taj će se prioritet koristiti pri izradi *zahtjeva za nabavu* tijekom postupka [Puštanje planiranih naloga u izvršenje](/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders/), ako je aktivirana zastavica **Svojstva nabave iz MRP parametara artikla**.

**Generiranje proizvodnih naloga**: ako je aktivirano, označava da se retci narudžbi kupaca koji sadrže ovaj artikl moraju prikazivati u filtru na kartici *Narudžbe kupaca* postupka *Generiranje proizvodnih naloga*. Također će se uzimati u obzir ako je aktivirana opcija *Automatsko generiranje proizvodnog tijeka* koja se nalazi u [MS parametrima](/docs/configurations/parameters/production/mps-parameters/). Ako zastavica nije aktivirana, artikl se neće uzimati u obzir ni u jednom od ta dva postupka.

**Isključi iz planiranja**: ako je aktivirano,

**Postotak otpada**: omogućuje korisniku postavljanje fiksnog postotka otpada za artikl. Taj se postotak uvijek primjenjuje kada se artikl preuzima u sastavnicu.

*Primjer*: ako je za proizvodnju određenog materijala uobičajen otpad od 10 %, a planirana proizvodna količina iznosi 100 komada, planer ili MRP prilikom izrade planiranog naloga neće predložiti 100 komada, nego 100 komada uvećanih za 10 %.

**Uzmi u obzir u kooperaciji**: ako je aktivirano, omogućuje automatsko uključivanje artikla prilikom popunjavanja kartica *Materijali za isporuku* i *Materijali za utrošak* u *Nalogu za kooperaciju*.

Slijedi niz zastavica koje se koriste tijekom obrade postupka MRP:

**Uzmi u obzir količine prema ekonomičnoj količini narudžbe**: ako je aktivirano, za artikl se uzima u obzir ekonomična količina, odnosno minimalna količina proizvodnje ili nabave. Ekonomična količina proizvodnje postavlja se u odjeljku Parametri proizvodnje unutar ovog obrasca, a ekonomična količina nabave u odjeljku Parametri nabave, koji će biti detaljnije opisani u nastavku.

**Uzmi u obzir višekratnike ekonomične količine narudžbe**: ako je aktivirano, za artikl se uzimaju u obzir višekratnici ekonomične količine proizvodnje ili nabave postavljeni u odgovarajućim odjeljcima ovog obrasca.

**Nadopuna minimalne zalihe artikla**: ako je aktivirano, za artikl se nadopunjuje minimalna zaliha definirana u njegovu šifarniku, na kartici *Nabava*.

**Nadopuna točke ponovnog naručivanja artikla**: ako je aktivirano, za artikl se nadopunjuje točka ponovnog naručivanja definirana u njegovu šifarniku, na kartici *Nabava*.

**Uzmi u obzir indeks pokrivenosti**: ako je aktivirano, za artikl se uzima u obzir indeks pokrivenosti definiran u njegovu šifarniku, na kartici *Nabava*. Indeks pokrivenosti izražava se u tjednima. Njegovim postavljanjem određuje se da sustav mora pokriti potrebe za broj tjedana naveden u ovom polju.

**Uzmi u obzir i alternativne materijale**: ako je aktivirano, u slučaju nedostupnosti artikla uzimaju se u obzir i njegove alternative definirane u sastavnici, na kartici *Alternative*.

**Uzmi u obzir alternativne faze**: ako je aktivirano, za artikle koji se proizvode uzimaju se u obzir alternativne faze definirane u radnom ciklusu artikla.

U polju *Tolerancija opterećenja radnog centra* moguće je postaviti postotak koji određuje kada se radni centar smatra popunjenim. Primjerice, ako je postavljeno 90 %, program će uzeti u obzir definirane alternative za taj radni centar kada njegovo opterećenje dosegne 90 %.

U polju *Tolerancija proizvodnje* moguće je postotkom odrediti koliko se više artikala smije proizvesti u odnosu na količinu predviđenu proizvodnim nalogom. Isto se može postaviti za nabavu u polju *Tolerancija nabave*.

**Blokada proizvodnje**: ako je aktivirano, prilikom obrade proizvodnog naloga za ovaj artikl u postupku Opće planiranje prikazat će se poruka: „Nije moguće izraditi raspored, artikl XXXX blokiran je za proizvodnju”. U tom se slučaju planiranje zaustavlja, a korisnik ga mora ponovno pokrenuti, isključujući proizvodni nalog koji se odnosi na taj artikl.

**Provjera potreba uz generiranje planiranih naloga**: ako je aktivirano, MRP izrađuje planirane naloge, pod uvjetom da je aktivirana i istoimena zastavica na kartici Parametri u postupku [MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro). Ako zastavica nije aktivirana, MRP će samo predložiti planirane naloge, ali ih neće izraditi.

**Referentna sastavnica**: u ovom se odjeljku postavlja artikl odnosno varijanta čija će se sastavnica koristiti kao referenca za planiranje eventualnog proizvodnog naloga za artikl odnosno varijantu na koju se odnose MRP parametri koji se trenutačno uređuju. Ako se referentna sastavnica razlikuje od šifre artikla navedene u zaglavlju MRP parametara, ovdje je moguće unijeti odgovarajući artikl, uključujući **klasu**, **šifru** i **opis**, kao i eventualnu **varijantu**. **Mjerna jedinica** popunjava se automatski.

**Parametri proizvodnje**: ovaj je odjeljak aktivan ako je politika upravljanja artiklom postavljena na *Proizvodnja*. U njemu je moguće postaviti sljedeća polja:

> **Lead Time**: korisnici koji ne koriste proizvodne cikluse u ovom polju mogu postaviti vrijeme proizvodnje za predmetni artikl. Vrijeme se izražava u radnim danima, izračunava se prema tvorničkom kalendaru i ne mijenja se ovisno o količini koju treba proizvesti.

> **Fiksni Lead Time**: ovo polje omogućuje korištenje fiksnog vremena isporuke umjesto vremena izračunatog na temelju radnih ciklusa artikla. U tom slučaju sustav neće uzimati u obzir Lead Time definiran u radnom ciklusu, nego vrijednost unesenu u ovo polje, izraženu u radnim danima. Ovaj način rada aktivira se označavanjem odgovarajuće zastavice.

> Ako je zastavica aktivirana, izračunato vrijeme dobiva se zbrajanjem vrijednosti **Fiksni Lead Time** (unesene pokraj zastavice) i vrijednosti **Lead Time analize** na kartici [Kvaliteta](/docs/erp-home/registers/items/create-new-item) u *šifarniku artikala*. U tom se slučaju vremena proizvodnih faza ne uzimaju u obzir, a datum početka ponovno se izračunava prema *Tvorničkom kalendaru*.

> Ako zastavica nije aktivirana, datum početka ponovno se izračunava uzimajući u obzir proizvodne faze, alternativne faze i *Kalendar radnih centara*.

> **Ekonomična količina narudžbe**: u ovom polju korisnik može postaviti ekonomičnu količinu proizvodnje artikla, koju će uzimati u obzir postupci [Generiranje proizvodnih naloga](/docs/planning/mps-master-production-scheduling/job-order-creation) i Opće planiranje, ali samo ako je aktivirana prethodno opisana zastavica „Uzmi u obzir količine prema ekonomičnoj količini narudžbe”.

> **Granični broj dana planiranja**: tijekom izrade rasporeda/planiranja uzimaju se u obzir samo nalozi, rezervacije i potrebe unutar zadanog razdoblja. Sve što prelazi to razdoblje neće se uzimati u obzir.

> **Višekratnici**: u ovom polju korisnik može postaviti višekratnike ekonomične količine proizvodnje artikla, koje će uzimati u obzir postupci [Generiranje proizvodnih naloga](/docs/planning/mps-master-production-scheduling/job-order-creation) i Opće planiranje, ali samo ako je aktivirana prethodno opisana zastavica „Uzmi u obzir višekratnike ekonomične količine narudžbe”.

> **Dani grupiranja**: u ovom polju korisnik određuje razdoblje unutar kojeg postupak grupira eventualne planirane naloge. Primjerice, ako je za određeni artikl postavljena vrijednost 5, grupirat će se svi planirani nalozi čiji se datumi nalaze unutar razdoblja od 5 radnih dana, prema tvorničkom kalendaru.

> **Dani tolerancije za ranije rokove**, **Dani tolerancije za kasnije rokove**: predstavljaju broj dana za koje MRP tolerira pomicanje datuma dokumenta unaprijed ili unatrag, bez predlaganja stvarnog pomicanja. Umjesto toga, koristi eventualni višak raspoloživosti bez stvaranja dodatnih prijedloga.

> Primjerice, ako su za određeni artikl postavljene vrijednosti Dani tolerancije za ranije rokove = 2 i Dani tolerancije za kasnije rokove = 5, a algoritam MRP-a utvrdi potrebu za ranijim ili kasnijim datumom dokumenta, korisniku se neće predložiti pomicanje ako se odgovarajući ulaz nalazi unutar tolerancije od 2 dana prije traženog datuma ili 5 dana nakon njega. Korisnik će biti obaviješten samo da je potreba zadovoljena odgovarajućim dokumentom.

> Drugim riječima, kod parametra *Dani tolerancije za ranije rokove* MRP provjerava buduće razdoblje, u trajanju navedenog broja dana, kako bi utvrdio postoje li ulazi koji mogu pokriti ranije potrebe. Kod parametra *Dani tolerancije za kasnije rokove* MRP provjerava prethodno razdoblje, u trajanju navedenog broja dana, kako bi utvrdio postoje li ulazi koji mogu pokriti kasnije potrebe.

> **Tolerancija u danima/postotku vremena isporuke (Lead Time)**: određuje razdoblje unutar kojeg je dopušteno pomicanje datuma unaprijed ili unatrag. Ako je to razdoblje prekoračeno, MRP predlaže brisanje dokumenta. Ovaj parametar također određuje koliko dugo se može uzimati u obzir eventualni višak artikla. Može se izraziti u danima ili kao postotak vremena isporuke (Lead Time).

> Primjerice, ako je za neki artikl definirana tolerancija od 90 dana, datumi dokumenata povezanih s tim artiklom mogu se pomaknuti najviše 90 dana unaprijed ili unatrag. Ako potrebna promjena prelazi tu granicu, MRP će predložiti brisanje postojećeg dokumenta i izradu novog na datum na koji je utvrđena potreba. Osim toga, eventualna raspoloživost viška tog artikla može se uzeti u obzir najviše tijekom 90 dana.

> Ako je ovaj parametar aktivan, MRP mijenja datume sljedećih vrsta dokumenata:
> - planirani nalozi, ako nisu fiksni;
> - proizvodni nalozi, ali samo oni za koje još nisu evidentirane proizvodne aktivnosti;
> - zahtjevi za nabavu;
> - nalozi za kooperaciju, samo ako još nije aktivirana zastavica „Već ispisano”;
> - narudžbe dobavljačima, ako još nisu potvrđene.
>
> Datumi se mogu pomaknuti unaprijed ili unatrag za najviše navedenu vrijednost.

> **Obvezno ručno evidentiranje materijala**: koristi se u sustavu Fluentis MES. Ako je ova zastavica aktivirana zajedno sa zastavicom **Obvezno evidentiranje količine materijala**, koja se nalazi u tablici [Proizvodni resursi](/docs/production/mes/production-resources) sustava MES, artikl će se na kartici *Materijali* u Fluentis MES-u predlagati s količinom nula. Korisnik će stoga morati ručno unijeti vrijednost prije nastavka rada.

**Čitanje sastavnica/radnih ciklusa**: u ovom odjeljku korisnik može postaviti **verziju** sastavnice i proizvodnog ciklusa koju MRP treba uzeti u obzir za predmetni artikl, kao i **Broj ciklusa**, definiran kao zadani ciklus za artikl.

**Uzmi u obzir raspoloživost iz sljedećih izvora**: u ovom odjeljku korisnik određuje iz kojih će se poslovnih područja dokumenti uzimati u obzir tijekom obrade MRP-a. Dostupna područja su:
- **Nabava**
- **Prodaja**
- **Skladište** – moguće je odrediti hoće li se uzimati u obzir zalihe lotova čiji status nije raspoloživ, aktiviranjem odgovarajuće zastavice;
- **Kooperacija**
- **Planiranje** – proizvodni nalozi, planirani nabavni nalozi, nalozi za kooperaciju i planirani proizvodni nalozi;
- **Puštena proizvodnja** – proizvodni nalozi.

**Uzmi u obzir lotove sa statusom neraspoloživo**: kao što je objašnjeno na kartici [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-item) u šifarniku artikala, lotovi imaju status (raspoloživ, neraspoloživ, u karanteni itd.). Ako je ova zastavica aktivirana, sustav će uzimati u obzir i lotove sa statusom neraspoloživo. Zastavica se može uređivati samo ako je odabrano uzimanje u obzir raspoloživosti iz skladišta.

**Uključi artikl u izračun MRP-a**: ova se zastavica može uređivati samo ako je politika upravljanja postavljena na „Nalog”. Aktiviranjem ove zastavice omogućuje se da MRP analizira i artikle kojima se upravlja prema nalogu, a koje prema zadanim postavkama obrađuje postupak [Generiranje proizvodnih naloga](/docs/planning/mps-master-production-scheduling/job-order-creation).

**Isključi negativnu zalihu**: ako je aktivirana, ova zastavica omogućuje isključivanje artikala s negativnom zalihom iz izračuna.

<details>
<summary>Sljedeća polja koriste se isključivo u postupku [F.C.S. raspoređivanje](/docs/planning/ms-master-scheduling/fcs-scheduling)</summary>

**Količina za izdavanje**: izdavanje iz skladišta provodi se tek kada je raspoloživa količina barem jednaka ovoj vrijednosti, osim ako je količina koju treba izdati manja od zadane količine za izdavanje.

Primjerice, ako je vrijednost 50, izdavanje se provodi samo ako je u skladištu raspoloživo najmanje 50 komada ili ako je količina koju treba izdati manja od 50.

Ako je vrijednost 0, nema preklapanja između naloga koji osigurava artikl i naloga koji ga zahtijeva. Izdavanje se provodi tek kada je cijela potrebna količina raspoloživa u skladištu.

Vrijednost 0 koristi se kada se želi zabraniti preklapanje. Vrijeme isporuke tada se produljuje, ali se smanjuje vjerojatnost da se ne podudare rokovi naloga koji zahtijeva artikl i naloga koji ga osigurava. Tako se dobiva plan proizvodnje koji se vjerojatnije može izvršiti bez izmjena.

Vrijednost 1 koristi se za maksimalno preklapanje. Time se postižu što kraći rokovi isporuke, ali se smanjuje vjerojatnost da će se plan izvršiti točno onako kako je simuliran te povećava vjerojatnost slabijeg iskorištenja proizvodnih resursa.

**Količina za prijenos u skladište**: prijenos u skladište provodi se tek kada je raspoloživa količina veća ili jednaka ovoj vrijednosti, osim ako je preostala količina koju treba uskladištiti manja od zadane vrijednosti.

Ako je vrijednost ovog polja 0, nalog koji osigurava artikl prenijet će cijelu količinu u skladište odjednom. Djelomični prijenosi nisu dopušteni. Za nabavne naloge i naloge za kooperaciju ova se vrijednost uzima kao 0, neovisno o stvarno postavljenoj vrijednosti.

Primjerice, razmotrimo proizvodni nalog za 100 komada.

Ako je količina za prijenos u skladište 0, svih 100 komada prenijet će se u skladište odjednom, kada nalog dosegne 100 % dovršenosti. Svih 100 komada bit će raspoloživo tek nakon završetka naloga, bez preklapanja proizvodnih naloga.

Ako je količina za prijenos u skladište 25, prijenos se neće provesti dok proizvedena, a još neuskladištena količina ne dosegne 25 komada. Ako je ukupna količina naloga 60 komada, provest će se dva prijenosa po 25 komada i jedan prijenos od 10 komada. Time se omogućuje djelomično preklapanje proizvodnih naloga.

Ako je količina za prijenos u skladište 1, ostvaruje se najveće moguće preklapanje jer se svaki proizvedeni komad odmah prenosi u skladište i postaje raspoloživ za naloge koji ga zahtijevaju. To je prikladno kada je količina koju treba proizvesti mala. U suprotnom bi se provodio velik broj skladišnih prijenosa.

</details>

**Upravljanje prognozama**: padajući izbornik omogućuje određivanje načina generiranja proizvodnih naloga putem postupka [Generiranje proizvodnih naloga](/docs/planning/mps-master-production-scheduling/job-order-creation) kada se nalozi generiraju na temelju prognoza. Dostupne su sljedeće mogućnosti:
- Veća vrijednost između narudžbi kupaca i prognoza prodaje
- Uvijek prognoza prodaje
- Manja vrijednost između narudžbi kupaca i prognoza prodaje
- Uvijek narudžbe kupaca
- Zbroj narudžbi kupaca i prognoza prodaje

Preporučuje se odabrati opciju „Veća vrijednost između narudžbi kupaca i prognoza prodaje”. Primjerice, ako je na temelju prognoze planirana proizvodnja 100 komada određenog materijala, a do datuma početka proizvodnje zaprimljene su narudžbe kupaca za 200 komada, sustav će izraditi nalog za 200 komada, a ne zasebno nalog za 100 komada prema prognozi i nalog za 200 komada prema narudžbama. Razlog je taj što je početna prognoza već obuhvaćena stvarnim narudžbama, koje su je premašile.

**Parametri nabave/kooperacije**: ovaj je odjeljak aktivan ako je politika upravljanja artiklom postavljena na „Nabava” ili „Kooperacija”. Ovdje je moguće pregledati i po potrebi izmijeniti podatke unesene na kartici *Preferirani dobavljači* u *šifarniku artikala*: vrijeme otpreme, vrijeme nabave, ukupno vrijeme nabave, minimalnu količinu za nabavu i višekratnike minimalne količine.

## 2. Skladišta

Na ovoj kartici korisnik može odrediti da se pri skladišnim kretanjima artikla putem postupaka povezanih s proizvodnjom ne primjenjuju postavke iz *Parametara proizvodnih naloga*, već posebne postavke definirane za sam artikl.

*Primjer*: ako su u padajućim izbornicima *Skladište* i *Predložak* u odjeljku **Sirovine** postavljeni skladište i predložak koji se razlikuju od onih definiranih u istom odjeljku u [Parametrima proizvodnih naloga](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro), to znači da se materijal prilikom izdavanja za proizvodnju putem liste za preuzimanje, puštanja proizvodnih naloga ili evidentiranja proizvodnje mora izdavati iz ovdje definiranog skladišta i prema ovdje postavljenom predlošku.

U tom slučaju ne primjenjuju se vrijednosti iz *Parametara proizvodnih naloga*, koje vrijede općenito za sve artikle, osim za one za koje je korisnik na ovoj kartici *Skladišta* u *Parametrima MRP-a* postavio drukčije vrijednosti.

Na ovoj kartici moguće je postaviti skladišta za **Sirovine**, **Poluproizvode**, **Gotove proizvode** i eventualni **Otpad**, zajedno s odgovarajućim predlošcima ulaza i izlaza.

Za postavljanje pojedinog skladišta potrebno je u odgovarajućim padajućim izbornicima odabrati skladište i predloške, prethodno definirane u pripadajućim tablicama *Skladišta* i *Predlošci*.

Dostupna su i **W.I.P. skladišta**. Ona se aktiviraju odabirom opcije *W.I.P.*, nakon čega se u odgovarajućim padajućim izbornicima odabiru skladišta i predlošci, na isti način kao i za opća skladišta.

:::note VAŽNO
Ista skladišta prikazana su na jednak način i u [Parametrima proizvodnih naloga](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro), gdje su detaljno objašnjene sve logike njihove primjene.
:::

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu: [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).