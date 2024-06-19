ServerEvents.recipes(e => {
    remove_recipes_id(e, [
        "create:mixing/chocolate",
        "create:compacting/chocolate"
    ])
    // 肉酱配方修改
    e.recipes.create.mixing(
        Fluid.of("ratatouille:mince_meat", 250),
        [
            '#forge:meat/raw',
            'ratatouille:salt',
            'butchercraft:fat'
        ]
    )
    .id("create:mixing/mince_meat")
})
