define(["amber/boot", "amber_core/Kernel-Objects", "amber_core/SUnit"], function($boot){"use strict";
if(!$boot.nilAsReceiver)$boot.nilAsReceiver=$boot.nil;
if(!("nilAsValue" in $boot))$boot.nilAsValue=$boot.nilAsReceiver;
var $core=$boot.api,nil=$boot.nilAsValue,$nil=$boot.nilAsReceiver,$recv=$boot.asReceiver,$globals=$boot.globals;
if(!$boot.nilAsClass)$boot.nilAsClass=$boot.dnu;
$core.addPackage("OndafSimulator-Tests");
$core.packages["OndafSimulator-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["OndafSimulator-Tests"].transport = {"type":"amd","amdNamespace":"amber-ondafsimulator"};

$core.addClass("AsyncTest", $globals.TestCase, ["ctx"], "OndafSimulator-Tests");
$core.addMethod(
$core.method({
selector: "afterThat:",
protocol: "running",
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._timeout_((100));
$recv($recv($globals.Timer)._on_do_((50),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@ctx"])._execute_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(aBlock)._value();
return self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})))._start();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"afterThat:",{aBlock:aBlock},$globals.AsyncTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "afterThat: aBlock\x0a\x09self timeout: 100.\x0a\x09(Timer on: 50 do: [\x0a\x09\x09ctx execute: [\x0a\x09\x09\x09aBlock value.\x0a\x09\x09\x09self finished.\x0a\x09\x09]\x0a\x09]) start",
referencedClasses: ["Timer"],
//>>excludeEnd("ide");
messageSends: ["timeout:", "start", "on:do:", "execute:", "value", "finished"]
}),
$globals.AsyncTest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: "running",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.AsyncTest.superclass||$boot.nilAsClass).fn.prototype._setUp.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@ctx"]=self["@context"];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.AsyncTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09super setUp.\x0a\x09ctx := context",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setUp"]
}),
$globals.AsyncTest);



$core.addClass("GUITest", $globals.AsyncTest, [], "OndafSimulator-Tests");
$core.addMethod(
$core.method({
selector: "assertNumberOf:equals:",
protocol: "gui testing",
fn: function (aSelector,aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_equals_($recv($recv(aSelector)._asJQuery())._length(),aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assertNumberOf:equals:",{aSelector:aSelector,aNumber:aNumber},$globals.GUITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector", "aNumber"],
source: "assertNumberOf: aSelector equals: aNumber\x0a\x09self assert: aSelector asJQuery length equals: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "length", "asJQuery"]
}),
$globals.GUITest);

$core.addMethod(
$core.method({
selector: "assertPageContains:",
protocol: "gui testing",
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_($recv(self._numberOfVisibleElementsWithText_(aString)).__gt((0)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assertPageContains:",{aString:aString},$globals.GUITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "assertPageContains: aString\x0a\x09self assert: (self numberOfVisibleElementsWithText: aString) > 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", ">", "numberOfVisibleElementsWithText:"]
}),
$globals.GUITest);

$core.addMethod(
$core.method({
selector: "assertPageDoesNotContain:",
protocol: "gui testing",
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._assert_($recv(self._numberOfVisibleElementsWithText_(aString)).__eq_eq((0)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assertPageDoesNotContain:",{aString:aString},$globals.GUITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "assertPageDoesNotContain: aString\x0a\x09self assert: (self numberOfVisibleElementsWithText: aString) == 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:", "==", "numberOfVisibleElementsWithText:"]
}),
$globals.GUITest);

$core.addMethod(
$core.method({
selector: "clickOn:",
protocol: "gui testing",
fn: function (aSelector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aSelector)._asJQuery())._click();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clickOn:",{aSelector:aSelector},$globals.GUITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSelector"],
source: "clickOn: aSelector\x0a\x09aSelector asJQuery click",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click", "asJQuery"]
}),
$globals.GUITest);

$core.addMethod(
$core.method({
selector: "clickOnText:",
protocol: "gui testing",
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._elementWithText_(aString))._click();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clickOnText:",{aString:aString},$globals.GUITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "clickOnText: aString\x0a\x09(self elementWithText: aString) click.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click", "elementWithText:"]
}),
$globals.GUITest);

$core.addMethod(
$core.method({
selector: "elementWithText:",
protocol: "gui testing",
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(":contains(".__comma(aString)).__comma("):visible");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._asJQuery();
return $recv($1)._filter_((function(i,elem){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(elem)._children())._length()).__eq_eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i,elem:elem},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"elementWithText:",{aString:aString},$globals.GUITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "elementWithText: aString\x0a\x09^ (':contains(', aString, '):visible') asJQuery\x0a\x09\x09filter: [ :i :elem | elem children length == 0 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["filter:", "asJQuery", ",", "==", "length", "children"]
}),
$globals.GUITest);

$core.addMethod(
$core.method({
selector: "numberOfVisibleElementsWithText:",
protocol: "gui testing",
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(":contains(".__comma(aString)).__comma("):visible");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._asJQuery();
return $recv($1)._length();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"numberOfVisibleElementsWithText:",{aString:aString},$globals.GUITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "numberOfVisibleElementsWithText: aString\x0a\x09^ (':contains(', aString, '):visible') asJQuery length",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["length", "asJQuery", ","]
}),
$globals.GUITest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: "running",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.GUITest.superclass||$boot.nilAsClass).fn.prototype._setUp.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv("body"._asJQuery())._empty();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.GUITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09super setUp.\x0a\x09'body' asJQuery empty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setUp", "empty", "asJQuery"]
}),
$globals.GUITest);

$core.addMethod(
$core.method({
selector: "visibleElementsWithText:",
protocol: "gui testing",
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(":contains(".__comma(aString)).__comma("):visible");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._asJQuery();
return $recv($1)._length();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visibleElementsWithText:",{aString:aString},$globals.GUITest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "visibleElementsWithText: aString\x0a\x09^ (':contains(', aString, '):visible') asJQuery length",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["length", "asJQuery", ","]
}),
$globals.GUITest);



$core.addClass("ExamTextViewTest", $globals.GUITest, [], "OndafSimulator-Tests");
$core.addMethod(
$core.method({
selector: "test01ShowsTheTextTitle",
protocol: "tests",
fn: function (){
var self=this;
var examTextView;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._render();
self._assertPageContains_("Text Title");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01ShowsTheTextTitle",{examTextView:examTextView},$globals.ExamTextViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01ShowsTheTextTitle\x0a\x09| examTextView |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView render.\x0a\x09\x0a\x09self assertPageContains: 'Text Title'",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "render", "assertPageContains:"]
}),
$globals.ExamTextViewTest);

$core.addMethod(
$core.method({
selector: "test02ShowsTheTextNumberAndTotalNumber",
protocol: "tests",
fn: function (){
var self=this;
var examTextView;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._render();
self._assertPageContains_("Text 1 von 2");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test02ShowsTheTextNumberAndTotalNumber",{examTextView:examTextView},$globals.ExamTextViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02ShowsTheTextNumberAndTotalNumber\x0a\x09| examTextView |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView render.\x0a\x09\x0a\x09self assertPageContains: 'Text 1 von 2'",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "render", "assertPageContains:"]
}),
$globals.ExamTextViewTest);

