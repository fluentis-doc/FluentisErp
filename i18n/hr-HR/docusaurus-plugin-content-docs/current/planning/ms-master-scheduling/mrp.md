---
title: MRP
sidebar_position: 3
---

:::important Čemu služi
Funkcionalnost **MRP** (*Manufacturing Resource Planning*) u Fluentisu omogućuje analizu raspoloživosti materijala i proizvodnih resursa u skladu s planom proizvodnje. Putem ovog postupka korisnik dobiva prijedloge za optimizaciju upravljanja materijalima, uključujući preporuke za raniju nabavu, nadopunu potrebnih količina ili otkazivanje suvišnih narudžbi.
Fluentis MRP uzima u obzir proizvodna ograničenja, sirovine te poluproizvode koji su raspoloživi ili naručeni, omogućujući učinkovitu kontrolu svakog aktivnog proizvodnog naloga. Cilj sustava je optimizacija zaliha, smanjenje stanja skladišta i povećanje operativne učinkovitosti.
:::

Ova procedura omogućuje korisniku analizu stvarne raspoloživosti materijala i proizvodnih resursa u odnosu na plan proizvodnje.
Kroz ovu obradu operater može dobiti niz prijedloga vezanih uz:
- raniju isporuku pojedinih materijala,
- nadopunu potrebnih količina,
- otkazivanje nepotrebnih narudžbi artikala,
s ciljem što jednostavnije kontrole i upravljanja proizvodnim procesima.

MRP provodi planiranje proizvodnje uzimajući u obzir različita proizvodna ograničenja, raspoložive sirovine i poluproizvode te one koji su već naručeni.
Zahvaljujući ovoj proceduri korisnik može analizirati pokrivenost potreba svakog aktivnog proizvodnog naloga te upravljati i koordinirati svim procesima vezanima uz nabavu, proizvodnju i isporuku gotovog proizvoda.
Temeljno načelo sustava planiranja potreba za materijalima jest optimizacija zaliha prema stvarnim potrebama poduzeća, što rezultira smanjenjem razine zaliha i povećanjem učinkovitosti.
Korištenjem algoritama ove funkcionalnosti Fluentis MRP u svakom trenutku može utvrditi zauzetost pojedinog materijala na skladištu te njegovu raspoloživost na željeni datum.

### MRP

Na ovoj kartici moguće je pregledavati rezultate odabirom obrade iz povijesti izvršenja.
Treba imati na umu da se obrade čuvaju u povijesti onoliko dana koliko je definirano u polju **Broj dana čuvanja MRP povijesti**, dostupnom u [Parametrima potreba za materijalima](/docs/configurations/parameters/production/resource-requirements-parameters).
Forma se sastoji od područja za filtriranje u kojem je moguće filtrirati prema:
- artiklu,
- vrsti opskrbe,
- vrsti prijedloga koji je generirala procedura.

Na desnoj strani nalazi se popis svih artikala koje je procedura obradila te pripadajućih predloženih aktivnosti.
Odabirom pojedinog retka u središnjoj tablici prikazuju se sve informacije o predloženim aktivnostima. Za svaku aktivnost prikazani su:
- raspoloživost,
- potreba,
- potvrđena potreba,
ako je procedura pokrenuta s aktiviranom opcijom **Razlika potvrđene proizvodne potražnje**.

U donjoj tablici prikazane su informacije o svim dokumentima povezanim s artiklom, zajedno s prikazom:
- potražnje,
- ponude,
- raspoloživosti na odabrani datum.

Odabirom planiranog naloga koji je generirao MRP moguće ga je osloboditi putem gumba **Oslobađanje planiranih naloga**.

### Radni nalog

Na ovoj kartici moguće je filtrirati i odabrati proizvodne naloge koje je potrebno obraditi, kako bi se MRP mogao pokrenuti:
- djelomično, samo za odabrane proizvodne naloge,
- ili globalno, za sve proizvodne naloge u proizvodnji.

### Parametri

Na ovoj kartici definiraju se svi opći parametri vezani uz MRP proceduru.
Dio postavki preuzima se iz forme [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) te se odnosi na pojedini artikl.

### Planiranje

> **Planiraj do**: određuje datum do kojeg će sustav uzimati u obzir unesene dokumente. Kao zadani datum predlaže se posljednji dan tekuće godine ako je trenutni datum prije 30. lipnja, odnosno posljednji dan sljedeće godine ako je trenutni datum nakon 1. srpnja.
> **Oznaka Materijali**: ako je aktivna, u generirane planirane naloge uključuju se materijali predviđeni za potrošnju. Ako nije aktivna, planirani nalozi će se svejedno generirati, ali bez materijala.
> **Oznaka Resursi**: ako je aktivna, u generirane planirane naloge uključuju se i proizvodne operacije. Ako nije aktivna, planirani nalozi će se generirati bez proizvodnih operacija.
> **Oznaka Planirane narudžbe nalozi nabave**: ako je aktivna, planirani nalozi nabave uzimaju se u obzir tijekom planiranja.
> **Oznaka Planirane narudžbe proizvodnje**: ako je aktivna, planirani nalozi proizvodnje uzimaju se u obzir tijekom planiranja.
> **Oznaka Planirane narudžbe podizvođača**: ako je aktivna, planirani nalozi kooperacije uzimaju se u obzir tijekom planiranja.

### Za dokumente bez potrebnog datuma

