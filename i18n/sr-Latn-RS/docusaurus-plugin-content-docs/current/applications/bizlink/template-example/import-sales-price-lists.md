---
title: Uvoz prodajnih cenovnika
sidebar_position: 2
---

Ovaj dokument objašnjava kako **uvesti cenovnike dobavljača** u **Fluentis** pomoću **tabele (Excel)**.

Ovaj uvoz moguć je zahvaljujući korišćenju funkcionalnosti **BizLink Parameters**, jer će se ona pozivati svaki put kada se obradi red.

### Kako otvoriti uvoz putem tabela

Kliknite na **Alati** (podrazumevano se nalazi na desnoj strani Fluentisa).

Kliknite na odeljak **BizLink**.

Kliknite na **Uvoz na zahtev > Šifarnik > Uvoz artikala i cenovnika**, kao što je prikazano na slici ispod.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image03.png)

### Odeljak sa podacima

U ovom odeljku unećemo podatke koji će zatim biti trajno sačuvani u bazi podataka **Fluentis**.

Tabela za uvoz sada je prikazana na ekranu.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image04.png)

Od ove tačke možete izabrati jedan od sledećih načina rada:

1. Uvezite već popunjenu tabelu pomoću opcije **Datoteka > Otvori**.
2. Dodajte različite kolone kopiranjem i lepljenjem iz liste sačuvane na računaru.
3. Sačuvajte ovu datoteku (**Datoteka > Sačuvaj**) na računaru, zatim dodajte podatke i ponovo je uvezite u Fluentis (pogledajte tačku 1). Ovo može biti veoma korisno za prosleđivanje šablona tabele za uvoz koji treba popuniti za buduće cenovnike koje će nam dobavljači slati.

**PAŽNJA**: Ako imamo tabelu sačuvanu na računaru, ona mora da odgovara izgledu lista na gornjoj slici, odnosno mora imati isti redosled kolona, tipove podataka itd. Oni su detaljno objašnjeni u sledećem odeljku.

### Umetanje polja

Prilikom umetanja polja potrebno je uzeti u obzir više stvari, uključujući tip, maksimalnu dužinu, obaveznost itd.

Opšte smernice:

- Ako je polje napisano crvenom bojom, obavezno je.
- Ako je naziv ćelije označen zelenom bojom, označava **odeljak**.
- Ako je naziv ćelije označen žutom bojom, označava **polje**.
- **Polje**: označava da li je unos obavezan ili ne.
- **Tip**: označava tip polja.
- **Excel formatiranje**: označava preporučeno Excel formatiranje kako bi se izbegli neispravni unosi. Pogledajte odeljak Korisni saveti i upozorenja na kraju dokumenta.
- **Dužina**: označava da li polje ima ograničenje broja znakova koje treba poštovati.
- **Opis**: kratak opis polja.

*Primer*: stvarni primer onoga što možete uneti u to polje.

- **Mapiranje tabele/kolone**: ako je navedeno, označava mapiranje odgovarajućeg polja u bazi podataka. Za dodatne informacije pogledajte odeljak Korisni saveti i upozorenja na kraju dokumenta.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image05.png)

**Podaci o artiklu:**

**Klasa:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Excel formatiranje: tekst
- Maksimalna dužina: /
- Opis: šifra koja se odnosi na klasu artikla.

*Primer*: „1” odgovara poluproizvodima, a „IMB” pakovanju.

- Mapiranje tabele/kolone: `select MBDC_Classe from MB_Classi`

**Šifra:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Excel formatiranje: tekst
- Maksimalna dužina: /
- Opis: referentna šifra artikla.

*Primer*: 02030508

**Opis:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Excel formatiranje: tekst
- Maksimalna dužina: /
- Opis: opis artikla, koji može odgovarati i šifri.

*Primer*: teniska loptica, može odgovarati broju artikla.

**Merna jedinica:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Excel formatiranje: tekst
- Maksimalna dužina: 3 znaka
- Opis: šifra merne jedinice koja se koristi za odgovarajuću stavku.

*Primer*: „cm” odgovara centimetrima, a „Utovarna jedinica” odgovara paleti.

- Mapiranje tabele/kolone: `select MBUM_Codice from MB_UnitaMisura`

**PDV:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Excel formatiranje: tekst
- Maksimalna dužina: 3 znaka
- Opis: šifra koja se odnosi na PDV koji se primenjuje na odgovarajuću stavku.

