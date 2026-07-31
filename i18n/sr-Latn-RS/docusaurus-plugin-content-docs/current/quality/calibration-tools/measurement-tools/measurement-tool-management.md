---
title: Merni instrument
sidebar_position: 2
---

Upravljanje se nalazi na putanji **Kvalitet > Kalibracija uređaja > Merni instrumenti > Novi merni instrument** ili se može izvršiti putem **Pretrage mernih instrumenata**.

:::important ČEMU SLUŽI
U ovom šifarniku čuvaju se merni instrumenti koji se koriste za obezbeđivanje usklađenosti proizvoda i pružanje ponuđenih usluga.
Uz merni instrument moguće je povezati informacije o nabavci, odgovornosti, tehničkim/mehaničkim svojstvima, lokaciji i kalibraciji.
Ako instrument podleže kalibraciji i kalibracija se obavlja interno, moguće je definisati koje aktivnosti treba sprovesti i koje vrednosti evidentirati kako bi kalibracija bila uspešna.
Ako instrument podleže kalibraciji, a kalibracija se obavlja eksterno, moguće je definisati koja će treća strana izvršiti kalibraciju.
Ako je definisana vremenska periodičnost kalibracije, dugme **Planiranje novih kalibracija** omogućava automatsko kreiranje planiranih kalibracija za željeni period.
Standardno su dostupni sledeći izveštaji: Registar instrumenata grupisan prema: Instrumentu, Kategoriji, Dobavljaču (nabavke), Lokaciji, Korisniku, Datumu garancije i Isteku kalibracije, Registar instrumenata koji ne podležu kalibraciji i Kartica mernog instrumenta.

Standardno su dostupni sledeći izveštaji:

> **Registar mernih instrumenata**: popis *mernih instrumenata* koji se može grupisati prema: *Instrumentu*, *Kategoriji*, *Dobavljaču* (nabavke), *Lokaciji*, *Korisniku*, *Datumu garancije* i *Isteku kalibracije*.
>
> **Registar instrumenata koji ne podležu kalibraciji**: popis *mernih instrumenata* za koje nije predviđena *Kalibracija*; filter *Status - Ne podleže kalibraciji: Svi, Podleže kalibraciji, Ne podleže kalibraciji* nema uticaja na štampu ovog izveštaja.
>
> **Kartica mernih instrumenata**: kartica za *merne instrumente*.
:::

## Komandna dugmad

### ![](/img/neutral/common/save.png) Sačuvaj

Pritiskom na ovo dugme čuvaju se sve izmenjene informacije o prikazanom *mernom instrumentu*.

### ![](/img/neutral/common/duplicate.png) Dupliraj instrument

Za dupliranje prikazanog *mernog instrumenta* u novi *merni instrument* dovoljno je pritisnuti dugme **Dupliraj**.
Informacije koje se ne dupliraju sa izvornog instrumenta su: *Šifra*, *Serijski broj*, *Datum nabavke*, *Datum isteka garancije*, *Lokacija dobavljača*, *Kupac vlasnik*, *Slika* i podaci o poslednjoj izvršenoj kalibraciji: *Datum poslednje kalibracije* i *Rezultat*.
Po završetku obrade prikazuje se novi *merni instrument*.

### Planiranje novih kalibracija

Dugme je omogućeno samo ako je *merni instrument* *Aktivan*, *podleže kalibraciji* i ima definisan vremenski *period kalibracije* (*jedinica mere*: *Dani* ili *Meseci*). Prikazuje se zahtev za unos:

> **Planirati do**: datum završetka planiranja novih zakazanih kalibracija.

*Metoda koja se koristi za planiranje*:

Kao prvi korak brišu se sve prethodno planirane, a još neizvršene *kalibracije* za *instrument*.

Zatim se, počevši od datuma poslednje *kalibracije*, kreira onoliko *kalibracija* koliko ih je moguće kreirati u zadatom vremenskom intervalu, počevši od današnjeg datuma, uz učestalost definisanu *periodom kalibracije*. Ako predloženi datum pada na neradni dan definisan u *Kalendaru fabrike*, predloženi datum će biti pomeren na prvi naredni radni dan.

Ako za instrument nikada nije bila planirana ili izvršena *kalibracija* ili ako poslednji datum *kalibracije* pada pre *perioda kalibracije* računatog unazad od današnjeg datuma, prva *kalibracija* biće predložena za današnji datum, a sve naredne biće planirane nakon toga.

### Nova kalibracija

