#!/usr/bin/env node
import { Command } from 'commander';
import parse from './src/parsers.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const data1 = parse(filepath1);
    const data2 = parse(filepath2);
    console.log(data1, data2);
  });

program.parse();
