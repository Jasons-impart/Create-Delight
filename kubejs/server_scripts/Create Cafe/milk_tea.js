ServerEvents.recipes(e => {
    // 搅拌合成：葡萄奶茶
    e.recipes.create.mixing(
        [Fluid.of("createcafe:grape_tea", 1000)],
        ["#vinery:red_grape", "#vinery:white_grape", Fluid.of("minecraft:milk", 500), Fluid.of("createcafe:melted_sugar", 500)]
    ).id("createcafe.kjs:grape_tea").heated()
})
