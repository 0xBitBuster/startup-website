import { notification1, notification2, notification3, notification4 } from "../assets";

const Notification = ({ className, title }) => {
    return (
        <div className={`${className || ""} flex items-center p-4 pr-6 bg-[#474060]/40 backdrop-blur border border-white/10 rounded-2xl gap-5`}>
            <img src={notification1} width={62} height={62} alt="" className="rounded-xl" />

            <div className="flex-1">
                <h6 className="mb-1 font-semibold text-base">{title}</h6>

                <div className="flex items-center justify-between">
                    <ul className="flex -m-0.5">
                        <li className="flex w-6 h-6 border-2 border-[#2E2A41] rounded-full overflow-hidden">
                            <img src={notification4} className="w-full" width={20} height={20} alt="" />
                        </li>
                        <li className="flex w-6 h-6 border-2 border-[#2E2A41] rounded-full overflow-hidden">
                            <img src={notification3} className="w-full" width={20} height={20} alt="" />
                        </li>
                        <li className="flex w-6 h-6 border-2 border-[#2E2A41] rounded-full overflow-hidden">
                            <img src={notification2} className="w-full" width={20} height={20} alt="" />
                        </li>
                    </ul>
                    <div className="body-2 text-[#6C7275]">1m ago</div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
