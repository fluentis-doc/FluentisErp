---
title: Insert ExtraData Object in Xtrareport 
sidebar_position: 5
---

To insert extradata in Xtrareport, a script must be used that assigns the value to a calculated field.

First, open the correct report, create a new calculated field, and within the GetValue script, insert the following script and replace what is in square brackets with the correct values:


```shell
 //START SCRIPT FOR EXTRADATA OBJECT

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

//END SCRIPT FOR EXTRADATA OBJECT
```

The script used for the example seen during the creation of the extra data “language” in the invoice is as follows:

```shell
//START SCRIPT

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

//END SCRIPT
```

:::note Remarks
- If you have difficulty inserting the object in the activation and propagation section when entering objects and/or properties, click twice in the appropriate box. This is also useful to see if the object can have extradata.  
- If you are unable to find the object, assistance should be contacted, which will verify with the developers if this functionality can be implemented because not all objects are programmed to have extradata.
:::