---
title: Zahtjev za godišnji odmor / dopust
sidebar_position: 4
---

Zahtjev za **godišnji odmor / dopust** omogućuje korisniku da izravno iz Fluentisa zatraži dane ili sate godišnjeg odmora, dopusta ili bolovanja.

Podaci koje korisnik treba unijeti su:

**Od datuma / Do datuma**: određuje razdoblje za koje se podnosi zahtjev, u danima i satima. Ako je vrijeme početka i završetka ostavljeno na **00:00**, prilikom generiranja prijave aktivnosti koristit će se vrijeme početka i završetka definirano u smjeni resursa.

**Resurs**: automatski se predlaže resurs prijavljenog korisnika Fluentisa.

**Razlog**: sadrži popis razloga odsutnosti definiranih za tvrtku.

**Upravlja**: oznaka koja pokazuje je li zahtjev već obrađen. Može se uključiti ručno ili automatski po završetku postupka pokrenutog gumbom **Potvrdi razdoblje**.

**Datum izrade**: datum izrade zahtjeva.

**Izradio**: sadrži korisnika koji je kreirao zahtjev; automatski se predlaže prijavljeni korisnik.

**Menadžer**: popis korisnika iz kojeg je moguće odabrati voditelja resursa; podatak nije obavezan.

**Voditelj**: popis korisnika iz kojeg je moguće odabrati voditelja tima resursa; podatak nije obavezan.

**E-mail**: automatski se predlaže e-mail adresa korisnika koji podnosi zahtjev.

**E-mail CC**: e-mail adresa koja će biti dodana u CC automatske poruke za odobrenje zahtjeva. Ako su odabrani voditelj tima i/ili voditelj, njihove e-mail adrese također će biti dodane u CC.

**Predmet**: opis zahtjeva.

**Bilješka**: omogućuje unos dodatnih pojedinosti zahtjeva.

**Rezultati**: prikazuje rezultate obrade zahtjeva putem *workflowa* (npr. potvrđen, otkazan, razlog otkazivanja i sl.).

Na alatnoj traci dostupni su sljedeći gumbi:

**Razdoblje odobrenja**: klikom na ovaj gumb otvara se prozor u kojem je potrebno odabrati referentni projekt, kategoriju aktivnosti te označiti opciju za kreiranje razdoblja godišnjeg odmora u prijavi aktivnosti na temelju upravo unesenih podataka.

Resursu je moguće poslati obavijest putem e-maila.

Po završetku postupka automatski će se uključiti oznaka **Upravlja**.

Ako su u šifarniku [Razlozi odsutnosti](/docs/configurations/tables/project-management/missing-reason) definirani **Kategorija aktivnosti** i **WBS projekta**, oni će se automatski predložiti kao zadane vrijednosti.

**Povrat razdoblja**: omogućuje brisanje aktivnosti generiranih potvrdom razdoblja i vraćanje oznake **Upravlja** u početno stanje.

**Otvori kalendar resursa**: otvara prikaz kalendara u kojem je moguće odabrati više resursa i pregledati postojeće raspoređene aktivnosti.

Mogući scenariji prilikom korištenja opcije **Razdoblje odobrenja** u slučaju preklapanja:

- Zahtjev za godišnji odmor već ima uključenu oznaku **Upravlja**: prikazat će se poruka **"Zahtjev je već obrađen. Želite li ponovno nastaviti?"**

  Ako odaberete **Ne**, cijeli će postupak biti prekinut.

  Ako odaberete **Da**, ponovno će se kreirati prijave aktivnosti za godišnji odmor te će se prepisati one koje su prethodno generirane ovim zahtjevom (ako postoje).

- Zahtjev za godišnji odmor nema uključenu oznaku **Upravlja**, ali u istom razdoblju već postoje druge prijave aktivnosti:

  **"Aktivnosti se preklapaju: *detalji aktivnosti* - *godišnji odmor*. Želite li nastaviti?"**

  Ako odaberete **Da**, generirat će se sve prijave aktivnosti za traženo razdoblje godišnjeg odmora.

  Ako odaberete **Ne**, generirat će se samo prijave aktivnosti za dane u kojima ne postoje druge prijave aktivnosti.

Ako za određeni dan postoji čak i jedna prijava aktivnosti za dio radnog vremena, taj će se dan preskočiti i za njega se neće evidentirati godišnji odmor.