// If it has a important modifier, it will be kept and I will count as different className since css priority will override it
export function mergeClasses(classes: string): string {
    // Basically use a hasmap to keep track of seen classes
    const seenClass: { [className: string]: boolean } = {};

    return classes
        .trim()
        .split(" ")
        .reverse()
        .filter(className => {
            // this is right to left so only the first class on right will be kept
            const sortedClassName = classNameSorted(className);

            if (seenClass[sortedClassName]) {
                return false;
            }

            // Only return the class if it hasn't been seen before
            seenClass[sortedClassName] = true;
            return true;
        })
        .reverse()
        .join(" ");
}

function classNameSorted(className: string): string {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;

    for (let index = 0; index < className.length; index++) {
        let currentCharacter = className[index];

        if (bracketDepth === 0) {
            if (currentCharacter === ":") {
                modifiers.push(className.slice(modifierStart, index));
                modifierStart = index + ":".length;
                continue;
            }
        }

        // Have to add this to not count example like hover:[mask-type:alpha]
        if (currentCharacter === "[") {
            bracketDepth++;
        } else if (currentCharacter === "]") {
            bracketDepth--;
        }
    }
    const sortedModifiers = sortModifiers(modifiers).join(":");

    // Added important modifier last since if there is a negative in the classPart[0] it'll be weird
    const classWithoutModifiers = className.substring(modifierStart);
    const hasImportantModifier = classWithoutModifiers.startsWith("!");

    const baseClassName = hasImportantModifier
        ? classWithoutModifiers.substring(1)
        : classWithoutModifiers;
    const classParts = baseClassName.split("-");
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === "" && classParts.length !== 1) {
        classParts.shift();
    }
    const classNameId = classParts[0]!;

    return `${sortedModifiers}:${classNameId}${hasImportantModifier ? "!" : ""}`;
}

function sortModifiers(modifiers: string[]) {
    if (modifiers.length <= 1) {
        return modifiers;
    }

    const sortedModifiers: string[] = [];
    let unsortedModifiers: string[] = [];

    modifiers.forEach(modifier => {
        // Like lg:[&:nth-child(3)]:hover:underline
        const isArbitraryVariant = modifier[0] === "[";

        // Go through every modifier in array and keep adding to unsorttedModifiers until we find an arbitrary variant when we'll push the sorted
        // then we'll keep going till another arbitrary variant is found or later where we sort and do a final push to sortedModifiers
        if (isArbitraryVariant) {
            sortedModifiers.push(...unsortedModifiers.sort(), modifier);
            unsortedModifiers = [];
        } else {
            unsortedModifiers.push(modifier);
        }
    });

    sortedModifiers.push(...unsortedModifiers.sort());

    return sortedModifiers;
}

console.log(mergeClasses);
