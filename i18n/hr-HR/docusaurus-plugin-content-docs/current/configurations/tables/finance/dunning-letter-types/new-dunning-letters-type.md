---
title: Novi tip opomena
sidebar_position: 3
---

Polja ove forme su:

**Šifra**: identifikacijska šifra tipa opomene.

**Opis**: opis tipa opomene.

**Vrsta kamata**: opcionalno, povezuje se s vrstom kamatne stope koja se primjenjuje na kašnjenje u plaćanju, kako bi se izračun izvršio na datum izdavanja opomene.

**Opomena po grupi stavki:**: oznaka za upravljanje grupom stavki; posebno, omogućuje slanje jednog pisma opomene za grupu stavki istovremeno (standardno upravljanje), dok bez oznake svaka stavka ima zasebnu opomenu.

Nakon što se tip opomene spremi, moguće je kreirati različite razine klikom na gumb Novi.

**Šifra**: identifikacijska šifra opomene.

**Opis**: opis tipa opomene.

**Prioritet**: redoslijed kreiranja od 1 do N razina.

**Opis vrste limita**: veza na tip kontrole kredita za klijenta nije aktivna.

**Dani kašnjenja**: broj dana kašnjenja koji mora proteći prije nego se opomena pošalje.

:::tip[Informacija]
U proceduri [***Generiranja opomena***](/docs/finance-area/maturity-values/procedures/generation-of-dunning-letters/generation-of-dunning-letters-intro), moguće je upravljati i opomenama s negativnim brojem **Dana kašnjenja**. Obično se negativni dani koriste za slanje upozorenja prije dospijeća. Procedura [*Automatsko generiranje opomena*](/docs/finance-area/maturity-values/procedures/dunning-letters-automatic-issue) **NE** podržava negativni parametar.
:::

**Dani**: broj dana do dospijeća opomene i da li se ti dani računaju od datuma kreiranja ili od datuma dospijeća prethodne opomene.

**Od datuma prethodnog dokumenta**: referentni datum za razine nakon prve.

**Od datuma kreiranja**: referentni datum koji se obično koristi za prvu razinu.

:::danger PAŽNJA
Vrijednosti polja "**dani kašnjenja**" i "**dani**", posebno za opomene nakon prve, se zbrajaju. Stoga, kod druge, treće opomene itd., obično nije potrebno unositi dodatnu vrijednost u parametar *dani kašnjenja*, već se može koristiti dodatno proteklo vrijeme od datuma prve opomene preko parametra *dani*.
:::

Za svaki broj opomene moguće je, nakon spremanja, unijeti različite tekstove na jeziku: prvi uneseni tekst bit će zadani kada klijentski zapis nema dodijeljen jezik.

Tekstovi su podijeljeni u 4 sekcije: predmet pisma, zaglavlje, zaključak i sekcija referenci (aktivna samo za opomene na grupu stavki). U sekciji referenci posebno je moguće unijeti tekst koristeći kodove predviđene na dnu forme; npr. “Ref. (3) br. (4) od (5), (9) od (8) (10) s dospijećem na (6)”.






