---
title: Upravljanje taksenom markicom
sidebar_position: 2
---

Upravljanje ispravnim uključivanjem virtuelne taksene markice u XML datoteku elektronskog računa u Fluentis ERP-u odvija se automatski. Dovoljno je pravilno definisati i dodati trošak taksene markice na račun, kao što je opisano u nastavku.

- U tabeli **Troškovi** potrebno je definisati trošak tipa **Taksena markica** u iznosu od **2,00 EUR**.

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image01.png)

- U šifarniku kupaca potrebno je dodati trošak tipa **Taksena markica**, izborom šifre koja je prethodno definisana u tabeli **Vrste troškova**.

> **Napomena:** Ako se trošak taksene markice ne naplaćuje kupcu, u šifarniku kupca iznos troška taksene markice treba postaviti na **0**.

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image02.png)

- U tabeli **Preduzeće** potrebno je popuniti sledeća polja:
  - **Trošak taksene markice** = **2,00 EUR**
  - **Minimalni prag troškova** = **77,47 EUR**

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image03.png)

Nakon što su navedena podešavanja konfigurisana, u izlaznom računu automatski će biti predložen trošak taksene markice. Za svaki pojedinačni račun moguće je odlučiti da li će se virtuelna taksena markica naplatiti kupcu ili ne. Ako se taksena markica ne naplaćuje, dovoljno je postaviti iznos troška na **0**.

Prilikom generisanja XML datoteke, ukoliko se u sažetku računa nalazi trošak tipa **Taksena markica**, odgovarajući XML element za virtuelnu taksenu markicu automatski će biti uključen u izlaznu XML datoteku.