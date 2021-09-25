// Core Modules
const fs = require('fs')

// Get the Target file (currently a cmd line arg, later read pgk.json configs?)
const targetFile = process.argv[2]

// Check valid filename, exit eary with feedback if needed.
if(!targetFile || targetFile.length === 0) {
    console.error('ERROR: This cli requires a file as an arg. Please pass the file containing your redux action types.\n')
    console.info('Example: \t\t`node ./build/anti-double-typer.js`\n');
    console.info('--OR, \t if you are in development using typescript\n');
    console.info('Example: \t\t`ts-node ./src/anti-double-typer.ts`')
    process.exit(1);
}

console.info(`Checking for duplicate types inside ${targetFile}`)

// Read the File
let data;
try {
    // TODO: (research) - How big is "too big" and be handled by a buffer?
    data = fs.readFileSync(targetFile,'utf8');
} catch (e: any) {
    console.log('Error:', e.stack)
}

// Split file to Lines, based on the assumption 1 line == 1 type variable/string
const lines: string[] = data.split('\n')
const rightOfEquals = lines.map((line: string) => {
    return line.split('=')[1]
})

// TODO: Collect dups into an array. Research if using a hashmap/tallying process
// would be more efficient. This is probably ok for now. (can't imagine having
// 1000's of actions... But TDB)
let duplicates: string[] = [];
const actionNames = rightOfEquals.map((item: string)=>{
    if(!item) return;
    const match = item.match(/'([^']+)'/)
    if(match !== null){
        return(match[1])
    }
})

// sort items inplace
actionNames.sort();

// Remove blanks/nulls
actionNames.filter(Boolean);

actionNames.forEach((actionName: any, index: number) => {
    if(!actionNames[ index + 1 ]) return; // Hit the last element, end of checking
    if(!actionNames[index]) return;

    if(actionNames[index]?.trim() === actionNames[ index + 1]?.trim()){
        duplicates.push(actionName);
    }
})

if(duplicates.length > 0) {
    console.error('Error: DUPLICATE STRING TYPE(s): ' + duplicates)
    console.error('ERROR: duplicate string in the target redux actions file')
    process.exit(1);
}


console.log(`INFO: Passed check No duplicate string types in '${targetFile}'` );
process.exit(0);