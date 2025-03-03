select name from customers c
left join orders o on c.id = o.customerId 
where customerId is null;