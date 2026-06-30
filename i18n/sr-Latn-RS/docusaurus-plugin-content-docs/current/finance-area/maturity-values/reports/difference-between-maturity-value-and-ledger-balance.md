---
title: Razlika između otvorenih stavki i glavne knjige
sidebar_position: 5
---

Iz ovog obrasca moguće je pokrenuti izveštaj koji odgovara sadržaju prikaza dostupnog u formi **[Razlika između otvorenih stavki i glavne knjige](/docs/finance-area/maturity-values/maturity-values/difference-between-maturity-value-and-ledger-balance)**.

Svrha ovog izveštaja je pronalaženje razlika između stanja otvorenih stavki i stanja glavne knjige za svakog kupca i dobavljača, kako bi se te razlike mogle ispraviti. Razlike mogu nastati usled grešaka u vođenju glavne knjige ili računovodstvenih knjiženja (neusklađenost između računovodstvenog knjiženja i otvaranja otvorene stavke, odnosno između naplate/plaćanja i zatvaranja otvorene stavke).

:::danger NAPOMENA
U slučaju **primaoca naknade**, ako je primenjen kriterijum prikaza otvorenih stavki umanjenih za porez po odbitku (u parametrima **[vrste poreza po odbitku](/docs/configurations/tables/finance/withholding-tax-types)**), prikazane razlike treba zanemariti (ne smatraju se greškama), jer će biti automatski eliminisane prilikom isplate naknade i zatvaranja odgovarajuće otvorene stavke.
:::

**Konto:** glavni filter za izbor podkonta kupca ili dobavljača. Ako nije postavljen nijedan filter, biće prikazana sva podkonta kupaca i dobavljača kod kojih postoje razlike.

**Od/Do datuma knjiženja:** filtriranje prema datumu računovodstvenog knjiženja.

**Isključi zatvorene otvorene stavke:** aktiviranjem ove opcije zanemaruju se otvorene stavke sa statusom **Zatvorena**.

**Detalji:** aktiviranjem ove opcije rezultati se prikazuju detaljno, tako da se eventualna razlika prikazuje za svako pojedinačno računovodstveno knjiženje u poređenju sa povezanom otvorenom stavkom (ili sa povezanim plaćanjem u slučaju knjiženja naplate ili isplate).

**Prikaži samo detaljna konta/zapise sa razlikom različitom od nule:** (preporučena opcija) kada je aktivna, prikazuju se samo podkonta kod kojih postoje razlike koje je potrebno ispraviti, dok se podkonta bez razlika ne prikazuju.

**Grupiši po valuti preduzeća:** aktivna opcija omogućava prikaz valutnih knjiženja u valuti preduzeća.