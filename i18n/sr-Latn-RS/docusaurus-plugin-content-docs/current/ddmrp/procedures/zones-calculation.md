---
title: Ažuriranje vrednosti zona buffer artikala
sidebar_position: 3
---

Ova procedura izračunava vrednosti zelene, žute i crvene zone za svaki buffer na osnovu DDMRP parametara artikla.

**Zelena zona** određuje se kao najveća vrednost među sledećim elementima:

1. minimalna količina naručivanja (MOQ)
2. količina potrošnje tokom ciklusa ponovnog naručivanja (ukoliko je definisan) = **ADU × DOC**, odnosno prosečna dnevna potrošnja × ciklus ponovnog naručivanja izražen u danima
3. **ADU × DLT × LTF**, odnosno prosečna dnevna potrošnja × razdvojeno vreme nabavke × faktor vremena nabavke

Veličina zelene zone određuje minimalnu količinu narudžbine, što znači da nije moguće izdati narudžbinu za količinu manju od vrednosti ove zone. Takođe, veća zelena zona smanjuje učestalost naručivanja, jer se narudžbine izdaju ređe.

**Žuta zona** određuje se kao:

**ADU × DLT**

odnosno prosečna dnevna potrošnja × razdvojeno vreme nabavke.

**Crvena zona** izračunava se prema formuli:

**ADU × DLT × LTF × (1 + VAF)**

odnosno prosečna dnevna potrošnja × razdvojeno vreme nabavke × faktor vremena nabavke × (1 + faktor varijabilnosti).

Povećanjem varijabilnosti potrošnje povećava se i crvena zona, koja predstavlja sigurnosnu zalihu artikla, odnosno količinu zaliha namenjenu pokrivanju nepredviđenih situacija.

Ova procedura uzima u obzir eventualni **Faktor korekcije prosečne dnevne potrošnje**, kao i sve važeće izuzetke za crvenu, žutu i zelenu zonu koji su aktivni u trenutku izvršavanja procedure.

Dobijeni rezultati koriste se za ažuriranje vrednosti zona u tabeli DDMRP parametara.