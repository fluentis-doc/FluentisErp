---
title: Prijava aktivnosti po projektu
sidebar_position: 1
---

U području projekata svaki resurs može unositi prijave vlastitih aktivnosti. One mogu biti povezane s projektom (nije obavezno), a zatim se mogu fakturirati (pri čemu će se generirati intervencija) te će ujedno sudjelovati u obračunu plaće.

## Zaglavlje

**Vrsta aktivnosti**: sadrži [Vrstu aktivnosti](/docs/configurations/tables/project-management/activity-type/);

**Datum aktivnosti/Broj aktivnosti**: sadrži datum i broj aktivnosti; automatski će biti predložen najstariji nedostajući datum na temelju broja mjeseci za provjeru definiranog u parametrima projekata. Ako je datum definiran kao neradni dan u Kalendaru neradnih dana, neće biti predložen.

**Resurs**: sadrži resurs koji obavlja aktivnost;

**Datum/Ručni unos vremena**: sadrži datum unosa i oznaku koja, ako je aktivna, omogućuje ručno uređivanje polja **Ukupno vrijeme**, umjesto njegovog automatskog izračuna;

**Kupac**: sadrži kupca za kojeg se aktivnost obavlja;

**Statistički konto**: omogućuje unos konta koji će se koristiti u statističke svrhe;

**Projekt**: sadrži povezani [Projekt](/docs/project-management/projects/search-projects-intro/);

Otvaranjem proširivog odjeljka **Projekt** moguće je definirati **Artikl**. Ova šifra artikla koristit će se ako je aktivnost naplativa i stoga pretvorena u intervenciju. Ako nije naveden poseban artikl, usluga na intervenciji koristit će šifru artikla, mjernu jedinicu i cijenu preuzete s povezanog projekta.

Ako je naveden poseban artikl:

- ako se mjerna jedinica artikla i mjerna jedinica povezanog projekta podudaraju te je mjerna jedinica projekta tipa **Vrijeme**, u intervenciji će se koristiti šifra artikla navedena u aktivnosti, dok će se cijena i mjerna jedinica preuzeti s projekta;
- ako se mjerna jedinica artikla i mjerna jedinica povezanog projekta **ne** podudaraju ili mjerna jedinica projekta nije tipa **Vrijeme**, u intervenciji će se koristiti šifra artikla navedena u aktivnosti, dok će se cijena i mjerna jedinica odrediti prema standardnim pravilima dokumenata (kao kod unosa novog retka dokumenta, uzimajući u obzir cjenike, popuste, zadanu cijenu iz šifarnika artikala i ostale standardne postavke).

**Vrijeme početka/Vrijeme završetka**: sadrži vrijeme početka i završetka aktivnosti; predlaže se na temelju radnog rasporeda resursa, a ako za isti dan već postoje druge prijave aktivnosti, predložit će se samo slobodni vremenski raspon definiran u rasporedu resursa.

<u>Nisu dopušteni neusklađeni datumi</u> između polja Početak–Završetak, Početak–Završetak pauze i Datum aktivnosti. Zbog toga će se prilikom izmjene bilo kojeg od tih datuma svi ostali datumi automatski uskladiti.

Ako se izmijeni **Vrijeme završetka** tako da bude prije početka pauze, pauza će se automatski ukloniti.

**Vrijeme početka pauze/Vrijeme kraja pauze**: sadrži vrijeme početka i završetka pauze;

**Preklapajuća aktivnost**: oznaka koja se automatski uključuje ako sustav otkrije druge aktivnosti istog resursa za isti dan ili isti vremenski raspon.

**Vrijeme preklapajuće aktivnosti (min)**: omogućuje korisniku ručni unos stvarnog trajanja preklapanja aktivnosti.

**Aktivnost rada na daljinu (Smart Working)**: oznaka koja se automatski uključuje na temelju postavki rada na daljinu u šifarniku resursa. Koristit će se tijekom obračuna plaće za prepoznavanje dana u kojima je resurs radio na daljinu. Na odgovarajućim nadzornim pločama moguće je provjeriti postoje li tijekom istog dana kombinacije rada na daljinu i rada na lokaciji.

