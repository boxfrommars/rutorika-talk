var contactController = (function(){
  $('.contact-form')

    .validate('email', ['email', 'required'])
    .validate('name', ['required'])

    .on('submit', function () {
      Reqres.send('/', $('.contact-form').formValues());
    });

})();