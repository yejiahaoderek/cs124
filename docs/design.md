# Design Doc for Task Manager


## New Features/Updates
- Basic functionality: `set priority level`, `sort by` are available
  - When in `Edit mode`, the user now has the option to set a `priority level`
  - User has the option to sort tasks by `priority`, `name`, or `date created`
- Task items are **saved** even when the user refreshes
  - Application is connected to Firestore for cloud storage
- Keyboard users can press `enter` on the keyboard to `add new task` rather than tapping on the button
- Title of application appears at the tab bar
- Loading screen appears while a task is being carried out
- Display
  - Fixed display size to fit a 360x640 pixel portrait-mode mobile display
  - Adjusted text in `Edit mode` to remain the same size as in non-edit mode
  - When in `Edit mode`, the add button turns grey to show that it has been **disabled**



## Design Summary

- Basic functionality: `add new task`, `check/uncheck task`, `delete task`, `hide/show completed task` are available
- Incomplete to-dos have darker background color to **draw attention from the user** and complete to-dos have a lighter background color
- `add new task`  will **clear the input box**  every time user clicks `"add"` button considering real-world scenario (>80% of the time user enters different task so previous task does not need to be saved in the input box)
- `"Tap to Edit/Rename" Mode   `
  - User can't edit completed to-dos because it doesn't make sense in real-world scenario
  - User can tap any incomplete to-dos to rename (modify)
    - The to-do text becomes **grey** to indicate it's **being edited**
    - User could **modify** the to-do based on the original text
    - User could either `confirm rename` or `cancel/undo`
- `"DeleteAll" mode`
  - User can delete all incomplete to-dos by clicking on `Delete All` button with further confirmation by clicking on `Delete` or revert by clicking on `Cancel`


## New Error Prevention Mechanisms

- Once entered `"Edit/Rename" mode` that requires further action: `Hide/Show` will be **disabled**, `Add new Task` input box does not allow the user to type in it


## Error Prevention Mechanisms

- When nothing is entered in the task input box, clicking on the add button will do nothing

  - This design helps prevent error of creating empty to-do when user hasn't entered

- Once entered `"Edit/Rename" mode` that requires further action: `Done` or `Cancel`, other disturbing operations like delete, `deleteAll`, `add new task`, `check/uncheck task` will be **disabled**

- Once entered `"DeleteAll" mode` that requires further actions `Confirm deleteAll` or `Cancel`, other disturbing operations like `delete`, `add new task`, `rename/edit`, `check/uncheck task` will be **disabled**



## Challenges and Takeaways

Implementing a react app with components enclosed by one another can get really confusing and chaotic when functions, states, and props are everywhere . As we were doing the project, we learned and summarized the some principles of writing react app:

- **React Principles**
  - Data always flow from the parent to child, so:
    - Parent is responsible for handling state and pass props to children
    - Child should only be responsible for using/displaying props information
    - When change needed, child should use call-back functions
  - Function naming conventions
    - `handler+Action` in parent and `on+Action` when passes to child
  - `useState` should begin from hierarchy as low as possible

We kept in mind of these principles as we learned about them which increased our productivity and debug efficiency significantly. However, there were a couple of more challenging implementations that took us a while to figure things out:

- Disable disturbing actions when in `deleteAll` or `Rename` mode
- Keep with the original to-do text available to be edit when the to-do is tapped (i.e., `Edit/Rename mode`)

