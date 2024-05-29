import { badgets } from "../../app/badgesTypes";

export default function Badge(props: {
    badgeType: string;
    badgeTitle: string;
}) {
    type BadgetKey = keyof typeof badgets

    return (
        <div
            className={`${badgets?.[props.badgeType as BadgetKey]?.bgColor}
            ${badgets?.[props.badgeType as BadgetKey]?.borderColor} rounded-[30px] px-2 py-1 w-24 text-xs
            border text-[#182233] line-clamp-1 mx-auto`}
        >
            {props.badgeTitle}
        </div>
    );
}
