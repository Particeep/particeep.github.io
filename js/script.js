$(document).ready(function(){
    $(".search").on("keyup", function () {
        var search = this.value.toLowerCase();
        $(".card").show().filter(function () {
            return $(".title-card", this).text().toLowerCase().indexOf(search) < 0;
        }).hide();        
    });
})