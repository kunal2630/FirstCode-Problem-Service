# FirstCode Problem Setting Service

## Why MongoDB Used Instead of a Relational DB

* We generally use relational databases when we want to set up relations between data so that joins, transactions, and other features of relational databases can be utilized. However, in this case, each problem's data will have no relation with other problem's data. Therefore, using a relational database here would entail unnecessary work that can be avoided. Instead, we can use a non-relational database here.

### MongoDB is used for the following reasons:
- Every problem will have different test cases.
- Test cases will be very large strings and hence will consume more memory.
- There is no need to maintain multiple tables, hence no specific use case for SQL.
- We can have unstructured data, as some problems can have hints, some may not, and some may have company tags, while others may not. *

