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
