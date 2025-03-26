---
title: Izračunajte provizije
sidebar_position: 2
---

Ova procedura koja se odnosi na administrativno područje stvorena je za obradu podataka o provizijama agenata koji su uneseni izravno iz računovodstvenih evidencija nakon odgovarajuće konfiguracije računovodstvenih razloga uključenih.

U posebnosti, razlog koji se koriste za registraciju prodajnih faktura trebaju imati oznaku **Provizije** aktiviranu.

**NAPOMENA**: potrebno je aktivirati oznaku Upravljanje provizijama i unutar Konfiguracije > Alati > Administracija > Parametri računovodstva za željenu godinu.

Pri otvaranju obrasca izvršavanjem naredbe **Pretraživanje**, koja se nalazi na traci s izbornicima, učitava se popis aktivnih agenata (putem odgovarajuće oznake mogu se učitati i oni čiji je datum isteka mandata istekao).

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image01.png)

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image02.png)

Na desnoj strani obrasca prisutni su i elementi za filtriranje podataka s kojih se obračunavaju provizije, kao i elementi koje treba naznačiti kako bi se ispravno obračunali troškovi na temelju likvidacije koja se generira.

**PAŽNJA:**

Za razliku od sličnog obračuna prisutnog u prodajnom području, na kraju ove procedure ne obrađuju se Likvidacije (koje se mogu pretraživati i konzultirati te zatim pretvoriti u troškove), već će se izravno generirati troškovi agenata koji se mogu pretraživati i dodatno obrađivati u području Primatelja.

**Filtriranje Valute**: omogućuje odabir i filtriranje stavki koje se uzimaju u obzir za obračun provizija, izraženih u određenoj valuti.

**Filtriranje stavki**: filtriranje ove grupe omogućuje postavljanje referentnog datuma za stjecanje provizije (postavljenog po zadanim postavkama na trenutni datum prilikom otvaranja obrasca) i dodatno filtriranje prema vrsti i datumu dokumenta. Također je prisutna oznaka koja aktivira konverziju stavki u valutu koristeći tečaj datuma dokumenta, nadmašujući eventualni drugačiji tečaj otvaranja stavki.

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image03.png)

**PAŽNJA**: U slučaju da agent ima metodu obračuna provizija na **Ukupna plaćanja** i faktura prodaje ima kao tip plaćanja **Bankovni prijenos**, obračun provizije će se u svakom slučaju dogoditi na datum dospijeća bankovne primitke, neovisno o zatvaranju predmeta u vezi s izdavanjem RiBe i predajom na Saldo nakon dobrobiti i/ili kreditiranja iznosa.

Osim toga, bit će dodani dodatni dani koje je moguće postaviti u **Parametri > Blagajna > Parametri Rizik kupca** > **Broj dana nakon isteka za efekte predane na saldo nakon dobrobiti / nakon naplate**.

**Podaci za izradu likvidacije**: Polja iz ove grupe trebaju se obraditi prije pokretanja izračuna kako bi se unio datum likvidacije (predložen kao trenutni datum), opis likvidacije te mjesec/godina obračuna ENASARCO (ako se ovaj posljednji podatak izostavi, naknada će biti kreirana s istim praznim poljima i bit će potrebno ručno dopuniti unutar svake generirane naknade).

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image04.png)

Nakon postavljanja filtara kao što je opisano iznad, unesite podatke za izradu likvidacije, odaberite iz popisa agente subjekte za likvidaciju i pritisnite gumb **Izračunaj** koji se nalazi na traci izbornika.

U ovom trenutku je moguće zatvoriti obrazac u komentaru jer su naknade agenata već izračunate i automatski prisutne u području Primatelji.





