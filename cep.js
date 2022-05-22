//Buscar CEP
$('#btnbuscar').on('click', function(){
    let numerocep = $('#txtcep').val();
     let url= "https://viacep.com.br/ws/"+numerocep+"/json/";
 
     $.ajax({
         url: url,
         type: 'get',
         dataType:'json',
 
         success:function(viacep){
            $('#txtendereço').val(viacep.logradouro)
            $('#txtbairro').val(viacep.bairro)
            $('#txtcidade').val(viacep.localidade)
            $('#txttelefone').val( viacep.ddd) //Coloca o ddd no campo de Telefone
         }
     })
    
 })

    /* Parâmetro de consulta do viacep

        bairro: 
        cep: 
        complemento: 
        ddd: 
        gia: 
        ibge: 
        localidade: 
        logradouro: 
        siafi: 
        uf: */