$core.addMethod(
$core.method({
selector: "test03TheContinueButtonIsHiddenByDefault",
protocol: "tests",
fn: function (){
var self=this;
var examTextView,continueVisible;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._render();
continueVisible=$recv($recv(".continue"._asJQuery())._css_("visibility")).__eq_eq("visible");
self._assert_($recv(continueVisible)._not());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test03TheContinueButtonIsHiddenByDefault",{examTextView:examTextView,continueVisible:continueVisible},$globals.ExamTextViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test03TheContinueButtonIsHiddenByDefault\x0a\x09| examTextView continueVisible |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView render.\x0a\x09\x0a\x09continueVisible := ('.continue' asJQuery css: 'visibility') == 'visible'.\x0a\x09\x0a\x09self assert: continueVisible not",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "render", "==", "css:", "asJQuery", "assert:", "not"]
}),
$globals.ExamTextViewTest);

$core.addMethod(
$core.method({
selector: "test04TheContinueButtonIsShownWhenCheckingTheCheckbox",
protocol: "tests",
fn: function (){
var self=this;
var examTextView,continueVisible;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._render();
$1="input[type=\x22checkbox\x22]"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._click();
continueVisible=$recv($recv(".continue"._asJQuery())._css_("visibility")).__eq_eq("visible");
self._assert_(continueVisible);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test04TheContinueButtonIsShownWhenCheckingTheCheckbox",{examTextView:examTextView,continueVisible:continueVisible},$globals.ExamTextViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test04TheContinueButtonIsShownWhenCheckingTheCheckbox\x0a\x09| examTextView continueVisible |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView render.\x0a\x09'input[type=\x22checkbox\x22]' asJQuery click.\x0a\x09\x0a\x09continueVisible := ('.continue' asJQuery css: 'visibility') == 'visible'.\x0a\x09\x0a\x09self assert: continueVisible",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "render", "click", "asJQuery", "==", "css:", "assert:"]
}),
$globals.ExamTextViewTest);

$core.addMethod(
$core.method({
selector: "test05ShowsTheCompletedText",
protocol: "tests",
fn: function (){
var self=this;
var examTextView;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._addText_("Hello.");
$recv(examTextView)._render();
self._assertPageContains_("Hello.");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test05ShowsTheCompletedText",{examTextView:examTextView},$globals.ExamTextViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test05ShowsTheCompletedText\x0a\x09| examTextView |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView addText: 'Hello.'.\x0a\x09examTextView render.\x0a\x09\x0a\x09self assertPageContains: 'Hello.'",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "addText:", "render", "assertPageContains:"]
}),
$globals.ExamTextViewTest);

