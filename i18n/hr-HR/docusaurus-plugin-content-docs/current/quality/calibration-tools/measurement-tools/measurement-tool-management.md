---
title: Mjerni instrument
sidebar_position: 2
---

Upravljanje se nalazi na putanji **Kvaliteta > Kalibracija uređaja >  Mjerni instrumenti > Novi mjerni instrument** ili se može izvršiti putem **Pretrage mjernih instrumenata**.   


:::important ČEMU SLUŽI
U ovom šifarniku pohranjuju se mjerni instrumenti koji se koriste za osiguranje prikladnosti proizvoda i pružanje ponuđenih usluga.   
Uz mjerni instrument moguće je povezati informacije o kupnji, odgovornosti, tehničkim/mehaničkim svojstvima, lokaciji i kalibraciji.   
Ako je instrument podložan kalibraciji i kalibracija se provodi interno, moguće je definirati koje aktivnosti treba provesti i koje vrijednosti zabilježiti kako bi kalibracija bila uspješna.   
Ako je instrument podložan kalibraciji, a kalibracija se provodi eksterno, moguće je definirati koja će treća strana obaviti kalibraciju.   
Ako je definirana vremenska periodičnost kalibracije, tipka "Planiraj nove kalibracije" omogućuje automatsko stvaranje planiranih kalibracija za željeno razdoblje.   
Standardno su dostupna sljedeća izvješća: Registar instrumenata grupiranih prema: Instrument, Kategorija, Dobavljač (nabave), Lokacija, Korisnik, Jamstvo datuma i Istek kalibracije, Registar instrumenata koji nisu podložni kalibraciji i Kartica mjernog instrumenta.   

Standardno su dostupna sljedeća izvješća:   
> **Registar mjernih instrumenata**: popis *mjernih instrumenata* koji se može grupirati po: *Instrument*, *Kategorija*, *Dobavljač* (nabave), *Lokacija*, *Korisnik*, *Jamstvo datuma* i *Istek kalibracije*.   
> **Registar Instrumenata koji ne podliježu umjeravanju**: popis *mjernih instrumenata* gdje nije predviđena *Kalibracija*; filter nema utjecaja na ispis ovog izvješća *Status - Nisu podložni kalibraciji: Svi, Podložno kalibraciji, Nisu podložni kalibraciji*.   
> **Kartica Alati za mjerenje**: kartica za *mjerne instrumente*.   
:::


## Upravljačke tipke


### ![](/img/neutral/common/save.png) Spremi

Pritiskom na ovu tipku pohranjuju se sve izmijenjene informacije o prikazanom *mjernom instrumentu*.   


### ![](/img/neutral/common/duplicate.png) Dupliciraj instrument

Za dupliciranje prikazanog *mjernog instrumenta* u novi *mjerni instrument* dovoljno je pritisnuti tipku **Dupliciraj**.   
Informacije koje se ne dupliciraju s izvornog instrumenta su: *Šifra*,  *Serijski broj*, *Datum kupnje*, *Datum isteka jamstva*, *Lokacija dobavljača*, *Kupac vlasnik*, *Slika* te podaci o posljednjoj obavljenoj kalibraciji: *Datum posljednje kalibracije* i *Rezultat*.   
Nakon završetka obrade prikazuje se novi *mjerni instrument*.


### Planiranje novih kalibracija  

Tipka je omogućena samo ako je *mjerni instrument* *Aktivan*, *podložan kalibraciji*, i postoji vremenski *period kalibracije* (*mjerna jedinica*: *Dani* ili *Mjeseci*). Prikazuje se zahtjev za:   
> **Planirati do**: ovo je datum završetka planiranja novih zakazanih kalibracija.   

*Metoda korištena za planiranje*:   
Kao prvi korak, uklanjaju se sve prethodno planirane, a još neizvršene *kalibracije* za *instrument*.  
Zatim, počevši od datuma posljednje *kalibracije*, kreira se onoliko *kalibracija* koliko ih je moguće kreirati u zadanom vremenskom intervalu počevši od današnjeg datuma, frekvencijom definiranom *razdobljem kalibracije*. Ako predloženi datum pada na neradni dan naveden u *Kalendaru tvornice* predloženi datum će biti pomaknut na prvi sljedeći radni dan.   
Ako za instrument nikada nije bila planirana ili izvršena *kalibracija* ili ako posljednji datum *kalibracije* pada prije
*razdoblja Kalibracije* koje se računa unatrag od današnjeg datuma, prva *kalibracija* će biti predložena za današnji datum, a sve ostale će biti planirane nakon toga.


### Nova kalibracija

