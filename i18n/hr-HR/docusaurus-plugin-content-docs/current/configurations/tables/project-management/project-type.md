---
title: Vrste projekta
sidebar_position: 12
---

Tablica je dostupna putem **Tablice > Upravljanje projektima > Vrste projekta**

Tablica sadrži moguće tipove **Projekta**. Sastoji se od dijela za filtriranje u kojem se može pretraživati po opisu tipa te od dvije mreže (grid): u jednoj će biti navedene sve unesene vrste projekta (dovoljno je kliknuti na tipku ![](/img/neutral/common/search.png) Traži u traci izbornika za prikaz), a u drugoj se mogu unijeti unaprijed definirani troškovi/prihodi za svaki tip projekta koji će se koristiti za izračun SAL-a.

![](/img/it-it/configurations/tables/projects/proj-type.png)

U ovoj formi moguće je dodati nove vrste projekta unutar mreže klikom na tipku ![](/img/neutral/common/new.png) Novo; time će se dodati novi red u mrežu gdje se mogu definirati sljedeće informacije:

**Tip**: kod vrste projekta;

**Opis vrste projekta**: opis vrste projekta;

**Numeracija**: numeracija dodijeljena projektu, konfigurirana posebno;

**Hijerarhijska struktura**: ako je označeno, omogućuje projektima da imaju hijerarhijsku, višerazinsku strukturu;

**Tip naloga**: moguće je povezati tip naloga;

**Opis tipa naloga**: opis povezanog tipa naloga; koristi se kod kreiranja projekata iz naloga

**Tip fakture**: moguće je povezati tip fakture potreban za fakturiranje projekata;

**Opis tipa fakture**: opis povezane fakture;

**Predložak**: ako je označeno, tip projekta je predložak (template), ne može se pozivati u drugim dokumentima, koristi se samo kao model za kreiranje novih projekata;

**Omogućena sigurnost projekta**: ako je označeno, omogućuje u kartici Dozvole korisnika na zaglavlju projekta biranje korisnika koji imaju prava samo za čitanje ili za čitanje i pisanje projekta (ostali korisnici neće imati pristup); ako nije označeno, svi korisnici mogu mijenjati projekt;

**Tip zahtjeva za nabavku**: moguće je povezati tip zahtjeva za nabavku; time će se zahtjevi za nabavku moći generirati direktno iz projekta.

U mreži ispod nalaze se i neki flagovi koji označavaju koje će se kartice prikazivati za određeni tip projekta:

**Aktivnosti**: kartica s glavnim i obaveznim podacima za projektni redak, kao što su artikl, količina, cijena i sažetak troškova;

**Planiranje usluge**: tab vezan uz planirane datume početka/kraja, % napretka, tipove intervencija i moguće veze s drugim WBS-ovima;

**Resursi: kartica za planiranje resursa;

**Materijali: kartica s popisom materijala i pripadajućim troškovima;

**Faze**:

**Podaci: kartica s općim informacijama vezanim uz kodove za izračun SAL projekta, referencama na tikete, proizvodne naloge, CRM kontakte;

**Napredak**: 

**Agenti**: kartica za unos agenata povezanih s projektom;

**Fakturiranje**: kartica za popunjavanje plana obroka fakturiranja po projektnom retku;

**Dodatni podaci**: kartica za upravljanje dodatnim podacima;

**Priloženi dokumenti**: kartica za upravljanje prilozima;

**Gantt**: opća kartica koja prikazuje Ganttov dijagram projekta;

**Avansna faktura**: kartica za upravljanje avansnim fakturama vezanim uz projekte.

**Obavezni prihod**: ako je projektni redak fakturabilan i označen kao obavezan prihod, spremanje će biti onemogućeno.

**Automatski preračun datuma početka i kraja**: ako je omogućeno, automatski se mijenjaju datumi početka i kraja planiranja u WBS retcima projekta. Datumi se ažuriraju ovisno o količini retka ako jedinica mjere (JM) odgovara postavljenoj JM dana u projektnim parametrima ili prilikom unosa novih resursa u karticu resursa projektnog retka.

U donjoj mreži moguće je definirati vrednovanje SAL-a u okviru stanja napretka radova. Za svaki projekt moguće je navesti niz kodova koji predstavljaju dokumente uključene u izračun stanja napretka radova. Ti će kodovi kasnije biti ponuđeni u pojedinačnim projektnim redcima.

Nakon odabira retka u prvoj mreži, polja za popunjavanje u drugoj su:

**Tip porijekla troška/prihoda**: sadrži popis kodova troškova/prihoda predviđenih za SAL izračun za projekte tog tipa;

**Opis: opis troškova/prihoda**;

**Tip**: označava je li riječ o trošku ili prihodu.

**Izraz filtra**: ako polje nije popunjeno, uzimaju se svi dokumenti predviđeni za taj kod. Ako želite isključiti određene dokumente (npr. po tipu, numeraciji itd.), možete konfigurirati izraz za filtriranje. 

![](/img/it-it/configurations/tables/projects/revenue.png)
