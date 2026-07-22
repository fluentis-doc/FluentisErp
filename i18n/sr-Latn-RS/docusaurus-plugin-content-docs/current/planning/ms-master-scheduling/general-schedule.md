---
title: Generalno planiranje
sidebar_position: 2
---

:::important Čemu služi
Generalno planiranje u Fluentisu je proces koji radi pod pretpostavkom beskonačnog kapaciteta, što znači da planiranje ne uzima u obzir fizička ograničenja radnih centara ili raspoloživih resursa. Ovakav pristup omogućava planiranje proizvodnih aktivnosti uz određeni stepen fleksibilnosti.

Planiranje se može izvršavati prema dve različite logike: **što ranije** i **što kasnije**. Logika **što ranije** nastoji da započne aktivnosti čim je to moguće, dok logika **što kasnije** planira aktivnosti što je moguće kasnije, bez ugrožavanja rokova. Ovi pristupi omogućavaju optimizovanu analizu proizvodnih potreba i upravljanje vremenima izrade u skladu sa poslovnim prioritetima i operativnim zahtevima.
:::

Forma se sastoji od četiri kartice: **Radni nalog**, **Opšti parametri**, **Praćenje** i **Istorija**.

## Radni nalog

Kartica **Radni nalog** sastoji se od oblasti za filtriranje koja omogućava izbor naloga koji će zatim biti prikazani u tabeli rezultata.

Pored filtera za artikl, godinu i broj proizvodnog naloga, dostupan je i filter za **Tip naloga**, kojim se mogu prikazati monoproizvodni, multiproizvodni ili svi proizvodni nalozi.

Dostupan je i filter za **Mesto proizvodnje**, kako bi bilo moguće planirati samo naloge određenog proizvodnog pogona, kao i skup oznaka: **U kašnjenju**, **Istekao rok**, **Pokrenut** i **Izvršni**, koje omogućavaju izbor prikaza naloga koji kasne u odnosu na planirani datum ili kojima je istekao rok. Oznake **Pokrenuti** i **Izvršni** postaju dostupne samo ako je u **Opštim parametrima planiranja** aktivirana opcija **Planiranje pokrenutih ili izvršnih naloga**; u suprotnom ostaju neaktivne.

Ako opcija **Planiranje pokrenutih ili izvršnih naloga** nije aktivna, u tabeli će biti prikazani samo nalozi u statusu **Neobrađen** ili **Planiran**.

Odabirom jednog ili više naloga, u zavisnosti od parametara planiranja postavljenih na odgovarajućoj kartici, pomoću dugmeta **Generalno planiranje** pokreće se postupak generisanja planiranih naloga tri vrste: proizvodnje, nabavke i kooperacije. Pri tome se koriste podaci iz proizvodnih naloga, kao i odgovarajućih sastavnica i tehnoloških postupaka.

Nakon generisanja, planirani nalozi mogu se pregledati u formi [Pretraga planiranih naloga](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders), koja se može otvoriti i putem dugmeta **Otvori pretragu planiranih naloga**.

Ako je pre otvaranja pretrage odabran određeni proizvodni nalog u tabeli rezultata, forma za planirane naloge otvoriće se već filtrirana za taj nalog.

### Specifična dugmad

> **Generalno planiranje**: omogućava sistemu planiranje odabranih proizvodnih naloga;

> **Otvori pretragu planiranih narudžbi (naloga)**: otvara ekran [Pretraga planiranih naloga](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders). Ako je pre pritiska na dugme odabran red proizvodnog naloga, pretraga će se otvoriti već filtrirana za taj nalog;

> **Promeni procenjeni datum završetka predloženim datumom**: ažurira *planirani datum završetka* pomoću *predloženog datuma* izračunatog tokom planiranja kada je aktivirana opcija **Proveri dokumente u kašnjenju pomoću ATP-a**;

> **Redosled naloga**: omogućava pristup redosledu proizvodnih naloga, gde ih je moguće pregledati prema dodeljenom redosledu, uključujući i grafički prikaz.

### Specifični filteri

