"use client";

import dynamic from "next/dynamic";

const MainFaqSection = dynamic(() => import("./MainFaqSection"), {
    ssr: false,
    loading: () => <div className="min-h-screen" />,
});

const Page = () => {
    return (
        <main>
            <MainFaqSection />
        </main>
    );
};

export default Page;