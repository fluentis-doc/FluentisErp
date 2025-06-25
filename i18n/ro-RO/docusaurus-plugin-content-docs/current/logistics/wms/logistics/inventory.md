---
title: Inventar
sidebar_position: 6
---

:::important Utilizare
Această procedură permite o gestionare completă și detaliată a stocurilor. Operatorii pot crea inventare specifice, introducând numărul, data inventarului și alte informații relevante, inclusiv note și detalii despre operator. 

Se pot genera liste de inventar pentru a distribui sarcini diferitelor persoane, facilitând astfel procesul de numărare. Sistemul suportă introducerea datelor prin cititoare de coduri de bare, asigurând o înregistrare rapidă și precisă a cantităților măsurate, inclusiv gestionarea articolelor pe loturi. 

La finalul inventarulu, sistemul ajustează automat cantitățile faptice în raport cu cele scriptice, garantând o actualizare corectă și la timp a stocurilor.
:::

### Procedura  

Această procedură este utilizată pentru a popula o listă de inventar creată în WPF cu articolele citite cu ajutorul codurilor de bare:  
1. Prin intermediul WMS, se caută inventarul de referință. Apăsând butonul **Caută**, vor fi afișate doar listele de inventar asociate operatorului.

2. Selectând o listă și apăsând butonul **Modifică**, se deschide formularul de introducere a datelor.

3. Operatorul scanează codul articolului și al locației, iar datele corespunzătoare vor fi afișate automat.

4. Se introduce cantitatea.

5. Apăsând butonul de confirmare, lista de inventar este actualizată în timp real cu datele introduse.

6. Dacă articolul este gestionat pe loturi, va apărea un câmp suplimentar unde trebuie introdus lotul aferent.

7. Dacă același articol (identificat prin Clasă/Cod și, dacă este cazul, Cod lot) este citit din nou în aceeași locație, va apărea un mesaj care oferă opțiunea de a **Adăuga** la cantitatea existentă sau de a **Înlocui** cantitatea anterioară.

### Finalizare inventar

După încheierea introducerii datelor în listele de inventar, toate ajustările de stoc vor fi procesate automat în Fluentis prin procedura de [Diferențe la inventar](/docs/logistics/physical-inventory/stock-difference).
:::note Notă  
Comportamentul listei de inventar privind locația poate fi modificat prin opțiunea **Păstrează locația** din tabelul [Tipuri liste de inventar](/docs/configurations/tables/logistics/stock-lists-types):

- Dacă opțiunea este activată, locația introdusă nu se schimbă până la citirea unei noi locații.
- Dacă este dezactivată, locația trebuie introdusă înainte de confirmarea articolului.:::

Pentru utilizarea form-ului nu este necesară configurarea parametrilor în tabelul [Parametrii Încărcare/Descărcare pe utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

Pentru detalii despre codificarea codurilor de bare care trebuie scanate în câmpul **Cod de bare**, consultați documentația [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).
