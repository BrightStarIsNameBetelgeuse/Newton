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


(lib.ico_template_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask_contour - копия: 2 - копия (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_15 = new cjs.Graphics().p("AA4R/IAAxUIGwAAIAARUg");
	var mask_graphics_16 = new cjs.Graphics().p("Ag8R/IAAxUIKUAAIAARUg");
	var mask_graphics_17 = new cjs.Graphics().p("AiyR/IAAxUIN5AAIAARUg");
	var mask_graphics_18 = new cjs.Graphics().p("AkoR/IAAxUIRfAAIAARUg");
	var mask_graphics_19 = new cjs.Graphics().p("AmeR/IAAxUIVEAAIAARUg");
	var mask_graphics_20 = new cjs.Graphics().p("AoTR/IAAxUIYpAAIAARUg");
	var mask_graphics_21 = new cjs.Graphics().p("AqJR/IAAxUIcOAAIAARUg");
	var mask_graphics_22 = new cjs.Graphics().p("Ar/R/IAAxUIf0AAIAARUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_graphics_15,x:48.9,y:115.1}).wait(1).to({graphics:mask_graphics_16,x:60,y:115.1}).wait(1).to({graphics:mask_graphics_17,x:71.2,y:115.1}).wait(1).to({graphics:mask_graphics_18,x:82.3,y:115.1}).wait(1).to({graphics:mask_graphics_19,x:93.5,y:115.1}).wait(1).to({graphics:mask_graphics_20,x:104.6,y:115.1}).wait(1).to({graphics:mask_graphics_21,x:115.8,y:115.1}).wait(1).to({graphics:mask_graphics_22,x:126.9,y:115.1}).wait(13));

	// contour
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AlAG2QighAh6h7QhuhthAiMIgBgCIABgBQBAiMBuhtQB6h7CghBQCag+CmAAQCnAACZA+QChBBB6B7QBtBtBBCMIABABIgBACQhBCMhtBtQh7B7ifBAQibA/imAAQimAAiag/gAk8msQieBAh5B5QhsBrg/CIQA/CIBsBsQB5B5CeBAQCYA+CkAAQClAACYg+QCehAB5h5QBshsA/iIQhAiIhrhrQh5h5iehAQiYg+ilAAQikAAiYA+g");
	this.shape.setTransform(175.5,176.4);
	this.shape._off = true;

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15).to({_off:false},0).wait(20));

	// mask_contour - копия: 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_4 = new cjs.Graphics().p("ApJYlIAAmwIe0AAIAAGwg");
	var mask_1_graphics_5 = new cjs.Graphics().p("ApJYlIAApCIe0AAIAAJCg");
	var mask_1_graphics_6 = new cjs.Graphics().p("ApJYlIAArUIe0AAIAALUg");
	var mask_1_graphics_7 = new cjs.Graphics().p("ApJYlIAAtlIe0AAIAANlg");
	var mask_1_graphics_8 = new cjs.Graphics().p("ApJYlIAAv3Ie0AAIAAP3g");
	var mask_1_graphics_9 = new cjs.Graphics().p("ApJYlIAAyJIe0AAIAASJg");
	var mask_1_graphics_10 = new cjs.Graphics().p("ApJYlIAA0bIe0AAIAAUbg");
	var mask_1_graphics_11 = new cjs.Graphics().p("ApJYlIAA2tIe0AAIAAWtg");
	var mask_1_graphics_12 = new cjs.Graphics().p("ApJYlIAA49Ie0AAIAAY9g");
	var mask_1_graphics_13 = new cjs.Graphics().p("ApJYlIAA7PIe0AAIAAbPg");
	var mask_1_graphics_14 = new cjs.Graphics().p("ApJYlIAA9hIe0AAIAAdhg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_1_graphics_4,x:138.7,y:157.4}).wait(1).to({graphics:mask_1_graphics_5,x:138.7,y:157.4}).wait(1).to({graphics:mask_1_graphics_6,x:138.7,y:157.4}).wait(1).to({graphics:mask_1_graphics_7,x:138.7,y:157.4}).wait(1).to({graphics:mask_1_graphics_8,x:138.7,y:157.4}).wait(1).to({graphics:mask_1_graphics_9,x:138.7,y:157.4}).wait(1).to({graphics:mask_1_graphics_10,x:138.7,y:157.4}).wait(1).to({graphics:mask_1_graphics_11,x:138.7,y:157.4}).wait(1).to({graphics:mask_1_graphics_12,x:138.7,y:157.4}).wait(1).to({graphics:mask_1_graphics_13,x:138.7,y:157.4}).wait(1).to({graphics:mask_1_graphics_14,x:138.7,y:157.4}).wait(21));

	// contour
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ap+KyIAIgGIAiAkIgHAHQgQgQgTgVgAJ1KvIAggmIAHAGIggAngAq8JjIAIgFIAeAoIgIAGQgRgWgNgTgAKyJhQARgYALgRIAIAFIgcAqgArwIOIAJgFIAYArIgIAFIgZgrgALnINIAWgtIAJAFIgXAtgAsaGyIAJgDIATAtIgJAFgAMQGzQAJgWAIgZIAKADIgRAvgAs5FTIAKgDIANAwIgJADgAMvFUIAMgwIAJACIgLAxgAtMDwIAKgBIAIAxIgKACQgGgggCgSgANDDzQAEgcABgWIAKABQgBAXgEAbgAtUCMIAKAAIACAxIgKABIgCgygANLCQIAAgyIAKAAIAAAygAtTBZIADgyIAKABIgDAygANBgDIAKgBIAGAvIgKABIgGgvgAtJgJQADgTAGgeIAKACIgJAxgAMshkIAKgDQAGAXAGAaIgKACIgMgwgAs0hrIAQgwIAJAEQgIAWgHAZgAMMjCIAJgEIASAvIgKAEQgHgYgKgXgAsSjKIAUgtIAJAEIgUAtgALhkbIAJgFIAXAsIgJAFIgXgsgArmkkIAagrIAIAFQgOAXgLAUgAKrlvIAJgGIAcAqIgJAFQgSgcgKgNgAqwl5IAfgnIAIAGIgfAngAJtm8IAHgHQATAVAOARIgIAHIgggmgApwnGIAkgkIAHAHIgjAkgAIloBIAHgHIAlAhIgHAIQgSgSgTgQgAonoMIAngfIAGAIQgTAOgTARgAHWo9IAGgIIApAdIgGAIgAnXpIIArgbIAFAJIgqAagAGBpwIAEgJIAsAZIgFAIgAmAp7IAtgVIAEAJIgtAVgAEmqYIADgJIAvATIgEAJQgcgMgSgHgAkkqjIAwgQIADAKQgTAFgdALgADGq1IADgKQAXAGAZAIIgDAJQgYgIgYgFgAjErAIAxgKIACAKQgfAGgRAEgABlrGIABgKIAyAHIgCAKQgbgFgWgCgAhhrRIAygEIABAKIgyAEgAACrMIAAgKQAZAAAZABIgBAKQgYgBgZAAg");
	this.shape_1.setTransform(175.7,198.8);
	this.shape_1._off = true;

	this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(4).to({_off:false},0).wait(31));

	// mask_contour - копия (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_4 = new cjs.Graphics().p("AnQGUIAAmuIboAAIAAGug");
	var mask_2_graphics_5 = new cjs.Graphics().p("AnQHdIAApBIboAAIAAJBg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AnQImIAArTIboAAIAALTg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AnQJvIAAtlIboAAIAANlg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AnQK4IAAv3IboAAIAAP3g");
	var mask_2_graphics_9 = new cjs.Graphics().p("AnQMBIAAyJIboAAIAASJg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AnQNKIAA0bIboAAIAAUbg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AnQOTIAA2tIboAAIAAWtg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AnQPcIAA4/IboAAIAAY/g");
	var mask_2_graphics_13 = new cjs.Graphics().p("AnQQlIAA7RIboAAIAAbRg");
	var mask_2_graphics_14 = new cjs.Graphics().p("AnQRuIAA9jIboAAIAAdjg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_2_graphics_4,x:130.5,y:40.4}).wait(1).to({graphics:mask_2_graphics_5,x:130.5,y:47.7}).wait(1).to({graphics:mask_2_graphics_6,x:130.5,y:55}).wait(1).to({graphics:mask_2_graphics_7,x:130.5,y:62.3}).wait(1).to({graphics:mask_2_graphics_8,x:130.5,y:69.6}).wait(1).to({graphics:mask_2_graphics_9,x:130.5,y:76.9}).wait(1).to({graphics:mask_2_graphics_10,x:130.5,y:84.2}).wait(1).to({graphics:mask_2_graphics_11,x:130.5,y:91.5}).wait(1).to({graphics:mask_2_graphics_12,x:130.5,y:98.8}).wait(1).to({graphics:mask_2_graphics_13,x:130.5,y:106.1}).wait(1).to({graphics:mask_2_graphics_14,x:130.5,y:113.4}).wait(21));

	// contour
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgzLWIABgKQAZABAZAAIAAAKQgaAAgZgBgAAvLMIAygEIABAKIgyAEgAiWLKIABgKIAxAHIgBAKQgbgDgWgEgACSLBIAxgKIACAJQgYAGgZAFgAj4KyIADgJIAwANIgDAKQgagHgWgHgADzKqIAvgQIADAKQgbAJgVAGgAlXKPIAEgJIAvATIgEAJgAFQKIIAtgVIAEAJIgtAVgAmwJhIAFgIQAVANAXALIgFAIQgYgMgUgMgAGoJbQAVgMAVgOIAGAIQgYAQgTAKgAoDIpIAGgIIAoAdIgGAIIgogdgAH7IkIAngfIAGAHQgVASgSAOgApQHnIAHgHIAlAiIgHAHIglgigAJHHkIAigkIAIAHQgUAWgQAOgAqUGdIAIgGQAVAZAMANIgIAGQgOgPgTgXgAKKGbIAfgnIAIAFIgfAogArPFMIAJgFIAcApIgIAGQgOgTgPgXgALFFLIAagrIAIAFQgKASgQAZgAsAD0IAJgEIAXAsIgIAFgAL2D0IAUgtIAKAEIgVAtgAsmCYIAKgEIARAvIgJAEgAMcCYQAIgWAHgZIAKADQgHAZgIAWgAtBA3IAKgCIAMAwIgKADIgMgxgAM3A5IAKgxIAJABQgEAdgFAVgAtQgrIAKgBIAGAwIgKABIgGgwgANHgnQACgWABgcIAKAAIgDAzgAtUiPIAKAAIABAyIgKAAgANLiLIgCgxIAKgBIACAygAtRjBIAFgyIAKABQgCAQgDAigAM7kfIAKgCIAIAyIgJABIgJgxgAtDklIALgxIAKADIgLAwgAMjl/IAJgDQAJAcAFAUIgKADIgNgwgAsqmGIARgvIAKADIgRAvgAL/nbIAJgFIATAvIgJADQgIgWgLgXgAsFnkIAXgtIAJAFIgXAtgALQozIAJgFIAYArIgIAFQgPgbgKgQgArVo8IAcgqIAIAGIgcApgAKXqFIAIgGQAQAUAOAVIgIAFIgegogAqbqOIAggnIAIAHIggAmgAJVrPIAIgHIAiAkIgIAHQgNgPgVgVg");
	this.shape_2.setTransform(175.7,153.6);
	this.shape_2._off = true;

	this.shape_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(4).to({_off:false},0).wait(31));

	// mask_contour (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_15 = new cjs.Graphics().p("ARSNzIAApEIE1AAIAAJEg");
	var mask_3_graphics_16 = new cjs.Graphics().p("AN0NzIAApEIITAAIAAJEg");
	var mask_3_graphics_17 = new cjs.Graphics().p("AKWNzIAApEILxAAIAAJEg");
	var mask_3_graphics_18 = new cjs.Graphics().p("AG3NzIAApEIPQAAIAAJEg");
	var mask_3_graphics_19 = new cjs.Graphics().p("ADZNzIAApEISuAAIAAJEg");
	var mask_3_graphics_20 = new cjs.Graphics().p("AgENzIAApEIWLAAIAAJEg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AjiNzIAApEIZpAAIAAJEg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AnANzIAApEIdHAAIAAJEg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_3_graphics_15,x:141.6,y:88.3}).wait(1).to({graphics:mask_3_graphics_16,x:141.6,y:88.3}).wait(1).to({graphics:mask_3_graphics_17,x:141.6,y:88.3}).wait(1).to({graphics:mask_3_graphics_18,x:141.6,y:88.3}).wait(1).to({graphics:mask_3_graphics_19,x:141.6,y:88.3}).wait(1).to({graphics:mask_3_graphics_20,x:141.6,y:88.3}).wait(1).to({graphics:mask_3_graphics_21,x:141.6,y:88.3}).wait(1).to({graphics:mask_3_graphics_22,x:141.6,y:88.3}).wait(13));

	// contour
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("Ar3DpIAFgLIWjhpIACACQAlA0AcA2IAEAIgApsDfIVUAAQgagygigugAqdBcIAJgLISzh1IACACQAgAaAaAZQAiAhAaAhIAHAJgAozBSIS8AAQgagggbgaQgcgagcgXgAoBg8IAQgLIABAAIM2hgIABABQBdAmBRA7IAMAJgAmihGIOEAAQhLg0hSgigAkei2IAfgKQB+goCBAAQCCAAB+AoIAfAKgAjajAIG1AAQhugehtAAQhsAAhuAeg");
	this.shape_3.setTransform(175.7,149.6);
	this.shape_3._off = true;

	this.shape_3.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(15).to({_off:false},0).wait(20));

	// mask_contour - копия: 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_15 = new cjs.Graphics().p("AA/ShIAAo6IGwAAIAAI6g");
	var mask_4_graphics_16 = new cjs.Graphics().p("AgvShIAAo6IKOAAIAAI6g");
	var mask_4_graphics_17 = new cjs.Graphics().p("AifShIAAo6INuAAIAAI6g");
	var mask_4_graphics_18 = new cjs.Graphics().p("AkPShIAAo6IROAAIAAI6g");
	var mask_4_graphics_19 = new cjs.Graphics().p("Al+ShIAAo6IUtAAIAAI6g");
	var mask_4_graphics_20 = new cjs.Graphics().p("AnuShIAAo6IYNAAIAAI6g");
	var mask_4_graphics_21 = new cjs.Graphics().p("ApeShIAAo6IbtAAIAAI6g");
	var mask_4_graphics_22 = new cjs.Graphics().p("ArOShIAAo6IfNAAIAAI6g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(15).to({graphics:mask_4_graphics_15,x:49.6,y:118.5}).wait(1).to({graphics:mask_4_graphics_16,x:60.8,y:118.5}).wait(1).to({graphics:mask_4_graphics_17,x:72,y:118.5}).wait(1).to({graphics:mask_4_graphics_18,x:83.2,y:118.5}).wait(1).to({graphics:mask_4_graphics_19,x:94.3,y:118.5}).wait(1).to({graphics:mask_4_graphics_20,x:105.5,y:118.5}).wait(1).to({graphics:mask_4_graphics_21,x:116.7,y:118.5}).wait(1).to({graphics:mask_4_graphics_22,x:127.9,y:118.5}).wait(13));

	// contour
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Aj/DBIgfgKII9AAIgfAKQh9AoiDAAQiCAAh9gogADbDCIm1AAQDaA7Dbg7gAlGCnQhegnhPg6IgNgJIQCAAIgQAKIgBAAIs2BhgAnhBHQBKAzBUAkILmhXgAogAkQgdgZgdgbQgdgdgfglIgHgIIU7AAIgJAKIgCAAIyxB1gApTgXQAcAaAcAXIRPhqIy8AAQAYAcAdAdgAqxh2Qgmg0gcg2IgEgIIXvAAIgFAKIgDABI2gBpgAqrh+IUYhgI1UAAQAcAzAgAtg");
	this.shape_4.setTransform(175.7,203.4);
	this.shape_4._off = true;

	this.shape_4.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(15).to({_off:false},0).wait(20));

	// mask_touch (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Aj/HOIgfgJII9AAIgfAJQh9AoiDAAQiCAAh9gogAlGG0QhegnhPg6IgNgJIQCAAIgQALIgBAAIs2BggAogExQgdgZgdgcQgdgegfglIgHgIIU7AAIgJAKIgCAAIyxB3gAqxCVQgmg0gcg2IgEgHIXvAAIgFAKIgDAAI2gBqgAr3giIAFgLIWjhpIACACQAlA0AcA2IAEAIgAqdivIAJgLISzh3IACACQAgAaAaAbQAiAhAaAhIAHAJgAoBlJIAQgLIABAAIM2hgIABABQBdAmBRA7IAMAJgAkenDIAfgKQB+goCBAAQCCAAB+AoIAfAKg");
	mask_5.setTransform(175.7,176.5);

	// touch
	this.instance = new lib.touch("synched",0);
	this.instance.setTransform(259.8,90.4,1,0.088,45,0,0,119.5,-0.8);
	this.instance._off = true;

	this.instance.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({_off:false},0).to({regX:119.4,scaleX:1,scaleY:0.45,rotation:44.9,x:259.7,y:90.3},2).to({regX:119.5,regY:-0.9,scaleX:1,scaleY:0.67,x:259.9},2).to({regX:119.4,regY:-0.8,scaleY:0.8,x:259.7},2).to({scaleY:0.9,y:90.4},2).to({scaleY:0.97,y:90.3},2).to({regX:119.5,regY:-0.6,scaleX:1,scaleY:1,rotation:45,x:259.8,y:90.4},2).wait(1));

	// mask_contour (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_0 = new cjs.Graphics().p("ABAPWIAAmwIDWAAIAAGwg");
	var mask_6_graphics_1 = new cjs.Graphics().p("AhUPWIAAmwIIAAAIAAGwg");
	var mask_6_graphics_2 = new cjs.Graphics().p("AjqPWIAAmwIMsAAIAAGwg");
	var mask_6_graphics_3 = new cjs.Graphics().p("AmAPWIAAmwIRYAAIAAGwg");
	var mask_6_graphics_4 = new cjs.Graphics().p("AoWPWIAAmwIWEAAIAAGwg");
	var mask_6_graphics_5 = new cjs.Graphics().p("AqsPWIAAmwIawAAIAAGwg");
	var mask_6_graphics_6 = new cjs.Graphics().p("AtCPWIAAmwIfcAAIAAGwg");
	var mask_6_graphics_7 = new cjs.Graphics().p("AvYPWIAAmwMAkIAAAIAAGwg");
	var mask_6_graphics_8 = new cjs.Graphics().p("AxuPWIAAmwMAo0AAAIAAGwg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:mask_6_graphics_0,x:27.9,y:98.2}).wait(1).to({graphics:mask_6_graphics_1,x:42.9,y:98.2}).wait(1).to({graphics:mask_6_graphics_2,x:57.9,y:98.2}).wait(1).to({graphics:mask_6_graphics_3,x:72.9,y:98.2}).wait(1).to({graphics:mask_6_graphics_4,x:87.9,y:98.2}).wait(1).to({graphics:mask_6_graphics_5,x:102.9,y:98.2}).wait(1).to({graphics:mask_6_graphics_6,x:117.9,y:98.2}).wait(1).to({graphics:mask_6_graphics_7,x:132.9,y:98.2}).wait(1).to({graphics:mask_6_graphics_8,x:147.9,y:98.2}).wait(27));

	// contour
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AyvAEIAAgIMAlfAAAIAAAIg");
	this.shape_5.setTransform(175.7,176.2);

	this.shape_5.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(35));

	// mask_contour (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_0 = new cjs.Graphics().p("AIqahIAAmwIGwAAIAAGwg");
	var mask_7_graphics_1 = new cjs.Graphics().p("AIqahIAArcIGwAAIAALcg");
	var mask_7_graphics_2 = new cjs.Graphics().p("AIqahIAAwIIGwAAIAAQIg");
	var mask_7_graphics_3 = new cjs.Graphics().p("AIqahIAA00IGwAAIAAU0g");
	var mask_7_graphics_4 = new cjs.Graphics().p("AIqahIAA5gIGwAAIAAZgg");
	var mask_7_graphics_5 = new cjs.Graphics().p("AIqahIAA+KIGwAAIAAeKg");
	var mask_7_graphics_6 = new cjs.Graphics().p("AIqahMAAAgi2IGwAAMAAAAi2g");
	var mask_7_graphics_7 = new cjs.Graphics().p("AIqahMAAAgniIGwAAMAAAAnig");
	var mask_7_graphics_8 = new cjs.Graphics().p("AIqahMAAAgsOIGwAAMAAAAsOg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:mask_7_graphics_0,x:98.7,y:169.8}).wait(1).to({graphics:mask_7_graphics_1,x:98.7,y:169.8}).wait(1).to({graphics:mask_7_graphics_2,x:98.7,y:169.8}).wait(1).to({graphics:mask_7_graphics_3,x:98.7,y:169.8}).wait(1).to({graphics:mask_7_graphics_4,x:98.7,y:169.8}).wait(1).to({graphics:mask_7_graphics_5,x:98.7,y:169.8}).wait(1).to({graphics:mask_7_graphics_6,x:98.7,y:169.8}).wait(1).to({graphics:mask_7_graphics_7,x:98.7,y:169.8}).wait(1).to({graphics:mask_7_graphics_8,x:98.7,y:169.8}).wait(27));

	// contour
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AgESwMAAAglfIAIAAMAAAAlfg");
	this.shape_6.setTransform(175.9,176.3);

	this.shape_6.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(35));

	// mask_contour (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_0 = new cjs.Graphics().p("AGXUaIE6k6IE6E6Ik6E6g");
	var mask_8_graphics_1 = new cjs.Graphics().p("ADlSjIGwmwIGwGwImwGxg");
	var mask_8_graphics_2 = new cjs.Graphics().p("AAyQtIInonIInInIonIng");
	var mask_8_graphics_3 = new cjs.Graphics().p("Ah+O2IKbqdIKeKdIqeKeg");
	var mask_8_graphics_4 = new cjs.Graphics().p("AkxNAIMSsUIMVMUIsVMUg");
	var mask_8_graphics_5 = new cjs.Graphics().p("AnjLJIOJuJIOKOJIuLOLg");
	var mask_8_graphics_6 = new cjs.Graphics().p("AqWJTIQAwAIQBQAIwBQBg");
	var mask_8_graphics_7 = new cjs.Graphics().p("AtIHcIR2x2IR4R2Ix4R4g");
	var mask_8_graphics_8 = new cjs.Graphics().p("Av7FlITtzsITuTsIzuTvg");
	var mask_8_graphics_9 = new cjs.Graphics().p("AyoDwIVk1jIVlVjI1mVlg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:mask_8_graphics_0,x:103.5,y:162}).wait(1).to({graphics:mask_8_graphics_1,x:109.4,y:162}).wait(1).to({graphics:mask_8_graphics_2,x:115.3,y:162}).wait(1).to({graphics:mask_8_graphics_3,x:121.1,y:162}).wait(1).to({graphics:mask_8_graphics_4,x:127,y:162}).wait(1).to({graphics:mask_8_graphics_5,x:132.9,y:162}).wait(1).to({graphics:mask_8_graphics_6,x:138.7,y:162}).wait(1).to({graphics:mask_8_graphics_7,x:144.6,y:162}).wait(1).to({graphics:mask_8_graphics_8,x:150.5,y:162}).wait(1).to({graphics:mask_8_graphics_9,x:156.9,y:162.1}).wait(26));

	// contour
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AlAMWQighAh6h7Qh6h6hCihQg9iZAAinQAAimA9iaQBCigB6h6QB6h6CghCQCag9CmAAQCnAACZA9QChBCB6B6QB7B6BACgQA+CaAACmQAACng+CZQhAChh7B6Qh7B7ifBAQiaA+inAAQimAAiag+gAk8sMQieBAh5B5Qh5B5hACeQg+CYABCkQgBClA+CYQBACeB5B5QB5B5CeBAQCYA9CkAAQClAACYg9QCehAB5h5QB5h5BAieQA9iYAAilQAAikg9iYQhAieh5h5Qh5h5iehAQiYg+ilABQikgBiYA+g");
	this.shape_7.setTransform(175.6,176.4);

	this.shape_7.mask = mask_8;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(35));

	// mask_contour (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_0 = new cjs.Graphics().p("AyAEZIAAmuMAqVAAAIAAGug");
	var mask_9_graphics_1 = new cjs.Graphics().p("AyAGGIAAqIMAqVAAAIAAKIg");
	var mask_9_graphics_2 = new cjs.Graphics().p("AyAHzIAAtiMAqVAAAIAANig");
	var mask_9_graphics_3 = new cjs.Graphics().p("AyAJgIAAw8MAqVAAAIAAQ8g");
	var mask_9_graphics_4 = new cjs.Graphics().p("AyALNIAA0WMAqVAAAIAAUWg");
	var mask_9_graphics_5 = new cjs.Graphics().p("AyAM6IAA3wMAqVAAAIAAXwg");
	var mask_9_graphics_6 = new cjs.Graphics().p("AyAOoIAA7MMAqVAAAIAAbMg");
	var mask_9_graphics_7 = new cjs.Graphics().p("AyAQVIAA+mMAqVAAAIAAemg");
	var mask_9_graphics_8 = new cjs.Graphics().p("AyASCMAAAgiAMAqVAAAMAAAAiAg");
	var mask_9_graphics_9 = new cjs.Graphics().p("AyATvMAAAglaMAqVAAAMAAAAlag");
	var mask_9_graphics_10 = new cjs.Graphics().p("AyAVcMAAAgo0MAqVAAAMAAAAo0g");
	var mask_9_graphics_11 = new cjs.Graphics().p("AyAXJMAAAgsOMAqVAAAMAAAAsOg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:mask_9_graphics_0,x:155.8,y:28.2}).wait(1).to({graphics:mask_9_graphics_1,x:155.8,y:39.1}).wait(1).to({graphics:mask_9_graphics_2,x:155.8,y:50}).wait(1).to({graphics:mask_9_graphics_3,x:155.8,y:60.9}).wait(1).to({graphics:mask_9_graphics_4,x:155.8,y:71.8}).wait(1).to({graphics:mask_9_graphics_5,x:155.8,y:82.7}).wait(1).to({graphics:mask_9_graphics_6,x:155.8,y:93.6}).wait(1).to({graphics:mask_9_graphics_7,x:155.8,y:104.5}).wait(1).to({graphics:mask_9_graphics_8,x:155.8,y:115.4}).wait(1).to({graphics:mask_9_graphics_9,x:155.8,y:126.3}).wait(1).to({graphics:mask_9_graphics_10,x:155.8,y:137.2}).wait(1).to({graphics:mask_9_graphics_11,x:155.8,y:148.2}).wait(24));

	// contour
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("Ay2AAIS2y2IS2S2Iy2S3gAynAAISnSoISpyoIypyng");
	this.shape_8.setTransform(175.4,176.2);

	this.shape_8.mask = mask_9;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(35));

	// background_alpha
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0)").s().p("A7VbWMAAAg2rMA2rAAAMAAAA2rg");
	this.shape_9.setTransform(175,175);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,350,350);


// stage content:
(lib.ico_zactroishik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ico_template
	this.instance = new lib.ico_template_5("synched",0);
	this.instance.setTransform(175,175,1,1,0,0,0,175,175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(175,175,350,350);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;