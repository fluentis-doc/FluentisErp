---
title: Pretraživanje podataka u obrascima samo za čitanje
sidebar_position: 2
---

Pretraživanje u obrascima samo za čitanje omogućava pronalaženje prethodno unetih zapisa kako bi mogli da se *pregledaju*, *izmene*, *izbrišu* itd., ako korisnik ima **potrebna prava** za te operacije. 

Neki obrasci ovog tipa sadrže dugme za unos ![](/img/neutral/common/new.png) koje, nakon što se pritisne, otvara formu za unos novih zapisa.  

U obrascima za pretraživanje moguće je prikazati: jedan zapis (filter prema broju dokumenta), više zapisa (filter prema datumu), zapise unete u određenoj godini (filter prema godini), zapise unete za određeni subjekt (filter prema kontu) itd.  

**Pretraživanje u obrascima samo za čitanje** deli se na tri dela:  

### 1. Traka za napredno pretraživanje  

Ova višenamenska traka omogućava pretraživanje po ključnim rečima unutar raznih polja prisutnih u dokumentima predmetnog obrasca.  

Kriterijum pretraživanja, u slučaju unosa više od jedne ključne reči, može biti:  

- OR ako su reči odvojene sa DVA razmaka (tražiće bilo koju od unete dve ili više reči u odgovarajućim poljima)  
- AND ako su reči odvojene JEDNIM razmakom (tražiće obe reči zajedno kao ključnu reč u odgovarajućim poljima)  
 
:::note NAPOMENA

Da biste saznali na kojim poljima dokumenta se vrši pretraga, možete pristupiti *Object navigatoru* (sa desne strane) i klikom desnim tasterom miša odabrati opciju *Detalji*. 

U prozoru koji se otvori ponovo odaberite objekat i klikom desnim tasterom miša odaberite *Izmeni standardni objekat*. Zatim odaberite karticu *Modeli pretraživanja* u mreži dole levo.  

:::

### 2. Područje filtera

Filteri su obično u uslovu 'AND', što znači da je moguće uneti više filtera istovremeno.   

Kliknite na strelice ![](/img/neutral/common/arrow.png) za otvaranje [proširenja](/docs/guide/common/glossary/glossary-intro#expander) i filtriranje prema podacima sadržanim u njima.   

Nakon unosa željenih filtera, pritisnite dugme **Traži** da biste dobili listu podataka.  

:::note NAPOMENA
Područje filtera može biti prikazano već otvoreno prilikom otvaranja obrasca ako je „zaključano“ pritiskom na dugme sa ikonom spajalice (*Pin*).
:::

![](/img/neutral/common/pin.png)

### 3. Tabela rezultata

Predstavlja listu podataka koji odgovaraju filterima unetim u područje filtera.

U mreži rezultata možete odabrati jedan ili više redova.  

*Karakteristike tabele* 

Prvi red tabele je filter (ikona na zaglavlju reda ima sliku levka ![](/img/neutral/common/filter.png)): kada otvorite obrazac, dovoljno je izvršiti pretraživanje da biste videli zapise prisutne u njemu i aktivirali unos (ako je predviđen) ili upravljanje mrežom.

Filter u tekstualnim poljima ne razlikuje velika i mala slova. Kada počnete da filtrirate zapise preko zaglavlja kolona, na dnu obrasca pojaviće se panel koji pokazuje kako će se filter primeniti: na desnom delu ove sekcije pojaviće se i dugme za zatvaranje/poništavanje filtera, kao i dugme ![](/img/neutral/common/pencil.png) za uređivanje filtera, gde možete dodati složenije filtere.  

*Detalji*: [Filtriranje i sortiranje zapisa u tabelama](/docs/guide/common/operations-with-data/filter-sort-and-other-operations-with-records-in-grids).