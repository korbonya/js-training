let addBtn = document.getElementById("btnSubmit");
let input = document.getElementById("task");
let list = document.getElementById("taskList");


addBtn.addEventListener("click", function(e){
    e.preventDefault();
    let task = input.value;
    if(task === ""){
        alert("S'il vous plaît, entrez une tâche");
    }else{
        let listItem = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "task";
        
        let label = document.createElement("label");
        label.htmlFor = "task";
        label.appendChild(document.createTextNode(task));
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "btnDelete";
        deleteBtn.appendChild(document.createTextNode("Supprimer"));
        
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(deleteBtn);
        console.log(listItem);
        deleteBtn.addEventListener("click", function(e){
            e.preventDefault();
            list.removeChild(listItem);
        });
        checkbox.addEventListener("click", function(e){
            if(checkbox.checked){
                listItem.classList.add("complete");
            }else{
                listItem.classList.remove("complete");
            }
        });
        list.appendChild(listItem);
        console.log(list);
        input.value = "";
    }    

   });

   

