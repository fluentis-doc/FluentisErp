---
title: MRP
sidebar_position: 3
---

:::important Čemu služi
Funkcionalnost **MRP** (*Manufacturing Resource Planning*) u Fluentisu omogućava analizu raspoloživosti materijala i proizvodnih resursa u skladu sa planom proizvodnje. Putem ovog postupka korisnik dobija predloge za optimizaciju upravljanja materijalima, uključujući preporuke za raniju nabavku, dopunu potrebnih količina ili otkazivanje suvišnih narudžbina.

Fluentis MRP uzima u obzir proizvodna ograničenja, sirovine i poluproizvode koji su raspoloživi ili naručeni, omogućavajući efikasnu kontrolu svakog aktivnog proizvodnog naloga. Cilj sistema je optimizacija zaliha, smanjenje stanja skladišta i povećanje operativne efikasnosti.
:::

Ova procedura omogućava korisniku analizu stvarne raspoloživosti materijala i proizvodnih resursa u odnosu na plan proizvodnje.
Kroz ovu obradu operater može dobiti niz predloga vezanih za:
- raniju isporuku pojedinih materijala,
- dopunu potrebnih količina,
- otkazivanje nepotrebnih narudžbina artikala,
sa ciljem što jednostavnije kontrole i upravljanja proizvodnim procesima.

MRP sprovodi planiranje proizvodnje uzimajući u obzir različita proizvodna ograničenja, raspoložive sirovine i poluproizvode, kao i one koji su već naručeni.
Zahvaljujući ovoj proceduri korisnik može analizirati pokrivenost potreba svakog aktivnog proizvodnog naloga i upravljati i koordinisati svim procesima vezanim za nabavku, proizvodnju i isporuku gotovog proizvoda.
Osnovni princip sistema planiranja potreba za materijalima jeste optimizacija zaliha prema stvarnim potrebama preduzeća, što rezultira smanjenjem nivoa zaliha i povećanjem efikasnosti.
Korišćenjem algoritama ove funkcionalnosti Fluentis MRP u svakom trenutku može utvrditi zauzetost pojedinog materijala na skladištu i njegovu raspoloživost na željeni datum.

### MRP

Na ovoj kartici moguće je pregledati rezultate odabirom obrade iz istorije izvršavanja.
Treba imati u vidu da se obrade čuvaju u istoriji onoliko dana koliko je definisano u polju **Broj dana čuvanja MRP istorije**, dostupnom u [Parametrima potreba za materijalima](/docs/configurations/parameters/production/resource-requirements-parameters).

Forma se sastoji od oblasti za filtriranje u kojoj je moguće filtrirati prema:
- artiklu,
- vrsti snabdevanja,
- vrsti predloga koji je generisala procedura.

Na desnoj strani nalazi se lista svih artikala koje je procedura obradila, zajedno sa pripadajućim predloženim aktivnostima.
Odabirom pojedinog reda u centralnoj tabeli prikazuju se sve informacije o predloženim aktivnostima. Za svaku aktivnost prikazani su:
- raspoloživost,
- potreba,
- potvrđena potreba,
ako je procedura pokrenuta sa aktiviranom opcijom **Razlika potvrđene proizvodne potražnje**.
U donjoj tabeli prikazane su informacije o svim dokumentima povezanim sa artiklom, zajedno sa prikazom:
- potražnje,
- ponude,
- raspoloživosti na odabrani datum.

Odabirom planiranog naloga koji je generisao MRP moguće ga je osloboditi putem dugmeta **Oslobađanje planiranih naloga**.

### Radni nalog

Na ovoj kartici moguće je filtrirati i odabrati proizvodne naloge koje je potrebno obraditi kako bi se MRP mogao pokrenuti:
- delimično, samo za odabrane proizvodne naloge,
- ili globalno, za sve proizvodne naloge u proizvodnji.

### Parametri

Na ovoj kartici definišu se svi opšti parametri vezani za MRP proceduru.
Deo podešavanja preuzima se iz forme [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) i odnosi se na pojedinačni artikl.

### Planiranje

> **Planiraj do**: određuje datum do kojeg će sistem uzimati u obzir unesene dokumente. Kao podrazumevani datum predlaže se poslednji dan tekuće godine ako je trenutni datum pre 30. juna, odnosno poslednji dan naredne godine ako je trenutni datum nakon 1. jula.
> **Oznaka Materijali**: ako je aktivna, u generisane planirane naloge uključuju se materijali predviđeni za potrošnju. Ako nije aktivna, planirani nalozi će se ipak generisati, ali bez materijala.
> **Oznaka Resursi**: ako je aktivna, u generisane planirane naloge uključuju se i proizvodne operacije. Ako nije aktivna, planirani nalozi će se generisati bez proizvodnih operacija.
> **Oznaka Planirane narudžbine nabavke**: ako je aktivna, planirani nalozi nabavke uzimaju se u obzir tokom planiranja.
> **Oznaka Planirane narudžbine proizvodnje**: ako je aktivna, planirani nalozi proizvodnje uzimaju se u obzir tokom planiranja.
> **Oznaka Planirane narudžbine podizvođača**: ako je aktivna, planirani nalozi kooperacije uzimaju se u obzir tokom planiranja.

### Za dokumente bez potrebnog datuma

