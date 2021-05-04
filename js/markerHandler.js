AFRAME.registerComponent("marker-handler",{
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("Marker Found");
            this.handleMarkerFound();
        });
        this.el.addEventListener("markerLost",()=>{
            console.log("Marker Lost");
            this.handleMarkerLost();
        });
    },
    handleMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    },
    handleMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flex";

        var on = document.getElementById("onb");
        var os = document.getElementById("osb");

        on.addEventListener("click",()=>{
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Bike ordered",
                text: "Your bike will be delivered in 2 weeks."
            })
        });

        os.addEventListener("click",()=>{
        swal({
            icon: "warning",
            title: "Order Summary",
            text: "Work in progress"
        })
    })
    }
})