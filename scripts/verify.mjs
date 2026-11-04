// Keeps the example honest: good/ must lint clean and bad/ must still trip the rules it demonstrates.
// CI runs this, so a plugin release that changes what these scripts report shows up here first.
import { spawnSync } from "node:child_process";

const lint = (dir) =>
  spawnSync(
    process.execPath,
    [
      "node_modules/@biomejs/biome/bin/biome",
      "lint",
      `src/FileCabinet/SuiteScripts/${dir}`,
    ],
    { encoding: "utf8" },
  );

const expected = [
  ["noRecordInLoop", "record.load() inside a loop"],
  ["noDynamicSuiteQL", "not string concatenation"],
  ["noHardcodedSecrets", "Do not hard-code 'apiKey'"],
  ["noSuiteScript1Api", "is SuiteScript 1.0"],
];

let failed = false;

const good = lint("good");
if (good.status !== 0) {
  console.error(`good/ should lint clean:\n${good.stdout}${good.stderr}`);
  failed = true;
}

const bad = lint("bad");
const output = bad.stdout + bad.stderr;
for (const [rule, message] of expected) {
  if (!output.includes(message)) {
    console.error(`bad/ no longer triggers ${rule} (looked for "${message}")`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log("good/ is clean and bad/ still trips every demonstrated rule.");
