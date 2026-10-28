---
title: Dimenzija
sidebar_position: 5
---

Obrazac se nalazi na putanji: **Tabele > Kontroling > Analitičko knjigovodstvo > Dimenzije**

:::tip Napomena
Tabela je relevantna samo za preduzeća u kojima je aktivirana oznaka *Kontroling*.
:::

Pojam dimenzije može se objasniti kao kriterijum za analizu i doslednu podelu TROŠKOVA i PRIHODA unutar preduzeća.

Moguće je istovremeno kreirati i koristiti više dimenzija analize.

![Slika](/img/it-it/configurations/tables/controlling/analytical-accounting/dimension.png)

**PRIMER**: Uz analitičko knjigovodstvo obično se povezuje dimenzija *INDUSTRIJA*, u okviru koje se preduzeće deli na različite poslovne jedinice ili funkcije, odnosno ADMINISTRATIVNI POSLOVNI CENTAR, UPRAVLJAČKI CENTAR, KOMERCIJALNI CENTAR, a zatim i PROIZVODNE CENTRE.

U okviru ove dimenzije dodeljuju se svi troškovi i prihodi preduzeća kako bi se sprovela analiza **potpunih troškova (Full Costing)**.

Paralelno s tim postoje *NALOZI*, odnosno preduzeća koja posluju na osnovu naloga/projekata. Nalozi predstavljaju paralelne dimenzije, pa će im biti povezani svi DIREKTNI prihodi naloga, dok će se iz industrijske dimenzije preneti knjiženja koja se odnose na pomoćne i opšte centre (uprava, administracija itd.).

Moguće je definisati i **posebne** dimenzije kada preduzeće želi da izdvoji određene vrednosti iz uobičajenih poslovnih pravila, kako bi pratilo pojedine vrste troškova.

**PRIMER**: Preduzeće želi da prati različite SAJMOVE na kojima učestvuje, koji predstavljaju značajnu investiciju, pa definiše dimenziju *SAJMOVI*, dodeljuje joj centar SAJAM U MILANU (primer) i trošak sajma pripisuje ne samo industrijskoj dimenziji već i dimenziji SAJMOVI, jer želi da paralelno razvrstava i analizira podatke za tu konkretnu oblast. U ovom slučaju ne aktivira oznaku obaveznog usklađivanja jer želi samo dodatni element analize.

Dimenzija se, dakle, može posmatrati i kao **OZNAKA** koja se povezuje sa centrima.

Pomoću pokretača troškova (*Cost driver*) moguće je preneti podatke (troškove i prihode) iz jedne dimenzije u drugu.

#### Specifična polja

- Oznaka **OBAVEZNO USKLAĐIVANJE** određuje da li ova dimenzija mora biti usklađena sa računovodstvom. Više nije reč o usklađivanju glavne knjige sa centrom troška/prihoda ili nalogom, već o usklađivanju sa pojedinačnom dimenzijom analize za koju je usklađivanje obavezno. Provera usklađenosti sprovodi se samo ako računovodstveni predložak za knjiženje takođe predviđa blokiranje čuvanja knjiženja koja nisu usklađena na nivou vrednovanja centara.

- Oznaka **NALOG** označava da se red analitike prvenstveno povezuje sa projektom za koji se trošak ili prihod direktno knjiži. Na osnovu tog projekta određuje se centar troška koji treba vrednovati. Taj centar može biti opšta šifra zajednička za sve projekte ili centar povezan sa određenim svojstvom izabranog projekta.

- Oznaka **OGRANIČENJE KONTO/CENTAR** označava da se želi ograničiti ono što korisnik može da uradi prilikom knjiženja centra ove dimenzije u računovodstvu. Budući da se u kontnom planu svakom podkontu troška i prihoda može dodeliti jedan ili više poslovnih centara, ovom opcijom određuje se da korisnik ne može menjati ono što je definisano u kontnom planu. Drugim rečima, proizvodni trošak ne može se preusmeriti na upravljački centar. Ograničenje se može odnositi na pojedinačni centar ili na kategorije centara.

- Oznaka **OMOGUĆI NALOG** služi za povezivanje odgovarajućeg naloga i u redovima uobičajene industrijske/upravljačke dimenzije, kako bi se izbeglo upravljanje dvema različitim dimenzijama.
:::