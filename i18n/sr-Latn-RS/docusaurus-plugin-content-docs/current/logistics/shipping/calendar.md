---
title: Kalendar
sidebar_position: 4
---

:::important Čemu služi
**Planer otprema** predstavlja ključni alat za optimizaciju upravljanja logistikom unutar preduzeća. Omogućava planiranje, praćenje i koordinaciju svih aktivnosti povezanih sa otpremom robe, obezbeđujući efikasnu raspodelu resursa i optimizaciju vremena.

Prikazom važnih podataka, kao što su raspored, prevoznici, vozila i kupci, **planer** olakšava organizaciju svakodnevnih aktivnosti, smanjuje kašnjenja i povećava tačnost isporuka. Integracijom funkcionalnosti kao što su upravljanje periodima nedostupnosti i ažuriranje statusa otprema pruža potpun i ažuran pregled logističkih operacija, omogućavajući bolje donošenje odluka i veću operativnu efikasnost.
:::

Kalendar otprema nalazi se na putanji:

**Logistika > Dostave > Kalendar**

**Kalendar otprema** prikazuje sve otpreme unesene u sistem, grupisane u prikazu vremenske linije (timeline) prema **vozaču / prevozniku / vozilu / kupcu / bez grupisanja**.

Prilikom otvaranja prikazuje se period od **današnjeg datuma + 7 dana**, ukoliko u tom periodu postoje otpreme. U suprotnom će biti prikazan prvi naredni period u kojem postoje planirane otpreme.

Pored otprema, u kalendaru se prikazuju i periodi nedostupnosti vozila i prevoznika.

U levom stupcu prikazuju se podaci o **vozaču, prevozniku (transporteru), vozilu ili kupcu**, u zavisnosti od odabranog načina grupisanja, dok su u kalendaru raspoređene pojedinačne otpreme.

Čak i ako otprema traje samo jedan sat, u kalendaru će se prema podrazumevanim podešavanjima prikazivati kao celodnevni događaj radi lakšeg pregleda. Za detaljniji prikaz, na alatnoj traci odaberite **Prikaz vremenske linije po satima**.

U tom slučaju otprema će biti prikazana u svom stvarnom trajanju. Ova opcija je posebno korisna pri korišćenju funkcije uvećavanja i umanjivanja prikaza (**Ctrl + točkić miša**) za detaljan satni pregled dana.

Za povratak na dnevni prikaz odaberite **Prikaz vremenske linije po danima** na alatnoj traci.

Na alatnoj traci dostupna su i sledeća dugmad:

- **Traži**: osvežava prikaz.

- **Prikaz po transporteru**: u levom stupcu najpre se prikazuju svi prevoznici i njihove otpreme. Ako na stavkama grupne otpreme nije naveden prevoznik, koristi se prevoznik definisan u zaglavlju otpreme.
  - Ako prevoznik nije naveden, na kraju spiska prevoznika prikazuju se odgovarajući vozači. Ako ni na stavkama grupne otpreme nije naveden vozač, koristi se vozač definisan u zaglavlju otpreme.
  - Ako nije naveden ni vozač, na kraju spiska prikazuju se kupci.

- **Prikaz po vozaču**: u levom stupcu najpre se prikazuju svi vozači i njihove otpreme. Ako na stavkama grupne otpreme nije naveden vozač, koristi se vozač definisan u zaglavlju otpreme.
  - Ako vozač nije naveden, na kraju spiska vozača prikazuju se odgovarajući prevoznici. Ako ni na stavkama grupne otpreme nije naveden prevoznik, koristi se prevoznik definisan u zaglavlju otpreme.
  - Ako nije naveden ni prevoznik, na kraju spiska prikazuju se kupci.

- **Prikaz po kupcu**: u levom stupcu prikazuju se svi kupci. Ako kupac nije dodeljen, prikazuje se stavka **Ostalo**, koja grupiše sve otpreme bez dodeljenog kupca.

- **Prikaz po vozilu**: u levom stupcu prikazuju se sva vozila. Ako na stavkama grupne otpreme nije navedeno vozilo, koristi se vozilo definisano u zaglavlju otpreme.
  - Ako vozilo nije navedeno, prikazuje se stavka **Ostalo**, koja grupiše sve otpreme bez dodeljenog vozila.

- **Bez grupisanja**: prikazuje se zaseban kalendar za svaku vrstu otpreme.

Desnim klikom miša moguće je:

- kreirati novu otpremu
- uneti period nedostupnosti za vozača
- uneti period nedostupnosti za vozilo

Na levoj strani dostupni su sledeći filteri:

- **Vrsta prevoza**: pošiljalac, primalac ili prevoznik
- **Vozilo**
- **Broj tablice**
- **Broj praćenja (Tracking)**
- **Kupac**
- **Prevoznik**
- **Vozač**
- **Veza na izlazni račun**
- **Proizvodno mesto**

Boje otprema predstavljaju [**Status otpreme**](/docs/configurations/tables/logistics/shipping-states).

Desnim klikom na otpremu moguće je promeniti status otpreme na sledeću fazu.

Boje dodeljene spisku vozača, vozila, prevoznika i kupaca dodeljuju se nasumično prilikom otvaranja kalendara i ostaju nepromenjene do promene prikaza.