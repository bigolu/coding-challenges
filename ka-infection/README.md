# ka-infection
A program which simulates the release of software updates to a user base in stages.

##Setting up the Project
1. Clone this repository

2. In your terminal, go into the 'Testing' directory.

3. Compile both Driver.java and Infection.java
	* run ' javac Driver.java '
	* run ' javac Infection.java '
	* run ' java Driver '

##How it works
1. Once the user runs the driver, they will be prompted to enter the name of the file containing the user base. 
	* The txt file must have the format of:
		* number of people in graph
		* names of people in graph
		* coach relationships (if Joe coaches Tim then you only need to add 'Joe|Tim' and not 'Tim|Joe'
	* A few have been provided so you can just enter 'input1.txt', 'input2.txt', 'input3.txt', or 'input4.txt'

2. The user then has three choices:
	* Total Infection
		* given then name of a specific user and the name of the version to be updated to, the entire subgraph containing that user will be updated to the new version.
		* Upon completion, the entire graph will be printed along with the number of users which have been given the newest version
	* Limited Infection
		* given a number of users to be given the new update, a percentage of error allowed on the number of users to be updated, and the version to be updated to, the algorithm will attempt to find a subgraph containg a number of users within the error bound and update them
		* If you give the 0 as the error bound then the algorithm will attempt to update that exact amount of users, though this is often times not possible
	* Exit
		* End the simulation

