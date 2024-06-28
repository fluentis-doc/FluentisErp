---
title: Event Execution Url
sidebar_label: Event Execution Url
sidebar_position: 4
---

This feature provides the capability to execute an *Event* from an external source/app.

Within the [Event](event-intro) main *Form* is can be found the **Generate Execution URL** button. Once the button is clicked, the app will prompt a window containing:

- **Task Input Parameters**, that comes with previously defined values (if they have been set within the *Task*)
- **Redirect URL Task Parameter** takes care of redirecting the user to another page after executing the URL. This parameter can be set within the *TaskCompleted* Method (add the URL value to the *Dictionary* and set a *Task* paramter without the *IsInputParamter* flag) for the desired *Task*, then selected via the combobox the generated parameter.  
- **Expiration Date** of the URL
- **Generate URL** button with a dedicated texbox that will contain the generated URL
