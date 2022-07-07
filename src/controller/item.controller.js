const express = require('express');
const router = express.Router();

const itemMaster = require("../models/item.model");
const useCart = require("../models/usecart.model");

router.post("/items", async (req, res) => {
    try {
        const additem = await itemMaster.create(req.body);
        return res.status(200).send(additem);
    } catch (error) {
        return res.status(500).send(error.message);
    }
});


router.post("/order", async (req, res) => {
    try{
        const Code = await itemMaster.findOne({ code:req.body.code});
        console.log(Code);
        console.log(Code.price);

        if (!Code)
        return res
          .status(400)
          .send({ message: "item not found" });

         var unitPrice = Code.price;
         var totalAmt = req.body.qty * unitPrice

        const Cart = await useCart.create(req.body,{$isNew:true})
        const data = {...Cart,unitPrice,totalAmt}
        
        return res.status(200).send(data);

    }catch (error) {
        return res.status(500).send(error.message);
    }
});



router.get("/order/summarize", async (req, res) => {

    try {
        const cartSum = await useCart.find().lean().exec();
        
        return res.status(200).send(cartSum);

    } catch (error) {
        return res.status(500).send(error.message);
    }

});

module.exports = router