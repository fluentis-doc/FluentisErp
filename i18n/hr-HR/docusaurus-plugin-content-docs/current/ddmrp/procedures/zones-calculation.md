---
title: Aggiornamento valore zone articoli a buffer
sidebar_position: 3
---

Ova procedura izračunava vrijednosti zelenih, žutih i crvenih zona svakog buffer-a na temelju DDMRP parametara artikala.

Zelena zona određuje se uzimajući u obzir najveću vrijednost među sljedećim elementima:   

1. minimalna količina narudžbe
2. količina potrošena u razdoblju ponovnog naručivanja (ako je definirano) = (ADU x DOC) odnosno prosječna dnevna potrošnja × ciklus ponovnog naručivanja u danima 
3. ADU x DLT x LTF odnosno prosječna dnevna potrošnja × razdvojeno vrijeme isporuke × faktor vremena isporuke

Veličina zelene zone određuje minimalnu količinu narudžbe, što znači da nije moguće izdati narudžbu za količinu manju od vrijednosti ove zone. Također, veća zelena zona smanjuje učestalost naručivanja, jer se narudžbe izdaju rjeđe

Zona žuta određena je kao ADU x DLT, tj. prosječna dnevna potrošnja x neovisno vrijeme isporuke.

Zona crvena se izračunava kao ADU x DLT x LTF (1 + VAF), što znači prosječna dnevna potrošnja x razdvojeni vrijeme isporuke x faktor vremena isporuke, sve pomnoženo sa 1 uvećanom za faktor varijabilnosti.

Povećanjem varijabilnosti potrošnje povećava se i crvena zona, koja predstavlja sigurnosnu zalihu artikla, odnosno onu količinu zaliha koja je namijenjena nepredviđenim situacijama.   

Ova procedura uzima u obzir mogući **Korekcijski faktor za prosječnu dnevnu potrošnju** kao i eventualne iznimke za crvenu, žutu i zelenu zonu koje su važeće u trenutku njezina izvođenja.   

Dobiveni rezultat koristi se za ažuriranje vrijednosti zona u tablici DDMRP parametara.  
