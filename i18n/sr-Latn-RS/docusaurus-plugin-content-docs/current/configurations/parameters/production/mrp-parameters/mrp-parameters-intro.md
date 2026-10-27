---
title: MRP parametri
sidebar_position: 2
---

Za izmenu MRP parametara:

1. Otvorite obrazac putem menija **Parametri > Proizvodnja > MRP parametri**.
2. Izaberite artikal i dvaput kliknite na red ili upotrebite dugme **Izmeni parametre**.

MRP parametre sistem automatski kreira prilikom čuvanja novog artikla unetog u šifarnik, pri čemu se dodeljuju podrazumevane vrednosti koje operater može ručno da menja pojedinačno ili grupno pomoću dugmeta **Zamena parametara**, koje se nalazi u obrascu za filtriranje.

## 1. Opšti podaci

Parametri koje je moguće definisati na ovoj kartici su sledeći:

**Politika upravljanja**: ovaj padajući meni omogućava korisniku da izabere način upravljanja artiklom:

> **Prognoziranje**: u ovom slučaju artiklom se upravlja generisanjem prognoza prodaje ili unosom glavnog plana proizvodnje. Ova politika upravljanja uzima se u obzir i u postupku [Generisanje proizvodnih naloga](/docs/planning/mps-master-production-scheduling/job-order-creation) i u postupku [MRP](/docs/planning/ms-master-scheduling/mrp).

> **Zaliha**: u ovom slučaju artiklom se upravlja na osnovu podataka o tački ponovnog naručivanja i minimalnoj zalihi, unetih na kartici [Nabavka](/docs/erp-home/registers/items/create-new-item) u šifarniku artikala. Ova opcija namenjena je artiklima kod kojih potražnja stiže prekasno u odnosu na vreme potrebno za nabavku ili proizvodnju, zbog čega je njima potrebno upravljati na osnovu zaliha. Na taj način omogućava se nabavka pre pojave stvarne potražnje. I u ovom slučaju proizvodni nalog za artikal generiše se putem postupka [Generisanje proizvodnih naloga](/docs/planning/mps-master-production-scheduling/job-order-creation) ili postupka [MRP](/docs/planning/ms-master-scheduling/mrp).

> **Nalog**: koristi se za artikle koji se proizvode po nalogu kako bi se obezbedila sledljivost tokom svih faza proizvodnje. Ova politika upravljanja primenjuje se tokom postupka [Generisanje proizvodnih naloga](/docs/planning/mps-master-production-scheduling/job-order-creation), korišćenjem kartice Narudžbine kupaca, putem koje se generišu proizvodni nalozi. Artiklom se može upravljati i putem postupka [MRP](/docs/planning/ms-master-scheduling/mrp), ali samo ako je to izričito određeno aktiviranjem zastavice **Uključi artikal u obračun MRP-a**, koja se nalazi na kartici Parametri ovog obrasca.

> Primer: generisana je narudžbina kupca za 6 komada artikla kojim se upravlja prema nalogu, a zatim još jedna narudžbina za 8 komada istog artikla. Da bi se pratila proizvodnja i veza između narudžbina kupaca i proizvodnih naloga, kreiraće se dva zasebna proizvodna naloga, svaki povezan sa odgovarajućom narudžbinom kupca.

> **Potreba**: u ovom slučaju reč je o artiklima kod kojih možda nije potrebno obezbediti sledljivost. Zato je moguće objediniti više potreba iz različitih izvora, pri čemu se gubi veza sa pojedinačnim nalogom. Takav artikal može se uzeti u obzir prilikom korišćenja postupka [MRP](/docs/planning/ms-master-scheduling/mrp), umesto postupka **Opšte planiranje**.

> Primer: u situaciji sličnoj prethodnoj, sa jednom narudžbinom kupca za 6 komada i drugom za 8 komada istog artikla, moguće je generisati jedan zbirni proizvodni nalog za 14 komada. Pritom se gubi veza između pojedinačnih narudžbina i proizvodnih naloga, a time i sledljivost. Alternativno, artiklom se može upravljati bez objedinjavanja potreba.

