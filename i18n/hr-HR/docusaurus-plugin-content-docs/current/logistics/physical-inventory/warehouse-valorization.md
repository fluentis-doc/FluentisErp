---
title: Valorizacija skladišta
description: Postupak zatvaranja, vrednovanja i računovodstvenog usklađivanja skladišta u sustavu Fluentis ERP.
keywords:
  - valorizacija skladišta
  - zatvaranje skladišta
  - preostale zalihe
  - FIFO
  - računovodstveno usklađivanje
sidebar_position: 6
schema: TechArticle
tags:
  - skladište
  - valorizacija
  - logistika
  - računovodstvo
last_update:
  author: Fluentis Documentation Team
---

# Valorizacija skladišta

## Uvod

:::important
**Valorizacija skladišta** u sustavu Fluentis ključna je funkcionalnost za upravljanje zalihama i utvrđivanje vrijednosti uskladištene robe. Postupak omogućuje zatvaranje skladišta na određeni datum, evidentiranje preostalih zaliha i usklađivanje logističkih podataka s računovodstvenima, čime se osigurava precizno upravljanje resursima i povezanim troškovima.

Postupak vrednovanja omogućuje konfiguriranje različitih parametara, kao što je skladišni predložak za kretanje preostalih zaliha, te pruža mogućnost odabira odgovarajućih kriterija vrednovanja, poput posljednjeg ili prosječnog troška. Na taj je način moguće uzeti u obzir skladišna kretanja provedena tijekom godine za svako skladište te dobiti detaljan i ažuran pregled vrijednosti zaliha.

Osim zatvaranja skladišta, postupak automatski kreira i knjiženje početnog stanja za sljedeći dan, čime se osigurava kontinuitet logističkih operacija. Korisnici također mogu pratiti provedena zatvaranja putem povijesti u kojoj se prikazuju podaci o troškovima i vrednovanim količinama, što olakšava analize i donošenje strateških odluka usmjerenih na poboljšanje uspješnosti poduzeća.
:::

## Postupak zatvaranja

Postupak omogućuje zatvaranje skladišta na datum koji korisnik unese u polje **Datum zatvaranja**.  
Zadano se predlaže današnji datum.

Automatski se kreira kretanje početnog stanja sa svim preostalim zalihama, s datumom **Datum zatvaranja + 1 dan**, pri čemu se koristi predložak iz tablice [Skladišni predlošci](/docs/configurations/tables/logistics/warehouse-templates) s aktivnom oznakom **Preostale zalihe**.

### Posebni gumbi

- **Zatvaranje**: omogućuje pokretanje postupka zatvaranja koji provodi niz kontrola usklađenosti skladišnih podataka i prijavljuje eventualne pogreške koje operater mora ručno ispraviti prije ponovnog pokretanja postupka. Ako nema pogrešaka, postupak će provesti zatvaranje skladišta na **Datum zatvaranja** i kreirati početno stanje sljedećeg dana s preostalim zalihama.

- **Kreiraj valorizaciju**: koristi se u stranim lokalizacijama (npr. Rumunjska, Hrvatska) za ponovni izračun vrijednosti skladišnih kretanja i njihovo usklađivanje s računovodstvom.

- **Povrati zatvaranje**: omogućuje poništavanje posljednjeg provedenog zatvaranja.

- **Usklađivanje s knjigovodstvenim podacima**: koristi se u stranim lokalizacijama, kao što su Rumunjska i Hrvatska, u kojima se skladišna kretanja moraju knjižiti i u računovodstvu (pogledajte dokumentaciju u nastavku).

:::important Preporuka
Zatvaranje skladišta preporučuje se osobito kada postoji velik broj kretanja jer omogućuje zadržavanje kretanja u arhivi radi pregleda, dok se istodobno ubrzavaju izračuni zalihe, raspoloživosti i troškova, budući da izračuni započinju od dana nakon posljednjeg provedenog zatvaranja.
:::

