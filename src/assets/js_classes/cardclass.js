// create javascript class to export, it should contain a title, description, and image
export default class Card {
    constructor(title, description, pngFile, gifFile, sourceURL, buildURL) {
        this.title = title;
        this.description = description;
        this.pngFile = pngFile;
        this.gifFile = gifFile;
        this.sourceURL = sourceURL;
        this.buildURL = buildURL;
    }
}