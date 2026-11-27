---
sidebar_position: 1
title: Provizije
---

:::tip[Informacija]
Počevši od verzije 805, ovaj obrazac je premešten na ovu lokaciju za potrebe upravljanja provizijama agenata (administrativno područje).

Prethodno je već bio dostupan u modulu *Primaoci naknada*.
:::

## Uvod

Ovaj obrazac omogućava pregled obračunatih i isplaćenih provizija agenata.

Odnosi se na upravljanje provizijama agenata putem administrativnog modula.

## Filteri u zaglavlju

U odeljku zaglavlja nalaze se filteri za agenta i pojedine računovodstvene elemente jer se redovi koji se odnose na provizije unose već prilikom knjiženja prodajne fakture na osnovu koje su obračunate.

:::note Napomena
**Podsećamo da od verzije 805 aktiviranje oznake za upravljanje provizijama unutar računovodstvenog šablona kojim se knjiži faktura ima isključivo svrhu omogućavanja prikaza podataka na odgovarajućoj kartici Provizije unutar računovodstvenog knjiženja.**

**U svakom slučaju, podaci o provizijama u ovom obrascu kreiraju se automatski, nezavisno od prethodno navedene oznake.**
:::

Dodatni filteri su četiri oznake koje omogućavaju pretraživanje provizija za isplatu, isplaćenih provizija ili obe kategorije, kao i provizija koje još nisu dospele za obračun ili su dospele.

**NAPOMENA:** Preciznije, statusi *OTVORENO* i *ZATVORENO* odnose se na to da li još postoji nepodmireni iznos za naplatu ili je sve naplaćeno. Zato za proviziju sa statusom *ZATVORENO* neće biti dodatnih kretanja.

## Tabela sa detaljima

U tabeli sa detaljima redovi odgovaraju provizijama obračunatim na fakturi, koje se unose prilikom knjiženja same fakture.

Od verzije 805 dostupne su i informacije o kupcu, kao i godini i broju fakture na osnovu koje je zapis kreiran.

U zavisnosti od kriterijuma dospeća definisanog u šifarniku agenta (na primer, nakon izvršene uplate), kreiraće se redovi za storno. Na primer, u slučaju delimičnog plaćanja ili plaćanja jedne od više otvorenih stavki, kreiraće se odgovarajući red u iznosu izvršene uplate. Za njihov pregled potrebno je proširiti detalje glavnog reda pomoću odgovarajućeg dugmeta **+** sa leve strane reda.

U detaljima (koji se zatim prikazuju i u glavnom redu) nalazi se i oznaka koja se aktivira kada se provizija isplati agentu.

![](/img/it-it/finance-area/commissions/newcommissions1.png)

## Dugmad na traci menija

Od verzije 805 dodata su dva nova dugmeta za usklađivanje provizija sa fakturama iz prodajnog područja, u slučaju da se provizije menjaju unutar prodajnih dokumenata **nakon** što su ti dokumenti već proknjiženi. (Naime, podaci o agentima mogu se uređivati i nakon kreiranja elektronske fakture i knjiženja dokumenta.)

**Kreiranje provizija iz prodajnih faktura**: otvara se obrazac za pretraživanje faktura, u kojem je moguće izabrati dokumente koje treba ponovo obraditi radi kreiranja eventualno nedostajućih provizija. Ako je faktura proknjižena, Fluentis će kreirati provizije i pripadajuće detalje koji nedostaju, pod uslovom da na stavkama povezanim sa fakturom još nije evidentirano nijedno plaćanje.

:::note[Napomena]
Ako faktura **NIJE** proknjižena, Fluentis će kreirati proviziju i pripadajuće detalje, ali njima neće biti moguće automatski upravljati ako su povezani sa logikom dospeća **_Nakon izvršene uplate_** ili **_Nakon potpune uplate_**, jer ne postoje veze sa otvorenim stavkama kupca.
:::

**Provera provizija**: omogućava proveru da li iznosi provizija i dalje odgovaraju vrednostima iz izvornih dokumenata. U slučaju odstupanja Fluentis će prikazati tabelu pod nazivom **Rezultati**, u kojoj će za svakog agenta biti prikazane dve kolone sa ukupnim iznosima obračunatih provizija, uz uporednu kolonu sa ukupnim iznosima utvrđenim na osnovu dokumenata.

Na traci menija tada je dostupno i dugme **Uskladi provizije**, kojim se ažuriraju podaci o provizijama.

Ova operacija neće biti dozvoljena ako postoje plaćanja otvorenih stavki ili ako su provizije već obrađene u obračunu agenata.

:::tip POVEZAVA
Za postupak obračuna provizija koji se sprovodi putem administrativnog modula pogledajte [**ovde**](/docs/finance-area/commissions/procedures/calculate-commissions).
:::