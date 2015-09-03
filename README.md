## Notes on the project
Course material of the PluralSight course: Practical TypeScript Migration
of Steve Ognibene (http://www.pluralsight.com/courses/typescript-practical-migration)

Link to TypeScript playground: http://www.typescriptlang.org/Playground

#### Once per machine, do the following:
- Install Node.js from nodejs.org
- Install Git and make sure it's in your path
- Run npm install -g grunt-cli
- Run npm install -g tsd

#### Once per repository, do the following:
- Clone the source
- Open the Node.js command prompt and navigate 
  to the same folder as package.json (in this case solution root folder)
- Run npm install, eventueel with --msvs_version=2013 (or 2015)
- If necessary, switch to the same folder as tsd.json (in this case to the project folder)
- Run tsd reinstall -so

To build and run unit tests, run grunt