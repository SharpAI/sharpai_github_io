$(function(){

    $(".play").hide();
    $(".background").hide();

    //跳转到帮助中心
    $("#Help_center").click(function(){
        location.href = "help.html";
    })
    /*跳转到首页 */
    $("#Home_page").click(function(){
        location.href = "sharpai-index.html";
    })
    
    $(".text_check").focus(function(){
        $(".prompt").html("")
        $(".text_check").css("border","1px solid rgb(204, 204, 204)")
    });//获得焦点
    $(".name_check").focus(function(){
        $(".prompt").html("")
    });//获得焦点
    $(".email_check").focus(function(){
        $(".prompt").html("")
    });//获得焦点

    $(".text_check").blur(function(){
        var text = $(".text_check").val()
        if(text == "" || text == "undefined"){
            $(".prompt").html("问题内容不能为空！").css({"color":"red"});
            $(".text_check").css("border","1px solid red")
        }else if(text.length < 10){
            $(".prompt").html("问题内容不能少于10个文字").css({"color":"red"});
            $(".text_check").css("border","1px solid red")
        }else{
            $(".prompt").html("")
            $(".text_check").css("border","1px solid rgb(204, 204, 204)")
            textfloat = true
        }
    }); //失去焦点

    //单击确认发送
    $(".swcbj_but").click(function(){
        var text = $(".text_check").val()
        var email = $(".email_check").val()

        if(text == "" || text == "undefined"){
            $(".prompt").html("问题内容不能为空！").css({"color":"red"});
            $(".text_check").css("border","1px solid red")
            return
        }else if(text.length < 10){
            $(".prompt").html("问题内容不能少于10个文字").css({"color":"red"});
            $(".text_check").css("border","1px solid red")
            return
        }else{
            $(".prompt").html("")
            $(".text_check").css("border","1px solid rgb(204, 204, 204)")
        }
        //验证邮箱
        emailp(email)
        if(emailp(email)){
            through()
        }

        
    })

    $(".btn-info").click(function(){
        $(".play").hide();
        $(".background").hide();
    })

    //验证邮箱
    function emailp(email){
        var isEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if(email == ""){
            $(".prompt").html("您输入的邮箱空").css({"color":"red"});
            return false
        }else if(!isEmail.test(email)){
            $(".prompt").html("您输入的邮箱格式不正确").css({"color":"red"});
            return false
        }else{
            $(".prompt").html("")
            return true
        }
    }

    //验证通过以后
    function through(){
        mailsome1()
        $(".play").show();
        $(".background").show();
    }
    //发送邮件
    function mailsome1(){
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 955dd737a985fd6c3476d75823f30c279302cfd8
        var email_check = $(".email_check").val();
        var text_check = $(".text_check").val();
        var name_check = $(".name_check").val();
        $.post("http://127.0.0.1:8888/email",{
          email:email_check,
          text:text_check,
          name:name_check
        },function(data){
            console.log("data=="+data);
<<<<<<< HEAD
=======
=======
        var eamil = $(".email_check").val()
        $.post("http://127.0.0.1:8090/email",{
          Emailname:eamil
        },function(data,status){
          alert("Data: " + data + "\nStatus: " + status);
>>>>>>> a90b5fdde24e3431c0bd5e6ca0688cdc48c4274a
>>>>>>> 955dd737a985fd6c3476d75823f30c279302cfd8
        },JSON);
    }
   
})