$core.addMethod(
$core.method({
selector: "test06ShowsTheWordsToComplete",
protocol: "tests",
fn: function (){
var self=this;
var examTextView;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._addWordToComplete_("Hel");
$recv(examTextView)._render();
self._assertPageContains_("Hel");
self._assertNumberOf_equals_("input[type=\x22text\x22]",(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test06ShowsTheWordsToComplete",{examTextView:examTextView},$globals.ExamTextViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test06ShowsTheWordsToComplete\x0a\x09| examTextView |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView addWordToComplete: 'Hel'.\x0a\x09examTextView render.\x0a\x09\x0a\x09self assertPageContains: 'Hel'.\x0a\x09self assertNumberOf: 'input[type=\x22text\x22]' equals: 1",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "addWordToComplete:", "render", "assertPageContains:", "assertNumberOf:equals:"]
}),
$globals.ExamTextViewTest);

$core.addMethod(
$core.method({
selector: "test07CanProvideTheAnswers",
protocol: "tests",
fn: function (){
var self=this;
var examTextView,inputs;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._addWordToComplete_("Hel");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addWordToComplete:"]=1;
//>>excludeEnd("ctx");
$recv(examTextView)._addWordToComplete_(" Wo");
$recv(examTextView)._render();
inputs="input[type=\x22text\x22]"._asJQuery();
$1=$recv(inputs)._at_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv($1)._value_("lo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
$recv($recv(inputs)._at_((1)))._value_("rld");
self._assert_equals_($recv(examTextView)._answers(),["lo", "rld"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test07CanProvideTheAnswers",{examTextView:examTextView,inputs:inputs},$globals.ExamTextViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test07CanProvideTheAnswers\x0a\x09| examTextView inputs |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView addWordToComplete: 'Hel'.\x0a\x09examTextView addWordToComplete: ' Wo'.\x0a\x09examTextView render.\x0a\x09inputs := 'input[type=\x22text\x22]' asJQuery.\x0a\x09(inputs at: 0) value: 'lo'.\x0a\x09(inputs at: 1) value: 'rld'.\x0a\x09\x0a\x09self assert: examTextView answers equals: #('lo' 'rld')",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "addWordToComplete:", "render", "asJQuery", "value:", "at:", "assert:equals:", "answers"]
}),
$globals.ExamTextViewTest);

$core.addMethod(
$core.method({
selector: "test08CanDisplaySeconds",
protocol: "tests",
fn: function (){
var self=this;
var examTextView;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._render();
$recv(examTextView)._showSeconds_((59));
self._assertPageContains_("Verbleibende Sekunden: 59");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test08CanDisplaySeconds",{examTextView:examTextView},$globals.ExamTextViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test08CanDisplaySeconds\x0a\x09| examTextView |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView render.\x0a\x09\x0a\x09examTextView showSeconds: 59.\x0a\x09\x0a\x09self assertPageContains: 'Verbleibende Sekunden: 59'",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "render", "showSeconds:", "assertPageContains:"]
}),
$globals.ExamTextViewTest);

$core.addMethod(
$core.method({
selector: "test09ByDefaultSecondsAreNotDisplayed",
protocol: "tests",
fn: function (){
var self=this;
var examTextView;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._render();
self._assertPageDoesNotContain_("Verbleibende Sekunden");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test09ByDefaultSecondsAreNotDisplayed",{examTextView:examTextView},$globals.ExamTextViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test09ByDefaultSecondsAreNotDisplayed\x0a\x09| examTextView |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView render.\x0a\x09\x0a\x09self assertPageDoesNotContain: 'Verbleibende Sekunden'",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "render", "assertPageDoesNotContain:"]
}),
$globals.ExamTextViewTest);

$core.addMethod(
$core.method({
selector: "test10CanShowTheResults",
protocol: "tests",
fn: function (){
var self=this;
var examTextView,inputs;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._addWordToComplete_("Hel");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addWordToComplete:"]=1;
//>>excludeEnd("ctx");
$recv(examTextView)._addWordToComplete_(" Wo");
$recv(examTextView)._render();
$recv(examTextView)._showResults_([false, true]);
inputs="input[type=\x22text\x22]"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$3=$recv(inputs)._at_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$1=$recv($2)._attr_("class");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["attr:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($1,"incorrect");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_($recv($recv($recv(inputs)._at_((1)))._asJQuery())._attr_("class"),"correct");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test10CanShowTheResults",{examTextView:examTextView,inputs:inputs},$globals.ExamTextViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test10CanShowTheResults\x0a\x09| examTextView inputs |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView addWordToComplete: 'Hel'.\x0a\x09examTextView addWordToComplete: ' Wo'.\x0a\x09examTextView render.\x0a\x09\x0a\x09examTextView showResults: #(false true).\x0a\x09\x0a\x09inputs := 'input[type=\x22text\x22]' asJQuery.\x09\x0a\x09self assert: ((inputs at: 0) asJQuery attr: 'class') equals: 'incorrect'.\x0a\x09self assert: ((inputs at: 1) asJQuery attr: 'class') equals: 'correct'.",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "addWordToComplete:", "render", "showResults:", "asJQuery", "assert:equals:", "attr:", "at:"]
}),
$globals.ExamTextViewTest);

$core.addMethod(
$core.method({
selector: "test11ContinuesWhenContinueClicked",
protocol: "tests",
fn: function (){
var self=this;
var examTextView,executed;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
executed=false;
$recv(examTextView)._whenContinueDo_((function(){
executed=true;
return executed;

}));
$recv(examTextView)._render();
self._clickOn_("input[type=\x22checkbox\x22]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["clickOn:"]=1;
//>>excludeEnd("ctx");
self._clickOn_(".continue");
self._assert_(executed);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test11ContinuesWhenContinueClicked",{examTextView:examTextView,executed:executed},$globals.ExamTextViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test11ContinuesWhenContinueClicked\x0a\x09| examTextView executed |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09executed := false.\x0a\x09\x0a\x09examTextView whenContinueDo: [ executed := true ].\x0a\x09examTextView render.\x0a\x09self clickOn: 'input[type=\x22checkbox\x22]'.\x0a\x09self clickOn: '.continue'.\x0a\x09\x0a\x09self assert: executed.",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "whenContinueDo:", "render", "clickOn:", "assert:"]
}),
$globals.ExamTextViewTest);

$core.addMethod(
$core.method({
selector: "test12RemovesButtonsWhenContinueClicked",
protocol: "tests",
fn: function (){
var self=this;
var examTextView;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
examTextView=$recv($globals.ExamTextView)._newIn_title_text_of_("body","Text Title",(1),(2));
$recv(examTextView)._render();
$1="input[type=\x22checkbox\x22]"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._click();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click"]=1;
//>>excludeEnd("ctx");
$recv(".continue"._asJQuery())._click();
self._assertNumberOf_equals_(".actions",(0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test12RemovesButtonsWhenContinueClicked",{examTextView:examTextView},$globals.ExamTextViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test12RemovesButtonsWhenContinueClicked\x0a\x09| examTextView |\x0a\x09examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.\x0a\x09\x0a\x09examTextView render.\x0a\x09'input[type=\x22checkbox\x22]' asJQuery click.\x0a\x09'.continue' asJQuery click.\x0a\x09\x0a\x09self assertNumberOf: '.actions' equals: 0",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:text:of:", "render", "click", "asJQuery", "assertNumberOf:equals:"]
}),
$globals.ExamTextViewTest);



$core.addClass("HeaderTest", $globals.GUITest, [], "OndafSimulator-Tests");
$core.addMethod(
$core.method({
selector: "test01ByDefaultItDoesNotStartTheExam",
protocol: "tests",
fn: function (){
var self=this;
var examStarted;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
examStarted=false;
$1=$recv($globals.Header)._new();
$recv($1)._whenStartExam_((function(){
examStarted=true;
return examStarted;

}));
$recv($1)._appendToJQuery_("body"._asJQuery());
self._assert_($recv(examStarted)._not());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01ByDefaultItDoesNotStartTheExam",{examStarted:examStarted},$globals.HeaderTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01ByDefaultItDoesNotStartTheExam\x0a\x09| examStarted |\x0a\x09examStarted := false.\x0a\x09\x0a\x09Header new\x0a\x09\x09whenStartExam: [ examStarted := true ];\x0a\x09\x09appendToJQuery: 'body' asJQuery.\x0a\x09\x0a\x09self assert: examStarted not",
referencedClasses: ["Header"],
//>>excludeEnd("ide");
messageSends: ["whenStartExam:", "new", "appendToJQuery:", "asJQuery", "assert:", "not"]
}),
$globals.HeaderTest);

$core.addMethod(
$core.method({
selector: "test02WhenStartExamIsClickedItStartsTheExam",
protocol: "tests",
fn: function (){
var self=this;
var examStarted;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
examStarted=false;
$1=$recv($globals.Header)._new();
$recv($1)._whenStartExam_((function(){
examStarted=true;
return examStarted;

}));
$recv($1)._appendToJQuery_("body"._asJQuery());
self._clickOnText_("Start exam");
self._assert_(examStarted);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test02WhenStartExamIsClickedItStartsTheExam",{examStarted:examStarted},$globals.HeaderTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02WhenStartExamIsClickedItStartsTheExam\x0a\x09| examStarted |\x0a\x09examStarted := false.\x0a\x09\x0a\x09Header new\x0a\x09\x09whenStartExam: [ examStarted := true ];\x0a\x09\x09appendToJQuery: 'body' asJQuery.\x0a\x09\x0a\x09self clickOnText: 'Start exam'.\x0a\x09\x0a\x09self assert: examStarted",
referencedClasses: ["Header"],
//>>excludeEnd("ide");
messageSends: ["whenStartExam:", "new", "appendToJQuery:", "asJQuery", "clickOnText:", "assert:"]
}),
$globals.HeaderTest);

$core.addMethod(
$core.method({
selector: "test03ShowsStartExamAndResetButtons",
protocol: "tests",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.Header)._new())._appendToJQuery_("body"._asJQuery());
self._assertPageContains_("Start exam");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assertPageContains:"]=1;
//>>excludeEnd("ctx");
self._assertPageContains_("New exam");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test03ShowsStartExamAndResetButtons",{},$globals.HeaderTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test03ShowsStartExamAndResetButtons\x0a\x09Header new\x0a\x09\x09appendToJQuery: 'body' asJQuery.\x0a\x09\x0a\x09self assertPageContains: 'Start exam'.\x0a\x09self assertPageContains: 'New exam'.",
referencedClasses: ["Header"],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "new", "asJQuery", "assertPageContains:"]
}),
$globals.HeaderTest);

$core.addMethod(
$core.method({
selector: "test04DefineBlockToExecuteOnNewExam",
protocol: "tests",
fn: function (){
var self=this;
var executed;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
executed=false;
$1=$recv($globals.Header)._new();
$recv($1)._whenNewExam_((function(){
executed=true;
return executed;

}));
$recv($1)._appendToJQuery_("body"._asJQuery());
self._clickOnText_("New exam");
self._assert_(executed);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test04DefineBlockToExecuteOnNewExam",{executed:executed},$globals.HeaderTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test04DefineBlockToExecuteOnNewExam\x0a\x09| executed |\x0a\x09executed := false.\x0a\x09Header new\x0a\x09\x09whenNewExam: [ executed := true ];\x0a\x09\x09appendToJQuery: 'body' asJQuery.\x0a\x09\x0a\x09self clickOnText: 'New exam'.\x0a\x09\x0a\x09self assert: executed.",
referencedClasses: ["Header"],
//>>excludeEnd("ide");
messageSends: ["whenNewExam:", "new", "appendToJQuery:", "asJQuery", "clickOnText:", "assert:"]
}),
$globals.HeaderTest);



$core.addClass("OndafSimulatorTest", $globals.GUITest, ["lastInputCompleted"], "OndafSimulator-Tests");
$core.addMethod(
$core.method({
selector: "assertCorrectInputs:",
protocol: "private",
fn: function (aNumberOfInputs){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv(".correct"._asJQuery())._length(),aNumberOfInputs);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assertCorrectInputs:",{aNumberOfInputs:aNumberOfInputs},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumberOfInputs"],
source: "assertCorrectInputs: aNumberOfInputs\x0a\x09self assert: '.correct' asJQuery length equals: aNumberOfInputs",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "length", "asJQuery"]
}),
$globals.OndafSimulatorTest);

$core.addMethod(
$core.method({
selector: "assertIncorrectInputs:",
protocol: "private",
fn: function (aNumberOfInputs){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv(".incorrect"._asJQuery())._length(),aNumberOfInputs);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assertIncorrectInputs:",{aNumberOfInputs:aNumberOfInputs},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumberOfInputs"],
source: "assertIncorrectInputs: aNumberOfInputs\x0a\x09self assert: '.incorrect' asJQuery length equals: aNumberOfInputs",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "length", "asJQuery"]
}),
$globals.OndafSimulatorTest);

$core.addMethod(
$core.method({
selector: "assertNumberOfInputsEquals:",
protocol: "private",
fn: function (aNumber){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv("input[type=\x22text\x22]"._asJQuery())._length(),aNumber);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assertNumberOfInputsEquals:",{aNumber:aNumber},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "assertNumberOfInputsEquals: aNumber\x0a\x09self assert: 'input[type=\x22text\x22]' asJQuery length equals: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "length", "asJQuery"]
}),
$globals.OndafSimulatorTest);

$core.addMethod(
$core.method({
selector: "assertTextsShown:",
protocol: "private",
fn: function (aNumberOfTexts){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._assert_equals_($recv(".text:visible:not(.result)"._asJQuery())._length(),aNumberOfTexts);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assertTextsShown:",{aNumberOfTexts:aNumberOfTexts},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumberOfTexts"],
source: "assertTextsShown: aNumberOfTexts\x0a\x09self assert: '.text:visible:not(.result)' asJQuery length equals: aNumberOfTexts",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["assert:equals:", "length", "asJQuery"]
}),
$globals.OndafSimulatorTest);

$core.addMethod(
$core.method({
selector: "completeExamWith:",
protocol: "private",
fn: function (answers){
var self=this,$self=this;
var inputs;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
inputs="input[type=\x22text\x22]"._asJQuery();
$recv(answers)._do_((function(answer){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(inputs)._at_($self["@lastInputCompleted"]))._value_(answer);
$self["@lastInputCompleted"]=$recv($self["@lastInputCompleted"]).__plus((1));
return $self["@lastInputCompleted"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({answer:answer},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"completeExamWith:",{answers:answers,inputs:inputs},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["answers"],
source: "completeExamWith: answers\x0a\x09| inputs |\x0a\x09inputs := 'input[type=\x22text\x22]' asJQuery.\x0a\x09answers do: [ :answer |\x0a\x09\x09(inputs at: lastInputCompleted) value: answer.\x0a\x09\x09lastInputCompleted := lastInputCompleted + 1\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJQuery", "do:", "value:", "at:", "+"]
}),
$globals.OndafSimulatorTest);

$core.addMethod(
$core.method({
selector: "dropTextWithContents:",
protocol: "private",
fn: function (contents){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._dropTextWithTitle_contents_("Beispiel Text",contents);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dropTextWithContents:",{contents:contents},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["contents"],
source: "dropTextWithContents: contents\x0a\x09self dropTextWithTitle: 'Beispiel Text' contents: contents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dropTextWithTitle:contents:"]
}),
$globals.OndafSimulatorTest);

$core.addMethod(
$core.method({
selector: "dropTextWithTitle:",
protocol: "private",
fn: function (title){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._dropTextWithTitle_contents_(title,"Hello wor{ld}.");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dropTextWithTitle:",{title:title},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["title"],
source: "dropTextWithTitle: title\x0a\x09self dropTextWithTitle: title contents: 'Hello wor{ld}.'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dropTextWithTitle:contents:"]
}),
$globals.OndafSimulatorTest);

$core.addMethod(
$core.method({
selector: "dropTextWithTitle:contents:",
protocol: "private",
fn: function (title,contents){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($globals.FileDropper)._new();
$2=$recv($recv(title).__comma($recv($globals.String)._crlf())).__comma(contents);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._dropText_on_($2,".text-file-target");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dropTextWithTitle:contents:",{title:title,contents:contents},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["title", "contents"],
source: "dropTextWithTitle: title contents: contents\x0a\x09FileDropper new dropText: title, String crlf, contents on: '.text-file-target'",
referencedClasses: ["FileDropper", "String"],
//>>excludeEnd("ide");
messageSends: ["dropText:on:", "new", ",", "crlf"]
}),
$globals.OndafSimulatorTest);

$core.addMethod(
$core.method({
selector: "finishText",
protocol: "private",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._clickOn_("input[type=\x22checkbox\x22]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["clickOn:"]=1;
//>>excludeEnd("ctx");
$self._clickOn_(".continue");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"finishText",{},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "finishText\x0a\x09self clickOn: 'input[type=\x22checkbox\x22]'.\x0a\x09self clickOn: '.continue'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clickOn:"]
}),
$globals.OndafSimulatorTest);

$core.addMethod(
$core.method({
selector: "newExam",
protocol: "private",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._clickOnText_("New exam");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newExam",{},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newExam\x0a\x09self clickOnText: 'New exam'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clickOnText:"]
}),
$globals.OndafSimulatorTest);

$core.addMethod(
$core.method({
selector: "setUp",
protocol: "running",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.OndafSimulatorTest.superclass||$boot.nilAsClass).fn.prototype._setUp.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($globals.OndafSimulator)._start();
$self["@lastInputCompleted"]=(0);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09super setUp.\x0a\x09OndafSimulator start.\x0a\x09lastInputCompleted := 0",
referencedClasses: ["OndafSimulator"],
//>>excludeEnd("ide");
messageSends: ["setUp", "start"]
}),
$globals.OndafSimulatorTest);

$core.addMethod(
$core.method({
selector: "startExam",
protocol: "private",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._clickOnText_("Start exam");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startExam",{},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startExam\x0a\x09self clickOnText: 'Start exam'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clickOnText:"]
}),
$globals.OndafSimulatorTest);

$core.addMethod(
$core.method({
selector: "test01ShowsTextTitleOnDrop",
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._dropTextWithTitle_("Beispiel Text");
$self._afterThat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $self._assertPageContains_("Beispiel Text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01ShowsTextTitleOnDrop",{},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01ShowsTextTitleOnDrop\x0a\x09self dropTextWithTitle: 'Beispiel Text'.\x0a\x09\x0a\x09self afterThat: [\x0a\x09\x09self assertPageContains: 'Beispiel Text'\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dropTextWithTitle:", "afterThat:", "assertPageContains:"]
}),
$globals.OndafSimulatorTest);

$core.addMethod(
$core.method({
selector: "test02ShowTextAndInputsAccordingToDroppedText",
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._dropTextWithTitle_contents_("Beispiel Text","Hello wor{ld}.");
$self._afterThat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._startExam();
$self._assertPageDoesNotContain_("Start exam");
$self._assertPageContains_("Beispiel Text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assertPageContains:"]=1;
//>>excludeEnd("ctx");
$self._assertPageContains_("Hello wor");
return $self._assertNumberOfInputsEquals_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test02ShowTextAndInputsAccordingToDroppedText",{},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02ShowTextAndInputsAccordingToDroppedText\x0a\x09self dropTextWithTitle: 'Beispiel Text' contents: 'Hello wor{ld}.'.\x0a\x09\x0a\x09self afterThat: [\x0a\x09\x09self startExam.\x0a\x09\x09\x0a\x09\x09self assertPageDoesNotContain: 'Start exam'.\x0a\x09\x09self assertPageContains: 'Beispiel Text'.\x0a\x09\x09self assertPageContains: 'Hello wor'.\x0a\x09\x09self assertNumberOfInputsEquals: 1.\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dropTextWithTitle:contents:", "afterThat:", "startExam", "assertPageDoesNotContain:", "assertPageContains:", "assertNumberOfInputsEquals:"]
}),
$globals.OndafSimulatorTest);

$core.addMethod(
$core.method({
selector: "test03ComputesTheResultAfterFinishingTheExam",
protocol: "tests",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._dropTextWithContents_("Hello wor{ld}. This is an exam{ple}.");
$self._afterThat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._startExam();
$self._completeExamWith_(["ld", "wrong"]);
$self._finishText();
$self._assertPageContains_("Ergebnis");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assertPageContains:"]=1;
//>>excludeEnd("ctx");
$self._assertPageContains_("50 %");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assertPageContains:"]=2;
//>>excludeEnd("ctx");
$self._assertPageContains_("A2 (oder unter)");
$self._assertTextsShown_((1));
$self._assertIncorrectInputs_((1));
return $self._assertCorrectInputs_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test03ComputesTheResultAfterFinishingTheExam",{},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test03ComputesTheResultAfterFinishingTheExam\x0a\x09self dropTextWithContents: 'Hello wor{ld}. This is an exam{ple}.'.\x0a\x09\x0a\x09self afterThat: [\x0a\x09\x09self startExam.\x0a\x09\x09\x0a\x09\x09self completeExamWith: #('ld' 'wrong').\x0a\x09\x09self finishText.\x0a\x09\x09\x0a\x09\x09self assertPageContains: 'Ergebnis'.\x0a\x09\x09self assertPageContains: '50 %'.\x0a\x09\x09self assertPageContains: 'A2 (oder unter)'.\x0a\x09\x09\x0a\x09\x09self assertTextsShown: 1.\x0a\x09\x09self assertIncorrectInputs: 1.\x0a\x09\x09self assertCorrectInputs: 1.\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dropTextWithContents:", "afterThat:", "startExam", "completeExamWith:", "finishText", "assertPageContains:", "assertTextsShown:", "assertIncorrectInputs:", "assertCorrectInputs:"]
}),
$globals.OndafSimulatorTest);

$core.addMethod(
$core.method({
selector: "test04SupportsMultipleTexts",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var inputs;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._dropTextWithTitle_contents_("Beispiel Text 1","First text. Hello wor{ld}. This is an exam{ple}.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["dropTextWithTitle:contents:"]=1;
//>>excludeEnd("ctx");
$self._dropTextWithTitle_contents_("Beispiel Text 2","Second text. This is the sec{ond} text.");
$self._afterThat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._startExam();
$self._assertPageContains_("First text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assertPageContains:"]=1;
//>>excludeEnd("ctx");
$self._assertPageDoesNotContain_("Second text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assertPageDoesNotContain:"]=1;
//>>excludeEnd("ctx");
$self._completeExamWith_(["ld", "wrong"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["completeExamWith:"]=1;
//>>excludeEnd("ctx");
$self._finishText();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["finishText"]=1;
//>>excludeEnd("ctx");
$self._assertPageContains_("Second text");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assertPageContains:"]=2;
//>>excludeEnd("ctx");
$self._assertPageContains_("Text 2 von 2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assertPageContains:"]=3;
//>>excludeEnd("ctx");
$self._assertPageDoesNotContain_("Ergebnis");
$self._completeExamWith_(["ond"]);
$self._finishText();
$self._assertPageContains_("Ergebnis");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assertPageContains:"]=4;
//>>excludeEnd("ctx");
$self._assertPageContains_("66.67 %");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["assertPageContains:"]=5;
//>>excludeEnd("ctx");
$self._assertPageContains_("B1");
$self._assertTextsShown_((2));
$self._assertIncorrectInputs_((1));
return $self._assertCorrectInputs_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test04SupportsMultipleTexts",{inputs:inputs},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test04SupportsMultipleTexts\x0a\x09| inputs |\x0a\x09self dropTextWithTitle: 'Beispiel Text 1' contents: 'First text. Hello wor{ld}. This is an exam{ple}.'.\x0a\x09self dropTextWithTitle: 'Beispiel Text 2' contents: 'Second text. This is the sec{ond} text.'.\x0a\x09\x0a\x09self afterThat: [\x0a\x09\x09self startExam.\x0a\x09\x09\x0a\x09\x09self assertPageContains: 'First text'.\x0a\x09\x09self assertPageDoesNotContain: 'Second text'.\x0a\x09\x09\x0a\x09\x09self completeExamWith: #('ld' 'wrong').\x0a\x09\x09self finishText.\x0a\x09\x09\x0a\x09\x09self assertPageContains: 'Second text'.\x0a\x09\x09self assertPageContains: 'Text 2 von 2'.\x0a\x09\x09self assertPageDoesNotContain: 'Ergebnis'.\x0a\x09\x09\x0a\x09\x09self completeExamWith: #('ond').\x0a\x09\x09self finishText.\x0a\x09\x09\x0a\x09\x09self assertPageContains: 'Ergebnis'.\x0a\x09\x09self assertPageContains: '66.67 %'.\x0a\x09\x09self assertPageContains: 'B1'.\x0a\x09\x09\x0a\x09\x09self assertTextsShown: 2.\x0a\x09\x09self assertIncorrectInputs: 1.\x0a\x09\x09self assertCorrectInputs: 2.\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dropTextWithTitle:contents:", "afterThat:", "startExam", "assertPageContains:", "assertPageDoesNotContain:", "completeExamWith:", "finishText", "assertTextsShown:", "assertIncorrectInputs:", "assertCorrectInputs:"]
}),
$globals.OndafSimulatorTest);

$core.addMethod(
$core.method({
selector: "test05CanResetToANewExam",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var inputs;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._dropTextWithTitle_contents_("Beispiel Text 1","First text. Hello wor{ld}. This is an exam{ple}.");
$self._afterThat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$self._newExam();
$self._assertPageDoesNotContain_("Beispiel Text 1");
return $self._assertPageContains_("New exam");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test05CanResetToANewExam",{inputs:inputs},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test05CanResetToANewExam\x0a\x09| inputs |\x0a\x09self dropTextWithTitle: 'Beispiel Text 1' contents: 'First text. Hello wor{ld}. This is an exam{ple}.'.\x0a\x09\x0a\x09self afterThat: [\x0a\x09\x09self newExam.\x0a\x09\x09self assertPageDoesNotContain: 'Beispiel Text 1'.\x0a\x09\x09self assertPageContains: 'New exam'.\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dropTextWithTitle:contents:", "afterThat:", "newExam", "assertPageDoesNotContain:", "assertPageContains:"]
}),
$globals.OndafSimulatorTest);

$core.addMethod(
$core.method({
selector: "test06",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var inputs,timer;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
timer=$recv($globals.TestTimer)._new();
$recv($recv($globals.OndafSimulator)._current())._timerProvider_(timer);
$self._dropTextWithTitle_contents_("Beispiel Text 1","First text. Hello wor{ld}. This is an exam{ple}.");
$self._afterThat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(console)._log_("2");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["log:"]=1;
//>>excludeEnd("ctx");
$self._startExam();
$recv(console)._log_("!!");
$self._completeExamWith_(["ld", "wrong"]);
$recv(timer)._forwardTime_($recv((2).__star((15))).__plus((1)));
return $self._assertPageContains_("Ergebnis");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test06",{inputs:inputs,timer:timer},$globals.OndafSimulatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test06\x0a\x09| inputs timer |\x0a\x09timer := TestTimer new.\x0a\x09OndafSimulator current timerProvider: timer.\x0a\x0a\x09self dropTextWithTitle: 'Beispiel Text 1' contents: 'First text. Hello wor{ld}. This is an exam{ple}.'.\x0a\x09\x0a\x09self afterThat: [\x0a\x09\x09console log: '2'.\x0a\x09\x09self startExam.\x0a\x09\x09console log: '!!'.\x0a\x09\x09\x0a\x09\x09self completeExamWith: #('ld' 'wrong').\x0a\x09\x09\x0a\x09\x09timer forwardTime: (2 * 15) + 1.\x0a\x09\x09\x0a\x09\x09self assertPageContains: 'Ergebnis'.\x0a\x09]",
referencedClasses: ["TestTimer", "OndafSimulator"],
//>>excludeEnd("ide");
messageSends: ["new", "timerProvider:", "current", "dropTextWithTitle:contents:", "afterThat:", "log:", "startExam", "completeExamWith:", "forwardTime:", "+", "*", "assertPageContains:"]
}),
$globals.OndafSimulatorTest);



$core.addClass("ResultViewTest", $globals.GUITest, [], "OndafSimulator-Tests");
$core.addMethod(
$core.method({
selector: "test01ShowResultInfo",
protocol: "tests",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($globals.ResultView)._newIn_("body"))._renderScore_of_percentage_level_((123),(456),(78.99),"B1");
self._assertPageContains_("B1");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assertPageContains:"]=1;
//>>excludeEnd("ctx");
self._assertPageContains_("123");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assertPageContains:"]=2;
//>>excludeEnd("ctx");
self._assertPageContains_("78.99 %");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assertPageContains:"]=3;
//>>excludeEnd("ctx");
self._assertPageContains_("456 Punkte");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01ShowResultInfo",{},$globals.ResultViewTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01ShowResultInfo\x0a\x09(ResultView newIn: 'body') renderScore: 123 of: 456 percentage: 78.99 level: 'B1'.\x0a\x09\x0a\x09self assertPageContains: 'B1'.\x0a\x09self assertPageContains: '123'.\x0a\x09self assertPageContains: '78.99 %'.\x0a\x09self assertPageContains: '456 Punkte'",
referencedClasses: ["ResultView"],
//>>excludeEnd("ide");
messageSends: ["renderScore:of:percentage:level:", "newIn:", "assertPageContains:"]
}),
$globals.ResultViewTest);



$core.addClass("TextCardTest", $globals.GUITest, [], "OndafSimulator-Tests");
$core.addMethod(
$core.method({
selector: "test01TheTitleIsShown",
protocol: "tests",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($globals.TextCard)._newIn_title_("body","a Title");
self._assertPageContains_("a Title");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01TheTitleIsShown",{},$globals.TextCardTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01TheTitleIsShown\x0a\x09TextCard newIn: 'body' title: 'a Title'.\x0a\x09self assertPageContains: 'a Title'",
referencedClasses: ["TextCard"],
//>>excludeEnd("ide");
messageSends: ["newIn:title:", "assertPageContains:"]
}),
$globals.TextCardTest);



$core.addClass("TextFileDropTargetTest", $globals.GUITest, ["droppedText", "fileDropper"], "OndafSimulator-Tests");
$core.addMethod(
$core.method({
selector: "setUp",
protocol: "running",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.TextFileDropTargetTest.superclass||$boot.nilAsClass).fn.prototype._setUp.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@fileDropper"]=$recv($globals.FileDropper)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.TextFileDropTargetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09super setUp.\x0a\x09fileDropper := FileDropper new",
referencedClasses: ["FileDropper"],
//>>excludeEnd("ide");
messageSends: ["setUp", "new"]
}),
$globals.TextFileDropTargetTest);

$core.addMethod(
$core.method({
selector: "test01ReadsDroppedFile",
protocol: "tests",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._timeout_((100));
$recv($globals.TextFileDropTarget)._newIn_handler_("body",(function(txt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@ctx"])._execute_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
self._assert_equals_(txt,"texto archivo");
return self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({txt:txt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self["@fileDropper"])._dropText_on_("texto archivo",".text-file-target");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01ReadsDroppedFile",{},$globals.TextFileDropTargetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01ReadsDroppedFile\x0a\x09self timeout: 100.\x0a\x09\x0a\x09TextFileDropTarget\x0a\x09\x09newIn: 'body'\x0a\x09\x09handler: [ :txt | ctx execute: [ self assert: txt equals: 'texto archivo'. self finished ] ].\x0a\x09\x09\x0a\x09fileDropper dropText: 'texto archivo' on: '.text-file-target'",
referencedClasses: ["TextFileDropTarget"],
//>>excludeEnd("ide");
messageSends: ["timeout:", "newIn:handler:", "execute:", "assert:equals:", "finished", "dropText:on:"]
}),
$globals.TextFileDropTargetTest);

$core.addMethod(
$core.method({
selector: "test02CanDropMoreThanOneFile",
protocol: "tests",
fn: function (){
var self=this;
var expected;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
expected=["texto archivo 1", "texto archivo 2"];
self._timeout_((100));
$recv($globals.TextFileDropTarget)._newIn_handler_("body",(function(txt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@ctx"])._execute_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(expected)._remove_ifAbsent_(txt,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._fail();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
return $recv(expected)._ifEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({txt:txt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self["@fileDropper"])._dropText_and_on_("texto archivo 1","texto archivo 2",".text-file-target");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test02CanDropMoreThanOneFile",{expected:expected},$globals.TextFileDropTargetTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02CanDropMoreThanOneFile\x0a\x09| expected |\x0a\x09expected := #('texto archivo 1' 'texto archivo 2').\x0a\x09self timeout: 100.\x0a\x09\x0a\x09TextFileDropTarget\x0a\x09\x09newIn: 'body'\x0a\x09\x09handler: [ :txt | ctx execute: [ expected remove: txt ifAbsent: [ self fail ]. expected ifEmpty: [ self finished ] ] ].\x0a\x0a\x09fileDropper dropText: 'texto archivo 1' and: 'texto archivo 2' on: '.text-file-target'",
referencedClasses: ["TextFileDropTarget"],
//>>excludeEnd("ide");
messageSends: ["timeout:", "newIn:handler:", "execute:", "remove:ifAbsent:", "fail", "ifEmpty:", "finished", "dropText:and:on:"]
}),
$globals.TextFileDropTargetTest);



$core.addClass("TimerTest", $globals.AsyncTest, [], "OndafSimulator-Tests");
$core.addMethod(
$core.method({
selector: "test01ExecuteAnActionPeriodically",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var timer1,timer2,count;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._timeout_((150));
count=(0);
timer1=$recv($globals.Timer)._each_do_((50),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
count=$recv(count).__plus((1));
return count;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["each:do:"]=1;
//>>excludeEnd("ctx");
timer2=$recv($globals.Timer)._each_do_((110),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(timer1)._stop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["stop"]=1;
//>>excludeEnd("ctx");
$recv(timer2)._stop();
return $recv($self["@ctx"])._execute_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$self._assert_equals_(count,(2));
return $self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(timer1)._start();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["start"]=1;
//>>excludeEnd("ctx");
$recv(timer2)._start();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test01ExecuteAnActionPeriodically",{timer1:timer1,timer2:timer2,count:count},$globals.TimerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test01ExecuteAnActionPeriodically\x0a\x09| timer1 timer2 count |\x0a\x09self timeout: 150.\x0a\x09\x0a\x09count := 0.\x0a\x09timer1 := Timer each: 50  do: [ count := count + 1 ].\x0a\x09timer2 := Timer each: 110 do: [\x0a\x09\x09timer1 stop.\x0a\x09\x09timer2 stop.\x0a\x09\x09ctx execute: [ self assert: count equals: 2. self finished ]\x0a\x09].\x0a\x09\x0a\x09timer1 start.\x0a\x09timer2 start",
referencedClasses: ["Timer"],
//>>excludeEnd("ide");
messageSends: ["timeout:", "each:do:", "+", "stop", "execute:", "assert:equals:", "finished", "start"]
}),
$globals.TimerTest);

$core.addMethod(
$core.method({
selector: "test02ExecuteAnActionOneTime",
protocol: "tests",
fn: function (){
var self=this,$self=this;
var timer1,timer2,count;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$self._timeout_((150));
count=(0);
timer1=$recv($globals.Timer)._on_do_((50),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
count=$recv(count).__plus((1));
return count;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
timer2=$recv($globals.Timer)._each_do_((110),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(timer2)._stop();
return $recv($self["@ctx"])._execute_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$self._assert_equals_(count,(1));
return $self._finished();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(timer1)._start();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["start"]=1;
//>>excludeEnd("ctx");
$recv(timer2)._start();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"test02ExecuteAnActionOneTime",{timer1:timer1,timer2:timer2,count:count},$globals.TimerTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "test02ExecuteAnActionOneTime\x0a\x09| timer1 timer2 count |\x0a\x09self timeout: 150.\x0a\x09\x0a\x09count := 0.\x0a\x09timer1 := Timer on: 50  do: [ count := count + 1 ].\x0a\x09timer2 := Timer each: 110 do: [\x0a\x09\x09timer2 stop.\x0a\x09\x09ctx execute: [ self assert: count equals: 1. self finished ]\x0a\x09].\x0a\x09\x0a\x09timer1 start.\x0a\x09timer2 start",
referencedClasses: ["Timer"],
//>>excludeEnd("ide");
messageSends: ["timeout:", "on:do:", "+", "each:do:", "stop", "execute:", "assert:equals:", "finished", "start"]
}),
$globals.TimerTest);



$core.addClass("FileDropper", $globals.Object, [], "OndafSimulator-Tests");
$core.addMethod(
$core.method({
selector: "dropFileEventWith:",
protocol: "actions",
fn: function (aFile){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$5,$7,$8,$6,$9,$4,$2;
$1=self._newObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newObject"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("type","drop");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("preventDefault",(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($1)._at_put_("stopPropagation",(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$3=self._newObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newObject"]=2;
//>>excludeEnd("ctx");
$5=self._newObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newObject"]=3;
//>>excludeEnd("ctx");
$7=self._newObject();
$recv($7)._at_put_((0),aFile);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=7;
//>>excludeEnd("ctx");
$recv($7)._at_put_("length",(1));
$8=$recv($7)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$6=$8;
$recv($5)._at_put_("files",$6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
$9=$recv($5)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$4=$9;
$recv($3)._at_put_("dataTransfer",$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$2=$recv($3)._yourself();
$recv($1)._at_put_("originalEvent",$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
return $recv($1)._jsObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dropFileEventWith:",{aFile:aFile},$globals.FileDropper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFile"],
source: "dropFileEventWith: aFile\x0a\x09^ self newObject\x0a\x09\x09at: 'type' put: 'drop';\x0a\x09\x09at: 'preventDefault' put: [];\x0a\x09\x09at: 'stopPropagation' put: [];\x0a\x09\x09at: 'originalEvent' put: (\x0a\x09\x09\x09self newObject at: 'dataTransfer' put: (\x0a\x09\x09\x09\x09self newObject\x0a\x09\x09\x09\x09\x09at: 'files' put: (\x0a\x09\x09\x09\x09\x09\x09self newObject\x0a\x09\x09\x09\x09\x09\x09\x09at: 0 put: aFile;\x0a\x09\x09\x09\x09\x09\x09\x09at: 'length' put: 1;\x0a\x09\x09\x09\x09\x09\x09\x09yourself\x0a\x09\x09\x09\x09\x09); yourself\x0a\x09\x09\x09); yourself\x0a\x09\x09);\x0a\x09\x09jsObject.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "newObject", "yourself", "jsObject"]
}),
$globals.FileDropper);

$core.addMethod(
$core.method({
selector: "dropFileEventWith:and:",
protocol: "actions",
fn: function (aFile,anotherFile){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$5,$7,$8,$6,$9,$4,$2;
$1=self._newObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newObject"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("type","drop");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("preventDefault",(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv($1)._at_put_("stopPropagation",(function(){

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=3;
//>>excludeEnd("ctx");
$3=self._newObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newObject"]=2;
//>>excludeEnd("ctx");
$5=self._newObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newObject"]=3;
//>>excludeEnd("ctx");
$7=self._newObject();
$recv($7)._at_put_((0),aFile);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=7;
//>>excludeEnd("ctx");
$recv($7)._at_put_((1),anotherFile);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=8;
//>>excludeEnd("ctx");
$recv($7)._at_put_("length",(2));
$8=$recv($7)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
$6=$8;
$recv($5)._at_put_("files",$6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=6;
//>>excludeEnd("ctx");
$9=$recv($5)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
$4=$9;
$recv($3)._at_put_("dataTransfer",$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=5;
//>>excludeEnd("ctx");
$2=$recv($3)._yourself();
$recv($1)._at_put_("originalEvent",$2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=4;
//>>excludeEnd("ctx");
return $recv($1)._jsObject();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dropFileEventWith:and:",{aFile:aFile,anotherFile:anotherFile},$globals.FileDropper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFile", "anotherFile"],
source: "dropFileEventWith: aFile and: anotherFile\x0a\x09^ self newObject\x0a\x09\x09at: 'type' put: 'drop';\x0a\x09\x09at: 'preventDefault' put: [];\x0a\x09\x09at: 'stopPropagation' put: [];\x0a\x09\x09at: 'originalEvent' put: (\x0a\x09\x09\x09self newObject at: 'dataTransfer' put: (\x0a\x09\x09\x09\x09self newObject\x0a\x09\x09\x09\x09\x09at: 'files' put: (\x0a\x09\x09\x09\x09\x09\x09self newObject\x0a\x09\x09\x09\x09\x09\x09\x09at: 0 put: aFile;\x0a\x09\x09\x09\x09\x09\x09\x09at: 1 put: anotherFile;\x0a\x09\x09\x09\x09\x09\x09\x09at: 'length' put: 2;\x0a\x09\x09\x09\x09\x09\x09\x09yourself\x0a\x09\x09\x09\x09\x09); yourself\x0a\x09\x09\x09); yourself\x0a\x09\x09);\x0a\x09\x09jsObject.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "newObject", "yourself", "jsObject"]
}),
$globals.FileDropper);

$core.addMethod(
$core.method({
selector: "dropText:and:on:",
protocol: "actions",
fn: function (aString,anotherString,aSelector){
var self=this;
var file1,file2,event;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
file1=self._textFileWith_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["textFileWith:"]=1;
//>>excludeEnd("ctx");
file2=self._textFileWith_(anotherString);
event=self._dropFileEventWith_and_(file1,file2);
$recv($recv(aSelector)._asJQuery())._trigger_(event);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dropText:and:on:",{aString:aString,anotherString:anotherString,aSelector:aSelector,file1:file1,file2:file2,event:event},$globals.FileDropper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString", "aSelector"],
source: "dropText: aString and: anotherString on: aSelector\x0a\x09| file1 file2 event |\x0a\x09file1 := self textFileWith: aString.\x0a\x09file2 := self textFileWith: anotherString.\x0a\x09event := self dropFileEventWith: file1 and: file2.\x0a\x09\x0a\x09aSelector asJQuery trigger: event",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["textFileWith:", "dropFileEventWith:and:", "trigger:", "asJQuery"]
}),
$globals.FileDropper);

$core.addMethod(
$core.method({
selector: "dropText:on:",
protocol: "actions",
fn: function (aString,aSelector){
var self=this;
var file,event;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
file=self._textFileWith_(aString);
event=self._dropFileEventWith_(file);
$recv($recv(aSelector)._asJQuery())._trigger_(event);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dropText:on:",{aString:aString,aSelector:aSelector,file:file,event:event},$globals.FileDropper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aSelector"],
source: "dropText: aString on: aSelector\x0a\x09| file event |\x0a\x09file := self textFileWith: aString.\x0a\x09event := self dropFileEventWith: file.\x0a\x09\x0a\x09aSelector asJQuery trigger: event",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["textFileWith:", "dropFileEventWith:", "trigger:", "asJQuery"]
}),
$globals.FileDropper);

$core.addMethod(
$core.method({
selector: "newObject",
protocol: "private",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.JSON)._parse_("{}");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newObject",{},$globals.FileDropper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newObject\x0a\x09^ JSON parse: '{}'",
referencedClasses: ["JSON"],
//>>excludeEnd("ide");
messageSends: ["parse:"]
}),
$globals.FileDropper);

$core.addMethod(
$core.method({
selector: "textFileWith:",
protocol: "actions",
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($globals.Blob)._newValue_value_($recv($globals.Array)._with_(aString),$globals.HashedCollection._newFromPairs_(["type","text/plain"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"textFileWith:",{aString:aString},$globals.FileDropper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "textFileWith: aString\x0a\x09^ Blob newValue: (Array with: aString) value: #{'type' -> 'text/plain'}",
referencedClasses: ["Blob", "Array"],
//>>excludeEnd("ide");
messageSends: ["newValue:value:", "with:"]
}),
$globals.FileDropper);



$core.addClass("TestTimer", $globals.Object, ["action"], "OndafSimulator-Tests");
$core.addMethod(
$core.method({
selector: "forwardTime:",
protocol: "as yet unclassified",
fn: function (millis){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($self["@action"])._value();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forwardTime:",{millis:millis},$globals.TestTimer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["millis"],
source: "forwardTime: millis\x0a\x09action value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value"]
}),
$globals.TestTimer);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.TestTimer.superclass||$boot.nilAsClass).fn.prototype._initialize.apply($self, []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$self["@action"]=(function(){

});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TestTimer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09action := []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.TestTimer);

$core.addMethod(
$core.method({
selector: "on:do:",
protocol: "as yet unclassified",
fn: function (milliseconds,aBlock){
var self=this,$self=this;
$self["@action"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["milliseconds", "aBlock"],
source: "on: milliseconds do: aBlock\x0a\x09action := aBlock.\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestTimer);

$core.addMethod(
$core.method({
selector: "start",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestTimer);

$core.addMethod(
$core.method({
selector: "stop",
protocol: "as yet unclassified",
fn: function (){
var self=this,$self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stop",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestTimer);



$core.addClass("WidgetPreviews", $globals.Object, [], "OndafSimulator-Tests");
$core.addMethod(
$core.method({
selector: "examTextView",
protocol: "widgets",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv("body"._asJQuery())._empty();
$1=$recv($globals.ExamTextView)._newIn_title_text_of_("body","a Title",(2),(3));
$recv($1)._addText_("Hello ");
$recv($1)._addWordToComplete_("Wor");
$recv($1)._render();
$recv($1)._showSeconds_((99));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"examTextView",{},$globals.WidgetPreviews)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "examTextView\x0a\x09'body' asJQuery empty.\x0a\x09\x0a\x09(ExamTextView newIn: 'body' title: 'a Title' text: 2 of: 3)\x0a\x09\x09addText: 'Hello ';\x0a\x09\x09addWordToComplete: 'Wor';\x0a\x09\x09render;\x0a\x09\x09showSeconds: 99",
referencedClasses: ["ExamTextView"],
//>>excludeEnd("ide");
messageSends: ["empty", "asJQuery", "addText:", "newIn:title:text:of:", "addWordToComplete:", "render", "showSeconds:"]
}),
$globals.WidgetPreviews);

$core.addMethod(
$core.method({
selector: "header",
protocol: "widgets",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._empty();
$2=$recv($globals.Header)._new();
$recv($2)._whenStartExam_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(window)._alert_("start exam");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($2)._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"header",{},$globals.WidgetPreviews)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "header\x0a\x09'body' asJQuery empty.\x0a\x09\x0a\x09Header new\x0a\x09\x09whenStartExam: [ window alert: 'start exam' ];\x0a\x09\x09appendToJQuery: 'body' asJQuery.",
referencedClasses: ["Header"],
//>>excludeEnd("ide");
messageSends: ["empty", "asJQuery", "whenStartExam:", "new", "alert:", "appendToJQuery:"]
}),
$globals.WidgetPreviews);

$core.addMethod(
$core.method({
selector: "resultView",
protocol: "widgets",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("body"._asJQuery())._empty();
$recv($recv($globals.ResultView)._newIn_("body"))._renderScore_of_percentage_level_((123),(456),(78.99),"B1");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resultView",{},$globals.WidgetPreviews)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resultView\x0a\x09'body' asJQuery empty.\x0a\x09\x0a\x09(ResultView newIn: 'body') renderScore: 123 of: 456 percentage: 78.99 level: 'B1'.",
referencedClasses: ["ResultView"],
//>>excludeEnd("ide");
messageSends: ["empty", "asJQuery", "renderScore:of:percentage:level:", "newIn:"]
}),
$globals.WidgetPreviews);

$core.addMethod(
$core.method({
selector: "textCard",
protocol: "widgets",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("body"._asJQuery())._empty();
$recv($globals.TextCard)._newIn_title_("body","a Title");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"textCard",{},$globals.WidgetPreviews)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "textCard\x0a\x09'body' asJQuery empty.\x0a\x09\x09\x0a\x09TextCard newIn: 'body' title: 'a Title'",
referencedClasses: ["TextCard"],
//>>excludeEnd("ide");
messageSends: ["empty", "asJQuery", "newIn:title:"]
}),
$globals.WidgetPreviews);

$core.addMethod(
$core.method({
selector: "textFileDropTarget",
protocol: "widgets",
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1="body"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._empty();
$recv($globals.TextFileDropTarget)._newIn_handler_("body",(function(txt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(window)._alert_(txt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({txt:txt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=".text-file-target"._asJQuery();
$recv($2)._css_put_("height","100px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["css:put:"]=1;
//>>excludeEnd("ctx");
$recv($2)._css_put_("border","3px dashed gray");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["css:put:"]=2;
//>>excludeEnd("ctx");
$recv($2)._css_put_("background","white");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"textFileDropTarget",{},$globals.WidgetPreviews)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "textFileDropTarget\x0a\x09'body' asJQuery empty.\x0a\x09\x09\x0a\x09TextFileDropTarget\x0a\x09\x09newIn: 'body'\x0a\x09\x09handler: [ :txt | window alert: txt ].\x0a\x09'.text-file-target' asJQuery\x0a\x09\x09css: 'height' put: '100px';\x0a\x09\x09css: 'border' put: '3px dashed gray';\x0a\x09\x09css: 'background' put: 'white'.",
referencedClasses: ["TextFileDropTarget"],
//>>excludeEnd("ide");
messageSends: ["empty", "asJQuery", "newIn:handler:", "alert:", "css:put:"]
}),
$globals.WidgetPreviews);


});
