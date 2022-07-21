db.produtos.updateMany({
  ingredientes: {
    $in: ["cebola"],
  },
}, {
  $pull: {
    ingredientes: "cebola",
  },
});

db.produtos.find({}, {
  _id: false,
  nome: true,
  ingredientes: true,
});