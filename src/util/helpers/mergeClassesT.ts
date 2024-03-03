// function splitModifiers(className: string) {
//     const modifiers = [];

//     let bracketDepth = 0;
//     let modifierStart = 0;
//     let postfixModifierPosition = className.indexOf(":");

//     for (let index = 0; index < className.length; index++) {
//         let currentCharacter = className[index];

//         if (bracketDepth === 0) {
//             if (currentCharacter === ":") {
//                 modifiers.push(className.slice(modifierStart, index));
//                 modifierStart = index + ":".length;
//                 continue;
//             }
//         }

//         // Have to add this to not count example like hover:[mask-type:alpha]
//         if (currentCharacter === "[") {
//             bracketDepth++;
//         } else if (currentCharacter === "]") {
//             bracketDepth--;
//         }
//     }

//     const baseClassNameWithImportantModifier =
//         className.substring(modifierStart);
//     const hasImportantModifier =
//         baseClassNameWithImportantModifier.startsWith("!");
//     const baseClassName = hasImportantModifier
//         ? baseClassNameWithImportantModifier.substring(1)
//         : baseClassNameWithImportantModifier;

//     const maybePostfixModifierPosition =
//         postfixModifierPosition && postfixModifierPosition > modifierStart
//             ? postfixModifierPosition - modifierStart
//             : undefined;

//     return {
//         modifiers,
//         hasImportantModifier,
//         baseClassName,
//         maybePostfixModifierPosition
//     };
// }

function splitModifiers(className: string) {
    const modifiers = [];

    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition: number | undefined;

    for (let index = 0; index < className.length; index++) {
        let currentCharacter = className[index];

        if (bracketDepth === 0) {
            if (currentCharacter === ":") {
                modifiers.push(className.slice(modifierStart, index));
                modifierStart = index + ":".length;
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
console.log(splitModifiers("focus:hover:!text-neutral-900"));
console.log(splitModifiers("lg:[&:nth-child(3)]:hover:underline"));
console.log(splitModifiers("hover:w-2/12"));
console.log(splitModifiers("[@media(any-hover:hover){&:hover}]:opacity-100"));
