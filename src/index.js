import "./styles.css"
import datePic from "./datePic.svg";
import plus from "./plus.svg";
import editPic from "./edit.svg";
import filePic from "./file-text.svg";
import donePic from "./done.svg";
import delPic from "./deletPic.svg";
import delProjPic from "./deletBlack.svg"

function todosCreator(title){
    let dueDate = Date;
    let description;
    let priority = ["Red","Orange","Green"]
    let setPriority = () => {priority};
    let notes;
    return{title, description, dueDate, setPriority, notes}
}

function projectsCreator(todo){
    let setTodos = () => {todo}
    return{title,setTodos};
}

function changeText(textToChange){
    let originalText = textToChange.textContent;
    let inputText = document.createElement('input')
    inputText.type = Text;
    inputText.textContent = originalText;
    textToChange.replaceWith(inputText);

    inputText.addEventListener('blur', function(){
        if(inputText.value != ''){
             textToChange.textContent = inputText.value;
            inputText.replaceWith(textToChange);
        }else{
            textToChange.textContent = originalText;
            inputText.replaceWith(textToChange);
        }
    })
}


const header = document.querySelector("header")
const content = document.querySelector(".content")

let heading = document.createElement('h2');
heading.textContent = 'Start creating your To do lists!'
header.appendChild(heading);

let addProjectBtn = document.createElement('button');
addProjectBtn.textContent = "Add a Project!"
header.appendChild(addProjectBtn);

let bodyDiv = document.createElement('div');


addProjectBtn.addEventListener('click', function(){
    addProject()
})

function renderTodos(container){
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("mainDiv");
    container.appendChild(mainDiv);
    mainDiv.cloneNode(true);

    let todowa = document.createElement('div')
    todowa.classList.add("todowa");
    mainDiv.appendChild(todowa);

    let picContainer = document.createElement('div');
    picContainer.classList.add("picContainer");

    let dueDatePic = document.createElement('img')
    dueDatePic.src = datePic;
    dueDatePic.classList.add("duedate")
    picContainer.appendChild(dueDatePic);

    let editTopic = document.createElement('img')
    editTopic.src = editPic;
    picContainer.appendChild(editTopic);

    let filePicto = document.createElement('img')
    filePicto.src = filePic;
    picContainer.appendChild(filePicto);

    let textarea = document.createElement("textarea")
    let dialog = document.createElement("dialog"); 
    let form = document.createElement("form");
    let buttonDialog = document.createElement("button");
    buttonDialog.textContent = 'Close';
    form.method = "dialog";
    form.appendChild(textarea);
    form.appendChild(buttonDialog);
    dialog.appendChild(form);
    buttonDialog.addEventListener("click", () => dialog.close());
    document.body.appendChild(dialog);

    
    filePicto.addEventListener('click', function(){
        dialog.showModal()
    })

    let deletePic = document.createElement('img')
    deletePic.src = delPic;
    deletePic.classList.add("deletePic")
    picContainer.appendChild(deletePic);

    let dialogDate = document.createElement("dialog");
    let formDate = document.createElement("form");
    let buttonDialogDate = document.createElement("button");
    buttonDialogDate.textContent = 'Close';
    buttonDialogDate.addEventListener("click", () => dialogDate.close());
    let inputDate = document.createElement("input");
    inputDate.type = 'date'
    formDate.appendChild(inputDate);
    formDate.appendChild(buttonDialogDate);
    dialogDate.appendChild(formDate);
    document.body.appendChild(dialogDate);
    let duedateValue = document.createElement('p')
    duedateValue.classList.add('duedateValue')

    let square = document.createElement("div");
    square.classList.add("square");
    todowa.appendChild(square);

    let h4Div = document.createElement('div')
    let h4 = document.createElement('h4')
    h4.textContent = 'Task to do'
    todowa.appendChild(h4);

    mainDiv.appendChild(picContainer);
    editTopic.addEventListener('click', function(){
    changeText(h4);
    })
    h4Div.appendChild(duedateValue);

    let donePicture = document.createElement('img')
    donePicture.src = donePic;
    donePicture.classList.add("donePicture")


    square.addEventListener('click', function(){
        if(square.hasChildNodes()){
            square.removeChild(donePicture)
        }else{square.appendChild(donePicture)}
    })

    deletePic.addEventListener("click", function(){
        container.removeChild(mainDiv);
    })

    dueDatePic.addEventListener('click', function(){
        dialogDate.showModal();
    })

}

function addProject(){
    let containerDiv = document.createElement('div')
    containerDiv.classList.add("projects");
    content.appendChild(containerDiv);

    let titleDiv = document.createElement("div");
    titleDiv.classList.add("titleDiv");
    containerDiv.appendChild(titleDiv);
    let titleProject = document.createElement('h3')
    let deleteProjImg = document.createElement('img')
    deleteProjImg.src = delProjPic;
    deleteProjImg.classList.add("deletePic")
    titleProject.textContent = 'Goals'
    titleDiv.appendChild(titleProject);
    titleDiv.appendChild(deleteProjImg);

    titleProject.addEventListener('click', function(){
    changeText(titleProject);
    })
    deleteProjImg.addEventListener('click', function(){
        content.removeChild(containerDiv)
    })

    renderTodos(containerDiv)

    let secondmainDiv = document.createElement("div");
    secondmainDiv.classList.add("secondmainDiv");
    containerDiv.appendChild(secondmainDiv);

    let addPic = document.createElement('img');
    addPic.src = plus;
    addPic.classList.add("addPic");

    let addText = document.createElement('p');
    addText.classList.add("addText");
    addText.textContent = "Add task";
    secondmainDiv.appendChild(addPic);
    secondmainDiv.appendChild(addText);

    addPic.addEventListener("click", function(){
        containerDiv.removeChild(secondmainDiv)
        renderTodos(containerDiv)
        containerDiv.appendChild(secondmainDiv);
    })
    
}


addProject()

function todoIscomplete(){

}



