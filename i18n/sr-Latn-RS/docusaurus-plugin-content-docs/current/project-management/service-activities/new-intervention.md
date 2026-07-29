---
title: Nova intervencija
sidebar_position: 2
---

Potrebno je uneti sledeće podatke:

**Vrsta intervencije**: sadrži [vrstu intervencije](/docs/configurations/tables/project-management/intervention-type).

**Kupac**: sadrži kupca kojem je intervencija namenjena.

**Godina/Broj/Datum**: sadrži osnovne podatke o intervenciji. U slučaju promene datuma, sistem će zatražiti potvrdu da li želite da ažurirate i sve ostale datume na dokumentu (troškovi, usluge).

**Resurs**: označava resurs odgovoran za intervenciju i automatski se predlaže na novim redovima.

**Zaposleni**: označava zaposlenog povezanog sa šifarnikom resursa.

Obrazac sadrži više kartica.

## Zaglavlje

Na ovoj kartici nalaze se opšti podaci o intervenciji, kao što su **Valuta**, **Kurs**, **Beleške**, **Audit**, povezani **Cenovnik**, oznaka **Fakturisano** i **Status intervencije**.

Mogući statusi intervencije su:

- <u>Uneto</u>: početni status intervencije koji označava novo unet dokument.
- <u>Za odobrenje</u>: status kojim resurs potvrđuje da je uneo sve potrebne podatke. Sistem ponovo obračunava troškove prema uslovima definisanim na intervenciji, dodaje eventualne naknade za službeni put i slično, kao i generiše plan fakturisanja kao pregled onoga što će biti fakturisano.
- <u>Odobreno</u>: status koji koristi odgovorno lice za proveru intervencija koje su prijavili resursi. Na osnovu odgovarajućih podešavanja u vrsti intervencije generiše se odgovarajuća prijava aktivnosti za resurs.
- <u>Kontrolisano</u>: status kojim intervencija postaje spremna za fakturisanje.
- <u>Fakturisano</u>: intervencija je fakturisana. Ovaj status nije moguće postaviti ručno.
- <u>Delimično fakturisano</u>: označava intervenciju kod koje su neki redovi plana fakturisanja fakturisani, a neki nisu.
- <u>Prinudno zatvoreno</u>: označava intervenciju koja je prinudno zatvorena i nije niti će ikada biti fakturisana. Moguće je dodeliti i prilagođeni razlog obustave.
- <u>Suspendovano</u>: označava privremeno obustavljenu intervenciju koja je isključena iz fakturisanja, ali se kasnije može ponovo aktivirati. Moguće je dodeliti i prilagođeni razlog obustave.

**Kartica Plaćanja** i **Kartica Popusti** omogućavaju konfigurisanje podataka koji će se koristiti na računima generisanim iz intervencije.

**Dodatni podaci**: prikazuje eventualna polja **Dodatnih podataka** definisana za intervenciju.

**Dokumenti u prilogu**: prikazuje dokumente povezane sa intervencijom.

## Troškovi

Ova kartica podeljena je na tri pododeljka:

### Troškovi intervencije koje je imao resurs

Prikazuje troškove koje je imao resurs, a koji se po pravilu automatski preuzimaju iz šifarnika resursa ako su tamo definisani. Ti troškovi će biti preneti u **aktivnostima** na karticu **Putni troškovi**, generisanu iz intervencije, i po potrebi ih je moguće označiti i kao troškove za fakturisanje.
Svaki red može imati svoj prilog, na primer dokaz o nastalom trošku, koji je vidljiv u odeljku **Priloženi dokumenti**.

### Detalji kumulativnog troška

Prikazuje da li je trošak nastao za više resursa i prikazuje njihove nazive i pripadajuće udele.

### Troškovi intervencije za fakturisanje

Prikazuje troškove koji će biti fakturisani kupcu. Oni se po pravilu automatski preuzimaju iz šifarnika kupca ako su definisani. Mogu nastati i iz troškova koje je imao resurs, a koji su označeni za fakturisanje. Ti troškovi će biti uključeni u plan fakturisanja.
Moguće je odabrati samo one vrste troškova koje su posebno definisane kao **putni troškovi**.

Troškovi se definišu sledećim poljima:

