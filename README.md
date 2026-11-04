# biome-plugin-suitescript example

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/nemchik/biome-plugin-suitescript-example)
[![CI](https://img.shields.io/github/actions/workflow/status/nemchik/biome-plugin-suitescript-example/ci.yml?branch=main&label=CI)](https://github.com/nemchik/biome-plugin-suitescript-example/actions/workflows/ci.yml)

A small SDF-shaped project that shows [biome-plugin-suitescript](https://github.com/nemchik/biome-plugin-suitescript) catching problems in SuiteScript 2.1. Open it in Codespaces, or click **Use this template** to start your own project from it.

## What is in it

`src/FileCabinet/SuiteScripts/` has the same four scripts twice:

| Script | `bad/` shows | `good/` shows |
| --- | --- | --- |
| `loadInLoop.js` | `record.load` for each id in a loop (`noRecordInLoop`) | `record.submitFields`, no load |
| `concatenatedSuiteQL.js` | request input concatenated into SuiteQL (`noDynamicSuiteQL`) | a `?` placeholder with `params` |
| `hardcodedSecret.js` | an API key in source (`noHardcodedSecrets`, opt-in) | the key read from a script parameter |
| `legacyApi.js` | `nlapi*` and `getFieldValue` (`noSuiteScript1Api`) | N/ modules, reading the record being saved |

## Try it

```sh
npm ci
npm run lint         # reports the problems in bad/, none in good/
npm run check-tags   # the tag checker: @NApiVersion and @NScriptType
npm run verify       # what CI runs: good/ is clean and bad/ still trips each rule
```

## How it is configured

- [`biome.json`](biome.json) extends `biome-plugin-suitescript/configs/all` and adds `noHardcodedSecrets` on top, because that rule guesses from names and is in no preset.
- [`biome-plugin-suitescript.json`](biome-plugin-suitescript.json) lists the files the tag checker reads. It needs an explicit list.
- [`renovate.json`](renovate.json) keeps `biome-plugin-suitescript` and Biome current, and CI runs weekly, so a plugin release that changes what these scripts report shows up here first.

The plugin's [rules table](https://github.com/nemchik/biome-plugin-suitescript#rules) lists every rule and which preset enables it.

MIT licensed.
