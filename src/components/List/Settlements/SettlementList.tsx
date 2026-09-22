import type { Settlement } from "../../../types/Settlement";

interface SettlementListProps {
    settlements: Settlement[];
}

function SettlementList({settlements}: SettlementListProps){
    return (
        <ul>
            {settlements.map((settlement, index) => (
                <li key={index}>
                    {settlement.from} owes {settlement.to} {settlement.amount} zł
                </li>
            ))}
        </ul>
    )
}

export default SettlementList;