:::note[NAPOMENA]
Sledeće opcije za DDMRP bafere i toleranciju vremena kupca dostupne su samo uz DDMRP.
:::

> **Dinamički DDMRP baferi**: omogućavaju promenu tri karakteristične zone (zelene, žute i crvene) tokom vremena, a time i promenu prosečnog nivoa zaliha.

> **Fiksni DDMRP baferi**: koriste fiksne vrednosti zona, a time i fiksni prosečni nivo zaliha. Primenjuju se u slučajevima ograničenog prostora, investicionih ograničenja, bezbednosnih ograničenja i slično.

> **Min-max DDMRP baferi**: koriste samo crvenu i zelenu zonu.

>> **Tolerancija vremena kupca**: vreme isporuke izraženo u danima koje kupci generalno smatraju prihvatljivim. Ova opcija aktivira se tek nakon izbora vrste DDMRP bafera.

**Vrsta nabavke**: ovaj padajući meni služi za određivanje vrste planiranih naloga koji se kreiraju. Korisnik može da izabere jedan od sledećih načina nabavke artikla:

> **Nabavka**: u ovom slučaju eksplozija potreba kreira planirani nabavni nalog za predmetni artikal.

> **Proizvodnja**: u ovom slučaju eksplozija potreba kreira planirani proizvodni nalog za predmetni artikal.

> **Kooperacija**: u ovom slučaju eksplozija potreba kreira planirani nalog za kooperaciju za predmetni artikal.

**Vrsta izdavanja**: ovaj padajući meni omogućava korisniku da izabere način izdavanja materijala za artikal, odnosno način na koji se materijal izdaje u proizvodnom pogonu. Dostupne su sledeće mogućnosti:

> **Automatski**: artikal se izdaje prilikom puštanja proizvodnog naloga u izvršenje, odnosno pri promeni statusa naloga iz „Pokrenut” u „U izvršenju”.

> **Sa listom**: artikal se izdaje putem liste za preuzimanje materijala, koja se ručno kreira u odeljku Proizvodnja > Lista za preuzimanje materijala. U tom slučaju trenutak izdavanja materijala određuje se ručno.

> **Ručno**: artikal se izdaje tek prilikom evidentiranja proizvodnje neposredno nadređenog nivoa sastavnice. Izdavanje se obavlja istovremeno sa evidentiranjem proizvodne faze sa kojom je materijal povezan ili, ako nije povezan ni sa jednom fazom, prilikom evidentiranja poslednje proizvodne faze koja omogućava skladišno kretanje.

> Drugim rečima, kada se evidentira proizvodnja nadređenog artikla, predlažu se sve količine podređenih artikala koje je trebalo utrošiti za njegovu proizvodnju. Potvrdom tih količina istovremeno se obavlja i njihovo izdavanje iz skladišta.

> Važno je napomenuti da u slučaju korišćenja WIP skladišta ručno izdavanje podrazumeva prenos predmetnog materijala iz skladišta sirovina u WIP skladište tokom puštanja proizvodnog naloga u izvršenje, a zatim njegovo izdavanje iz WIP skladišta prilikom evidentiranja proizvodnje. Objašnjenje WIP skladišta nalazi se u zasebnom članku o kartici *Parametri MRP-a*, u odeljku *Skladišta*.

Osim toga, dostupna su sledeća polja:

**Prioritet nabavke:** ovo polje omogućava korisniku da postavi prioritet koji će biti dodeljen artiklu. Taj prioritet koristiće se prilikom kreiranja *zahteva za nabavku* tokom postupka [Puštanje planiranih naloga u izvršenje](/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders/), ako je aktivirana zastavica **Svojstva nabavke iz MRP parametara artikla**.

