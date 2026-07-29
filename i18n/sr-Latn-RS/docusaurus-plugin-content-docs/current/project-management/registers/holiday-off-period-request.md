---
title: Zahtev za godišnji odmor / odsustvo
sidebar_position: 4
---

Zahtev za **godišnji odmor / odsustvo** omogućava korisniku da direktno iz Fluentisa zatraži dane ili sate godišnjeg odmora, odsustva ili bolovanja.

Podaci koje korisnik treba da unese su:

**Od datuma / Do datuma**: određuje period za koji se podnosi zahtev, u danima i satima. Ako je vreme početka i završetka ostavljeno na **00:00**, prilikom generisanja prijave aktivnosti koristiće se vreme početka i završetka definisano u smeni resursa.

**Resurs**: automatski se predlaže resurs prijavljenog korisnika Fluentisa.

**Razlog**: sadrži listu razloga odsustva definisanih za kompaniju.

**Obrađeno**: oznaka koja pokazuje da li je zahtev već obrađen. Može se uključiti ručno ili automatski po završetku postupka pokrenutog dugmetom **Potvrdi period**.

**Datum kreiranja**: datum kreiranja zahteva.

**Kreirao**: sadrži korisnika koji je kreirao zahtev; automatski se predlaže prijavljeni korisnik.

**Menadžer**: lista korisnika iz koje je moguće odabrati rukovodioca resursa; podatak nije obavezan.

**Rukovodilac**: lista korisnika iz koje je moguće odabrati rukovodioca tima resursa; podatak nije obavezan.

**E-mail**: automatski se predlaže e-mail adresa korisnika koji podnosi zahtev.

**E-mail CC**: e-mail adresa koja će biti dodata u CC automatske poruke za odobrenje zahteva. Ako su izabrani rukovodilac tima i/ili menadžer, njihove e-mail adrese takođe će biti dodate u CC.

**Predmet**: opis zahteva.

**Beleška**: omogućava unos dodatnih detalja zahteva.

**Rezultati**: prikazuje rezultate obrade zahteva putem *workflowa* (npr. potvrđen, otkazan, razlog otkazivanja i sl.).

Na alatnoj traci dostupna su sledeća dugmad:

**Period odobrenja**: klikom na ovo dugme otvara se prozor u kojem je potrebno odabrati referentni projekat, kategoriju aktivnosti i označiti opciju za kreiranje perioda godišnjeg odmora u prijavi aktivnosti na osnovu upravo unetih podataka.

Resursu je moguće poslati obaveštenje putem e-maila.

Po završetku postupka automatski će biti uključena oznaka **Obrađeno**.

Ako su u šifarniku [Razlozi odsustva](/docs/configurations/tables/project-management/missing-reason) definisani **Kategorija aktivnosti** i **WBS projekta**, oni će se automatski predložiti kao podrazumevane vrednosti.

**Povrat perioda**: omogućava brisanje aktivnosti generisanih potvrdom perioda i vraćanje oznake **Obrađeno** u početno stanje.

**Otvori kalendar resursa**: otvara prikaz kalendara u kojem je moguće odabrati više resursa i pregledati postojeće raspoređene aktivnosti.

Mogući scenariji prilikom korišćenja opcije **Period odobrenja** u slučaju preklapanja:

- Zahtev za godišnji odmor već ima uključenu oznaku **Obrađeno**: prikazaće se poruka **"Zahtev je već obrađen. Želite li da nastavite ponovo?"**

  Ako izaberete **Ne**, ceo postupak će biti prekinut.

  Ako izaberete **Da**, ponovo će se kreirati prijave aktivnosti za godišnji odmor i biće prepisane one koje su prethodno generisane ovim zahtevom (ako postoje).

- Zahtev za godišnji odmor nema uključenu oznaku **Obrađeno**, ali u istom periodu već postoje druge prijave aktivnosti:

  **"Aktivnosti se preklapaju: *detalji aktivnosti* - *godišnji odmor*. Želite li da nastavite?"**

  Ako izaberete **Da**, generisaće se sve prijave aktivnosti za traženi period godišnjeg odmora.

  Ako izaberete **Ne**, generisaće se samo prijave aktivnosti za dane u kojima ne postoje druge prijave aktivnosti.

Ako za određeni dan postoji čak i jedna prijava aktivnosti za deo radnog vremena, taj dan će biti preskočen i za njega neće biti evidentiran godišnji odmor.