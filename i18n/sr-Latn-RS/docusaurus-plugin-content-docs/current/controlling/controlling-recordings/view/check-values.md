---
title: Kontrolne vrednosti
sidebar_position: 3
---

Ova forma namenjena je usklađivanju računovodstvenih vrednosti sa vrednostima u kontrolingu i izuzetno je korisna za praćenje raspodele troškova i obračunatih konačnih usklađenja koje sistem izračunava u skladu sa definisanim metodama.

Pre pokretanja pretrage podataka potrebno je postaviti sledeća polja u zaglavlju forme:

- ***Područje*** podataka koje se pretražuje (obavezno)
- ***Dimenzija*** podataka koja se pretražuje (opciono)
- ***Godina*** (obavezno)
- Raspon ***perioda (od – do)*** (opciono)

Podaci su organizovani u pet odvojenih kartica:

***Izvorne vrednosti za raspodelu:*** prikazuju računovodstvene transakcije povezane sa centrom označenim kao *konta koja treba raspodeliti*, odnosno troškove koje opšte računovodstvo ne može direktno dodeliti. Poslednja kolona *Iznos* omogućava proveru da li je raspodela pravilno zatvorena, bez otvorenih stavki.

***Raspodeljene izvorne vrednosti:*** strukturno je slična prethodnoj kartici, ali prikazuje stvarno raspodeljene podatke sa centra zaduženog za preraspodelu troškova prema centrima primaocima. I ovde poslednja kolona *Iznos* služi za proveru da li je raspodela pravilno zatvorena, bez otvorenih podataka.

***Revidirane vrednosti:*** prikazuju odnose između centara kojima se upravlja putem nosilaca troškova. Podaci su grupisani po svakom nosiocu troškova, a unutar svakog centra prikazan je povezani konto koji je bio predmet preraspodele. Poslednja kolona *Razlika* omogućava proveru da li je preraspodela pravilno zatvorena, bez otvorenih podataka na nivou nosioca troškova.

***Vrednosti projekta/naloga:*** ova kartica prikazuje preraspodele unutar dimenzije Projekti/Nalozi, koje su takođe izvršene putem nosilaca troškova.

***Vrednosti usklađenja:*** prikazuju razlike između računovodstvenih podataka i podataka u kontrolingu, grupišući konta prema *grupi konačnog usklađenja* definisanoj u kontnom planu. Ako postoje vrednosti u koloni *Razlika* unutar grupa konta koje ne predviđaju posebnu vanbilansnu obradu, to ukazuje na raspodelu vrednosti putem vanbilansnih knjiženja, što zahteva dodatnu analizu kako bi se utvrdilo poreklo podataka i eventualno prilagodio model analize.

:::tip PRIMER
Ova poslednja kartica je ključna za proveru konta, kao što su naknade članovima nadzornog odbora, koje se u računovodstvu evidentiraju naknadno i zbog toga podležu prethodnoj vanbilansnoj proceni u kontrolingu.

Na ovaj način omogućeno je privremeno ili godišnje usklađenje unutar procedure **Obrada perioda**, gde se u sekciji *Obrada računovodstvenih podataka* nalazi polje **Vreme usklađenja**, koje omogućava izbor *privremene* ili *godišnje* logike obračuna.
:::