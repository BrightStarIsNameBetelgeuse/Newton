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
	this.shape.addEventListener("click", function(event) { alert("clicked"); })

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,241,234.9);


(lib.ico_template_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_contour - копия: 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_15 = new cjs.Graphics().p("ABtJDIAAmwIMfAAIAAGwg");
	var mask_graphics_16 = new cjs.Graphics().p("ABtLCIAAq8IMfAAIAAK8g");
	var mask_graphics_17 = new cjs.Graphics().p("ABtNBIAAvFIMfAAIAAPFg");
	var mask_graphics_18 = new cjs.Graphics().p("ABtPBIAAzRIMfAAIAATRg");
	var mask_graphics_19 = new cjs.Graphics().p("ABtRAIAA3cIMfAAIAAXcg");
	var mask_graphics_20 = new cjs.Graphics().p("ABtS/IAA7nIMfAAIAAbng");
	var mask_graphics_21 = new cjs.Graphics().p("ABtU/IAA/zIMfAAIAAfzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:90.8,y:57.9}).wait(1).to({graphics:mask_graphics_16,x:90.8,y:70.6}).wait(1).to({graphics:mask_graphics_17,x:90.8,y:83.4}).wait(1).to({graphics:mask_graphics_18,x:90.8,y:96.1}).wait(1).to({graphics:mask_graphics_19,x:90.8,y:108.9}).wait(1).to({graphics:mask_graphics_20,x:90.8,y:121.6}).wait(1).to({graphics:mask_graphics_21,x:90.8,y:134.3}).wait(14));

	// contour
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AEFL0QiXh6h6jSQh8jShDj3QgtipgOimQgPimASiYIABgDIADgBQDzhIEVAAIAFAAIAAX1gAj5qpQgRCWAOCkQAOClAtCnQBCDyB4DOQB3DOCUB7IAA3WQkPABjuBGg");
	this.shape.setTransform(149.5,192.3);
	this.shape._off = true;

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15).to({_off:false},0).wait(20));

	// mask_contour - копия: 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_15 = new cjs.Graphics().p("AGkV1IEykyIExExIkxEyg");
	var mask_1_graphics_16 = new cjs.Graphics().p("ACBS0IHynxIHyHxInyHyg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AigP0IKwqyIKyKyIqyKzg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AnDM0INwtwINzNwItzNzg");
	var mask_1_graphics_19 = new cjs.Graphics().p("ArmJ0IQwwwIQzQwIwzQzg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AwKG0ITxzxITzTxIzzTzg");
	var mask_1_graphics_21 = new cjs.Graphics().p("A0tDzIWy2yIWzWyI2zWzg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_1_graphics_15,x:103.2,y:170.2}).wait(1).to({graphics:mask_1_graphics_16,x:112.5,y:170.3}).wait(1).to({graphics:mask_1_graphics_17,x:121.9,y:170.3}).wait(1).to({graphics:mask_1_graphics_18,x:131.2,y:170.3}).wait(1).to({graphics:mask_1_graphics_19,x:140.6,y:170.4}).wait(1).to({graphics:mask_1_graphics_20,x:149.9,y:170.4}).wait(1).to({graphics:mask_1_graphics_21,x:159.2,y:170.3}).wait(14));

	// contour
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgBNfQi3h9iSjrQiTjqhOkgQg0jDgNi+QgMi/AbisIABgDIADgBQEVhdFEAAQFFAAEWBdIACABIABADQAbCsgMC/QgNC+g0DDQhOEgiSDqQiTDri3B9IgCACgApTr6QgbCqANC9QANC9AzDBQBNEcCRDpQCRDoCyB9QC0h9CRjoQCQjpBNkcQA0jBANi9QAMi8gairQkThclCAAQlBAAkSBcg");
	this.shape_1.setTransform(176,193.2);
	this.shape_1._off = true;

	this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(15).to({_off:false},0).wait(20));

	// mask_contour - копия (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_9 = new cjs.Graphics().p("AgjLHIAAmwIGuAAIAAGwg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AjCLHIAAmwILsAAIAAGwg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AlgLHIAAmwIQpAAIAAGwg");
	var mask_2_graphics_12 = new cjs.Graphics().p("An/LHIAAmwIVnAAIAAGwg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AqeLHIAAmwIalAAIAAGwg");
	var mask_2_graphics_14 = new cjs.Graphics().p("As9LHIAAmwIfiAAIAAGwg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AvcLHIAAmwMAkgAAAIAAGwg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_9,x:39.6,y:71.1}).wait(1).to({graphics:mask_2_graphics_10,x:55.5,y:71.1}).wait(1).to({graphics:mask_2_graphics_11,x:71.3,y:71.1}).wait(1).to({graphics:mask_2_graphics_12,x:87.2,y:71.1}).wait(1).to({graphics:mask_2_graphics_13,x:103.1,y:71.1}).wait(1).to({graphics:mask_2_graphics_14,x:119,y:71.1}).wait(1).to({graphics:mask_2_graphics_15,x:134.9,y:71.1}).wait(20));

	// contour
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AOtCHIAGgIIAFAEIgFAIgAu4CDIAqgdIAFAIIgpAdgANaBQIAFgJQAUAMAWAPIgFAIgAtkBLIAsgZIAEAJIgrAYgAMCAhIAEgJIAtAXIgEAIgAsMAbIAugWIAEAKIgtAVgAKngGIADgJQAYAJAXAJIgEAJgAqwgMIAugSIADAJIguASgAJJgnIAEgKIAvAQIgDAKgApTgvIAwgPIAEAKIgwAPgAHqhDIACgKIAwANIgDAKgAnyhLQAZgHAXgFIACAJIgwAMgAGJhaIABgKIAyALIgDAKgAmQhiIAwgKIACAKIgwAKgAEmhrIABgKIAyAIIgBAKgAkuh0IAygGIABAKIgxAGgADDh3IABgKIAyAGIgBAKgAjKiAIAxgEIABAKIgxAEgABgh+IAAgKIAyADIAAAKgAhmiHIAxgCIABAKIgyACgAgCiAIAAgKIAwABIgBAKg");
	this.shape_2.setTransform(174.5,120.5);
	this.shape_2._off = true;

	this.shape_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(9).to({_off:false},0).wait(26));

	// mask_contour (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_9 = new cjs.Graphics().p("ARsTrIAAmwIGwAAIAAGwg");
	var mask_3_graphics_10 = new cjs.Graphics().p("AMvTrIAAmwILtAAIAAGwg");
	var mask_3_graphics_11 = new cjs.Graphics().p("AHxTrIAAmwIQrAAIAAGwg");
	var mask_3_graphics_12 = new cjs.Graphics().p("ACzTrIAAmwIVpAAIAAGwg");
	var mask_3_graphics_13 = new cjs.Graphics().p("AiITrIAAmwIakAAIAAGwg");
	var mask_3_graphics_14 = new cjs.Graphics().p("AnGTrIAAmwIfiAAIAAGwg");
	var mask_3_graphics_15 = new cjs.Graphics().p("AsETrIAAmwMAkgAAAIAAGwg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_3_graphics_9,x:156.5,y:125.9}).wait(1).to({graphics:mask_3_graphics_10,x:156.5,y:125.9}).wait(1).to({graphics:mask_3_graphics_11,x:156.5,y:125.9}).wait(1).to({graphics:mask_3_graphics_12,x:156.5,y:125.9}).wait(1).to({graphics:mask_3_graphics_13,x:156.5,y:125.9}).wait(1).to({graphics:mask_3_graphics_14,x:156.5,y:125.9}).wait(1).to({graphics:mask_3_graphics_15,x:156.5,y:125.9}).wait(20));

	// contour
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AguCKIABgKIAwABIAAAKgAA0CAIAzgCIAAAKIgyACgAiRCFIAAgJQAZACAZAAIAAAKIgygDgACYB7IAygEIABAKIgyAEgAj1B8IABgKIAyAFIgCALgAD7ByIAygIIACAKIgyAIgAlYBtIABgJIAyAHIgCAKgAFeBiIAxgJIACAKIgxAJgAm6BaIABgKIAxAKIgCAKgAHABPIAxgMIACAJIgxAMgAocBAIADgJIAwANIgCAKgAIhA1IAvgPIADAJIgwAPgAp7AiIADgKIAvARIgCAJgAJ/AWIAvgSIADAJQgTAIgbAKgArZgBIAFgKQAVAKAZAIIgEAJgALcgOIAtgVIAEAJIguAVgAszgtIAFgJIAtAWIgFAJIgtgWgAM1g6QAagOAQgKIAGAIIgsAZgAuJhhIAFgJIArAbIgGAIgAOJhtQARgLAZgSIAFAIIgoAdgAu4iCIAGgIIAGAEIgGAIg");
	this.shape_3.setTransform(174.5,232.3);
	this.shape_3._off = true;

	this.shape_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(9).to({_off:false},0).wait(26));

	// mask_touch (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AgBNfQi3h9iSjrQiTjqhOkgQg0jDgNi+QgMi/AbisIABgDIADgBQEVhdFEAAQFFAAEWBdIACABIABADQAbCsgMC/QgNC+g0DDQhOEgiSDqQiTDri3B9IgCACgAoCqyQgRCWAOCkQAOClAtCnQBCDyB4DOQB5DOCUB7IAA3WQkRABjuBGg");
	mask_4.setTransform(176,193.2);

	// touch
	this.instance = new lib.touch("synched",0);
	this.instance.setTransform(259.8,90.4,1,0.088,45,0,0,119.5,-0.8);
	this.instance._off = true;

	this.instance.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).to({regX:119.4,scaleX:1,scaleY:0.45,rotation:44.9,x:259.7,y:90.3},2).to({regX:119.5,regY:-0.9,scaleX:1,scaleY:0.67,x:259.9},2).to({regX:119.4,regY:-0.8,scaleY:0.8,x:259.7},2).to({scaleY:0.9,y:90.4},2).to({scaleY:0.97,y:90.3},2).to({regX:119.5,regY:-0.6,scaleX:1,scaleY:1,rotation:45,x:259.8,y:90.4},2).wait(1));

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
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AIlJcIAAgJIAyAAIAAAJgAHBJcIAAgJIAyAAIAAAJgAFdJcIAAgJIAyAAIAAAJgAD5JcIAAgJIAyAAIAAAJgACVJcIAAgJIAyAAIAAAJgAAxJcIAAgJIAyAAIAAAJgAgxJcIAAgJIAxAAIAAAJgAiVJcIAAgJIAyAAIAAAJgAj5JcIAAgJIAyAAIAAAJgAldJcIAAgJIAyAAIAAAJgAnBJcIAAgJIAyAAIAAAJgAolJcIAAgJIAyAAIAAAJgAH0pRIAAgKIAyAAIAAAKgAGQpRIAAgKIAyAAIAAAKgAEspRIAAgKIAyAAIAAAKgADIpRIAAgKIAyAAIAAAKgABkpRIAAgKIAyAAIAAAKgAAApRIAAgKIAyAAIAAAKgAhipRIAAgKIAyAAIAAAKgAjGpRIAAgKIAyAAIAAAKgAkqpRIAAgKIAyAAIAAAKgAmOpRIAAgKIAyAAIAAAKgAnypRIAAgKIAyAAIAAAKgApWpRIAAgKIAyAAIAAAKg");
	this.shape_4.setTransform(175.8,176.3);
	this.shape_4._off = true;

	this.shape_4.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(2).to({_off:false},0).wait(33));

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
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("ApbJXIAAgyIAKAAIAAAygAJSImIAAgyIAKAAIAAAygApbHzIAAgyIAKAAIAAAygAJSHCIAAgyIAKAAIAAAygApbGPIAAgyIAKAAIAAAygAJSFeIAAgyIAKAAIAAAygApbErIAAgyIAKAAIAAAygAJSD6IAAgyIAKAAIAAAygApbDHIAAgyIAKAAIAAAygAJSCWIAAgyIAKAAIAAAygApbBjIAAgyIAKAAIAAAygAJSAyIAAgyIAKAAIAAAygApbAAIAAgxIAKAAIAAAxgAJSgwIAAgyIAKAAIAAAygApbhjIAAgyIAKAAIAAAygAJSiUIAAgyIAKAAIAAAygApbjHIAAgyIAKAAIAAAygAJSj4IAAgyIAKAAIAAAygApbkrIAAgyIAKAAIAAAygAJSlcIAAgyIAKAAIAAAygApbmPIAAgyIAKAAIAAAygAJSnAIAAgyIAKAAIAAAygApbnzIAAgyIAKAAIAAAygAJSokIAAgyIAKAAIAAAyg");
	this.shape_5.setTransform(175.9,176.3);
	this.shape_5._off = true;

	this.shape_5.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(2).to({_off:false},0).wait(33));

	// mask_contour (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_0 = new cjs.Graphics().p("ABAPWIAAmwIDWAAIAAGwg");
	var mask_7_graphics_1 = new cjs.Graphics().p("AhUPWIAAmwIIAAAIAAGwg");
	var mask_7_graphics_2 = new cjs.Graphics().p("AjqPWIAAmwIMsAAIAAGwg");
	var mask_7_graphics_3 = new cjs.Graphics().p("AmAPWIAAmwIRYAAIAAGwg");
	var mask_7_graphics_4 = new cjs.Graphics().p("AoWPWIAAmwIWEAAIAAGwg");
	var mask_7_graphics_5 = new cjs.Graphics().p("AqsPWIAAmwIawAAIAAGwg");
	var mask_7_graphics_6 = new cjs.Graphics().p("AtCPWIAAmwIfcAAIAAGwg");
	var mask_7_graphics_7 = new cjs.Graphics().p("AvYPWIAAmwMAkIAAAIAAGwg");
	var mask_7_graphics_8 = new cjs.Graphics().p("AxuPWIAAmwMAo0AAAIAAGwg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:mask_7_graphics_0,x:27.9,y:98.2}).wait(1).to({graphics:mask_7_graphics_1,x:42.9,y:98.2}).wait(1).to({graphics:mask_7_graphics_2,x:57.9,y:98.2}).wait(1).to({graphics:mask_7_graphics_3,x:72.9,y:98.2}).wait(1).to({graphics:mask_7_graphics_4,x:87.9,y:98.2}).wait(1).to({graphics:mask_7_graphics_5,x:102.9,y:98.2}).wait(1).to({graphics:mask_7_graphics_6,x:117.9,y:98.2}).wait(1).to({graphics:mask_7_graphics_7,x:132.9,y:98.2}).wait(1).to({graphics:mask_7_graphics_8,x:147.9,y:98.2}).wait(27));

	// contour
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AyvAEIAAgIMAlfAAAIAAAIg");
	this.shape_6.setTransform(175.7,176.2);

	this.shape_6.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(35));

	// mask_contour (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_0 = new cjs.Graphics().p("AIqahIAAmwIGwAAIAAGwg");
	var mask_8_graphics_1 = new cjs.Graphics().p("AIqahIAArcIGwAAIAALcg");
	var mask_8_graphics_2 = new cjs.Graphics().p("AIqahIAAwIIGwAAIAAQIg");
	var mask_8_graphics_3 = new cjs.Graphics().p("AIqahIAA00IGwAAIAAU0g");
	var mask_8_graphics_4 = new cjs.Graphics().p("AIqahIAA5gIGwAAIAAZgg");
	var mask_8_graphics_5 = new cjs.Graphics().p("AIqahIAA+KIGwAAIAAeKg");
	var mask_8_graphics_6 = new cjs.Graphics().p("AIqahMAAAgi2IGwAAMAAAAi2g");
	var mask_8_graphics_7 = new cjs.Graphics().p("AIqahMAAAgniIGwAAMAAAAnig");
	var mask_8_graphics_8 = new cjs.Graphics().p("AIqahMAAAgsOIGwAAMAAAAsOg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:mask_8_graphics_0,x:98.7,y:169.8}).wait(1).to({graphics:mask_8_graphics_1,x:98.7,y:169.8}).wait(1).to({graphics:mask_8_graphics_2,x:98.7,y:169.8}).wait(1).to({graphics:mask_8_graphics_3,x:98.7,y:169.8}).wait(1).to({graphics:mask_8_graphics_4,x:98.7,y:169.8}).wait(1).to({graphics:mask_8_graphics_5,x:98.7,y:169.8}).wait(1).to({graphics:mask_8_graphics_6,x:98.7,y:169.8}).wait(1).to({graphics:mask_8_graphics_7,x:98.7,y:169.8}).wait(1).to({graphics:mask_8_graphics_8,x:98.7,y:169.8}).wait(27));

	// contour
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgESwMAAAglfIAIAAMAAAAlfg");
	this.shape_7.setTransform(175.9,176.3);

	this.shape_7.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(35));

	// mask_contour (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_0 = new cjs.Graphics().p("AGXUaIE6k6IE6E6Ik6E6g");
	var mask_9_graphics_1 = new cjs.Graphics().p("ADlSjIGwmwIGwGwImwGxg");
	var mask_9_graphics_2 = new cjs.Graphics().p("AAyQtIInonIInInIonIng");
	var mask_9_graphics_3 = new cjs.Graphics().p("Ah+O2IKbqdIKeKdIqeKeg");
	var mask_9_graphics_4 = new cjs.Graphics().p("AkxNAIMSsUIMVMUIsVMUg");
	var mask_9_graphics_5 = new cjs.Graphics().p("AnjLJIOJuJIOKOJIuLOLg");
	var mask_9_graphics_6 = new cjs.Graphics().p("AqWJTIQAwAIQBQAIwBQBg");
	var mask_9_graphics_7 = new cjs.Graphics().p("AtIHcIR2x2IR4R2Ix4R4g");
	var mask_9_graphics_8 = new cjs.Graphics().p("Av7FlITtzsITuTsIzuTvg");
	var mask_9_graphics_9 = new cjs.Graphics().p("AyoDwIVk1jIVlVjI1mVlg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:mask_9_graphics_0,x:103.5,y:162}).wait(1).to({graphics:mask_9_graphics_1,x:109.4,y:162}).wait(1).to({graphics:mask_9_graphics_2,x:115.3,y:162}).wait(1).to({graphics:mask_9_graphics_3,x:121.1,y:162}).wait(1).to({graphics:mask_9_graphics_4,x:127,y:162}).wait(1).to({graphics:mask_9_graphics_5,x:132.9,y:162}).wait(1).to({graphics:mask_9_graphics_6,x:138.7,y:162}).wait(1).to({graphics:mask_9_graphics_7,x:144.6,y:162}).wait(1).to({graphics:mask_9_graphics_8,x:150.5,y:162}).wait(1).to({graphics:mask_9_graphics_9,x:156.9,y:162.1}).wait(26));

	// contour
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AlAMWQighAh6h7Qh6h6hCihQg9iZAAinQAAimA9iaQBCigB6h6QB6h6CghCQCag9CmAAQCnAACZA9QChBCB6B6QB7B6BACgQA+CaAACmQAACng+CZQhAChh7B6Qh7B7ifBAQiaA+inAAQimAAiag+gAk8sMQieBAh5B5Qh5B5hACeQg+CYABCkQgBClA+CYQBACeB5B5QB5B5CeBAQCYA9CkAAQClAACYg9QCehAB5h5QB5h5BAieQA9iYAAilQAAikg9iYQhAieh5h5Qh5h5iehAQiYg+ilABQikgBiYA+g");
	this.shape_8.setTransform(175.6,176.4);

	this.shape_8.mask = mask_9;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(35));

	// mask_contour (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_0 = new cjs.Graphics().p("AyAEZIAAmuMAqVAAAIAAGug");
	var mask_10_graphics_1 = new cjs.Graphics().p("AyAGGIAAqIMAqVAAAIAAKIg");
	var mask_10_graphics_2 = new cjs.Graphics().p("AyAHzIAAtiMAqVAAAIAANig");
	var mask_10_graphics_3 = new cjs.Graphics().p("AyAJgIAAw8MAqVAAAIAAQ8g");
	var mask_10_graphics_4 = new cjs.Graphics().p("AyALNIAA0WMAqVAAAIAAUWg");
	var mask_10_graphics_5 = new cjs.Graphics().p("AyAM6IAA3wMAqVAAAIAAXwg");
	var mask_10_graphics_6 = new cjs.Graphics().p("AyAOoIAA7MMAqVAAAIAAbMg");
	var mask_10_graphics_7 = new cjs.Graphics().p("AyAQVIAA+mMAqVAAAIAAemg");
	var mask_10_graphics_8 = new cjs.Graphics().p("AyASCMAAAgiAMAqVAAAMAAAAiAg");
	var mask_10_graphics_9 = new cjs.Graphics().p("AyATvMAAAglaMAqVAAAMAAAAlag");
	var mask_10_graphics_10 = new cjs.Graphics().p("AyAVcMAAAgo0MAqVAAAMAAAAo0g");
	var mask_10_graphics_11 = new cjs.Graphics().p("AyAXJMAAAgsOMAqVAAAMAAAAsOg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:mask_10_graphics_0,x:155.8,y:28.2}).wait(1).to({graphics:mask_10_graphics_1,x:155.8,y:39.1}).wait(1).to({graphics:mask_10_graphics_2,x:155.8,y:50}).wait(1).to({graphics:mask_10_graphics_3,x:155.8,y:60.9}).wait(1).to({graphics:mask_10_graphics_4,x:155.8,y:71.8}).wait(1).to({graphics:mask_10_graphics_5,x:155.8,y:82.7}).wait(1).to({graphics:mask_10_graphics_6,x:155.8,y:93.6}).wait(1).to({graphics:mask_10_graphics_7,x:155.8,y:104.5}).wait(1).to({graphics:mask_10_graphics_8,x:155.8,y:115.4}).wait(1).to({graphics:mask_10_graphics_9,x:155.8,y:126.3}).wait(1).to({graphics:mask_10_graphics_10,x:155.8,y:137.2}).wait(1).to({graphics:mask_10_graphics_11,x:155.8,y:148.2}).wait(24));

	// contour
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ay2AAIS2y2IS2S2Iy2S3gAynAAISnSoISpyoIypyng");
	this.shape_9.setTransform(175.4,176.2);

	this.shape_9.mask = mask_10;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(35));

	// background_alpha
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0)").s().p("A7VbWMAAAg2rMA2rAAAMAAAA2rg");
	this.shape_10.setTransform(175,175);


	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,350);


// stage content:
(lib.ico_bezopasnost = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ico_template
	this.instance = new lib.ico_template_1("synched",0);
	this.instance.setTransform(175,175,1,1,0,0,0,175,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).call(function(){console.log('111')}));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(175,175,350,350);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;