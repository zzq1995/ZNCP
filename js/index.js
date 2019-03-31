$(function(){
    $('.movedx .sub_li').hover(function(event) {
        /* Act on the event */
        $('.subnav').show(500)
    },function(){
        $('.subnav').hide(500)
    });
})
// scroll
$(document).ready(function(){

    $(window).scroll(function(){
        if($(window).scrollTop() >= 100){
            $('#header').css('height','66px')
        }else{
            $('#header').css('height','80px')
        }

        if( $(window).scrollTop() > 7000 ){
            // start all the timers
        $('.timer').each(count);
        }

    })
})



//banner图系列
$(document).ready(function(){
    var index=0;
    var timer;
    $('.slide').hide().eq(0).show()
    $('.suo').hide().eq(0).show()

    function timeImg(){
        timer=setInterval(function(){
            index++;
            if(index==2){
                index=0;
            }
            showImg()
        },3000)
    }timeImg()

    function showImg(){
        $('.slide').hide().eq(index).show()
        $('.suo').hide().eq(index).show()
    }

    // 鼠标放上去停止，移出来开始
    $('.banner').hover(function() {
        clearInterval(timer)
    }, function() {
        showImg()
    });

    // 鼠标左点击
    $('.next').click(function(event) {
        /* Act on the event */
        index--;
        if(index<0){
            index=1;
        }
        showImg()

    });

    // 鼠标右击
    $('.prev').click(function(event) {
        /* Act on the event */
        index++;
        if(index>1){
            index=0;
        }
        showImg()
    });


    $('.next').hover(function(){
        $('.lan').css({
            zIndex:'1',
            width:'90px'
        })
    },function(){
        $('.lan').css({
            zIndex:'-1',
            width:'0px'
        })
    })

    $('.prev').hover(function(){
        $('.nan').css({
            zIndex:'1',
            width:'90px'
        })
    },function(){
        $('.nan').css({
            zIndex:'-1',
            width:'0px'
        })
    })

})


// 产品展示
   // 轮播图
    // $(function(){
    //     var index=0;
    //     var timer=null;
    //     var ulWidth=$('.content_list').width()
    //     var movePx=index*ulWidth+'px'
    //     var firstImg = $('.content_list ul li').first().clone();
    //     $('.content_list ul').append(firstImg).width(ulWidth*5)
    //     // 鼠标左点击
    //     $('.owl_prev').click(function(){
    //         index--;
    //         // console.log(index);
    //         if(index<0){
    //             index=3;
    //         }
    //         // console.log(index);
    //         var movePx=index*ulWidth
    //         // console.log(movePx);
    //         $('.content_list ul li').eq(index).children('img').addClass('sc').parent().siblings().children('img').removeClass('sc')
    //         $('.content_list ul').animate({
    //             'right':movePx
    //         },500)
    //     })

    //     // 鼠标右点击
    //     $('.owl_next').click(function(){
    //         index++;
    //         // console.log(index);
    //         if(index>3){
    //             index=0;
    //         }
    //         // console.log(index);
    //         var movePx=index*ulWidth+'px'
    //         // console.log(movePx);
    //         $('.content_list ul li').eq(index).children('img').addClass('sc').parent().siblings().children('img').removeClass('sc')
    //         $('.content_list ul').animate({
    //             'right':movePx
    //         },500)
    //     })
    // })

// 产品展示
   // 轮播图
    $(function(){

        // 获取第一张图片的节点对象
        var firstImg = $('#ul li').first().clone();
        // 添加到最后的位置 并设置 ul 的宽度
        $('#ul').append(firstImg).width($('#ul li').length * $('.content_list').width());

        var i = 0;
        var imgW = $('#ul img').width();

        // 下一张
        $('.owl_next').click(function() {
            moveImg(++i);
        });

        // 上一张
        $('.owl_prev').click(function() {
            moveImg(--i);
        });

        // 移动到指定的图片
        function moveImg() {
            // alert(num);
            // 最后一张
        if (i == $('#ul li').length) {
            $('#ul').css({
                left: 0
            })
            i = 1;
        }

        // 是第一张的时候
        if (i == -1) {
            i = $('#ul li').length - 2;
            $('#ul').css({
                left: ($('#ul li').length - 1) * -1400
            });
        }

        // 移动图片动画
        $('#ul').stop().animate({
            left: i * -imgW
        }, 400);
        console.log(i);
        // // 换一下每个图片的小标记
        if (i == ($('#ul li').length - 1)) {
            $('#ol li').eq(0).addClass('bg').siblings().removeClass('bg');
        } else {
            $('#ol li').eq(i).addClass('bg').siblings().removeClass('bg');
        }
        }
    })

    //左右箭头隐藏和显示
    $(function(){
        $('.content_list ul').mouseover(function(){
            $('.owl_prev').css({
                'opacity':'1',
                'transform':'translateX(-60px)'
            })
            $('.owl_next').css({
                'opacity':'1',
                'transform':'translateX(60px)'
            })
            $('.sc').css('transform','scale(1.1)')
        });
        $('#mist').mouseleave(function(event) {
            /* Act on the event */
            $('.owl_prev').css({
                'opacity':'0',
                'transform':'translateX(0px)'
            })
            $('.owl_next').css({
                'opacity':'0',
                'transform':'translateX(0px)'
            })
            $('.sc').css('transform','scale(1)')
        });
    })

    // 遮罩
    $(function(){
        $('.content_list').hover(function() {
            $('.cover').css({
                'height':'100%',
                'opacity':'1',
            })
        }, function() {
            $('.cover').css({
                'height':'0',
                'opacity':'0',
            })
        });
    })

    //MORE
    $(function(){
        $('#more').hover(function() {
            $('#more').css('background','#3DB45E').css('color','#fff')
            $('#more i').css({
                'opacity':'1',
                'right':'40px'
            })
        },function(){
            $('#more').css('background','#fff').css('color','#D3D3D3')
            $('#more i').css({
                'opacity':'0',
                'right':'50px'
            })
        });
    })