- **Resurs**: resurs koji je imao trošak; prema podrazumevanim podešavanjima predlaže se resurs iz zaglavlja.
- **Vrsta troška**: određuje vrstu troška i pripadajući **Opis**. U zavisnosti od vrste troška aktiviraju se odgovarajuća polja. Na primer, za naknadu kilometraže omogućavaju se polja **KM** i **Trošak po km**, dok se za troškove kao što su ishrana i smeštaj omogućava polje **Iznos troška**, a ostala polja ostaju onemogućena.
- **Datum troška**: datum nastanka troška. Prema podrazumevanim podešavanjima preuzima se datum iz zaglavlja intervencije, ali ga je moguće promeniti.
- **Iznos troška**: omogućava direktan unos iznosa troška, na primer za refundaciju troškova obroka.
- **KM**: broj pređenih kilometara uz pripadajuću **Cenu po kilometru**.
- **Trošak po satu**: satnica koja se koristi za troškove vrste **Putni sati**.
- **Datum/Vreme polaska**: datum i vreme polaska.
- **Datum/Vreme dolaska**: datum i vreme dolaska.
- **Putni sati**: broj sati putovanja obračunat na osnovu datuma i vremena.
- **Vrednost paušala**: alternativa polju **Iznos troška**. Najčešće je definisana u šifarniku resursa i automatski se predlaže, pa je korisnik ne može menjati. Koristi se kada su naknade unapred dogovorene i nisu podložne izmenama.
- **PDV**: određuje PDV koji će biti primenjen.
- **Ukupan trošak**: obračunato polje koje prikazuje ukupan trošak (npr. kilometri × cena po kilometru, sati putovanja × satnica i sl.).
- **Za refundaciju**: označava da li trošak treba da bude refundiran.
- **Prilozi**: označava da red sadrži priloge koji su dostupni na kartici **Priloženi dokumenti**.
- **Zajednički trošak**: označava da postoji raspodela zajedničkog troška, vidljiva na kartici sa detaljima.
- **Način plaćanja**: način plaćanja korišćen za podmirenje troška.
- **Beleška**: dodatne napomene korisnika.

### Polja specifična za karticu **Troškovi intervencije za fakturisanje**

- **Iznos troška**: iznos troška koji će biti fakturisan kada se koriste fiksni iznosi.
- **Ukupan fakturabilni iznos**: iznos koji će stvarno biti prenet u plan fakturisanja, a zatim i na račun. Kod troškova definisanih kao **paušalni** ovde će biti prikazan iznos obračunat prema pravilima paušala.

  Ako trošak potiče sa kartice **Troškovi intervencije** koje je imao resurs, ovde će se inicijalno prikazati vrednost iz polja **Iznos troška**. Takva logika je primenjena zato što stvarni trošak može iznositi, na primer, **12,73 EUR**, dok se kupcu želi fakturisati drugačiji, na primer zaokružen iznos. Korisnik može izmeniti vrednost u polju **Iznos fakturabilnog troška**, na primer na **15,00 EUR**, i upravo će taj iznos biti prenet na račun.

  U tom slučaju polje **Iznos troška** prikazivaće stvarni trošak koji je imao resurs, dok će polje **Iznos fakturabilnog troška** sadržati iznos koji će stvarno biti fakturisan.

- **Ukupan fakturabilni iznos**: obračunato polje koje prikazuje ukupan fakturabilni iznos troška (npr. kilometri × cena po kilometru, sati putovanja × satnica ili je, kod fiksnih vrednosti, jednako vrednosti polja **Iznos fakturabilnog troška**).
- **Na računu**: određuje da li će trošak biti uključen u plan fakturisanja.

Ako je u **Vrsti intervencije** uključena oznaka **Spoljna**, troškovi definisani za resurs neće biti predloženi na kartici **Troškovi intervencije** koje je imao resurs. Umesto toga, troškovi definisani na kartici **Troškovi intervencije** u šifarniku kupca biće, u zavisnosti od konfiguracije, predloženi na kartici **Troškovi intervencije za fakturisanje**.

### Ostali troškovi

Omogućava unos ostalih opštih troškova koji će biti uključeni u plan fakturisanja.

Dugme **Trošak za fakturisanje**: nalazi se na kartici **Troškovi intervencije**. Izborom troška i klikom na ovo dugme, trošak se automatski prenosi na karticu **Troškovi intervencije za fakturisanje**. Vrednost iz polja **Iznos troška** prenosi se i u polje **Iznos troška** i u polje **Iznos fakturabilnog troška** na kartici **Troškovi intervencije za fakturisanje** (videti objašnjenje tog polja u prethodnom poglavlju).

