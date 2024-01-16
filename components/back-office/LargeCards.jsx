import React from 'react'
import LargeCard from './LargeCard'

export default function LargeCards() {

    const orderStats = [
        {
            title: "Today Orders",
            sales: "12,000",
            textColor: "text-emerald-600",
            bgColor: "bg-emerald-600/15",
        },
        {
            title: "Yesterday Orders",
            sales: "12,000",
            textColor: "text-red-600",
            bgColor: "bg-red-600/15",
        },
        {
            title: "This Month",
            sales: "12,000",
            textColor: "text-yellow-600",
            bgColor: "bg-yellow-600/15",
        },
        {
            title: "Last Month",
            sales: "12,000",
            textColor: "text-blue-600",
            bgColor: "bg-blue-600/15",
        },
        {
            title: "All Time",
            sales: "12,000",
            textColor: "text-orange-600",
            bgColor: "bg-orange-600/15",
        },
    ]

    return (
        <div className="my-5 grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5">
            {
                orderStats.map((item, i) => {
                    return (
                        <LargeCard key={i} data={item} className="myborder" />
                    )
                })
            }
        </div>
    )
}
