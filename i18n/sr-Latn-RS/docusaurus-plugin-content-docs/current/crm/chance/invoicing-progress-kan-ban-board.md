---
title: Kanban tabla napretka fakturisanja
sidebar_position: 6
---

Ova procedura ima za cilj da vizualizuje (korišćenjem Kanban metodologije) Prilike, Narudžbine i Fakture za određene periode. Procedura se sastoji od dve kartice: **Filter** i **Rezultati**.

### Filter

Na ovoj kartici potrebno je uneti filtere koji će se koristiti za prikaz rezultata na sledećoj kartici.

U prvom delu nalaze se sledeće oznake: *Sažmi račune*, *Sažmi narudžbine*, *Sažmi prilike*; postavljanjem ovih oznaka želi se prikazati ukupan neto iznos narudžbina, prilika i računa; bez ovih oznaka, različiti dokumenti biće prikazani odvojeno, svaki sa svojim vrednostima.

Filter **Kompanija** je obavezan i sadrži kompaniju na koju se odnosi.

Filter **Mesečni interval** služi za označavanje tromesečnog perioda koji treba uzeti u obzir.

Filter **Agent** omogućava prikaz dokumenata koji imaju istog povezanog agenta.

Filter **Valuta** popunjava se automatski.

Zatim postoje filteri *Prilika*, *Faktura* i *Narudžbina kupca*: ove oznake određuju koje dokumente treba prikazati među rezultatima.

Na kraju postoje odeljci u koje je moguće uneti filtere za Prilike, Fakture i Narudžbine. U sva tri slučaja, predloženi datumi zavise od prethodno unetog mesečnog intervala.

### Rezultati

Na ovoj kartici nalazi se **Kanban tabla**, gde su dokumenti prikazani podeljeni prema različitim mesecima unetim u filtere.

Svaka kolona Kanban table sastoji se od sledećih elemenata:

**Gornja traka** na kojoj su prikazani, redom, sledeći podaci:
- Referentni mesec;
- Count: odgovara broju prilika/faktura/narudžbina koje su smeštene u toj koloni;
- Total Net Amount: odgovara ukupnoj vrednosti prilika/faktura/narudžbina prisutnih u toj koloni, umanjenoj za primenjene popuste.

**Donja traka** na kojoj su prikazani različiti detalji o pojedinačnim dokumentima.

Dvostrukim klikom moguće je otvoriti povezani dokument.