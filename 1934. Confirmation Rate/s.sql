select 
    s.user_id, 
    COALESCE(round(sum(c.action = 'confirmed') / count(c.action), 2), 0) as confirmation_rate
from Signups s left join Confirmations c on s.user_id = c.user_id
group by user_id;