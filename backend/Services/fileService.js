const { v4: uuidv4 } = require("uuid");
const path = require("path");

class FileService {
  saveFile(file) {
    try {
      const fileName = uuidv4() + ".jpg";
      const filePath = path.resolve("static", fileName);
      file.picture.mv(filePath);
      return fileName;
    } catch (e) {
      console.log(e);
    }
  }
}

const fileService = new FileService();

module.exports = fileService;
