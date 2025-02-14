---
title: Inserimento Extradata Oggetto in Xtrareport
sidebar_position: 5
---

Per poter inserire un extradata in Xtrareport va utilizzato uno script che assegna il valore a un campo calcolato.

Per prima cosa aprire il report corretto, creare un nuovo campo calcolato, all'interno dello script di GetValue inserire il seguente script e sostituire a ciò che c'è tra parentesi quadre i valori corretti:


```shell
 //INIZIO SCRIPT PER EXTRADATA OGGETTO

private void calcDiameter_GetValue(object sender, DevExpress.XtraReports.UI.GetValueEventArgs e)

{

  [ReportObject] row = ReportObject.Row;

  if (row != null)

  {

    var extraData = [ReportObject].ExtraData.Where(x => x.ExtraDataObject != null && x.ExtraDataObject.Code == [ExtraDataObject]).FirstOrDefault();

    if (extraData != null)

    {

      var record = GetReport().DataProvider.Linq<[ExtraDataObject]>().Where(x => x.Id == extraData.ExtraDataId).FirstOrDefault();

      if (record != null)

      {

        e.Value = [ExtraDataObject].[Property]

      }

    }

  }

}

//FINE SCRIPT PER EXTRADATA OGGETTO
```

Lo script utilizzato per l'esempio visto durante la creazione dell'extradata “lingua” nella fattura, è il seguente:

```shell
//INIZIO SCRIPT

private void CalcLanguage_GetValue(object sender, DevExpress.XtraReports.UI.GetValueEventArgs e)

{

  Fluentis.FluentisErp.Core.SD.SalesInvoices.FSSalesInvoice row = (Fluentis.FluentisErp.Core.SD.SalesInvoices.FSSalesInvoice)e.Row;

  if (row != null)

  {

    var extraData = row.ExtraData.Where(x => x.ExtraDataObject != null && x.ExtraDataObject.Code == “FSLanguage”).FirstOrDefault();

    if (extraData != null)

    {

      var record = GetReport().DataProvider.Linq<FSLanguage>().Where(x => x.Id == extraData.ExtraDataId).FirstOrDefault();

      if (record != null)

      {

        e.Value = FSLanguage.Description

      }

    }

  }

}

//FINE SCRIPT
```

:::note Osservazioni
- Se nell'inserimento degli oggetti e/o delle proprietà, nella parte di attivazioni e propagazione abbiamo difficolta nell'inserire l'oggetto, cliccare due volte nell'apposita casella. Questo è utile anche per vedere se tale oggetto può avere l'extradata.  
- Se non si riesce a trovare l'oggetto, va contattat l'assistenza la quale verificherà con gli sviluppatori se si potrà implementare questa funzionalità perché non tutti gli oggetti sono programmati per avere degli extradata.
:::