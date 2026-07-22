---
title: Generalno planiranje
sidebar_position: 2
---

:::important Čemu služi
Generalno planiranje u Fluentisu proces je koji radi pod pretpostavkom beskonačnog kapaciteta, što znači da planiranje ne uzima u obzir fizička ograničenja radnih centara ili raspoloživih resursa. Ovakav pristup omogućuje planiranje proizvodnih aktivnosti uz određenu fleksibilnost.

Planiranje se može izvršavati prema dvije različite logike: **što ranije** i **što kasnije**. Logika **što ranije** nastoji započeti aktivnosti čim je to moguće, dok logika **što kasnije** planira aktivnosti što kasnije, bez ugrožavanja rokova. Ovi pristupi omogućuju optimiziranu analizu proizvodnih potreba te upravljanje vremenima izrade u skladu s poslovnim prioritetima i operativnim zahtjevima.
:::

Forma se sastoji od četiri kartice: **Radni nalog**, **Opći parametri**, **Praćenje** i **Povijest**.

## Radni nalog

Kartica **Radni nalog** sastoji se od područja za filtriranje koje omogućuje odabir naloga koji će potom biti prikazani u tablici rezultata.

Uz filtre za artikl, godinu te broj proizvodnog naloga, dostupan je i filtar za **Vrstu naloga**, kojim se mogu prikazati monoproizvodni, multiproizvodni ili svi proizvodni nalozi.

Dostupan je i filtar za **Mjesto proizvodnje**, kako bi se moglo planirati samo naloge određenog proizvodnog pogona, kao i skup oznaka: **U odgodi**, **Isteklo**, **Pokrenuto** i **Izvršni**, koje omogućuju odabir prikaza naloga koji kasne u odnosu na planirani datum ili su istekli. Oznake **Pokrenuti** i **Izvršni** postaju dostupne samo ako je u **Općim parametrima planiranja** aktivirana opcija **Planiranje pokrenutih ili izvršnih naloga**; u suprotnom ostaju neaktivne.

Ako opcija **Planiranje pokrenutih ili izvršnih naloga** nije aktivna, u tablici će biti prikazani samo nalozi u statusu **Neobrađen** ili **Planiran**.

Odabirom jednog ili više naloga, ovisno o parametrima planiranja postavljenima na odgovarajućoj kartici, putem gumba **Opće planiranje** pokreće se postupak generiranja planiranih naloga triju vrsta: proizvodnje, nabave i kooperacije. Pri tome se koriste podaci iz proizvodnih naloga te odgovarajućih sastavnica i tehnoloških postupaka.

Nakon generiranja, planirani nalozi mogu se pregledati u formi [Pretraga planiranih naloga](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders), koja se može otvoriti i putem gumba **Otvori pretragu planiranih naloga**.

Ako je prije otvaranja pretrage odabran određeni proizvodni nalog u tablici rezultata, forma za planirane naloge otvorit će se već filtrirana za taj nalog.

### Specifični gumbi

> **Generalno planiranje**: omogućuje sustavu planiranje odabranih proizvodnih naloga;

> **Otvori pretragu planiranih narudžbi (naloga)**: otvara ekran [Pretraga planiranih naloga](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders). Ako je prije pritiska gumba odabran redak proizvodnog naloga, pretraga će se otvoriti već filtrirana za taj nalog;

> **Promijeni procijenjeni datum završetka predloženim datumom**: ažurira *planirani datum završetka* pomoću *predloženog datuma* izračunatog tijekom planiranja kada je aktivirana opcija **Provjeri dokumente u kašnjenju pomoću ATP-a**;

> **Redoslijed naloga**: omogućuje pristup redoslijedu proizvodnih naloga, gdje ih je moguće pregledavati prema dodijeljenom redoslijedu, uključujući i grafički prikaz.

### Specifični filtri

**Tip dokumenta**: omogućuje prikaz monoproizvodnih, multiproizvodnih ili svih proizvodnih naloga;

**Mjesto proizvodnje**: omogućuje prikaz naloga prema proizvodnom pogonu kojem pripadaju;

