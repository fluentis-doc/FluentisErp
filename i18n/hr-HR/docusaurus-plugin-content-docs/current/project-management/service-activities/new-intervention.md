---
title: Nova intervencija
sidebar_position: 2
---

Potrebno je unijeti sljedeće podatke:

**Vrsta intervencije**: sadrži [vrstu intervencije](/docs/configurations/tables/project-management/intervention-type).

**Kupac**: sadrži kupca kojem je intervencija namijenjena.

**Godina/Broj/Datum**: sadrži osnovne podatke o intervenciji. U slučaju promjene datuma, sustav će zatražiti potvrdu želi li se ažurirati i svi ostali datumi na dokumentu (troškovi, usluge).

**Resurs**: označava resurs odgovoran za intervenciju te se automatski predlaže na novim redcima.

**Zaposlenik**: označava zaposlenika povezanog sa šifarnikom resursa.

Obrazac sadrži više kartica.

## Zaglavlje

Na ovoj kartici nalaze se opći podaci o intervenciji, kao što su **Valuta**, **Tečaj**, **Bilješke**, **Audit**, povezani **Cjenik**, oznaka **Fakturirano** te **Status intervencije**.

Mogući statusi intervencije su:

- <u>Uneseno</u>: početni status intervencije koji označava novo uneseni dokument.
- <u>Za odobriti</u>: status kojim resurs potvrđuje da je unio sve potrebne podatke. Sustav ponovno izračunava troškove prema uvjetima definiranim na intervenciji, dodaje eventualne naknade za službeni put i slično te generira plan fakturiranja kao pregled onoga što će biti fakturirano.
- <u>Odobreno</u>: status koji koristi odgovorna osoba za provjeru intervencija koje su prijavili resursi. Na temelju odgovarajućih postavki u vrsti intervencije generira se pripadajuća prijava aktivnosti za resurs.
- <u>Kontrolirano</u>: status kojim intervencija postaje spremna za fakturiranje.
- <u>Fakturirano</u>: intervencija je fakturirana. Ovaj status nije moguće postaviti ručno.
- <u>Djelomično fakturirano</u>: označava intervenciju kod koje su neki redci plana fakturiranja fakturirani, a neki nisu.
- <u>Prisilno zatvoreno</u>: označava intervenciju koja je prisilno zatvorena te nije niti će ikada biti fakturirana. Moguće je dodijeliti i prilagođeni razlog obustave.
- <u>Suspendirano</u>: označava privremeno obustavljenu intervenciju koja je isključena iz fakturiranja, ali se kasnije može ponovno aktivirati. Moguće je dodijeliti i prilagođeni razlog obustave.

**Kartica Plaćanja** i **Kartica Popusti** omogućuju konfiguriranje podataka koji će se koristiti na računima generiranima iz intervencije.

**Dodatni podaci**: prikazuje eventualna **Dodatni podaci** polja definirana za intervenciju.

**Dokumenti u privitku**: prikazuje dokumente povezane s intervencijom.

## Troškovi

Ova kartica podijeljena je na tri pododjeljka:

### Troškovi intervencije koje je imao resurs

Prikazuje troškove koje je imao resurs, a koji se u pravilu automatski preuzimaju iz šifarnika resursa ako su tamo definirani. Ti će se troškovi prenijeti u **aktivnostima** na karticu **Putni troškovi**, generiranu iz intervencije, te ih je po potrebi moguće označiti i kao troškove za fakturiranje.
Svaki redak može imati vlastiti privitak, primjerice dokaz o nastalom trošku, koji je vidljiv u odjeljku **Priloženi dokumenti**.

### Detalji kumulativnog troška

Prikazuje je li trošak nastao za više resursa te prikazuje njihove nazive i pripadajuće udjele.

### Troškovi intervencije za fakturiranje

Prikazuje troškove koji će se fakturirati kupcu. Oni se u pravilu automatski preuzimaju iz šifarnika kupca ako su definirani. Mogu nastati i iz troškova koje je imao resurs, a koji su označeni za fakturiranje. Ti će troškovi biti uključeni u plan fakturiranja.
Moguće je odabrati samo one vrste troškova koje su posebno definirane kao **putni troškovi**.
Troškovi se definiraju sljedećim poljima:

