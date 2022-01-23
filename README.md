Daily Counter:

A counter that allocates predefined tokens daily which can be used for tracking and controlling our usage/behaviour. 

For example, If you want to game only for 30 minutes a day, you can give yourself 30 tokens everyday and accumulate the tokens and use it all on a weekend.

Accumulating must have a cost, otherwise we would end up over accumulating and spending all at once. So maybe you can have a tax for overaccumulation.

This app is just a PWA for the above task. For maintaining multiple counters like that.

Hosted at [https://harish1996.github.io/Daily_Counter](https://harish1996.github.io/Daily_Counter) 

To do List:
- [ ] Try a WYSIWIG editor for html
- [x] Wrote the entire service worker
- [x] Create manifest
- [x] Create local version of the app and try to run it locally
- [x] Update the github repository and host the app there
- [x] Install the app in the mobile succesfully and try it offline
- ## Functionalities
	- [ ] Remove the template numbers and add feature to add and remove counters
		- [ ] Add the create facility
			- [ ] Use storage APIs to store the values locally
		- [ ] Add edit capability
		- [ ] Add Delete capability
	- [ ] Iterate the daily update procedures
		- [ ] Update daily changes through a popup with a seperate menu item
		- [ ] Add separate menu item for daily updates
	- [ ] Add the functionality to save current updates
	- [ ] Add the Update day feature which updates the changes for the day
		- [ ] Find a way to keep track of the changes
		- [ ] Update day should move the changes for the day, regardless of the time of the day
		- [ ] Update day should update the last updated time and should somehow display it somewhere.
* ## Future Features
	* [ ] Tracking the values in a database
	* [ ] Generate reports/ plots based on the historical values.
	* [ ] Complete redesign of the UI, by picking colors and buttons which dont suck. Refer [Tweet](https://twitter.com/codewithhajra/status/1484823717427429376)
	* [ ] 