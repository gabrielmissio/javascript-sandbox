const fs = require('fs').promises
const AWS = require('aws-sdk')

const storageClient = new AWS.S3({
    region: process.env.region || 'us-east-1'
})

const config = {
    path: process.env.ENDPOINT,
    projectName: process.env.PROJECT_NAME,
    bucketName: process.env.BUCKET_NAME
}

function getFileType(extension) {
    const configMap = {
        js: 'text/javascript',
        html: 'text/html',
        css: 'text/css',
    }

    const result = configMap[extension]
    return result
}

async function uploadFile(filename, fileContent) {
    const params = {
        Bucket: process.env.BUCKET_NAME,
        ContentType: getFileType(filename.split('.')[1]),
        Key: config.path ? `${config.path}/${filename}` : filename,
        Body: fileContent
    }

    const result = storageClient.upload(params).promise()
    return result
}

async function getFilesFromDirectory (directory, files) {
    if(!files) files = []
    let listOfFiles = await fs.readdir(directory)
    
    for(let i in listOfFiles) {
        let stat = await fs.stat(directory + '/' + listOfFiles[i])
        
        if(stat.isDirectory()) {
            await getFilesFromDirectory(directory + '/' + listOfFiles[i], files)
        } else {
            files.push(directory + '/' + listOfFiles[i])
        }
    }

    return files
}

async function deployHandler() {
    const projectFilesDirectories = await getFilesFromDirectory(`./src/${config.projectName}`)
    
    const result = await Promise.all(
        projectFilesDirectories.map(async (fileDirectory) => {
            const fileContent = await fs.readFile(fileDirectory)
            const fileName = fileDirectory.split(`/src/${config.projectName}/`)[1]

            const result = await uploadFile(fileName, fileContent)
            return result
        })
    )
 
    return result
}

deployHandler().then((data) => console.log(data))
