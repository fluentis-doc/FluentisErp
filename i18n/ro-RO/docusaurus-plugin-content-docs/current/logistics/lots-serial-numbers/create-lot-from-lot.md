---
title: Creare lot din lot și Creare lot din lot cu schimbare articol
sidebar_position: 5
---

### Crearea lot din lot

:::important Utilizare
Procedura *Creării Lotului din Lot* în Fluentis este o funcționalitate importantă care permite generarea unui nou lot pornind de la unul existent pentru același articol. Această operație este esențială pentru a gestiona eficient stocul și pentru a răspunde rapid necesităților din producție și logistică.

Procedura este structurată în trei secțiuni principale: un filtrul pentru selecția datelor, un tabel care vizualizează informațiile referitoare la lotul ales și o secțiune dedicată datelor noului lot.  
Utilizatorii pot introduce informații esențiale precum cantitatea inițială, numărul de colete și șabloanele de descărcare și încărcare pentru a completa înregistrarea noului lot.  
Implementarea acestei proceduri nu doar simplifică manipularea loturilor, ci ajută și la menținerea unei trasabilități precise în sistem, asigurând cerințele de calitate și conformitate regulatoare.
:::

Acest form permite crearea unui nou lot, pentru același articol, pornind de la un lot vechi.

Formul este compus din 3 secțiuni distincte:

- filtre: în care este posibilă filtrarea datelor dorite și, cu ajutorul butonului **Căutare** din *Ribbon bar*, pot fi vizualizate datele în tabelul de mai jos;  
- tabelul rezultatelor: conține toate informațiile referitoare la lotul căutat;  
- datele noului lot: în această secțiune, situată sub tabelul rezultatelor, sunt incluse datele referitoare la noul lot.

#### Câmpuri specifice

- **Cantitate inițială lot de destinație (Quantità iniziale lotto di destinazione)**: reprezintă cantitatea inițială pe care o va avea lotul de destinație;  
- **Număr de colete ai lotului de destinație (Numero colete lotto di destinazione)**: reprezintă numărul de colete pe care îl va avea lotul de destinație;  
- **Șablon de descărcare a lotului de origine (Causale di scarico lotto di origine)**: reprezintă cauza de descărcare cu care va fi descărcat lotul de origine;  
- **Șablon de încărcare a lotului de destinatie (Causale di carico lotto di destinazione)**: reprezintă cauza de încărcare cu care va fi încărcat lotul de destinație;  
- **Locația lotului de destinație (Ubicazione lotto di destinazione)**: reprezintă locația în care va fi încărcat lotul de destinație.

:::note Important
Cauzele de gestiune care pot fi utilizate în această procedură sunt doar cele care au flagul **Creează lot din lot (Crea lotto da lotto)** activ în tabela de [Cauze de gestiune (Causali di magazzino)](/docs/configurations/tables/logistics/warehouse-templates/).  
Pentru a putea seta acest lucru, este necesară crearea unei cauze de **Descărcare (Scarico)**, cu flagurile **Gestionare loturi (Gestione lotti)** și **Integrarea cantității inițiale (Integra quantità iniziale)** active, flagul **Diagrama de bază (Distinta base)** dezactivat și trebuie să aibă o **contraparte (contro partita)** de **Încărcare (Carico)**.
:::

Odată ce toate filtrele dorite au fost setate, trebuie să faceți clic pe butonul **Căutare (Ricerca)** prezent în *Ribbon bar* pentru a vizualiza rezultatele în tabelul de rezultate.

După aceea, este necesar să selectați lotul dorit și să introduceți datele referitoare la noul lot în partea de jos a formularului, după care trebuie să apăsați butonul **Crearea lotului (Creazione lotto)** pentru a putea crea noul lot pentru același articol.

Pentru detalii despre funcționarea comună a formelor, consultați linkul [Funcționalități, butoane și câmpuri comune](/docs/guide/common).


### Crearea lotului din lot cu schimbare articol (Creazione lotto da lotto con cambio articolo)

