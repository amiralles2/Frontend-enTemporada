export interface MenuFooter {
    ruta: string;
    imgcardL: string;
    imgcardR: string;
    headL: string;
    headR: string;
    textL: string;
    textR: string;
    stickerL: string;
    stickerM: string;
    stickerR: string;
}

export const MenuFooter: MenuFooter[] = [
    {
        ruta: "/", imgcardL: "../../../assets/IMG/imagenes footer/calendario.png", headL: "Calendario", textL: "Ver cuando todas las frutas y verduras están en temporada", stickerL: "../../../assets/IMG/En Temporada (IES FSL)/Stickers/Sunny Yellow Oval.png",
        imgcardR: "../../../assets/IMG/imagenes footer/aboutus.png", headR: "Sobre el proyecto", textR: "¿Qué es En Temporada y por qué hacemos esto?", stickerR: "../../../assets/IMG/En Temporada (IES FSL)/Stickers/Real White.png",
        stickerM: "../../../assets/IMG/En Temporada (IES FSL)/Stickers/Flavor Leaf.png"
    },
    {
        ruta: "/aboutus", imgcardL: "../../../assets/IMG/imagenes footer/temporada.png", headL: "Ahora en temporada", textL: "Ver cuando todas las frutas y verduras están en temporada este mes", stickerL: "../../../assets/IMG/En Temporada (IES FSL)/Stickers/Sunny Yellow Oval.png",
        imgcardR: "../../../assets/IMG/imagenes footer/calendario.png", headR: "Calendario", textR: "Ver cuando todas las frutas y verduras están en temporada este mes", stickerR: "../../../assets/IMG/En Temporada (IES FSL)/Stickers/Real White.png",
        stickerM: "../../../assets/IMG/En Temporada (IES FSL)/Stickers/Flavor Leaf.png"
    },
    {
        ruta: "/calendario", imgcardL: "../../../assets/IMG/imagenes footer/temporada.png", headL: "Ahora en temporada", textL: "Ver cuando todas las frutas y verduras están en temporada este mes", stickerL: "../../../assets/IMG/En Temporada (IES FSL)/Stickers/Blue Banana.png",
        imgcardR: "../../../assets/IMG/imagenes footer/aboutus.png", headR: "Sobre el proyecto", textR: "¿Qué es En Temporada y por qué hacemos esto?", stickerR: "../../../assets/IMG/En Temporada (IES FSL)/Stickers/Dark Blue Oval.png",
        stickerM: "../../../assets/IMG/En Temporada (IES FSL)/Stickers/Watermelon.png"
    }
];
