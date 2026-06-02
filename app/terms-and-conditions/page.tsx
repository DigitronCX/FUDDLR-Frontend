"use client";
const TncData = [
    {
        heading: "Pricing",
        points: [
            "Prices displayed on the Site and/or App in currencies other than Australian dollars are estimates only. You will be charged in Australian dollars.",
            "Dollar amounts specified in these T&Cs are in Australian dollars.",
            "Goods and Services Tax (GST) of 10% may apply to orders that include GST and are delivered within Australia.",
            "GST will not apply to orders delivered outside Australia.",
            "Prices displayed on the Site and/or App do not include customs duties, taxes levied outside Australia, clearance or handling charges, shipping costs, or any other fees and charges associated with your order. These costs must be paid by you. For information about duties and taxes in your jurisdiction, contact the relevant authorities directly.",
            "To comply with Australian export requirements, the exact value of all ordered items must be declared and marked as dutiable merchandise. Orders cannot be marked as a gift, even if intended for a gift recipient.",
            "Pricing is subject to change without prior notice.",
            "FUDDLR does not provide retrospective price adjustments for items purchased before a sale, deal, or promotional period, or for items purchased during a sale or promotion where the price is later reduced further.",
            "FUDDLR does not offer price matching with other retailers."
        ]
    },
    {
        heading: "Orders",
        points: [
            "All orders submitted through the Site or/and the App are sub ject to acceptance by FUDDLR.",
            "Once you submit your order, you will receive an e mail to confirm receipt of your order. This e mail confirmation does not constitute an acceptance of the order or an offer to sell any item(s). FUDDLR reserves the right to:",
            "a) refuse an order for any reason; and/or",
            "b) correct inadvertent errors, omissions, or inaccuracies on the Site or the App in relation to price, item availability or item descriptions.",
            "c) acceptance of all orders is subject to FUDDLR confirming availability and price for any item(s) ordered. If your order is rejected for any reason, you will be given a full refund for any amount paid for the order.",
            "FUDDLR only accepts your offer and concludes the contract of sale for the item(s) ordered by you when we despatch the item(s) and send you an e mail confirming that the item(s) have been despatched to your nominated shipping address.",
            "FUDDLR may cancel your order (including orders accepted by FUDDLR) without any liability to you if any of the products in your order are unavailable, or there were any errors in price or item description on the Site at the time of placing your order, or due to technical errors in processing your order. If we cancel your order for any reason, you will be given a full refund for any amount paid for the order.",
        ]
    },
    {
        heading: "User Account",
        points: [
            "If you sign up for a user account on the Site or/and the App (User Account), you:",
            "must keep your username and password confidential and secure; and",
            "accept all liability for any unauthorised use of your User Account, including any username or password.",
            "When signing up for a user account, you must provide accurate, complete and up to date information as requested during the sign up process. It is your responsibility to inform FUDDLR’ of any changes to that information. You may do this at any time by updating your details via your user account.",
        ]
    },
    {
        heading: "Intellectual Property Rights",
        points: [
            "All copyright in data, te xt, software, images, graphics, trademarks, logos, interfaces, photographs, and other intellectual property on the Site (Content) is owned by, or licensed to, FUDDLR. Except for viewing the Content for your own personal non commercial use or as otherwise agreed in writing, FUDDLR does not grant you any rights to use the Site, the App, or Content for any other purpose.",
            "All registered or unregistered trademarks used on the Site or/and the App belong to their respective owners.",
        ]
    },
    {
        heading: "Use of The Site or/And The App",
        points: [
            "Access or attempt to access any part of the Site or/and the App which is not designated for access by your password (where applicable);",
            "Except as permitted under clause 4(a), by any means copy, reproduce, republish, adapt, upload, link, post, frame, translate, transmit or distribute any part of the Site, the App or any Content;",
            "Use the Site, the App or any Content in any way that is unlawful or breaches the rights of FUDDLR or any third party;",
            "Post, or transmit to the Site or/and the App any abusive, obscene, threatening, defamatory, illegal or otherwise inappropriate material;",
            "Do anything that imposes an unreasonable or disproportionate workload on the Site, on the App or interferes or disrupts the Site, the App or any network or other website connected to the Site or/and to the App;",
            "Breach the security of the Site and/or the App, test or scan the vulnerability of the Site and/or the App, or make any unauthorised modifications to the Site and/or the App;",
            "Interfere with any other person’s use or enjoyment of the Site and/or the App;",
            "Use any robot, spider, scraping device, deep link, or any other automatic tool or algorithm, or any manual process that performs the same function, to copy or use any content or any part of the content on the Site and/or, or to reproduce or separately store or use such content;",
            "Post or transmit any materials to the Site and which breach any laws relating to a person’s right to privacy or the export of personal data;",
            "Post or transmit any materials to the Site and on the App that are incorrect or misleading or",
            "Use the Site and the App in any way that otherwise breaches these T&Cs.",
            "FUDDLR may refuse you access to the Site or edit or delete material posted by you in contravention of these T&Cs.",
            "MARKETING",
            "FUDDLR customers can use one specific promo code for one order:",
            "All promo, specials, deals, and discounts work for total carton prices without any fee and shipping prices;",
            "FUDDLR Distributors can change the period of promo, deals, offers, and discounts;",
            "All promo, deals, offers, and discounts can work for all FUDDLR sales channels, such as the website, APP or Rep’s work if it was mentioned in the promo description Or (and) only in one of the Sales FUDDLR channels.",
        ]
    },
]
const page = () => {
    return (
        <main className='min-h-screen py-8 sm:py-16 px-4 sm:px-14 text-secondary'>
            <section className='flex flex-col items-start justify-start mb-10'>
                <h1 className='font-youngSerif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-secondary font-bold'>Terms & Conditions</h1>
            </section>
            {TncData.map((item, index) => (
                <section className='flex flex-col items-start justify-start mb-5 sm:mb-10' key={index}>
                    <h2 className='font-youngSerif text-2xl sm:text-3xl md:text-5xl text-secondary font-bold'>{item.heading}</h2>
                    <ul className='space-y-2 list-disc mt-2 sm:mt-5'>
                        {item.points.map((item, index) => (
                            <li key={index} className=' ml-5'>
                                <p className='font-light text-xs sm:text-lg'>{item}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}

            <section className='flex flex-col items-start justify-start mb-5 sm:mb-10'>
                <h2 className='font-youngSerif text-2xl sm:text-3xl md:text-5xl text-secondary font-bold'>Packaging Condition Disclaimer</h2>
                <div className='space-y-2 list-disc mt-2 sm:mt-5 font-light text-xs sm:text-lg'>
                    <p>
                        We take great care in packaging your order to ensure it arrives safely. However, if the packaging is damaged upon delivery, but the product itself remains in good condition, no refund will be issued.We advise that you inspect your order immediately upon receipt. If the product is undamaged, we consider the sale final, and no refunds will be provided for any issues with the packaging. In the event the product is damaged or defective, please contact us right away for assistance with a return or exchange, as outlined in our Returns Policy.By completing your purchase, you agree to this policy and understand that no refunds will be given for packaging damage if the product is unaffected.
                    </p>
                </div>
            </section>

            <section className='flex flex-col items-start justify-start mb-5 sm:mb-10'>
                <h2 className='font-youngSerif text-2xl sm:text-3xl md:text-5xl text-secondary font-bold'>Change of Mind Disclaimer</h2>
                <div className='space-y-2 list-disc mt-2 sm:mt-5 font-light text-xs sm:text-lg'>
                    <p>
                        We want you to be completely satisfied with your purchase. However, please note that we do not accept returns or offer refunds for change of mind. We encourage you to carefully review your order before finalizing your purchase.
                    </p>
                    <p>
                        If you receive a defective, damaged, or incorrect item, please contact us immediately so we can assist you with a return or exchange. All returns or
                        exchanges must be processed according to our Returns Policy, which outlines the conditions and time frames for returns.
                    </p>
                    <p>
                        By purchasing from our site, you acknowledge that you understand and accept our No Change of Mind policy.
                    </p>
                </div>
            </section>

            <section className='flex flex-col items-start justify-start mb-5 sm:mb-10'>
                <h2 className='font-youngSerif text-2xl sm:text-3xl md:text-5xl text-secondary font-bold'>Important Notice</h2>
                <div className='space-y-2 list-disc mt-2 sm:mt-5 font-light text-xs sm:text-lg'>
                    <p>
                        We reserve the right to decline new orders from you if there are repeated issues with previous transactions, such as payment problems, order
                        cancellations, or abuse of our policies.
                    </p>
                </div>
            </section>
            <section className='flex flex-col items-start justify-start mb-5 sm:mb-10'>

                <h2 className='font-youngSerif text-2xl sm:text-3xl md:text-5xl text-secondary font-bold'>
                    Contact Us
                </h2>

                <div className="mt-2 sm:mt-5 font-light text-xs sm:text-lg">
                    Check out our SHIPPING & DELIVERY, RETURNS & REPLACEMENTS, PRIVACY &
                    SECURITY, and FAQ page as well.
                </div>

                <div className="mt-2 sm:mt-5 font-semibold text-xs sm:text-lg">
                    <p>FUDDLR Distributors PTY LTD</p>
                    <p>215 Jackson Road</p>
                    <p>Sunnybank Hills, 4109 (QLD)</p>
                    <p>Australia</p>
                    <p>Telephone: 0416 165 987</p>
                    <p>Email: FUDDLR@outlook.com</p>
                </div>
            </section>
        </main>
    )
}

export default page