---
title: Knjiženje izlaznih računa
sidebar_position: 1
---

Postupak se otvara putem izbornika **Prodaja > Izlazni računi > Knjiženje > Knjiženje izlaznih računa**.

Da bi se račun mogao knjižiti, mora zadovoljiti niz uvjeta: u zaglavlju mora imati postavljenu oznaku *Ispisano*, ne smije biti tipa *pro-forma*, a vrsta računa mora sadržavati opći predložak knjiženja.

### Knjiženje računa

Obrazac u gornjem dijelu sadrži filtre pretraživanja za pronalaženje i prikaz, u mreži podataka, popisa računa spremnih za knjiženje koji postoje u sustavu.

Na dnu obrasca nalaze se parametri za upravljanje knjiženjem:

**Datum unosa jednak datumu dokumenta**: ova oznaka nalaže knjiženje svakog pojedinog računa na datum njegova izdavanja.

Ako je oznaka isključena, aktivira se sljedeće polje, **Datum objave**, u kojem je moguće postaviti fiksni datum knjiženja.

**Koristi tečaj iz tečajne tablice**: ovom oznakom sustav provjerava tečajnu listu kako bi koristio tečaj važeći na datum knjiženja/računa (ili posljednji prethodno uneseni tečaj).

Ako oznaka nije postavljena, koristit će se *tečaj naveden u zaglavlju računa*.

**Ažuriraj izmjene na dokumentu**: polje je aktivno *samo* ako je prethodna oznaka uključena. Njegova je svrha ažurirati i tečaj u zaglavlju računa, prepisujući postojeću vrijednost.

**Obračun PDV-a = Datum dokumenta**: oznaka određuje da PDV razdoblje knjiženja bude jednako datumu računa. Ako se želi koristiti mogućnost fakturiranja do 15. dana sljedećeg mjeseca nakon datuma otpreme (odgođeno fakturiranje), oznaku treba ukloniti kako bi se PDV razdoblje preuzelo iz datuma početka prijevoza u izvornom dokumentu, kako je propisano PDV regulativom.

**Koristi poslovnu podružnicu za dodjelu odjela**: oznaka povezana s poljem *Referentna poslovnica poduzeća* u karticama kupaca i dobavljača, gdje je moguće povezati kupca/dobavljača s poslovnicom, a preko nje s drugom poslovnom *divizijom* od trenutno aktivne. Ova oznaka aktivira provjeru postoji li kod kupca referentna poslovnica te, putem te veze, postoji li pridružena divizija. Ako postoji, račun se knjiži toj diviziji (čak i ako je račun dodijeljen diviziji X, računovodstvena registracija bit će u diviziji Y). Ova opcija olakšava izradu financijskih izvještaja po divizijama u situacijama gdje se fakturiranje odvija zasebno, ali se rezultati žele objediniti u glavnoj diviziji.

#### Posebni gumbi

> **Traži račun**: pretraživanje računa; prikazuju se svi ispisani i ne proknjiženi računi.  
> **Knjiženje računa**: izvršava knjiženje odabranih računa prema definiranim postavkama.

### Parametri

U ovom obrascu definiraju se opći elementi knjiženja računa.

**Knjiženje promotivnih poklona**: ovom oznakom aktivira se upravljanje knjiženjem gratis artikala te se omogućuju povezana polja.

1. Ako račun koji se knjiži sadrži gratis artikl, a parametar nije postavljen, sustav će upozoriti korisnika porukom o nedostajućoj konfiguraciji. U tom slučaju račun će biti knjižen bez posebne obrade retka gratis artikla, koji će se morati ručno obraditi u računovodstvu.

2. Ako je upravljanje gratis artiklima aktivirano, ali nisu unesena analitička konta u sljedećim poljima, sustav će na kraj standardnih knjiženja dodati potrebne stavke za storno prihoda koristeći isti analitički konto definiran za prodajni artikl.

