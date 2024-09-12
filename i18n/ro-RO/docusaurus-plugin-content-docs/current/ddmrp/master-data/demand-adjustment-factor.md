---
title: Factor de ajustare consum zilnic mediu
sidebar_position: 6
---

Consumul zilnic mediu al unui buffer (ADU) este specificat în tabelul *Parametri DDMRP* pentru fiecare articol și pentru fiecare unitate logistică (centru de distribuție hub sau fabrică).

În acest tabel se inserează un coeficient multiplicativ al consumului mediu zilnic care să se aplice în anumite date prin valori mai mari sau egale cu zero.

Procedura **Actualizare valoare zone articole la buffer** în acele date va lua în considerare o valoare a consumului zilnic mediu egală cu cea prezentă în tabelul *Parametri DDMRP* înmulțită cu coeficientul prezent în acest tabel, iar zonele verde, galbenă și roșie vor fi calculate având în vedere acest produs (procedura nu va modifica valoarea ADU în parametrii DDMRP).

Este folosit pentru a modifica valoarea normală a consumului zilnic mediu doar pentru o perioadă scurtă, dacă se știe deja dinainte că vor exista variații semnificative ale cererii, dar care nu reprezintă o schimbare structurală și permanentă a acesteia, cum ar fi cazul campaniilor promoționale, introducerea de produse noi, eliminarea produselor vechi.