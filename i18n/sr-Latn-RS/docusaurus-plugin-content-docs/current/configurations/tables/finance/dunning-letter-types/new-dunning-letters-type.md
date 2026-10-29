---
title: Novi tipovi opomena
sidebar_position: 3
---

Polja ovog obrasca su:

**Šifra**: identifikaciona šifra tipa opomene.

**Opis**: opis tipa opomene.

**Tip kamate**: opciono polje koje povezuje tip opomene sa tipom kamatne stope koja se primenjuje na zakašnjela plaćanja, kako bi se omogućio obračun kamate na datum izdavanja opomene.

**Opomena za grupu stavki**: oznaka za upravljanje grupom stavki. Ako je aktivirana, omogućava izdavanje jedne opomene za više stavki istovremeno (standardni način rada). Ako oznaka nije aktivirana, za svaku računovodstvenu stavku izdaje se zasebna opomena.

Nakon čuvanja tipa opomene moguće je klikom na dugme **Novo** kreirati pojedinačne nivoe opomene.

**Šifra**: identifikaciona šifra nivoa opomene.

**Opis**: opis nivoa opomene.

**Prioritet**: redosled izdavanja opomena, od nivoa 1 do nivoa N.

**Opis tipa kreditnog limita**: povezivanje sa tipom kontrole kreditnog limita kupca nije podržano.

**Dani kašnjenja**: broj dana kašnjenja koji mora da protekne pre slanja opomene za određenu stavku.

:::tip[Informacije]
U postupku [**Generisanje opomena**](/docs/finance-area/maturity-values/procedures/generation-of-dunning-letters/generation-of-dunning-letters-intro) moguće je koristiti i opomene sa **negativnim brojem dana kašnjenja**. Negativni broj dana obično se postavlja radi izrade obaveštenja pre dospeća.

Međutim, postupak [*Automatsko generisanje opomena*](/docs/finance-area/maturity-values/procedures/dunning-letters-automatic-issue) **NE** podržava negativne vrednosti ovog parametra.
:::

**Dani**: broj dana koji se uzima u obzir za sledeću opomenu i određuje da li se ti dani računaju od datuma kreiranja opomene ili od datuma prethodne opomene.

**Od datuma prethodnog knjiženja**: referentni datum za sve nivoe nakon prvog.

**Od datuma kreiranja**: referentni datum koji se obično koristi za prvi nivo.

:::danger PAŽNJA
Vrednosti polja **Dani kašnjenja** i **Dani**, naročito za opomene nakon prve, sabiraju se. Zato za drugu, treću i svaku narednu opomenu po pravilu nije potrebno unositi vrednost u parametar *Dani kašnjenja*. Umesto toga, dodatni period od datuma prve opomene može se definisati parametrom *Dani*.
:::

Nakon čuvanja svakog nivoa opomene moguće je uneti tekstove na različitim jezicima. Prvi uneti tekst koristiće se kao podrazumevani ako u šifarniku kupca nije naveden jezik.

Tekstovi su podeljeni u četiri odeljka: predmet pisma, zaglavlje, završni deo i odeljak sa referencama (aktivan samo za opomene koje obuhvataju grupe stavki).

U odeljak sa referencama moguće je uneti tekst koristeći kodove navedene na dnu obrasca. Na primer: „Ref. (3) br. (4) od (5), (9) od (8) (10), sa dospećem na dan (6)”.

:::note[Postavke banke za uplatu]
Šablon za štampanje opomena sadrži podrazumevano polje u kojem se prikazuje banka na koju je potrebno izvršiti uplatu. Banku je moguće definisati u odgovarajućem odeljku [**šifarnika preduzeća**](/docs/configurations/tables/general-settings/company#griglia-delle-divisioni-banca-dappoggio-di-default-e-logo).

Alternativno, podatke o banci na koju se vrši uplata uvek je moguće navesti u tekstu opomene, na primer u završnom delu.
:::