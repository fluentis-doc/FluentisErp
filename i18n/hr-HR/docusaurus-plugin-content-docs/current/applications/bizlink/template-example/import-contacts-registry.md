---
title: Uvoz šifarnika podataka
sidebar_position: 1
---

U ovom članku biće objašnjeno kako **uvesti kontakte** (kupce ili dobavljače) u **Fluentis** pomoću **elektronske tabele**.

Ovaj uvoz je moguć zahvaljujući korišćenju **BizLink Parameters**, jer će oni biti pozvani svaki put kada se obradi red.

### Kako otvoriti uvoz putem elektronske tabele

Kliknite na **Alati** (obično se nalazi na desnoj strani Fluentisa).

Kliknite na odeljak **BizLink**.

Kliknite na **Uvoz na zahtev > Šifarnik > Uvoz kupca/dobavljača**, kao što je prikazano na slici ispod.

![](/img/it-it/applications/bizlink/import-contacts-registry/image03.png)

### Odeljak Podaci

U ovom odeljku unećemo podatke koji će kasnije postati trajni njihovim čuvanjem u bazi podataka **Fluentis**.

Sada je na ekranu prikazana elektronska tabela za uvoz.

![](/img/it-it/applications/bizlink/import-contacts-registry/image04.png)

Od ovog trenutka možemo odabrati nekoliko pristupa:

1. Uvesti već popunjenu elektronsku tabelu pomoću opcije **File > Open**.
2. Dodati različite kolone kopiranjem i lepljenjem iz sačuvane liste na računaru.
3. Sačuvati ovu datoteku (**File > Save**) na računaru, a zatim dodati različite podatke i ponovo je uvesti u **Fluentis** (videti tačku 1). Ovo može biti veoma korisno za prosleđivanje šablona elektronske tabele za uvoz, koji će biti popunjen za buduće liste koje će nam dostaviti dobavljači.
4. Ručno dodati polja.

**PAŽNJA**: ako imamo elektronsku tabelu sačuvanu na računaru, ona mora da prati strukturu tabele prikazane na slici iznad. Drugim rečima, mora imati isti redosled kolona, tipove podataka itd. Ovi detalji detaljno su objašnjeni u sledećem odeljku.

### Unos polja

Prilikom unosa polja potrebno je uzeti u obzir mnoge stvari, uključujući tip, maksimalnu dužinu, obaveznost polja itd.

Opšte smernice:

- Ako je polje označeno crvenom bojom, ono je obavezno.
- Ako je naziv ćelije istaknut zelenom bojom, to je **odeljak**.
- Ako je naziv ćelije istaknut žutom bojom, to je **polje**.
- Polje: označava da li je unos obavezan ili ne.
- Tip: označava tip polja.
- Formatiranje u Excelu: označava preporučeno formatiranje u Excelu kako bi se izbegli pogrešni unosi. Pogledajte korisne savete i upozorenja na kraju.
- Dužina: označava da li polje ima ograničenje broja znakova.
- Opis: kratak opis polja.

*Primer*: stvarni primer onoga što možete uneti u to polje.

- Tabela/kolona za mapiranje: ako je dostupna, označava mapiranje odgovarajućeg polja u bazi podataka. Za više informacija pogledajte korisne savete i upozorenja na kraju.

![](/img/it-it/applications/bizlink/import-contacts-registry/image05.png)

**Opšti podaci**:

Šifra:

- Polje: obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: 6 znakova
- Opis: referentna šifra kupca/dobavljača

*Primer*: TVTK

- Tabela/kolona za mapiranje: `select MBAN_Nomignolo from MB_Anagr`

Naziv preduzeća:

- Polje: obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: /
- Opis: naziv preduzeća kupca/dobavljača

*Primer*: TVRTKA d.o.o.

- Tabela/kolona za mapiranje: `select MBAN_RagSoc from MB_Anagr`

Kupac/Dobavljač:

- Polje: obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: 1 znak
- Opis: označava da li unosimo kupca ili dobavljača. Dve oznake koje predstavljaju kupca i dobavljača definisane su u parametrima.

