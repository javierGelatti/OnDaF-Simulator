Smalltalk createPackage: 'OndafSimulator-Tests'!
TestCase subclass: #AsyncTest
	instanceVariableNames: 'ctx'
	package: 'OndafSimulator-Tests'!

!AsyncTest methodsFor: 'running'!

afterThat: aBlock
	self timeout: 100.
	(Timer on: 50 do: [
		ctx execute: [
			aBlock value.
			self finished.
		]
	]) start
!

setUp
	super setUp.
	ctx := context
! !

AsyncTest subclass: #GUITest
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

!GUITest methodsFor: 'gui testing'!

assertNumberOf: aSelector equals: aNumber
	self assert: aSelector asJQuery length equals: aNumber
!

assertPageContains: aString
	self assert: (self numberOfVisibleElementsWithText: aString) > 0
!

assertPageDoesNotContain: aString
	self assert: (self numberOfVisibleElementsWithText: aString) == 0
!

clickOn: aSelector
	aSelector asJQuery click
!

clickOnText: aString
	(self elementWithText: aString) click.
!

elementWithText: aString
	^ (':contains(', aString, '):visible') asJQuery
		filter: [ :i :elem | elem children length == 0 ]
!

numberOfVisibleElementsWithText: aString
	^ (':contains(', aString, '):visible') asJQuery length
!

visibleElementsWithText: aString
	^ (':contains(', aString, '):visible') asJQuery length
! !

!GUITest methodsFor: 'running'!

setUp
	super setUp.
	'body' asJQuery empty
! !

GUITest subclass: #ExamTextViewTest
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

!ExamTextViewTest methodsFor: 'tests'!

test01ShowsTheTextTitle
	| examTextView |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView render.
	
	self assertPageContains: 'Text Title'
!

test02ShowsTheTextNumberAndTotalNumber
	| examTextView |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView render.
	
	self assertPageContains: 'Text 1 von 2'
!

test03TheContinueButtonIsHiddenByDefault
	| examTextView continueVisible |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView render.
	
	continueVisible := ('.continue' asJQuery css: 'visibility') == 'visible'.
	
	self assert: continueVisible not
!

test04TheContinueButtonIsShownWhenCheckingTheCheckbox
	| examTextView continueVisible |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView render.
	'input[type="checkbox"]' asJQuery click.
	
	continueVisible := ('.continue' asJQuery css: 'visibility') == 'visible'.
	
	self assert: continueVisible
!

test05ShowsTheCompletedText
	| examTextView |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView addText: 'Hello.'.
	examTextView render.
	
	self assertPageContains: 'Hello.'
!

test06ShowsTheWordsToComplete
	| examTextView |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView addWordToComplete: 'Hel'.
	examTextView render.
	
	self assertPageContains: 'Hel'.
	self assertNumberOf: 'input[type="text"]' equals: 1
!

test07CanProvideTheAnswers
	| examTextView inputs |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView addWordToComplete: 'Hel'.
	examTextView addWordToComplete: ' Wo'.
	examTextView render.
	inputs := 'input[type="text"]' asJQuery.
	(inputs at: 0) value: 'lo'.
	(inputs at: 1) value: 'rld'.
	
	self assert: examTextView answers equals: #('lo' 'rld')
!

test08CanDisplaySeconds
	| examTextView |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView render.
	
	examTextView showSeconds: 59.
	
	self assertPageContains: 'Verbleibende Sekunden: 59'
!

test09ByDefaultSecondsAreNotDisplayed
	| examTextView |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView render.
	
	self assertPageDoesNotContain: 'Verbleibende Sekunden'
!

test10CanShowTheResults
	| examTextView inputs |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView addWordToComplete: 'Hel'.
	examTextView addWordToComplete: ' Wo'.
	examTextView render.
	
	examTextView showResults: #(false true).
	
	inputs := 'input[type="text"]' asJQuery.	
	self assert: ((inputs at: 0) asJQuery attr: 'class') equals: 'incorrect'.
	self assert: ((inputs at: 1) asJQuery attr: 'class') equals: 'correct'.
!

