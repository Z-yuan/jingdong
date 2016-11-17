// <!-- 第一行~送至北京。。。 -->
$('.hd1,.select,.fg').hover(function(){
	$('.hd1,.select').css({border:'1px solid #DDDDDD',background:'#fff'});
	$('.fg').show();
	$('.select').show();
	if ($('.list a[id]').length==0) {
		$('.list a').eq(0).attr('id','k');
	};
},function(){
	$('.hd1,.select').css({border:'1px solid #F1F1F1',background:'#F1F1F1'});
	$('.select').hide();
	$('.fg').hide();
})
$('.list a').click(function(){
	$(this).attr('id','k');
	$(this).parent().siblings().children().attr('id','')
	$('.cs').html($(this).html());
	$('.fg').width($('.hd1').width()+20);
	$('.select').hide();
})
$('.hd8').hover(function(){
	$('.hd8').css({border:'1px solid #DDDDDD',background:'#fff'});
	$('.hd8bk').show();
	$('.hd8b').show();
},function(){
	$('.hd8').css({border:'1px solid #F1F1F1',background:'#F1F1F1'});
	$('.hd8b').hide();
	$('.hd8bk').hide();
})
$('.hd5').hover(function(){
	$('.hd5').css({border:'1px solid #DDDDDD',background:'#fff'});
	$('.hd5_1_2').show();
	$('.hd5k').show();
	$('.hd5b').show();
},function(){
	$('.hd5').css({border:'1px solid #F1F1F1',background:'#F1F1F1'});
	$('.hd5_1_2').hide();
	$('.hd5k').hide();
	$('.hd5b').hide();
})
$('.hd4').hover(function(){
	$('.hd4').css({border:'1px solid #DDDDDD',background:'#fff'});
	$('.hd4_2').show();
	$('.hd4k').show();
},function(){
	$('.hd4').css({border:'1px solid #F1F1F1',background:'#F1F1F1'});
	$('.hd4_2').hide();
	$('.hd4k').hide();
})
$('.hd3').hover(function(){
	$('.hd3').css({border:'1px solid #DDDDDD',background:'#fff'});
	$('.hd3_1').show();
	$('.hd3k').show();
},function(){
	$('.hd3').css({border:'1px solid #F1F1F1',background:'#F1F1F1'});
	$('.hd3_1').hide();
	$('.hd3k').hide();
})
$('.hd2').hover(function(){
	$('.hd2').css({border:'1px solid #DDDDDD',background:'#fff'});
	$('.hd2_1').show();
	$('.hd2k').show();
},function(){
	$('.hd2').css({border:'1px solid #F1F1F1',background:'#F1F1F1'});
	$('.hd2_1').hide();
	$('.hd2k').hide();
})
// <!-- 第二行~京东logo -->
$('.hea1_3').hover(function(){
	$('.hea1_3_3').show();
	$('.hea1_3_4').show();
},function(){
	$('.hea1_3_3').hide();
	$('.hea1_3_4').hide();
})

// <!-- 第四行~家用电器、大图滚动。。。 -->
// <!-- tab切换 -->

$('.hea3_1_1 li,.hea3_1li').hover(function(){
	var i=$(this).index();
	$('.hea3_1li').eq(i).show();
	$('.hea3_4').show();
	$('.hea3_1_1 li').eq(i).css('background','#F7F7F7');
	$('.hea3_1_1 li').eq(i).children().children('a').css('color','#B61D1D');
	$('.hea3_1_1 li').eq(i).children('div').show();

	if ($('.hea3_1li').eq(i).height()<465) {
		$('.hea3_1li').eq(i).height(465);
	};
},function (){
	var i=$(this).index();
	$('.hea3_1li').eq(i).hide();
	$('.hea3_4').hide();
	$('.hea3_1_1 li').eq(i).css('background','#C81623');
	$('.hea3_1_1 li').eq(i).children().children('a').css('color','#F7F7F7');
	$('.hea3_1_1 li').eq(i).children('div').hide();
})
//tab切换改变字体
$('.hea3_1_1 li em a').hover(function (){
	$(this).css('color','#444')
},function (){
	$(this).css('color','#B61D1D')
})
// console.log($('.hea3_1li').height());

// console.log($('.hea3_1li').css('height'))

// $('.hea3_1li').hover(function(){
// 	var i=$('.hea3_1li').index(this);
// 	$('.hea3_1li').eq(i).show();
// },function(){
// 	var i=$('.hea3_1li').index(this);
// 	$('.hea3_1li').eq(i).hide();
// })

$('.hea3_4_1_1 li').hover(function(){
	$(this).css('background','#C81623');
	$(this).children('span').css('background','#B1191A')

},function(){
	$(this).css('background','#7C7171');
	$(this).children('span').css('background','#5C5251')
})

$('.hea3_4_1_2dt a,.hea3_4_1_2dd a').hover(function(){
	var xx=$('.hea3_4_1_2dt a').index(this);
	var xxx=$('.hea3_4_1_2dd a').index(this);
	$('.hea3_4_1_2dt a').eq(xx).css('color','#C61623');
	$('.hea3_4_1_2dd a').eq(xxx).css('color','#C61623');
},function(){
	var xx=$('.hea3_4_1_2dt a').index(this);
	var xxx=$('.hea3_4_1_2dd a').index(this);
	$('.hea3_4_1_2dt a').eq(xx).css('color','#666');
	$('.hea3_4_1_2dd a').eq(xxx).css('color','#666666');
})
// 某些字体变红
$('.hea3_4_1_2dd a:contains("3免1")').css({color:'#CC1623',fontWeight:'bold'})
	


