$(document).ready(function(){

    // var txt = $("#para1").text();
    // alert(txt);

    // $("#para1").html("<b>Hello</b> World!");

    $("#btn1").click(function(){
        
        // var txt = $("#input1").val();
        // alert(txt);

        var menu = $("#input1").val();
        alert(menu);

    });

    $("#img1").click(function(){

        $("#logo").attr("src", "images/image1.jpg");
        $("#title").text("적막한 사막");
        $("p").text("적막한 사막에는 바람이 불고 곧 태풍이 올 낌새가 보인다.");
       
    });

    $("#img2").click(function(){

        $("#logo").attr("src", "images/image2.jpg");
        $("#title").text("아름다운 꽃");
        $("p").text("하얀 꽃이 이쁘다!");
       
    });

    $("#img3").click(function(){

        $("#logo").attr("src", "images/image3.jpg");
        $("h1").text("신기한 해파리");
        $("p").text("해파리가 바다 속을 헤엄친다.");
       
    });

    $("#img4").click(function(){

        $("#logo").attr("src", "images/image4.jpg");
        $("h1").text("웃는 코알라");
        $("p").text("귀여운 코알라가 웃고 있다.");
       
    });

    $("#img5").click(function(){

        $("#logo").attr("src", "images/image5.jpg");
        $("h1").text("등 대");
        $("p").text("저녁노을 빛이 비추는 등대의 모습.");
       
    });




});