test11ContinuesWhenContinueClicked
	| examTextView executed |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	executed := false.
	
	examTextView whenContinueDo: [ executed := true ].
	examTextView render.
	self clickOn: 'input[type="checkbox"]'.
	self clickOn: '.continue'.
	
	self assert: executed.
!

test12RemovesButtonsWhenContinueClicked
	| examTextView |
	examTextView := ExamTextView newIn: 'body' title: 'Text Title' text: 1 of: 2.
	
	examTextView render.
	'input[type="checkbox"]' asJQuery click.
	'.continue' asJQuery click.
	
	self assertNumberOf: '.actions' equals: 0
! !

GUITest subclass: #HeaderTest
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

!HeaderTest methodsFor: 'tests'!

test01ByDefaultItDoesNotStartTheExam
	| examStarted |
	examStarted := false.
	
	Header new
		whenStartExam: [ examStarted := true ];
		appendToJQuery: 'body' asJQuery.
	
	self assert: examStarted not
!

test02WhenStartExamIsClickedItStartsTheExam
	| examStarted |
	examStarted := false.
	
	Header new
		whenStartExam: [ examStarted := true ];
		appendToJQuery: 'body' asJQuery.
	
	self clickOnText: 'Start exam'.
	
	self assert: examStarted
!

test03ShowsStartExamAndResetButtons
	Header new
		appendToJQuery: 'body' asJQuery.
	
	self assertPageContains: 'Start exam'.
	self assertPageContains: 'New exam'.
!

test04DefineBlockToExecuteOnNewExam
	| executed |
	executed := false.
	Header new
		whenNewExam: [ executed := true ];
		appendToJQuery: 'body' asJQuery.
	
	self clickOnText: 'New exam'.
	
	self assert: executed.
! !

GUITest subclass: #OndafSimulatorTest
	instanceVariableNames: 'lastInputCompleted'
	package: 'OndafSimulator-Tests'!

!OndafSimulatorTest methodsFor: 'private'!

assertCorrectInputs: aNumberOfInputs
	self assert: '.correct' asJQuery length equals: aNumberOfInputs
!

assertIncorrectInputs: aNumberOfInputs
	self assert: '.incorrect' asJQuery length equals: aNumberOfInputs
!

assertNumberOfInputsEquals: aNumber
	self assert: 'input[type="text"]' asJQuery length equals: aNumber
!

assertTextsShown: aNumberOfTexts
	self assert: '.text:visible:not(.result)' asJQuery length equals: aNumberOfTexts
!

completeExamWith: answers
	| inputs |
	inputs := 'input[type="text"]' asJQuery.
	answers do: [ :answer |
		(inputs at: lastInputCompleted) value: answer.
		lastInputCompleted := lastInputCompleted + 1
	]
!

dropTextWithContents: contents
	self dropTextWithTitle: 'Beispiel Text' contents: contents
!

dropTextWithTitle: title
	self dropTextWithTitle: title contents: 'Hello wor{ld}.'
!

dropTextWithTitle: title contents: contents
	FileDropper new dropText: title, String crlf, contents on: '.text-file-target'
!

finishText
	self clickOn: 'input[type="checkbox"]'.
	self clickOn: '.continue'
!

newExam
	self clickOnText: 'New exam'
!

startExam
	self clickOnText: 'Start exam'.
! !

!OndafSimulatorTest methodsFor: 'running'!

setUp
	super setUp.
	OndafSimulator start.
	lastInputCompleted := 0
! !

!OndafSimulatorTest methodsFor: 'tests'!

test01ShowsTextTitleOnDrop
	self dropTextWithTitle: 'Beispiel Text'.
	
	self afterThat: [
		self assertPageContains: 'Beispiel Text'
	]
!

test02ShowTextAndInputsAccordingToDroppedText
	self dropTextWithTitle: 'Beispiel Text' contents: 'Hello wor{ld}.'.
	
	self afterThat: [
		self startExam.
		
		self assertPageDoesNotContain: 'Start exam'.
		self assertPageContains: 'Beispiel Text'.
		self assertPageContains: 'Hello wor'.
		self assertNumberOfInputsEquals: 1.
	]
!

