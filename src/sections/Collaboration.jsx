import { openai, check, curve1, curve2, discord, figma, framer, notion, photoshop, protopie, raindrop, slack } from "../assets";
import Button from "../components/Button";
import Section from "../components/Section";

const collabContent = [
    {
        title: "Seamless Integration",
        text: "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.",
    },
    { title: "Smart Automation" },
    { title: "Top-notch Security" },
];

const collabApps = [
    {
        title: "Figma",
        icon: figma,
        width: 26,
        height: 36,
    },
    {
        title: "Notion",
        icon: notion,
        width: 34,
        height: 36,
    },
    {
        title: "Discord",
        icon: discord,
        width: 36,
        height: 28,
    },
    {
        title: "Slack",
        icon: slack,
        width: 34,
        height: 35,
    },
    {
        title: "Photoshop",
        icon: photoshop,
        width: 34,
        height: 34,
    },
    {
        title: "Protopie",
        icon: protopie,
        width: 34,
        height: 34,
    },
    {
        title: "Framer",
        icon: framer,
        width: 26,
        height: 34,
    },
    {
        title: "Raindrop",
        icon: raindrop,
        width: 38,
        height: 32,
    },
];

const Collaboration = () => {
    return (
        <Section crosses>
            <div className="container lg:flex">
                <div className="max-w-[25rem]">
                    <h2 className="h2 mb-4 md:mb-8">AI Chat App for seamless collaboration</h2>

                    <ul className="max-w-[22rem] mb-10 md:mb-14">
                        {collabContent.map((item, i) => (
                            <li className="mb-3 py-3" key={i}>
                                <div className="flex items-center">
                                    <img src={check} width={24} height={24} alt="" />
                                    <h6 className="body-2 ml-5">{item.title}</h6>
                                </div>
                                {item.text && <p className="body-2 mt-3 text-n-4">{item.text}</p>}
                            </li>
                        ))}
                    </ul>

                    <Button>
                        Try it now
                    </Button>

                </div>

                <div className="lg:ml-auto xl:w-[38rem] mt-4">
                    <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.</p>

                    <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
                        <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                            <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                                    <img src={openai} width={48} height={48} alt="OpenAI" />
                                </div>
                            </div>
                        </div>

                        <ul>
                            {collabApps.map((app, index) => (
                                <li key={index} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
                                    <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-[#15131D] border border-white/15 rounded-xl -rotate-${index * 45}`}>
                                        <img className="m-auto" width={app.width} height={app.height} alt={app.title} src={app.icon} />
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
                            <img src={curve1} width={522} height={182} alt="" />
                        </div>
                        <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
                            <img src={curve2} width={162} height={76} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Collaboration;