- **Resurs**: resurs koji je imao trošak; prema zadanim postavkama predlaže se resurs iz zaglavlja.
- **Tip troška**: određuje vrstu troška i pripadajući **Opis**. Ovisno o vrsti troška aktiviraju se odgovarajuća polja. Primjerice, za naknadu kilometraže omogućuju se polja **KM** i **Trošalk km**, dok se za troškove poput prehrane i smještaja omogućuje polje **Iznos troška**, a ostala polja ostaju onemogućena.
- **Datum troška**: datum nastanka troška. Prema zadanim postavkama preuzima se datum iz zaglavlja intervencije, ali ga je moguće promijeniti.
- **Iznos troška**: omogućuje izravan unos iznosa troška, primjerice za povrat troškova obroka.
- **KM**: broj prijeđenih kilometara uz pripadajuću **Cijenu po kilometru**.
- **Trošak po satu**: satnica koja se koristi za troškove vrste **Putni sati**.
- **Datum/Vrijeme polaska**: datum i vrijeme polaska.
- **Datum/Vrijeme dolaska**: datum i vrijeme dolaska.
- **Putni sati**: broj sati putovanja izračunat na temelju datuma i vremena.
- **Vrijednost paušala**: alternativa polju **Iznos troška**. Najčešće je definiran u šifarniku resursa i automatski se predlaže te ga korisnik ne može mijenjati. Koristi se kada su naknade unaprijed dogovorene i nisu podložne izmjenama.
- **PDV**: određuje PDV koji će se primijeniti.
- **Ukupan trošak**: izračunato polje koje prikazuje ukupan trošak (npr. kilometri × cijena po kilometru, sati putovanja × satnica i sl.).
- **Za povrat**: označava treba li trošak biti nadoknađen.
- **Prilozi**: označava da redak sadrži privitke koji su dostupni na kartici **Priloženi dokumenti**.
- **Zajednički trošak**: označava da postoji raspodjela zajedničkog troška, vidljiva na kartici s detaljima.
- **Način plaćanja**: način plaćanja korišten za podmirenje troška.
- **Bilješka**: dodatne napomene korisnika.

### Polja specifična za karticu **Troškovi intervencije za fakturiranje**

- **Iznos troška**: iznos troška koji će se fakturirati kada se koriste fiksni iznosi.
- **Ukupni fakturabilni iznos**: iznos koji će se stvarno prenijeti u plan fakturiranja, a zatim i na račun. Kod troškova definiranih kao **paušalni** ovdje će biti prikazan iznos izračunat prema pravilima paušala.

  Ako trošak potječe s kartice **Troškovi intervencije** koje je imao resurs, ovdje će se inicijalno prikazati vrijednost iz polja **Iznos troška**. Takva je logika primijenjena zato što stvarni trošak može iznositi, primjerice, **12,73 EUR**, dok se kupcu želi fakturirati drugačiji, primjerice zaokruženi iznos. Korisnik može izmijeniti vrijednost u polju **Iznos fakturabilnog troška**, primjerice na **15,00 EUR**, i upravo će taj iznos biti prenesen na račun.
  U tom će slučaju polje **Iznos troška** prikazivati stvarni trošak koji je imao resurs, dok će polje **Iznos fakturabilnog troška** sadržavati iznos koji će se stvarno fakturirati.

- **Ukupni fakturabilni iznos**: izračunato polje koje prikazuje ukupan fakturabilni iznos troška (npr. kilometri × cijena po kilometru, sati putovanja × satnica ili, kod fiksnih vrijednosti, jednak je vrijednosti polja **Iznos fakturabilnog troška**).
- **Na računu**: određuje hoće li trošak biti uključen u plan fakturiranja.

Ako je u **Vrsti intervencije** uključena oznaka **Vanjska**, troškovi definirani za resurs neće biti predloženi na kartici **Troškovi intervencije** koje je imao resurs. Umjesto toga, troškovi definirani na kartici **Troškovi intervencije** u šifarniku kupca bit će, ovisno o konfiguraciji, predloženi na kartici **Troškovi intervencije za fakturiranje**.

### Ostali troškovi

Omogućuje unos ostalih općih troškova koji će biti uključeni u plan fakturiranja.

Gumb **Trošak za fakturiranje**: nalazi se na kartici **Troškovi intervencije**. Odabirom troška i klikom na ovaj gumb, trošak se automatski prenosi na karticu **Troškovi intervencije za fakturiranje**. Vrijednost iz polja **Iznos troška** prenosi se i u polje **Iznos troška** i u polje **Iznos fakturabilnog troška** na kartici **Troškovi intervencije za fakturiranje** (vidjeti objašnjenje tog polja u prethodnom poglavlju).

Ako ista vrsta troška već postoji među troškovima za fakturiranje ili kupac ima definiranu paušalnu naknadu, korisnik će biti upitan želi li nastaviti s ponovnim izračunom.

