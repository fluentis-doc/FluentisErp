---
title: Kalendar
sidebar_position: 4
---

:::important Čemu služi
**Planer otprema** ključan je alat za optimizaciju upravljanja logistikom unutar poduzeća. Omogućuje planiranje, praćenje i koordinaciju svih aktivnosti povezanih s otpremom robe, osiguravajući učinkovitu raspodjelu resursa i optimizaciju vremena.

Prikazom važnih podataka, poput rasporeda, prijevoznika, vozila i kupaca, **planer** olakšava organizaciju svakodnevnih aktivnosti, smanjuje kašnjenja i povećava točnost isporuka. Integracijom funkcionalnosti poput upravljanja razdobljima nedostupnosti i ažuriranja statusa otprema pruža cjelovit i ažuran pregled logističkih operacija, omogućujući bolje donošenje odluka i veću operativnu učinkovitost.
:::

Kalendar otprema nalazi se na putanji:

**Logistika > Dostave > Kalendar**

**Kalendar otprema** prikazuje sve otpreme unesene u sustav, grupirane u prikazu vremenske crte (timeline) prema **vozaču / prijevozniku / vozilu / kupcu / bez grupiranja**.

Prilikom otvaranja prikazuje se razdoblje od **današnjeg datuma + 7 dana**, ako u tom razdoblju postoje otpreme. U suprotnom će se prikazati prvo sljedeće razdoblje u kojem postoje planirane otpreme.

Osim otprema, u kalendaru se prikazuju i razdoblja nedostupnosti vozila i prijevoznika.

U lijevom stupcu prikazuju se podaci o **vozaču, prijevozniku (transporteru), vozilu ili kupcu**, ovisno o odabranom načinu grupiranja, dok su u kalendaru raspoređene pojedine otpreme.

Čak i ako otprema traje samo jedan sat, u kalendaru će se prema zadanim postavkama prikazivati kao cjelodnevni događaj radi lakše preglednosti. Za detaljniji prikaz, na alatnoj traci odaberite **Prikaz vremenske crte po satima**.

U tom će se slučaju otprema prikazati u stvarnom trajanju. Ova je opcija posebno korisna pri korištenju funkcije povećavanja i smanjivanja prikaza (**Ctrl + kotačić miša**) za detaljan satni pregled dana.

Za povratak na dnevni prikaz odaberite **Prikaz vremenske crte po danima** na alatnoj traci.

Na alatnoj traci dostupni su i sljedeći gumbi:

- **Traži**: osvježava prikaz.

- **Prikaz po transporteru**: u lijevom stupcu najprije se prikazuju svi prijevoznici i njihove otpreme. Ako na stavkama grupne otpreme nije naveden prijevoznik, koristi se prijevoznik definiran u zaglavlju otpreme.
  - Ako prijevoznik nije naveden, na kraju popisa prijevoznika prikazuju se pripadajući vozači. Ako ni na stavkama grupne otpreme nije naveden vozač, koristi se vozač definiran u zaglavlju otpreme.
  - Ako nije naveden ni vozač, na kraju popisa prikazuju se kupci.

- **Prikaz po vozaču**: u lijevom stupcu najprije se prikazuju svi vozači i njihove otpreme. Ako na stavkama grupne otpreme nije naveden vozač, koristi se vozač definiran u zaglavlju otpreme.
  - Ako vozač nije naveden, na kraju popisa vozača prikazuju se pripadajući prijevoznici. Ako ni na stavkama grupne otpreme nije naveden prijevoznik, koristi se prijevoznik definiran u zaglavlju otpreme.
  - Ako nije naveden ni prijevoznik, na kraju popisa prikazuju se kupci.

- **Prikaz po kupcu**: u lijevom stupcu prikazuju se svi kupci. Ako kupac nije dodijeljen, prikazuje se stavka **Ostalo**, koja grupira sve otpreme bez dodijeljenog kupca.

- **Prikaz po vozilu**: u lijevom stupcu prikazuju se sva vozila. Ako na stavkama grupne otpreme nije navedeno vozilo, koristi se vozilo definirano u zaglavlju otpreme.
  - Ako vozilo nije navedeno, prikazuje se stavka **Ostalo**, koja grupira sve otpreme bez dodijeljenog vozila.

- **Bez grupiranja**: prikazuje se zaseban kalendar za svaku vrstu otpreme.

Desnim klikom miša moguće je:

- kreirati novu otpremu
- unijeti razdoblje nedostupnosti za vozača
- unijeti razdoblje nedostupnosti za vozilo

Na lijevoj strani dostupni su sljedeći filtri:

- **Vrsta prijevoza**: pošiljatelj, primatelj ili prijevoznik
- **Vozilo**
- **Broj tablice**
- **Broj praćenja (Tracking)**
- **Kupac**
- **Prijevoznik**
- **Vozač**
- **Veza na prodajni račun**
- **Proizvodno mjesto**

Boje otprema predstavljaju [**Status otpreme**](/docs/configurations/tables/logistics/shipping-states).

Desnim klikom na otpremu moguće je promijeniti status otpreme na sljedeću fazu.

Boje dodijeljene popisu vozača, vozila, prijevoznika i kupaca dodjeljuju se nasumično prilikom otvaranja kalendara te ostaju nepromijenjene do promjene prikaza.