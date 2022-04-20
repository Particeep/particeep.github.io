$(document).ready(function () {
    $(".search").on("keyup", function () {
        var search = this.value.toLowerCase();
        $(".card").show().filter(function () {
            return $(".title-card", this).not('.hide-card').text().toLowerCase().indexOf(search) < 0;
        }).hide();
    });

    // Modify search/filter bar when it turns becomes sticky
    const stickyElm = document.querySelector('.config-container')
    const observer = new IntersectionObserver(
        ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
        { threshold: [1] }
    );
    observer.observe(stickyElm)

    $("#assur-indiv").change(function() {
        if($("#assur-indiv").is(":checked")){
            $('[data-type="indiv"]').removeClass('hide-card')
            $('#divider-indiv').show()
        } else {
            $('[data-type="indiv"]').addClass('hide-card')
            $('#divider-indiv').hide()
        }
    });
    $("#assur-coll").change(function() {
        if($("#assur-coll").is(":checked")){
            $('[data-type="coll"]').removeClass('hide-card')
            $('#divider-coll').show()
        } else {
            $('[data-type="coll"]').addClass('hide-card')
            $('#divider-coll').hide()
        }
    });
    $("#assur-bien").change(function() {
        if($("#assur-bien").is(":checked")){
            $('[data-type="bien"]').removeClass('hide-card')
            $('#divider-bien').show()
        } else {
            $('[data-type="bien"]').addClass('hide-card')
            $('#divider-bien').hide()
        }
    });
    $("#assur-pro").change(function() {
        if($("#assur-pro").is(":checked")){
            $('[data-type="pro"]').removeClass('hide-card')
            $('#divider-pro').show()
        } else {
            $('[data-type="pro"]').addClass('hide-card')
            $('#divider-pro').hide()
        }
    });

})