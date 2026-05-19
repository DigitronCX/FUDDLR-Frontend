'use client'

import { IconChevronUp } from '@tabler/icons-react'

const JumpToTop = () => {
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <button
            onClick={handleScrollTop}
            className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#00b67a] bg-white text-[#00b67a] shadow-md transition hover:bg-[#00b67a] hover:text-white cursor-pointer"
        >
            <IconChevronUp />
        </button>
    )
}

export default JumpToTop