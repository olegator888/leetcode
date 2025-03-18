with PlayerFirstLogin as (
    select player_id, min(event_date) as first_login, count(player_id) over() as total_players from Activity group by player_id
)
select ifnull(round(count(a.player_id) / pfl.total_players, 2), 0) as fraction from PlayerFirstLogin as pfl
join Activity as a on a.player_id = pfl.player_id
where a.event_date = pfl.first_login + interval 1 day;