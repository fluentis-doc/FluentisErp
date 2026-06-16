---
title: Pretraživanje i Novi konsolidovani budžet
sidebar_position: 5
---

## Pretraživanje

Opcija **Konsolidovani budžet** omogućava pretraživanje, upravljanje i štampu obračuna konsolidovanih budžeta radi analize trendova i odstupanja između planiranih i ostvarenih vrednosti. Moguće je kreirati nove zapise (pomoću dugmeta **Novi** na alatnoj traci ili opcijom **Novi konsolidovani budžet** u meniju) ili uređivati postojeće.

Odabirom opcije **Novi konsolidovani budžet** otvara se forma za unos ostvarenih vrednosti za pojedinačne podbudžete kako bi se analizirala **kretanja i odstupanja**.

## Kako dobiti analizu odstupanja na konsolidovanom budžetu

1. U padajućoj listi **Budžet** odabrati planski budžet koji se želi uporediti sa ostvarenim vrednostima.

2. U desnom delu zaglavlja forme odabrati podatke **na nivou realizacije**, koji mogu biti:

   - **Međugodišnje zatvaranje** koje je prethodno obrađeno i izabrano iz odgovarajuće liste.
   - **Podaci iz Controllinga**, odnosno iz controlling računovodstva, aktiviranjem odgovarajuće opcije i izborom **Područja**, **Dimenzije** i **perioda** (godina / mesec).

3. Sačuvati zaglavlje sa definisanim parametrima, a zatim redom odabrati pojedinačne podbudžete u gornjoj tabeli.

4. Pritisnuti dugme **Izračunaj konsolidovani budžet**, koje popunjava detaljne podatke u donjoj tabeli za svaki označeni podbudžet.

U donjoj tabeli, u zavisnosti od tipa podbudžeta, prikazuju se kolone sa ukupnim budžetskim vrednostima i ukupnim ostvarenim vrednostima (označenim kao **stvarno**) radi analize odstupanja.

:::note Napomena
Ako međugodišnje zatvaranje (ili definisani controlling period) traje, na primer, do 30.06., sistem će automatski sabrati i analizirati prvih šest meseci budžeta.

Forma ne prikazuje detaljno poređenje po pojedinačnim periodima, ali ti podaci postoje u pozadinskoj obradi (objekat *FSBudgetActualObjectValueByPeriod*) i mogu se koristiti za izradu kontrolnih tabli i prilagođenih izveštaja.
:::

## Štampa analize budžeta

Izveštaj **Analiza budžeta** prikazuje iste podatke o konsolidovanim budžetima kao i sama forma.

Pre pokretanja štampe dostupni su filteri koji odgovaraju prikazanim podacima:

- Tip budžeta
- Tip perioda
- Datum / Broj planskih vrednosti
- Datum / Broj ostvarenih vrednosti