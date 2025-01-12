```javascript
//Corrected aggregation pipeline
db.collection('myCollection').aggregate([
  {$match: { /*some condition*/ } },
  {$group: {_id: '$field', count: {$sum: 1} }},
  {$sort: {count: -1}},
  {$limit: 10}
]);
```