Dugme je omogućeno samo ako je iz pregleda rezultata izabran jedan *merni instrument* koji je *aktivan* i *podleže kalibraciji*.
Da bi se kreirala nova *neplanirana kalibracija* za prikazani *merni instrument*, potrebno je pritisnuti dugme **Nova kalibracija**.
Nakon potvrde zahteva kreira se nova *kalibracija*; predlaže se *tip kalibracije* (interna ili eksterna), definisan u *Parametrima kalibracije instrumenata*, zajedno sa referencama na *merni instrument* i njegova svojstva.

Po završetku obrade prikazuje se *nova kalibracija*.

## Upravljanje podacima

### Podaci zaglavlja

Podaci kojima se upravlja uključuju:

> **Kategorija**: kategorija *mernog instrumenta* (obavezan podatak).
> **Šifra**: šifra *mernog instrumenta* (obavezan podatak).
> **Serijski broj**: serijski broj *mernog instrumenta*; slobodan opisni podatak.
> **Model**: model *mernog instrumenta*; slobodan opisni podatak.
>
> **Podaci o nabavci**: proširenje u kojem je moguće uneti:
>
>> **Dobavljač**: naziv *dobavljača* prilikom nabavke.
>> **Proizvođač**: kontakt *proizvođača* instrumenta.
>> **Datum nabavke**: datum kupovine/nabavke.
>> **Datum isteka garancije**: datum isteka garancije prilikom nabavke.
>> **Dobavljač održavanja/servisa**: naziv uobičajenog *dobavljača* za održavanje/servis.
>
> **Odgovorna funkcija**: proširenje u kojem je moguće uneti:
>
>> **Funkcija**: *poslovna funkcija* u preduzeću odgovorna za instrument.
>> **Zaposleni**: odgovorni *zaposleni*.
>
> **Svojstva kalibracije**: proširenje u kojem je moguće uneti:
>
>> **Ne podleže kalibraciji**: označava da *merni instrument* ne podleže kalibraciji.
>> U tom slučaju sve ostale informacije u ovom odeljku su onemogućene.
>> **Interna kalibracija**: označava da *merni instrument* kalibriše osoba unutar preduzeća.
>> **Period kalibracije**: period (izražen u povezanoj *jedinici mere*) kalibracije mernog instrumenta.
>> **Jedinica mere**: *jedinica mere* za period kalibracije.
>> **Poslednja kalibracija**: datum poslednje izvršene *kalibracije*; vrednost se automatski postavlja prilikom dodeljivanja *rezultata* poslednje izvršene *kalibracije*, ali se može uneti i ručno.
>> **Rezultat**: *rezultat* poslednje izvršene *kalibracije*; vrednost se automatski postavlja prilikom dodeljivanja *rezultata* poslednje *kalibracije*, ali se može uneti i ručno.
>> **Datum sledeće kalibracije**: datum sledeće *kalibracije*; vrednost se automatski postavlja prilikom dodeljivanja *rezultata* poslednje *kalibracije*, ali se može uneti i ručno.
>> **Dobavljač kalibracije**: naziv *dobavljača* koji vrši spoljnu kalibraciju.
>
> **Klasifikacija**: *klasifikacija*; primeri: Mehanički, Električni, Elektronski itd.
> **Artikal**: *artikal* povezan sa *mernim instrumentom*; *artikal* mora biti tipa *Oprema* ili *Alat* da bi mogao biti izabran.
>
> **Svojstva instrumenta**: proširenje u kojem je moguće uneti:
>
>> **Jedinica mere**: *jedinica mere* vrednosti koje *merni instrument* beleži.
>> **Opseg merenja**: opseg koji *merni instrument* može da meri.
>> **Preciznost**: *minimalna preciznost* merenja.
>> **Granice**: *granice prihvatljivosti* *mernog instrumenta* za njegovu upotrebu; primeri: eventualna ograničenja preciznosti, okruženja u kojima se ne sme koristiti itd.
>> **Lokacija dobavljača**: naziv *dobavljača* kod kojeg se nalazi *merni instrument*.
>> **Ovo je primarni instrument**: označava da se *merni instrument* koristi kao *referentni instrument* za određenu klasifikaciju instrumenta.
>> **Primarni instrument**: *merni instrument* koji se koristi za kalibraciju prikazanog instrumenta.
>
> **Funkcija upotrebe**: proširenje u kojem je moguće uneti:
>
>> **Funkcija**: *poslovna funkcija* koja redovno koristi *merni instrument*.
>> **Zaposleni**: *zaposleni* koji redovno koristi *merni instrument*.
>
> **Kategorija instrumenta**: *kategorija instrumenta*; obično se koristi za definisanje različitih nivoa degradacije *mernog instrumenta*.
> **Skladište/Lokacija**: *skladište/Lokacija* gde se nalazi *merni instrument*.
> **Kupac vlasnik**: naziv *kupca vlasnika*.
> **Aktivan**: označava da je *merni instrument* i dalje *aktivan*.
> **Neaktivan od**: označava datum od kojeg *merni instrument* više nije *aktivan*.
> **Beleške**: slobodne beleške.

