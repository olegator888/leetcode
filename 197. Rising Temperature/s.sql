select id
from (
    select id, recordDate, temperature,
        LAG(temperature) over (order by recordDate) as prev_temp
    from Weather
) temp
where temperature > prev_temp;