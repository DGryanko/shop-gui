const callbackThanks = document.querySelector("#request_received");
const clientName = document.querySelector("#client_name");
const clientEmail = document.querySelector("#client_email");
const callBackForm = document.querySelector(".form_container");


callBackForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let errInForm = false;
  if (!clientName.value.trim()) {
    clientName.classList.add("form_input_err");
    errInForm = true;
  } else {
    clientName.classList.remove("form_input_err");
  }

  if (!clientEmail.value.trim() || !isEmailValid(clientEmail.value)) {
    clientEmail.classList.add("form_input_err");
    errInForm = true;
  } else {
    clientEmail.classList.remove("form_input_err");
  }

  if (errInForm) {
    return;
  }

  let text = {"name":clientName.value, "email":clientEmail.value};

  sendMessage(text);

  clientName.value = "";
  clientEmail.value = "";

  callbackThanks.classList.add("modal_active");
  setTimeout(function () {
    callbackThanks.classList.remove("modal_active");
  }, 2000);
});

function isEmailValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

// отправить в чат телеги:

function sendMessage(text) {
  console.log("Working");

  let message = {
    chat_id: "-410799147",

    text: JSON.stringify(text),
  };

  let botTest =
  "https://api.telegram.org/bot1405552116:AAFvvwLD0PXECjBuRamrSrA0xmbuzNxlbQE/sendMessage";
fetch(botTest, {
  method: "POST",
  body: JSON.stringify(message),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

  //локальная апи
  let api =
    "http://107.181.177.138:8052/shop-server/api/users";
  fetch(api, {
    method: "POST",
    body: text,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
