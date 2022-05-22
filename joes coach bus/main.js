var employeelistholder=document.querySelector(".employee-list");
var interviewlistholder=document.querySelector(".Interviews");
var addemployeemodal=document.querySelector("#employeemodal");
var addinterviewmodal=document.querySelector("#interviewModal");

addemployeemodal.style.display="none";
addinterviewmodal.style.display="none";
function addEmployee(){
    var name= document.querySelector("#name").value;
    var surname= document.querySelector("#surname").value;
    var position = document.querySelector("#position").value;
    var department= document.querySelector("#department").value;
    var salary = document.querySelector("#salary").value;
    var email = document.querySelector("#email").value;
    var newItem = `
    <li>
        <div class="employee-card" id="employee1" >
            <img class="user-img" src="userss.jpg" alt="" width=40%></img>
            <span>
                <div class="employment-details" id="employee1-details">
              <span class="name-format">`+name+`</span>
              <br>
              <span class="name-format>`+surname+`</span>
              <br>
              <span >`+position+`</span>
              <br>
              <span>`+department+`</span>
              <br>
              <span>$`+salary+`</span>
              <br>
              <span>`+email+`</span>
              <br>
</div>

            </span>
</div>
</li>
    `;
employeelistholder.insertAdjacentHTML('beforeend',newItem);
addemployeemodal.style.display="none";

}
function showAddEmpModal(){
    addemployeemodal.style.display="block";

}
function addInterview(){
var departmentinterview=document.querySelector("#int-department").value;
var positioninterview = document.querySelector("#int-position").value;
var newInterview = `
<li>
<div class="list-item">
<h3>`+departmentinterview+`</h3>
<p>`+positioninterview+`</p>
<button class="accept-btn" type="button" name="button">Accept</button>
<button class="Reject-btn" type="button" name="button">Reject</button>
</div>
</li>
`;
interviewlistholder.insertAdjacentHTML('beforeend',newInterview);
addinterviewmodal.style.display="none";
}
function showAddIntModal(){
    addinterviewmodal.style.display="block";
}
