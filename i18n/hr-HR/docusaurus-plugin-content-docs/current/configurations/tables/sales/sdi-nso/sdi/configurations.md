---
title: Konfiguracija veze s FBH
sidebar_position: 2
---

Prilikom pretplate na uslugu vezanu za elektroničko fakturiranje, bit će pruženi login i lozinka koji identificiraju osobnu vezu s Fluentis BHUB. Stoga je potrebno konfigurirati upravljački sustav kako bi se mogla autonomno i tiho upravljati komunikacijom s SdI, kako u fazi slanja, tako i u fazi primanja obavijesti o statusu.  
U tablici **Konfiguracija elektroničkog fakturiranja**, potrebno je unijeti Login i Lozinku za pristup sustavu Fluentis Business HUB u odgovarajuća polja *Operater* i *Lozinka*. Ove informacije su JEDINSTVENE za postrojenje, stoga ne ovise o eventualno prisutnim tvrtkama.

ZA ONE KOJI NISU POTPISALI FE UGOVOR S FLUENTISOM, MORAJU UNIJETI KAO OPERATOR KOD XXXXXXXX I LOZINKU XXXXXXXX.

Budući da SDI predviđa i testno okruženje za slanje probnih dokumenata bez prolaska kroz službene kanale, ukoliko unesene vjerodajnice pripadaju testnom računu (koji se ne smije miješati sa službenim računom, koji ima drugačije korisničko ime i lozinku), potrebno je aktivirati flag “Je test”.

flag “Je test” (NIJE PODRŽANO ZA ONE KOJI NISU POTPISALI FE UGOVOR S FLUENTIS-OM).

Nakon unosa pristupnih podataka, također je moguće provjeriti odgovara li veza ispravno koristeći naredbu **Provjeri vezu** koja se nalazi na tracI izbornika.  
Pritiskom na tipku **Nova konfiguracija za tvrtku** omogućuje se unos u donju mrežu koja će se morati ispuniti za konfiguraciju slanja dokumenata računa u elektroničkom formatu za svaku tvrtku, definirajući za svaku od njih sljedeće vrijednosti:        
- **Tvrtka i opis tvrtke**: odaberite tvrtku koju želite aktivirati s ponuđenog popisa; fokus će se automatski postaviti na polje u tablici.  
- **Potpisana elektronička fakturacija**: označite ovu opciju ako želite upravljati digitalnim potpisom računa prodaje koji se šalju SDI-u.
- **Elektronička fakturacija s priloženim PDF-om**: označite ovu opciju kako biste generirali PDF datoteku računa i uključili je u XML datoteku koja se šalje SDI-u. Ako je omogućeno, obavezno popunite sljedeće polje Transformacija i opis, u kojem treba navesti Fluentis Transformation koja se koristi za generiranje PDF-a koji će se priložiti XML-u.  
- **ARM transformacija za izradu PDF datoteke računa**: u ovom polju navedite ARM transformaciju koja se koristi ako slanje elektroničkog računa uključuje priloženi PDF.  
- **Mapa za izradu datoteka**: ovo polje je opcionalno; možete ga koristiti ako želite pohraniti kopiju generiranih XML datoteka u mapu izvan Fluentis sustava. XML datoteka računa i dalje će biti dostupna unutar sustava za pregled i konzultaciju u različitim funkcijama upravljanja dokumentima i u arhivu. Datoteka se kopira u navedenu mapu u trenutku kreiranja. Dijalog za odabir mape možete otvoriti dvostrukim klikom lijevim gumbom miša na polju.  
- **Mapa za potpisane datoteke**: ako se računi potpisuju izvan sustava, u ovom polju navedite mapu iz koje Fluentis može preuzeti digitalno potpisane račune putem procedure učitavanja (upload). Dijalog za odabir mape možete otvoriti dvostrukim klikom lijevim gumbom miša na polju.   

U istom dijalogu, odabirom postojeće retke i pritiskom na gumb Izbriši konfiguraciju tvrtke, odabrana konfiguracija bit će uklonjena.  