Na kartici **Troškovi intervencije za fakturiranje** **Trošak km** ili **Trošak po satu** mogu se razlikovati od vrijednosti prikazanih na kartici **Troškovi intervencije**. To se događa kada su isti troškovi definirani u šifarniku kupca s navedenom **Cijenom po kilometru** ili **Satnicom**, ali bez broja kilometara ili sati.

U tom slučaju tarifa definirana za kupca ima prednost pred tarifom resursa navedenom u troškovima koje je imao resurs.

### Gumb Preračunaj troškove

Ovaj gumb koristi se samo po potrebi jer se isti postupak automatski izvršava pri promjeni statusa intervencije iz **Uneseno** u **Za odobrenje**.

Postupak izvršava:

### 1. Izračun stvarnih troškova za fakturiranje kupcu

Ako su u šifarniku kupca definirani troškovi s uključenom oznakom **Stvarni trošak**, a isti je trošak evidentirao i resurs na kartici **Troškovi intervencije**, trošak će se automatski prenijeti među troškove za fakturiranje.

> Kod troškova koji nisu vrste **Udaljenost** ili **Putni sati** (npr. ručak, cestarina i sl.), preuzet će se **Iznos troška** koji je evidentirao resurs te će se prenijeti među troškove za fakturiranje.

> Kod troškova vrste **Udaljenost** ili **Putni sati** (naknada kilometraže i naknada sati putovanja), u šifarniku kupca moguće je definirati **Cijenu po kilometru** ili **Satnicu**. Prilikom ponovnog izračuna spojit će se broj kilometara odnosno sati koje je evidentirao resurs s tarifama definiranim u šifarniku kupca te će se dobiti potpuni zapis troška sa svim podacima i ukupnim iznosom.

:::note[Primjer 1]

Na kartici **Troškovi intervencije** evidentiran je trošak **Naknada kilometraže** od **100 km × 1 € po kilometru**.

Trošak se prenosi za fakturiranje pomoću gumba **Trošak za fakturiranje** na alatnoj traci.

Budući da nema dodatnih postavki, na kartici **Troškovi intervencije za fakturiranje** prikazat će se **100 km × 1 € po kilometru**, odnosno **ukupno za fakturiranje: 100 €**.

:::

:::note[Primjer 2]

Na kartici **Troškovi intervencije** evidentiran je trošak **Naknada kilometraže** od **100 km × 1 € po kilometru**.

U šifarniku kupca, na kartici **Intervencije**, definirana je stavka troška **Naknada kilometraže** bez uključene oznake **Stvarni trošak**, pri čemu je definirana samo **Cijena po kilometru od 2 €**, bez broja kilometara.

Korištenjem gumba **Trošak za fakturiranje**, tarifa definirana u šifarniku kupca imat će prednost pred tarifom navedenom na kartici **Troškovi intervencije**.

Na kartici **Troškovi intervencije za fakturiranje** prikazat će se **100 km × 2 € po kilometru**, odnosno **ukupno za fakturiranje: 200 €**.

Ako se gumb **Trošak za fakturiranje** ne koristi, trošak **Naknada kilometraže** neće biti prenesen u fakturiranje jer oznaka **Stvarni trošak** nije uključena (čak ni pri promjeni statusa iz **Uneseno** u **Za odobrenje**).

:::
:::note[Primjer 3]
Na kartici **Troškovi intervencije** evidentiran je trošak **Naknada kilometraže** od **100 km × 1 € po kilometru**.
U šifarniku kupca, na kartici **Intervencije**, definirana je stavka troška **Naknada kilometraže** s uključenom oznakom **Stvarni trošak**, pri čemu je definirana samo **Cijena po kilometru od 2 €**, bez broja kilometara.
Prilikom promjene statusa intervencije iz **Uneseno** u **Za odobrenje** automatski će se pokrenuti svi ponovni izračuni troškova i plana fakturiranja.
Trošak koji je evidentirao resurs automatski će se prenijeti na karticu **Troškovi intervencije za fakturiranje**, pri čemu će tarifa definirana u šifarniku kupca imati prednost pred tarifom iz kartice **Troškovi intervencije**.
Na kartici **Troškovi intervencije za fakturiranje** prikazat će se **100 km × 2 € po kilometru**, odnosno **ukupno za fakturiranje: 200 €**.
U ovom slučaju trošak **Naknada kilometraže** bit će uključen u fakturiranje i bez korištenja gumba **Troškovi za fakturiranje**, jer je u šifarniku kupca označen kao **Stvarni trošak**.
:::