> **Narudžbine dobavljačima i zahtevi za nabavku**: moguće je odabrati da se artikli bez planiranog datuma prijema ignorišu ili da se kao planirani datum prijema koristi datum ručno definisan u ovoj sekciji.
> **Narudžbine kupaca**: moguće je odabrati da se artikli bez planiranog datuma prijema ignorišu ili da se kao planirani datum isporuke koristi datum ručno definisan u ovoj sekciji.

### Uvažavaj raspoloživosti iz

> **Nabavka**: ako je aktivno, dokumenti iz oblasti **Nabavka** uzimaju se u obzir tokom MRP obrade.
> **Prodaja**: ako je aktivno, dokumenti iz oblasti **Prodaja** uzimaju se u obzir tokom MRP obrade.
> **Skladište**: ako je aktivno, dokumenti iz oblasti **Skladište** uzimaju se u obzir tokom MRP obrade.
> **Podizvođač**: ako je aktivno, dokumenti iz oblasti **Podizvođač** uzimaju se u obzir tokom MRP obrade.
> **Planiranje**: ako je aktivno, dokumenti iz oblasti **Planiranje** (proizvodni nalozi, planirani nalozi nabavke, kooperacije i/ili proizvodnje) uzimaju se u obzir tokom MRP obrade.
> **Proizvodnja**: ako je aktivno, dokumenti iz oblasti **Pokrenute proizvodnje** (odnosno proizvodni nalozi) uzimaju se u obzir tokom MRP obrade.

### Razmotri alternativne materijale

*U RAZVOJU*

### Razmotri alternativne faze

*U RAZVOJU*

### Čitanje sastavnica / tehnoloških postupaka

> **Verzija**: određuje podrazumevanu verziju sastavnice i/ili tehnološkog postupka koja će se uzeti u obzir.
> **Razmotri količine prema ekonomskom lotu**: ako je aktivno, za artikl će se uzeti u obzir ekonomska serija (minimalna količina) proizvodnje ili nabavke.
> **Razmotri višekratnike ekonomskih lotova**: ako je aktivno, za artikl će se uzeti u obzir višekratnici ekonomske serije proizvodnje ili nabavke.
> **Obnovi minimalnu zalihu artikala**: ako je aktivno, za artikl će se dopuniti minimalna zaliha definisana u njegovom šifarniku, na kartici *Snabdevanje*.
> **Razmotri indeks pokrivenosti**: ako je aktivno, za artikl će se uzeti u obzir indeks pokrivenosti definisan u njegovom šifarniku, na kartici *Snabdevanje*. Indeks pokrivenosti izražava se u nedeljama i označava broj nedelja za koje sistem treba da obezbedi pokrivenost potreba.
> **Nema predloga**: ako je aktivno, MRP neće predlagati radnje povećanja, smanjenja, brisanja, pomeranja unapred ili odlaganja već generisanih planiranih naloga.
> **Razmotri prošlost**: ako je aktivno, za dokumente čiji je planirani datum isporuke pre trenutnog datuma (danas), raspoloživost će se računati i za prethodni period. Ako nije aktivno, svim dokumentima iz prošlosti dodeliće se današnji datum kao planirani datum isporuke.
> **Razlikuj zahtev za potvrđenu proizvodnju**: ako je aktivno, MRP se izvršava dva puta.

Prvo izvršavanje uzima u obzir samo potrebe koje proizlaze iz izvršnih dokumenata (oblasti: SCM – Nabavka, SCS – Kooperacija i MES – Proizvodnja) i prema potrebi generiše planirane naloge, pri čemu se popunjava i polje **Potvrđena količina** (na novokreiranom planiranom nalogu). Ova faza generiše dokumente neophodne za pokrivanje najhitnijih potreba, odnosno potreba koje proizlaze iz izvršnih dokumenata.

Drugo izvršavanje uzima u obzir potrebe iz svih dokumenata, uključujući i proizvodne naloge. U ovoj fazi generišu se preostali potrebni dokumenti, ali bez optimizacije sa dokumentima nastalim u prvom izvršavanju, kako bi ih bilo moguće zasebno potvrditi ili pustiti u izvršenje.

> **Razmotri artikle bez naloga**: ako je aktivno, tokom MRP obrade uzimaju se u obzir svi artikli sa politikom upravljanja prema prognozi i potrebama (osim arhiviranih i fiktivnih artikala), kao i artikli sa politikom upravljanja po proizvodnom nalogu (samo ako je u njihovim **MRP parametrima** aktivna oznaka *Uvažavaj artikl u MRP obračunu*), čak i ako nisu povezani sa proizvodnim nalogom.
> **Kontrola zahteva sa generisanjem planiranih naloga**: omogućava odabir da li će se planirani nalozi zaista generisati. Ako nije aktivno, prikazivaće se samo predlozi za njihovo kreiranje. Planirani nalozi koje generiše MRP nemaju vezu sa proizvodnim nalozima.
> **Artikli na zalihi**: uzimaju se svi artikli koji u MRP parametrima imaju politiku upravljanja **Na zalihi**. Osim toga, u MRP parametrima mora biti definisan najmanje jedan od parametara: *Minimalna zaliha* ili *Tačka ponovnog naručivanja*.
> **Tolerancija zauzetosti radnih centara**: koristi se pri generisanju opterećenja za operacije planiranih proizvodnih naloga kako bi se odredilo kada MRP treba koristiti alternativnu radnu operaciju.

## Istorija

Na ovoj kartici moguće je filtrirati i pregledati listu pokrenutih MRP obrada, uz prikaz korisnika koji ih je pokrenuo, kao i datuma i vremena izvršenja.