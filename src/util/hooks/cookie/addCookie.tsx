import { getCookies } from "@/util/helpers/cookies/getCookies";
import { propsToChildren } from "@/util/helpers/propsToChildren";

export async function AddCookies<ValueType>({
    children,
    cookieKey,
    defaultValue
}: {
    children: React.ReactNode;
    cookieKey: string;
    defaultValue: ValueType;
}) {
    const cookie = await getCookies<ValueType>(cookieKey, defaultValue);

    return propsToChildren(children, { cookie: cookie });
}