**Generisanje proizvodnih naloga**: ako je aktivirano, označava da redovi narudžbina kupaca koji sadrže ovaj artikal moraju biti prikazani u filteru na kartici *Narudžbine kupaca* u postupku *Generisanje proizvodnih naloga*. Ova opcija se uzima u obzir i ako je aktivirana opcija *Automatsko generisanje proizvodnog toka*, koja se nalazi u [MS parametrima](/docs/configurations/parameters/production/mps-parameters/). Ako zastavica nije aktivirana, artikal se neće uzimati u obzir ni u jednom od ova dva postupka.

**Isključi iz planiranja**: ako je aktivirano,

**Procenat otpada**: omogućava korisniku da postavi fiksni procenat otpada za artikal. Taj procenat se uvek primenjuje kada se artikal uključuje u sastavnicu.

*Primer*: ako je uobičajeni otpad pri proizvodnji određenog materijala 10 %, a planirana proizvodna količina iznosi 100 komada, planer ili MRP prilikom kreiranja planiranog naloga neće predložiti 100 komada, već 100 komada uvećanih za 10 %.

**Uzmi u obzir u kooperaciji**: ako je aktivirano, omogućava automatsko uključivanje artikla prilikom popunjavanja kartica *Materijali za isporuku* i *Materijali za utrošak* u *Nalogu za kooperaciju*.

Slede niz zastavica koje se koriste tokom obrade postupka MRP:

**Uzmi u obzir količine prema ekonomičnoj količini narudžbine**: ako je aktivirano, za artikal se uzima u obzir ekonomična količina, odnosno minimalna količina proizvodnje ili nabavke. Ekonomična količina proizvodnje podešava se u odeljku Parametri proizvodnje unutar ovog obrasca, a ekonomična količina nabavke u odeljku Parametri nabavke, koji će biti detaljnije opisani u nastavku.

**Uzmi u obzir višekratnike ekonomične količine narudžbine**: ako je aktivirano, za artikal se uzimaju u obzir višekratnici ekonomične količine proizvodnje ili nabavke podešeni u odgovarajućim odeljcima ovog obrasca.

**Dopuna minimalne zalihe artikla**: ako je aktivirano, za artikal se dopunjava minimalna zaliha definisana u njegovom šifarniku, na kartici *Nabavka*.

**Dopuna tačke ponovnog naručivanja artikla**: ako je aktivirano, za artikal se dopunjava tačka ponovnog naručivanja definisana u njegovom šifarniku, na kartici *Nabavka*.

**Uzmi u obzir indeks pokrivenosti**: ako je aktivirano, za artikal se uzima u obzir indeks pokrivenosti definisan u njegovom šifarniku, na kartici *Nabavka*. Indeks pokrivenosti izražava se u nedeljama. Njegovim podešavanjem određuje se da sistem mora da pokrije potrebe za broj nedelja naveden u ovom polju.

**Uzmi u obzir i alternativne materijale**: ako je aktivirano, u slučaju nedostupnosti artikla uzimaju se u obzir i njegove alternative definisane u sastavnici, na kartici *Alternative*.

**Uzmi u obzir alternativne faze**: ako je aktivirano, za artikle koji se proizvode uzimaju se u obzir alternativne faze definisane u tehnološkom postupku artikla.

U polju *Tolerancija opterećenja radnog centra* moguće je postaviti procenat koji određuje kada se radni centar smatra popunjenim. Na primer, ako je podešeno 90 %, program će uzeti u obzir definisane alternative za taj radni centar kada njegovo opterećenje dostigne 90 %.

U polju *Tolerancija proizvodnje* moguće je procentualno odrediti koliko više artikala sme da se proizvede u odnosu na količinu predviđenu proizvodnim nalogom. Isto se može podesiti i za nabavku u polju *Tolerancija nabavke*.

**Blokada proizvodnje**: ako je aktivirano, prilikom obrade proizvodnog naloga za ovaj artikal u postupku Opšte planiranje prikazaće se poruka: „Nije moguće kreirati raspored, artikal XXXX blokiran je za proizvodnju”. U tom slučaju planiranje se zaustavlja, a korisnik mora ponovo da ga pokrene, isključujući proizvodni nalog koji se odnosi na taj artikal.

