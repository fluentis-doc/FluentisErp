---
title: Liste di Distribuzione
sidebar_position: 1
---

La procedura **Liste di distribuzione** permette di creare le liste di:

- contatti CRM 
- contatti CRM inseriti in una campagna
- contatti CRM inseriti in un'opportunità
- contatti ERP (fornitori) inseriti in una richiesta di offerta di acquisto
- contatti ERP (fornitori) inseriti in un ordine di acquisto
- contatti ERP (clienti) inseriti in un'offerta di vendita
- contatti ERP (clienti) inseriti in un ordine di vendita
- contatti ERP (clienti) inseriti in un ddt di vendita
- contatti ERP (clienti) inseriti in una fattura di vendita
- contatti ERP (clienti) inseriti in un intervento

a cui dovranno essere inviate le **Newsletter**.

Nel caso dei contatti CRM la ricerca dell'indirizzo è così strutturata: 
- email generica del contatto, solo se abilitato anche il flag "newsletter" nella sezione "ambito email". 
- email dei riferimenti del contatto, solo se nella tab "ambito email" è presente anche la voce "newsletter"

Nel caso dei contatti ERP (clienti e fornitori) la ricerca dell'indirizzo è così strutturata: 
- anagrafica, indirizzi alternativi, verranno considerati tutti i tipi indirizzo abilitati per il documento interessato. (ordine, ddt, fattura, etc)


Le liste di distribuzione si dividono in due tipologie:
-	**Liste Statiche**: richiedono all’utente di aggiungere manualmente i nuovi contatti CRM creati alla lista;
-	**Liste Dinamiche**: calcolano in tempo reale, in base ai filtri impostati sulla query Sql abbinata alla lista, i contatti che ne devono far parte in fase di invio della Newsletter.


