"use strict";
// Native Modules
var fs = require('fs');
// Get the Target file (currently a cmd line arg
// but perhaps v1.0 could include ablity to read pkg.json configs)
var targetFile = process.argv[2];
// Check valid filename
if (!targetFile || targetFile.length === 0) {
    console.error('ERROR: This cli requires a file as an arg. Please pass the file containing your redux action types.\n');
    console.info('Example: \t\t`node ./build/anti-double-typer.js`\n');
    console.info('--OR, \t if you are in development using typescript\n');
    console.info('Example: \t\t`ts-node ./src/anti-double-typer.ts`');
    process.exit(1);
}
console.info("Checking for duplicate types inside " + targetFile);
// Read the File
var data;
try {
    // TODO: (research) - How big is "too big" and should be handled by a buffer instead?
    data = fs.readFileSync(targetFile, 'utf8');
}
catch (e) {
    console.log('ERRR', e.stack);
}
// Split file to Lines
var lines = data.split('\n');
var rightOfEquals = lines.map(function (line) {
    return line.split('=')[1];
});
// TODO: MVP Implentation. Research if using a hashmap/tallying process
// would be more efficient. This is probably ok for now. (can't imagine having)
// 1000's of actions... But TDB
var duplicates = [];
var actionCount = rightOfEquals.length;
var actionNames = rightOfEquals.map(function (item) {
    if (!item)
        return;
    var match = item.match(/'([^']+)'/);
    if (match !== null) {
        return (match[1]);
    }
});
// sort items inplace
actionNames.sort();
// Remove blanks/nulls
actionNames.filter(Boolean);
actionNames.forEach(function (actionName, index) {
    var _a, _b;
    if (!actionNames[index + 1])
        return; // Hit the last element.
    if (!actionNames[index])
        return;
    if (((_a = actionNames[index]) === null || _a === void 0 ? void 0 : _a.trim()) === ((_b = actionNames[index + 1]) === null || _b === void 0 ? void 0 : _b.trim())) {
        duplicates.push(actionName);
    }
});
if (duplicates.length > 0) {
    console.error('Error: DUPLICATE STRING TYPE(s): ' + duplicates);
    console.error('ERROR: duplicate string in the target redux actions file');
    process.exit(1);
}
console.log("INFO: Passed check, no duplicate string types in " + targetFile);
process.exit(0);
