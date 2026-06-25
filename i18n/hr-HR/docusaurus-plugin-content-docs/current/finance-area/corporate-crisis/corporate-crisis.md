---
title: Funkcionalnosti provjere krize poduzeća
sidebar_position: 1
---

:::important[Uvod]
Propisi o krizi poduzeća, uvedeni Zakonodavnom uredbom br. 14/2019 (Kodeks o krizi poduzeća i nesolventnosti), imaju za cilj spriječiti nastanak nesolventnosti primjenom alata za rano praćenje financijskih poteškoća.

Poduzeća su dužna uspostaviti odgovarajuće organizacijske, administrativne i računovodstvene sustave koji omogućuju pravodobno prepoznavanje znakova gospodarske, imovinske ili financijske neravnoteže.

Među alatima predviđenima propisima nalaze se **specifični pokazatelji**, kao što su DSCR (Debt Service Coverage Ratio), provjera kontinuiteta poslovanja i analiza održivosti duga. Neispunjavanje tih obveza može dovesti do odgovornosti uprave.

Unutar **Fluentis ERP-a** dostupne su funkcionalnosti namijenjene kontroli pokazatelja krize, koje poduzeću pomažu u ispunjavanju zahtjeva važećih propisa.

U nastavku su detaljno opisane dostupne funkcionalnosti za ispunjavanje navedenih obveza.
:::

## 1. Pristup funkcionalnosti

Upravljanje krizom poduzeća moguće je korištenjem rješenja Fluentis **Corporate Performance Monitor (CPM)**.

![](/img/it-it/finance-area/corporate-crisis/1.png)

CPM je općenito namijenjen praćenju poslovnih performansi te, posebno, izradi pokazatelja i KPI-jeva. Također se koristi za fleksibilnije upravljanje pokazateljima krize.

## 2. Funkcionalnosti CPM-a

Modul CPM sadrži odjeljak posvećen provjeri krize poduzeća koji je podijeljen u četiri kartice.

![](/img/it-it/finance-area/corporate-crisis/2.png)

Svaka kartica prikazuje izračun kontrola propisanih važećim zakonodavstvom.

Na prvoj kartici, **Provjere vanjskih institucija**, provode se kontrole institucija poput **Porezne uprave** i **INPS-a**, koje prate:

- kašnjenja u plaćanju PDV-a
- kašnjenja u plaćanju doprinosa za socijalno osiguranje i poreznih obveza zaposlenika.

Konkretno, pragovi koji aktiviraju upozorenja su:

- **PDV**: minimalni dug od 100.000 € → moguća nesolventnost
- **Ostali porezni dugovi**: više od 1.000.000 € uz kašnjenje dulje od 90 dana → upozorenje
- **Doprinosi za socijalno osiguranje**: više od 50.000 € uz kašnjenje dulje od 180 dana → upozorenje

Navedeni pragovi mogu se konfigurirati u internim tablicama sustava.

Na drugoj kartici, **Provjera neto kapitala i DSCR-a**, provjeravaju se:

- **Ukupni neto kapital**: ako je negativan, pretpostavlja se stanje krize
- **DSCR (Debt Service Coverage Ratio)**: ako je manji od 1, pretpostavlja se stanje krize

Na trećoj kartici, **Sektorski pokazatelji**, provjerava se pet sektorskih pokazatelja čije očekivane vrijednosti ovise o gospodarskom sektoru kojem poduzeće pripada. Ako su premašeni svi propisani pragovi, ponovno se pretpostavlja stanje krize.

Posljednja kartica namijenjena je izračunu **prilagođenih pokazatelja**, na temelju kojih svako poduzeće može provoditi vlastite specifične analize i procjene.

## 3. Izvori podataka

Podaci koji se koriste za provjere dolaze iz:

- **specifičnih** konfiguracijskih **tablica**
- automatskih izračuna putem **SQL** upita
- konfiguracija povezanih s **kontnim planom**
- **dospijeća plaćanja**

Prije svega, u tablici **Poduzeće** potrebno je definirati **gospodarski sektor** kojem poduzeće pripada: **Kartica Administrativne postavke > Polje Gospodarski sektor za krizu poduzeća**.

Zatim je u **kontnom planu** potrebno **dodijeliti vrste konta za krizu poduzeća** (fiksna tablica) putem polja **Kriza poduzeća** koje se nalazi u mreži **Konta** (detalji kontnog plana).

Moguće vrste su:

- **ADE-VAT** – obično se dodjeljuje kontu koje evidentira mjesečni saldo PDV-a. Za to konto potrebno je voditi otvorene stavke kako bi se mogao utvrditi nepodmireni dug.
- **ADE-OTHER** – na sličan način dodjeljuje se kontima koja evidentiraju ostale porezne obveze, također uz vođenje otvorenih stavki.
- **INPS** – dodjeljuje se obvezama za doprinose za socijalno osiguranje, također uz vođenje otvorenih stavki.
- **LIQ** – dodjeljuje se **kontnim skupinama** (glavnim kontima) koje sadrže detalje kupaca i dobavljača, iz kojih se putem novčanog toka određuju podaci o raspoloživoj likvidnosti.
- **FIN** – dodjeljuje se kontima (ili kontnim skupinama) iz kojih se putem novčanog toka dobivaju podaci o financijskim obvezama, odnosno budućim ratama kredita i leasinga.
- **RIS** – dodjeljuje se analitičkim kontima rezervi za pokriće.
- **MON** – dodjeljuje se analitičkim kontima (ili kontima) nemonetarnih troškova i prihoda.

Izračuni koji se standardno izvršavaju preuzimaju iznose:

- izravno iz računovodstvenih otvorenih stavki
- iz podataka obrađenih u posljednjem izračunu novčanog toka
- iz salda konta povezanih s određenim čvorovima **standardnog modela reklasifikacije IV direktive**.

U ovom slučaju model služi isključivo za identifikaciju konta koja treba koristiti za pojedine varijable. Iznosi se čitaju izravno iz glavne knjige, bez potrebe za međurazdobnim zaključkom ili reklasifikacijom.

## 4. Upravljanje krizom

Trenutačno sustav provodi samo **provjeru pokazatelja**, ali ne upravlja cjelokupnim operativnim procesom krize.

Moguće je konfigurirati automatska upozorenja u slučaju prekoračenja zadanih pragova pomoću zakazanih zadataka u **Supervisoru**.

## 5. Ciljne vrijednosti i gospodarski sektori

Svaki gospodarski sektor ima vlastite unaprijed definirane **ciljne vrijednosti**.

Te su vrijednosti pohranjene ili u internim, korisniku nedostupnim tablicama (za provjere vanjskih institucija) ili u obrascu **Targeting**, gdje standardni sektorski pokazatelji nisu izmjenjivi jer imaju status *standard*. Korisnik može mijenjati samo ciljne vrijednosti vlastitih prilagođenih pokazatelja.

## 6. Deskriptori i formule

Osim provjera vanjskih institucija, koje se izračunavaju u izvornom programskom kodu, svaki drugi pokazatelj povezan je s **deskriptorom** (pogledajte istoimeni obrazac u glavnom izborniku CPM-a), koji definira njegovu formulu izračuna, primjerice:

- **Pokazatelj održivosti financijskih troškova**: izračunava se kao **Financijski troškovi / Prihodi**, a pohranjen je u deskriptoru **03.01** s formulom **[RIC-OneriFin]/[RIC-Fatturato]**.
- **Pokazatelj adekvatnosti kapitala**: izračunava se kao **Neto kapital / Ukupni dug**, a pohranjen je u deskriptoru **03.02** s formulom **[RIC-PatNetto]/[RIC-DebTot]**.

![](/img/it-it/finance-area/corporate-crisis/5.png)

Formule se temelje na **varijablama** koje se u formuli navode pomoću njihovih oznaka unutar uglatih zagrada.

Svaka **varijabla** (pogledajte istoimeni obrazac u glavnom izborniku CPM-a) poziva vlastiti SQL upit.

![](/img/it-it/finance-area/corporate-crisis/6.png)

SQL upiti na kojima se temelje standardne varijable dio su standardnog sustava i korisnik ih ne može mijenjati. Međutim, na temelju ponuđenih upita moguće je izraditi vlastite prilagođene verzije koje odgovaraju specifičnostima računovodstvenog sustava pojedine implementacije.

## 7. Repozitorij

Sustav u obrascu **Repozitorij** pohranjuje rezultate svih izvršenih izračuna, stvarajući povijesnu bazu podataka pogodnu za analize i nadzorne ploče.

Svaka obrada povezana je s određenim datumom, pri čemu svaki pokazatelj može imati samo jedan rezultat za svaki dan.

![](/img/it-it/finance-area/corporate-crisis/7.png)