*Primer*: „D” odgovara dobavljaču, a „K” kupcu.

**Pažnja**: jedini način za unos kontakta koji je i kupac i dobavljač jeste da ga prvo unesete kao kupca, a zatim kao dobavljača.

Konto:

- Polje: nije obavezno
- Tip: niz znakova
- Opis: konto dobavljača, glavna knjiga dobavljača

*Primer*: „1200” odgovara kupcima iz Hrvatske.

- Tabela/kolona za mapiranje: `select MBPC_Conto from MB_PiaCon`

Podkonto:

- Polje: nije obavezno
- Tip: niz znakova
- Opis: podkonto dobavljača, analitika glavne knjige dobavljača

*Primer*: ako se prenose konta sa praznim sistemom, može se koristiti šifriranje poput 01; 02; 03 ili 001; 002; 003.

- Tabela/kolona za mapiranje: `select BPC_SottoConto from MB_PiaCon`

Dospеća plaćanja (true/false):

- Polje: obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: 200 znakova
- Opis: oznaka otvorenih stavki

*Primer*: dovoljno je jednostavno napisati „true” i, čim promenite ćeliju, automatski će se u sredini ćelije prikazati „TRUE” ili „FALSE”, u zavisnosti od slučaja.

Adresa:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: /
- Opis: adresa sedišta kupca/dobavljača

*Primer*: Ulica bb

- Tabela/kolona za mapiranje: `select MBAN_Indirizzo from MB_Anagr`

Opština:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: /
- Opis: grad sedišta kupca/dobavljača

*Primer*: Rijeka

- Tabela/kolona za mapiranje: `select MBAN_Comune from MB_Anagr`

Poštanski broj:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: 5 znakova
- Opis: poštanski broj sedišta kupca/dobavljača

*Primer*: 51000

- Tabela/kolona za mapiranje: `select MBAN_CAP from MB_Anagr`

Županija:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: 200 znakova
- Opis: županija sedišta kupca/dobavljača

*Primer*: „8” odgovara Primorsko-goranskoj županiji.

- Tabela/kolona za mapiranje: `select MBAN_Provincia from MB_Anagr`

Država:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: 200 znakova
- Opis: država sedišta kupca/dobavljača

*Primer*: „HR” odgovara Hrvatskoj.

- Tabela/kolona za mapiranje: `select MBNZ_CodIso from MB_Nazioni`

Jezik:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: 200 znakova
- Opis: jezik koji koristi kupac/dobavljač

*Primer*: „HR” odgovara hrvatskom jeziku.

- Tabela/kolona za mapiranje: `select MBAN_RagSoc from MB_Anagr`

Telefon:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: 200 znakova
- Opis: telefon kupca/dobavljača

*Primer*: 051-999999

- Tabela/kolona za mapiranje: `select MBAN_Telefono from MB_Anagr`

E-mail:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: 200 znakova
- Opis: glavna e-mail adresa kupca/dobavljača

*Primer*: info@tvrtka.com

- Tabela/kolona za mapiranje: `select MBAN_Email from MB_Anagr`

Napomena:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: 200 znakova
- Opis: dodatne napomene

*Primer*: Ovo je napomena.

- Tabela/kolona za mapiranje: `select MBAN_Note from MB_Anagr`

![](/img/it-it/applications/bizlink/import-contacts-registry/image06.png)

**Poreski podaci**:

Poreski broj:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: /
- Opis: poreski identifikacioni broj kupca/dobavljača

*Primer*: HR29907997990

- Tabela/kolona za mapiranje: `select MBAN_CodFiscale from MB_Anagr`

ISO šifra:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: 50 znakova
- Opis:

*Primer*: „HR” odgovara Hrvatskoj.

- Tabela/kolona za mapiranje: `select MBAN_CodIso from MB_Anagr`

OIB broj:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: 200 znakova
- Opis: poreski identifikacioni broj kupca/dobavljača

*Primer*: 29907997990

- Tabela/kolona za mapiranje: `select MBAN_PartitaIva from MB_Anagr`

![](/img/it-it/applications/bizlink/import-contacts-registry/image07.png)