**Provera potreba uz generisanje planiranih naloga**: ako je aktivirano, MRP kreira planirane naloge, pod uslovom da je aktivirana i istoimena zastavica na kartici Parametri u postupku [MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro). Ako zastavica nije aktivirana, MRP će samo predložiti planirane naloge, ali ih neće kreirati.

**Referentna sastavnica**: u ovom odeljku podešava se artikal, odnosno varijanta čija će se sastavnica koristiti kao referenca za planiranje eventualnog proizvodnog naloga za artikal, odnosno varijantu na koju se odnose MRP parametri koji se trenutno uređuju. Ako se referentna sastavnica razlikuje od šifre artikla navedene u zaglavlju MRP parametara, ovde je moguće uneti odgovarajući artikal, uključujući **klasu**, **šifru** i **opis**, kao i eventualnu **varijantu**. **Jedinica mere** popunjava se automatski.

**Parametri proizvodnje**: ovaj odeljak je aktivan ako je politika upravljanja artiklom postavljena na *Proizvodnja*. U njemu je moguće podesiti sledeća polja:

> **Lead Time**: korisnici koji ne koriste tehnološke postupke u ovom polju mogu podesiti vreme proizvodnje predmetnog artikla. Vreme se izražava u radnim danima, izračunava se prema fabričkom kalendaru i ne menja se u zavisnosti od količine koju treba proizvesti.

> **Fiksni Lead Time**: ovo polje omogućava korišćenje fiksnog vremena isporuke umesto vremena izračunatog na osnovu tehnoloških postupaka artikla. U tom slučaju sistem neće uzimati u obzir Lead Time definisan u tehnološkom postupku, već vrednost unetu u ovo polje, izraženu u radnim danima. Ovaj način rada aktivira se označavanjem odgovarajuće zastavice.

> Ako je zastavica aktivirana, izračunato vreme dobija se sabiranjem vrednosti **Fiksni Lead Time** (unete pored zastavice) i vrednosti **Lead Time analize** na kartici [Kvalitet](/docs/erp-home/registers/items/create-new-item) u *šifarniku artikala*. U tom slučaju vremena proizvodnih faza ne uzimaju se u obzir, a datum početka ponovo se izračunava prema *fabričkom kalendaru*.

> Ako zastavica nije aktivirana, datum početka ponovo se izračunava uzimajući u obzir proizvodne faze, alternativne faze i *kalendar radnih centara*.

> **Ekonomična količina narudžbine**: u ovom polju korisnik može podesiti ekonomičnu količinu proizvodnje artikla, koju će uzimati u obzir postupci [Generisanje proizvodnih naloga](/docs/planning/mps-master-production-scheduling/job-order-creation) i Opšte planiranje, ali samo ako je aktivirana prethodno opisana zastavica „Uzmi u obzir količine prema ekonomičnoj količini narudžbine”.

> **Granični broj dana planiranja**: tokom izrade rasporeda/planiranja uzimaju se u obzir samo nalozi, rezervacije i potrebe unutar zadatog perioda. Sve što prelazi taj period neće se uzimati u obzir.

> **Višekratnici**: u ovom polju korisnik može podesiti višekratnike ekonomične količine proizvodnje artikla, koje će uzimati u obzir postupci [Generisanje proizvodnih naloga](/docs/planning/mps-master-production-scheduling/job-order-creation) i Opšte planiranje, ali samo ako je aktivirana prethodno opisana zastavica „Uzmi u obzir višekratnike ekonomične količine narudžbine”.

> **Dani grupisanja**: u ovom polju korisnik određuje period unutar kojeg postupak grupiše eventualne planirane naloge. Na primer, ako je za određeni artikal podešena vrednost 5, grupisaće se svi planirani nalozi čiji se datumi nalaze unutar perioda od 5 radnih dana, prema fabričkom kalendaru.

