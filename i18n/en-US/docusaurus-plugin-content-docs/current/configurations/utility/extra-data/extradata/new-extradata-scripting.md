---
title: ExtraData - Set Value By Script (ExtraData - Set Value By Script)
sidebar_position: 5
---

It is possible to modify the value of a certain ExtraData through server-side scripting.  
To illustrate this scenario, we will use an ExtraData **Additional Description (Additional Description)** of type **Simple (Semplice)**, which provides a field of type **String**.  

The script we are going to compose will populate the ExtraData Additional Description with a hardcoded text defined at the script level, depending on a binary condition. For all details regarding server-side scripting, please refer to the appropriate documentation.  

The method that we need to override via override is called **CodeSetter**; let’s position ourselves on AfterAlgorithm and proceed to create a new script using C# code.

:::note
The point **AfterAlgorithm** allows including custom code after invoking the base (standard) CodeSetter method.    
:::

Inside the **CodeSetter** method, include the following source code snippet.  
The **CodeSetter** method is invoked when the item code is modified and saved and/or the focus is changed.

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

The conditional block **if - else**, checks if an ExtraData with Code TrainingExtraSimple already exists for the currentObject.  

1.  ***If it does not exist***:
    *  An ExtraData is created, and the ExtraDataValue property is set with a hardcoded string.  
2.  ***If it exists***:
    *  Only the value of the ExtraDataValue property is updated with a hardcoded string.

![](/img/en-US/extradata/20250317161007.png)

***The screenshot shows the update of the ExtraData property.***