**Plaćanja**:

Tip plaćanja:

- Polje: obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: /
- Opis: tip plaćanja koji koristi kupac/dobavljač

*Primer*: „T” odgovara bankarskom transferu.

- Tabela/kolona za mapiranje: `select MBTP_Pagamento from MB_TipoPag`

Modeli plaćanja:

- Polje: obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: /
- Opis: rok plaćanja za kupca/dobavljača

*Primer*: „60 GG DF” znači u roku od 60 dana od datuma fakture, a „prilikom isporuke” znači plaćanje prilikom isporuke robe.

- Tabela/kolona za mapiranje: `select * from MB_SolPag`

ABI:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: 5
- Opis: identifikacija banke na koju se odnosi račun kupca/dobavljača. To je deo IBAN-a.

*Primer*: 01234

CAB:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: 5
- Opis: označava filijalu odgovarajuće banke (ABI) kupca/dobavljača. To je deo IBAN-a.

*Primer*: 12345

IBAN:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: 27 znakova
- Opis: kod koji se koristi u transakcijama između različitih bankarskih računa i koji sadrži identifikaciju zemlje, banke i broja tekućeg računa.

*Primer*: HR2223600007701277167

SWIFT:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: 11 znakova
- Opis: identifikacioni brojevi koji omogućavaju sistemima da odmah prepoznaju banku primaoca i banku pošiljaoca, njihov naziv i mesto iz kojeg posluju. Potreban je za međunarodna plaćanja. Sastoji se od 8 znakova i još 3 opciona znaka.

*Primer*: „UNCRITMM” odgovara SWIFT kodu banke UniCredit.

Zona:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: /
- Opis: zona definisana na početku IBAN-a

*Primer*: „HR” odgovara Hrvatskoj.

![](/img/it-it/applications/bizlink/import-contacts-registry/image08.png)

**Agenti**:

Agent:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: /
- Opis: ako postoji agent (prisutan u šifarniku agenata), može se povezati sa klijentom.

*Primer*:

- Tabela/kolona za mapiranje: `select * from MB_Agenti`

Provizije:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: /
- Opis: provizija agenta, ako se razlikuje od one unete u šifarnik agenata. Postoji maska pomoću koje se može odrediti koja provizija ima veći prioritet.

*Primer*:

- Tabela/kolona za mapiranje: `select * from MB_AgentiZone`

![](/img/it-it/applications/bizlink/import-contacts-registry/image09.png)

**Cenovnici**:

Cenovnik:

- Polje: nije obavezno
- Tip: niz znakova
- Formatiranje u Excelu: tekst
- Maksimalna dužina: /
- Opis:

*Primer*:

Popust 1:

- Polje: nije obavezno
- Tip: decimalni broj
- Formatiranje u Excelu: broj, broj decimalnih mesta = 2
- Maksimalna dužina: /
- Opis: vrednost popusta

*Primer*: 550

Popust 2:

- Polje: nije obavezno
- Tip: decimalni broj
- Formatiranje u Excelu: broj, broj decimalnih mesta = 2
- Maksimalna dužina: /
- Opis: vrednost popusta

*Primer*: 5%

### BizLink Parameters

Ovi parametri služe za obradu unetih redova u odeljku Podaci. Kao što se može primetiti na slici, neka polja su već unapred popunjena, ali ništa nas ne sprečava da ih izmenimo.

![](/img/it-it/applications/bizlink/import-contacts-registry/image10.png)

BizLink Spreadsheet:

- Polje: ne unositi

Jezik:

- Polje: obavezno
- Tip: niz znakova
- Opis: ISO kod jezika

*Primer*: „it-IT” predstavlja italijanski jezik, a „hr-HR” hrvatski jezik.

Preduzeće:

- Polje: obavezno
- Tip: niz znakova
- Opis: polje je prethodno popunjeno jer preuzima vrednosti koje već postoje u Fluentisu i koje možemo videti u gornjem levom uglu.

*Primer*: „1” odgovara demo preduzeću.

- Tabela/kolona za mapiranje: `Select MBSC_Code from MB_Soc`

