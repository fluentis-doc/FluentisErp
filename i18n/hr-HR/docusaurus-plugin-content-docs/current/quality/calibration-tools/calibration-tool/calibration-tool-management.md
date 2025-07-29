---
title: Kalibracija uređaja
sidebar_position: 2
---

Upravljanje se nalazi na putanji **Kvaliteta > Kalibracija uređaja > Kalibracija uređaja > Nova kalibracija uređaja** ili se može izvršiti putem **Pretraživanja kalibracije uređaja**.   


:::important ČEMU SLUŽI
U okviru upravljanja Kalibracijom uređaja moguće je zabilježiti interne kalibracije i Certifikate kalibracije.   
Ako je instrument podložan kalibraciji i kalibracija je interna, moguće je unijeti, za predviđene pozicije, izmjerene vrijednosti. Fluentis će automatski dodijeliti pozitivan ili negativan rezultat, za svaku pojedinačnu poziciju i općenito.   
Ako je instrument podložan kalibraciji i kalibracija je eksterna, moguće je priložiti Certifikat kalibracije koji je izdao vanjski entitet koji je izvršio kalibraciju. Rezultat će u ovom slučaju ručno dodijeliti operater.   
A standard sono disponibili le reportistiche di: Registro tarature strumenti raggruppati per: Rapporto, Strumento e Operatore.   

Standardno su dostupni sljedeći izvještaji:   
> **Dnevnik kalibracije instrumenta**: popis *Kalibracija instrumenata* koji se može grupirati prema: *Izvještaj*, *Instrument* i *Izvršeno od strane*.   
:::


## Tipke za naredbe


### Spremi

Pritiskom na ovu tipku spremaju se sve izmijenjene informacije o prikazanoj *Kalibraciji instrumenta*.   


## Upravljanje podacima


### Podaci zaglavlja

Upravljane informacije su:   
> **Vrsta kalibracije**: to je *Tip kalibracije* (obavezni podatak).   
> Prilikom ručnog unosa nove *kalibracije* predložen je ručni *Tip kalibracije* naveden u *Parametrima kalibracije instrumenata*.   
>
> **Godina/Broj**: to su *Godina* i *Broj kalibracije instrumenta* (oba podatka su obavezna).   
>  Prilikom unosa nove *Kalibracije instrumenta*:   
> - *Stvarni datum kalibracije* predložen je jednak trenutnom datumu;   
> - *Godina* i *Broj* predloženi su na temelju stvarnog *datuma kalibracije* i *Numeracije* pridružene *Vrsti kalibracije*.   
>
> **Kalibraciju izvršio**: expander u kojem je moguće unijeti sljedeće:   
>
>> **Interna kalibracija**: označava da *kalibraciju uređaja* obavlja osoba unutar poduzeća.   
>> **Vanjski laboratorij**: to je naziv tvrtke koja provodi vanjsku kalibraciju.   
>> **Funkcija**: to je *poslovna funkcija* unutar poduzeća koja provodi internu kalibraciju.   
>> **Zaposlenik**: to je *Zaposlenik* koji provodi internu kalibraciju.   
>
> **Planirana**: označava da je *kalibracija uređaja* planirana.   
> **Rezultat kalibracije**: to je ukupni *rezultat* kalibracije.   
> Automatski se izračunava na temelju *rezultata* iz *izmjerenih vrijednosti*, ako je riječ o *unutarnjoj kalibraciji*.
> Ručno se unosi ako je riječ o *vanjskoj kalibraciji*.   
> **Zapažanja**: slobodne bilješke na temu.   
> **Napomene**: slobodne bilješke.   
>
> **Datum predviđene kalibracije**: to je datum predviđene kalibracije.   
> Predlaže se iz opcije *Planiraj nove kalibracije* i nije ga moguće mijenjati.   
> **Datum stvarne kalibracije**: to je datum stvarne kalibracije.   
> Pri ručnom unosu nove kalibracije predlaže se današnji datum.
> Predlaže se iz opcije *Planiraj nove kalibracije* jednak *predviđenom datumu kalibracije* i kasnije se može mijenjati.   
> **Alat za mjerenje**: to je referenca na *mjerni instrument* podložan *kalibraciji*.   
>
> **Svojstva instrumenta**: expander gdje je moguće pregledati:   
>
>> **Svojstva instrumenta**: to je *Model mjernog instrumenta*.   
>> **Aktivan**: označava da je *Mjerni Instrument* još uvijek *aktivan*.   
>> **Klasifikacija**: to je *klasifikacija*; primjeri: Mehanički, Električni, Elektronički, itd.   
>> **Jedinica mjere**: to je *jedinica mjere* za vrijednosti izmjerene *mjernim instrumentom*.   
>> **Raspon mjerenja**: to je mjerljivi raspon *mjernog instrumenta*.   
>> **Preciznost**: to je minimalna *preciznost mjerenja*.   
>> **Ograničenja**: to su *ograničenja prihvatljivost* iz *mjernog instrumenta* za upotrebu; primjeri: eventualna ograničenja preciznosti, okruženja u kojima se ne smije koristiti, itd.
>
> **Audit Trail**: expander samo za čitanje gdje su vidljive sljedeće informacije:   
>
>> **Datum kreiranja/Ime**: to je datum i *A.R.M. korisnik* koji je unio *korektivnu radnju*.   
>> **Datum zadnje izmjene/Ime**: to je datum i *A.R.M. korisnik* koji je napravio zadnju izmjenu *korektivne radnje*.   


