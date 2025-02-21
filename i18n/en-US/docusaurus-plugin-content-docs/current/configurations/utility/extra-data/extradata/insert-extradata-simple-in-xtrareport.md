---
title: Insert ExtraData Value in Xtrareport 
sidebar_position: 4
---

To insert an extradata in Xtrareport, a script must be used that assigns the value to a calculated field.

First, open the correct report, create a new calculated field, and within the GetValue script, insert the following script and replace what is between the square brackets with the correct values:

```shell
 //START SCRIPT FOR EXTRADATA VALUE

private void calcRange_GetValue(object sender,  DevExpress.XtraReports.UI.GetValueEventArgs e)

{

 [ReportObject] row = (ReportObject)e.Row;

 if (row != null)

 {

  var extraData = [ReportObject].ExtraData.Where(x => x.ExtraDataObject != null && x.ExtraDataObject.Code == “[ExtraDataObject]”).FirstOrDefault();

  if (extraData != null)

  {

    e.Value = extraData.ExtraDataValue;

  }

 }

}

//END SCRIPT PER EXTRADATA VALUE
```

The script used for the example seen during the creation of the extradata “depth” in the invoice is as follows:

```shell
//START SCRIPT

private void CalcDepth_GetValue(object sender, DevExpress.XtraReports.UI.GetValueEventArgs e) {

 Fluentis.FluentisErp.Core.SD.SalesInvoices.FSSalesInvoice invoice = (Fluentis.FluentisErp.Core.SD.SalesInvoices.FSSalesInvoice)e.Row;

 if (invoice != null && invoice.ExtraData != null)

 {

  var extraData = invoice.ExtraData.Where(x => x.ExtraDataObject != null && x.ExtraDataObject.Code == "Depth").FirstOrDefault();

  if (extraData != null)

  {

    e.Value = extraData.ExtraDataValue;

  }

 }

}

//END SCRIPT
```

:::note Remarks
 - This script extracts a unique value, even though the calculated field may be found within detail reports, etc.
 - This script is the only way to view the extradata within the report, so for every coded extradata that I want to print, I will have to write this script.
:::