> **Dani tolerancije za ranije rokove**, **Dani tolerancije za kasnije rokove**: predstavljaju broj dana za koje MRP toleriše pomeranje datuma dokumenta unapred ili unazad, bez predlaganja stvarnog pomeranja. Umesto toga, koristi eventualni višak raspoloživosti bez kreiranja dodatnih predloga.

> Na primer, ako su za određeni artikal podešene vrednosti Dani tolerancije za ranije rokove = 2 i Dani tolerancije za kasnije rokove = 5, a MRP algoritam utvrdi potrebu za ranijim ili kasnijim datumom dokumenta, korisniku se neće predložiti pomeranje ako se odgovarajući ulaz nalazi unutar tolerancije od 2 dana pre traženog datuma ili 5 dana nakon njega. Korisnik će biti obavešten samo da je potreba zadovoljena odgovarajućim dokumentom.

> Drugim rečima, kod parametra *Dani tolerancije za ranije rokove* MRP proverava budući period, u trajanju navedenog broja dana, kako bi utvrdio da li postoje ulazi koji mogu pokriti ranije potrebe. Kod parametra *Dani tolerancije za kasnije rokove* MRP proverava prethodni period, u trajanju navedenog broja dana, kako bi utvrdio da li postoje ulazi koji mogu pokriti kasnije potrebe.

> **Tolerancija u danima/procentu vremena isporuke (Lead Time)**: određuje period unutar kojeg je dozvoljeno pomeranje datuma unapred ili unazad. Ako se taj period prekorači, MRP predlaže brisanje dokumenta. Ovaj parametar takođe određuje koliko dugo se može uzimati u obzir eventualni višak artikla. Može se izraziti u danima ili kao procenat vremena isporuke (Lead Time).

> Na primer, ako je za neki artikal definisana tolerancija od 90 dana, datumi dokumenata povezanih sa tim artiklom mogu se pomeriti najviše 90 dana unapred ili unazad. Ako potrebna promena prelazi tu granicu, MRP će predložiti brisanje postojećeg dokumenta i kreiranje novog na datum za koji je utvrđena potreba. Osim toga, eventualna raspoloživost viška tog artikla može se uzeti u obzir najviše tokom 90 dana.

> Ako je ovaj parametar aktivan, MRP menja datume sledećih vrsta dokumenata:
> - planirani nalozi, ako nisu fiksni;
> - proizvodni nalozi, ali samo oni za koje još nisu evidentirane proizvodne aktivnosti;
> - zahtevi za nabavku;
> - nalozi za kooperaciju, samo ako još nije aktivirana zastavica „Već ispisano”;
> - narudžbine dobavljačima, ako još nisu potvrđene.
>
> Datumi se mogu pomeriti unapred ili unazad za najviše navedenu vrednost.

> **Obavezno ručno evidentiranje materijala**: koristi se u sistemu Fluentis MES. Ako je ova zastavica aktivirana zajedno sa zastavicom **Obavezno evidentiranje količine materijala**, koja se nalazi u tabeli [Proizvodni resursi](/docs/production/mes/production-resources) sistema MES, artikal će se na kartici *Materijali* u sistemu Fluentis MES predlagati sa količinom nula. Korisnik će zato morati ručno da unese vrednost pre nastavka rada.

**Čitanje sastavnica/tehnoloških postupaka**: u ovom odeljku korisnik može da podesi **verziju** sastavnice i tehnološkog postupka koju MRP treba da uzme u obzir za predmetni artikal, kao i **Broj ciklusa**, definisan kao podrazumevani ciklus za artikal.

