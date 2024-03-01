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

const IMPORTANT_MODIFIER = "!";
const separator = "-";
const isSeparatorSingleCharacter = separator.length === 1;
const firstSeparatorCharacter = separator[0];
const separatorLength = separator.length;
function splitModifiers(className: string) {
    const modifiers = [];

    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition: number | undefined;

    for (let index = 0; index < className.length; index++) {
        let currentCharacter = className[index];

        if (bracketDepth === 0) {
            if (
                currentCharacter === firstSeparatorCharacter &&
                (isSeparatorSingleCharacter ||
                    className.slice(index, index + separatorLength) ===
                        separator)
            ) {
                modifiers.push(className.slice(modifierStart, index));
                modifierStart = index + separatorLength;
                continue;
            }

            if (currentCharacter === "/") {
                postfixModifierPosition = index;
                continue;
            }
        }

        if (currentCharacter === "[") {
            bracketDepth++;
        } else if (currentCharacter === "]") {
            bracketDepth--;
        }
    }

    const baseClassNameWithImportantModifier =
        modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier =
        baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
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

console.log(splitModifiers("!text-neutral-900"));
