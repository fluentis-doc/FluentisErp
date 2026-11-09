---
title: Konfiguracija veze sa FBH-om
sidebar_position: 2
---

Prilikom ugovaranja usluge elektronskog fakturisanja dodeljuju se korisničko ime i lozinka za ličnu vezu sa Fluentis BHUB-om. Zato je potrebno konfigurisati ERP sistem kako bi se komunikacija sa sistemom SdI mogla odvijati samostalno i u pozadini, bez potrebe za ručnim intervencijama, kako prilikom slanja dokumenata, tako i prilikom prijema obaveštenja o statusu.

U tabelu **Konfiguracija elektronskog dokumenta** potrebno je uneti korisničko ime i lozinku za pristup sistemu Fluentis Business HUB, i to u polja *Korisnik* i *Lozinka*. Ovi podaci su JEDINSTVENI za celu instalaciju, nezavisno od eventualnog broja preduzeća u sistemu.

ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM, KAO KORISNIKA POTREBNO JE UNETI ŠIFRU XXXXXXXX, A KAO LOZINKU XXXXXXXX.

Budući da SdI omogućava i testno okruženje u koje je moguće slati probne dokumente bez njihovog prosleđivanja zvaničnim kanalima, ako uneti pristupni podaci pripadaju testnom nalogu (koji ne treba mešati sa zvaničnim nalogom jer on ima drugačije korisničko ime i lozinku), potrebno je aktivirati oznaku „Testno okruženje” (OVO NIJE PODRŽANO ZA KORISNIKE KOJI NISU UGOVORILI USLUGU ELEKTRONSKOG FAKTURISANJA SA FLUENTISOM).

Nakon unosa pristupnih podataka moguće je proveriti ispravnost veze pomoću naredbe **Proveri vezu** na traci menija.

Klikom na dugme **Nova konfiguracija za preduzeće** omogućava se unos podataka u donju tabelu. Potrebno ju je popuniti kako bi se za svako preduzeće konfigurisalo slanje faktura u elektronskom obliku, određivanjem sledećih vrednosti:

- **Preduzeće i Opis preduzeća**: izaberite preduzeće koje želite da aktivirate sa liste vrednosti koja se automatski prikazuje nakon pozicioniranja na ovo polje u tabeli.
- **Potpisane elektronske fakture**: označite ovu opciju ako želite da upravljate digitalnim potpisivanjem izlaznih faktura koje se šalju sistemu SdI.
- **Elektronske fakture sa priloženim PDF-om**: ova opcija omogućava generisanje PDF datoteke unete fakture i njeno umetanje u XML datoteku koja se šalje sistemu SdI. Ako je opcija aktivirana, obavezno je podesiti i sledeću vrednost, Transformacija i opis. U tom polju potrebno je navesti Fluentisovu transformaciju namenjenu generisanju PDF datoteke koja će biti priložena XML datoteci.
- **ARM transformacija za izradu PDF datoteke fakture**: u ovom polju potrebno je navesti ARM transformaciju koja će se koristiti ako slanje elektronske fakture uključuje i PDF datoteku u prilogu.
- **Fascikla za izradu datoteka**: ovo polje nije obavezno i može se popuniti ako želite da sačuvate kopije generisanih XML datoteka u fascikli datotečnog sistema izvan Fluentisa. XML datoteka fakture uvek će biti dostupna unutar ERP sistema za pregled i proveru u različitim funkcijama za upravljanje fakturama, kao i u arhivi dokumenata. Datoteka se kopira u navedenu fasciklu istovremeno sa njenim generisanjem u postupcima upravljanja prodajnim dokumentima. Dijalog za izbor fizičke fascikle može se otvoriti dvostrukim klikom levim tasterom miša na ovo polje.
- **Fascikla potpisanih datoteka**: ako se odabere eksterno digitalno potpisivanje datoteka faktura, u ovom polju potrebno je navesti fasciklu iz koje Fluentis može da preuzme digitalno potpisane datoteke faktura pomoću postupka prenosa (upload). Dijalog za izbor fizičke fascikle može se otvoriti dvostrukim klikom levim tasterom miša na ovo polje.

U istom dijalogu, izborom postojećeg reda i klikom na dugme **Izbriši konfiguraciju preduzeća**, uklanja se izabrani red.