---
title: Upravljanje naknadama
sidebar_position: 1
---

### **POVEZNICA NA KARTICE NA DNU OBRASCA**:

**[Ukupni porez po odbitku](/docs/finance-area/professional-men/compensations-management/total-withholding-tax)**

**[Lista plaćanja](/docs/finance-area/professional-men/compensations-management/total-withholding-tax)**

**[Plaćanja po odbitku](/docs/finance-area/professional-men/compensations-management/withholding-tax-paying-in)**

**[Sažeci PDV-a](/docs/finance-area/professional-men/compensations-management/vat-summaries)**

**[Centri troškova/profita](/docs/finance-area/professional-men/compensations-management/cost-profit-centres)**

**[INPS](/docs/finance-area/professional-men/compensations-management/national-insurance)**

 

 

Iz ovog obrasca nastavljate s učitavanjem/izmjenom dokumenta primljenog od stručnjaka ili agenta, **u slučaju privremene notule i konačne fakture: razlika između toga dvoje, zapravo, odnosit će se samo na trenutno ili naknadno umetanje (dakle ulazak u izmjene već zabilježenog privremenog dokumenta) polja koja se odnose na broj i datum konačnog dokumenta.**

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image01.png)

 

### **POLJA ZAGLAVLJA**:

**Primatelj**: odnosi se na unos nositelja podračuna naknade: u ovo polje mogu se unijeti samo podračuni s vrstom računa agenta ili dobavljača koji imaju oznaku poreza po odbitku postavljenu u šifarniku.

Sljedeći statusni flagovi (otvoriti expander) su: 

**Uračunato**: njime automatski upravlja aplikacija u trenutku obračuna naknade. Nakon što je ova zastavica postavljena, kompenzacija se više ne može mijenjati.  **Plaćeno zadržavanje**: primijenit će se na naknadu ručno ili kroz postupak  **[Plaćanja po odbitku](/docs/finance-area/professional-men/search-compensations/withholding-tax-paying-in)** koji se može izvesti iz maske za pretraživanje naknade. 

**Certifikat**: automatski ga postavlja program kada se zadržani certifikati definitivno ispisuju.

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image02.png)

 

Povezano s podračunom agenta ili dobavljača, može se unaprijed definirati **vrsta poreza** po odbitku koji će se predložiti prilikom učitavanja naknade (veza se definira u registru agenta ili dobavljača).

Sljedeće polje za **bilješke** omogućuje vam da zapišete referentni tekst naknade: to je bilješka koja će se zatim prijaviti u detaljnim bilješkama svih računovodstvenih kretanja povezanih s ovom kompenzacijom. 

**Opis kretanja**: koristit će se u obračunu kompenzacije za istoimeno polje u računovodstvenom unosu.

 

Na desnoj strani: 

**Šifra plaćanja**: ovo polje, predloženo automatski (podsjećajući na primjenjivu vrstu poreza po odbitku za naknadu) ako je polje istog naziva ispunjeno u obrascu za [Upravljanje vrstom poreza](/docs/configurations/tables/finance/withholding-tax-types) po odbitku, odnosi se na šifru koja se odnosi na predložak plaćanja koji treba navesti u jedinstvenoj ovjeri primatelja (vidi upute ministarstva).

Primjer: šifra A = samozaposleni rad koji se obavlja uobičajeno; Q = provizije plaćene agentu ili prodajnom predstavniku jedne tvrtke; R = provizije plaćene agentu za više tvrtki ili prodajnom predstavniku; U = provizije plaćene poslovnom agentu......

 

**Referentni broj i godina naknade**: ovo je automatska interna numeracija programa koja mora biti jedinstvena za tvrtku.

**Datum dokumenta**: predložen je kao trenutni datum, ali se može postaviti kao datum primljene privremene obavijesti.

**Datum i broj završnog dokumenta**: oni se odnose na reference na konačni račun: ovo su obavezna polja za nastavak obračuna naknade, čak i ako referentni predložak nije predložak PDV-a. Ova dva polja će biti jedina koja se mogu mijenjati ako je plaćanje već evidentirano u računovodstvu.

**Datum primitka**: polje za bilježenje datuma primitka završnog računa (nije obavezno za računovodstvo).

 

