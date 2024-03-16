function TransactionsButton() {
    return (
        <div className="verticalCenter transactionBlock" >
            <h2>New transaction</h2>
            <table className="transactionTable" >
                <tr className="tableTitle" >
                    <td>
                        Customers
                    </td>
                    <td>
                        Purchase
                    </td>
                    <td>
                        Employee
                    </td>
                    <td>
                        Other
                    </td>
                </tr>

                <tr>
                    <td>
                     <a href="#">Invoice</a>
                    </td>

                    <td>
                        <a href="#" >
                            Material
                        </a>
                    </td>

                    <td>
                        <a>
                            Salary
                        </a> 
                    </td>

                    <td>
                        <a>
                            Bank services    
                        </a> 
                    </td>
                </tr>

                <tr>
                    <td>
                        <a href="#">
                            Sales Receip
                        </a>
                    </td>
                    <td>
                        
                    </td>
                    <td>
                        
                    </td>
                    <td>
                        
                    </td>
                </tr>
            </table>

        </div>
    )
}

export default TransactionsButton