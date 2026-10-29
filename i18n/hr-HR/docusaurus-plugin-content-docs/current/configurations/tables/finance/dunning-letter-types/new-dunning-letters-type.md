---
title: Novi tipovi opomena
sidebar_position: 3
---

Polja ovog obrasca su:

**Šifra**: identifikacijska šifra vrste opomene.

**Opis**: opis vrste opomene.

**Vrsta kamate**: neobvezno polje koje povezuje vrstu opomene s vrstom kamatne stope koja se primjenjuje na zakašnjelo plaćanje, kako bi se omogućio izračun kamate na datum izdavanja opomene.

**Opomena za grupu stavki**: oznaka za upravljanje grupom stavki. Ako je aktivirana, omogućuje izdavanje jedne opomene za više stavki istodobno (standardni način rada). Ako oznaka nije aktivirana, za svaku računovodstvenu stavku izdaje se zasebna opomena.

Nakon spremanja vrste opomene moguće je gumbom **Novo** izraditi njezine pojedinačne razine.

**Šifra**: identifikacijska šifra opomene.

**Opis**: opis vrste opomene.

**Prioritet**: redoslijed izdavanja opomena, od 1 do N razina.

**Opis vrste kreditnog limita**: povezivanje s vrstom kontrole kreditnog limita kupca nije podržano.

**Dani kašnjenja**: broj dana kašnjenja koji mora proteći prije slanja opomene za određenu stavku.

:::tip[Informacije]
U postupku [**Generiranje opomena**](/docs/finance-area/maturity-values/procedures/generation-of-dunning-letters/generation-of-dunning-letters-intro) moguće je koristiti i opomene s **negativnim brojem dana kašnjenja**. Negativni dani obično se postavljaju radi izrade obavijesti prije dospijeća.

Međutim, postupak [*Automatsko generiranje opomena*](/docs/finance-area/maturity-values/procedures/dunning-letters-automatic-issue) **NE** podržava negativne vrijednosti ovog parametra.
:::

**Dani**: broj dana koji se uzima u obzir za sljedeću opomenu te određuje računaju li se ti dani od datuma izrade opomene ili od datuma prethodne opomene.

**Od datuma prethodnog knjiženja**: referentni datum za sve razine nakon prve.

**Od datuma izrade**: referentni datum koji se obično koristi za prvu razinu.

:::danger POZOR
Vrijednosti polja **Dani kašnjenja** i **Dani**, osobito za opomene nakon prve, zbrajaju se. Stoga za drugu, treću i svaku sljedeću opomenu u pravilu nije potrebno unositi vrijednost u parametar *Dani kašnjenja*. Umjesto toga, dodatno proteklo vrijeme od datuma prve opomene može se definirati parametrom *Dani*.
:::

Nakon spremanja svake razine opomene moguće je unijeti tekstove na različitim jezicima. Prvi uneseni tekst koristit će se kao zadani ako u šifarniku kupca nije naveden jezik.

Tekstovi su podijeljeni u četiri odjeljka: predmet pisma, zaglavlje, završni dio i odjeljak s referencama (aktivan samo za opomene koje obuhvaćaju grupe stavki).

U odjeljak s referencama moguće je unijeti tekst koristeći kodove navedene na dnu obrasca. Primjerice: „Ref. (3) br. (4) od (5), (9) od (8) (10), s dospijećem na dan (6)”.

:::note[Postavke banke za uplatu]
Predložak za ispis opomena sadrži zadano polje u kojem se prikazuje banka na koju je potrebno izvršiti uplatu. Banku je moguće definirati u odgovarajućem odjeljku [**šifarnika tvrtke**](/docs/configurations/tables/general-settings/company#griglia-delle-divisioni-banca-dappoggio-di-default-e-logo).

Alternativno, podatke o banci na koju se plaća uvijek je moguće navesti u tekstu opomene, primjerice u završnom dijelu.
:::