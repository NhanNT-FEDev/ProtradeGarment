<script>
    var RememPoin = $(".left-col").offset(); $(document).on("scroll", function () { var o = $(document).scrollTop(), t = $(".left-col"); 
	o > RememPoin.top ? (t.css("position", "fixed"), t.css("top", "50px")) : o < RememPoin.top && t.css("position", "relative") }), 
	$(".scroll-to-top-navi").on("click", function () { $("html, body").animate({ scrollTop: 0 }, 500) }), $(".left-col a").on("click", this, function () { var o = $(this).attr("href"); $(".left-col-active").removeClass("left-col-active"), $(this).addClass("left-col-active"); 
	var t = $(o).position().top; $("html, body").animate({ scrollTop: t - 60 }, 500) }), $(window).scroll(function () { var o = $(window).scrollTop(); $("#glance, #vision,#mission,#history,#intro,#core-value").each(function () { var t = $(this).position().top; if (o + 70 > t) { $(".left-col-active").removeClass("left-col-active"); var i = $(this).attr("id"); $("[href='#" + i + "']").addClass("left-col-active") } }) });
</script>