#!/usr/bin/env node
import { Command } from 'commander'
import parse from './src/parsers.js'
import diffGenerator from './src/diffGenerator.js'
import format from './src/formatters/index.js'

const program = new Command()

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    const data1 = parse(filepath1)
    const data2 = parse(filepath2)
    const diff = diffGenerator(data1, data2)
    const formatter = format(options.format)
    console.log(formatter(diff))
  })

program.parse()

export function run(args = process.argv) {
  program.parse(args)
}
