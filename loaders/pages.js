const fs = require('file-system');
const path = require('path');

const PAGES_DIR = '../html/websites/';

const pages = fs.readdirSync(path.join(__dirname, PAGES_DIR)).map((file) => {
    return {
        page: file,
        css: resolveDir(path.join(__dirname, PAGES_DIR + file + '/css')),
        images: resolveDir(path.join(__dirname, PAGES_DIR + file + '/images')),
        javascript: resolveDir(path.join(__dirname, PAGES_DIR + file + '/javascript')),
        subpages: resolveDir(path.join(__dirname, PAGES_DIR + file + '/subpages')),
        pageData: require(path.join(__dirname, PAGES_DIR + file + '/pageData.json'))
    }
});

function resolveDir(dir) {
    let data = []
    fs.readdirSync(dir).forEach((file) => {
        let path2 = dir + '/' + file
        let pathToFile = path2.replace(path.join(__dirname, PAGES_DIR), '')
        pathToFile = pathToFile.split('\\')[1]
        if (fs.lstatSync(path2).isDirectory()) {
            data = data.concat(resolveDir(path2))
        } else {
            data.push(pathToFile)
        }
    })

    return data
}

console.log(pages)