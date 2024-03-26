class EidWishes {
    private static wishes: string[] = [
        "Eid Mubarak! May this Eid bring you happiness, prosperity, and peace.",
        "Wishing you and your family a blessed Eid filled with joy and laughter.",
        "On this auspicious occasion, may Allah bless you with love, kindness, and success. Eid Mubarak!",
        "Sending you warm wishes on Eid. May this day bring abundant joy and happiness to your life.",
        "Eid Mubarak! May Allah fulfill all your wishes and bless you with his divine grace.",
        "Wishing you a joyful Eid surrounded by your loved ones. Eid Mubarak!",
        "May the magic of this Eid bring lots of happiness in your life. Eid Mubarak!",
        "Eid Mubarak! May this Eid be a special one for you and your family, filled with blessings and peace.",
        "Warm wishes on Eid to you and your family. May this day bring endless blessings from Allah.",
        "Eid Mubarak! May the divine blessings of Allah fill your home and heart with the spirit of joy and open up newer opportunities for success."
    ];

    static getRandomWish(): string {
        const randomIndex = Math.floor(Math.random() * EidWishes.wishes.length);
        return EidWishes.wishes[randomIndex];
    }
}

// Example usage
console.log(EidWishes.getRandomWish());
