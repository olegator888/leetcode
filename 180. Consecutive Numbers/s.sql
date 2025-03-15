-- total sam :)
select distinct Logs.num as ConsecutiveNums from Logs
join Logs as Logs2 on Logs.num = Logs2.num
join Logs as Logs3 on Logs.num = Logs3.num
where Logs.id = (Logs2.id + 1) and Logs.id = (Logs3.id - 1)