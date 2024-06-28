---
title: Rectificare zonă galbenă
sidebar_position: 9
---

Valoarea zonei galbene este calculată automat de procedura *Actualizare zone* în baza valorii parametrilor DDMRP ai articolului.

În acest tabel se poate forța o valoare diferită în date specificate.

Sistemul de planificare ține cont de eventualele valori de rectificare ale zonelor în calculul NFP, chiar dacă procedura *Actualizare zone* nu a fost efectuată.  

Zona galbenă este produsul dintre consumul mediu zilnic (ADU) și timpul de aprovizionare al articolului (DLT).

Dacă într-o perioadă scurtă există o variație semnificativă a unuia dintre cei doi factori, se poate folosi o excepție a zonei galbene.

De exemplu, atunci când există o variație semnificativă a cererii într-o perioadă de timp foarte scurtă, cum e în cazul campaniilor promoționale, sau atunci când se știe din timp că va fi o întrerupere a aprovizionării pentru o perioadă scurtă de timp (închiderea temporară a unei instalații, închiderea pentru vacanță a unui furnizor etc).

Desigur, excepția la zonă trebuie să fie datată cu suficient timp înainte față de evenimentul care trebuie gestionat.