//智慧产品
    $(function(){
        $('.item_zhe').mouseover(function(){
                var a=$(this).index()
                $(this).find('img').css('transform','scale(1.1)')
                $(this).find('.item_wrapeer').css({
                'height':'100%'
            })
                $(this).find('.jcy').css({
                'opacity':'1',
                'transform':'translateY(-20px)',
                'color':'#3DB45E'
            })
                $(this).find('.tel').css({
                'opacity':'1',
                'transform':'translateY(20px)',
                'color':'#3DB45E'
            })
                $(this).find('.ga').css({
                'opacity':'1',
                'transform':'translateY(20px)',
            })

        })

        $('.item_img').mouseleave(function() {
            $('.item_img img').css('transform','scale(1.0)')
            $('.item_wrapeer').css({
                'height':'0'
            })
            $('.jcy').css({
                'opacity':'0',
                'transform':'translateY(0px)',
                'color':'#c2c2c2'
            })
            $('.tel').css({
                'opacity':'0',
                'transform':'translateY(0px)',
                'color':'#c2c2c2'
            })
            $('.ga').css({
                'opacity':'0',
                'transform':'translateY(0px)',
            })
        });
    })

//智能家居生态
    $(function(){
       $(' #stage .obvious').mouseover(function(){
        var a=$('.obvious').index($(this))
        console.log(a);
        $('.obvious .ell').eq(a).css({'color':'#46B764'})
        $('.obvious .numb').eq(a).css({'transform':'scale(0)'})
        $('.obvious .cov').eq(a).css({
            'height':'100%'
        })
        $('.obvious .date_wrap').eq(a).css({
            'opacity':'1',
            'top':'20%'
        })
       })
       $('.obvious').mouseleave(function(){
            $('.obvious .ell').css({'color':'#333'})
            $('.obvious .numb').css({'transform':'scale(1)'})
            $('.obvious .cov').css({
                'height':'0'
            })
            $('.obvious .date_wrap').css({
                'opacity':'0',
                'top':'60%'
            })
       });
    })


//智慧家庭全宅智能系统
    $(function(){
        $('.tab_index').mouseover(function() {
            $('.swiper-button-prev').css({
                'left':'10%',
                'opacity':'1'
            })
            $('.swiper-button-next').css({
                'right':'10%',
                'opacity':'1'
            })
        });
        $('.tab_stage').mouseleave(function(event) {

            $('.swiper-button-prev').css({
                'left':'7%',
                'opacity':'0'
            })
            $('.swiper-button-next').css({
                'right':'7%',
                'opacity':'0'
            })
        });
    })

//成功案例
    $(function(){
        $('.suc_img').hide().eq(0).show()
        var index=0;
        // 下一张
        $('.nav_next').click(function(){
                index++;
                // console.log(index);
            if(index>5){
                index=0;
            }
            $('.suc_img').hide().eq(index).show()
            $('.nav_ind').html('0'+(index+1))
            $('#suc_ul li').removeClass('suc_act').eq(index).addClass('suc_act')
        });


        //上一张
        $('.nav_prev').click(function(event) {
            index--;
            if(index<0){
                index=5;
            }
            $('.suc_img').hide().eq(index).show()
            $('.nav_ind').html('0'+(index+1))
            $('#suc_ul li').removeClass('suc_act').eq(index).addClass('suc_act')
        });
    })

//最新动态
    $(function(){

        $('.suc_right ul li').hover(function() {
            var a=$('.suc_right ul li').index($(this))
            // console.log(a);
            $('.act_wrap').eq(a).css({
                'left':'0'
            })
            $('.suc_right ul .suc_act .act_wrap').css({    //让具有class .suc_act的li无效
            'left':'0'
            })
        }, function() {
            var a=$('.suc_right ul li').index($(this))
            var b=$('.act_wrap').width()
            $('.act_wrap').eq(a).css({
                'left':b
            })

        });
    })

//合作伙伴
    $(function(){
        $('.container_content').mouseover(function(event) {
            $('#zuo').css({
                'opacity':'1',
                'left':'-50px'
            })
            $('#you').css({
                'opacity':'1',
                'right':'-50px'
            })
        });
        $('.yik').mouseleave(function(){
            $('#zuo').css({
                'opacity':'0',
                'left':'0px'
            })
            $('#you').css({
                'opacity':'0',
                'right':'0px'
            })
        })
    })

// 表单验证
   