// <!-- 大图滚动 -->
$(function(){
	var a=0,b=0,x=0,time1=null,time2=null;
	function moveauto(){
		clearInterval(time1);
		time1=setInterval(function (){
			a++;
			if (a>=$('.inner img').length) {
				a=0;
			};
			b++;
			if (b>=$('.xb li').length) {
				b=0;
			};
			move();
		},5000)
	}
	moveauto();
	function move(){
		$('.inner img').eq(a).fadeIn(function(){
			x=0;
		}).siblings().fadeOut();
		$('.xb li').eq(b).css('background','#C81623').siblings().css('background','rgba(0,0,0,0.5)')
	}
	$('.l').click(function(){
		clearInterval(time1);
		if (x==0) {
			x=1;
			a--;
			if (a<0) {
				a=$('.inner img').length-1;
			};
			b--;
			if (b<0) {
				b=$('.xb li').length-1;
			};
			move();
			moveauto();
		};
	})
	$('.r').click(function(){
		clearInterval(time1);
		if (x==0) {
			x=1;
			a++;
			if (a>=$('.inner img').length) {
				a=0
			};
			b++;
			if (b>=$('.xb li').length) {
				b=0;
			};
			move();
			moveauto();
		};
	})
	$('.xb li').mouseover(function(){
		clearInterval(time1);
		clearTimeout(time2);
		var c=$('.xb li').index(this);
		time2=setTimeout(function(){
			a=c;
			b=c;
			move();
			moveauto();
		},300)
	})
	
	$('.hea3_2').hover(function(){
	var time3=setTimeout(function (){
		$('.l').fadeIn();
		$('.r').fadeIn();
	},300)
	
	},function(){
	var time4=setTimeout(function (){
		$('.l').fadeOut();
		$('.r').fadeOut();
	},300)
	
	})
})

// <!-- 京东快报 -->tab切换
$('.maxtab li').hover(function (){
	var bj=$('.maxtab li').index(this);
	// $(this).css({borderTop:'2px solid green',borderBottom:'1px solid #fff'})
	$(this).addClass('show2').siblings().removeClass('show2');
	$('.maxcon li').eq(bj).show().siblings().hide();
},function (){
	// $(this).css({borderTop:'2px solid #fff',borderBottom:'1px solid #E5E5E3'})
})
var yx=0;
//删除
$('.shanchu').click(function (){
	yx=1;
	$('.tab').css('transform','translateY(0px)')
})
// 话费tab
$('.hfcon1 div').hover(function (){
	var bj=$('.hfcon1 div').index(this);
	$(this).addClass('show1').siblings().removeClass('show1');
	$('.hfcon2 div').eq(bj).show().siblings().hide();
})
//机票tab
$('.jpcon1 span').hover(function (){
	var bj=$('.jpcon1 span').index(this);
	$(this).addClass('show3').siblings().removeClass('show3');
	$('.jpcon2>div').eq(bj).show().siblings().hide();
})
//电影票tab
$('.dypcon1 span').hover(function (){
	var bj=$('.dypcon1 span').index(this);
	$(this).addClass('show5').siblings().removeClass('show5');
	$('.dypcon2>div').eq(bj).show().siblings().hide();
})
//游戏
$('.yxcon1 span').hover(function (){
	var bj=$('.yxcon1 span').index(this);
	$(this).addClass('show6').siblings().removeClass('show6');
	$('.yxcon2>div').eq(bj).show().siblings().hide();
})

// 划上去
$('.hea3_3_c2 li').hover(function (){
	var hexb=$('.hea3_3_c2 li').index(this);
	// $('.maxtab .hfcon,.maxtab .jpcon,.maxtab .dypcon,.maxtab .xycon').eq(hexb).css({borderTop:'2px solid blue',borderBottom:'1px solid #fff'})
	$('.maxcon li').eq(hexb).show().siblings().hide();
	$('.maxtab li').eq(hexb).addClass('show2').siblings().removeClass('show2');
		if (this!=$('.hea3_3_c2 li').eq(3)&&yx==0) {
		$('.tab').css('transform','translateY(-229px)')
	}else{
		
	}	
},function (){
	var hexb=$('.hea3_3_c2 li').index(this);
	yx=0;
	// $('.maxtab li').eq(hexb).css({borderTop:'2px solid #fff',borderBottom:'1px solid #fff'}).siblings().css({borderTop:'2px solid #fff',borderBottom:'1px solid #fff'})
})

// if ($('.wangf').checked) {
// 	$('.jplj2,.dd2,.rq2').show();
// };
$('.wangf').click(function (){
	$('.jplj2,.dd2,.rq2').show();
})
$('.danc').click(function (){
	$('.jplj2,.dd2,.rq2').hide();
})
$('.wangf1').click(function (){
	$('.jplj3,.dd3,.rq3').show();
})
$('.danc1').click(function (){
	$('.jplj3,.dd3,.rq3').hide();
})
