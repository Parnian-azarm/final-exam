let toggle = document.getElementsByClassName('toggle')
toggle.addEventListener('change', function(event) {
    (event.target.checked) ? document.body.setAttribute('data-theme', 'dark') :
    document.body.removeAttribute('daa-theme')
})

submit = [{
    email: youremail@fake.com,
    name: "your name",
    service: "Some service, facial transmogrification",
    message: "Your message about the service, it doesn't tranmogrify my face"
   }]