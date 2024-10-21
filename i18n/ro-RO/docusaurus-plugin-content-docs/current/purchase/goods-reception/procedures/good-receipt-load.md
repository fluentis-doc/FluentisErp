---
title: Încărcare Recepţie Marfuri
sidebar_position: 4
---

Procedura se deschide prin parcursul **Achiziții > Recepție mărfuri > Încărcare recepție mărfuri** și permite executarea/restaurarea operațiunilor de înregistrare în depozit a articolelor prezente în *Recepția mărfuri*. 

Masca se compune din trei tab-uri: *Filtru*, *Parametru* și *Rollback*.     

### Filtru

În acest tab, utilizatorul are posibilitatea de a introduce filtre pentru a căuta recepția mărfurilor de încărcat în depozit.   
Este posibil să filtrați după: *Furnizor*, *Număr recepție*, *Din/Până la data recepției*. 

- **Data înregistrare**: permite specificarea datei referitoare la înregistrarea în depozit.

:::important Ține minte
Dacă în [Parametrii comenzilor furnizori](/docs/configurations/parameters/purchase/purchase-orders-parameters#carico) > tab Încărcare indicatorul **Creează înregistrare cu data documentului** este activ, înregistrarea de depozit va fi întotdeauna efectuată cu *Data recepției* introdusă în antetul documentului, ignorând *Data înregistrării depozitului* introdusă în acest formular.    
Dacă *Data încărcare* nu este completată, înregistrarea în depozit va fi creată cu *Data înregistrării depozitului* introdusă în acest formular sau cu data curentă, dacă câmpul *Data înregistrării* nu este completat.
:::

*Butonuri specifice*:  

> **Caută**: permite căutarea recepțiilor de înregistrat în depozit.   
> **Încărcat**: permite executarea încărcării recepțiilor selectate, pe baza parametrilor introduși în tab-ul următor.


### Parametri

În tab-ul *Parametri* este posibil să alegeți, cu indicatorii corespunzători, cum să tratați articolele eventual necodificate sau fără depozit și cauză prezente în document. Opțiunile disponibile sunt:  

- **Ignoră recepţia care conţine articole necodificate**: nu permite încărcarea parțială a documentului dacă acesta conține cel puțin un articol necodificat.       
- **Ignoră articolele necodificate din recepţie**: permite încărcarea parțială a documentului, omitem articolele necodificate.  


- **Ignoră recepţia care conţine articole fără gestiune/şablon**: nu permite încărcarea parțială a documentului dacă acesta conține cel puțin un articol fără depozit și cauză.      
- **Ignoră articolele din recepţie fără gestiune/şablon**: permite încărcarea parțială a documentului, omitem articolele care nu au depozit și cauză.     
- **Utilizează următoarele valori pt. articolele fără gestiune/şablon**: asigură încărcarea completă a documentului. Pentru toate articolele găsite fără depozit și cauză în recepțiile selectate, setează datele introduse în câmpurile de mai jos: *Gestiune* și *Şablon*.

:::important Ține minte
Dacă în [Parametrii comenzilor furnizori](/docs/configurations/parameters/purchase/purchase-orders-parameters) > tab Încărcare indicatorul **Prioritate depozit și cauză de încărcare** este activ, vor fi utilizate întotdeauna *Depozitul* și *Cauza* introduse în parametrii, ignorând cele prezente în recepția mărfurilor pentru fiecare linie de articol, altfel vor avea prioritate cele introduse în document.  
:::

### Rollback

În acest tab, utilizatorul are posibilitatea de a căuta, vizualiza și anula operațiunile de înregistrare efectuate.

Datele din grilele de mai jos, **Recepție mărfuri** și **Înregistrare**, corespund înregistrării de încărcare selectate în grila superioară (după ce au fost filtrate datele). În plus, în aceste două grile, există posibilitatea de a vizualiza recepția mărfurilor și înregistrarea sa de depozit prin dublu click pe linie.

*Butonuri specifice*:  
> **Caută**: permite căutarea facturilor încărcate. Rezultatul acestei proceduri este vizualizat în grilele de rezultate.  
> **Rollback**: permite ștergerea întregii înregistrări de încărcare selectate.