Odeljenje:

- Polje: obavezno
- Tip: niz znakova
- Opis: kao i polje Preduzeće, ovo polje je prethodno popunjeno.

*Primer*: „1” odgovara glavnom sedištu, a „2” sedištu u Zagrebu.

- Tabela/kolona za mapiranje: `select MBDP_Code from MB_Dep`

Identifikaciona šifra kupca:

- Polje: obavezno
- Tip: niz znakova
- Opis: bilo koje slovo koje unesemo u parametre, a koje će se zatim odnositi na polje kupca/dobavljača. Radi jednostavnosti preporučuje se „K”.

*Primer*: „K” odgovara kupcima.

Identifikaciona šifra dobavljača:

- Polje: obavezno
- Tip: niz znakova
- Opis: bilo koje slovo koje unesemo u parametre, a koje će se zatim odnositi na polje kupca/dobavljača. Radi jednostavnosti preporučuje se „D”.

*Primer*: „D” odgovara dobavljačima.

Šifra tipa konta za kupce:

- Polje: obavezno
- Tip: niz znakova
- Opis: glavni konto koji se odnosi na kupce. Da biste ga videli i u Fluentisu, idite na **Početna > Parametri > Administracija > Računovodstveni parametri**. Dvaput kliknite na tekuću godinu, a zatim bi sa desne strane trebalo da vidite „Tip konta”.

*Primer*: „KHR” odgovara kupcima u Hrvatskoj.

Šifra tipa konta za dobavljače:

- Polje: obavezno
- Tip: niz znakova
- Opis: glavni konto koji se odnosi na dobavljače. Da biste ga videli i u Fluentisu, idite na **Početna stranica > Parametri > Administracija > Računovodstveni parametri**. Dvaput kliknite na tekuću godinu, a zatim bi sa desne strane trebalo da vidite „Tip konta”.

*Primer*: „DHR” odgovara dobavljačima u Hrvatskoj.

Grupa kupaca:

- Polje: obavezno
- Tip: niz znakova
- Opis: šifre možete videti na putanji **Početna > Računovodstvo > Kontni plan**. Na prvoj kartici prikaza nalazi se šifra grupe.

*Primer*: „1200” odgovara kupcima u Hrvatskoj.

- Tabela/kolona za mapiranje: `select MBGR_Gruppo from MB_GRUPP`

Grupa dobavljača:

- Polje: obavezno
- Tip: niz znakova
- Opis: šifre koje postoje na putanji **Početna stranica > Računovodstvo > Kontni plan**. U prvom prikazu nalazi se šifra grupe.

*Primer*: „2200” odgovara dobavljačima u Hrvatskoj.

- Tabela/kolona za mapiranje: `select MBGR_Gruppo from MB_GRUPPI`

Šifra tipa popusta 1:

- Polje: obavezno samo ako je unet popust 1
- Tip: niz znakova
- Opis: predstavlja kategoriju primenjenog popusta na cenovnik.

*Primer*: „10” odgovara kaskadnom popustu.

- Tabela/kolona za mapiranje: `select MBST_TipSco from MB_Sconti`

Šifra tipa popusta 2:

- Polje: obavezno samo ako je unet popust 2
- Tip: niz znakova
- Opis: predstavlja kategoriju primenjenog popusta na cenovnik.

*Primer*: „20” odgovara komercijalnom popustu.

- Tabela/kolona za mapiranje: `select MBST_TipSco from MB_Sconti`

### Pokretanje uvoza

Nakon unosa podataka, za pokretanje uvoza kliknite na dugme u meniju za uvoz, koje se nalazi u gornjem levom uglu i takođe se zove „Uvoz”, kao što je prikazano na slici ispod.

![](/img/it-it/applications/bizlink/import-contacts-registry/image11.png)

### Zaključak – uspešan unos

Ako sve prođe bez problema, neće se pojaviti nikakva poruka o grešci. Za dodatnu proveru uspešnosti, proverite na kartici artikala (**Početna stranica > Artikli**) da li su uvezeni artikli dobavljača prisutni. U suprotnom će se na ekranu pojaviti poruka o grešci koja će pokazati koja podešavanja i/ili polja nisu ispravna. Za tumačenje vrste greške pogledajte Korisne savete i upozorenja u poslednjem odeljku.

