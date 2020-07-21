  $(document).ready(function(){

	//타이핑효과
	var TxtType = function(el, toRotate, period) {
                this.toRotate = toRotate;
                this.el = el;
                this.loopNum = 0;
                this.period = parseInt(period, 10) || 2000;
                this.txt = '';
                this.tick();
                this.isDeleting = false;
            };

            TxtType.prototype.tick = function() {
                var i = this.loopNum % this.toRotate.length;
                var fullTxt = this.toRotate[i];

                if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
                } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
                }

                this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

                var that = this;
                var delta = 200 - Math.random() * 100;

                if (this.isDeleting) { delta /= 2; }

                if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
                } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
                }

                setTimeout(function() {
                that.tick();
                }, delta);
            };

            window.onload = function() {
                var elements = document.getElementsByClassName('typewrite');
                for (var i=0; i<elements.length; i++) {
                    var toRotate = elements[i].getAttribute('data-type');
                    var period = elements[i].getAttribute('data-period');
                    if (toRotate) {
                      new TxtType(elements[i], JSON.parse(toRotate), period);
                    }
                }
                // INJECT CSS
                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
                document.body.appendChild(css);
            };
	
	//1번슬라이드
	
	function slide_1(){
             $(".slide_1").stop().animate({top:-800},function(){
                $(".slide_1 li:first").stop().appendTo(".slide_1");
                $(".slide_1").stop().css({top:0});
             });
          }
          setInterval(slide_1, 5000);

           $(function(){
           $(".wrap_1").hide();
           $(".dog").mouseover(function(){
               $(this).children(".wrap_1").stop().fadeIn();
           }).mouseout(function(){
             $(this).children(".wrap_1").stop().fadeOut();
           });
         });

	//2번슬라이드
	
	var a=0;
         function slide_2(){
             a++;
             if(a > $(".slide_2 li:last").index()){
               a=0;
             }
            $(".slide_2 li").eq(a).stop().fadeIn("slow");
            $(".slide_2 li").eq(a-1).stop().fadeOut();
          }
         setInterval(slide_2, 4000);

         $(function(){
           $(".wrap_2").hide();
           $(".zoo").mouseover(function(){
             $(this).children(".wrap_2").stop().fadeIn();
           }).mouseout(function(){
             $(this).children(".wrap_2").stop().fadeOut();
           });
         });
	
	//3번슬라이드
	
	function slide_3(){
             $(".slide_3").stop().animate({top:-800},function(){
                $(".slide_3 li:first").stop().appendTo(".slide_3");
                $(".slide_3").stop().css({top:0});
             });
          }
          setInterval(slide_3, 5000);


            $(function(){
           $(".wrap_3").hide();
           $(".seafood").mouseover(function(){
               $(this).children(".wrap_3").stop().fadeIn();
           }).mouseout(function(){
             $(this).children(".wrap_3").stop().fadeOut();
           });
         });

            $(function(){
	  $('.phone').mouseover(function(){
	    $(this).find('.mobile').stop().animate({scrollTop:( $(document).height() ) },15000);}).mouseleave(function(){
		$(this).find('.mobile').stop().animate({scrollTop:0},1800);});

	});

	//파티클효과

	particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 355,
          "density": {
            "enable": true,
            "value_area": 789.1476416322727
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.48927153781200905,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 0.2,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 10,
            "size_min": 0,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.5,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 1000,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 83.91608391608392,
            "size": 1,
            "duration": 3,
            "opacity": 1,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });



  });