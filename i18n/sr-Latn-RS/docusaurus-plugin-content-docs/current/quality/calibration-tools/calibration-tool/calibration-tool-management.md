---
title: Kalibracija uređaja
sidebar_position: 2
---

Upravljanje se nalazi na putanji **Kvalitet > Kalibracija uređaja > Kalibracija uređaja > Nova kalibracija uređaja** ili se može izvršiti putem **Pretrage kalibracije uređaja**.

:::important ČEMU SLUŽI
U okviru upravljanja kalibracijom uređaja moguće je evidentirati interne kalibracije i sertifikate kalibracije.

Ako instrument podleže kalibraciji i kalibracija je interna, moguće je uneti izmerene vrednosti za predviđene pozicije. Fluentis će automatski dodeliti pozitivan ili negativan rezultat za svaku pojedinačnu poziciju i za kalibraciju u celini.

Ako instrument podleže kalibraciji i kalibracija je eksterna, moguće je priložiti sertifikat kalibracije koji je izdao spoljni subjekt koji je izvršio kalibraciju. U tom slučaju rezultat ručno dodeljuje operater.

Standardno su dostupni sledeći izveštaji:

> **Dnevnik kalibracije instrumenta**: popis *Kalibracija instrumenata* koji se može grupisati prema: *Izveštaj*, *Instrument* i *Izvršio*.
:::

## Komandna dugmad

### Sačuvaj

Pritiskom na ovo dugme čuvaju se sve izmenjene informacije o prikazanoj *Kalibraciji instrumenta*.

## Upravljanje podacima

### Podaci zaglavlja

Podaci kojima se upravlja su:

> **Tip kalibracije**: predstavlja *Tip kalibracije* (obavezan podatak).
> Prilikom ručnog unosa nove *kalibracije* predlaže se ručni *Tip kalibracije* naveden u *Parametrima kalibracije instrumenata*.
>
> **Godina/Broj**: predstavljaju *Godinu* i *Broj kalibracije instrumenta* (oba podatka su obavezna).
> Prilikom unosa nove *Kalibracije instrumenta*:
> - *Stvarni datum kalibracije* predlaže se kao trenutni datum;
> - *Godina* i *Broj* predlažu se na osnovu stvarnog *datuma kalibracije* i *Numeracije* dodeljene *Tipu kalibracije*.
>
> **Kalibraciju izvršio**: proširenje u kojem je moguće uneti sledeće:
>
>> **Interna kalibracija**: označava da *kalibraciju uređaja* obavlja osoba unutar preduzeća.
>> **Spoljna laboratorija**: naziv kompanije koja vrši spoljnu kalibraciju.
>> **Funkcija**: *poslovna funkcija* u okviru preduzeća koja vrši internu kalibraciju.
>> **Zaposleni**: *Zaposleni* koji vrši internu kalibraciju.
>
> **Planirana**: označava da je *kalibracija uređaja* planirana.
> **Rezultat kalibracije**: predstavlja ukupan *rezultat* kalibracije.
> Automatski se izračunava na osnovu *rezultata* iz *izmerenih vrednosti*, ako je u pitanju *interna kalibracija*.
> Ručno se unosi ako je u pitanju *spoljna kalibracija*.
> **Zapažanja**: slobodne beleške na tu temu.
> **Beleške**: slobodne beleške.
>
> **Datum planirane kalibracije**: predstavlja datum planirane kalibracije.
> Predlaže se iz opcije *Planiraj nove kalibracije* i nije ga moguće menjati.
> **Datum stvarne kalibracije**: predstavlja datum stvarne kalibracije.
> Prilikom ručnog unosa nove kalibracije predlaže se današnji datum.
> Predlaže se iz opcije *Planiraj nove kalibracije* i jednak je *planiranom datumu kalibracije*, a kasnije ga je moguće menjati.
> **Merni instrument**: referenca na *merni instrument* koji podleže *kalibraciji*.
>
> **Svojstva instrumenta**: proširenje u kojem je moguće pregledati:
>
>> **Svojstva instrumenta**: predstavlja *Model mernog instrumenta*.
>> **Aktivan**: označava da je *Merni instrument* i dalje *aktivan*.
>> **Klasifikacija**: predstavlja *klasifikaciju*; primeri: Mehanički, Električni, Elektronski itd.
>> **Jedinica mere**: predstavlja *jedinicu mere* za vrednosti izmerene *mernim instrumentom*.
>> **Opseg merenja**: predstavlja opseg merenja *mernog instrumenta*.
>> **Preciznost**: predstavlja minimalnu *preciznost merenja*.
>> **Ograničenja**: predstavljaju *ograničenja prihvatljivosti* *mernog instrumenta* za upotrebu; primeri: eventualna ograničenja preciznosti, okruženja u kojima se ne sme koristiti itd.
>
> **Audit Trail**: proširenje samo za čitanje u kojem su vidljive sledeće informacije:
>
>> **Datum kreiranja/Ime**: datum i *A.R.M. korisnik* koji je uneo *korektivnu radnju*.
>> **Datum poslednje izmene/Ime**: datum i *A.R.M. korisnik* koji je izvršio poslednju izmenu *korektivne radnje*.

