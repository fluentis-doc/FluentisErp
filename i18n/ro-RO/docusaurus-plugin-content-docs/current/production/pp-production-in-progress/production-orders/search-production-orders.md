---
title: Caută Ordine de Producție
description: Ghid pentru căutarea și gestionarea avansată a ordinelor de producție în Fluentis, cu funcții de generare loturi, modificare stare și completare date.
sidebar_position: 2
schema: TechArticle
tags:
  - Producție
  - Ordine
  - Planificare
last_update:
  author: Fluentis Documentation Team
---

# Caută Ordine de Producție

:::important Utilizare

Modulul dedicat gestionării **Ordinelor de Producție** în Fluentis este proiectat pentru a susține eficient activitățile de control și planificare a producției.  
Din form-ul principal este posibilă vizualizarea și gestionarea ordinelor în diferite stări (de exemplu *Lansat* sau *În execuţie*), făcând ușoară diferențierea între ordinele ce pot fi lansate și cele deja în curs de procesare.

Una dintre funcționalitățile principale este posibilitatea de a crea mai multe loturi pornind de la un singur ordin de producție, permițând astfel o flexibilitate mai mare și o gestionare mai precisă a cantităților de produs. Fiecare lot poate fi asociat cu detalii specifice, asigurând astfel o trasabilitate optimă. Gestionarea intuitivă a ordinelor nu doar simplifică monitorizarea etapelor de producție, ci facilitează și adaptarea la schimbările cerințelor operaționale, făcând din Fluentis un aliat strategic pentru eficiența productivă.
:::

Modulul **Ordine de Producție** permite căutarea și gestionarea ordinelor de producție printr-un formular dedicat.

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

#### Butoane specifice

- **Generare loturi**: activ doar după selectarea unui ordin, permite crearea de loturi de producție pornind de la cantitatea ordinului de producție; astfel, oferă posibilitatea de a crea noi ordine de producție cu același număr principal, dar cu număr de lot diferit și pentru fiecare dintre acestea se poate indica cantitatea de produs.

Dacă ordinul se află în starea **Executat**, se activează și opțiunea **Menţine referinţa la comanda de producţie**, care permite să se decidă dacă noul lot al ordinului trebuie creat cu referință la proiectul sursă sau nu; în acest caz este important de reținut că proiectul va rămâne în starea *Executat*, deci, dacă este necesar, utilizatorul va trebui să îl redeschidă manual.

:::note Notă
Cantitatea lotului sursă **nu poate fi modificată** dacă au fost create *Liste de ieșiri*, *Declarații de producție*, sau în cazul în care unele materiale au fost deja consumate.

Este totuși posibilă generarea de noi loturi, dar **fără a modifica cantitatea lotului sursă**.
:::

> **Selectează proiect**: acest buton permite asocierea unui proiect la ordinele de producție selectate;    
> **Modifică stare ordin**: acest buton, care devine activ doar după selectarea unuia sau mai multor ordine, permite modificarea stării ordinelor selectate (Lansat, În execuție, Executat, Arhivat);     
> **Completează date ordin**: acest buton, care devine activ doar după selectarea unuia sau mai multor ordine, permite regenerarea datelor ordinului de producție, înlocuindu-le cu cele prezente în *lista de componente* și în *ciclul de lucru* din registru;    
> **Recalculează costuri ordine de producţie**: acest buton permite recalcularea costurilor de producție pentru ordinele de producție selectate;            
> **Activează obligatoriu**: permite activarea opțiunii **Obligatoriu** în toate ordinele de producție selectate;       
> **Dezactivează obligatoriu**: permite dezactivarea opțiunii **Obligatoriu** în toate ordinele de producție selectate.