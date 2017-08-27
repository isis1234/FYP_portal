$(function() {
	show_panel();

	$("#auto").click(function(){
		// console.log("click")
		show_panel()
	})
});

function show_panel(){
	console.log($("#auto").find('.active'))
}