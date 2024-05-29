export function checkIfFilesAreTooBig(files?: File | string): boolean {
    let valid = true;
    if (files && typeof files !== "string") {
        //   files.map(file => {
        // file size to mega byte
        const size = files.size / 1024 / 1024;
        if (size > 10) {
            valid = false;
        }
        //   })
    }
    return valid;
}

export function checkIfStringIsGreaterThan(
    number: string | number | undefined,
    greater: number
): boolean {
    if (Number(number) > greater) {
        return false;
    }
    return true;
}

// TODO: get file types from parameters maybe?
export function checkIfFilesAreImageType(files: File | string): boolean {
    let valid = true;
    if (files && typeof files !== "string") {
        if (!["image/gif", "image/jpeg", "image/png"].includes(files.type)) {
            valid = false;
        }
    }
    return valid;
}

export function checkIfFilesAreImagePdfType(files: File | string): boolean {
    let valid = true;
    if (files && typeof files !== "string") {
        if (
            ![
                "image/gif",
                "image/jpeg",
                "image/png",
                "application/pdf",
            ].includes(files.type)
        ) {
            valid = false;
        }
    }
    return valid;
}

export function verifyIranianNationalId_2(
    nationalId?: string | number | null
): boolean {
    if (!nationalId) return false;
    let code = nationalId.toString();
    const codeLength = code.length;

    if (codeLength < 8 || codeLength > 10) return false;
    code = ("00" + code).substring(codeLength + 2 - 10);
    if (+code.substring(3, 9) === 0) return false;

    const lastNumber = +code.substring(9);
    let sum = 0;

    for (let i = 0; i < 9; i++) {
        sum += +code.substring(i, i + 1) * (10 - i);
    }

    sum = sum % 11;

    console.log(
        (sum < 2 && lastNumber === sum) ||
            (sum >= 2 && lastNumber === 11 - sum),
        "heree"
    );
    return (
        (sum < 2 && lastNumber === sum) || (sum >= 2 && lastNumber === 11 - sum)
    );
}

export function verifyIranianNationalId(
    nationalId?: string | number | null
): boolean {
    if (!nationalId) return false;
    const national_code = nationalId.toString();
    if (!new RegExp("^\\d{10}$").test(national_code)) {
        console.log("1");
        return false;
    }

    if (
        national_code ===
        Array(national_code.length).fill(national_code[0]).join("")
    ) {
        console.log("2");

        return false;
    }

    const check = parseInt(national_code[9]);
    const partialNationalCodes = national_code.slice(0, 9).split("");
    const s =
        partialNationalCodes
            .map((el, i) => parseInt(el) * (10 - i))
            .reduce((a, b) => a + b, 0) % 11;
    return (s < 2 && check === s) || (s >= 2 && check + s === 11);
}

export function toEnDigit(s: any) {
    return s.replace(
        /[\u0660-\u0669\u06f0-\u06f9]/g, // Detect all Persian/Arabic Digit in range of their Unicode with a global RegEx character set
        function (a: any) {
            return a.charCodeAt(0) & 0xf;
        } // Remove the Unicode base(2) range that not match
    );
}