:::note[Primjer 4]

Na kartici **Troškovi intervencije** evidentiran je trošak **Naknada kilometraže** od **100 km × 1 € po kilometru**.
U šifarniku kupca, na kartici **Intervencije**, definirana je stavka troška **Naknada kilometraže** bez uključene oznake **Stvarni trošak**, pri čemu su definirani **2 € po kilometru** i **150 km**.
Prilikom unosa intervencije, među **Troškovima intervencije za fakturiranje** automatski će se predložiti trošak **Naknada kilometraže** iz šifarnika kupca.
Na kartici **Troškovi intervencije za fakturiranje** prikazat će se **150 km × 2 € po kilometru**, odnosno **ukupno za fakturiranje: 300 €**.

:::

Troškovi koje je imao resurs i njihov iznos predstavljaju **naknadu** koja pripada resursu (i koja će se, ako se koristi modul obračuna plaća, prenijeti i na platnu listu). Zbog toga se taj iznos može razlikovati od iznosa koji se fakturira kupcu, pa je moguće definirati zasebne tarife u šifarniku kupca.

### 2. Izračun paušalnih troškova

Ako su u šifarniku kupca definirani paušalni troškovi s uvjetima **po resursu** i/ili **po danu**, oni će se automatski ponovno izračunati.

:::note[Primjer]

Na intervenciji koja traje jedan dan evidentirana su **3 resursa**, odnosno postoje **3 retka usluge**.
Paušalni troškovi definirani su na sljedeći način:

- **Cestarina**: 100 € – jednokratno
- **Ručak**: 50 € – po osobi i po danu

Ukupan paušalni trošak za fakturiranje iznosit će **250 €** (100 € jednokratno za cestarinu + 50 € za ručak za svakog od tri resursa).
Izračun će se izvršiti prilikom promjene statusa intervencije iz **Uneseno** u **Za odobrenje** ili korištenjem gumba **Preračunaj troškove**.

:::

### 3. Izračun troškova intervencije za fakturiranje

Ako je korisnik izmijenio troškove za fakturiranje, sustav će prije ponovnog izračuna zatražiti potvrdu. Ako korisnik potvrdi postupak, ponovno će se primijeniti troškovi za fakturiranje definirani u šifarniku kupca.

### 4. Izračun naknade za službeni put resursa

:::note[Primjer]

U šifarniku resursa postavljen je prag od **2 sata putovanja**.
Naknada za službeni put obračunat će se samo ako zbroj **sati rada na uslugama** i **sati putovanja** premašuje redovno radno vrijeme za više od 2 sata.

**Primjer 1**

- Redovno radno vrijeme: **8 sati**
- Sati putovanja: **3 sata**

→ u troškove će se dodati jedan redak s iznosom naknade za službeni put.

**Primjer 2**

- Redovno radno vrijeme: **6 sati**
- Sati putovanja: **3 sata**

→ naknada za službeni put neće se obračunati jer ukupno vrijeme iznosi **9 sati**, odnosno samo **1 sat više** od standardnih 8 sati, dok je za obračun potrebno prekoračenje od najmanje **2 sata**.
:::

### Detalji kumulativnog troška

Tablica **Detalji kumulativnog troška** nalazi se na kartici **Troškovi intervencije** i koristi se kada je jedan resurs podmirio trošak u ime više resursa. Kako bi se putni troškovi pravilno obradili (uz poštivanje limita definiranih za svaki resurs), potrebno je raspodijeliti trošak na odgovarajuće udjele za sve resurse, čime se olakšava kontrola troškova.

Za svaki redak troška u donjoj se tablici navode:

- **Resurs**: svi resursi, uključujući i **glavni** resurs koji je podmirio trošak.
- **Iznos troška**: iznos se izračunava automatski prilikom dodavanja resursa. Trošak naveden u glavnom retku dijeli se s brojem unesenih redaka resursa. Vrijednost je moguće ručno izmijeniti pod uvjetom da pri spremanju zbroj svih redaka odgovara ukupnom iznosu troška u glavnom retku.
- **Maksimalni refundirani iznos**: ovisno o odabranom resursu i vrsti troška u glavnom retku prikazuje se limit definiran u šifarniku resursa.

Troškovi koji su uneseni u [Putni nalog](/docs/project-management/activities-by-project/new-resource-expense-reports) dobit će status **Provjereno** zajedno s datumom i korisnikom koji je izvršio provjeru.