*Primer*: „25” odgovara stopi PDV-a od 25%, a „N” označava da stavka ne podleže oporezivanju PDV-om prema članu 13. stav 10. Zakona o PDV-u.

- Mapiranje tabele/kolone: `select MBIV_Code from MB_iva`

**Kategorija proizvoda:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Excel formatiranje: tekst
- Maksimalna dužina: 3 znaka
- Opis: šifra koja se odnosi na kategoriju robe kojoj pripada odgovarajuća stavka.

*Primer*: „206” odgovara lepkovima, a „211” sirovinama.

- Mapiranje tabele/kolone: `select MBCM_Codice from MB_CatMerceologica`

**Ulazna faktura:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Excel formatiranje: tekst
- Maksimalna dužina: 10 znakova
- Opis: šifra koja se odnosi na tip fakture za odgovarajuću stavku.

*Primer*: „4” odgovara nabavci poluproizvoda, a „1” sirovinama.

- Mapiranje tabele/kolone: `select MBFA_TipoFatt from mb_TipoFattAcq`

**Izlazna faktura:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Excel formatiranje: tekst
- Maksimalna dužina: 10 znakova
- Opis: šifra koja se odnosi na tip fakture za odgovarajuću stavku.

*Primer*: „4” odgovara nabavci poluproizvoda, a „1” sirovinama.

- Mapiranje tabele/kolone: `select MBFA_TipoFatt from mb_TipoFattVend`

**Nomenklatura:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Excel formatiranje: tekst
- Maksimalna dužina: 50 znakova
- Opis:

*Primer*: „32049000” odgovara bojama.

- Mapiranje tabele/kolone: `select INCN_CodNomencl from IN_CodNomenc`

**Barkod:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Excel formatiranje: tekst
- Maksimalna dužina: /
- Opis: barkod odgovarajuće stavke.

*Primer*: ABC-1234

**Tip lota:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Excel formatiranje: tekst
- Maksimalna dužina: 2 znaka
- Opis: tip lota kojem pripada odgovarajuća stavka.

*Primer*: „4” odgovara nabavci poluproizvoda, a „1” sirovinama.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image06.png)

**Podaci o cenovniku:**

**Cena:**

- Polje: obavezno
- Tip: decimalni broj
- Excel formatiranje: valuta, bez simbola
- Maksimalna dužina: /
- Opis: kataloška cena artikla.

*Primer*: „10.99”, „123.45”

**Merna jedinica:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Excel formatiranje: tekst
- Maksimalna dužina: /
- Opis: koristi se za definisanje cene u odnosu na količinu (npr. cena po kilogramu, cena po kvadratnom metru).

*Primer*: „kg” odgovara kilogramima.

- Mapiranje tabele/kolone: `select MBUM_Codice from MB_UnitaMisura`

**Iznos:**

- Polje: nije obavezno
- Tip: decimalni broj
- Excel formatiranje: broj, broj decimalnih mesta = 2
- Maksimalna dužina: /
- Opis: količina artikla na koju se odnosi prethodno navedena cena.

*Primer*: 500

**Tip osnove Qty-Val-PxQ:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Excel formatiranje: tekst
- Maksimalna dužina: /
- Opis: pokazuje da li se primenjuju vrednosti za količinu, vrednost ili cenu po količini. Obično se koristi količinska osnova, odnosno za određenu količinu primenjuje se popust od x%.

*Primer*: Qty, Val, PxQ

![](/img/it-it/applications/bizlink/import-sales-price-lists/image07.png)

**Popusti:**

**Popust1:**

- Polje: nije obavezno
- Tip: decimalni broj
- Excel formatiranje: broj, broj decimalnih mesta = 2
- Maksimalna dužina: /
- Opis: mogući popusti koji se mogu primeniti.

*Primer*: „50+10” znači da se početni popust od 50% primenjuje na zbir stavke, a zatim se na novi zbir primenjuje dodatni popust od 10%.

Isto važi i za druga dva popusta, menja se samo vrednost popusta.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image08.png)

**Količinski popusti (Tip razreda 'Qty'):**

**Popust11:**

- Polje: nije obavezno
- Tip: decimalni broj
- Excel formatiranje: broj, broj decimalnih mesta = 2
- Maksimalna dužina: /
- Opis: popust se primenjuje ako se kupi određena količina odgovarajućeg artikla.

