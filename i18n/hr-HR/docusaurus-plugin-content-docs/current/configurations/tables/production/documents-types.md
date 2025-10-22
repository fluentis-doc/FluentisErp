---
title: Vrste dokumenata
sidebar_position: 13
---

:::important Čemu služi
Tablica Vrste dokumenata, omogućuje kreiranje i međusobno povezivanje svih dokumenata koji se koriste unutar područja [Planiranja](/docs/planning/planning-intro/) i [Proizvodnje](/docs/production/production-intro/).
:::

Ova tablica omogućuje unos novih zapisa ili pretraživanje postojećih radi njihovog pregleda, izmjene ili brisanja.

**Pretraživanje vrsta dokumenata**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon što postavite sve željene filtre, dovoljno je kliknuti na tipku **Traži** kako bi se rezultati prikazali u mreži rezultata.

**Unos vrsta dokumenata**

Za unos novih šifri potrebno je kliknuti na prvi prazan redak u mreži ili pritisnuti tipku **Novi**.

Za novi zapis obavezno je unijeti barem sljedeća polja: alfanumerički **Kod** vrste, njezin **Opis**, odgovarajući **Standardni kod** te **Vrstu numeriranja**. Standardni kod definira tip dokumenta koji se kreira, a to može biti: komisija proizvodnje, kupčev narudžbeni nalog, nalog za doradu ili proizvodni nalog, kao i planirana narudžba za nabavu, doradu ili proizvodnju.

Moguće je imati više dokumenata s istim standardnim kodom; u tom slučaju pomoću flag-a Zadano određuje se koji će dokument sustav koristiti kao glavni/podrazumijevani.     

Nakon unosa, za svaki dokument potrebno je definirati odgovarajuće Vrste generiranih dokumenata.        
Primjerice, ako se radi o dokumentu tipa komisija proizvodnje, korisnik treba unijeti dokumente koji iz nje proizlaze: *planirane narudžbe za nabavu, proizvodnju i doradu.*    
Zauzvrat, *planirane narudžbe za nabavu* generiraju odgovarajuću vrstu *zahtjeva za nabavu*, dok *planirane narudžbe za doradu* kreiraju vrstu *naloga za doradu*. Na kraju, *planirane narudžbe za proizvodnju* generiraju vrstu *naloga za proizvodnju* te potencijalno i *nalog za doradu* za vanjske faze unutar radnog ciklusa.

Aktivacijom flag-a **Održavanje**, moguće je označiti da će se dokument koristiti za aktivnosti održavanja, dok će, ako je deaktiviran, biti korišten u kontekstu proizvodnje.

Za **Vrste dokumenata** sa standardnim kodom *CP* (Komisije proizvodnje), moguće je unijeti i **Vrstu obračuna troškova komisije**koja će se automatski predložiti prilikom svake obrade troškova za tu komisiju.

Za sve što nije detaljno opisano u ovom dokumentu vezano za uobičajeno funkcioniranje formi, pogledati sljedeći link [Funkcionalnosti, tipke i zajednička polja](/docs/guide/common).