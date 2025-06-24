---
title: Configurare 
sidebar_position: 2
---

### Instalare pe device 

Pentru a instala aplicația pe dispozitiv, este necesar să folosiți un fișier .apk.

### Descărcare actualizări

Dacă mediul client este actualizat, nu este necesară reinstalarea aplicației, deoarece automat aplicația preia toate informațiile de pe server și descarcă actualizările. 
Există cazuri specifice în care este necesară înlocuirea apk-ului pe dispozitiv, deci va fi necesar să reinstalați aplicația.

### Configurare în WPF

- **Meniu/Utilizator**: creați un *Meniu* personalizat în care să afișați doar form-urile  utilizate. Utilizatorul WMS trebuie să aibă opțiunea activată pe *Soluție Fluentis WMS*.

- **Parametrii gestiune încărcare/descărcare pe utilizator**: acești parametri sunt utilizați pentru a introduce restricții pentru utilizatori și pot fi setați în tabelul [Parametri gestiune încărcare/descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) disponibil în *Parametri > Parametri generali*. În absența acestor parametri, utilizatorul poate efectua operațiuni de mișcare pe orice gestiune, dar aceasta implică selectarea unei gestiuni în fiecare form cu șablonul aferent. Desigur, această modalitate nu este corectă și nu este gestionabilă de operator. În acești parametrii se poate insera, pe fiecare form și operator, gestiunea și șablonul de bază care vor fi completate automat la deschiderea form-ului.

- **Barcode tokenizer**: codurile de bare pot fi configurate în [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer), disponibil în: *Tabele > Setări generale > Barcode tokenizer*. Acestea permit "instruirea" programului să interpreteze codurile de bare și să execute anumite acțiuni.

- **U.M. Alternativă - Def. WMS**: pentru form-urile  *Încărcare Articol*, *Descărcare Articol*, *Mută Articol*, *Ajustare Articol*, *Stoc* și *Inventar*, a fost introdusă posibilitatea de a mișca mărfurile cu U.M. Alternativă. Configurarea se obține activând opțiunea *Default WMS* în tab-ul [U.M. Alternative](/docs/erp-home/registers/items/create-new-item) disponibil în *Registrul Articolului*. În form-urile  menționate, va fi afișată doar U.M. Alternativă în câmpul U.M., iar mișcările create vor avea U.M. Alternativă și Cantitatea Alternativă populate conform factorului de conversie.

- **Form în WPF**: pentru a accesa form-urile în WPF, utilizatorul trebuie să aibă soluția F21-WMS.

- **Licență WMS**: WMS are licențe dedicate. În tab-ul Licență în WPF este posibil să verificați numărul de licențe dedicate pentru WMS. Licența este utilizată de utilizatorul care folosește Soluția F21-WMS. Deci, fie că accesul este efectuat pe dispozitiv mobil, fie din WPF cu acea soluție.