**U odgodi / Istekli / Pokrenuti / Izvršni**: ove oznake omogućuju prikaz naloga koji kasne ili su istekli. Oznake **Pokrenuti** i **Izvršni** dostupne su samo ako je u [Općim parametrima planiranja](/docs/planning/ms-master-scheduling/general-schedule) aktivirana opcija **Planiranje pokrenutih ili izvršnih naloga**. U suprotnom, na kartici **Nalozi** mogu se prikazivati samo nalozi u statusu **Neobrađen** ili **Planiran**. Budući da nalozi mogu prijeći u status **Pokrenut** i/ili **Izvršan**, ako navedena opcija nije aktivirana, takvi nalozi neće biti prikazani na ovoj kartici.

### Specifična polja u tablici rezultata

**Predloženi datum**: kao što je objašnjeno u članku o općim parametrima planiranja, aktivacijom oznake [Provjeri dokumente u kašnjenju pomoću ATP-a](/docs/planning/ms-master-scheduling/general-schedule), postupak planiranja izvršava dodatnu provjeru. Ako se pokaže da je barem jedan od generiranih i planiranih naloga u kašnjenju u odnosu na planirani datum, sustav će obrisati sve prethodno generirane naloge te ponovno pokrenuti izračun počevši od **MS početnog datuma** (koji se definira u parametrima i koristi se samo kada je aktivirana opcija **Provjera dokumenata u kašnjenju pomoću ATP-a**) koristeći logiku *što ranije*. Novi predloženi datum za proizvodne naloge prikazat će se u polju **Predloženi datum** u tablici rezultata.

### Postupak općeg planiranja

Nakon odabira proizvodnih naloga koje je potrebno planirati, aktivira se gumb **Generalno planiranje** u alatnoj traci forme. Klikom na taj gumb sustav pokreće planiranje odabranih proizvodnih naloga.

Za pregled svih izvršenih planiranja i pripadajućih generiranih proizvodnih naloga za pojedini proizvodni nalog potrebno je otvoriti karticu **Arhiva**.

:::danger Napomena
Ručno kreirani proizvodni nalozi uvijek se planiraju bez obzira na raspoloživost artikla koji se proizvodi.
:::

## Opći planiranja

:::note Napomena
Prije pokretanja planiranja potrebno je na ovoj kartici postaviti parametre koji će se koristiti tijekom planiranja.
:::

**Planiranje do**: određuje datum do kojeg će sustav uzimati u obzir unesene dokumente. Taj datum sustav izračunava kao današnji datum uvećan za broj mjeseci definiran u polju **Maksimalni broj mjeseci za planiranje** unutar [MS parametara](/docs/configurations/parameters/production/mps-parameters).

**Materijali / Resursi**: aktiviranjem oznake **Materijali** u generirane planirane naloge prenose se materijali koji će se trošiti. Aktiviranjem oznake **Resursi** u planirane naloge prenose se i proizvodne operacije. Ako jedna ili obje oznake nisu aktivne, planirani nalozi će se svejedno generirati, ali bez materijala odnosno bez proizvodnih operacija.

**Planirane narudžbe na**: pomoću tri oznake određuje se treba li sustav generirati sve tri vrste planiranih naloga: proizvodnju, nabavu i podizvođača. Na taj način navedeni nalozi ostaju povezani s proizvodnim nalogom. Primjerice, ako oznaka **Nabava** nije aktivna, ali je aktivna opcija **MRP obrada**, sustav će ipak generirati nabavne naloge, ali oni neće biti povezani s proizvodnim nalogom.

**Generiraj samo naloge planirane za razinu**: omogućuje definiranje razina sastavnice (1, 2, ...) za koje će se generirati planirani nalozi.

**Narudžbe dobavljača ili zahtjevi za nabavom i narudžbe kupaca**: ako u sustavu postoje dokumenti bez datuma potrebe ili raspoloživosti, moguće je odrediti da sustav koristi datum naveden u odgovarajućem polju ili da takve dokumente uopće ne uzima u obzir.

