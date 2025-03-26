select 
    user_id as buyer_id,
    join_date,
    (select count(order_id)
        from Orders as o
        where year(o.order_date) = 2019 and o.buyer_id = u.user_id
    ) as orders_in_2019
from Users as u;