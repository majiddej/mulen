interface tabItem {
    title: string;
    value: string;
    disabled?: boolean;
}

export default function CustomTab(props: {
    tabs: tabItem[];
    selectedTab: string;
    setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
    selectdContent: React.ReactNode;
}) {
    return (
        <div>
            <div className='flex items-center justify-evenly rounded p-1 bg-gray-5 gap-x-2 mb-8'>
                {props.tabs.map((tab) => (
                    <span
                        key={tab.value}
                        className={`w-full py-3 text-center text-blackText hover:bg-secondary hover:text-white
                        rounded-md ${props.selectedTab === tab.value && "bg-secondary text-white"} ${
                            tab.disabled
                                ? "cursor-not-allowed"
                                : "cursor-pointer"
                        }`}
                        onClick={
                            !tab.disabled
                                ? () => props.setSelectedTab(tab.value)
                                : () => console.log("disable")
                        }
                    >
                        {tab.title}
                    </span>
                ))}
            </div>
            {props.selectdContent}
        </div>
    );
}