**Grupiranje planiranih naloga prema**: ako se radi po proizvodnim nalozima, potrebno je odabrati opciju **Bez grupiranja**. U suprotnom se može odabrati način grupiranja, ali će se tada izgubiti veza između planiranih naloga i proizvodnog naloga.

**Grupiranje na: posljednji/najranije**: omogućuje odabir grupiranja prema logici *što kasnije* ili *što ranije* (preporučena opcija). U sljedećem polju **Za razdoblje od dana** definira se broj dana unutar kojeg je dopušteno grupiranje.

**Razmotri količine prema ekonomskom lotu / Razmotri višekratnike ekonomskih lotova**: aktivacijom prve opcije tijekom planiranja uzima se u obzir ekonomična serija artikla. Time se aktivira i druga opcija kojom se određuje treba li uzimati u obzir i višekratnike ekonomične serije.

Za obrađivani artikl vrijednosti ekonomične serije i njezini višekratnici uzimaju se u obzir samo ako su odgovarajuće oznake aktivirane u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) artikla.

Ako je riječ o artiklu s vrstom opskrbe **Proizvodnja**, vrijednosti ekonomične serije i višekratnika preuzimaju se s kartice **Proizvodnja** u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters). Ako je riječ o artiklu s vrstom opskrbe **Nabava**, podaci se preuzimaju od zadanog dobavljača na kartici [Preferirani dobavljači](/docs/erp-home/registers/items/create-new-item) u šifarniku artikla.

**Kompaktni / razdvoji naloge**: određuje treba li između završetka proizvodnje naloga jedne razine i početka naloga sljedeće razine ostaviti jedan slobodan dan ili ne.

**Izvršenje MRP nakon planiranja i stavke na zalihi**: ovom se opcijom određuje da sustav nakon prvog planiranja dodatno pokrene MRP obradu za sve šifre artikala iz sastavnice proizvoda koje imaju politiku upravljanja različitu od upravljanja po proizvodnom nalogu, kako bi provjerio njihovu pokrivenost te po potrebi generirao planirane naloge bez veze s proizvodnim nalogom. Aktivacijom opcije **Stavke kojih ima na zalihi** MRP obrada uzet će u obzir i sve artikle koji u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) imaju postavljenu politiku upravljanja zalihama;

**Planiranje po zoni isporuke**: aktivacijom ove opcije sustav uzima u obzir zonu isporuke narudžbe te planira izvršenje prije planiranog dana isporuke;

**Provjeri dokumente u kašnjenju pomoću ATP-a**: aktivacijom ove opcije omogućuje se i polje **MS početni datum**. Sustav tada provjerava planirane naloge te, ako se pokaže da je barem jedan od njih u kašnjenju u odnosu na planirani datum, briše sve generirane naloge i ponovno ih izračunava od **MS početnog datuma** koristeći logiku *što ranije*. Novi predloženi datum proizvodnog naloga prikazuje se u polju **Predloženi datum** u tablici rezultata. Nakon toga moguće je koristiti gumb **Promijeni procijenjeni datum završetka predloženim datumom** (na kartici **Nalozi** unutar *Općeg planiranja*) kako bi se planirani datum završetka zamijenio novim predloženim datumom te ponovno pokrenulo planiranje s ispravnim parametrima;

**Automatsko puštanje planiranih naloga**: ako je ova opcija aktivna, sustav nakon generiranja planiranih naloga automatski izvršava njihovo oslobađanje. Time planirani proizvodni nalozi postaju proizvodni nalozi, planirani nalozi nabave postaju zahtjevi za nabavu (RDA), a planirani nalozi kooperacije postaju nalozi kooperacije;

**Planiranje na najranije ili posljednje**: korisnik može odabrati logiku prema kojoj će se izvršiti opće planiranje. Logika **što ranije** nastoji započeti aktivnosti čim je moguće, polazeći od današnjeg datuma. Logika **što kasnije** planira aktivnosti što kasnije, bez ugrožavanja rokova, polazeći od datuma isporuke i računajući unatrag;

