

    // function fMasc(objeto,mascara) {
    //         obj=objeto
    //         masc=mascara
    //         setTimeout("fMascEx()",1)
    //     }

    // function fMascEx() {
    // obj.value=masc(obj.value)
    // }

    function ValidaCPF(){	
        var RegraValida=document.getElementById("evento_cpf").value; 
        var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;	 
        if (cpfValido.test(RegraValida) == true)	{ 
            console.log("CPF Válido");	
            return true;
        } else	{	 
            console.log("CPF Inválido");
            return false;
        }
    }
    //escrever no formato cpf
    function mCPF(cpf){
        cpf=cpf.replace(/\D/g,"");
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2");
        cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
        return cpf;
    }
   // validador funcional de cpf     
   function _cpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;

        add = 0;
        for (i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
            rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
        return false;

        add = 0;
        for (i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
            rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;

        if (rev != parseInt(cpf.charAt(10)))
            return false;
            
    return true;
}

    function validarCPF(el){
    if( !_cpf(el.value) ){
    alert("CPF inválido! " + el.value);
    // apaga o valor
    el.value = "";
    }
    }
    //FIM

    function submitForm(event) {
        //event.preventDefault(); // Impede o envio do formulário padrão
        // Aqui você pode adicionar lógica para enviar os dados do formulário via AJAX
        // Exemplo de exibição do alerta de sucesso
        alert("Cadastro realizado com sucesso!");
        // Recarrega a página
        //window.location.reload('https://www.fastshop.com.br/web/');
      }

   