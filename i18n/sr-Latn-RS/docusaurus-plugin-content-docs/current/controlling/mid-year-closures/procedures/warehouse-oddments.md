---
title: Računovodstvo zaliha
sidebar_position: 2
---

U okviru modula za privremena zatvaranja, nakon kreiranja privremenog zatvaranja moguće je automatski izvršiti vrednovanje početnih i završnih zaliha skladišta.

Nakon otvaranja obrasca potrebno je definisati opseg datuma koji će se koristiti, vrstu zaliha koje će biti obuhvaćene (Pozitivne/Negativne), metod obračuna troška (Prosečni trošak, Poslednji trošak, FIFO sa godišnjim prenosima, LIFO sa godišnjim prenosima ili Područje), kao i predložak knjiženja koji će biti korišćen za generisana knjiženja.

Prisustvo ili odsustvo oznake **Kontroling** određuje način obrade na dva različita načina:

- Ako oznaka *nije aktivirana*, **FluentisERP** će kreirati knjiženja početnih i završnih zaliha na datume početka i kraja perioda privremenog zatvaranja i dodati ih na kraj ostalih korektivnih knjiženja istog zatvaranja.
- Ako je oznaka *aktivirana*, **FluentisERP** će kreirati knjiženja početnih i završnih zaliha za svaki pojedinačni mesec unutar perioda obuhvaćenog privremenim zatvaranjem i evidentirati ih kao vanbilansna knjiženja u području povezanom sa zatvaranjem (dakle, neće biti evidentirana kao knjiženja zatvaranja, već kao knjiženja koja važe isključivo za potrebe kontrolinga).

:::tip NAPOMENA
Procedura proverava da li ovakva knjiženja već postoje i, ukoliko ih pronađe, pita korisnika da li želi da ih obriše i ponovo kreira ili samo da ih dopuni (na primer, kada se želi obraditi samo određeno skladište, a ne sva skladišta, korišćenjem dostupnog padajućeg menija).

Ako je potrebno kreirati i knjiženja područja za kontroling i korektivna knjiženja unutar zatvaranja, dovoljno je pokrenuti proceduru **prvo** sa aktiviranom oznakom *Kontroling*, a **zatim** sa deaktiviranom oznakom.
:::