---
title: Raspodela perioda
sidebar_position: 1
---

Obrazac se nalazi na putanji: **Tabele > Kontroling > Upravljačko računovodstvo > Raspodela perioda**

:::tip Napomena
Ova tabela namenjena je isključivo preduzećima koja koriste *Kontroling*.
:::

U raspodeli perioda možemo odrediti kako ćemo raspodeliti mesece za svako područje i svaku godinu. Dostupna su sledeća polja:

- **ŠIFRA**
- **OPIS**
- oznaka **PODRAZUMEVANO**

:::danger PAŽNJA
U ovu tabelu obavezno je uneti zapis sa ovom oznakom. U suprotnom će ga obrada perioda kontrolinga zahtevati.
:::

Ispod se nalazi lista zapisa za svaku unetu šifru, sa sledećim poljima:

- referentno [**PODRUČJE**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- **GODINA**
- **PERIOD**
- **VREDNOST**, odnosno težina pojedinačnog perioda u okviru godine

:::tip Primeri
Godinu možemo podeliti na dvanaest jednakih delova ili na jedanaest delova, uz odgovarajuće ponderisanje avgusta, decembra i januara. Umesto toga, za svaku godinu možemo dodeliti stvarni broj planiranih proizvodnih dana u pojedinačnom mesecu.
:::

*Raspodela perioda* povezuje se na dva mesta:

- U [*Kontnom planu*](/docs/erp-home/registers/accounting/analytic-chart-of-accounts): možemo odrediti da se analitički konto X, za koji je definisan raspon datuma perioda na koji se knjiženje odnosi, raspodeli prema određenoj raspodeli perioda, umesto prema tačnim danima zadatog raspona datuma. To je podrazumevana logika kada raspodela perioda nije definisana.
- U *Knjiženju fizičkih kretanja*, obavezno za *merne jedinice* definisane kao *Tok*, a ne kao *Stanje*.

:::tip Napomena
Obrazac sadrži dugme za dupliranje izabrane raspodele. Ova opcija je korisna na početku godine za pripremu nove liste koja će važiti za svaki novi obračunski period.
:::