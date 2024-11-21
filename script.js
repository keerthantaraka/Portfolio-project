const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.innerText = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_yv4s95l";

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.innerText = "Send Email";
      alert("Message sent successfully!");
    })
    .catch((err) => {
      btn.innerText = "Send Email";
      alert("Failed to send message. Please try again.");
    });
});
