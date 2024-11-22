document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    from_name: document.getElementById("from_name").value,
    to_name: document.getElementById("to_name").value,
    message: document.getElementById("message").value,
    reply_to: document.getElementById("reply_to").value,
  };

  console.log(formData); // Check form data

  emailjs.sendForm("default_service", "template_yv4s95l", this).then(
    () => {
      alert("Email sent successfully!");
    },
    (err) => {
      console.error("Failed to send email:", err); // Debug error
      alert("Failed to send email. Please try again later.");
    }
  );
});
