/*
	supportNeeded				0 - 100
	supportGiven				0 - 100
	recruitmentChance			0.0 - 1.0
	caughtChance				0.0	- 1.0
	isGlobalAction				boolean
	isUnlocked					boolean
*/

/*						Social Media			*/
function SocialMedia(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked)
{
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked;
}

SocialMedia.prototype.outcome = function()
{
	console.log("SocialMedia outcome");

	if( Math.random() < this.caughtChance )
	{
		gameOver();
		return;
	}

	if( Math.random() < this.recruitmentChance )
	{
		var recruit = new Recruit();

		bootbox.dialog({
  			message: "<img src=https://cdn3.iconfinder.com/data/icons/business-pack-3/512/12-512.png width=150 height=150>" + recruit.text,
  			title: "You received a message from " + recruit.name,
  			buttons:
  			{
    			no:
    			{
      				label: "no",
      			},
			    yes:
			    {
      				label: "yes",
      				callback: function()
      				{
      					console.log("yes");
        				player.recruits.push( recruit );
        				recruit.ability();
      				}
      			}
      		}
		});
	}
	

	// TO DO
}

/*						Graffiti			*/
function Graffiti(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked)
{
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked;
}

Graffiti.prototype.outcome = function()
{
	console.log("Graffiti outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}

/*						Speaking			*/
function Speaking(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked) 
{
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked;
}

Speaking.prototype.outcome = function()
{
	console.log("Speaking outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}

/*						Flyers			*/
function Flyers(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked) 
{
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked;
}

Flyers.prototype.outcome = function()
{
	console.log("Flyers outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}

/*						Demo			*/
function Demo(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked) 
{
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked;
}

Demo.prototype.outcome = function()
{
	console.log("Demo outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}

/*						Election			*/
function Election(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked) 
{
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked;
}

Election.prototype.outcome = function()
{
	console.log("Election outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}

/*						Newspapers			*/
function Newspapers(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked)
{
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked;
}

Newspapers.prototype.outcome = function()
{
	console.log("Newspapers outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}

/*						Hacking			*/
function Hacking(supportNeeded, supportGiven, recruitmentChance, caughtChance, isGlobalAction, isUnlocked) 
{
	this.supportNeeded = supportNeeded;
	this.supportGiven = supportGiven;
	this.recruitmentChance = recruitmentChance;
	this.caughtChance = caughtChance;
	this.isGlobalAction = isGlobalAction;
	this.isUnlocked = isUnlocked;
}

Hacking.prototype.outcome = function()
{
	console.log("Hacking outcome");

	Action.prototype.outcome.call(this);

	// TO DO
}	