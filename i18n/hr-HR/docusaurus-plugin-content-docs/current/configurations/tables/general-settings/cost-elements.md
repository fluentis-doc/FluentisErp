---
title: Elementi troška
sidebar_position: 44
---

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih radi prikaza, izmjene ili brisanja.

### Pretraživanje stavki troškova

Forma se sastoji od područja za filtriranje i područja za prikaz rezultata. Nakon što postavite sve željene filtre, potrebno je kliknuti na tipku **Traži** kako biste prikazali rezultate u mreži rezultata.

### Unos stavki troškova

Za unos novih kodova potrebno je kliknuti na prvu praznu red u mreži ili pritisnuti tipku **Novo**.

#### Specifična polja
    
**Šifra**: označava šifru stavke troška;    
**Opis**: označava opis stavke troška;     
**Vrsta troška**: označava tip stavke troška između *Ukupni izravni troškovi*, *Opći troškovi* i *Ostali troškovi*;      
**Primjeni na**: označava gdje će se ovaj trošak primijeniti:  
> *Trošak materijala*: trošak se primjenjuje samo na trošak stroja (primjenjivo samo na stavke s *Vrsta troška* jednako *Izravni troškovi*);    
> *Trošak stroja*: trošak se primjenjuje samo na trošak rada (primjenjivo samo na stavke s *Vrsta troška* jednako *Izravni troškovi*);     
> *Troškovi radne snage*: trošak se primjenjuje samo na trošak rada (primjenjivo samo na stavke s *Vrsta troška* jednako *Izravni troškovi*);;    
> *Radni trošak*: trošak se primjenjuje samo na trošak obrade (zbroj troškova stroja i rada) (primjenjivo samo na stavke s *Vrsta troška* jednako *Izravni troškovi*);     
> *Industrijski trošak*: trošak se primjenjuje samo na ukupni trošak materijala i trošak obrade (primjenjivo na stavke s *Vrsta troška* jednako *Izravni troškovi* ili *Opći troškovi*);    
> *Opći trošak*: trošak se primjenjuje na ukupne opće troškove (primjenjivo samo na stavke s *Vrsta troška* jednako *Opći troškovi*);;     
> *Altri costi*: trošak se primjenjuje na ukupne ostale troškove (primjenjivo samo na stavke s *Vrsta troška* jednako *Ostali troškovi*);   

:::note Nota
Stavke troškova kreirane s **Primjena na** jednako *Trošak materijala*, *Trošak stroja*, *Trošak rada*, *Trošak obrade* ili *Industrijski trošak* bit će uključene u odjeljak **Izravni troškovi**,dok će stavke troškova kreirane s **Primjena na** jednako *Opći trošak* ili *Ostali troškovi* biti uključene, redom, u odjeljak **Opći troškovi** ili **Ostali troškovi** unutar [Valorizacije](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).
:::

**Postotak/Vrijednost**: označava je li stavka troška tipa *postotak*, *fiksna vrijednost* ili *varijabilna vrijednost* (aktivno samo za stavke troškova s **Primjena na** = *Ostali troškovi*). Konkretno, *postotak* se računa na ukupni trošak naveden u polju **Primjena na**; il *fiksna vrijednost* se dodaje ukupnom trošku navedenom u polju **Primjena na**, dok se *varijabilna vrijednost*množi s količinom prisutnom u upravljanju *Ostalim troškovima* u obračunu troškova.               
**Vrijednost**: označava zadanu vrijednost stavke troška koja će se automatski predložiti.     

Za sve što nije detaljno objašnjeno u ovom dokumentu vezano uz zajedničko funkcioniranje formi, pogledajte sljedeću poveznicu: [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).