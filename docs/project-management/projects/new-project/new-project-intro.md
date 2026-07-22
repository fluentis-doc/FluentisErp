---
title: Nuovo progetto
sidebar_position: 1
---

In questa form è possibile inserire tutti i dati di un nuovo **Progetto** . 

**Tipo progetto**: indica il tipo progetto selezionato dalla tabella [TIpi Progetto](/docs/configurations/tables/project-management/project-type) , che quindi determina la struttura del progetto (monolivello o gerarchica) e se template oppure no, oltre all'applicazione di tutte le altre configurazioni previste per il tipo progetto.
In base alle impostazioni del tipo progetto, saranno visualizzate determinate **tab**.

**Cliente**: contiene il cliente cui è riferito il progetto;

**Anno/Numero/Data**: indica l’anno, il numero e la data del progetto; Il campo numero, ammette caratteri numerici e testuali. Il campo numero interno invece ammette solo caratteri numerici.   
Se il tipo progetto ha un numeratore con periodo annuale, mensile, giornaliero, il nuovo numero verrà proposto in base al periodo in entrambi i campi, numero e numero interno.   
L'univocità del numero e numero interno sono verificati nell'arco di periodo configurato nel numeratore.   
Il tipo progetto potrebbe non prevedere un numeratore. In questo caso il numero interno dovrà essere valorizzato manualmente dall'utente, mentre il campo numero interno avrà valore uguale a 0.   
L'univocità del numero e numero interno sono verificati comunque su base annuale, anche in assenza di indicazioni nel numeratore o in presenza di numeratore senza periodo specificato.  
Questo tipo di configurazione viene adottata nel caso il progetto venga generato in automatico da un ordine di vendita, per cui il numero progetto verrà assegnato in automatico e sarà uguale al numero di ordine di vendita.   

**Titolo del progetto**: viene assegnata la descrizione del cliente, ma il campo è liberamente modificabile. Nel caso il progetto venga generato dalle offerte, sarà possibile attribuire un titolo strutturato, in base alle configurazioni nei Parametri > Vendita > Parametri offerte di vendita. 




