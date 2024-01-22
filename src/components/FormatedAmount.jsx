import React from 'react'

export default function FormatedAmount({ amount, className }) {
    const formatedAmount = new Number(amount).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2
    })
    return <div className={className}>{formatedAmount}</div>
}
