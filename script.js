$("#CONTACT").submit((e) => {
  e.preventDefault();
  $.ajax({
    url: "https://api.web3forms.com/submit",
    data: $("#CONTACT").serialize(),
    method: "post",
    success: function (response) {
      alert("Form submitted successfully");
      window.location.reload();
      //window.location.href="https://google.com"
    },
    error: function (err) {
      window.location.reload();
    },
  });
});



var typed = new Typed(".text",{
    strings:["Frontend Developer", "Java Developer", "Web Developer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});