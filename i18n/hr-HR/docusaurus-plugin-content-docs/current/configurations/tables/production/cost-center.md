---
title: Troškovni centri
sidebar_position: 6
---
  
Ovo je tablica u koju se unose tarife koje se povezuju sa strojem i grupom radne snage kako bi se moglo vrednovati faze obrade unutar različitih radnih centara.  

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih radi pregleda, izmjene ili brisanja.

**Pretraživanje troškovnih centara**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon što postavite sve željene filtre, dovoljno je kliknuti na tipku **Traži** kako bi se rezultati prikazali u mreži rezultata.

**Unos troškovnih centara**

Za unos novih šifri potrebno je kliknuti na prvi prazan redak u mreži ili pritisnuti tipku **Novi** nakon čega je moguće odabrati troškovni centar iz padajućeg izbornika. Ako želite unijeti novi troškovni centar, potrebno ga je prethodno dodati u tablicu [Poslovni centri](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers/) te aktivirati flag **Vidljiv u proizvodnji**. U suprotnom neće biti prikazan u izborniku za unos **Troškovnih centara**. 

Za novi zapis obavezno je unijeti barem sljedeća polja: **Šifra** troškovnog centra i **Verzija**, budući da je moguće definirati različite troškove za različite verzije istog troškovnog centra.           
Nakon toga moguće je dodijeliti tom centru određeni **Trošak**, koji će se koristiti za izračun troškova. Ako se ne specificira nijedna **JM**, unesena tarifa će se smatrati satnicom (tarifa po satu).

Troškovni centri mogu se povezati sa sljedećim resursima:  
- [Stroj](/docs/configurations/tables/production/machines)
- [Grupa radne snage](/docs/configurations/tables/production/labour-group)
- [Pojedini operater unutar grupe radne snage](/docs/configurations/tables/production/labour-group)

Za sve što nije detaljno opisano u ovom dokumentu vezano za uobičajeno funkcioniranje formi, pogledati sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).