**Uzmi u obzir raspoloživost iz sledećih izvora**: u ovom odeljku korisnik određuje iz kojih će poslovnih oblasti dokumenti biti uzeti u obzir tokom obrade MRP-a. Dostupne oblasti su:
- **Nabavka**
- **Prodaja**
- **Skladište** – moguće je odrediti da li će se uzimati u obzir zalihe lotova čiji status nije raspoloživ, aktiviranjem odgovarajuće zastavice;
- **Kooperacija**
- **Planiranje** – proizvodni nalozi, planirani nabavni nalozi, nalozi za kooperaciju i planirani proizvodni nalozi;
- **Pokrenuta proizvodnja** – proizvodni nalozi.

**Uzmi u obzir lotove sa statusom neraspoloživ**: kao što je objašnjeno na kartici [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-item) u šifarniku artikala, lotovi imaju status (raspoloživ, neraspoloživ, u karantinu itd.). Ako je ova zastavica aktivirana, sistem će uzimati u obzir i lotove sa statusom neraspoloživ. Zastavica se može uređivati samo ako je izabrano uzimanje u obzir raspoloživosti iz skladišta.

**Uključi artikal u obračun MRP-a**: ova zastavica može se uređivati samo ako je politika upravljanja postavljena na „Nalog”. Aktiviranjem ove zastavice omogućava se da MRP analizira i artikle kojima se upravlja prema nalogu, a koje podrazumevano obrađuje postupak [Generisanje proizvodnih naloga](/docs/planning/mps-master-production-scheduling/job-order-creation).

**Isključi negativne zalihe**: ako je aktivirana, ova zastavica omogućava isključivanje artikala sa negativnim zalihama iz obračuna.

<details>
<summary>Sledeća polja koriste se isključivo u postupku [F.C.S. raspoređivanje](/docs/planning/ms-master-scheduling/fcs-scheduling)</summary>

**Količina za izdavanje**: izdavanje iz skladišta obavlja se tek kada je raspoloživa količina najmanje jednaka ovoj vrednosti, osim ako je količina koju treba izdati manja od zadate količine za izdavanje.

Na primer, ako je vrednost 50, izdavanje se obavlja samo ako je u skladištu raspoloživo najmanje 50 komada ili ako je količina koju treba izdati manja od 50.

Ako je vrednost 0, nema preklapanja između naloga koji obezbeđuje artikal i naloga koji ga zahteva. Izdavanje se obavlja tek kada je cela potrebna količina raspoloživa u skladištu.

Vrednost 0 koristi se kada se želi zabraniti preklapanje. Vreme isporuke se tada produžava, ali se smanjuje verovatnoća neusklađenosti rokova naloga koji zahteva artikal i naloga koji ga obezbeđuje. Na taj način dobija se plan proizvodnje koji je verovatnije moguće izvršiti bez izmena.

Vrednost 1 koristi se za maksimalno preklapanje. Time se postižu što kraći rokovi isporuke, ali se smanjuje verovatnoća da će plan biti izvršen tačno onako kako je simuliran i povećava verovatnoća slabijeg iskorišćenja proizvodnih resursa.

**Količina za prenos u skladište**: prenos u skladište obavlja se tek kada je raspoloživa količina veća ili jednaka ovoj vrednosti, osim ako je preostala količina koju treba uskladištiti manja od zadate vrednosti.

Ako je vrednost ovog polja 0, nalog koji obezbeđuje artikal preneće celu količinu u skladište odjednom. Delimični prenosi nisu dozvoljeni. Za nabavne naloge i naloge za kooperaciju ova vrednost uzima se kao 0, bez obzira na stvarno podešenu vrednost.

Na primer, razmotrimo proizvodni nalog za 100 komada.

Ako je količina za prenos u skladište 0, svih 100 komada biće preneto u skladište odjednom, kada nalog dostigne 100 % dovršenosti. Svih 100 komada biće raspoloživo tek nakon završetka naloga, bez preklapanja proizvodnih naloga.

Ako je količina za prenos u skladište 25, prenos se neće obaviti dok proizvedena, a još neuskladištena količina ne dostigne 25 komada. Ako je ukupna količina naloga 60 komada, obaviće se dva prenosa po 25 komada i jedan prenos od 10 komada. Time se omogućava delimično preklapanje proizvodnih naloga.

