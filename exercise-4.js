// db.pizzaOrders.find({
//     $and: [
//         {
//             credit_card_type: "mastercard",
//         },
//         { quantity: { $lt: 5 } },
//     ],
// });

// db.pizzaOrders.find({ $and: [{ size: "small" }, { quantity: { $gte: 1 } }, { quantity: { $lte: 5 } }] });

// db.pizzaOrders.find({$and: [{quantity : {$gte:10}},{credit_card_type : null}]})
