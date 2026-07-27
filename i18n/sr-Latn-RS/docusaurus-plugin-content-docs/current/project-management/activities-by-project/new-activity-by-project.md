---
title: Prijava aktivnosti po projektu
sidebar_position: 1
---

U oblasti projekata svaki resurs može unositi prijave sopstvenih aktivnosti. One mogu biti povezane sa projektom (nije obavezno), a zatim se mogu fakturisati (pri čemu će se generisati intervencija), a ujedno će učestvovati i u obračunu plate.

## Zaglavlje

**Vrsta aktivnosti**: sadrži [Vrstu aktivnosti](/docs/configurations/tables/project-management/activity-type/);

**Datum aktivnosti/Broj aktivnosti**: sadrži datum i broj aktivnosti; automatski će biti predložen najstariji nedostajući datum na osnovu broja meseci za proveru definisanog u parametrima projekata. Ako je datum definisan kao neradni dan u Kalendaru neradnih dana, neće biti predložen.

**Resurs**: sadrži resurs koji obavlja aktivnost;

**Datum/Ručni unos vremena**: sadrži datum unosa i oznaku koja, ako je aktivna, omogućava ručno uređivanje polja **Ukupno vreme**, umesto njegovog automatskog obračuna;

**Kupac**: sadrži kupca za kojeg se aktivnost obavlja;

**Statistički konto**: omogućava unos konta koje će se koristiti u statističke svrhe;

**Projekat**: sadrži povezani [Projekat](/docs/project-management/projects/search-projects-intro/);

Otvaranjem proširivog odeljka **Projekat** moguće je definisati **Artikal**. Ova šifra artikla koristiće se ako je aktivnost naplativa i stoga pretvorena u intervenciju. Ako nije naveden poseban artikal, usluga na intervenciji koristiće šifru artikla, jedinicu mere i cenu preuzete sa povezanog projekta.

Ako je naveden poseban artikal:

- ako se jedinica mere artikla i jedinica mere povezanog projekta podudaraju i jedinica mere projekta je tipa **Vreme**, u intervenciji će se koristiti šifra artikla navedena u aktivnosti, dok će cena i jedinica mere biti preuzete sa projekta;
- ako se jedinica mere artikla i jedinica mere povezanog projekta **ne** podudaraju ili jedinica mere projekta nije tipa **Vreme**, u intervenciji će se koristiti šifra artikla navedena u aktivnosti, dok će cena i jedinica mere biti određene prema standardnim pravilima dokumenata (kao kod unosa novog reda dokumenta, uzimajući u obzir cenovnike, popuste, podrazumevanu cenu iz šifarnika artikala i ostala standardna podešavanja).

**Vreme početka/Vreme završetka**: sadrži vreme početka i završetka aktivnosti; predlaže se na osnovu radnog rasporeda resursa, a ako za isti dan već postoje druge prijave aktivnosti, predložiće se samo slobodan vremenski raspon definisan u rasporedu resursa.

<u>Nisu dozvoljeni neusaglašeni datumi</u> između polja Početak–Završetak, Početak–Završetak pauze i Datum aktivnosti. Zbog toga će se prilikom izmene bilo kog od tih datuma svi ostali datumi automatski uskladiti.

Ako se izmeni **Vreme završetka** tako da bude pre početka pauze, pauza će se automatski ukloniti.

**Vreme početka pauze/Vreme završetka pauze**: sadrži vreme početka i završetka pauze;

**Preklapajuća aktivnost**: oznaka koja se automatski uključuje ako sistem otkrije druge aktivnosti istog resursa za isti dan ili isti vremenski raspon.

**Vreme preklapajuće aktivnosti (min)**: omogućava korisniku ručni unos stvarnog trajanja preklapanja aktivnosti.

**Aktivnost rada na daljinu (Smart Working)**: oznaka koja se automatski uključuje na osnovu podešavanja rada na daljinu u šifarniku resursa. Koristiće se tokom obračuna plate za prepoznavanje dana u kojima je resurs radio na daljinu. Na odgovarajućim kontrolnim tablama moguće je proveriti da li tokom istog dana postoje kombinacije rada na daljinu i rada na lokaciji.