<u>Sljedeći postupci specifični su za strane lokalizacije, kao što su Rumunjska i Hrvatska.</u>

## Kreiraj vrednovanje

Postupak **Kreiraj valorizaciju** izračunava cijene i mijenja vrijednosti skladišnih kretanja.  
Koristi se kada su dokumenti nepotpuni, nedovršeni ili neusuglašeni zbog razloga kao što su:

- nedovoljni podaci (nedostajuće cijene ili količine),
- pogreške dobavljača ili korisnika,
- kašnjenja u dostavi dokumenata,
- naknadne izmjene postojećih dokumenata.

Pokretanjem ovog postupka aplikacija ponovno izračunava nove vrijednosti artikala prema FIFO metodi i izravno ih upisuje u postojeći dokument.      
Dakle, postupak mijenja vrijednosti u postojećim dokumentima i ne kreira nove dokumente kojima bi se vrijednost smanjivala ili povećavala. Posljedično, postupak je **nepovratan** i nije moguće vratiti podatke na stanje prije njegova pokretanja.      
Ova se funkcionalnost prvenstveno primjenjuje na razdoblje za koje se provodi valorizacija.      
Ponovni izračun prema FIFO metodi i izmjena vrijednosti u dokumentima započinju od datuma zatvaranja skladišta.

Obrada se primjenjuje na vrednovano razdoblje, počevši od datuma zatvaranja skladišta.

*Primjer*:  
Ako je početni datum 1. 10. 2023., a današnji je datum, primjerice, 28. 3. 2024.       
Pokretanjem postupka **Kreiraj valorizaciju** vrijednosti u skladišnim dokumentima izmijenile bi se od 1. 10. 2023. do današnjeg datuma. Budući da je 2023. godina završila i vjerojatno je već financijski zatvorena, izmijenile bi se vrijednosti u skladišnim dokumentima od 1. 10. 2023. do 31. 12. 2023., što bi značajno utjecalo na već zaključene izvještaje za 2023. godinu.

:::danger Pažnja  
Pažljivo provjerite vrijednosti u [Početnim parametrima skladišta](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters), kako za godinu u kojoj se provodi zatvaranje tako i za tekuću godinu. Posebno provjerite jesu li parametri zatvaranja usklađeni s parametrima izračuna zalihe.

Pogrešna konfiguracija u najboljem slučaju može uzrokovati neuspješno vrednovanje, a u najgorem slučaju nedosljedne skladišne podatke.

Ako oznake u tim dvjema konfiguracijama nisu usklađene, prikazat će se upozorenje koje ne blokira postupak i preporučuje njihovu provjeru prije nastavka.
:::

## Usklađivanje s knjigovodstvenim podacima

Postupak **Usklađivanje s knjigovodstvenim podacima** provodi se nakon postupka **Kreiraj valorizaciju**.

Nakon dovršetka postupka **Kreiraj valorizaciju** i izmjene vrijednosti u skladišnim dokumentima potrebno je izmijeniti i povezana računovodstvena knjiženja.        
U ovoj fazi postupak **Usklađivanje s knjigovodstvenim podacima** usklađuje promjene nastale vrednovanjem skladišta i mijenja vrijednosti u računovodstvenim knjiženjima kako bi se osigurala financijska usklađenost s vrijednostima u skladišnim dokumentima.

:::danger Pažnja
I ovaj je postupak nepovratan i mijenja iznose u postojećim dokumentima.
:::

## Sažetak i dodatne informacije

Vrednovanje skladišta omogućuje upravljanje zatvaranjem, evidentiranjem preostalih zaliha te usklađivanjem logističkih i računovodstvenih vrijednosti. Postupci namijenjeni stranim lokalizacijama dodatno omogućuju ponovni izračun vrijednosti prema FIFO metodi i automatsko ažuriranje računovodstvenih knjiženja.

*Dodatne korisne informacije*:

- [Skladišni predlošci](/docs/configurations/tables/logistics/warehouse-templates)  
- [Početni parametri skladišta](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)  
- [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common)