3. Ako je uključena oznaka **Zamijeni do konta stavke**, aktivira se polje za unos analitičkog konta za storno predujmova, koji će se koristiti umjesto analitičkog konta artikla u dodatnim knjiženjima.

**Šifra PDV-a za darove iz šifarnika**: popunjavanjem ovog polja (obično PDV šifrom koja odgovara slučaju „izvan područja PDV-a” ili „oslobođeno PDV-a”) automatski će se generirati stavka storno vrijednosti gratis artikla u PDV knjizi, kada se PDV ne tereti kupcu.

**Konto za storno PDV-a**: koristi se kada gratis artikl na računu nema oznaku **Teret PDV-a**, kojom se određuje snosi li PDV na gratis artikl kupac (s oznakom) ili ne (bez oznake). Ovaj iznos bit će evidentiran i storniran samo ako je definiran *konto za storno PDV-a*; u suprotnom će se operacija morati ručno obraditi u računovodstvu (i ovdje sustav prikazuje upozorenje ako postavka nedostaje).

**Grupiraj automatske redove računa**: kada je oznaka uključena, konta koja se automatski dodaju u dnevnik knjiženja (npr. kod knjiženja gratis artikala gdje se kupac pojavljuje više puta, jednom za ukupan iznos računa, a zatim za storniranje gratis artikala) grupiraju se po analitičkom kontu radi kompaktnijeg knjiženja.

**Detaljni konto financijskog popusta**: ovo polje koristi se za evidentiranje financijskog popusta povezanog s dospijećem računa.

#### Posebni gumb

> **Spremi parametre**: omogućuje spremanje definiranih parametara za knjiženje gratis artikala.

Nakon odabira računa (na kartici *Knjiženje*) i definiranja parametara, računi se mogu knjižiti pomoću gumba *Knjiženje računa*.

### Prethodna knjiženja

Obrazac prikazuje popis izvršenih knjiženja radi pregleda i eventualnog poništavanja pomoću odgovarajućih gumba.

Poništavanje je moguće samo ako je razdoblje još uvijek otvoreno za izmjene (dnevnik nije ispisan, PDV knjiga nije ispisana, periodični obračun nije ispisan, zatvaranje konta nije izvršeno, a otvorene stavke nisu zatvorene naplatom ili mjenicom).

**Knjiženje računa**: pregled s detaljima izvršenih operacija. Popunjava se nakon pretraživanja, a moguće je odabrati operacije na koje će se primijeniti funkcije iz gornjeg menija.

Podaci u donjim pregledima, **Dokumenti** i **Zapis glavne knjige**, odgovaraju operaciji odabranoj u gornjem pregledu. Dvostrukim klikom u području računa/zapisa moguće je otvoriti povezani račun ili knjiženje.

#### Posebni gumbi

> **Pretraga knjiženja**: pretraživanje popisa izvršenih knjiženja.  
> **Ekranski pregled knjiženja**: prikazuje pregled ispisa knjiženja.  
> **Povrati knjiženje**: briše cijelo izvršeno knjiženje zajedno sa svim povezanim računima.  
> **Povrati račun**: vraća samo odabrani račun.

### Poruke o pogreškama

Ove pogreške mogu nastati zbog nepravilnog upravljanja podacima od strane korisnika, odnosno zbog nedostatka ključnih informacija, ili zbog pogrešnih konfiguracija i postavki parametara i osnovnih podataka.

Pogreške konfiguracije ili nedostaci osnovnih podataka uglavnom se odnose na okruženja u kojima nije pokrenut postupak Fast Start.

:::note[Poruka]
Račun broj ... vrste ... godine ... tvrtke AAA d.d. ne može se knjižiti jer **ne postoji konto protustavke**.
:::

Računovodstvena protustavka, u kontekstu izlaznog ili ulaznog računa, predstavlja konto na koji se evidentira prihod ili trošak.

