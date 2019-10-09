# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
```SQL
SELECT p.ProductName, c.CategoryName 
FROM Products as p 
LEFT JOIN Categories as c
ON p.CategoryID = c.CategoryID
```

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
```SQL
SELECT o.OrderID, s.ShipperName, o.OrderDate
FROM Orders as o INNER JOIN Shippers as s 
ON o.ShipperID = s.ShipperID
WHERE o.OrderDate < #1/9/1997#
```
### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
```SQL
SELECT o.Quantity, p.ProductName 
FROM OrderDetails as o
INNER JOIN Products as p
on o.ProductID = p.ProductID
WHERE o.OrderID = 10251
ORDER BY p.ProductNAME 
```

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
```SQL
SELECT o.OrderID, c.CustomerName, e.LastName
FROM Orders o, Customers c, Employees e
WHERE o.CustomerID = c.CustomerID and o.EmployeeID = e.EmployeeID
```
### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 