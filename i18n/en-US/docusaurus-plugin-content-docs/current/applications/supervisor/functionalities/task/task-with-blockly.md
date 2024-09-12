---
title: Task with Blockly
sidebar_label: Task with Blockly
sidebar_position: 2
---

:::info
By default the *Task Object Form* opens the *Script Editor* and not *Blockly*, but if a change would be made to the code, after a save/compile while using *Blockly*, at the next startup of the *Task*, the default coding platform will be *Blockly* instead of the *Script Editor*.
:::

*Supervisor* leverages customized Blockly's blocks to create C# scripts. Apart from the standard Blockly's categories (logic, loops, math, text, date, lists, colour, variables), the customized categories that can be found in the **Toolbox** are: 

- **Context Variables**, contains blocks for selecting variables from the current context and for converting a generic object in a string/number/...; 

- **Dictionary**, contains all the needed blocks to work with the generic collection type <span style={{ fontFamily: 'Consolas' }}>Dictionary</span>;

- **Fluentis Objects**, divided into three sub-categories:
    - **Commons**, contains blocks to perform common operations on *Fluentis Objects* (*i.e.* selecting a property of an object, creating a logical expression to filter an object, creating a recordset from a LINQ expression, ...);
    - **Read Only**, contains specific blocks for performing read-only operations on *Fluentis Objects* (*i.e.* reading values, filter elements of a collection, ...);
    - **Read Write**, contains specific blocks for performing read-write operations on *Fluentis Object* (*i.e.* creating and instantiate objects or contexts, setting properties or references of, ...);

- **Access to the Database**, contains blocks that can perform operation directly with the database, like calling stored procedures or reading values from recordsets;

- **Activities**, in turn divided into sub-categories named with the same group names that can be found in the tasks filter form and that can be created by the user. The standard groups are:
    - **Utilities**, contains all the standard [activities](../activity/activity-intro) (the user can not add new task or modify the existing ones in this group);
    - **Examples**, contains all the standard activities examples that can guide the user in the creation of a new custom *Task* (the user can not add new task or modify the existing ones in this group)

- **Globals**, contains blocks that allow to retrieve global parameters or [distribution lists](../distribution-list/distribution-list-intro)

- **Task Utility**, contains standard/common scripts useful across all *Tasks*;

To add code to a task with *Blockly* just drag and drop the blocks from the *Toolbox* into the **Workspace**. There is more than one *Workspace* in *Blockly*:  

- **#STD** manages the code inside the <span style={{ fontFamily: 'Consolas' }}>ExecuteTask()</span> script's method;
- **TaskCompleted** manages the code inside the <span style={{ fontFamily: 'Consolas' }}>TaskCompleted()</span> script's method;  

To change the current *Workspace*, just select from the section dropdown another value.

When the code is completed make sure to click the compile/save button and check if the script is also visible in the *Script Editor* by selecting the *Script* entry from the *Script Type* combobox (to change coding platform):

The script code generated will appear between two lines of comment (named <span style={{ color: 'forestGreen' , fontWeight: 'bold' }}>// START WIZARD CODE</span> and <span style={{ color: 'forestGreen' , fontWeight: 'bold' }}>// END WIZARD CODE</span>).
