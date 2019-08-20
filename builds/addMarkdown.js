const fs = require('fs')
const findMarkdown = require('./findMarkdown')
const rootDir = './post'

findMarkdown(rootDir, writeComponents)

function writeComponents(dir) {
  fs.appendFile(dir, `\n \n <comment/> \n `, (err) => {
    if (err) throw err
    console.log(`add components to ${dir}`)
  })
}