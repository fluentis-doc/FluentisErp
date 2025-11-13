---

title: "Creare lot din lot și Creare lot din lot cu schimbare articol"
sidebar_position: 5
description: "Ghid pentru crearea loturilor în Fluentis ERP, fie dintr-un lot existent, fie cu schimbare articolului"
schema: TechArticle
tags:
  - logistica
  - gestiune
  - loturi
keywords:
  - creare lot
  - gestionare stocuri
  - Fluentis ERP
---

# Creare lot din lot și Creare lot din lot cu schimbare articol

## Creare lot din lot

:::important Utilizare
Procedura de *Creare Lot din Lot* din Fluentis ERP este o funcționalitate importantă care permite generarea unui nou lot pornind de la un lot existent al aceluiași articol. Această operațiune este esențială pentru gestionarea eficientă a gestiune și pentru a răspunde prompt cerințelor de producție și logistică.

Implementarea acestei proceduri nu doar simplifică manipularea loturilor, dar ajută și la menținerea unei trasabilități precise în sistem, asigurând cerințele de calitate și conformitate normativă.
:::

Acest form permite crearea unui nou lot, pentru același articol, pornind de la un lot vechi.  
Form-ul este împărțit în 3 secțiuni distincte:

- **Filtru**: unde se pot filtra datele dorite și cu butonul **Căutare** din *Ribbon bar* se pot vizualiza datele în tabelul de mai jos.
- **Tabel de rezultate**: conține toate informațiile legate de lotul căutat.
- **Date nou lot**: în această secțiune, sub tabelul de rezultate, sunt prezente datele noului lot.

### Date nou lot

- **Cantitate inițială lot de destinație**: reprezintă cantitatea inițială a lotului de destinație.
- **Număr de colete lot de destinație**: indică numărul de colete al lotului de destinație.
- **Șablon descărcare lot sursă**: reprezintă șablonul de descărcare cu care va fi descărcat lotul sursă.
- **Șablon de încărcare lot de destinație**: indică șablonul de încărcare cu care va fi încărcat lotul de destinație.
- **Locație lot de destinație**: indică locația în care va fi încărcat lotul de destinație.

:::noteAtenție
Șabloanele de gestiune care pot fi utilizate în această procedură sunt doar cele cu flagul **Creează lot din lot** activ în tabelul [Șabloane de gestiune](/docs/configurations/tables/logistics/warehouse-templates/).  
Pentru a le seta, trebuie creat un șablon de **Descărcare**, cu flagurile **Gestionare loturi** și **Completează cantiatea inițială** active, flagul **Lista de componente** dezactivat și trebuie să aibă o **contrapartidă** de **Încărcare**.
:::

### Pași pentru crearea noului lot 

1. Setați filtrele dorite.
2. Apăsați butonul **Caută** din *Ribbon bar* pentru afișarea rezultatelor în tabel.
3. Selectați lotul dorit.
4. Introduceți datele legate de noul lot în partea de jos a formularului.
5. Apăsați butonul **Crează lot** pentru a crea noul lot pentru același articol.

## Creare lot din lot cu schimbare articol 

:::important Utilizare
*Crearea Lot din Lot cu Schimbare Articol* este o procedură avansată în Fluentis care permite crearea unui nou lot pentru un articol diferit, pornind de la un lot de sursă. Această funcționalitate este utilă în gestionarea stocurilor, atunci când este necesar transferul cantităților de la un articol la altul, păstrând întotdeauna o înregistrare detaliată a loturilor.  
Prin această procedură, companiile pot optimiza fluxurile de gestiune și asigura o eficiență operațională mai mare, garantând că toate mișcările sunt trasabile și corect înregistrate în sistem.
:::

Acest form permite crearea unui nou lot cu un articol nou, pornind de la un lot diferit cu un articol diferit.  
Form-ul este împărțit în 3 secțiuni distincte:

- **Filtru**: unde se pot filtra datele dorite și prin butonul **Căutare** din *Ribbon bar* se pot vizualiza datele în tabelul de mai jos.
- **Tabel de rezultate**: conținând toate informațiile legate de lotul căutat.
- **Date nou lot**: în această secțiune, sub tabelul de rezultate, sunt prezente datele noului lot.

### Date nou lot 

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

### Pași pentru crearea noului lot cu schimbare articol 

1. inserați filtrele dorite au fost setate,  
2. faceți clic pe butonul **Căutare** prezent în *Ribbon bar* pentru a vizualiza rezultatele în tabelul,    
3. selectați lotul dorit,  
4. introduceți datele referitoare la noul lot în partea inferioară a formului,  
5. apăsați butonul **Crează lot** pentru a crea noul lot pentru articolul diferit.

## Rezumat și informații suplimentare 

În acest document au fost tratate procedurile de *Creare Lot din Lot* și *Creare Lot din Lot cu Schimbare Articol în Fluentis ERP.  

Pentru mai multe informații, consultați următoarele ghiduri:
- [Șabloane de gestiune](/docs/configurations/tables/logistics/warehouse-templates/)
- [Funcționalități, butoane și câmpuri comune](/docs/guide/common)