**Planiranje pokrenutih ili izvršnih naloga**: omogućuje aktiviranje oznaka **Pokrenuti** i **Izvršni** na kartici **Nalozi**. Time je moguće prikazati i odabrati proizvodne naloge u tim statusima te ih ponovno planirati. Važno je napomenuti da će se za pokrenute ili izvršne naloge ponovno planirati samo oni planirani nalozi koji još nisu oslobođeni;

**Verzija**: planiranje će koristiti verziju navedenu u ovom polju ako u proizvodnom nalogu nije definirana verzija. Verzija definirana na samom proizvodnom nalogu ima prednost pred verzijom zadanom u parametrima *Općeg planiranja*. Ovo je obavezno polje i bez njegove vrijednosti nije moguće pokrenuti planiranje;

**Razmotri raspoloživost**: ako je opcija aktivna, postupak planiranja uzima u obzir raspoloživost iz skladišta navedenih u donjoj tablici, odnosno skladišta definiranih u formi [Izračun raspoloživosti](/docs/erp-home/registers/items/calculate-availability/);

**Razmotri raspoloživost na datum potrebe ili minimalnu raspoloživost u razdoblju**: ove opcije dostupne su samo ako je aktivna opcija **Razmotri raspoloživost**.
- **Na datum potrebe**: sustav uzima u obzir raspoloživost u trenutku kada je potrebno proizvesti nalog.
- **Minimalna u razdoblju**: sustav uzima u obzir najnižu raspoloživost unutar razdoblja do datuma definiranog u parametru **Planirati do**.

**Razmotri lotove sa stanjem 'nije raspoloživo'**: dostupno samo ako je aktivna opcija **Razmotri raspoloživost**. Ako je aktivno, planiranje uzima u obzir i serije koje imaju status nedostupnosti;

**Razmotri raspoloživost i za prvu razinu**: također dostupno samo ako je aktivna opcija **Razmotri raspoloživost**. Ako je aktivno, raspoloživost se provjerava i za artikl prve razine, odnosno za artikl koji se nalazi na proizvodnom nalogu;

**Razmotri i negativnu raspoloživost**: ako je aktivno, tijekom planiranja uzima se u obzir i negativna raspoloživost artikla prve razine. Ova opcija može se aktivirati samo ako je aktivna opcija **Razmotri raspoloživost i za prvu razinu**;

**Razmotri raspoloživost iz**: ove opcije postaju dostupne tek nakon aktiviranja opcije **Razmotri raspoloživost** te omogućuju određivanje hoće li se u obzir uzimati raspoloživost iz nabave, prodaje, skladišta, podizvođača i proizvodnje;

**Nadopuna minimalne zalihe stavki i nadopuna točke naručivanja artikla**: prva opcija dostupna je samo ako je aktivirana druga. Ovim se određuje da postupak planiranja mora predvidjeti nadopunu točke naručivanja artikla te, po potrebi, i minimalne zalihe. Oba podatka definiraju se na kartici [Opskrba](/docs/erp-home/registers/items/create-new-item) šifarnika artikla;

**Razmotri indeks pokrivanja**: ako je aktivno, planiranje uzima u obzir indeks pokrivenosti definiran na kartici **Opskrba** artikla;

**Razmotri alternative materijala**: ako je aktivno, tijekom planiranja proizvodnog naloga sustav uzima u obzir i alternativne materijale definirane na kartici **Alternative** u [Sastavnici](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management), kada nema dovoljno raspoloživosti za osnovni materijal. Dopušteno je kombinirati više alternativnih materijala za pokrivanje potrebe. Ako ni alternativni materijali nisu raspoloživi, planiranje predlaže nalog za nadopunu osnovnog materijala. Ova opcija koristi se samo ako je aktivna opcija **Razmotri raspoloživost**;