**Izvorno mjesto troška**: mjesto troška predloženo iz šifarnika zaposlenika povezanog s resursom.

**Mjesto troška**: mjesto troška predloženo na temelju kategorije aktivnosti.

**Tiket**: tiket povezan s aktivnošću; ako u prijavi aktivnosti nisu popunjeni kupac i projekt, oni će se automatski preuzeti iz povezanog tiketa.

**Tehnička procjena**: ako tiket sadrži tehničku procjenu koja odgovara kupcu i resursu, ona će biti automatski predložena. Ako u prijavi aktivnosti nisu popunjeni kupac i projekt, oni će se automatski preuzeti iz povezanog tiketa odnosno tehničke procjene.

**Glavna imovina**: zapis postrojenja iz područja EAM povezan s aktivnošću.

**Poduzeće / Intercompany odjel**: označava poduzeće i odjel kojoj aktivnost pripada ako se razlikuju od društva u kojem je aktivnost unesena.

**Intervencija**: sadrži eventualnu ručno povezanu ili automatski generiranu [Intervenciju](/docs/project-management/service-activities/search-intervention/) prilikom spremanja aktivnosti ili putem čarobnjaka. U vrsti aktivnosti moguće je definirati vrstu intervencije koja će se koristiti.

**Status aktivnosti**: sadrži jedan od sljedećih statusa: **Uneseno**, **Provjereno**, **Suspendirano**, **Zatvoreno**.

**Ukupno vrijeme**: prikazuje ukupan broj sati prijavljene aktivnosti, izračunat na temelju unesenog vremena. Ako je uključena oznaka **Ručno vrijeme**, polje korisnik može ručno uređivati.

**Procijenjeni postotak rada**: moguće je unijeti vrijednost od 0 do 100 koja će biti upisana u odgovarajuću uslugu intervencije generirane iz aktivnosti.

**Kriteriji za izdavanje računa**

**Kategorija aktivnosti**: automatski se predlaže s projekta, ako je definiran, ili je unosi korisnik. O kategoriji aktivnosti ovise mjesto troška i oznaka **Fakturabilna aktivnost**.

**Intercompany aktivnost**: oznaka koja identificira aktivnost koja se obrađuje kao intercompany.

**Fakturirana aktivnost**: oznaka koja pokazuje je li aktivnost povezana s intervencijom i time fakturirana.

**Naplativa aktivnost**: oznaka koja određuje može li se aktivnost pretvoriti u intervenciju i posljedično fakturirati. Ova se oznaka postavlja na temelju kategorije aktivnosti ili je može odrediti korisnik.

**Prisilno označi aktivnost kao naplativu**: oznaka koja omogućuje da se aktivnost smatra fakturiranom iako stvarno nije, kako se ne bi generirala povezana intervencija.

**Aktivnost s dodanom vrijednošću**: oznaka koja identificira aktivnosti s dodanom vrijednošću u statističke svrhe. Vrijednost se preuzima s projekta, a ako nije definirana, iz konfiguracije kategorije aktivnosti. Korisnik je može ručno izmijeniti.

Nakon toga slijedi više kartica.

## Opis

Na ovoj kartici moguće je opisati aktivnost u polju **Opis aktivnosti**, koje će se koristiti kao opis izvršene aktivnosti na intervencijama (ako se generiraju). Dostupno je i polje **Interni opis**, koje se neće prenositi ni u jedan drugi dokument.

Ako je aktivnost povezana s intervencijom te se izmijene vrijeme i/ili opis aktivnosti, odgovarajuća će se intervencija automatski ažurirati.

## Putni troškovi

Ova kartica sadrži eventualne putne troškove koje je resurs imao.

Prilikom ručnog unosa prijave aktivnosti troškovi će se automatski predložiti nakon odabira resursa, ako su konfigurirani u njegovom šifarniku.

