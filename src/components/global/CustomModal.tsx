export default function CustomModal(props: {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    modalContent: React.ReactNode;
    modalHeading?: React.ReactNode;
}) {
    return (
        <>
            <section
                className={`${!props.openModal && "hidden"} absolute z-20 h-dvh w-dvw top-[25%] start-[30%]`}
            >
                <div className='w-[50%] h-[50%] bg-white shadow-customModal rounded-lg z-20 p-8 flex flex-col'>
                    {props.modalHeading}
                    <hr />
                    {props.modalContent}
                </div>
            </section>
            <div
                className={`${!props.openModal && "hidden"} fixed inset-x-0 inset-y-0 size-full
                bg-gray-primary z-10 opacity-50`}
            ></div>
        </>
    );
}