> **Narudžbe dobavljačima i zahtjevi za nabavu**: moguće je odabrati da se artikli bez planiranog datuma primitka ignoriraju ili da se kao planirani datum primitka koristi datum ručno definiran u ovoj sekciji.
> **Narudžbe kupaca**: moguće je odabrati da se artikli bez planiranog datuma primitka ignoriraju ili da se kao planirani datum isporuke koristi datum ručno definiran u ovoj sekciji.

### Uvažavaj raspoloživosti iz

> **Nabava**: ako je aktivno, dokumenti iz područja **Nabava** uzimaju se u obzir tijekom MRP obrade.
> **Prodaja**: ako je aktivno, dokumenti iz područja **Prodaja** uzimaju se u obzir tijekom MRP obrade.
> **Skladište**: ako je aktivno, dokumenti iz područja **Skladište** uzimaju se u obzir tijekom MRP obrade.
> **Podizvođač**: ako je aktivno, dokumenti iz područja **Podizvođač** uzimaju se u obzir tijekom MRP obrade.
> **Planiranje**: ako je aktivno, dokumenti iz područja **Planiranje** (proizvodni nalozi, planirani nalozi nabave, kooperacije i/ili proizvodnje) uzimaju se u obzir tijekom MRP obrade.
> **Proizvodnja**: ako je aktivno, dokumenti iz područja **Pokrenute proizvodnje** (odnosno proizvodni nalozi) uzimaju se u obzir tijekom MRP obrade.

### Razmotri alternative materijale

*U RAZVOJU*

### Razmotri alternativne faze

*U RAZVOJU*

### Čitanje sastavnica / tehnoloških postupaka

> **Verzija**: određuje zadanu verziju sastavnice i/ili tehnološkog postupka koja će se uzeti u obzir.
**Razmotri količine prema ekonomskom lotu**: ako je aktivno, za artikl će se uzeti u obzir ekonomična serija (minimalna količina) proizvodnje ili nabave.
**Razmotri višekratnike ekonomskih lotova**: ako je aktivno, za artikl će se uzeti u obzir višekratnici ekonomične serije proizvodnje ili nabave.
**Obnovi minimalnu zalihu stavki**: ako je aktivno, za artikl će se nadopuniti minimalna zaliha definirana u njegovom šifarniku, na kartici *Opskrba*.
**Razmotri indeks pokrivanja**: ako je aktivno, za artikl će se uzeti u obzir indeks pokrivenosti definiran u njegovom šifarniku, na kartici *Opskrba*. Indeks pokrivenosti izražava se u tjednima i označava broj tjedana za koje sustav treba osigurati pokrivenost potreba.
**Nema prijedloga**: ako je aktivno, MRP neće predlagati radnje povećanja, smanjenja, brisanja, pomicanja unaprijed ili odgode već generiranih planiranih naloga.
**Razmotri prošlost**: ako je aktivno, za dokumente čiji je planirani datum isporuke prije trenutnog datuma (danas), raspoloživost će se računati i za prošlo razdoblje. Ako nije aktivno, svim dokumentima iz prošlosti dodijelit će se današnji datum kao planirani datum isporuke.
**Razlikuj zahtjev za potvrđenu proizvodnju**: ako je aktivno, MRP se izvršava dva puta.

Prvo izvršavanje uzima u obzir samo potrebe koje proizlaze iz izvršnih dokumenata (područja: SCM – Nabava, SCS – Kooperacija i MES – Proizvodnja) te prema potrebi generira planirane naloge, pri čemu se popunjava i polje **Potvrđena količina** (na novostvorenom planiranom nalogu). Ova faza generira dokumente nužne za pokrivanje najhitnijih potreba, odnosno potreba koje proizlaze iz izvršnih dokumenata.

Drugo izvršavanje uzima u obzir potrebe iz svih dokumenata, uključujući i proizvodne naloge. U ovoj fazi generiraju se preostali potrebni dokumenti, ali bez optimizacije s dokumentima nastalima u prvom izvršavanju, kako bi ih bilo moguće zasebno potvrditi ili pustiti u izvršenje.
**Razmotri stavke bez naloga**: ako je aktivno, tijekom MRP obrade uzimaju se u obzir svi artikli s politikom upravljanja prema prognozi i potrebama (osim arhiviranih i fiktivnih artikala) te artikli s politikom upravljanja po proizvodnom nalogu (samo ako je u njihovim **MRP parametrima** aktivna oznaka *Uvažavaj artikl u MRP izračunu*), čak i ako nisu povezani s proizvodnim nalogom.
**Kontrola zahtjeva s generiranjem planiranih naloga**: omogućuje odabir hoće li se planirani nalozi stvarno generirati. Ako nije aktivno, prikazivat će se samo prijedlozi za njihovo kreiranje. Planirani nalozi koje generira MRP nemaju vezu s proizvodnim nalozima.
**Stavke na zalihi**: uzimaju se svi artikli koji u MRP parametrima imaju politiku upravljanja **Na zalihi**. Osim toga, u MRP parametrima mora biti definiran barem jedan od parametara: *Minimalna zaliha* ili *Točka ponovne narudžbe*.
**Tolerancija zauzetosti radnih centara**: koristi se pri generiranju opterećenja za operacije planiranih proizvodnih naloga kako bi se odredilo kada MRP treba koristiti alternativnu radnu operaciju.

## Povijest

Na ovoj kartici moguće je filtrirati i pregledavati popis pokrenutih MRP obrada, uz prikaz korisnika koji ih je pokrenuo te datuma i vremena izvršenja.