test03ComputesTheResultAfterFinishingTheExam
	self dropTextWithContents: 'Hello wor{ld}. This is an exam{ple}.'.
	
	self afterThat: [
		self startExam.
		
		self completeExamWith: #('ld' 'wrong').
		self finishText.
		
		self assertPageContains: 'Ergebnis'.
		self assertPageContains: '50 %'.
		self assertPageContains: 'A2 (oder unter)'.
		
		self assertTextsShown: 1.
		self assertIncorrectInputs: 1.
		self assertCorrectInputs: 1.
	]
!

test04SupportsMultipleTexts
	| inputs |
	self dropTextWithTitle: 'Beispiel Text 1' contents: 'First text. Hello wor{ld}. This is an exam{ple}.'.
	self dropTextWithTitle: 'Beispiel Text 2' contents: 'Second text. This is the sec{ond} text.'.
	
	self afterThat: [
		self startExam.
		
		self assertPageContains: 'First text'.
		self assertPageDoesNotContain: 'Second text'.
		
		self completeExamWith: #('ld' 'wrong').
		self finishText.
		
		self assertPageContains: 'Second text'.
		self assertPageContains: 'Text 2 von 2'.
		self assertPageDoesNotContain: 'Ergebnis'.
		
		self completeExamWith: #('ond').
		self finishText.
		
		self assertPageContains: 'Ergebnis'.
		self assertPageContains: '66.67 %'.
		self assertPageContains: 'B1'.
		
		self assertTextsShown: 2.
		self assertIncorrectInputs: 1.
		self assertCorrectInputs: 2.
	]
!

test05CanResetToANewExam
	| inputs |
	self dropTextWithTitle: 'Beispiel Text 1' contents: 'First text. Hello wor{ld}. This is an exam{ple}.'.
	
	self afterThat: [
		self newExam.
		self assertPageDoesNotContain: 'Beispiel Text 1'.
		self assertPageContains: 'New exam'.
	]
!

test06
	| inputs timer |
	timer := TestTimer new.
	OndafSimulator current timerProvider: timer.

	self dropTextWithTitle: 'Beispiel Text 1' contents: 'First text. Hello wor{ld}. This is an exam{ple}.'.
	
	self afterThat: [
		console log: '2'.
		self startExam.
		console log: '!!!!'.
		
		self completeExamWith: #('ld' 'wrong').
		
		timer forwardTime: (2 * 15) + 1.
		
		self assertPageContains: 'Ergebnis'.
	]
! !

GUITest subclass: #ResultViewTest
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

!ResultViewTest methodsFor: 'tests'!

test01ShowResultInfo
	(ResultView newIn: 'body') renderScore: 123 of: 456 percentage: 78.99 level: 'B1'.
	
	self assertPageContains: 'B1'.
	self assertPageContains: '123'.
	self assertPageContains: '78.99 %'.
	self assertPageContains: '456 Punkte'
! !

GUITest subclass: #TextCardTest
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

!TextCardTest methodsFor: 'tests'!

test01TheTitleIsShown
	TextCard newIn: 'body' title: 'a Title'.
	self assertPageContains: 'a Title'
! !

GUITest subclass: #TextFileDropTargetTest
	instanceVariableNames: 'droppedText fileDropper'
	package: 'OndafSimulator-Tests'!

!TextFileDropTargetTest methodsFor: 'running'!

setUp
	super setUp.
	fileDropper := FileDropper new
! !

!TextFileDropTargetTest methodsFor: 'tests'!

test01ReadsDroppedFile
	self timeout: 100.
	
	TextFileDropTarget
		newIn: 'body'
		handler: [ :txt | ctx execute: [ self assert: txt equals: 'texto archivo'. self finished ] ].
		
	fileDropper dropText: 'texto archivo' on: '.text-file-target'
!

test02CanDropMoreThanOneFile
	| expected |
	expected := #('texto archivo 1' 'texto archivo 2').
	self timeout: 100.
	
	TextFileDropTarget
		newIn: 'body'
		handler: [ :txt | ctx execute: [ expected remove: txt ifAbsent: [ self fail ]. expected ifEmpty: [ self finished ] ] ].

	fileDropper dropText: 'texto archivo 1' and: 'texto archivo 2' on: '.text-file-target'
! !

