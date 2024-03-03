export function mergeClasses(classes: string): string {
    // Basically use a hasmap to keep track of seen classes
    const seenClass: { [className: string]: boolean } = {};

    return classes
        .trim()
        .split(" ")
        .reverse()
        .filter(className => {
            if (seenClass[className]) {
                return false;
            }

            // Only return the class if it hasn't been seen before
            seenClass[className] = true;
            return true;
        })
        .join(" ");
}

console.log(
    mergeClasses(
        "text-neutral-900 px-2 border-0 font-medium bg-neutral-900 text-neutral-800"
    )
);

function splitModifiers(className: string) {
    const modifiers = [];

    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition = className.indexOf(":");

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

    const baseClassNameWithImportantModifier =
        className.substring(modifierStart);
    const hasImportantModifier =
        baseClassNameWithImportantModifier.startsWith("!");
    const baseClassName = hasImportantModifier
        ? baseClassNameWithImportantModifier.substring(1)
        : baseClassNameWithImportantModifier;

    const maybePostfixModifierPosition =
        postfixModifierPosition && postfixModifierPosition > modifierStart
            ? postfixModifierPosition - modifierStart
            : undefined;

    return {
        modifiers,
        hasImportantModifier,
        baseClassName,
        maybePostfixModifierPosition
    };
}

function getClassGroupId(className: string) {
    const classParts = className.split("-");

    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === "" && classParts.length !== 1) {
        classParts.shift();
    }

    return (
        getGroupRecursive(classParts, classMap) ||
        getGroupIdForArbitraryProperty(className)
    );
}

// console.log(splitModifiers("focus:hover:!text-neutral-900"));
// console.log(splitModifiers("lg:[&:nth-child(3)]:hover:underline"));
// console.log(splitModifiers("hover:w-2/12"));
// console.log(splitModifiers("[@media(any-hover:hover){&:hover}]:opacity-100"));
// console.log("wow".substring(0));