Ako korisnik pokuša izmijeniti troškove na dokumentima (**Intervencije** ili **Aktivnosti**), prikazat će se poruka:

> **"Trošak je provjeren! Izmjena nije moguća."**

Kako bi se trošak ponovno mogao uređivati, potrebno ga je ukloniti iz **Putnog naloga** ili izvršiti povart postupka generiranja **Putnog naloga**.

## Kartica Usluge

Sadrži popis usluga predviđenih na intervenciji. Svaki redak može se odnositi na kodificiranu ili nekodificiranu uslugu te sadrži sljedeće podatke:

- **Efektivni datum usluge**: datum na koji je usluga izvršena. Može se razlikovati od datuma u zaglavlju jer jedna intervencija može sadržavati više usluga obavljenih različitih dana. Taj se datum koristi za generiranje prijave aktivnosti resursa.
- **Vrijeme početka**, **Početak pauze**, **Kraj pauze**, **Vrijeme završetka**: vremena tijekom kojih je usluga izvršavana.
- **Pametni rad (Smart Working)**: oznaka koja se automatski uključuje prema postavkama u šifarniku resursa. Koristi se prilikom obračuna plaće za označavanje dana u kojima je resurs radio na daljinu te se prenosi i u prijavu aktivnosti generiranu iz intervencije.
- **Rad koji se preklapa**: oznaka koja se automatski uključuje ako sustav pronađe druge usluge ili prijave aktivnosti za isti resurs u istom danu ili istom vremenskom razdoblju.
- **Vrijeme preklapajuće aktivnosti (min)**: omogućuje korisniku ručni unos stvarnog vremena tijekom kojeg se aktivnosti preklapaju.
- **Efektivno vrijeme**: ukupan broj sati dobiven iz izračuna vremena prijavljenog za uslugu.
- **Opis servisa (usluge)**: opis artikla kada je riječ o kodificiranom retku.
- **Opis izvršene aktivnosti**: opis koji je resurs unio za izvršenu uslugu ili, ako je odabran projekt, opis retka projekta. Taj će se tekst koristiti kao opis u prijavi aktivnosti koja se automatski generira iz intervencije. Dvostrukim klikom na polje moguće je proširiti područje za unos teksta.
- **Jedinica mjere**: mjerna jedinica artikla ili jedinica koju je resurs ručno odredio; podržane su samo vremenske mjerne jedinice.
- **Količina**: ako su parametri projekta i pretvorbe između različitih mjernih jedinica ispravno konfigurirani, stvarno trajanje automatski će se preračunati u odgovarajuću mjernu jedinicu.

:::note[Primjer]
Usluga sa stvarnim trajanjem od **8 sati** i mjernom jedinicom usluge **GG - dani**.
U općim parametrima projekta mjerna jedinica za dane postavljena je na **GG - dani**, a mjerna jedinica za sate na **HH - sati**. Za predmetni dan u parametrima je definirano **7 radnih sati**.
Polje **Količina** automatski će biti postavljeno na **1,14 GG** (dobiveno pretvorbom prema omjeru **1 GG = 7 sati**).
:::

- **Jedinična cijena**, **Ukupna cijena**, **Ukupan iznos**, **PDV**, **Popusti**: podaci o cijeni i PDV-u koji se preuzimaju iz odgovarajućih postavki cjenika kupca i artikla.
- **Resurs**: resurs koji je izvršio uslugu. Prema zadanim postavkama predlaže se resurs iz zaglavlja, ali ga je moguće promijeniti.
- **Postotak napretka procjene rada**: postotak izvršenog rada koji ažurira odgovarajuću vrijednost na projektu.
- **Promet prodaje**: način fakturiranja prodaje dodijeljen prema prioritetu iz šifarnika artikla ili šifarnika kupca.
- **Projekt**: preuzima se iz zaglavlja intervencije ako je definiran ili ga korisnik može ručno dodijeliti. Ako usluga još nije valorizirana, određuje cijenu te određuje kategoriju aktivnosti.
- **Tiket**: Tiket povezan s uslugom.
- **Glavna imovina**: EAM šifarnik postrojenja povezan s uslugom.
- **Zaposlenik**: zaposlenik povezan s resursom.
- **Račun za predujam**: faktura predujma na projektu (može biti i na projektu različitom od onoga dodijeljenog usluzi) povezana s uslugom. Njezino korištenje umanjuje preostali iznos ukupnog predujma te osigurava ispravno storno tijekom fakturiranja.
- **Bilješka**: dodatne napomene kupca.
- **Naplativo**: ako je uključeno, označava da će usluga biti uključena u plan fakturiranja. Vrijednost oznake određuje se prema izvornim dokumentima iz kojih je usluga nastala, projektu ili kategoriji aktivnosti.
- **Ručna cijena**: oznaka koja pokazuje je li cijena predložena iz cjenika ili drugih postupaka ručno izmijenjena.
- **Aktivnost s dodanom vrijednošću**: oznaka koja se koristi u statističke svrhe za identificiranje aktivnosti s dodanom vrijednošću. Vrijednost se preuzima s projekta, a ako nije definirana, iz postavki kategorije aktivnosti. Korisnik je može ručno promijeniti.

