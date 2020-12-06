"use strict";

if(Utility == undefined)
{
	var Utility = {}
}
if(Utility.Game == undefined)
{
	Utility.Game = {}
}
if(Utility.Game.UiElements == undefined)
{
	Utility.Game.UiElements = {}
}

Utility.Game.UiElements.TextArea = class
{
	// gameTextAreaId = ""
	// gameTextAreaExists = false

	// x = 0
	// y = 0
	// width = 0
	// height = 0
	// fontSize = 0
	// text = ""

	// screens = []
	// visible = true
	// unused = false

	constructor(initGameTextAreaId, initX, initY, initWidth, initHeight, initFontSize, initMaxLength, initText, initScreens, initVisible)
	{
		if(initText == null) { initText = ""; }
		if(initScreens == null) { initScreens = []; }
		if(initVisible == null) { initVisible = true; }

		this.gameTextAreaId = initGameTextAreaId
		this.gameTextAreaExists = false

		this.x = initX
		this.y = initY
		this.width = initWidth
		this.height = initHeight
		this.fontSize = initFontSize
		this.maxLength = initMaxLength
		this.SetText(initText)

		this.screens = initScreens
		this.visible = initVisible
		this.unused = false
		
		this.eventTextChanged = new Utility.Event()
		this.lastText = this.text

	}

	GetText()
	{
		let value = ElementValue(this.gameTextAreaId)
		if(value != null)
		{
			this.text = value
		}
		return this.text
	}

	SetText(newText)
	{
		this.text = newText
		this.UpdateText()
	}

	UpdateText()
	{
		ElementValue(this.gameTextAreaId, this.text)
	}

	RegisterEventTextChanged(eventHandler)
	{
		return this.eventTextChanged.Register(eventHandler)
	}

	UnregisterEventTextChanged(eventId)
	{
		return this.eventTextChanged.Unregister(eventId)
	}

	RaiseEventTextChanged(newText)
	{
		this.eventTextChanged.Raise(newText)
	}

	RaiseEventTextChangedIfTextChanged()
	{
		let bufText = this.GetText()
		if(bufText != this.lastText)
		{
			this.lastText = bufText
			this.RaiseEventTextChanged(bufText)
		}
	}

	Show()
	{
		this.visible = true
	}

	Hide()
	{
		this.visible = false
	}

	MarkUnused()
	{
		this.unused = true
	}

}