### Izmerene vrednosti

Kartica je vidljiva samo ako *merni instrument* podleže *internoj kalibraciji*.
Na ovom popisu moguće je uneti vrednosti koje treba evidentirati tokom aktivnosti *interne kalibracije*.
Ako je *merni instrument aktivan*, podleže *kalibraciji* i ako podleže *internoj kalibraciji*, vrednosti se nasleđuju iz šifarnika *mernog instrumenta*.
Sve informacije su zaključane osim: *Izmerena vrednost*, *Rezultat*, *Beleške* i *Napomene*.

Popis se sastoji od sledećih informacija:
> **Sekvenca**: sekvenca očitavanja.
> **Pozicija**: slobodne beleške na tu temu.
> **Interval očitavanja**: slobodne beleške na tu temu.
> **Tražena vrednost**: nominalna vrednost koja se zahteva.
> **Nesigurnost (-)**: vrednost negativne nesigurnosti (izražene u procentima) koja će biti primenjena na *Očitanu vrednost*.
> **Nesigurnost (+)**: vrednost pozitivne nesigurnosti (izražene u procentima) koja će biti primenjena na *Očitanu vrednost*.
> **Očitana vrednost**: vrednost očitana sa instrumenta na navedenoj *poziciji*.
> **Odstupanje**: vrednost izračunata kao razlika između *Očitane vrednosti* i *Tražene vrednosti*.

Ako je odstupanje veće od *Tražene vrednosti* uvećane za *Nesigurnost (±)* (primenjenu u procentima), *Rezultat očitavanja* biće negativan.
Kod prvog negativnog rezultata u popisu *Očitanih vrednosti*, i *Ukupan rezultat kalibracije* biće negativan.
> **Zapažanja**: slobodne beleške na tu temu.
> **Napomena**: slobodne beleške.

### Istorija izveštaja i sertifikata kalibracije

Na ovom popisu moguće je pregledati istoriju *Kalibracija* i *Sertifikata kalibracije* planiranih i izvršenih za *merni instrument* povezan sa prikazanom *Kalibracijom*.
Dvostrukim klikom miša na željeni red moguće je upravljati izabranom *Kalibracijom*.
Popis se sastoji od sledećih informacija:

> **Tip kalibracije**: šifra *Tipa kalibracije*.
> **Opis tipa kalibracije**: opis *Tipa kalibracije*.
> **Godina**: *Godina* dokumenta.
> **Broj**: *Broj* dokumenta.
> **Interna kalibracija**: označava da li je izvršena *interna kalibracija*.
> **Planirano**: označava da li je dokument planiran.
> **Planirani datum**: planirani datum kalibracije.
> **Datum kalibracije**: stvarni datum kalibracije.
> **Rezultat**: šifra *rezultata* kalibracije.
> **Opis rezultata**: opis *rezultata* kalibracije.
> **Kategorija**: šifra *Kategorije instrumenta*.
> **Opis kategorije**: opis *Kategorije instrumenta*.
> **Šifra**: šifra *mernog instrumenta*.
> **Serijski broj**: serijski broj *mernog instrumenta*.
> **Model**: model *mernog instrumenta*.
> **Spoljna laboratorija**: naziv *dobavljača* koji vrši spoljnu kalibraciju.
> **Funkcija**: šifra *Funkcije u preduzeću* koja vrši internu kalibraciju.
> **Opis funkcije**: opis *Funkcije u preduzeću* koja vrši internu kalibraciju.
> **Šifra**: šifra *Zaposlenog* koji vrši internu kalibraciju.
> **Prezime**: prezime *Zaposlenog* koji vrši internu kalibraciju.
> **Ime**: ime *Zaposlenog* koji vrši internu kalibraciju.

### Dodatni podaci

Moguće je uneti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaku *Kalibraciju uređaja*.

### Slika

Prikazana je slika povezana sa upravljanjem *mernim instrumentom*.

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom radu sa formama, pogledajte sledeći link: [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).