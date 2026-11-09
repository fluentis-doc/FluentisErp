---
title: Konfiguracija veze s FBH-om
sidebar_position: 2
---

Prilikom ugovaranja usluge elektroničkog fakturiranja dodjeljuju se korisničko ime i lozinka za osobnu vezu s Fluentis BHUB-om. Stoga je potrebno konfigurirati ERP sustav kako bi se komunikacija sa sustavom SdI mogla odvijati samostalno i u pozadini, bez potrebe za ručnim intervencijama, kako prilikom slanja dokumenata tako i prilikom primanja obavijesti o statusu.

U tablicu **Konfiguracija elektroničkih dokumenata** potrebno je unijeti korisničko ime i lozinku za pristup sustavu Fluentis Business HUB, i to u polja *Korisnik* i *Lozinka*. Ovi su podaci JEDINSTVENI za cijelu instalaciju, neovisno o eventualnom broju poduzeća u sustavu.

ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM, KAO KORISNIKA POTREBNO JE UNIJETI ŠIFRU XXXXXXXX, A KAO LOZINKU XXXXXXXX.

Budući da SdI omogućuje i testno okruženje u koje je moguće slati probne dokumente bez njihova prosljeđivanja službenim kanalima, ako uneseni pristupni podaci pripadaju testnom računu (koji ne treba zamijeniti sa službenim računom jer on ima drukčije korisničko ime i lozinku), potrebno je aktivirati oznaku „Testno okruženje” (OVO NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONIČKOG FAKTURIRANJA S FLUENTISOM).

Nakon unosa pristupnih podataka moguće je provjeriti ispravnost veze pomoću naredbe **Provjeri vezu** na traci izbornika.

Klikom na gumb **Nova konfiguracija za poduzeće** omogućuje se unos podataka u donju tablicu. Potrebno ju je ispuniti kako bi se za svako poduzeće konfiguriralo slanje računa u elektroničkom obliku, određivanjem sljedećih vrijednosti:

- **Poduzeće i Opis poduzeća**: odaberite poduzeće koje želite aktivirati s popisa vrijednosti koji se automatski prikazuje nakon pozicioniranja na ovo polje u tablici.
- **Potpisani elektronički računi**: označite ovu opciju ako želite upravljati digitalnim potpisivanjem izlaznih računa koji se šalju sustavu SdI.
- **Elektronički računi s priloženim PDF-om**: ova opcija omogućuje generiranje PDF datoteke unesenog računa i njezino umetanje u XML datoteku koja se šalje sustavu SdI. Ako je opcija aktivirana, obvezno je postaviti i sljedeću vrijednost, Transformacija i opis. U tom je polju potrebno navesti Fluentisovu transformaciju namijenjenu generiranju PDF datoteke koja će se priložiti XML datoteci.
- **ARM transformacija za izradu PDF datoteke računa**: u ovom je polju potrebno navesti ARM transformaciju koja će se koristiti ako slanje elektroničkog računa uključuje i PDF datoteku u privitku.
- **Mapa za izradu datoteka**: ovo je polje neobvezno i može se ispuniti ako želite sačuvati kopije generiranih XML datoteka u mapi datotečnog sustava izvan Fluentisa. XML datoteka računa uvijek će biti dostupna unutar ERP sustava za pregled i provjeru u različitim funkcijama za upravljanje računima te u arhivi dokumenata. Datoteka se kopira u navedenu mapu istodobno s njezinim generiranjem u postupcima upravljanja prodajnim dokumentima. Dijaloški okvir za odabir fizičke mape može se otvoriti dvostrukim klikom lijeve tipke miša na ovo polje.
- **Mapa potpisanih datoteka**: ako se odabere vanjsko digitalno potpisivanje datoteka računa, u ovom je polju potrebno navesti mapu iz koje Fluentis može preuzeti digitalno potpisane datoteke računa pomoću postupka prijenosa (upload). Dijaloški okvir za odabir fizičke mape može se otvoriti dvostrukim klikom lijeve tipke miša na ovo polje.

U istom dijaloškom okviru, odabirom postojećeg retka i klikom na gumb **Izbriši konfiguraciju poduzeća**, uklanja se odabrani redak.