**Tip dokumenta**: omogućava prikaz monoproizvodnih, multiproizvodnih ili svih proizvodnih naloga;

**Mesto proizvodnje**: omogućava prikaz naloga prema proizvodnom pogonu kojem pripadaju;

**U kašnjenju / Istekli / Pokrenuti / Izvršni**: ove oznake omogućavaju prikaz naloga koji kasne ili kojima je istekao rok. Oznake **Pokrenuti** i **Izvršni** dostupne su samo ako je u [Opštim parametrima planiranja](/docs/planning/ms-master-scheduling/general-schedule) aktivirana opcija **Planiranje pokrenutih ili izvršnih naloga**. U suprotnom, na kartici **Nalozi** mogu se prikazivati samo nalozi u statusu **Neobrađen** ili **Planiran**. Pošto nalozi mogu preći u status **Pokrenut** i/ili **Izvršan**, ukoliko navedena opcija nije aktivirana, takvi nalozi neće biti prikazani na ovoj kartici.

### Specifična polja u tabeli rezultata

**Predloženi datum**: kao što je objašnjeno u članku o opštim parametrima planiranja, aktiviranjem oznake [Proveri dokumente u kašnjenju pomoću ATP-a](/docs/planning/ms-master-scheduling/general-schedule), postupak planiranja izvršava dodatnu proveru. Ukoliko se pokaže da je makar jedan od generisanih i planiranih naloga u kašnjenju u odnosu na planirani datum, sistem će obrisati sve prethodno generisane naloge i ponovo pokrenuti obračun počevši od **MS početnog datuma** (koji se definiše u parametrima i koristi se samo kada je aktivirana opcija **Provera dokumenata u kašnjenju pomoću ATP-a**) koristeći logiku *što ranije*. Novi predloženi datum za proizvodne naloge prikazaće se u polju **Predloženi datum** u tabeli rezultata.

### Postupak opšteg planiranja

Nakon odabira proizvodnih naloga koje je potrebno planirati, aktivira se dugme **Generalno planiranje** na alatnoj traci forme. Klikom na to dugme sistem pokreće planiranje odabranih proizvodnih naloga.

Za pregled svih izvršenih planiranja i pripadajućih generisanih proizvodnih naloga za pojedini proizvodni nalog potrebno je otvoriti karticu **Arhiva**.

:::danger Napomena
Ručno kreirani proizvodni nalozi uvek se planiraju bez obzira na raspoloživost artikla koji se proizvodi.
:::

## Opšti parametri planiranja

:::note Napomena
Pre pokretanja planiranja potrebno je na ovoj kartici postaviti parametre koji će se koristiti tokom planiranja.
:::

**Planiranje do**: određuje datum do kojeg će sistem uzimati u obzir unete dokumente. Taj datum sistem izračunava kao današnji datum uvećan za broj meseci definisan u polju **Maksimalni broj meseci za planiranje** unutar [MS parametara](/docs/configurations/parameters/production/mps-parameters).

**Materijali / Resursi**: aktiviranjem oznake **Materijali** u generisane planirane naloge prenose se materijali koji će se trošiti. Aktiviranjem oznake **Resursi** u planirane naloge prenose se i proizvodne operacije. Ukoliko jedna ili obe oznake nisu aktivne, planirani nalozi će se ipak generisati, ali bez materijala odnosno bez proizvodnih operacija.

**Planirane narudžbe na**: pomoću tri oznake određuje se da li sistem treba da generiše sve tri vrste planiranih naloga: proizvodnju, nabavku i podizvođača. Na taj način navedeni nalozi ostaju povezani sa proizvodnim nalogom. Na primer, ako oznaka **Nabavka** nije aktivna, ali je aktivna opcija **MRP obrada**, sistem će ipak generisati nabavne naloge, ali oni neće biti povezani sa proizvodnim nalogom.

**Generiši samo naloge planirane za nivo**: omogućava definisanje nivoa sastavnice (1, 2, ...) za koje će se generisati planirani nalozi.

**Narudžbe dobavljača ili zahtevi za nabavku i narudžbe kupaca**: ukoliko u sistemu postoje dokumenti bez datuma potrebe ili raspoloživosti, moguće je odrediti da sistem koristi datum naveden u odgovarajućem polju ili da takve dokumente uopšte ne uzima u obzir.