Ako ista vrsta troška već postoji među troškovima za fakturisanje ili kupac ima definisanu paušalnu naknadu, korisnik će biti upitan da li želi da nastavi sa ponovnim obračunom.
Na kartici **Troškovi intervencije za fakturisanje** **Trošak po km** ili **Trošak po satu** mogu se razlikovati od vrednosti prikazanih na kartici **Troškovi intervencije**. To se dešava kada su isti troškovi definisani u šifarniku kupca sa navedenom **Cenom po kilometru** ili **Satnicom**, ali bez broja kilometara ili sati.
U tom slučaju tarifa definisana za kupca ima prednost u odnosu na tarifu resursa navedenu u troškovima koje je imao resurs.

### Dugme Preračunaj troškove

Ovo dugme koristi se samo po potrebi jer se isti postupak automatski izvršava prilikom promene statusa intervencije iz **Uneto** u **Za odobrenje**.

Postupak izvršava:

### 1. Obračun stvarnih troškova za fakturisanje kupcu

Ako su u šifarniku kupca definisani troškovi sa uključenom oznakom **Stvarni trošak**, a isti trošak je evidentirao i resurs na kartici **Troškovi intervencije**, trošak će automatski biti prenet među troškove za fakturisanje.

> Kod troškova koji nisu vrste **Udaljenost** ili **Putni sati** (npr. ručak, putarina i sl.), preuzeće se **Iznos troška** koji je evidentirao resurs i biće prenet među troškove za fakturisanje.

> Kod troškova vrste **Udaljenost** ili **Putni sati** (naknada kilometraže i naknada sati putovanja), u šifarniku kupca moguće je definisati **Cenu po kilometru** ili **Satnicu**. Prilikom ponovnog obračuna spojiće se broj kilometara odnosno sati koje je evidentirao resurs sa tarifama definisanim u šifarniku kupca i dobiće se kompletan zapis troška sa svim podacima i ukupnim iznosom.

:::note[Primer 1]

Na kartici **Troškovi intervencije** evidentiran je trošak **Naknada kilometraže** od **100 km × 1 € po kilometru**.

Trošak se prenosi za fakturisanje pomoću dugmeta **Trošak za fakturisanje** na alatnoj traci.

Pošto nema dodatnih podešavanja, na kartici **Troškovi intervencije za fakturisanje** prikazaće se **100 km × 1 € po kilometru**, odnosno **ukupno za fakturisanje: 100 €**.

:::

:::note[Primer 2]

Na kartici **Troškovi intervencije** evidentiran je trošak **Naknada kilometraže** od **100 km × 1 € po kilometru**.
U šifarniku kupca, na kartici **Intervencije**, definisana je stavka troška **Naknada kilometraže** bez uključene oznake **Stvarni trošak**, pri čemu je definisana samo **Cena po kilometru od 2 €**, bez broja kilometara.
Korišćenjem dugmeta **Trošak za fakturisanje**, tarifa definisana u šifarniku kupca imaće prednost u odnosu na tarifu navedenu na kartici **Troškovi intervencije**.
Na kartici **Troškovi intervencije za fakturisanje** prikazaće se **100 km × 2 € po kilometru**, odnosno **ukupno za fakturisanje: 200 €**.
Ako se dugme **Trošak za fakturisanje** ne koristi, trošak **Naknada kilometraže** neće biti prenet u fakturisanje jer oznaka **Stvarni trošak** nije uključena (čak ni prilikom promene statusa iz **Uneto** u **Za odobrenje**).

:::

:::note[Primer 3]

Na kartici **Troškovi intervencije** evidentiran je trošak **Naknada kilometraže** od **100 km × 1 € po kilometru**.
U šifarniku kupca, na kartici **Intervencije**, definisana je stavka troška **Naknada kilometraže** sa uključenom oznakom **Stvarni trošak**, pri čemu je definisana samo **Cena po kilometru od 2 €**, bez broja kilometara.

Prilikom promene statusa intervencije iz **Uneto** u **Za odobrenje** automatski će se pokrenuti svi ponovni obračuni troškova i plana fakturisanja.
Trošak koji je evidentirao resurs automatski će biti prenet na karticu **Troškovi intervencije za fakturisanje**, pri čemu će tarifa definisana u šifarniku kupca imati prednost u odnosu na tarifu sa kartice **Troškovi intervencije**.
Na kartici **Troškovi intervencije za fakturisanje** prikazaće se **100 km × 2 € po kilometru**, odnosno **ukupno za fakturisanje: 200 €**.
U ovom slučaju trošak **Naknada kilometraže** biće uključen u fakturisanje i bez korišćenja dugmeta **Troškovi za fakturisanje**, jer je u šifarniku kupca označen kao **Stvarni trošak**.

