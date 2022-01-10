import 'popper.js';
import 'bootstrap';
import SplitType from 'split-type';
//import "gsap";
//import { ScrollToPlugin } from "gsap/ScrollToPlugin";

//gsap.registerPlugin(ScrollToPlugin);


(function ($, Drupal) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
		
     // $('input.myCustomBehavior', context).once('myCustomBehavior').each(function () {
        // Apply the myCustomBehaviour effect to the elements only once.


		$(document, context).once('myCustomBehavior').each(function () {

			//console.log("Start IDS APP v0.1! - one time");



   	console.log(" ");
  	console.log(" ");

    console.log("  %cby:%cGoMaStudio.net %c %c %c", "border-left:10px solid #de4b3a; background: #444; color: #eb7f3b; padding: 10px; border-radius:0px", "color: orange; background: #444; color: #fff; padding:10px 10px 10px 0; border-right:10px solid #2a9a88; border-radius:0px; ", "background: #444; border-left:5px solid #e4683a; padding:10px;  border-radius:20px", "border-left:5px solid #e24e3b; padding:10px;background: #444;", "border-left:5px solid #e4683a; padding:10px;background: #444; border-radius:20px");

  	console.log(" ");
  	console.log(" ");


    	$( "#bt-hambuguer" ).click(function() {
		  $(this).toggleClass('is-active');
		  $('.navbar.navbar-expand-lg').toggleClass('nav-back-color');
		});




		function confirmaURL() {
		  let finalPath = window.location.href;
		  abrePorDefeitoPag(finalPath);
		}

		function abrePorDefeitoPag(qualModal) {
		  //confirmar a path para ver se vale a pena carregar o modal
		  if (qualModal.indexOf("?") !== -1) {
		    let myPath = qualModal.split("?");
		    let finalPathID = getParameterByName('id');
		    let finalPath = '#'+finalPathID;
		    let alvoAbrir = finalPath.replace("heading", "collapse");
		    $(alvoAbrir).toggleClass( "show" );


	        setTimeout(function(){
	        		        let disTopY = $(finalPath).offset().top - 120;
		    				//console.log("disTopY = ",disTopY);
	        				$("html,body").animate({ scrollTop: disTopY }, 600);	

	        }, 500);
		
		  }
		}

	function getParameterByName(name, url = window.location.href) {
	    name = name.replace(/[\[\]]/g, '\\$&');
	    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, ' '));
	}


	function removeLoading() {
		//gsap.to(".loader", {scale: 0, duration: .175});
		//gsap.to(".fundo-loader", {disTopY: -100%, duration: .275});
		  //$(".fundo-loader").addClass('loaded');
	}
	

	//startParallax();

	function animaSecctionsTexto() {

		const seccionElements = document.querySelectorAll("[class*='animated-section']");
		
		
			// animaTxt - words
			seccionElements.forEach((section, i) => {

					//console.log("section = ",section);

					let itemAniElements = section.querySelectorAll(".split-txt-js-words");
					const text = new SplitType(itemAniElements, { types: 'words' });
					let words = text.words; //an array of all the divs that wrap each character
			
					let startPosItems = "top bottom-=120px";
					let itemElements = words;

					let objInItems = {};
					let objOutitems = {};
					let objSet = {};

					objSet.opacity = "0";
					objSet.y =40;
					
					gsap.set(itemElements, objSet);

					objInItems.duration = 0.8;
					objInItems.opacity = 1;
					objInItems.y = 0;
					objInItems.ease = "back";
					objInItems.stagger = 0.05;

					objOutitems.duration = 0.35;
					objOutitems.opacity = 0;
					objOutitems.y = 100;
					objOutitems.ease = "power1.inOut";
					objOutitems.stagger = 0.1;

					ScrollTrigger.batch( itemElements, {
					onEnter: (elements, triggers) => {
						gsap.to(elements, objInItems );
					},
					onLeaveBack: (elements, triggers) => {
						gsap.to(elements, objOutitems );
					},
					start: startPosItems,
					});


			});




			// animaTxt - lines
			seccionElements.forEach((section, i) => {

				//console.log("section = ",section);
				let itemAniElements = section.querySelectorAll(".split-txt-js");
				const text = new SplitType(itemAniElements, { types: 'lines' });
				let words = text.lines; //an array of all the divs that wrap each character
		
				let startPosItems = "top bottom-=120px";
				let itemElements = words;

				let objInItems = {};
				let objOutitems = {};
				let objSet = {};

				objSet.opacity = "0";
				objSet.y =40;
				
				gsap.set(itemElements, objSet);

				objInItems.duration = 0.8;
				objInItems.opacity = 1;
				objInItems.y = 0;
				objInItems.ease = "back";
				objInItems.stagger = 0.3;

				objOutitems.duration = 0.35;
				objOutitems.opacity = 0;
				objOutitems.y = 100;
				objOutitems.ease = "power1.inOut";
				objOutitems.stagger = 0.1;

				ScrollTrigger.batch( itemElements, {
				onEnter: (elements, triggers) => {
					gsap.to(elements, objInItems );
				},
				onLeaveBack: (elements, triggers) => {
					gsap.to(elements, objOutitems );
				},
				start: startPosItems,
				});


		});



			//anima tapa-img
			seccionElements.forEach((section, i) => {

				//console.log("section = ",section);

				let itemAniElements = section.querySelectorAll(".tapa-img");

				let startPosItems = "top bottom-=220px";
				let itemElements = itemAniElements;



				let objInItems = {};
				let objOutitems = {};
				let objSet = {};



				//objSet.transformOrigin  = '0% 100%';
				//objSet.xPercent = 100;
				//gsap.set(itemElements, objSet);


				objInItems.duration = .6;
				objInItems.width = 0;
				//objInItems.xPercent = 1000;
				objInItems.ease = "none";

				
				objOutitems.duration = 1;
				objOutitems.width = 1200;
				//objOutitems.xPercent = 0;
				objOutitems.ease = "none";




				ScrollTrigger.batch( itemElements, {
				onEnter: (elements, triggers) => {
					gsap.to(elements, objInItems );
				},
				onLeaveBack: (elements, triggers) => {
					gsap.to(elements, objOutitems );
				},
				start: startPosItems,
				});



		});

	}

	      //Help functions 

		  function getFullClass(partialClass) {
			foundClasses = [];
			$("[class*='" + partialClass + "']").each(function (i, e) {
			  seccionElements.push(e);
				foundClasses.push($(e).attr("class").split(" ").filter(function (d) {
					return d.indexOf(partialClass) >= 0
				}));
			});
		  // console.log("seccionElements = "+seccionElements);
			return foundClasses;
	
		}
		function extractProps(groupClass){
			//groupClass.split("--");
			//console.log("groupClass = "+ groupClass);
			foundProps = [];
			$.each( groupClass, function( i, val ) {
				//console.log("val = "+ val +" i = "+i);
				foundProps.push(val.toString().split("--"));
				//console.log("foundProps = "+ foundProps[i]);
			});
			return foundProps;
		  }


	//document.getElementsByTagName("BODY")[0].onresize = function() {removeBottomSpace()};




 	}); //end once
 
    }
  };
})(jQuery, Drupal);
