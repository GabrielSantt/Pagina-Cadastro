var dados = []

function deleteregistro(id){ //Deleta linha de cadastro
    let _confirm = confirm('Deseja excluir este cadastro?')
    if( _confirm){
        for( let i=0; i<dados.length; i++){
            if(dados [i].ID==id){
                dados.splice(i,1)
            }
        }
        PopulaTabela()
    }
}

function editregistro(id){ //Editar a linha de cadastro
    $('#modalRegistro').modal('show')


    dados.forEach( function(item){
        if(item.ID =id){
            $('#hdID').val(item.ID)
            $('#txtnome').val(item.nome)
            $('#txtendereço').val(item.endereço)
            $('#txtbairro').val(item.bairro)
            $('#txtcidade').val(item.cidade)
            $('#txtemail').val(item.email)
            $('#txttelefone').val(item.telefone)
        }
    })
}


function PopulaTabela(){
    if(Array.isArray (dados)){

        localStorage.setItem('__dados__',JSON.stringify(dados) )

        $('#tbldados tbody').html('') 
        //Insere novos dados
        dados.forEach(function (item) {
            $('#tbldados tbody').append(` <tr>  
            <td> ${item.ID} </td>
            <td> ${item.nome} </td>
            <td> ${item.endereço} </td>
            <td> ${item.bairro} </td>
            <td> ${item.cidade} </td>
            <td> ${item.email} </td>
            <td> ${item.telefone} </td>

            //Botão editar
            <td > <button type='button' class='btn btn-primary' onclick='javascript:editregistro(${item.ID});' > <i class='fa fa-edit'></i>  </button>  </td> 

            //Botão Delete
            <td> <button type='button' class='btn btn-danger' onclick='javascript:deleteregistro(${item.ID});'> <i class='fa fa-trash'></i> </button> </td>

            </tr>`)
        })
    }
}

$(function(){
    dados = JSON.parse(localStorage.getItem("__dados__")) 

       if (dados != null) {
        PopulaTabela();
      } else {dados = []}
        
        //Clicando em salvar executará esta função
        $("#btnsalvar").click(function () {
            let _id= $('#hdID').val()
            let nome = $('#txtnome').val()
            let endereço = $('#txtendereço').val()
            let bairro = $('#txtbairro').val()
            let cidade = $('#txtcidade').val()
            let email = $('#txtemail').val()
            let telefone = $('#txttelefone').val()

            let registro = {}

            registro.nome= nome
            registro.endereço = endereço
            registro.bairro= bairro
            registro.cidade= cidade
            registro.email = email
            registro.telefone = telefone

            if(!_id || _id =='0'){ //Soma o ID de acordo com a QTde de cadastro
            registro.ID= dados.length + 1
            dados.push(registro)
            } else{
                dados.forEach(function(item){
                    if(item.ID == _id){
                        item.nome= nome
                        item.endereço = endereço    
                        item.bairro= bairro
                        item.cidade= cidade
                        item.email = email
                        item.telefone = telefone
                        
                    }
                }
                )
            }

            

             alert('Registro salvo com sucesso');
            $('#modalRegistro').modal('hide');

            //Limpa os campos ao iniciar novo cadastro
            $('#hdID').val('0')
            $('#txtnome').val('')
            $('#txtendereço').val('')
            $('#txtbairro').val('')
            $('#txtcidade').val('')
            $('#txtemail').val('')
            $('#txttelefone').val('')

            
            PopulaTabela()

        })


})