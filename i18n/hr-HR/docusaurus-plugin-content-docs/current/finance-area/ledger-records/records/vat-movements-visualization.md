---
title: Prikazivanje poreznih kretanja
sidebar_position: 5
---
:::tip[Čemu služi]
Obrazac omogućuje **prikazivanje kretanja** izvršenih na **PDV registrima** zajedno s računovodstvenim zapisima (na primjer za primitak ili izdavanje faktura). 

Korisno za **kontrole** ili **izvlačenje podataka** vezanih uz PDV.

Prikaz na ekranu je posebno fleksibilan, omogućujući brzo izvođenje podataka ili brzo ulazak u izmjenu svakog pokreta dvostrukim klikom.
:::


## Zaglavlje:
U gornjem dijelu nalaze se **filtri**:

**PDV registri:** za izvlačenje kretanja vezanih uz jedan ili više (selekcija putem padajućeg izbornika uz držanje tipke Ctrl) PDV odjeljaka.

**PDV kod:**  za filtriranje kretanja izvršenih s određenom stopom ili PDV kodom (izuzeće, isključenje itd.)

**OD Datum obračuna PDV-a / DO Datum obračuna PDV-a:** za pretragu kretanja na temelju datuma obračuna PDV-a, tj. datum kada će kretanje imati učinak na obračun PDV-a.

:::tip[Napomena]
**Glavni filtar** odnosi se na razdoblje u kojem kretanje ima učinak na obračun PDV-a, a ne na datum kada je izvršeno računovodstveno knjiženje (kako je poznato, PDV obveza može biti promijenjena, obično retroaktivno).

Ako želite pretraživati i prema određenom datumu računovodstvenog zapisnika, uvijek možete intervenirati u filtru stupca u rezultatnoj tablici.
:::

**Operacije:** filtrira prema tri kategorije (aktivne, pasivne i reverse charge) koje se razmatraju za povezivanje PDV kodova i redaka ispisa za Godišnju PDV prijavu. Pogledajte tablicu [**Stope/Metode PDV-a**](/docs/configurations/tables/finance/vat-rates#tab-specifiche-per-dichiarazione)

**Redak porezne prijave:** filtar koji treba povezati s prethodnim. Nakon što se odabere vrsta operacija, moguće je detaljno filtrirati koji PDV kodovi se odnose na određeni redak u ispisu za Godišnju PDV prijavu. Pogledajte tablicu [**Stope/Metode PDV-a**](/docs/configurations/tables/finance/vat-rates#tab-specifiche-per-dichiarazione)

**Tip PDV-a:** filtar koji se odnosi na vrstu PDV operacije. Podaci se mogu povezati s PDV kretanjima prilikom izrade računovodstvenih zapisa, u odjeljku *podaci PDV-a za kretanje*, putem istoimenog polja. 

**Konto / Podkonto:** omogućuje filtriranje prema računu protivpartije koji je korišten u zapisniku koji je generirao PDV kretanja, na primjer, u slučaju kupovine ili prodaje, obično se može filtrirati prema računu troška ili prihoda.

**Konto u zaglavlju:** omogućuje filtriranje prema podračunu unesenom u zaglavlje zapisnika koji je generirao PDV kretanja, na primjer, u slučaju kupovine ili prodaje, obično se može filtrirati prema dobavljaču ili kupcu.


## Tablica podataka:

Predstavlja fiksne kolone koje sadrže vrijednosti svakog pokreta, kao što su osnovica, porez, neodbitni iznos i ukupni iznosi.

Ostale kolone se pomiču i prikazuju sljedeće podatke:

- **Datum i broj zapisnika** računovođa koji je generirao kretanje PDV-a 
- **Broj dokumenta** registrirano, na primjer broj računa za kupnju ili prodaju 
- **Računovodstveni predložak** (kod i opis) korišten za računovodstveni zapis koji je generirao PDV kretanje
- **PDV odjeljak**  (kod i opis) koji je pomaknut
- **PDV protokol** kretanja
- **Račun korišten u zaglavlju** zapisnika (na primjer, kupac ili dobavljač)
- **Račun protivpartije** korišten (na primjer, trošak ili prihod) u računovodstvenom zapisu koji je generirao PDV kretanje  
- **PDV kod** (stopa, izuzeće, isključenje itd.) korišten za kretanje
- **Postotak nedopustivosti** prisutan na PDV retku kretanja u računovodstvenom zapisu, vrijednost može biti ručno postavljena, ali obično je unaprijed postavljena za korišteni PDV kod izravno u tablici [**Stope/Metode PDV-a**](/docs/configurations/tables/finance/vat-rates)
- **Od / Do Datum obračuna**, odnosi se na ekonomsku kompetenciju troška / prihoda i nije izravno povezan s PDV kretanjem, iako je prisutan i definiran u PDV odjeljku računovodstvenog zapisa  
- **Obračun u gornjoj/donjoj vrijednosti**, podatak definiran u PDV odjeljku računovodstvenog zapisa i odnosi se na kompetenciju kretanja za potrebe izračuna [**Plafon za redovite izvoznike**](/docs/finance-area/declarations/declarations/plafond/general-overview)
- **Kompetencija PDV-a**, podatak koji je već prisutan u filtriranim poljima zaglavlja obrasca i ovdje prikazan za svako kretanje  
- **Detaljan opis**, istoimeni podatak prisutan u PDV odjeljku računovodstvenog zapisa  
- **Datum kompetencije**, odnosi se na računovodstvenu kompetenciju prisutnu u zaglavlju računovodstvenog zapisa koji je generirao PDV kretanje  
- **Datum dokumenta**, odnosi se na datum fakture prisutan u zaglavlju računovodstvenog zapisa koji je generirao PDV kretanje  
- **Tip kod**, odnosi se na polje Tip dokumenta prisutno u zaglavlju računovodstvenog zapisa koji je generirao PDV kretanje  
- **Tip porezne operacije** (kod / opis) polje prisutno u PDV odjeljku računovodstvenog zapisa, korisno za povezivanje s tipom kupovine koja je potrebna za statističke informacije koje se dostavljaju u godišnjoj PDV prijavi. Polje je vidljivo u zapisnicima nakon aktivacije u parametrima računovodstvenih uzoraka.

## Ukupni iznosi u donjem dijelu obrasca:

- Osnovica / Porez / Ukupno **Odabrano**: odnosi se na selekciju aktiviranu klikom miša (jedan ili više redaka istovremeno ako se drži tipka Ctrl)  
- Osnovica / Porez / Ukupno: neovisno o selekciji mišem prikazuje podatke koji se odnose na sve redke vidljive u tablici rezultata (primjenjujući filtre iz zaglavlja i / ili one u zaglavlju stupaca tablice).  