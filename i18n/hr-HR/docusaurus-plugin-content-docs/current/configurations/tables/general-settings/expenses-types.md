---
title: Vrste troškova 
sidebar_position: 11
---

U ovoj tablici definiraju se vrste završnih troškova koji se dodaju dokumentima (posebice u prodajnom ciklusu) za automatsko terećenje.  

Ti se troškovi mogu dodavati izravno u dokument ili u karticu kupca radi automatizacije unosa troška.  

### Polja za povezivanje artikla i PDV-a  

**Vrsta / Opis:** Codice e descrizione della spesa per richiamarla

**Klasa / Šifra / Opis artikla:** polje za povezivanje vrste troška s referentnom šifrom artikla  

**Konto / Podkonto / Opis:** potrebno za povezivanje konta na koji se automatski knjiži terećenje troška  

**PDV / Opis:** potrebno za definiranje PDV šifre (stopa ili šifra oslobođenja) prema kojoj će se terećenje fakturirati  

**Vrsta PDV-a:** vrsta PDV-a za upravljanje terećenjem (osim posebnih slučajeva ili režima, navesti „Generički“)  


### Flagovi za povezivanje s logikom {#link-to-logic}

**Razno:** označava pojedinačni trošak jednostavnog terećenja. Svi troškovi označeni kao „Razno“ u dokumentima prenose se u sažeti dokument koji obrađuje same dokumente.  

**Naplate:** ako je ovaj flag označen, trošak se automatski računa za svaku ratu bankovne primitke definiranu u uvjetima plaćanja (funkcionira samo za ovu vrstu plaćanja). Troškovi naplate podliježu glavnom PDV-u dokumenta.  

**Prenos:** ako je ovaj flag označen, trošak se računa po jednom po svakom otpremnom listu koji je pridonio izradi fakture; kod isporuke više narudžbi jednim otpremnim listom, terećenje se evidentira samo jednom.      

**Pakiranje:**

**Dostava:**

**Putovanje:** ako je ovaj flag omogućeno, vrsta troška bit će dostupna u popisu troškova za odabir u intervencijama unutar područja Projekti.

**Vrsta troška za putovanje**: aktivira se samo ako je flag „Putovanje“ označen, identificira vrstu troška putovanja; potrebno za aktivaciju posebnih polja u troškovima intervencija (npr. za udaljenost će se aktivirati polja za kilometre i cijenu po kilometru, itd.)

**Pečat / Vrijednost pečata:** korištenjem ove vrste troška s navedenom vrijednošću aktivira se logika pečata na fakturi u slučaju oslobođenja PDV-a i dokumenta veće vrijednosti od 77 eura (pogledati važeće propise za detalje), uz valorizaciju pripadajućeg taga u elektroničkoj fakturi.

:::note[Info]
Logika detaljno predviđa da, ako kupac u svojoj kartici ima troškove pečata, izvrši se zbroj vrijednosti osnovice za stavke dokumenta s PDV šifrom uključenom u sljedeće kategorije:

Neoporezivo
Oslobođeno
Izuzeto

Ako je ukupni iznos (konvertiran u valutu društva s tečajem iz zaglavlja fakture) veći od **Minimalnog limita troškova** u sekciji **Troškovi pečata** u tablici društva, tada se dodaje kao trošak pečata.

PDV šifre gore navedenih kategorija moraju imati označen flag *Osnova za obračun pečata*.
:::

**Vrijednost intra statistike:** s ovom logikom završni trošak u fakturi bit će raspoređen na stavke dokumenta radi kreiranja intrastat obrazaca kroz automatsku proceduru (iz faktura)

**Raspoređeno:** ovaj flag osigurava da se knjiženje u skladištu odnosi na raspoređeni trošak po stavkama fakture; flag ne znači da se trošak raspoređuje u knjiženjima povezanih dokumenata. 

**RAEE:**

**Obavezni PDV**


### Ostala polja

