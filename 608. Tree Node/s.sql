with RootNode as (
    select id, "Root" as type 
    from Tree
    where p_id is null
),
LeafNodes as (
    select id, "Leaf" as type
    from Tree as t1
    where not exists (select * from Tree as t2 where t2.p_id = t1.id) and id not in (select id from RootNode)
),
InnerNodes as (
    select id, "Inner" as type
    from Tree
    where id not in (select id from RootNode union select id from LeafNodes)
)
select * from RootNode
union
select * from LeafNodes
union
select * from InnerNodes;