**Izvorno mesto troška**: mesto troška predloženo iz šifarnika zaposlenih povezanog sa resursom.

**Mesto troška**: mesto troška predloženo na osnovu kategorije aktivnosti.

**Tiket**: tiket povezan sa aktivnošću; ako u prijavi aktivnosti nisu popunjeni kupac i projekat, oni će se automatski preuzeti iz povezanog tiketa.

**Tehnička procena**: ako tiket sadrži tehničku procenu koja odgovara kupcu i resursu, ona će biti automatski predložena. Ako u prijavi aktivnosti nisu popunjeni kupac i projekat, oni će se automatski preuzeti iz povezanog tiketa, odnosno tehničke procene.

**Glavna imovina**: zapis postrojenja iz oblasti EAM povezan sa aktivnošću.

**Preduzeće / Intercompany odeljenje**: označava preduzeće i odeljenje kojem aktivnost pripada ako se razlikuju od društva u kojem je aktivnost uneta.

**Intervencija**: sadrži eventualnu ručno povezanu ili automatski generisanu [Intervenciju](/docs/project-management/service-activities/search-intervention/) prilikom čuvanja aktivnosti ili putem čarobnjaka. U vrsti aktivnosti moguće je definisati vrstu intervencije koja će se koristiti.

**Status aktivnosti**: sadrži jedan od sledećih statusa: **Uneto**, **Provereno**, **Suspendovano**, **Zatvoreno**.

**Ukupno vreme**: prikazuje ukupan broj sati prijavljene aktivnosti, obračunat na osnovu unetog vremena. Ako je uključena oznaka **Ručno vreme**, korisnik može ručno uređivati polje.

**Procenjeni procenat rada**: moguće je uneti vrednost od 0 do 100 koja će biti upisana u odgovarajuću uslugu intervencije generisane iz aktivnosti.

**Kriterijumi za izdavanje računa**

**Kategorija aktivnosti**: automatski se predlaže sa projekta, ako je definisana, ili je unosi korisnik. Od kategorije aktivnosti zavise mesto troška i oznaka **Fakturabilna aktivnost**.

**Intercompany aktivnost**: oznaka koja identifikuje aktivnost koja se obrađuje kao intercompany.

**Fakturisana aktivnost**: oznaka koja pokazuje da li je aktivnost povezana sa intervencijom i time fakturisana.

**Naplativa aktivnost**: oznaka koja određuje da li se aktivnost može pretvoriti u intervenciju i samim tim fakturisati. Ova oznaka postavlja se na osnovu kategorije aktivnosti ili je može odrediti korisnik.

**Prinudno označi aktivnost kao naplativu**: oznaka koja omogućava da se aktivnost smatra fakturisanom iako stvarno nije, kako se ne bi generisala povezana intervencija.

**Aktivnost sa dodatom vrednošću**: oznaka koja identifikuje aktivnosti sa dodatom vrednošću u statističke svrhe. Vrednost se preuzima sa projekta, a ako nije definisana, iz konfiguracije kategorije aktivnosti. Korisnik je može ručno izmeniti.

Nakon toga sledi više kartica.

## Opis

Na ovoj kartici moguće je opisati aktivnost u polju **Opis aktivnosti**, koje će se koristiti kao opis izvršene aktivnosti na intervencijama (ako se generišu). Dostupno je i polje **Interni opis**, koje se neće prenositi ni u jedan drugi dokument.

Ako je aktivnost povezana sa intervencijom i izmeni se vreme i/ili opis aktivnosti, odgovarajuća intervencija će se automatski ažurirati.

## Putni troškovi

Ova kartica sadrži eventualne putne troškove koje je resurs imao.

Prilikom ručnog unosa prijave aktivnosti troškovi će se automatski predložiti nakon izbora resursa, ako su konfigurisani u njegovom šifarniku.

