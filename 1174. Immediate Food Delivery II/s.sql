WITH FirstOrders AS (
    SELECT 
        customer_id, 
        MIN(order_date) AS first_order_date
    FROM Delivery GROUP BY customer_id
),
ImmediateOrders AS (
    SELECT 
        d.customer_id,
        d.order_date,
        d.customer_pref_delivery_date 
    FROM Delivery d JOIN FirstOrders f ON d.customer_id = f.customer_id 
    AND d.order_date = f.first_order_date 
    WHERE d.order_date = d.customer_pref_delivery_date
)
SELECT ROUND(
            (select count(customer_id) from ImmediateOrders) * 100.0 / 
            (select count(customer_id) from FirstOrders), 
        2) AS immediate_percentage;