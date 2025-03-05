---
title: Parametri grupare ordine furnizori
sidebar_position: 8
---

Parametrii de grupare permit definirea modului în care să fie împărțite documentele în timpul procedurilor de execuție. În acest scop, se pot utiliza opțiuni specifice de grupare a documentelor pe baza diverselor proprietăți, cum ar fi categoria, tipul de document sau alte caracteristici relevante.            
Acești parametri generali de grupare trebuie configurați o singură dată și vor fi aplicați automat tuturor procedurilor, rămânând valabili pentru toți clienții și furnizorii. Totuși, dacă un client sau un furnizor solicită un comportament diferit de cel stabilit în parametrii generali, va fi necesară personalizarea parametrilor de grupare în registrul său.           
În acest mod, se asigură o gestionare flexibilă a execuțiilor, permițând satisfacerea cerințelor specifice fiecărui client sau furnizor, menținând totodată o configurare centralizată și coerentă pentru majoritatea operațiunilor.

Cu acești parametri se stabilesc regulile de grupare pentru procedurile: 
-  [**Creare ordine furnizori**](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders/) din form *Caută ordine clienți*.

Pentru crearea *Ordinelor furnizori* din *Ordine clienți*, recomandăm utilizarea procedurii [Creare automată ordine](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) cu *Parametrii* aferenți. 

:::note Notă
Dacă în registrul furnizorului, în tab *Parametri de grupare pw client/furnizor*, au fost introduse condiții de grupare diferite, acestea vor avea prioritate față de parametrii generali.
:::

Când ordinul furnizor este creat dintr-un singur ordin client, sunt prelute toate datele din antetul ordinului client. Pentru OF create din mai multe OC, sunt preluate datele din registrul furnizorului.

#### Câmpuri specifice

**Rezumat**: dacă este activ, în momentul creării ordinului furnizor din mai multe ordine clienți, va fi creat un singur document pe furnizor. Dacă nu este activ, va fi creat întotdeauna un document pentru fiecare ordin client. Gruparea funcționează doar pentru [Tipurile de ordine client](/docs/configurations/tables/sales/sales-order-types/) care au codificat același *Tip de ordin furnizor* de creat. Următorii parametrii trebuie utilizați simultan cu acest parametru.

**Grupare pe tip document**: dacă este activ, vor fi grupate într-un singur ordin toate documentele care au același *Tip de ordin client*.

**Grupare pe an**: dacă este activ, va fi realizată o grupare pe anul de inserare al ordinului client.

**Grupare pe lună**: pentru a putea efectua o grupare pe luna de creare a ordinelor, este necesar să fie activat și parametru-ul precedent.

**Grupare pe schimb valutar**: dacă este activ, documentele cu aceeași monedă și același schimb valutar vor fi grupate într-un singur ordin furnizor.

**Grupare pe ordin**: acest parametru este utilizat doar pentru *Crearea avizelor și facturilor de vânzare din dispoziția de livrare* (vezi [Parametri de grupare aviz](/docs/configurations/parameters/sales/dn-grouping) și [facturi](/docs/configurations/parameters/sales/invoice-grouping)).

**Grupare pe proiect**: dacă este activ, va fi realizată o grupare pe proiect. Gruparea funcționează și pentru proiectele introduse la nivelul rândului articolului. Dacă există rânduri de articol fără un proiect asociat, va fi creat un ordin diferit pentru toate articolele care nu îl conțin. Când proiectul a fost introdus în antetul documentelor de origine, va fi preluat și în antetul documentelor de destinație; în mod contrar, va fi păstrat doar pe liniile articol.

**Grupare pe tip și soluție de plată**: dacă este activ, va fi realizată o grupare pe baza tipului și soluției de plată introduse în ordinul client; aceste date vor fi preluate în antetul ordinului furnizor creat.

**Grupare pe destinație**: dacă este activ, va fi realizată o grupare pe baza destinației introduse în ordinul client în tab *Destinație*. Aceste date vor fi preluate în antetul ordinului furnizor creat.