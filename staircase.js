addIngredient("staircase", {
    color:"8b6950",
    shape:"cuboid_stairs",
    keywords:"stairs",
    broken:"sawdust"
});

addIngredient("sawdust", {
    type:"powder",
    color:"8b6950",
    shape:"powder_rough",
    keywords:"wood",
    reactions:{
        water:{set1:"paper"}
    }
});

addIngredient("paper",{
    color: "#e3e9f2",
    stackShape:"rectangle_thinnest",
    adj:"writable",
    height:"0.2",
    shape: "rectangle_fold_top_right",
    reactions: {
        microplastic:{set1:"confetti"}
    }
});

addIngredient("confetti",{
    type:"powder",
    color:"#d93e48",
    innerColor:"#ef7d57",
    glow:"#ffe478",
    cookColor:"#a7f070",
    shape:"powder_wavy"
});
addRecipe("&stack:staircase+doll+soy_sauce","incident");

addRecipe("paper+sand","sandpaper");

addRecipe("&stack:paper+sawdust+cream","sawdust tortilla");

addRecipe("crab+confetti","crab rave")
})
