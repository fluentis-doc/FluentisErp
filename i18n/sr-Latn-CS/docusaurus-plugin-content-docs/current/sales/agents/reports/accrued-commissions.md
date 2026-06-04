---
title: Obračunate provizije
sidebar_position: 2
---

Obrazac se otvara putem putanje *Prodaja > Agenti > Obračuni predstavnika > Ispisi*.

Ispis je simulacija izračuna provizije koju je predstavnik ostvario, sukladno postavkama njegove evidencije i filterima primijenjenim na izvještaj.

**Posebno, u slučaju provizija na naplaćeno, ovaj će izvještaj prikazati ostvarene podatke isključujući vrijednosti automatskih obračuna stvorenih u upravljačkom programu, koji postaju obvezni kako bi se dobio usklađeni izvještaj;** u slučaju provizija na prihod/izvršeno/narudžbeno, upotreba ispravnog raspona datuma filtera omogućuje dobivanje ispravnih rezultata bez obzira na korištenje automatskog postupka obračuna provizije.


**Ispiši provizije obračunate na** označava datum odnosa za izračun provizije na *naplaćeno* 

Oznaka **Ispis duga naspram/predstavnika na datum** s kojim se aktivira povezani datum: ovom opcijom moguće je simulirati ispis ostvarenih provizija na taj datum, uključujući i one obračunate na kasniji datum (koji su obično isključeni).

Oznaka **Razmatra nulte provizije u osnovi provizionog poreza** omogućuje razmatranje među osnovnim provizijama čak i onih koje imaju vrijednost provizije jednaku nuli.

:::tip PROVIZIJE NA NAPLAĆENO I KOMPENZACIJA STAVKI  
U slučaju kada su provizije obračunate na naplaćeno i dođe do kompenzacije stavki (npr. prethodno primljenih akontacija), potrebno je obratiti pažnju na činjenicu da kompenzacija dodjeljuje stavke zatvaranja stavkama za izračun ostvarenih provizija na temelju **datuma zapisa** najnovijeg između dva koja su stvorila stavke koje se međusobno kompenziraju.

U situaciji čestih akontacija i storniranja gdje su možda prisutni isti iznosi, pažljivo je kompenzirati akontacije i storniranja za isto razdoblje, inače će provizija biti ostvarena na pogrešan datum.
:::

:::tip PROVIZIJE NA NAPLAĆENO I PRIVREMENI RAČUNOVODSTVENI ZAPISI  
Za izračun ostvarenih provizija uzimaju se u obzir SAMO zapisi u  **konačnom**, stanju, pa će eventualne naplate (čak i one unaprijed) zabilježene privremeno biti zanemarene.
:::

:::tip PROVIZIJE NA NAPLAĆENO I BANKOVNE UPLATE  
Dospijeće provizija uvijek uzima u obzir datum dospijeća efekta, čak i ako je klijentska stavka zatvorena zbog knjiženja izdavanja Ri.Ba. a mjenica se predočuje na naplatu ili kredit.
:::

:::danger PAŽNJA  
Posebno obratite pažnju u slučaju bankovnih primitaka na upravljanje **PARAMETRIMA RIZIKA KUPCA** gdje postoje dva polja **Broj dana nakon dospijeća za efekte predstavljene pod “dozvoljeni” / Broj dana nakon dospijeća za efekte predstavljene nakon naplate** koji, ako su popunjeni, dodaju kašnjenje i u dospijeću provizija.

Također obratite pažnju prilikom pokretanja novog okruženja da je barem jednom spremljeno unutar obrasca Parametar rizika klijenta kako bi se osiguralo da su zadani parametri prisutni (posebno se odnosi na gore navedena polja), inače datum dospijeća efekta neće biti pročitan i provizija će uvijek biti ostvarena na zatvaranju stavke zbog izdavanja Ri.Ba.
:::