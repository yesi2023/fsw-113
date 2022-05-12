// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
//class Bug {
// constructor() {
// This constructor should be set up to accept the four user-input values from index.html:
// reportedBy, system, subSystem, and bugDesc
//}
//addBug() {
// Create a div element that displays the bug information input by the user within the "listWrapper" DOM element.
// It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below).
//}
//deleteBug() {
// Create code that will remove the appropriate bug from the DOM.
// You may need to Google how to remove an element from the DOM.
//}
//resolveBug() {
// Create code that changes the appropriate bug report to a darker color
//}
//}
//function reportBug() {
// Create code that instantiates the Bug class with the data input by the
// user in the index.html form. Then call the method to add the new bug report.
//}

//*MY CODE


const selectSys = document.querySelector("#system");
const subSys = document.querySelector("#subSystem");
const reported = document.querySelector("#reportedBy");
const bugsDesc = document.querySelector("#bugDesc");
const listWrapper = document.querySelector("#listWrapper");

class Bug {
  static counter = 0;

  constructor(reported, system, subSystem, bugsDesc) {
    this.reported = reported;
    this.system = system;
    this.subSystem = subSystem;
    this.bugsDesc = bugsDesc;
    this.bugID = ++this.constructor.counter;
  }

  addBug() {
    let myDiv = document.createElement("div");
    let review = document.createElement("p");
    review.textContent = "Reported by: " + this.reported;
    let method = document.createElement("p");
    method.textContent = "System: " + this.system + " / " + this.subSystem;
    let describe = document.createElement("p");
    describe.textContent = this.bugsDesc;
    myDiv.setAttribute("class", "divStyle");

    let flexCtr = document.createElement("div");
    let checkMark = document.createElement("div");
    checkMark.innerHTML += "&#10004;";
    checkMark.setAttribute("class", "checkbox");
    checkMark.addEventListener("click", this.resolveBug);

    let delBtn = document.createElement("div");
    delBtn.innerHTML += "&#10006;";
    delBtn.setAttribute("class", "delBtn");
    delBtn.addEventListener("click", this.deleteBug);

    flexCtr.append(checkMark, delBtn);
    flexCtr.setAttribute("class", "flexContainer");

    myDiv.append(review, method, describe, flexCtr);
    listWrapper.appendChild(myDiv);
  }

  deleteBug() {
    listWrapper.removeChild(this.parentNode.parentNode);
  }

  resolveBug() {
    this.parentNode.parentNode.setAttribute("class", "resolveBug");
  }
}

function reportBug(e) {
  const select = selectSys.options[selectSys.selectedIndex].text;
  const sub = subSys.options[subSys.selectedIndex].text;
  const bug = new Bug(reported.value, select, sub, bugsDesc.value);
  bug.addBug();
}
