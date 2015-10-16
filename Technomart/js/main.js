var btnsCloseForm = document.querySelectorAll(".btn-close-form");
var btnsBuy = document.querySelectorAll(".catalog-item-actions>.buy");
var cartForm = document.querySelector(".cart-form");
var btnsCancel = document.querySelectorAll(".cancel-btn");
var modalForms = document.querySelectorAll(".modal-form");

var writeUsBtn = document.querySelector(".write-us-btn");

if (writeUsBtn) {
	var writeUsForm = document.querySelector(".write-us-form");
	var sendForm = writeUsForm.querySelector("form");
	var yourNameInput = sendForm.querySelector("#your-name");
	var yourEmailInput = sendForm.querySelector("#your-email");
	var emailTextInput = sendForm.querySelector("#e-mail-text");
	var mapA = document.querySelector(".map>a");
	var mapForm = document.querySelector(".map-form");
}

//Open write us
if (writeUsForm) {
	writeUsBtn.addEventListener("click", function(event) {
		event.preventDefault();
		OpenForm(writeUsForm);
		var inputYourName = writeUsForm.querySelector(".your-name");
		inputYourName.focus();
	});
}


//Opening modal form
function OpenForm(form) {
	if (!form.classList.contains("modal-show")) {
		form.classList.remove("modal-hide");
		form.classList.add("modal-show");
	}	
}

//Closing modal form
function CloseForm(form) {
	if (form.classList.contains("write-us-send-error"))
		form.classList.remove("write-us-send-error");
	if (form.classList.contains("modal-show")) {				
		form.classList.remove("modal-show");
		form.classList.add("modal-hide");		
	}	
}


//Click on cross for exit from modal form
for (var i = 0; i < btnsCloseForm.length; i++) {
    btnsCloseForm[i].addEventListener("click", function(event) {
        event.preventDefault();
		CloseForm(event.target.parentElement);	
    });
}

//Click on cancel for modal form
for (var i = 0; i < btnsCancel.length; i++) {
    btnsCancel[i].addEventListener("click", function(event) {
        event.preventDefault();
		CloseForm(event.target.parentElement.parentElement);
		CloseForm(event.target.parentElement.parentElement.parentElement);
    });
}

//Open map
if (mapA) {
	mapA.addEventListener("click", function(event) {
		event.preventDefault();
		OpenForm(mapForm);
	});
}

//Open modal form: "Goods added"
for (var i = 0; i < btnsBuy.length; i++) {
    btnsBuy[i].addEventListener("click", function(event) {
        event.preventDefault();
		OpenForm(cartForm);
    });
}

//Close modal form using 'escape'
window.addEventListener("keydown", function (event) {
	if (event.keyCode == 27) {
		for (var i = 0; i < modalForms.length; i++)
			CloseForm(modalForms[i]);
	}
});

//Check modal form on void
if (writeUsForm) {
	sendForm.addEventListener("submit", function(event) {
		if (!(yourNameInput.value && yourEmailInput.value && emailTextInput.value))
		{
			event.preventDefault();
			sendForm.classList.add("write-us-send-error");
		}
	});
}