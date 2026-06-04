---
title: Računovodstvo zaliha
sidebar_position: 2
---

Unutar modula za prviremena zatvaranja, nakon što je stvoreno privremeno zatvaranje, moguće je automatski vrednovati početne/završne zalihe skladišta.

Nakon otvaranja obrasca, potrebno je postaviti raspon datuma koji će se koristiti, vrstu zaliha koja će se uzeti u obzir (Pozitivna/Negativna), način izračuna troška (Prosječni trošak, Posljednji trošak, FIFO s godišnjim prijelazima, LIFO s godišnjim prijelazima, područje), te predložak koji će se koristiti za knjiženja koja će se stvoriti.
Prisutnost ili odsutnost oznake Kontroling određuje način obrade na dva različita načina:
- Ako oznaka *nije prisutna*, **FluentisERP** će stvoriti knjiženja početnih i završnih zaliha na datume početka i kraja razdoblja privremenog zatvaranja i dodati ih na kraj ostalih prilagodbenih knjiženja istog zatvaranja.
- Ako je oznaka *prisutna*, **FluentisERP** će stvoriti knjiženja početnih i završnih zaliha za svaki pojedini mjesec unutar raspona datuma obuhvaćenih privremenim zatvaranjem i umetnuti ih kao izvanknjigovodstvena knjiženja u području povezano sa zatvaranjem (dakle, to neće biti knjiženja zatvaranja, već knjiženja valjana samo za kontroling).

:::tip NAPOMENA
Obrada provjerava prisutnost ovih vrsta knjiženja te, ako ih već pronađe, pita želi li ih se izbrisati i ponovno stvoriti ili ih jednostavno dodati (npr. u slučaju kada se odluči obraditi samo određena skladišta, a ne sva, putem dostupnog padajućeg izbornika). Ako je potrebno stvoriti i knjiženja područja za kontroling i prilagodbena knjiženja unutar zatvaranja, dovoljno je
pokrenuti postupak *prvo* s aktiviranom oznakom Kontroling, a *zatim* s deaktiviranom oznakom.
:::