:::important Utilizare
Crearea Lotului din Lot cu Schimbare Artikel este o procedură avansată în Fluentis care permite crearea unui nou lot pentru un articol diferit, pornind de la un lot de origine. Această funcționalitate este deosebit de utilă în contextul gestionării stocurilor, atunci când este necesar să se transfere cantități de la un articol la altul, menținând întotdeauna o înregistrare detaliată a loturilor.

Această procedură este de asemenea organizată în trei secțiuni: un filtru pentru căutarea loturilor existente, un tabel care arată rezultatele căutării și o secțiune pentru introducerea datelor referitoare la noul lot. Utilizatorii pot specifica detalii precum codul articolului de destinație, cantitatea inițială și șabloanele de descărcare și încărcare. Datorită acestei proceduri, companiile pot optimiza fluxurile de stocuri și asigura o eficiență operațională mai mare, garantând că toate mișcările sunt trasabile și corect înregistrate în sistem.
:::

Această formă permite crearea unui nou lot cu un articol nou, pornind de la un lot diferit cu un alt articol.

Formul este compusă din 3 secțiuni distincte:

- filtrul: în care este posibilă filtrarea datelor dorite și, cu ajutorul butonului **Căutare (Ricerca)** prezent în *Ribbon bar*, pot fi vizualizate datele în tabelul de mai jos;  
- tabelul rezultatelor: conținând toate informațiile referitoare la lotul căutat;  
- datele noului lot: în această secțiune, situată sub tabelul rezultatelor, sunt incluse datele referitoare la noul lot.

Mai jos sunt prezentate datele referitoare la noul lot de creat:

- **Articolul lotului de destinație (Articolo lotto di destinazione)**: permite introducerea clasei, codului și descrierii articolului de destinație;  
- **Varianta articolului (Variante articolo)**: permite introducerea variantei articolului de destinație;  
- **Cantitate inițială a lotului de destinație (Quantità iniziale lotto di destinazione)**: reprezintă cantitatea inițială pe care o va avea lotul de destinație;  
- **Număr de colete ai lotului de destinație (Numero colete lotto di destinazione)**: reprezintă numărul de colete pe care îl va avea lotul de destinație;  
- **Șablon de descărcare a lotului de origine (Causale di scarico lotto di origine)**: reprezintă causa de descărcare cu care va fi descărcat lotul de origine;  
- **Șablon de încărcare a lotului de destinație (Causale di carico lotto di destinazione)**: reprezintă cauza de încărcare cu care va fi încărcat lotul de destinație;  
- **Locația lotului de destinație (Ubicazione lotto di destinazione)**: reprezintă locația în care va fi încărcat lotul de destinație.

:::note Important
Cauzele de gestiune care pot fi utilizate în această procedură sunt doar cele care au flagul **Creează lot din lot (Crea lotto da lotto)** activ în tabela de [Cauze de gestiune (Causali di magazzino)](/docs/configurations/tables/logistics/warehouse-templates/).  
Pentru a putea activa acest lucru, este necesară crearea unei cauze de **Descărcare (Scarico)**, cu flagurile **Gestionare loturi (Gestione lotti)** și **Integrarea cantității inițiale (Integra quantità iniziale)** active, flagul **Diagrama de bază (Distinta base)** dezactivat și trebuie să aibă o **contraparte (contro partita)** de **Încărcare (Carico)**.
:::

Odată ce toate filtrele dorite au fost setate, trebuie să faceți clic pe butonul **Căutare (Ricerca)** prezent în *Ribbon bar* pentru a vizualiza rezultatele în tabelul de rezultate.

După aceea, este necesar să selectați lotul dorit și să introduceți datele referitoare la noul lot în partea de jos a formularului, după care trebuie să apăsați butonul **Crearea lotului (Creazione lotto)** pentru a putea crea noul lot pentru articolul diferit.

Pentru detalii despre funcționarea comună a formelor, consultați linkul [Funcționalități, butoane și câmpuri comune](/docs/guide/common).