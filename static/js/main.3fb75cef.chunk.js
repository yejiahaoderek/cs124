(this.webpackJsonplab=this.webpackJsonplab||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n(8),l=n.n(i),s=(n(15),n(4)),c=n(7),a=n(10),d=n(2),r=(n(16),n(17),n(0));var m=function(e){return Object(r.jsxs)("div",{className:e.isCompleted?"completeItem":e.editID===e.id?"selectedListItem":"listItem",onClick:function(){e.deleteConfirm||(e.onClick(e.id),e.onRename(e.text))},children:[Object(r.jsx)("input",{type:"checkbox",name:"isCompleted",checked:e.isCompleted,onClick:function(e){return e.stopPropagation()},onChange:function(){!1===e.editID&&(e.deleteConfirm||e.onChange(e.id,"isCompleted",!e.isCompleted))}}),e.editID===e.id?Object(r.jsx)("input",{type:"text",className:"rename",onChange:function(t){return e.onRename(t.target.value)}}):Object(r.jsx)("input",{type:"text",className:"task",value:e.text,onChange:function(t){return e.onRename(t.target.value)}}),Object(r.jsx)("div",{className:"buttonGroup",onClick:function(e){return e.stopPropagation()},children:Object(r.jsx)("button",{className:"deleteButton",onClick:function(){!1===e.editID&&(e.deleteConfirm||e.onDelete(e.id))},children:" X"})})]})};var u=function(e){return e.tasks.map((function(t){return Object(r.jsx)(m,{id:t.id,text:t.text,onRename:e.onRename,newText:t.newText,isCompleted:t.isCompleted,editID:e.editID,deleteConfirm:e.deleteConfirm,onClick:e.onClick,onDelete:e.onDelete,onChange:e.onChange},t.id)}))};var j=function(e){return Object(r.jsxs)("div",{className:"incompleteSection",children:[Object(r.jsxs)("div",{className:"headerButton",children:[Object(r.jsx)("h1",{children:"To-Do"}),!1!==e.editID&&Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:"confirmButton",onClick:function(){return e.onConfirm(e.editID,"text",e.newText)},children:"Done"}),Object(r.jsx)("button",{onClick:e.onQuitEdit,children:"Cancel"})]})]}),Object(r.jsx)("div",{className:"taskItems",children:0!==e.tasks.filter((function(e){return!1===e.isCompleted})).length?Object(r.jsx)(u,{tasks:e.tasks.filter((function(e){return!1===e.isCompleted})),editID:e.editID,newText:e.newText,onRename:e.onRename,deleteConfirm:e.deleteConfirm,onDelete:e.onDelete,onChange:e.onChange,onClick:e.onClick}):Object(r.jsx)("div",{className:"listItem",children:Object(r.jsx)("div",{className:"item",children:"You don't have any To-Do now"})})})]})};var C=function(e){var t=e.tasks.filter((function(e){return!0===e.isCompleted})).length>0;return Object(r.jsx)("div",{className:"completedSection",children:e.showCompletedItems&&Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"headerButton",children:[Object(r.jsx)("h1",{children:"Completed "}),t&&(e.deleteConfirm?Object(r.jsxs)("div",{className:"buttonGroup",children:[Object(r.jsx)("button",{className:"warning",onClick:function(){e.onDeleteAll(),e.onDeleteConfirm(!1)},children:"Delete"}),Object(r.jsx)("button",{onClick:function(){return e.onDeleteConfirm(!1)},children:"Cancel"})]}):Object(r.jsx)("button",{className:"warning",onClick:function(){!1===e.editID&&e.onDeleteConfirm(!e.deleteConfirm)},children:"Delete All"}))]}),Object(r.jsx)("div",{className:"completedTaskItems",children:0!==e.tasks.filter((function(e){return!0===e.isCompleted})).length?Object(r.jsx)(u,{className:"completeItem",tasks:e.tasks.filter((function(e){return!0===e.isCompleted})),editID:e.editID,newText:e.newText,onRename:e.onRename,deleteConfirm:e.deleteConfirm,onDelete:e.onDelete,onChange:e.onChange,onClick:e.onClick}):Object(r.jsx)("div",{className:"completeItem",children:Object(r.jsx)("div",{className:"item",children:"You don't have any completed tasks"})})})]})})};var h=function(e){var t=Object(o.useState)(!1),n=Object(d.a)(t,2),i=n[0],l=n[1],s=Object(o.useState)(!1),c=Object(d.a)(s,2),a=c[0],m=c[1],u=Object(o.useState)(""),h=Object(d.a)(u,2),b=h[0],f=h[1],x=Object(o.useState)(""),p=Object(d.a)(x,2),k=p[0],O=p[1];function D(e){O(e)}function I(t){e.tasks.filter((function(e){return e.id===t}))[0].isCompleted||l(t)}return console.log(k),Object(r.jsxs)("div",{children:[Object(r.jsx)("title",{children:"Task Tracker"}),Object(r.jsxs)("div",{id:"outlier",children:[Object(r.jsx)(j,{tasks:e.tasks,onDelete:e.handleItemDeleted,onChange:e.onTaskFieldChanged,onRename:D,newText:k,editID:i,deleteConfirm:a,onClick:I,onConfirm:function(t,n,o){e.onTaskFieldChanged(t,[n],o),l(!1)},onQuitEdit:function(){l(!1),console.log(i)}}),Object(r.jsxs)("button",{id:"hideButton",onClick:e.onToggleCompletedItems,children:[e.showCompletedItems?"Hide":"Show"," Completed"]}),Object(r.jsx)(C,{tasks:e.tasks,editID:i,onRename:D,newText:k,deleteConfirm:a,showCompletedItems:e.showCompletedItems,onDeleteConfirm:function(e){m(e)},onDelete:e.handleItemDeleted,onDeleteAll:e.onDeleteAll,onChange:e.onTaskFieldChanged,onClick:I}),Object(r.jsxs)("div",{className:"addList",children:[Object(r.jsx)("input",{type:"text",className:"taskInputBox",name:"task",value:b,onChange:function(e){return f(e.target.value)},placeholder:!1!==i?"Please finish edit first":!1!==a?"Please confirm your deleteAll action":"Enter your new task here"}),Object(r.jsx)("button",{type:"button",className:"addButton",onClick:function(){!1===i&&(e.onAddTask(b),f(""))},children:"+"})]})]})]})};var b=function(e){return Object(r.jsx)(h,{tasks:e.data,showCompletedItems:e.showCompletedItems,onAddTask:e.handleAddTask,onTaskFieldChanged:e.handleTaskFieldChanged,onDeleteAll:e.handleDeleteAll,handleItemDeleted:e.handleItemDeleted,onToggleCompletedItems:e.handleToggleCompletedItems})},f=n(9);var x=function(e){var t=Object(o.useState)(e.initialData),n=Object(d.a)(t,2),i=n[0],l=n[1],m=Object(o.useState)(!0),u=Object(d.a)(m,2),j=u[0],C=u[1];return Object(r.jsx)(b,{data:i,showCompletedItems:j,handleAddTask:function(e){""!==e&&l([].concat(Object(a.a)(i),[{id:Object(f.a)(),text:e,isCompleted:!1}]))},handleTaskFieldChanged:function(e,t,n){l(i.map((function(o){return o.id!==e?o:Object(c.a)(Object(c.a)({},o),{},Object(s.a)({},t,n))})))},handleItemDeleted:function(e){l(i.filter((function(t){return t.id!==e})))},handleDeleteAll:function(){l(i.filter((function(e){return!e.isCompleted})))},handleToggleCompletedItems:function(){C(!j)}})};l.a.render(Object(r.jsx)(x,{initialData:[{id:0,text:"Buy new John Grisham book",isCompleted:!1},{id:1,text:"Eat Lunch",isCompleted:!1},{id:2,text:"Call Mom",isCompleted:!0}]}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.3fb75cef.chunk.js.map