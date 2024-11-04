---
title: Radna stanica
sidebar_position: 2
---

:::important Čemu služi
Uvod u radne stanice MES sustava Fluentis ključan je za razumijevanje učinkovitog upravljanja resursima i proizvodnim operacijama unutar radnog okruženja. MES sustav nudi posebnu tablicu za kodiranje radnih stanica, koja omogućuje unos, izmjenu ili brisanje zapisa. Kroz intuitivno sučelje, korisnici mogu pretraživati radne stanice putem filtra, a prilikom unosa novih kodova potrebno je unijeti kod i opis radne stanice.

Svaka radna stanica može biti povezana s različitim resursima, ovisno o operativnim potrebama. Na primjer, ako je predviđena povezanost s više resursa, prilikom pokretanja MES sustava, korisnik će morati ručno odabrati željeni resurs. Nasuprot tome, u slučaju povezanosti s jednim resursom, sustav automatski učitava sve započete operativne faze tog resursa, pojednostavljujući tijek rada i poboljšavajući učinkovitost.  
:::

Tablica omogućuje upravljanje kodiranjem različitih vrsta  *Radnih Stanica*.

Omogućuje unos novih zapisa ili pretraživanje već postojećih kako bi se prikazali, izmijenili ili izbrisali.  

**Pretraživanje radnih stanica**

Obrazac se sastoji od područja za filtriranje i rezultate. Nakon što se postave svi željeni filtri, dovoljno je kliknuti na gumb  **Taži** kako bi se rezultati prikazali unutar mreže rezultata.  

**Unos radne stanice**

Za unos novih kodova potrebno je kliknuti na prazan red u glavnoj mreži ili pritisnuti gumb **Novo** i unijeti sljedeće podatke:        
- **Kod**: označava naziv računala koje će služiti kao radna stanica;   

:::note NAPOMENA
Naziv računala možete dobiti pokretanjem naredbe *hostname* iz naredbenog retka.  
:::         
- **Opis**: označava opis naziva računala koje će služiti kao radna stanica.     

U sekundarnoj mreži (ispod glavne), možete dodijeliti *resurse* koji mogu raditi na svakoj radnoj stanici.  
- U slučaju da je radnoj stanici dodijeljen samo jedan resurs (npr. radni centar), MES će automatski učitati taj resurs i sve već započete faze koje su s njim povezane. Primjer radne stanice posvećene radnom centru.        
- U slučaju da su radnoj stanici dodijeljeni više resursa (npr. radni centri), MES neće automatski učitati nijedan od njih pri pokretanju, a korisnik će moći odabrati samo jedan od dodijeljenih resursa. Primjer radne stanice posvećene odjelu gdje će se izjavljivati sve faze svih radnih centara tog odjela.     
- U slučaju da radnoj stanici nije dodijeljen nijedan resurs, MES neće automatski učitati nijedan resurs pri pokretanju, a korisnik će moći odabrati bilo koji resurs koji je unesen u tablicu [Proizvodnih resursa](/docs/production/mes/production-resources).       
Primjer radne stanice posvećene tehničaru koji će izjavljivati svoje aktivnosti za sve radne centre.       

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom radu obrazaca, molim pogledajte sljedeću poveznicu: [Zajedničke funkcionalnosti, gumbe i polja](/docs/guide/common).