import Breadcrumb from "./Breadcrumb";

export default function PageHeading(props: {
    breadcrumbPages: string[];
    pageHeading: string;
}) {
    return (
        <div className='flex flex-col gap-y-2'>
            <Breadcrumb pages={props.breadcrumbPages} />
            <h2 className='text-[#0B698B] text-lg font-medium'>
                {props.pageHeading}
            </h2>
        </div>
    );
}
