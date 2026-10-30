---
title: Vrste troškova
sidebar_position: 11
---

U ovoj se tablici definiraju vrste završnih troškova koji se dodaju dokumentima (posebno dokumentima izlaznog poslovnog ciklusa) radi automatskog terećenja.

Mogu se dodati izravno u dokument ili u šifarnik kupca, čime se omogućuje automatizirani unos troška.

### Polja za povezivanje artikla i PDV-a

**Tip / Opis**: šifra i opis troška za njegovo dohvaćanje.

**Klasa / Šifra / Opis artikla**: polje za povezivanje vrste troška s odgovarajućom šifrom artikla.

**Konto / Podkonto / Opis**: potrebno za povezivanje s kontom na kojem će se automatski knjižiti ponovno zaračunavanje predmetnog troška.

**PDV / Opis**: potrebno za određivanje PDV šifre (stope ili šifre oslobođenja) prema kojoj će se ponovno zaračunati trošak.

**Vrsta PDV-a**: vrsta PDV-a koja se koristi za ponovno zaračunavanje troška (osim u posebnim slučajevima ili posebnim PDV režimima, odaberite Generički).

### Zastavice za povezivanje s funkcionalnostima {#link-to-logic}

**Razno**: označava različite troškove koji se jednostavno zaračunavaju. Svi troškovi vrste Razno uneseni u dokumente prenose se u zbirni dokument kojim se razdužuju ti dokumenti.

**Primljeno**: aktiviranjem ove zastavice trošak će se automatski obračunati za svaku ratu bankovne potvrde definiranu u uvjetima plaćanja (stoga funkcionira samo s ovom vrstom plaćanja). Na troškove naplate automatski se primjenjuje glavna stopa PDV-a dokumenta.

**Prijevoz (prijenos)**: aktiviranjem ove zastavice trošak će se na računu obračunati za svaku otpremnicu koja je sudjelovala u njegovu stvaranju. Međutim, ako se više narudžbi razdužuje jednom otpremnicom, prikazat će se samo jedan trošak naplate.

**Pakiranje**:

**Otprema**:

**Putovanje**: ako je omogućena, ova će se vrsta troška prikazivati na popisu troškova koje je moguće odabrati u intervencijama u području Projekti.

**Tip troška putovanja**: dostupno samo ako je aktivirana zastavica "Putovanje". Određuje vrstu putnog troška i potrebno je za aktiviranje odgovarajućih polja u troškovima intervencija (primjerice, za vrstu Udaljenost aktiviraju se polja za kilometre i cijenu po kilometru itd.).

**Ovjera / Vrijednost ovjere**: korištenjem ove vrste troška i unosom pripadajuće vrijednosti u susjedno polje aktivira se logika obračuna biljega na računu u slučaju oslobođenja od PDV-a i iznosa dokumenta većeg od 77 eura (za detalje pogledajte trenutačno važeće propise). Osim toga, omogućuje se popunjavanje odgovarajuće oznake u elektroničkom računu.

:::note[Informacije]
Detaljnije, logika funkcionira tako da se, ako kupac u svom šifarniku ima definirane troškove biljega, zbrajaju oporezivi iznosi redaka dokumenta koji imaju PDV šifru iz jedne od sljedećih kategorija:

- Neoporezivo
- Oslobođeno
- Isključeno

Ako je ukupni iznos (preračunat u valutu poduzeća prema tečaju iz zaglavlja računa) veći od **Minimalnog praga troškova** u odjeljku **Troškovi biljega** u tablici poduzeća, trošak biljega automatski se dodaje.

PDV šifre navedenih kategorija također moraju imati aktiviranu zastavicu *Osnovica za obračun biljega*.
:::

**Statistička vrijednost Intra**: ovom se funkcionalnošću završni trošak unesen na račun raspoređuje na retke dokumenta radi izrade Intrastat obrazaca putem automatskog postupka (iz računa).

**Podijeljen**: ova zastavica omogućuje da se trošak u skladišnom knjiženju rasporedi na pojedine retke knjiženja računa. Ova zastavica ne znači da će se trošak rasporediti i u knjiženjima povezanih dokumenata.

**WEEE**:

**Obvezni PDV**:

### Ostala polja

**Kategorija proizvoda**:

**Kodovi / Opis za obračun plaća**: šifra koja se koristi za unos troškova iz intervencija i prijava aktivnosti u okvir "Vrijednosti" u zbirnom pregledu obračunskih lista zaposlenika.

**Vrsta aktivnosti**: primjenjuje se samo na troškove vrste "Putovanje – Sati putovanja". Vrsta aktivnosti koristi se za automatsko generiranje prijave aktivnosti na temelju sati putovanja navedenih u troškovima intervencije u području Projekti.

**Kategorija aktivnosti**: primjenjuje se samo na troškove vrste "Putovanje – Sati putovanja". Kategorija aktivnosti koristi se u automatski generiranoj prijavi aktivnosti na temelju sati putovanja navedenih u troškovima intervencije u području Projekti.

### Porez po odbitku i mirovinski fond

**Mirovinski fond / Subjekt podložan porezu po odbitku / Kod P.A.**: polja omogućuju upravljanje *mirovinskim fondom* koji se može primijeniti na račun profesionalca u XML datoteci izlaznog elektroničkog računa.

Naime, ako je u šifarniku kupca na računu aktivirana zastavica [**porez po odbitku**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information), primatelj naknade koji koristi Fluentis može izraditi izlazni račun i poslati ga sustavu SDI. Ako račun uključuje ponovno zaračunavanje troška mirovinskog fonda (najčešće 4 %), potrebno je definirati tu vrstu troška u ovoj tablici, zatim odrediti podliježe li porezu po odbitku (drugom zastavicom) te u treće polje unijeti kod koji propisuje SDI.

:::note[Primjer šifriranja]

TC01 – Nacionalni fond za mirovinsko i socijalno osiguranje odvjetnika i pravnih zastupnika

TC02 – Mirovinski fond ovlaštenih računovođa

TC03 – Mirovinski fond i fond socijalnog osiguranja geodeta

TC04 – Nacionalni fond za mirovinsko i socijalno osiguranje samostalnih inženjera i arhitekata

TC05 – Nacionalni javnobilježnički fond

TC06 – Nacionalni fond za mirovinsko i socijalno osiguranje računovođa i komercijalnih stručnjaka

TC07 – Nacionalna ustanova za socijalno osiguranje trgovačkih agenata i zastupnika (ENASARCO)

TC08 – Nacionalna ustanova za mirovinsko i socijalno osiguranje stručnjaka za radno pravo (ENPACL)

TC09 – Nacionalna ustanova za mirovinsko i socijalno osiguranje liječnika (ENPAM)

TC10 – Nacionalna ustanova za mirovinsko i socijalno osiguranje ljekarnika (ENPAF)

TC11 – Nacionalna ustanova za mirovinsko i socijalno osiguranje veterinara (ENPAV)

TC12 – Nacionalna ustanova za mirovinsko i socijalno osiguranje zaposlenika u poljoprivredi (ENPAIA)

TC13 – Mirovinski fond zaposlenika poduzeća za otpremu i pomorskih agencija

TC14 – Nacionalni institut za mirovinsko osiguranje talijanskih novinara (INPGI)

TC15 – Nacionalna ustanova za pomoć siročadi talijanskih zdravstvenih djelatnika (ONAOSI)

TC16 – Samostalni fond za dodatno osiguranje talijanskih novinara (CASAGIT)

TC17 – Mirovinski fond industrijskih stručnjaka i diplomiranih industrijskih inženjera (EPPI)

TC18 – Višekategorijska ustanova za mirovinsko i socijalno osiguranje (EPAP)

TC19 – Nacionalna ustanova za mirovinsko i socijalno osiguranje biologa (ENPAB)

TC20 – Nacionalna ustanova za mirovinsko i socijalno osiguranje medicinskih sestara (ENPAPI)

TC21 – Nacionalna ustanova za mirovinsko i socijalno osiguranje psihologa (ENPAP)

TC22 – INPS

:::

---

### Jezici

Za svaku vrstu plaćanja odabranu u gornjoj tablici moguće je definirati opise na različitim jezicima, koji se mogu koristiti u prilagođenim ispisima.