**Grupisanje planiranih naloga prema**: ako se radi po proizvodnim nalozima, potrebno je odabrati opciju **Bez grupisanja**. U suprotnom se može odabrati način grupisanja, ali će se tada izgubiti veza između planiranih naloga i proizvodnog naloga.

**Grupisanje na: poslednji/najranije**: omogućava izbor grupisanja prema logici *što kasnije* ili *što ranije* (preporučena opcija). U sledećem polju **Za period od dana** definiše se broj dana unutar kojeg je dozvoljeno grupisanje.

**Razmotri količine prema ekonomičnoj seriji / Razmotri višekratnike ekonomičnih serija**: aktiviranjem prve opcije tokom planiranja uzima se u obzir ekonomična serija artikla. Time se aktivira i druga opcija kojom se određuje da li treba uzimati u obzir i višekratnike ekonomične serije.

Za obrađivani artikl vrednosti ekonomične serije i njeni višekratnici uzimaju se u obzir samo ako su odgovarajuće oznake aktivirane u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) artikla.

Ako je reč o artiklu sa tipom snabdevanja **Proizvodnja**, vrednosti ekonomične serije i višekratnika preuzimaju se sa kartice **Proizvodnja** u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters). Ako je reč o artiklu sa tipom snabdevanja **Nabavka**, podaci se preuzimaju od podrazumevanog dobavljača na kartici [Preferirani dobavljači](/docs/erp-home/registers/items/create-new-item) u šifarniku artikla.

**Kompaktni / razdvoji naloge**: određuje da li između završetka proizvodnje naloga jednog nivoa i početka naloga sledećeg nivoa treba ostaviti jedan slobodan dan ili ne.

**Izvršenje MRP-a nakon planiranja i artikli na zalihama**: ovom opcijom određuje se da sistem nakon prvog planiranja dodatno pokrene MRP obradu za sve šifre artikala iz sastavnice proizvoda koje imaju politiku upravljanja različitu od upravljanja po proizvodnom nalogu, kako bi proverio njihovu pokrivenost i po potrebi generisao planirane naloge bez veze sa proizvodnim nalogom. Aktiviranjem opcije **Artikli kojih ima na zalihama** MRP obrada će uzeti u obzir i sve artikle koji u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) imaju postavljenu politiku upravljanja zalihama.

**Planiranje po zoni isporuke**: aktiviranjem ove opcije sistem uzima u obzir zonu isporuke narudžbe i planira izvršenje pre planiranog dana isporuke.

**Proveri dokumente u kašnjenju pomoću ATP-a**: aktiviranjem ove opcije omogućava se i polje **MS početni datum**. Sistem tada proverava planirane naloge i, ukoliko se pokaže da je makar jedan od njih u kašnjenju u odnosu na planirani datum, briše sve generisane naloge i ponovo ih obračunava od **MS početnog datuma** koristeći logiku *što ranije*. Novi predloženi datum proizvodnog naloga prikazuje se u polju **Predloženi datum** u tabeli rezultata. Nakon toga moguće je koristiti dugme **Promeni procenjeni datum završetka predloženim datumom** (na kartici **Nalozi** unutar *Opšteg planiranja*) kako bi se planirani datum završetka zamenio novim predloženim datumom i ponovo pokrenulo planiranje sa ispravnim parametrima.

**Automatsko puštanje planiranih naloga**: ukoliko je ova opcija aktivna, sistem nakon generisanja planiranih naloga automatski izvršava njihovo oslobađanje. Time planirani proizvodni nalozi postaju proizvodni nalozi, planirani nalozi nabavke postaju zahtevi za nabavku (RDA), a planirani nalozi kooperacije postaju nalozi kooperacije.

**Planiranje na najranije ili poslednje**: korisnik može odabrati logiku prema kojoj će se izvršiti opšte planiranje. Logika **što ranije** nastoji da započne aktivnosti čim je to moguće, polazeći od današnjeg datuma. Logika **što kasnije** planira aktivnosti što kasnije, bez ugrožavanja rokova, polazeći od datuma isporuke i računajući unazad.

