(this.webpackJsonplab=this.webpackJsonplab||[]).push([[0],{42:function(e,t,i){},54:function(e,t,i){},55:function(e,t,i){},56:function(e,t,i){},57:function(e,t,i){},60:function(e,t,i){},61:function(e,t,i){},66:function(e,t,i){"use strict";i.r(t);var c=i(15),n=i(46),s=i.n(n),a=i(5),o=i(17),l=i(27),r=i(13),j=(i(42),i(6));var d=function(e){var t=Object(c.useState)(e.priority),i=Object(r.a)(t,2),n=i[0],s=i[1];function a(t){s(n===t?0:t),e.priority===t?e.onPriority(0):e.onPriority(t)}return Object(j.jsxs)("div",{className:e.isCompleted?"completeItem":e.editID===e.id?"selectedListItem":"listItem",onClick:function(){e.deleteConfirm||(e.onClick(e.id),e.onRename(e.text))},children:[Object(j.jsx)("input",{type:"checkbox",role:"checkbox","aria-checked":e.isCompleted,checked:e.isCompleted,"aria-label":e.text,onClick:function(e){return e.stopPropagation()},onChange:function(){e.editID||e.deleteConfirm||e.onChange(e.id,"isCompleted",!e.isCompleted)}}),e.editID!==e.id&&0!==e.priority&&Object(j.jsx)("div",{className:"priorityStatus","aria-label":e.priority,children:1===e.priority?"!":2===e.priority?"!!":"!!!"}),e.editID===e.id?Object(j.jsx)("input",{type:"text",className:"rename",onChange:function(t){return e.onRename(t.target.value)}}):e.isCompleted?Object(j.jsx)("div",{className:"task",children:e.text}):Object(j.jsx)("input",{type:"text",className:"task",value:e.text,onChange:function(t){return e.onRename(t.target.value)}}),e.editID===e.id&&Object(j.jsxs)("div",{className:"priorityGroup",children:[Object(j.jsx)("div",{className:1===n?"prioritySelected":"priorityDisplay",tabIndex:"0",onKeyPress:function(e){"Enter"===e.key&&a(1)},onClick:function(){a(1)},children:"!"}),Object(j.jsx)("div",{className:2===n?"prioritySelected":"priorityDisplay",tabIndex:"0",onKeyPress:function(e){"Enter"===e.key&&a(2)},onClick:function(){a(2)},children:"!!"}),Object(j.jsx)("div",{className:3===n?"prioritySelected":"priorityDisplay",tabIndex:"0",onKeyPress:function(e){"Enter"===e.key&&a(3)},onClick:function(){a(3)},children:"!!!"})]}),!e.editID&&Object(j.jsx)("div",{className:"buttonGroup",onClick:function(e){return e.stopPropagation()},children:Object(j.jsx)("button",{className:"deleteButton",role:"button","aria-label":"delete to do item",onClick:function(){e.editID||e.deleteConfirm||e.onDelete(e.id)},children:Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABmJLR0QA/wD/AP+gvaeTAAAAfElEQVQ4jc2TYQqAIAxGPZ0HCDpJZoLdy+O9/ihITJ0F0f65fbx9bsyY3wVgAafUOsC2CgBhAAhZJzcEtiw4Ow4A4siqCFIDWqBpQAUqf0+aWfVABZCeAo5XTqqZxNtb3NoQIOT7oBZADaoE+6BR2ZqXiuvE7Xhg0Wi/jQtDPPm8/HEN3gAAAABJRU5ErkJggg=="})})})]})};i(54);var M=function(e){return e.tasks.map((function(t){return Object(j.jsx)(d,{id:t.id,text:t.text,priority:t.priority,newPriority:e.newPriority,onRename:e.onRename,onPriority:e.onPriority,newText:t.newText,isCompleted:t.isCompleted,editID:e.editID,deleteConfirm:e.deleteConfirm,onClick:e.onClick,onDelete:e.onDelete,onChange:e.onChange},t.id)}))};i(55);var u=function(e){return Object(j.jsxs)("div",{className:"incompleteSection",role:"heading","aria-level":"1","aria-label":"To dos section",children:[Object(j.jsxs)("div",{className:"backGroup",onClick:function(){return e.onCurrList([])},children:[Object(j.jsx)("button",{className:"goToButton",id:"backTo","aria-label":"Back to list homepage",children:Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABNklEQVRIie3Wv0rDUBTH8d85cfEBKoK6d2inBDcRrFRMwDcIZsoz2S3aR5A2UCzibOLSDt1bENoXcDD3uChIM5g/txeVfsdDkk+4uRcCbPvv0frAvrj2wNIj4ECTsQAQJvFd/H3IuTdhudGIAsAhgN76MAd/Xqi7oyKwkWrBBCwVkyOCE2MwAUth6bwMblOL5c0UvFLE58mgP7W7QVMJ3ZuAV0LcSYfRxO4GTbLUI4D9TcNa0LKwNrQUrJgu02E0cTy/xZZ6qoOWgnVXGGYlse0G7WTQn6qMTwG8GoEBNEjU2HaDdjqKZpLxWR287FJrw6t8Yy141c3VYFEPjue30lE0Y5IrUzAE2CNF42PXd94z2S17/05V+AsXoWfm3I/Mj/2qc7zYgDMvAoea8TkRhxqft+2P9AFk331uPX6zqQAAAABJRU5ErkJggg==",alt:"Left arrow: go back to homepage"})}),Object(j.jsx)("label",{className:"backLabel",children:"Back"})]}),Object(j.jsxs)("div",{className:"headerButton",role:"heading","aria-level":"1",children:[Object(j.jsxs)("h1",{children:[e.currList," | To-Do"]}),!e.editID&&Object(j.jsx)("div",{className:"buttonGroup",children:Object(j.jsxs)("select",{className:"sortSelect",name:"category",id:"category",onChange:function(t){e.onSort(t.target.value)},children:[Object(j.jsx)("option",{value:"priority",children:"By Priority"}),Object(j.jsx)("option",{value:"text",children:"By Name"}),Object(j.jsx)("option",{value:"created",children:"By Date"})]})}),e.editID&&Object(j.jsxs)("div",{className:"buttonGroup",children:[Object(j.jsx)("button",{className:"confirmButton",onClick:function(){e.onConfirm(e.editID,e.newText,e.newPriority)},children:"Done"}),Object(j.jsx)("button",{className:"cancel",onClick:function(){e.onQuitEdit()},children:"Cancel"})]})]}),Object(j.jsx)("div",{className:"taskItems",children:0!==e.tasks.filter((function(e){return!e.isCompleted})).length?Object(j.jsx)(M,{tasks:e.tasks.filter((function(e){return!e.isCompleted})),editID:e.editID,newText:e.newText,newPriority:e.newPriority,onRename:e.onRename,onPriority:e.onPriority,deleteConfirm:e.deleteConfirm,onDelete:e.onDelete,onChange:e.onChange,onClick:e.onClick}):Object(j.jsx)("div",{className:"completeItem",children:Object(j.jsx)("div",{className:"task",children:e.isLoading?"Loading":"You don't have any To-Do now"})})})]})};i(56);var N=function(e){var t=e.tasks.filter((function(e){return e.isCompleted})).length>0;return Object(j.jsxs)("div",{className:"completedSection",role:"heading","aria-level":"1","aria-label":"Completed section",children:[Object(j.jsx)("button",{className:"hiddenButton",children:Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABNklEQVRIie3Wv0rDUBTH8d85cfEBKoK6d2inBDcRrFRMwDcIZsoz2S3aR5A2UCzibOLSDt1bENoXcDD3uChIM5g/txeVfsdDkk+4uRcCbPvv0frAvrj2wNIj4ECTsQAQJvFd/H3IuTdhudGIAsAhgN76MAd/Xqi7oyKwkWrBBCwVkyOCE2MwAUth6bwMblOL5c0UvFLE58mgP7W7QVMJ3ZuAV0LcSYfRxO4GTbLUI4D9TcNa0LKwNrQUrJgu02E0cTy/xZZ6qoOWgnVXGGYlse0G7WTQn6qMTwG8GoEBNEjU2HaDdjqKZpLxWR287FJrw6t8Yy141c3VYFEPjue30lE0Y5IrUzAE2CNF42PXd94z2S17/05V+AsXoWfm3I/Mj/2qc7zYgDMvAoea8TkRhxqft+2P9AFk331uPX6zqQAAAABJRU5ErkJggg==",alt:"padding button"})}),Object(j.jsxs)("div",{className:"headerButton",role:"heading",children:[Object(j.jsx)("h1",{children:"Completed "}),t&&(e.deleteConfirm?Object(j.jsxs)("div",{className:"buttonGroup",children:[Object(j.jsx)("button",{className:"warningConfirm",onClick:function(){e.onDeleteAll(),e.onDeleteConfirm(!1)},children:"Delete"}),Object(j.jsx)("button",{className:"cancel",onClick:function(){return e.onDeleteConfirm(!1)},children:"Cancel"})]}):Object(j.jsx)("button",{className:e.editID?"disabledWarning":"warning",onClick:function(){e.editID||e.onDeleteConfirm(!e.deleteConfirm)},children:"Delete All"}))]}),Object(j.jsx)("div",{className:"completedTaskItems",children:0!==e.tasks.filter((function(e){return e.isCompleted})).length?Object(j.jsx)(M,{className:"completeItem",tasks:e.tasks.filter((function(e){return e.isCompleted})),editID:e.editID,newText:e.newText,onRename:e.onRename,deleteConfirm:e.deleteConfirm,onDelete:e.onDelete,onChange:e.onChange,onClick:e.onClick}):Object(j.jsx)("div",{className:"completeItem",children:Object(j.jsx)("div",{className:"task",children:"Completed tasks will appear here"})})})]})};i(57);var b=function(e){var t=Object(c.useState)(!1),i=Object(r.a)(t,2),n=i[0],s=i[1],a=Object(c.useState)(!1),o=Object(r.a)(a,2),l=o[0],d=o[1],M=Object(c.useState)(""),b=Object(r.a)(M,2),A=b[0],m=b[1],I=Object(c.useState)(0),x=Object(r.a)(I,2),g=x[0],h=x[1],O=Object(c.useState)(""),C=Object(r.a)(O,2),w=C[0],L=C[1];function z(e){L(e)}function D(t){e.tasks.filter((function(e){return e.id===t}))[0].isCompleted||s(t)}return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{id:"outlier",children:[Object(j.jsxs)("div",{className:"sectionWrapper",children:[Object(j.jsxs)("div",{className:"incompleteWrapper",children:[Object(j.jsx)(u,{tasks:e.tasks,user:e.user,isLoading:e.isLoading,onDelete:e.handleItemDeleted,onChange:e.onTaskFieldChanged,onSort:e.onSort,onRename:z,onPriority:function(e){h(e)},newText:w,newPriority:g,editID:n,deleteConfirm:l,onClick:D,onConfirm:function(t,i,c){e.onTaskFieldChanged(t,"text",i),e.onTaskFieldChanged(t,"priority",c),s(!1)},onQuitEdit:function(){s(!1)},currList:e.currList,onCurrList:e.onCurrList}),Object(j.jsx)("div",{className:"placeholder"}),Object(j.jsxs)("button",{id:"hideButton",className:n||l?"disabledHideButton":"hideButton",onClick:function(){n||l||e.onToggleCompletedItems()},children:[e.showCompletedItems?"Hide":"Show"," Completed"]})]}),e.showCompletedItems&&Object(j.jsx)("div",{className:"completeWrapper",children:Object(j.jsx)(N,{tasks:e.tasks,editID:n,onRename:z,newText:w,deleteConfirm:l,showCompletedItems:e.showCompletedItems,onDeleteConfirm:function(e){d(e)},onDelete:e.handleItemDeleted,onDeleteAll:e.onDeleteAll,onChange:e.onTaskFieldChanged,onClick:D})})]}),!n&&!l&&Object(j.jsxs)("div",{className:"addList",children:[Object(j.jsx)("input",{type:"text",className:"taskInputBox",name:"task",value:A,onKeyDown:function(t){"Enter"===t.key&&(e.onAddTask(A),m(""))},onChange:function(e){return m(e.target.value)},placeholder:"Enter your new task here"}),Object(j.jsx)("button",{type:"button",className:"addButton","aria-label":"add this new task to current list",onClick:function(){n||l||(e.onAddTask(A),m(""))},children:"+"})]})]})})},A=i(32),m=i(36),I=i(28);var x=function(e){var t=Object(c.useState)("priority"),i=Object(r.a)(t,2),n=i[0],s=i[1],o=Object(c.useState)(!0),l=Object(r.a)(o,2),d=l[0],M=l[1],u=[],N=e.db.collection(e.collectionName).doc(e.currListID).collection("Tasks").orderBy(n,"priority"===n?"desc":"asc"),x=Object(A.a)(N),g=Object(r.a)(x,3),h=g[0],O=g[1];return g[2],h&&(u=h.docs.map((function(e){return e.data()}))),Object(j.jsx)(b,{tasks:u,isLoading:O,showCompletedItems:d,onAddTask:function(t){if(""!==t){var i=Object(m.a)();e.db.collection(e.collectionName).doc(e.currListID).collection("Tasks").doc(i).set({id:i,text:t,isCompleted:!1,priority:0,created:I.a.database.ServerValue.TIMESTAMP})}},onSort:function(e){s(e)},onTaskFieldChanged:function(t,i,c){e.db.collection(e.collectionName).doc(e.currListID).collection("Tasks").doc(t).update(Object(a.a)({},i,c))},onDeleteAll:function(){u.forEach((function(t){t.isCompleted&&e.db.collection(e.collectionName).doc(e.currListID).collection("Tasks").doc(t.id).delete(t.id)}))},handleItemDeleted:function(t){e.db.collection(e.collectionName).doc(e.currListID).collection("Tasks").doc(t).delete(t)},onToggleCompletedItems:function(){M(!d)},onCurrList:e.onCurrList,currList:e.currList,currListID:e.currListID,user:e.user})},g=(i(60),i(48));var h=function(e){var t=e.value,i=e.onChange,n=Object(g.a)(e,["value","onChange"]),s=Object(c.useState)(null),a=Object(r.a)(s,2),o=a[0],d=a[1],M=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=M.current;e&&e.setSelectionRange(o,o)}),[M,o,t]),Object(j.jsx)("input",Object(l.a)({ref:M,value:t,onChange:function(e){d(e.target.selectionStart),i&&i(e)}},n))};var O=function(e){var t=Object(c.useState)(""),i=Object(r.a)(t,2),n=i[0],s=i[1],a=Object(c.useState)(!1),l=Object(r.a)(a,2),d=l[0],M=l[1],u=e.isSharedWith.length>0&&e.owner===e.user.uid,N=e.isSharedWith.includes(e.user.email);function b(){s("")}function A(t){if(t===e.user.email)alert("Oops, you can't share a list with yourself!");else if(""!=t&&String(t).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){if(!e.isSharedWith.includes(t))return!0;alert("The email you entered is already on the share list")}else alert("Please enter a valid email address")}return Object(j.jsxs)(j.Fragment,{children:[d&&!N&&Object(j.jsx)("div",{className:"shareBackdrop",children:Object(j.jsxs)("div",{className:"shareModal",children:[Object(j.jsxs)("div",{className:"taskItems",children:[Object(j.jsxs)("h3",{children:["You're sharing\u300c",e.text,"\u300dwith"]}),0===e.isSharedWith.length&&Object(j.jsx)("div",{className:"completeItem",children:"Add email address below to share"}),e.isSharedWith.map((function(t){return Object(j.jsxs)("div",{className:"listItem",children:[Object(j.jsx)("div",{className:"emailAddress",children:t}),Object(j.jsx)("div",{className:"buttonGroup",children:Object(j.jsx)("button",{className:"deleteButton",role:"button","aria-label":"delete to do item",onClick:function(){var i=e.db.collection(e.collectionName).doc(e.id),c=e.isSharedWith.filter((function(e){return e!==t}));i.update({isSharedWith:c})},children:Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAABmJLR0QA/wD/AP+gvaeTAAAAfElEQVQ4jc2TYQqAIAxGPZ0HCDpJZoLdy+O9/ihITJ0F0f65fbx9bsyY3wVgAafUOsC2CgBhAAhZJzcEtiw4Ow4A4siqCFIDWqBpQAUqf0+aWfVABZCeAo5XTqqZxNtb3NoQIOT7oBZADaoE+6BR2ZqXiuvE7Xhg0Wi/jQtDPPm8/HEN3gAAAABJRU5ErkJggg=="})})})]})}))]}),Object(j.jsxs)("div",{className:"shareButtonGroup",children:[Object(j.jsx)("input",{type:"text",className:"emailInput",placeholder:"Enter email address here",value:n,onKeyDown:function(t){if("Enter"===t.key){if(A(n))e.db.collecjtion(e.collectionName).doc(e.id).update({isSharedWith:[].concat(Object(o.a)(e.isSharedWith),[n])});b()}},onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("div",{}),Object(j.jsx)("button",{className:"shareButton",onClick:function(){A(n)&&e.db.collection(e.collectionName).doc(e.id).update({isSharedWith:[].concat(Object(o.a)(e.isSharedWith),[n])});b()},children:"Share"})]}),Object(j.jsx)("div",{id:"closeShare",children:Object(j.jsx)("button",{className:"closeConfirm",onClick:function(){return M(!1)},type:"button",children:"Close"})})]})}),N&&d&&Object(j.jsx)("div",{className:"shareBackdrop",children:Object(j.jsxs)("div",{className:"infoModal",children:[Object(j.jsxs)("div",{className:"taskItems",children:[Object(j.jsx)("h3",{children:"List Owner"}),Object(j.jsx)("div",{className:"completeItem",children:Object(j.jsx)("p",{children:e.ownerEmail})})]}),Object(j.jsx)("div",{id:"closeShare",children:Object(j.jsx)("button",{className:"closeConfirm",onClick:function(){return M(!1)},type:"button",children:"Close"})})]})}),Object(j.jsx)("div",{className:"buttonGroup",children:Object(j.jsxs)("div",{className:N?"sharedListItem":e.selectedID.includes(e.id)?"selectedListItem":"listItem","aria-label":"press control + shift + space to select if in select mode; or type to rename",tabIndex:e.tabIdx,onClick:function(){e.selectMode&&e.onSelect(e.id,N)},children:[!N&&e.selectMode&&(e.selectedID.includes(e.id)?Object(j.jsx)("input",{type:"checkbox",tabIndex:e.tabIdx,role:"checkbox","aria-checked":"true",checked:!0,"aria-label":e.text}):Object(j.jsx)("input",{type:"checkbox",tabIndex:e.tabIdx,role:"checkbox","aria-checked":"false","aria-label":e.text})),Object(j.jsxs)("button",{className:"share",onClick:function(){return M(!0)},children:[N&&Object(j.jsx)("img",{alt:"svgImg",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjAiIGhlaWdodD0iMjAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzM0OThkYiI+PHBhdGggZD0iTTg2LDIxLjVjLTExLjUyNjg1LDAgLTIwLjg3MDExLDkuMjM4MjggLTIxLjMzMjAzLDIwLjY2MDE2Yy0xOS4zNzk0LDguMjMwNDcgLTMyLjQxNzk3LDI3LjM5OTkgLTMyLjQxNzk3LDQ5LjIxNDg0YzAsMC45MjM4MyAtMC4wNDE5OSwxLjkzMTY0IDAsMy4wMjM0NGMtNi4zNjE4MiwzLjczNzMxIC0xMC43NSwxMC42MDMwMyAtMTAuNzUsMTguNDc2NTZjMCwxMS44MjA4IDkuNjc5MiwyMS41IDIxLjUsMjEuNWMzLjA4NjQzLDAgNi4wNjc4NywtMC42NTA4OCA4LjczNDM4LC0xLjg0NzY2YzkuMzIyMjcsNy44MzE1NCAyMS40NTgwMSwxMi41OTc2NiAzNC4yNjU2MywxMi41OTc2NmMxMi44MDc2MiwwIDI0Ljk0MzM2LC00Ljc2NjExIDM0LjI2NTYzLC0xMi41OTc2NmMyLjY2NjUxLDEuMTk2NzggNS42NDc5NSwxLjg0NzY2IDguNzM0MzgsMS44NDc2NmMxMS44MjA4LDAgMjEuNSwtOS42NzkyIDIxLjUsLTIxLjVjMCwtNy45NTc1MiAtNC40MzAxOCwtMTQuOTI4MjIgLTEwLjkxNzk3LC0xOC42NDQ1M2MwLjA4Mzk4LC0wLjg2MDg0IDAuMTY3OTcsLTEuNzQyNjggMC4xNjc5NywtMi44NTU0N2MwLC0yMS44MTQ5NCAtMTMuMDM4NTcsLTQwLjk4NDM3IC0zMi40MTc5NywtNDkuMjE0ODRjLTAuNDYxOTEsLTExLjQyMTg3IC05LjgwNTE4LC0yMC42NjAxNiAtMjEuMzMyMDMsLTIwLjY2MDE2ek04NiwzMi4yNWM2LjAwNDg5LDAgMTAuNzUsNC43NDUxMiAxMC43NSwxMC43NWMwLDYuMDA0ODkgLTQuNzQ1MTEsMTAuNzUgLTEwLjc1LDEwLjc1Yy02LjAwNDg4LDAgLTEwLjc1LC00Ljc0NTExIC0xMC43NSwtMTAuNzVjMCwtNi4wMDQ4OCA0Ljc0NTEyLC0xMC43NSAxMC43NSwtMTAuNzV6TTY3LjAxOTUzLDUyLjkxMDE2YzMuNjExMzMsNi44NDQ3MyAxMC43NSwxMS41ODk4NCAxOC45ODA0NywxMS41ODk4NGM4LjIzMDQ3LDAgMTUuMzY5MTQsLTQuNzQ1MTEgMTguOTgwNDcsLTExLjU4OTg0YzE0LjQwMzMyLDYuOTkxNyAyNC4wMTk1MywyMS42ODg5NiAyNC4wMTk1MywzOC40NjQ4NGMtMTEuODIwOCwwIC0yMS41LDkuNjc5MiAtMjEuNSwyMS41YzAsNC44MDgxIDEuNjU4NjksOS4xNzUyOSA0LjM2NzE5LDEyLjc2NTYzYy03LjE4MDY2LDUuNDM3OTkgLTE2LjQxODk0LDguNzM0MzggLTI1Ljg2NzE5LDguNzM0MzhjLTkuNDQ4MjQsMCAtMTguNjg2NTIsLTMuMjk2MzkgLTI1Ljg2NzE5LC04LjczNDM3YzIuNzA4NDksLTMuNTkwMzMgNC4zNjcxOSwtNy45NTc1MiA0LjM2NzE5LC0xMi43NjU2MmMwLC0xMS44MjA4IC05LjY3OTIsLTIxLjUgLTIxLjUsLTIxLjVjMCwtMTYuNzc1ODggOS42MTYyMSwtMzEuNDczMTUgMjQuMDE5NTMsLTM4LjQ2NDg0ek00MywxMDIuMTI1YzYuMDA0ODksMCAxMC43NSw0Ljc0NTEyIDEwLjc1LDEwLjc1YzAsNi4wMDQ4OSAtNC43NDUxMSwxMC43NSAtMTAuNzUsMTAuNzVjLTYuMDA0ODgsMCAtMTAuNzUsLTQuNzQ1MTEgLTEwLjc1LC0xMC43NWMwLC02LjAwNDg4IDQuNzQ1MTIsLTEwLjc1IDEwLjc1LC0xMC43NXpNMTI5LDEwMi4xMjVjNi4wMDQ4OSwwIDEwLjc1LDQuNzQ1MTIgMTAuNzUsMTAuNzVjMCw2LjAwNDg5IC00Ljc0NTExLDEwLjc1IC0xMC43NSwxMC43NWMtNi4wMDQ4OCwwIC0xMC43NSwtNC43NDUxMSAtMTAuNzUsLTEwLjc1YzAsLTYuMDA0ODggNC43NDUxMiwtMTAuNzUgMTAuNzUsLTEwLjc1eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"}),u&&Object(j.jsx)("img",{alt:"svgImg",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjAiIGhlaWdodD0iMjAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzFhYmM5YyI+PHBhdGggZD0iTTEzMS44NjY2NywxNy4yYy0xMi42NjU3MywwIC0yMi45MzMzMywxMC4yNjc2IC0yMi45MzMzMywyMi45MzMzM2MwLjAxMDIyLDEuNjEyMDIgMC4xOTAzOCwzLjIxODQ3IDAuNTM3NSw0Ljc5MjcxbC01Mi4wNzAzMSwyNi4wMzUxNmMtNC4zNDUwMiwtNS4wMDIzOCAtMTAuNjQxMjcsLTcuODgxMDEgLTE3LjI2NzE5LC03Ljg5NDUzYy0xMi42NjU3MywwIC0yMi45MzMzMywxMC4yNjc2IC0yMi45MzMzMywyMi45MzMzM2MwLDEyLjY2NTczIDEwLjI2NzYsMjIuOTMzMzMgMjIuOTMzMzMsMjIuOTMzMzNjNi42MjgwNSwtMC4wMDc0NiAxMi45Mjg3MywtMi44ODIxNyAxNy4yNzgzOSwtNy44ODMzM2w1Mi4wMzY3MiwyNi4wMjM5NmMtMC4zMzk1OSwxLjU3NTA0IC0wLjUxMjI0LDMuMTgxNDggLTAuNTE1MTEsNC43OTI3MWMwLDEyLjY2NTczIDEwLjI2NzYsMjIuOTMzMzMgMjIuOTMzMzMsMjIuOTMzMzNjMTIuNjY1NzMsMCAyMi45MzMzMywtMTAuMjY3NiAyMi45MzMzMywtMjIuOTMzMzNjMCwtMTIuNjY1NzMgLTEwLjI2NzYsLTIyLjkzMzMzIC0yMi45MzMzMywtMjIuOTMzMzNjLTYuNjI4MDUsMC4wMDc0NiAtMTIuOTI4NzMsMi44ODIxNyAtMTcuMjc4MzksNy44ODMzM2wtNTIuMDM2NzIsLTI2LjAyMzk2YzAuMzM5NTksLTEuNTc1MDQgMC41MTIyNCwtMy4xODE0OCAwLjUxNTExLC00Ljc5MjcxYy0wLjAxMTAxLC0xLjYwODI3IC0wLjE5MTE3LC0zLjIxMDkzIC0wLjUzNzUsLTQuNzgxNTFsNTIuMDcwMzEsLTI2LjAzNTE2YzQuMzQ3MDksNC45OTgyMiAxMC42NDMwNSw3Ljg3MjY0IDE3LjI2NzE5LDcuODgzMzNjMTIuNjY1NzMsMCAyMi45MzMzMywtMTAuMjY3NiAyMi45MzMzMywtMjIuOTMzMzNjMCwtMTIuNjY1NzMgLTEwLjI2NzYsLTIyLjkzMzMzIC0yMi45MzMzMywtMjIuOTMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="}),!N&&!u&&Object(j.jsx)("img",{alt:"svgImg",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjAiIGhlaWdodD0iMjAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzM0NDk1ZSI+PHBhdGggZD0iTTEzMS44NjY2NywxNy4yYy0xMi42NjU3MywwIC0yMi45MzMzMywxMC4yNjc2IC0yMi45MzMzMywyMi45MzMzM2MwLjAxMDIyLDEuNjEyMDIgMC4xOTAzOCwzLjIxODQ3IDAuNTM3NSw0Ljc5MjcxbC01Mi4wNzAzMSwyNi4wMzUxNmMtNC4zNDUwMiwtNS4wMDIzOCAtMTAuNjQxMjcsLTcuODgxMDEgLTE3LjI2NzE5LC03Ljg5NDUzYy0xMi42NjU3MywwIC0yMi45MzMzMywxMC4yNjc2IC0yMi45MzMzMywyMi45MzMzM2MwLDEyLjY2NTczIDEwLjI2NzYsMjIuOTMzMzMgMjIuOTMzMzMsMjIuOTMzMzNjNi42MjgwNSwtMC4wMDc0NiAxMi45Mjg3MywtMi44ODIxNyAxNy4yNzgzOSwtNy44ODMzM2w1Mi4wMzY3MiwyNi4wMjM5NmMtMC4zMzk1OSwxLjU3NTA0IC0wLjUxMjI0LDMuMTgxNDggLTAuNTE1MTEsNC43OTI3MWMwLDEyLjY2NTczIDEwLjI2NzYsMjIuOTMzMzMgMjIuOTMzMzMsMjIuOTMzMzNjMTIuNjY1NzMsMCAyMi45MzMzMywtMTAuMjY3NiAyMi45MzMzMywtMjIuOTMzMzNjMCwtMTIuNjY1NzMgLTEwLjI2NzYsLTIyLjkzMzMzIC0yMi45MzMzMywtMjIuOTMzMzNjLTYuNjI4MDUsMC4wMDc0NiAtMTIuOTI4NzMsMi44ODIxNyAtMTcuMjc4MzksNy44ODMzM2wtNTIuMDM2NzIsLTI2LjAyMzk2YzAuMzM5NTksLTEuNTc1MDQgMC41MTIyNCwtMy4xODE0OCAwLjUxNTExLC00Ljc5MjcxYy0wLjAxMTAxLC0xLjYwODI3IC0wLjE5MTE3LC0zLjIxMDkzIC0wLjUzNzUsLTQuNzgxNTFsNTIuMDcwMzEsLTI2LjAzNTE2YzQuMzQ3MDksNC45OTgyMiAxMC42NDMwNSw3Ljg3MjY0IDE3LjI2NzE5LDcuODgzMzNjMTIuNjY1NzMsMCAyMi45MzMzMywtMTAuMjY3NiAyMi45MzMzMywtMjIuOTMzMzNjMCwtMTIuNjY1NzMgLTEwLjI2NzYsLTIyLjkzMzMzIC0yMi45MzMzMywtMjIuOTMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="})]}),e.selectMode?Object(j.jsx)("div",{className:"task",tabIndex:e.tabIdx,children:e.text}):Object(j.jsx)(h,{type:"text",className:"listInput",tabIndex:e.tabIdx,value:e.text,onChange:function(t){e.selectMode||e.onListChange(e.id,"text",t.target.value)}}),Object(j.jsx)("div",{className:"buttonGroup",children:Object(j.jsx)("button",{className:e.selectMode?"hiddenButton":"goToButton",tabIndex:e.tabIdx,onClick:function(){return e.onCurrList([e.id,e.text])},"aria-label":"open this list",children:Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABMUlEQVRIie3WsUrDUBTG8e+cuvgAFUHdO7RTopMgWKmYgG8QzJRnsluwjyBNoFhE3CSZ2qF7C4J9AZee4+IgzdLcmwaV/sfD5f7ucC9cYNd/j9YHzvWdD9Y+AUcVGQsAUZY+pD+HXDgJ632FKAAcA+ivDwvw98KqO9kEriUDmM6Z9JSAj1phYXy+JYNMWbs2eGmYRVPHCzvZcDCVFV8AeK8FBtAklbHjhZ18FM90xZcmuOnlssZtbrUVbvucmqzy5PpBOx/FMya9rQs2zhZeCvFVNhxMnV7YEqXHOuClEnfzJJ44vbBFDXkGcLht2Ao1ha1RI1iYbvIknrh+0OaGvJigRjCtdP/MC1wSGitwYIICwF5pmPAqWvi4lO5XvePFFpz5JnBUMT4n4qjC/Xb9kb4A6Qd5UOavDm0AAAAASUVORK5CYII=",alt:"right arrow: go to this list"})})})]})})]})};i(61);var C=function(e){return Object(j.jsx)("div",{className:"backdrop",children:Object(j.jsxs)("div",{className:"modal",children:[e.children,Object(j.jsxs)("div",{className:"alertButtonGroup",children:[Object(j.jsx)("button",{className:"cancel",type:"button",onClick:e.onClose,children:"Cancel"}),Object(j.jsx)("button",{className:"warningConfirm",type:"button",onClick:function(){e.onClose(),e.onOK()},children:"Yes, delete selected lists"})]})]})})};var w=function(e){var t=Object(c.useState)(""),i=Object(r.a)(t,2),n=i[0],s=i[1],a=Object(c.useState)(!1),d=Object(r.a)(a,2),M=d[0],u=d[1],N=Object(c.useState)([]),b=Object(r.a)(N,2),A=b[0],m=b[1],I=Object(c.useState)(!1),x=Object(r.a)(I,2),g=x[0],h=x[1],w=Object(c.useState)(""),L=Object(r.a)(w,2),z=L[0],D=L[1],y=function(e,t){if(!t)if(A.includes(e)){var i=A.filter((function(t){return t!==e}));m(i)}else m([].concat(Object(o.a)(A),[e]))},T=function(){m([]),u(!1),h(!1),D("")},p=null!==e.user.displayName?e.user.displayName:e.user.email;return Object(j.jsxs)("div",{id:"listOutlier",children:[Object(j.jsxs)("div",{className:"emailDisplay",children:["Hi, ",p]}),Object(j.jsxs)("div",{className:"headerButton",role:"heading","aria-level":"1","aria-label":"Your Lists",children:[Object(j.jsxs)("div",{className:"head",children:[Object(j.jsx)("h1",{children:"Lists"}),!e.user.emailVerified&&Object(j.jsx)("button",{type:"button",className:"select",onClick:e.verifyEmail,children:"Verify email"})]}),0===e.lists.length&&Object(j.jsx)("div",{className:"buttonGroup",children:Object(j.jsx)("button",{className:"warning","aria-label":"log out",onClick:function(){return e.auth.signOut()},children:"Logout"})}),0!==e.lists.length&&(M?Object(j.jsxs)("div",{className:"buttonGroup",children:[A.length>0&&Object(j.jsx)("button",{className:"warningConfirm",onClick:function(){h(!0),D(-1)},tabIndex:z,children:"Delete selected"}),Object(j.jsx)("button",{className:"cancel",tabIndex:z,onClick:T,children:"Cancel"})]}):Object(j.jsxs)("div",{className:"buttonGroup",children:[Object(j.jsx)("button",{className:"select","aria-label":"enter list selection mode",onClick:function(){return u(!0)},children:"Select"}),Object(j.jsx)("button",{className:"warning","aria-label":"log out",onClick:function(){return e.auth.signOut()},children:"Logout"})]}))]}),Object(j.jsx)("div",{className:"taskItems",children:e.isLoading?Object(j.jsx)("div",{className:"completeItem",children:Object(j.jsx)("div",{className:"task",children:"Loading..."})}):0===e.lists.length?Object(j.jsxs)("div",{className:"taskItems",children:[Object(j.jsx)("div",{className:"completeItem",children:"Create your 1st Task List using the input box below : )"}),!e.user.emailVerified&&Object(j.jsx)("div",{className:"completeItem",children:"Verify your email and re-login to unlock SHARING"})]}):e.lists.map((function(t){return Object(j.jsx)(O,Object(l.a)({id:t.id,text:t.text,owner:t.owner,user:e.user,ownerEmail:t.ownerEmail,isSharedWith:t.isSharedWith,selectMode:M,selectedID:A,onCurrList:e.onCurrList,onListChange:e.onListChange,onSelect:y,onExit:T,tabIdx:z},e),t.id)}))}),!M&&Object(j.jsxs)("div",{className:"addList",children:[Object(j.jsx)("input",{type:"text",className:"taskInputBox",name:"task",value:n,onKeyDown:function(t){"Enter"===t.key&&(e.onAddList(n),s(""))},onChange:function(e){return s(e.target.value)},placeholder:"Enter your new list here"}),Object(j.jsx)("button",{type:"button",className:M?"disabledAddButton":"addButton","aria-label":"add this new list",onClick:function(){e.onAddList(n),s("")},children:"+"})]}),g&&Object(j.jsx)(C,{role:"alert",onClose:function(){T()},onOK:function(){A.map((function(t){e.db.collection(e.collectionName).doc(t).delete(t)}))},children:Object(j.jsx)("div",{className:"message","aria-label":"You're about to delete the selected lists",children:"You're about to delete the selected lists"})})]})},L=i(39),z=i(47),D=i.n(z);I.a.initializeApp({apiKey:"AIzaSyDj8RgS2ttSTayF0nByWTcOJCNchTkxb3Q",authDomain:"my-taskmanager-reactapp.firebaseapp.com",projectId:"my-taskmanager-reactapp",storageBucket:"my-taskmanager-reactapp.appspot.com",messagingSenderId:"147010276461",appId:"1:147010276461:web:0b3e52192f1579258a0364",measurementId:"G-XB9REXV77G"});var y=I.a.firestore(),T=I.a.auth(),p="jiahao-lists",k=new I.a.auth.GoogleAuthProvider;function f(e){var t=Object(L.c)(T),i=Object(r.a)(t,4),c=i[0],n=(i[1],i[2]),s=i[3];return n?Object(j.jsx)("div",{id:"signIn",children:Object(j.jsx)("button",{className:"loadingHomeButton",children:"Login"})}):(!e.isErrorShown&&s&&alert(s.message),e.setIsErrorShown(!0),Object(j.jsx)("div",{id:"signIn",children:Object(j.jsx)("button",{className:"homeLogInButton",onClick:function(){e.setIsErrorShown(!1),c(e.email,e.password),e.clearInput()},children:"Login"})}))}function v(e){var t=Object(L.b)(T),i=Object(r.a)(t,4),c=i[0],n=(i[1],i[2]),s=i[3];return n?Object(j.jsx)("div",{id:"signUp",children:Object(j.jsx)("button",{className:"loadingHomeButton",children:"Sign up"})}):(!e.isErrorShown&&s&&alert(s.message),e.setIsErrorShown(!0),Object(j.jsx)("div",{id:"signUp",children:Object(j.jsx)("button",{className:"homeButton",onClick:function(){e.setIsErrorShown(!1),c(e.email,e.password),e.clearInput()},children:"Sign up"})}))}function E(e){var t=[],i=[],n=y.collection(p).where("owner","==",e.user.uid),s=y.collection(p).where("isSharedWith","array-contains",e.user.email),l=Object(A.a)(n),d=Object(r.a)(l,3),M=d[0],u=d[1],N=(d[2],Object(A.a)(s)),b=Object(r.a)(N,3),I=b[0],g=(b[1],b[2]),h=Object(c.useState)([]),O=Object(r.a)(h,2),C=O[0],L=O[1];console.log(g),(M||I)&&(t=M.docs.map((function(e){return e.data()})),I&&(i=I.docs.map((function(e){return e.data()})),I.size>0&&(t=[].concat(Object(o.a)(t),Object(o.a)(i)))));var z=function(e){L(e)};return 0===C.length?Object(j.jsx)(w,{lists:t,isLoading:u,onAddList:function(t){if(""!==t){var i=Object(m.a)();y.collection(p).doc(i).set({id:i,text:t,owner:e.user.uid,ownerEmail:e.user.email,isSharedWith:[]}).catch((function(e){console.error("Error deleting document: ",e)}))}},onCurrList:z,onListChange:function(e,t,i){y.collection(p).doc(e).update(Object(a.a)({},t,i))},collectionName:p,db:y,verifyEmail:e.verifyEmail,user:e.user,auth:T}):Object(j.jsx)(x,{currListID:C[0],currList:C[1],collectionName:p,db:y,lists:t,onCurrList:z,user:e.user,query:n})}var S=function(e){var t=Object(L.a)(T),i=Object(r.a)(t,3),n=i[0],s=i[1],a=(i[2],Object(c.useState)("")),o=Object(r.a)(a,2),d=o[0],M=o[1],u=Object(c.useState)(""),N=Object(r.a)(u,2),b=N[0],A=N[1],m=Object(c.useState)(!1),I=Object(r.a)(m,2),x=I[0],g=I[1],h=Object(c.useState)(!1),O=Object(r.a)(h,2),C=O[0],w=O[1];function z(){M(""),A("")}return s?Object(j.jsx)("p",{children:"Checking..."}):n?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(E,Object(l.a)(Object(l.a)({},e),{},{user:n,verifyEmail:function(){T.currentUser.sendEmailVerification(),alert("Verification email sent. Verify your email using the link & re-login to unlock SHARING!")}}))}):Object(j.jsx)("div",{id:"homeOutlier",children:Object(j.jsxs)("div",{className:"center",children:[Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAABmJLR0QA/wD/AP+gvaeTAAAFJElEQVR4nO2cW0wcVRjHz5nZZYFtYZflDrYFKdeSBqupbdVqI6ipSCKJbip9wRdNffDJO9rEh8akiUYrxDb2oTWR1Nik+KAhaaWShqgJKFRLhYCUcOuyXJbr7uzO8aGJqQi785+dpLPL93uc+fbknx8zc86e/Rg+Me1lhDakex0gliBZACQLgGQBkCwAkgVAsgBIFgDJAiBZACQLgGQBWKL6tKqKGS/zzTNnGnemGRTJvOiUJXzzwW9ag1faxczMnSNSbp7lcJ2lto5ZE4yLZy64ji0adXDAf/wd4Z3+/ympaKft+AnuchmRzXTAzywxNeV/7411TTHG1MGB1fffYn5/1MHMCHwbBk6fEvNzYQrE0KDy7QXrkaPax5yY9Jz4+AyaJHpqn3q8+tB+7fWYLOH1hrquRSwLtl20ul9iktbLdtXv7/vjJpTEEB6q2gXVY7eh2tvNhIhYJubn1JG/oZFjAkzWv3NfZGbicGsffMAnJWuttNvRKOYHkyUVFmmqs1r5th164pgbUFZxiZSbF7FM3ruPJ2u+BmMHeFEa7LoW+LAp3GPeZkv67DS/bxswphKc8t6DZ5xj61a7Hfij6lnBK1+fV86dXf+c1Wp7s0k+8Cg6ZkygRxZjLNTZETjTIjy3/zNWYVHCa6/LZRUGZTMdOmUxxpiiqL2/hfpviOVFnuqQKnfLJWXaF6KxSBSyNh/xfCEYDskCIFkAJAuAZAGQLACSBUCyAEgWAMkCIFkAJAuAZAGQLAD9XTQ3bi1c+X16YGxpxR9KscsV21OerMrMT080MJzZ0LOftaqop9qGOq+v/aAs8ecP5Bx5Il/i3KB45gL/wSKkNp3r//PWwkYFNQ9kHqstiDqYGYFvwwud42FMMcbau2/v2el4uNSpfUyfb/GHy51okuipLC8uK7lfez0my6+ol7omIpa1doxBsryzcy1ftkJJDKGxoR6Shc2GvcPzqwE1Ytnw1JJnPg5btDBZkzNaFUzObnpZ2uEsDidETFaOS+syKttpw8OYHUxW5Y6UpAQ5YllhTnJ6ahz2LGOzoc0q1e3Pbu0YC1/mPpgPDetyOl592Q19xBAqy4uhej2L0g/O37w+4tuo4JkHs145HIfNWUz3153m74av9q3t7rbIvP6RXPfBPPq6s5b+0cUfe6f/GltYXlFTt1gqtqdUV2Xkap4BYhFqDAGg/SwAkgVAsgBIFgDJAiBZACQLgGQBkCwAkgVAsgBIFgDJAiBZAPobQ7ga4OM/c08fCyyIRBfL3qNm7mY8nu3rlCUNfy//cpIvTd19UKQVh/Y1qVlVRgQzI3o2/+SeFrnn83VPCdkaeuwjtaAm6mBmBL6ypJHLck/zRmd5SLH89LbiLBKOQu1jxsq//YKyhGr59SRjYd+DEfLL3Z8GD32ifdTR8cnGY+9iSYygsaH+qPs57fXY85h7+phvNHLZ6FUWCNeWFKOAryqY6ddSxkMKnxvSlcfUgDN9cFljIQ8swllMD/p6lQyNhcKeCWcxPZisUM5epqWXKMklHEBHXawAzobJGWpBtTTcHr4qWN4ALeUTbbbKihIsiRFkZ6ZD9fCilC9OWNteZKsbvhtKuMqUZ79i8qbvz2KMiS05wae/EPas9c+m71JqmuPSFNPd68D9PqnvrDx4iS177hwRqQVq6QtqqVvIVkMTmogoG0MEX/awlVmRnM6S4vN1m3dDXTQA8bz9ZDgkC4BkAZAsAJIFQLIASBYAyQIgWQAkC4BkAZAsgH8AprKX7XH3GyUAAAAASUVORK5CYII="}),Object(j.jsx)("div",{children:"Task Manager"})]}),!x&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"inputFields",children:[Object(j.jsx)("input",{class:"homeInput",onChange:function(e){return M(e.target.value)},id:"email",type:"text",placeholder:"Email"}),Object(j.jsx)("input",{className:"homeInput",type:"password",onChange:function(e){return A(e.target.value)},id:"password",placeholder:"Password"})]}),Object(j.jsxs)("div",{className:"typeInfo",children:[Object(j.jsx)(v,{id:"signUp",email:d,password:b,clearInput:z,isErrorShown:C,setIsErrorShown:w},"Sign Up"),Object(j.jsx)(f,{id:"signIn",email:d,password:b,clearInput:z,isErrorShown:C,setIsErrorShown:w},"Sign In"),Object(j.jsx)("div",{id:"reset",children:Object(j.jsx)("button",{className:"homeButton",onClick:function(){g(!0)},children:"Reset Password"})})]}),Object(j.jsx)("div",{className:"3PSignIn",children:Object(j.jsx)(D.a,{id:"googleButton",type:"light",onClick:function(){return T.signInWithPopup(k)}})})," "]}),x&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"inputFields",children:Object(j.jsx)("input",{className:"homeInput",onChange:function(e){return M(e.target.value)},id:"email",type:"text",placeholder:"Email"})}),Object(j.jsx)("div",{id:"signIn",children:Object(j.jsx)("button",{className:"homeButton",onClick:function(){T.sendPasswordResetEmail(d).then((function(){alert("Password reset email sent."),g(!1)})).catch((function(e){alert(e)})),z()},children:"Send reset email"})})]})]})})};s.a.render(Object(j.jsx)(S,{}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.75869dcd.chunk.js.map