with Duplicate2015 as (
    select tiv_2015 from Insurance group by tiv_2015 having count(*) > 1
),
UniqueLocation as (
    select lat, lon from Insurance group by lat, lon having count(*) = 1
)
select round(sum(tiv_2016), 2) from Insurance
where tiv_2015 in (select tiv_2015 from Duplicate2015)
and (lat, lon) in (select lat, lon from UniqueLocation);