### Otkrivene vrijednosti
Kartica je vidljiva samo ako je *mjerni instrument* podložan *internom kalibriranju*
U ovom popisu moguće je navesti vrijednosti koje treba zabilježiti tijekom aktivnosti *internog kalibriranja*.  
Ako je *mjerni instrument Aktivan*, podložan *umjeravanju* i ako je podložan *internom umjeravanju* te vrijednosti se nasljeđuju iz šifarnika *mjernog instrumenta*.   
Sve informacije su onemogućene osim: *Zabilježena vrijednost*, *Iskaz*, *Napomene* i *Bilješke*.
Popis se sastoji od sljedećih informacija:   
> **Sekvenca**: to je sekvenca očitavanja.  
> **Pozicija**: slobodne bilješke na temu.   
> **Interval čitanja**: slobodne bilješke na temu.   
> **Tražena vrijednost**: to je nominalna vrijednost koja se traži.   
> **Nesigurnost (-)**: to je vrijednost negativne nesigurnosti (izražene u postotku) koja će se primijeniti na *Očitanu vrijednost*.   
> **Nesigurnost (+)**: to je vrijednost pozitivne nesigurnosti (izražene u postotku) koja će se primijeniti na *Očitanu vrijednost*.   
> **Očitana vrijednost**: to je vrijednost očitana s instrumenta u navedenoj *poziciji*.    
> **Odstupanje**: to je vrijednost izračunata kao razlika između *Očitane vrijednosti* i *Tražene vrijednosti*.
Ako je odstupanje veće od *Tražene vrijednosti* zbrojene s *Nesigurnošću (±)* (primijenjenom u postotku), *Rezultat očitavanja* bit će negativan.   
Na prvi negativni rezultat u popisu *Očitavanih vrijednosti* i *Ukupni rezultat kalibracije* bit će također negativan.   
> **Opservacije**: slobodne bilješke na temu.   
> **Napomena**: slobodne bilješke.   


### Povijest Izvještaja i Certifikata kalibracije 
U ovom popisu moguće je pregledati povijest *Kalibracija* i *Certifikata kalibracije* planiranih i izvršenih za *mjerni instrument* povezan s prikazanom *Kalibracijom*.  
Dvostrukim klikom miša na željeni red moguće je upravljati odabranom *Kalibracijom*.   
Popis se sastoji od sljedećih informacija:   
> **Vrsta kalibracije**: šifra *Tipa kalibracije*.   
> **Opis tipa kalibracije**: opis *Tipa kalibracije*.   
> **Godina**: *Godina* dokumenta.   
> **Broj**: *Broj* dokumenta.   
> **Interna kalibracija**: označava je li izvršena *interna kalibracija*.   
> **Planirano**: označava je li dokument planiran.   
> **Predviđeni datum**: predviđeni datum kalibracije.   
> **Datum kalibracije**: stvarni datum kalibracije.   
> **Rezultat**: kod *rezultata* kalibracije.   
> **Opis rezultata**: opis *rezultata* kalibracije.   
> **Kategorija**: kod *Kategorije instrumenta*.   
> **Opis kategorije**: opis *Kategorije instrumenta*.   
> **Kod**: kod *mjernog instrumenta*.   
> **Serijski broj**: serijski broj *mjernog instrumenta*.   
> **Model**: model *mjernog instrumenta*.   
> **Vanjski laboratorij:**: naziv *dobavljača* koji obavlja vanjsku kalibraciju.   
> **Funkcija**: šifra *Funkcije u poduzeću* koja obavlja internu kalibraciju.    
> **Opis funkcije**: opis *Funkcije u poduzeću* koja obavlja internu kalibraciju.
> **Šifra**: šifra *Zaposlenika* koji obavlja internu kalibraciju.    
> **Prezime**: prezime *Zaposlenika* koji obavlja internu kalibraciju.   
> **Ime**: ime *Zaposlenika* koji obavlja internu kalibraciju.   


### Dodatni podaci
Moguće je unijeti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaku *Kalibraciju uređaja*.   


### Slika
Prikazana je slika povezana s upravljanjem *mjernim instrumentom*.   


Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom radu s formama, pogledajte sljedeći link: [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).   