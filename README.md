# Chess board app

This is chess board application which played on empty chess board of configuration 8 x 8 and chess piece types are pawn, king and queen. This is javascript application which can be triggered using command line as mentioned in below steps.

# Prerequisites

1. Git installed on your system. It can be downloaded from https://git-scm.com/downloads
5. Latest node version installed on system and then fire commands like node -v and npm -v to make sure node is installed properly and able to execute javascript file.

# Installation Steps

1. Go to your terminal and do git clone of this repository by executing command "git clone https://github.com/NiteshBagle123/chess-board-app.git" to clone this repository
2. Move to the root of the cloned repository in your system and do npm install.
3. Once npm install is done successfully you can see node_modules folder in your root of the project.
4. We are ready to consume application by running index.js file which is start of the project as mentioned in subsequent steps.
5. Open terminal and fire command - node index.js pawn A1 which will shown output in terminal as A2
6. Fire command - node index.js king D5 which will show output in terminal as C4,C5,C6,D4,D6,E4,E5,E6
7. Fire command - node index.js queen E5 which will show output in terminal as A5,B5,C5,D5,F5,G5,H5,E1,E2,E3,E4,E6,E7,E8,B8,C7,D6,F4,G3,H2,A1,B2,C3,D4,F6,G7,H8
8. You can also refer chess-1-.pdf present in the repository for more details on the application.

# Unit test cases

1. Unit test cases helps to test unit of code in isolation to make sure all logic working as expected with all scenarios as per mock data.
2. For running unit test cases we need to fire command - npm run test from terminal in root of the project.
3. Once command executed it will show coverage report along with details what all test cases passed/failed.
4. Currently test cases of this app is 100% along with function, branch, line and statements.
5. We can also see coverage report in browser for which we need to open coverage folder (this will generated/updated when npm run test command fired from terminal).
6. Open lcov-report folder inside coverage folder.
7. Now open index.html file in browser.
8. You can navigate to look for each file test cases with all details.
9. This is visual representation of what we get on terminal while running npm run test command for jest test cases.