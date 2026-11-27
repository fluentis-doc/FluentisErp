---
sidebar_position: 1
title: Provizije
---

:::tip[Informacija]
Počevši od verzije 805, ovaj je obrazac premješten na ovu lokaciju za potrebe upravljanja provizijama agenata (administrativno područje).

Prethodno je već bio dostupan u modulu *Primatelji naknada*.
:::

## Uvod

Ovaj obrazac omogućuje pregled obračunatih i isplaćenih provizija agenata.

Odnosi se na upravljanje provizijama agenata putem administrativnog modula.

## Filtri u zaglavlju

U odjeljku zaglavlja nalaze se filtri za agenta i pojedine računovodstvene elemente jer se retci koji se odnose na provizije unose već prilikom knjiženja prodajnog računa na temelju kojeg su obračunate.

:::note Napomena
**Podsjećamo da od verzije 805 aktiviranje oznake za upravljanje provizijama unutar računovodstvenog predloška kojim se knjiži račun ima isključivo svrhu omogućavanja prikaza podataka na odgovarajućoj kartici Provizije unutar računovodstvenog knjiženja.**

**U svakom slučaju, podaci o provizijama u ovom obrascu izrađuju se automatski, neovisno o prethodno navedenoj oznaci.**
:::

Dodatni filtri su četiri oznake koje omogućuju pretraživanje provizija za isplatu, isplaćenih provizija ili obiju kategorija, kao i provizija koje još nisu dospjele za obračun ili su dospjele.

**NAPOMENA:** Točnije, statusi *OTVORENO* i *ZATVORENO* odnose se na to postoji li još nepodmireni iznos za naplatu ili je sve naplaćeno. Stoga za proviziju sa statusom *ZATVORENO* neće biti dodatnih kretanja.

## Tablica s detaljima

U tablici s detaljima retci odgovaraju provizijama obračunatima na računu, koje se unose prilikom knjiženja samog računa.

Od verzije 805 dostupne su i informacije o kupcu te godini i broju računa na temelju kojeg je zapis izrađen.

Ovisno o kriteriju dospijeća definiranom u šifarniku agenta (primjerice, nakon izvršene uplate), izrađivat će se retci za storno. Primjerice, u slučaju djelomičnog plaćanja ili plaćanja jedne od više otvorenih stavki, izradit će se odgovarajući redak u iznosu izvršene uplate. Za njihov pregled potrebno je proširiti detalje glavnog retka pomoću odgovarajućeg gumba **+** s lijeve strane retka.

U detaljima (koji se zatim prikazuju i u glavnom retku) nalazi se i oznaka koja se aktivira kada se provizija isplati agentu.

![](/img/it-it/finance-area/commissions/newcommissions1.png)

## Gumbi na vrpci izbornika

Od verzije 805 dodana su dva nova gumba za usklađivanje provizija s računima iz prodajnog područja, u slučaju da se provizije mijenjaju unutar prodajnih dokumenata **nakon** što su ti dokumenti već proknjiženi. (Naime, podaci o agentima mogu se uređivati i nakon izrade elektroničkog računa i knjiženja dokumenta.)

**Izrada provizija iz prodajnih računa**: otvara se obrazac za pretraživanje računa, u kojem je moguće odabrati dokumente koje treba ponovno obraditi radi izrade eventualno nedostajućih provizija. Ako je račun proknjižen, Fluentis će izraditi provizije i pripadajuće detalje koji nedostaju, pod uvjetom da na stavkama povezanima s računom još nije evidentirano nijedno plaćanje.

:::note[Napomena]
Ako račun **NIJE** proknjižen, Fluentis će izraditi proviziju i pripadajuće detalje, ali se njima neće moći automatski upravljati ako su povezani s logikom dospijeća **_Nakon izvršene uplate_** ili **_Nakon potpune uplate_**, jer ne postoje poveznice s otvorenim stavkama kupca.
:::

**Provjera provizija**: omogućuje provjeru odgovaraju li iznosi provizija i dalje vrijednostima iz izvornih dokumenata. U slučaju odstupanja Fluentis će prikazati tablicu pod nazivom **Rezultati**, u kojoj će za svakog agenta biti prikazana dva stupca s ukupnim iznosima obračunatih provizija, uz usporedni stupac s ukupnim iznosima utvrđenima na temelju dokumenata.

Na vrpci izbornika tada je dostupan i gumb **Uskladi provizije**, kojim se ažuriraju podaci o provizijama.

Ova operacija neće biti dopuštena ako postoje plaćanja otvorenih stavki ili ako su provizije već obrađene u obračunu agenata.

:::tip POVEZNICA
Za postupak obračuna provizija koji se provodi putem administrativnog modula pogledajte [**ovdje**](/docs/finance-area/commissions/procedures/calculate-commissions.md).
:::