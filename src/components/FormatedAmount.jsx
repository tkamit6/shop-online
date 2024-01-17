import React from 'react'

export default function FormatedAmount({ amount }) {
    const formatedAmount = new Number(amount).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2
    })
    return <div>{formatedAmount}</div>
}
