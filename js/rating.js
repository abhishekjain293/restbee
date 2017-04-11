$(document).ready(function(){var count=0;$(".fa").hover(function(){var rate=$(this).closest(".row").attr("id");rate="#"+rate;console.log(rate);var id=$(this).attr("id");console.log(id);var points=parseInt(id.substr(id.length-1));count=points;console.log(points);if(points==1)
$(rate).find(".rating").html("HAD A POOR EXPERIENCE!");else if(points==2)
$(rate).find(".rating").html("COULD HAVE BEEN BETTER!");else if(points==3)
$(rate).find(".rating").html("FAIRLY USUAL!");else if(points==4)
$(rate).find(".rating").html("KEEP IMPROVING. IMPRESSIVE WORK!");else if(points==5)
$(rate).find(".rating").html("LOVED IT. SIMPLY STUNNING!");for(var i=1;i<=points;i++)
{var id1="#fa"+i;$(rate).find(id1).removeClass("fa-circle-o").addClass("fa-circle");}
for(var i=points+1;i<=5;i++)
{var id1="#fa"+i;$(rate).find(id1).removeClass("fa-circle").addClass("fa-circle-o");}
$(rate).find("input").val(points);console.log($(rate).find("input").val());});$(".fa").click(function(){var rate=$(this).closest(".row").attr("id");rate="#"+rate;console.log(rate);var id=$(this).attr("id");console.log(id);var points=parseInt(id.substr(id.length-1));count=points;console.log(points);$.ajax({url:"sendrating.php",data:'points='+points,type:"POST",success:function(data){$("#display_thankyou").html(data);},});});});