Ako je prijava aktivnosti automatski generirana iz intervencije, kartica **Putni troškovi** sadržavat će samo troškove koje je resurs prijavio kao **Nastale troškove** na intervenciji. Ako je kartica **Nastali troškovi** na intervenciji potpuno prazna, u aktivnosti će se ipak predložiti troškovi konfigurirani u šifarniku resursa.

Prilikom spremanja, ako predloženi troškovi nisu dopunjeni vrijednostima i iznosima, automatski će biti obrisani.

Moguće je odabrati **Vrstu troška**, a ovisno o njezinoj konfiguraciji bit će omogućeno uređivanje ostalih polja, kao što su **Putni sati**, **Trošak KM**, **Iznos paušala**, **Porez**, **Ukupni trošak**, **Datum**, **Način plaćanja** i dr.

**Ukupni trošak** automatski se izračunava za vrste troškova koje koriste **Cijenu po satu** ili **Cijenu po kilometru**, množenjem odgovarajućih vrijednosti sa **Putnim satima putovanja** odnosno **Kilometrima**.

**Za povrat**: ako je oznaka uključena, tijekom obračuna plaće iznos će biti uzet u obzir za refundaciju; u suprotnom neće biti uključen u obračunsku listu.

**Na računu**: označava treba li trošak biti uključen kao stavka **Za fakturiranje** na intervenciji, ako se ona generira.

**Prilozi**: označava postoje li privici za redak troška.

**Kumulativni trošak**: označava da za trošak postoji detaljan zapis zbirnog troška.

**Način plaćanja**: način plaćanja korišten za podmirenje troška.

**Napomene**: dodatne napomene koje je unio korisnik.

### Detalji kumulativnog troška

Tablica **Detalji zbirnog troška** nalazi se na kartici **Putni troškovi** i koristi se u slučaju kada jedan resurs podmiruje trošak u ime više resursa. Kako bi se putni nalog pravilno obradio (uz poštivanje limita definiranih za svaki resurs), potrebno je trošak raspodijeliti na odgovarajuće udjele za sve resurse, čime se olakšava provedba kontrola.

Za svaki redak troška u donjoj tablici navode se:

- **Resurs**: svi resursi, uključujući i "glavni" resurs koji je podmirio trošak.
- **Iznos troška**: iznos se automatski izračunava tijekom dodavanja resursa. Trošak naveden u glavnom retku dijeli se s brojem unesenih redaka resursa. Iznos je moguće ručno izmijeniti, pod uvjetom da pri spremanju ukupni zbroj svih redaka odgovara ukupnom iznosu troška u glavnom retku.
- **Maksimalni refundirani iznos**: na temelju odabranog resursa i vrste troška iz glavnog retka prikazuje se iznos limita definiran u šifarniku resursa.

Troškovi koji su uključeni u [Putni nalog](/docs/project-management/activities-by-project/new-resource-expense-reports) dobit će status **Provjereno**, zajedno s datumom i korisnikom koji je izvršio provjeru.

Ako korisnik pokuša izmijeniti troškove u izvornim dokumentima (**Intervencije** ili **Aktivnosti**), prikazat će se poruka:

    "Trošak je provjeren! Izmjena nije moguća"

Kako bi se trošak ponovno mogao uređivati, potrebno ga je ukloniti iz putnog naloga ili izvršiti rollback postupka generiranja putnog naloga.

## Kontakt aktivnosti

Na ovoj kartici moguće je povezati prijavu aktivnosti s kontaktom iz CRM područja, CRM prodajnom prilikom te marketinškom kampanjom.

## Dokumenti u privituku

Na ovoj kartici moguće je pregledavati i dodavati privitke koji će biti spremljeni u modul Upravljanje dokumentima sustava Fluentis. Datoteke se dodaju metodom **drag & drop**, odnosno odabirom datoteke s njezine trenutne lokacije i njezinim povlačenjem u tablicu.

## Dodatni podaci

Na ovoj kartici moguće je unijeti povezane **Dodatne** podatke. Za više informacija pogledajte odjeljak [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).