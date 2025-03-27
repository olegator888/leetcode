select p.product_id, coalesce(latest.new_price, 10) as price
from (select distinct product_id from Products) p
left join Products latest 
on p.product_id = latest.product_id
and latest.change_date = (
    select max(change_date) from Products
    where product_id = p.product_id
    and change_date <= '2019-08-16'
);