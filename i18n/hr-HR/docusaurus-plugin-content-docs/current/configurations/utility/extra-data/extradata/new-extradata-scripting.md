---
title: ExtraData - Set Value By Script
sidebar_position: 5
---

E' possibile modificare il valore di un determinato ExtraData tramite lo scripting lato server.  
Per illustrare questo scenario, utiliziamo un ExtraData **Additional Description** di tipo **Semplice**, che prevede un campo di tipo **Stringa**.  

Lo script che andremo a comporre popolerà L'ExtraData Additional Description con un testo cablato definito a livello di script, a seconda di una condizione binaria. Per tutti gli approfondimenti in merito allo scripting lato server, si rimanda all'apposita documentazione.  

il metodo che dovremmo sovrascrivere tramite override si chiama **CodeSetter**, posizioniamoci quindi su AfterAlgorithm e procediamo alla crazione di un nuovo script tramite codice C#.

:::note
il punto **AfterAlgorithm** permette di includere il codice custom dopo aver invocato il metodo del CodeSetter base (standard).    
:::


All'interno del Metodo **CodeSetter** includiamo il seguente frammento di codice sorgente.  
Il metodo **CodeSetter** viene invocato nel momento in cui si modifica il Codice dell'articolo e si salva e/o cambia focus. 

```cs
namespace localhost_DemoItalia___.FluentisErp.Core.WM.ReadWrite.Algorithms
{
    public partial class CustomFSItemAlgorithm : FSItemAlgorithm
    {
        public override void CodeSetter(IDataProvider dataProvider, AlgorithmState state)
        {
            base.CodeSetter(dataProvider, state);
            using (IAlgorithmLogger logger = this.CreateLogger(dataProvider, "CodeSetter"))
            {
                FSWItem currentObject = state.GetCurrentObject<FSWItem>();

                if (currentObject.ExtraData.Where(x => x.ExtraDataObject.Code == "Model").Count() == 0)
                {
                    //make new extradata and execute NewObjectProposal
                    var newExtraData = currentObject.ExtraData.AddNew();
                    newExtraData.NewObjectProposal();
                    //Set ExtraDataObject with linq result from FSExtraDataObject where Code == ExtraData Code
                    newExtraData.ExtraDataObject = QueryProxy<FSExtraDataObject>.Open(dataProvider).FirstOrDefault(x => x.Code == "Model");
                    //Set ExtraDataValue in this case extradata is simple text.
                    newExtraData.ExtraDataValue = "RIF. IMPOSTATO DA SCRIPT";
                    //Set Notes, IsEditable = False (the user can't modify the value). IsVisible = true the user can see the extradata in the tab.
                    newExtraData.Notes = "Training: Example of extradata simple setted by script";
                    newExtraData.IsEditable = false;
                    newExtraData.IsVisible = true;
                    //This row is mandatory to manage the correct setting of ExtraDataValue
                    ExtraDataHelper.AddAdditionalInformation(dataProvider, currentObject.ExtraData);
                }
                else
                {
                    //If the extradata already exists we have to load the extradata for the currentObject and update only the value. 
                    currentObject.ExtraData.FirstOrDefault(x => x.ExtraDataObject.Code == "Model").ExtraDataValue = "RIF. IMPOSTATO DA SCRIPT";
                    ExtraDataHelper.AddAdditionalInformation(dataProvider, currentObject.ExtraData);
                }
            }
        }
    }
}
```


Il blocco condizionale **if - else**,  controlla se per l'oggetto currentObject esiste già un ExtraData con Codice TrainingExtraSimple.  

1.  ***Se non esiste***:
    *  Viene creato un ExtraData, e viene impostata la proprietà ExtraDataValue con una stringa cablata.  
2.  ***Se esiste***:
    *  Viene aggiornato solamente il valore della proprietà ExtraDataValue con una stringa cablata.  

![](../../../../../static/images/20250317161007.png)

***Dallo screenshot si nota l'aggiornamento della proprietà dell'ExtraData.***   