Dostupne su i dvije dodatne kartice: **Povezani dokument** i **Dodatni podaci**, koje korisnik može slobodno ispuniti.

### Prioritet određivanja cijene za retke usluge na intervenciji

Cijena definirana na projektu ima prednost pred cijenom iz cjenika, pod uvjetom da se mjerne jedinice podudaraju i da redak nije vrste **Bilješka**. U nastavku su navedena sva pravila određivanja cijene.
Ako je uključena oznaka **Ručna cijena**, neće se izvršiti nikakav ponovni izračun te će se zadržati već dodijeljena cijena.
Ako oznaka **Ručna cijena** nije uključena, cijena će se dodijeliti prema sljedećem redoslijedu prioriteta:

**1. Cijena iz retka projekta** (ako je projekt naveden na retku)
**2. Cijena iz cjenika** – koristi se ako na projektu nije definirana cijena ili ako mjerne jedinice projekta i usluge nisu usklađene.
**3. Prodajna cijena artikla** – koristi se ako cijena nije pronađena u cjeniku.

:::note[Primjer]

Intervencija s jednim retkom usluge, šifra artikla **SERVIZIO_1** (prisutna u prodajnom cjeniku kupca), s definiranim vremenima, količinom i povezanim retkom projekta.
Cijene su u sustavu definirane na sljedeći način:

- Prodajna cijena u šifarniku artikla **SERVIZIO_1**, mjerna jedinica **GG** – **100,00 EUR**
- Cijena u cjeniku za artikl **SERVIZIO_1**, mjerna jedinica **GG** – **500,00 EUR**
- Cijena iz projekta za artikl **SERVIZIO_1**, mjerna jedinica **GG** – **400,00 EUR**
- Cijena iz projekta za artikl **A0001**, mjerna jedinica **NR** – **300,00 EUR**

**Redak projekta vrste Bilješka**: redak usluge preuzet će cijenu iz cjenika te će u ovom primjeru iznositi **500,00 EUR**.

**Redak projekta vrste artikl s klasom "SERVIZIO_1"**: redak usluge preuzet će cijenu iz projekta te će u ovom primjeru iznositi **400,00 EUR**.

**Redak projekta vrste artikl bez klase "A0001"**: redak usluge preuzet će cijenu iz cjenika za artikl **SERVIZIO_1**, odnosno **500,00 EUR**, jer mjerne jedinice nisu usklađene s retkom projekta.

**Na retku usluge nije odabran projekt**: redak usluge preuzet će cijenu iz cjenika za artikl **SERVIZIO_1**, odnosno **500,00 EUR**.

**Na retku usluge nije odabran projekt, a artikl nije prisutan u cjeniku**: redak usluge preuzet će prodajnu cijenu iz šifarnika artikla te će ona iznositi **100,00 EUR**.

:::

## Kartica Materijali

Ova kartica sadrži materijale korištene tijekom intervencije. Materijali se mogu automatski prikazati ako su povezani s prethodno unesenim uslugama ili ih korisnik može ručno unijeti.
Za svaki materijal prikazuju se podaci poput **Šifre artikla**, **Opisa**, **Količine**, **Cijene** i ostalih povezanih informacija.
Odabirom retka materijala moguće je ispuniti donje kartice **Ukupno materijali** (koja sadrži podatke poput pripadajućeg skladišta, cjenika i eventualnih popusta) te **Extra Data**.

Na alatnoj traci dostupni su sljedeći gumbi:

![](/img/neutral/common/delete.png) **Izbriši materijale**: briše odabrane materijale.

![](/img/neutral/common/new.png) **Novi materijal**: umeće novi redak materijala.

![](/img/neutral/common/view-material.png) **Prikaz materijala bez usluga**: prikazuje samo materijale koji nisu povezani ni s jednom uslugom.

![](/img/neutral/common/view-material.png) **Prikaz materijala povezanih s uslugama**: prikazuje samo materijale povezane s uslugama.