AsyncTest subclass: #TimerTest
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

!TimerTest methodsFor: 'tests'!

test01ExecuteAnActionPeriodically
	| timer1 timer2 count |
	self timeout: 150.
	
	count := 0.
	timer1 := Timer each: 50  do: [ count := count + 1 ].
	timer2 := Timer each: 110 do: [
		timer1 stop.
		timer2 stop.
		ctx execute: [ self assert: count equals: 2. self finished ]
	].
	
	timer1 start.
	timer2 start
!

test02ExecuteAnActionOneTime
	| timer1 timer2 count |
	self timeout: 150.
	
	count := 0.
	timer1 := Timer on: 50  do: [ count := count + 1 ].
	timer2 := Timer each: 110 do: [
		timer2 stop.
		ctx execute: [ self assert: count equals: 1. self finished ]
	].
	
	timer1 start.
	timer2 start
! !

Object subclass: #FileDropper
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

!FileDropper methodsFor: 'actions'!

dropFileEventWith: aFile
	^ self newObject
		at: 'type' put: 'drop';
		at: 'preventDefault' put: [];
		at: 'stopPropagation' put: [];
		at: 'originalEvent' put: (
			self newObject at: 'dataTransfer' put: (
				self newObject
					at: 'files' put: (
						self newObject
							at: 0 put: aFile;
							at: 'length' put: 1;
							yourself
					); yourself
			); yourself
		);
		jsObject.
!

dropFileEventWith: aFile and: anotherFile
	^ self newObject
		at: 'type' put: 'drop';
		at: 'preventDefault' put: [];
		at: 'stopPropagation' put: [];
		at: 'originalEvent' put: (
			self newObject at: 'dataTransfer' put: (
				self newObject
					at: 'files' put: (
						self newObject
							at: 0 put: aFile;
							at: 1 put: anotherFile;
							at: 'length' put: 2;
							yourself
					); yourself
			); yourself
		);
		jsObject.
!

dropText: aString and: anotherString on: aSelector
	| file1 file2 event |
	file1 := self textFileWith: aString.
	file2 := self textFileWith: anotherString.
	event := self dropFileEventWith: file1 and: file2.
	
	aSelector asJQuery trigger: event
!

dropText: aString on: aSelector
	| file event |
	file := self textFileWith: aString.
	event := self dropFileEventWith: file.
	
	aSelector asJQuery trigger: event
!

textFileWith: aString
	^ Blob newValue: (Array with: aString) value: #{'type' -> 'text/plain'}
! !

!FileDropper methodsFor: 'private'!

newObject
	^ JSON parse: '{}'
! !

Object subclass: #TestTimer
	instanceVariableNames: 'action'
	package: 'OndafSimulator-Tests'!

!TestTimer methodsFor: 'as yet unclassified'!

forwardTime: millis
	action value
!

initialize
	super initialize.
	action := []
!

on: milliseconds do: aBlock
	action := aBlock.
	^ self
!

start
!

stop
! !

Object subclass: #WidgetPreviews
	instanceVariableNames: ''
	package: 'OndafSimulator-Tests'!

!WidgetPreviews methodsFor: 'widgets'!

examTextView
	'body' asJQuery empty.
	
	(ExamTextView newIn: 'body' title: 'a Title' text: 2 of: 3)
		addText: 'Hello ';
		addWordToComplete: 'Wor';
		render;
		showSeconds: 99
!

header
	'body' asJQuery empty.
	
	Header new
		whenStartExam: [ window alert: 'start exam' ];
		appendToJQuery: 'body' asJQuery.
!

resultView
	'body' asJQuery empty.
	
	(ResultView newIn: 'body') renderScore: 123 of: 456 percentage: 78.99 level: 'B1'.
!

textCard
	'body' asJQuery empty.
		
	TextCard newIn: 'body' title: 'a Title'
!

textFileDropTarget
	'body' asJQuery empty.
		
	TextFileDropTarget
		newIn: 'body'
		handler: [ :txt | window alert: txt ].
	'.text-file-target' asJQuery
		css: 'height' put: '100px';
		css: 'border' put: '3px dashed gray';
		css: 'background' put: 'white'.
! !

