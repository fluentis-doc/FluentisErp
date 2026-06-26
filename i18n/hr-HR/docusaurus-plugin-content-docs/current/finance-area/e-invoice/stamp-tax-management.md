---
title: Upravljanje biljezima
sidebar_position: 2
---

Upravljanje ispravnim uključivanjem virtualnog biljega u XML datoteku elektroničkog računa u Fluentis ERP-u odvija se automatski. Dovoljno je pravilno definirati i dodati trošak biljega na račun, kako je opisano u nastavku.

- U tablici **Troškovi** potrebno je definirati trošak vrste **Biljeg** s iznosom od **2,00 EUR**.

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image01.png)

- U anagrafici kupca potrebno je dodati trošak vrste **Biljeg** odabirom šifre koja je prethodno definirana u tablici **Vrste troškova**.

> **Napomena:** Ako se trošak biljega ne želi zaračunati kupcu, u anagrafici kupca iznos troška biljega treba postaviti na **0**.

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image02.png)

- U tablici **Poduzeća** potrebno je popuniti sljedeća polja:
  - **Trošak biljega** = **2,00 EUR**
  - **Minimalni prag troškova** = **77,47 EUR**

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image03.png)

Nakon što su navedene postavke konfigurirane, u prodajnom računu automatski će se predložiti trošak biljega. Za svaki pojedini račun moguće je odlučiti hoće li se virtualni biljeg zaračunati kupcu ili ne. Ako se biljeg ne želi zaračunati, dovoljno je postaviti iznos troška na **0**.

Prilikom generiranja XML datoteke, ako se u sažetku računa nalazi trošak vrste **Biljeg**, odgovarajući XML element za virtualni biljeg automatski će biti uključen u izlaznu datoteku.