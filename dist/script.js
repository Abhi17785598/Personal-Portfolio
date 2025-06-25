function sendmail() {
    let params = {
        from_name: document.getElementById("name").value,   // Changed 'name' → 'from_name'
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        reply_to: document.getElementById("email").value     // Optional: for reply button in your inbox
    };

    emailjs.send("service_fmh7mon", "template_1t0le4v", params)
    .then(() => {
        alert("Email sent!!");
    });
}
