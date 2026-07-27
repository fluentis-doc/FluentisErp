---
title: Planer
sidebar_position: 2
---

## Planer

Planer je dostupan uz licencu **Fluentis Universal** i može se otvoriti putem menija **Upravljanje projektima > Planer**. Omogućava prikaz kalendara resursa, projekata i kupaca.

# Filteri

Prilikom otvaranja prikazuje se kalendar resursa trenutno prijavljenog korisnika, ali je moguće istovremeno prikazati više kalendara.

Otvorite karticu **Filteri** sa leve strane, zatim karticu **Resursi**, kliknite na pretragu kako biste prikazali sve dostupne resurse i prevucite željene resurse u okvir sa desne strane.  
Na isti način rade i filteri **Kupac** i **Projekat**, koji će se primeniti na prikazane kalendare.  
Na kartici **Dokumenti** moguće je izabrati koje će se vrste dokumenata prikazivati u kalendarima.  
Za svaki od tih dokumenata moguće je dodatno primeniti specifične filtere, iste kao one dostupne u odgovarajućim oblastima sistema.  
U odeljku **Opšti filteri** dostupne su sledeće mogućnosti:

- prikaz preklapajućih termina
- prikaz nepotvrđenih termina
- označavanje dana u kojima nije raspoređeno celo radno vreme resursa. Dani sa raspoloživim terminima biće označeni tirkiznom bojom.

Za uklanjanje pojedinačnog prethodno izabranog filtera označite ga i pritisnite taster **Delete** na tastaturi. Za uklanjanje svih filtera upotrebite dugme **Obriši filtere**.

**Period**: omogućava izbor perioda koji će biti prikazan u kalendaru.

# Kalendar

Svaka vrsta dokumenta u kalendaru može biti prikazana drugom bojom radi lakšeg razlikovanja. Konfiguracija boja podešava se u odgovarajućim šifarnicima vrsta dokumenata.  
Jedino termini resursa raspoređenih na projektu nemaju mogućnost izbora boje, već će njihova boja odgovarati boji kalendara resursa (boji zaglavlja u kojem je prikazano ime resursa). Takvi termini mogu se prepoznati po oznaci **PR** (*Project Resource*), koja je prikazana iza vremena.  
Ako postoje zahtevi za godišnji odmor ili odsustvo, pozadina će biti obojena narandžastom bojom. Ako je sa tim zahtevom povezana generisana aktivnost, prikazivaće se u zavisnosti od opcije **Godišnji odmori** u filterima **Dokumenti**.  
Ako u istom danu postoji više termina nego što ih je moguće prikazati, u donjem desnom uglu prikazaće se strelica koja otvara detaljan prikaz tog dana.  
Svaki termin prikazuje tri osnovne informacije:

- vreme početka i završetka i opis vrste dokumenta
- kupca
- WBS projekta

Postavljanjem pokazivača miša iznad termina prikazaće se alatni opis (*tooltip*) sa dodatnim informacijama.  
Za svaku vrstu dokumenta desnim klikom moguće je generisati sledeći dokument predviđen tokom procesa upravljanja projektom.  
Na primer, iz termina resursa na projektu moguće je generisati **Planiranu intervenciju** ili **Zahtev za intervenciju**. Koristiće se vrste dokumenata definisane u opštim parametrima oblasti **Projekti**.  
Kalendar će se odmah ažurirati i promeniće boju u zavisnosti od nove vrste dokumenta.  
Dvostrukim klikom moguće je otvoriti odgovarajući dokument.  
Postupak konverzije moguće je primeniti i na višestruki izbor dokumenata.  
Takođe, desnim klikom moguće je obrisati upravo kreirani dokument, pri čemu će se vratiti prethodno stanje (u našem primeru ponovo će biti prikazan termin resursa na projektu).

Dostupne su sledeće konverzije:

- termin resursa na projektu → zahtev za intervenciju
- zahtev za intervenciju → planirana intervencija
- zahtev za intervenciju → intervencija
- termin resursa na projektu → planirana intervencija
- planirana intervencija → intervencija

Kalendar podržava i funkcionalnost **drag & drop**, pa će se prevlačenjem termina sa jednog dana na drugi ili iz kalendara jednog resursa u kalendar drugog resursa automatski ažurirati podaci u odgovarajućim dokumentima.

Ova operacija **nije dozvoljena** za intervencije čiji je status <u>različit od Uneto</u> i za <u>fakturisane aktivnosti</u>.

# Alatna traka

Na alatnoj traci dostupna su sledeća dugmad:

- **Uvećaj / Umanji**: omogućava uvećavanje ili umanjivanje prikaza izabranog perioda, sve do najdetaljnijeg prikaza po satima.
- **Pregled**: omogućava mesečni, nedeljni, dnevni ili **vremenski** (*Timeline*) prikaz. Potonji je posebno pogodan za uočavanje slobodnih dana ili nepopunjenih vremenskih intervala, na primer tokom perioda godišnjih odmora.
- **Grupiši prema**: omogućava promenu načina prikaza kalendara prema resursu, projektu, kupcu ili datumu