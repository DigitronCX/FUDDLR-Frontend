'use client'

import { IconBrandWhatsapp, IconChevronUp } from '@tabler/icons-react'

const JumpToTop = () => {
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <section>

            <button
                onClick={handleScrollTop}
                className="fixed bottom-22 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#00b67a] bg-white text-[#00b67a] shadow-md transition hover:bg-[#00b67a] hover:text-white cursor-pointer"
            >
                <IconChevronUp />
            </button>
            <a
                href="https://wa.me/0416165987"
                className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#00b67a] bg-white text-[#00b67a] shadow-md transition hover:bg-[#00b67a] hover:text-white cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with FUDDLR on WhatsApp"
                aria-label="Chat with FUDDLR on WhatsApp"
            >
                <IconBrandWhatsapp />
            </a>
        </section>
    )
}

export default JumpToTop