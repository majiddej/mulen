export default function CustomLabel(props: {
    name: string;
    label: string;
    requiredField: boolean;
}) {
    return (
        <>
            {props.label && (
                <label htmlFor={props.name}>
                    {props.label}{" "}
                    {props.requiredField && (
                        <span className='required text-[#ba0000]'>*</span>
                    )}
                </label>
            )}
        </>
    );
}