![](/img/neutral/common/view-material.png) **Prikaz svih materijala**: prikazuje sve materijale.

![](/img/neutral/common/delete-discount.png) **Izbriši rabat materijala**: briše popuste povezane s odabranim materijalom.

## Kartica Sažeci

Ova kartica sadrži sažetak intervencije koji je moguće pregledavati.
Također je moguće unijeti završne troškove navođenjem njihove **Vrste**, **Iznosa**, oznake **Na računu** te pripadajućeg **PDV-a**. Uneseni podaci automatski ažuriraju sažetke prikazane na desnoj strani.
Na kraju je moguće unijeti i **Završne napomene**.

## Kartica Plan fakturiranja

**Plan fakturiranja** (engl. **Invoice Plan**) prikazuje pregled računa koji će biti generiran iz intervencije. Ova se kartica automatski izračunava pri promjeni statusa intervencije iz **Uneseno** u **Za odobrenje**, ali se u bilo kojem trenutku može ponovno izračunati pomoću gumba **Generiraj plan fakturiranja**.

Retci plana fakturiranja generiraju se na temelju podataka iz:

- usluga
- materijala
- troškova intervencije za fakturiranje
- ostalih troškova

Retci usluga i materijala mogu imati **Vrstu retka** **1** ili **2** (s klasom ili bez klase), dok retci troškova imaju **Vrstu retka 3 – Troškovi**.
Između usluga, materijala i troškova te plana fakturiranja postoji odnos **1 : 1**.
Iznimka su retci usluga koji se po potrebi mogu podijeliti.
Primjerice, ako usluga traje dulje od **8 sati**, a konfigurirano je obračunavanje rada izvan redovnog radnog vremena, redak usluge u planu fakturiranja podijelit će se na dva retka:

1. redak usluge za prvih **8 sati**, sa svim referencama i cijenom definiranim na kartici **Usluge**
2. redak za **rad izvan redovnog radnog vremena** koji obuhvaća sate iznad 8 sati, s tarifom preuzetom iz cjenika i šifrom artikla određenom prema konfiguraciji (parametri projekta ili vremenska zona u kojoj je predviđena promjena artikla)

Svaki redak ima jedan od sljedećih statusa:

1. **Za fakturiranje**: redak će biti uključen u postupak valorizacije intervencija.
2. **Suspendirano**: redak neće biti uključen u postupak valorizacije intervencija sve dok se njegov status ponovno ne postavi na **Za fakturiranje**.
3. **Isključeno**: redak ni u kojem slučaju neće biti uključen u postupak valorizacije intervencija.
4. **Fakturirano**: redak je već valoriziran i uključen u izlazni račun.

Ostali podaci prikazani na retku su:

- **Šifra artikla**, **Varijanta**, **Opis varijante** i **Opis artikla**: podaci o korištenom artiklu.
- **Opis planirane aktivnosti (zadatka)/sprinta**, **Efektivni datum usluge** i **Efektivno vrijeme**: podaci preuzeti s kartice **Usluge** koji prikazuju opis koji je korisnik unio za izvršenu uslugu te njezin stvarni datum i trajanje.
- **Vrijednost zaokruživanja**: ako je tako definirano pravilima fakturiranja, ukupno vrijeme izračunato na temelju usluga može se zaokružiti. Vrijednost potrebna za postizanje željenog ukupnog iznosa prikazana je u ovom polju.
- **Jedinica mjere**: mjerna jedinica retka.
- **Količina**: količina izražena u odabranoj mjernoj jedinici.
- **Cijena**: cijena definirana na uslugama, materijalima ili troškovima ili ponovno izračunata za rad izvan redovnog radnog vremena.
- **Porez**: primijenjena stopa PDV-a.
- **Rad izvan redovnog radnog vremena**: oznaka koja pokazuje da je redak automatski generiran zbog prekoračenja radnog vremena definiranog u vremenskim zonama.

Svaki redak sadrži i dodatne pojedinosti.
Svi se ti podaci nasljeđuju s izvornih kartica (**Usluge**, **Materijali** i **Troškovi**), ali ih je moguće naknadno izmijeniti.

