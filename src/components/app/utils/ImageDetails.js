
export const ImageDetails = {
    flagPath: "../assets/flags/",
    iconPath: "../assets/icons/",
    icons: [
        {
            name: "journey",
            image: "journey.png"
        }
    ],
    getImage: name => this.icons.find(icon => icon.name === name),
    getFullPathImage: name => this.iconPath + this.getImage(name)
};