Općenito, knjiženje računa temelji se na tri ključna elementa koja možemo provjeriti otvaranjem [**računovodstvenog predloška**](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) kojim pokušavamo knjižiti ovaj račun.

Kako bismo utvrdili koji se predložak koristi, potrebno je provjeriti tablicu [**vrsta računa**](/docs/configurations/tables/sales/invoices-type), gdje je definirana poveznica.

Tri su ključna elementa: kupac ili dobavljač, PDV te trošak ili prihod. Ako jedan od njih nedostaje, knjiženje nije moguće.

U računovodstvenom predlošku, ručno kreiranom ili izmijenjenom u odnosu na standard generiran *Fast Start* procedurom, može se činiti da je konto prihoda definiran kao fiksni konto jer su uneseni konto i analitički konto. Međutim, budući da je postavljen kriterij čitanja analitičkog konta oporezive osnovice, program i dalje traži podatke za zamjenu, prvo u računu, a zatim u kartici kupca.

**Rješenje je definirati podatak o prometu prodaje na računu, koji može biti povezan izravno s karticom artikla. Alternativno, moguće je definirati zadani konto na kartici kupca. Na taj način automatsko knjiženje može ispravno funkcionirati.**

Napomena: ni kriterij čitanja *Ukupna oporeziva osnovica* u računovodstvenom predlošku ne može funkcionirati jer bi pokušao čitati PDV mrežu knjiženja u kojoj nedostaje obvezan podatak – konto protustavke. Stoga nije predviđen način knjiženja s fiksnim analitičkim kontom; potrebno je uvijek upravljati prometom prodaje i nabave ili koristiti kartice kupaca i dobavljača.

:::note[Poruka]
Račun broj ... vrste ... godine ... tvrtke AAA d.d. ne može se knjižiti jer **knjiženje nije uravnoteženo**.
:::

Osim očitog značenja poruke, koja sprječava spremanje knjiženja kada ukupni dugovni i potražni iznosi nisu jednaki, mogući uzrok može biti pogrešna konfiguracija računovodstvenog predloška, primjerice nedostatak retka za PDV. U tom slučaju, ako račun sadrži PDV i sustav izvrši njegovo izdvajanje u prvom dijelu postupka, neće moći generirati odgovarajuće knjiženje u dnevniku koje bi uravnotežilo zapis, pa će se prikazati navedena pogreška.

Napomena: ova blokada kontrolira se parametrom, ali se snažno preporučuje da se ne isključuje kako bi se prihvatila neuravnotežena knjiženja, osim u iznimnim slučajevima ili privremeno radi provjere rezultata (pogrešnog) knjiženja.

:::note[Poruka]
Račun broj ... vrste ... godine ... tvrtke AAA d.d. ne može se knjižiti jer **u dnevniku postoji 1 redak s kontom bez analitičkog konta**.
:::

Ova poruka upućuje na činjenicu da softver ne može spremiti knjiženja u kojima nije definiran detaljni analitički konto.

Jedan od mogućih razloga, osim konfiguracije računovodstvenog predloška koji definira samo glavna konta bez detaljnih analitičkih konta, može biti nedostatak poveznice između vrste konta (primjerice novo dodane vrste) i pripadajućeg glavnog konta u [**parametrima računovodstva**](/docs/configurations/parameters/finance/accounting-parameters). Nedostatak tog parametra sprječava izvršavanje automatizma koji dovršava knjiženje.

:::note[Poruka]
Račun broj ... vrste ... godine ... tvrtke AAA d.d. ne može se knjižiti jer **vrijednost otvorenih stavki ne odgovara računovodstvenom knjiženju**.
:::

Ova poruka obično znači da na računu nisu definirani uvjeti plaćanja, zbog čega se otvorena stavka ne može kreirati te nastaje razlika koja uzrokuje blokadu postupka.

Odluka hoće li sustav blokirati knjiženje u takvom slučaju definira se parametrom u računovodstvenom predlošku.

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/NgroQvVOgD8" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>