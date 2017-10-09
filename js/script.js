$(document).ready(function(){
   setBindings(); 
});


function setBindings(){
    $("nav a").click(function(e){
        e.preventDefault();
        var sectionID = e.currentTarget.id + "Section";
        
        $("html body").animate({
            scrollTop: $("#" + sectionID).offset().top
        }, 1000)
    })
};

function setBindings(){
    $("a").click(function(e){
        e.preventDefault();
        var sectionID = e.currentTarget.id + "Section";
        
        $("html body").animate({
            scrollTop: $("#" + sectionID).offset().top
        }, 1000)
    })
};

$('.owl-carousel').owlCarousel({
    loop:false,
    autoHeight: false,
    autoWidth: true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