### Korisni saveti i upozorenja

**Preporučeno formatiranje u Excelu**:

- Za ispravan uvoz preporučuje se formatiranje kolona prema tipu navedenom pod „Formatiranje u Excelu” za svako polje. Na primer, ako je tip polja decimalni broj i u to polje treba uneti valutu, formatirajte polje kao valutu. To je zato što će, na primer, Excel ukloniti nevažeće početne nule ako ćelija nije pravilno formatirana. Za podešavanje formatiranja pratite sledeće korake:

Prvo odaberite željenu kolonu, kao što je prikazano na slici ispod:

![](/img/it-it/applications/bizlink/import-contacts-registry/image12.png)

Zatim, nakon što postavite pokazivač miša unutar kolone, pritisnite desni taster miša.

![](/img/it-it/applications/bizlink/import-contacts-registry/image13.png)

Kliknite levim tasterom miša na **Oblikuj ćelije**…

![](/img/it-it/applications/bizlink/import-contacts-registry/image14.png)

Na ovom ekranu može se formatirati odabrana kolona. Na osnovu uputstava navedenih u odeljku „Unos polja” odaberite odgovarajuću kategoriju i pripadajuće specifikacije (npr. valuta, simbol – nijedan). Isto je moguće uraditi i u elektronskoj tabeli unutar Fluentisa.

**Pažnja:** klasičan primer odnosi se na šifre koje sadrže nule, npr. „001”. Ako je polje formatirano kao opšte ili numeričko, nule će biti odbačene; ako je formatirano kao tekstualni niz, nule će biti sačuvane.

**Tabela/kolona za mapiranje**:

- Ako je u odeljku „Unos polja” prisutna stavka tabela/kolona za mapiranje, to znači da vrednost uneta u polje za uvoz možda već postoji u bazi podataka. Mapiranje je uključeno i za polja koja će biti uneta od početka kako bi se, ako postoji, mogao videti primer vrednosti u bazi podataka. Za prikaz relevantnih podataka prisutnih u bazi podataka dovoljno je pratiti sledeće korake. Kao primer koristiće se klasa artikala i odgovarajuće mapiranje:

```SQL
select MBDC_Classe from MB_Classi (**<- ovo je mapiranje**). Izvršite upit u programu „Microsoft SQL Server Management Studio” i dobićete sledeći rezultat:
```
![](/img/it-it/applications/bizlink/import-contacts-registry/image15.png)

Kada se posmatra na ovaj način, upit ne pruža nikakve informacije. Da bismo razumeli njegovo značenje, zamenimo simbol „*” iza klauzule SELECT poljem kako bismo sastavili novi upit. U ovom slučaju imali bismo `select * from MB_Class`, koji služi za izbor celokupnog sadržaja tabele. Sada izvršimo taj upit.

![](/img/it-it/applications/bizlink/import-contacts-registry/image16.png)

Ovo je korisno jer, kao što je prikazano na slici, na osnovu opisa (MBDC_Descr) možemo razumeti šta polje predstavlja i proveriti da li vrednost koju ćemo uneti već postoji u bazi podataka.

Opisani postupak je univerzalan, odnosno važi za svako polje.

Isto je moguće videti i u Fluentisu:

Na početnoj stranici Fluentisa odaberite **Artikli > Artikli dobavljača** (pogledajte sliku ispod).

![](/img/it-it/applications/bizlink/import-contacts-registry/image17.png)

Zatim u okviru za pretragu koji se pojavi kliknite levim tasterom miša na strelicu pored artikala. Otvoriće se padajući meni u kojem je moguće videti klasu artikala sa odgovarajućim opisom, kao što je prikazano na slici.

![](/img/it-it/applications/bizlink/import-contacts-registry/image18.png)

Ovo se odnosi na klasu artikala. Za ostala polja možemo primeniti isti postupak, ali na drugim mestima.