### Vrednosti za evidentiranje

Na ovom popisu moguće je definisati tipove merenja i vrednosti koje treba evidentirati tokom aktivnosti *interne kalibracije*.
Ako je *merni instrument* označen kao *aktivan*, *podleže kalibraciji* i ako je *kalibracija interna*, ove vrednosti će biti navedene u *internim kalibracijama*.
Popis se sastoji od sledećih informacija:

> **Sekvenca**: sekvenca merenja.
> **Pozicija**: slobodne beleške o temi.
> **Interval očitavanja**: slobodne beleške o temi.
> **Tražena vrednost**: nominalna vrednost koja se zahteva.
> **Nesigurnost (-)**: vrednost negativne nesigurnosti (izražena u procentima) koja će se primeniti na *traženu vrednost*.
> **Nesigurnost (+)**: vrednost pozitivne nesigurnosti (izražena u procentima) koja će se primeniti na *traženu vrednost*.
> **Beleška**: slobodne beleške.

### Povezani artikli

Na ovom popisu moguće je povezati *artikle* koji se mogu meriti pomoću *mernog instrumenta*.
U trenutnoj verziji Fluentisa ne postoje standardne provere koje potvrđuju upotrebu instrumenta za merenje vrednosti *artikala* navedenih na ovom popisu.
Popis se sastoji od sledećih informacija:

> **Klasa**: *klasa artikla*.
> **Šifra**: šifra *artikla*.
> **Opis artikla**: opis *artikla*.
> **Beleške**: slobodne beleške.

### Istorija izveštaja i sertifikata kalibracije

Na ovom popisu moguće je pregledati *istoriju kalibracija* i *sertifikata kalibracije* planiranih i izvršenih za *merni instrument*.
Dvostrukim klikom na željeni red moguće je otvoriti upravljanje izabranom *kalibracijom*.
Popis se sastoji od sledećih informacija:

> **Tip kalibracije**: šifra *tipa kalibracije*.
> **Opis tipa kalibracije**: opis *tipa kalibracije*.
> **Godina**: *godina* dokumenta.
> **Broj**: *broj dokumenta*.
> **Interna kalibracija**: označava da li je izvršena *interna kalibracija*.
> **Planirano**: označava da li je dokument planiran.
> **Planirani datum**: datum planirane kalibracije.
> **Datum kalibracije**: datum stvarne kalibracije.
> **Rezultat**: šifra *rezultata* kalibracije.
> **Opis rezultata**: opis *rezultata* kalibracije.
> **Kategorija**: šifra *kategorije instrumenta*.
> **Opis kategorije**: opis *kategorije instrumenta*.
> **Šifra**: šifra *mernog instrumenta*.
> **Serijski broj**: serijski broj *mernog instrumenta*.
> **Model**: model *mernog instrumenta*.
> **Spoljna laboratorija**: naziv *dobavljača* koji vrši spoljnu kalibraciju.
> **Funkcija**: šifra *poslovne funkcije* koja vrši internu kalibraciju.
> **Opis funkcije**: opis *poslovne funkcije* koja vrši internu kalibraciju.
> **Šifra**: šifra *zaposlenog* koji vrši internu kalibraciju.
> **Prezime**: prezime *zaposlenog* koji vrši internu kalibraciju.
> **Ime**: ime *zaposlenog* koji vrši internu kalibraciju.

### Dodatni podaci

Moguće je uneti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki *merni instrument*.

### Priloženi dokumenti

Na ovom popisu moguće je uneti i pregledati eventualne priloge; dostupan je pregled.

### Slika

Moguće je priložiti sliku *mernog instrumenta* korišćenjem opcije drag and drop; dostupan je pregled.
Ovaj prilog nije uključen u dokumentaciju Fluentisa.
Za sve što nije detaljno objašnjeno u ovom dokumentu o zajedničkom funkcionisanju formi, pogledajte sledeći link: [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).
