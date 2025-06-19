---
title: Substoc
sidebar_position: 3
---

Raportul se află pe calea **Logistică > Gestiune > Rapoarte de gestiune > Substoc** și permite operatorului să efectueze verificări pentru a gestiona corect stocurile. În mod special, după completarea corespunzătoare a registrului articole, poate să interogheze sistemul pentru a căuta articolele care în viitor vor ajunge în sub-stoc. De asemenea, este posibil, după ce procedura a fost efectuată, să emită automat cereri de achiziție în timpii corecți pentru articolele care ajung în sub-stoc.

### Tabele și parametrii 

O serie de setări, atât de natură tabelară predefinită, cât și o parametrizare corectă a algoritmilor de bază, sunt recomandate înainte de a executa sub-stocului:
- în *Registrul articolelor* este necesar să se completeze tab-ul *Aprovizionare*, în special datele pentru aprovizionare.        
- în *Parametrii MRP* ai articolelor care vo fi gestionate pe sub-stoc, este necesar ca *politica de gestionare să fie pe stoc*.        
- *Stocul minim* trebuie să fie mai mic sau egal cu *Momentul de reaprovizionare*.

### Procedura 

Procedura de sub-stoc utilizează un algoritm bazat pe consumul mediu zilnic calculat din tab-ul *Aprovizionare* al *Registrului articolelor*.

Se pornește de la stocul din momentul procesării și se verifică dacă, la data solicitată, prin consumul mediu, se ajunge sau nu în sub-stoc.

(*Stoc minim* - *Moment de reaprovizionare*) / *Zile pentru lansare comandă*

Procedura permite completarea câmpurilor: **Articol** (clasă, cod, descriere), eventuala **Variantă** doar pentru articolele gestionate pe variantă, **Data** limită până la care se dorește calcularea sub-stocului. De asemenea, este posibil să se activeze **Creare automată cereri de achiziție** pentru articolele în sub-stoc. Dacă această funcție este activată, este necesar să se specifice **Tipul** cererii documentului și, opțional, o **Notă** care să fie inserată în antetul cererii de achiziție.

După introducerea acestor filtre, apăsați butonul **Execută** pentru a procesa datele.

Tabelul de rezultate al execuției reprezintă lista procesărilor realizate, specificând **Numărul** și **Data procesării**.

Este important de remarcat că în procedura sub-stoc, atunci când CdA este generată și disponibilitatea este sub Punctul de Reîntregire, dacă pentru articol nu a fost setat un valoare de *stoc maxim*, cantitatea solicitată va fi egală cu **Moment de reaprovizionare – Disponibilitate**; în timp ce, dacă există și valoarea de *stoc maxim*, cantitatea solicitată va fi egală cu **Stoc max – Disponibilitate**.

:::note Nota
Se observă că, în cazul în care articolul este de tip aprovizionare *Achiziție*, va fi creată cererea de achiziție, dar nu comanda, în timp ce în cazul în care articolul este de aprovizionare *Producție* sau *Sistem lohn*, va fi creată comanda corespunzătoare.
:::

Pentru detalii despre funcționarea comună a form-urilor de listare, consultați [Vizualizare și listare](/docs/guide/common/operations-with-data/reports).