Trebalo bi da unesemo jednu od postojećih vrednosti, jer u suprotnom uvoz neće uspeti i dobićemo grešku. Ovo važi za svako polje koje ima mapiranu tabelu/kolonu.

Ako želimo da dodamo polje sa mapiranjem koje ne postoji u bazi podataka, možemo ga dodati putem upita ili preko Fluentisa. U ovom slučaju preporučuje se unos preko Fluentisa. Takođe, za klasu artikala, u odeljku Artikli dobavljača (kao što je prikazano na slici iznad), kliknite desnim tasterom miša unutar filtera za pretragu klase artikala i odaberite „Otvori obrazac”.

![](/img/it-it/applications/bizlink/import-contacts-registry/image19.png)

Na obrascu koji se otvori kliknite na dugme za pretragu kako biste videli postojeće klase artikala.

![](/img/neutral/common/search.png)

Ispod poslednjeg popunjenog reda nalazi se prazan red. On služi za unos novih vrednosti.

![](/img/it-it/applications/bizlink/import-contacts-registry/image21.png)

Unesite nove vrednosti u taj red, a zatim jednostavno pritisnite Enter.

Ovaj postupak je sličan i za ostala polja. Jedina razlika je u tome gde se nalaze filteri za pretragu na koje treba kliknuti levim tasterom miša da bi se otvorio obrazac.

**Greške:**

- U slučaju neuspešnog uvoza, kao što je već pomenuto, pojaviće se ekran sa greškom.

Ako je greška nastala u delu Podaci, moguće je pronaći red koji sadrži grešku jer će, na primer, biti prikazana poruka „System.ArgumentException: Error importing row 4”. Međutim, taj red (pogledajte sliku ispod) nije stvarni red koji sadrži grešku. Da biste precizno odredili koji red sadrži grešku, na broj reda prikazan u levoj koloni dodajte 1.

Dakle:

Stvarni red sa greškom = Error importing rownum + 1

![](/img/it-it/applications/bizlink/import-contacts-registry/image22.png)

Za tumačenje greške pratite sledeće korake: u istom redu u kojem je prikazan broj reda pronaći ćete **objekat** na koji se greška odnosi, zatim sledi stvarna **greška**, a na kraju je navedeno **svojstvo** u kojem je greška pronađena. U navedenom primeru:

„Failed to create, update or delete the object of type Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.FSPurchasePriceListItem, Fluentis.FluentisErp.Core.Scm.**PurchasePriceLists** not-null property references a null or transient value Fluentis.FluentisErp.Core.Scm.PurchasePriceLists.ReadWrite.FSWPurchasePriceListItem.MeasurementUnit”.

U ovom slučaju jedinica mere povezana sa nabavnom cenom sadrži grešku jer je vrednost null. Naime, njen unos je obavezan.

Ako je greška nastala u delu Parametri, poruka će biti slična, a način rešavanja ostaje isti: proveriti i ispraviti unos navedenog svojstva.

**Pažnja**: ako se naiđe na prazan red, neće biti prijavljena nikakva greška, ali će se uvoz tu završiti. Na primer, ako je prvi red (red br. 4) iz nekog razloga prazan, a ispod njega (od reda br. 5) postoje popunjeni redovi, ništa neće biti uvezeno.

**Pažnja**: ako se u šifarniku od 10 redova pojavi greška u redu br. 7, prvih 6 redova će ipak biti uneto ako nisu izazvali probleme! Ponovnim pokretanjem uvoza bez menjanja prvih 6 redova (i, naravno, nakon ispravljanja greške) neće biti problema, pa čak ni duplikata, jer se najpre proverava da li kontakt već postoji. Ako se promeni bilo koja vrednost u prvih 6 redova, taj kontakt će biti smatran novim.

Na kraju je moguće dobiti i drugu poruku o grešci.

![](/img/it-it/applications/bizlink/import-contacts-registry/image23.png)

Kao što se može primetiti na slici iznad, ovu vrstu poruke lakše je protumačiti jer se daje tačna referenca na ćeliju sa odgovarajućom greškom. U ovom slučaju, u ćeliji F:4 nema nikakve vrednosti.