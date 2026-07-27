---
title: Planer
sidebar_position: 2
---

## Planer

Planner je dostupan uz licencu **Fluentis Universal**, a može se otvoriti putem izbornika **Upravljanje projektima > Planer**. Omogućuje prikaz kalendara resursa, projekata i kupaca.

# Filtri

Prilikom otvaranja prikazuje se kalendar resursa trenutno prijavljenog korisnika, no moguće je istovremeno prikazati više kalendara.

Otvorite karticu **Filtri** s lijeve strane, zatim karticu **Resursi**, kliknite na pretraživanje kako biste prikazali sve dostupne resurse te povucite željene resurse u okvir s desne strane.
Na isti način rade i filtri **Kupac** i **Projekt**, koji će se primijeniti na prikazane kalendare.
Na kartici **Dokumenti** moguće je odabrati koje će se vrste dokumenata prikazivati u kalendarima.
Za svaki od tih dokumenata moguće je dodatno primijeniti specifične filtre, jednake onima dostupnima u odgovarajućim područjima sustava.
U odjeljku **Opći filtri** dostupne su sljedeće mogućnosti:

- prikaz preklapajućih termina
- prikaz nepotvrđenih termina
- označavanje dana u kojima nije raspoređeno cijelo radno vrijeme resursa. Dani s raspoloživim terminima bit će označeni tirkiznom bojom.

Za uklanjanje pojedinog prethodno odabranog filtra označite ga i pritisnite tipku **Delete** na tipkovnici. Za uklanjanje svih filtara upotrijebite gumb **Obriši filtre**.

**Razdoblje**: omogućuje odabir razdoblja koje će biti prikazano u kalendaru.

# Kalendar

Svaka vrsta dokumenta u kalendaru može biti prikazana drugom bojom radi lakšeg razlikovanja. Konfiguracija boja postavlja se u odgovarajućim šifarnicima vrsta dokumenata.
Jedino termini resursa raspoređenih na projektu nemaju mogućnost odabira boje, već će njihova boja odgovarati boji kalendara resursa (boji zaglavlja u kojem je prikazano ime resursa). Takvi termini mogu se prepoznati po oznaci **PR** (*Project Resource*), koja je prikazana iza vremena.
Ako postoje zahtjevi za godišnji odmor ili odsutnost, pozadina će biti obojena narančastom bojom. Ako je s tim zahtjevom povezana generirana aktivnost, prikazivat će se ovisno o opciji **Godišnji odmori** u filtrima **Dokumenti**.
Ako u istom danu postoji više termina nego što ih je moguće prikazati, u donjem desnom kutu prikazat će se strelica koja otvara detaljan prikaz tog dana.
Svaki termin prikazuje tri osnovne informacije:

- vrijeme početka i završetka te opis vrste dokumenta
- kupca
- WBS projekta

Postavljanjem pokazivača miša iznad termina prikazat će se alatni opis (*tooltip*) s dodatnim informacijama.
Za svaku vrstu dokumenta desnim klikom moguće je generirati sljedeći dokument predviđen tijekom procesa upravljanja projektom.
Primjerice, iz termina resursa na projektu moguće je generirati **Planiranu intervenciju** ili **Zahtjev za intervenciju**. Koristit će se vrste dokumenata definirane u općim parametrima područja **Projekti**.
Kalendar će se odmah ažurirati te će promijeniti boju ovisno o novoj vrsti dokumenta.
Dvostrukim klikom moguće je otvoriti odgovarajući dokument.
Postupak konverzije moguće je primijeniti i na višestruki odabir dokumenata.
Također, desnim klikom moguće je obrisati upravo kreirani dokument, pri čemu će se vratiti prethodno stanje (u našem primjeru ponovno će biti prikazan termin resursa na projektu).

Dostupne su sljedeće konverzije:

- termin resursa na projektu → zahtjev za intervenciju
- zahtjev za intervenciju → planirana intervencija
- zahtjev za intervenciju → intervencija
- termin resursa na projektu → planirana intervencija
- planirana intervencija → intervencija

Kalendar podržava i funkcionalnost **drag & drop**, pa će se povlačenjem termina s jednog dana na drugi ili iz kalendara jednog resursa u kalendar drugog resursa automatski ažurirati podaci u odgovarajućim dokumentima.

Ova operacija **nije dopuštena** za intervencije čiji je status <u>različit od Uneseno</u> te za <u>fakturirane aktivnosti</u>.

# Alatna traka

Na alatnoj traci dostupni su sljedeći gumbi:

- **Povećaj / Umanji**: omogućuje povećavanje ili smanjivanje prikaza odabranog razdoblja, sve do najdetaljnijeg prikaza po satima.
- **Pregled**: omogućuje mjesečni, tjedni, dnevni ili **vremenski** (*Timeline*) prikaz. Potonji je posebno prikladan za uočavanje slobodnih dana ili nepopunjenih vremenskih intervala, primjerice tijekom razdoblja godišnjih odmora.
- **Grupiraj prema**: omogućuje promjenu načina prikaza kalendara prema resursu, projektu, kupcu ili datumu