**Planiranje pokrenutih ili izvršnih naloga**: omogućava aktiviranje oznaka **Pokrenuti** i **Izvršni** na kartici **Nalozi**. Time je moguće prikazati i odabrati proizvodne naloge u tim statusima i ponovo ih planirati. Važno je napomenuti da će se za pokrenute ili izvršne naloge ponovo planirati samo oni planirani nalozi koji još nisu oslobođeni.

**Verzija**: planiranje će koristiti verziju navedenu u ovom polju ukoliko u proizvodnom nalogu nije definisana verzija. Verzija definisana na samom proizvodnom nalogu ima prednost u odnosu na verziju zadatu u parametrima *Opšteg planiranja*. Ovo je obavezno polje i bez njegove vrednosti nije moguće pokrenuti planiranje.

**Razmotri raspoloživost**: ukoliko je opcija aktivna, postupak planiranja uzima u obzir raspoloživost iz skladišta navedenih u donjoj tabeli, odnosno skladišta definisanih u formi [Izračun raspoloživosti](/docs/erp-home/registers/items/calculate-availability/).

**Razmotri raspoloživost na datum potrebe ili minimalnu raspoloživost u periodu**: ove opcije dostupne su samo ako je aktivna opcija **Razmotri raspoloživost**.

- **Na datum potrebe**: sistem uzima u obzir raspoloživost u trenutku kada je potrebno proizvesti nalog.
- **Minimalna u periodu**: sistem uzima u obzir najnižu raspoloživost unutar perioda do datuma definisanog u parametru **Planirati do**.

**Razmotri lotove sa statusom 'nije raspoloživo'**: dostupno samo ako je aktivna opcija **Razmotri raspoloživost**. Ukoliko je aktivno, planiranje uzima u obzir i serije koje imaju status nedostupnosti.

**Razmotri raspoloživost i za prvi nivo**: takođe dostupno samo ako je aktivna opcija **Razmotri raspoloživost**. Ako je aktivna, raspoloživost se proverava i za artikl prvog nivoa, odnosno za artikl koji se nalazi na proizvodnom nalogu;

**Razmotri i negativnu raspoloživost**: ako je aktivno, tokom planiranja uzima se u obzir i negativna raspoloživost artikla prvog nivoa. Ova opcija može se aktivirati samo ako je aktivna opcija **Razmotri raspoloživost i za prvi nivo**;

**Razmotri raspoloživost iz**: ove opcije postaju dostupne tek nakon aktiviranja opcije **Razmotri raspoloživost** i omogućavaju određivanje da li će se u obzir uzimati raspoloživost iz nabavke, prodaje, skladišta, podizvođača i proizvodnje;

**Dopuna minimalne zalihe artikala i dopuna tačke naručivanja artikla**: prva opcija dostupna je samo ako je aktivirana druga. Ovim se određuje da postupak planiranja mora predvideti dopunu tačke naručivanja artikla i, po potrebi, minimalne zalihe. Oba podatka definišu se na kartici [Snabdevanje](/docs/erp-home/registers/items/create-new-item) šifarnika artikla;

**Razmotri indeks pokrivenosti**: ako je aktivno, planiranje uzima u obzir indeks pokrivenosti definisan na kartici **Snabdevanje** artikla;

**Razmotri alternative materijala**: ako je aktivno, tokom planiranja proizvodnog naloga sistem uzima u obzir i alternativne materijale definisane na kartici **Alternative** u [Sastavnici](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management), kada nema dovoljno raspoloživosti osnovnog materijala. Dozvoljeno je kombinovanje više alternativnih materijala radi pokrivanja potrebe. Ako ni alternativni materijali nisu raspoloživi, planiranje predlaže nalog za dopunu osnovnog materijala. Ova opcija koristi se samo ako je aktivna opcija **Razmotri raspoloživost**;

