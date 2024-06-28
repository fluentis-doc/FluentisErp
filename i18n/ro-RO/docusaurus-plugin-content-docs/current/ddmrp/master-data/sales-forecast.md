---
title: Previziuni vânzări
sidebar_position: 11
---

Acest tabel permite inserarea previziunilor de vânzăre pentru produsele finite obținute în fabrică și au un detaliu maxim săptămânal (previziuni de vânzări pe săptămână).

*Notă*: în schimb, pentru produsele distribuite se folosește tabelul previziunilor de consum zilnic.

Necesitatea unei previziuni a vânzărilor în DDMRP este mult mai rară decât într-un MRP, deoarece Master Production Schedule nu este folosit, deoarece nu este necesar pentru a anticipa cererea așa cum este într-un MRP convențional.

Utilizarea procedurii *Previziuni vânzări* este necesară doar atunci când se știe că în viitor cererea pentru un produs finit va varia semnificativ și pe o perioadă scurtă (o perioadă de timp comparabilă cu timpul de producție cumulat al produsului finit).

Într-o astfel de situație, stocurile existente pentru articolele buffer în lista produsului finit nu ar fi suficiente, iar realizarea produselor finite în timpul și cantitățile stabilite în previziunile de vânzări ar fi imposibilă.

Dacă ar exista o variație semnificativă a cererii, dar progresivă și pe o perioadă de timp mai lungă decât timpul de producție cumulat, previziunile de vânzări nu ar fi necesare, deoarece procedura de [actualizare a consumului mediu zilnic (ADU)](/docs/ddmrp/procedures/ADU-update), lucrând pe valorile de consum din trecut, ajustează automat consumul mediu zilnic (ADU) la variația cererii, ceea ce duce la creșterea zonelor și a nivelului mediu de stocuri.

Situațiile tipice care necesită utilizarea previziunilor de vânzări sunt:  
- Promoții vânzări  
- Sezonalitate  
- Intrarea pe o piață nouă  
- Ieșirea de pe piață  
- Introducerea de produse noi  
- Eliminarea produselor vechi