:::

:::note[Primer 4]

Na kartici **Troškovi intervencije** evidentiran je trošak **Naknada kilometraže** od **100 km × 1 € po kilometru**.
U šifarniku kupca, na kartici **Intervencije**, definisana je stavka troška **Naknada kilometraže** bez uključene oznake **Stvarni trošak**, pri čemu su definisani **2 € po kilometru** i **150 km**.
Prilikom unosa intervencije, među **Troškovima intervencije za fakturisanje** automatski će biti predložen trošak **Naknada kilometraže** iz šifarnika kupca.
Na kartici **Troškovi intervencije za fakturisanje** prikazaće se **150 km × 2 € po kilometru**, odnosno **ukupno za fakturisanje: 300 €**.

:::

Troškovi koje je imao resurs i njihov iznos predstavljaju **naknadu** koja pripada resursu (i koja će se, ako se koristi modul obračuna plata, preneti i na obračunsku listu plata). Zbog toga se taj iznos može razlikovati od iznosa koji se fakturiše kupcu, pa je moguće definisati zasebne tarife u šifarniku kupca.

### 2. Obračun paušalnih troškova

Ako su u šifarniku kupca definisani paušalni troškovi sa uslovima **po resursu** i/ili **po danu**, oni će automatski biti ponovo obračunati.

:::note[Primer]

Na intervenciji koja traje jedan dan evidentirana su **3 resursa**, odnosno postoje **3 reda usluge**.

Paušalni troškovi definisani su na sledeći način:

- **Putarina**: 100 € – jednokratno
- **Ručak**: 50 € – po osobi i po danu

Ukupan paušalni trošak za fakturisanje iznosiće **250 €** (100 € jednokratno za putarinu + 50 € za ručak za svakog od tri resursa).
Obračun će se izvršiti prilikom promene statusa intervencije iz **Uneto** u **Za odobrenje** ili korišćenjem dugmeta **Preračunaj troškove**.

:::

### 3. Obračun troškova intervencije za fakturisanje

Ako je korisnik izmenio troškove za fakturisanje, sistem će pre ponovnog obračuna zatražiti potvrdu. Ako korisnik potvrdi postupak, ponovo će biti primenjeni troškovi za fakturisanje definisani u šifarniku kupca.

### 4. Obračun naknade za službeni put resursa

:::note[Primer]

U šifarniku resursa postavljen je prag od **2 sata putovanja**.

Naknada za službeni put obračunaće se samo ako zbir **sati rada na uslugama** i **sati putovanja** premašuje redovno radno vreme za više od 2 sata.

**Primer 1**

- Redovno radno vreme: **8 sati**
- Sati putovanja: **3 sata**

→ u troškove će biti dodat jedan red sa iznosom naknade za službeni put.

**Primer 2**

- Redovno radno vreme: **6 sati**
- Sati putovanja: **3 sata**

→ naknada za službeni put neće biti obračunata jer ukupno vreme iznosi **9 sati**, odnosno samo **1 sat više** od standardnih 8 sati, dok je za obračun potrebno prekoračenje od najmanje **2 sata**.

:::

### Detalji kumulativnog troška

Tabela **Detalji kumulativnog troška** nalazi se na kartici **Troškovi intervencije** i koristi se kada je jedan resurs podmirio trošak u ime više resursa. Kako bi se putni troškovi pravilno obradili (uz poštovanje limita definisanih za svaki resurs), potrebno je raspodeliti trošak na odgovarajuće udele za sve resurse, čime se olakšava kontrola troškova.

Za svaki red troška u donjoj tabeli navode se:

- **Resurs**: svi resursi, uključujući i **glavni** resurs koji je podmirio trošak.
- **Iznos troška**: iznos se obračunava automatski prilikom dodavanja resursa. Trošak naveden u glavnom redu deli se brojem unetih redova resursa. Vrednost je moguće ručno izmeniti pod uslovom da prilikom čuvanja zbir svih redova odgovara ukupnom iznosu troška u glavnom redu.
- **Maksimalni refundirani iznos**: u zavisnosti od izabranog resursa i vrste troška u glavnom redu prikazuje se limit definisan u šifarniku resursa.
Troškovi koji su uneti u [Putni nalog](/docs/project-management/activities-by-project/new-resource-expense-reports) dobiće status **Provereno** zajedno sa datumom i korisnikom koji je izvršio proveru.
Ako korisnik pokuša da izmeni troškove na dokumentima (**Intervencije** ili **Aktivnosti**), prikazaće se poruka:

> **"Trošak je proveren! Izmena nije moguća."**

Kako bi trošak ponovo mogao da se uređuje, potrebno ga je ukloniti iz **Putnog naloga** ili izvršiti povrat postupka generisanja **Putnog naloga**.

## Kartica Usluge

Sadrži spisak usluga predviđenih na intervenciji. Svaki red može se odnositi na kodifikovanu ili nekodifikovanu uslugu i sadrži sledeće podatke:
- **Efektivni datum usluge**: datum kada je usluga izvršena. Može se razlikovati od datuma u zaglavlju jer jedna intervencija može sadržati više usluga obavljenih različitih dana. Taj datum koristi se za generisanje prijave aktivnosti resursa.
- **Vreme početka**, **Početak pauze**, **Kraj pauze**, **Vreme završetka**: vremena tokom kojih je usluga izvršavana.
- **Pametni rad (Smart Working)**: oznaka koja se automatski uključuje prema podešavanjima u šifarniku resursa. Koristi se prilikom obračuna plata za označavanje dana u kojima je resurs radio na daljinu i prenosi se i u prijavu aktivnosti generisanu iz intervencije.
- **Rad koji se preklapa**: oznaka koja se automatski uključuje ako sistem pronađe druge usluge ili prijave aktivnosti za isti resurs u istom danu ili istom vremenskom periodu.
- **Vreme preklapajuće aktivnosti (min)**: omogućava korisniku ručni unos stvarnog vremena tokom kojeg se aktivnosti preklapaju.
- **Efektivno vreme**: ukupan broj sati dobijen obračunom vremena prijavljenog za uslugu.
- **Opis servisa (usluge)**: opis artikla kada je reč o kodifikovanom redu.
- **Opis izvršene aktivnosti**: opis koji je resurs uneo za izvršenu uslugu ili, ako je izabran projekat, opis reda projekta. Taj tekst koristiće se kao opis u prijavi aktivnosti koja se automatski generiše iz intervencije. Dvostrukim klikom na polje moguće je proširiti oblast za unos teksta.
- **Jedinica mere**: jedinica mere artikla ili jedinica koju je resurs ručno odredio; podržane su samo vremenske jedinice mere.
- **Količina**: ako su parametri projekta i konverzije između različitih jedinica mere ispravno konfigurisani, stvarno trajanje automatski će biti preračunato u odgovarajuću jedinicu mere.

:::note[Primer]

Usluga sa stvarnim trajanjem od **8 sati** i jedinicom mere usluge **GG - dani**.
U opštim parametrima projekta jedinica mere za dane postavljena je na **GG - dani**, a jedinica mere za sate na **HH - sati**. Za predmetni dan u parametrima je definisano **7 radnih sati**.
Polje **Količina** automatski će biti postavljeno na **1,14 GG** (dobijeno konverzijom prema odnosu **1 GG = 7 sati**).

:::

- **Jedinična cena**, **Ukupna cena**, **Ukupan iznos**, **PDV**, **Popusti**: podaci o ceni i PDV-u koji se preuzimaju iz odgovarajućih podešavanja cenovnika kupca i artikla.
- **Resurs**: resurs koji je izvršio uslugu. Prema podrazumevanim podešavanjima predlaže se resurs iz zaglavlja, ali ga je moguće promeniti.
- **Procenat napretka procene rada**: procenat izvršenog rada koji ažurira odgovarajuću vrednost na projektu.
- **Promet prodaje**: način fakturisanja prodaje dodeljen prema prioritetu iz šifarnika artikla ili šifarnika kupca.
- **Projekat**: preuzima se iz zaglavlja intervencije ako je definisan ili ga korisnik može ručno dodeliti. Ako usluga još nije valorizovana, određuje cenu i određuje kategoriju aktivnosti.
- **Tiket**: Tiket povezan sa uslugom.
- **Glavna imovina**: EAM šifarnik postrojenja povezan sa uslugom.
- **Zaposleni**: zaposleni povezan sa resursom.
- **Račun avansa**: faktura avansa na projektu (može biti i na projektu različitom od onog dodeljenog usluzi) povezana sa uslugom. Njeno korišćenje umanjuje preostali iznos ukupnog avansa i obezbeđuje ispravno storniranje tokom fakturisanja.
- **Beleška**: dodatne napomene kupca.
- **Naplativo**: ako je uključeno, označava da će usluga biti uključena u plan fakturisanja. Vrednost oznake određuje se prema izvornim dokumentima iz kojih je usluga nastala, projektu ili kategoriji aktivnosti.
- **Ručna cena**: oznaka koja pokazuje da li je cena predložena iz cenovnika ili drugih postupaka ručno izmenjena.
- **Aktivnost sa dodatom vrednošću**: oznaka koja se koristi u statističke svrhe za identifikaciju aktivnosti sa dodatom vrednošću. Vrednost se preuzima sa projekta, a ako nije definisana, iz podešavanja kategorije aktivnosti. Korisnik je može ručno promeniti.
Dostupne su i dve dodatne kartice: **Povezani dokument** i **Dodatni podaci**, koje korisnik može slobodno popuniti.

