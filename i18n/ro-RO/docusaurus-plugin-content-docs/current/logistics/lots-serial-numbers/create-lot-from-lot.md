---
title: Crearea lotului din lot și Crearea lotului din lot cu schimbare articol (Creazione lotto da lotto e Creazione lotto da lotto con cambio articolo)
sidebar_position: 5
---

### Crearea lotului din lot (Creazione lotto da lotto)

:::important A cosa serve (La procedura di Creazione Lotto da Lotto di Fluentis è un'importante funzionalità...)
Procedura de Creere a Lotului din Lot a Fluentis este o funcționalitate importantă care permite generarea unui nou lot pe baza unui lot existent pentru același articol. Această operațiune este esențială pentru gestionarea eficientă a depozitului și pentru a răspunde rapid nevoilor de producție și logistică.

Procedura este structurată în trei secțiuni principale: un filtru pentru selecția datelor, o grilă care vizualizează informațiile referitoare la lotul ales și o secțiune dedicată datelor noului lot. Utilizatorii pot introduce informații cruciale, cum ar fi cantitatea inițială, numărul de colli și cauzele de descărcare și încărcare pentru a completa înregistrarea noului lot. Implementarea acestei proceduri nu doar simplifică mișcarea loturilor, ci ajută și la menținerea unei trasabilități precise în sistem, garantând cerințele de calitate și conformitate normativă.
:::

Această formă permite crearea unui nou lot pentru același articol, pornind de la un vechi lot.

Formularul se compune din 3 secțiuni distincte:

- **filtru**: în care este posibil să se filtreze datele dorite și, prin butonul **Căutare** (Ricerca) din *Ribbon bar*, datele pot fi vizualizate în grila de mai jos;     
- **grila rezultatelor**: conținând toate informațiile referitoare la lotul căutat;          
- **datele noului lot**: în această secțiune, aflată sub grila rezultatelor, se găsesc datele referitoare la noul lot.

Mai jos sunt prezentate datele referitoare la noul lot care trebuie creat:

> **Cantitate inițială lot de destinație**: indică cantitatea inițială pe care o va avea lotul de destinație;         
> **Număr colli lot de destinație**: indică numărul de colli pe care îl va avea lotul de destinație;              
> **Cauza de descărcare lot de origine**: indică cauza de descărcare cu care va fi descărcat lotul de origine;        
> **Cauza de încărcare lot de destinație**: indică cauza de încărcare cu care va fi încărcat lotul de destinație;      
> **Locația lotului de destinație**: indică locația în care va fi încărcat lotul de destinație.

:::note **ATENȚIE (ATTENZIONE)** 
Cauzele de depozit care pot fi utilizate în această procedură sunt doar cele care au indicatorul **Creează lot din lot** (Crea lotto da lotto) activ în tabelul [Cauzelor de depozit](/docs/configurations/tables/logistics/warehouse-templates/).
:::

Odată ce toate filtrele dorite sunt setate, va fi suficient să faceți clic pe butonul **Căutare** (Ricerca) din *Ribbon bar* pentru a vizualiza rezultatele în grila de rezultate.

După aceea, este necesar să selectați lotul dorit și să introduceți datele referitoare la noul lot în partea de jos a formularului, apoi este suficient să apăsați butonul **Creare lot** pentru a putea crea noul lot pentru același articol.

Pentru detalii referitoare la funcționarea comună a formularelor, consultați linkul [Funcționalități, butoane și câmpuri comune](/docs/guide/common).



### Crearea lotului din lot cu schimbare articol (Creazione lotto da lotto con cambio articolo)


:::important A cosa serve (La Creazione Lotto da Lotto con Cambio Articolo è una procedura avanzata...)
Crearea Lotului din Lot cu Schimbare Articol este o procedură avansată a Fluentis care permite crearea unui nou lot pentru un articol diferit, pornind de la un lot de origine. Această funcționalitate este deosebit de utilă în contextul gestionării stocurilor, când este necesară transferarea de cantități de la un articol la altul, menținând totodată o înregistrare detaliată a loturilor.

Această procedură este, de asemenea, organizată în trei secțiuni: un filtru pentru căutarea loturilor existente, o grilă care arată rezultatele căutării și o secțiune pentru introducerea datelor referitoare la noul lot. Utilizatorii pot specifica detalii precum codul articolului de destinație, cantitatea inițială și cauzele de descărcare și încărcare. Datorită acestei proceduri, companiile pot optimiza fluxurile de depozit și asigura o eficiență operațională mai mare, garantând că toate mișcările sunt trasabile și corect înregistrate în sistem.
:::


Această formă permite crearea unui nou lot pentru un nou articol pornind de la un alt lot cu un articol diferit.

Formularul se compune din 3 secțiuni distincte:

- **filtru**: în care este posibil să se filtreze datele dorite și, prin butonul **Căutare** (Ricerca) din *Ribbon bar*, datele pot fi vizualizate în grila de mai jos;     
- **grila rezultatelor**: conținând toate informațiile referitoare la lotul căutat;          
- **datele noului lot**: în această secțiune, aflată sub grila rezultatelor, se găsesc datele referitoare la noul lot.

Mai jos sunt prezentate datele referitoare la noul lot care trebuie creat:

> **Articol lot de destinație**: permite introducerea clasei, codului și descrierii articolului de destinație;            
> **Variantă articol**: permite introducerea variantei articolului de destinație;              
> **Cantitate inițială lot de destinație**: indică cantitatea inițială pe care o va avea lotul de destinație;         
> **Număr colli lot de destinație**: indică numărul de colli pe care îl va avea lotul de destinație;              
> **Cauza de descărcare lot de origine**: indică cauza de descărcare cu care va fi descărcat lotul de origine;        
> **Cauza de încărcare lot de destinație**: indică cauza de încărcare cu care va fi încărcat lotul de destinație;      
> **Locația lotului de destinație**: indică locația în care va fi încărcat lotul de destinație.

:::note **ATENȚIE (ATTENZIONE)** 
Cauzele de depozit care pot fi utilizate în această procedură sunt doar cele care au indicatorul **Creează lot din lot** (Crea lotto da lotto) activ în tabelul [Cauzelor de depozit](/docs/configurations/tables/logistics/warehouse-templates/).
:::

Odată ce toate filtrele dorite sunt setate, va fi suficient să faceți clic pe butonul **Căutare** (Ricerca) din *Ribbon bar* pentru a vizualiza rezultatele în grila de rezultate.

După aceea, este necesar să selectați lotul dorit și să introduceți datele referitoare la noul lot în partea de jos a formularului, apoi este suficient să apăsați butonul **Creare lot** pentru a putea crea noul lot pentru articolul respectiv.

Pentru detalii referitoare la funcționarea comună a formularelor, consultați linkul [Funcționalități, butoane și câmpuri comune](/docs/guide/common).