**Razmotri samo alternativne materijale**: ako je aktivno, sistem uzima u obzir samo alternativni materijal koji samostalno može pokriti celokupnu potrebnu količinu. Nije dozvoljeno kombinovanje više alternativnih materijala. Ako nijedan alternativni materijal nije raspoloživ u potrebnoj količini, planiranje predlaže nalog za dopunu osnovnog materijala. Ova opcija koristi se samo ako je aktivna opcija **Razmotri raspoloživost**.

:::note Napomena
Alternativni materijali definišu se na kartici **Alternative**, koja pripada osnovnom materijalu unutar [Sastavnice](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management).
:::

**Razmotri alternativne faze**: ako je ova opcija aktivna, tokom planiranja uzimaju se u obzir i alternativne proizvodne operacije. Aktiviranjem ove opcije omogućava se uređivanje sledećeg polja **Tolerancija opterećenja radnog centra %**, u kojem se definiše procenat opterećenja radnog centra iznad kojeg će sistem početi da razmatra alternativne operacije umesto podrazumevanih.

## Praćenje

Na ovoj kartici korisnik pomoću dostupnih oznaka može odabrati koje će se informacije prikazivati na kartici **Arhiva** kao rezultat planiranja.
Moguće je odabrati prikaz korišćenih **Kalendara** (*Fabrički kalendar* i kalendar *Proizvodnih kapaciteta*). Takođe se može uključiti upozorenje ako su tokom planiranja pronađeni **Artikli bez**:

- *MRP parametara*,
- *Sastavnice*,
- *Proizvodnog ciklusa*,
- *Preferiranog dobavljača* (za nabavne naloge),
- *Preferiranog podizvođača* (za naloge kooperacije),
- definisane *minimalne zalihe* za artikle koji se vode po zalihama.

Za svaki **Radni nalog proizvodnje** moguće je odabrati prikaz:
- *Broja planiranih redova*,
- detalja tih redova,
- naloga u kašnjenju,
- isteklih naloga.

Za **Planirane naloge/narudžbine** moguće je prikazati:

- *Broj generisanih naloga/narudžbina*,
- njihov *Detalj*,
- naloge *U kašnjenju*,
- *Istekle* naloge,
- *Alternativne materijale*.

Takođe je moguće uključiti upozorenja za slučajeve kada postoje **Planirani nalozi bez**:

- materijala,
- proizvodnih faza,
- dobavljača (kod nabavke),
- podizvođača (kod kooperacije).

**Legenda**: aktivne oznake omogućavaju prikaz upozorenja i detalja za odabrane stavke.

## Istorija

U tabeli ove kartice prikazuju se sve sažete informacije vezane za izvršeno planiranje proizvodnog naloga.
**Program raspoređivanja**: prikazuje redni broj pokrenutog postupka planiranja;  
**Operater**: prikazuje korisnika koji je pokrenuo planiranje;  
**Broj grešaka**: prikazuje broj grešaka evidentiranih tokom postupka planiranja;  
**Datum početka**: prikazuje datum i vreme početka procesa planiranja;  
**Datum završetka**: prikazuje datum i vreme završetka procesa planiranja;  
**Planirani podaci koji dolaze iz**: prikazuje izvor planiranih podataka;  
**Predviđanje**: prikazuje da li podaci dolaze iz *Prognoze prodaje* ili iz *Glavnog plana proizvodnje*;  
**Period**: prikazuje vrstu prognoze, nedeljnu ili mesečnu;  
**Dan**: prikazuje dan u nedelji određen kao dan završetka proizvodnog naloga generisanog kroz Definiciju MPS-a.

Sve ostale kolone prikazuju postavke korišćene na kartici **Parametri** unutar *Opšteg planiranja* za odabrani red.

### Rezultat planiranja

U zavisnosti od odabranog reda u tabeli, u ovoj sekciji prikazuju se detalji koje je korisnik odabrao na kartici **Praćenje**.
U rezultatu planiranja moguće je videti:
- broj upravo planiranog proizvodnog naloga,
- broj planiranih naloga generisanih iz tog proizvodnog naloga,
- detaljan pregled svih generisanih planiranih naloga.

Za detalje o zajedničkim funkcionalnostima svih formi pogledajte dokument [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).