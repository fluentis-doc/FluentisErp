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

Form-ul este compus din 3 secțiuni distincte:

- filtre: permite filtrarea datelor dorite și, cu ajutorul butonului **Căutare** din *Ribbon bar*, pot fi vizualizate datele în tabelul de mai jos;  
- tabelul rezultatelor: conține toate informațiile referitoare la lotul căutat;  
- datele noului lot: cuprinde datele referitoare la noul lot.

#### Câmpuri specifice

- **Cantitate inițială lot de destinație**: reprezintă cantitatea inițială pe care o va avea lotul de destinație;  
- **Număr de colete lot de destinație**: reprezintă numărul de colete pe care îl va avea lotul de destinație;  
- **Șablon de descărcare lot sursă**: reprezintă șablonul de descărcare cu care va fi descărcat lotul sursă;  
- **Șablon de încărcare lot de destinatie**: reprezintă șablonul de încărcare cu care va fi încărcat lotul de destinație;  
- **Locație lot de destinație**: reprezintă locația în care va fi încărcat lotul de destinație.

:::note Important
Șabloanele de gestiune care pot fi utilizate în această procedură sunt doar cele care au flagul **Creează lot din lot** activ în tabelul [Șabloane de gestiune](/docs/configurations/tables/logistics/warehouse-templates/).  
Pentru a putea seta acest lucru, este necesară crearea unui șablon de **Descărcare**, cu flagurile **Gestionare loturi** și **Completează cantiatea inițială** active, flagul **Lista de componente** dezactivat și trebuie să aibă o **Contrapartidă** de **Încărcare**.
:::

#### Procedură  

1. inserați filtrele dorite au fost setate,  
2. faceți clic pe butonul **Căutare** prezent în *Ribbon bar* pentru a vizualiza rezultatele în tabelul de rezultate,    
3. selectați lotul dorit,  
4. introduceți datele referitoare la noul lot în partea de jos a formularului,  
5. apăsați butonul **Crează lot** pentru a crea noul lot pentru același articol.

### Creare lot din lot cu schimbare articol  

:::important Utilizare  
*Crearea Lotului din Lot cu Schimbare Articol* este o procedură avansată în Fluentis care permite crearea unui nou lot pentru un articol diferit, pornind de la un lot sursă. Această funcționalitate este deosebit de utilă în contextul gestionării stocurilor, atunci când este necesar să se transfere cantități de la un articol la altul, menținând întotdeauna o înregistrare detaliată a loturilor.

Această procedură este de asemenea organizată în trei secțiuni: un filtru pentru căutarea loturilor existente, un tabel care arată rezultatele căutării și o secțiune pentru introducerea datelor referitoare la noul lot. Utilizatorii pot specifica detalii precum codul articolului de destinație, cantitatea inițială și șabloanele de descărcare și încărcare. Datorită acestei proceduri, companiile pot optimiza fluxurile de stocuri și asigura o eficiență operațională mai mare, garantând că toate mișcările sunt trasabile și corect înregistrate în sistem.
:::

Această formă permite crearea unui nou lot cu un articol nou, pornind de la un lot diferit cu un alt articol.

Form-ul este compus din 3 secțiuni distincte:

- filtre: permite inserarea datelor dorite și, cu ajutorul butonului **Căutare** prezent în *Ribbon bar*, pot fi vizualizate datele în tabelul inferior;  
- tabelul rezultatelor: conține toate informațiile referitoare la lotul căutat;  
- datele noului lot: în această secțiune, situată sub tabelul rezultatelor, sunt incluse datele referitoare la noul lot.

#### Câmpuri specifice

- **Articol lot de destinație**: permite introducerea clasei, codului și descrierii articolului de destinație;  
- **Variantă articol**: permite introducerea variantei articolului de destinație;  
- **Cantitate inițială lot de destinație**: reprezintă cantitatea inițială pe care o va avea lotul de destinație;  
- **Număr de colete lot de destinație**: reprezintă numărul de colete pe care îl va avea lotul de destinație;  
- **Șablon de descărcare lot sursă**: reprezintă șablonul de descărcare cu care va fi descărcat lotul sursă;  
- **Șablon de încărcare lot de destinatie**: reprezintă șablonul de încărcare cu care va fi încărcat lotul de destinație;  
- **Locație lot de destinație**: reprezintă locația în care va fi încărcat lotul de destinație.



:::note Important
Șabloanele de gestiune care pot fi utilizate în această procedură sunt doar cele care au flagul **Creează lot din lot** activ în tabelul [Șabloane de gestiune](/docs/configurations/tables/logistics/warehouse-templates/).   
Pentru a putea activa acest lucru, este necesară crearea unui șablon de **Descărcare**, cu flagurile **Gestionare loturi** și **Completează cantiatea inițială** active, flagul **Lista de componente** dezactivat și trebuie să aibă o **Contrapartidă** de **Încărcare**.
:::

#### Procedură  

1. inserați filtrele dorite au fost setate,  
2. faceți clic pe butonul **Căutare** prezent în *Ribbon bar* pentru a vizualiza rezultatele în tabelul de rezultate,    
3. selectați lotul dorit,  
4. introduceți datele referitoare la noul lot în partea de jos a formularului,  
5. apăsați butonul **Crează lot** pentru a crea noul lot pentru articolul diferit.

Pentru detalii despre funcționarea comună a formelor, consultați linkul [Funcționalități, butoane și câmpuri comune](/docs/guide/common).