Tipka je omogućena samo ako se iz pregleda rezultata odabere jedan *mjerni instrument* koji je *aktivan* i *podložan kalibraciji*.
Kako bi se kreirala nova *neplanirana kalibracija* za prikazani *mjerni instrument*, potrebno je pritisnuti tipku *Nova kalibracija*. 
Nakon potvrde zahtjeva kreira se nova *kalibracija*; predlaže se *vrsta kalibracije* (interna ili eksterna), navedena u *Parametrima umjeravanja instrumenata*, zajedno s referencama na *mjerni instrument* i njegova svojstva.   
Po završetku obrade prikazuje se *nova kalibracija*.    


## Upravljanje podacima


### Podaci zaglavlja

Upravljane informacije uključuju:   
> **Kategorija**: Kategorija *mjernog instrumenta* (obvezan podatak).   
> **Šifra**: šifra *mjernog instrumenta* (obvezan podatak).   
> **Serijski broj**: serijski broj *mjernog instrumenta*; slobodna opisna informacija.   
> **Model**: model *mjernog instrumenta*; slobodna opisna informacija.   
>
> **Podaci o kupnji**: proširivi odjeljak u kojem je moguće unijeti:   
>
>> **Dobavljač**: naziv *dobavljača* pri kupnji.    
>> **Proizvođač**: Kontakt **proizvođača* instrumenta.   
>> **Datum kupnje**: datum kupnje/nabave.   
>> **Datum isteka jamstva**: datum isteka jamstva pri kupnji.   
>> **Dobavljač održavanja/servisa**: naziv uobičajenog *dobavljača* za održavanje/servis.   
>
> **Odgovorna funkcija**: proširivi odjeljak u kojem je moguće unijeti:   
>
>> **Funkcija**: *poslovna funkcija* u poduuzeću odgovorna za instrument.   
>> **Zaposlenik**: odgovorni *zaposlenik*.   
>
> **Svojstva kalibracije**: proširivi odjeljak u kojem je moguće unijeti:   
>
>> **Nije podložno kalibraciji**: označava da *mjerni instrument* nije podložan kalibraciji.   
>> U tom slučaju sve ostale informacije u ovom odjeljku su onemogućene.   
>> **Interna kalibracija**: označava da *mjerni instrument* kalibrira osoba unutar tvrtke.   
>> **Period kalibracije:**: razdoblje (izraženo u povezanoj *mjernoj jedinici*) kalibracije mjernog instrumenta.    
>> **Mjerna jedinica**: *mjerna jedinica* za razdoblje kalibracije.   
>> **Posljednja kalibracija**: datum posljednje provedene *kalibracije*; vrijednost se automatski postavlja prilikom dodjeljivanja *rezultata* posljednje *provedene kalibracije*, ali može se unijeti i ručno.   
>> **Rezultat**: *rezultat* posljednje provedene *kalibracije*; vrijednost se automatski postavlja prilikom dodjeljivanja *rezultata* posljednje *kalibracije*, ali može se unijeti i ručno.   
>> **Datum sljedeće kalibracije**: datum sljedeće *kalibracije*; vrijednost se automatski postavlja prilikom dodjeljivanja *rezultata* posljednje *kalibracije*, ali može se unijeti i ručno.    
>> **Dobavljač kalibracije**: naziv *dobavljača* koji provodi vanjsku kalibraciju.   
>
> **Klasifikacija**: *klasifikacija*; primjeri: Mehanički, Električni, Elektronički, itd.    
> **Artikl**: *artikl* povezan s *mjernim instrumentom*; *artikl*, kako bi bio odabran, mora biti tipa *Oprema* ili *Alat*.    
>
> **Svojstva instrumenta**: proširivi odjeljak u kojem je moguće unijeti:   
>
>> **Mjerna jedinica**: *mjerna jedinica* vrijednosti koje *mjerni instrument* bilježi.   
>> **Raspon mjerenja**: Raspon koji *mjerni instrument* može mjeriti.   
>> **Preciznost**: *minimalna preciznost* mjerenja.   
>> **Granice**: *granice prihvatljivosti* *mjernog instrumenta* za njegovu upotrebu; primjeri: eventualna ograničenja preciznosti, okruženja u kojima se ne smije koristiti, itd. 
>> **Lokacija dobavljača**: naziv *dobavljača* gdje se nalazi *mjerni instrument*.   
>> **Ovo je primarni instrument**: označava da se *mjerni instrument* koristi kao *referentni instrument* za određenu klasifikaciju instrumenta.    
>> **Primarni instrument**: ovo je *mjerni instrument* koji se koristi za kalibraciju prikazanog instrumenta.   
>
> **Funkcija upotrebe**: proširivi odjeljak u kojem je moguće unijeti:  
>
>> **Funkcija**: *poslovna funkcija* koja redovito koristi *mjerni instrument*.    
>> **Zaposlenik**: *zaposlenik* koji redovito koristi *mjerni instrument*.    
>
> **Kategorija instrumenta**: *kategorija instrumenta*; obično se koristi za definiranje različitih razina degradacije *mjernog instrumenta*.    
> **Skladište/Lokacija**: *skladište/Lokacija* gdje se nalazi *mjerni instrument*.    
> **Vlasnik kupac**: naziv *vlasnika kupca*.    
> **Aktivan**: označava da je *mjerni instrument* još uvijek *aktivan*.    
> **Neaktivan od**: označava datum od kojeg *mjerni instrument* više nije *aktivan*.    
> **Bilješke**: slobodne bilješke.   


