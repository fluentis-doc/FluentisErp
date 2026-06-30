---
title: Parametri za obračun zatezne kamate
sidebar_position: 3
---

Ovaj obrazac sadrži skup opcija za izbor vrste otvorenih stavki za koje će se izvršiti obračun zatezne kamate, kao i polje za filtriranje po kontu ili podkontu.

U nastavku je potrebno izabrati vrstu kamatne stope koja će se primenjivati i podesiti opcije koje određuju način obračuna.

**Obračunaj za stavke zatvorene u periodu**: postupak će pronaći stavke koje su zatvorene u okviru zadatog perioda i samo za njih izračunati zateznu kamatu. U slučaju delimičnih plaćanja kamata se neće obračunavati.

**Obračunaj plaćanja u periodu**: postupak će pronaći sva plaćanja evidentirana u okviru zadatog perioda i obračunati zateznu kamatu na plaćene iznose. Ovo je preporučena opcija.

Ako nijedna od navedenih opcija nije označena, postupak će obračunati kamatu za dane kašnjenja koji pripadaju izabranom vremenskom periodu.

**Tip dokumenta** i **Način plaćanja**: dodatni su filteri za izbor otvorenih stavki na kojima će se izvršiti obračun kamata.

Moguće je izabrati i način određivanja kamatne stope:

- Obračun samo za kupce sa ugovorenom kamatnom stopom.
- Obračun za kupce sa ugovorenom kamatnom stopom, a za sve ostale prema stopi definisanoj u ovom obrascu.
- Obračun za sve kupce prema stopi definisanoj u ovom obrascu.

Opcija **Isključi izdate račune**, koja je podrazumevano uključena, omogućava izuzimanje stavki koje su zatvorene izdavanjem instrumenata naplate (npr. Ri.Ba.). Ovo podešavanje je posebno korisno kada se koristi obračun kamata uz odobreni popust, jer se otvorena stavka kupca u pravilu zatvara već prilikom izdavanja bankarske potvrde ili zadužnice.

Postupak obračuna pokreće se naredbom **Obračun kamata** na traci sa alatkama.