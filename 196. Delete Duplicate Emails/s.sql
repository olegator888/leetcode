delete from Person
where id not in (
    select id from (
        select min(id) as id from Person group by email
    ) as a 
)