### Vrijednosti za bilježenje
Na ovom popisu moguće je definirati vrste mjerenja i vrijednosti koje treba zabilježiti tijekom aktivnosti *interne kalibracije*.    
Ako je *mjerni instrument* označen kao *aktivan*, *podložan kalibraciji* i ako je *kalibracija interna*, ove vrijednosti bit će navedene u *internim kalibracijama*.   
Popis se sastoji od sljedećih informacija:   
> **Sekvenca**: sekvenca mjerenja.   
> **Pozicija**: slobodne bilješke o temi.   
> **Interval čitanja**: slobodne bilješke o temi.   
> **Tražena vrijednost**: nominalna vrijednost koja se traži.   
> **Nesigurnost (-)**: vrijednost negativne neizvjesnosti (izražena u postocima) koja će se primijeniti na *traženu vrijednost*.   
> **Nesigurnost (+)**: vrijednost pozitivne neizvjesnosti (izražena u postocima) koja će se primijeniti na *traženu vrijednost*.    
> **Napomena**: slobodne bilješke.   


### Povezani artikli
Na ovom popisu moguće je povezati *artikle* koji se mogu mjeriti s *mjernim instrumentom*.   
S trenutnom verzijom Fluentisa ne postoje standardne provjere koje potvrđuju upotrebu instrumenta za mjerenje vrijednosti s *artikala* navedenih na ovom popisu.    
Popis se sastoji od sljedećih informacija:   
> **Klasa**: to je *klasa artikla*.   
> **Šifra**: to je šifra *artikla*.   
> **Opis artikla**: opis *artikla*.   
> **Bilješke**: slobodne bilješke.   


### Povijest izvještaja i certifikata kalibracije
Na ovom popisu moguće je pregledati *povijest K+kalibracija* i *certifikata kalibracije* planiranih i provedenih za *mjerni instrument*.    
Pomoću dvostrukog klika miša na željeni redak moguće je upravljati odabranom *kalibracijom*.    
Popis se sastoji od sljedećih informacija:   
> **Vrsta kalibracije**: šifra *vrste kalibracije*.   
> **Opis vrste kalibracije**: opis *vrste kalibracije*.   
> **Godina**: *godina* dokumenta.   
> **Broj**: *broj dokumenta*.   
> **Interna kalibracija**: označava je li izdana *interna kalibracija*.   
> **Planirano**: označava je li dokument planiran (raspoređen).   
> **Planirani datum**: datum planirane kalibracije.   
> **Datum kalibracije**: datum stvarne kalibracije.   
> **Rezultat**: šifra *rezultata* kalibracije.   
> **Opis rezultata**: opis *rezultata* kalibracije.   
> **Kategorija**: šifra *kategorije instrumenta*.   
> **Opis kategorije**: opis *kategorije instrumenta*.   
> **Šifra**: šifra *mjernog instrumenta*.   
> **Serijski broj**: serijski broj *mjernog instrumenta*.   
> **Model**: model *mjernog instrumenta*.   
> **Vanjski laboratorij**: naziv *dobavljača* koji provodi vanjsku kalibraciju.
> **Funkcija**: šifra *poslovne funkcije* koja provodi internu kalibraciju.   
> **Opis funkcije**: opis *poslovne funkcije* koja provodi internu kalibraciju.   
> **Šifra**: šifra *zaposlenika* koji provodi internu kalibraciju.  
> **Prezime**: prezime *zaposlenika* koji provodi internu kalibraciju.   
> **Ime**: ime *zaposlenika* koji provodi internu kalibraciju.   


### Dodatni podaci
Moguće je unijeti [Dodatne Podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki *mjerni instrument*. 


### Povezani dokumenti
Na ovom popisu moguće je unijeti i pregledati eventualne privitke; moguće je vidjeti pretpregled.   


### Slika
Moguće je priložiti sliku *mjernog instrumenta* koristeći drag and drop; vidljiv je pretpregled. 
Ovaj privitak nije uključen u dokumentaciju Fluentis-a.    


Za sve što nije detaljno objašnjeno u ovom dokumentu o zajedničkom funkcioniranju obrazaca, postoji sljedeći link: [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).