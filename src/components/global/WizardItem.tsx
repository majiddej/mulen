import Image from "next/image";
import polygon from "@/public/assets/images/icons/Polygon 3.svg";
import checkIcon from "@/public/assets/images/icons/check.svg";
import { wizardItem } from "../../../types/user-management";

export default function WizardItem(props:wizardItem) {
    return (
        <div
            className={`flex gap-x-3 justify-start items-center border-y border-e h-9 w-[20%]
            ${props.active ? "border-secondary text-primaryy" : "border-gray-secondry/50 text-gray-primary/50 "} relative rounded`}
        >
            <div
                className={`rounded-full size-9 ${props.active?"border-primaryy":"border-gray-primary/50"}  border-2 flex justify-center items-center
                    absolute start-[-1rem]`}
            >
               {props.active ? 
                    (props.done ? 
                        <div className="rounded-full bg-primaryy size-9 flex justify-center items-center">
                            <Image src={checkIcon} alt="check-icon"/>
                        </div> 
                            :<div className="rounded-full bg-primaryy size-4"></div>
                     ) :<div className="text-gray-primary/50">2</div>}

                
    
            </div>
            <div className=' text-xs font-medium m-auto'>
                {props.wizardTitle}
            </div>
            {props.active && (
                <Image
                    src={polygon}
                    alt='polygon'
                    className='absolute start-[98%]'
                />
            )}
        </div>
    );
}