Ako je količina za prenos u skladište 1, ostvaruje se najveće moguće preklapanje jer se svaki proizvedeni komad odmah prenosi u skladište i postaje raspoloživ za naloge koji ga zahtevaju. To je pogodno kada je količina koju treba proizvesti mala. U suprotnom bi se obavljao veliki broj skladišnih prenosa.

</details>

**Upravljanje prognozama**: padajući meni omogućava određivanje načina generisanja proizvodnih naloga putem postupka [Generisanje proizvodnih naloga](/docs/planning/mps-master-production-scheduling/job-order-creation) kada se nalozi generišu na osnovu prognoza. Dostupne su sledeće mogućnosti:
- Veća vrednost između narudžbina kupaca i prognoza prodaje
- Uvek prognoza prodaje
- Manja vrednost između narudžbina kupaca i prognoza prodaje
- Uvek narudžbine kupaca
- Zbir narudžbina kupaca i prognoza prodaje

Preporučuje se izabrati opciju „Veća vrednost između narudžbina kupaca i prognoza prodaje”. Na primer, ako je na osnovu prognoze planirana proizvodnja 100 komada određenog materijala, a do datuma početka proizvodnje primljene su narudžbine kupaca za 200 komada, sistem će kreirati nalog za 200 komada, a ne zaseban nalog za 100 komada na osnovu prognoze i nalog za 200 komada na osnovu narudžbina. Razlog je taj što je početna prognoza već obuhvaćena stvarnim narudžbinama, koje su je premašile.

**Parametri nabavke/kooperacije**: ovaj odeljak je aktivan ako je politika upravljanja artiklom postavljena na „Nabavka” ili „Kooperacija”. Ovde je moguće pregledati i, po potrebi, izmeniti podatke unete na kartici *Preferirani dobavljači* u *šifarniku artikala*: vreme otpreme, vreme nabavke, ukupno vreme nabavke, minimalnu količinu za nabavku i višekratnike minimalne količine.

## 2. Skladišta

Na ovoj kartici korisnik može da odredi da se prilikom skladišnih kretanja artikla putem postupaka povezanih sa proizvodnjom ne primenjuju podešavanja iz *Parametara proizvodnih naloga*, već posebna podešavanja definisana za sam artikal.

*Primer*: ako su u padajućim menijima *Skladište* i *Šablon* u odeljku **Sirovine** podešeni skladište i šablon koji se razlikuju od onih definisanih u istom odeljku u [Parametrima proizvodnih naloga](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro), to znači da se materijal prilikom izdavanja za proizvodnju putem liste za preuzimanje, puštanja proizvodnih naloga ili evidentiranja proizvodnje mora izdavati iz ovde definisanog skladišta i prema ovde podešenom šablonu.

U tom slučaju ne primenjuju se vrednosti iz *Parametara proizvodnih naloga*, koje važe uopšteno za sve artikle, osim za one za koje je korisnik na ovoj kartici *Skladišta* u *Parametrima MRP-a* podesio drugačije vrednosti.

Na ovoj kartici moguće je podesiti skladišta za **Sirovine**, **Poluproizvode**, **Gotove proizvode** i eventualni **Otpad**, zajedno sa odgovarajućim šablonima ulaza i izlaza.

Da biste podesili pojedinačno skladište, potrebno je u odgovarajućim padajućim menijima izabrati skladište i šablone, prethodno definisane u odgovarajućim tabelama *Skladišta* i *Šabloni*.

Dostupna su i **W.I.P. skladišta**. Ona se aktiviraju izborom opcije *W.I.P.*, nakon čega se u odgovarajućim padajućim menijima biraju skladišta i šabloni, na isti način kao i za opšta skladišta.

:::note[VAŽNO]
Ista skladišta prikazana su na jednak način i u [Parametrima proizvodnih naloga](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro), gde su detaljno objašnjeni svi načini njihove primene.
:::

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću stranicu: [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).