**Kategorija proizvoda:**

**Šifre / Opis plaća:** šifra korištena za unos u okvir „Vrijednosti“ u sažetku za obračun plaća, za troškove iz intervencija i aktivnosti.

**Vrsta aktivnosti**: vrijedi samo za troškove tipa „Putovanje“ – „Sate putovanja“. Koristi se za automatsko generiranje izvještaja aktivnosti na temelju sati putovanja navedenih u troškovima intervencije u području Projekti.

**Kategorija aktivnosti**: vrijedi samo za troškove tipa „Putovanje“ – „Sate putovanja“. Kategorija aktivnosti koristi se u izvještaju aktivnosti koji se automatski generira prema navedenim satima putovanja u intervencijama u području Projekti.

### Porez po odbitku i mirovinski fond

**Mirovinski fond / Obveznik poreza po odbitku / Šifra P.A.:** polja za upravljanje u XML datoteci elektroničkih faktura za prodaju *Mirovinskim fondom* koji se može primijeniti na fakturi profesionalca.

Ako kupac na fakturi ima aktiviran flag [**Porez po odbitku**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) tada korisnik Fluentis može izdati fakturu i poslati je na Sdi; ako postoji terećenje za Mirovinski fond (obično 4%), ta vrsta troška se definira u ovoj tablici, zatim se označi da li je predmet poreza po odbitku (drugi flag) te se u treće polje upisuje šifra koju Sdi zahtijeva:


:::note Primjeri šifri

TC01	Nacionalni fond za mirovinsko osiguranje i pomoć odvjetnicima i pravnim zastupnicima

TC02	Mirovinski fond za ovlaštene računovođe

TC03	Mirovinski fond i pomoć geodetima

TC04	Nacionalni fond za mirovinsko osiguranje i pomoć inženjerima i arhitektima slobodnim profesijama

TC05	Nacionalni fond javnih bilježnika

TC06	Nacionalni fond za mirovinsko osiguranje i pomoć knjigovođama i komercijalnim stručnjacima 

TC07	Nacionalni zavod za pomoć i zaštitu agenata i trgovačkih predstavnika (ENASARCO) 

TC08	Nacionalni fond za mirovinsko osiguranje i pomoć radnim savjetnicima (ENPACL) 

TC09	Nacionalni fond za mirovinsko osiguranje i pomoć liječnicima (ENPAM) 

TC10	Nacionalni fond za mirovinsko osiguranje i pomoć farmaceutima (ENPAF) 

TC11	Nacionalni fond za mirovinsko osiguranje i pomoć veterinarima (ENPAV) 

TC12	Nacionalni fond za mirovinsko osiguranje i pomoć zaposlenicima u poljoprivredi (ENPAIA) 

TC13	Mirovinski fond za zaposlenike brodarskih poduzeća i pomorskih agencija 

TC14	Nacionalni institut za mirovinsko osiguranje talijanskih novinara (INPGI) 

TC15	Nacionalna ustanova za pomoć siročadi talijanskih zdravstvenih radnika (ONAOSI) 

TC16	Samostalni fond za dodatnu pomoć talijanskim novinarima (CASAGIT) 

TC17	Fond za mirovinsko osiguranje industrijskih i diplomiranih industrijskih stručnjaka (EPPI) 

TC18	Fond za mirovinsko osiguranje i pomoć višekategorialnim djelatnostima (EPAP) 

TC19	Nacionalni fond za mirovinsko osiguranje i pomoć biologima (ENPAB) 

TC20	Nacionalni fond za mirovinsko osiguranje i pomoć sestrinskoj profesiji (ENPAPI) 

TC21	Nacionalni fond za mirovinsko osiguranje i pomoć psiholozima (ENPAP)

TC22	INPS

:::

---

**Jezici**

Za svaki odabrani način plaćanja u gornjoj tablici moguće je definirati opise na različitim jezicima, što se koristi za prilagođene ispise.