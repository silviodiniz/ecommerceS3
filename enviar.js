<<<<<<< HEAD
document.getElementById('form').addEventListener('submit', function () {
    var nome = this.querySelector('input[name=nome]'), nome = nome.value;
    
    /*var email = this.querySelector('input[name=email]'), email = email.value;*/
    /*var texto = 'Olá destinatário, \nMeu nome é '+ nome +' e meu email é '+ email;
    this.querySelector('input[name=Body]').setAttribute('value', texto);
});*/
    var texto = 'Olá destinatário, \nMeu nome é '+ nome;
     
    this.querySelector('input[name=Body]').setAttribute('value', texto);
=======
document.getElementById('form').addEventListener('submit', function () {
    var nome = this.querySelector('input[name=nome]'), nome = nome.value;
    
    /*var email = this.querySelector('input[name=email]'), email = email.value;*/
    /*var texto = 'Olá destinatário, \nMeu nome é '+ nome +' e meu email é '+ email;
    this.querySelector('input[name=Body]').setAttribute('value', texto);
});*/
    var texto = 'Olá destinatário, \nMeu nome é '+ nome;
     
    this.querySelector('input[name=Body]').setAttribute('value', texto);
>>>>>>> 59f7530a47230756c9e584f1369ab35b68e9ab1e
});