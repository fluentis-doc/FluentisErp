---
title: Vrste troškova
sidebar_position: 11
---

U ovoj tabeli definišu se vrste završnih troškova koji se dodaju dokumentima (posebno dokumentima izlaznog poslovnog ciklusa) radi automatskog zaduživanja.

Mogu se dodati direktno u dokument ili u šifarnik kupca, čime se omogućava automatizovan unos troška.

### Polja za povezivanje artikla i PDV-a

**Tip / Opis**: šifra i opis troška za njegovo pronalaženje.

**Klasa / Šifra / Opis artikla**: polje za povezivanje vrste troška sa odgovarajućom šifrom artikla.

**Konto / Podkonto / Opis**: potrebno za povezivanje sa kontom na kojem će se automatski knjižiti ponovno zaračunavanje predmetnog troška.

**PDV / Opis**: potrebno za određivanje PDV šifre (stope ili šifre oslobođenja) prema kojoj će se trošak ponovo zaračunati.

**Tip PDV-a**: tip PDV-a koji se koristi za ponovno zaračunavanje troška (osim u posebnim slučajevima ili posebnim PDV režimima, izaberite Generički).

### Zastavice za povezivanje sa funkcionalnostima {#link-to-logic}

**Razno**: označava različite troškove koji se jednostavno zaračunavaju. Svi troškovi tipa Razno uneti u dokumente prenose se u zbirni dokument kojim se razdužuju ti dokumenti.

**Primljeno**: aktiviranjem ove zastavice trošak će se automatski obračunavati za svaku ratu bankarske potvrde definisanu u uslovima plaćanja (zato funkcioniše samo sa ovim tipom plaćanja). Na troškove naplate automatski se primenjuje osnovna stopa PDV-a dokumenta.

**Prevoz (prenos)**: aktiviranjem ove zastavice trošak će se na fakturi obračunavati za svaku otpremnicu koja je učestvovala u njenom kreiranju. Međutim, ako se više narudžbina razdužuje jednom otpremnicom, prikazaće se samo jedan trošak naplate.

**Pakovanje**:

**Otprema**:

**Putovanje**: ako je omogućena, ova vrsta troška prikazivaće se na listi troškova koje je moguće izabrati u intervencijama u oblasti Projekti.

**Tip putnog troška**: dostupno samo ako je aktivirana zastavica „Putovanje“. Određuje tip putnog troška i potrebno je za aktiviranje odgovarajućih polja u troškovima intervencija (na primer, za tip Udaljenost aktiviraju se polja za kilometražu i cenu po kilometru itd.).

**Overa / Vrednost overe**: korišćenjem ove vrste troška i unosom odgovarajuće vrednosti u susedno polje aktivira se logika obračuna takse na fakturi u slučaju oslobođenja od PDV-a i iznosa dokumenta većeg od 77 evra (za detalje pogledajte trenutno važeće propise). Osim toga, omogućava se popunjavanje odgovarajuće oznake u elektronskoj fakturi.

:::note[Informacije]
Detaljnije, logika funkcioniše tako što se, ako kupac u svom šifarniku ima definisane troškove takse, sabiraju oporezivi iznosi redova dokumenta koji imaju PDV šifru iz jedne od sledećih kategorija:

- Neoporezivo
- Oslobođeno
- Isključeno

Ako je ukupan iznos (preračunat u valutu preduzeća prema kursu iz zaglavlja fakture) veći od **Minimalnog praga troškova** u odeljku **Troškovi takse** u tabeli preduzeća, trošak takse automatski se dodaje.

PDV šifre navedenih kategorija takođe moraju imati aktiviranu zastavicu *Osnovica za obračun takse*.
:::

**Statistička vrednost Intra**: ovom funkcionalnošću završni trošak unet na fakturu raspoređuje se na redove dokumenta radi izrade Intrastat obrazaca putem automatskog postupka (iz fakture).

**Podeljen**: ova zastavica omogućava da se trošak u skladišnom knjiženju rasporedi na pojedinačne redove knjiženja fakture. Ova zastavica ne znači da će se trošak rasporediti i u knjiženjima povezanih dokumenata.

**WEEE**:

**Obavezni PDV**:

### Ostala polja

**Kategorija proizvoda**:

**Šifre / Opis za obračun zarada**: šifra koja se koristi za unos troškova iz intervencija i prijava aktivnosti u okvir „Vrednosti“ u zbirnom pregledu obračunskih listi zaposlenih.

**Tip aktivnosti**: primenjuje se samo na troškove tipa „Putovanje – Sati putovanja“. Tip aktivnosti koristi se za automatsko generisanje prijave aktivnosti na osnovu sati putovanja navedenih u troškovima intervencije u oblasti Projekti.

**Kategorija aktivnosti**: primenjuje se samo na troškove tipa „Putovanje – Sati putovanja“. Kategorija aktivnosti koristi se u automatski generisanoj prijavi aktivnosti na osnovu sati putovanja navedenih u troškovima intervencije u oblasti Projekti.

### Porez po odbitku i penzijski fond

**Penzijski fond / Subjekt koji podleže porezu po odbitku / Šifra P.A.**: polja omogućavaju upravljanje *penzijskim fondom* koji se može primeniti na fakturu profesionalca u XML datoteci izlazne elektronske fakture.

Naime, ako je u šifarniku kupca na fakturi aktivirana zastavica [**porez po odbitku**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information), primalac naknade koji koristi Fluentis može da kreira izlaznu fakturu i pošalje je sistemu SDI. Ako faktura uključuje ponovno zaračunavanje troška penzijskog fonda (najčešće 4 %), potrebno je definisati tu vrstu troška u ovoj tabeli, zatim odrediti da li podleže porezu po odbitku (drugom zastavicom), a u treće polje uneti šifru koju propisuje SDI.

:::note[Primer šifara]

TC01 – Nacionalni fond za penzijsko i socijalno osiguranje advokata i pravnih zastupnika

TC02 – Penzijski fond ovlašćenih računovođa

TC03 – Penzijski fond i fond socijalnog osiguranja geodeta

TC04 – Nacionalni fond za penzijsko i socijalno osiguranje samostalnih inženjera i arhitekata

TC05 – Nacionalni javnobeležnički fond

TC06 – Nacionalni fond za penzijsko i socijalno osiguranje računovođa i komercijalnih stručnjaka

TC07 – Nacionalna ustanova za socijalno osiguranje trgovinskih agenata i zastupnika (ENASARCO)

TC08 – Nacionalna ustanova za penzijsko i socijalno osiguranje stručnjaka za radno pravo (ENPACL)

TC09 – Nacionalna ustanova za penzijsko i socijalno osiguranje lekara (ENPAM)

TC10 – Nacionalna ustanova za penzijsko i socijalno osiguranje farmaceuta (ENPAF)

TC11 – Nacionalna ustanova za penzijsko i socijalno osiguranje veterinara (ENPAV)

TC12 – Nacionalna ustanova za penzijsko i socijalno osiguranje zaposlenih u poljoprivredi (ENPAIA)

TC13 – Penzijski fond zaposlenih u preduzećima za otpremu i pomorskim agencijama

TC14 – Nacionalni institut za penzijsko osiguranje italijanskih novinara (INPGI)

TC15 – Nacionalna ustanova za pomoć siročadi italijanskih zdravstvenih radnika (ONAOSI)

TC16 – Samostalni fond za dodatno osiguranje italijanskih novinara (CASAGIT)

TC17 – Penzijski fond industrijskih stručnjaka i diplomiranih industrijskih inženjera (EPPI)

TC18 – Višekategorijska ustanova za penzijsko i socijalno osiguranje (EPAP)

TC19 – Nacionalna ustanova za penzijsko i socijalno osiguranje biologa (ENPAB)

TC20 – Nacionalna ustanova za penzijsko i socijalno osiguranje medicinskih sestara (ENPAPI)

TC21 – Nacionalna ustanova za penzijsko i socijalno osiguranje psihologa (ENPAP)

TC22 – INPS

:::

---

### Jezici

Za svaki tip plaćanja odabran u gornjoj tabeli moguće je definisati opise na različitim jezicima, koji se mogu koristiti u prilagođenim ispisima.