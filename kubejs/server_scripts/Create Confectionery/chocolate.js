ServerEvents.recipes(e => {
    // 巧克力
    e.recipes.create.mixing(
        Fluid.of("create:chocolate", 250),
        [
            'ratatouille:cocoa_solids',
            'ratatouille:cocoa_butter',
            Fluid.of("minecraft:milk", 250),
            "minecraft:sugar"
        ]
    )
    .heated()
    .id("create:mixing/chocolate")
    // 黑巧
    e.recipes.create.mixing(
        Fluid.of("create_confectionery:black_chocolate", 250),
        [
            'ratatouille:cocoa_solids',
            'ratatouille:cocoa_butter',
            Fluid.of("minecraft:milk", 250)
        ]
    )
    .heated()
    .id("create_confectionery:black_chocolate_recipe")
    // 白巧
    e.recipes.create.mixing(
        Fluid.of("create_confectionery:white_chocolate", 250),
        [
            'ratatouille:cocoa_butter',
            Fluid.of("minecraft:milk", 250),
            "minecraft:sugar"
        ]
    )
    .heated()
    .id("create_confectionery:white_chocolate_recipe")
    // 红宝石巧克力
    e.recipes.create.mixing(
        [
            Fluid.of("create_confectionery:ruby_chocolate", 250),
            "minecraft:glass_bottle"
        ],
        [
            'ratatouille:cocoa_solids',
            'ratatouille:cocoa_butter',
            "minecraft:dragon_breath",
            "minecraft:sugar"
        ]
    )
    .heated()
    .id("create_confectionery:ruby_chocolate_recipe")
    // 热巧克力
    e.recipes.create.mixing(
        Fluid.of("create_confectionery:hot_chocolate", 250),
        [
            Fluid.of("minecraft:milk", 250),
            "minecraft:sugar",
            "create:bar_of_chocolate"
        ]
    )
    .heated()
    .id("create_confectionery:hot_chocolate_recipe")
})