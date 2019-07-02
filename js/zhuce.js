$('.btn').bind('click',function(){
    if(passwdflag && userflag){
    var userVal=$('input[name=user]').val();
    var passwdVal=$('input[name=passwd]').val();
    
        $.ajax({
            url:'../data/login2.php',
            type:'get',
            dataType:'json',
            data:'act=add&user='+userVal+'&pass='+passwdVal,
            
            success:function(josn){
                
                console.log(josn)
                alert(josn.msg);
            },
            error:function(code){
                alert(code.msg);
            }
        })
    }
})

