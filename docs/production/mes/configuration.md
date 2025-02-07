---
title: Installazione
sidebar_position: 2
---

Per poter installare Fluentis MES è necessario eseguire i seguenti passaggi:

- creare un file di testo contenente le seguenti stringhe:     

```csharp
<?xml version="1.0" encoding="utf-8" ?>
<Settings applicationStyle="Fluent"></Settings>
```

- rinominare il file appena creato in "MobileSettings.xml";        
- copiare il file "MobileSettings.xml" all'interno della cartella in cui è contenuta la WPF di Fluentis;
- creare un nuovo collegamento all'eseguibile di Fluentis (contenuto nella cartella in cui si è salvato il file al punto precedente);
- entrare nelle proprietà del collegamento creato e modificare il path di *destinazione* aggiungendo in coda a quanto già presente uno spazio e la seguente stringa: **settingsFile="MobileSettings.xml"**
- lanciare **Fluentis MES** tramite il collegamento.


