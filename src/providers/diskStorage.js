const path = require('path')
const uploadConfig = require('../config/upload')
const fs = require('fs')

class DiskStorage{
    async SaveFile(file){
        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER, file),
            path.resolve(uploadConfig.UPLOAD_FOLDER, file)
        )

        return file
    }

    async DeleteFile(file){
        const filePath = path.resolve(uploadConfig.TMP_FOLDER, file)

        try {
            await fs.promises.stat(filePath)
        } catch {
            return
        }

        await fs.promises.unlink(filePath)
    }
}

module.exports = DiskStorage