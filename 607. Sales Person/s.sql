select name from SalesPerson where sales_id not in (
    select sp.sales_id from SalesPerson as sp
    join Orders as o on sp.sales_id = o.sales_id
    join Company as c on c.com_id = o.com_id
    where c.name = 'Red'
);