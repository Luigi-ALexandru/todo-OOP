import { format } from 'date-fns';

function popUp(content) {
    //=======PopUp===========
    const popUp = document.createElement("div");
    popUp.classList.add("popUp");
    //========Form========
    const form = document.createElement("form");
    //=======Subject======
    const divSubject = document.createElement("div");
    divSubject.classList.add("divSubject");
    const inputSubject = document.createElement("input");
    inputSubject.setAttribute("type", "text");
    inputSubject.setAttribute("class", "subjectInput");
    inputSubject.setAttribute("placeholder", "Enter subject name");
    divSubject.appendChild(inputSubject);
    form.appendChild(divSubject);
    //======Description===========
    const divDescription = document.createElement("div");
    divDescription.classList.add("divDescription");
    const inputDescription = document.createElement("textarea");
    inputDescription.setAttribute("type", "text");
    inputDescription.setAttribute("class", "descriptionArea");
    inputDescription.setAttribute("placeholder", "Enter description/text");
    divDescription.appendChild(inputDescription);
    form.appendChild(divDescription);
    //======Date========
    const divDate = document.createElement("div");
    divDate.classList.add("date");
    const date = format(new Date(), "MMMM do yyyy");
    divDate.textContent = date;
    form.appendChild(divDate);
    //=====Checkmarks========
    //legend
    const legend = document.createElement("legend");
    legend.textContent = "Priority:";
    form.appendChild(legend);
    //high prio
    const div = document.createElement("div");
    div.classList.add("divHigh");
    const inputPriority = document.createElement("input");
    inputPriority.setAttribute("type", "checkbox");
    inputPriority.setAttribute("class", "high");
    inputPriority.setAttribute("name", "high");
    div.appendChild(inputPriority);
    const labelPriority1 = document.createElement("label");
    labelPriority1.setAttribute("for", "high");
    labelPriority1.textContent = "High";
    div.appendChild(labelPriority1);
    form.appendChild(div);
    //medium prio
    const div2 = document.createElement("div");
    div2.classList.add("divMedium");
    const inputPriority2 = document.createElement("input");
    inputPriority2.setAttribute("type", "checkbox");
    inputPriority2.setAttribute("class", "medium");
    inputPriority2.setAttribute("name", "medium");
    div2.appendChild(inputPriority2);
    const labelPriority2 = document.createElement("label");
    labelPriority2.setAttribute("for", "medium");
    labelPriority2.textContent = "Medium";
    div2.appendChild(labelPriority2);
    form.appendChild(div2);
    //low prio
    const div3 = document.createElement("div");
    div3.classList.add("divLow");
    const inputPriority3 = document.createElement("input");
    inputPriority3.setAttribute("type", "checkbox");
    inputPriority3.setAttribute("class", "low");
    inputPriority3.setAttribute("name", "low");
    div3.appendChild(inputPriority3);
    const labelPriority3 = document.createElement("label");
    labelPriority3.setAttribute("for", "low");
    labelPriority3.textContent = "Low";
    div3.appendChild(labelPriority3);
    form.appendChild(div3);
    //============Buttons=========
    const div4 = document.createElement("div");
    div4.classList.add("divButton");
    const create = document.createElement("button");
    create.classList.add("createButton");
    create.textContent = "Create";
    div4.appendChild(create);
    form.appendChild(div4);
    const div5 = document.createElement("div");
    div5.classList.add("divButton");
    const close = document.createElement("button");
    close.classList.add("closeButton");
    close.textContent = "Close";
    div5.appendChild(close);
    form.appendChild(div5);
    //append from to popup
    popUp.appendChild(form);
    //append popup to content
    content.appendChild(popUp);

    // Return all the necessary elements to be used in the createTask function
  return {
    inputSubject,
    inputDescription,
    inputPriority,
    inputPriority2,
    inputPriority3,
    create,
    divDate,
  };
};

  export {
    popUp
  }