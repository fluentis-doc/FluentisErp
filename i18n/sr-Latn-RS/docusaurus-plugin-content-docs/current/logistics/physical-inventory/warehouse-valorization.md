---
title: Valorizacija skladišta
description: Postupak zatvaranja, vrednovanja i računovodstvenog usklađivanja skladišta u sistemu Fluentis ERP.
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
**Valorizacija skladišta** u sistemu Fluentis ključna je funkcionalnost za upravljanje zalihama i utvrđivanje vrednosti uskladištene robe. Postupak omogućava zatvaranje skladišta na određeni datum, evidentiranje preostalih zaliha i usklađivanje logističkih podataka sa računovodstvenim podacima, čime se osigurava precizno upravljanje resursima i povezanim troškovima.

Postupak vrednovanja omogućava konfigurisanje različitih parametara, kao što je skladišni predložak za kretanje preostalih zaliha, i pruža mogućnost odabira odgovarajućih kriterijuma vrednovanja, poput poslednjeg ili prosečnog troška. Na taj način moguće je uzeti u obzir skladišna kretanja sprovedena tokom godine za svako skladište i dobiti detaljan i ažuran pregled vrednosti zaliha.

Osim zatvaranja skladišta, postupak automatski kreira i knjiženje početnog stanja za sledeći dan, čime se osigurava kontinuitet logističkih operacija. Korisnici takođe mogu pratiti sprovedena zatvaranja putem istorije u kojoj se prikazuju podaci o troškovima i vrednovanim količinama, što olakšava analize i donošenje strateških odluka usmerenih na poboljšanje uspešnosti preduzeća.
:::

## Postupak zatvaranja

Postupak omogućava zatvaranje skladišta na datum koji korisnik unese u polje **Datum zatvaranja**.  
Podrazumevano se predlaže današnji datum.

Automatski se kreira kretanje početnog stanja sa svim preostalim zalihama, sa datumom **Datum zatvaranja + 1 dan**, pri čemu se koristi predložak iz tabele [Skladišni predlošci](/docs/configurations/tables/logistics/warehouse-templates) sa aktivnom oznakom **Preostale zalihe**.

### Posebni gumbi

- **Zatvaranje**: omogućava pokretanje postupka zatvaranja koji sprovodi niz kontrola usklađenosti skladišnih podataka i prijavljuje eventualne greške koje operater mora ručno ispraviti pre ponovnog pokretanja postupka. Ako nema grešaka, postupak će sprovesti zatvaranje skladišta na **Datum zatvaranja** i kreirati početno stanje sledećeg dana sa preostalim zalihama.

- **Kreiraj valorizaciju**: koristi se u stranim lokalizacijama (npr. Rumunija, Hrvatska) za ponovni obračun vrednosti skladišnih kretanja i njihovo usklađivanje sa računovodstvom.

- **Povrati zatvaranje**: omogućava poništavanje poslednjeg sprovedenog zatvaranja.

- **Usklađivanje sa knjigovodstvenim podacima**: koristi se u stranim lokalizacijama, kao što su Rumunija i Hrvatska, u kojima se skladišna kretanja moraju knjižiti i u računovodstvu (pogledajte dokumentaciju u nastavku).

:::important Preporuka
Zatvaranje skladišta preporučuje se naročito kada postoji veliki broj kretanja jer omogućava zadržavanje kretanja u arhivi radi pregleda, dok se istovremeno ubrzavaju obračuni zalihe, raspoloživosti i troškova, budući da obračuni počinju od dana nakon poslednjeg sprovedenog zatvaranja.
:::

<u>Sledeći postupci specifični su za strane lokalizacije, kao što su Rumunija i Hrvatska.</u>

## Kreiraj vrednovanje

Postupak **Kreiraj valorizaciju** izračunava cene i menja vrednosti skladišnih kretanja.  
Koristi se kada su dokumenti nepotpuni, nedovršeni ili neusaglašeni zbog razloga kao što su:

- nedovoljni podaci (nedostajuće cene ili količine),
- greške dobavljača ili korisnika,
- kašnjenja u dostavi dokumenata,
- naknadne izmene postojećih dokumenata.

Pokretanjem ovog postupka aplikacija ponovo izračunava nove vrednosti artikala prema FIFO metodi i direktno ih upisuje u postojeći dokument.      
Dakle, postupak menja vrednosti u postojećim dokumentima i ne kreira nove dokumente kojima bi se vrednost smanjivala ili povećavala. Posledično, postupak je **nepovratan** i nije moguće vratiti podatke na stanje pre njegovog pokretanja.      
Ova se funkcionalnost prvenstveno primenjuje na period za koji se sprovodi valorizacija.      
Ponovni obračun prema FIFO metodi i izmena vrednosti u dokumentima počinju od datuma zatvaranja skladišta.

Obrada se primenjuje na vrednovani period, počevši od datuma zatvaranja skladišta.

*Primer*:  
Ako je početni datum 1. 10. 2023, a današnji datum je, na primer, 28. 3. 2024.       
Pokretanjem postupka **Kreiraj valorizaciju** vrednosti u skladišnim dokumentima izmenile bi se od 1. 10. 2023. do današnjeg datuma. Budući da je 2023. godina završena i verovatno je već finansijski zatvorena, izmenile bi se vrednosti u skladišnim dokumentima od 1. 10. 2023. do 31. 12. 2023, što bi značajno uticalo na već zaključene izveštaje za 2023. godinu.

:::danger Pažnja  
Pažljivo proverite vrednosti u [Početnim parametrima skladišta](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters), kako za godinu u kojoj se sprovodi zatvaranje tako i za tekuću godinu. Posebno proverite da li su parametri zatvaranja usklađeni sa parametrima obračuna zalihe.

Pogrešna konfiguracija u najboljem slučaju može prouzrokovati neuspešno vrednovanje, a u najgorem slučaju nedosledne skladišne podatke.

Ako oznake u te dve konfiguracije nisu usklađene, prikazaće se upozorenje koje ne blokira postupak i preporučuje njihovu proveru pre nastavka.
:::

## Usklađivanje sa knjigovodstvenim podacima

Postupak **Usklađivanje sa knjigovodstvenim podacima** sprovodi se nakon postupka **Kreiraj valorizaciju**.

Nakon završetka postupka **Kreiraj valorizaciju** i izmene vrednosti u skladišnim dokumentima potrebno je izmeniti i povezana računovodstvena knjiženja.        
U ovoj fazi postupak **Usklađivanje sa knjigovodstvenim podacima** usklađuje promene nastale vrednovanjem skladišta i menja vrednosti u računovodstvenim knjiženjima kako bi se osigurala finansijska usklađenost sa vrednostima u skladišnim dokumentima.

:::danger Pažnja
I ovaj postupak je nepovratan i menja iznose u postojećim dokumentima.
:::

## Sažetak i dodatne informacije

Vrednovanje skladišta omogućava upravljanje zatvaranjem, evidentiranjem preostalih zaliha i usklađivanjem logističkih i računovodstvenih vrednosti. Postupci namenjeni stranim lokalizacijama dodatno omogućavaju ponovni obračun vrednosti prema FIFO metodi i automatsko ažuriranje računovodstvenih knjiženja.

*Dodatne korisne informacije*:

- [Skladišni predlošci](/docs/configurations/tables/logistics/warehouse-templates)  
- [Početni parametri skladišta](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)  
- [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common)