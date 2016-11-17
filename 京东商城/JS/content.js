//京东秒杀
setInterval(function (){
	var now=new Date();
	
	var hour=23-now.getHours();
	var minu=59-now.getMinutes();
	var secon=59-now.getSeconds()
	if (hour<10) {
		hour='0'+hour;
	};
	if (minu<10) {
		minu='0'+minu;
	};
	if (secon<10) {
		secon='0'+secon;
	};
	$('.con1_7').html(hour);
	$('.con1_9').html(minu);
	$('.con1_11').html(secon);	
},10)
// 京东秒杀下面的
$('.conulli').hover(function (){
	var ind=$('.conulli').index(this);
	$('.conullitp1 img').eq(ind).css('transform','translateY(-5px)');
},function (){
	var ind=$('.conulli').index(this);
	$('.conullitp1 img').eq(ind).css('transform','translateY(0px)');
})
// 最后24小时1
$('.con3kkrul li').hover(function (){
	$(this).css('opacity','0.7')
},function (){
	$(this).css('opacity','1');
})
// 最后24小时2
$('.con3kkrul2 li').hover(function (){
	$(this).css('opacity','0.7')
},function (){
	$(this).css('opacity','1');
})

$('.con4_1_2 a').hover(function (){
	var fxhh=$('.con4_1_2 a').index(this);
	$('.con4_li_img').eq(fxhh).css('transform','translateX(-5px)')
},function (){
		var fxhh=$('.con4_1_2 a').index(this);
	$('.con4_li_img').eq(fxhh).css('transform','translateX(0px)')
})

$('.con4_2_2_1 a').hover(function (){
	var dfxpimg=$('.con4_2_2_1 a').index(this);
	$('.dfxpimg').eq(dfxpimg).css('transform','translateX(-5px)')
},function (){
	var dfxpimg=$('.con4_2_2_1 a').index(this);
	$('.dfxpimg').eq(dfxpimg).css('transform','translateX(-0px)')
})

$('.con4_3_1ul2 li').hover(function (){
	var sho=$('.con4_3_1ul2 li').index(this);
	$('.con4_3_1ul3 li').eq(sho).addClass('show').siblings().removeClass('show');
	// $('#ht').css('transform','translateX(78*'+sho+'px)')
})
function m(x,px){
	$('.con4_3_1ul2 li:nth-child('+x+')').hover(function (){
		$('#ht').css('transform','translateX('+px+'px)');
	})
}
m(1,0);
m(2,78);
m(3,156);
m(4,234);
m(5,312);

$('.con5rli').hover(function (){
	var con5r=$('.con5rli').index(this);
	$('.con5rlidw2').eq(con5r).css('transform','translateX(10px)')
},function (){
	var con5r=$('.con5rli').index(this);
	$('.con5rlidw2').eq(con5r).css('transform','translateX(0px)')
})

$('.con6k img').hover(function (){
	$(this).css('opacity','0.7');
},function (){
	$(this).css('opacity','1');
})
// 浏览器右侧定位
$('.browser_r2 li').hover(function (){
	var bro=$('.browser_r2 li').index(this);
	$('.browser_r2 li em').eq(bro).css({'transform':'translateX(-90px)','background':'#C81623'});
	$('.browser_r2 li').eq(bro).css('background','#C81623');
},function (){
	var bro=$('.browser_r2 li').index(this);
	$('.browser_r2 li em').eq(bro).css({'transform':'translateX(0px)','background':'#7A6E6E'});
	$('.browser_r2 li').eq(bro).css('background','#7A6E6E');
})

$('.browser_r2li7').click(function (){
	$('body').animate({
		scrollTop:'0'
	})
})