### Prioritet određivanja cene za redove usluge na intervenciji

Cena definisana na projektu ima prednost u odnosu na cenu iz cenovnika, pod uslovom da se jedinice mere podudaraju i da red nije vrste **Beleška**. U nastavku su navedena sva pravila određivanja cene.
Ako je uključena oznaka **Ručna cena**, neće se izvršiti nikakav ponovni obračun i zadržaće se već dodeljena cena.
Ako oznaka **Ručna cena** nije uključena, cena će biti dodeljena prema sledećem redosledu prioriteta:

**1. Cena iz reda projekta** (ako je projekat naveden na redu)  
**2. Cena iz cenovnika** – koristi se ako na projektu nije definisana cena ili ako jedinice mere projekta i usluge nisu usklađene.  
**3. Prodajna cena artikla** – koristi se ako cena nije pronađena u cenovniku.

:::note[Primer]

Intervencija sa jednim redom usluge, šifra artikla **SERVIZIO_1** (prisutna u prodajnom cenovniku kupca), sa definisanim vremenima, količinom i povezanim redom projekta.
Cene su u sistemu definisane na sledeći način:
- Prodajna cena u šifarniku artikla **SERVIZIO_1**, jedinica mere **GG** – **100,00 EUR**
- Cena u cenovniku za artikal **SERVIZIO_1**, jedinica mere **GG** – **500,00 EUR**
- Cena iz projekta za artikal **SERVIZIO_1**, jedinica mere **GG** – **400,00 EUR**
- Cena iz projekta za artikal **A0001**, jedinica mere **NR** – **300,00 EUR**

**Red projekta vrste Beleška**: red usluge preuzeće cenu iz cenovnika i u ovom primeru iznosiće **500,00 EUR**.
**Red projekta vrste artikal sa klasom "SERVIZIO_1"**: red usluge preuzeće cenu iz projekta i u ovom primeru iznosiće **400,00 EUR**.
**Red projekta vrste artikal bez klase "A0001"**: red usluge preuzeće cenu iz cenovnika za artikal **SERVIZIO_1**, odnosno **500,00 EUR**, jer jedinice mere nisu usklađene sa redom projekta.
**Na redu usluge nije izabran projekat**: red usluge preuzeće cenu iz cenovnika za artikal **SERVIZIO_1**, odnosno **500,00 EUR**.
**Na redu usluge nije izabran projekat, a artikal nije prisutan u cenovniku**: red usluge preuzeće prodajnu cenu iz šifarnika artikla i ona će iznositi **100,00 EUR**.

:::

## Kartica Materijali

Ova kartica sadrži materijale korišćene tokom intervencije. Materijali se mogu automatski prikazati ako su povezani sa prethodno unetim uslugama ili ih korisnik može ručno uneti.
Za svaki materijal prikazuju se podaci kao što su **Šifra artikla**, **Opis**, **Količina**, **Cena** i ostale povezane informacije.
Izborom reda materijala moguće je popuniti donje kartice **Ukupno materijali** (koja sadrži podatke kao što su pripadajuće skladište, cenovnik i eventualni popusti) i **Extra Data**.

Na alatnoj traci dostupna su sledeća dugmad:

![](/img/neutral/common/delete.png) **Obriši materijale**: briše izabrane materijale.

![](/img/neutral/common/new.png) **Novi materijal**: umeće novi red materijala.

![](/img/neutral/common/view-material.png) **Prikaz materijala bez usluga**: prikazuje samo materijale koji nisu povezani ni sa jednom uslugom.

![](/img/neutral/common/view-material.png) **Prikaz materijala povezanih sa uslugama**: prikazuje samo materijale povezane sa uslugama.