- **Promet prodaje**: način fakturiranja definiran na projektu, a ako nije postavljen, preuzima se iz šifarnika artikla.
- **Artikl računa**: artikl koji će biti unesen na račun. Ovo se polje koristi, primjerice, kada je uključena opcija obračuna sati putovanja kao sati usluge. U tom će slučaju redak u planu fakturiranja sadržavati artikl putnog troška, dok će polje **Artikl računa** sadržavati artikl usluge kojem su sati putovanja pridruženi.
- **Kategorija aktivnosti**: kategorija aktivnosti preuzeta s projekta ili ručno određena.
- **Tiket**: broj Tiketa povezan s retkom.
- **Glavna imovina**: postrojenje povezano s retkom.
- **Zaposlenik**: zaposlenik povezan s retkom, preuzet iz dodijeljenog resursa.
- **Projekt**: pripadajući redak projekta.
- **Račun za predujam**: faktura predujma definirana na projektu i povezana s retkom plana fakturiranja. Označava da će redak umanjiti preostali iznos i količinu fakture predujma.
- **Razlog obustave**: ako redak ima status **Suspendirano**, moguće je navesti razlog obustave.
- **Napomena**: slobodna napomena.
- **Popusti** i **Tip raspona**: popusti i pripadajući cjenovni razred koji se primjenjuju na vrijednost retka. Primjenjuju se na isti način kao i u ostalim dokumentima.
- **Cjenik**: cjenik koji se koristi za predmetni redak.
- **Ručna cijena**: oznaka koja se automatski uključuje kada korisnik ručno promijeni cijenu retka u odnosu na automatski izračunatu vrijednost.

Plan fakturiranja generira se prema posebnim pravilima koja se mogu konfigurirati na razini kupca ili u parametrima projekta.
Redoslijed kojim se traže konfiguracije je sljedeći:

- Najprije se provjeravaju postavke u **šifarniku kupca**. Ako postoje, provjerava se i podudarnost prema **Vrsti intervencije** i **Mjestu rada** (podatak definiran na resursu nositelju intervencije).

  Ako je **Vrsta intervencije** ili **Mjesto rada** ostavljeno prazno, konfiguracija se smatra važećom za sve vrste intervencija odnosno sva mjesta rada.

- Ako u šifarniku kupca nije pronađena odgovarajuća konfiguracija, pretraživanje se nastavlja u [Parametri projekta](/docs/configurations/parameters/projects/project-parameters/) > **Intervencije** > **Postavke valorizacije intervencija**.

Pravila definirana u općim parametrima vrijede za sve kupce ili samo za određene **komercijalne kategorije kupaca**.
Ako je polje **Komercijalna kategorija** prazno, konfiguracija se smatra važećom za sve kategorije.
Nakon toga sustav traži odgovarajuće konfiguracije prema **Vrsti intervencije** (točno podudaranje ili prazna vrijednost) i **Mjestu rada** (točno podudaranje ili prazna vrijednost).
Na temelju pronađenih podudarnosti primjenjuje se najprikladnija konfiguracija. Ako nije pronađena nijedna odgovarajuća konfiguracija, **plan fakturiranja ostat će prazan**.

## Primjeri izračuna plana fakturiranja

Pretpostavimo da je za sljedeće primjere definirana sljedeća konfiguracija:

> **Vremenska zona:** pon–pet 08:00–20:00, maksimalno **8 sati dnevno**  
> **Zaokruživanje:** do 8 sati zaokružuje se na intervale od 2 sata, a nakon 8 sati na pola sata.  
> Primjeri: usluga od **3:15 h** → obračunava se **4 sata**; usluga od **7:30 h** → obračunava se **8 sati**; usluga od **8:15 h** → obračunava se **8:30 sati**.  
> **Sati putovanja uključeni u usluge:** uključeno.

Ovako definirano radno vrijeme **ne znači** da se aktivnost mora odvijati od **08:00 do 20:00**, već da se **unutar tog vremenskog razdoblja može obračunati najviše 8 sati redovnog rada**, nakon čega se počinje obračunavati **rad izvan redovnog radnog vremena**.
Obračun rada izvan redovnog radnog vremena pokrenut će se i ako se prekorači definirana vremenska zona, čak i kada ukupno trajanje rada nije doseglo 8 sati.

:::note[Primjer 1]
:::
:::note[Primjer 2]

> **Sati putovanja:** datum **05.09.** – **2 h**  
> **Usluga:** datum **06.09.** – **08:30–12:30 / 14:00–18:00** – **8 h**
> **Plan fakturiranja:** usluga **06.09.** – **8 h**

U ovom slučaju sati putovanja **nisu uključeni** jer je aktivirana opcija da se sati putovanja obračunavaju kao sati usluge. Budući da na datum **05.09.** ne postoji nijedna usluga kojoj bi se sati putovanja mogli pridružiti, oni se **ne uključuju u plan fakturiranja**.
:::