*Primer*: 10

**Količina1:**

- Polje: nije obavezno
- Tip: decimalni broj
- Excel formatiranje: broj, broj decimalnih mesta = 2
- Maksimalna dužina: /
- Opis: minimalna količina potrebna za ostvarivanje odgovarajućeg popusta.

*Primer*: 550

Isto važi i za druga dva popusta i količine, menja se samo odgovarajuća vrednost.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image09.png)

**Vrednosni popust (Tip razreda 'Val'):**

**Popust1:**

- Polje: nije obavezno
- Tip: decimalni broj
- Excel formatiranje: broj, broj decimalnih mesta = 2
- Maksimalna dužina: /
- Opis: popust se primenjuje ako oporezivi iznos određene stavke pređe zadatu vrednost.

*Primer*: 20

**Vrednost1:**

- Polje: nije obavezno
- Tip: decimalni broj
- Excel formatiranje: broj, broj decimalnih mesta = 2
- Maksimalna dužina: /
- Opis: minimalni oporezivi iznos potreban za ostvarivanje odgovarajućeg popusta.

*Primer*: 950

Isto važi i za druga dva popusta i njihove vrednosti.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image10.png)

**Cena po količini (Tip razreda 'PxQ'):**

**Cena1:**

- Polje: nije obavezno
- Tip: decimalni broj
- Excel formatiranje: broj, broj decimalnih mesta = 2
- Maksimalna dužina: /
- Opis: jedinična cena koja se primenjuje ako se premaši određena količina.

*Primer*: 3.99

**Količina1:**

- Polje: nije obavezno
- Tip: decimalni broj
- Excel formatiranje: broj, broj decimalnih mesta = 2
- Maksimalna dužina: /
- Opis: minimalna količina potrebna za primenu odgovarajuće jedinične cene.

*Primer*: 250

Isto važi i za druge dve cene i odgovarajuće količine, menja se samo odgovarajuća vrednost.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image11.png)

**Ostali podaci:**

**Napomena:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Excel formatiranje: tekst
- Maksimalna dužina: /
- Opis: dodatne napomene.

*Primer*: ne izlagati sunčevoj svetlosti.

- Mapiranje tabele/kolone: `select MBNC_Codice from MB_NoteCodificat`

### BizLink Parameters

Ovi parametri koristiće se za obradu redova unetih u odeljak Podaci. Kao što možete videti na slici, neka polja su već unapred popunjena, ali ih po potrebi možete izmeniti.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image12.png)

**1. BizLink Spreadsheet:**

- Polje: ne popunjavati/ne menjati.

**2. Jezik:**

- Polje: obavezno
- Tip: tekstualni niz
- Opis: ISO šifra koja označava jezik.

*Primer*: „it-IT” označava italijanski jezik, a „hr-HR” hrvatski jezik.

**3. Preduzeće:**

- Polje: obavezno
- Tip: tekstualni niz
- Opis: ovo polje je unapred popunjeno jer preuzima vrednosti koje već postoje u Fluentisu i koje se mogu videti u gornjem levom uglu.

*Primer*: „1” odgovara demo preduzeću.

- Mapiranje tabele/kolone: `Select MBSC_Code from MB_Soc`

**4. Divizija:**

- Polje: obavezno
- Tip: tekstualni niz
- Opis: kao i polje Preduzeće, ovo polje je unapred popunjeno.

*Primer*: „1” odgovara registrovanom sedištu, a „2” operativnom sedištu u Milanu.

- Mapiranje tabele/kolone: `select MBDP_Code from MB_Dep`

**5. Država:**

- Polje: obavezno
- Tip: tekstualni niz
- Opis: država u kojoj se nalazi odeljenje za koje se uvozi cenovnik.

*Primer*: „HR” odgovara Hrvatskoj, a „USA” Sjedinjenim Američkim Državama.

- Mapiranje tabele/kolone: `select MBNZ_Codice from MB_Nazioni`

**6. Tip barkoda:**

- Polje: obavezno samo ako je barkod unet za najmanje jedan artikal u navedenom odeljku.
- Tip: tekstualni niz
- Opis: služi za označavanje tipa korišćenog barkoda.

*Primer*: „39” odgovara COD39.

- Mapiranje tabele/kolone: `select MBBC_Codice from MB_BarCode`

**7. Priroda cenovnika (GEN-CUST):**