**Projekt** (bivši radni nalog): služi za povezivanje naknade s projektom (prodajni radni nalog): to može biti slučaj procjene na gradilištu kojim se upravlja na temelju radnog naloga. Ako **[računovodstveni predložak](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** koji se koristi u računovodstvu za kompenzaciju ima aktivnu oznaku projekti (ex narudžbe), tada će troškovi uneseni u ovu kompenzaciju biti dodijeljeni projektu (narudžbi) umetnutom u ovo polje.

**Mjenjačnica / Datum valute / Valuta**: povezano s upravljanjem valutom i pripadajućim podacima o mjenjaču preuzetim iz mjenjačke tablice (valuta se postavlja iz registra agenta/dobavljača).

 

### LINIJE DETALJA

 

**Vrsta retka**: temeljni podaci koji vam omogućuju automatsko upravljanje primjenom poreza po odbitku na dio troška usluge i njegovu neprimjenu na dio koji se odnosi na fond socijalnog osiguranja primatelja. Može biti tri vrste:



**Trošak usluge**: za unos dijela koji podliježe zadržavanju za koji će Fluentis predložiti postotak oporezivog iznosa i stopu poreza po odbitku koja se očitava iz vrste poreza po odbitku, troškovni podračun će biti iskazan prema protivnom trošku agenta/ dobavljač, trošak u valuti i eurima, stopa PDV-a koja će se primijeniti (također predložena na temelju osobnih podataka), postotak mirovinskog fonda koji će se izračunati na retku (predloženo vrstom poreza po odbitku) i relevantni ekonomski datumi obračuna. Njima se upravlja, za povezanog korisnika, u skladu s parametrima umetanja (koji se mogu postaviti gumbom na traci izbornika): reci koji slijede prvi automatski će predložiti raspon postavljen u prethodnom retku.  

**Fond zdravstvenog osiguranja**: Fluentis će predložiti porez po odbitku od 0% i oporezivu vrijednost PDV-a automatski izračunatu na temelju postotka prisutnog u prethodno učitanoj liniji troškova usluge.  

**Ostalo**: njime se upravlja kao iznosom koji podliježe zadržavanju (ali korisnik može prisiliti ovu postavku): to su obično naknade troškova na dnu popisa uključene u naknadu, koje mogu, ali ne moraju biti predmetom zadržavanja i obično su ne podliježe PDV-u.  

Prilikom spremanja kompenzacije, kontrolne poruke će se izvršiti u slučaju da vrijednost stavke ne odgovara ukupnom iznosu za plaćanje, kao i neuspjeh u balansiranju podataka u troškovno-profitnom centru. 

Nakon što se izvrši obračun kompenzacije, više neće biti moguće mijenjati podatke o kompenzaciji: u slučaju da je obračun proveden. plaćanja ili Enasarco, međutim, reference na konačni broj/datum dokumenta, opis kretanja i podračun umetnut u mrežu s detaljima moći će se mijenjati.

Ako je naknada spremljena i ima definitivan datum i broj dokumenta, moći će se nastaviti s obračunom preko tipke  **Knjiži i zatvori** na traci izbornika: otvorit će se obrazac u kojem će predloženi datumi biti zadnji važeći za PDV registar povezan s predloškom koji je povezan s korištenom vrstom poreza po odbitku.

Dostupni su neki ispisi koji se mogu izvesti pomoću naredbi koje se nalaze na traci izbornika. 

![](/img/it-it/finance-area/professional-men/compensations-management/compensations-management/image03.png)


*Specifični tipke*:  
> **Parametri umetanja**: u korisničkim parametrima moguće je definirati mora li nova naknada ponovno predložiti isti podračun kao trenutni, istu vrstu poreza po odbitku, kako upravljati novim datumom dokumenta i na kraju kako upravljati raspon ekonomskih obračunskih datuma (kraj financijske godine - tj. konačni datum bit će jednak kraju financijske godine, dnevni - tj. konačni datum jednak početnom datumu, bez datuma za vrstu računa usluga - tj. obvezno će zahtijevati umetanje oba datuma ako je vrsta unesenog podračuna postavljena kao 'Usluga');   
> **Knjiži i zatvori**: aktivno kada su uneseni konačni datum i broj dokumenta, omogućuje vam da izvršite obračun naknade;   
> **Novi detalj**: attiva il cursore nell'inserimento di una nuova riga di dettaglio del compenso;  
> **Izbriši detalj**: briše linije detalja odabrane u kompenzaciji;   
> **Izračunaj vrijednosti**: vrši ponovni izračun vrijednosti poreza po odbitku na temelju podataka unesenih u retke detalja.  

---
### **VIDEO TUTORIALS**

<iframe width="560" height="315" src="https://www.youtube.com/embed/k7abmzqf6Bk" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/8sdFGMDVIFc" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DVXhUdwqBS4" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>