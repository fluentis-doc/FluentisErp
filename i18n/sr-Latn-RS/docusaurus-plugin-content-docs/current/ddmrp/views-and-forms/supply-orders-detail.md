---
title: Detalj naloga za nabavku i potreba
sidebar_position: 5
---

Obrazac za detalje naloga za nabavku omogućava filtriranje i pregled svih neizvršenih naloga za nabavku, bilo da su planirani ili potvrđeni, dok obrazac potreba omogućava filtriranje i prikaz liste neizvršenih dokumenata koji generišu potražnju.

Dvostrukim klikom na red otvara se odgovarajući nalog.
U obrascu potreba prikazuje se angažovani artikl. Zbog toga, kod proizvodnih naloga i radnih naloga, prikazani artikl nije nužno artikl definisan na samom nalogu, već artikl na koji se potreba odnosi.

Sekcija za filtriranje omogućava izbor prema:
- vrsti naloga,
- statusu naloga,
- artiklu,
- kao i drugim dostupnim kriterijumima.

Ovi podaci su posebno značajni kada je potrebno detaljno analizirati stanje naloga za određeni artikl, naročito kroz analizu NFP-a (*Net Flow Position*).
Svaki red obojen je u skladu sa statusom buffer-a artikla (statusom zaliha) u odnosu na skladište isporuke navedeno u redu naloga:

- kod naloga za nabavku koristi se skladište isporuke (odredišno skladište za interne DDMRP naloge),
- kod dokumenata koji generišu potrebu koristi se skladište angažovanja.

Koriste se sledeće boje:
- **Tamnocrvena** – negativna zaliha;
- **Crvena** – zaliha manja od 50% crvene zone;
- **Žuta** – zaliha između 50% i 100% crvene zone;
- **Zelena** – zaliha iznad crvene zone (minimalni normalni nivo zaliha) i ispod zbira crvene i zelene zone (maksimalni normalni nivo zaliha);
- **Plava** – zaliha veća od zbira crvene i zelene zone (prekomerna zaliha).

Ako artikl nije definisan kao buffer u skladištu isporuke navedenom u redu naloga, kolona **Status zaliha** ostaće prazna, a red neće biti obojen.
Ako skladište nije navedeno u redu naloga, sistem će podrazumevano smatrati da se radi o skladištu **Fabrika**.