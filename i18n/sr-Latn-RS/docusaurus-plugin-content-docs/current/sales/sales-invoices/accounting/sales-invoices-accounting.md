---
title: Knjiženje izlaznih faktura
sidebar_position: 1
---

Postupak se pokreće putem menija **Prodaja > Izlazne fakture > Knjiženje > Knjiženje izlaznih faktura**.

Da bi faktura mogla da se knjiži, mora da ispunjava određene uslove: u zaglavlju mora imati postavljenu oznaku *Odštampano*, ne sme biti tipa *pro-forma*, a vrsta fakture mora sadržati opšti šablon knjiženja.

### Knjiženje faktura

Forma u gornjem delu sadrži filtere za pretragu i prikaz, u mreži podataka, liste faktura spremnih za knjiženje koje postoje u sistemu.

Na dnu forme nalaze se parametri za upravljanje knjiženjem:

**Datum unosa jednak datumu dokumenta**: ova oznaka nalaže knjiženje svake pojedinačne fakture na datum njenog izdavanja.

Ako je oznaka isključena, aktivira se sledeće polje, **Datum knjiženja**, u kojem je moguće postaviti fiksni datum knjiženja.

**Koristi kurs iz kursne liste**: ovom oznakom sistem proverava kursnu listu kako bi koristio kurs važeći na datum knjiženja/fakture (ili poslednji prethodno unet kurs).

Ako oznaka nije postavljena, koristiće se *kurs naveden u zaglavlju fakture*.

**Ažuriraj izmene na dokumentu**: polje je aktivno *samo* ako je prethodna oznaka uključena. Njegova svrha je da ažurira i kurs u zaglavlju fakture, prepisujući postojeću vrednost.

**Obračun PDV-a = Datum dokumenta**: oznaka određuje da PDV period knjiženja bude jednak datumu fakture. Ako se želi koristiti mogućnost fakturisanja do 15. dana narednog meseca nakon datuma otpreme (odloženo fakturisanje), oznaku treba ukloniti kako bi se PDV period preuzeo iz datuma početka transporta u izvornom dokumentu, u skladu sa PDV propisima.

**Koristi poslovnicu za dodelu divizije**: oznaka povezana sa poljem *Referentna poslovnica preduzeća* u karticama kupaca i dobavljača, gde je moguće povezati kupca/dobavljača sa poslovnicom, a preko nje sa drugom poslovnom *divizijom* od trenutno aktivne. Ova oznaka aktivira proveru da li kod kupca postoji referentna poslovnica i da li je preko nje povezana određena divizija. Ako postoji, faktura se knjiži toj diviziji (čak i ako je faktura dodeljena diviziji X, računovodstvena registracija biće u diviziji Y). Ova opcija olakšava izradu finansijskih izveštaja po divizijama u situacijama kada se fakturisanje obavlja odvojeno, ali se rezultati žele objediniti u glavnoj diviziji.

#### Posebna dugmad

> **Pretraži fakture**: pretraga faktura; prikazuju se sve odštampane i neproknjižene fakture.  
> **Knjiženje faktura**: izvršava knjiženje odabranih faktura prema definisanim podešavanjima.

### Parametri

U ovoj formi definišu se opšti elementi knjiženja faktura.

**Knjiženje promotivnih poklona**: ovom oznakom aktivira se upravljanje knjiženjem gratis artikala i omogućavaju povezana polja.

1. Ako faktura koja se knjiži sadrži gratis artikal, a parametar nije postavljen, sistem će upozoriti korisnika porukom o nedostajućoj konfiguraciji. U tom slučaju faktura će biti proknjižena bez posebne obrade reda sa gratis artiklom, koji će morati ručno da se obradi u računovodstvu.

2. Ako je upravljanje gratis artiklima aktivirano, ali nisu uneti analitički konti u sledećim poljima, sistem će na kraj standardnih knjiženja dodati potrebne stavke za storno prihoda koristeći isti analitički konto definisan za prodajni artikal.

3. Ako je uključena oznaka **Zameni konto stavke**, aktivira se polje za unos analitičkog konta za storno avansa, koji će se koristiti umesto analitičkog konta artikla u dodatnim knjiženjima.

**PDV šifra za poklone iz šifarnika**: popunjavanjem ovog polja (obično PDV šifrom koja odgovara slučaju „van PDV sistema“ ili „oslobođeno PDV-a“) automatski će se generisati stavka storna vrednosti gratis artikla u PDV knjizi kada se PDV ne zaračunava kupcu.

**Konto za storno PDV-a**: koristi se kada gratis artikal na fakturi nema oznaku **Teret PDV-a**, kojom se određuje da li PDV na gratis artikal snosi kupac (sa oznakom) ili ne (bez oznake). Ovaj iznos biće evidentiran i storniran samo ako je definisan *konto za storno PDV-a*; u suprotnom će operacija morati ručno da se obradi u računovodstvu (i ovde sistem prikazuje upozorenje ako postavka nedostaje).

**Grupiši automatske redove fakture**: kada je oznaka uključena, konta koja se automatski dodaju u dnevnik knjiženja (na primer kod knjiženja gratis artikala gde se kupac pojavljuje više puta, jednom za ukupan iznos fakture, a zatim za storno gratis artikala) grupišu se po analitičkom kontu radi preglednijeg knjiženja.

**Detaljni konto finansijskog popusta**: ovo polje koristi se za evidentiranje finansijskog popusta povezanog sa dospećem fakture.

#### Posebno dugme

