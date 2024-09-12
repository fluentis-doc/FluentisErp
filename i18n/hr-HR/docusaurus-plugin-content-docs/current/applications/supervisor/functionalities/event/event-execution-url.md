---
title: Url izvršenja Događaja
sidebar_label: Url izvršenja Događaja
sidebar_position: 4
---

Ova značajka pruža mogućnost pokretanja *Događaja* iz vanjskog izvora/aplikacije. 

Unutar glavnog obrasca [Događaja](event-intro), koji se nalazi na vrpci, nalazi se gumb **Generiraj URL izvršenja**. Nakon što ste odabrali *Događaj* iz donje mreže i zatim ga kliknuli,  aplikacija će prikazati prozor koji sadrži:   

- **Parametar zadatka za preusmjeravanje** odgovoran je za preusmjeravanje korisnika na drugu stranicu nakon izvršavanja URL-a. Ovaj parametar se može postaviti u *Zadatku*, unutar metode  *TaskCompleted* (dodavanjem URL vrijednosti u *Rječnik* i postavljanjem parametra *Zadatka* bez oznake *IsInputParamter*) 

- **Datum isteka** generiranog URL-a  

- **Generiraj URL** će sadržavati URL generiran klikom na gumb