- Polje: obavezno
- Tip: tekstualni niz
- Opis: služi za označavanje da li je cenovnik standardni ili prilagođeni. GEN se obično navodi za cenovnike koji se mogu prenositi sa jednog kupca na drugog jer su isti. Ako je navedeno CUST, to označava personalizovani cenovnik za kupca, odnosno posebno kreiran cenovnik za kupca čiji su konto i podkonto uneti u parametrima.

*Primer*: „GEN” odgovara opštem cenovniku, a „CUST” prilagođenom cenovniku.

- Mapiranje tabele/kolone:

**8. Tip cenovnika:**

- Polje: obavezno
- Tip: tekstualni niz
- Opis: služi za označavanje tipa cenovnika. Unosi se ako je priroda cenovnika = „GEN”, u suprotnom ne treba ga unositi.

*Primer*: „GEN” odgovara opštem, a „PRO” promotivnom cenovniku.

- Mapiranje tabele/kolone: `select MBLV_List from MB_LisVen`

**9. Konto:**

- Polje: obavezno
- Tip: tekstualni niz
- Opis: konto kupca, knjiga kupaca. Ako je cenovnik prilagođen, konto i podkonto biće kreirani prema vrednostima navedenim u odgovarajućim parametrima. Ako je opšti, ne treba ga unositi.

*Primer*: „1200”, koji ima 3 podkonta (pogledajte ispod).

- Mapiranje tabele/kolone: `select MBPC_Conto from MB_PiaCon`

**10. Podkonto:**

- Polje: obavezno
- Tip: tekstualni niz
- Opis: podkonto kupca, knjiga kupaca. Ako je cenovnik prilagođen, konto i podkonto biće kreirani prema vrednostima navedenim u odgovarajućim parametrima. Ako je opšti, ne treba ga unositi.

*Primer*: za prethodno navedeni konto 1200 postoje 3 podkonta: „001”, koji odgovara fakturama, „002”, koji odgovara vrednostima otpremnica, i „” (nije naveden podkonto), koji odgovara novcu i novčanim ekvivalentima.

- Mapiranje tabele/kolone: `select BPC_SottoConto from MB_PiaCon`

**11. Valuta:**

- Polje: obavezno
- Tip: tekstualni niz
- Opis: valuta u kojoj se tumače vrednosti unete u odgovarajući odeljak.

*Primer*: „EUR” odgovara evru, a „USD” dolaru.

- Mapiranje tabele/kolone: `select MBDI_Divisa from MB_Divise`

**12. Zaokruživanje:**

- Polje: obavezno
- Tip: decimalni broj
- Opis: označava da li treba zaokružiti naviše ili naniže.

*Primer*: 1 odgovara bez zaokruživanja, 2 zaokruživanju naviše, a 3 zaokruživanju naniže.

- Mapiranje tabele/kolone: `select MBRNT_Id from MB_RoundingType`

**13. Početak važenja:**

- Polje: obavezno
- Tip: datum i vreme
- Opis: označava početak važenja unetog cenovnika (dd/mm/yyyy).

*Primer*: 1/10/2018

**14. Kraj važenja:**

- Polje: nije obavezno
- Tip: datum i vreme
- Opis: ako je naveden, označava kraj važenja unetog cenovnika (dd/mm/yyyy).

*Primer*: 31/12/2027

**15. Tip popusta cenovnika 1:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Opis: ako je naveden, označava tip popusta navedenog u odeljku **Popusti**.

*Primer*: „4” odgovara konačnom promotivnom popustu.

- Mapiranje tabele/kolone: `select MBST_Code from MB_Sconti`

**16. Tip popusta cenovnika 2:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Opis: ako je naveden, označava tip popusta navedenog u odeljku **Popusti**.

*Primer*: „4” odgovara konačnom promotivnom popustu.

- Mapiranje tabele/kolone: `select MBST_Code from MB_Sconti`

**17. Tip popusta cenovnika 3:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Opis: ako je naveden, označava tip popusta navedenog u odeljku **Popusti**.

*Primer*: „4” odgovara konačnom promotivnom popustu.

- Mapiranje tabele/kolone: `select MBST_Code from MB_Sconti`

**18. Tip količinskog popusta:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Opis: ako je naveden, označava tip odobrenog popusta.

*Primer*: „4” odgovara konačnom promotivnom popustu.

