---
title: Nova vrsta podsjetnika 
sidebar_position: 3
---

Polja ovog obrasca su: 

**Šifra**: identifikacijski kod vrste podsjetnika.

**Opis**: opis vrste podsjetnika.

**Vrsta kamate**: izborno, to je poveznica na vrstu kamate koja se primjenjuje na zakašnjelo plaćanje, kako bi se dobio izračun na dan izdavanja opomene.

**Podsjetnik za grupu stavki**: upravljačka zastavica za grupu stavki, posebno će upravljati pismom podsjetnika za grupu stavki u isto vrijeme (standardno upravljanje), dok bi bez oznake svaka računovodstvena stavka imala svoj vlastiti podsjetnik odvojen od ostali.

Nakon što je vrsta podsjetnika spremljena, moguće je kreirati različite razine pomoću gumba 'novo'. 

**Šifra**: identifikacijski kod podsjetnika.

**Opis**: opis vrste podsjetnika.

**Prioritet**: Prioritet stvaranja od 1 do N razina.

**Opis tipa kredita**: ne upravlja se vezom s vrstom kontrole kredita kupca.

**Dani kašnjenja**: naznaka dana odgode koji moraju proći prije nego što se zatraži utakmica.

:::tip[Info]
U postupku [***Generiranja opomena***](/docs/finance-area/maturity-values/procedures/generation-of-dunning-letters/generation-of-dunning-letters-intro), mogu se upravljati i opomenama s brojem **negativnih Dana kašnjenja**. Tipično se negativni dani postavljaju kako bi se kreiralo upozorenje prije dospijeća. Postupak [*Automatskog generiranja opomena*](/docs/finance-area/maturity-values/procedures/dunning-letters-automatic-issue) međutim **NE** podržava negativni parametar.
:::

**Dani**: broj dana za koje podsjetnik ističe i hoće li se oni računati od datuma kreiranja ili datuma isteka prethodnog podsjetnika. 

**Od prethodnog datuma kretanja**: referentni datum za razine koje slijede prve.

**Od datuma kreiranja**: referentni datum koji se obično koristi za prvu razinu.

:::danger PAŽNJA 
Vrijednosti polja "**dani kašnjenja**" i "**dani**", posebno za podsjetnike koji slijede nakon prvog, dodaju se i stoga u slučaju drugog, trećeg podsjetnika itd. općenito nije potrebno dodati vrijednost u parametru *dana odgode*, umjesto toga moguće je pozvati se na dodatno vrijeme proteklo od datuma prvog podsjetnika putem parametra *dana*. 
:::

Za svaki broj podsjetnika, nakon što ga spremite, možete nastaviti s umetanjem tekstova na različitim jezicima: prvi koji ćete učitati je onaj koji će se koristiti prema zadanim postavkama kada registar kupaca nema dodijeljen jezik. 

Tekstovi su podijeljeni u 4 dijela: predmet pisma, naslov, zaključak i dio literature (aktivan samo za podsjetnike na grupe stavki). Konkretno, u odjeljku s referencama možete umetnuti tekst pomoću kodova navedenih u podnožju obrasca: npr. “Ref. (3) br. (4) od (5), (9) od (8) (10) koji istječe (6)”.





