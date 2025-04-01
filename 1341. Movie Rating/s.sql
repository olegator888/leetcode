(
    select u.name as results 
    from Users u
    join MovieRating mr on u.user_id = mr.user_id
    group by u.user_id
    order by count(*) desc, u.name
    limit 1
)
union all
(
    select m.title 
    from Movies m
    join MovieRating mr on m.movie_id = mr.movie_id
    where month(mr.created_at) = 2 and year(mr.created_at) = 2020
    group by m.title
    order by avg(mr.rating) desc, m.title
    limit 1
);