- Mapiranje tabele/kolone: `select MBST_Code from MB_Sconti`

**19. Tip vrednosnog popusta:**

- Polje: nije obavezno
- Tip: tekstualni niz
- Opis: ako je naveden, označava tip odobrenog popusta.

*Primer*: „4” odgovara konačnom promotivnom popustu.

- Mapiranje tabele/kolone: `select MBST_Code from MB_Sconti`

### Pokretanje uvoza

Nakon unosa podataka, za pokretanje uvoza kliknite na dugme u meniju za uvoz, u gornjem levom uglu, koje se naziva i „Uvoz”, kao što je prikazano na slici ispod.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image13.png)

### Zaključak – Umetanje je uspešno

Ako je sve u redu, neće se pojaviti poruka o grešci. Da biste dodatno proverili uspešnost uvoza, otvorite šifarnik artikala (**Početna stranica > Artikli**) i proverite da li su artikli uvezeni putem prodajnog cenovnika prisutni.

U suprotnom će se na ekranu pojaviti poruka o grešci koja će pokazati koji parametri i/ili polja nisu ispravni. Za tumačenje greške pogledajte odeljak Korisni saveti i upozorenja na kraju dokumenta.

### Korisni saveti i upozorenja

**Preporučeno Excel formatiranje:**

- Za ispravan uvoz preporučuje se formatiranje kolona prema tipu navedenom u odeljku „Excel Formatting” za svako polje. Na primer, ako je tip polja decimalni broj i u njega se unosi valuta, formatirajte polje kao valutu. U suprotnom, ako ćelija nije formatirana, Excel može ukloniti nule koje ne utiču na numeričku vrednost. Da biste primenili formatiranje, pratite sledeće korake:

Prvo izaberite željenu kolonu, kao što je prikazano ispod:

![](/img/it-it/applications/bizlink/import-sales-price-lists/image14.png)

Zatim, nakon što postavite pokazivač miša unutar kolone, kliknite desnim tasterom miša.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image15.png)

Kliknite levim tasterom miša na **Format Cells…**

![](/img/it-it/applications/bizlink/import-sales-price-lists/image16.png)

Na ovom ekranu možete formatirati izabranu kolonu. Na osnovu smernica navedenih u poljima za unos, izaberite odgovarajuću kategoriju sa relevantnim podešavanjima (npr. valuta). Isti postupak može se izvršiti i u tabeli unutar Fluentisa.

**Pažnja**: tipičan primer su šifre koje sadrže nule, npr. „001”. Ako je polje formatirano kao opšte ili numeričko, nule će biti uklonjene, dok će se sačuvati ako je polje formatirano kao tekstualni niz.

**Mapiranje tabele/kolone:**

- Ako je prilikom umetanja polja navedeno mapiranje tabele/kolone, to znači da vrednost uneta u polje za uvoz već mora postojati u bazi podataka. Da biste videli odgovarajuće podatke koji postoje u bazi podataka, pratite korake u nastavku. Kao primer koristićemo klasu artikla i njeno mapiranje:

`select MBDC_Classe from MB_Classi` (ovo je mapiranje). Pokrenite upit u programu „Microsoft SQL Server Management Studio” i dobićete sledeći rezultat:

![](/img/it-it/applications/bizlink/import-sales-price-lists/image17.png)

Ovakav prikaz ne pruža dovoljno informacija da bismo razumeli značenje vrednosti. Da biste to razumeli, zamenite simbol „*” nakon klauzule SELECT i sastavite novi upit. U ovom slučaju trebalo bi da izaberete `select * from MB_Class`, koji se koristi za prikaz celokupnog sadržaja tabele. Uradimo to sada.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image18.png)

Ovo je korisno jer, kao što je prikazano na slici, na osnovu opisa (MBDC_Descr) možemo razumeti šta polje predstavlja i proveriti da li se vrednost koju nameravamo da unesemo već nalazi u bazi podataka.

Opisani postupak je univerzalan, odnosno primenjuje se na svako polje.

Isti prikaz može se videti i u Fluentisu.

Na početnoj stranici Fluentisa izaberite **Artikli > Artikli** (pogledajte sliku ispod).

![](/img/it-it/applications/bizlink/import-sales-price-lists/image19.png)

Zatim u prikazanoj maski za pretragu kliknite levim tasterom miša na mali trougao pored artikala. Otvoriće se padajući meni u kojem možete videti klase artikala sa njihovim opisima, kao na slici.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image20.png)

