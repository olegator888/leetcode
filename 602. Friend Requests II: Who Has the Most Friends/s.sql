with all_ids as (
    select requester_id as id from RequestAccepted
    union all
    select accepter_id as id from RequestAccepted 
)
select id, count(id) as num
from all_ids
group by id
order by num desc
limit 1;