Ako je prijava aktivnosti automatski generisana iz intervencije, kartica **Putni troškovi** sadržaće samo troškove koje je resurs prijavio kao **Nastale troškove** na intervenciji. Ako je kartica **Nastali troškovi** na intervenciji potpuno prazna, u aktivnosti će ipak biti predloženi troškovi konfigurisani u šifarniku resursa.

Prilikom čuvanja, ako predloženi troškovi nisu dopunjeni vrednostima i iznosima, automatski će biti obrisani.

Moguće je izabrati **Vrstu troška**, a u zavisnosti od njene konfiguracije biće omogućeno uređivanje ostalih polja, kao što su **Putni sati**, **Trošak KM**, **Iznos paušala**, **Porez**, **Ukupni trošak**, **Datum**, **Način plaćanja** i dr.

**Ukupni trošak** automatski se obračunava za vrste troškova koje koriste **Cenu po satu** ili **Cenu po kilometru**, množenjem odgovarajućih vrednosti sa **Putnim satima putovanja**, odnosno **Kilometrima**.

**Za povraćaj**: ako je oznaka uključena, tokom obračuna plate iznos će biti uzet u obzir za refundaciju; u suprotnom neće biti uključen u obračunsku listu.

**Na računu**: označava da li trošak treba da bude uključen kao stavka **Za fakturisanje** na intervenciji, ako se ona generiše.

**Prilozi**: označava da li postoje prilozi za red troška.

**Kumulativni trošak**: označava da za trošak postoji detaljan zapis zbirnog troška.

**Način plaćanja**: način plaćanja korišćen za podmirenje troška.

**Napomene**: dodatne napomene koje je uneo korisnik.

### Detalji kumulativnog troška

Tabela **Detalji zbirnog troška** nalazi se na kartici **Putni troškovi** i koristi se u slučaju kada jedan resurs podmiruje trošak u ime više resursa. Da bi se putni nalog pravilno obradio (uz poštovanje limita definisanih za svaki resurs), potrebno je trošak raspodeliti na odgovarajuće udele za sve resurse, čime se olakšava sprovođenje kontrola.

Za svaki red troška u donjoj tabeli navode se:

- **Resurs**: svi resursi, uključujući i „glavni“ resurs koji je podmirio trošak.
- **Iznos troška**: iznos se automatski obračunava tokom dodavanja resursa. Trošak naveden u glavnom redu deli se brojem unetih redova resursa. Iznos je moguće ručno izmeniti, pod uslovom da prilikom čuvanja ukupan zbir svih redova odgovara ukupnom iznosu troška u glavnom redu.
- **Maksimalni refundirani iznos**: na osnovu izabranog resursa i vrste troška iz glavnog reda prikazuje se iznos limita definisan u šifarniku resursa.

Troškovi koji su uključeni u [Putni nalog](/docs/project-management/activities-by-project/new-resource-expense-reports) dobiće status **Provereno**, zajedno sa datumom i korisnikom koji je izvršio proveru.

Ako korisnik pokuša da izmeni troškove u izvornim dokumentima (**Intervencije** ili **Aktivnosti**), prikazaće se poruka:

    "Trošak je proveren! Izmena nije moguća"

Da bi trošak ponovo mogao da se uređuje, potrebno ga je ukloniti iz putnog naloga ili izvršiti rollback postupka generisanja putnog naloga.

## Kontakt aktivnosti

Na ovoj kartici moguće je povezati prijavu aktivnosti sa kontaktom iz CRM oblasti, CRM prodajnom prilikom i marketinškom kampanjom.

## Dokumenti u prilogu

Na ovoj kartici moguće je pregledati i dodavati priloge koji će biti sačuvani u modulu Upravljanje dokumentima sistema Fluentis. Datoteke se dodaju metodom **drag & drop**, odnosno izborom datoteke sa njene trenutne lokacije i njenim prevlačenjem u tabelu.

## Dodatni podaci

Na ovoj kartici moguće je uneti povezane **Dodatne** podatke. Za više informacija pogledajte odeljak [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).