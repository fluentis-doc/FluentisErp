---
title: Pregled stavaka PDV-a
sidebar_position: 5
---
:::tip[Čemu služi]

Obrazac omogućuje **prikazivanje zapisa (kretanja)** izvršenih na **PDV zapisima** zajedno s računovodstvenim zapisima (na primjer za primitak ili izdavanje faktura). 

Korisno za **kontrole** ili **izvlačenje podataka** vezanih uz PDV.

Prikaz na ekranu je posebno fleksibilan, omogućujući brzo izvođenje podataka ili brzo ulazak u izmjenu svakog pokreta dvostrukim klikom.
:::


## Zaglavlje:
U gornjem dijelu nalaze se **filtri**:

**Knjige PDV-a:** za izvlačenje zapisa vezanih uz jedan ili više (selekcija putem padajućeg izbornika uz držanje tipke Ctrl) PDV odjeljaka.

**Šifra PDV-a:** za filtriranje zapisa izvršenih s određenom stopom ili PDV kodom (izuzeće, isključenje itd.)

**Od datuma obračuna PDV-a / Do datuma obračuna PDV-a:** za pretragu zapisa na temelju datuma obračuna PDV-a, tj. datum kada će kretanje imati učinak na obračun PDV-a.

:::tip[Napomena]
**Glavni filtar** odnosi se na razdoblje u kojem kretanje ima učinak na obračun PDV-a, a ne na datum kada je izvršeno računovodstveno knjiženje (kako je poznato, PDV obveza može biti promijenjena, obično retroaktivno).

Ako želite pretraživati i prema određenom datumu zapisa, uvijek možete intervenirati u filtru stupca u tablici rezultata.
:::

**Operacije:** filtrira podatke prema trima kategorijama transakcija (aktivne, pasivne i prijenos porezne obveze) koje se koriste za povezivanje PDV šifri s odgovarajućim retcima godišnje PDV prijave. [**Stope/Metode PDV-a**](/docs/configurations/tables/finance/vat-rates)

**Redak porezne prijave:** filtar koji treba povezati s prethodnim. Nakon što se odabere vrsta operacija, moguće je detaljno filtrirati koje PDV šifre se odnose na određeni redak u ispisu za Godišnju PDV prijavu. Pogledajte tablicu [**Stope/Metode PDV-a**](/docs/configurations/tables/finance/vat-rates)

**Vrsta PDV-a:** filtar koji se odnosi na vrstu PDV operacije. Podaci se mogu povezati s PDV zapisima prilikom izrade računovodstvenih zapisa, u odjeljku *podaci PDV-a za kretanje*, putem istoimenog polja. 

**Konto / Podkonto:** omogućuje filtriranje prema kontu koji je korišten u zapisu koji je generirao PDV zapis, na primjer, u slučaju nabave ili prodaje, obično se može filtrirati prema kontu troška ili prihoda.

**Konto zaglavlja:** omogućuje filtriranje prema kontu unesenom u zaglavlje zapisa koji je generirao PDV zapis, na primjer, u slučaju nabave ili prodaje, obično se može filtrirati prema dobavljaču ili kupcu.


## Tablica podataka:

Predstavlja fiksne kolone koje sadrže vrijednosti svakog pokreta, kao što su osnovica, porez, nepriznati iznos i ukupni iznosi.

Ostale kolone se pomiču i prikazuju sljedeće podatke:

- **Datum i broj zapisa** knjiženje koje je generiralo zapis PDV-a 
- **Broj dokumenta** na primjer broj izlaznog ili ulaznog računa
- **Predložak GLK** (šifra i opis) korišten za računovodstveni zapis koji je generirao PDV zapis
- **PDV odjeljak**  (šifra i opis) zapisa
- **PDV protokol** zapisa
- **Konto korišten u zaglavlju** zapisa (na primjer, kupac ili dobavljač)
- **Konto suprotne strane** korišten (na primjer, trošak ili prihod) u računovodstvenom zapisu koji je generirao PDV zapis  
- **PDV šifra** (stopa, izuzeće, isključenje itd.) korišten za zapis
- **Postotak (ne priznati)** prisutan na PDV retku zapisa u računovodstvenom zapisu, vrijednost može biti ručno postavljena, ali obično je unaprijed postavljena za korištenu PDV šifru izravno u tablici [**Stope PDV-a**](/docs/configurations/tables/finance/vat-rates)
- **Od / Do datuma obračuna**, odnosi se na obračun troška / prihoda i nije izravno povezan s PDV zapisom, iako je prisutan i definiran u PDV odjeljku računovodstvenog zapisa  
- **Obračun u gornjoj/donjoj vrijednosti**, podatak definiran u PDV odjeljku računovodstvenog zapisa i odnosi se na obračun zapisa za potrebe izračuna [**Plafon/limit**](/docs/finance-area/declarations/declarations/plafond/general-overview)
- **Obračun PDV-a**, podatak koji je već prisutan u filtriranim poljima zaglavlja obrasca i ovdje prikazan za svaki zapis  
- **Detaljan opis**, istoimeni podatak prisutan u PDV odjeljku računovodstvenog zapisa  
- **Datum obračuna**, odnosi se na obračun prisutan u zaglavlju računovodstvenog zapisa koji je generirao PDV zapis  
- **Datum dokumenta**, odnosi se na datum fakture prisutan u zaglavlju računovodstvenog zapisa koji je generirao PDV zapis  
- **Tip šifre**, odnosi se na polje Tip dokumenta prisutno u zaglavlju računovodstvenog zapisa koji je generirao PDV zapis  
- **Tip fiskalne operacije** (kod / opis) polje prisutno u PDV odjeljku računovodstvenog zapisa, korisno za povezivanje s vrstom nabave koja je potrebna za statističke informacije koje se dostavljaju u godišnjoj PDV prijavi. Polje je vidljivo u zapisnicima nakon aktivacije u parametrima računovodstvenih uzoraka.

## Ukupni iznosi u donjem dijelu obrasca:

- Osnovica / Porez / Ukupno **Odabrano**: odnosi se na selekciju aktiviranu klikom miša (jedan ili više redaka istovremeno ako se drži tipka Ctrl)  
- Osnovica / Porez / Ukupno: neovisno o selekciji mišem prikazuje podatke koji se odnose na sve retke vidljive u tablici rezultata (primjenjujući filtre iz zaglavlja i / ili one u zaglavlju stupaca tablice).  