![](/img/neutral/common/view-material.png) **Prikaz svih materijala**: prikazuje sve materijale.

![](/img/neutral/common/delete-discount.png) **Obriši rabat materijala**: briše popuste povezane sa izabranim materijalom.

## Kartica Sažeci

Ova kartica sadrži sažetak intervencije koji je moguće pregledati.

Takođe je moguće uneti završne troškove navođenjem njihove **Vrste**, **Iznosa**, oznake **Na računu** i pripadajućeg **PDV-a**. Uneti podaci automatski ažuriraju sažetke prikazane na desnoj strani.

Na kraju je moguće uneti i **Završne napomene**.

## Kartica Plan fakturisanja

**Plan fakturisanja** (engl. **Invoice Plan**) prikazuje pregled računa koji će biti generisan iz intervencije. Ova kartica automatski se obračunava prilikom promene statusa intervencije iz **Uneto** u **Za odobrenje**, ali se u bilo kom trenutku može ponovo obračunati pomoću dugmeta **Generiši plan fakturisanja**.

Redovi plana fakturisanja generišu se na osnovu podataka iz:
- usluga
- materijala
- troškova intervencije za fakturisanje
- ostalih troškova

Redovi usluga i materijala mogu imati **Vrstu reda** **1** ili **2** (sa klasom ili bez klase), dok redovi troškova imaju **Vrstu reda 3 – Troškovi**.
Između usluga, materijala i troškova i plana fakturisanja postoji odnos **1 : 1**.
Izuzetak su redovi usluga koji se po potrebi mogu podeliti.

Na primer, ako usluga traje duže od **8 sati**, a konfigurisano je obračunavanje rada van redovnog radnog vremena, red usluge u planu fakturisanja podeliće se na dva reda:
1. red usluge za prvih **8 sati**, sa svim referencama i cenom definisanim na kartici **Usluge**
2. red za **rad van redovnog radnog vremena** koji obuhvata sate iznad 8 sati, sa tarifom preuzetom iz cenovnika i šifrom artikla određenom prema konfiguraciji (parametri projekta ili vremenska zona u kojoj je predviđena promena artikla)

Svaki red ima jedan od sledećih statusa:

1. **Za fakturisanje**: red će biti uključen u postupak valorizacije intervencija.
2. **Suspendovano**: red neće biti uključen u postupak valorizacije intervencija sve dok se njegov status ponovo ne postavi na **Za fakturisanje**.
3. **Isključeno**: red ni u kom slučaju neće biti uključen u postupak valorizacije intervencija.
4. **Fakturisano**: red je već valorizovan i uključen u izlazni račun.

Ostali podaci prikazani na redu su:

- **Šifra artikla**, **Varijanta**, **Opis varijante** i **Opis artikla**: podaci o korišćenom artiklu.
- **Opis planirane aktivnosti (zadatka)/sprinta**, **Efektivni datum usluge** i **Efektivno vreme**: podaci preuzeti sa kartice **Usluge** koji prikazuju opis koji je korisnik uneo za izvršenu uslugu, kao i njen stvarni datum i trajanje.
- **Vrednost zaokruživanja**: ako je tako definisano pravilima fakturisanja, ukupno vreme obračunato na osnovu usluga može se zaokružiti. Vrednost potrebna za postizanje željenog ukupnog iznosa prikazana je u ovom polju.
- **Jedinica mere**: jedinica mere reda.
- **Količina**: količina izražena u izabranoj jedinici mere.
- **Cena**: cena definisana na uslugama, materijalima ili troškovima ili ponovo obračunata za rad van redovnog radnog vremena.
- **Porez**: primenjena stopa PDV-a.
- **Rad van redovnog radnog vremena**: oznaka koja pokazuje da je red automatski generisan zbog prekoračenja radnog vremena definisanog u vremenskim zonama.

Svaki red sadrži i dodatne pojedinosti.

Svi ovi podaci nasleđuju se sa izvornih kartica (**Usluge**, **Materijali** i **Troškovi**), ali ih je moguće naknadno izmeniti.

