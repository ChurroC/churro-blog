import { cookies } from "next/headers";

export async function getCookie<ValueType>(
    key: string,
    defaultValue: ValueType
): Promise<ValueType> {
    const cookie = cookies().get(key)?.value;
    console.log(cookie);

    return (cookie as ValueType) ?? defaultValue;
}
