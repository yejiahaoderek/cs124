# Lab 1

### Design Process
During our initial design phase, we drew out what our desired layout was.

![CS124-lab1-veryInitialDraft](https://user-images.githubusercontent.com/65286218/134621891-ef841446-d6a4-4175-8d06-3fb8a804b4c6.JPG)

We wanted to have our To-Do items at the top because we thought it was the most important. We put the Completed items underneath and put the add items at the bottom. We considered putting the add items at the top of our page, but decided that it did not look as nice, and could be confused for a search bar initially. We originally designed the items to be in a checklist. As we were coding, we ran into formatting issues with checkboxes and therefore opted to have a ‘done’ button instead.

![CS123-lab1-initialDesign](https://user-images.githubusercontent.com/65286218/134621900-af8fbaab-811e-4d5f-837e-2e2db8360cc5.png)

However, after user testing, we decided to use the checkboxes and fix the formatting issue we had run into. We also had a ‘rename’ button for each To-Do item, which added clutter to the page, so we removed the button and opted to click on the item to rename instead. We had considered using an ‘edit’ button at the top of the To-Do list next to the heading instead, but decided that tapping on the item was sufficient. We also added a delete button to the To-Do items. Throughout the process, we were adjusting the formatting and layout of our page. While we were coding the html pages, we tried our best to keep in mind how to best label classes and IDs to make coding the css file easier, however, it took a lot of our time trying to adjust the layout.

For our layout, we wanted to ensure that users could easily differentiate between each item, so we opted to put each item in a box.  We also chose to use a lighter color for completed items, since we thought the focus should be on to-do items. In terms of color, we chose to have a light, pastel blue for the background and have the item boxes to be a
darker shade of blue, so the items stood out more. We chose to have the ‘add’ button green so it stands out because it is an important function that users would likely use often.

Overall, we are very pleased with our design. We think the colors went nicely together and led the eye to what we think is most important on the page. We are personally very proud that our ‘enter new task here’ input spans the length of the page because it took us a long time to figure out and we think it looks nice.


### Task Flow
<img width="767" alt="seq1" src="https://user-images.githubusercontent.com/65286218/134622165-d5d1ba58-9cd9-4c39-a1d7-87d4a4364931.png">
<img width="817" alt="seq2" src="https://user-images.githubusercontent.com/65286218/134622234-f1f2a53f-39f2-4ae5-915c-19ed5944c371.png">
<img width="815" alt="seq3" src="https://user-images.githubusercontent.com/65286218/134622243-d6cf07a1-81ce-4bbf-b338-2d79eee41a6b.png">
<img width="843" alt="seq4" src="https://user-images.githubusercontent.com/65286218/134622250-2e2e44cb-8ede-4847-96a9-594bad87c67e.png">
<img width="887" alt="seq5" src="https://user-images.githubusercontent.com/65286218/134622256-496291a9-951b-416f-a935-e61d1f8e4d60.png">
<img width="878" alt="seq6" src="https://user-images.githubusercontent.com/65286218/134622266-af7b881f-1634-46e6-95df-0ab4493c9267.png">


### User Testing
We did 2 rounds of user testing. During the first round, we asked 2 participants to interact with our app. 
We first began by asking them what they would do given this task manager app. Our first participant was able to use and understand all the functions without any help. Our second participant was hesitant at what the done button would do, so we changed our format to a checklist, which we thought would be more intuitive. The participants mentioned that they liked having a confirm or cancel option after clicking delete all. They both wondered why there was no delete button for uncompleted tasks, which we took into consideration and later added to our functionality. One participant mentioned wanting a button to hide the To-Do Items in addition to the hide Completed Items button. She also mentioned an archive button, so that completed items would disappear from the list, but would still be accessible to view later. We had previously discussed having an archive button during our design phase and decided against having this function. We figured this was a fringe case and 80% of users would not use an archive button, and that the hide button essentially covered the desired usage of an archive button.

During our second round of user testing, we had a participant interact with our app. We let the participant interact with the app on her own, then gave her some prompts to test some of our updated functions. We asked her to rename an item, since we removed the rename button. She instinctively went to double click the item she wanted to rename, which was what we hoped to happen.
