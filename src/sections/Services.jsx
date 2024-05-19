import Section from "../components/Section";
import Heading from "../components/Heading";
import { service1, service2, service3, check, openaiWhiteSymbol, gradient, play, loading, recording03, recording01, disc02, chromecast, sliders04 } from "../assets";
import ChatBubbleWing from "../assets/svg/ChatBubbleWing"

const openaiServicesIcons = [recording03, recording01, disc02, chromecast, sliders04];

const Services = () => {
    return (
        <Section id="how-to-use">
            <div className="container">
                <Heading title="Generative AI made for creators." text="OpenAI unlocks the potential of AI-powered applications" />

                <div className="relative">
                    <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-white/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                        <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                            <img className="w-full h-full object-cover md:object-right" width={800} alt="" height={730} src={service1} />
                        </div>

                        <div className="relative z-1 max-w-[17rem] ml-auto">
                            <h4 className="h4 mb-4">Smartest AI</h4>
                            <p className="body-2 mb-[3rem] text-n-3">OpenAI unlocks the potential of AI-powered applications</p>
                            <ul className="body-2">
                                <li className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} />
                                    <p className="ml-4">Photo generating</p>
                                </li>
                                <li className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} />
                                    <p className="ml-4">Photo enhance</p>
                                </li>
                                <li className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} />
                                    <p className="ml-4">Seamless Integration</p>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] absolute left-4 right-4 bottom-4 border-white/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2 text-base">
                            <img className="w-5 h-5 mr-4" src={loading} alt="" />
                            AI is generating
                        </div>
                    </div>

                    <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                        <div className="relative min-h-[39rem] border border-white/10 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <img src={service2} className="h-full w-full object-cover" width={630} height={750} alt="" />
                            </div>

                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                                <h4 className="h4 mb-4">Photo editing</h4>
                                <p className="body-2 mb-[3rem] text-n-3">Automatically enhance your photos using our AI app&apos;s photo editing feature. Try it now!</p>
                            </div>

                            <div className="absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]">
                                Hey OpenAI, enhance this photo
                                <ChatBubbleWing className="absolute left-full bottom-0" />
                            </div>
                        </div>

                        <div className="p-4 bg-[#15131D] rounded-3xl overflow-hidden lg:min-h-[46rem]">
                            <div className="py-12 px-4 xl:px-8">
                                <h4 className="h4 mb-4">Video generation</h4>
                                <p className="body-2 mb-[2rem] text-n-3">The world’s most powerful AI photo and video art generation engine. What will you create?</p>

                                <ul className="flex items-center justify-between">
                                    {openaiServicesIcons.map((item, index) => (
                                        <li key={index} className={`rounded-2xl flex items-center justify-center ${index === 2 ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]" : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"}`}>
                                            <div className={index === 2 ? "flex items-center justify-center w-full h-full bg-[#15131D] rounded-[1rem]" : ""}>
                                                <img src={item} width={24} height={24} alt="" />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                                <img src={service3} className="w-full h-full object-cover" width={520} height={400} alt="" />

                                <div className="absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem]">
                                    Video generated!
                                    <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-color-1 rounded-[0.75rem]">
                                        <img src={openaiWhiteSymbol} width={26} height={26} alt="OpenAI" />
                                    </div>
                                    <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">just now</p>
                                    <ChatBubbleWing className="absolute right-full bottom-0 -scale-x-100" pathClassName="fill-n-6" />
                                </div>
                                <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
                                    <img src={play} width={24} height={24} alt="" className="object-contain mr-3" />

                                    <div className="flex-1 bg-[#D9D9D9]">
                                        <div className="w-1/2 h-0.5 bg-color-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
                        <img className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2" src={gradient} width={1417} height={1417} alt="" />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Services;