**Razmotri samo alternativne materijale**: ako je aktivno, sustav uzima u obzir samo alternativni materijal koji samostalno može pokriti cjelokupnu potrebnu količinu. Nije dopušteno kombiniranje više alternativnih materijala. Ako nijedan alternativni materijal nije raspoloživ u potrebnoj količini, planiranje predlaže nalog za nadopunu osnovnog materijala. Ova opcija koristi se samo ako je aktivna opcija **Razmotri raspoloživost**.

:::note Napomena
Alternativni materijali definiraju se na kartici **Alternative**, koja pripada osnovnom materijalu unutar [Sastavnice](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management).
:::

**Razmotri alternativne faze**: ako je ova opcija aktivna, tijekom planiranja uzimaju se u obzir i alternativne proizvodne operacije. Aktivacijom ove opcije omogućuje se uređivanje sljedećeg polja **Tolerancija opterećenja radnog centra %**, u kojem se definira postotak opterećenja radnog centra iznad kojeg će sustav početi razmatrati alternativne operacije umjesto zadanih.

## Praćenje

Na ovoj kartici korisnik pomoću dostupnih oznaka može odabrati koje će se informacije prikazivati u kartici **Arhiva** kao rezultat planiranja.

Moguće je odabrati prikaz korištenih **Kalendara** (*Tvornički kalendar* i kalendar *Proizvodnih kapaciteta*). Također se može uključiti upozorenje ako su tijekom planiranja pronađeni **Artikli bez**:
- *MRP parametara*,
- *Sastavnice*,
- *Proizvodni ciklus*,
- *Preferiranog dobavljača* (za nabavne naloge),
- *Preferiranog podizvođača* (za naloge kooperacije),
- definirane *minimalne zalihe* za artikle koji se vode po zalihama.

Za svaki **Radni nalog proizvodnje** moguće je odabrati prikaz:
- *Broja planiranih redaka*,
- detalja tih redaka,
- naloga u odgodi,
- isteklih naloga.

Za **Planirane naloge/narudžbe** moguće je prikazati:
- *Broj generiranih naloga/narudžbi*,
- njihov *Detalj*,
- naloge *U odgodi*,
- *Istekle* naloge,
- *Alternativne materijale*.

Također je moguće uključiti upozorenja za slučajeve kada postoje **Planirani nalozi bez**:
- materijala,
- proizvodnih faza,
- dobavljača (kod nabave),
- podizvođača (kod kooperacije).

**Legenda**: aktivne oznake omogućuju prikaz upozorenja i detalja za odabrane stavke.

## Povijest

U tablici ove kartice prikazuju se sve sažete informacije vezane uz izvršeno planiranje proizvodnog naloga.

**Program rasporeda**: prikazuje redni broj pokrenutog postupka planiranja;
**Operater**: prikazuje korisnika koji je pokrenuo planiranje;
**Broj grešaka**: prikazuje broj grešaka evidentiranih tijekom postupka planiranja;
**Datum početka**: prikazuje datum i vrijeme početka procesa planiranja;
**Datum završetka**: prikazuje datum i vrijeme završetka procesa planiranja;
**Planirani podaci koji dolaze iz**: prikazuje izvor planiranih podataka;
**Predviđanje**: prikazuje dolaze li podaci iz *Prognoze prodaje* ili iz *Glavnog plana proizvodnje*;
**Period**: prikazuje vrstu prognoze, tjednu ili mjesečnu;
**Dan**: prikazuje dan u tjednu određen kao dan završetka proizvodnog naloga generiranog kroz Definiciju MPS-a.

Sve ostale kolone prikazuju postavke korištene na kartici **Parametri** unutar *Općeg planiranja* za odabrani redak.

### Rezultat planiranja

Ovisno o odabranom retku u tablici, u ovoj sekciji prikazuju se detalji koje je korisnik odabrao na kartici **Praćenje**.

U rezultatu planiranja moguće je vidjeti:
- broj upravo planiranog proizvodnog naloga,
- broj planiranih naloga generiranih iz tog proizvodnog naloga,
- detaljan pregled svih generiranih planiranih naloga.

Za detalje o zajedničkim funkcionalnostima svih formi pogledajte dokument [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).