- **Promet prodaje**: način fakturisanja definisan na projektu, a ako nije postavljen, preuzima se iz šifarnika artikla.
- **Artikal računa**: artikal koji će biti unet na račun. Ovo polje koristi se, na primer, kada je uključena opcija obračuna sati putovanja kao sati usluge. U tom slučaju red u planu fakturisanja sadržaće artikal putnog troška, dok će polje **Artikal računa** sadržati artikal usluge kojem su sati putovanja pridruženi.
- **Kategorija aktivnosti**: kategorija aktivnosti preuzeta sa projekta ili ručno određena.
- **Tiket**: broj Tiketa povezan sa redom.
- **Glavna imovina**: postrojenje povezano sa redom.
- **Zaposleni**: zaposleni povezan sa redom, preuzet iz dodeljenog resursa.
- **Projekat**: pripadajući red projekta.
- **Račun avansa**: faktura avansa definisana na projektu i povezana sa redom plana fakturisanja. Označava da će red umanjiti preostali iznos i količinu fakture avansa.
- **Razlog obustave**: ako red ima status **Suspendovano**, moguće je navesti razlog obustave.
- **Napomena**: slobodna napomena.
- **Popusti** i **Tip raspona**: popusti i pripadajući cenovni razred koji se primenjuju na vrednost reda. Primenjuju se na isti način kao i u ostalim dokumentima.
- **Cenovnik**: cenovnik koji se koristi za predmetni red.
- **Ručna cena**: oznaka koja se automatski uključuje kada korisnik ručno promeni cenu reda u odnosu na automatski obračunatu vrednost.

Plan fakturisanja generiše se prema posebnim pravilima koja se mogu konfigurisati na nivou kupca ili u parametrima projekta.

Redosled kojim se traže konfiguracije je sledeći:

- Najpre se proveravaju podešavanja u **šifarniku kupca**. Ako postoje, proverava se i podudaranje prema **Vrsti intervencije** i **Mestu rada** (podatak definisan na resursu nosiocu intervencije).

  Ako je **Vrsta intervencije** ili **Mesto rada** ostavljeno prazno, konfiguracija se smatra važećom za sve vrste intervencija, odnosno sva mesta rada.

- Ako u šifarniku kupca nije pronađena odgovarajuća konfiguracija, pretraga se nastavlja u [Parametri projekta](/docs/configurations/parameters/projects/project-parameters/) > **Intervencije** > **Podešavanja valorizacije intervencija**.

Pravila definisana u opštim parametrima važe za sve kupce ili samo za određene **komercijalne kategorije kupaca**.

Ako je polje **Komercijalna kategorija** prazno, konfiguracija se smatra važećom za sve kategorije.
Nakon toga sistem traži odgovarajuće konfiguracije prema **Vrsti intervencije** (tačno podudaranje ili prazna vrednost) i **Mestu rada** (tačno podudaranje ili prazna vrednost).
Na osnovu pronađenih podudaranja primenjuje se najprikladnija konfiguracija. Ako nije pronađena nijedna odgovarajuća konfiguracija, **plan fakturisanja ostaće prazan**.

## Primeri obračuna plana fakturisanja

Pretpostavimo da je za sledeće primere definisana sledeća konfiguracija:
> **Vremenska zona:** pon–pet 08:00–20:00, maksimalno **8 sati dnevno**  
> **Zaokruživanje:** do 8 sati zaokružuje se na intervale od 2 sata, a nakon 8 sati na pola sata.  
> Primeri: usluga od **3:15 h** → obračunava se **4 sata**; usluga od **7:30 h** → obračunava se **8 sati**; usluga od **8:15 h** → obračunava se **8:30 sati**.  
> **Sati putovanja uključeni u usluge:** uključeno.
Ovako definisano radno vreme **ne znači** da se aktivnost mora odvijati od **08:00 do 20:00**, već da se **unutar tog vremenskog perioda može obračunati najviše 8 sati redovnog rada**, nakon čega počinje obračunavanje **rada van redovnog radnog vremena**.
Obračun rada van redovnog radnog vremena pokrenuće se i ako se prekorači definisana vremenska zona, čak i kada ukupno trajanje rada nije dostiglo 8 sati.

:::note[Primer 1]
:::

:::note[Primer 2]

> **Sati putovanja:** datum **05.09.** – **2 h**  
> **Usluga:** datum **06.09.** – **08:30–12:30 / 14:00–18:00** – **8 h**  
> **Plan fakturisanja:** usluga **06.09.** – **8 h**

U ovom slučaju sati putovanja **nisu uključeni** jer je aktivirana opcija da se sati putovanja obračunavaju kao sati usluge. Pošto na datum **05.09.** ne postoji nijedna usluga kojoj bi sati putovanja mogli biti pridruženi, oni se **ne uključuju u plan fakturisanja**.

:::
