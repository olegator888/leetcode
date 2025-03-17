with DepartmentMaxSalary as (
    select d.id, d.name, max(e.salary) as max_salary
    from Employee as e
    join Department as d on e.departmentId = d.id
    group by d.id
)
select d.name as Department, e.name as Employee, e.salary as Salary
from Employee as e 
join DepartmentMaxSalary as d on e.departmentId = d.id
where e.salary = d.max_salary;