with ProductFirstYear as (
    select product_id, min(year) as first_year from Sales
    group by product_id
)
select s.product_id, first_year, quantity, price
from Sales as s join ProductFirstYear as p on s.product_id = p.product_id
where s.year = p.first_year;