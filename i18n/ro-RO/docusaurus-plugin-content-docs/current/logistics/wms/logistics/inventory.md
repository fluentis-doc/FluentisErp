---
title: Inventar 
sidebar_position: 6
---

:::important Utilizare
Procedura permite o gestionare completă și detaliată a stocurilor de gestiune. Operatorii pot crea inventare specifice, introducând numărul, data inventarului și alte informații relevante, inclusiv note și detalii despre operator. Prin crearea listelor de inventar, se pot aloca sarcini diferitelor persoane pentru a facilita procesul de numărare. În timpul inventarului, sistemul suportă introducerea datelor prin cititoare de coduri de bare, permițând înregistrarea rapidă a cantităților măsurate și gestionarea eventualelor articole pe loturi. La finalul inventarului, sistemul efectuează automat ajustarea cantităților faptice în raport cu cele scriptice, asigurând o aliniere precisă și la timp a stocurilor.
:::

Această procedură este utilizată pentru a popula o listă inventarială creată în WPF cu articolele citite prin coduri de bare.  

Operatorul, prin intermediul WMS, va putea căuta inventarul de referință și apăsând butonul *Caută*, va vizualiza doar listele de inventar asociate lui.  
Selectând lista și apăsând butonul *Modifică*, se va deschide form-ul de inserare unde, citind articolul și locația acestuia, vor fi încărcate datele corespunzătoare, iar operatorul va trebui să introducă cantitatea.  
Apăsând butonul de confirmare, procedura va completa în timp real lista de inventar cu datele tocmai introduse.  
În cazul în care articolul citit este gestionat pe loturi, va fi vizibil și câmpul corespunzător în care trebuie să fie introdus lotul care trebuie inventariat.  
Dacă un articol este citit a doua oară (același Clasă/Cod/Cod lot (dacă este gestionat pe loturi)) și este indicat în aceeași locație ca prima dată, va apărea un pop-up care întreabă dacă se dorește **Adăugarea** sau **Înlocuirea** cantității citite anterior.

După ce listele de inventor au fost finalizate, toate mișcările de ajustare vor fi create din Fluentis prin procedura de [Diferențe la inventar](/docs/logistics/physical-inventory/stock-difference).  

Pentru utilizarea acestui form, nu este necesar să se introducă parametrii în tabelul [Parametrii Încărcare/Descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

:::note Notă
Comportamentul listei de inventar în ceea ce privește locația poate fi modificat prin opțiunea **Păstrează locația** din tabelul [Tipuri liste de inventar](/docs/configurations/tables/logistics/stock-lists-types). Dacă este activ, în timpul inventarului cu WMS, locația introdusă nu va fi modificată până când nu va fi citită o altă locație; în caz contrar, dacă este dezactivat, locația va trebui să fie inserată de fiecare dată înainte de confirmarea articolului.
:::

Pentru informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod de bare**, consultați [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).