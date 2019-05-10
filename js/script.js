// json
var datajson={
    "all": [{
      "img":"1.jpg",
      "text":"app1",
      "p":"app1 para"
    },
    {
      "img":"2.jpg",
      "text":"app2",
      "p":"app2 para"
    },
    {
      "img":"3.jpg",
      "text":"app3",
      "p":"app3 para"
    }
    ,
    {
      "img":"4.jpg",
      "text":"app4",
      "p":"app4 para"
    }
    ,
    {
      "img":"5.jpg",
      "text":"app5",
      "p":"app5 para"
    }
    ,
    {
      "img":"6.jpg",
      "text":"app6",
      "p":"app6 para"
    }
    ,
    {
      "img":"7.jpg",
      "text":"app7",
      "p":"app7 para"
    }
    
    ],
    "card": [{
        "img":"1.jpg",
        "text":"card1",
        "p":"card1 para"
      },
      {
        "img":"2.jpg",
        "text":"card2",
        "p":"card2 para"
      },
      {
        "img":"3.jpg",
        "text":"card3",
        "p":"card3 para"
      }
      ,
      {
        "img":"4.jpg",
        "text":"card4",
        "p":"card4 para"
      }
      ,
      {
        "img":"5.jpg",
        "text":"card5",
        "p":"card5 para"
      }
      ,
      {
        "img":"6.jpg",
        "text":"card6",
        "p":"card6 para"
      }
      ,
      {
        "img":"7.jpg",
        "text":"card7",
        "p":"card7 para"
      }
      
      ],
    "app": [
    {
      "img":"2.jpg",
      "text":"app2",
      "p":"app2 para"
    },
   
    {
      "img":"4.jpg",
      "text":"app4",
      "p":"app4 para"
    }
    ,
    {
      "img":"5.jpg",
      "text":"app5",
      "p":"app5 para"
    }
    ,
    {
      "img":"6.jpg",
      "text":"app6",
      "p":"app6 para"
    }
    ,
    {
      "img":"7.jpg",
      "text":"app7",
      "p":"app7 para"
    }
    
    ],"web": [
    {
      "img":"2.jpg",
      "text":"web2",
      "p":"web2 para"
    },
   
    {
      "img":"3.jpg",
      "text":"web4",
      "p":"web4 para"
    }
    ,
    {
      "img":"5.jpg",
      "text":"web5",
      "p":"web5 para"
    }
    ,
    {
      "img":"6.jpg",
      "text":"web6",
      "p":"web6 para"
    }
   
    
    ]
  };

  $('.carouse6').carousel();
  $('.carousel5').carousel();

new WOW().init();


   
    $('.count').each(function () {
      $(this).prop(0,'Counter').animate({
          Counter: $(this).text()
      },
       {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });

  
    
    
  



// $(window).resize(function(){

//     if ($(window).width() <= 768) {  

//            $("nav").addClass(".bg-dark").removeClass(".fixed-top")

//     }   
//     else if($(window).width() >= 768) {  

//         $("nav").addClass(".fixed-top").removeClass(".bg-dark")

//  }   

// });

$(document).ready(function(){
    

    
    $("#card_icon1").mouseenter(function(){
    

      
        
        $(".icon_about1").addClass("icon_about_hover");
       });

       $("#card_icon1").mouseleave(function(){  
           
        $(".icon_about1").removeClass("icon_about_hover");
       });





    
    $("#card_icon2").mouseenter(function(){
    

      
        
        $(".icon_about2").addClass("icon_about_hover");
       });

       $("#card_icon2").mouseleave(function(){  
           
        $(".icon_about2").removeClass("icon_about_hover");
       });



    
       $("#card_icon3").mouseenter(function(){
    

      
        
        $(".icon_about3").addClass("icon_about_hover");
       });

       $("#card_icon3").mouseleave(function(){  
           
        $(".icon_about3").removeClass("icon_about_hover");
       });

  });

  



$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height()+100);
      
    });
  });

console.log(datajson);
//   profilo

$(".profilio_added").empty();
for(var j=0;j<datajson["all"].length;j++){ 
    
$(".profilio_added").append(`<div class="col-md-4">
<div class="card card-img-profilio">
<div class=" protofilo_icon_group">
  <i class="fas fa-eye protofilo_icon"></i>
  <i class="fa fa-laptop protofilo_icon"></i>


</div>
<div style="background:black">
<img src="img/${datajson["all"][j].img}" alt="" class="card-img-top img_container_style  "> 
</div>
<div class="card-body text-center">
  <h5 class="card-title">${datajson["all"][j].text}</h5>
  <p>${datajson["all"][1].p}</p>

</div>
</div>
</div> `);
};
  


$("#all").hover(function(){
    $(".profilio_added").empty();
        for(var j=0;j<datajson["all"].length;j++){ 
            
    $(".profilio_added").append(`<div class="col-md-4">
    <div class="card card-img-profilio">
      <div class=" protofilo_icon_group">
          <i class="fas fa-eye protofilo_icon"></i>
          <i class="fa fa-laptop protofilo_icon"></i>


      </div>
      <div style="background:black">
      <img src="img/${datajson["all"][j].img}" alt="" class="card-img-top img_container_style  "> 
       </div>
        <div class="card-body text-center">
          <h5 class="card-title">${datajson["all"][j].text}</h5>
          <p>${datajson["all"][1].p}</p>

        </div>
      </div>
</div> `);
    }
})





$("#app").hover(function(){
    $(".profilio_added").empty();
     
    for(var j=0;j<datajson["app"].length;j++){ 
        
$(".profilio_added").append(`<div class="col-md-4">
<div class="card card-img-profilio">
  <div class=" protofilo_icon_group">
      <i class="fa fa-laptop protofilo_icon"></i>
      <i class="fas fa-eye protofilo_icon"></i>


  </div>
  <div style="background:black">
  <img src="img/${datajson["app"][j].img}" alt="" class="card-img-top img_container_style  "> 
   </div> 
    <div class="card-body text-center">
      <h5 class="card-title">${datajson["app"][j].text}</h5>
      <p>${datajson["app"][1].p}</p>

    </div>
  </div>
</div> `);
}
})

$("#card").hover(function(){
    $(".profilio_added").empty();
        for(var j=0;j<datajson["card"].length;j++){ 
            
    $(".profilio_added").append(`<div class="col-md-4">
    <div class="card card-img-profilio">
      <div class=" protofilo_icon_group">
          <i class="fa fa-laptop protofilo_icon"></i>
          <i class="fas fa-eye protofilo_icon"></i>


      </div>
      <div style="background:black">
      <img src="img/${datajson["card"][j].img}" alt="" class="card-img-top img_container_style  "> 
       </div>
        <div class="card-body text-center">
          <h5 class="card-title">${datajson["card"][j].text}</h5>
          <p>${datajson["card"][1].p}</p>

        </div>
      </div>
</div> `);
    }
})

$("#web").hover(function(){
    $(".profilio_added").empty();
        for(var j=0;j<datajson["web"].length;j++){ 
            
    $(".profilio_added").append(`<div class="col-md-4">
    <div class="card card-img-profilio">
      <div class=" protofilo_icon_group">
          <i class="fa fa-laptop protofilo_icon"></i>
          <i class="fa fa-laptop protofilo_icon"></i>


      </div>
      <div style="background:black">
      <img src="img/${datajson["web"][j].img}" alt="" class="card-img-top img_container_style  "> 
       </div>
        <div class="card-body text-center">
          <h5 class="card-title">${datajson["web"][j].text}</h5>
          <p>${datajson["web"][1].p}</p>

        </div>
      </div>
</div> `);
    }
})