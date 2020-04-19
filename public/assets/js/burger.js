$(function(){
    $(".devour_now").on("click",function(event){
        const id =$(this).data("id")
        console.log(id)
        $.ajax("/api/burger/"+id,{type:"PUT"}).then(function(){
            location.reload();
        })
    })
    $(".create-form").on("submit", function(event){
        event.preventDefault();
        
        const newBurger = {
            name: $("#burger").val().trim()
        }
        
        $.ajax("/api/burger",{
            type:"POST",
            data:newBurger
        }).then(function(){
            location.reload();
        })
    })
})