Ovo se odnosi na klasu artikla. Za ostala polja isti postupak može se primeniti na drugim mestima.

Zato je potrebno uneti jednu od postojećih vrednosti. U suprotnom uvoz neće biti uspešan i dobićemo grešku. Ovo važi za svako polje za koje je navedeno mapiranje tabele/kolone.

Međutim, ako želimo da dodamo vrednost za polje sa mapiranjem koja još ne postoji u bazi podataka, moraćemo da je unesemo pomoću upita ili kroz Fluentis. U ovom slučaju ne preporučuje se korišćenje INSERT upita jer je njegovo sastavljanje složenije od prethodno prikazanog SELECT upita. Zato se preporučuje unos kroz Fluentis.

Ponovo ćemo koristiti klasu artikla kao primer. U odeljku Artikli (slika iznad) kliknite desnim tasterom miša unutar filtera za pretragu klase artikla i izaberite **Otvori obrazac**.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image21.png)

U obrascu koji se otvori kliknite na dugme **Pretraži** da biste videli postojeće klase artikala.

![](/img/neutral/common/search.png)

Ispod poslednjeg reda nalazi se prazan red. On služi za unos novih vrednosti.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image23.png)

Nove vrednosti koje želite da unesete upišite u taj red, a zatim samo pritisnite Enter.

Ovaj postupak je sličan i za ostala polja. Menja se samo mesto na kojem se nalaze filteri za pretragu, u kojima se klikom levim tasterom miša otvara obrazac.

**Greške:**

- U slučaju neuspešnog uvoza, kao što je prethodno navedeno, na ekranu će se pojaviti poruka o grešci.

Ako je greška nastala u delu sa podacima, moguće je utvrditi red koji sadrži grešku jer će, na primer, biti prikazana poruka „System.ArgumentException: Error importing row 4”.

U ovom slučaju (pogledajte sliku ispod), greška će biti prijavljena za red 4, koji, međutim, nije stvarni red koji sadrži grešku. Da biste tačno utvrdili koji red sadrži grešku, dodajte 1 broju reda, koristeći brojeve u levoj koloni.

Stvarni red koji sadrži grešku = Error importing rownum + 1

![](/img/it-it/applications/bizlink/import-sales-price-lists/image24.png)

Da biste protumačili grešku u poruci, pratite sledeće korake: u istom redu u kojem se nalazi prethodno navedeni broj reda nalazi se objekat na koji se greška odnosi, zatim sama greška i, na kraju, svojstvo povezano sa greškom u kojem je došlo do problema.

U prethodno navedenom primeru poruka glasi:

„Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.PurchasePriceListsnot-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit”.

Kao što se može videti na slici iznad, grešku je izazvala merna jedinica povezana sa nabavnim cenovnikom jer je njena vrednost prazna (null). Naime, njen unos je obavezan.

Ako je greška nastala u delu sa parametrima, poruka će biti slična. Način rešavanja ostaje isti, pa na osnovu navedenog svojstva treba proveriti da li je ono ispravno uneto.

**Pažnja**: Ako se pronađe potpuno prazan red, neće biti prijavljena nikakva greška, ali će se uvoz završiti na tom mestu. Na primer, ako je prvi red (red br. 4) iz nekog razloga prazan, a ispod njega (od reda br. 5 nadalje) postoje popunjeni redovi, ništa neće biti uvezeno.

**Pažnja**: Ako se unese cenovnik sa, na primer, 10 redova, a greška se pojavi u redu br. 7, prvih 6 redova, koji nisu uzrokovali probleme, biće uvezeni! Ako se nijedna vrednost u prvih 6 redova ne promeni (i ako je greška ispravljena), ponovnim pokretanjem uvoza neće doći do problema, uključujući dupliranje, jer se najpre proverava da li artikal već postoji. Ako se promeni čak i samo jedna vrednost, taj artikal biće unet kao novi artikal.

Na kraju, može se pojaviti još jedna poruka o grešci, prikazana ispod.

![](/img/it-it/applications/bizlink/import-sales-price-lists/image25.png)

Kao što se može videti na slici iznad, ovu vrstu poruke lakše je protumačiti jer je navedena tačna referenca ćelije u kojoj se nalazi greška. U ovom slučaju, u ćeliji F:4 nema nijedne vrednosti.