> **Sačuvaj parametre**: omogućava čuvanje definisanih parametara za knjiženje gratis artikala.

Nakon odabira faktura (na kartici *Knjiženje*) i definisanja parametara, fakture se mogu knjižiti pomoću dugmeta *Knjiženje faktura*.

### Prethodna knjiženja

Forma prikazuje listu izvršenih knjiženja radi pregleda i eventualnog poništavanja pomoću odgovarajućih dugmadi.

Poništavanje je moguće samo ako je period još uvek otvoren za izmene (dnevnik nije štampan, PDV knjiga nije štampana, periodični obračun nije štampan, zatvaranje konta nije izvršeno, a otvorene stavke nisu zatvorene naplatom ili menicom).

**Knjiženje faktura**: pregled sa detaljima izvršenih operacija. Popunjava se nakon pretrage, a moguće je odabrati operacije na koje će se primeniti funkcije iz gornjeg menija.

Podaci u donjim pregledima, **Dokumenti** i **Zapis glavne knjige**, odgovaraju operaciji odabranoj u gornjem pregledu. Dvostrukim klikom u području fakture/zapisa moguće je otvoriti povezanu fakturu ili knjiženje.

#### Posebna dugmad

> **Pretraga knjiženja**: pretraga liste izvršenih knjiženja.  
> **Pregled knjiženja na ekranu**: prikazuje pregled ispisa knjiženja.  
> **Poništi knjiženje**: briše kompletno izvršeno knjiženje zajedno sa svim povezanim fakturama.  
> **Poništi fakturu**: vraća samo odabranu fakturu.

### Poruke o greškama

Ove greške mogu nastati zbog nepravilnog upravljanja podacima od strane korisnika, odnosno zbog nedostatka ključnih informacija, ili zbog pogrešnih konfiguracija i podešavanja parametara i osnovnih podataka.

Greške u konfiguraciji ili nedostaci osnovnih podataka uglavnom se odnose na okruženja u kojima nije pokrenut postupak Fast Start.

:::note[Poruka]
Faktura broj ... vrste ... godine ... kompanije AAA d.o.o. ne može da se knjiži jer **ne postoji konto protustavke**.
:::

Računovodstvena protustavka, u kontekstu izlazne ili ulazne fakture, predstavlja konto na koji se evidentira prihod ili trošak.

Generalno, knjiženje fakture zasniva se na tri ključna elementa koja možemo proveriti otvaranjem [**računovodstvenog šablona**](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) kojim pokušavamo da proknjižimo ovu fakturu.

Da bismo utvrdili koji se šablon koristi, potrebno je proveriti tabelu [**vrsta faktura**](/docs/configurations/tables/sales/invoices-type), gde je definisana veza.

Tri ključna elementa su: kupac ili dobavljač, PDV i trošak ili prihod. Ako jedan od njih nedostaje, knjiženje nije moguće.

U računovodstvenom šablonu, ručno kreiranom ili izmenjenom u odnosu na standard generisan *Fast Start* procedurom, može izgledati da je konto prihoda definisan kao fiksni konto jer su uneti konto i analitički konto. Međutim, pošto je postavljen kriterijum čitanja analitičkog konta poreske osnovice, program i dalje traži podatke za zamenu, prvo na fakturi, a zatim na kartici kupca.

**Rešenje je definisati podatak o prometu prodaje na fakturi, koji može biti povezan direktno sa karticom artikla. Alternativno, moguće je definisati podrazumevani konto na kartici kupca. Na taj način automatsko knjiženje može pravilno da funkcioniše.**

Napomena: ni kriterijum čitanja *Ukupna poreska osnovica* u računovodstvenom šablonu ne može funkcionisati jer bi pokušao da čita PDV mrežu knjiženja u kojoj nedostaje obavezan podatak – konto protustavke. Zbog toga nije predviđen način knjiženja sa fiksnim analitičkim kontom; potrebno je uvek upravljati prometom prodaje i nabavke ili koristiti kartice kupaca i dobavljača.

:::note[Poruka]
Faktura broj ... vrste ... godine ... kompanije AAA d.o.o. ne može da se knjiži jer **knjiženje nije izbalansirano**.
:::

:::note[Poruka]
Faktura broj ... vrste ... godine ... kompanije AAA d.o.o. ne može da se knjiži jer **u dnevniku postoji 1 red sa kontom bez analitičkog konta**.
:::

Ova poruka ukazuje na činjenicu da softver ne može da sačuva knjiženja u kojima nije definisan detaljni analitički konto.

Jedan od mogućih razloga, osim konfiguracije računovodstvenog šablona koji definiše samo glavna konta bez detaljnih analitičkih konta, može biti nedostatak veze između vrste konta (na primer novo dodate vrste) i pripadajućeg glavnog konta u [**parametrima računovodstva**](/docs/configurations/parameters/finance/accounting-parameters). Nedostatak tog parametra sprečava izvršavanje automatizma koji dovršava knjiženje.

:::note[Poruka]
Faktura broj ... vrste ... godine ... kompanije AAA d.o.o. ne može da se knjiži jer **vrednost otvorenih stavki ne odgovara računovodstvenom knjiženju**.
:::

Ova poruka obično znači da na fakturi nisu definisani uslovi plaćanja, zbog čega otvorena stavka ne može da se kreira te nastaje razlika koja uzrokuje blokadu postupka.
Odluka da li će sistem blokirati knjiženje u takvom slučaju definiše se parametrom u računovodstvenom šablonu.

<iframe width="560" height="315" src="https://www.youtube.com/embed/NgroQvVOgD8" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>