## React component Design
![component_design](https://user-images.githubusercontent.com/65286218/137246133-c8fd6c32-ddb2-4790-8c51-eb070d7be3f8.jpg)



## Prototype Design Process
During our initial design phase, we drew out what our desired layout was.

<img width="447" alt="compare_initialDesigns" src="https://user-images.githubusercontent.com/65286218/134622509-326f28b1-4be9-495e-84bf-032a18f5544c.png">

We wanted to have our To-Do items at the top because we thought it was the most important. We put the Completed items underneath and put the add items at the bottom. We considered putting the add items at the top of our page, but decided that it did not look as nice, and could be confused for a search bar initially. We originally designed the items to be in a checklist. As we were coding, we ran into formatting issues with checkboxes and therefore opted to have a ‘done’ button instead.

<img width="446" alt="intermediate-design" src="https://user-images.githubusercontent.com/65286218/134623725-97cc161a-59a6-4beb-8929-b591b8dc38bf.png">

However, after user testing, we decided to use the checkboxes and fix the formatting issue we had run into. We also had a ‘rename’ button for each To-Do item, which added clutter to the page, so we removed the button and opted to click on the item to rename instead. We had considered using an ‘edit’ button at the top of the To-Do list next to the heading instead, but decided that tapping on the item was sufficient. We also added a delete button to the To-Do items. Throughout the process, we were adjusting the formatting and layout of our page. While we were coding the html pages, we tried our best to keep in mind how to best label classes and IDs to make coding the css file easier, however, it took a lot of our time trying to adjust the layout.

For our layout, we wanted to ensure that users could easily differentiate between each item, so we opted to put each item in a box.  We also chose to use a lighter color for completed items, since we thought the focus should be on to-do items. In terms of color, we chose to have a light, pastel blue for the background and have the item boxes to be a
darker shade of blue, so the items stood out more. We chose to have the ‘add’ button green so it stands out because it is an important function that users would likely use often.

Overall, we are very pleased with our design. We think the colors went nicely together and led the eye to what we think is most important on the page. We are personally very proud that our ‘enter new task here’ input spans the length of the page because it took us a long time to figure out and we think it looks nice.


## Prototype Task Flow
<img width="767" alt="seq1" src="https://user-images.githubusercontent.com/65286218/134622165-d5d1ba58-9cd9-4c39-a1d7-87d4a4364931.png">
<img width="817" alt="seq2" src="https://user-images.githubusercontent.com/65286218/134622234-f1f2a53f-39f2-4ae5-915c-19ed5944c371.png">
<img width="815" alt="seq3" src="https://user-images.githubusercontent.com/65286218/134622243-d6cf07a1-81ce-4bbf-b338-2d79eee41a6b.png">
<img width="753" alt="seq4" src="https://user-images.githubusercontent.com/65286218/134624442-8517dd12-7f5f-44f6-8e91-3f62664f473e.png">
<img width="887" alt="seq5" src="https://user-images.githubusercontent.com/65286218/134622256-496291a9-951b-416f-a935-e61d1f8e4d60.png">
<img width="878" alt="seq6" src="https://user-images.githubusercontent.com/65286218/134622266-af7b881f-1634-46e6-95df-0ab4493c9267.png">


## Prototype User Testing
<img width="446" alt="intermediate-design" src="https://user-images.githubusercontent.com/65286218/134623725-97cc161a-59a6-4beb-8929-b591b8dc38bf.png">
We did 2 rounds of user testing. During the first round, we asked 2 participants to interact with our app.
We first began by asking them what they would do given this task manager app. Our first participant was able to use and understand all the functions without any help. Our second participant was hesitant at what the done button would do, so we changed our format to a checklist, which we thought would be more intuitive. The participants mentioned that they liked having a confirm or cancel option after clicking delete all. They both wondered why there was no delete button for uncompleted tasks, which we took into consideration and later added to our functionality. One participant mentioned wanting a button to hide the To-Do Items in addition to the hide Completed Items button. She also mentioned an archive button, so that completed items would disappear from the list, but would still be accessible to view later. We had previously discussed having an archive button during our design phase and decided against having this function. We figured this was a fringe case and 80% of users would not use an archive button, and that the hide button essentially covered the desired usage of an archive button.

During our second round of user testing, we had a participant interact with our app. We let the participant interact with the app on her own, then gave her some prompts to test some of our updated functions. We asked her to rename an item, since we removed the rename button. She instinctively went to double click the item she wanted to rename, which was what we hoped to happen.

## Second Iteration User Testing
We asked 3 participants to interact with our app. We asked each of them to do various tasks. 2 of the participants intuitively tapped on the input box at the bottom of the screen as we had hoped. One participant tapped on the empty task list notification. When that didn't work, they tapped on the add button. When that didn't work, they tapped on the input box. Since, only one participant had trouble adding a new task and they were able to figure it out quickly, we did not think this needed changing.

One participant said that the 'done' button to confirm a renaming of a task was in a weird place, and that it would make more sense to have it on the same level as the task name. We decided to keep the button position as is for now since the participant understood what the button was used for and did not inhibit their ability to interact with the app. We consider changing this in a future iteration and testing it among users, but don't think this is a pressing issue since it does not adversely affect how users are interacting with the app.

One participant mentioned that they couldn't edit tasks after they've been marked as done, but said it wasn't a big deal. We considered adding this functionality to our design, before deployment, but decided that most users probably would not use this because tasks that have already been completed generally do not need renaming.


## Third Iteration Design Process
![Untitled-2021-10-25-1254](https://user-images.githubusercontent.com/65286218/140454613-1dfb1a27-8b26-4823-ac97-98b63e63e940.png)
When deciding where to put the buttons to set priority level, we thought it was best to only show them during edit mode. Originally, we had kept the delete button next to each task even during edit mode even though their functionality was disabled. We realized that it looked too cluttered and keeping the delete button was pointless, so we replaced the delete button with the priority levels. When displaying the priority level in non-edit mode, we thought about keeping it on the right hand side for consistency, but thought it looked out of place. We moved it to the left of the text, which we thought looked better and was easier to understand what the symbols meant. We used exclamation marks to signify priority level since this seemed pretty common and universally understood. We decided to have 4 priority levels - 0, 1, 2, and 3 - with 0 being the default value of not being a priority. Based on our own interactions with other task managers or applications that had priority levels, this seemed like a good number.

While we were designing how to implement the sorting functionality, we considered adding a creation date stamp to each task, but decided against it because it would look too cluttered and did not think most users would feel a need for it.

## Third Iteration User Testing
During our user testing we asked our participants to interact with our new features. One thing that came up was trying to deselect a priority, or to set is back to 0. We originally had not planned for that option. Once a non-zero priority level was selected, the user had to choose between the non-zero options. We realized that this was a feature most users would want, or would get frustrated by when they can't deselect their option. We implemented a double tap feature, where if the user selects a priority level, then selects it again, it will deselect.