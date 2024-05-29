import Image from "next/image";
import noData from "@/public/assets/images/no-data.svg";
export interface HeaderItem {
    columnName: string;
    accessor?: string;
    id: number;
    component?: React.ReactNode;
    headingStyle?: string;
}
export interface MySimpleTableProps {
    headers: Array<HeaderItem>;
    data: any;
}
export default function CustomTable({ headers, data }: MySimpleTableProps) {
    const tableTh = headers.map((header: HeaderItem) => (
        <th className="pb-1" key={header.id}>
            <div  className={`${header.headingStyle ? header.headingStyle : "bg-[#F2F3F7] text-gray-primary text-xs font-normal rounded inline-flex p-3"}`}>
                {Object.prototype.hasOwnProperty.call(header, "component")
                    ? header.component
                    : header.columnName}
            </div>
        </th>
    ));
    const emptyRow = () => (
        <tr>
            <td colSpan={headers.length}>
                <Image
                    src={noData}
                    alt='no-data'
                    className='mx-auto py-5'
                    width={200}
                    height={190}
                />
            </td>
        </tr>
    );
    const render = () => {
        if (!data.length) return emptyRow();
        return data.map((item: any, idx: number) => (
            <tr key={idx} className="border-b border-gray-5">{printTd(item)}</tr>
        ));
    };
    const printTd = (item: any) =>
        headers.map((header: HeaderItem, idx: number) => (
            <td className="py-3 text-center" key={idx}>{printVal(item, header)}</td>
        ));
    const printVal = (item: any, header: any) => {
        // if (Object.prototype.hasOwnProperty.call(header, "component")) {
        //     return header.component(item);
        // }
        return item[header.accessor];
    };
    return (
        <div className='overflow-x-auto'>
            <table className='w-full shadow-table '>
                <thead className='border-b border-[#8E8E8E]'>
                    <tr>{tableTh}</tr>
                </thead>
                <tbody className='text-xs text-[#6B7280]'>
                    {!data?.length ? emptyRow() : render()}
                </tbody>
                {/* TO Do */}
                {/* pagination in table */}
                {/* {props?.tableFooter && (
                    <tfoot>
                        <tr>
                            <td>{props?.tableFooter}</td>
                        </tr>
                    </tfoot>
                )} */}
            </table>
        </div>
    );
}