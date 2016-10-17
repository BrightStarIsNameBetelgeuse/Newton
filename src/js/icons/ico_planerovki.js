(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 350,
	height: 350,
	fps: 25,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.touch = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("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");
	this.shape.setTransform(120.5,117.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,241,234.9);


(lib.ico_template_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_contour - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_15 = new cjs.Graphics().p("APASuIAA0ZIGwAAIAAUZg");
	var mask_graphics_16 = new cjs.Graphics().p("AL4SuIAA0ZIJ4AAIAAUZg");
	var mask_graphics_17 = new cjs.Graphics().p("AIwSuIAA0ZINAAAIAAUZg");
	var mask_graphics_18 = new cjs.Graphics().p("AFoSuIAA0ZIQIAAIAAUZg");
	var mask_graphics_19 = new cjs.Graphics().p("ACgSuIAA0ZITQAAIAAUZg");
	var mask_graphics_20 = new cjs.Graphics().p("AgmSuIAA0ZIWWAAIAAUZg");
	var mask_graphics_21 = new cjs.Graphics().p("AjtSuIAA0ZIZdAAIAAUZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:139.3,y:119.8}).wait(1).to({graphics:mask_graphics_16,x:139.2,y:119.8}).wait(1).to({graphics:mask_graphics_17,x:139.2,y:119.8}).wait(1).to({graphics:mask_graphics_18,x:139.2,y:119.8}).wait(1).to({graphics:mask_graphics_19,x:139.2,y:119.8}).wait(1).to({graphics:mask_graphics_20,x:139.2,y:119.8}).wait(1).to({graphics:mask_graphics_21,x:139.2,y:119.8}).wait(14));

	// contour - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AFkJdIAAgLIDuAAIAAALgApRJdIAAgLIJNAAIAAALgAFkIaIAAgKICrAAIAAAKgAoPIaIAAgKIILAAIAAAKgAAEAFIAAgLIAAAAIAAADIFWAAIAAAIgAIag+IAAgKIA4AAIAAAKgABJg+IAAgKIERAAIAAAKgAoPoPIAAgLICrAAIAAALgAAEovIAAgtIA7AAIAAAcIgBAAIAAgSIg6AAIAAAjgApRpSIAAgKIDtAAIAAAKg");
	this.shape.setTransform(175.9,176.3);
	this.shape._off = true;

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15).to({_off:false},0).wait(20));

	// mask_contour (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_15 = new cjs.Graphics().p("AhqJCIAAmwIUrAAIAAGwg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AhqKnIAAp6IUrAAIAAJ6g");
	var mask_1_graphics_17 = new cjs.Graphics().p("AhqMMIAAtBIUrAAIAANBg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AhqNxIAAwLIUrAAIAAQLg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AhqPWIAAzVIUrAAIAATVg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AhqQ7IAA2fIUrAAIAAWfg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AhqSfIAA5oIUrAAIAAZog");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_1_graphics_15,x:121.7,y:57.9}).wait(1).to({graphics:mask_1_graphics_16,x:121.7,y:68}).wait(1).to({graphics:mask_1_graphics_17,x:121.7,y:78}).wait(1).to({graphics:mask_1_graphics_18,x:121.7,y:88.1}).wait(1).to({graphics:mask_1_graphics_19,x:121.7,y:98.2}).wait(1).to({graphics:mask_1_graphics_20,x:121.7,y:108.3}).wait(1).to({graphics:mask_1_graphics_21,x:121.7,y:118.4}).wait(14));

	// contour
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AJSJdIAAqbIAAAAIAAgKIAKAAIAAKlgAFaJdIAAhNIAKAAIAABNgAgEJdIAAgLIAAAAIAAg4IAAAAIAAgKIAIAAIAABNgApbJdIAAy5IAKAAIAAAKIAAAAIAASkIAAAAIAAALgAIQIaIAAgKIAAAAIAApYIALAAIAAAKIgBAAIAAJYgAoaIaIAAw0IALAAIAAALIgBAAIAAQfIABAAIAAAKgAFaAFIAAhNIAKAAIAABNgAgEAFIAAphIAIAAIAAAtIAAAAIAAIpIAAAAIAAALgAA/g+IAAoCIAAAAIAAgcIAJAAIAAIUIABAAIAAAKgAlkoPIAAgLIABAAIAAg4IgBAAIAAgKIALAAIAABNg");
	this.shape_1.setTransform(175.9,176.3);
	this.shape_1._off = true;

	this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(15).to({_off:false},0).wait(20));

	// mask_touch (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AFaJdIAAhNIC2AAIAApYIBMAAIAAKlgApbJdIAAy5IECAAIAABNIi3AAIAAQfIIUAAIAABNgAgEAFIAAphIBMAAIAAIUIEcAAIAABNg");
	mask_2.setTransform(175.9,176.3);

	// touch
	this.instance = new lib.touch("synched",0);
	this.instance.setTransform(259.8,90.4,1,0.088,45,0,0,119.5,-0.8);
	this.instance._off = true;

	this.instance.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).to({regX:119.4,scaleX:1,scaleY:0.45,rotation:44.9,x:259.7,y:90.3},2).to({regX:119.5,regY:-0.9,scaleX:1,scaleY:0.67,x:259.9},2).to({regX:119.4,regY:-0.8,scaleY:0.8,x:259.7},2).to({scaleY:0.9,y:90.4},2).to({scaleY:0.97,y:90.3},2).to({regX:119.5,regY:-0.6,scaleX:1,scaleY:1,rotation:45,x:259.8,y:90.4},2).wait(1));

	// mask_touch - копия (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("AOkUGIAA7qIGwAAIAAbqg");
	var mask_3_graphics_10 = new cjs.Graphics().p("ALwUGIAA7qIJkAAIAAbqg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AI9UGIAA7qIMXAAIAAbqg");
	var mask_3_graphics_12 = new cjs.Graphics().p("AGJUGIAA7qIPLAAIAAbqg");
	var mask_3_graphics_13 = new cjs.Graphics().p("ADWUGIAA7qIR+AAIAAbqg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AAiUGIAA7qIUyAAIAAbqg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AiPUGIAA7qIXjAAIAAbqg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:136.5,y:128.7}).wait(1).to({graphics:mask_3_graphics_10,x:136.4,y:128.7}).wait(1).to({graphics:mask_3_graphics_11,x:136.4,y:128.7}).wait(1).to({graphics:mask_3_graphics_12,x:136.4,y:128.7}).wait(1).to({graphics:mask_3_graphics_13,x:136.4,y:128.7}).wait(1).to({graphics:mask_3_graphics_14,x:136.4,y:128.7}).wait(1).to({graphics:mask_3_graphics_15,x:136.4,y:128.7}).wait(20));

	// contour---  - копия
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AHBIaIAAgKIAzAAIAAAKgAFdIaIAAgKIAzAAIAAAKgAD5IaIAAgKIAzAAIAAAKgACWIaIAAgKIAyAAIAAAKgAAyIaIAAgKIAxAAIAAAKgAgwIaIAAgKIAwAAIAAAKgAiUIaIAAgKIAxAAIAAAKgAj4IaIAAgKIAxAAIAAAKgAldIaIAAgKIAzAAIAAAKgAnBIaIAAgKIAzAAIAAAKgAoaIaIAAgKIAoAAIAAAKgAH0oPIAAgKIAmAAIAAAKgAGQoPIAAgKIAyAAIAAAKgAEsoPIAAgKIAyAAIAAAKgADIoPIAAgKIAyAAIAAAKgABkoPIAAgKIAyAAIAAAKgAAAoPIAAgKIAyAAIAAAKgAhioPIAAgKIAyAAIAAAKgAjGoPIAAgKIAyAAIAAAKgAkqoPIAAgKIAyAAIAAAKgAmOoPIAAgKIAyAAIAAAKgAnyoPIAAgKIAyAAIAAAKg");
	this.shape_2.setTransform(175.8,176.1);
	this.shape_2._off = true;

	this.shape_2.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(9).to({_off:false},0).wait(26));

	// mask_touch - копия: 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_9 = new cjs.Graphics().p("AjeVVIAAmwIW9AAIAAGwg");
	var mask_4_graphics_10 = new cjs.Graphics().p("AjeVVIAApjIW9AAIAAJjg");
	var mask_4_graphics_11 = new cjs.Graphics().p("AjeVVIAAsXIW9AAIAAMXg");
	var mask_4_graphics_12 = new cjs.Graphics().p("AjeVVIAAvKIW9AAIAAPKg");
	var mask_4_graphics_13 = new cjs.Graphics().p("AjeVVIAAx+IW9AAIAAR+g");
	var mask_4_graphics_14 = new cjs.Graphics().p("AjeVVIAA0yIW9AAIAAUyg");
	var mask_4_graphics_15 = new cjs.Graphics().p("AjeVVIAA3jIW9AAIAAXjg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_4_graphics_9,x:124.8,y:136.6}).wait(1).to({graphics:mask_4_graphics_10,x:124.8,y:136.6}).wait(1).to({graphics:mask_4_graphics_11,x:124.8,y:136.6}).wait(1).to({graphics:mask_4_graphics_12,x:124.8,y:136.6}).wait(1).to({graphics:mask_4_graphics_13,x:124.8,y:136.6}).wait(1).to({graphics:mask_4_graphics_14,x:124.8,y:136.6}).wait(1).to({graphics:mask_4_graphics_15,x:124.8,y:136.6}).wait(20));

	// contour---  - копия: 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgEIFIAAgkIAIAAIAAAkgAgEGwIAAgzIAIAAIAAAzgAgEFMIAAgzIAIAAIAAAzgAgEDoIAAgzIAIAAIAAAzgAgECEIAAgyIAIAAIAAAygAgEAfIAAgvIAIAAIAAAvgAgEhDIAAgxIAIAAIAAAxgAgEinIAAgxIAIAAIAAAxgAgEkLIAAgxIAIAAIAAAxgAgEluIAAgzIAIAAIAAAzgAgEnSIAAgzIAIAAIAAAzg");
	this.shape_3.setTransform(229.2,178.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AgEIIIAAgyIAIAAIAAAygAgEGkIAAgyIAIAAIAAAygAgEFAIAAgyIAIAAIAAAygAgEDcIAAgyIAIAAIAAAygAgEB4IAAgyIAIAAIAAAygAgEAUIAAgwIAIAAIAAAwgAgEhOIAAgyIAIAAIAAAygAgEiyIAAgyIAIAAIAAAygAgEkWIAAgyIAIAAIAAAygAgEl6IAAgyIAIAAIAAAygAgEneIAAgpIAIAAIAAApg");
	this.shape_4.setTransform(122.5,174.2);

	this.shape_3.mask = this.shape_4.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},9).wait(26));

	// mask_touch (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_2 = new cjs.Graphics().p("ACRUGIAA7qIGwAAIAAbqg");
	var mask_5_graphics_3 = new cjs.Graphics().p("AAtUGIAA7qIJ4AAIAAbqg");
	var mask_5_graphics_4 = new cjs.Graphics().p("Ag0UGIAA7qIM+AAIAAbqg");
	var mask_5_graphics_5 = new cjs.Graphics().p("AiXUGIAA7qIQGAAIAAbqg");
	var mask_5_graphics_6 = new cjs.Graphics().p("Aj6UGIAA7qITNAAIAAbqg");
	var mask_5_graphics_7 = new cjs.Graphics().p("AleUGIAA7qIWWAAIAAbqg");
	var mask_5_graphics_8 = new cjs.Graphics().p("AnBUGIAA7qIZdAAIAAbqg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_5_graphics_2,x:57.7,y:128.7}).wait(1).to({graphics:mask_5_graphics_3,x:67.8,y:128.7}).wait(1).to({graphics:mask_5_graphics_4,x:77.8,y:128.7}).wait(1).to({graphics:mask_5_graphics_5,x:87.9,y:128.7}).wait(1).to({graphics:mask_5_graphics_6,x:98,y:128.7}).wait(1).to({graphics:mask_5_graphics_7,x:108,y:128.7}).wait(1).to({graphics:mask_5_graphics_8,x:118.1,y:128.7}).wait(27));

	// contour--- 
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AIlJcIAAgJIAyAAIAAAJgAHBJcIAAgJIAyAAIAAAJgAFdJcIAAgJIAyAAIAAAJgAD5JcIAAgJIAyAAIAAAJgACVJcIAAgJIAyAAIAAAJgAAxJcIAAgJIAyAAIAAAJgAgxJcIAAgJIAxAAIAAAJgAiVJcIAAgJIAyAAIAAAJgAj5JcIAAgJIAyAAIAAAJgAldJcIAAgJIAyAAIAAAJgAnBJcIAAgJIAyAAIAAAJgAolJcIAAgJIAyAAIAAAJgAH0pRIAAgKIAyAAIAAAKgAGQpRIAAgKIAyAAIAAAKgAEspRIAAgKIAyAAIAAAKgADIpRIAAgKIAyAAIAAAKgABkpRIAAgKIAyAAIAAAKgAAApRIAAgKIAyAAIAAAKgAhipRIAAgKIAyAAIAAAKgAjGpRIAAgKIAyAAIAAAKgAkqpRIAAgKIAyAAIAAAKgAmOpRIAAgKIAyAAIAAAKgAnypRIAAgKIAyAAIAAAKgApWpRIAAgKIAyAAIAAAKg");
	this.shape_5.setTransform(175.8,176.3);
	this.shape_5._off = true;

	this.shape_5.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2).to({_off:false},0).wait(33));

	// mask_touch (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_2 = new cjs.Graphics().p("AjeJDIAAmwIW9AAIAAGwg");
	var mask_6_graphics_3 = new cjs.Graphics().p("AjeKqIAAp4IW9AAIAAJ4g");
	var mask_6_graphics_4 = new cjs.Graphics().p("AjeMSIAAs/IW9AAIAAM/g");
	var mask_6_graphics_5 = new cjs.Graphics().p("AjeN6IAAwHIW9AAIAAQHg");
	var mask_6_graphics_6 = new cjs.Graphics().p("AjePiIAAzQIW9AAIAATQg");
	var mask_6_graphics_7 = new cjs.Graphics().p("AjeRKIAA2ZIW9AAIAAWZg");
	var mask_6_graphics_8 = new cjs.Graphics().p("AjeSyIAA5hIW9AAIAAZhg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_6_graphics_2,x:124.8,y:57.9}).wait(1).to({graphics:mask_6_graphics_3,x:124.8,y:68.3}).wait(1).to({graphics:mask_6_graphics_4,x:124.8,y:78.7}).wait(1).to({graphics:mask_6_graphics_5,x:124.8,y:89.1}).wait(1).to({graphics:mask_6_graphics_6,x:124.8,y:99.5}).wait(1).to({graphics:mask_6_graphics_7,x:124.8,y:109.9}).wait(1).to({graphics:mask_6_graphics_8,x:124.8,y:120.3}).wait(27));

	// contour--- 
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("ApbJXIAAgyIAKAAIAAAygAJSImIAAgyIAKAAIAAAygApbHzIAAgyIAKAAIAAAygAJSHCIAAgyIAKAAIAAAygApbGPIAAgyIAKAAIAAAygAJSFeIAAgyIAKAAIAAAygApbErIAAgyIAKAAIAAAygAJSD6IAAgyIAKAAIAAAygApbDHIAAgyIAKAAIAAAygAJSCWIAAgyIAKAAIAAAygApbBjIAAgyIAKAAIAAAygAJSAyIAAgyIAKAAIAAAygApbAAIAAgxIAKAAIAAAxgAJSgwIAAgyIAKAAIAAAygApbhjIAAgyIAKAAIAAAygAJSiUIAAgyIAKAAIAAAygApbjHIAAgyIAKAAIAAAygAJSj4IAAgyIAKAAIAAAygApbkrIAAgyIAKAAIAAAygAJSlcIAAgyIAKAAIAAAygApbmPIAAgyIAKAAIAAAygAJSnAIAAgyIAKAAIAAAygApbnzIAAgyIAKAAIAAAygAJSokIAAgyIAKAAIAAAyg");
	this.shape_6.setTransform(175.9,176.3);
	this.shape_6._off = true;

	this.shape_6.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(2).to({_off:false},0).wait(33));

	// mask_touch (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_4 = new cjs.Graphics().p("ACPXxIAAmwIPEAAIAAGwg");
	var mask_7_graphics_5 = new cjs.Graphics().p("ACPXxIAArJIPEAAIAALJg");
	var mask_7_graphics_6 = new cjs.Graphics().p("ACPXxIAAvjIPEAAIAAPjg");
	var mask_7_graphics_7 = new cjs.Graphics().p("ACPXxIAAz+IPEAAIAAT+g");
	var mask_7_graphics_8 = new cjs.Graphics().p("ACPXxIAA4VIPEAAIAAYVg");
	var mask_7_graphics_9 = new cjs.Graphics().p("ACPXxIAA8vIPEAAIAAcvg");
	var mask_7_graphics_10 = new cjs.Graphics().p("ACPXxMAAAghKIPEAAMAAAAhKg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_7_graphics_4,x:110.7,y:152.2}).wait(1).to({graphics:mask_7_graphics_5,x:110.7,y:152.2}).wait(1).to({graphics:mask_7_graphics_6,x:110.7,y:152.2}).wait(1).to({graphics:mask_7_graphics_7,x:110.7,y:152.2}).wait(1).to({graphics:mask_7_graphics_8,x:110.7,y:152.2}).wait(1).to({graphics:mask_7_graphics_9,x:110.7,y:152.2}).wait(1).to({graphics:mask_7_graphics_10,x:110.7,y:152.2}).wait(25));

	// contour--- 
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AlhNNIAAgxIAKAAIAAAxgAFYMkIAAgyIAKAAIAAAygAlhLpIAAgxIAKAAIAAAxgAFYK/IAAgxIAKAAIAAAxgAlhKFIAAgyIAKAAIAAAygAFYJbIAAgxIAKAAIAAAxgAlhIiIAAgzIAKAAIAAAzgAFYH3IAAgxIAKAAIAAAxgAlhG+IAAgzIAKAAIAAAzgAFYGTIAAgxIAKAAIAAAxgAlhFaIAAgzIAKAAIAAAzgAFYEwIAAgzIAKAAIAAAzgAlhD2IAAgzIAKAAIAAAzgAFYDMIAAgzIAKAAIAAAzgAlhCRIAAgxIAKAAIAAAxgAFYBoIAAgzIAKAAIAAAzgAlhAtIAAgvIAKAAIAAAvgAFYAEIAAgxIAKAAIAAAxgAlhg1IAAgxIAKAAIAAAxgAFYheIAAgyIAKAAIAAAygAlhiZIAAgxIAKAAIAAAxgAFYjDIAAgxIAKAAIAAAxgAlhj9IAAgyIAKAAIAAAygAFYknIAAgxIAKAAIAAAxgAlhlgIAAgzIAKAAIAAAzgAFYmLIAAgxIAKAAIAAAxgAlhnEIAAgzIAKAAIAAAzgAFYnvIAAgxIAKAAIAAAxgAlhooIAAgzIAKAAIAAAzgAFYpTIAAgyIAKAAIAAAygAlhqMIAAgzIAKAAIAAAzgAFYq2IAAgzIAKAAIAAAzgAlhrxIAAgxIAKAAIAAAxgAFYsaIAAgzIAKAAIAAAzg");
	this.shape_7.setTransform(176,176.6);
	this.shape_7._off = true;

	this.shape_7.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(4).to({_off:false},0).wait(31));

	// mask_touch (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_4 = new cjs.Graphics().p("AESV4IAA/OIGwAAIAAfOg");
	var mask_8_graphics_5 = new cjs.Graphics().p("ADYV4IAA/OIIkAAIAAfOg");
	var mask_8_graphics_6 = new cjs.Graphics().p("ACeV4IAA/OIKZAAIAAfOg");
	var mask_8_graphics_7 = new cjs.Graphics().p("ABkV4IAA/OIMNAAIAAfOg");
	var mask_8_graphics_8 = new cjs.Graphics().p("AAqV4IAA/OIOBAAIAAfOg");
	var mask_8_graphics_9 = new cjs.Graphics().p("AgOV4IAA/OIPzAAIAAfOg");
	var mask_8_graphics_10 = new cjs.Graphics().p("AhIV4IAA/OIRnAAIAAfOg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_8_graphics_4,x:70.7,y:140.1}).wait(1).to({graphics:mask_8_graphics_5,x:76.5,y:140.1}).wait(1).to({graphics:mask_8_graphics_6,x:82.3,y:140.1}).wait(1).to({graphics:mask_8_graphics_7,x:88.1,y:140.1}).wait(1).to({graphics:mask_8_graphics_8,x:93.9,y:140.1}).wait(1).to({graphics:mask_8_graphics_9,x:99.7,y:140.1}).wait(1).to({graphics:mask_8_graphics_10,x:105.5,y:140.1}).wait(25));

	// contour---
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AEqNVIAAgKIAxAAIAAAKgADGNVIAAgKIAxAAIAAAKgABiNVIAAgKIAxAAIAAAKgAAANVIAAgKIAvAAIAAAKgAhlNVIAAgKIAzAAIAAAKgAjJNVIAAgKIAzAAIAAAKgAktNVIAAgKIAzAAIAAAKgAD8tKIAAgKIAyAAIAAAKgACYtKIAAgKIAxAAIAAAKgAA0tKIAAgKIAxAAIAAAKgAgvtKIAAgKIAwAAIAAAKgAiTtKIAAgKIAzAAIAAAKgAj3tKIAAgKIAzAAIAAAKgAlbtKIAAgKIAzAAIAAAKg");
	this.shape_8.setTransform(176.2,176.4);
	this.shape_8._off = true;

	this.shape_8.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(4).to({_off:false},0).wait(31));

	// mask_contour (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_0 = new cjs.Graphics().p("ABAPWIAAmwIDWAAIAAGwg");
	var mask_9_graphics_1 = new cjs.Graphics().p("AhUPWIAAmwIIAAAIAAGwg");
	var mask_9_graphics_2 = new cjs.Graphics().p("AjqPWIAAmwIMsAAIAAGwg");
	var mask_9_graphics_3 = new cjs.Graphics().p("AmAPWIAAmwIRYAAIAAGwg");
	var mask_9_graphics_4 = new cjs.Graphics().p("AoWPWIAAmwIWEAAIAAGwg");
	var mask_9_graphics_5 = new cjs.Graphics().p("AqsPWIAAmwIawAAIAAGwg");
	var mask_9_graphics_6 = new cjs.Graphics().p("AtCPWIAAmwIfcAAIAAGwg");
	var mask_9_graphics_7 = new cjs.Graphics().p("AvYPWIAAmwMAkIAAAIAAGwg");
	var mask_9_graphics_8 = new cjs.Graphics().p("AxuPWIAAmwMAo0AAAIAAGwg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:mask_9_graphics_0,x:27.9,y:98.2}).wait(1).to({graphics:mask_9_graphics_1,x:42.9,y:98.2}).wait(1).to({graphics:mask_9_graphics_2,x:57.9,y:98.2}).wait(1).to({graphics:mask_9_graphics_3,x:72.9,y:98.2}).wait(1).to({graphics:mask_9_graphics_4,x:87.9,y:98.2}).wait(1).to({graphics:mask_9_graphics_5,x:102.9,y:98.2}).wait(1).to({graphics:mask_9_graphics_6,x:117.9,y:98.2}).wait(1).to({graphics:mask_9_graphics_7,x:132.9,y:98.2}).wait(1).to({graphics:mask_9_graphics_8,x:147.9,y:98.2}).wait(27));

	// contour
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AyvAEIAAgIMAlfAAAIAAAIg");
	this.shape_9.setTransform(175.7,176.2);

	this.shape_9.mask = mask_9;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(35));

	// mask_contour (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_0 = new cjs.Graphics().p("AIqahIAAmwIGwAAIAAGwg");
	var mask_10_graphics_1 = new cjs.Graphics().p("AIqahIAArcIGwAAIAALcg");
	var mask_10_graphics_2 = new cjs.Graphics().p("AIqahIAAwIIGwAAIAAQIg");
	var mask_10_graphics_3 = new cjs.Graphics().p("AIqahIAA00IGwAAIAAU0g");
	var mask_10_graphics_4 = new cjs.Graphics().p("AIqahIAA5gIGwAAIAAZgg");
	var mask_10_graphics_5 = new cjs.Graphics().p("AIqahIAA+KIGwAAIAAeKg");
	var mask_10_graphics_6 = new cjs.Graphics().p("AIqahMAAAgi2IGwAAMAAAAi2g");
	var mask_10_graphics_7 = new cjs.Graphics().p("AIqahMAAAgniIGwAAMAAAAnig");
	var mask_10_graphics_8 = new cjs.Graphics().p("AIqahMAAAgsOIGwAAMAAAAsOg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:mask_10_graphics_0,x:98.7,y:169.8}).wait(1).to({graphics:mask_10_graphics_1,x:98.7,y:169.8}).wait(1).to({graphics:mask_10_graphics_2,x:98.7,y:169.8}).wait(1).to({graphics:mask_10_graphics_3,x:98.7,y:169.8}).wait(1).to({graphics:mask_10_graphics_4,x:98.7,y:169.8}).wait(1).to({graphics:mask_10_graphics_5,x:98.7,y:169.8}).wait(1).to({graphics:mask_10_graphics_6,x:98.7,y:169.8}).wait(1).to({graphics:mask_10_graphics_7,x:98.7,y:169.8}).wait(1).to({graphics:mask_10_graphics_8,x:98.7,y:169.8}).wait(27));

	// contour
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgESwMAAAglfIAIAAMAAAAlfg");
	this.shape_10.setTransform(175.9,176.3);

	this.shape_10.mask = mask_10;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(35));

	// mask_contour (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("AGXUaIE6k6IE6E6Ik6E6g");
	var mask_11_graphics_1 = new cjs.Graphics().p("ADlSjIGwmwIGwGwImwGxg");
	var mask_11_graphics_2 = new cjs.Graphics().p("AAyQtIInonIInInIonIng");
	var mask_11_graphics_3 = new cjs.Graphics().p("Ah+O2IKbqdIKeKdIqeKeg");
	var mask_11_graphics_4 = new cjs.Graphics().p("AkxNAIMSsUIMVMUIsVMUg");
	var mask_11_graphics_5 = new cjs.Graphics().p("AnjLJIOJuJIOKOJIuLOLg");
	var mask_11_graphics_6 = new cjs.Graphics().p("AqWJTIQAwAIQBQAIwBQBg");
	var mask_11_graphics_7 = new cjs.Graphics().p("AtIHcIR2x2IR4R2Ix4R4g");
	var mask_11_graphics_8 = new cjs.Graphics().p("Av7FlITtzsITuTsIzuTvg");
	var mask_11_graphics_9 = new cjs.Graphics().p("AyoDwIVk1jIVlVjI1mVlg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:103.5,y:162}).wait(1).to({graphics:mask_11_graphics_1,x:109.4,y:162}).wait(1).to({graphics:mask_11_graphics_2,x:115.3,y:162}).wait(1).to({graphics:mask_11_graphics_3,x:121.1,y:162}).wait(1).to({graphics:mask_11_graphics_4,x:127,y:162}).wait(1).to({graphics:mask_11_graphics_5,x:132.9,y:162}).wait(1).to({graphics:mask_11_graphics_6,x:138.7,y:162}).wait(1).to({graphics:mask_11_graphics_7,x:144.6,y:162}).wait(1).to({graphics:mask_11_graphics_8,x:150.5,y:162}).wait(1).to({graphics:mask_11_graphics_9,x:156.9,y:162.1}).wait(26));

	// contour
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AlAMWQighAh6h7Qh6h6hCihQg9iZAAinQAAimA9iaQBCigB6h6QB6h6CghCQCag9CmAAQCnAACZA9QChBCB6B6QB7B6BACgQA+CaAACmQAACng+CZQhAChh7B6Qh7B7ifBAQiaA+inAAQimAAiag+gAk8sMQieBAh5B5Qh5B5hACeQg+CYABCkQgBClA+CYQBACeB5B5QB5B5CeBAQCYA9CkAAQClAACYg9QCehAB5h5QB5h5BAieQA9iYAAilQAAikg9iYQhAieh5h5Qh5h5iehAQiYg+ilABQikgBiYA+g");
	this.shape_11.setTransform(175.6,176.4);

	this.shape_11.mask = mask_11;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(35));

	// mask_contour (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_0 = new cjs.Graphics().p("AyAEZIAAmuMAqVAAAIAAGug");
	var mask_12_graphics_1 = new cjs.Graphics().p("AyAGGIAAqIMAqVAAAIAAKIg");
	var mask_12_graphics_2 = new cjs.Graphics().p("AyAHzIAAtiMAqVAAAIAANig");
	var mask_12_graphics_3 = new cjs.Graphics().p("AyAJgIAAw8MAqVAAAIAAQ8g");
	var mask_12_graphics_4 = new cjs.Graphics().p("AyALNIAA0WMAqVAAAIAAUWg");
	var mask_12_graphics_5 = new cjs.Graphics().p("AyAM6IAA3wMAqVAAAIAAXwg");
	var mask_12_graphics_6 = new cjs.Graphics().p("AyAOoIAA7MMAqVAAAIAAbMg");
	var mask_12_graphics_7 = new cjs.Graphics().p("AyAQVIAA+mMAqVAAAIAAemg");
	var mask_12_graphics_8 = new cjs.Graphics().p("AyASCMAAAgiAMAqVAAAMAAAAiAg");
	var mask_12_graphics_9 = new cjs.Graphics().p("AyATvMAAAglaMAqVAAAMAAAAlag");
	var mask_12_graphics_10 = new cjs.Graphics().p("AyAVcMAAAgo0MAqVAAAMAAAAo0g");
	var mask_12_graphics_11 = new cjs.Graphics().p("AyAXJMAAAgsOMAqVAAAMAAAAsOg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:mask_12_graphics_0,x:155.8,y:28.2}).wait(1).to({graphics:mask_12_graphics_1,x:155.8,y:39.1}).wait(1).to({graphics:mask_12_graphics_2,x:155.8,y:50}).wait(1).to({graphics:mask_12_graphics_3,x:155.8,y:60.9}).wait(1).to({graphics:mask_12_graphics_4,x:155.8,y:71.8}).wait(1).to({graphics:mask_12_graphics_5,x:155.8,y:82.7}).wait(1).to({graphics:mask_12_graphics_6,x:155.8,y:93.6}).wait(1).to({graphics:mask_12_graphics_7,x:155.8,y:104.5}).wait(1).to({graphics:mask_12_graphics_8,x:155.8,y:115.4}).wait(1).to({graphics:mask_12_graphics_9,x:155.8,y:126.3}).wait(1).to({graphics:mask_12_graphics_10,x:155.8,y:137.2}).wait(1).to({graphics:mask_12_graphics_11,x:155.8,y:148.2}).wait(24));

	// contour
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("Ay2AAIS2y2IS2S2Iy2S3gAynAAISnSoISpyoIypyng");
	this.shape_12.setTransform(175.4,176.2);

	this.shape_12.mask = mask_12;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(35));

	// background_alpha
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0)").s().p("A7VbWMAAAg2rMA2rAAAMAAAA2rg");
	this.shape_13.setTransform(175,175);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,350);


// stage content:
(lib.ico_planerovki = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ico_template
	this.instance = new lib.ico_template_3("synched",0);
	this.instance.setTransform(175,175,1,1,0,0,0,175,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(175,175,350,350);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;