---
title: Încărcare Recepţie Mărfuri (Carico Ricevimento Merci)
sidebar_position: 4
---

Procedura se deschide prin calea **Achiziţii > Recepţie mărfuri > Încărcare recepţie mărfuri** și permite executarea/restaurarea operațiunilor de înregistrare în gestiune a articolelor prezente în *Recepţie mărfuri*.

Interfața este compusă din trei tab-uri: *Filtru*, *Parametrii* și *Restaurare*.

### 1. Filtru

În acest tab utilizatorul are posibilitatea de a introduce filtre pentru a căuta recepţia mărfurilor de încărcat în gestiune.   
Se poate filtra după: *Furnizor*, *Număr recepţie*, *De la/Până la data recepţiei*.

- **Data înregistrare**: permite specificarea datei relative la înregistrarea în gestiune.

:::importantNotă
Dacă în [Parametri ordine furnizori](/docs/configurations/parameters/purchase/purchase-orders-parameters#carico) > tab *Încărcare*, flagul **Creează înregistrare cu data documentului** este activ, înregistrarea de gestiune va fi întotdeauna executată cu *Data recepţiei* introdusă în antetul documentului, ignorând *Data înregistrării în gestiune* introdusă în acest formular.    
Dacă *Data încărcării* nu este completată, înregistrarea de gestiune va fi creată cu *Data înregistrării în gestiune* introdusă în acest formular sau cu data curentă, dacă câmpul *Data înregistrării* nu este completat.
:::

#### Butoane specifice  
> **Caută**: permite căutarea recepţiilor de înregistrat în gestiune.  
> **Încărcare**: permite executarea încărcării recepţiilor selectate, în funcție de parametrii introduși în tab-ul următor.

### 2. Parametri

Tab-ul *Parametrii* permite să alegeți, cu ajutorul opțiunilor corespunzătoare, cum să tratați eventualele articole necodificate sau fără gestiune și șablon prezente în document. Opțiunile disponibile sunt:  

- **Ignoră recepţia care conţine articole necodificate**: nu permite încărcarea parțială a documentului dacă acesta conține cel puțin un articol necodificat.       
- **Ignoră articolele necodificate din recepţie**: permite încărcarea parțială a documentului, ignorând articolele necodificate.  
- **Ignoră recepţia care conţine articole fără gestiune/şablon**: nu permite încărcarea parțială a documentului dacă acesta conține cel puțin un articol fără gestiune și șablon.      
- **Ignoră articolele din recepţie fără gestiune/şablon**: permite încărcarea parțială a documentului, ignorând articolele care nu au gestiune și șablon.     
- **Utilizează următoarele valori pentru articolele fără gestiune/şablon**: asigură încărcarea completă a documentului. Pentru toate articolele găsite fără gestiune și șablon în recepţiile selectate, se setează datele introduse în câmpurile de mai jos: *Gestiune* și *Șablon*.

:::important Notă
Dacă în [Parametri ordine furnizori](/docs/configurations/parameters/purchase/purchase-orders-parameters) > tab Încărcare, flagul **Prioritate gestiune și șablon de încărcare** este activ, vor fi întotdeauna utilizate *Gestiunea* și *Șablon* introduse în parametri, ignorându-le pe cele prezente în recepţia mărfurilor pentru fiecare rând de articol, altfel vor avea prioritate cele introduse în document.  
:::

### 3. Restaurare

În acest tab, utilizatorul are posibilitatea de a căuta, vizualiza și anula operațiunile de înregistrare executate.

Datele din tabelele inferioare, **Recepţie mărfuri** și **Înregistrare**, corespund înregistrării de încărcare selectate în tabelul superior (după ce ați filtrat datele). În plus, în aceste ultime două tabele, există posibilitatea de a vizualiza recepţia mărfurilor și înregistrarea sa de gestiune prin dublu click pe rând.

#### Butoane specifice  
> **Caută**: permite căutarea facturilor încărcate. Rezultatul acestei proceduri este afișat în tabelul de rezultate.  
> **Restaurare**: permite ștergerea întregii înregistrări de încărcare selectate.